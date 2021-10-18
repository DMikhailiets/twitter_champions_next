import { notification } from "antd"

const Notification = ({ text = '', type = "info", title = '', duration = 3 }) =>
    notification[type]({
        message: title,
        description: text,
        duration: duration,
})

export default Notification