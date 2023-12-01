import React from "react";
import { useState } from "react";

function GoalForm(props){
    const [formData, setFormData] = React.useState({goal:"",by:""});

    function changeHandler(e){
        setFormData({...formData,[e.target.name]:e.target.value});

    }

    function submitHandler(e){
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal:"",by:""});
       
    }


    return(
        <>
        <h1>
            My Little Lemon Goals
        </h1>
        <form onSubmit={submitHandler}>
            <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
            <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler}/>
            <button>Submit Goal</button>
        </form>
        
        </>


    )
}



function ListOfGoals(props){
    return(
        <ul>
            {props.allGoals.map((g)=>(
                <li key={g.goal}>
                    <span>My goal is to {g.goal},by {g.by}</span>
                </li>
            ))}
        </ul>
    )

}


function GiftCard(){

    const [giftCard, setGiftCard] = useState(
        {
            firstName: "Jennifer",
            lastName: "Smith",
            text: "Free dinner for 4 guests",
            valid: true,
            instructions: "To use your coupon, click the button below.",
        }
      );
      function spendGiftCard() {
        setGiftCard(prevState => {
            return {
              ...prevState,
              text: "Your coupon has been used.",
              valid: false,
              instructions: "Please visit our restaurant to renew your gift card.",
            }
        });
      }
      return (
        <div style={{padding: '40px'}}>
          <h1>
            Gift Card Page
          </h1>
          <h2>
            Customer: {giftCard.firstName} {giftCard.lastName}
          </h2>
          <h3>
            {giftCard.text}
          </h3>
          <p>
            {giftCard.instructions}
          </p>
          {
            giftCard.valid && (
              <button onClick={spendGiftCard}>
                Spend Gift Card
              </button>
            )
          }
        </div>
      );
}

export default function Goals(){
    const [allGoals, updateAllGoals] = React.useState([]);

    function addGoal(goal){
        updateAllGoals([...allGoals,goal]);
    }

    return(
        <div className="App">
            <GoalForm onAdd={addGoal}/>
            <ListOfGoals allGoals={allGoals}/>
            <GiftCard/>
        </div>
    )

}