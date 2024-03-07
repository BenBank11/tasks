import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

interface DhStuff {
    dhNum: number;
    setDhNum: React.Dispatch<React.SetStateAction<number>>;
}

function Doubler({ dhNum, setDhNum }: DhStuff): JSX.Element {
    return <Button onClick={() => setDhNum(2 * dhNum)}>Double</Button>;
}

function Halver({ dhNum, setDhNum }: DhStuff): JSX.Element {
    return <Button onClick={() => setDhNum(0.5 * dhNum)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <span>The current value is: {dhValue}</span>
            <Doubler dhNum={dhValue} setDhNum={setDhValue} />
            <Halver dhNum={dhValue} setDhNum={setDhValue} />
        </div>
    );
}