import React, { useState } from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'
import Button from '@mui/material/Button'
import { Checkbox, FormControlLabel } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const { RangePicker } = DatePicker

function Navbar() {
  const [dates, setDates] = useState([])

  return (
    <div className='flex h-[92px] gap-4 flex-row  justify-between items-start content-between 3xl:mb-5'>
      <div>
        <p className='text-3xl text-white 3xl:text-7xl '>Vulnerability Dashboard</p>
      </div>
      <div>
        <RangePicker
          onChange={(values) => {
            setDates(
              values?.map((item) => {
                return moment(item).format('YYYY-DD-MM')
              })
            )
          }}
          className='bg-[#e2e3e6] 3xl:w-[800px] 3xl:h-[50px] 3xl:text-4xl'
        />
      </div>
      <div className='bg-[#2D3347] text-white flex items-center gap-3 '>
        <span className='px-3 3xl:text-3xl'>Severity |</span>
        <FormControlLabel control={<Checkbox />} label={<span className='3xl:text-3xl'>High</span>} />
        <FormControlLabel control={<Checkbox />} label={<span className='3xl:text-3xl'>Medium</span>} />
        <FormControlLabel control={<Checkbox />} label={<span className='3xl:text-3xl'>Low</span>} />
        <FormControlLabel control={<Checkbox />} label={<span className='3xl:text-3xl'>Log</span>} />
        <Button
          className='3xl:text-5xl'
          variant='contained'
          style={{ backgroundColor: 'black', color: 'white' }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </div>
    </div>
  )
}

export default Navbar
