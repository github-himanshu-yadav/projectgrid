import React from 'react'
import './Fashion.css'
import Product from './Product'
function Fashion({title}) {
  return (
    <div className='menu'>
        <div className='menu-title'>{title}</div>
        <div className='menu-content'>
          <Product
          desc='Realme Buds Q2 Neo with Environment Noise Cancellation (ENC) Bluetooth Headset  (Black, True Wireless)'
          image='https://rukminim1.flixcart.com/image/832/832/krayqa80/headphone/x/9/r/rma2010-realme-original-imag54ey5mxggzcy.jpeg?q=70'
          />
          <Product
          desc='Realme Buds Q2 Neo with Environment Noise Cancellation (ENC) Bluetooth Headset  (Black, True Wireless)'
          image='https://rukminim1.flixcart.com/image/832/832/krayqa80/headphone/x/9/r/rma2010-realme-original-imag54ey5mxggzcy.jpeg?q=70'
          />
          <Product
          desc='Realme Buds Q2 Neo with Environment Noise Cancellation (ENC) Bluetooth Headset  (Black, True Wireless)'
          image='https://rukminim1.flixcart.com/image/832/832/krayqa80/headphone/x/9/r/rma2010-realme-original-imag54ey5mxggzcy.jpeg?q=70'
          />
          <Product
          desc='Realme Buds Q2 Neo with Environment Noise Cancellation (ENC) Bluetooth Headset  (Black, True Wireless)'
          image='https://rukminim1.flixcart.com/image/832/832/krayqa80/headphone/x/9/r/rma2010-realme-original-imag54ey5mxggzcy.jpeg?q=70'
          />
          
        </div>
        
    </div>
  )
}

export default Fashion
