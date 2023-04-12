import logo from './logo.svg';
import './App.css';
import * as data from './transaction'
import { useEffect, useState } from 'react';
import { SumOfTransactionOfMonth } from './utility';
import './Reward.css';

function RewardForm(props) {
    const { reward, label } = props

    return (

        <div>
            <label>{label}</label>
            <span className='reward'>{reward}</span>
        </div>

    );
}

export default RewardForm;
