const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

const boxers = [
    {'name': 'john l sullivan',
    'yearsChamp': '1882-1892',
    'beat': 'Jake Kilrain*',
    'lostTo': 'James J Corbett'
        },

    {'name': 'james j corbett',
        'yearsChamp': '1892-1897',
        'beat': 'john l sullivan',
        'lostTo': 'Bob Fitzsimmons'
        },

    {'name': 'bob fitzsimmons',
        'yearsChamp': '1897-1899',
        'beat': 'James J. Corbett',
        'lostTo': 'James J Jeffries'
        },

    {'name': 'james j jeffries',
        'yearsChamp': '1899-1905',
        'beat': 'Bob Fitzsimmons',
        'lostTo': 'Retirement/Jack Johnson*'
        },
    {'name': 'marvin hart',
        'yearsChamp': '1905-1906',
        'beat': 'Jack Root',
        'lostTo': 'Tommy Burns'
        },

    {'name': 'tommy burns',
        'yearsChamp': '1906-1908',
        'beat': 'Marvin Hart',
        'lostTo': 'Jack Johnson'
        },
    {'name': 'jack johnson',
        'yearsChamp': '1908-1915',
        'beat': 'Tommy Burns',
        'lostTo': 'Jess Williard'
        },

    {'name': 'jess williard',
        'yearsChamp': '1915-1919',
        'beat': 'Jack Johnson',
        'lostTo': 'Jack Dempsey'
        },

    {'name': 'jack dempsey',
        'yearsChamp': '1919-1926',
        'beat': 'Jess Williard',
        'lostTo': 'Gene Tunney'
        },

    {'name': 'gene tunney',
        'yearsChamp': '1926-1930',
        'beat': 'Jack Dempsey',
        'lostTo': 'Retirement'
        },

    {'name': 'max schmelling',
        'yearsChamp': '1930-1932',
        'beat': 'Jack Sharkey',
        'lostTo': 'Jack Sharkey'
        },

    {'name': 'jack sharkey',
        'yearsChamp': '1932-1933',
        'beat': 'Max Schmelling',
        'lostTo': 'Primo Carnera'
        },

    {'name': 'primo carnera',
        'yearsChamp': '1933-1934',
        'beat': 'Jack Sharkey',
        'lostTo': 'Max Baer'
        },

    {'name': 'max baer',
        'yearsChamp': '1934-1935',
        'beat': 'Primo Carnera',
        'lostTo': 'Jim Braddock'
        },

    {'name': 'jim braddock',
        'yearsChamp': '1935-1937',
        'beat': 'Max Baer',
        'lostTo': 'Joe Louis'
        },

    {'name': 'joe louis',
        'yearsChamp': '1937-1949',
        'beat': 'Jim Braddock',
        'lostTo': 'Retirement/Ezzard Charles*'
        },

    {'name': 'ezzard charles',
        'yearsChamp': '1949-1951',
        'beat': 'Joe Walcott/Joe Louis*',
        'lostTo': 'Joe Walcott'
        },

    {'name': 'joe walcott',
        'yearsChamp': '1951-1952',
        'beat': 'Ezzard Charles',
        'lostTo': 'Rocky Marciano'
        },

    {'name': 'rocky marciano',
        'yearsChamp': '1952-1956',
        'beat': 'Joe Walcott',
        'lostTo': 'Deceased'
        },
]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(boxers)
})

app.get('/api/boxer/:name', (req, res) => {
    let name = req.params.name.toLowerCase()
    for(let object of boxers){
        if (object.name===name){
            res.json(object)
        }
    }
    res.status(401).send("<h1>invalid boxer</h1>")
})

app.get('/api/year/:year', (req, res) => {
    const year = Number(req.params.year)
    let multConditionArray = []
    for(let object of boxers) {
        let yearArray = object.yearsChamp.split('-')
        let startYear = Number(yearArray[0])
        let endYear = Number(yearArray[1])
        if(year >= startYear && year <= endYear) {
            multConditionArray.push(object)
        }
    }
    if(multConditionArray.length>0) {
        return res.json(multConditionArray)
    }
    
    res.json({ error: 'invalid year' })
})

app.listen(process.env.PORT || PORT, () => {
    console.log('up and running')
})

// let array = boxers["john l sullivan"].yearsChamp.split('-')
// console.log(array)
// console.log(array[0])
// console.log(array[1])
// console.log(Number(array[0]))

// console.log(boxers.find((object) =>
//     object.name="joe louis"))