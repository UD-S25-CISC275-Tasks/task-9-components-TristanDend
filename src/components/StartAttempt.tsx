import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [quizAttempts, attemptUse] = useState<number>(4);
    const [quizActive, setActive] = useState<boolean>(false);

    function startQuiz(): void {
        if (!quizActive && quizAttempts > 0) {
            attemptUse(quizAttempts - 1);
            setActive(true);
        }
    }

    function stopQuiz(): void {
        if (quizActive) setActive(false);
    }

    return (
        <span>
            <Button
                onClick={startQuiz}
                disabled={quizActive || quizAttempts < 1}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizActive}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    if (quizAttempts < 10) attemptUse(quizAttempts + 1);
                }}
                disabled={quizActive}
            >
                Mulligan
            </Button>
            <p>{quizAttempts}</p>
        </span>
    );
}
