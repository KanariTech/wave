import React from 'react';
import Contact from '../Contact';
import Contacts from './components/contacts';
import Filters from './components/filters';
import Search from './components/search';
const cn = require('classnames')
const data = [{"firstName": "matthew", "lastName": "kochakian"},
  {"firstName": "alvin", "lastName": "yakitori"},
  {"firstName": "jefferson", "lastName": "steelflex"},
]
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // activeList: 0,
      activeContact: 0
    }
  }
  setActiveContact = activeContact => this.setState({activeContact})
  render() {
    let {
          activeContact,
          // activeList
        } = this.state;
    return(
      <div className="home-module flex row-c-c">
        <div className={cn(["left", "home-w-l", "col", {"contact_active": activeContact !== "none"}])}>
          <Search />
          <Filters />
          <Contacts contacts={data} onClick={this.setActiveContact} activeContact={activeContact} />
        </div>
        <div className={cn([
          "right",
          "home-w-r",
          {
            "active": activeContact !== "none"
          }
        ])}>
        {
          activeContact !== "none"
            ? <Contact contact={data[activeContact]} onClose={this.setActiveContact} />
            : <div />
        }
        </div>
      </div>
    )
  }
}
