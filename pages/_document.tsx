import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
    return (
        <Html className='dark'>
            <Head>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
// dark:bg-gray-900