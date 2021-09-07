var faker=require('faker')
var ss={}
for(let i=0;i<10;i++){
    var name=faker.name.findName()
    var email=faker.internet.email()
    ss.name=name
    ss.email=email
    var following=[]
    for(let i=0;i<8;i++){
    var f_name=faker.name.findName()
        following.push(f_name)
    }
    ss.following=following
    var followers=[]
    for(let i=0;i<8;i++){
    var f_name=faker.name.findName()
        followers.push(f_name)
    }
    ss.followers=following
    var we=[]
    for(let i=0;i<8;i++){
    var f_name=faker.company.companyName()
        we.push(f_name)
    }
    ss.we=we
    
}
console.log(JSON.stringify(ss,indent=4))