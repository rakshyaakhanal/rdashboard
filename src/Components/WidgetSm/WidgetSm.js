import React from 'react';
import './WidgetSm.css';
import VisibilityIcon  from '@mui/icons-material/Visibility';

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
             <span className='widgetSmTitle'>New Join Members</span>
             <ul className='widgetSmList'>
                 <li className='widgetSmListItem'>
                     <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='widgetSmImg' />
                     <div className='widgetSmUser'>
                         <span className='widgetSmUsername'>Rakshya</span>
                         <span className='widgetSmUserTitle'>React Developer</span>
                     </div>
                     <button className='widgetSmButton'>
                         <VisibilityIcon className='widgetSmIcon' />
                         Display
                     </button>
                 </li>

                 <li className='widgetSmListItem'>
                     <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='widgetSmImg' />
                     <div className='widgetSmUser'>
                         <span className='widgetSmUsername'>Rakshya</span>
                         <span className='widgetSmUserTitle'>React Developer</span>
                     </div>
                     <button className='widgetSmButton'>
                         <VisibilityIcon className='widgetSmIcon' />
                         Display
                     </button>
                 </li>

                 <li className='widgetSmListItem'>
                     <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='widgetSmImg' />
                     <div className='widgetSmUser'>
                         <span className='widgetSmUsername'>Rakshya</span>
                         <span className='widgetSmUserTitle'>React Developer</span>
                     </div>
                     <button className='widgetSmButton'>
                         <VisibilityIcon className='widgetSmIcon' />
                         Display
                     </button>
                 </li>

                 <li className='widgetSmListItem'>
                     <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='widgetSmImg' />
                     <div className='widgetSmUser'>
                         <span className='widgetSmUsername'>Rakshya</span>
                         <span className='widgetSmUserTitle'>React Developer</span>
                     </div>
                     <button className='widgetSmButton'>
                         <VisibilityIcon className='widgetSmIcon' />
                         Display
                     </button>
                 </li>

                 <li className='widgetSmListItem'>
                     <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='widgetSmImg' />
                     <div className='widgetSmUser'>
                         <span className='widgetSmUsername'>Rakshya</span>
                         <span className='widgetSmUserTitle'>React Developer</span>
                     </div>
                     <button className='widgetSmButton'>
                         <VisibilityIcon className='widgetSmIcon' />
                         Display
                     </button>
                 </li>
             </ul>
        </div>
    )
}

export default WidgetSm;