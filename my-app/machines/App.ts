// https://www.youtube.com/watch?v=_5dAlGaqhck - XState
import { createMachine } from "xstate";

const myMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYmoHkA1AUQCUBtAAwBdRKAAO5WLkq5y+MSAAeiAMwBWAIwl1AdnWCNggJzqATJoAsADksAaEAE9EZ1YJKDrm18d2DDmrqq1gC+IQ5oWHiEpNj0TKzcDPiUAASaQqJIIJLSsvKKKgia3joaxgBsbuq2upoV1g7OCKoVZiTWpqqaWn5m1l5h4SAUEHCKkTgExGRUtAzMEIq5MnIK2UWagpYeZgYmPeZBlvZOLm4kqrqWxgPq98aeZmERGFMxJHELkMtSqwUbNRaEj1ay6cGWCo1MyGJpqCrGEi6Nr7ZFmYyqYyWdQvECTaLEX55NaFRDqCq7fbGQ5mY6nZpWdzGMw3PxtBrdQQ4oZAA */
createMachine({
  id: "(machine)",
  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        HOVER: {
          target: "hovered",
        },
      },
    },
    hovered: {
      on: {
        "Event 1": {
          target: "notHovered",
        },
      },
    },
  },
})