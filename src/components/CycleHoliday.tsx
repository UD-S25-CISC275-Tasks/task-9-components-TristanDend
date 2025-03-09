import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holidayEmoji, changeEmoji] = useState<string>("😴");

    function changeByAlphabet(): void {
        if (holidayEmoji === "😴") changeEmoji("🦃");
        else if (holidayEmoji === "🎄") changeEmoji("☕");
        else if (holidayEmoji === "🦃") changeEmoji("🎄");
        else if (holidayEmoji === "☕") changeEmoji("🎃");
        else if (holidayEmoji === "🎃") changeEmoji("😴");
    }

    function changeByDate(): void {
        if (holidayEmoji === "😴") changeEmoji("☕");
        else if (holidayEmoji === "🎄") changeEmoji("😴");
        else if (holidayEmoji === "🦃") changeEmoji("🎄");
        else if (holidayEmoji === "☕") changeEmoji("🎃");
        else if (holidayEmoji === "🎃") changeEmoji("🦃");
    }

    return (
        <span>
            <Button onClick={changeByAlphabet}>Next Holiday by Alphabet</Button>
            <Button onClick={changeByDate}>Next Holiday by Year</Button>
            <p>Holiday: {holidayEmoji}</p>
        </span>
    );
}
