/*import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}){

    if(!feedback ){
        return <p>no feed back</p>
    }
    return(
       <div className="feedback-list">{feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item}/>
       ))}</div>
       )
}

export default FeedbackList;*/

import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback,handleDelete}){
    return(
    <div className="feedback-list">{feedback.map((item)=>(
        <FeedbackItem key={item.key} item={item} 
        handleDelete={handleDelete}/>))}</div>
        )
}
export default FeedbackList;
