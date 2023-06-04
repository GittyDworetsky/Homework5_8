import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableRow from './TableRow';
import SelectedTable from './SelectedTable';
import { v4 as uuidv4 } from 'uuid';


class NumbersTable extends React.Component {


    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }


    getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;


    onAddNumberClick = () => {

        const { numbers } = this.state;
        const number = this.getRandomNumber();
        const id = uuidv4();
        this.setState({ numbers: [...numbers, { id, number }] });
    }

    onSelectNumberClick = (n) => {

        const { selectedNumbers } = this.state;
        if (selectedNumbers.map(num => num.id).includes(n.id)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(num => num.id !== n.id) });
        } else {

            this.setState({ selectedNumbers: [...selectedNumbers, n] });
        }

    }

    onLockClick = id => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(id)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(id => id !== id) });
        } else {

            this.setState({ lockedNumbers: [...lockedNumbers, id] });
        }
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '60px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success btn-lg w-100" onClick={this.onAddNumberClick}>Add</button>
                    </div>
                </div>
                <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 25 + '%' }}>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.numbers.map(n => <TableRow
                                key={n.id}
                                num={n.number}
                                onSelectClick={() => this.onSelectNumberClick(n)}
                                selected={this.state.selectedNumbers.map(num => num.id).includes(n.id)}
                                isLocked={this.state.lockedNumbers.includes(n.id)}
                            />)}
                        </tbody>
                    </table>
                </div>
                {!!this.state.selectedNumbers.length && <SelectedTable
                    selectedNumbers={this.state.selectedNumbers}
                    lockedNumbers={this.state.lockedNumbers}
                    onLockClick={this.onLockClick}
                />}

            </div>
        );
    }

};

export default NumbersTable;