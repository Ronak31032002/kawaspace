import React from "react";
import ReactDom from "react-dom";
import './css/box.css';

class Box extends React.Component{
    constructor() {
        super();
        this.state={
            data:false
        }
    }

    componentDidMount() {
        let url = "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=21";
        fetch(url, {
            method:'GET',
            headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            }
        }).then((result) => {
            result.json().then((res) => {
                this.setState({data:res})
            })
        })
    }
    render() {
        const data = this.state.data;
        console.warn(data.results);
        return (
            <>
            {
                data ?
            <div className = "box">
            
            <div className = "left">
            <img src = {data.results[0].picture.large} />
            </div>
            <div className = "right">
            
            <div className = "info">
            
               
                <h1><u>{data.results[0].name.title}. {data.results[0].name.first} {data.results[0].name.last}</u></h1>
                <p><span>{data.results[0].location.street.number}</span>, {data.results[0].location.street.name}, {data.results[0].location.city},<b>{data.results[0].location.country}</b>, {data.results[0].location.postcode}</p>
                <p>{data.results[0].location.timezone.offset}, <i>{data.results[0].location.timezone.description}</i></p>
                <p className = "gender">{data.results[0].gender}</p>
            
            </div>
            
            
            
            </div>
            </div>

            
           
           
            :
            <div></div>
            }
            {
                data ?
            <div className = "boxes">
            <ul>
            <li>
                    <div className = "boxed">
                    <h3>{data.results[1].gender} - NL</h3>
                    <h2>{data.results[1].name.title}. {data.results[1].name.first} {data.results[1].name.last}</h2>
                    <h3>{data.results[1].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[2].gender} - NL</h3>
                    <h2>{data.results[2].name.title}. {data.results[2].name.first} {data.results[2].name.last}</h2>
                    <h3 className = "h3">{data.results[2].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[3].gender} - NL</h3>
                    <h2>{data.results[3].name.title}. {data.results[3].name.first} {data.results[3].name.last}</h2>
                    <h3 className = "h3">{data.results[3].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[4].gender} - NL</h3>
                    <h2>{data.results[4].name.title}. {data.results[4].name.first} {data.results[4].name.last}</h2>
                    <h3 className = "h3">{data.results[4].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[5].gender} - NL</h3>
                    <h2>{data.results[5].name.title}. {data.results[5].name.first} {data.results[5].name.last}</h2>
                    <h3 className = "h3">{data.results[5].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[6].gender} - NL</h3>
                    <h2>{data.results[6].name.title}. {data.results[6].name.first} {data.results[6].name.last}</h2>
                    <h3 className = "h3">{data.results[6].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[7].gender} - NL</h3>
                    <h2>{data.results[7].name.title}. {data.results[7].name.first} {data.results[7].name.last}</h2>
                    <h3 className = "h3">{data.results[7].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[8].gender} - NL</h3>
                    <h2>{data.results[8].name.title}. {data.results[8].name.first} {data.results[8].name.last}</h2>
                    <h3 className = "h3">{data.results[8].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[9].gender} - NL</h3>
                    <h2>{data.results[9].name.title}. {data.results[9].name.first} {data.results[9].name.last}</h2>
                    <h3 className = "h3">{data.results[9].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[10].gender} - NL</h3>
                    <h2>{data.results[10].name.title}. {data.results[10].name.first} {data.results[10].name.last}</h2>
                    <h3 className = "h3">{data.results[10].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[11].gender} - NL</h3>
                    <h2>{data.results[11].name.title}. {data.results[11].name.first} {data.results[11].name.last}</h2>
                    <h3 className = "h3">{data.results[11].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[12].gender} - NL</h3>
                    <h2>{data.results[12].name.title}. {data.results[12].name.first} {data.results[12].name.last}</h2>
                    <h3 className = "h3">{data.results[12].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[13].gender} - NL</h3>
                    <h2>{data.results[13].name.title}. {data.results[13].name.first} {data.results[13].name.last}</h2>
                    <h3 className = "h3">{data.results[13].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[14].gender} - NL</h3>
                    <h2>{data.results[14].name.title}. {data.results[14].name.first} {data.results[14].name.last}</h2>
                    <h3 className = "h3">{data.results[14].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[15].gender} - NL</h3>
                    <h2>{data.results[15].name.title}. {data.results[15].name.first} {data.results[15].name.last}</h2>
                    <h3 className = "h3">{data.results[15].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[16].gender} - NL</h3>
                    <h2>{data.results[16].name.title}. {data.results[16].name.first} {data.results[16].name.last}</h2>
                    <h3 className = "h3">{data.results[16].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[17].gender} - NL</h3>
                    <h2>{data.results[17].name.title}. {data.results[17].name.first} {data.results[17].name.last}</h2>
                    <h3 className = "h3">{data.results[17].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[18].gender} - NL</h3>
                    <h2>{data.results[18].name.title}. {data.results[18].name.first} {data.results[18].name.last}</h2>
                    <h3 className = "h3">{data.results[18].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[19].gender} - NL</h3>
                    <h2>{data.results[19].name.title}. {data.results[19].name.first} {data.results[19].name.last}</h2>
                    <h3 className = "h3">{data.results[19].email}</h3>
                    </div>
                </li>
                <li>
                    <div className = "boxed">
                    <h3>{data.results[20].gender} - NL</h3>
                    <h2>{data.results[20].name.title}. {data.results[20].name.first} {data.results[20].name.last}</h2>
                    <h3 className = "h3">{data.results[20].email}</h3>
                    </div>
                </li>
            </ul>
            </div>
            
            :
            <div></div>
            }
            </>
        );
    }
}


export default Box;