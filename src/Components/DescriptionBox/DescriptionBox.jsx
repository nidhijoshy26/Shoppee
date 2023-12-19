import React from 'react'
import './Description.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="decpt-navigate">
            <div className="decpt-NavBox">
                Description
            </div>
            <div className="decpt-NavBox fade">
                Reviews (122)
            </div>
        </div>
          <div className="decpBox-description">
              <p>E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These e-commerce transactions typically fall within four types: business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.</p>
              <p>In the last two decades, e-commerce platforms -- such as Amazon and eBay -- have contributed to substantial growth in online retail. In 2011, e-commerce accounted for 5% of total retail sales according to the U.S. Census Bureau. By Q2 2020, after the start of the COVID-19 pandemic, e-commerce accounted for 16.5% of retail sales. Since then, it has fallen slightly to about 15% as physical stores reopened.</p>
          </div>
    </div>
  )
}

export default DescriptionBox