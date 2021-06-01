import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div>
            <Section 
                title="Modle S"
                descripton="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Modle Y"
                descripton="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Modle 3 "
                descripton="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Modle X"
                descripton="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
        </div>
    )
}

export default Home
