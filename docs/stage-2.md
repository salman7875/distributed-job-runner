At-least-once delivery
Jobs may run more than once But they should not be lost
Acknowledgement pattern Job is not “done” until explicitly acknowledged
Completion becomes an explicit event
Processing vs pending states
Pending queue
Processing queue Completed / failed outcome
Crash recovery Detect stuck jobs
Requeue them safely
Why Redis Lists are not enough You will feel their limitations This prepares you for Streams later ⚠️ This step introduces duplication risk, which is a feature, not a bug.
