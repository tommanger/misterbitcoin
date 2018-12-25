import React from 'react'
import { Sparklines, SparklinesLine ,SparklinesBars} from 'react-sparklines';


const ContactList = ({ chart }) => {
    var newChart = chart.values.reduce((newChart, currChart) => {
        newChart.push(currChart.y)
        return newChart
    }, [])
    return <div>
        <Sparklines data={newChart}>
            <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
            <SparklinesLine style={{ stroke: "#41c3f9", fill: "green" }} />
        </Sparklines>
    </div>
}

export default ContactList