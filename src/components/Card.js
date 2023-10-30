import React from 'react'
import '../css/Card.css'
import { AiOutlineEdit } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Card = ({ title = '', cost = 0, lb = 0, removeClicked, id_ }) => {

    // const state = useSelector((state) => state)
    console.log("state in card")
    return (
        <div className="cardCont">
            <div className="cardpart1">
                <img
                    src={require('../assets/tamoto.png')}
                    style={{}}
                />
            </div>
            <div className="cardpart2">
                <div className='row1'>
                    <div className='text1'>{`${title}`}</div>
                    <div className='text2'>{`$ ${cost}`}</div>
                </div>
                <div className="row3">{`${cost} / lb`}</div>
                <div className='row4'>
                    <span>{`${lb}lb`}</span> <AiOutlineEdit />

                </div>
                <div style={{}}>
                    <button onClick={() => removeClicked(id_)}>delete Task / Item</button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Card);