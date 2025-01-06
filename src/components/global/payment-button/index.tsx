import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const PaymentButton = (props: Props) => {

    // WIP: Get their subscription details
    // WIP: Loading State

    return (
        <Button
            className='bg-gradient-to-r text-white rounded-full from-[#9685DB] via-[#9434E6] font-bold to-[#CC3BD4]'
        >
            Upgrade
        </Button>
    )
}

export default PaymentButton