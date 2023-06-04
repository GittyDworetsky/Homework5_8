import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedRow extends React.Component {

    generateTable = () => {
        const { selectedNumbers, lockedNumbers, onLockClick } = this.props;
       
        return <div className="row p-5 rounded" style={{ backgroundColor: 'rgb(233, 236, 239)' }} >
            <div className="col-md-6 col-md-offset-3">
                <h3>Selected Numbers </h3>
                <ul className="list-group">
                    {selectedNumbers.map((n) => {
                        return <li className="list-group-item" key={n.id}>
                            {n.number}
                            <button className="ms-5 btn btn-primary" onClick={() => onLockClick(n.id)}>{`${lockedNumbers.includes(n.id) ? 'Unlock' : 'Lock'}`}</button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    }

    render() {
        return (
            this.generateTable()
        );
    }
};

export default SelectedRow;
