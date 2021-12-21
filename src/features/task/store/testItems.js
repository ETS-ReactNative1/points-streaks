import { createTask } from "./createTask";
export const a = "a";
export const b = "b";

export const testState = {
    history: {},
    ids: [a, b],
    entities: {
        [a]: createTask(a, { id: a }),
        [b]: createTask(b, { id: b })
    }
};
