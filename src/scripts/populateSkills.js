//get total hours of all skills based on all experience
//use graphPct for bar, but display actual pct of total skill as well in div


function popSkills(){
    var exp = JSON.parse(fetch('../data/experience.json'));
    var skills = JSON.parse(fetch('../data/skills.json'));
    console.log(exp); 
    console.log(skills);
}
export default popSkills;