import { useMemo, useState } from 'react'
import '../css/Menu.css'
import { fieldJson } from '../utils/jsondata'
const Menu = () => {

    const [fields, setFields] = useState(fieldJson)
    const memoFields = useMemo(() => Object.values(fields), [fields]);

    console.log("fields ", fields)
    console.log("memoFields ", memoFields)


    const inputChanged = (val, field) => {
        console.log("val ++ ", val)
        console.log("item ++ ", field)
        fields[`${field}`].value = val
        setFields({ ...fields })

    }

    const handleOnSubmit = (e) => {

        console.log("fields_  ", memoFields)
        console.log("Sum of all nums++ ", memoFields.reduce((acc, val) => parseInt(acc) + parseInt(val.val), 0))
        e.preventDefault()

    }

    console.log("render in menu")



    return (
        <div className="menuCont">
            Menu page
            <div>
                <form onSubmit={(e) => handleOnSubmit(e)}>

                    {memoFields.map((item, key) => (<div>
                        <div key={key} className='input' >
                            <input
                                required={item.required}
                                key={key}
                                type='text'
                                value={item.value}
                                placeholder={item.placeholder}
                                onChange={(e) => inputChanged(e.target.value, item.field)}
                            />
                        </div>
                    </div>))}
                    <input type="submit" value="Submit" />
                </form>

            </div>
        </div>
    )
}

export default Menu