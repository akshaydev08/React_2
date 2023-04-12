import logo from './logo.svg';
import './App.css';
import * as data from './transaction'
import { useEffect, useState } from 'react';
import { SumOfTransactionOfMonth } from './utility';
import './Reward.css';
import RewardForm from './RewardForm';
import { Month } from './Month';

function Reward(props) {
    const { transaction } = props
    const [month, setMonth] = useState(0);
    const [rewards, setRewards] = useState([]);
    const [totalReward, setTotalRewards] = useState(0);
    useEffect(() => {
        setMonth(new Date().getMonth() + 1)
    }, [transaction])

    useEffect(() => {
        if (month && transaction) {
            setRewards([]);
            setTotalRewards(0);
            for (let i = 0; i < 3; i++) {
                let currentMonth = month - i;
                if (currentMonth <= 0) {
                    currentMonth = 12;
                }
                let result = SumOfTransactionOfMonth(transaction, currentMonth - 1);
                setRewards(prevState => {
                    return [...prevState, { month: currentMonth, reward: result }]
                })
                setTotalRewards(prevState => prevState + result)
            }
        }
    }, [month, transaction])

    return (
        <div className="App">
            <div>Last 3 month reward point details below</div>
            {rewards.map(reward => <RewardForm reward={reward.reward} label={Month[reward.month]} />)}
            <RewardForm reward={totalReward} label="Total" />
        </div>
    );
}

export default Reward;
