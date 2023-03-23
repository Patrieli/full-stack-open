import React, { useState } from 'react';

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalCount = good + neutral + bad

  if (totalCount === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>no feedback given</p>
      </div>
    )
  }

  const average = (good - bad) / totalCount
  const positivePercentage = (good / totalCount) * 100

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="good" value={good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="neutral" value={neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="bad" value={bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="all" value={totalCount} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" value={average || 0} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="positive" value={`${positivePercentage || 0}%`} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
