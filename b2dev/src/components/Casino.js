import React from 'react'

class Casino extends React.component {
    render () {
        return (
            <div>
                {this.props.casinos.map((c,i) => <p key={i}>{c.name}</p>)}             }
            </div>
        )
    }
}
 export default Casino

