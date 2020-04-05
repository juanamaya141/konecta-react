import React from 'react';
import NotificationSystem from 'react-notification-system';
 
export default class Notification extends React.Component {
    
    
 
    render() {
        const { notificationSystem } = this.props;
        return (
            <NotificationSystem ref={notificationSystem} />
        );
    }
}