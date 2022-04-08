import {useState} from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
function FeedbackForm(){
    const [text,setText]=useState('')
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const [rating,setRating]=useState(10)

    const handleTextChange=(e)=>{
        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text!== '' && text.trim().length<=10){
            setBtnDisabled(true)
            setMessage('text must be at least 10 char')
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    return(
        <div className="card">
            <form>
                <h2>how would u rate ur service with us?</h2>
                <RatingSelect />
                <div className="input-group">
                    <input onChange={handleTextChange} 
                    type="text" 
                    placeholder="write a review"
                    value={text} />
                    <Button type="submit" isDisabled={btnDisabled}> send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </div>
    )
}
export default FeedbackForm