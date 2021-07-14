import React from "react";
import { FormattedMessage } from "react-intl";

import musicIconURL from "./music/music.png";
import musicInsetIconURL from "./music/music-small.svg";


export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Tick"
                description="awesome extension"
                id="gui.extension.tick.tickTitle"
            />
        ),
        extensionId: "tick",
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="tick!"
                description="tick examples"
                id="gui.extension.tick.tickDesc"
            />
        ),
        featured: true,
    },
];
