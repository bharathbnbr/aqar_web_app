

const leftPartData = [
    {
        id: 1,
        title: 'Shop'
    },
    {
        id: 2,
        title: 'Newstand'
    },
    {
        id: 3,
        title: 'Who we are'
    },
    {
        id: 1,
        title: 'My profile'
    },

]

const cardData = [
    {
        id: 1,
        title: 'Heirloom tomato',
        cost: '5.99',
        lb: 1
    },
    {
        id: 2,
        title: 'Organic ginger',
        cost: '12.99',
        lb: 0.5
    },
    {
        id: 1,
        title: 'Sweet onion',
        cost: '2.99',
        lb: 0.5
    },
    {
        id: 1,
        title: 'Heirloom tomato',
        cost: '5.99',
        lb: 1
    }
]


const fieldJson = {
    name: { field: 'name', placeholder: 'Name', value: '', required: true },
    email: { field: 'email', placeholder: 'Email', value: '', required: true },
    lastname: { field: 'lastname', placeholder: 'Last Name', value: '', required: false },
    eng: { field: 'eng', placeholder: 'Eng', value: '', required: true },
    maths: { field: 'maths', placeholder: 'science', value: '', required: true },
    science: { field: 'science', placeholder: 'maths', value: '', required: true }
}

export { leftPartData, cardData, fieldJson } 