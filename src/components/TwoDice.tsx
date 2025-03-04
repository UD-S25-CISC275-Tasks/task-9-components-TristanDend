import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, rollLeftDie] = useState<number>(6);
    const [rightDie, rollRightDie] = useState<number>(3);

    return (
        <span>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <p>{leftDie}</p>
            <Button
                onClick={() => {
                    rollLeftDie(d6);
                }}
            >
                Roll Left
            </Button>
            <p>{rightDie}</p>
            <Button
                onClick={() => {
                    rollRightDie(d6);
                }}
            >
                Roll Right
            </Button>
            <p>
                {leftDie === 1 && rightDie === 1
                    ? "Lose"
                    : leftDie === rightDie
                      ? "Win"
                      : ""}
            </p>
        </span>
    );
}
