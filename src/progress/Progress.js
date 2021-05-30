import {minutesToDuration,secondsToDuration} from "../utils/duration/index.js"
import React from "react";

// The single purpose of this component display the the countdown.

function Progress({focusDuration, breakDuration, session, isTimerRunning}) {
    if (session === null) return null;
   
    let currentDuration = session?.label === "Focusing" ? focusDuration * 60 : breakDuration * 60;
let percent = ((currentDuration - session?.timeRemaining) / currentDuration) * 100;

   return (
<div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
{session?.label === "Focusing" ? `Focusing for ${minutesToDuration(focusDuration)} minutes` : `On Break for 0${breakDuration}:00 minutes`}
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>

            <h3>{!isTimerRunning ? "PAUSED": null}</h3>

          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percent} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${percent}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Progress;