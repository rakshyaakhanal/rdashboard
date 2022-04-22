import React from 'react';
import './NewUser.css';

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form action='' className='newUserForm'>
                <div className='newUserItem'>
                    <label for=''>Username</label>
                    <input type='text' placeholder='jeonkoo' />
                </div>

                <div className='newUserItem'>
                    <label for=''>Full Name</label>
                    <input type='text' placeholder='Jeon Jungkook' />
                </div>

                <div className='newUserItem'>
                    <label for=''>Email</label>
                    <input type='email' placeholder='jeonkoo@gmail.com' />
                </div>

                <div className='newUserItem'>
                    <label for=''>Password</label>
                    <input type='password' placeholder='password' />
                </div>

                <div className='newUserItem'>
                    <label for=''>Phone</label>
                    <input type='text' placeholder='+1 123 456 78' />
                </div>

                <div className='newUserItem'>
                    <label for=''>Address</label>
                    <input type='text' placeholder='New York | USA' />
                </div>

                <div className='newUserItem'>
                    <label for=''>Gender</label>
                    <div className='newUserGender'>
                        <input type='radio' name='gender' id='male' value='male' />
                        <label for='Male'>Male</label>
                        <input type='radio' name='gender' id='female' value='female' />
                        <label for='Female'>Female</label>
                        <input type='radio' name='gender' id='other' value='other' />
                        <label for='Other'>Other</label>
                    </div>
                </div>

                <div className='newUserItem'>
                    <label for=''>Active</label>
                    <select name='active' id='active' className='newUserSelect'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='newUserButton'>Create</button>
            </form>
        </div>
    )
}

export default NewUser;
