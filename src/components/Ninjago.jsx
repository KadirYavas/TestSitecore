import React, {useState} from 'react';
import Lloyd from '../images/Lloyd.jpg';
import Nya from '../images/Nya.jpg';
import Wu from '../images/Wu.jpg';
import Dropdown from 'react-bootstrap/Dropdown'
import '../css/style.css';

function Ninjago() {

    const [cpt4, setCpt4] = useState(0)

    const click4 = () => {
        setCpt4(cpt4 + 1)
    }


    const [ninjago, setNinjago] = useState([
        {
            id: 1,
            name: 'Nya',
            src: Nya
        },
        {
            id: 2,
            name: 'Lloyd',
            src: Lloyd
        },
        {
            id: 3,
            name: 'Wu', 
            src: Wu
        }
    ])

    const [first, setFirst] = useState(ninjago[0].src)
    const [current, setCurrent] = useState(ninjago[0].id)

    const master = (e) => {
        setFirst(e.target.parentElement.previousElementSibling.src)
        setCurrent(e.target.id)
    }

    const [tag, setTag] = useState([
        {
            name: 'Ninjago',
            subTag: {
                name: 'Ninja',
                subTag: {
                    name: 'Secret Ninja Force',
                    subTag: {
                        name: 2017
                    }
                },
            },
        },
    ])

    const [cptTag, setCptTag] = useState(0)

    const show = () => {
        setCptTag(cptTag + 1)
    }

    return (
        <div className="contain mt-5">
            <div className="row">
                <div className="col-3 mt-3">
                    <h3>Ninjago</h3>
                    <img src={first} width="50px" alt="" />
                    {cpt4 % 2 == 0 ?
                        <button className="btn btn-sm btn-success ml-3" onClick={click4}>Show Assets</button>
                        :
                        <button className="btn btn-sm btn-danger ml-3" onClick={click4}>Close Assets</button>
                    }
                    {cptTag % 2 == 0 ?
                    <button className="ml-2 btn btn-sm btn-primary" onClick={show}>Show Tag</button>
                    :
                    <button className="ml-2 btn btn-sm btn-danger" onClick={show}>Close Tag</button>
                    }
                    {cptTag % 2 == 1 && 
                        <div className="d-flex mt-2">
                            {tag.map(a => <h6>{a.name} > {a.subTag.name} > {a.subTag.subTag.name} > {a.subTag.subTag.subTag.name}</h6>)}
                        </div>
                    }
                </div>
                <div className="row col-9 justify-content-center">
                    {ninjago.map(i => cpt4 % 2 == 1 && 
                        <div key={i.id} className="col-3">
                        {current == i.id &&
                            <i className="fas fa-sort-down text-success mr-2" style={{float: 'left'}}></i>
                        }
                        <h5>{i.id}.{i.name}</h5> <img src={i.src} className="img" alt=""/>
                            <div className="mt-2">
                                {current != i.id &&
                                    <button className="btn btn-sm btn-primary" id={i.id} onClick={master}>Make master</button>
                                }
                            </div>
                        </div>
                    )}
                    {cpt4 % 2 == 1 &&
                        <Dropdown className="offset-1">
                            <Dropdown.Toggle variant="info" id="dropdown-basic" className="btn btn-sm">
                                Sorting
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={() => setNinjago(ninjago.slice(0).sort((a, b) => (a.id > b.id) ? 1 : -1))}>Sort by ID</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => setNinjago(ninjago.slice(0).sort((a, b) => (a.name > b.name) ? 1 : -1 ))}>Sort by name</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </div> 
            </div>
        </div>
    );
}

export default Ninjago;