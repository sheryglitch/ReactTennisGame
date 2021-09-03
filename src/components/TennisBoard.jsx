import React, { useState, useEffect } from "react"
import './styles/tennisBoard.css'
const TennisBoard = () => {
    let [poneScore, setponeScore] = useState(0)
    let [ptwoScore, setptwoScore] = useState(0)
    let [poneAdv, setponeAdve] = useState(false)
    let [ptwoAdv, setptwoAdve] = useState(false)
    let [winner, setWinner] = useState('Game In Progress')
    let [oneDis, setOneDis] = useState(false)
    let [twoDis, setTwoDis] = useState(false)
    let [first, setFirst] = useState('')
    useEffect(() => {
        //Check Confitions For Winner
        // if (poneScore > ptwoScore) {
        //     setponeAdve(true)
        //     setptwoAdve(false)
        // }
        // else {
        //     setptwoAdve(true)
        //     setponeAdve(false)
        // }
        if (first == 'one' && ptwoScore < 40) {
            setWinner('Player One')
            setOneDis(true)
            setTwoDis(true)
        }
        if (first == 'two' && poneScore < 40) {
            setWinner('Player Two')
            setOneDis(true)
            setTwoDis(true)
        }

        if (poneScore == 40 && ptwoScore < 40 && first != "two") {
            setFirst('one')
        }

        if (ptwoScore == 40 && poneScore < 40 && first != "one") {
            setFirst('two')
        }
        if (poneScore > 30 && poneScore == ptwoScore) {
            setWinner('deuce')
        }
        if (winner == 'deuce' && poneScore > ptwoScore) {
            setponeAdve(true)
            setWinner("Advantage Player One")
        }
        if (winner == 'deuce' && poneScore < ptwoScore) {
            setptwoAdve(true)
            setWinner("Advantage Player Two")
        }
        if (poneAdv && poneScore > ptwoScore + 10) {
            setWinner("Player One")
            setOneDis(true)
            setTwoDis(true)
        }
        if (ptwoAdv && poneScore + 10 < ptwoScore) {
            setWinner("Player Two")
            setOneDis(true)
            setTwoDis(true)
        }

    }, [ptwoScore, poneScore])

    const addScore = (player) => {
        if (player === 'one') {
            if (poneScore === 0) {
                setponeScore(15)
            }
            else if (poneScore === 15) {
                setponeScore(30)
            }
            else {
                setponeScore(poneScore + 10)
            }
        }
        else {
            if (ptwoScore === 0) {
                setptwoScore(15)
            }
            else if (ptwoScore === 15) {
                setptwoScore(30)
            }
            else {
                setptwoScore(ptwoScore + 10)
            }
        }
    }

    return (
        <React.Fragment>
            <div className="main-cont">
                <h1>Tennis Score Board</h1>
                <div>
                    <button id="btn-one" disabled={oneDis} onClick={() => addScore('one')}>Player One : {poneScore}</button>
                    <button id="btn-two" disabled={twoDis} onClick={() => addScore('two')}>Player Two : {ptwoScore}</button>
                </div>
                <h2>{winner}</h2>
                {oneDis && <a href="">Play Again?</a>}
            </div >
        </React.Fragment >
    )
}

export default TennisBoard
