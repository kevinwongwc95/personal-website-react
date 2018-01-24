# Refactoring Notifications

For this past week I had been tasked with revamping/implementing a notifications for our in house time tracking application. At first, the ticket was
only asking to add to the existing functionality, but soon realized that the entire system had to be redone in order to meet the needs of the stakeholder. The issue I mainly faced, was that my company's in house time tracking system was
currently partially implemented and contained a lot of redundant information in the database
which required many table joins and logically didn't correlate with what we needed notifications for.

### Needs

- Extensibility for Slack or in-app notifications in the future.
- Ability to have email notifications.
- Should be scalable, unsure as to how many notifications would be created/stored in the future.
- Don't want users to get spam for each individual notification, should be able to group by similar notifications for each user.

### Design

Going into detail, we focused on making a notifications table which with the following attributes

Notifications
-id
-user_id
-resource_type
-resource_type_id
-notification_type_id
-resolved

* `resource_type` - String which represents the table
* `resource_id` - int which represents the id in the table from the resource_type
* `notifications_type_id` - a foreign key pointing to another table which has what type of notification the row is.
* `resolved` - a datetime which has the option to be null, representing when and if the notification is resolved.

The design offered a good compromise between scalability, and extensibility. It allowed for other
resources not currently implemented to have notifications, and allowed a logical entry in the database for a notification.

### Proposal

After getting approval from the appropriate stakeholders, we migrated the tables to reflect our new designs and began restructuring the entire  
notifications system, starting from where they were detected to where they were being sent out to each user.
We decided on first focusing on using email as the medium to notify users, which would allow us to limit the scope of this larger feature, and hopefully
make testing easier on the team.
