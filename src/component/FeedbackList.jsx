import React from 'react'
import FeedbackItem from "./FeedbackItem"
import propTypes from 'prop-types'
import { motion, AnimatePresence } from "framer-motion"


function FeedbackList({feedback,handleDelete}) {
    if (!feedback || feedback.length === 0) {
        return <p>no feedback yet</p>
    }

    return (
        <div className='feedback-list'>
        <AnimatePresence>
            {feedback.map((item)=>(
        <motion.div
        key={item.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >

                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
                </motion.div>
           
            ))}
            </AnimatePresence>
        </div>
      )
    }



//   return (
//     <div className='feedback-list'>
//         {feedback.map((item)=>(
//             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
//         ))}
//     </div>
//   )
// }

FeedbackList.prototype={
    feedback: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            text: propTypes.string.isRequired,
            rating: propTypes.number.isRequired
        })
    ),
}

export default FeedbackList