# Notification Detection

Date: 2017-12-14

*This is a continuation from my previous post about refactoring notifications, this post will touch on the next step of
our team's notification refactoring project.*


After finalizing an implementation of the database tables and migrating the database
we began to implement the system of how to detect when a notifications should be sent.

### Sidekiq

The current utilized Sidekiq workers which ran in intervals specified in cron format when to
check if notifications were met. These Sidekiq workers would check various things

1. Check to see if an event occurred that warranted a notifications being sent
2. Check to see if there was an existing notification already created *(ex. Timesheet Overdue)*
3. If no existing notifications existed, a notification was created and filled with the appropriate attributes
like user_id, type, and resource.

### Callbacks?

It became clear to us that running the Sidekiq workers at specific times had its drawbacks.
1. How often would each worker run?
2. When would they run?
3. Would this scale as the app grew in complexity?

I began to look into other ways to get notifications working and ActiveRecord callbacks seemed like a viable option. Instead of running workers at a specific time leveraging callbacks to call specified methods when the model had changed would be more efficient. The checks would essentially be run anytime a specific row changed.

For a while this seemed optimal, but as we soon realized there was a tradeoff with this as well. Simplicity/Maintainability vs Scalability.

It was easier to use callbacks, but code maintainability would suffer. When each model has different callbacks, we soon found out the codebase would become un-maintainable. Additionally, with ActiveRecord there is an abstraction as to when the callbacks are run.

### Solution

Our solution was to utilize Sidekiq workers, which we scheduled to run at specific times in cron format. However, we were required to ask stakeholders when checks should be run and alert them that there could be a lapse of when a notification was created in between check times. This was surprisingly one of the more challenging aspects of notifications
