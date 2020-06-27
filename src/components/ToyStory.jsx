import React, {useState} from 'react';
import Buzz from '../images/Buzz.jpg';
import Alien from '../images/Alien.jpg';
import Dropdown from 'react-bootstrap/Dropdown'

function ToyStory() {

    const [cpt3, setCpt3] = useState(0)

    const click3 = () => {
        setCpt3(cpt3 + 1)
    }

    const [toystory, SetToystory] = useState([
        {
            id: 1,
            name: 'Buzz',
            src: Buzz
        },
        {
            id: 2,
            name: 'Alien',
            src: Alien
        }
    ])

    const [first, setFirst] = useState(toystory[0].src)
    const [current, setCurrent] = useState(toystory[0].id)

    const master = (e) => {
        setFirst(e.target.parentElement.previousElementSibling.src)
        setCurrent(e.target.id)
    }

    const [tag, setTag] = useState([
        {
            name: 'Cartoon',
        },
        {
            name: 'Family Simpson'
        },
        {
            name: 2014
        }
    ])


    const [none, setNone] = useState(false)

    const [cptTag, setCptTag] = useState(0)

    const show = () => {
        setCptTag(cptTag + 1)
    }

    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-3 mt-3">
                    <h3>Toy Story</h3>
                    <img src={first} width="50px" alt="" />
                    {cpt3 % 2 == 0 ?
                    <button className="btn btn-sm btn-success ml-3" onClick={click3}>Show Assets</button>
                    :
                    <button className="btn btn-sm btn-danger ml-3" onClick={click3}>Close Assets</button>
                    }
                    {cptTag % 2 == 0 ?
                    <button className="ml-2 btn btn-sm btn-primary" onClick={show}>Show Tag</button>
                    :
                    <button className="ml-2 btn btn-sm btn-danger" onClick={show}>Close Tag</button>
                    }
                    {cptTag % 2 == 1 && 
                        <div className="d-flex">
                            {tag.map((a, index) => <h6>{a.name}</h6>)}
                        </div>
                    }
                </div>
                <div className="row col-9 justify-content-center">
                    {toystory.map(u => cpt3 % 2 == 1 && 
                        <div className="col-3" key={u.id}>
                        {current == u.id &&
                        <i className="fas fa-sort-down text-success mr-2" style={{float: 'left'}}></i>
                        }
                        <h5>{u.id}.{u.name}</h5> <img src={u.src} width="40px" alt="" />
                            <div className="mt-2">
                                {current != u.id && 
                                    <button className="btn btn-sm btn-primary" id={u.id} onClick={master}>Make master</button>
                                }
                            </div>
                        </div>
                    )}
                    {cpt3 % 2 == 1 &&
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-sm">
                                Sorting
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-3" onClick={() => SetToystory(toystory.slice(0).sort((a, b) => (a.id > b.id) ? 1 : -1))}>Sort by ID</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" onClick={() => SetToystory(toystory.slice(0).sort((a, b) => (a.name > b.name) ? 1 : -1))}>Sort by name</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </div>
            </div>
        </div>
    );
}

export default ToyStory;