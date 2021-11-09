import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class Header extends React.Component {
    /*images=[
        {
            source:'logo',
            alt_text:'logo'
        },
        {
            source:'cart',
            alt_text:'cart'
        }
        ];*/
    render() { 
        return (<header className="header_body">
            <img src="/images/lighthouse-logo.jpg" alt="logo" className="header_logo"/>
            {/* search_bar starts..*/}
            <div className="header_search">
                <div className="header_search_space">
                    <label for="Search"></label>
                    <input type='text' id="Search" name="Search" placeholder="Search for a product!"/>
                    <div className="header_searchIcon"><SearchIcon color="primary"/></div>
                    </div>
                </div>
            {/* search bar ends*/}
            <a href='#' className='header_sign_in'>Hello</a>
            <a href='#' className='header_guest'>Guest</a>
            <a href="#" classname="header_cart"><ShoppingCartIcon color="primary"/></a>

        </header>);
    }
}
 
export default Header;