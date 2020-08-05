import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../../app-store/slices/counterSlice";
import styles from "./Counter.module.css";
import { FormattedMessage } from "react-intl";
import { useAnalytics } from "use-analytics";
import { analytics } from "../../analytics/analyticsService";
export function Counter() {
  const { track, page, identify } = useAnalytics();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const trigger = () => {
    debugger;
    page();

    /* Identify users */
    identify("userid-123", {
      favoriteColor: "blue",
      membershipLevel: "pro",
    });

    /* Track events */
    track("buttonClicked", {
      value: 100,
    });
  };
  return (
    <div>
      <input placeholder="Enter name" onChange={() => trigger()} />
      <p>
        <FormattedMessage id="greeting" values={{ name }} />
        <br />
        <FormattedMessage id="time" values={{ t: Date.now() }} />
        <br />
        <FormattedMessage id="date" values={{ d: Date.now() }} />
      </p>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
