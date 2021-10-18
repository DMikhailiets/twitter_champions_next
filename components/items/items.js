import { Empty, Comment, Avatar, Tooltip } from 'antd'
import React from 'react'
import style from './items.module.css'
import moment from 'moment'


const Items = ({items}) => {
    return (
  <div className={style.wrapper}>{
            ! items
            ? <Empty description="" style={{marginTop: '20vh'}}/>
            :     <div className={style.wrapper}>{
                ! items
                ? <Empty style={{marginTop: '40vh'}}/>
                : <div className={style.tweetsWrapper}>{ items.map((item ) => <Comment
                    key={item.id}
                    className={style.tweet}
                    author={<a>{item.title}</a>}
                    avatar={
                        <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt={item.title}
                        />
                    }
                    content={
                        <p>
                        {item.title}
                        </p>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                />)}</div>
            }</div>
        }</div>

    )
}

export default Items