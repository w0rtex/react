import React from 'react'

const repeatTitle = (title: string, times: number) => {
    let res = []

    for (let i = 0; i < times; i++) {
        res.push(
            <h1 className="title" key={i}>
                {title}
            </h1>
        )
    }

    return res
}

export { repeatTitle }
