'use client'

import { useState } from 'react'

export default function Counter({ initialValue }: { initialValue: number }) {
    const [counter, setCounter] = useState(initialValue)

    return (
        <div onClick={() => setCounter(counter + 1)}>
            Counter: {counter}
        </div>
    )
}