import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({ children }) => {
  return <section className='flex  '>{children}</section>
}

Wrapper.propTypes = {
  children: PropTypes.node
}
export default Wrapper
