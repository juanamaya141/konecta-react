import React from 'react';
import NotificationSystem from 'react-notification-system';
import Crud from '../pages/Crud';

class App extends React.Component{

    constructor() {
        super();
        this.notificationSystem = React.createRef()
    }
    addNotification = (event, msg, type) => {
        event.preventDefault();
        const notification = this.notificationSystem.current;
        notification.addNotification({
            message: msg,
            level: type,
            autoDismiss: 5
        });
    }

    render(){
        
        return(
            <React.Fragment>
                <NotificationSystem ref={this.notificationSystem} />
                <Crud />
            </React.Fragment>
        );
    }
}

export default App;