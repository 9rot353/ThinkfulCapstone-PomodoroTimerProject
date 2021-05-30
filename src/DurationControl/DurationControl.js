import React from "react"
import {minutesToDuration} from "../utils/duration/index.js"

// The single purpose of this compenent is to adjust the duration of both The focus and the break timer

function DurationControl ({focusDuration, breakDuration, isTimerRunning, setFocusDuration, setBreakDuration}) {

    function increaseFocusDuration(){
        if(focusDuration < 60) {
          setFocusDuration(focusDuration + 5)
          console.log(focusDuration)
        }
    }
      function decreaseFocusDuration(){
    if(focusDuration >5) {
     setFocusDuration(focusDuration -5) 
     console.log(focusDuration)
    }
      }
      function increaseBreakDuration(){
      if(breakDuration < 15){
        setBreakDuration(breakDuration + 1)
        console.log(breakDuration)
      }
    }
      function decreaseBreakDuration(){
      if(breakDuration > 1){
        setBreakDuration(breakDuration - 1) 
        console.log(breakDuration)
      }
    }

return (

<div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(focusDuration)}
              {/* change hard coded 25 to a variable that changes win the plus button is clicked. */}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={decreaseFocusDuration}
                disabled={focusDuration === 5 || isTimerRunning}
              > 
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={increaseFocusDuration}
                disabled={focusDuration === 60 || isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      
  
      <div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(breakDuration)}
                {/* change hard coded 5 to a variable that changes when a button is clicked */}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={decreaseBreakDuration}
                  disabled={breakDuration === 1 || isTimerRunning}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={increaseBreakDuration}
                  disabled={breakDuration === 15 || isTimerRunning}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
}

export default DurationControl;