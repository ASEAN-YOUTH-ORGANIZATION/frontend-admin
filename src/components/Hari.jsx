import React from 'react'

function Hari() {
    const d = new Date()
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat']
    const bulans = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    const hari = weekDay[d.getDay()]
    const bulan = bulans[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()

  return (
    <div className='date'>
      <h6>{hari}, {date} {bulan} {year}</h6>
    </div>
  )
}

export default Hari