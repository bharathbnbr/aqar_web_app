import React from 'react'
import '../css/Home.css';
import { cardData, leftPartData } from '../utils/jsondata';
import BasketComp from '../components/BasketComp';
import ItemOrderSummary from '../components/ItemOrderSummary';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, addTodoStart } from '../redux/reducers/todoSlice';
import { Link } from 'react-router-dom';


function Home() {

    const dispatch = useDispatch()

    const addToTask = useCallback(() => {
        // Add task to redux here
        dispatch(addTodo(cardData[0]))
    }, [])

    const removeTask = useCallback((taskId) => {
        dispatch(deleteTodo(taskId))
    }, [])

    // Add to cart clicked+++ 
    const startClicked = () => {
        dispatch(addTodoStart())
    }

    const state = useSelector((state) => state.todo.tasks)
    // console.log("state ", state)
    const data_ = state ? state : []
    console.log(data_)


    return (
        <div className="App">
            <div className="header">
                <div className="leftPart">
                    <h1>
                        World peas
                    </h1>
                </div>
                <div class="rightPart">
                    {
                        leftPartData.map((item, key) => {
                            return (
                                <div class="eachRightItem" key={key} >
                                    <Link to="/Menu" >
                                        {item.title}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <button
                        class="btn"
                        onClick={() => startClicked()}
                    >
                        Basket(3)
                    </button>
                </div>
            </div>
            <div>
                <BasketComp item={3} />
            </div>
            <div>
                <ItemOrderSummary data={data_} taskclicked={() => addToTask()} removeClicked={(data) => removeTask(data)} />
            </div>

        </div>
    );
}

export default React.memo(Home);


