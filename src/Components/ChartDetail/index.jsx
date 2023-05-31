import { Grid } from '@mui/material'
import React from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import AddTaskIcon from '@mui/icons-material/AddTask'
import ReactApexChart from 'react-apexcharts'

function ChartDetail() {
  const ColumnStackedBarOptions = {
    series: [
      {
        name: 'HIGH',
        data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        color: '#EC726E'
      },
      {
        name: 'MEDIUM',
        data: [6, 6, 4, 6, 6, 4, 6, 6, 4, 6, 6, 6, 4, 6, 6, 4, 6, 6, 4, 6],
        color: '#68C2DF'
      },
      {
        name: 'LOW',
        data: [10, 10, 8, 10, 10, 8, 10, 10, 8, 10, 10, 10, 8, 10, 10, 8, 10, 10, 8, 10],
        color: '#F0B05D'
      }
    ],
    chart: {
      type: 'bar',
      width: 1000,
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 1900,
        options: {
          legend: {
            position: 'top',
            offsetX: -10,
            offsetY: 0
          }
        }
      },
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        horizontal: false,
        borderRadius: 0,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0.5,
      colors: ['#fff']
    },
    // title: {
    //   text: 'Fiction Books Sales'
    // },
    xaxis: {
      categories: [
        '192.168.100.01',
        '192.168.100.02',
        '192.168.100.03',
        '192.168.100.04',
        '192.168.100.05',
        '192.168.100.06',
        '192.168.100.07',
        '192.168.100.08',
        '192.168.100.09',
        '192.168.100.10',
        '192.168.100.01',
        '192.168.100.02',
        '192.168.100.03',
        '192.168.100.04',
        '192.168.100.05',
        '192.168.100.06',
        '192.168.100.07',
        '192.168.100.08',
        '192.168.100.09',
        '192.168.100.10'
      ],
      labels: {
        style: {
          colors: [
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff'
          ]
        }
      }
    },
    yaxis: {
      min: -1,
      max: 24,
      labels: {
        // formatter: function (val) {
        //   if (val % 2 === 0) {
        //     return val
        //   } else {
        //     return null
        //   }
        // },
        style: {
          colors: ['#fff']
        }
      }
    },
    fill: {
      opacity: 1,
      type: 'solid'
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetX: -20,
      offsetY: 0,
      markers: {
        radius: 15
      },
      labels: {
        colors: ['#fff']
      }
    },
    grid: {
      show: true,
      position: 'back',
      borderColor: '#9e9e9e',
      xaxis: {
        lines: {
          show: true
        }
      }
    }
  }

  return (
    <div className='mt-4  bg-black rounded w-[100%] h-[1125px] box-border flex flex-col items-center   duration-500 '>
      <nav className='flex bg-[#2D3347] h-[38px] w-[100%] align-middle px-1 items-center box-border'>
        <h3 className='text-lg text-white font-semibold'>Severity Wise Vulnerability</h3>
      </nav>

      <div className='bg-[#2D3347] 3lg:w-[1550px] mt-5'>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <div className='p-10 h-[124px] w-[360px] 3lg:w-[350px] m-4 bg-black flex flex-row  justify-between items-start content-between'>
              <div className='flex flex-col '>
                <h1 className='text-white'>02</h1>
                <p className='text-white'>HIGH</p>
              </div>
              <div className='flex flex-col'>
                <WarningIcon className='text-white' />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <div className='p-10 h-[124px] w-[360px] 3lg:w-[350px] m-4 bg-black flex flex-row  justify-between items-start content-between'>
              <div className='flex flex-col'>
                <h1 className='text-white'>20</h1>
                <p className='text-white'>MEDIUM</p>
              </div>
              <div className='flex flex-col'>
                <InfoOutlinedIcon className='text-white' />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <div className='p-10 h-[124px] w-[360px] 3lg:w-[350px] m-4 bg-black flex flex-row  justify-between items-start content-between'>
              <div className='flex flex-col'>
                <h1 className='text-white'>18</h1>
                <p className='text-white'>LOW</p>
              </div>
              <div className='flex flex-col'>
                <InfoOutlinedIcon className='text-white' />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <div className='p-10 h-[124px] w-[360px] 3lg:w-[350px] m-4 bg-black flex flex-row  justify-between items-start content-between'>
              <div className='flex flex-col'>
                <h1 className='text-white'>456</h1>
                <p className='text-white'>LOG</p>
              </div>
              <div className='flex flex-col'>
                <AddTaskIcon className='text-white' />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className='flex justify-center items-center mt-8'>
        <Grid container spacing={2}> 
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div style={{ background: '#2D3347', position: 'relative' }} className='w-[1550px] h-[420px] 3lg:w-[1550px] m-auto'>
              <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
                <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>
                  Top 20 System Wise Summary
                </h3>
              </div>
              <ReactApexChart options={ColumnStackedBarOptions} series={ColumnStackedBarOptions.series} height='390px' type='bar' />
            </div>
          </Grid>
          <div className='m-auto flex flex-row justify-between items-center content-between mt-5 gap-5'>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div style={{ background: '#2D3347', position: 'relative' }} className='box-border w-[760px] h-[420px] 3lg:w-[755px]'>
                <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
                  <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>
                    Top 20 System Wise Summary
                  </h3>
                </div>
                <ReactApexChart options={ColumnStackedBarOptions} series={ColumnStackedBarOptions.series} height='390px' type='bar' />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div style={{ background: '#2D3347', position: 'relative' }} className='box-border w-[760px] h-[420px] 3lg:w-[760px] '>
                <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
                  <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>
                    Top 20 System Wise Summary
                  </h3>
                </div>
                <ReactApexChart options={ColumnStackedBarOptions} series={ColumnStackedBarOptions.series} height='390px' type='bar' />
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default ChartDetail
