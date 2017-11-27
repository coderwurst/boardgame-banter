import React from 'react';

import ReactTable from 'react-table'
import 'react-table/react-table.css'

import { connectToSpreadsheet } from "react-google-sheet-connector"

    const BoardgameTable = (props) => {
        return (
            <div>
                {
                    props.getSheet("Sheet-1")
                        .map((row, i) =>
                            JSON.stringify(row)
                        )
                }        
            </div>
        )
    }

export default connectToSpreadsheet(BoardgameTable)
