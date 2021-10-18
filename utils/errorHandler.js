import { Notification } from "../components"

const errorHandler = (err) => {
    if(err.response){
    Notification({
        text: err.response.data.error,
        type: 'error',
        title: "Access denied or internal service error was received"
      })
    } else if (err){
        console.log(err)
        Notification({
            text: 'server not found',
            type: 'error',
            title: "Network error"
        })
    } else {
        Notification({
            text: 'Something went wrong',
            type: 'error',
            title: "Oops..."
        })
    }
    return null
}

export default errorHandler