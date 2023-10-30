import React from 'react'
import '../css/BasketComp.css'
const BasketComp = ({ item = 0 }) => {
    console.log("re-render basketComp")
    return (
        <div className="cont">
            <div className="basText">
                Basket
            </div>
            <div className="itmText">
                {`${item} items`}
            </div>
        </div>
    )
}

export default React.memo(BasketComp)