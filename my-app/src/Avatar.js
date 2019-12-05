import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';



    //making use of state
class Avatar extends Component
{
    
     render()
     {
                    //defining array in reactjs 
                const avatarlistarray =[
                    {
                id: 1,
                name: "pratibha",
                work: "web developer",

                    },
            {
                id: 2,
                name: "vinod",
                work: "web developer",

                }
                ,
            {
                id: 3,
                name: "Hari",
                work: "Android developer",

                }
                ,
                {
                id: 4,
                name: "Poja",
                work: "Python developer",

                }



            ]
            //array=>map =>filter for removing hardcode codes
            //Map(callback(currentval,index,array)arg)
            const arrayavatarcard =  avatarlistarray.map( (avatarcard,i) =>{
            return    <Avatarlist id={avatarlistarray[i].name}
                                name={avatarlistarray[i].name} 
                                work= {avatarlistarray[i].work}/>
            })

        return (
            <div class="mainpage">
            <h1> WELCOME TO AVTAR WORLD</h1>
            {arrayavatarcard}
         
         {/* this is hardcodes array for 4 values so we use array map to remove hardcodes */}
         {/*     
          <Avatarlist id="1" name={avatarlistarray[0].name} 
                               work= {avatarlistarray[0].work}/>
            <Avatarlist id="2" name={avatarlistarray[1].name} 
                               work= {avatarlistarray[1].work}/>
            <Avatarlist id="3"  name={avatarlistarray[2].name} 
                               work= {avatarlistarray[2].work}/>
            <Avatarlist id="4"  name={avatarlistarray[3].name} 
                               work= {avatarlistarray[3].work}/>  */}
            <button>subscribe</button>
            </div>
              )  
     }

}
   

  
   


export default Avatar;