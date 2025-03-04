import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
import { isVisible } from "@testing-library/user-event/dist/utils";

export function ChangeType(): React.JSX.Element {
    const [questionType, changeQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        if (questionType === "multiple_choice_question") {
            changeQuestion("short_answer_question");
        } else {
            changeQuestion("multiple_choice_question");
        }
    }

    return (
        <span>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <p>
                {questionType === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </p>
        </span>
    );
}
