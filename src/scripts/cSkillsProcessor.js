//get total hours of all skills based on all experience
//use graphPct for bar, but display actual pct of total skill as well in div
import Experience from "../data/cExperience";

function getSkills(){
    let skills={};
    let totalSkillTime=0;
    let skillList=[];
    let workList=[];
    let totalProjectTime=0;

    console.log(Experience.certificates);

    Experience.certificates.forEach(cert=>{
        //create cert block for skills
        let certData={
            "id":cert.id,
            "source":cert.source,
            "title":cert.title,
            "url":cert.url
        };
        //get list of skills
        //calc distinct skills
        totalSkillTime+=cert.hours;
        let skillTime=(cert.hours*(cert.distinctSkillPct/100))/cert.distinctSkills.length;
        skillList=updateSkills(skillList, certData, cert.distinctSkills, 'certificates', skillTime);
        if(cert.concurrentSkills.length>0){
            skillTime=((100-cert.distinctSillPct)/100)*cert.hours;
            skillList=updateSkills(skillList, certData, cert.concurrentSkills, 'certificates', skillTime);
        }
    });
    Experience.projects.forEach(proj=>{
        let projData={
            "id":proj.id,
            "title": proj.title,
            "desc":proj.desc,
            "type":proj.type,
            "workid":proj.workid,
            "completed":proj.completed,
            "repo":proj.repo,
            
        };
        totalSkillTime+=proj.hours;
        totalProjectTime+=proj.hours;
        const skillTime=proj.hours/proj.skills.length;
        skillList=updateSkills(skillList, projData, proj.skills, 'projects', skillTime);
        if(proj.workid>0){
            const workIndex=workList.findIndex(elem=>{
                return elem.id===projData.workid;
            });
            if(workIndex>-1){
                workList[workIndex].projectHours+=proj.hours;
            }else{
                workList.push({
                    "id":proj.workid,
                    "projectHours":proj.hours
                });
            }
        }
    });
    Experience.work.forEach(work=>{
        if(work.distinctSkills.length>0||work.concurrentSkills.length>0){
            let workData={
                "id":work.id,
                "company":work.company,
                "title":work.title,
                "start":work.start,
                "end":work.end
            };
            let dateParse=work.start.split('-');
            const dateStart=new Date(dateParse[0],dateParse[1]-1, dateParse[2]);
            dateParse=work.end.split('-');
            const dateEnd=new Date(dateParse[0],dateParse[1]-1, dateParse[2]);
            const timeDiff=dateEnd.getTime()-dateStart.getTime();
            const dayDiff=timeDiff/(1000*3600*24);
            const workHours=dayDiff*5/7*8;

            let workTime;
            const workIndex=workList.findIndex(elem=>{
                return elem.id===work.id;
            });
            if(workIndex>-1){
                workTime=workHours-workList[workIndex].projectHours;
            }else{
                workTime=workHours;
            }
            totalSkillTime+=workTime;
            if(work.distinctSkills.length>0){
                const skillTime=(workTime*(work.distinctSkillPct/100))/work.distinctSkills.length;
                skillList=updateSkills(skillList, workData, work.distinctSkills, 'work', skillTime);
            }
            if(work.concurrentSkills.length>0){
                const skillTime=((100-work.distinctSkillPct)/100)*workTime;
                skillList=updateSkills(skillList, workData, work.concurrentSkills, 'work', skillTime);            
            }
        }

    });
    skillList.sort((a,b)=>b.hours-a.hours);
    let maxSkillTime=skillList[0].hours;
    skillList.forEach(skill=>{
        skill.dispPct=skill.hours/maxSkillTime*100;
        skill.skillPct=skill.hours/totalSkillTime*100;
    });
    skills.highlights=[];
    skills.highlights.push({'id':1,'lg':totalProjectTime,'sm1':'Project', 'sm2':'Hours'});
    skills.highlights.push({'id':2,'lg':Experience.projects.length,'sm1':'Projects', 'sm2':'Completed'});
    skills.highlights.push({'id':3,'lg':skillList.length,'sm1':'Distinct', 'sm2':'Skills'});
    skills.highlights.push({'id':4,'lg':(new Date()).getFullYear()-2015,'sm1':'Professional', 'sm2':'Programming Years'});
    
    //highlights
        //project hours
        //distinct skills
        //years of experience
        //projects completed
    console.log(skillList);
    console.log(workList);
    skills.skillList=skillList;
    return skills;
}
function updateSkills(skillList=[], sourceBlock, skillBlock, sourceType, skillTime){
    if(skillBlock.length>0){
        skillBlock.forEach(skill=>{
            const skillIndex=skillList.findIndex(elem=>{
                return elem.name===skill;
            });
            if(skillIndex>-1){
                skillList[skillIndex].hours+=skillTime;
                skillList[skillIndex][sourceType].push(sourceBlock);
            }else{
                let dataBlock={
                    "name":skill,
                    "hours":skillTime,
                    "certificates":[],
                    "work":[],
                    "projects":[],
                    "courses":[]
                };
                dataBlock[sourceType].push(sourceBlock);
                skillList.push(dataBlock);
            }
        });
    }
}

export default getSkills;