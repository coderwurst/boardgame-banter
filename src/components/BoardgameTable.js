import React from 'react';

import ReactTable from 'react-table'
import 'react-table/react-table.css'

export default class BoardgameTable extends React.Component {

    render() {
        const data = [{
            name: '7 Wonders',
            rating: 26,
            minPlayers: 2,
            maxPlayers: 7,
            duration: 123,
            lastPlayed: 0,
            owner: "AM",
            notes: "lorem ipsum"
            }, {
            name: 'Mysterium',
            rating: 26,
            minPlayers: 2,
            maxPlayers: 7,
            duration: 123,
            lastPlayed: 0,
            owner: "AM",
            notes: "lorem ipsum"
            }, {
            name: 'Allied Assult',
            rating: 26,
            minPlayers: 2,
            maxPlayers: 5,
            duration: 123,
            lastPlayed: 0,
            owner: "AM",
            notes: "lorem ipsum"  
        }]

        const columns = [{
            Header: 'name',
            accessor: 'name',
            }, {
            Header: 'BGG rating',
            accessor: 'rating',
            }, {
            Header: 'min players',
            accessor: 'minPlayers',
            }, {
            Header: 'max players',
            accessor: 'maxPlayers',
            }, {
            Header: 'duration',
            accessor: 'duration',
            }, {
            Header: 'last played',
            accessor: 'lastPlayed',
            }, {
            Header: 'owner',
            accessor: 'owner',
            }, {
            Header: 'notes',
            accessor: 'notes',
            }]
        
        return (
            <ReactTable
                data={data}
                columns={columns}
            />
        );
    }
}
