import React, { useState, useEffect } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton'

const Timer: React.FC<any> = () => {
    let [seconds, setSeconds] = useState(0);
    let [isOn, setIsOn] = useState(false);
    let [disableStart, setdisableStart] = useState(false);
    let [arrowDisplay, setArrowDisplay] = useState(true);
    let [intervalId, setIntervalId] = useState<number>(0);
    let [timeArray, setTimeArray] = useState<Array<number | string>>([]);

    function timeFromSeconds() {
        let timeInMinutes = Math.floor(seconds / 60);
        let timeInSeconds = Math.floor(seconds - (timeInMinutes * 60));

        return [
            timeInMinutes < 10 ? `0${timeInMinutes}` : timeInMinutes,
            timeInSeconds < 10 ? `0${timeInSeconds}` : timeInSeconds
        ]
    }


    useEffect(() => {
        setTimeArray(timeFromSeconds());
    }, [seconds])

    const startTimer = () => {

        let interval: any = setInterval(() => {
            setSeconds((pSeconds) => pSeconds - 1);
        }, 1000);

        setIntervalId(interval);
        setIsOn(true);
        setArrowDisplay(false);
    }

    function stopTimer() {
        clearInterval(intervalId);
        setIsOn(false);
    }

    function resetTimer() {
        clearInterval(intervalId);
        setSeconds(0);
        setIsOn(false);
        setArrowDisplay(true);
        setdisableStart(false);
    }

    function handleAddition() {
        setSeconds(seconds += 60);
        setdisableStart(true);

    }

    function handleSubtraction() {
        if (seconds > 60) {
            setSeconds(seconds -= 60)
        } else if (seconds < 60) {
            return;
        }
    }


    return (
           
        <div className='timer-container'>
            <div className='time-display'>
                <p className={arrowDisplay ? 'show' : 'hide'} onClick={() => handleAddition()}>&#916;</p>
                {timeArray[0]}:{timeArray[1]}
                <p className={arrowDisplay ? 'show' : 'hide'} onClick={() => handleSubtraction()}>&#8711;</p>
            </div>
            <div className='timer-button-container'>

                <TimerButton
                    id = 'start'
                    className='start-timer'
                    buttonAction={startTimer}
                    buttonValue={'Start'}
                    disabled={!disableStart || ((seconds > 0) && isOn)}

                />
                <TimerButton
                    id = 'stop'
                    className='stop-timer'
                    buttonAction={stopTimer}
                    buttonValue={'Stop'}
                    disabled={!isOn}
                />
                <TimerButton
                    id = 'reset'
                    className='reset-timer'
                    buttonAction={resetTimer}
                    buttonValue={'Reset'}
                    disabled={false}
                />

            </div>
        </div>
    
    );
}
export default Timer;