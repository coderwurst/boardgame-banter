import React from 'react';

import { GoogleTable } from "react-google-sheet-connector"

import { connectToSpreadsheet } from "react-google-sheet-connector"

    const BoardgameTable = (props) => {
        return (
            <GoogleTable sheetName="Sheet-1" />
        )
    }

export default connectToSpreadsheet(BoardgameTable)
