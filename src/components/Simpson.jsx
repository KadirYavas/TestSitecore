import React, {useState} from 'react';
import Homer from '../images/Homer.jpg';
import Bart from '../images/Bart.jpg';
import Grampa from '../images/Grampa.jpg';
import Lisa from '../images/Lisa.jpg';
import Maggie from '../images/Maggie.jpg';
import Marge from '../images/Marge.jpg';
import Dropdown from 'react-bootstrap/Dropdown'

function Simpson() {

    const [cpt, setCpt] = useState(0)

    const click = () => {
        setCpt(cpt + 1)
    }

    const [simpson, setSimpson] = useState([
        {
            id: 1,
            name: 'Homer',
            src: Homer,
        },
        {
            id: 2,
            name: 'Grampa',
            src: Grampa,
        },
        {
            id: 3,
            name: 'Lisa',
            src: Lisa,
        },
        {
            id: 4,
            name: 'Maggie',
            src: Maggie,
        },
        {
            id: 5,
            name: 'Marge',
            src: Marge,
        },
        {
            id: 6,
            name: 'Bart',
            src: Bart,
        },
    ])

    const [first, setFirst] = useState(simpson[0].src)
    const [current, setCurrent] = useState(simpson[0].id)

    const master = (e) => {
        setFirst(e.target.parentElement.previousElementSibling.src)
        setCurrent(e.target.id)
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-2">
                    <h4>The Simpsons</h4>
                    <img src={first} width="60px" alt="" />
                    {cpt % 2 == 0 ?
                    <button className="btn btn-sm btn-success ml-1" onClick={click}>Show Assets</button>
                    :
                    <button className="btn btn-sm btn-danger ml-1" onClick={click}>Close Assets</button>
                    }
                </div>
                <div className="row col-8 offset-1 justify-content-center">
                    {simpson.map((e, index) => cpt % 2 == 1 && 
                        <div className="col-2" key={index}>
                            {current == e.id &&
                                <i className="fas fa-sort-down text-success mr-2" style={{float: 'left'}}></i>
                            }
                            <h5>{e.id}.{e.name}</h5> <img src={e.src} width="50px" alt=""/>
                            <div className="mt-2">
                                {current != e.id &&
                                    <button className="btn btn-sm btn-primary" id={e.id} onClick={master}>Make master</button>
                                }
                            </div>
                        </div>
                    )}
                </div>
                    {cpt % 2 == 1 &&
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-sm">
                                Sorting
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={() => setSimpson(simpson.slice(0).sort((a, b) => (a.id > b.id) ? 1 : -1))}>Sort by ID</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => setSimpson(simpson.slice(0).sort((a, b) => (a.name > b.name) ? 1 : -1))}>Sort by name</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
            </div>
        </div>
    );
}

export default Simpson;