import React, {useState} from 'react';
import Batman from '../images/Batman.jpg';
import Flash from '../images/Flash.jpg';
import GreenL from '../images/Green lantern.jpg'
import Superman from '../images/Superman.jpg'
import Dropdown from 'react-bootstrap/Dropdown'

function Heroes() {

    const [cpt2, setCpt2] = useState(0)

    const click2 = () => {
        setCpt2(cpt2 + 1)
    }

    const [heroes, SetHeroes] = useState([
        {
            id: 1,
            name: 'Batman',
            src: Batman,
        },
        {
            id: 2,
            name: 'Green Lantern',
            src: GreenL
        },
        {
            id: 3,
            name: 'Superman',
            src: Superman
        },
        {
            id: 4,
            name: 'Flash',
            src: Flash
        }
    ])

    const [first, setFirst] = useState(heroes[0].src)
    const [current, setCurrent] = useState(heroes[0].id)

    const master = (e) => {
        setFirst(e.target.parentElement.previousElementSibling.src)
        setCurrent(e.target.id)
    }

return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-3 mt-3">
                <h3>Super Heroes</h3>
                <img src={first} width="50px" alt="" />
                {cpt2 % 2 == 0 ?
                    <button className="btn btn-sm btn-success ml-3" onClick={click2}>Show Assets</button>
                    :
                    <button className="btn btn-sm btn-danger ml-3" onClick={click2}>Close Assets</button>
                }
            </div>
            <div className="row col-8 justify-content-center">
                {heroes.map((a, index) => cpt2 % 2 == 1 && 
                    <div className="col-3" key={index}>
                    {current == a.id &&
                        <i className="fas fa-sort-down text-success mr-2" style={{float: 'left'}}></i>
                    }
                    <h5>{a.id}.{a.name}</h5> <img src={a.src} width="50px" alt=""/>
                        <div className="mt-2">
                            {current != a.id &&
                                <button className="btn btn-sm btn-primary" id={a.id} onClick={master}>Make master</button>
                            }
                        </div>
                    </div>
                )}
            </div> 
                {cpt2 % 2 == 1 &&
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-sm">
                            Sorting
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" onClick={() => SetHeroes(heroes.slice(0).sort((a, b) => (a.id > b.id) ? 1 : -1))}>Sort by ID</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={() => SetHeroes(heroes.slice(0).sort((a, b) => (a.name > b.name) ? 1 : -1))}>Sort by name</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                }
            </div>
        </div>
    );
}

export default Heroes;