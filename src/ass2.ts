
interface detail {
 full_name :string ,
 isEducate: boolean,
 graduation_year:number
}

const myDetail : detail= {
 full_name : "Arjun singh",
 isEducate:true,
 graduation_year:2020

}

interface information {
  first_name: string,
  last_name: string,
}

const name_obj :information = {
 first_name :'Arjun',
 last_name:"Singh"
}

const getname =({first_name,last_name}):string=>{

 return  `${first_name} ${last_name}`

}

console.log(getname(name_obj))


interface address {
 house_number : number,
 street : number,
 city:string,
 state:string,
 postal_code:number,
 country:string
}
// add appropriate_types ?

interface personalDetail{
 phone_numbers : [],
 addresses : [],
 email:string,
 first_name:string,
 last_name:string,
}

const contact_details :personalDetail={
 phone_numbers:number[]=[9582350455,8979506709],
 addresses:string[]=["delhi","uttrakhand"],
 email:"arjun@gmail.com",
 first_name:"arjun",
 last_name:"bhakuni"

}

const PhoneBook =()=>{

}

//