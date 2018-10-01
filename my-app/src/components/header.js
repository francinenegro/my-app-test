import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {

    state = {
        hasScrolled: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const scrollTop = window.pageYOffset
        
        if (scrollTop > 50) {
            this.setState({ hasScrolled:true})
        }
        
        else {
            this.setState({ hasScrolled:false})
        }
    }

    render () {
        return (
            /* the line below is to verify the state,the first thing after the ? is the "if true" the other is the "else" */
            <div className={ this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header' }> 
            <div className="HeaderGroup">
                  <Link to="/"> <img src="/images/logo-designcode.svg" width="30"/></Link>
                  <Link to="/courses">Courses</Link>
                  <Link to="/workshops">Downloads</Link>
                  <Link to="/workshops">Workshops</Link>
                  <Link to="/buy"><button>Buy</button></Link>
                  </div>
         </div>
        )
    }
}


export default Header