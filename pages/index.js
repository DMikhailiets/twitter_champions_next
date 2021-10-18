import React, { useState } from "react"
import { Input, Layout, Row } from "antd"
import { Items } from '../components'
import styles from './styles.module.css'
import myAPI from '../API/myAPI'

const { Search } = Input;

const Index = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    async function load (keyWord) {
        try {
            setData(null)
            if (keyWord) {
                setIsLoading(true)
                const response = await myAPI.getData(keyWord)
                setData(response.data)
            }
        } catch (err) {
            console.error(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Layout>
            <Row className={styles.wrapper}>
                <h1>Twitter champions 🦸🏻‍♂️</h1>
                <span>Find the best people to follow on any topic. Based on value, not followers.</span>
                <br/>
                <br/>
                <Search loading={isLoading} allowClear placeholder="input search text" onSearch={async value => await load(value)} enterButton style={{maxWidth: '30vw'}}/>
                <Items items={data}/>
            </Row>    
        </Layout>
    )
}

export default Index