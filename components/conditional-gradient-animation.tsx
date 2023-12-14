import React from 'react'
import GradientAnimation from './gradient-animation'

function ConditionalGradientAnimation({ condition, children }: any) {
    return (
        <div>
            <div className={`hidden ${condition}:block`}>
                {children}
            </div>
            <div className={`${condition}:hidden`}>
                <GradientAnimation>
                    {children}
                </GradientAnimation>
            </div>
        </div>
    )
}

export default ConditionalGradientAnimation