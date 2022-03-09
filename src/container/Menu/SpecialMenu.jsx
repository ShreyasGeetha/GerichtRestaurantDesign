import React from 'react';

import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='headtext__cormorant'>
        Today's Special
      </h1>
    </div>

    <div className='app__specialMenu-menu'>
      {/* left menu */}
      <div className='app_specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'> Wine & Beer</p>
        {/* Menu items */}
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={ wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>
      {/* middle image */}
      <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt="menu img" />
      </div>
      {/* right menu */}
      <div className='app_specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'> Cocktails</p>
        {/* Menu items */}
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={ cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>

    {/* view more button */}
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
