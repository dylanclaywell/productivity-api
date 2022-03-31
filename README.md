# productivity-api

API backend for the Productivity frontend

# Database

Until I programatically create the database, here are the SQL statements needed for the application to run:

```sql
CREATE TABLE "todoItems" (
    "id" TEXT NOT NULL UNIQUE,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "notes" TEXT,
    "isCompleted" INTEGER CHECK(isCompleted in ('0', '1')),
    "dateCreated" TEXT NOT NULL,
	"timeCreated" TEXT NOT NULL,
	"timezoneCreated" TEXT NOT NULL,
    "dateCompleted" TEXT NOT NULL,
	"timeCompleted" TEXT NOT NULL,
	"timezoneCompleted" TEXT NOT NULL,
    PRIMARY KEY("id")
);
```
