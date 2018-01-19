declare var Notification: any;

/**
 * The Notification interface of the Notifications API is used to configure and 
 * display desktop notifications to the user
 */
export function notifyMe(title: string, options: NotificationOptions) {
    // Let's check if the browser supports notifications
    if (("Notification" in window) && Notification.permission === "granted") {
        // If it's okay let's create a notification
        new Notification(title, options);
    }
}
