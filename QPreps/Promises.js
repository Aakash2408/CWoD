function getLastNames(firstName, people) {
    let last_names= new Promise((resolve,reject)=>{
        names=[]
        for(var i=0;i<people.length;i++)
        {
            let p=people[i];
            if(firstName===p['firstName'])
            {
                names.push(people[i]['lastName']);
            }
        }
        if(names.length!==0)
        {
            names.sort();
            resolve(names);
        }
        else
        {
            reject("Invalid");
        }
    })
    return last_names;
}
module.exports = getLastNames;
