import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Card from "../components/card"
import staticdata from "../../staticdata.json"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="Hero"> 
          <div className="HeroGroup">
        <h1>React workshop</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Go to page 2</Link>
        </div>
        </div>
<div className="CardGroup">
      {staticdata.cards.map(card => ( 
        <Card
        title={card.title}
        text={card.text}
        image={card.image}
        />
      ))}
        </div>
      </div>
    )
  }
}
