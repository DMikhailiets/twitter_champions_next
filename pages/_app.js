import NextNprogress from 'nextjs-progressbar'
import 'antd/dist/antd.css'

const MyApp = ({Component, pageProps}) => {
    return (
        <>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp