import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './FeaturedInfo.css';

const FeaturedInfo = () => {
    return (
        <div className='featured'>

            <div className='featuredItem'>
                <span className='featuredTitle'> Revenue </span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$901</span>
                    <span className='featuredMoneyRate'>-6.4 <ArrowDownwardIcon className='featuredIcon Negative' /></span>
                </div>
                <span className='featuredSub'> Compared to last month </span>
            </div>

            <div className='featuredItem'>
                <span className='featuredTitle'> Sales </span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$1260</span>
                    <span className='featuredMoneyRate'>-1.8 <ArrowDownwardIcon className='featuredIcon Negative' /></span>
                </div>
                <span className='featuredSub'> Compared to last month </span>
            </div>

            <div className='featuredItem'>
                <span className='featuredTitle'> Cost </span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$1154</span>
                    <span className='featuredMoneyRate'>+7.4 <ArrowUpwardIcon className='featuredIcon' /></span>
                </div>
                <span className='featuredSub'> Compared to last month </span>
            </div>

        </div>
    )
}

export default FeaturedInfo;
