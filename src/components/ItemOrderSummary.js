import React from 'react'
import '../css/ItemOrderSummary.css'
import { cardData } from '../utils/jsondata';
import Card from './Card';
const ItemOrderSummary = ({ data, taskclicked, removeClicked }) => {
    return (
        <div className="itemCont">
            <div className="itemleftPart">
                {
                    data?.map((item, key) => {
                        return (
                            <Card {...item} key={key} removeClicked={(data) => removeClicked(data)} />
                        )
                    })
                }
            </div>
            <div className="itemRightPart">
                <button
                    class="btn"
                    onClick={() => taskclicked()}
                >

                    Add Task or Item
                </button>
            </div>
        </div>
    );
}

export default React.memo(ItemOrderSummary);