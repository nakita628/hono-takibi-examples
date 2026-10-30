<h1 id="caldiy-api-v2">Cal.diy API v2 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="caldiy-api-v2-api-keys">Api Keys</h1>

## Refresh API Key

<a id="opIdApiKeysController_refresh"></a>

> Code samples

```bash
curl https://api.cal.com/v2/api-keys/refresh \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "apiKeyDaysValid": 60,
    "apiKeyNeverExpires": true
  }'
```

`POST /v2/api-keys/refresh`

Generate a new API key and delete the current one. Provide API key to refresh as a Bearer token in the Authorization header (e.g. "Authorization: Bearer <apiKey>").

> Body parameter

```json
{
  "apiKeyDaysValid": 60,
  "apiKeyNeverExpires": true
}
```

<h3 id="refresh-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|body|body|[RefreshApiKeyInput](#schemarefreshapikeyinput)|true|none|
|» apiKeyDaysValid|body|number|false|For how many days is managed organization api key valid. Defaults to 30 days.|
|» apiKeyNeverExpires|body|boolean|false|If true, organization api key never expires.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "apiKey": "string"
  }
}
```

<h3 id="refresh-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RefreshApiKeyOutput](#schemarefreshapikeyoutput)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-bookings">Bookings</h1>

## Get all bookings

<a id="opIdBookingsController_2024_08_13_getBookings"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`GET /v2/bookings`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

<h3 id="get-all-bookings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|status|query|[string]|false|Filter bookings by status. If you want to filter by multiple statuses, separate them with a comma.|
|attendeeEmail|query|string|false|Filter bookings by the attendee's email address.|
|attendeeName|query|string|false|Filter bookings by the attendee's name.|
|bookingUid|query|string|false|Filter bookings by the booking Uid.|
|eventTypeIds|query|string|false|Filter bookings by event type ids belonging to the user. Event type ids must be separated by a comma.|
|eventTypeId|query|string|false|Filter bookings by event type id belonging to the user.|
|teamsIds|query|string|false|Filter bookings by team ids that user is part of. Team ids must be separated by a comma.|
|teamId|query|string|false|Filter bookings by team id that user is part of|
|afterStart|query|string|false|Filter bookings with start after this date string.|
|beforeEnd|query|string|false|Filter bookings with end before this date string.|
|afterCreatedAt|query|string|false|Filter bookings that have been created after this date string.|
|beforeCreatedAt|query|string|false|Filter bookings that have been created before this date string.|
|afterUpdatedAt|query|string|false|Filter bookings that have been updated after this date string.|
|beforeUpdatedAt|query|string|false|Filter bookings that have been updated before this date string.|
|sortStart|query|string|false|Sort results by their start time in ascending or descending order.|
|sortEnd|query|string|false|Sort results by their end time in ascending or descending order.|
|sortCreated|query|string|false|Sort results by their creation time (when booking was made) in ascending or descending order.|
|sortUpdatedAt|query|string|false|Sort results by their updated time (for example when booking status changes) in ascending or descending order.|
|take|query|number|false|The number of items to return|
|skip|query|number|false|The number of items to skip|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|upcoming|
|status|recurring|
|status|past|
|status|cancelled|
|status|unconfirmed|
|sortStart|asc|
|sortStart|desc|
|sortEnd|asc|
|sortEnd|desc|
|sortCreated|asc|
|sortCreated|desc|
|sortUpdatedAt|asc|
|sortUpdatedAt|desc|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 123,
      "uid": "booking_uid_123",
      "title": "Consultation",
      "description": "Learn how to integrate scheduling into marketplace.",
      "hosts": [
        {
          "id": 1,
          "name": "Jane Doe",
          "email": "jane100@example.com",
          "displayEmail": "jane100@example.com",
          "username": "jane100",
          "timeZone": "America/Los_Angeles"
        }
      ],
      "status": "accepted",
      "cancellationReason": "User requested cancellation",
      "cancelledByEmail": "canceller@example.com",
      "reschedulingReason": "User rescheduled the event",
      "rescheduledByEmail": "rescheduler@example.com",
      "rescheduledFromUid": "previous_uid_123",
      "rescheduledToUid": "new_uid_456",
      "start": "2024-08-13T15:30:00Z",
      "end": "2024-08-13T16:30:00Z",
      "duration": 60,
      "eventTypeId": 50,
      "eventType": {
        "id": 1,
        "slug": "some-event"
      },
      "meetingUrl": "https://example.com/recurring-meeting",
      "location": "https://example.com/meeting",
      "absentHost": true,
      "createdAt": "2024-08-13T15:30:00Z",
      "updatedAt": "2024-08-13T15:30:00Z",
      "metadata": {
        "key": "value"
      },
      "rating": 4,
      "icsUid": "ics_uid_123",
      "attendees": [
        {
          "name": "John Doe",
          "email": "john@example.com",
          "displayEmail": "john@example.com",
          "timeZone": "America/New_York",
          "language": "en",
          "absent": false,
          "phoneNumber": "+1234567890"
        }
      ],
      "guests": [
        "guest1@example.com",
        "guest2@example.com"
      ],
      "bookingFieldsResponses": {
        "customField": "customValue"
      }
    }
  ],
  "pagination": {
    "totalItems": 123,
    "remainingItems": 103,
    "returnedItems": 10,
    "itemsPerPage": 10,
    "currentPage": 2,
    "totalPages": 13,
    "hasNextPage": true,
    "hasPreviousPage": true
  },
  "error": {}
}
```

<h3 id="get-all-bookings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingsOutput_2024_08_13](#schemagetbookingsoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a booking

<a id="opIdBookingsController_2024_08_13_createBooking"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13' \
  -d '{
    "start": "2024-08-13T09:00:00Z",
    "attendee": {
      "name": "John Doe",
      "timeZone": "America/New_York",
      "phoneNumber": "+919876543210",
      "language": "it",
      "email": "john.doe@example.com"
    },
    "bookingFieldsResponses": {
      "customField": "customValue"
    },
    "eventTypeId": 123,
    "eventTypeSlug": "my-event-type",
    "username": "john-doe",
    "teamSlug": "john-doe",
    "organizationSlug": "acme-corp",
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "meetingUrl": "https://example.com/meeting",
    "location": {
      "type": "address"
    },
    "metadata": {
      "key": "value"
    },
    "lengthInMinutes": 30,
    "routing": {
      "responseId": 123,
      "teamMemberIds": [
        101,
        102
      ]
    },
    "emailVerificationCode": "123456"
  }'
```

`POST /v2/bookings`


      POST /v2/bookings is used to create regular bookings, recurring bookings and instant bookings. The request bodies for all 3 are almost the same except:
      If eventTypeId in the request body is id of a regular event, then regular booking is created.

      If it is an id of a recurring event type, then recurring booking is created.

      Meaning that the request bodies are equal but the outcome depends on what kind of event type it is with the goal of making it as seamless for developers as possible.

      The start needs to be in UTC aka if the timezone is GMT+2 in Rome and meeting should start at 11, then UTC time should have hours 09:00 aka without time zone.

      Finally, there are 2 ways to book an event type belonging to an individual user:
      1. Provide `eventTypeId` in the request body.
      2. Provide `eventTypeSlug` and `username` and optionally `organizationSlug` if the user with the username is within an organization.

      And 2 ways to book and event type belonging to a team:
      1. Provide `eventTypeId` in the request body.
      2. Provide `eventTypeSlug` and `teamSlug` and optionally `organizationSlug` if the team with the teamSlug is within an organization.

      If you are creating a seated booking for an event type with 'show attendees' disabled, then to retrieve attendees in the response either set 'show attendees' to true on event type level or
      you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.

      For event types that have SMS reminders enabled, you need to pass the attendee's phone number in the request body via `attendee.phoneNumber` (e.g., "+19876543210" in international format). This is an optional field, but becomes required when SMS reminders are enabled for the event type. For the complete attendee object structure, see the attendee schema in the `/docs` Swagger endpoint.

      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
      

> Body parameter

```json
{
  "start": "2024-08-13T09:00:00Z",
  "attendee": {
    "name": "John Doe",
    "timeZone": "America/New_York",
    "phoneNumber": "+919876543210",
    "language": "it",
    "email": "john.doe@example.com"
  },
  "bookingFieldsResponses": {
    "customField": "customValue"
  },
  "eventTypeId": 123,
  "eventTypeSlug": "my-event-type",
  "username": "john-doe",
  "teamSlug": "john-doe",
  "organizationSlug": "acme-corp",
  "guests": [
    "guest1@example.com",
    "guest2@example.com"
  ],
  "meetingUrl": "https://example.com/meeting",
  "location": {
    "type": "address"
  },
  "metadata": {
    "key": "value"
  },
  "lengthInMinutes": 30,
  "routing": {
    "responseId": 123,
    "teamMemberIds": [
      101,
      102
    ]
  },
  "emailVerificationCode": "123456"
}
```

<h3 id="create-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|Authorization|header|string|false|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|x-cal-secret-key|header|string|false|For platform customers - OAuth client secret key|
|x-cal-client-id|header|string|false|For platform customers - OAuth client ID|
|body|body|[CreateBookingInput_2024_08_13](#schemacreatebookinginput_2024_08_13) \| [CreateRecurringBookingInput_2024_08_13](#schemacreaterecurringbookinginput_2024_08_13)|true|Accepts different types of booking input: Create Booking (Option 1) or Create Recurring Booking (Option 2)|
|» *oneOf*|body|[CreateBookingInput_2024_08_13](#schemacreatebookinginput_2024_08_13)|false|none|
|» *oneOf*|body|[CreateRecurringBookingInput_2024_08_13](#schemacreaterecurringbookinginput_2024_08_13)|false|none|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

<h3 id="create-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateBookingOutput_2024_08_13](#schemacreatebookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a booking by seat UID

<a id="opIdBookingsController_2024_08_13_getBookingBySeatUid"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/by-seat/string \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`GET /v2/bookings/by-seat/{seatUid}`

Get a seated booking by its seat reference UID. This is useful when you have a seatUid from a seated booking and want to retrieve the full booking details.

      If you are fetching a seated booking for an event type with 'show attendees' disabled, then to retrieve attendees in the response either set 'show attendees' to true on event type level or
      you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.

      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
      

<h3 id="get-a-booking-by-seat-uid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|seatUid|path|string|true|none|
|Authorization|header|string|false|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|x-cal-secret-key|header|string|false|For platform customers - OAuth client secret key|
|x-cal-client-id|header|string|false|For platform customers - OAuth client ID|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  },
  "error": {}
}
```

<h3 id="get-a-booking-by-seat-uid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingOutput_2024_08_13](#schemagetbookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a booking

<a id="opIdBookingsController_2024_08_13_getBooking"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`GET /v2/bookings/{bookingUid}`

`:bookingUid` can be

      1. uid of a normal booking

      2. uid of one of the recurring booking recurrences

      3. uid of recurring booking which will return an array of all recurring booking recurrences (stored as recurringBookingUid on one of the individual recurrences).

      If you are fetching a seated booking for an event type with 'show attendees' disabled, then to retrieve attendees in the response either set 'show attendees' to true on event type level or
      you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.

      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
      

<h3 id="get-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|false|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|x-cal-secret-key|header|string|false|For platform customers - OAuth client secret key|
|x-cal-client-id|header|string|false|For platform customers - OAuth client ID|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  },
  "error": {}
}
```

<h3 id="get-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingOutput_2024_08_13](#schemagetbookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all the recordings for the booking

<a id="opIdBookingsController_2024_08_13_getBookingRecordings"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/recordings \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`GET /v2/bookings/{bookingUid}/recordings`

Fetches all the recordings for the booking `:bookingUid`. Requires authentication and proper authorization. Access is granted if you are the booking organizer, team admin or org admin/owner.

    <Note>cal-api-version: `2024-08-13` is required in the request header.</Note>
    

<h3 id="get-all-the-recordings-for-the-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "error": {},
  "data": [
    {
      "id": "1234567890",
      "roomName": "daily-video-room-123",
      "startTs": 1678901234,
      "status": "completed",
      "maxParticipants": 10,
      "duration": 3600,
      "shareToken": "share-token-123",
      "downloadLink": "https://cal-video-recordings.s3.us-east-2.amazonaws.com/meetco/123s",
      "error": "Error message"
    }
  ]
}
```

<h3 id="get-all-the-recordings-for-the-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingRecordingsOutput](#schemagetbookingrecordingsoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Cal Video real time transcript download links for the booking

<a id="opIdBookingsController_2024_08_13_getBookingTranscripts"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/transcripts \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`GET /v2/bookings/{bookingUid}/transcripts`

Fetches all the transcript download links for the booking `:bookingUid`

    <Note>
    Transcripts are generated when clicking "Transcribe" during a Cal Video meeting. Download links are valid for 1 hour only - make a new request to generate fresh links after expiration.

    Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.
    </Note>
    

<h3 id="get-cal-video-real-time-transcript-download-links-for-the-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    "https://transcript1.com",
    "https://transcript2.com"
  ],
  "error": {}
}
```

<h3 id="get-cal-video-real-time-transcript-download-links-for-the-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingTranscriptsOutput](#schemagetbookingtranscriptsoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Reschedule a booking

<a id="opIdBookingsController_2024_08_13_rescheduleBooking"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/reschedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13' \
  -d '{
    "start": "2024-08-13T09:00:00Z",
    "rescheduledBy": "string",
    "reschedulingReason": "User requested reschedule",
    "emailVerificationCode": "123456"
  }'
```

`POST /v2/bookings/{bookingUid}/reschedule`

Reschedule a booking or seated booking

    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
    

> Body parameter

```json
{
  "start": "2024-08-13T09:00:00Z",
  "rescheduledBy": "string",
  "reschedulingReason": "User requested reschedule",
  "emailVerificationCode": "123456"
}
```

<h3 id="reschedule-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|false|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|x-cal-secret-key|header|string|false|For platform customers - OAuth client secret key|
|x-cal-client-id|header|string|false|For platform customers - OAuth client ID|
|body|body|[RescheduleBookingInput_2024_08_13](#schemareschedulebookinginput_2024_08_13) \| [RescheduleSeatedBookingInput_2024_08_13](#schemarescheduleseatedbookinginput_2024_08_13)|true|Accepts different types of reschedule booking input: Reschedule Booking (Option 1) or Reschedule Seated Booking (Option 2). If you're rescheduling a seated booking as org admin of booking host, pass booking input for Reschedule Booking (Option 1) along with your access token in the request header.<br><br>      If you are rescheduling a seated booking for an event type with 'show attendees' disabled, then to retrieve attendees in the response either set 'show attendees' to true on event type level or<br>      you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.|
|» *oneOf*|body|[RescheduleBookingInput_2024_08_13](#schemareschedulebookinginput_2024_08_13)|false|none|
|» *oneOf*|body|[RescheduleSeatedBookingInput_2024_08_13](#schemarescheduleseatedbookinginput_2024_08_13)|false|none|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

<h3 id="reschedule-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[RescheduleBookingOutput_2024_08_13](#schemareschedulebookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel a booking

<a id="opIdBookingsController_2024_08_13_cancelBooking"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13' \
  -d '{
    "cancellationReason": "User requested cancellation",
    "cancelSubsequentBookings": true
  }'
```

`POST /v2/bookings/{bookingUid}/cancel`

:bookingUid can be :bookingUid of an usual booking, individual recurrence or recurring booking to cancel all recurrences.

    
Cancelling normal bookings:
    If the booking is not seated and not recurring, simply pass :bookingUid in the request URL `/bookings/:bookingUid/cancel` and optionally cancellationReason in the request body `{"cancellationReason": "Will travel"}`.

    
Cancelling seated bookings:
    It is possible to cancel specific seat within a booking as an attendee or all of the seats as the host.
    
1. As an attendee - provide :bookingUid in the request URL `/bookings/:bookingUid/cancel` and seatUid in the request body `{"seatUid": "123-123-123"}` . This will remove this particular attendance from the booking.
    
2. As the host or org admin of host - host can cancel booking for all attendees aka for every seat, this also applies to org admins. Provide :bookingUid in the request URL `/bookings/:bookingUid/cancel` and cancellationReason in the request body `{"cancellationReason": "Will travel"}` and `Authorization: Bearer token` request header where token is event type owner (host) credential. This will cancel the booking for all attendees.

    
Cancelling recurring seated bookings:
    For recurring seated bookings it is not possible to cancel all of them with 1 call
    like with non-seated recurring bookings by providing recurring bookind uid - you have to cancel each recurrence booking by its bookingUid + seatUid.

    If you are cancelling a seated booking for an event type with 'show attendees' disabled, then to retrieve attendees in the response either set 'show attendees' to true on event type level or
    you have to provide an authentication method of event type owner, host, team admin or owner or org admin or owner.

    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
    

> Body parameter

```json
{
  "cancellationReason": "User requested cancellation",
  "cancelSubsequentBookings": true
}
```

<h3 id="cancel-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|false|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|x-cal-secret-key|header|string|false|For platform customers - OAuth client secret key|
|x-cal-client-id|header|string|false|For platform customers - OAuth client ID|
|body|body|[CancelBookingInput_2024_08_13](#schemacancelbookinginput_2024_08_13) \| [CancelSeatedBookingInput_2024_08_13](#schemacancelseatedbookinginput_2024_08_13)|true|Accepts different types of cancel booking input: Cancel Booking (Option 1 which is for normal or recurring bookings) or Cancel Seated Booking (Option 2 which is for seated bookings)|
|» *oneOf*|body|[CancelBookingInput_2024_08_13](#schemacancelbookinginput_2024_08_13)|false|none|
|» *oneOf*|body|[CancelSeatedBookingInput_2024_08_13](#schemacancelseatedbookinginput_2024_08_13)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

<h3 id="cancel-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CancelBookingOutput_2024_08_13](#schemacancelbookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Mark a booking absence

<a id="opIdBookingsController_2024_08_13_markNoShow"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/mark-absent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13' \
  -d '{
    "host": false,
    "attendees": [
      {
        "email": "string",
        "absent": true
      }
    ]
  }'
```

`POST /v2/bookings/{bookingUid}/mark-absent`

The provided authorization header refers to the owner of the booking.

    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
    

> Body parameter

```json
{
  "host": false,
  "attendees": [
    {
      "email": "string",
      "absent": true
    }
  ]
}
```

<h3 id="mark-a-booking-absence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[MarkAbsentBookingInput_2024_08_13](#schemamarkabsentbookinginput_2024_08_13)|true|none|
|» host|body|boolean|false|Whether the host was absent|
|» attendees|body|[[MarkAbsentAttendee](#schemamarkabsentattendee)]|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

<h3 id="mark-a-booking-absence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MarkAbsentBookingOutput_2024_08_13](#schemamarkabsentbookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Reassign a booking to auto-selected host

<a id="opIdBookingsController_2024_08_13_reassignBooking"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/reassign \
  -X POST \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`POST /v2/bookings/{bookingUid}/reassign`

Currently only supports reassigning host for round robin bookings. The provided authorization header refers to the owner of the booking.

       <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
      

<h3 id="reassign-a-booking-to-auto-selected-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {}
}
```

<h3 id="reassign-a-booking-to-auto-selected-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ReassignBookingOutput_2024_08_13](#schemareassignbookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Reassign a booking to a specific host

<a id="opIdBookingsController_2024_08_13_reassignBookingToUser"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/reassign/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13' \
  -d '{
    "reason": "Host has to take another call"
  }'
```

`POST /v2/bookings/{bookingUid}/reassign/{userId}`

Currently only supports reassigning host for round robin bookings. The provided authorization header refers to the owner of the booking.

      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
      

> Body parameter

```json
{
  "reason": "Host has to take another call"
}
```

<h3 id="reassign-a-booking-to-a-specific-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|userId|path|number|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[ReassignToUserBookingInput_2024_08_13](#schemareassigntouserbookinginput_2024_08_13)|true|none|
|» reason|body|string|false|Reason for reassigning the booking|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {}
}
```

<h3 id="reassign-a-booking-to-a-specific-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ReassignBookingOutput_2024_08_13](#schemareassignbookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Confirm a booking

<a id="opIdBookingsController_2024_08_13_confirmBooking"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/confirm \
  -X POST \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`POST /v2/bookings/{bookingUid}/confirm`

The provided authorization header refers to the owner of the booking.

    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
    

<h3 id="confirm-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  },
  "error": {}
}
```

<h3 id="confirm-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingOutput_2024_08_13](#schemagetbookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Decline a booking

<a id="opIdBookingsController_2024_08_13_declineBooking"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/decline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13' \
  -d '{
    "reason": "Host has to take another call"
  }'
```

`POST /v2/bookings/{bookingUid}/decline`

The provided authorization header refers to the owner of the booking.

    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
    

> Body parameter

```json
{
  "reason": "Host has to take another call"
}
```

<h3 id="decline-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[DeclineBookingInput_2024_08_13](#schemadeclinebookinginput_2024_08_13)|true|none|
|» reason|body|string|false|Reason for declining a booking that requires a confirmation|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  },
  "error": {}
}
```

<h3 id="decline-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingOutput_2024_08_13](#schemagetbookingoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Get 'Add to Calendar' links for a booking

<a id="opIdBookingsController_2024_08_13_getCalendarLinks"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/calendar-links \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`GET /v2/bookings/{bookingUid}/calendar-links`

Retrieve calendar links for a booking that can be used to add the event to various calendar services. Returns links for Google Calendar, Microsoft Office, Microsoft Outlook, and a downloadable ICS file.

      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
      

<h3 id="get-add-to-calendar-links-for-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "label": "string",
      "link": "string"
    }
  ]
}
```

<h3 id="get-add-to-calendar-links-for-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CalendarLinksOutput_2024_08_13](#schemacalendarlinksoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Get booking references

<a id="opIdBookingsController_2024_08_13_getBookingReferences"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/references \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`GET /v2/bookings/{bookingUid}/references`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

<h3 id="get-booking-references-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|type|query|string|false|Filter booking references by type|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|google_calendar|
|type|office365_calendar|
|type|daily_video|
|type|google_video|
|type|office365_video|
|type|zoom_video|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "type": "string",
      "eventUid": "string",
      "destinationCalendarId": "string",
      "id": 0
    }
  ]
}
```

<h3 id="get-booking-references-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BookingReferencesOutput_2024_08_13](#schemabookingreferencesoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Video Meeting Sessions. Only supported for Cal Video

<a id="opIdBookingsController_2024_08_13_getVideoSessions"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/conferencing-sessions \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-08-13'
```

`GET /v2/bookings/{bookingUid}/conferencing-sessions`

Requires authentication and proper authorization. Access is granted if you are the booking organizer, team admin or org admin/owner.

    <Note>cal-api-version: `2024-08-13` is required in the request header.</Note>

<h3 id="get-video-meeting-sessions-only-supported-for-cal-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. If not set to this value, the endpoint will default to an older version.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "id": "session123",
      "room": "daily-video-room-123",
      "startTime": 1678901234,
      "duration": 3600,
      "ongoing": false,
      "maxParticipants": 10,
      "participants": [
        {
          "userId": "user123",
          "userName": "John Doe",
          "joinTime": 1678901234,
          "duration": 3600
        }
      ]
    }
  ],
  "error": {}
}
```

<h3 id="get-video-meeting-sessions-only-supported-for-cal-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingVideoSessionsOutput](#schemagetbookingvideosessionsoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Update booking location for an existing booking

<a id="opIdBookingLocationController_2024_08_13_updateBookingLocation"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/location \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: string' \
  -d '{
    "location": {
      "type": "address",
      "address": "123 Example St, City, Country"
    }
  }'
```

`PATCH /v2/bookings/{bookingUid}/location`

Updates the location for an existing booking.

**Integration Fallback Behavior:**
- **Google Meet**: Requires Google Calendar to be connected. If the booking has no Google Calendar event, it will automatically fall back to Cal Video.
- **MS Teams**: If Office 365 Calendar is connected, generates the meeting link via calendar. Otherwise, uses the MS Teams video integration directly.

<Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>

> Body parameter

```json
{
  "location": {
    "type": "address",
    "address": "123 Example St, City, Country"
  }
}
```

<h3 id="update-booking-location-for-an-existing-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[UpdateBookingLocationInput_2024_08_13](#schemaupdatebookinglocationinput_2024_08_13)|true|none|
|» location|body|[UpdateInputAddressLocation_2024_08_13](#schemaupdateinputaddresslocation_2024_08_13) \| [UpdateBookingInputAttendeeAddressLocation_2024_08_13](#schemaupdatebookinginputattendeeaddresslocation_2024_08_13) \| [UpdateBookingInputAttendeeDefinedLocation_2024_08_13](#schemaupdatebookinginputattendeedefinedlocation_2024_08_13) \| [UpdateBookingInputAttendeePhoneLocation_2024_08_13](#schemaupdatebookinginputattendeephonelocation_2024_08_13) \| [UpdateBookingInputLinkLocation_2024_08_13](#schemaupdatebookinginputlinklocation_2024_08_13) \| [UpdateBookingInputPhoneLocation_2024_08_13](#schemaupdatebookinginputphonelocation_2024_08_13) \| [UpdateBookingInputIntegrationLocation_2024_08_13](#schemaupdatebookinginputintegrationlocation_2024_08_13)|false|One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.|
|» » *oneOf*|body|[UpdateInputAddressLocation_2024_08_13](#schemaupdateinputaddresslocation_2024_08_13)|false|none|
|» » *oneOf*|body|[UpdateBookingInputAttendeeAddressLocation_2024_08_13](#schemaupdatebookinginputattendeeaddresslocation_2024_08_13)|false|none|
|» » *oneOf*|body|[UpdateBookingInputAttendeeDefinedLocation_2024_08_13](#schemaupdatebookinginputattendeedefinedlocation_2024_08_13)|false|none|
|» » *oneOf*|body|[UpdateBookingInputAttendeePhoneLocation_2024_08_13](#schemaupdatebookinginputattendeephonelocation_2024_08_13)|false|none|
|» » *oneOf*|body|[UpdateBookingInputLinkLocation_2024_08_13](#schemaupdatebookinginputlinklocation_2024_08_13)|false|none|
|» » *oneOf*|body|[UpdateBookingInputPhoneLocation_2024_08_13](#schemaupdatebookinginputphonelocation_2024_08_13)|false|none|
|» » *oneOf*|body|[UpdateBookingInputIntegrationLocation_2024_08_13](#schemaupdatebookinginputintegrationlocation_2024_08_13)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

<h3 id="update-booking-location-for-an-existing-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateBookingLocationOutput_2024_08_13](#schemaupdatebookinglocationoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-bookings-attendees">Bookings / Attendees</h1>

## Get all attendees for a booking

<a id="opIdBookingAttendeesController_2024_08_13_getBookingAttendees"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/attendees \
  -H 'Accept: application/json' \
  -H 'cal-api-version: string'
```

`GET /v2/bookings/{bookingUid}/attendees`

Retrieve all attendees for a specific booking by its UID.
    
    <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>
    

<h3 id="get-all-attendees-for-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "displayEmail": "john@example.com",
      "timeZone": "America/New_York",
      "language": "en",
      "absent": false,
      "phoneNumber": "+1234567890",
      "id": 251
    }
  ]
}
```

<h3 id="get-all-attendees-for-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingAttendeesOutput_2024_08_13](#schemagetbookingattendeesoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Add an attendee to a booking

<a id="opIdBookingAttendeesController_2024_08_13_addAttendee"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/attendees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: string' \
  -d '{
    "name": "John Doe",
    "timeZone": "America/New_York",
    "phoneNumber": "+919876543210",
    "language": "it",
    "email": "john.doe@example.com"
  }'
```

`POST /v2/bookings/{bookingUid}/attendees`

Add a new attendee to an existing booking by its UID.

      **Side effects:**
      - The booking's attendee list is updated in the database
      - The calendar event is updated on connected calendars (Google Calendar, Outlook, etc.) to include the new attendee
      - An email notification is sent to the new attendee with the booking details

      **Permissions:**
      - The authenticated user must be either the booking organizer, an existing attendee, or have the `booking.update` permission for the team

      <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>
      

> Body parameter

```json
{
  "name": "John Doe",
  "timeZone": "America/New_York",
  "phoneNumber": "+919876543210",
  "language": "it",
  "email": "john.doe@example.com"
}
```

<h3 id="add-an-attendee-to-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[AddAttendeeInput_2024_08_13](#schemaaddattendeeinput_2024_08_13)|true|none|
|» name|body|string|true|The name of the attendee.|
|» timeZone|body|string|true|The time zone of the attendee.|
|» phoneNumber|body|string|false|The phone number of the attendee in international format.|
|» language|body|string|false|The preferred language of the attendee. Used for booking confirmation.|
|» email|body|string|true|The email of the attendee.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|ar|
|» language|ca|
|» language|de|
|» language|es|
|» language|eu|
|» language|he|
|» language|id|
|» language|ja|
|» language|lv|
|» language|pl|
|» language|ro|
|» language|sr|
|» language|th|
|» language|vi|
|» language|az|
|» language|cs|
|» language|el|
|» language|es-419|
|» language|fi|
|» language|hr|
|» language|it|
|» language|km|
|» language|nl|
|» language|pt|
|» language|ru|
|» language|sv|
|» language|tr|
|» language|zh-CN|
|» language|bg|
|» language|da|
|» language|en|
|» language|et|
|» language|fr|
|» language|hu|
|» language|iw|
|» language|ko|
|» language|no|
|» language|pt-BR|
|» language|sk|
|» language|ta|
|» language|uk|
|» language|zh-TW|
|» language|bn|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "displayEmail": "john@example.com",
    "timeZone": "America/New_York",
    "language": "en",
    "absent": false,
    "phoneNumber": "+1234567890",
    "id": 251,
    "bookingId": 313
  }
}
```

<h3 id="add-an-attendee-to-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[AddAttendeeOutput_2024_08_13](#schemaaddattendeeoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific attendee for a booking

<a id="opIdBookingAttendeesController_2024_08_13_getBookingAttendee"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/attendees/0 \
  -H 'Accept: application/json' \
  -H 'cal-api-version: string'
```

`GET /v2/bookings/{bookingUid}/attendees/{attendeeId}`

Retrieve a specific attendee by their ID for a booking identified by its UID.
        
      <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>
      

<h3 id="get-a-specific-attendee-for-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.|
|bookingUid|path|string|true|none|
|attendeeId|path|number|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "displayEmail": "john@example.com",
    "timeZone": "America/New_York",
    "language": "en",
    "absent": false,
    "phoneNumber": "+1234567890",
    "id": 251
  }
}
```

<h3 id="get-a-specific-attendee-for-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBookingAttendeeOutput_2024_08_13](#schemagetbookingattendeeoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove an attendee from a booking

<a id="opIdBookingAttendeesController_2024_08_13_removeAttendee"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/attendees/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'cal-api-version: string'
```

`DELETE /v2/bookings/{bookingUid}/attendees/{attendeeId}`

Remove an attendee from an existing booking by their attendee ID. The primary attendee (first attendee) cannot be removed — to remove them, cancel the booking instead. The removed attendee will receive a cancellation email notification.

    <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>
    

<h3 id="remove-an-attendee-from-a-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.|
|bookingUid|path|string|true|none|
|attendeeId|path|number|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "bookingId": 456,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "timeZone": "America/New_York"
  }
}
```

<h3 id="remove-an-attendee-from-a-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RemoveAttendeeOutput_2024_08_13](#schemaremoveattendeeoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-bookings-guests">Bookings / Guests</h1>

## Add guests to an existing booking

<a id="opIdBookingGuestsController_2024_08_13_addGuests"></a>

> Code samples

```bash
curl https://api.cal.com/v2/bookings/string/guests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: string' \
  -d '{
    "guests": [
      {
        "email": "john.doe@example.com",
        "name": "John Doe",
        "timeZone": "America/New_York"
      },
      {
        "email": "jane.smith@example.com",
        "name": "Jane Smith"
      }
    ]
  }'
```

`POST /v2/bookings/{bookingUid}/guests`

Add one or more guests to an existing booking. Maximum 10 guests per request, with a limit of 30 total guests per booking.
    
    **Rate Limiting:**
    This endpoint is rate limited to 5 requests per minute to prevent abuse.
    
    **Email Notifications:**
    When guests are added, the following notifications are sent (unless disabled by event type settings):
    
    - **Organizer & Team Members:** Receive an "Add Guests" notification email informing them that new guests have been added to the booking.
    
    - **New Guests:** Receive a "Scheduled Event" email with full booking details and calendar invite. If they have a phone number, they also receive an SMS notification.
    
    - **Existing Guests:** Receive an "Add Guests" notification email informing them that additional guests have been added to the booking.
    
    <Note>The cal-api-version header is required for this endpoint. Without it, the request will fail with a 404 error.</Note>
    

> Body parameter

```json
{
  "guests": [
    {
      "email": "john.doe@example.com",
      "name": "John Doe",
      "timeZone": "America/New_York"
    },
    {
      "email": "jane.smith@example.com",
      "name": "Jane Smith"
    }
  ]
}
```

<h3 id="add-guests-to-an-existing-booking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-08-13. This header is required as this endpoint does not exist in older API versions.|
|bookingUid|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[AddGuestsInput_2024_08_13](#schemaaddguestsinput_2024_08_13)|true|none|
|» guests|body|[[Guest](#schemaguest)]|true|Array of guests to add to the booking. Maximum 10 guests per request.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

<h3 id="add-guests-to-an-existing-booking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AddGuestsOutput_2024_08_13](#schemaaddguestsoutput_2024_08_13)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-cal-unified-calendars">Cal Unified Calendars</h1>

## List calendar connections

<a id="opIdCalUnifiedCalendarsController_listConnections"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/connections \
  -H 'Accept: application/json'
```

`GET /v2/calendars/connections`

Returns all calendar connections for the authenticated user (Google, Office 365, Apple). Use connectionId in connection-scoped endpoints. Note: Event CRUD (list/create/get/update/delete events) is currently only supported for Google Calendar connections; other types will return 400.

<h3 id="list-calendar-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "connections": [
      {
        "connectionId": "123",
        "type": "google",
        "email": "user@gmail.com"
      }
    ]
  }
}
```

<h3 id="list-calendar-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListConnectionsOutput](#schemalistconnectionsoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## List events for a connection

<a id="opIdCalUnifiedCalendarsController_listConnectionEvents"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/calendars/connections/string/events?from=2026-03-01&to=2026-03-31' \
  -H 'Accept: application/json'
```

`GET /v2/calendars/connections/{connectionId}/events`

List events in a date range for a specific calendar connection. Only supported for Google Calendar connections; other connection types return 400.

<h3 id="list-events-for-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|Calendar connection ID from GET /connections|
|from|query|string|true|Start of the date range (ISO 8601 date or date-time)|
|to|query|string|true|End of the date range (ISO 8601 date or date-time)|
|timeZone|query|string|false|IANA time zone for the request (e.g. America/New_York)|
|calendarId|query|string|false|Calendar ID. Use 'primary' for the user's primary calendar, or the external ID of a connected calendar.|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "start": {
        "time": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "end": {
        "time": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "id": "string",
      "title": "string",
      "description": "string",
      "locations": [
        {
          "type": "video",
          "url": "string",
          "label": "string",
          "password": "string",
          "meetingCode": "string",
          "accessCode": "string"
        }
      ],
      "attendees": [
        {
          "email": "string",
          "name": "string",
          "responseStatus": "accepted",
          "self": true,
          "optional": true,
          "host": true
        }
      ],
      "status": "accepted",
      "hosts": [
        {
          "email": "string",
          "name": "string",
          "responseStatus": "accepted"
        }
      ],
      "calendarEventOwner": {
        "email": "string",
        "name": "string"
      },
      "source": "google"
    }
  ]
}
```

<h3 id="list-events-for-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListUnifiedCalendarEventsOutput](#schemalistunifiedcalendareventsoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Create event on a connection

<a id="opIdCalUnifiedCalendarsController_createConnectionEvent"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/connections/string/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "title": "string",
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "description": "string",
    "attendees": [
      {
        "email": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /v2/calendars/connections/{connectionId}/events`

Create a new event on the specified calendar connection. Only supported for Google Calendar connections; other connection types return 400.

> Body parameter

```json
{
  "title": "string",
  "start": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "end": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "description": "string",
  "attendees": [
    {
      "email": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="create-event-on-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|none|
|calendarId|query|string|false|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[CreateUnifiedCalendarEventInput](#schemacreateunifiedcalendareventinput)|true|none|
|» title|body|string|true|Title of the calendar event|
|» start|body|object|true|Start date and time with time zone|
|» » time|body|string(date-time)|true|Start or end time in ISO 8601 format|
|» » timeZone|body|string|true|IANA time zone (e.g. America/New_York)|
|» end|body|object|true|End date and time with time zone|
|» » time|body|string(date-time)|true|Start or end time in ISO 8601 format|
|» » timeZone|body|string|true|IANA time zone (e.g. America/New_York)|
|» description|body|string \| null|false|Description of the event|
|» attendees|body|[[CreateEventAttendee](#schemacreateeventattendee)]|false|List of attendees|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "locations": [
      {
        "type": "video",
        "url": "string",
        "label": "string",
        "password": "string",
        "meetingCode": "string",
        "accessCode": "string"
      }
    ],
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted",
    "hosts": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted"
      }
    ],
    "calendarEventOwner": {
      "email": "string",
      "name": "string"
    },
    "source": "google"
  }
}
```

<h3 id="create-event-on-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[GetUnifiedCalendarEventOutput](#schemagetunifiedcalendareventoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get event for a connection

<a id="opIdCalUnifiedCalendarsController_getConnectionEvent"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/connections/string/events/string \
  -H 'Accept: application/json'
```

`GET /v2/calendars/connections/{connectionId}/events/{eventId}`

Get a single event by ID for the specified calendar connection. Only supported for Google Calendar connections; other connection types return 400.

<h3 id="get-event-for-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|none|
|eventId|path|string|true|none|
|calendarId|query|string|false|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "locations": [
      {
        "type": "video",
        "url": "string",
        "label": "string",
        "password": "string",
        "meetingCode": "string",
        "accessCode": "string"
      }
    ],
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted",
    "hosts": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted"
      }
    ],
    "calendarEventOwner": {
      "email": "string",
      "name": "string"
    },
    "source": "google"
  }
}
```

<h3 id="get-event-for-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetUnifiedCalendarEventOutput](#schemagetunifiedcalendareventoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete event for a connection

<a id="opIdCalUnifiedCalendarsController_deleteConnectionEvent"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/connections/string/events/string \
  -X DELETE
```

`DELETE /v2/calendars/connections/{connectionId}/events/{eventId}`

Delete/cancel an event on the specified calendar connection. Only supported for Google Calendar connections; other connection types return 400.

<h3 id="delete-event-for-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|none|
|eventId|path|string|true|none|
|calendarId|query|string|false|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

<h3 id="delete-event-for-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update event for a connection

<a id="opIdCalUnifiedCalendarsController_updateConnectionEvent"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/connections/string/events/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "title": "string",
    "description": "string",
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted"
  }'
```

`PATCH /v2/calendars/connections/{connectionId}/events/{eventId}`

Update an event on the specified calendar connection. Only supported for Google Calendar connections; other connection types return 400.

> Body parameter

```json
{
  "start": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "end": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "title": "string",
  "description": "string",
  "attendees": [
    {
      "email": "string",
      "name": "string",
      "responseStatus": "accepted",
      "self": true,
      "optional": true,
      "host": true
    }
  ],
  "status": "accepted"
}
```

<h3 id="update-event-for-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|none|
|eventId|path|string|true|none|
|calendarId|query|string|false|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[UpdateUnifiedCalendarEventInput](#schemaupdateunifiedcalendareventinput)|true|none|
|» start|body|object|false|Start date and time of the calendar event with timezone information|
|» » time|body|string(date-time)|false|none|
|» » timeZone|body|string|false|none|
|» end|body|object|false|End date and time of the calendar event with timezone information|
|» » time|body|string(date-time)|false|none|
|» » timeZone|body|string|false|none|
|» title|body|string|false|Title of the calendar event|
|» description|body|string \| null|false|Detailed description of the calendar event|
|» attendees|body|[[UpdateCalendarEventAttendee](#schemaupdatecalendareventattendee)]|false|List of attendees. CAUTION: You must pass the entire array with all updated values. Any attendees not included in this array will be removed from the event.|
|» status|body|[CalendarEventStatus](#schemacalendareventstatus)|false|Status of the event (accepted, pending, declined, cancelled)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|accepted|
|» status|pending|
|» status|declined|
|» status|cancelled|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "locations": [
      {
        "type": "video",
        "url": "string",
        "label": "string",
        "password": "string",
        "meetingCode": "string",
        "accessCode": "string"
      }
    ],
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted",
    "hosts": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted"
      }
    ],
    "calendarEventOwner": {
      "email": "string",
      "name": "string"
    },
    "source": "google"
  }
}
```

<h3 id="update-event-for-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetUnifiedCalendarEventOutput](#schemagetunifiedcalendareventoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get free/busy for a connection

<a id="opIdCalUnifiedCalendarsController_getConnectionFreeBusy"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/calendars/connections/string/freebusy?from=2026-03-10&to=2026-03-10' \
  -H 'Accept: application/json'
```

`GET /v2/calendars/connections/{connectionId}/freebusy`

Get busy time slots for the specified calendar connection.

<h3 id="get-freebusy-for-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectionId|path|string|true|none|
|from|query|string|true|Start of the date range (ISO 8601 date or date-time)|
|to|query|string|true|End of the date range (ISO 8601 date or date-time)|
|timeZone|query|string|false|IANA time zone (e.g. America/New_York)|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "start": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z",
      "source": "string"
    }
  ]
}
```

<h3 id="get-freebusy-for-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBusyTimesOutput](#schemagetbusytimesoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get meeting details from calendar

<a id="opIdCalUnifiedCalendarsController_getCalendarEventDetails"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/google/events/string \
  -H 'Accept: application/json'
```

`GET /v2/calendars/{calendar}/events/{eventUid}`

Returns detailed information about a meeting including attendance metrics. The singular /event/ path is deprecated — use /events/ (plural) instead. For connection-scoped access use GET /connections/{connectionId}/events/{eventId}.

<h3 id="get-meeting-details-from-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|eventUid|path|string|true|The Google Calendar event ID. You can retrieve this by getting booking references from the following endpoints:<br><br>- For team events: GET /v2/organizations/{orgId}/teams/{teamId}/bookings/{bookingUid}/references<br><br>- For user events: GET /v2/bookings/{bookingUid}/references|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|google|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "locations": [
      {
        "type": "video",
        "url": "string",
        "label": "string",
        "password": "string",
        "meetingCode": "string",
        "accessCode": "string"
      }
    ],
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted",
    "hosts": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted"
      }
    ],
    "calendarEventOwner": {
      "email": "string",
      "name": "string"
    },
    "source": "google"
  }
}
```

<h3 id="get-meeting-details-from-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetUnifiedCalendarEventOutput](#schemagetunifiedcalendareventoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a calendar event

<a id="opIdCalUnifiedCalendarsController_deleteCalendarEvent"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/google/events/string \
  -X DELETE
```

`DELETE /v2/calendars/{calendar}/events/{eventUid}`

Delete/cancel an event on the authenticated user's calendar. Currently only Google Calendar is supported.

<h3 id="delete-a-calendar-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|eventUid|path|string|true|The calendar provider's event ID (e.g. Google Calendar event ID)|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|google|
|calendar|office365|
|calendar|apple|

<h3 id="delete-a-calendar-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## Update meeting details in calendar

<a id="opIdCalUnifiedCalendarsController_updateCalendarEvent"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/google/events/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "title": "string",
    "description": "string",
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted"
  }'
```

`PATCH /v2/calendars/{calendar}/events/{eventUid}`

Updates event information in the specified calendar provider. The singular /event/ path is deprecated — use /events/ (plural) instead. For connection-scoped access use PATCH /connections/{connectionId}/events/{eventId}.

> Body parameter

```json
{
  "start": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "end": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "title": "string",
  "description": "string",
  "attendees": [
    {
      "email": "string",
      "name": "string",
      "responseStatus": "accepted",
      "self": true,
      "optional": true,
      "host": true
    }
  ],
  "status": "accepted"
}
```

<h3 id="update-meeting-details-in-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|eventUid|path|string|true|The Google Calendar event ID. You can retrieve this by getting booking references from the following endpoints:<br><br>- For team events: GET /v2/organizations/{orgId}/teams/{teamId}/bookings/{bookingUid}/references<br><br>- For user events: GET /v2/bookings/{bookingUid}/references|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[UpdateUnifiedCalendarEventInput](#schemaupdateunifiedcalendareventinput)|true|none|
|» start|body|object|false|Start date and time of the calendar event with timezone information|
|» » time|body|string(date-time)|false|none|
|» » timeZone|body|string|false|none|
|» end|body|object|false|End date and time of the calendar event with timezone information|
|» » time|body|string(date-time)|false|none|
|» » timeZone|body|string|false|none|
|» title|body|string|false|Title of the calendar event|
|» description|body|string \| null|false|Detailed description of the calendar event|
|» attendees|body|[[UpdateCalendarEventAttendee](#schemaupdatecalendareventattendee)]|false|List of attendees. CAUTION: You must pass the entire array with all updated values. Any attendees not included in this array will be removed from the event.|
|» status|body|[CalendarEventStatus](#schemacalendareventstatus)|false|Status of the event (accepted, pending, declined, cancelled)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|google|
|» status|accepted|
|» status|pending|
|» status|declined|
|» status|cancelled|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "locations": [
      {
        "type": "video",
        "url": "string",
        "label": "string",
        "password": "string",
        "meetingCode": "string",
        "accessCode": "string"
      }
    ],
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted",
    "hosts": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted"
      }
    ],
    "calendarEventOwner": {
      "email": "string",
      "name": "string"
    },
    "source": "google"
  }
}
```

<h3 id="update-meeting-details-in-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetUnifiedCalendarEventOutput](#schemagetunifiedcalendareventoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get meeting details from calendar

<a id="opIdCalUnifiedCalendarsController_getCalendarEventDetails"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/google/event/string \
  -H 'Accept: application/json'
```

`GET /v2/calendars/{calendar}/event/{eventUid}`

Returns detailed information about a meeting including attendance metrics. The singular /event/ path is deprecated — use /events/ (plural) instead. For connection-scoped access use GET /connections/{connectionId}/events/{eventId}.

<h3 id="get-meeting-details-from-calendar-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|eventUid|path|string|true|The Google Calendar event ID. You can retrieve this by getting booking references from the following endpoints:<br><br>- For team events: GET /v2/organizations/{orgId}/teams/{teamId}/bookings/{bookingUid}/references<br><br>- For user events: GET /v2/bookings/{bookingUid}/references|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|google|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "locations": [
      {
        "type": "video",
        "url": "string",
        "label": "string",
        "password": "string",
        "meetingCode": "string",
        "accessCode": "string"
      }
    ],
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted",
    "hosts": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted"
      }
    ],
    "calendarEventOwner": {
      "email": "string",
      "name": "string"
    },
    "source": "google"
  }
}
```

<h3 id="get-meeting-details-from-calendar-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetUnifiedCalendarEventOutput](#schemagetunifiedcalendareventoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Update meeting details in calendar

<a id="opIdCalUnifiedCalendarsController_updateCalendarEvent"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/google/event/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "title": "string",
    "description": "string",
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted"
  }'
```

`PATCH /v2/calendars/{calendar}/event/{eventUid}`

Updates event information in the specified calendar provider. The singular /event/ path is deprecated — use /events/ (plural) instead. For connection-scoped access use PATCH /connections/{connectionId}/events/{eventId}.

> Body parameter

```json
{
  "start": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "end": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "title": "string",
  "description": "string",
  "attendees": [
    {
      "email": "string",
      "name": "string",
      "responseStatus": "accepted",
      "self": true,
      "optional": true,
      "host": true
    }
  ],
  "status": "accepted"
}
```

<h3 id="update-meeting-details-in-calendar-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|eventUid|path|string|true|The Google Calendar event ID. You can retrieve this by getting booking references from the following endpoints:<br><br>- For team events: GET /v2/organizations/{orgId}/teams/{teamId}/bookings/{bookingUid}/references<br><br>- For user events: GET /v2/bookings/{bookingUid}/references|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[UpdateUnifiedCalendarEventInput](#schemaupdateunifiedcalendareventinput)|true|none|
|» start|body|object|false|Start date and time of the calendar event with timezone information|
|» » time|body|string(date-time)|false|none|
|» » timeZone|body|string|false|none|
|» end|body|object|false|End date and time of the calendar event with timezone information|
|» » time|body|string(date-time)|false|none|
|» » timeZone|body|string|false|none|
|» title|body|string|false|Title of the calendar event|
|» description|body|string \| null|false|Detailed description of the calendar event|
|» attendees|body|[[UpdateCalendarEventAttendee](#schemaupdatecalendareventattendee)]|false|List of attendees. CAUTION: You must pass the entire array with all updated values. Any attendees not included in this array will be removed from the event.|
|» status|body|[CalendarEventStatus](#schemacalendareventstatus)|false|Status of the event (accepted, pending, declined, cancelled)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|google|
|» status|accepted|
|» status|pending|
|» status|declined|
|» status|cancelled|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "locations": [
      {
        "type": "video",
        "url": "string",
        "label": "string",
        "password": "string",
        "meetingCode": "string",
        "accessCode": "string"
      }
    ],
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted",
    "hosts": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted"
      }
    ],
    "calendarEventOwner": {
      "email": "string",
      "name": "string"
    },
    "source": "google"
  }
}
```

<h3 id="update-meeting-details-in-calendar-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetUnifiedCalendarEventOutput](#schemagetunifiedcalendareventoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## List calendar events

<a id="opIdCalUnifiedCalendarsController_listCalendarEvents"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/calendars/google/events?from=2026-03-01&to=2026-03-31' \
  -H 'Accept: application/json'
```

`GET /v2/calendars/{calendar}/events`

List events in a date range for the authenticated user's calendar. Currently only Google Calendar is supported.

<h3 id="list-calendar-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|from|query|string|true|Start of the date range (ISO 8601 date or date-time)|
|to|query|string|true|End of the date range (ISO 8601 date or date-time)|
|timeZone|query|string|false|IANA time zone for the request (e.g. America/New_York)|
|calendarId|query|string|false|Calendar ID. Use 'primary' for the user's primary calendar, or the external ID of a connected calendar.|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|google|
|calendar|office365|
|calendar|apple|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "start": {
        "time": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "end": {
        "time": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "id": "string",
      "title": "string",
      "description": "string",
      "locations": [
        {
          "type": "video",
          "url": "string",
          "label": "string",
          "password": "string",
          "meetingCode": "string",
          "accessCode": "string"
        }
      ],
      "attendees": [
        {
          "email": "string",
          "name": "string",
          "responseStatus": "accepted",
          "self": true,
          "optional": true,
          "host": true
        }
      ],
      "status": "accepted",
      "hosts": [
        {
          "email": "string",
          "name": "string",
          "responseStatus": "accepted"
        }
      ],
      "calendarEventOwner": {
        "email": "string",
        "name": "string"
      },
      "source": "google"
    }
  ]
}
```

<h3 id="list-calendar-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListUnifiedCalendarEventsOutput](#schemalistunifiedcalendareventsoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a calendar event

<a id="opIdCalUnifiedCalendarsController_createCalendarEvent"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/google/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "title": "string",
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "description": "string",
    "attendees": [
      {
        "email": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /v2/calendars/{calendar}/events`

Create a new event on the authenticated user's calendar. Currently only Google Calendar is supported.

> Body parameter

```json
{
  "title": "string",
  "start": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "end": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "description": "string",
  "attendees": [
    {
      "email": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="create-a-calendar-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[CreateUnifiedCalendarEventInput](#schemacreateunifiedcalendareventinput)|true|none|
|» title|body|string|true|Title of the calendar event|
|» start|body|object|true|Start date and time with time zone|
|» » time|body|string(date-time)|true|Start or end time in ISO 8601 format|
|» » timeZone|body|string|true|IANA time zone (e.g. America/New_York)|
|» end|body|object|true|End date and time with time zone|
|» » time|body|string(date-time)|true|Start or end time in ISO 8601 format|
|» » timeZone|body|string|true|IANA time zone (e.g. America/New_York)|
|» description|body|string \| null|false|Description of the event|
|» attendees|body|[[CreateEventAttendee](#schemacreateeventattendee)]|false|List of attendees|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|google|
|calendar|office365|
|calendar|apple|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "locations": [
      {
        "type": "video",
        "url": "string",
        "label": "string",
        "password": "string",
        "meetingCode": "string",
        "accessCode": "string"
      }
    ],
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted",
    "hosts": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted"
      }
    ],
    "calendarEventOwner": {
      "email": "string",
      "name": "string"
    },
    "source": "google"
  }
}
```

<h3 id="create-a-calendar-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[GetUnifiedCalendarEventOutput](#schemagetunifiedcalendareventoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get free/busy times

<a id="opIdCalUnifiedCalendarsController_getFreeBusy"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/calendars/google/freebusy?from=2026-03-10&to=2026-03-10' \
  -H 'Accept: application/json'
```

`GET /v2/calendars/{calendar}/freebusy`

Get busy time slots for the authenticated user's selected calendars in the given date range. Currently only Google Calendar is supported.

<h3 id="get-freebusy-times-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|from|query|string|true|Start of the date range (ISO 8601 date or date-time)|
|to|query|string|true|End of the date range (ISO 8601 date or date-time)|
|timeZone|query|string|false|IANA time zone (e.g. America/New_York)|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|google|
|calendar|office365|
|calendar|apple|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "start": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z",
      "source": "string"
    }
  ]
}
```

<h3 id="get-freebusy-times-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBusyTimesOutput](#schemagetbusytimesoutput)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-calendars">Calendars</h1>

## Save an ICS feed

<a id="opIdCalendarsController_createIcsFeed"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/ics-feed/save \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "urls": [
      "https://cal.com/ics/feed.ics",
      "http://cal.com/ics/feed.ics"
    ],
    "readOnly": false
  }'
```

`POST /v2/calendars/ics-feed/save`

> Body parameter

```json
{
  "urls": [
    "https://cal.com/ics/feed.ics",
    "http://cal.com/ics/feed.ics"
  ],
  "readOnly": false
}
```

<h3 id="save-an-ics-feed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[CreateIcsFeedInputDto](#schemacreateicsfeedinputdto)|true|none|
|» urls|body|[string]|true|An array of ICS URLs|
|» readOnly|body|boolean|false|Whether to allowing writing to the calendar or not|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "id": 1234567890,
    "type": "ics-feed_calendar",
    "userId": 1234567890,
    "teamId": 1234567890,
    "appId": "ics-feed",
    "invalid": false
  }
}
```

<h3 id="save-an-ics-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateIcsFeedOutputResponseDto](#schemacreateicsfeedoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Check an ICS feed

<a id="opIdCalendarsController_checkIcsFeed"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/ics-feed/check \
  -H 'Accept: application/json'
```

`GET /v2/calendars/ics-feed/check`

<h3 id="check-an-ics-feed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{}
```

<h3 id="check-an-ics-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get busy times

<a id="opIdCalendarsController_getBusyTimes"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/calendars/busy-times?credentialId=0&externalId=string' \
  -H 'Accept: application/json'
```

`GET /v2/calendars/busy-times`

Get busy times from a calendar. Example request URL is `https://api.cal.com/v2/calendars/busy-times?timeZone=Europe%2FMadrid&dateFrom=2024-12-18&dateTo=2024-12-18&calendarsToLoad[0][credentialId]=135&calendarsToLoad[0][externalId]=skrauciz%40gmail.com`. Note: loggedInUsersTz is deprecated, use timeZone instead.

<h3 id="get-busy-times-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loggedInUsersTz|query|string|false|**Deprecated.** Deprecated: Use timeZone instead. The timezone of the user represented as a string|
|timeZone|query|string|false|The timezone for the busy times query represented as a string|
|dateFrom|query|string|false|The starting date for the busy times query|
|dateTo|query|string|false|The ending date for the busy times query|
|credentialId|query|number|true|none|
|externalId|query|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "start": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z",
      "source": "string"
    }
  ]
}
```

<h3 id="get-busy-times-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetBusyTimesOutput](#schemagetbusytimesoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all calendars

<a id="opIdCalendarsController_getCalendars"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars \
  -H 'Accept: application/json'
```

`GET /v2/calendars`

<h3 id="get-all-calendars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "connectedCalendars": [
      {
        "integration": {
          "appData": {},
          "dirName": "string",
          "__template": "string",
          "name": "string",
          "description": "string",
          "installed": true,
          "type": "string",
          "title": "string",
          "variant": "string",
          "category": "string",
          "categories": [
            "string"
          ],
          "logo": "string",
          "publisher": "string",
          "slug": "string",
          "url": "string",
          "email": "string",
          "locationOption": {}
        },
        "credentialId": 0,
        "delegationCredentialId": "string",
        "primary": {
          "externalId": "string",
          "integration": "string",
          "name": "string",
          "primary": true,
          "readOnly": true,
          "email": "string",
          "isSelected": true,
          "credentialId": 0,
          "delegationCredentialId": "string"
        },
        "calendars": [
          {
            "externalId": "string",
            "integration": "string",
            "name": "string",
            "primary": true,
            "readOnly": true,
            "email": "string",
            "isSelected": true,
            "credentialId": 0,
            "delegationCredentialId": "string"
          }
        ]
      }
    ],
    "destinationCalendar": {
      "id": {},
      "integration": "string",
      "externalId": "string",
      "primaryEmail": "string",
      "userId": 0,
      "eventTypeId": 0,
      "credentialId": 0,
      "delegationCredentialId": "string",
      "name": "string",
      "primary": true,
      "readOnly": true,
      "email": "string",
      "integrationTitle": "string"
    }
  }
}
```

<h3 id="get-all-calendars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConnectedCalendarsOutput](#schemaconnectedcalendarsoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth connect URL

<a id="opIdCalendarsController_redirect"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/calendars/office365/connect?isDryRun=true' \
  -H 'Accept: application/json'
```

`GET /v2/calendars/{calendar}/connect`

<h3 id="get-oauth-connect-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|calendar|path|string|true|none|
|isDryRun|query|boolean|true|none|
|redir|query|string|false|Redirect URL after successful calendar authorization.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|office365|
|calendar|google|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-oauth-connect-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Save Google or Outlook calendar credentials

<a id="opIdCalendarsController_save"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/calendars/office365/save?state=string&code=string'
```

`GET /v2/calendars/{calendar}/save`

<h3 id="save-google-or-outlook-calendar-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|true|none|
|code|query|string|true|none|
|calendar|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|office365|
|calendar|google|

<h3 id="save-google-or-outlook-calendar-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Save Apple calendar credentials

<a id="opIdCalendarsController_syncCredentials"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/apple/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "string",
    "password": "string"
  }'
```

`POST /v2/calendars/{calendar}/credentials`

> Body parameter

```json
{
  "username": "string",
  "password": "string"
}
```

<h3 id="save-apple-calendar-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[CreateCalendarCredentialsInput](#schemacreatecalendarcredentialsinput)|true|none|
|» username|body|string|true|none|
|» password|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|apple|

<h3 id="save-apple-calendar-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|

<aside class="success">
This operation does not require authentication
</aside>

## Check a calendar connection

<a id="opIdCalendarsController_check"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/apple/check \
  -H 'Accept: application/json'
```

`GET /v2/calendars/{calendar}/check`

<h3 id="check-a-calendar-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|apple|
|calendar|google|
|calendar|office365|

> Example responses

> 200 Response

```json
{}
```

<h3 id="check-a-calendar-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Disconnect a calendar

<a id="opIdCalendarsController_deleteCalendarCredentials"></a>

> Code samples

```bash
curl https://api.cal.com/v2/calendars/apple/disconnect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 10
  }'
```

`POST /v2/calendars/{calendar}/disconnect`

> Body parameter

```json
{
  "id": 10
}
```

<h3 id="disconnect-a-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendar|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[DeleteCalendarCredentialsInputBodyDto](#schemadeletecalendarcredentialsinputbodydto)|true|none|
|» id|body|integer|true|Credential ID of the calendar to delete, as returned by the /calendars endpoint|

#### Enumerated Values

|Parameter|Value|
|---|---|
|calendar|apple|
|calendar|google|
|calendar|office365|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 0,
    "type": "string",
    "userId": 0,
    "teamId": 0,
    "appId": "string",
    "invalid": true
  }
}
```

<h3 id="disconnect-a-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeletedCalendarCredentialsOutputResponseDto](#schemadeletedcalendarcredentialsoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-conferencing">Conferencing</h1>

## Connect your conferencing application

<a id="opIdConferencingController_connect"></a>

> Code samples

```bash
curl https://api.cal.com/v2/conferencing/google-meet/connect \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v2/conferencing/{app}/connect`

<h3 id="connect-your-conferencing-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Conferencing application type|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|app|google-meet|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 0,
    "type": "google_video",
    "userId": 0,
    "invalid": true
  }
}
```

<h3 id="connect-your-conferencing-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConferencingAppOutputResponseDto](#schemaconferencingappoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth conferencing app auth URL

<a id="opIdConferencingController_redirect"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/conferencing/zoom/oauth/auth-url?returnTo=string&onErrorReturnTo=string' \
  -H 'Accept: application/json'
```

`GET /v2/conferencing/{app}/oauth/auth-url`

<h3 id="get-oauth-conferencing-app-auth-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|app|path|string|true|Conferencing application type|
|returnTo|query|string|true|none|
|onErrorReturnTo|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|app|zoom|
|app|msteams|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="get-oauth-conferencing-app-auth-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetConferencingAppsOauthUrlResponseDto](#schemagetconferencingappsoauthurlresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Conferencing app OAuth callback

<a id="opIdConferencingController_save"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/conferencing/zoom/oauth/callback?state=string&code=string'
```

`GET /v2/conferencing/{app}/oauth/callback`

<h3 id="conferencing-app-oauth-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|true|none|
|app|path|string|true|Conferencing application type|
|code|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|app|zoom|
|app|msteams|

<h3 id="conferencing-app-oauth-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## List your conferencing applications

<a id="opIdConferencingController_listInstalledConferencingApps"></a>

> Code samples

```bash
curl https://api.cal.com/v2/conferencing \
  -H 'Accept: application/json'
```

`GET /v2/conferencing`

<h3 id="list-your-conferencing-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 0,
      "type": "google_video",
      "userId": 0,
      "invalid": true
    }
  ]
}
```

<h3 id="list-your-conferencing-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConferencingAppsOutputResponseDto](#schemaconferencingappsoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Set your default conferencing application

<a id="opIdConferencingController_default"></a>

> Code samples

```bash
curl https://api.cal.com/v2/conferencing/google-meet/default \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v2/conferencing/{app}/default`

<h3 id="set-your-default-conferencing-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Conferencing application type|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|app|google-meet|
|app|zoom|
|app|msteams|
|app|daily-video|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="set-your-default-conferencing-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SetDefaultConferencingAppOutputResponseDto](#schemasetdefaultconferencingappoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Get your default conferencing application

<a id="opIdConferencingController_getDefault"></a>

> Code samples

```bash
curl https://api.cal.com/v2/conferencing/default \
  -H 'Accept: application/json'
```

`GET /v2/conferencing/default`

<h3 id="get-your-default-conferencing-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "appSlug": "string",
    "appLink": "string"
  }
}
```

<h3 id="get-your-default-conferencing-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetDefaultConferencingAppOutputResponseDto](#schemagetdefaultconferencingappoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Disconnect your conferencing application

<a id="opIdConferencingController_disconnect"></a>

> Code samples

```bash
curl https://api.cal.com/v2/conferencing/google-meet/disconnect \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2/conferencing/{app}/disconnect`

<h3 id="disconnect-your-conferencing-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|Conferencing application type|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|app|google-meet|
|app|zoom|
|app|msteams|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="disconnect-your-conferencing-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DisconnectConferencingAppOutputResponseDto](#schemadisconnectconferencingappoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-deprecated-platform-managed-users">Deprecated: Platform / Managed Users</h1>

## Get all managed users

<a id="opIdOAuthClientUsersController_getManagedUsers"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/users \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string'
```

`GET /v2/oauth-clients/{clientId}/users`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="get-all-managed-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|clientId|path|string|true|none|
|limit|query|number|false|The number of items to return|
|offset|query|number|false|The number of items to skip|
|emails|query|[string]|false|Filter managed users by email. If you want to filter by multiple emails, separate them with a comma.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
      "username": "alice",
      "name": "alice",
      "bio": "bio",
      "timeZone": "America/New_York",
      "weekStart": "Sunday",
      "createdDate": "2024-04-01T00:00:00.000Z",
      "timeFormat": 12,
      "defaultScheduleId": null,
      "locale": "en",
      "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
      "metadata": {
        "key": "value"
      }
    }
  ]
}
```

<h3 id="get-all-managed-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetManagedUsersOutput](#schemagetmanagedusersoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a managed user

<a id="opIdOAuthClientUsersController_createUser"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string' \
  -d '{
    "email": "alice@example.com",
    "name": "Alice Smith",
    "timeFormat": 12,
    "weekStart": "Monday",
    "timeZone": "America/New_York",
    "locale": "en",
    "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
    "bio": "I am a bio",
    "metadata": {
      "key": "value"
    }
  }'
```

`POST /v2/oauth-clients/{clientId}/users`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

> Body parameter

```json
{
  "email": "alice@example.com",
  "name": "Alice Smith",
  "timeFormat": 12,
  "weekStart": "Monday",
  "timeZone": "America/New_York",
  "locale": "en",
  "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
  "bio": "I am a bio",
  "metadata": {
    "key": "value"
  }
}
```

<h3 id="create-a-managed-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|clientId|path|string|true|none|
|body|body|[CreateManagedUserInput](#schemacreatemanageduserinput)|true|none|
|» email|body|string|true|none|
|» name|body|string|true|Managed user's name is used in emails|
|» timeFormat|body|number|false|Must be a number 12 or 24|
|» weekStart|body|string|false|none|
|» timeZone|body|string|false|Timezone is used to create user's default schedule from Monday to Friday from 9AM to 5PM. If it is not passed then user does not have<br>      a default schedule and it must be created manually via the /schedules endpoint. Until the schedule is created, the user can't access availability atom to set his / her availability nor booked.<br>      It will default to Europe/London if not passed.|
|» locale|body|string|false|none|
|» avatarUrl|body|string|false|URL of the user's avatar image|
|» bio|body|string|false|Bio|
|» metadata|body|object|false|You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and values up to 500 characters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» timeFormat|12|
|» timeFormat|24|
|» weekStart|Monday|
|» weekStart|Tuesday|
|» weekStart|Wednesday|
|» weekStart|Thursday|
|» weekStart|Friday|
|» weekStart|Saturday|
|» weekStart|Sunday|
|» locale|ar|
|» locale|ca|
|» locale|de|
|» locale|es|
|» locale|eu|
|» locale|he|
|» locale|id|
|» locale|ja|
|» locale|lv|
|» locale|pl|
|» locale|ro|
|» locale|sr|
|» locale|th|
|» locale|vi|
|» locale|az|
|» locale|cs|
|» locale|el|
|» locale|es-419|
|» locale|fi|
|» locale|hr|
|» locale|it|
|» locale|km|
|» locale|nl|
|» locale|pt|
|» locale|ru|
|» locale|sv|
|» locale|tr|
|» locale|zh-CN|
|» locale|bg|
|» locale|da|
|» locale|en|
|» locale|et|
|» locale|fr|
|» locale|hu|
|» locale|iw|
|» locale|ko|
|» locale|no|
|» locale|pt-BR|
|» locale|sk|
|» locale|ta|
|» locale|uk|
|» locale|zh-TW|
|» locale|bn|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "user": {
      "id": 1,
      "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
      "username": "alice",
      "name": "alice",
      "bio": "bio",
      "timeZone": "America/New_York",
      "weekStart": "Sunday",
      "createdDate": "2024-04-01T00:00:00.000Z",
      "timeFormat": 12,
      "defaultScheduleId": null,
      "locale": "en",
      "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
      "metadata": {
        "key": "value"
      }
    },
    "accessTokenExpiresAt": 0,
    "refreshTokenExpiresAt": 0
  },
  "error": {}
}
```

<h3 id="create-a-managed-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateManagedUserOutput](#schemacreatemanageduseroutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a managed user

<a id="opIdOAuthClientUsersController_getUserById"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/users/0 \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string'
```

`GET /v2/oauth-clients/{clientId}/users/{userId}`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="get-a-managed-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|clientId|path|string|true|none|
|userId|path|number|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
    "username": "alice",
    "name": "alice",
    "bio": "bio",
    "timeZone": "America/New_York",
    "weekStart": "Sunday",
    "createdDate": "2024-04-01T00:00:00.000Z",
    "timeFormat": 12,
    "defaultScheduleId": null,
    "locale": "en",
    "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
    "metadata": {
      "key": "value"
    }
  }
}
```

<h3 id="get-a-managed-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetManagedUserOutput](#schemagetmanageduseroutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a managed user

<a id="opIdOAuthClientUsersController_deleteUser"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/users/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string'
```

`DELETE /v2/oauth-clients/{clientId}/users/{userId}`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="delete-a-managed-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|clientId|path|string|true|none|
|userId|path|number|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
    "username": "alice",
    "name": "alice",
    "bio": "bio",
    "timeZone": "America/New_York",
    "weekStart": "Sunday",
    "createdDate": "2024-04-01T00:00:00.000Z",
    "timeFormat": 12,
    "defaultScheduleId": null,
    "locale": "en",
    "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
    "metadata": {
      "key": "value"
    }
  }
}
```

<h3 id="delete-a-managed-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetManagedUserOutput](#schemagetmanageduseroutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a managed user

<a id="opIdOAuthClientUsersController_updateUser"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/users/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string' \
  -d '{
    "email": "string",
    "name": "string",
    "timeFormat": 12,
    "defaultScheduleId": 0,
    "weekStart": "Monday",
    "timeZone": "string",
    "locale": "en",
    "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
    "bio": "I am a bio",
    "metadata": {
      "key": "value"
    }
  }'
```

`PATCH /v2/oauth-clients/{clientId}/users/{userId}`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

> Body parameter

```json
{
  "email": "string",
  "name": "string",
  "timeFormat": 12,
  "defaultScheduleId": 0,
  "weekStart": "Monday",
  "timeZone": "string",
  "locale": "en",
  "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
  "bio": "I am a bio",
  "metadata": {
    "key": "value"
  }
}
```

<h3 id="update-a-managed-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|clientId|path|string|true|none|
|userId|path|number|true|none|
|body|body|[UpdateManagedUserInput](#schemaupdatemanageduserinput)|true|none|
|» email|body|string|false|none|
|» name|body|string|false|none|
|» timeFormat|body|number|false|Must be 12 or 24|
|» defaultScheduleId|body|number|false|none|
|» weekStart|body|string|false|none|
|» timeZone|body|string|false|none|
|» locale|body|string|false|none|
|» avatarUrl|body|string|false|URL of the user's avatar image|
|» bio|body|string|false|Bio|
|» metadata|body|object|false|You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and values up to 500 characters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» timeFormat|12|
|» timeFormat|24|
|» weekStart|Monday|
|» weekStart|Tuesday|
|» weekStart|Wednesday|
|» weekStart|Thursday|
|» weekStart|Friday|
|» weekStart|Saturday|
|» weekStart|Sunday|
|» locale|ar|
|» locale|ca|
|» locale|de|
|» locale|es|
|» locale|eu|
|» locale|he|
|» locale|id|
|» locale|ja|
|» locale|lv|
|» locale|pl|
|» locale|ro|
|» locale|sr|
|» locale|th|
|» locale|vi|
|» locale|az|
|» locale|cs|
|» locale|el|
|» locale|es-419|
|» locale|fi|
|» locale|hr|
|» locale|it|
|» locale|km|
|» locale|nl|
|» locale|pt|
|» locale|ru|
|» locale|sv|
|» locale|tr|
|» locale|zh-CN|
|» locale|bg|
|» locale|da|
|» locale|en|
|» locale|et|
|» locale|fr|
|» locale|hu|
|» locale|iw|
|» locale|ko|
|» locale|no|
|» locale|pt-BR|
|» locale|sk|
|» locale|ta|
|» locale|uk|
|» locale|zh-TW|
|» locale|bn|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
    "username": "alice",
    "name": "alice",
    "bio": "bio",
    "timeZone": "America/New_York",
    "weekStart": "Sunday",
    "createdDate": "2024-04-01T00:00:00.000Z",
    "timeFormat": 12,
    "defaultScheduleId": null,
    "locale": "en",
    "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
    "metadata": {
      "key": "value"
    }
  }
}
```

<h3 id="update-a-managed-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetManagedUserOutput](#schemagetmanageduseroutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Force refresh tokens

<a id="opIdOAuthClientUsersController_forceRefresh"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/users/0/force-refresh \
  -X POST \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string'
```

`POST /v2/oauth-clients/{clientId}/users/{userId}/force-refresh`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning> If you have lost managed user access or refresh token, then you can get new ones by using OAuth credentials. Access token is valid for 60 minutes and refresh token for 1 year. Make sure to store them in your database, for example, in your User database model `calAccessToken` and `calRefreshToken` fields.
Response also contains `accessTokenExpiresAt` and `refreshTokenExpiresAt` fields, but if you decode the jwt token the payload will contain `clientId` (OAuth client ID), `ownerId` (user to whom token belongs ID), `iat` (issued at time) and `expiresAt` (when does the token expire) fields.

<h3 id="force-refresh-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|userId|path|number|true|none|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "accessTokenExpiresAt": 0,
    "refreshTokenExpiresAt": 0
  }
}
```

<h3 id="force-refresh-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[KeysResponseDto](#schemakeysresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Refresh managed user tokens

<a id="opIdOAuthFlowController_refreshTokens"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth/string/refresh \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string' \
  -d '{
    "refreshToken": "string"
  }'
```

`POST /v2/oauth/{clientId}/refresh`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning> If managed user access token is expired then get a new one using this endpoint - it will also refresh the refresh token, because we use
    "refresh token rotation" mechanism. Access token is valid for 60 minutes and refresh token for 1 year. Make sure to store them in your database, for example, in your User database model `calAccessToken` and `calRefreshToken` fields.
Response also contains `accessTokenExpiresAt` and `refreshTokenExpiresAt` fields, but if you decode the jwt token the payload will contain `clientId` (OAuth client ID), `ownerId` (user to whom token belongs ID), `iat` (issued at time) and `expiresAt` (when does the token expire) fields.

> Body parameter

```json
{
  "refreshToken": "string"
}
```

<h3 id="refresh-managed-user-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientId|path|string|true|none|
|x-cal-secret-key|header|string|true|OAuth client secret key.|
|body|body|[RefreshTokenInput](#schemarefreshtokeninput)|true|none|
|» refreshToken|body|string|true|Managed user's refresh token.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "accessTokenExpiresAt": 0,
    "refreshTokenExpiresAt": 0
  }
}
```

<h3 id="refresh-managed-user-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[KeysResponseDto](#schemakeysresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-deprecated-platform-webhooks">Deprecated: Platform / Webhooks</h1>

## Get all webhooks

<a id="opIdOAuthClientWebhooksController_getOAuthClientWebhooks"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/webhooks \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string'
```

`GET /v2/oauth-clients/{clientId}/webhooks`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="get-all-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|clientId|path|string|true|none|
|take|query|number|false|Maximum number of items to return|
|skip|query|number|false|Number of items to skip|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
      "triggers": [
        "BOOKING_CREATED"
      ],
      "oAuthClientId": "string",
      "id": 0,
      "subscriberUrl": "string",
      "active": true,
      "secret": "string"
    }
  ]
}
```

<h3 id="get-all-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuthClientWebhooksOutputResponseDto](#schemaoauthclientwebhooksoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a webhook

<a id="opIdOAuthClientWebhooksController_createOAuthClientWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string' \
  -d '{
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "active": true,
    "subscriberUrl": "string",
    "triggers": [
      "BOOKING_CREATED",
      "BOOKING_RESCHEDULED",
      "BOOKING_CANCELLED",
      "BOOKING_CONFIRMED",
      "BOOKING_REJECTED",
      "BOOKING_COMPLETED",
      "BOOKING_NO_SHOW",
      "BOOKING_REOPENED"
    ],
    "secret": "string",
    "version": "2021-10-20"
  }'
```

`POST /v2/oauth-clients/{clientId}/webhooks`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

> Body parameter

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "active": true,
  "subscriberUrl": "string",
  "triggers": [
    "BOOKING_CREATED",
    "BOOKING_RESCHEDULED",
    "BOOKING_CANCELLED",
    "BOOKING_CONFIRMED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_NO_SHOW",
    "BOOKING_REOPENED"
  ],
  "secret": "string",
  "version": "2021-10-20"
}
```

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|clientId|path|string|true|none|
|body|body|[CreateWebhookInputDto](#schemacreatewebhookinputdto)|true|none|
|» payloadTemplate|body|string|false|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|» active|body|boolean|true|none|
|» subscriberUrl|body|string|true|none|
|» triggers|body|[string]|true|none|
|» secret|body|string|false|none|
|» version|body|string|false|The version of the webhook|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» triggers|BOOKING_CREATED|
|» triggers|BOOKING_PAYMENT_INITIATED|
|» triggers|BOOKING_PAID|
|» triggers|BOOKING_RESCHEDULED|
|» triggers|BOOKING_REQUESTED|
|» triggers|BOOKING_CANCELLED|
|» triggers|BOOKING_REJECTED|
|» triggers|BOOKING_NO_SHOW_UPDATED|
|» triggers|FORM_SUBMITTED|
|» triggers|MEETING_ENDED|
|» triggers|MEETING_STARTED|
|» triggers|RECORDING_READY|
|» triggers|INSTANT_MEETING|
|» triggers|RECORDING_TRANSCRIPTION_GENERATED|
|» triggers|OOO_CREATED|
|» triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|» triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|» triggers|FORM_SUBMITTED_NO_EVENT|
|» triggers|DELEGATION_CREDENTIAL_ERROR|
|» triggers|WRONG_ASSIGNMENT_REPORT|
|» version|2021-10-20|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "oAuthClientId": "string",
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[OAuthClientWebhookOutputResponseDto](#schemaoauthclientwebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all webhooks

<a id="opIdOAuthClientWebhooksController_deleteAllOAuthClientWebhooks"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/webhooks \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string'
```

`DELETE /v2/oauth-clients/{clientId}/webhooks`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="delete-all-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": "string"
}
```

<h3 id="delete-all-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteManyWebhooksOutputResponseDto](#schemadeletemanywebhooksoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a webhook

<a id="opIdOAuthClientWebhooksController_getOAuthClientWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/webhooks/string \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string'
```

`GET /v2/oauth-clients/{clientId}/webhooks/{webhookId}`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="get-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|webhookId|path|string|true|none|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "oAuthClientId": "string",
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="get-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuthClientWebhookOutputResponseDto](#schemaoauthclientwebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a webhook

<a id="opIdOAuthClientWebhooksController_deleteOAuthClientWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string'
```

`DELETE /v2/oauth-clients/{clientId}/webhooks/{webhookId}`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|webhookId|path|string|true|none|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "oAuthClientId": "string",
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuthClientWebhookOutputResponseDto](#schemaoauthclientwebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a webhook

<a id="opIdOAuthClientWebhooksController_updateOAuthClientWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string/webhooks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-cal-secret-key: string' \
  -d '{
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "active": true,
    "subscriberUrl": "string",
    "triggers": [
      "BOOKING_CREATED",
      "BOOKING_RESCHEDULED",
      "BOOKING_CANCELLED",
      "BOOKING_CONFIRMED",
      "BOOKING_REJECTED",
      "BOOKING_COMPLETED",
      "BOOKING_NO_SHOW",
      "BOOKING_REOPENED"
    ],
    "secret": "string",
    "version": "2021-10-20"
  }'
```

`PATCH /v2/oauth-clients/{clientId}/webhooks/{webhookId}`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

> Body parameter

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "active": true,
  "subscriberUrl": "string",
  "triggers": [
    "BOOKING_CREATED",
    "BOOKING_RESCHEDULED",
    "BOOKING_CANCELLED",
    "BOOKING_CONFIRMED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_NO_SHOW",
    "BOOKING_REOPENED"
  ],
  "secret": "string",
  "version": "2021-10-20"
}
```

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-cal-secret-key|header|string|true|OAuth client secret key|
|webhookId|path|string|true|none|
|clientId|path|string|true|none|
|body|body|[UpdateWebhookInputDto](#schemaupdatewebhookinputdto)|true|none|
|» payloadTemplate|body|string|false|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|» active|body|boolean|false|none|
|» subscriberUrl|body|string|false|none|
|» triggers|body|[string]|false|none|
|» secret|body|string|false|none|
|» version|body|string|false|The version of the webhook|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» triggers|BOOKING_CREATED|
|» triggers|BOOKING_PAYMENT_INITIATED|
|» triggers|BOOKING_PAID|
|» triggers|BOOKING_RESCHEDULED|
|» triggers|BOOKING_REQUESTED|
|» triggers|BOOKING_CANCELLED|
|» triggers|BOOKING_REJECTED|
|» triggers|BOOKING_NO_SHOW_UPDATED|
|» triggers|FORM_SUBMITTED|
|» triggers|MEETING_ENDED|
|» triggers|MEETING_STARTED|
|» triggers|RECORDING_READY|
|» triggers|INSTANT_MEETING|
|» triggers|RECORDING_TRANSCRIPTION_GENERATED|
|» triggers|OOO_CREATED|
|» triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|» triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|» triggers|FORM_SUBMITTED_NO_EVENT|
|» triggers|DELEGATION_CREDENTIAL_ERROR|
|» triggers|WRONG_ASSIGNMENT_REPORT|
|» version|2021-10-20|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "oAuthClientId": "string",
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuthClientWebhookOutputResponseDto](#schemaoauthclientwebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-deprecated-platform-oauth-clients">Deprecated: Platform OAuth Clients</h1>

## Get all OAuth clients

<a id="opIdOAuthClientsController_getOAuthClients"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients \
  -H 'Accept: application/json'
```

`GET /v2/oauth-clients`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="get-all-oauth-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "id": "clsx38nbl0001vkhlwin9fmt0",
      "name": "MyClient",
      "secret": "secretValue",
      "permissions": [
        "BOOKING_READ",
        "BOOKING_WRITE"
      ],
      "logo": "https://example.com/logo.png",
      "redirectUris": [
        "https://example.com/callback"
      ],
      "organizationId": 1,
      "createdAt": "2024-03-23T08:33:21.851Z",
      "areEmailsEnabled": true,
      "areDefaultEventTypesEnabled": true,
      "areCalendarEventsEnabled": true,
      "bookingRedirectUri": "https://example.com/booking-redirect",
      "bookingCancelRedirectUri": "https://example.com/booking-cancel",
      "bookingRescheduleRedirectUri": "https://example.com/booking-reschedule"
    }
  ]
}
```

<h3 id="get-all-oauth-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetOAuthClientsResponseDto](#schemagetoauthclientsresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an OAuth client

<a id="opIdOAuthClientsController_createOAuthClient"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "logo": "string",
    "name": "string",
    "redirectUris": [
      "string"
    ],
    "permissions": [
      "EVENT_TYPE_READ"
    ],
    "bookingRedirectUri": "string",
    "bookingCancelRedirectUri": "string",
    "bookingRescheduleRedirectUri": "string",
    "areEmailsEnabled": true,
    "areDefaultEventTypesEnabled": false,
    "areCalendarEventsEnabled": true
  }'
```

`POST /v2/oauth-clients`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

> Body parameter

```json
{
  "logo": "string",
  "name": "string",
  "redirectUris": [
    "string"
  ],
  "permissions": [
    "EVENT_TYPE_READ"
  ],
  "bookingRedirectUri": "string",
  "bookingCancelRedirectUri": "string",
  "bookingRescheduleRedirectUri": "string",
  "areEmailsEnabled": true,
  "areDefaultEventTypesEnabled": false,
  "areCalendarEventsEnabled": true
}
```

<h3 id="create-an-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|body|body|[CreateOAuthClientInput](#schemacreateoauthclientinput)|true|none|
|» logo|body|string|false|none|
|» name|body|string|true|none|
|» redirectUris|body|[string]|true|none|
|» permissions|body|[string]|true|Array of permission keys like ["BOOKING_READ", "BOOKING_WRITE"]. Use ["*"] to grant all permissions.|
|» bookingRedirectUri|body|string|false|none|
|» bookingCancelRedirectUri|body|string|false|none|
|» bookingRescheduleRedirectUri|body|string|false|none|
|» areEmailsEnabled|body|boolean|false|none|
|» areDefaultEventTypesEnabled|body|boolean|false|If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.|
|» areCalendarEventsEnabled|body|boolean|false|If true and if managed user has calendar connected, calendar events will be created. Disable it if you manually create calendar events. Default to true.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permissions|EVENT_TYPE_READ|
|» permissions|EVENT_TYPE_WRITE|
|» permissions|BOOKING_READ|
|» permissions|BOOKING_WRITE|
|» permissions|SCHEDULE_READ|
|» permissions|SCHEDULE_WRITE|
|» permissions|APPS_READ|
|» permissions|APPS_WRITE|
|» permissions|PROFILE_READ|
|» permissions|PROFILE_WRITE|
|» permissions|*|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "clientId": "clsx38nbl0001vkhlwin9fmt0",
    "clientSecret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoib2F1dGgtY2xpZW50Iiwi"
  }
}
```

<h3 id="create-an-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Create an OAuth client|[CreateOAuthClientResponseDto](#schemacreateoauthclientresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an OAuth client

<a id="opIdOAuthClientsController_getOAuthClientById"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string \
  -H 'Accept: application/json'
```

`GET /v2/oauth-clients/{clientId}`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="get-an-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": "clsx38nbl0001vkhlwin9fmt0",
    "name": "MyClient",
    "secret": "secretValue",
    "permissions": [
      "BOOKING_READ",
      "BOOKING_WRITE"
    ],
    "logo": "https://example.com/logo.png",
    "redirectUris": [
      "https://example.com/callback"
    ],
    "organizationId": 1,
    "createdAt": "2024-03-23T08:33:21.851Z",
    "areEmailsEnabled": true,
    "areDefaultEventTypesEnabled": true,
    "areCalendarEventsEnabled": true,
    "bookingRedirectUri": "https://example.com/booking-redirect",
    "bookingCancelRedirectUri": "https://example.com/booking-cancel",
    "bookingRescheduleRedirectUri": "https://example.com/booking-reschedule"
  }
}
```

<h3 id="get-an-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetOAuthClientResponseDto](#schemagetoauthclientresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an OAuth client

<a id="opIdOAuthClientsController_deleteOAuthClient"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2/oauth-clients/{clientId}`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

<h3 id="delete-an-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": "clsx38nbl0001vkhlwin9fmt0",
    "name": "MyClient",
    "secret": "secretValue",
    "permissions": [
      "BOOKING_READ",
      "BOOKING_WRITE"
    ],
    "logo": "https://example.com/logo.png",
    "redirectUris": [
      "https://example.com/callback"
    ],
    "organizationId": 1,
    "createdAt": "2024-03-23T08:33:21.851Z",
    "areEmailsEnabled": true,
    "areDefaultEventTypesEnabled": true,
    "areCalendarEventsEnabled": true,
    "bookingRedirectUri": "https://example.com/booking-redirect",
    "bookingCancelRedirectUri": "https://example.com/booking-cancel",
    "bookingRescheduleRedirectUri": "https://example.com/booking-reschedule"
  }
}
```

<h3 id="delete-an-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetOAuthClientResponseDto](#schemagetoauthclientresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an OAuth client

<a id="opIdOAuthClientsController_updateOAuthClient"></a>

> Code samples

```bash
curl https://api.cal.com/v2/oauth-clients/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "logo": "string",
    "name": "string",
    "redirectUris": [
      "string"
    ],
    "bookingRedirectUri": "string",
    "bookingCancelRedirectUri": "string",
    "bookingRescheduleRedirectUri": "string",
    "areEmailsEnabled": true,
    "areDefaultEventTypesEnabled": true,
    "areCalendarEventsEnabled": true
  }'
```

`PATCH /v2/oauth-clients/{clientId}`

<Warning>These endpoints are deprecated and will be removed in the future.</Warning>

> Body parameter

```json
{
  "logo": "string",
  "name": "string",
  "redirectUris": [
    "string"
  ],
  "bookingRedirectUri": "string",
  "bookingCancelRedirectUri": "string",
  "bookingRescheduleRedirectUri": "string",
  "areEmailsEnabled": true,
  "areDefaultEventTypesEnabled": true,
  "areCalendarEventsEnabled": true
}
```

<h3 id="update-an-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|clientId|path|string|true|none|
|body|body|[UpdateOAuthClientInput](#schemaupdateoauthclientinput)|true|none|
|» logo|body|string|false|none|
|» name|body|string|false|none|
|» redirectUris|body|[string]|false|none|
|» bookingRedirectUri|body|string|false|none|
|» bookingCancelRedirectUri|body|string|false|none|
|» bookingRescheduleRedirectUri|body|string|false|none|
|» areEmailsEnabled|body|boolean|false|none|
|» areDefaultEventTypesEnabled|body|boolean|false|If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.|
|» areCalendarEventsEnabled|body|boolean|false|If true and if managed user has calendar connected, calendar events will be created. Disable it if you manually create calendar events. Default to true.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": "clsx38nbl0001vkhlwin9fmt0",
    "name": "MyClient",
    "secret": "secretValue",
    "permissions": [
      "BOOKING_READ",
      "BOOKING_WRITE"
    ],
    "logo": "https://example.com/logo.png",
    "redirectUris": [
      "https://example.com/callback"
    ],
    "organizationId": 1,
    "createdAt": "2024-03-23T08:33:21.851Z",
    "areEmailsEnabled": true,
    "areDefaultEventTypesEnabled": true,
    "areCalendarEventsEnabled": true,
    "bookingRedirectUri": "https://example.com/booking-redirect",
    "bookingCancelRedirectUri": "https://example.com/booking-cancel",
    "bookingRescheduleRedirectUri": "https://example.com/booking-reschedule"
  }
}
```

<h3 id="update-an-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetOAuthClientResponseDto](#schemagetoauthclientresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-destination-calendars">Destination Calendars</h1>

## Update destination calendars

<a id="opIdDestinationCalendarsController_updateDestinationCalendars"></a>

> Code samples

```bash
curl https://api.cal.com/v2/destination-calendars \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "integration": "apple_calendar",
    "externalId": "https://caldav.icloud.com/26962146906/calendars/1644422A-1945-4438-BBC0-4F0Q23A57R7S/",
    "delegationCredentialId": "string"
  }'
```

`PUT /v2/destination-calendars`

> Body parameter

```json
{
  "integration": "apple_calendar",
  "externalId": "https://caldav.icloud.com/26962146906/calendars/1644422A-1945-4438-BBC0-4F0Q23A57R7S/",
  "delegationCredentialId": "string"
}
```

<h3 id="update-destination-calendars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[DestinationCalendarsInputBodyDto](#schemadestinationcalendarsinputbodydto)|true|none|
|» integration|body|string|true|The calendar service you want to integrate, as returned by the /calendars endpoint|
|» externalId|body|string|true|Unique identifier used to represent the specific calendar, as returned by the /calendars endpoint|
|» delegationCredentialId|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» integration|apple_calendar|
|» integration|google_calendar|
|» integration|office365_calendar|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "userId": 0,
    "integration": "string",
    "externalId": "string",
    "credentialId": 0
  }
}
```

<h3 id="update-destination-calendars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DestinationCalendarsOutputResponseDto](#schemadestinationcalendarsoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-event-types">Event Types</h1>

## Get all event types

<a id="opIdEventTypesController_2024_06_14_getEventTypes"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-14'
```

`GET /v2/event-types`

Hidden event types are returned only if authentication is provided and it belongs to the event type owner.
      
      Use the optional `sortCreatedAt` query parameter to order results by creation date (by ID). Accepts "asc" (oldest first) or "desc" (newest first). When not provided, no explicit ordering is applied.
      
      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
      

<h3 id="get-all-event-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.|
|username|query|string|false|The username of the user to get event types for. If only username provided will get all event types.|
|eventSlug|query|string|false|Slug of event type to return. Notably, if eventSlug is provided then username must be provided too, because multiple users can have event with same slug.|
|usernames|query|string|false|Get dynamic event type for multiple usernames separated by comma. e.g `usernames=alice,bob`|
|orgSlug|query|string|false|slug of the user's organization if he is in one, orgId is not required if using this parameter|
|orgId|query|number|false|ID of the organization of the user you want the get the event-types of, orgSlug is not needed when using this parameter|
|sortCreatedAt|query|string|false|Sort event types by creation date. When not provided, no explicit ordering is applied.|
|Authorization|header|string|false|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|x-cal-secret-key|header|string|false|For platform customers - OAuth client secret key|
|x-cal-client-id|header|string|false|For platform customers - OAuth client ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortCreatedAt|asc|
|sortCreatedAt|desc|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "lengthInMinutes": 60,
      "lengthInMinutesOptions": [
        15,
        30,
        60
      ],
      "title": "Learn the secrets of masterchief!",
      "slug": "learn-the-secrets-of-masterchief",
      "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
      "locations": [
        {
          "type": "address",
          "address": "123 Example St, City, Country",
          "public": true
        }
      ],
      "bookingFields": [
        {
          "type": "name",
          "label": "string",
          "placeholder": "string",
          "disableOnPrefill": true,
          "isDefault": true,
          "slug": "name",
          "required": true
        }
      ],
      "disableGuests": true,
      "slotInterval": 60,
      "minimumBookingNotice": 0,
      "beforeEventBuffer": 0,
      "afterEventBuffer": 0,
      "recurrence": {
        "interval": 10,
        "occurrences": 10,
        "frequency": "yearly"
      },
      "metadata": {},
      "price": 0,
      "currency": "string",
      "lockTimeZoneToggleOnBookingPage": true,
      "seatsPerTimeSlot": {},
      "forwardParamsSuccessRedirect": {},
      "successRedirectUrl": {},
      "isInstantEvent": true,
      "seatsShowAvailabilityCount": true,
      "scheduleId": 0,
      "bookingLimitsCount": {},
      "bookerActiveBookingsLimit": {
        "maximumActiveBookings": 3,
        "offerReschedule": true
      },
      "onlyShowFirstAvailableSlot": true,
      "bookingLimitsDuration": {},
      "bookingWindow": [
        {
          "type": "businessDays",
          "value": 5,
          "rolling": true
        }
      ],
      "bookerLayouts": {
        "defaultLayout": "month",
        "enabledLayouts": [
          "month"
        ]
      },
      "confirmationPolicy": {},
      "requiresBookerEmailVerification": true,
      "hideCalendarNotes": true,
      "color": {
        "lightThemeHex": "#292929",
        "darkThemeHex": "#fafafa"
      },
      "seats": {
        "seatsPerTimeSlot": 4,
        "showAttendeeInfo": true,
        "showAvailabilityCount": true
      },
      "offsetStart": 0,
      "customName": "string",
      "destinationCalendar": {
        "integration": "string",
        "externalId": "string"
      },
      "useDestinationCalendarEmail": true,
      "hideCalendarEventDetails": true,
      "hideOrganizerEmail": true,
      "calVideoSettings": {
        "disableRecordingForOrganizer": false,
        "disableRecordingForGuests": false,
        "redirectUrlOnExit": {},
        "enableAutomaticRecordingForOrganizer": false,
        "enableAutomaticTranscription": false,
        "disableTranscriptionForGuests": false,
        "disableTranscriptionForOrganizer": false,
        "sendTranscriptionEmails": true
      },
      "hidden": true,
      "bookingRequiresAuthentication": true,
      "disableCancelling": {
        "disabled": true
      },
      "disableRescheduling": {
        "disabled": true,
        "minutesBefore": 60
      },
      "interfaceLanguage": "string",
      "allowReschedulingPastBookings": true,
      "allowReschedulingCancelledBookings": true,
      "showOptimizedSlots": true,
      "ownerId": 10,
      "users": [
        "string"
      ],
      "bookingUrl": "https://cal.com/john-doe/30min"
    }
  ]
}
```

<h3 id="get-all-event-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetEventTypesOutput_2024_06_14](#schemageteventtypesoutput_2024_06_14)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an event type

<a id="opIdEventTypesController_2024_06_14_createEventType"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-14' \
  -d '{
    "lengthInMinutes": 60,
    "lengthInMinutesOptions": [
      15,
      30,
      60
    ],
    "title": "Learn the secrets of masterchief!",
    "slug": "learn-the-secrets-of-masterchief",
    "description": "Discover the culinary wonders of the Argentina by making the best flan ever!",
    "bookingFields": [
      {
        "type": "name",
        "label": "string",
        "placeholder": "string",
        "disableOnPrefill": true
      }
    ],
    "disableGuests": true,
    "slotInterval": 0,
    "minimumBookingNotice": 0,
    "beforeEventBuffer": 0,
    "afterEventBuffer": 0,
    "scheduleId": 0,
    "bookingLimitsCount": {
      "day": 1,
      "week": 2,
      "month": 3,
      "year": 4,
      "disabled": false
    },
    "bookerActiveBookingsLimit": {
      "maximumActiveBookings": 3,
      "offerReschedule": true
    },
    "onlyShowFirstAvailableSlot": true,
    "bookingLimitsDuration": {
      "day": 60,
      "week": 120,
      "month": 180,
      "year": 240
    },
    "bookingWindow": {
      "type": "businessDays",
      "value": 5,
      "rolling": true
    },
    "offsetStart": 0,
    "bookerLayouts": {
      "defaultLayout": "month",
      "enabledLayouts": [
        "month"
      ]
    },
    "confirmationPolicy": {
      "type": "always",
      "noticeThreshold": {
        "unit": "minutes",
        "count": 30
      },
      "blockUnconfirmedBookingsInBooker": true
    },
    "recurrence": {
      "interval": 10,
      "occurrences": 10,
      "frequency": "yearly"
    },
    "requiresBookerEmailVerification": true,
    "hideCalendarNotes": true,
    "lockTimeZoneToggleOnBookingPage": true,
    "color": {
      "lightThemeHex": "#292929",
      "darkThemeHex": "#fafafa"
    },
    "seats": {
      "seatsPerTimeSlot": 4,
      "showAttendeeInfo": true,
      "showAvailabilityCount": true
    },
    "customName": "{Event type title} between {Organiser} and {Scheduler}",
    "destinationCalendar": {
      "integration": "string",
      "externalId": "string"
    },
    "useDestinationCalendarEmail": true,
    "hideCalendarEventDetails": true,
    "successRedirectUrl": "https://masterchief.com/argentina/flan/video/9129412",
    "hideOrganizerEmail": true,
    "calVideoSettings": {
      "disableRecordingForOrganizer": false,
      "disableRecordingForGuests": false,
      "redirectUrlOnExit": {},
      "enableAutomaticRecordingForOrganizer": false,
      "enableAutomaticTranscription": false,
      "disableTranscriptionForGuests": false,
      "disableTranscriptionForOrganizer": false,
      "sendTranscriptionEmails": true
    },
    "hidden": true,
    "bookingRequiresAuthentication": false,
    "disableCancelling": {
      "disabled": true
    },
    "disableRescheduling": {
      "disabled": false,
      "minutesBefore": 60
    },
    "interfaceLanguage": "",
    "allowReschedulingPastBookings": false,
    "allowReschedulingCancelledBookings": false,
    "showOptimizedSlots": false,
    "locations": [
      {
        "type": "address",
        "address": "123 Example St, City, Country",
        "public": true
      }
    ]
  }'
```

`POST /v2/event-types`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

> Body parameter

```json
{
  "lengthInMinutes": 60,
  "lengthInMinutesOptions": [
    15,
    30,
    60
  ],
  "title": "Learn the secrets of masterchief!",
  "slug": "learn-the-secrets-of-masterchief",
  "description": "Discover the culinary wonders of the Argentina by making the best flan ever!",
  "bookingFields": [
    {
      "type": "name",
      "label": "string",
      "placeholder": "string",
      "disableOnPrefill": true
    }
  ],
  "disableGuests": true,
  "slotInterval": 0,
  "minimumBookingNotice": 0,
  "beforeEventBuffer": 0,
  "afterEventBuffer": 0,
  "scheduleId": 0,
  "bookingLimitsCount": {
    "day": 1,
    "week": 2,
    "month": 3,
    "year": 4,
    "disabled": false
  },
  "bookerActiveBookingsLimit": {
    "maximumActiveBookings": 3,
    "offerReschedule": true
  },
  "onlyShowFirstAvailableSlot": true,
  "bookingLimitsDuration": {
    "day": 60,
    "week": 120,
    "month": 180,
    "year": 240
  },
  "bookingWindow": {
    "type": "businessDays",
    "value": 5,
    "rolling": true
  },
  "offsetStart": 0,
  "bookerLayouts": {
    "defaultLayout": "month",
    "enabledLayouts": [
      "month"
    ]
  },
  "confirmationPolicy": {
    "type": "always",
    "noticeThreshold": {
      "unit": "minutes",
      "count": 30
    },
    "blockUnconfirmedBookingsInBooker": true
  },
  "recurrence": {
    "interval": 10,
    "occurrences": 10,
    "frequency": "yearly"
  },
  "requiresBookerEmailVerification": true,
  "hideCalendarNotes": true,
  "lockTimeZoneToggleOnBookingPage": true,
  "color": {
    "lightThemeHex": "#292929",
    "darkThemeHex": "#fafafa"
  },
  "seats": {
    "seatsPerTimeSlot": 4,
    "showAttendeeInfo": true,
    "showAvailabilityCount": true
  },
  "customName": "{Event type title} between {Organiser} and {Scheduler}",
  "destinationCalendar": {
    "integration": "string",
    "externalId": "string"
  },
  "useDestinationCalendarEmail": true,
  "hideCalendarEventDetails": true,
  "successRedirectUrl": "https://masterchief.com/argentina/flan/video/9129412",
  "hideOrganizerEmail": true,
  "calVideoSettings": {
    "disableRecordingForOrganizer": false,
    "disableRecordingForGuests": false,
    "redirectUrlOnExit": {},
    "enableAutomaticRecordingForOrganizer": false,
    "enableAutomaticTranscription": false,
    "disableTranscriptionForGuests": false,
    "disableTranscriptionForOrganizer": false,
    "sendTranscriptionEmails": true
  },
  "hidden": true,
  "bookingRequiresAuthentication": false,
  "disableCancelling": {
    "disabled": true
  },
  "disableRescheduling": {
    "disabled": false,
    "minutesBefore": 60
  },
  "interfaceLanguage": "",
  "allowReschedulingPastBookings": false,
  "allowReschedulingCancelledBookings": false,
  "showOptimizedSlots": false,
  "locations": [
    {
      "type": "address",
      "address": "123 Example St, City, Country",
      "public": true
    }
  ]
}
```

<h3 id="create-an-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[CreateEventTypeInput_2024_06_14](#schemacreateeventtypeinput_2024_06_14)|true|none|
|» lengthInMinutes|body|number|true|none|
|» lengthInMinutesOptions|body|[string]|false|If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.|
|» title|body|string|true|none|
|» slug|body|string|true|none|
|» description|body|string|false|none|
|» bookingFields|body|[[NameDefaultFieldInput_2024_06_14](#schemanamedefaultfieldinput_2024_06_14) \| [EmailDefaultFieldInput_2024_06_14](#schemaemaildefaultfieldinput_2024_06_14) \| [TitleDefaultFieldInput_2024_06_14](#schematitledefaultfieldinput_2024_06_14) \| [LocationDefaultFieldInput_2024_06_14](#schemalocationdefaultfieldinput_2024_06_14) \| [NotesDefaultFieldInput_2024_06_14](#schemanotesdefaultfieldinput_2024_06_14) \| [GuestsDefaultFieldInput_2024_06_14](#schemaguestsdefaultfieldinput_2024_06_14) \| [RescheduleReasonDefaultFieldInput_2024_06_14](#schemareschedulereasondefaultfieldinput_2024_06_14) \| [PhoneFieldInput_2024_06_14](#schemaphonefieldinput_2024_06_14) \| [AddressFieldInput_2024_06_14](#schemaaddressfieldinput_2024_06_14) \| [TextFieldInput_2024_06_14](#schematextfieldinput_2024_06_14) \| [NumberFieldInput_2024_06_14](#schemanumberfieldinput_2024_06_14) \| [TextAreaFieldInput_2024_06_14](#schematextareafieldinput_2024_06_14) \| [SelectFieldInput_2024_06_14](#schemaselectfieldinput_2024_06_14) \| [MultiSelectFieldInput_2024_06_14](#schemamultiselectfieldinput_2024_06_14) \| [MultiEmailFieldInput_2024_06_14](#schemamultiemailfieldinput_2024_06_14) \| [CheckboxGroupFieldInput_2024_06_14](#schemacheckboxgroupfieldinput_2024_06_14) \| [RadioGroupFieldInput_2024_06_14](#schemaradiogroupfieldinput_2024_06_14) \| [BooleanFieldInput_2024_06_14](#schemabooleanfieldinput_2024_06_14) \| [UrlFieldInput_2024_06_14](#schemaurlfieldinput_2024_06_14)]|false|Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.|
|» » *oneOf*|body|[NameDefaultFieldInput_2024_06_14](#schemanamedefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[EmailDefaultFieldInput_2024_06_14](#schemaemaildefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[TitleDefaultFieldInput_2024_06_14](#schematitledefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[LocationDefaultFieldInput_2024_06_14](#schemalocationdefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[NotesDefaultFieldInput_2024_06_14](#schemanotesdefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[GuestsDefaultFieldInput_2024_06_14](#schemaguestsdefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[RescheduleReasonDefaultFieldInput_2024_06_14](#schemareschedulereasondefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[PhoneFieldInput_2024_06_14](#schemaphonefieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[AddressFieldInput_2024_06_14](#schemaaddressfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[TextFieldInput_2024_06_14](#schematextfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[NumberFieldInput_2024_06_14](#schemanumberfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[TextAreaFieldInput_2024_06_14](#schematextareafieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[SelectFieldInput_2024_06_14](#schemaselectfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[MultiSelectFieldInput_2024_06_14](#schemamultiselectfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[MultiEmailFieldInput_2024_06_14](#schemamultiemailfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[CheckboxGroupFieldInput_2024_06_14](#schemacheckboxgroupfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[RadioGroupFieldInput_2024_06_14](#schemaradiogroupfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[BooleanFieldInput_2024_06_14](#schemabooleanfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[UrlFieldInput_2024_06_14](#schemaurlfieldinput_2024_06_14)|false|none|
|» disableGuests|body|boolean|false|If true, person booking this event can't add guests via their emails.|
|» slotInterval|body|number|false|Number representing length of each slot when event is booked. By default it equal length of the event type.<br>      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then<br>      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.|
|» minimumBookingNotice|body|number|false|Minimum number of minutes before the event that a booking can be made.|
|» beforeEventBuffer|body|number|false|Extra time automatically blocked on your calendar before a meeting starts. This gives you time to prepare, review notes, or transition from your previous activity.|
|» afterEventBuffer|body|number|false|Extra time automatically blocked on your calendar after a meeting ends. This gives you time to wrap up, add notes, or decompress before your next commitment.|
|» scheduleId|body|number|false|If you want that this event has different schedule than user's default one you can specify it here.|
|» bookingLimitsCount|body|[BaseBookingLimitsCount_2024_06_14](#schemabasebookinglimitscount_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Limit how many times this event can be booked|
|» » *oneOf*|body|[BaseBookingLimitsCount_2024_06_14](#schemabasebookinglimitscount_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» bookerActiveBookingsLimit|body|[BookerActiveBookingsLimit_2024_06_14](#schemabookeractivebookingslimit_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Limit the number of active bookings a booker can make for this event type.|
|» » *oneOf*|body|[BookerActiveBookingsLimit_2024_06_14](#schemabookeractivebookingslimit_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» onlyShowFirstAvailableSlot|body|boolean|false|This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.|
|» bookingLimitsDuration|body|[BaseBookingLimitsDuration_2024_06_14](#schemabasebookinglimitsduration_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Limit total amount of time that this event can be booked|
|» » *oneOf*|body|[BaseBookingLimitsDuration_2024_06_14](#schemabasebookinglimitsduration_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» bookingWindow|body|[BusinessDaysWindow_2024_06_14](#schemabusinessdayswindow_2024_06_14) \| [CalendarDaysWindow_2024_06_14](#schemacalendardayswindow_2024_06_14) \| [RangeWindow_2024_06_14](#schemarangewindow_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Limit how far in the future this event can be booked|
|» » *oneOf*|body|[BusinessDaysWindow_2024_06_14](#schemabusinessdayswindow_2024_06_14)|false|none|
|» » *oneOf*|body|[CalendarDaysWindow_2024_06_14](#schemacalendardayswindow_2024_06_14)|false|none|
|» » *oneOf*|body|[RangeWindow_2024_06_14](#schemarangewindow_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» offsetStart|body|number|false|Offset timeslots shown to bookers by a specified number of minutes|
|» bookerLayouts|body|object|false|Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.|
|» » defaultLayout|body|string|true|none|
|» » enabledLayouts|body|[string]|true|Array of valid layouts - month, week or column|
|» confirmationPolicy|body|[BaseConfirmationPolicy_2024_06_14](#schemabaseconfirmationpolicy_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.|
|» » *oneOf*|body|[BaseConfirmationPolicy_2024_06_14](#schemabaseconfirmationpolicy_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» recurrence|body|[Recurrence_2024_06_14](#schemarecurrence_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Create a recurring event type.|
|» » *oneOf*|body|[Recurrence_2024_06_14](#schemarecurrence_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» requiresBookerEmailVerification|body|boolean|false|none|
|» hideCalendarNotes|body|boolean|false|none|
|» lockTimeZoneToggleOnBookingPage|body|boolean|false|none|
|» color|body|[EventTypeColor_2024_06_14](#schemaeventtypecolor_2024_06_14)|false|none|
|» seats|body|[Seats_2024_06_14](#schemaseats_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Create an event type with multiple seats.|
|» » *oneOf*|body|[Seats_2024_06_14](#schemaseats_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» customName|body|string|false|Customizable event name with valid variables:<br>      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},<br>      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},<br>      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}|
|» destinationCalendar|body|[DestinationCalendar_2024_06_14](#schemadestinationcalendar_2024_06_14)|false|none|
|» useDestinationCalendarEmail|body|boolean|false|none|
|» hideCalendarEventDetails|body|boolean|false|none|
|» successRedirectUrl|body|string|false|A valid URL where the booker will redirect to, once the booking is completed successfully|
|» hideOrganizerEmail|body|boolean|false|Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events|
|» calVideoSettings|body|object|false|Cal video settings for the event type. Platform customers can't manage this property because currently we have no way of determining if managed user is a host or an attendee.|
|» » disableRecordingForOrganizer|body|boolean|false|If true, the organizer will not be able to record the meeting|
|» » disableRecordingForGuests|body|boolean|false|If true, the guests will not be able to record the meeting|
|» » redirectUrlOnExit|body|object|false|URL to which participants are redirected when they exit the call|
|» » enableAutomaticRecordingForOrganizer|body|boolean|false|If true, enables the automatic recording for the event when organizer joins the call|
|» » enableAutomaticTranscription|body|boolean|false|If true, enables the automatic transcription for the event whenever someone joins the call|
|» » disableTranscriptionForGuests|body|boolean|false|If true, the guests will not be able to receive transcription of the meeting|
|» » disableTranscriptionForOrganizer|body|boolean|false|If true, the organizer will not be able to receive transcription of the meeting|
|» » sendTranscriptionEmails|body|boolean|false|Send emails with the transcription of the Cal Video after the meeting ends.|
|» hidden|body|boolean|false|none|
|» bookingRequiresAuthentication|body|boolean|false|Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.|
|» disableCancelling|body|object|false|Settings for disabling cancelling of this event type.|
|» » disabled|body|boolean|false|If true, cancelling is always disabled for this event type.|
|» disableRescheduling|body|object|false|Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.|
|» » disabled|body|boolean|false|If true, rescheduling is always disabled for this event type.|
|» » minutesBefore|body|number|false|Disable rescheduling when less than the specified number of minutes before the meeting. If set, `disabled` should be false or undefined.|
|» interfaceLanguage|body|string|false|Set preferred language for the booking interface. Use empty string for visitor's browser language (default).|
|» allowReschedulingPastBookings|body|boolean|false|Enabling this option allows for past events to be rescheduled.|
|» allowReschedulingCancelledBookings|body|boolean|false|When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.|
|» showOptimizedSlots|body|boolean|false|Arrange time slots to optimize availability.|
|» locations|body|[[InputAddressLocation_2024_06_14](#schemainputaddresslocation_2024_06_14) \| [InputLinkLocation_2024_06_14](#schemainputlinklocation_2024_06_14) \| [InputIntegrationLocation_2024_06_14](#schemainputintegrationlocation_2024_06_14) \| [InputPhoneLocation_2024_06_14](#schemainputphonelocation_2024_06_14) \| [InputAttendeeAddressLocation_2024_06_14](#schemainputattendeeaddresslocation_2024_06_14) \| [InputAttendeePhoneLocation_2024_06_14](#schemainputattendeephonelocation_2024_06_14) \| [InputAttendeeDefinedLocation_2024_06_14](#schemainputattendeedefinedlocation_2024_06_14)]|false|Locations where the event will take place. If not provided, cal video link will be used as the location. Note: Setting a location to a conferencing app does not install the app - the app must already be installed. Via API, only Google Meet (google-meet), Microsoft Teams (office365-video), and Zoom (zoom) can be installed. Cal Video (cal-video) is installed by default. All other conferencing apps must be connected via the Cal.diy web app and are not available for Platform plan customers. You can only set an event type location to an app that has already been installed or connected.|
|» » *oneOf*|body|[InputAddressLocation_2024_06_14](#schemainputaddresslocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputLinkLocation_2024_06_14](#schemainputlinklocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputIntegrationLocation_2024_06_14](#schemainputintegrationlocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputPhoneLocation_2024_06_14](#schemainputphonelocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputAttendeeAddressLocation_2024_06_14](#schemainputattendeeaddresslocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputAttendeePhoneLocation_2024_06_14](#schemainputattendeephonelocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputAttendeeDefinedLocation_2024_06_14](#schemainputattendeedefinedlocation_2024_06_14)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » defaultLayout|month|
|» » defaultLayout|week|
|» » defaultLayout|column|
|» » enabledLayouts|month|
|» » enabledLayouts|week|
|» » enabledLayouts|column|
|» interfaceLanguage|""|
|» interfaceLanguage|en|
|» interfaceLanguage|ar|
|» interfaceLanguage|az|
|» interfaceLanguage|bg|
|» interfaceLanguage|bn|
|» interfaceLanguage|ca|
|» interfaceLanguage|cs|
|» interfaceLanguage|da|
|» interfaceLanguage|de|
|» interfaceLanguage|el|
|» interfaceLanguage|es|
|» interfaceLanguage|es-419|
|» interfaceLanguage|eu|
|» interfaceLanguage|et|
|» interfaceLanguage|fi|
|» interfaceLanguage|fr|
|» interfaceLanguage|he|
|» interfaceLanguage|hu|
|» interfaceLanguage|it|
|» interfaceLanguage|ja|
|» interfaceLanguage|km|
|» interfaceLanguage|ko|
|» interfaceLanguage|nl|
|» interfaceLanguage|no|
|» interfaceLanguage|pl|
|» interfaceLanguage|pt-BR|
|» interfaceLanguage|pt|
|» interfaceLanguage|ro|
|» interfaceLanguage|ru|
|» interfaceLanguage|sk-SK|
|» interfaceLanguage|sr|
|» interfaceLanguage|sv|
|» interfaceLanguage|tr|
|» interfaceLanguage|uk|
|» interfaceLanguage|vi|
|» interfaceLanguage|zh-CN|
|» interfaceLanguage|zh-TW|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "lengthInMinutes": 60,
    "lengthInMinutesOptions": [
      15,
      30,
      60
    ],
    "title": "Learn the secrets of masterchief!",
    "slug": "learn-the-secrets-of-masterchief",
    "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
    "locations": [
      {
        "type": "address",
        "address": "123 Example St, City, Country",
        "public": true
      }
    ],
    "bookingFields": [
      {
        "type": "name",
        "label": "string",
        "placeholder": "string",
        "disableOnPrefill": true,
        "isDefault": true,
        "slug": "name",
        "required": true
      }
    ],
    "disableGuests": true,
    "slotInterval": 60,
    "minimumBookingNotice": 0,
    "beforeEventBuffer": 0,
    "afterEventBuffer": 0,
    "recurrence": {
      "interval": 10,
      "occurrences": 10,
      "frequency": "yearly"
    },
    "metadata": {},
    "price": 0,
    "currency": "string",
    "lockTimeZoneToggleOnBookingPage": true,
    "seatsPerTimeSlot": {},
    "forwardParamsSuccessRedirect": {},
    "successRedirectUrl": {},
    "isInstantEvent": true,
    "seatsShowAvailabilityCount": true,
    "scheduleId": 0,
    "bookingLimitsCount": {},
    "bookerActiveBookingsLimit": {
      "maximumActiveBookings": 3,
      "offerReschedule": true
    },
    "onlyShowFirstAvailableSlot": true,
    "bookingLimitsDuration": {},
    "bookingWindow": [
      {
        "type": "businessDays",
        "value": 5,
        "rolling": true
      }
    ],
    "bookerLayouts": {
      "defaultLayout": "month",
      "enabledLayouts": [
        "month"
      ]
    },
    "confirmationPolicy": {},
    "requiresBookerEmailVerification": true,
    "hideCalendarNotes": true,
    "color": {
      "lightThemeHex": "#292929",
      "darkThemeHex": "#fafafa"
    },
    "seats": {
      "seatsPerTimeSlot": 4,
      "showAttendeeInfo": true,
      "showAvailabilityCount": true
    },
    "offsetStart": 0,
    "customName": "string",
    "destinationCalendar": {
      "integration": "string",
      "externalId": "string"
    },
    "useDestinationCalendarEmail": true,
    "hideCalendarEventDetails": true,
    "hideOrganizerEmail": true,
    "calVideoSettings": {
      "disableRecordingForOrganizer": false,
      "disableRecordingForGuests": false,
      "redirectUrlOnExit": {},
      "enableAutomaticRecordingForOrganizer": false,
      "enableAutomaticTranscription": false,
      "disableTranscriptionForGuests": false,
      "disableTranscriptionForOrganizer": false,
      "sendTranscriptionEmails": true
    },
    "hidden": true,
    "bookingRequiresAuthentication": true,
    "disableCancelling": {
      "disabled": true
    },
    "disableRescheduling": {
      "disabled": true,
      "minutesBefore": 60
    },
    "interfaceLanguage": "string",
    "allowReschedulingPastBookings": true,
    "allowReschedulingCancelledBookings": true,
    "showOptimizedSlots": true,
    "ownerId": 10,
    "users": [
      "string"
    ],
    "bookingUrl": "https://cal.com/john-doe/30min"
  }
}
```

<h3 id="create-an-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateEventTypeOutput_2024_06_14](#schemacreateeventtypeoutput_2024_06_14)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an event type

<a id="opIdEventTypesController_2024_06_14_getEventTypeById"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/string \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-14'
```

`GET /v2/event-types/{eventTypeId}`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
    
    Access control: This endpoint fetches an event type by ID and returns it only if the authenticated user is authorized. Authorization is granted to:
    - System admins
    - The event type owner
    - Hosts of the event type or users assigned to the event type
    - Team admins/owners of the team that owns the team event type
    - Organization admins/owners of the event type owner's organization
    - Organization admins/owners of the team's parent organization

    Note: Update and delete endpoints remain restricted to the event type owner only.

<h3 id="get-an-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.|
|eventTypeId|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "lengthInMinutes": 60,
    "lengthInMinutesOptions": [
      15,
      30,
      60
    ],
    "title": "Learn the secrets of masterchief!",
    "slug": "learn-the-secrets-of-masterchief",
    "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
    "locations": [
      {
        "type": "address",
        "address": "123 Example St, City, Country",
        "public": true
      }
    ],
    "bookingFields": [
      {
        "type": "name",
        "label": "string",
        "placeholder": "string",
        "disableOnPrefill": true,
        "isDefault": true,
        "slug": "name",
        "required": true
      }
    ],
    "disableGuests": true,
    "slotInterval": 60,
    "minimumBookingNotice": 0,
    "beforeEventBuffer": 0,
    "afterEventBuffer": 0,
    "recurrence": {
      "interval": 10,
      "occurrences": 10,
      "frequency": "yearly"
    },
    "metadata": {},
    "price": 0,
    "currency": "string",
    "lockTimeZoneToggleOnBookingPage": true,
    "seatsPerTimeSlot": {},
    "forwardParamsSuccessRedirect": {},
    "successRedirectUrl": {},
    "isInstantEvent": true,
    "seatsShowAvailabilityCount": true,
    "scheduleId": 0,
    "bookingLimitsCount": {},
    "bookerActiveBookingsLimit": {
      "maximumActiveBookings": 3,
      "offerReschedule": true
    },
    "onlyShowFirstAvailableSlot": true,
    "bookingLimitsDuration": {},
    "bookingWindow": [
      {
        "type": "businessDays",
        "value": 5,
        "rolling": true
      }
    ],
    "bookerLayouts": {
      "defaultLayout": "month",
      "enabledLayouts": [
        "month"
      ]
    },
    "confirmationPolicy": {},
    "requiresBookerEmailVerification": true,
    "hideCalendarNotes": true,
    "color": {
      "lightThemeHex": "#292929",
      "darkThemeHex": "#fafafa"
    },
    "seats": {
      "seatsPerTimeSlot": 4,
      "showAttendeeInfo": true,
      "showAvailabilityCount": true
    },
    "offsetStart": 0,
    "customName": "string",
    "destinationCalendar": {
      "integration": "string",
      "externalId": "string"
    },
    "useDestinationCalendarEmail": true,
    "hideCalendarEventDetails": true,
    "hideOrganizerEmail": true,
    "calVideoSettings": {
      "disableRecordingForOrganizer": false,
      "disableRecordingForGuests": false,
      "redirectUrlOnExit": {},
      "enableAutomaticRecordingForOrganizer": false,
      "enableAutomaticTranscription": false,
      "disableTranscriptionForGuests": false,
      "disableTranscriptionForOrganizer": false,
      "sendTranscriptionEmails": true
    },
    "hidden": true,
    "bookingRequiresAuthentication": true,
    "disableCancelling": {
      "disabled": true
    },
    "disableRescheduling": {
      "disabled": true,
      "minutesBefore": 60
    },
    "interfaceLanguage": "string",
    "allowReschedulingPastBookings": true,
    "allowReschedulingCancelledBookings": true,
    "showOptimizedSlots": true,
    "ownerId": 10,
    "users": [
      "string"
    ],
    "bookingUrl": "https://cal.com/john-doe/30min"
  }
}
```

<h3 id="get-an-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetEventTypeOutput_2024_06_14](#schemageteventtypeoutput_2024_06_14)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an event type

<a id="opIdEventTypesController_2024_06_14_deleteEventType"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-14'
```

`DELETE /v2/event-types/{eventTypeId}`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

<h3 id="delete-an-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.|
|eventTypeId|path|number|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "lengthInMinutes": 60,
    "title": "Learn the secrets of masterchief!",
    "slug": "string"
  }
}
```

<h3 id="delete-an-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteEventTypeOutput_2024_06_14](#schemadeleteeventtypeoutput_2024_06_14)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an event type

<a id="opIdEventTypesController_2024_06_14_updateEventType"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-14' \
  -d '{
    "lengthInMinutes": 60,
    "lengthInMinutesOptions": [
      15,
      30,
      60
    ],
    "title": "Learn the secrets of masterchief!",
    "slug": "learn-the-secrets-of-masterchief",
    "description": "Discover the culinary wonders of the Argentina by making the best flan ever!",
    "bookingFields": [
      {
        "type": "name",
        "label": "string",
        "placeholder": "string",
        "disableOnPrefill": true
      }
    ],
    "disableGuests": true,
    "slotInterval": 0,
    "minimumBookingNotice": 0,
    "beforeEventBuffer": 0,
    "afterEventBuffer": 0,
    "scheduleId": 0,
    "bookingLimitsCount": {
      "day": 1,
      "week": 2,
      "month": 3,
      "year": 4,
      "disabled": false
    },
    "bookerActiveBookingsLimit": {
      "maximumActiveBookings": 3,
      "offerReschedule": true
    },
    "onlyShowFirstAvailableSlot": true,
    "bookingLimitsDuration": {
      "day": 60,
      "week": 120,
      "month": 180,
      "year": 240
    },
    "bookingWindow": {
      "type": "businessDays",
      "value": 5,
      "rolling": true
    },
    "offsetStart": 0,
    "bookerLayouts": {
      "defaultLayout": "month",
      "enabledLayouts": [
        "month"
      ]
    },
    "confirmationPolicy": {
      "type": "always",
      "noticeThreshold": {
        "unit": "minutes",
        "count": 30
      },
      "blockUnconfirmedBookingsInBooker": true
    },
    "recurrence": {
      "interval": 10,
      "occurrences": 10,
      "frequency": "yearly"
    },
    "requiresBookerEmailVerification": true,
    "hideCalendarNotes": true,
    "lockTimeZoneToggleOnBookingPage": true,
    "color": {
      "lightThemeHex": "#292929",
      "darkThemeHex": "#fafafa"
    },
    "seats": {
      "seatsPerTimeSlot": 4,
      "showAttendeeInfo": true,
      "showAvailabilityCount": true
    },
    "customName": "{Event type title} between {Organiser} and {Scheduler}",
    "destinationCalendar": {
      "integration": "string",
      "externalId": "string"
    },
    "useDestinationCalendarEmail": true,
    "hideCalendarEventDetails": true,
    "successRedirectUrl": "https://masterchief.com/argentina/flan/video/9129412",
    "hideOrganizerEmail": true,
    "calVideoSettings": {
      "disableRecordingForOrganizer": false,
      "disableRecordingForGuests": false,
      "redirectUrlOnExit": {},
      "enableAutomaticRecordingForOrganizer": false,
      "enableAutomaticTranscription": false,
      "disableTranscriptionForGuests": false,
      "disableTranscriptionForOrganizer": false,
      "sendTranscriptionEmails": true
    },
    "hidden": true,
    "bookingRequiresAuthentication": false,
    "disableCancelling": {
      "disabled": true
    },
    "disableRescheduling": {
      "disabled": false,
      "minutesBefore": 60
    },
    "interfaceLanguage": "",
    "allowReschedulingPastBookings": false,
    "allowReschedulingCancelledBookings": false,
    "showOptimizedSlots": false,
    "locations": [
      {
        "type": "address",
        "address": "123 Example St, City, Country",
        "public": true
      }
    ]
  }'
```

`PATCH /v2/event-types/{eventTypeId}`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

> Body parameter

```json
{
  "lengthInMinutes": 60,
  "lengthInMinutesOptions": [
    15,
    30,
    60
  ],
  "title": "Learn the secrets of masterchief!",
  "slug": "learn-the-secrets-of-masterchief",
  "description": "Discover the culinary wonders of the Argentina by making the best flan ever!",
  "bookingFields": [
    {
      "type": "name",
      "label": "string",
      "placeholder": "string",
      "disableOnPrefill": true
    }
  ],
  "disableGuests": true,
  "slotInterval": 0,
  "minimumBookingNotice": 0,
  "beforeEventBuffer": 0,
  "afterEventBuffer": 0,
  "scheduleId": 0,
  "bookingLimitsCount": {
    "day": 1,
    "week": 2,
    "month": 3,
    "year": 4,
    "disabled": false
  },
  "bookerActiveBookingsLimit": {
    "maximumActiveBookings": 3,
    "offerReschedule": true
  },
  "onlyShowFirstAvailableSlot": true,
  "bookingLimitsDuration": {
    "day": 60,
    "week": 120,
    "month": 180,
    "year": 240
  },
  "bookingWindow": {
    "type": "businessDays",
    "value": 5,
    "rolling": true
  },
  "offsetStart": 0,
  "bookerLayouts": {
    "defaultLayout": "month",
    "enabledLayouts": [
      "month"
    ]
  },
  "confirmationPolicy": {
    "type": "always",
    "noticeThreshold": {
      "unit": "minutes",
      "count": 30
    },
    "blockUnconfirmedBookingsInBooker": true
  },
  "recurrence": {
    "interval": 10,
    "occurrences": 10,
    "frequency": "yearly"
  },
  "requiresBookerEmailVerification": true,
  "hideCalendarNotes": true,
  "lockTimeZoneToggleOnBookingPage": true,
  "color": {
    "lightThemeHex": "#292929",
    "darkThemeHex": "#fafafa"
  },
  "seats": {
    "seatsPerTimeSlot": 4,
    "showAttendeeInfo": true,
    "showAvailabilityCount": true
  },
  "customName": "{Event type title} between {Organiser} and {Scheduler}",
  "destinationCalendar": {
    "integration": "string",
    "externalId": "string"
  },
  "useDestinationCalendarEmail": true,
  "hideCalendarEventDetails": true,
  "successRedirectUrl": "https://masterchief.com/argentina/flan/video/9129412",
  "hideOrganizerEmail": true,
  "calVideoSettings": {
    "disableRecordingForOrganizer": false,
    "disableRecordingForGuests": false,
    "redirectUrlOnExit": {},
    "enableAutomaticRecordingForOrganizer": false,
    "enableAutomaticTranscription": false,
    "disableTranscriptionForGuests": false,
    "disableTranscriptionForOrganizer": false,
    "sendTranscriptionEmails": true
  },
  "hidden": true,
  "bookingRequiresAuthentication": false,
  "disableCancelling": {
    "disabled": true
  },
  "disableRescheduling": {
    "disabled": false,
    "minutesBefore": 60
  },
  "interfaceLanguage": "",
  "allowReschedulingPastBookings": false,
  "allowReschedulingCancelledBookings": false,
  "showOptimizedSlots": false,
  "locations": [
    {
      "type": "address",
      "address": "123 Example St, City, Country",
      "public": true
    }
  ]
}
```

<h3 id="update-an-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-06-14. If not set to this value, the endpoint will default to an older version.|
|eventTypeId|path|number|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[UpdateEventTypeInput_2024_06_14](#schemaupdateeventtypeinput_2024_06_14)|true|none|
|» lengthInMinutes|body|number|false|none|
|» lengthInMinutesOptions|body|[string]|false|If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.|
|» title|body|string|false|none|
|» slug|body|string|false|none|
|» description|body|string|false|none|
|» bookingFields|body|[[NameDefaultFieldInput_2024_06_14](#schemanamedefaultfieldinput_2024_06_14) \| [EmailDefaultFieldInput_2024_06_14](#schemaemaildefaultfieldinput_2024_06_14) \| [TitleDefaultFieldInput_2024_06_14](#schematitledefaultfieldinput_2024_06_14) \| [LocationDefaultFieldInput_2024_06_14](#schemalocationdefaultfieldinput_2024_06_14) \| [NotesDefaultFieldInput_2024_06_14](#schemanotesdefaultfieldinput_2024_06_14) \| [GuestsDefaultFieldInput_2024_06_14](#schemaguestsdefaultfieldinput_2024_06_14) \| [RescheduleReasonDefaultFieldInput_2024_06_14](#schemareschedulereasondefaultfieldinput_2024_06_14) \| [PhoneFieldInput_2024_06_14](#schemaphonefieldinput_2024_06_14) \| [AddressFieldInput_2024_06_14](#schemaaddressfieldinput_2024_06_14) \| [TextFieldInput_2024_06_14](#schematextfieldinput_2024_06_14) \| [NumberFieldInput_2024_06_14](#schemanumberfieldinput_2024_06_14) \| [TextAreaFieldInput_2024_06_14](#schematextareafieldinput_2024_06_14) \| [SelectFieldInput_2024_06_14](#schemaselectfieldinput_2024_06_14) \| [MultiSelectFieldInput_2024_06_14](#schemamultiselectfieldinput_2024_06_14) \| [MultiEmailFieldInput_2024_06_14](#schemamultiemailfieldinput_2024_06_14) \| [CheckboxGroupFieldInput_2024_06_14](#schemacheckboxgroupfieldinput_2024_06_14) \| [RadioGroupFieldInput_2024_06_14](#schemaradiogroupfieldinput_2024_06_14) \| [BooleanFieldInput_2024_06_14](#schemabooleanfieldinput_2024_06_14)]|false|Complete set of booking form fields. This array replaces all existing booking fields. To modify existing fields, first fetch the current event type, then include all desired fields in this array. Sending only one field will remove all other custom fields, keeping only default fields plus the provided one.|
|» » *oneOf*|body|[NameDefaultFieldInput_2024_06_14](#schemanamedefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[EmailDefaultFieldInput_2024_06_14](#schemaemaildefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[TitleDefaultFieldInput_2024_06_14](#schematitledefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[LocationDefaultFieldInput_2024_06_14](#schemalocationdefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[NotesDefaultFieldInput_2024_06_14](#schemanotesdefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[GuestsDefaultFieldInput_2024_06_14](#schemaguestsdefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[RescheduleReasonDefaultFieldInput_2024_06_14](#schemareschedulereasondefaultfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[PhoneFieldInput_2024_06_14](#schemaphonefieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[AddressFieldInput_2024_06_14](#schemaaddressfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[TextFieldInput_2024_06_14](#schematextfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[NumberFieldInput_2024_06_14](#schemanumberfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[TextAreaFieldInput_2024_06_14](#schematextareafieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[SelectFieldInput_2024_06_14](#schemaselectfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[MultiSelectFieldInput_2024_06_14](#schemamultiselectfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[MultiEmailFieldInput_2024_06_14](#schemamultiemailfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[CheckboxGroupFieldInput_2024_06_14](#schemacheckboxgroupfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[RadioGroupFieldInput_2024_06_14](#schemaradiogroupfieldinput_2024_06_14)|false|none|
|» » *oneOf*|body|[BooleanFieldInput_2024_06_14](#schemabooleanfieldinput_2024_06_14)|false|none|
|» disableGuests|body|boolean|false|If true, person booking this event can't add guests via their emails.|
|» slotInterval|body|number|false|Number representing length of each slot when event is booked. By default it equal length of the event type.<br>      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then<br>      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.|
|» minimumBookingNotice|body|number|false|Minimum number of minutes before the event that a booking can be made.|
|» beforeEventBuffer|body|number|false|Extra time automatically blocked on your calendar before a meeting starts. This gives you time to prepare, review notes, or transition from your previous activity.|
|» afterEventBuffer|body|number|false|Extra time automatically blocked on your calendar after a meeting ends. This gives you time to wrap up, add notes, or decompress before your next commitment.|
|» scheduleId|body|number|false|If you want that this event has different schedule than user's default one you can specify it here.|
|» bookingLimitsCount|body|[BaseBookingLimitsCount_2024_06_14](#schemabasebookinglimitscount_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Limit how many times this event can be booked|
|» » *oneOf*|body|[BaseBookingLimitsCount_2024_06_14](#schemabasebookinglimitscount_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» bookerActiveBookingsLimit|body|[BookerActiveBookingsLimit_2024_06_14](#schemabookeractivebookingslimit_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Limit the number of active bookings a booker can make for this event type.|
|» » *oneOf*|body|[BookerActiveBookingsLimit_2024_06_14](#schemabookeractivebookingslimit_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» onlyShowFirstAvailableSlot|body|boolean|false|This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.|
|» bookingLimitsDuration|body|[BaseBookingLimitsDuration_2024_06_14](#schemabasebookinglimitsduration_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Limit total amount of time that this event can be booked|
|» » *oneOf*|body|[BaseBookingLimitsDuration_2024_06_14](#schemabasebookinglimitsduration_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» bookingWindow|body|[BusinessDaysWindow_2024_06_14](#schemabusinessdayswindow_2024_06_14) \| [CalendarDaysWindow_2024_06_14](#schemacalendardayswindow_2024_06_14) \| [RangeWindow_2024_06_14](#schemarangewindow_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Limit how far in the future this event can be booked|
|» » *oneOf*|body|[BusinessDaysWindow_2024_06_14](#schemabusinessdayswindow_2024_06_14)|false|none|
|» » *oneOf*|body|[CalendarDaysWindow_2024_06_14](#schemacalendardayswindow_2024_06_14)|false|none|
|» » *oneOf*|body|[RangeWindow_2024_06_14](#schemarangewindow_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» offsetStart|body|number|false|Offset timeslots shown to bookers by a specified number of minutes|
|» bookerLayouts|body|object|false|Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.|
|» » defaultLayout|body|string|true|none|
|» » enabledLayouts|body|[string]|true|Array of valid layouts - month, week or column|
|» confirmationPolicy|body|[BaseConfirmationPolicy_2024_06_14](#schemabaseconfirmationpolicy_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.|
|» » *oneOf*|body|[BaseConfirmationPolicy_2024_06_14](#schemabaseconfirmationpolicy_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» recurrence|body|[Recurrence_2024_06_14](#schemarecurrence_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Create a recurring event type.|
|» » *oneOf*|body|[Recurrence_2024_06_14](#schemarecurrence_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» requiresBookerEmailVerification|body|boolean|false|none|
|» hideCalendarNotes|body|boolean|false|none|
|» lockTimeZoneToggleOnBookingPage|body|boolean|false|none|
|» color|body|[EventTypeColor_2024_06_14](#schemaeventtypecolor_2024_06_14)|false|none|
|» seats|body|[Seats_2024_06_14](#schemaseats_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|Create an event type with multiple seats.|
|» » *oneOf*|body|[Seats_2024_06_14](#schemaseats_2024_06_14)|false|none|
|» » *oneOf*|body|[Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|
|» customName|body|string|false|Customizable event name with valid variables:<br>      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},<br>      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},<br>      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}|
|» destinationCalendar|body|[DestinationCalendar_2024_06_14](#schemadestinationcalendar_2024_06_14)|false|none|
|» useDestinationCalendarEmail|body|boolean|false|none|
|» hideCalendarEventDetails|body|boolean|false|none|
|» successRedirectUrl|body|string|false|A valid URL where the booker will redirect to, once the booking is completed successfully|
|» hideOrganizerEmail|body|boolean|false|Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events|
|» calVideoSettings|body|object|false|Cal video settings for the event type|
|» » disableRecordingForOrganizer|body|boolean|false|If true, the organizer will not be able to record the meeting|
|» » disableRecordingForGuests|body|boolean|false|If true, the guests will not be able to record the meeting|
|» » redirectUrlOnExit|body|object|false|URL to which participants are redirected when they exit the call|
|» » enableAutomaticRecordingForOrganizer|body|boolean|false|If true, enables the automatic recording for the event when organizer joins the call|
|» » enableAutomaticTranscription|body|boolean|false|If true, enables the automatic transcription for the event whenever someone joins the call|
|» » disableTranscriptionForGuests|body|boolean|false|If true, the guests will not be able to receive transcription of the meeting|
|» » disableTranscriptionForOrganizer|body|boolean|false|If true, the organizer will not be able to receive transcription of the meeting|
|» » sendTranscriptionEmails|body|boolean|false|Send emails with the transcription of the Cal Video after the meeting ends.|
|» hidden|body|boolean|false|none|
|» bookingRequiresAuthentication|body|boolean|false|Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.|
|» disableCancelling|body|object|false|Settings for disabling cancelling of this event type.|
|» » disabled|body|boolean|false|If true, cancelling is always disabled for this event type.|
|» disableRescheduling|body|object|false|Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.|
|» » disabled|body|boolean|false|If true, rescheduling is always disabled for this event type.|
|» » minutesBefore|body|number|false|Disable rescheduling when less than the specified number of minutes before the meeting. If set, `disabled` should be false or undefined.|
|» interfaceLanguage|body|string|false|Set preferred language for the booking interface. Use empty string for visitor's browser language (default).|
|» allowReschedulingPastBookings|body|boolean|false|Enabling this option allows for past events to be rescheduled.|
|» allowReschedulingCancelledBookings|body|boolean|false|When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.|
|» showOptimizedSlots|body|boolean|false|Arrange time slots to optimize availability.|
|» locations|body|[[InputAddressLocation_2024_06_14](#schemainputaddresslocation_2024_06_14) \| [InputLinkLocation_2024_06_14](#schemainputlinklocation_2024_06_14) \| [InputIntegrationLocation_2024_06_14](#schemainputintegrationlocation_2024_06_14) \| [InputPhoneLocation_2024_06_14](#schemainputphonelocation_2024_06_14) \| [InputAttendeeAddressLocation_2024_06_14](#schemainputattendeeaddresslocation_2024_06_14) \| [InputAttendeePhoneLocation_2024_06_14](#schemainputattendeephonelocation_2024_06_14) \| [InputAttendeeDefinedLocation_2024_06_14](#schemainputattendeedefinedlocation_2024_06_14)]|false|Locations where the event will take place. If not provided, cal video link will be used as the location. Note: Setting a location to a conferencing app does not install the app - the app must already be installed. Via API, only Google Meet (google-meet), Microsoft Teams (office365-video), and Zoom (zoom) can be installed. Cal Video (cal-video) is installed by default. All other conferencing apps must be connected via the Cal.diy web app and are not available for Platform plan customers. You can only set an event type location to an app that has already been installed or connected.|
|» » *oneOf*|body|[InputAddressLocation_2024_06_14](#schemainputaddresslocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputLinkLocation_2024_06_14](#schemainputlinklocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputIntegrationLocation_2024_06_14](#schemainputintegrationlocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputPhoneLocation_2024_06_14](#schemainputphonelocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputAttendeeAddressLocation_2024_06_14](#schemainputattendeeaddresslocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputAttendeePhoneLocation_2024_06_14](#schemainputattendeephonelocation_2024_06_14)|false|none|
|» » *oneOf*|body|[InputAttendeeDefinedLocation_2024_06_14](#schemainputattendeedefinedlocation_2024_06_14)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » defaultLayout|month|
|» » defaultLayout|week|
|» » defaultLayout|column|
|» » enabledLayouts|month|
|» » enabledLayouts|week|
|» » enabledLayouts|column|
|» interfaceLanguage|""|
|» interfaceLanguage|en|
|» interfaceLanguage|ar|
|» interfaceLanguage|az|
|» interfaceLanguage|bg|
|» interfaceLanguage|bn|
|» interfaceLanguage|ca|
|» interfaceLanguage|cs|
|» interfaceLanguage|da|
|» interfaceLanguage|de|
|» interfaceLanguage|el|
|» interfaceLanguage|es|
|» interfaceLanguage|es-419|
|» interfaceLanguage|eu|
|» interfaceLanguage|et|
|» interfaceLanguage|fi|
|» interfaceLanguage|fr|
|» interfaceLanguage|he|
|» interfaceLanguage|hu|
|» interfaceLanguage|it|
|» interfaceLanguage|ja|
|» interfaceLanguage|km|
|» interfaceLanguage|ko|
|» interfaceLanguage|nl|
|» interfaceLanguage|no|
|» interfaceLanguage|pl|
|» interfaceLanguage|pt-BR|
|» interfaceLanguage|pt|
|» interfaceLanguage|ro|
|» interfaceLanguage|ru|
|» interfaceLanguage|sk-SK|
|» interfaceLanguage|sr|
|» interfaceLanguage|sv|
|» interfaceLanguage|tr|
|» interfaceLanguage|uk|
|» interfaceLanguage|vi|
|» interfaceLanguage|zh-CN|
|» interfaceLanguage|zh-TW|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "lengthInMinutes": 60,
    "lengthInMinutesOptions": [
      15,
      30,
      60
    ],
    "title": "Learn the secrets of masterchief!",
    "slug": "learn-the-secrets-of-masterchief",
    "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
    "locations": [
      {
        "type": "address",
        "address": "123 Example St, City, Country",
        "public": true
      }
    ],
    "bookingFields": [
      {
        "type": "name",
        "label": "string",
        "placeholder": "string",
        "disableOnPrefill": true,
        "isDefault": true,
        "slug": "name",
        "required": true
      }
    ],
    "disableGuests": true,
    "slotInterval": 60,
    "minimumBookingNotice": 0,
    "beforeEventBuffer": 0,
    "afterEventBuffer": 0,
    "recurrence": {
      "interval": 10,
      "occurrences": 10,
      "frequency": "yearly"
    },
    "metadata": {},
    "price": 0,
    "currency": "string",
    "lockTimeZoneToggleOnBookingPage": true,
    "seatsPerTimeSlot": {},
    "forwardParamsSuccessRedirect": {},
    "successRedirectUrl": {},
    "isInstantEvent": true,
    "seatsShowAvailabilityCount": true,
    "scheduleId": 0,
    "bookingLimitsCount": {},
    "bookerActiveBookingsLimit": {
      "maximumActiveBookings": 3,
      "offerReschedule": true
    },
    "onlyShowFirstAvailableSlot": true,
    "bookingLimitsDuration": {},
    "bookingWindow": [
      {
        "type": "businessDays",
        "value": 5,
        "rolling": true
      }
    ],
    "bookerLayouts": {
      "defaultLayout": "month",
      "enabledLayouts": [
        "month"
      ]
    },
    "confirmationPolicy": {},
    "requiresBookerEmailVerification": true,
    "hideCalendarNotes": true,
    "color": {
      "lightThemeHex": "#292929",
      "darkThemeHex": "#fafafa"
    },
    "seats": {
      "seatsPerTimeSlot": 4,
      "showAttendeeInfo": true,
      "showAvailabilityCount": true
    },
    "offsetStart": 0,
    "customName": "string",
    "destinationCalendar": {
      "integration": "string",
      "externalId": "string"
    },
    "useDestinationCalendarEmail": true,
    "hideCalendarEventDetails": true,
    "hideOrganizerEmail": true,
    "calVideoSettings": {
      "disableRecordingForOrganizer": false,
      "disableRecordingForGuests": false,
      "redirectUrlOnExit": {},
      "enableAutomaticRecordingForOrganizer": false,
      "enableAutomaticTranscription": false,
      "disableTranscriptionForGuests": false,
      "disableTranscriptionForOrganizer": false,
      "sendTranscriptionEmails": true
    },
    "hidden": true,
    "bookingRequiresAuthentication": true,
    "disableCancelling": {
      "disabled": true
    },
    "disableRescheduling": {
      "disabled": true,
      "minutesBefore": 60
    },
    "interfaceLanguage": "string",
    "allowReschedulingPastBookings": true,
    "allowReschedulingCancelledBookings": true,
    "showOptimizedSlots": true,
    "ownerId": 10,
    "users": [
      "string"
    ],
    "bookingUrl": "https://cal.com/john-doe/30min"
  }
}
```

<h3 id="update-an-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateEventTypeOutput_2024_06_14](#schemaupdateeventtypeoutput_2024_06_14)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-event-types-webhooks">Event Types / Webhooks</h1>

## Get all webhooks

<a id="opIdEventTypeWebhooksController_getEventTypeWebhooks"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/webhooks \
  -H 'Accept: application/json'
```

`GET /v2/event-types/{eventTypeId}/webhooks`

<h3 id="get-all-webhooks-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|eventTypeId|path|number|true|none|
|take|query|number|false|Maximum number of items to return|
|skip|query|number|false|Number of items to skip|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
      "triggers": [
        "BOOKING_CREATED"
      ],
      "eventTypeId": 0,
      "id": 0,
      "subscriberUrl": "string",
      "active": true,
      "secret": "string"
    }
  ]
}
```

<h3 id="get-all-webhooks-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EventTypeWebhooksOutputResponseDto](#schemaeventtypewebhooksoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a webhook

<a id="opIdEventTypeWebhooksController_createEventTypeWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "active": true,
    "subscriberUrl": "string",
    "triggers": [
      "BOOKING_CREATED",
      "BOOKING_RESCHEDULED",
      "BOOKING_CANCELLED",
      "BOOKING_CONFIRMED",
      "BOOKING_REJECTED",
      "BOOKING_COMPLETED",
      "BOOKING_NO_SHOW",
      "BOOKING_REOPENED"
    ],
    "secret": "string",
    "version": "2021-10-20"
  }'
```

`POST /v2/event-types/{eventTypeId}/webhooks`

> Body parameter

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "active": true,
  "subscriberUrl": "string",
  "triggers": [
    "BOOKING_CREATED",
    "BOOKING_RESCHEDULED",
    "BOOKING_CANCELLED",
    "BOOKING_CONFIRMED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_NO_SHOW",
    "BOOKING_REOPENED"
  ],
  "secret": "string",
  "version": "2021-10-20"
}
```

<h3 id="create-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|eventTypeId|path|number|true|none|
|body|body|[CreateWebhookInputDto](#schemacreatewebhookinputdto)|true|none|
|» payloadTemplate|body|string|false|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|» active|body|boolean|true|none|
|» subscriberUrl|body|string|true|none|
|» triggers|body|[string]|true|none|
|» secret|body|string|false|none|
|» version|body|string|false|The version of the webhook|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» triggers|BOOKING_CREATED|
|» triggers|BOOKING_PAYMENT_INITIATED|
|» triggers|BOOKING_PAID|
|» triggers|BOOKING_RESCHEDULED|
|» triggers|BOOKING_REQUESTED|
|» triggers|BOOKING_CANCELLED|
|» triggers|BOOKING_REJECTED|
|» triggers|BOOKING_NO_SHOW_UPDATED|
|» triggers|FORM_SUBMITTED|
|» triggers|MEETING_ENDED|
|» triggers|MEETING_STARTED|
|» triggers|RECORDING_READY|
|» triggers|INSTANT_MEETING|
|» triggers|RECORDING_TRANSCRIPTION_GENERATED|
|» triggers|OOO_CREATED|
|» triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|» triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|» triggers|FORM_SUBMITTED_NO_EVENT|
|» triggers|DELEGATION_CREDENTIAL_ERROR|
|» triggers|WRONG_ASSIGNMENT_REPORT|
|» version|2021-10-20|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "eventTypeId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="create-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[EventTypeWebhookOutputResponseDto](#schemaeventtypewebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all webhooks

<a id="opIdEventTypeWebhooksController_deleteAllEventTypeWebhooks"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/webhooks \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2/event-types/{eventTypeId}/webhooks`

<h3 id="delete-all-webhooks-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|eventTypeId|path|number|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": "string"
}
```

<h3 id="delete-all-webhooks-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteManyWebhooksOutputResponseDto](#schemadeletemanywebhooksoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a webhook

<a id="opIdEventTypeWebhooksController_getEventTypeWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/webhooks/string \
  -H 'Accept: application/json'
```

`GET /v2/event-types/{eventTypeId}/webhooks/{webhookId}`

<h3 id="get-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|webhookId|path|string|true|none|
|eventTypeId|path|number|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "eventTypeId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="get-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EventTypeWebhookOutputResponseDto](#schemaeventtypewebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a webhook

<a id="opIdEventTypeWebhooksController_deleteEventTypeWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2/event-types/{eventTypeId}/webhooks/{webhookId}`

<h3 id="delete-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|webhookId|path|string|true|none|
|eventTypeId|path|number|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "eventTypeId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="delete-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EventTypeWebhookOutputResponseDto](#schemaeventtypewebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a webhook

<a id="opIdEventTypeWebhooksController_updateEventTypeWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/webhooks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "active": true,
    "subscriberUrl": "string",
    "triggers": [
      "BOOKING_CREATED",
      "BOOKING_RESCHEDULED",
      "BOOKING_CANCELLED",
      "BOOKING_CONFIRMED",
      "BOOKING_REJECTED",
      "BOOKING_COMPLETED",
      "BOOKING_NO_SHOW",
      "BOOKING_REOPENED"
    ],
    "secret": "string",
    "version": "2021-10-20"
  }'
```

`PATCH /v2/event-types/{eventTypeId}/webhooks/{webhookId}`

> Body parameter

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "active": true,
  "subscriberUrl": "string",
  "triggers": [
    "BOOKING_CREATED",
    "BOOKING_RESCHEDULED",
    "BOOKING_CANCELLED",
    "BOOKING_CONFIRMED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_NO_SHOW",
    "BOOKING_REOPENED"
  ],
  "secret": "string",
  "version": "2021-10-20"
}
```

<h3 id="update-a-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|webhookId|path|string|true|none|
|eventTypeId|path|number|true|none|
|body|body|[UpdateWebhookInputDto](#schemaupdatewebhookinputdto)|true|none|
|» payloadTemplate|body|string|false|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|» active|body|boolean|false|none|
|» subscriberUrl|body|string|false|none|
|» triggers|body|[string]|false|none|
|» secret|body|string|false|none|
|» version|body|string|false|The version of the webhook|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» triggers|BOOKING_CREATED|
|» triggers|BOOKING_PAYMENT_INITIATED|
|» triggers|BOOKING_PAID|
|» triggers|BOOKING_RESCHEDULED|
|» triggers|BOOKING_REQUESTED|
|» triggers|BOOKING_CANCELLED|
|» triggers|BOOKING_REJECTED|
|» triggers|BOOKING_NO_SHOW_UPDATED|
|» triggers|FORM_SUBMITTED|
|» triggers|MEETING_ENDED|
|» triggers|MEETING_STARTED|
|» triggers|RECORDING_READY|
|» triggers|INSTANT_MEETING|
|» triggers|RECORDING_TRANSCRIPTION_GENERATED|
|» triggers|OOO_CREATED|
|» triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|» triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|» triggers|FORM_SUBMITTED_NO_EVENT|
|» triggers|DELEGATION_CREDENTIAL_ERROR|
|» triggers|WRONG_ASSIGNMENT_REPORT|
|» version|2021-10-20|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "eventTypeId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="update-a-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EventTypeWebhookOutputResponseDto](#schemaeventtypewebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-event-types-private-links">Event Types Private Links</h1>

## Get all private links for an event type

<a id="opIdEventTypesPrivateLinksController_getPrivateLinks"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/private-links \
  -H 'Accept: application/json'
```

`GET /v2/event-types/{eventTypeId}/private-links`

<h3 id="get-all-private-links-for-an-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventTypeId|path|number|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "linkId": "abc123def456",
      "eventTypeId": 123,
      "isExpired": false,
      "bookingUrl": "https://cal.com/d/abc123def456/30min",
      "expiresAt": "2025-12-31T23:59:59.000Z"
    }
  ]
}
```

<h3 id="get-all-private-links-for-an-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetPrivateLinksOutput](#schemagetprivatelinksoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a private link for an event type

<a id="opIdEventTypesPrivateLinksController_createPrivateLink"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/private-links \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expiresAt": "2024-12-31T23:59:59.000Z",
    "maxUsageCount": 10
  }'
```

`POST /v2/event-types/{eventTypeId}/private-links`

> Body parameter

```json
{
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "maxUsageCount": 10
}
```

<h3 id="create-a-private-link-for-an-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventTypeId|path|number|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[CreatePrivateLinkInput](#schemacreateprivatelinkinput)|true|none|
|» expiresAt|body|string(date-time)|false|Expiration date for time-based links|
|» maxUsageCount|body|number|false|Maximum number of times the link can be used. If omitted and expiresAt is not provided, defaults to 1 (one time use).|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "linkId": "abc123def456",
    "eventTypeId": 123,
    "isExpired": false,
    "bookingUrl": "https://cal.com/d/abc123def456/30min",
    "expiresAt": "2025-12-31T23:59:59.000Z"
  }
}
```

<h3 id="create-a-private-link-for-an-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreatePrivateLinkOutput](#schemacreateprivatelinkoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a private link for an event type

<a id="opIdEventTypesPrivateLinksController_deletePrivateLink"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/private-links/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2/event-types/{eventTypeId}/private-links/{linkId}`

<h3 id="delete-a-private-link-for-an-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventTypeId|path|number|true|none|
|linkId|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "linkId": "abc123def456",
    "message": "Private link deleted successfully"
  }
}
```

<h3 id="delete-a-private-link-for-an-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeletePrivateLinkOutput](#schemadeleteprivatelinkoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a private link for an event type

<a id="opIdEventTypesPrivateLinksController_updatePrivateLink"></a>

> Code samples

```bash
curl https://api.cal.com/v2/event-types/0/private-links/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "expiresAt": "2024-12-31T23:59:59.000Z",
    "maxUsageCount": 10
  }'
```

`PATCH /v2/event-types/{eventTypeId}/private-links/{linkId}`

> Body parameter

```json
{
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "maxUsageCount": 10
}
```

<h3 id="update-a-private-link-for-an-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventTypeId|path|number|true|none|
|linkId|path|string|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[UpdatePrivateLinkBody](#schemaupdateprivatelinkbody)|true|none|
|» expiresAt|body|string(date-time)|false|New expiration date for time-based links|
|» maxUsageCount|body|number|false|New maximum number of times the link can be used|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "linkId": "abc123def456",
    "eventTypeId": 123,
    "isExpired": false,
    "bookingUrl": "https://cal.com/d/abc123def456/30min",
    "expiresAt": "2025-12-31T23:59:59.000Z"
  }
}
```

<h3 id="update-a-private-link-for-an-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdatePrivateLinkOutput](#schemaupdateprivatelinkoutput)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-me">Me</h1>

## Get my profile

<a id="opIdMeController_getMe"></a>

> Code samples

```bash
curl https://api.cal.com/v2/me \
  -H 'Accept: application/json'
```

`GET /v2/me`

<h3 id="get-my-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 0,
    "username": "string",
    "email": "string",
    "name": "string",
    "avatarUrl": "string",
    "bio": "string",
    "timeFormat": 0,
    "defaultScheduleId": 0,
    "weekStart": "string",
    "timeZone": "string",
    "organizationId": 0,
    "organization": {
      "isPlatform": true,
      "id": 0
    }
  }
}
```

<h3 id="get-my-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetMeOutput](#schemagetmeoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Update my profile

<a id="opIdMeController_updateMe"></a>

> Code samples

```bash
curl https://api.cal.com/v2/me \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "name": "string",
    "timeFormat": 12,
    "defaultScheduleId": 0,
    "weekStart": "Monday",
    "timeZone": "string",
    "locale": "en",
    "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
    "bio": "I am a bio",
    "metadata": {
      "key": "value"
    }
  }'
```

`PATCH /v2/me`

Updates the authenticated user's profile. Email changes require verification and the primary email stays unchanged until verification completes, unless the new email is already a verified secondary email or the user is platform-managed.

> Body parameter

```json
{
  "email": "string",
  "name": "string",
  "timeFormat": 12,
  "defaultScheduleId": 0,
  "weekStart": "Monday",
  "timeZone": "string",
  "locale": "en",
  "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
  "bio": "I am a bio",
  "metadata": {
    "key": "value"
  }
}
```

<h3 id="update-my-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[UpdateManagedUserInput](#schemaupdatemanageduserinput)|true|none|
|» email|body|string|false|none|
|» name|body|string|false|none|
|» timeFormat|body|number|false|Must be 12 or 24|
|» defaultScheduleId|body|number|false|none|
|» weekStart|body|string|false|none|
|» timeZone|body|string|false|none|
|» locale|body|string|false|none|
|» avatarUrl|body|string|false|URL of the user's avatar image|
|» bio|body|string|false|Bio|
|» metadata|body|object|false|You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and values up to 500 characters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» timeFormat|12|
|» timeFormat|24|
|» weekStart|Monday|
|» weekStart|Tuesday|
|» weekStart|Wednesday|
|» weekStart|Thursday|
|» weekStart|Friday|
|» weekStart|Saturday|
|» weekStart|Sunday|
|» locale|ar|
|» locale|ca|
|» locale|de|
|» locale|es|
|» locale|eu|
|» locale|he|
|» locale|id|
|» locale|ja|
|» locale|lv|
|» locale|pl|
|» locale|ro|
|» locale|sr|
|» locale|th|
|» locale|vi|
|» locale|az|
|» locale|cs|
|» locale|el|
|» locale|es-419|
|» locale|fi|
|» locale|hr|
|» locale|it|
|» locale|km|
|» locale|nl|
|» locale|pt|
|» locale|ru|
|» locale|sv|
|» locale|tr|
|» locale|zh-CN|
|» locale|bg|
|» locale|da|
|» locale|en|
|» locale|et|
|» locale|fr|
|» locale|hu|
|» locale|iw|
|» locale|ko|
|» locale|no|
|» locale|pt-BR|
|» locale|sk|
|» locale|ta|
|» locale|uk|
|» locale|zh-TW|
|» locale|bn|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 0,
    "username": "string",
    "email": "string",
    "name": "string",
    "avatarUrl": "string",
    "bio": "string",
    "timeFormat": 0,
    "defaultScheduleId": 0,
    "weekStart": "string",
    "timeZone": "string",
    "organizationId": 0,
    "organization": {
      "isPlatform": true,
      "id": 0
    }
  }
}
```

<h3 id="update-my-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateMeOutput](#schemaupdatemeoutput)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-oauth2">OAuth2</h1>

## Get OAuth2 client

<a id="opIdOAuth2Controller_getClient"></a>

> Code samples

```bash
curl https://api.cal.com/v2/auth/oauth2/clients/string \
  -H 'Accept: application/json'
```

`GET /v2/auth/oauth2/clients/{clientId}`

Returns the OAuth2 client information for the given client ID

<h3 id="get-oauth2-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "client_id": "clxxxxxxxxxxxxxxxx",
    "redirect_uris": [
      "https://example.com/callback"
    ],
    "name": "My App",
    "logo": "string",
    "is_trusted": false,
    "client_type": "CONFIDENTIAL"
  }
}
```

<h3 id="get-oauth2-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuth2ClientResponseDto](#schemaoauth2clientresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Exchange authorization code or refresh token for tokens

<a id="opIdOAuth2Controller_token"></a>

> Code samples

```bash
curl https://api.cal.com/v2/auth/oauth2/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_id": "my-client-id",
    "grant_type": "authorization_code",
    "code": "abc123",
    "redirect_uri": "https://example.com/callback",
    "client_secret": "string"
  }'
```

`POST /v2/auth/oauth2/token`

RFC 6749-compliant token endpoint. Pass client_id in the request body (Section 2.3.1). Use grant_type 'authorization_code' to exchange an auth code for tokens, or 'refresh_token' to refresh an access token. Accepts both application/x-www-form-urlencoded (standard per RFC 6749 Section 4.1.3) and application/json content types.

> Body parameter

```json
{
  "client_id": "my-client-id",
  "grant_type": "authorization_code",
  "code": "abc123",
  "redirect_uri": "https://example.com/callback",
  "client_secret": "string"
}
```

<h3 id="exchange-authorization-code-or-refresh-token-for-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OAuth2ExchangeConfidentialInput](#schemaoauth2exchangeconfidentialinput) \| [OAuth2ExchangePublicInput](#schemaoauth2exchangepublicinput) \| [OAuth2RefreshConfidentialInput](#schemaoauth2refreshconfidentialinput) \| [OAuth2RefreshPublicInput](#schemaoauth2refreshpublicinput)|true|Token request body. client_id is required. Accepts application/x-www-form-urlencoded (RFC 6749 standard) or application/json. Use grant_type 'authorization_code' with client_secret (confidential) or code_verifier (public/PKCE), or grant_type 'refresh_token' with client_secret (confidential) or just the refresh_token (public).|
|» *oneOf*|body|[OAuth2ExchangeConfidentialInput](#schemaoauth2exchangeconfidentialinput)|false|none|
|» *oneOf*|body|[OAuth2ExchangePublicInput](#schemaoauth2exchangepublicinput)|false|none|
|» *oneOf*|body|[OAuth2RefreshConfidentialInput](#schemaoauth2refreshconfidentialinput)|false|none|
|» *oneOf*|body|[OAuth2RefreshPublicInput](#schemaoauth2refreshpublicinput)|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 1800
}
```

<h3 id="exchange-authorization-code-or-refresh-token-for-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OAuth2TokensDto](#schemaoauth2tokensdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-schedules">Schedules</h1>

## Get all schedules

<a id="opIdSchedulesController_2024_06_11_getSchedules"></a>

> Code samples

```bash
curl https://api.cal.com/v2/schedules \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-11'
```

`GET /v2/schedules`

Get all schedules of the authenticated user.
    
     <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
    

<h3 id="get-all-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|cal-api-version|header|string|true|Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 254,
      "ownerId": 478,
      "name": "Catch up hours",
      "timeZone": "Europe/Rome",
      "availability": [
        {
          "days": [
            "Monday",
            "Tuesday"
          ],
          "startTime": "17:00",
          "endTime": "19:00"
        },
        {
          "days": [
            "Wednesday",
            "Thursday"
          ],
          "startTime": "16:00",
          "endTime": "20:00"
        }
      ],
      "isDefault": true,
      "overrides": [
        {
          "date": "2024-05-20",
          "startTime": "18:00",
          "endTime": "21:00"
        }
      ]
    }
  ],
  "error": {}
}
```

<h3 id="get-all-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetSchedulesOutput_2024_06_11](#schemagetschedulesoutput_2024_06_11)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a schedule

<a id="opIdSchedulesController_2024_06_11_createSchedule"></a>

> Code samples

```bash
curl https://api.cal.com/v2/schedules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-11' \
  -d '{
    "name": "Catch up hours",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "17:00",
        "endTime": "19:00"
      },
      {
        "days": [
          "Wednesday",
          "Thursday"
        ],
        "startTime": "16:00",
        "endTime": "20:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "18:00",
        "endTime": "21:00"
      }
    ]
  }'
```

`POST /v2/schedules`


      Create a schedule for the authenticated user.

      The point of creating schedules is for event types to be available at specific times.

      The first goal of schedules is to have a default schedule. If you are platform customer and created managed users, then it is important to note that each managed user should have a default schedule.
      1. If you passed `timeZone` when creating managed user, then the default schedule from Monday to Friday from 9AM to 5PM will be created with that timezone. The managed user can then change the default schedule via the `AvailabilitySettings` atom.
      2. If you did not, then we assume you want the user to have this specific schedule right away. You should create a default schedule by specifying
      `"isDefault": true` in the request body. Until the user has a default schedule the user can't be booked nor manage their schedule via the AvailabilitySettings atom.

      The second goal of schedules is to create another schedule that event types can point to. This is useful for when an event is booked because availability is not checked against the default schedule but instead against that specific schedule.
      After creating a non-default schedule, you can update an event type to point to that schedule via the PATCH `event-types/{eventTypeId}` endpoint.

      When specifying start time and end time for each day use the 24 hour format e.g. 08:00, 15:00 etc.

      <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
      

> Body parameter

```json
{
  "name": "Catch up hours",
  "timeZone": "Europe/Rome",
  "availability": [
    {
      "days": [
        "Monday",
        "Tuesday"
      ],
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "days": [
        "Wednesday",
        "Thursday"
      ],
      "startTime": "16:00",
      "endTime": "20:00"
    }
  ],
  "isDefault": true,
  "overrides": [
    {
      "date": "2024-05-20",
      "startTime": "18:00",
      "endTime": "21:00"
    }
  ]
}
```

<h3 id="create-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|cal-api-version|header|string|true|Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.|
|body|body|[CreateScheduleInput_2024_06_11](#schemacreatescheduleinput_2024_06_11)|true|none|
|» name|body|string|true|none|
|» timeZone|body|string|true|Timezone is used to calculate available times when an event using the schedule is booked.|
|» availability|body|[[ScheduleAvailabilityInput_2024_06_11](#schemascheduleavailabilityinput_2024_06_11)]|false|Each object contains days and times when the user is available. If not passed, the default availability is Monday to Friday from 09:00 to 17:00.|
|» isDefault|body|boolean|true|Each user should have 1 default schedule. If you specified `timeZone` when creating managed user, then the default schedule will be created with that timezone.<br>    Default schedule means that if an event type is not tied to a specific schedule then the default schedule is used.|
|» overrides|body|[[ScheduleOverrideInput_2024_06_11](#schemascheduleoverrideinput_2024_06_11)]|false|Need to change availability for a specific date? Add an override.|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "id": 254,
    "ownerId": 478,
    "name": "Catch up hours",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "17:00",
        "endTime": "19:00"
      },
      {
        "days": [
          "Wednesday",
          "Thursday"
        ],
        "startTime": "16:00",
        "endTime": "20:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "18:00",
        "endTime": "21:00"
      }
    ]
  }
}
```

<h3 id="create-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateScheduleOutput_2024_06_11](#schemacreatescheduleoutput_2024_06_11)|

<aside class="success">
This operation does not require authentication
</aside>

## Get default schedule

<a id="opIdSchedulesController_2024_06_11_getDefaultSchedule"></a>

> Code samples

```bash
curl https://api.cal.com/v2/schedules/default \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-11'
```

`GET /v2/schedules/default`

Get the default schedule of the authenticated user.
    
    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
    

<h3 id="get-default-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|cal-api-version|header|string|true|Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 254,
    "ownerId": 478,
    "name": "Catch up hours",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "17:00",
        "endTime": "19:00"
      },
      {
        "days": [
          "Wednesday",
          "Thursday"
        ],
        "startTime": "16:00",
        "endTime": "20:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "18:00",
        "endTime": "21:00"
      }
    ]
  }
}
```

<h3 id="get-default-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetDefaultScheduleOutput_2024_06_11](#schemagetdefaultscheduleoutput_2024_06_11)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a schedule

<a id="opIdSchedulesController_2024_06_11_getSchedule"></a>

> Code samples

```bash
curl https://api.cal.com/v2/schedules/0 \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-11'
```

`GET /v2/schedules/{scheduleId}`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

<h3 id="get-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|cal-api-version|header|string|true|Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.|
|scheduleId|path|number|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 254,
    "ownerId": 478,
    "name": "Catch up hours",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "17:00",
        "endTime": "19:00"
      },
      {
        "days": [
          "Wednesday",
          "Thursday"
        ],
        "startTime": "16:00",
        "endTime": "20:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "18:00",
        "endTime": "21:00"
      }
    ]
  },
  "error": {}
}
```

<h3 id="get-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetScheduleOutput_2024_06_11](#schemagetscheduleoutput_2024_06_11)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a schedule

<a id="opIdSchedulesController_2024_06_11_deleteSchedule"></a>

> Code samples

```bash
curl https://api.cal.com/v2/schedules/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-11'
```

`DELETE /v2/schedules/{scheduleId}`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

<h3 id="delete-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|cal-api-version|header|string|true|Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.|
|scheduleId|path|number|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="delete-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteScheduleOutput_2024_06_11](#schemadeletescheduleoutput_2024_06_11)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a schedule

<a id="opIdSchedulesController_2024_06_11_updateSchedule"></a>

> Code samples

```bash
curl https://api.cal.com/v2/schedules/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-06-11' \
  -d '{
    "name": "One-on-one coaching",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "09:00",
        "endTime": "10:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "12:00",
        "endTime": "14:00"
      }
    ]
  }'
```

`PATCH /v2/schedules/{scheduleId}`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

> Body parameter

```json
{
  "name": "One-on-one coaching",
  "timeZone": "Europe/Rome",
  "availability": [
    {
      "days": [
        "Monday",
        "Tuesday"
      ],
      "startTime": "09:00",
      "endTime": "10:00"
    }
  ],
  "isDefault": true,
  "overrides": [
    {
      "date": "2024-05-20",
      "startTime": "12:00",
      "endTime": "14:00"
    }
  ]
}
```

<h3 id="update-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|cal-api-version|header|string|true|Must be set to 2024-06-11. If not set to this value, the endpoint will default to an older version.|
|scheduleId|path|string|true|none|
|body|body|[UpdateScheduleInput_2024_06_11](#schemaupdatescheduleinput_2024_06_11)|true|none|
|» name|body|string|false|none|
|» timeZone|body|string|false|none|
|» availability|body|[[ScheduleAvailabilityInput_2024_06_11](#schemascheduleavailabilityinput_2024_06_11)]|false|none|
|» isDefault|body|boolean|false|none|
|» overrides|body|[[ScheduleOverrideInput_2024_06_11](#schemascheduleoverrideinput_2024_06_11)]|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 254,
    "ownerId": 478,
    "name": "Catch up hours",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "17:00",
        "endTime": "19:00"
      },
      {
        "days": [
          "Wednesday",
          "Thursday"
        ],
        "startTime": "16:00",
        "endTime": "20:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "18:00",
        "endTime": "21:00"
      }
    ]
  },
  "error": {}
}
```

<h3 id="update-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateScheduleOutput_2024_06_11](#schemaupdatescheduleoutput_2024_06_11)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-selected-calendars">Selected Calendars</h1>

## Add a selected calendar

<a id="opIdSelectedCalendarsController_addSelectedCalendar"></a>

> Code samples

```bash
curl https://api.cal.com/v2/selected-calendars \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "integration": "string",
    "externalId": "string",
    "credentialId": 0,
    "delegationCredentialId": "string"
  }'
```

`POST /v2/selected-calendars`

> Body parameter

```json
{
  "integration": "string",
  "externalId": "string",
  "credentialId": 0,
  "delegationCredentialId": "string"
}
```

<h3 id="add-a-selected-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[SelectedCalendarsInputDto](#schemaselectedcalendarsinputdto)|true|none|
|» integration|body|string|true|none|
|» externalId|body|string|true|none|
|» credentialId|body|number|true|none|
|» delegationCredentialId|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "userId": 0,
    "integration": "string",
    "externalId": "string",
    "credentialId": 0
  }
}
```

<h3 id="add-a-selected-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[SelectedCalendarOutputResponseDto](#schemaselectedcalendaroutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a selected calendar

<a id="opIdSelectedCalendarsController_deleteSelectedCalendar"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/selected-calendars?integration=string&externalId=string&credentialId=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2/selected-calendars`

<h3 id="delete-a-selected-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|integration|query|string|true|none|
|externalId|query|string|true|none|
|credentialId|query|string|true|none|
|delegationCredentialId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "userId": 0,
    "integration": "string",
    "externalId": "string",
    "credentialId": 0
  }
}
```

<h3 id="delete-a-selected-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SelectedCalendarOutputResponseDto](#schemaselectedcalendaroutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-slots">Slots</h1>

## Get available time slots for an event type

<a id="opIdSlotsController_2024_09_04_getAvailableSlots"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/slots?start=2050-09-05&end=2050-09-06' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-09-04'
```

`GET /v2/slots`


      There are 4 ways to get available slots for event type of an individual user:

      1. By event type id. Example '/v2/slots?eventTypeId=10&start=2050-09-05&end=2050-09-06&timeZone=Europe/Rome'

      2. By event type slug + username. Example '/v2/slots?eventTypeSlug=intro&username=bob&start=2050-09-05&end=2050-09-06'

      3. By event type slug + username + organization slug when searching within an organization. Example '/v2/slots?organizationSlug=org-slug&eventTypeSlug=intro&username=bob&start=2050-09-05&end=2050-09-06'

      4. By usernames only (used for dynamic event type - there is no specific event but you want to know when 2 or more people are available). Example '/v2/slots?usernames=alice,bob&username=bob&organizationSlug=org-slug&start=2050-09-05&end=2050-09-06'. As you see you also need to provide the slug of the organization to which each user in the 'usernames' array belongs.

      And 3 ways to get available slots for team event type:

      1. By team event type id. Example '/v2/slots?eventTypeId=10&start=2050-09-05&end=2050-09-06&timeZone=Europe/Rome'.
         **Note for managed event types**: Managed event types are templates that create individual child event types for each team member. You cannot fetch slots for the parent managed event type directly. Instead, you must:
         - Find the child event type IDs (the ones assigned to specific users)
         - Use those child event type IDs to fetch slots as individual user event types using as described in the individual user section above.

      2. By team event type slug + team slug. Example '/v2/slots?eventTypeSlug=intro&teamSlug=team-slug&start=2050-09-05&end=2050-09-06'

      3. By team event type slug + team slug + organization slug when searching within an organization. Example '/v2/slots?organizationSlug=org-slug&eventTypeSlug=intro&teamSlug=team-slug&start=2050-09-05&end=2050-09-06'

      All of them require "start" and "end" query parameters which define the time range for which available slots should be checked.
      Optional parameters are:
      - timeZone: Time zone in which the available slots should be returned. Defaults to UTC.
      - duration: Only use for event types that allow multiple durations or for dynamic event types. If not passed for multiple duration event types defaults to default duration. For dynamic event types defaults to 30 aka each returned slot is 30 minutes long. So duration=60 means that returned slots will be each 60 minutes long.
      - format: Format of the slots. By default return is an object where each key is date and value is array of slots as string. If you want to get start and end of each slot use "range" as value.
      - bookingUidToReschedule: When rescheduling an existing booking, provide the booking's unique identifier to exclude its time slot from busy time calculations. This ensures the original booking time appears as available for rescheduling.

       <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>
      

<h3 id="get-available-time-slots-for-an-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.|
|bookingUidToReschedule|query|string|false|The unique identifier of the booking being rescheduled. When provided will ensure that the original booking time appears within the returned available slots when rescheduling.|
|start|query|string|true|<br>      Time starting from which available slots should be checked.<br><br>      Must be in UTC timezone as ISO 8601 datestring.<br><br>      You can pass date without hours which defaults to start of day or specify hours:<br>      2024-08-13 (will have hours 00:00:00 aka at very beginning of the date) or you can specify hours manually like 2024-08-13T09:00:00Z.|
|end|query|string|true|<br>    Time until which available slots should be checked.<br><br>    Must be in UTC timezone as ISO 8601 datestring.<br><br>    You can pass date without hours which defaults to end of day or specify hours:<br>    2024-08-20 (will have hours 23:59:59 aka at the very end of the date) or you can specify hours manually like 2024-08-20T18:00:00Z.|
|organizationSlug|query|string|false|The slug of the organization to which user with username belongs or team with teamSlug belongs.|
|teamSlug|query|string|false|The slug of the team who owns event type with eventTypeSlug - used when slots are checked for team event type.|
|username|query|string|false|The username of the user who owns event type with eventTypeSlug - used when slots are checked for individual user event type.|
|eventTypeSlug|query|string|false|The slug of the event type for which available slots should be checked. If slug is provided then username or teamSlug must be provided too and if relevant organizationSlug too.|
|eventTypeId|query|number|false|The ID of the event type for which available slots should be checked.|
|usernames|query|string|false|The usernames for which available slots should be checked separated by a comma.<br><br>    Checking slots by usernames is used mainly for dynamic events where there is no specific event but we just want to know when 2 or more people are available.<br><br>    Must contain at least 2 usernames.|
|format|query|string|false|Format of slot times in response. Use 'range' to get start and end times. Use 'time' or omit this query parameter to get only start time.|
|duration|query|number|false|If event type has multiple possible durations then you can specify the desired duration here. Also, if you are fetching slots for a dynamic event then you can specify the duration her which defaults to 30, meaning that returned slots will be each 30 minutes long.|
|timeZone|query|string|false|Time zone in which the available slots should be returned. Defaults to UTC.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "2050-09-05": [
      {
        "start": "2050-09-05T09:00:00.000+02:00"
      },
      {
        "start": "2050-09-05T10:00:00.000+02:00"
      }
    ],
    "2050-09-06": [
      {
        "start": "2050-09-06T09:00:00.000+02:00"
      },
      {
        "start": "2050-09-06T10:00:00.000+02:00"
      }
    ]
  }
}
```

<h3 id="get-available-time-slots-for-an-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A map of available slots indexed by date, where each date is associated with an array of time slots. If format=range is specified, each slot will be an object with start and end properties denoting start and end of the slot.<br>      For seated slots each object will have attendeesCount and bookingUid properties.<br>      If no slots are available, the data field will be an empty object {}.|Inline|

<h3 id="get-available-time-slots-for-an-event-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|**additionalProperties**|[string]|false|none|none|
|*oneOf*|object|false|none|none|
|**additionalProperties**|[object]|false|none|none|
|» start|string|false|none|none|
|» end|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Reserve a slot

<a id="opIdSlotsController_2024_09_04_reserveSlot"></a>

> Code samples

```bash
curl https://api.cal.com/v2/slots/reservations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-09-04' \
  -d '{
    "eventTypeId": 1,
    "slotStart": "2024-09-04T09:00:00Z",
    "slotDuration": "30",
    "reservationDuration": 5
  }'
```

`POST /v2/slots/reservations`

Make a slot not available for others to book for a certain period of time. If you authenticate using oAuth credentials, api key or access token
    then you can also specify custom duration for how long the slot should be reserved for (defaults to 5 minutes).
    
    <Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>    
    

> Body parameter

```json
{
  "eventTypeId": 1,
  "slotStart": "2024-09-04T09:00:00Z",
  "slotDuration": "30",
  "reservationDuration": 5
}
```

<h3 id="reserve-a-slot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.|
|Authorization|header|string|false|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|x-cal-client-id|header|string|false|For platform customers - OAuth client ID|
|body|body|[ReserveSlotInput_2024_09_04](#schemareserveslotinput_2024_09_04)|true|none|
|» eventTypeId|body|number|true|The ID of the event type for which slot should be reserved.|
|» slotStart|body|string|true|ISO 8601 datestring in UTC timezone representing available slot.|
|» slotDuration|body|number|false|By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here as a number in minutes. If you don't have this set explicitly that event type can have one of many lengths you can omit this.|
|» reservationDuration|body|number|false|ONLY for authenticated requests with api key, access token or OAuth credentials (ID + secret).<br>      <br>      For how many minutes the slot should be reserved - for this long time noone else can book this event type at `start` time. If not provided, defaults to 5 minutes.|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "eventTypeId": 1,
    "slotStart": "2024-09-04T09:00:00Z",
    "slotEnd": "2024-09-04T10:00:00Z",
    "slotDuration": "30",
    "reservationUid": "e84be5a3-4696-49e3-acc7-b2f3999c3b94",
    "reservationDuration": 5,
    "reservationUntil": "2023-09-04T10:00:00Z"
  }
}
```

<h3 id="reserve-a-slot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ReserveSlotOutputResponse_2024_09_04](#schemareserveslotoutputresponse_2024_09_04)|

<aside class="success">
This operation does not require authentication
</aside>

## Get reserved slot

<a id="opIdSlotsController_2024_09_04_getReservedSlot"></a>

> Code samples

```bash
curl https://api.cal.com/v2/slots/reservations/string \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-09-04'
```

`GET /v2/slots/reservations/{uid}`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

<h3 id="get-reserved-slot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.|
|uid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {}
}
```

<h3 id="get-reserved-slot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetReservedSlotOutput_2024_09_04](#schemagetreservedslotoutput_2024_09_04)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a reserved slot

<a id="opIdSlotsController_2024_09_04_deleteReservedSlot"></a>

> Code samples

```bash
curl https://api.cal.com/v2/slots/reservations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-09-04'
```

`DELETE /v2/slots/reservations/{uid}`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

<h3 id="delete-a-reserved-slot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.|
|uid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="delete-a-reserved-slot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a reserved slot

<a id="opIdSlotsController_2024_09_04_updateReservedSlot"></a>

> Code samples

```bash
curl https://api.cal.com/v2/slots/reservations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'cal-api-version: 2024-09-04' \
  -d '{
    "eventTypeId": 1,
    "slotStart": "2024-09-04T09:00:00Z",
    "slotDuration": "30",
    "reservationDuration": 5
  }'
```

`PATCH /v2/slots/reservations/{uid}`

<Note>Please make sure to pass in the cal-api-version header value as mentioned in the Headers section. Not passing the correct value will default to an older version of this endpoint.</Note>

> Body parameter

```json
{
  "eventTypeId": 1,
  "slotStart": "2024-09-04T09:00:00Z",
  "slotDuration": "30",
  "reservationDuration": 5
}
```

<h3 id="update-a-reserved-slot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cal-api-version|header|string|true|Must be set to 2024-09-04. If not set to this value, the endpoint will default to an older version.|
|uid|path|string|true|none|
|body|body|[ReserveSlotInput_2024_09_04](#schemareserveslotinput_2024_09_04)|true|none|
|» eventTypeId|body|number|true|The ID of the event type for which slot should be reserved.|
|» slotStart|body|string|true|ISO 8601 datestring in UTC timezone representing available slot.|
|» slotDuration|body|number|false|By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here as a number in minutes. If you don't have this set explicitly that event type can have one of many lengths you can omit this.|
|» reservationDuration|body|number|false|ONLY for authenticated requests with api key, access token or OAuth credentials (ID + secret).<br>      <br>      For how many minutes the slot should be reserved - for this long time noone else can book this event type at `start` time. If not provided, defaults to 5 minutes.|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "eventTypeId": 1,
    "slotStart": "2024-09-04T09:00:00Z",
    "slotEnd": "2024-09-04T10:00:00Z",
    "slotDuration": "30",
    "reservationUid": "e84be5a3-4696-49e3-acc7-b2f3999c3b94",
    "reservationDuration": 5,
    "reservationUntil": "2023-09-04T10:00:00Z"
  }
}
```

<h3 id="update-a-reserved-slot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ReserveSlotOutputResponse_2024_09_04](#schemareserveslotoutputresponse_2024_09_04)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-stripe">Stripe</h1>

## Get Stripe connect URL

<a id="opIdStripeController_redirect"></a>

> Code samples

```bash
curl https://api.cal.com/v2/stripe/connect \
  -H 'Accept: application/json'
```

`GET /v2/stripe/connect`

<h3 id="get-stripe-connect-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "authUrl": "string"
  }
}
```

<h3 id="get-stripe-connect-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[StripConnectOutputResponseDto](#schemastripconnectoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Save Stripe credentials

<a id="opIdStripeController_save"></a>

> Code samples

```bash
curl 'https://api.cal.com/v2/stripe/save?state=string&code=string' \
  -H 'Accept: application/json'
```

`GET /v2/stripe/save`

<h3 id="save-stripe-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|true|none|
|code|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "url": "string"
}
```

<h3 id="save-stripe-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[StripCredentialsSaveOutputResponseDto](#schemastripcredentialssaveoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Check Stripe connection

<a id="opIdStripeController_check"></a>

> Code samples

```bash
curl https://api.cal.com/v2/stripe/check \
  -H 'Accept: application/json'
```

`GET /v2/stripe/check`

<h3 id="check-stripe-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="check-stripe-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[StripCredentialsCheckOutputResponseDto](#schemastripcredentialscheckoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-verified-resources">Verified Resources</h1>

## Request email verification code

<a id="opIdUserVerifiedResourcesController_requestEmailVerificationCode"></a>

> Code samples

```bash
curl https://api.cal.com/v2/verified-resources/emails/verification-code/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "acme@example.com"
  }'
```

`POST /v2/verified-resources/emails/verification-code/request`

Sends a verification code to the email

> Body parameter

```json
{
  "email": "acme@example.com"
}
```

<h3 id="request-email-verification-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[RequestEmailVerificationInput](#schemarequestemailverificationinput)|true|none|
|» email|body|string|true|Email to verify.|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="request-email-verification-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RequestEmailVerificationOutput](#schemarequestemailverificationoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Request phone number verification code

<a id="opIdUserVerifiedResourcesController_requestPhoneVerificationCode"></a>

> Code samples

```bash
curl https://api.cal.com/v2/verified-resources/phones/verification-code/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "phone": "+372 5555 6666"
  }'
```

`POST /v2/verified-resources/phones/verification-code/request`

Sends a verification code to the phone number

> Body parameter

```json
{
  "phone": "+372 5555 6666"
}
```

<h3 id="request-phone-number-verification-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[RequestPhoneVerificationInput](#schemarequestphoneverificationinput)|true|none|
|» phone|body|string|true|Phone number to verify.|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="request-phone-number-verification-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RequestPhoneVerificationOutput](#schemarequestphoneverificationoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Verify an email

<a id="opIdUserVerifiedResourcesController_verifyEmail"></a>

> Code samples

```bash
curl https://api.cal.com/v2/verified-resources/emails/verification-code/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "example@acme.com",
    "code": "1ABG2C"
  }'
```

`POST /v2/verified-resources/emails/verification-code/verify`

Use code to verify an email

> Body parameter

```json
{
  "email": "example@acme.com",
  "code": "1ABG2C"
}
```

<h3 id="verify-an-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[VerifyEmailInput](#schemaverifyemailinput)|true|none|
|» email|body|string|true|Email to verify.|
|» code|body|string|true|verification code sent to the email to verify|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 789,
    "email": "user@example.com",
    "userId": 45
  }
}
```

<h3 id="verify-an-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserVerifiedEmailOutput](#schemauserverifiedemailoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Verify a phone number

<a id="opIdUserVerifiedResourcesController_verifyPhoneNumber"></a>

> Code samples

```bash
curl https://api.cal.com/v2/verified-resources/phones/verification-code/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "phone": "+37255556666",
    "code": "1ABG2C"
  }'
```

`POST /v2/verified-resources/phones/verification-code/verify`

Use code to verify a phone number

> Body parameter

```json
{
  "phone": "+37255556666",
  "code": "1ABG2C"
}
```

<h3 id="verify-a-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|
|body|body|[VerifyPhoneInput](#schemaverifyphoneinput)|true|none|
|» phone|body|string|true|phone number to verify.|
|» code|body|string|true|verification code sent to the phone number to verify|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 789,
    "phoneNumber": "+37255556666",
    "userId": 45
  }
}
```

<h3 id="verify-a-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserVerifiedPhoneOutput](#schemauserverifiedphoneoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of verified emails

<a id="opIdUserVerifiedResourcesController_getVerifiedEmails"></a>

> Code samples

```bash
curl https://api.cal.com/v2/verified-resources/emails \
  -H 'Accept: application/json'
```

`GET /v2/verified-resources/emails`

<h3 id="get-list-of-verified-emails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|take|query|number|false|Maximum number of items to return|
|skip|query|number|false|Number of items to skip|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 789,
      "email": "user@example.com",
      "userId": 45
    }
  ]
}
```

<h3 id="get-list-of-verified-emails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserVerifiedEmailsOutput](#schemauserverifiedemailsoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get list of verified phone numbers

<a id="opIdUserVerifiedResourcesController_getVerifiedPhoneNumbers"></a>

> Code samples

```bash
curl https://api.cal.com/v2/verified-resources/phones \
  -H 'Accept: application/json'
```

`GET /v2/verified-resources/phones`

<h3 id="get-list-of-verified-phone-numbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|take|query|number|false|Maximum number of items to return|
|skip|query|number|false|Number of items to skip|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "id": 789,
      "phoneNumber": "+37255556666",
      "userId": 45
    }
  ]
}
```

<h3 id="get-list-of-verified-phone-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserVerifiedPhonesOutput](#schemauserverifiedphonesoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get verified email by id

<a id="opIdUserVerifiedResourcesController_getVerifiedEmailById"></a>

> Code samples

```bash
curl https://api.cal.com/v2/verified-resources/emails/0 \
  -H 'Accept: application/json'
```

`GET /v2/verified-resources/emails/{id}`

<h3 id="get-verified-email-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 789,
    "email": "user@example.com",
    "userId": 45
  }
}
```

<h3 id="get-verified-email-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserVerifiedEmailOutput](#schemauserverifiedemailoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get verified phone number by id

<a id="opIdUserVerifiedResourcesController_getVerifiedPhoneById"></a>

> Code samples

```bash
curl https://api.cal.com/v2/verified-resources/phones/0 \
  -H 'Accept: application/json'
```

`GET /v2/verified-resources/phones/{id}`

<h3 id="get-verified-phone-number-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_ or managed user access token|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "id": 789,
    "phoneNumber": "+37255556666",
    "userId": 45
  }
}
```

<h3 id="get-verified-phone-number-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserVerifiedPhoneOutput](#schemauserverifiedphoneoutput)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="caldiy-api-v2-webhooks">Webhooks</h1>

## Get all webhooks

<a id="opIdWebhooksController_getWebhooks"></a>

> Code samples

```bash
curl https://api.cal.com/v2/webhooks \
  -H 'Accept: application/json'
```

`GET /v2/webhooks`

Gets a paginated list of webhooks for the authenticated user.

<h3 id="get-all-webhooks-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|take|query|number|false|Maximum number of items to return|
|skip|query|number|false|Number of items to skip|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": [
    {
      "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
      "triggers": [
        "BOOKING_CREATED"
      ],
      "userId": 0,
      "id": 0,
      "subscriberUrl": "string",
      "active": true,
      "secret": "string"
    }
  ]
}
```

<h3 id="get-all-webhooks-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserWebhooksOutputResponseDto](#schemauserwebhooksoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a webhook

<a id="opIdWebhooksController_createWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "active": true,
    "subscriberUrl": "string",
    "triggers": [
      "BOOKING_CREATED",
      "BOOKING_RESCHEDULED",
      "BOOKING_CANCELLED",
      "BOOKING_CONFIRMED",
      "BOOKING_REJECTED",
      "BOOKING_COMPLETED",
      "BOOKING_NO_SHOW",
      "BOOKING_REOPENED"
    ],
    "secret": "string",
    "version": "2021-10-20"
  }'
```

`POST /v2/webhooks`

> Body parameter

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "active": true,
  "subscriberUrl": "string",
  "triggers": [
    "BOOKING_CREATED",
    "BOOKING_RESCHEDULED",
    "BOOKING_CANCELLED",
    "BOOKING_CONFIRMED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_NO_SHOW",
    "BOOKING_REOPENED"
  ],
  "secret": "string",
  "version": "2021-10-20"
}
```

<h3 id="create-a-webhook-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|body|body|[CreateWebhookInputDto](#schemacreatewebhookinputdto)|true|none|
|» payloadTemplate|body|string|false|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|» active|body|boolean|true|none|
|» subscriberUrl|body|string|true|none|
|» triggers|body|[string]|true|none|
|» secret|body|string|false|none|
|» version|body|string|false|The version of the webhook|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» triggers|BOOKING_CREATED|
|» triggers|BOOKING_PAYMENT_INITIATED|
|» triggers|BOOKING_PAID|
|» triggers|BOOKING_RESCHEDULED|
|» triggers|BOOKING_REQUESTED|
|» triggers|BOOKING_CANCELLED|
|» triggers|BOOKING_REJECTED|
|» triggers|BOOKING_NO_SHOW_UPDATED|
|» triggers|FORM_SUBMITTED|
|» triggers|MEETING_ENDED|
|» triggers|MEETING_STARTED|
|» triggers|RECORDING_READY|
|» triggers|INSTANT_MEETING|
|» triggers|RECORDING_TRANSCRIPTION_GENERATED|
|» triggers|OOO_CREATED|
|» triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|» triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|» triggers|FORM_SUBMITTED_NO_EVENT|
|» triggers|DELEGATION_CREDENTIAL_ERROR|
|» triggers|WRONG_ASSIGNMENT_REPORT|
|» version|2021-10-20|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "userId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="create-a-webhook-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[UserWebhookOutputResponseDto](#schemauserwebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a webhook

<a id="opIdWebhooksController_getWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/webhooks/string \
  -H 'Accept: application/json'
```

`GET /v2/webhooks/{webhookId}`

<h3 id="get-a-webhook-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|webhookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "userId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="get-a-webhook-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserWebhookOutputResponseDto](#schemauserwebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a webhook

<a id="opIdWebhooksController_deleteWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2/webhooks/{webhookId}`

<h3 id="delete-a-webhook-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|webhookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "userId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="delete-a-webhook-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserWebhookOutputResponseDto](#schemauserwebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a webhook

<a id="opIdWebhooksController_updateWebhook"></a>

> Code samples

```bash
curl https://api.cal.com/v2/webhooks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "active": true,
    "subscriberUrl": "string",
    "triggers": [
      "BOOKING_CREATED",
      "BOOKING_RESCHEDULED",
      "BOOKING_CANCELLED",
      "BOOKING_CONFIRMED",
      "BOOKING_REJECTED",
      "BOOKING_COMPLETED",
      "BOOKING_NO_SHOW",
      "BOOKING_REOPENED"
    ],
    "secret": "string",
    "version": "2021-10-20"
  }'
```

`PATCH /v2/webhooks/{webhookId}`

> Body parameter

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "active": true,
  "subscriberUrl": "string",
  "triggers": [
    "BOOKING_CREATED",
    "BOOKING_RESCHEDULED",
    "BOOKING_CANCELLED",
    "BOOKING_CONFIRMED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_NO_SHOW",
    "BOOKING_REOPENED"
  ],
  "secret": "string",
  "version": "2021-10-20"
}
```

<h3 id="update-a-webhook-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|value must be `Bearer <token>` where `<token>` is api key prefixed with cal_|
|webhookId|path|string|true|none|
|body|body|[UpdateWebhookInputDto](#schemaupdatewebhookinputdto)|true|none|
|» payloadTemplate|body|string|false|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|» active|body|boolean|false|none|
|» subscriberUrl|body|string|false|none|
|» triggers|body|[string]|false|none|
|» secret|body|string|false|none|
|» version|body|string|false|The version of the webhook|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» triggers|BOOKING_CREATED|
|» triggers|BOOKING_PAYMENT_INITIATED|
|» triggers|BOOKING_PAID|
|» triggers|BOOKING_RESCHEDULED|
|» triggers|BOOKING_REQUESTED|
|» triggers|BOOKING_CANCELLED|
|» triggers|BOOKING_REJECTED|
|» triggers|BOOKING_NO_SHOW_UPDATED|
|» triggers|FORM_SUBMITTED|
|» triggers|MEETING_ENDED|
|» triggers|MEETING_STARTED|
|» triggers|RECORDING_READY|
|» triggers|INSTANT_MEETING|
|» triggers|RECORDING_TRANSCRIPTION_GENERATED|
|» triggers|OOO_CREATED|
|» triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|» triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|» triggers|FORM_SUBMITTED_NO_EVENT|
|» triggers|DELEGATION_CREDENTIAL_ERROR|
|» triggers|WRONG_ASSIGNMENT_REPORT|
|» version|2021-10-20|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "userId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

<h3 id="update-a-webhook-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserWebhookOutputResponseDto](#schemauserwebhookoutputresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_OAuth2ClientDto">OAuth2ClientDto</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2clientdto"></a>
<a id="schema_OAuth2ClientDto"></a>
<a id="tocSoauth2clientdto"></a>
<a id="tocsoauth2clientdto"></a>

```json
{
  "client_id": "clxxxxxxxxxxxxxxxx",
  "redirect_uris": [
    "https://example.com/callback"
  ],
  "name": "My App",
  "logo": "string",
  "is_trusted": false,
  "client_type": "CONFIDENTIAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|The OAuth client ID|
|redirect_uris|[string]|true|none|The redirect URIs for the OAuth client|
|name|string|true|none|The name of the OAuth client|
|logo|string \| null|false|none|The logo URL of the OAuth client|
|is_trusted|boolean|true|none|Whether the OAuth client is trusted|
|client_type|string|true|none|The type of OAuth client (CONFIDENTIAL or PUBLIC)|

#### Enumerated Values

|Property|Value|
|---|---|
|client_type|CONFIDENTIAL|
|client_type|PUBLIC|

<h2 id="tocS_OAuth2ClientResponseDto">OAuth2ClientResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2clientresponsedto"></a>
<a id="schema_OAuth2ClientResponseDto"></a>
<a id="tocSoauth2clientresponsedto"></a>
<a id="tocsoauth2clientresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "client_id": "clxxxxxxxxxxxxxxxx",
    "redirect_uris": [
      "https://example.com/callback"
    ],
    "name": "My App",
    "logo": "string",
    "is_trusted": false,
    "client_type": "CONFIDENTIAL"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[OAuth2ClientDto](#schemaoauth2clientdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_OAuth2ExchangeConfidentialInput">OAuth2ExchangeConfidentialInput</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2exchangeconfidentialinput"></a>
<a id="schema_OAuth2ExchangeConfidentialInput"></a>
<a id="tocSoauth2exchangeconfidentialinput"></a>
<a id="tocsoauth2exchangeconfidentialinput"></a>

```json
{
  "client_id": "my-client-id",
  "grant_type": "authorization_code",
  "code": "abc123",
  "redirect_uri": "https://example.com/callback",
  "client_secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|The client identifier|
|grant_type|string|true|none|The grant type — must be 'authorization_code'|
|code|string|true|none|The authorization code received from the authorize endpoint|
|redirect_uri|string|true|none|The redirect URI used in the authorization request|
|client_secret|string|true|none|The client secret for confidential clients|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|authorization_code|

<h2 id="tocS_OAuth2ExchangePublicInput">OAuth2ExchangePublicInput</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2exchangepublicinput"></a>
<a id="schema_OAuth2ExchangePublicInput"></a>
<a id="tocSoauth2exchangepublicinput"></a>
<a id="tocsoauth2exchangepublicinput"></a>

```json
{
  "client_id": "my-client-id",
  "grant_type": "authorization_code",
  "code": "abc123",
  "redirect_uri": "https://example.com/callback",
  "code_verifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|The client identifier|
|grant_type|string|true|none|The grant type — must be 'authorization_code'|
|code|string|true|none|The authorization code received from the authorize endpoint|
|redirect_uri|string|true|none|The redirect URI used in the authorization request|
|code_verifier|string|true|none|PKCE code verifier (required for public clients that used code_challenge)|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|authorization_code|

<h2 id="tocS_OAuth2RefreshConfidentialInput">OAuth2RefreshConfidentialInput</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2refreshconfidentialinput"></a>
<a id="schema_OAuth2RefreshConfidentialInput"></a>
<a id="tocSoauth2refreshconfidentialinput"></a>
<a id="tocsoauth2refreshconfidentialinput"></a>

```json
{
  "client_id": "my-client-id",
  "grant_type": "refresh_token",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "client_secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|The client identifier|
|grant_type|string|true|none|The grant type — must be 'refresh_token'|
|refresh_token|string|true|none|The refresh token|
|client_secret|string|true|none|The client secret for confidential clients|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|refresh_token|

<h2 id="tocS_OAuth2RefreshPublicInput">OAuth2RefreshPublicInput</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2refreshpublicinput"></a>
<a id="schema_OAuth2RefreshPublicInput"></a>
<a id="tocSoauth2refreshpublicinput"></a>
<a id="tocsoauth2refreshpublicinput"></a>

```json
{
  "client_id": "my-client-id",
  "grant_type": "refresh_token",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|The client identifier|
|grant_type|string|true|none|The grant type — must be 'refresh_token'|
|refresh_token|string|true|none|The refresh token|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|refresh_token|

<h2 id="tocS_OAuth2TokensDto">OAuth2TokensDto</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2tokensdto"></a>
<a id="schema_OAuth2TokensDto"></a>
<a id="tocSoauth2tokensdto"></a>
<a id="tocsoauth2tokensdto"></a>

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 1800
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|The access token|
|token_type|string|true|none|The token type|
|refresh_token|string|true|none|The refresh token|
|expires_in|number|true|none|The number of seconds until the access token expires|

<h2 id="tocS_ManagedUserOutput">ManagedUserOutput</h2>
<!-- backwards compatibility -->
<a id="schemamanageduseroutput"></a>
<a id="schema_ManagedUserOutput"></a>
<a id="tocSmanageduseroutput"></a>
<a id="tocsmanageduseroutput"></a>

```json
{
  "id": 1,
  "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
  "username": "alice",
  "name": "alice",
  "bio": "bio",
  "timeZone": "America/New_York",
  "weekStart": "Sunday",
  "createdDate": "2024-04-01T00:00:00.000Z",
  "timeFormat": 12,
  "defaultScheduleId": null,
  "locale": "en",
  "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
  "metadata": {
    "key": "value"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|email|string|true|none|none|
|username|string \| null|true|none|none|
|name|string \| null|true|none|none|
|bio|string \| null|true|none|none|
|timeZone|string|true|none|none|
|weekStart|string|true|none|none|
|createdDate|string|true|none|none|
|timeFormat|number \| null|true|none|none|
|defaultScheduleId|number \| null|true|none|none|
|locale|string|false|none|none|
|avatarUrl|string \| null|false|none|URL of the user's avatar image|
|metadata|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|locale|ar|
|locale|ca|
|locale|de|
|locale|es|
|locale|eu|
|locale|he|
|locale|id|
|locale|ja|
|locale|lv|
|locale|pl|
|locale|ro|
|locale|sr|
|locale|th|
|locale|vi|
|locale|az|
|locale|cs|
|locale|el|
|locale|es-419|
|locale|fi|
|locale|hr|
|locale|it|
|locale|km|
|locale|nl|
|locale|pt|
|locale|ru|
|locale|sv|
|locale|tr|
|locale|zh-CN|
|locale|bg|
|locale|da|
|locale|en|
|locale|et|
|locale|fr|
|locale|hu|
|locale|iw|
|locale|ko|
|locale|no|
|locale|pt-BR|
|locale|sk|
|locale|ta|
|locale|uk|
|locale|zh-TW|
|locale|bn|

<h2 id="tocS_GetManagedUsersOutput">GetManagedUsersOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmanagedusersoutput"></a>
<a id="schema_GetManagedUsersOutput"></a>
<a id="tocSgetmanagedusersoutput"></a>
<a id="tocsgetmanagedusersoutput"></a>

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
      "username": "alice",
      "name": "alice",
      "bio": "bio",
      "timeZone": "America/New_York",
      "weekStart": "Sunday",
      "createdDate": "2024-04-01T00:00:00.000Z",
      "timeFormat": 12,
      "defaultScheduleId": null,
      "locale": "en",
      "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
      "metadata": {
        "key": "value"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[ManagedUserOutput](#schemamanageduseroutput)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CreateManagedUserInput">CreateManagedUserInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemanageduserinput"></a>
<a id="schema_CreateManagedUserInput"></a>
<a id="tocScreatemanageduserinput"></a>
<a id="tocscreatemanageduserinput"></a>

```json
{
  "email": "alice@example.com",
  "name": "Alice Smith",
  "timeFormat": 12,
  "weekStart": "Monday",
  "timeZone": "America/New_York",
  "locale": "en",
  "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
  "bio": "I am a bio",
  "metadata": {
    "key": "value"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|name|string|true|none|Managed user's name is used in emails|
|timeFormat|number|false|none|Must be a number 12 or 24|
|weekStart|string|false|none|none|
|timeZone|string|false|none|Timezone is used to create user's default schedule from Monday to Friday from 9AM to 5PM. If it is not passed then user does not have<br>      a default schedule and it must be created manually via the /schedules endpoint. Until the schedule is created, the user can't access availability atom to set his / her availability nor booked.<br>      It will default to Europe/London if not passed.|
|locale|string|false|none|none|
|avatarUrl|string|false|none|URL of the user's avatar image|
|bio|string|false|none|Bio|
|metadata|object|false|none|You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and values up to 500 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeFormat|12|
|timeFormat|24|
|weekStart|Monday|
|weekStart|Tuesday|
|weekStart|Wednesday|
|weekStart|Thursday|
|weekStart|Friday|
|weekStart|Saturday|
|weekStart|Sunday|
|locale|ar|
|locale|ca|
|locale|de|
|locale|es|
|locale|eu|
|locale|he|
|locale|id|
|locale|ja|
|locale|lv|
|locale|pl|
|locale|ro|
|locale|sr|
|locale|th|
|locale|vi|
|locale|az|
|locale|cs|
|locale|el|
|locale|es-419|
|locale|fi|
|locale|hr|
|locale|it|
|locale|km|
|locale|nl|
|locale|pt|
|locale|ru|
|locale|sv|
|locale|tr|
|locale|zh-CN|
|locale|bg|
|locale|da|
|locale|en|
|locale|et|
|locale|fr|
|locale|hu|
|locale|iw|
|locale|ko|
|locale|no|
|locale|pt-BR|
|locale|sk|
|locale|ta|
|locale|uk|
|locale|zh-TW|
|locale|bn|

<h2 id="tocS_CreateManagedUserData">CreateManagedUserData</h2>
<!-- backwards compatibility -->
<a id="schemacreatemanageduserdata"></a>
<a id="schema_CreateManagedUserData"></a>
<a id="tocScreatemanageduserdata"></a>
<a id="tocscreatemanageduserdata"></a>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "user": {
    "id": 1,
    "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
    "username": "alice",
    "name": "alice",
    "bio": "bio",
    "timeZone": "America/New_York",
    "weekStart": "Sunday",
    "createdDate": "2024-04-01T00:00:00.000Z",
    "timeFormat": 12,
    "defaultScheduleId": null,
    "locale": "en",
    "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
    "metadata": {
      "key": "value"
    }
  },
  "accessTokenExpiresAt": 0,
  "refreshTokenExpiresAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|true|none|none|
|refreshToken|string|true|none|none|
|user|[ManagedUserOutput](#schemamanageduseroutput)|true|none|none|
|accessTokenExpiresAt|number|true|none|none|
|refreshTokenExpiresAt|number|true|none|none|

<h2 id="tocS_CreateManagedUserOutput">CreateManagedUserOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemanageduseroutput"></a>
<a id="schema_CreateManagedUserOutput"></a>
<a id="tocScreatemanageduseroutput"></a>
<a id="tocscreatemanageduseroutput"></a>

```json
{
  "status": "success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "user": {
      "id": 1,
      "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
      "username": "alice",
      "name": "alice",
      "bio": "bio",
      "timeZone": "America/New_York",
      "weekStart": "Sunday",
      "createdDate": "2024-04-01T00:00:00.000Z",
      "timeFormat": 12,
      "defaultScheduleId": null,
      "locale": "en",
      "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
      "metadata": {
        "key": "value"
      }
    },
    "accessTokenExpiresAt": 0,
    "refreshTokenExpiresAt": 0
  },
  "error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[CreateManagedUserData](#schemacreatemanageduserdata)|true|none|none|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetManagedUserOutput">GetManagedUserOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmanageduseroutput"></a>
<a id="schema_GetManagedUserOutput"></a>
<a id="tocSgetmanageduseroutput"></a>
<a id="tocsgetmanageduseroutput"></a>

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "email": "alice+cluo37fwd0001khkzqqynkpj3@example.com",
    "username": "alice",
    "name": "alice",
    "bio": "bio",
    "timeZone": "America/New_York",
    "weekStart": "Sunday",
    "createdDate": "2024-04-01T00:00:00.000Z",
    "timeFormat": 12,
    "defaultScheduleId": null,
    "locale": "en",
    "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
    "metadata": {
      "key": "value"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ManagedUserOutput](#schemamanageduseroutput)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UpdateManagedUserInput">UpdateManagedUserInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemanageduserinput"></a>
<a id="schema_UpdateManagedUserInput"></a>
<a id="tocSupdatemanageduserinput"></a>
<a id="tocsupdatemanageduserinput"></a>

```json
{
  "email": "string",
  "name": "string",
  "timeFormat": 12,
  "defaultScheduleId": 0,
  "weekStart": "Monday",
  "timeZone": "string",
  "locale": "en",
  "avatarUrl": "https://cal.com/api/avatar/2b735186-b01b-46d3-87da-019b8f61776b.png",
  "bio": "I am a bio",
  "metadata": {
    "key": "value"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|name|string|false|none|none|
|timeFormat|number|false|none|Must be 12 or 24|
|defaultScheduleId|number|false|none|none|
|weekStart|string|false|none|none|
|timeZone|string|false|none|none|
|locale|string|false|none|none|
|avatarUrl|string|false|none|URL of the user's avatar image|
|bio|string|false|none|Bio|
|metadata|object|false|none|You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and values up to 500 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeFormat|12|
|timeFormat|24|
|weekStart|Monday|
|weekStart|Tuesday|
|weekStart|Wednesday|
|weekStart|Thursday|
|weekStart|Friday|
|weekStart|Saturday|
|weekStart|Sunday|
|locale|ar|
|locale|ca|
|locale|de|
|locale|es|
|locale|eu|
|locale|he|
|locale|id|
|locale|ja|
|locale|lv|
|locale|pl|
|locale|ro|
|locale|sr|
|locale|th|
|locale|vi|
|locale|az|
|locale|cs|
|locale|el|
|locale|es-419|
|locale|fi|
|locale|hr|
|locale|it|
|locale|km|
|locale|nl|
|locale|pt|
|locale|ru|
|locale|sv|
|locale|tr|
|locale|zh-CN|
|locale|bg|
|locale|da|
|locale|en|
|locale|et|
|locale|fr|
|locale|hu|
|locale|iw|
|locale|ko|
|locale|no|
|locale|pt-BR|
|locale|sk|
|locale|ta|
|locale|uk|
|locale|zh-TW|
|locale|bn|

<h2 id="tocS_KeysDto">KeysDto</h2>
<!-- backwards compatibility -->
<a id="schemakeysdto"></a>
<a id="schema_KeysDto"></a>
<a id="tocSkeysdto"></a>
<a id="tocskeysdto"></a>

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "accessTokenExpiresAt": 0,
  "refreshTokenExpiresAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|true|none|none|
|refreshToken|string|true|none|none|
|accessTokenExpiresAt|number|true|none|none|
|refreshTokenExpiresAt|number|true|none|none|

<h2 id="tocS_KeysResponseDto">KeysResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemakeysresponsedto"></a>
<a id="schema_KeysResponseDto"></a>
<a id="tocSkeysresponsedto"></a>
<a id="tocskeysresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "accessTokenExpiresAt": 0,
    "refreshTokenExpiresAt": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[KeysDto](#schemakeysdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CreateOAuthClientInput">CreateOAuthClientInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateoauthclientinput"></a>
<a id="schema_CreateOAuthClientInput"></a>
<a id="tocScreateoauthclientinput"></a>
<a id="tocscreateoauthclientinput"></a>

```json
{
  "logo": "string",
  "name": "string",
  "redirectUris": [
    "string"
  ],
  "permissions": [
    "EVENT_TYPE_READ"
  ],
  "bookingRedirectUri": "string",
  "bookingCancelRedirectUri": "string",
  "bookingRescheduleRedirectUri": "string",
  "areEmailsEnabled": true,
  "areDefaultEventTypesEnabled": false,
  "areCalendarEventsEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logo|string|false|none|none|
|name|string|true|none|none|
|redirectUris|[string]|true|none|none|
|permissions|[string]|true|none|Array of permission keys like ["BOOKING_READ", "BOOKING_WRITE"]. Use ["*"] to grant all permissions.|
|bookingRedirectUri|string|false|none|none|
|bookingCancelRedirectUri|string|false|none|none|
|bookingRescheduleRedirectUri|string|false|none|none|
|areEmailsEnabled|boolean|false|none|none|
|areDefaultEventTypesEnabled|boolean|false|none|If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.|
|areCalendarEventsEnabled|boolean|false|none|If true and if managed user has calendar connected, calendar events will be created. Disable it if you manually create calendar events. Default to true.|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|EVENT_TYPE_READ|
|permissions|EVENT_TYPE_WRITE|
|permissions|BOOKING_READ|
|permissions|BOOKING_WRITE|
|permissions|SCHEDULE_READ|
|permissions|SCHEDULE_WRITE|
|permissions|APPS_READ|
|permissions|APPS_WRITE|
|permissions|PROFILE_READ|
|permissions|PROFILE_WRITE|
|permissions|*|

<h2 id="tocS_CreateOAuthClientOutput">CreateOAuthClientOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateoauthclientoutput"></a>
<a id="schema_CreateOAuthClientOutput"></a>
<a id="tocScreateoauthclientoutput"></a>
<a id="tocscreateoauthclientoutput"></a>

```json
{
  "clientId": "clsx38nbl0001vkhlwin9fmt0",
  "clientSecret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoib2F1dGgtY2xpZW50Iiwi"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|true|none|none|
|clientSecret|string|true|none|none|

<h2 id="tocS_CreateOAuthClientResponseDto">CreateOAuthClientResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemacreateoauthclientresponsedto"></a>
<a id="schema_CreateOAuthClientResponseDto"></a>
<a id="tocScreateoauthclientresponsedto"></a>
<a id="tocscreateoauthclientresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "clientId": "clsx38nbl0001vkhlwin9fmt0",
    "clientSecret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoib2F1dGgtY2xpZW50Iiwi"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_PlatformOAuthClientDto">PlatformOAuthClientDto</h2>
<!-- backwards compatibility -->
<a id="schemaplatformoauthclientdto"></a>
<a id="schema_PlatformOAuthClientDto"></a>
<a id="tocSplatformoauthclientdto"></a>
<a id="tocsplatformoauthclientdto"></a>

```json
{
  "id": "clsx38nbl0001vkhlwin9fmt0",
  "name": "MyClient",
  "secret": "secretValue",
  "permissions": [
    "BOOKING_READ",
    "BOOKING_WRITE"
  ],
  "logo": "https://example.com/logo.png",
  "redirectUris": [
    "https://example.com/callback"
  ],
  "organizationId": 1,
  "createdAt": "2024-03-23T08:33:21.851Z",
  "areEmailsEnabled": true,
  "areDefaultEventTypesEnabled": true,
  "areCalendarEventsEnabled": true,
  "bookingRedirectUri": "https://example.com/booking-redirect",
  "bookingCancelRedirectUri": "https://example.com/booking-cancel",
  "bookingRescheduleRedirectUri": "https://example.com/booking-reschedule"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|secret|string|true|none|none|
|permissions|[string]|true|none|Array of permission keys like ["BOOKING_READ", "BOOKING_WRITE"]|
|logo|object|false|none|none|
|redirectUris|[string]|true|none|none|
|organizationId|number|true|none|none|
|createdAt|string(date-time)|true|none|none|
|areEmailsEnabled|boolean|true|none|none|
|areDefaultEventTypesEnabled|boolean|true|none|If enabled, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Leave this disabled if you want to create a managed user and then manually create event types for the user.|
|areCalendarEventsEnabled|boolean|true|none|If true and if managed user has calendar connected, calendar events will be created. Disable it if you manually create calendar events. Default to true.|
|bookingRedirectUri|string|false|none|none|
|bookingCancelRedirectUri|string|false|none|none|
|bookingRescheduleRedirectUri|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|EVENT_TYPE_READ|
|permissions|EVENT_TYPE_WRITE|
|permissions|BOOKING_READ|
|permissions|BOOKING_WRITE|
|permissions|SCHEDULE_READ|
|permissions|SCHEDULE_WRITE|
|permissions|APPS_READ|
|permissions|APPS_WRITE|
|permissions|PROFILE_READ|
|permissions|PROFILE_WRITE|

<h2 id="tocS_GetOAuthClientsResponseDto">GetOAuthClientsResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemagetoauthclientsresponsedto"></a>
<a id="schema_GetOAuthClientsResponseDto"></a>
<a id="tocSgetoauthclientsresponsedto"></a>
<a id="tocsgetoauthclientsresponsedto"></a>

```json
{
  "status": "success",
  "data": [
    {
      "id": "clsx38nbl0001vkhlwin9fmt0",
      "name": "MyClient",
      "secret": "secretValue",
      "permissions": [
        "BOOKING_READ",
        "BOOKING_WRITE"
      ],
      "logo": "https://example.com/logo.png",
      "redirectUris": [
        "https://example.com/callback"
      ],
      "organizationId": 1,
      "createdAt": "2024-03-23T08:33:21.851Z",
      "areEmailsEnabled": true,
      "areDefaultEventTypesEnabled": true,
      "areCalendarEventsEnabled": true,
      "bookingRedirectUri": "https://example.com/booking-redirect",
      "bookingCancelRedirectUri": "https://example.com/booking-cancel",
      "bookingRescheduleRedirectUri": "https://example.com/booking-reschedule"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[PlatformOAuthClientDto](#schemaplatformoauthclientdto)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetOAuthClientResponseDto">GetOAuthClientResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemagetoauthclientresponsedto"></a>
<a id="schema_GetOAuthClientResponseDto"></a>
<a id="tocSgetoauthclientresponsedto"></a>
<a id="tocsgetoauthclientresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "id": "clsx38nbl0001vkhlwin9fmt0",
    "name": "MyClient",
    "secret": "secretValue",
    "permissions": [
      "BOOKING_READ",
      "BOOKING_WRITE"
    ],
    "logo": "https://example.com/logo.png",
    "redirectUris": [
      "https://example.com/callback"
    ],
    "organizationId": 1,
    "createdAt": "2024-03-23T08:33:21.851Z",
    "areEmailsEnabled": true,
    "areDefaultEventTypesEnabled": true,
    "areCalendarEventsEnabled": true,
    "bookingRedirectUri": "https://example.com/booking-redirect",
    "bookingCancelRedirectUri": "https://example.com/booking-cancel",
    "bookingRescheduleRedirectUri": "https://example.com/booking-reschedule"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[PlatformOAuthClientDto](#schemaplatformoauthclientdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UpdateOAuthClientInput">UpdateOAuthClientInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoauthclientinput"></a>
<a id="schema_UpdateOAuthClientInput"></a>
<a id="tocSupdateoauthclientinput"></a>
<a id="tocsupdateoauthclientinput"></a>

```json
{
  "logo": "string",
  "name": "string",
  "redirectUris": [
    "string"
  ],
  "bookingRedirectUri": "string",
  "bookingCancelRedirectUri": "string",
  "bookingRescheduleRedirectUri": "string",
  "areEmailsEnabled": true,
  "areDefaultEventTypesEnabled": true,
  "areCalendarEventsEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logo|string|false|none|none|
|name|string|false|none|none|
|redirectUris|[string]|false|none|none|
|bookingRedirectUri|string|false|none|none|
|bookingCancelRedirectUri|string|false|none|none|
|bookingRescheduleRedirectUri|string|false|none|none|
|areEmailsEnabled|boolean|false|none|none|
|areDefaultEventTypesEnabled|boolean|false|none|If true, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Set this as false if you want to create a managed user and then manually create event types for the user.|
|areCalendarEventsEnabled|boolean|false|none|If true and if managed user has calendar connected, calendar events will be created. Disable it if you manually create calendar events. Default to true.|

<h2 id="tocS_RefreshTokenInput">RefreshTokenInput</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtokeninput"></a>
<a id="schema_RefreshTokenInput"></a>
<a id="tocSrefreshtokeninput"></a>
<a id="tocsrefreshtokeninput"></a>

```json
{
  "refreshToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refreshToken|string|true|none|Managed user's refresh token.|

<h2 id="tocS_RefreshApiKeyInput">RefreshApiKeyInput</h2>
<!-- backwards compatibility -->
<a id="schemarefreshapikeyinput"></a>
<a id="schema_RefreshApiKeyInput"></a>
<a id="tocSrefreshapikeyinput"></a>
<a id="tocsrefreshapikeyinput"></a>

```json
{
  "apiKeyDaysValid": 60,
  "apiKeyNeverExpires": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeyDaysValid|number|false|none|For how many days is managed organization api key valid. Defaults to 30 days.|
|apiKeyNeverExpires|boolean|false|none|If true, organization api key never expires.|

<h2 id="tocS_ApiKeyOutput">ApiKeyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyoutput"></a>
<a id="schema_ApiKeyOutput"></a>
<a id="tocSapikeyoutput"></a>
<a id="tocsapikeyoutput"></a>

```json
{
  "apiKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|true|none|none|

<h2 id="tocS_RefreshApiKeyOutput">RefreshApiKeyOutput</h2>
<!-- backwards compatibility -->
<a id="schemarefreshapikeyoutput"></a>
<a id="schema_RefreshApiKeyOutput"></a>
<a id="tocSrefreshapikeyoutput"></a>
<a id="tocsrefreshapikeyoutput"></a>

```json
{
  "status": "success",
  "data": {
    "apiKey": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ApiKeyOutput](#schemaapikeyoutput)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_BookerLayouts_2024_06_14">BookerLayouts_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemabookerlayouts_2024_06_14"></a>
<a id="schema_BookerLayouts_2024_06_14"></a>
<a id="tocSbookerlayouts_2024_06_14"></a>
<a id="tocsbookerlayouts_2024_06_14"></a>

```json
{
  "defaultLayout": "month",
  "enabledLayouts": [
    "month"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultLayout|string|true|none|none|
|enabledLayouts|[string]|true|none|Array of valid layouts - month, week or column|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultLayout|month|
|defaultLayout|week|
|defaultLayout|column|
|enabledLayouts|month|
|enabledLayouts|week|
|enabledLayouts|column|

<h2 id="tocS_EventTypeColor_2024_06_14">EventTypeColor_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypecolor_2024_06_14"></a>
<a id="schema_EventTypeColor_2024_06_14"></a>
<a id="tocSeventtypecolor_2024_06_14"></a>
<a id="tocseventtypecolor_2024_06_14"></a>

```json
{
  "lightThemeHex": "#292929",
  "darkThemeHex": "#fafafa"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lightThemeHex|string|true|none|Color used for event types in light theme|
|darkThemeHex|string|true|none|Color used for event types in dark theme|

<h2 id="tocS_DestinationCalendar_2024_06_14">DestinationCalendar_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemadestinationcalendar_2024_06_14"></a>
<a id="schema_DestinationCalendar_2024_06_14"></a>
<a id="tocSdestinationcalendar_2024_06_14"></a>
<a id="tocsdestinationcalendar_2024_06_14"></a>

```json
{
  "integration": "string",
  "externalId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration|string|true|none|The integration type of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the integration type of your connected calendars.|
|externalId|string|true|none|The external ID of the destination calendar. Refer to the /api/v2/calendars endpoint to retrieve the external IDs of your connected calendars.|

<h2 id="tocS_InputAddressLocation_2024_06_14">InputAddressLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemainputaddresslocation_2024_06_14"></a>
<a id="schema_InputAddressLocation_2024_06_14"></a>
<a id="tocSinputaddresslocation_2024_06_14"></a>
<a id="tocsinputaddresslocation_2024_06_14"></a>

```json
{
  "type": "address",
  "address": "123 Example St, City, Country",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `address`|
|address|string|true|none|none|
|public|boolean|true|none|none|

<h2 id="tocS_InputLinkLocation_2024_06_14">InputLinkLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemainputlinklocation_2024_06_14"></a>
<a id="schema_InputLinkLocation_2024_06_14"></a>
<a id="tocSinputlinklocation_2024_06_14"></a>
<a id="tocsinputlinklocation_2024_06_14"></a>

```json
{
  "type": "link",
  "link": "https://customvideo.com/join/123456",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `link`|
|link|string|true|none|none|
|public|boolean|true|none|none|

<h2 id="tocS_InputIntegrationLocation_2024_06_14">InputIntegrationLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemainputintegrationlocation_2024_06_14"></a>
<a id="schema_InputIntegrationLocation_2024_06_14"></a>
<a id="tocSinputintegrationlocation_2024_06_14"></a>
<a id="tocsinputintegrationlocation_2024_06_14"></a>

```json
{
  "type": "integration",
  "integration": "cal-video"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `integration`|
|integration|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|integration|cal-video|
|integration|google-meet|
|integration|zoom|
|integration|whereby-video|
|integration|whatsapp-video|
|integration|webex-video|
|integration|telegram-video|
|integration|tandem|
|integration|sylaps-video|
|integration|skype-video|
|integration|sirius-video|
|integration|signal-video|
|integration|shimmer-video|
|integration|salesroom-video|
|integration|roam-video|
|integration|riverside-video|
|integration|ping-video|
|integration|office365-video|
|integration|mirotalk-video|
|integration|jitsi|
|integration|jelly-video|
|integration|jelly-conferencing|
|integration|huddle|
|integration|facetime-video|
|integration|element-call-video|
|integration|eightxeight-video|
|integration|discord-video|
|integration|demodesk-video|
|integration|campfire-video|

<h2 id="tocS_InputPhoneLocation_2024_06_14">InputPhoneLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemainputphonelocation_2024_06_14"></a>
<a id="schema_InputPhoneLocation_2024_06_14"></a>
<a id="tocSinputphonelocation_2024_06_14"></a>
<a id="tocsinputphonelocation_2024_06_14"></a>

```json
{
  "type": "phone",
  "phone": "+37120993151",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `phone`|
|phone|string|true|none|none|
|public|boolean|true|none|none|

<h2 id="tocS_PhoneFieldInput_2024_06_14">PhoneFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaphonefieldinput_2024_06_14"></a>
<a id="schema_PhoneFieldInput_2024_06_14"></a>
<a id="tocSphonefieldinput_2024_06_14"></a>
<a id="tocsphonefieldinput_2024_06_14"></a>

```json
{
  "type": "phone",
  "slug": "some-slug",
  "label": "string",
  "required": true,
  "placeholder": "string",
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `phone`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking. Special slug is `attendeePhoneNumber` - if you create<br>      a phone input field with this slug for organization team event type you can create an organization team event type that can be booked using phone without requiring an email by setting {"type": "email", "required": false, "hidden": true} to the email booking field input in the request body.|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{phone: '+37122222222'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_AddressFieldInput_2024_06_14">AddressFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaaddressfieldinput_2024_06_14"></a>
<a id="schema_AddressFieldInput_2024_06_14"></a>
<a id="tocSaddressfieldinput_2024_06_14"></a>
<a id="tocsaddressfieldinput_2024_06_14"></a>

```json
{
  "type": "address",
  "slug": "some-slug",
  "label": "Please enter your address",
  "required": true,
  "placeholder": "e.g., 1234 Main St",
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `address`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.  In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{address: 'mainstreat 10, new york'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_TextFieldInput_2024_06_14">TextFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schematextfieldinput_2024_06_14"></a>
<a id="schema_TextFieldInput_2024_06_14"></a>
<a id="tocStextfieldinput_2024_06_14"></a>
<a id="tocstextfieldinput_2024_06_14"></a>

```json
{
  "type": "text",
  "slug": "some-slug",
  "label": "Please enter your text",
  "required": true,
  "placeholder": "e.g., Enter text here",
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `text`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `friend` and the URL contains query parameter `&friend=bob`,      the text field will be prefilled with this value and disabled.  In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{friend: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_NumberFieldInput_2024_06_14">NumberFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemanumberfieldinput_2024_06_14"></a>
<a id="schema_NumberFieldInput_2024_06_14"></a>
<a id="tocSnumberfieldinput_2024_06_14"></a>
<a id="tocsnumberfieldinput_2024_06_14"></a>

```json
{
  "type": "number",
  "slug": "some-slug",
  "label": "Please enter a number",
  "required": true,
  "placeholder": "e.g., 100",
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `number`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories` and the URL contains query parameter `&calories=3000`,      the number field will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{calories: 3000}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_TextAreaFieldInput_2024_06_14">TextAreaFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schematextareafieldinput_2024_06_14"></a>
<a id="schema_TextAreaFieldInput_2024_06_14"></a>
<a id="tocStextareafieldinput_2024_06_14"></a>
<a id="tocstextareafieldinput_2024_06_14"></a>

```json
{
  "type": "textarea",
  "slug": "some-slug",
  "label": "Please enter detailed information",
  "required": true,
  "placeholder": "e.g., Detailed description here...",
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `textarea`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `reflection` and the URL contains query parameter `&reflection=Today I shipped a feature`,      the text area will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{reflection: 'Today i shipped a feature'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_SelectFieldInput_2024_06_14">SelectFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaselectfieldinput_2024_06_14"></a>
<a id="schema_SelectFieldInput_2024_06_14"></a>
<a id="tocSselectfieldinput_2024_06_14"></a>
<a id="tocsselectfieldinput_2024_06_14"></a>

```json
{
  "type": "select",
  "slug": "some-slug",
  "label": "Please select an option",
  "required": true,
  "placeholder": "Select...",
  "options": [
    "Option 1",
    "Option 2"
  ],
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `select`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|options|[string]|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: 'italian'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_MultiSelectFieldInput_2024_06_14">MultiSelectFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemamultiselectfieldinput_2024_06_14"></a>
<a id="schema_MultiSelectFieldInput_2024_06_14"></a>
<a id="tocSmultiselectfieldinput_2024_06_14"></a>
<a id="tocsmultiselectfieldinput_2024_06_14"></a>

```json
{
  "type": "multiselect",
  "slug": "some-slug",
  "label": "Please select multiple options",
  "required": true,
  "options": [
    "Option 1",
    "Option 2"
  ],
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `multiselect`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|options|[string]|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and the URL contains query parameter `&language=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: ['en', 'it']}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_MultiEmailFieldInput_2024_06_14">MultiEmailFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemamultiemailfieldinput_2024_06_14"></a>
<a id="schema_MultiEmailFieldInput_2024_06_14"></a>
<a id="tocSmultiemailfieldinput_2024_06_14"></a>
<a id="tocsmultiemailfieldinput_2024_06_14"></a>

```json
{
  "type": "multiemail",
  "slug": "some-slug",
  "label": "Please enter multiple emails",
  "required": true,
  "placeholder": "e.g., example@example.com",
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `multiemail`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{consultants: ['alice@gmail.com', 'bob@gmail.com']}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_CheckboxGroupFieldInput_2024_06_14">CheckboxGroupFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemacheckboxgroupfieldinput_2024_06_14"></a>
<a id="schema_CheckboxGroupFieldInput_2024_06_14"></a>
<a id="tocScheckboxgroupfieldinput_2024_06_14"></a>
<a id="tocscheckboxgroupfieldinput_2024_06_14"></a>

```json
{
  "type": "checkbox",
  "slug": "some-slug",
  "label": "Select all that apply",
  "required": true,
  "options": [
    "Checkbox 1",
    "Checkbox 2"
  ],
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `checkbox`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|options|[string]|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify` and the URL contains query parameter `&notify=true`,      the checkbox will be selected and the checkbox field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{notify: true}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_RadioGroupFieldInput_2024_06_14">RadioGroupFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaradiogroupfieldinput_2024_06_14"></a>
<a id="schema_RadioGroupFieldInput_2024_06_14"></a>
<a id="tocSradiogroupfieldinput_2024_06_14"></a>
<a id="tocsradiogroupfieldinput_2024_06_14"></a>

```json
{
  "type": "radio",
  "slug": "some-slug",
  "label": "Select one option",
  "required": true,
  "options": [
    "Radio 1",
    "Radio 2"
  ],
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `radio`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|options|[string]|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: 'italian'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_BooleanFieldInput_2024_06_14">BooleanFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemabooleanfieldinput_2024_06_14"></a>
<a id="schema_BooleanFieldInput_2024_06_14"></a>
<a id="tocSbooleanfieldinput_2024_06_14"></a>
<a id="tocsbooleanfieldinput_2024_06_14"></a>

```json
{
  "type": "boolean",
  "slug": "some-slug",
  "label": "Agree to terms?",
  "required": true,
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `boolean`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify` and the URL contains query parameter `&notify=true`,      the checkbox will be selected and the checkbox field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{notify: true}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_UrlFieldInput_2024_06_14">UrlFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaurlfieldinput_2024_06_14"></a>
<a id="schema_UrlFieldInput_2024_06_14"></a>
<a id="tocSurlfieldinput_2024_06_14"></a>
<a id="tocsurlfieldinput_2024_06_14"></a>

```json
{
  "type": "url",
  "slug": "some-slug",
  "label": "Please enter your text",
  "required": true,
  "placeholder": "e.g., Enter url here",
  "disableOnPrefill": true,
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `url`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `videourl` and the URL contains query parameter `&videourl=https://youtube.com/abc`the url field will be prefilled with this value and disabled.       In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{videourl: 'https://caltube.com/123'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|

<h2 id="tocS_BusinessDaysWindow_2024_06_14">BusinessDaysWindow_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemabusinessdayswindow_2024_06_14"></a>
<a id="schema_BusinessDaysWindow_2024_06_14"></a>
<a id="tocSbusinessdayswindow_2024_06_14"></a>
<a id="tocsbusinessdayswindow_2024_06_14"></a>

```json
{
  "type": "businessDays",
  "value": 5,
  "rolling": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Whether the window should be business days, calendar days or a range of dates|
|value|number|true|none|How many business day into the future can this event be booked|
|rolling|boolean|false|none|<br>      Determines the behavior of the booking window:<br>      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' <br>        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, <br>        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days <br>        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.<br>      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the<br>        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current <br>        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next <br>        3 calendar days (November 10–12).<br>    |

#### Enumerated Values

|Property|Value|
|---|---|
|type|businessDays|
|type|calendarDays|
|type|range|

<h2 id="tocS_CalendarDaysWindow_2024_06_14">CalendarDaysWindow_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemacalendardayswindow_2024_06_14"></a>
<a id="schema_CalendarDaysWindow_2024_06_14"></a>
<a id="tocScalendardayswindow_2024_06_14"></a>
<a id="tocscalendardayswindow_2024_06_14"></a>

```json
{
  "type": "businessDays",
  "value": 5,
  "rolling": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Whether the window should be business days, calendar days or a range of dates|
|value|number|true|none|How many calendar days into the future can this event be booked|
|rolling|boolean|false|none|<br>      Determines the behavior of the booking window:<br>      - If **true**, the window is rolling. This means the number of available days will always be equal the specified 'value' <br>        and adjust dynamically as bookings are made. For example, if 'value' is 3 and availability is only on Mondays, <br>        a booker attempting to schedule on November 10 will see slots on November 11, 18, and 25. As one of these days <br>        becomes fully booked, a new day (e.g., December 2) will open up to ensure 3 available days are always visible.<br>      - If **false**, the window is fixed. This means the booking window only considers the next 'value' days from the<br>        moment someone is trying to book. For example, if 'value' is 3, availability is only on Mondays, and the current <br>        date is November 10, the booker will only see slots on November 11 because the window is restricted to the next <br>        3 calendar days (November 10–12).<br>    |

#### Enumerated Values

|Property|Value|
|---|---|
|type|businessDays|
|type|calendarDays|
|type|range|

<h2 id="tocS_RangeWindow_2024_06_14">RangeWindow_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemarangewindow_2024_06_14"></a>
<a id="schema_RangeWindow_2024_06_14"></a>
<a id="tocSrangewindow_2024_06_14"></a>
<a id="tocsrangewindow_2024_06_14"></a>

```json
{
  "type": "businessDays",
  "value": [
    "2030-09-05",
    "2030-09-09"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Whether the window should be business days, calendar days or a range of dates|
|value|[string]|true|none|Date range for when this event can be booked.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|businessDays|
|type|calendarDays|
|type|range|

<h2 id="tocS_BaseBookingLimitsCount_2024_06_14">BaseBookingLimitsCount_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemabasebookinglimitscount_2024_06_14"></a>
<a id="schema_BaseBookingLimitsCount_2024_06_14"></a>
<a id="tocSbasebookinglimitscount_2024_06_14"></a>
<a id="tocsbasebookinglimitscount_2024_06_14"></a>

```json
{
  "day": 1,
  "week": 2,
  "month": 3,
  "year": 4,
  "disabled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|number|false|none|The number of bookings per day|
|week|number|false|none|The number of bookings per week|
|month|number|false|none|The number of bookings per month|
|year|number|false|none|The number of bookings per year|
|disabled|boolean|false|none|none|

<h2 id="tocS_BookerActiveBookingsLimit_2024_06_14">BookerActiveBookingsLimit_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemabookeractivebookingslimit_2024_06_14"></a>
<a id="schema_BookerActiveBookingsLimit_2024_06_14"></a>
<a id="tocSbookeractivebookingslimit_2024_06_14"></a>
<a id="tocsbookeractivebookingslimit_2024_06_14"></a>

```json
{
  "maximumActiveBookings": 3,
  "offerReschedule": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximumActiveBookings|number|false|none|The maximum number of active bookings a booker can have for this event type.|
|offerReschedule|boolean|false|none|Whether to offer rescheduling the last active booking to the chosen time slot when limit is reached.|

<h2 id="tocS_Disabled_2024_06_14">Disabled_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemadisabled_2024_06_14"></a>
<a id="schema_Disabled_2024_06_14"></a>
<a id="tocSdisabled_2024_06_14"></a>
<a id="tocsdisabled_2024_06_14"></a>

```json
{
  "disabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|true|none|Only acceptable value for the `disabled` property is `true`. It is used to reset the value of the property for which previously an object containing specific settings was passed.|

<h2 id="tocS_BaseBookingLimitsDuration_2024_06_14">BaseBookingLimitsDuration_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemabasebookinglimitsduration_2024_06_14"></a>
<a id="schema_BaseBookingLimitsDuration_2024_06_14"></a>
<a id="tocSbasebookinglimitsduration_2024_06_14"></a>
<a id="tocsbasebookinglimitsduration_2024_06_14"></a>

```json
{
  "day": 60,
  "week": 120,
  "month": 180,
  "year": 240
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|number|false|none|The duration of bookings per day (must be a multiple of 15)|
|week|number|false|none|The duration of bookings per week (must be a multiple of 15)|
|month|number|false|none|The duration of bookings per month (must be a multiple of 15)|
|year|number|false|none|The duration of bookings per year (must be a multiple of 15)|

<h2 id="tocS_Recurrence_2024_06_14">Recurrence_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemarecurrence_2024_06_14"></a>
<a id="schema_Recurrence_2024_06_14"></a>
<a id="tocSrecurrence_2024_06_14"></a>
<a id="tocsrecurrence_2024_06_14"></a>

```json
{
  "interval": 10,
  "occurrences": 10,
  "frequency": "yearly"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|number|true|none|Repeats every {count} week \| month \| year|
|occurrences|number|true|none|Repeats for a maximum of {count} events|
|frequency|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|yearly|
|frequency|monthly|
|frequency|weekly|

<h2 id="tocS_NoticeThreshold_2024_06_14">NoticeThreshold_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemanoticethreshold_2024_06_14"></a>
<a id="schema_NoticeThreshold_2024_06_14"></a>
<a id="tocSnoticethreshold_2024_06_14"></a>
<a id="tocsnoticethreshold_2024_06_14"></a>

```json
{
  "unit": "minutes",
  "count": 30
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unit|string|true|none|The unit of time for the notice threshold (e.g., minutes, hours)|
|count|number|true|none|The time value for the notice threshold|

<h2 id="tocS_BaseConfirmationPolicy_2024_06_14">BaseConfirmationPolicy_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemabaseconfirmationpolicy_2024_06_14"></a>
<a id="schema_BaseConfirmationPolicy_2024_06_14"></a>
<a id="tocSbaseconfirmationpolicy_2024_06_14"></a>
<a id="tocsbaseconfirmationpolicy_2024_06_14"></a>

```json
{
  "type": "always",
  "noticeThreshold": {
    "unit": "minutes",
    "count": 30
  },
  "blockUnconfirmedBookingsInBooker": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The policy that determines when confirmation is required|
|noticeThreshold|object|false|none|The notice threshold required before confirmation is needed. Required when type is 'time'.|
|blockUnconfirmedBookingsInBooker|boolean|true|none|Unconfirmed bookings still block calendar slots.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|always|
|type|time|

<h2 id="tocS_Seats_2024_06_14">Seats_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaseats_2024_06_14"></a>
<a id="schema_Seats_2024_06_14"></a>
<a id="tocSseats_2024_06_14"></a>
<a id="tocsseats_2024_06_14"></a>

```json
{
  "seatsPerTimeSlot": 4,
  "showAttendeeInfo": true,
  "showAvailabilityCount": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seatsPerTimeSlot|number|true|none|Number of seats available per time slot|
|showAttendeeInfo|boolean|true|none|Show attendee information to other guests|
|showAvailabilityCount|boolean|true|none|Display the count of available seats|

<h2 id="tocS_InputAttendeeAddressLocation_2024_06_14">InputAttendeeAddressLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemainputattendeeaddresslocation_2024_06_14"></a>
<a id="schema_InputAttendeeAddressLocation_2024_06_14"></a>
<a id="tocSinputattendeeaddresslocation_2024_06_14"></a>
<a id="tocsinputattendeeaddresslocation_2024_06_14"></a>

```json
{
  "type": "attendeeAddress"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `attendeeAddress`|

<h2 id="tocS_InputAttendeePhoneLocation_2024_06_14">InputAttendeePhoneLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemainputattendeephonelocation_2024_06_14"></a>
<a id="schema_InputAttendeePhoneLocation_2024_06_14"></a>
<a id="tocSinputattendeephonelocation_2024_06_14"></a>
<a id="tocsinputattendeephonelocation_2024_06_14"></a>

```json
{
  "type": "attendeePhone"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `attendeePhone`|

<h2 id="tocS_InputAttendeeDefinedLocation_2024_06_14">InputAttendeeDefinedLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemainputattendeedefinedlocation_2024_06_14"></a>
<a id="schema_InputAttendeeDefinedLocation_2024_06_14"></a>
<a id="tocSinputattendeedefinedlocation_2024_06_14"></a>
<a id="tocsinputattendeedefinedlocation_2024_06_14"></a>

```json
{
  "type": "attendeeDefined"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `attendeeDefined`|

<h2 id="tocS_NameDefaultFieldInput_2024_06_14">NameDefaultFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemanamedefaultfieldinput_2024_06_14"></a>
<a id="schema_NameDefaultFieldInput_2024_06_14"></a>
<a id="tocSnamedefaultfieldinput_2024_06_14"></a>
<a id="tocsnamedefaultfieldinput_2024_06_14"></a>

```json
{
  "type": "name",
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.|
|label|string|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled. In case of Booker atom need to pass 'name' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{name: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-fields|

<h2 id="tocS_EmailDefaultFieldInput_2024_06_14">EmailDefaultFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaemaildefaultfieldinput_2024_06_14"></a>
<a id="schema_EmailDefaultFieldInput_2024_06_14"></a>
<a id="tocSemaildefaultfieldinput_2024_06_14"></a>
<a id="tocsemaildefaultfieldinput_2024_06_14"></a>

```json
{
  "type": "email",
  "label": "string",
  "required": {},
  "hidden": true,
  "placeholder": "string",
  "disableOnPrefill": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `email`|
|label|string|true|none|none|
|required|object|false|none|Can be set to false only for organization team event types and if you also pass booking field {type: "phone", slug: "attendeePhoneNumber", required: true, hidden: false, label: "whatever label"} of booking field type PhoneFieldInput_2024_06_14 - this is done<br>      to enable phone only bookings where during the booking attendee can provide only their phone number and not provide email, so you must pass to the email booking field {hidden: true, required: false}.<br>      If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|hidden|boolean|false|none|Can be set to true only for organization team event types and if you also pass booking field {type: "phone", slug: "attendeePhoneNumber", required: true, hidden: false, label: "whatever label"} of booking field type PhoneFieldInput_2024_06_14 - this is done<br>      to enable phone only bookings where during the booking attendee can provide only their phone number and not provide email, so you must pass to the email booking field {hidden: true, required: false}.<br>      If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled. In case of Booker atom need to pass 'email' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{email: 'bob@gmail.com'}}`. See guide https://cal.com/docs/platform/guides/booking-field|

<h2 id="tocS_TitleDefaultFieldInput_2024_06_14">TitleDefaultFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schematitledefaultfieldinput_2024_06_14"></a>
<a id="schema_TitleDefaultFieldInput_2024_06_14"></a>
<a id="tocStitledefaultfieldinput_2024_06_14"></a>
<a id="tocstitledefaultfieldinput_2024_06_14"></a>

```json
{
  "slug": "title",
  "required": true,
  "hidden": true,
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|only allowed value for type is `title`|
|required|boolean|false|none|none|
|hidden|boolean|false|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|label|string|false|none|none|
|placeholder|string|false|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=journey`,      the title field will be prefilled with this value and disabled. In case of Booker atom need to pass 'title' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{title: 'very important meeting'}}`. See guide https://cal.com/docs/platform/guides/booking-field|

<h2 id="tocS_LocationDefaultFieldInput_2024_06_14">LocationDefaultFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemalocationdefaultfieldinput_2024_06_14"></a>
<a id="schema_LocationDefaultFieldInput_2024_06_14"></a>
<a id="tocSlocationdefaultfieldinput_2024_06_14"></a>
<a id="tocslocationdefaultfieldinput_2024_06_14"></a>

```json
{
  "slug": "location",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|only allowed value for type is `location`. This booking field is displayed only when event type has 2 or more locations in order to allow person doing the booking pick the location.|
|label|string|false|none|none|

<h2 id="tocS_NotesDefaultFieldInput_2024_06_14">NotesDefaultFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemanotesdefaultfieldinput_2024_06_14"></a>
<a id="schema_NotesDefaultFieldInput_2024_06_14"></a>
<a id="tocSnotesdefaultfieldinput_2024_06_14"></a>
<a id="tocsnotesdefaultfieldinput_2024_06_14"></a>

```json
{
  "slug": "notes",
  "required": true,
  "hidden": true,
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|only allowed value for type is `notes`|
|required|boolean|false|none|none|
|hidden|boolean|false|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|label|string|false|none|none|
|placeholder|string|false|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=journey`,      the notes field will be prefilled with this value and disabled. In case of Booker atom need to pass 'notes' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{notes: 'bring notebook and paper'}}`. See guide https://cal.com/docs/platform/guides/booking-field|

<h2 id="tocS_GuestsDefaultFieldInput_2024_06_14">GuestsDefaultFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaguestsdefaultfieldinput_2024_06_14"></a>
<a id="schema_GuestsDefaultFieldInput_2024_06_14"></a>
<a id="tocSguestsdefaultfieldinput_2024_06_14"></a>
<a id="tocsguestsdefaultfieldinput_2024_06_14"></a>

```json
{
  "slug": "guests",
  "required": true,
  "hidden": true,
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|only allowed value for type is `guests`|
|required|boolean|false|none|none|
|hidden|boolean|false|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|label|string|false|none|none|
|placeholder|string|false|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=bob@cal.com`,      the guests field will be prefilled with this value and disabled. In case of Booker atom need to pass 'guests' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{guests: ['bob@gmail.com', 'alice@gmail.com']}}`. See guide https://cal.com/docs/platform/guides/booking-field|

<h2 id="tocS_RescheduleReasonDefaultFieldInput_2024_06_14">RescheduleReasonDefaultFieldInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemareschedulereasondefaultfieldinput_2024_06_14"></a>
<a id="schema_RescheduleReasonDefaultFieldInput_2024_06_14"></a>
<a id="tocSreschedulereasondefaultfieldinput_2024_06_14"></a>
<a id="tocsreschedulereasondefaultfieldinput_2024_06_14"></a>

```json
{
  "slug": "rescheduleReason",
  "required": true,
  "hidden": true,
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|only allowed value for type is `rescheduleReason`|
|required|boolean|false|none|none|
|hidden|boolean|false|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|label|string|false|none|none|
|placeholder|string|false|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=travel`,      the rescheduleReason field will be prefilled with this value and disabled. In case of Booker atom need to pass 'rescheduleReason' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{rescheduleReason: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-field|

<h2 id="tocS_InputOrganizersDefaultApp_2024_06_14">InputOrganizersDefaultApp_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemainputorganizersdefaultapp_2024_06_14"></a>
<a id="schema_InputOrganizersDefaultApp_2024_06_14"></a>
<a id="tocSinputorganizersdefaultapp_2024_06_14"></a>
<a id="tocsinputorganizersdefaultapp_2024_06_14"></a>

```json
{
  "type": "organizersDefaultApp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `organizersDefaultApp`|

<h2 id="tocS_EmailSettings_2024_06_14">EmailSettings_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaemailsettings_2024_06_14"></a>
<a id="schema_EmailSettings_2024_06_14"></a>
<a id="tocSemailsettings_2024_06_14"></a>
<a id="tocsemailsettings_2024_06_14"></a>

```json
{
  "disableEmailsToAttendees": true,
  "disableEmailsToHosts": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableEmailsToAttendees|boolean|false|none|Disables all email communication to attendees for this event type, including booking confirmations, reminders, and cancellations. This DOES NOT include emails sent by custom email workflows.|
|disableEmailsToHosts|boolean|false|none|Disables all email communication to hosts for this event type, including booking confirmations, reminders, and cancellations. This DOES NOT include emails sent by custom email workflows.|

<h2 id="tocS_DisableRescheduling_2024_06_14">DisableRescheduling_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemadisablerescheduling_2024_06_14"></a>
<a id="schema_DisableRescheduling_2024_06_14"></a>
<a id="tocSdisablerescheduling_2024_06_14"></a>
<a id="tocsdisablerescheduling_2024_06_14"></a>

```json
{
  "disabled": true,
  "minutesBefore": 60
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|If true, rescheduling is always disabled for this event type.|
|minutesBefore|number|false|none|Disable rescheduling when less than the specified number of minutes before the meeting. If set, `disabled` should be false or undefined.|

<h2 id="tocS_DisableCancelling_2024_06_14">DisableCancelling_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemadisablecancelling_2024_06_14"></a>
<a id="schema_DisableCancelling_2024_06_14"></a>
<a id="tocSdisablecancelling_2024_06_14"></a>
<a id="tocsdisablecancelling_2024_06_14"></a>

```json
{
  "disabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|If true, cancelling is always disabled for this event type.|

<h2 id="tocS_CalVideoSettings">CalVideoSettings</h2>
<!-- backwards compatibility -->
<a id="schemacalvideosettings"></a>
<a id="schema_CalVideoSettings"></a>
<a id="tocScalvideosettings"></a>
<a id="tocscalvideosettings"></a>

```json
{
  "disableRecordingForOrganizer": false,
  "disableRecordingForGuests": false,
  "redirectUrlOnExit": {},
  "enableAutomaticRecordingForOrganizer": false,
  "enableAutomaticTranscription": false,
  "disableTranscriptionForGuests": false,
  "disableTranscriptionForOrganizer": false,
  "sendTranscriptionEmails": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableRecordingForOrganizer|boolean|false|none|If true, the organizer will not be able to record the meeting|
|disableRecordingForGuests|boolean|false|none|If true, the guests will not be able to record the meeting|
|redirectUrlOnExit|object|false|none|URL to which participants are redirected when they exit the call|
|enableAutomaticRecordingForOrganizer|boolean|false|none|If true, enables the automatic recording for the event when organizer joins the call|
|enableAutomaticTranscription|boolean|false|none|If true, enables the automatic transcription for the event whenever someone joins the call|
|disableTranscriptionForGuests|boolean|false|none|If true, the guests will not be able to receive transcription of the meeting|
|disableTranscriptionForOrganizer|boolean|false|none|If true, the organizer will not be able to receive transcription of the meeting|
|sendTranscriptionEmails|boolean|false|none|Send emails with the transcription of the Cal Video after the meeting ends.|

<h2 id="tocS_CreateEventTypeInput_2024_06_14">CreateEventTypeInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventtypeinput_2024_06_14"></a>
<a id="schema_CreateEventTypeInput_2024_06_14"></a>
<a id="tocScreateeventtypeinput_2024_06_14"></a>
<a id="tocscreateeventtypeinput_2024_06_14"></a>

```json
{
  "lengthInMinutes": 60,
  "lengthInMinutesOptions": [
    15,
    30,
    60
  ],
  "title": "Learn the secrets of masterchief!",
  "slug": "learn-the-secrets-of-masterchief",
  "description": "Discover the culinary wonders of the Argentina by making the best flan ever!",
  "bookingFields": [
    {
      "type": "name",
      "label": "string",
      "placeholder": "string",
      "disableOnPrefill": true
    }
  ],
  "disableGuests": true,
  "slotInterval": 0,
  "minimumBookingNotice": 0,
  "beforeEventBuffer": 0,
  "afterEventBuffer": 0,
  "scheduleId": 0,
  "bookingLimitsCount": {
    "day": 1,
    "week": 2,
    "month": 3,
    "year": 4,
    "disabled": false
  },
  "bookerActiveBookingsLimit": {
    "maximumActiveBookings": 3,
    "offerReschedule": true
  },
  "onlyShowFirstAvailableSlot": true,
  "bookingLimitsDuration": {
    "day": 60,
    "week": 120,
    "month": 180,
    "year": 240
  },
  "bookingWindow": {
    "type": "businessDays",
    "value": 5,
    "rolling": true
  },
  "offsetStart": 0,
  "bookerLayouts": {
    "defaultLayout": "month",
    "enabledLayouts": [
      "month"
    ]
  },
  "confirmationPolicy": {
    "type": "always",
    "noticeThreshold": {
      "unit": "minutes",
      "count": 30
    },
    "blockUnconfirmedBookingsInBooker": true
  },
  "recurrence": {
    "interval": 10,
    "occurrences": 10,
    "frequency": "yearly"
  },
  "requiresBookerEmailVerification": true,
  "hideCalendarNotes": true,
  "lockTimeZoneToggleOnBookingPage": true,
  "color": {
    "lightThemeHex": "#292929",
    "darkThemeHex": "#fafafa"
  },
  "seats": {
    "seatsPerTimeSlot": 4,
    "showAttendeeInfo": true,
    "showAvailabilityCount": true
  },
  "customName": "{Event type title} between {Organiser} and {Scheduler}",
  "destinationCalendar": {
    "integration": "string",
    "externalId": "string"
  },
  "useDestinationCalendarEmail": true,
  "hideCalendarEventDetails": true,
  "successRedirectUrl": "https://masterchief.com/argentina/flan/video/9129412",
  "hideOrganizerEmail": true,
  "calVideoSettings": {
    "disableRecordingForOrganizer": false,
    "disableRecordingForGuests": false,
    "redirectUrlOnExit": {},
    "enableAutomaticRecordingForOrganizer": false,
    "enableAutomaticTranscription": false,
    "disableTranscriptionForGuests": false,
    "disableTranscriptionForOrganizer": false,
    "sendTranscriptionEmails": true
  },
  "hidden": true,
  "bookingRequiresAuthentication": false,
  "disableCancelling": {
    "disabled": true
  },
  "disableRescheduling": {
    "disabled": false,
    "minutesBefore": 60
  },
  "interfaceLanguage": "",
  "allowReschedulingPastBookings": false,
  "allowReschedulingCancelledBookings": false,
  "showOptimizedSlots": false,
  "locations": [
    {
      "type": "address",
      "address": "123 Example St, City, Country",
      "public": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lengthInMinutes|number|true|none|none|
|lengthInMinutesOptions|[string]|false|none|If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.|
|title|string|true|none|none|
|slug|string|true|none|none|
|description|string|false|none|none|
|bookingFields|[[NameDefaultFieldInput_2024_06_14](#schemanamedefaultfieldinput_2024_06_14) \| [EmailDefaultFieldInput_2024_06_14](#schemaemaildefaultfieldinput_2024_06_14) \| [TitleDefaultFieldInput_2024_06_14](#schematitledefaultfieldinput_2024_06_14) \| [LocationDefaultFieldInput_2024_06_14](#schemalocationdefaultfieldinput_2024_06_14) \| [NotesDefaultFieldInput_2024_06_14](#schemanotesdefaultfieldinput_2024_06_14) \| [GuestsDefaultFieldInput_2024_06_14](#schemaguestsdefaultfieldinput_2024_06_14) \| [RescheduleReasonDefaultFieldInput_2024_06_14](#schemareschedulereasondefaultfieldinput_2024_06_14) \| [PhoneFieldInput_2024_06_14](#schemaphonefieldinput_2024_06_14) \| [AddressFieldInput_2024_06_14](#schemaaddressfieldinput_2024_06_14) \| [TextFieldInput_2024_06_14](#schematextfieldinput_2024_06_14) \| [NumberFieldInput_2024_06_14](#schemanumberfieldinput_2024_06_14) \| [TextAreaFieldInput_2024_06_14](#schematextareafieldinput_2024_06_14) \| [SelectFieldInput_2024_06_14](#schemaselectfieldinput_2024_06_14) \| [MultiSelectFieldInput_2024_06_14](#schemamultiselectfieldinput_2024_06_14) \| [MultiEmailFieldInput_2024_06_14](#schemamultiemailfieldinput_2024_06_14) \| [CheckboxGroupFieldInput_2024_06_14](#schemacheckboxgroupfieldinput_2024_06_14) \| [RadioGroupFieldInput_2024_06_14](#schemaradiogroupfieldinput_2024_06_14) \| [BooleanFieldInput_2024_06_14](#schemabooleanfieldinput_2024_06_14) \| [UrlFieldInput_2024_06_14](#schemaurlfieldinput_2024_06_14)]|false|none|Custom fields that can be added to the booking form when the event is booked by someone. By default booking form has name and email field.|
|disableGuests|boolean|false|none|If true, person booking this event can't add guests via their emails.|
|slotInterval|number|false|none|Number representing length of each slot when event is booked. By default it equal length of the event type.<br>      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then<br>      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.|
|minimumBookingNotice|number|false|none|Minimum number of minutes before the event that a booking can be made.|
|beforeEventBuffer|number|false|none|Extra time automatically blocked on your calendar before a meeting starts. This gives you time to prepare, review notes, or transition from your previous activity.|
|afterEventBuffer|number|false|none|Extra time automatically blocked on your calendar after a meeting ends. This gives you time to wrap up, add notes, or decompress before your next commitment.|
|scheduleId|number|false|none|If you want that this event has different schedule than user's default one you can specify it here.|
|bookingLimitsCount|[BaseBookingLimitsCount_2024_06_14](#schemabasebookinglimitscount_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Limit how many times this event can be booked|
|bookerActiveBookingsLimit|[BookerActiveBookingsLimit_2024_06_14](#schemabookeractivebookingslimit_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Limit the number of active bookings a booker can make for this event type.|
|onlyShowFirstAvailableSlot|boolean|false|none|This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.|
|bookingLimitsDuration|[BaseBookingLimitsDuration_2024_06_14](#schemabasebookinglimitsduration_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Limit total amount of time that this event can be booked|
|bookingWindow|[BusinessDaysWindow_2024_06_14](#schemabusinessdayswindow_2024_06_14) \| [CalendarDaysWindow_2024_06_14](#schemacalendardayswindow_2024_06_14) \| [RangeWindow_2024_06_14](#schemarangewindow_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Limit how far in the future this event can be booked|
|offsetStart|number|false|none|Offset timeslots shown to bookers by a specified number of minutes|
|bookerLayouts|object|false|none|Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.|
|confirmationPolicy|[BaseConfirmationPolicy_2024_06_14](#schemabaseconfirmationpolicy_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.|
|recurrence|[Recurrence_2024_06_14](#schemarecurrence_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Create a recurring event type.|
|requiresBookerEmailVerification|boolean|false|none|none|
|hideCalendarNotes|boolean|false|none|none|
|lockTimeZoneToggleOnBookingPage|boolean|false|none|none|
|color|[EventTypeColor_2024_06_14](#schemaeventtypecolor_2024_06_14)|false|none|none|
|seats|[Seats_2024_06_14](#schemaseats_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Create an event type with multiple seats.|
|customName|string|false|none|Customizable event name with valid variables:<br>      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},<br>      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},<br>      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}|
|destinationCalendar|[DestinationCalendar_2024_06_14](#schemadestinationcalendar_2024_06_14)|false|none|none|
|useDestinationCalendarEmail|boolean|false|none|none|
|hideCalendarEventDetails|boolean|false|none|none|
|successRedirectUrl|string|false|none|A valid URL where the booker will redirect to, once the booking is completed successfully|
|hideOrganizerEmail|boolean|false|none|Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events|
|calVideoSettings|object|false|none|Cal video settings for the event type. Platform customers can't manage this property because currently we have no way of determining if managed user is a host or an attendee.|
|hidden|boolean|false|none|none|
|bookingRequiresAuthentication|boolean|false|none|Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.|
|disableCancelling|object|false|none|Settings for disabling cancelling of this event type.|
|disableRescheduling|object|false|none|Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.|
|interfaceLanguage|string|false|none|Set preferred language for the booking interface. Use empty string for visitor's browser language (default).|
|allowReschedulingPastBookings|boolean|false|none|Enabling this option allows for past events to be rescheduled.|
|allowReschedulingCancelledBookings|boolean|false|none|When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.|
|showOptimizedSlots|boolean|false|none|Arrange time slots to optimize availability.|
|locations|[[InputAddressLocation_2024_06_14](#schemainputaddresslocation_2024_06_14) \| [InputLinkLocation_2024_06_14](#schemainputlinklocation_2024_06_14) \| [InputIntegrationLocation_2024_06_14](#schemainputintegrationlocation_2024_06_14) \| [InputPhoneLocation_2024_06_14](#schemainputphonelocation_2024_06_14) \| [InputAttendeeAddressLocation_2024_06_14](#schemainputattendeeaddresslocation_2024_06_14) \| [InputAttendeePhoneLocation_2024_06_14](#schemainputattendeephonelocation_2024_06_14) \| [InputAttendeeDefinedLocation_2024_06_14](#schemainputattendeedefinedlocation_2024_06_14)]|false|none|Locations where the event will take place. If not provided, cal video link will be used as the location. Note: Setting a location to a conferencing app does not install the app - the app must already be installed. Via API, only Google Meet (google-meet), Microsoft Teams (office365-video), and Zoom (zoom) can be installed. Cal Video (cal-video) is installed by default. All other conferencing apps must be connected via the Cal.diy web app and are not available for Platform plan customers. You can only set an event type location to an app that has already been installed or connected.|

#### Enumerated Values

|Property|Value|
|---|---|
|interfaceLanguage|""|
|interfaceLanguage|en|
|interfaceLanguage|ar|
|interfaceLanguage|az|
|interfaceLanguage|bg|
|interfaceLanguage|bn|
|interfaceLanguage|ca|
|interfaceLanguage|cs|
|interfaceLanguage|da|
|interfaceLanguage|de|
|interfaceLanguage|el|
|interfaceLanguage|es|
|interfaceLanguage|es-419|
|interfaceLanguage|eu|
|interfaceLanguage|et|
|interfaceLanguage|fi|
|interfaceLanguage|fr|
|interfaceLanguage|he|
|interfaceLanguage|hu|
|interfaceLanguage|it|
|interfaceLanguage|ja|
|interfaceLanguage|km|
|interfaceLanguage|ko|
|interfaceLanguage|nl|
|interfaceLanguage|no|
|interfaceLanguage|pl|
|interfaceLanguage|pt-BR|
|interfaceLanguage|pt|
|interfaceLanguage|ro|
|interfaceLanguage|ru|
|interfaceLanguage|sk-SK|
|interfaceLanguage|sr|
|interfaceLanguage|sv|
|interfaceLanguage|tr|
|interfaceLanguage|uk|
|interfaceLanguage|vi|
|interfaceLanguage|zh-CN|
|interfaceLanguage|zh-TW|

<h2 id="tocS_OutputAddressLocation_2024_06_14">OutputAddressLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaoutputaddresslocation_2024_06_14"></a>
<a id="schema_OutputAddressLocation_2024_06_14"></a>
<a id="tocSoutputaddresslocation_2024_06_14"></a>
<a id="tocsoutputaddresslocation_2024_06_14"></a>

```json
{
  "type": "address",
  "address": "123 Example St, City, Country",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `address`|
|address|string|true|none|none|
|public|boolean|true|none|none|

<h2 id="tocS_OutputLinkLocation_2024_06_14">OutputLinkLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaoutputlinklocation_2024_06_14"></a>
<a id="schema_OutputLinkLocation_2024_06_14"></a>
<a id="tocSoutputlinklocation_2024_06_14"></a>
<a id="tocsoutputlinklocation_2024_06_14"></a>

```json
{
  "type": "link",
  "link": "https://customvideo.com/join/123456",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `link`|
|link|string|true|none|none|
|public|boolean|true|none|none|

<h2 id="tocS_OutputIntegrationLocation_2024_06_14">OutputIntegrationLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaoutputintegrationlocation_2024_06_14"></a>
<a id="schema_OutputIntegrationLocation_2024_06_14"></a>
<a id="tocSoutputintegrationlocation_2024_06_14"></a>
<a id="tocsoutputintegrationlocation_2024_06_14"></a>

```json
{
  "type": "integration",
  "integration": "cal-video",
  "link": "https://example.com",
  "credentialId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Only allowed value for type is `integration`|
|integration|string|true|none|none|
|link|string|false|none|none|
|credentialId|number|false|none|Credential ID associated with the integration|

#### Enumerated Values

|Property|Value|
|---|---|
|integration|cal-video|
|integration|google-meet|
|integration|zoom|
|integration|whereby-video|
|integration|whatsapp-video|
|integration|webex-video|
|integration|telegram-video|
|integration|tandem|
|integration|sylaps-video|
|integration|skype-video|
|integration|sirius-video|
|integration|signal-video|
|integration|shimmer-video|
|integration|salesroom-video|
|integration|roam-video|
|integration|riverside-video|
|integration|ping-video|
|integration|office365-video|
|integration|mirotalk-video|
|integration|jitsi|
|integration|jelly-video|
|integration|jelly-conferencing|
|integration|huddle|
|integration|facetime-video|
|integration|element-call-video|
|integration|eightxeight-video|
|integration|discord-video|
|integration|demodesk-video|
|integration|campfire-video|

<h2 id="tocS_OutputPhoneLocation_2024_06_14">OutputPhoneLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaoutputphonelocation_2024_06_14"></a>
<a id="schema_OutputPhoneLocation_2024_06_14"></a>
<a id="tocSoutputphonelocation_2024_06_14"></a>
<a id="tocsoutputphonelocation_2024_06_14"></a>

```json
{
  "type": "phone",
  "phone": "+37120993151",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `phone`|
|phone|string|true|none|none|
|public|boolean|true|none|none|

<h2 id="tocS_OutputOrganizersDefaultAppLocation_2024_06_14">OutputOrganizersDefaultAppLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaoutputorganizersdefaultapplocation_2024_06_14"></a>
<a id="schema_OutputOrganizersDefaultAppLocation_2024_06_14"></a>
<a id="tocSoutputorganizersdefaultapplocation_2024_06_14"></a>
<a id="tocsoutputorganizersdefaultapplocation_2024_06_14"></a>

```json
{
  "type": "organizersDefaultApp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `organizersDefaultApp`|

<h2 id="tocS_OutputUnknownLocation_2024_06_14">OutputUnknownLocation_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaoutputunknownlocation_2024_06_14"></a>
<a id="schema_OutputUnknownLocation_2024_06_14"></a>
<a id="tocSoutputunknownlocation_2024_06_14"></a>
<a id="tocsoutputunknownlocation_2024_06_14"></a>

```json
{
  "type": "unknown",
  "location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `unknown`|
|location|string|true|none|none|

<h2 id="tocS_EmailDefaultFieldOutput_2024_06_14">EmailDefaultFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaemaildefaultfieldoutput_2024_06_14"></a>
<a id="schema_EmailDefaultFieldOutput_2024_06_14"></a>
<a id="tocSemaildefaultfieldoutput_2024_06_14"></a>
<a id="tocsemaildefaultfieldoutput_2024_06_14"></a>

```json
{
  "type": "email",
  "label": "string",
  "required": {},
  "hidden": true,
  "placeholder": "string",
  "disableOnPrefill": true,
  "isDefault": true,
  "slug": "email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `email`|
|label|string|true|none|none|
|required|object|false|none|Can be set to false only for organization team event types and if you also pass booking field {type: "phone", slug: "attendeePhoneNumber", required: true, hidden: false, label: "whatever label"} of booking field type PhoneFieldInput_2024_06_14 - this is done<br>      to enable phone only bookings where during the booking attendee can provide only their phone number and not provide email, so you must pass to the email booking field {hidden: true, required: false}.<br>      If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|hidden|boolean|false|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both. Can only be hidden<br>      for organization team event types when also providing attendee phone number booking field.|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&email=bob@gmail.com`,      the email field will be prefilled with this value and disabled. In case of Booker atom need to pass 'email' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{email: 'bob@gmail.com'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|isDefault|object|true|none|This property is always true because it's a default field|
|slug|string|true|none|none|

<h2 id="tocS_NameDefaultFieldOutput_2024_06_14">NameDefaultFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemanamedefaultfieldoutput_2024_06_14"></a>
<a id="schema_NameDefaultFieldOutput_2024_06_14"></a>
<a id="tocSnamedefaultfieldoutput_2024_06_14"></a>
<a id="tocsnamedefaultfieldoutput_2024_06_14"></a>

```json
{
  "type": "name",
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true,
  "isDefault": true,
  "slug": "name",
  "required": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `name`. Used for having 1 booking field for both first name and last name.|
|label|string|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&name=bob`,      the name field will be prefilled with this value and disabled. In case of Booker atom need to pass 'name' to defaultFormValues prop with the desired value e.g. `defaultFormValues={{name: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-fields|
|isDefault|object|true|none|This property is always true because it's a default field|
|slug|string|true|none|none|
|required|boolean|true|none|none|

<h2 id="tocS_LocationDefaultFieldOutput_2024_06_14">LocationDefaultFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemalocationdefaultfieldoutput_2024_06_14"></a>
<a id="schema_LocationDefaultFieldOutput_2024_06_14"></a>
<a id="tocSlocationdefaultfieldoutput_2024_06_14"></a>
<a id="tocslocationdefaultfieldoutput_2024_06_14"></a>

```json
{
  "isDefault": true,
  "slug": "location",
  "type": "radioInput",
  "required": true,
  "hidden": true,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isDefault|object|true|none|This property is always true because it's a default field|
|slug|string|true|none|This booking field is returned only if the event type has more than one location. The purpose of this field is to allow the user to select the location where the event will take place.|
|type|string|true|none|none|
|required|boolean|true|none|none|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|label|string|true|none|none|

<h2 id="tocS_RescheduleReasonDefaultFieldOutput_2024_06_14">RescheduleReasonDefaultFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemareschedulereasondefaultfieldoutput_2024_06_14"></a>
<a id="schema_RescheduleReasonDefaultFieldOutput_2024_06_14"></a>
<a id="tocSreschedulereasondefaultfieldoutput_2024_06_14"></a>
<a id="tocsreschedulereasondefaultfieldoutput_2024_06_14"></a>

```json
{
  "slug": "rescheduleReason",
  "required": true,
  "hidden": true,
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true,
  "isDefault": true,
  "type": "textarea"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|only allowed value for type is `rescheduleReason`|
|required|boolean|false|none|none|
|hidden|boolean|false|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|label|string|false|none|none|
|placeholder|string|false|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&rescheduleReason=busy`,      the reschedule reason field will be prefilled with this value and disabled.|
|isDefault|object|true|none|This property is always true because it's a default field|
|type|string|true|none|none|

<h2 id="tocS_TitleDefaultFieldOutput_2024_06_14">TitleDefaultFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schematitledefaultfieldoutput_2024_06_14"></a>
<a id="schema_TitleDefaultFieldOutput_2024_06_14"></a>
<a id="tocStitledefaultfieldoutput_2024_06_14"></a>
<a id="tocstitledefaultfieldoutput_2024_06_14"></a>

```json
{
  "slug": "title",
  "required": true,
  "hidden": true,
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true,
  "isDefault": true,
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|only allowed value for type is `title`|
|required|boolean|false|none|none|
|hidden|boolean|false|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|label|string|false|none|none|
|placeholder|string|false|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&title=masterclass`,      the title field will be prefilled with this value and disabled.|
|isDefault|object|true|none|This property is always true because it's a default field|
|type|string|true|none|none|

<h2 id="tocS_NotesDefaultFieldOutput_2024_06_14">NotesDefaultFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemanotesdefaultfieldoutput_2024_06_14"></a>
<a id="schema_NotesDefaultFieldOutput_2024_06_14"></a>
<a id="tocSnotesdefaultfieldoutput_2024_06_14"></a>
<a id="tocsnotesdefaultfieldoutput_2024_06_14"></a>

```json
{
  "slug": "notes",
  "required": true,
  "hidden": true,
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true,
  "isDefault": true,
  "type": "textarea"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|only allowed value for type is `notes`|
|required|boolean|false|none|none|
|hidden|boolean|false|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|label|string|false|none|none|
|placeholder|string|false|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&notes=hello`,      the notes field will be prefilled with this value and disabled.|
|isDefault|object|true|none|This property is always true because it's a default field|
|type|string|true|none|none|

<h2 id="tocS_GuestsDefaultFieldOutput_2024_06_14">GuestsDefaultFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaguestsdefaultfieldoutput_2024_06_14"></a>
<a id="schema_GuestsDefaultFieldOutput_2024_06_14"></a>
<a id="tocSguestsdefaultfieldoutput_2024_06_14"></a>
<a id="tocsguestsdefaultfieldoutput_2024_06_14"></a>

```json
{
  "slug": "guests",
  "required": true,
  "hidden": true,
  "label": "string",
  "placeholder": "string",
  "disableOnPrefill": true,
  "isDefault": true,
  "type": "multiemail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|only allowed value for type is `guests`|
|required|boolean|false|none|none|
|hidden|boolean|false|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|label|string|false|none|none|
|placeholder|string|false|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if URL contains query parameter `&guests=lauris@cal.com`,      the guests field will be prefilled with this value and disabled.|
|isDefault|object|true|none|This property is always true because it's a default field|
|type|string|true|none|none|

<h2 id="tocS_AddressFieldOutput_2024_06_14">AddressFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaaddressfieldoutput_2024_06_14"></a>
<a id="schema_AddressFieldOutput_2024_06_14"></a>
<a id="tocSaddressfieldoutput_2024_06_14"></a>
<a id="tocsaddressfieldoutput_2024_06_14"></a>

```json
{
  "type": "address",
  "slug": "some-slug",
  "label": "Please enter your address",
  "required": true,
  "placeholder": "e.g., 1234 Main St",
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `address`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `address` and the URL contains query parameter `&address=1234 Main St, London`,      the address field will be prefilled with this value and disabled.  In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{address: 'mainstreat 10, new york'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_BooleanFieldOutput_2024_06_14">BooleanFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemabooleanfieldoutput_2024_06_14"></a>
<a id="schema_BooleanFieldOutput_2024_06_14"></a>
<a id="tocSbooleanfieldoutput_2024_06_14"></a>
<a id="tocsbooleanfieldoutput_2024_06_14"></a>

```json
{
  "type": "boolean",
  "slug": "some-slug",
  "label": "Agree to terms?",
  "required": true,
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `boolean`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify` and the URL contains query parameter `&notify=true`,      the checkbox will be selected and the checkbox field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{notify: true}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_CheckboxGroupFieldOutput_2024_06_14">CheckboxGroupFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemacheckboxgroupfieldoutput_2024_06_14"></a>
<a id="schema_CheckboxGroupFieldOutput_2024_06_14"></a>
<a id="tocScheckboxgroupfieldoutput_2024_06_14"></a>
<a id="tocscheckboxgroupfieldoutput_2024_06_14"></a>

```json
{
  "type": "checkbox",
  "slug": "some-slug",
  "label": "Select all that apply",
  "required": true,
  "options": [
    "Checkbox 1",
    "Checkbox 2"
  ],
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `checkbox`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|options|[string]|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `notify` and the URL contains query parameter `&notify=true`,      the checkbox will be selected and the checkbox field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{notify: true}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_MultiEmailFieldOutput_2024_06_14">MultiEmailFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemamultiemailfieldoutput_2024_06_14"></a>
<a id="schema_MultiEmailFieldOutput_2024_06_14"></a>
<a id="tocSmultiemailfieldoutput_2024_06_14"></a>
<a id="tocsmultiemailfieldoutput_2024_06_14"></a>

```json
{
  "type": "multiemail",
  "slug": "some-slug",
  "label": "Please enter multiple emails",
  "required": true,
  "placeholder": "e.g., example@example.com",
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `multiemail`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `consultants` and the URL contains query parameter `&consultants=alice@gmail.com&consultants=bob@gmail.com`,      the these emails will be added and none more can be added. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{consultants: ['alice@gmail.com', 'bob@gmail.com']}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_MultiSelectFieldOutput_2024_06_14">MultiSelectFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemamultiselectfieldoutput_2024_06_14"></a>
<a id="schema_MultiSelectFieldOutput_2024_06_14"></a>
<a id="tocSmultiselectfieldoutput_2024_06_14"></a>
<a id="tocsmultiselectfieldoutput_2024_06_14"></a>

```json
{
  "type": "multiselect",
  "slug": "some-slug",
  "label": "Please select multiple options",
  "required": true,
  "options": [
    "Option 1",
    "Option 2"
  ],
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `multiselect`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|options|[string]|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and the URL contains query parameter `&language=en&language=it`,      the 'en' and 'it' will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: ['en', 'it']}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_UrlFieldOutput_2024_06_14">UrlFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaurlfieldoutput_2024_06_14"></a>
<a id="schema_UrlFieldOutput_2024_06_14"></a>
<a id="tocSurlfieldoutput_2024_06_14"></a>
<a id="tocsurlfieldoutput_2024_06_14"></a>

```json
{
  "type": "url",
  "slug": "some-slug",
  "label": "Please enter your text",
  "required": true,
  "placeholder": "e.g., Enter url here",
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `url`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `videourl` and the URL contains query parameter `&videourl=https://youtube.com/abc`the url field will be prefilled with this value and disabled.       In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{videourl: 'https://caltube.com/123'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_NumberFieldOutput_2024_06_14">NumberFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemanumberfieldoutput_2024_06_14"></a>
<a id="schema_NumberFieldOutput_2024_06_14"></a>
<a id="tocSnumberfieldoutput_2024_06_14"></a>
<a id="tocsnumberfieldoutput_2024_06_14"></a>

```json
{
  "type": "number",
  "slug": "some-slug",
  "label": "Please enter a number",
  "required": true,
  "placeholder": "e.g., 100",
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `number`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `calories` and the URL contains query parameter `&calories=3000`,      the number field will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{calories: 3000}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_PhoneFieldOutput_2024_06_14">PhoneFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaphonefieldoutput_2024_06_14"></a>
<a id="schema_PhoneFieldOutput_2024_06_14"></a>
<a id="tocSphonefieldoutput_2024_06_14"></a>
<a id="tocsphonefieldoutput_2024_06_14"></a>

```json
{
  "type": "phone",
  "slug": "some-slug",
  "label": "string",
  "required": true,
  "placeholder": "string",
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `phone`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking. Special slug is `attendeePhoneNumber` - if you create<br>      a phone input field with this slug for organization team event type you can create an organization team event type that can be booked using phone without requiring an email by setting {"type": "email", "required": false, "hidden": true} to the email booking field input in the request body.|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `phone` and the URL contains query parameter `&phone=1234567890`,      the phone field will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{phone: '+37122222222'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_RadioGroupFieldOutput_2024_06_14">RadioGroupFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaradiogroupfieldoutput_2024_06_14"></a>
<a id="schema_RadioGroupFieldOutput_2024_06_14"></a>
<a id="tocSradiogroupfieldoutput_2024_06_14"></a>
<a id="tocsradiogroupfieldoutput_2024_06_14"></a>

```json
{
  "type": "radio",
  "slug": "some-slug",
  "label": "Select one option",
  "required": true,
  "options": [
    "Radio 1",
    "Radio 2"
  ],
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `radio`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|options|[string]|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' radio button will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: 'italian'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_SelectFieldOutput_2024_06_14">SelectFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaselectfieldoutput_2024_06_14"></a>
<a id="schema_SelectFieldOutput_2024_06_14"></a>
<a id="tocSselectfieldoutput_2024_06_14"></a>
<a id="tocsselectfieldoutput_2024_06_14"></a>

```json
{
  "type": "select",
  "slug": "some-slug",
  "label": "Please select an option",
  "required": true,
  "placeholder": "Select...",
  "options": [
    "Option 1",
    "Option 2"
  ],
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `select`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|options|[string]|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `language` and options of this select field are ['english', 'italian'] and the URL contains query parameter `&language=italian`,      the 'italian' will be selected and the select field will be disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{language: 'italian'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_TextAreaFieldOutput_2024_06_14">TextAreaFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schematextareafieldoutput_2024_06_14"></a>
<a id="schema_TextAreaFieldOutput_2024_06_14"></a>
<a id="tocStextareafieldoutput_2024_06_14"></a>
<a id="tocstextareafieldoutput_2024_06_14"></a>

```json
{
  "type": "textarea",
  "slug": "some-slug",
  "label": "Please enter detailed information",
  "required": true,
  "placeholder": "e.g., Detailed description here...",
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `textarea`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `reflection` and the URL contains query parameter `&reflection=Today I shipped a feature`,      the text area will be prefilled with this value and disabled. In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value  e.g. `defaultFormValues={{reflection: 'Today i shipped a feature'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_TextFieldOutput_2024_06_14">TextFieldOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schematextfieldoutput_2024_06_14"></a>
<a id="schema_TextFieldOutput_2024_06_14"></a>
<a id="tocStextfieldoutput_2024_06_14"></a>
<a id="tocstextfieldoutput_2024_06_14"></a>

```json
{
  "type": "text",
  "slug": "some-slug",
  "label": "Please enter your text",
  "required": true,
  "placeholder": "e.g., Enter text here",
  "disableOnPrefill": true,
  "hidden": true,
  "isDefault": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `text`|
|slug|string|true|none|Unique identifier for the field in format `some-slug`. It is used to access response to this booking field during the booking|
|label|string|true|none|none|
|required|boolean|true|none|none|
|placeholder|string|true|none|none|
|disableOnPrefill|boolean|false|none|Disable this booking field if the URL contains query parameter with key equal to the slug and prefill it with the provided value.      For example, if the slug is `friend` and the URL contains query parameter `&friend=bob`,      the text field will be prefilled with this value and disabled.  In case of Booker atom need to pass slug you used for this booking field to defaultFormValues prop with the desired value e.g. `defaultFormValues={{friend: 'bob'}}`. See guide https://cal.com/docs/platform/guides/booking-field|
|hidden|boolean|true|none|If true show under event type settings but don't show this booking field in the Booker. If false show in both.|
|isDefault|object|true|none|This property is always false because it's not default field but custom field|

<h2 id="tocS_BookerActiveBookingsLimitOutput_2024_06_14">BookerActiveBookingsLimitOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemabookeractivebookingslimitoutput_2024_06_14"></a>
<a id="schema_BookerActiveBookingsLimitOutput_2024_06_14"></a>
<a id="tocSbookeractivebookingslimitoutput_2024_06_14"></a>
<a id="tocsbookeractivebookingslimitoutput_2024_06_14"></a>

```json
{
  "maximumActiveBookings": 3,
  "offerReschedule": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximumActiveBookings|number|false|none|The maximum number of active bookings a booker can have for this event type.|
|offerReschedule|boolean|false|none|Whether to offer rescheduling the last active booking to the chosen time slot when limit is reached.|

<h2 id="tocS_DisableCancellingOutput_2024_06_14">DisableCancellingOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemadisablecancellingoutput_2024_06_14"></a>
<a id="schema_DisableCancellingOutput_2024_06_14"></a>
<a id="tocSdisablecancellingoutput_2024_06_14"></a>
<a id="tocsdisablecancellingoutput_2024_06_14"></a>

```json
{
  "disabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|If true, cancelling is always disabled for this event type.|

<h2 id="tocS_DisableReschedulingOutput_2024_06_14">DisableReschedulingOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemadisablereschedulingoutput_2024_06_14"></a>
<a id="schema_DisableReschedulingOutput_2024_06_14"></a>
<a id="tocSdisablereschedulingoutput_2024_06_14"></a>
<a id="tocsdisablereschedulingoutput_2024_06_14"></a>

```json
{
  "disabled": true,
  "minutesBefore": 60
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|If true, rescheduling is always disabled for this event type.|
|minutesBefore|number|false|none|Rescheduling is disabled when less than the specified number of minutes before the meeting.|

<h2 id="tocS_EventTypeOutput_2024_06_14">EventTypeOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypeoutput_2024_06_14"></a>
<a id="schema_EventTypeOutput_2024_06_14"></a>
<a id="tocSeventtypeoutput_2024_06_14"></a>
<a id="tocseventtypeoutput_2024_06_14"></a>

```json
{
  "id": 1,
  "lengthInMinutes": 60,
  "lengthInMinutesOptions": [
    15,
    30,
    60
  ],
  "title": "Learn the secrets of masterchief!",
  "slug": "learn-the-secrets-of-masterchief",
  "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
  "locations": [
    {
      "type": "address",
      "address": "123 Example St, City, Country",
      "public": true
    }
  ],
  "bookingFields": [
    {
      "type": "name",
      "label": "string",
      "placeholder": "string",
      "disableOnPrefill": true,
      "isDefault": true,
      "slug": "name",
      "required": true
    }
  ],
  "disableGuests": true,
  "slotInterval": 60,
  "minimumBookingNotice": 0,
  "beforeEventBuffer": 0,
  "afterEventBuffer": 0,
  "recurrence": {
    "interval": 10,
    "occurrences": 10,
    "frequency": "yearly"
  },
  "metadata": {},
  "price": 0,
  "currency": "string",
  "lockTimeZoneToggleOnBookingPage": true,
  "seatsPerTimeSlot": {},
  "forwardParamsSuccessRedirect": {},
  "successRedirectUrl": {},
  "isInstantEvent": true,
  "seatsShowAvailabilityCount": true,
  "scheduleId": 0,
  "bookingLimitsCount": {},
  "bookerActiveBookingsLimit": {
    "maximumActiveBookings": 3,
    "offerReschedule": true
  },
  "onlyShowFirstAvailableSlot": true,
  "bookingLimitsDuration": {},
  "bookingWindow": [
    {
      "type": "businessDays",
      "value": 5,
      "rolling": true
    }
  ],
  "bookerLayouts": {
    "defaultLayout": "month",
    "enabledLayouts": [
      "month"
    ]
  },
  "confirmationPolicy": {},
  "requiresBookerEmailVerification": true,
  "hideCalendarNotes": true,
  "color": {
    "lightThemeHex": "#292929",
    "darkThemeHex": "#fafafa"
  },
  "seats": {
    "seatsPerTimeSlot": 4,
    "showAttendeeInfo": true,
    "showAvailabilityCount": true
  },
  "offsetStart": 0,
  "customName": "string",
  "destinationCalendar": {
    "integration": "string",
    "externalId": "string"
  },
  "useDestinationCalendarEmail": true,
  "hideCalendarEventDetails": true,
  "hideOrganizerEmail": true,
  "calVideoSettings": {
    "disableRecordingForOrganizer": false,
    "disableRecordingForGuests": false,
    "redirectUrlOnExit": {},
    "enableAutomaticRecordingForOrganizer": false,
    "enableAutomaticTranscription": false,
    "disableTranscriptionForGuests": false,
    "disableTranscriptionForOrganizer": false,
    "sendTranscriptionEmails": true
  },
  "hidden": true,
  "bookingRequiresAuthentication": true,
  "disableCancelling": {
    "disabled": true
  },
  "disableRescheduling": {
    "disabled": true,
    "minutesBefore": 60
  },
  "interfaceLanguage": "string",
  "allowReschedulingPastBookings": true,
  "allowReschedulingCancelledBookings": true,
  "showOptimizedSlots": true,
  "ownerId": 10,
  "users": [
    "string"
  ],
  "bookingUrl": "https://cal.com/john-doe/30min"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|lengthInMinutes|number|true|none|none|
|lengthInMinutesOptions|[number]|false|none|If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.|
|title|string|true|none|none|
|slug|string|true|none|none|
|description|string|true|none|none|
|locations|[[OutputAddressLocation_2024_06_14](#schemaoutputaddresslocation_2024_06_14) \| [OutputLinkLocation_2024_06_14](#schemaoutputlinklocation_2024_06_14) \| [OutputIntegrationLocation_2024_06_14](#schemaoutputintegrationlocation_2024_06_14) \| [OutputPhoneLocation_2024_06_14](#schemaoutputphonelocation_2024_06_14) \| [OutputOrganizersDefaultAppLocation_2024_06_14](#schemaoutputorganizersdefaultapplocation_2024_06_14) \| [OutputUnknownLocation_2024_06_14](#schemaoutputunknownlocation_2024_06_14)]|true|none|none|
|bookingFields|[[NameDefaultFieldOutput_2024_06_14](#schemanamedefaultfieldoutput_2024_06_14) \| [EmailDefaultFieldOutput_2024_06_14](#schemaemaildefaultfieldoutput_2024_06_14) \| [LocationDefaultFieldOutput_2024_06_14](#schemalocationdefaultfieldoutput_2024_06_14) \| [RescheduleReasonDefaultFieldOutput_2024_06_14](#schemareschedulereasondefaultfieldoutput_2024_06_14) \| [TitleDefaultFieldOutput_2024_06_14](#schematitledefaultfieldoutput_2024_06_14) \| [NotesDefaultFieldOutput_2024_06_14](#schemanotesdefaultfieldoutput_2024_06_14) \| [GuestsDefaultFieldOutput_2024_06_14](#schemaguestsdefaultfieldoutput_2024_06_14) \| [PhoneFieldOutput_2024_06_14](#schemaphonefieldoutput_2024_06_14) \| [AddressFieldOutput_2024_06_14](#schemaaddressfieldoutput_2024_06_14) \| [TextFieldOutput_2024_06_14](#schematextfieldoutput_2024_06_14) \| [NumberFieldOutput_2024_06_14](#schemanumberfieldoutput_2024_06_14) \| [TextAreaFieldOutput_2024_06_14](#schematextareafieldoutput_2024_06_14) \| [SelectFieldOutput_2024_06_14](#schemaselectfieldoutput_2024_06_14) \| [MultiSelectFieldOutput_2024_06_14](#schemamultiselectfieldoutput_2024_06_14) \| [MultiEmailFieldOutput_2024_06_14](#schemamultiemailfieldoutput_2024_06_14) \| [CheckboxGroupFieldOutput_2024_06_14](#schemacheckboxgroupfieldoutput_2024_06_14) \| [RadioGroupFieldOutput_2024_06_14](#schemaradiogroupfieldoutput_2024_06_14) \| [BooleanFieldOutput_2024_06_14](#schemabooleanfieldoutput_2024_06_14) \| [UrlFieldOutput_2024_06_14](#schemaurlfieldoutput_2024_06_14)]|true|none|none|
|disableGuests|boolean|true|none|none|
|slotInterval|object \| null|false|none|none|
|minimumBookingNotice|number|false|none|none|
|beforeEventBuffer|number|false|none|none|
|afterEventBuffer|number|false|none|none|
|recurrence|object \| null|true|none|none|
|metadata|object|true|none|none|
|price|number|true|none|none|
|currency|string|true|none|none|
|lockTimeZoneToggleOnBookingPage|boolean|true|none|none|
|seatsPerTimeSlot|object \| null|false|none|none|
|forwardParamsSuccessRedirect|object \| null|true|none|none|
|successRedirectUrl|object \| null|true|none|none|
|isInstantEvent|boolean|true|none|none|
|seatsShowAvailabilityCount|boolean \| null|false|none|none|
|scheduleId|number \| null|true|none|none|
|bookingLimitsCount|object|false|none|none|
|bookerActiveBookingsLimit|[BookerActiveBookingsLimitOutput_2024_06_14](#schemabookeractivebookingslimitoutput_2024_06_14)|false|none|none|
|onlyShowFirstAvailableSlot|boolean|false|none|none|
|bookingLimitsDuration|object|false|none|none|
|bookingWindow|[[BusinessDaysWindow_2024_06_14](#schemabusinessdayswindow_2024_06_14) \| [CalendarDaysWindow_2024_06_14](#schemacalendardayswindow_2024_06_14) \| [RangeWindow_2024_06_14](#schemarangewindow_2024_06_14)]|false|none|Limit how far in the future this event can be booked|
|bookerLayouts|[BookerLayouts_2024_06_14](#schemabookerlayouts_2024_06_14)|false|none|none|
|confirmationPolicy|object|false|none|none|
|requiresBookerEmailVerification|boolean|false|none|none|
|hideCalendarNotes|boolean|false|none|none|
|color|[EventTypeColor_2024_06_14](#schemaeventtypecolor_2024_06_14)|false|none|none|
|seats|[Seats_2024_06_14](#schemaseats_2024_06_14)|false|none|none|
|offsetStart|number|false|none|none|
|customName|string|false|none|none|
|destinationCalendar|[DestinationCalendar_2024_06_14](#schemadestinationcalendar_2024_06_14)|false|none|none|
|useDestinationCalendarEmail|boolean|false|none|none|
|hideCalendarEventDetails|boolean|false|none|none|
|hideOrganizerEmail|boolean|false|none|Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events|
|calVideoSettings|object|false|none|Cal video settings for the event type|
|hidden|boolean|true|none|none|
|bookingRequiresAuthentication|boolean|true|none|Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.|
|disableCancelling|object|false|none|Settings for disabling cancelling of this event type.|
|disableRescheduling|object|false|none|Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.|
|interfaceLanguage|string \| null|false|none|Set preferred language for the booking interface.|
|allowReschedulingPastBookings|boolean|false|none|Enabling this option allows for past events to be rescheduled.|
|allowReschedulingCancelledBookings|boolean \| null|false|none|When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.|
|showOptimizedSlots|boolean \| null|false|none|Arrange time slots to optimize availability.|
|ownerId|number|true|none|none|
|users|[string]|true|none|none|
|bookingUrl|string(uri)|true|none|Full URL to the booking page for this event type|

<h2 id="tocS_CreateEventTypeOutput_2024_06_14">CreateEventTypeOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventtypeoutput_2024_06_14"></a>
<a id="schema_CreateEventTypeOutput_2024_06_14"></a>
<a id="tocScreateeventtypeoutput_2024_06_14"></a>
<a id="tocscreateeventtypeoutput_2024_06_14"></a>

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "lengthInMinutes": 60,
    "lengthInMinutesOptions": [
      15,
      30,
      60
    ],
    "title": "Learn the secrets of masterchief!",
    "slug": "learn-the-secrets-of-masterchief",
    "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
    "locations": [
      {
        "type": "address",
        "address": "123 Example St, City, Country",
        "public": true
      }
    ],
    "bookingFields": [
      {
        "type": "name",
        "label": "string",
        "placeholder": "string",
        "disableOnPrefill": true,
        "isDefault": true,
        "slug": "name",
        "required": true
      }
    ],
    "disableGuests": true,
    "slotInterval": 60,
    "minimumBookingNotice": 0,
    "beforeEventBuffer": 0,
    "afterEventBuffer": 0,
    "recurrence": {
      "interval": 10,
      "occurrences": 10,
      "frequency": "yearly"
    },
    "metadata": {},
    "price": 0,
    "currency": "string",
    "lockTimeZoneToggleOnBookingPage": true,
    "seatsPerTimeSlot": {},
    "forwardParamsSuccessRedirect": {},
    "successRedirectUrl": {},
    "isInstantEvent": true,
    "seatsShowAvailabilityCount": true,
    "scheduleId": 0,
    "bookingLimitsCount": {},
    "bookerActiveBookingsLimit": {
      "maximumActiveBookings": 3,
      "offerReschedule": true
    },
    "onlyShowFirstAvailableSlot": true,
    "bookingLimitsDuration": {},
    "bookingWindow": [
      {
        "type": "businessDays",
        "value": 5,
        "rolling": true
      }
    ],
    "bookerLayouts": {
      "defaultLayout": "month",
      "enabledLayouts": [
        "month"
      ]
    },
    "confirmationPolicy": {},
    "requiresBookerEmailVerification": true,
    "hideCalendarNotes": true,
    "color": {
      "lightThemeHex": "#292929",
      "darkThemeHex": "#fafafa"
    },
    "seats": {
      "seatsPerTimeSlot": 4,
      "showAttendeeInfo": true,
      "showAvailabilityCount": true
    },
    "offsetStart": 0,
    "customName": "string",
    "destinationCalendar": {
      "integration": "string",
      "externalId": "string"
    },
    "useDestinationCalendarEmail": true,
    "hideCalendarEventDetails": true,
    "hideOrganizerEmail": true,
    "calVideoSettings": {
      "disableRecordingForOrganizer": false,
      "disableRecordingForGuests": false,
      "redirectUrlOnExit": {},
      "enableAutomaticRecordingForOrganizer": false,
      "enableAutomaticTranscription": false,
      "disableTranscriptionForGuests": false,
      "disableTranscriptionForOrganizer": false,
      "sendTranscriptionEmails": true
    },
    "hidden": true,
    "bookingRequiresAuthentication": true,
    "disableCancelling": {
      "disabled": true
    },
    "disableRescheduling": {
      "disabled": true,
      "minutesBefore": 60
    },
    "interfaceLanguage": "string",
    "allowReschedulingPastBookings": true,
    "allowReschedulingCancelledBookings": true,
    "showOptimizedSlots": true,
    "ownerId": 10,
    "users": [
      "string"
    ],
    "bookingUrl": "https://cal.com/john-doe/30min"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[EventTypeOutput_2024_06_14](#schemaeventtypeoutput_2024_06_14)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_EventTypeTeam">EventTypeTeam</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypeteam"></a>
<a id="schema_EventTypeTeam"></a>
<a id="tocSeventtypeteam"></a>
<a id="tocseventtypeteam"></a>

```json
{
  "id": 0,
  "slug": "string",
  "bannerUrl": "string",
  "name": "string",
  "logoUrl": "string",
  "weekStart": "string",
  "brandColor": "string",
  "darkBrandColor": "string",
  "theme": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|slug|string|true|none|none|
|bannerUrl|string|true|none|none|
|name|string|true|none|none|
|logoUrl|string|true|none|none|
|weekStart|string|true|none|none|
|brandColor|string|true|none|none|
|darkBrandColor|string|true|none|none|
|theme|string|true|none|none|

<h2 id="tocS_TeamEventTypeOutput_2024_06_14">TeamEventTypeOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemateameventtypeoutput_2024_06_14"></a>
<a id="schema_TeamEventTypeOutput_2024_06_14"></a>
<a id="tocSteameventtypeoutput_2024_06_14"></a>
<a id="tocsteameventtypeoutput_2024_06_14"></a>

```json
{
  "id": 1,
  "lengthInMinutes": 60,
  "lengthInMinutesOptions": [
    15,
    30,
    60
  ],
  "title": "Learn the secrets of masterchief!",
  "slug": "learn-the-secrets-of-masterchief",
  "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
  "locations": [
    {
      "type": "address",
      "address": "123 Example St, City, Country",
      "public": true
    }
  ],
  "bookingFields": [
    {
      "type": "name",
      "label": "string",
      "placeholder": "string",
      "disableOnPrefill": true,
      "isDefault": true,
      "slug": "name",
      "required": true
    }
  ],
  "disableGuests": true,
  "slotInterval": 60,
  "minimumBookingNotice": 0,
  "beforeEventBuffer": 0,
  "afterEventBuffer": 0,
  "recurrence": {
    "interval": 10,
    "occurrences": 10,
    "frequency": "yearly"
  },
  "metadata": {},
  "price": 0,
  "currency": "string",
  "lockTimeZoneToggleOnBookingPage": true,
  "seatsPerTimeSlot": {},
  "forwardParamsSuccessRedirect": {},
  "successRedirectUrl": {},
  "isInstantEvent": true,
  "seatsShowAvailabilityCount": true,
  "scheduleId": 0,
  "bookingLimitsCount": {},
  "bookerActiveBookingsLimit": {
    "maximumActiveBookings": 3,
    "offerReschedule": true
  },
  "onlyShowFirstAvailableSlot": true,
  "bookingLimitsDuration": {},
  "bookingWindow": [
    {
      "type": "businessDays",
      "value": 5,
      "rolling": true
    }
  ],
  "bookerLayouts": {
    "defaultLayout": "month",
    "enabledLayouts": [
      "month"
    ]
  },
  "confirmationPolicy": {},
  "requiresBookerEmailVerification": true,
  "hideCalendarNotes": true,
  "color": {
    "lightThemeHex": "#292929",
    "darkThemeHex": "#fafafa"
  },
  "seats": {
    "seatsPerTimeSlot": 4,
    "showAttendeeInfo": true,
    "showAvailabilityCount": true
  },
  "offsetStart": 0,
  "customName": "string",
  "destinationCalendar": {
    "integration": "string",
    "externalId": "string"
  },
  "useDestinationCalendarEmail": true,
  "hideCalendarEventDetails": true,
  "hideOrganizerEmail": true,
  "calVideoSettings": {
    "disableRecordingForOrganizer": false,
    "disableRecordingForGuests": false,
    "redirectUrlOnExit": {},
    "enableAutomaticRecordingForOrganizer": false,
    "enableAutomaticTranscription": false,
    "disableTranscriptionForGuests": false,
    "disableTranscriptionForOrganizer": false,
    "sendTranscriptionEmails": true
  },
  "hidden": true,
  "bookingRequiresAuthentication": true,
  "disableCancelling": {
    "disabled": true
  },
  "disableRescheduling": {
    "disabled": true,
    "minutesBefore": 60
  },
  "interfaceLanguage": "string",
  "allowReschedulingPastBookings": true,
  "allowReschedulingCancelledBookings": true,
  "showOptimizedSlots": true,
  "teamId": 0,
  "ownerId": {},
  "parentEventTypeId": {},
  "hosts": [
    "string"
  ],
  "assignAllTeamMembers": true,
  "schedulingType": "roundRobin",
  "team": {
    "id": 0,
    "slug": "string",
    "bannerUrl": "string",
    "name": "string",
    "logoUrl": "string",
    "weekStart": "string",
    "brandColor": "string",
    "darkBrandColor": "string",
    "theme": "string"
  },
  "emailSettings": {
    "disableEmailsToAttendees": true,
    "disableEmailsToHosts": true
  },
  "rescheduleWithSameRoundRobinHost": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|lengthInMinutes|number|true|none|none|
|lengthInMinutesOptions|[number]|false|none|If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.|
|title|string|true|none|none|
|slug|string|true|none|none|
|description|string|true|none|none|
|locations|[[OutputAddressLocation_2024_06_14](#schemaoutputaddresslocation_2024_06_14) \| [OutputLinkLocation_2024_06_14](#schemaoutputlinklocation_2024_06_14) \| [OutputIntegrationLocation_2024_06_14](#schemaoutputintegrationlocation_2024_06_14) \| [OutputPhoneLocation_2024_06_14](#schemaoutputphonelocation_2024_06_14) \| [OutputOrganizersDefaultAppLocation_2024_06_14](#schemaoutputorganizersdefaultapplocation_2024_06_14) \| [OutputUnknownLocation_2024_06_14](#schemaoutputunknownlocation_2024_06_14)]|true|none|none|
|bookingFields|[[NameDefaultFieldOutput_2024_06_14](#schemanamedefaultfieldoutput_2024_06_14) \| [EmailDefaultFieldOutput_2024_06_14](#schemaemaildefaultfieldoutput_2024_06_14) \| [LocationDefaultFieldOutput_2024_06_14](#schemalocationdefaultfieldoutput_2024_06_14) \| [RescheduleReasonDefaultFieldOutput_2024_06_14](#schemareschedulereasondefaultfieldoutput_2024_06_14) \| [TitleDefaultFieldOutput_2024_06_14](#schematitledefaultfieldoutput_2024_06_14) \| [NotesDefaultFieldOutput_2024_06_14](#schemanotesdefaultfieldoutput_2024_06_14) \| [GuestsDefaultFieldOutput_2024_06_14](#schemaguestsdefaultfieldoutput_2024_06_14) \| [PhoneFieldOutput_2024_06_14](#schemaphonefieldoutput_2024_06_14) \| [AddressFieldOutput_2024_06_14](#schemaaddressfieldoutput_2024_06_14) \| [TextFieldOutput_2024_06_14](#schematextfieldoutput_2024_06_14) \| [NumberFieldOutput_2024_06_14](#schemanumberfieldoutput_2024_06_14) \| [TextAreaFieldOutput_2024_06_14](#schematextareafieldoutput_2024_06_14) \| [SelectFieldOutput_2024_06_14](#schemaselectfieldoutput_2024_06_14) \| [MultiSelectFieldOutput_2024_06_14](#schemamultiselectfieldoutput_2024_06_14) \| [MultiEmailFieldOutput_2024_06_14](#schemamultiemailfieldoutput_2024_06_14) \| [CheckboxGroupFieldOutput_2024_06_14](#schemacheckboxgroupfieldoutput_2024_06_14) \| [RadioGroupFieldOutput_2024_06_14](#schemaradiogroupfieldoutput_2024_06_14) \| [BooleanFieldOutput_2024_06_14](#schemabooleanfieldoutput_2024_06_14) \| [UrlFieldOutput_2024_06_14](#schemaurlfieldoutput_2024_06_14)]|true|none|none|
|disableGuests|boolean|true|none|none|
|slotInterval|object \| null|false|none|none|
|minimumBookingNotice|number|false|none|none|
|beforeEventBuffer|number|false|none|none|
|afterEventBuffer|number|false|none|none|
|recurrence|object \| null|true|none|none|
|metadata|object|true|none|none|
|price|number|true|none|none|
|currency|string|true|none|none|
|lockTimeZoneToggleOnBookingPage|boolean|true|none|none|
|seatsPerTimeSlot|object \| null|false|none|none|
|forwardParamsSuccessRedirect|object \| null|true|none|none|
|successRedirectUrl|object \| null|true|none|none|
|isInstantEvent|boolean|true|none|none|
|seatsShowAvailabilityCount|boolean \| null|false|none|none|
|scheduleId|number \| null|true|none|none|
|bookingLimitsCount|object|false|none|none|
|bookerActiveBookingsLimit|[BookerActiveBookingsLimitOutput_2024_06_14](#schemabookeractivebookingslimitoutput_2024_06_14)|false|none|none|
|onlyShowFirstAvailableSlot|boolean|false|none|none|
|bookingLimitsDuration|object|false|none|none|
|bookingWindow|[[BusinessDaysWindow_2024_06_14](#schemabusinessdayswindow_2024_06_14) \| [CalendarDaysWindow_2024_06_14](#schemacalendardayswindow_2024_06_14) \| [RangeWindow_2024_06_14](#schemarangewindow_2024_06_14)]|false|none|Limit how far in the future this event can be booked|
|bookerLayouts|[BookerLayouts_2024_06_14](#schemabookerlayouts_2024_06_14)|false|none|none|
|confirmationPolicy|object|false|none|none|
|requiresBookerEmailVerification|boolean|false|none|none|
|hideCalendarNotes|boolean|false|none|none|
|color|[EventTypeColor_2024_06_14](#schemaeventtypecolor_2024_06_14)|false|none|none|
|seats|[Seats_2024_06_14](#schemaseats_2024_06_14)|false|none|none|
|offsetStart|number|false|none|none|
|customName|string|false|none|none|
|destinationCalendar|[DestinationCalendar_2024_06_14](#schemadestinationcalendar_2024_06_14)|false|none|none|
|useDestinationCalendarEmail|boolean|false|none|none|
|hideCalendarEventDetails|boolean|false|none|none|
|hideOrganizerEmail|boolean|false|none|Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events|
|calVideoSettings|object|false|none|Cal video settings for the event type|
|hidden|boolean|true|none|none|
|bookingRequiresAuthentication|boolean|true|none|Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.|
|disableCancelling|object|false|none|Settings for disabling cancelling of this event type.|
|disableRescheduling|object|false|none|Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.|
|interfaceLanguage|string \| null|false|none|Set preferred language for the booking interface.|
|allowReschedulingPastBookings|boolean|false|none|Enabling this option allows for past events to be rescheduled.|
|allowReschedulingCancelledBookings|boolean \| null|false|none|When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.|
|showOptimizedSlots|boolean \| null|false|none|Arrange time slots to optimize availability.|
|teamId|number|true|none|none|
|ownerId|object \| null|false|none|none|
|parentEventTypeId|object \| null|false|none|For managed event types, parent event type is the event type that this event type is based on|
|hosts|[string]|true|none|none|
|assignAllTeamMembers|boolean|false|none|none|
|schedulingType|string|true|none|none|
|team|[EventTypeTeam](#schemaeventtypeteam)|true|none|none|
|emailSettings|object|false|none|Email settings for this event type. Only available for organization team event types.|
|rescheduleWithSameRoundRobinHost|boolean|false|none|Rescheduled events will be assigned to the same host as initially scheduled.|

#### Enumerated Values

|Property|Value|
|---|---|
|schedulingType|roundRobin|
|schedulingType|collective|
|schedulingType|managed|

<h2 id="tocS_GetEventTypeOutput_2024_06_14">GetEventTypeOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemageteventtypeoutput_2024_06_14"></a>
<a id="schema_GetEventTypeOutput_2024_06_14"></a>
<a id="tocSgeteventtypeoutput_2024_06_14"></a>
<a id="tocsgeteventtypeoutput_2024_06_14"></a>

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "lengthInMinutes": 60,
    "lengthInMinutesOptions": [
      15,
      30,
      60
    ],
    "title": "Learn the secrets of masterchief!",
    "slug": "learn-the-secrets-of-masterchief",
    "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
    "locations": [
      {
        "type": "address",
        "address": "123 Example St, City, Country",
        "public": true
      }
    ],
    "bookingFields": [
      {
        "type": "name",
        "label": "string",
        "placeholder": "string",
        "disableOnPrefill": true,
        "isDefault": true,
        "slug": "name",
        "required": true
      }
    ],
    "disableGuests": true,
    "slotInterval": 60,
    "minimumBookingNotice": 0,
    "beforeEventBuffer": 0,
    "afterEventBuffer": 0,
    "recurrence": {
      "interval": 10,
      "occurrences": 10,
      "frequency": "yearly"
    },
    "metadata": {},
    "price": 0,
    "currency": "string",
    "lockTimeZoneToggleOnBookingPage": true,
    "seatsPerTimeSlot": {},
    "forwardParamsSuccessRedirect": {},
    "successRedirectUrl": {},
    "isInstantEvent": true,
    "seatsShowAvailabilityCount": true,
    "scheduleId": 0,
    "bookingLimitsCount": {},
    "bookerActiveBookingsLimit": {
      "maximumActiveBookings": 3,
      "offerReschedule": true
    },
    "onlyShowFirstAvailableSlot": true,
    "bookingLimitsDuration": {},
    "bookingWindow": [
      {
        "type": "businessDays",
        "value": 5,
        "rolling": true
      }
    ],
    "bookerLayouts": {
      "defaultLayout": "month",
      "enabledLayouts": [
        "month"
      ]
    },
    "confirmationPolicy": {},
    "requiresBookerEmailVerification": true,
    "hideCalendarNotes": true,
    "color": {
      "lightThemeHex": "#292929",
      "darkThemeHex": "#fafafa"
    },
    "seats": {
      "seatsPerTimeSlot": 4,
      "showAttendeeInfo": true,
      "showAvailabilityCount": true
    },
    "offsetStart": 0,
    "customName": "string",
    "destinationCalendar": {
      "integration": "string",
      "externalId": "string"
    },
    "useDestinationCalendarEmail": true,
    "hideCalendarEventDetails": true,
    "hideOrganizerEmail": true,
    "calVideoSettings": {
      "disableRecordingForOrganizer": false,
      "disableRecordingForGuests": false,
      "redirectUrlOnExit": {},
      "enableAutomaticRecordingForOrganizer": false,
      "enableAutomaticTranscription": false,
      "disableTranscriptionForGuests": false,
      "disableTranscriptionForOrganizer": false,
      "sendTranscriptionEmails": true
    },
    "hidden": true,
    "bookingRequiresAuthentication": true,
    "disableCancelling": {
      "disabled": true
    },
    "disableRescheduling": {
      "disabled": true,
      "minutesBefore": 60
    },
    "interfaceLanguage": "string",
    "allowReschedulingPastBookings": true,
    "allowReschedulingCancelledBookings": true,
    "showOptimizedSlots": true,
    "ownerId": 10,
    "users": [
      "string"
    ],
    "bookingUrl": "https://cal.com/john-doe/30min"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[EventTypeOutput_2024_06_14](#schemaeventtypeoutput_2024_06_14) \| [TeamEventTypeOutput_2024_06_14](#schemateameventtypeoutput_2024_06_14)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetEventTypesOutput_2024_06_14">GetEventTypesOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemageteventtypesoutput_2024_06_14"></a>
<a id="schema_GetEventTypesOutput_2024_06_14"></a>
<a id="tocSgeteventtypesoutput_2024_06_14"></a>
<a id="tocsgeteventtypesoutput_2024_06_14"></a>

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "lengthInMinutes": 60,
      "lengthInMinutesOptions": [
        15,
        30,
        60
      ],
      "title": "Learn the secrets of masterchief!",
      "slug": "learn-the-secrets-of-masterchief",
      "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
      "locations": [
        {
          "type": "address",
          "address": "123 Example St, City, Country",
          "public": true
        }
      ],
      "bookingFields": [
        {
          "type": "name",
          "label": "string",
          "placeholder": "string",
          "disableOnPrefill": true,
          "isDefault": true,
          "slug": "name",
          "required": true
        }
      ],
      "disableGuests": true,
      "slotInterval": 60,
      "minimumBookingNotice": 0,
      "beforeEventBuffer": 0,
      "afterEventBuffer": 0,
      "recurrence": {
        "interval": 10,
        "occurrences": 10,
        "frequency": "yearly"
      },
      "metadata": {},
      "price": 0,
      "currency": "string",
      "lockTimeZoneToggleOnBookingPage": true,
      "seatsPerTimeSlot": {},
      "forwardParamsSuccessRedirect": {},
      "successRedirectUrl": {},
      "isInstantEvent": true,
      "seatsShowAvailabilityCount": true,
      "scheduleId": 0,
      "bookingLimitsCount": {},
      "bookerActiveBookingsLimit": {
        "maximumActiveBookings": 3,
        "offerReschedule": true
      },
      "onlyShowFirstAvailableSlot": true,
      "bookingLimitsDuration": {},
      "bookingWindow": [
        {
          "type": "businessDays",
          "value": 5,
          "rolling": true
        }
      ],
      "bookerLayouts": {
        "defaultLayout": "month",
        "enabledLayouts": [
          "month"
        ]
      },
      "confirmationPolicy": {},
      "requiresBookerEmailVerification": true,
      "hideCalendarNotes": true,
      "color": {
        "lightThemeHex": "#292929",
        "darkThemeHex": "#fafafa"
      },
      "seats": {
        "seatsPerTimeSlot": 4,
        "showAttendeeInfo": true,
        "showAvailabilityCount": true
      },
      "offsetStart": 0,
      "customName": "string",
      "destinationCalendar": {
        "integration": "string",
        "externalId": "string"
      },
      "useDestinationCalendarEmail": true,
      "hideCalendarEventDetails": true,
      "hideOrganizerEmail": true,
      "calVideoSettings": {
        "disableRecordingForOrganizer": false,
        "disableRecordingForGuests": false,
        "redirectUrlOnExit": {},
        "enableAutomaticRecordingForOrganizer": false,
        "enableAutomaticTranscription": false,
        "disableTranscriptionForGuests": false,
        "disableTranscriptionForOrganizer": false,
        "sendTranscriptionEmails": true
      },
      "hidden": true,
      "bookingRequiresAuthentication": true,
      "disableCancelling": {
        "disabled": true
      },
      "disableRescheduling": {
        "disabled": true,
        "minutesBefore": 60
      },
      "interfaceLanguage": "string",
      "allowReschedulingPastBookings": true,
      "allowReschedulingCancelledBookings": true,
      "showOptimizedSlots": true,
      "ownerId": 10,
      "users": [
        "string"
      ],
      "bookingUrl": "https://cal.com/john-doe/30min"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[EventTypeOutput_2024_06_14](#schemaeventtypeoutput_2024_06_14)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UpdateEventTypeInput_2024_06_14">UpdateEventTypeInput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventtypeinput_2024_06_14"></a>
<a id="schema_UpdateEventTypeInput_2024_06_14"></a>
<a id="tocSupdateeventtypeinput_2024_06_14"></a>
<a id="tocsupdateeventtypeinput_2024_06_14"></a>

```json
{
  "lengthInMinutes": 60,
  "lengthInMinutesOptions": [
    15,
    30,
    60
  ],
  "title": "Learn the secrets of masterchief!",
  "slug": "learn-the-secrets-of-masterchief",
  "description": "Discover the culinary wonders of the Argentina by making the best flan ever!",
  "bookingFields": [
    {
      "type": "name",
      "label": "string",
      "placeholder": "string",
      "disableOnPrefill": true
    }
  ],
  "disableGuests": true,
  "slotInterval": 0,
  "minimumBookingNotice": 0,
  "beforeEventBuffer": 0,
  "afterEventBuffer": 0,
  "scheduleId": 0,
  "bookingLimitsCount": {
    "day": 1,
    "week": 2,
    "month": 3,
    "year": 4,
    "disabled": false
  },
  "bookerActiveBookingsLimit": {
    "maximumActiveBookings": 3,
    "offerReschedule": true
  },
  "onlyShowFirstAvailableSlot": true,
  "bookingLimitsDuration": {
    "day": 60,
    "week": 120,
    "month": 180,
    "year": 240
  },
  "bookingWindow": {
    "type": "businessDays",
    "value": 5,
    "rolling": true
  },
  "offsetStart": 0,
  "bookerLayouts": {
    "defaultLayout": "month",
    "enabledLayouts": [
      "month"
    ]
  },
  "confirmationPolicy": {
    "type": "always",
    "noticeThreshold": {
      "unit": "minutes",
      "count": 30
    },
    "blockUnconfirmedBookingsInBooker": true
  },
  "recurrence": {
    "interval": 10,
    "occurrences": 10,
    "frequency": "yearly"
  },
  "requiresBookerEmailVerification": true,
  "hideCalendarNotes": true,
  "lockTimeZoneToggleOnBookingPage": true,
  "color": {
    "lightThemeHex": "#292929",
    "darkThemeHex": "#fafafa"
  },
  "seats": {
    "seatsPerTimeSlot": 4,
    "showAttendeeInfo": true,
    "showAvailabilityCount": true
  },
  "customName": "{Event type title} between {Organiser} and {Scheduler}",
  "destinationCalendar": {
    "integration": "string",
    "externalId": "string"
  },
  "useDestinationCalendarEmail": true,
  "hideCalendarEventDetails": true,
  "successRedirectUrl": "https://masterchief.com/argentina/flan/video/9129412",
  "hideOrganizerEmail": true,
  "calVideoSettings": {
    "disableRecordingForOrganizer": false,
    "disableRecordingForGuests": false,
    "redirectUrlOnExit": {},
    "enableAutomaticRecordingForOrganizer": false,
    "enableAutomaticTranscription": false,
    "disableTranscriptionForGuests": false,
    "disableTranscriptionForOrganizer": false,
    "sendTranscriptionEmails": true
  },
  "hidden": true,
  "bookingRequiresAuthentication": false,
  "disableCancelling": {
    "disabled": true
  },
  "disableRescheduling": {
    "disabled": false,
    "minutesBefore": 60
  },
  "interfaceLanguage": "",
  "allowReschedulingPastBookings": false,
  "allowReschedulingCancelledBookings": false,
  "showOptimizedSlots": false,
  "locations": [
    {
      "type": "address",
      "address": "123 Example St, City, Country",
      "public": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lengthInMinutes|number|false|none|none|
|lengthInMinutesOptions|[string]|false|none|If you want that user can choose between different lengths of the event you can specify them here. Must include the provided `lengthInMinutes`.|
|title|string|false|none|none|
|slug|string|false|none|none|
|description|string|false|none|none|
|bookingFields|[[NameDefaultFieldInput_2024_06_14](#schemanamedefaultfieldinput_2024_06_14) \| [EmailDefaultFieldInput_2024_06_14](#schemaemaildefaultfieldinput_2024_06_14) \| [TitleDefaultFieldInput_2024_06_14](#schematitledefaultfieldinput_2024_06_14) \| [LocationDefaultFieldInput_2024_06_14](#schemalocationdefaultfieldinput_2024_06_14) \| [NotesDefaultFieldInput_2024_06_14](#schemanotesdefaultfieldinput_2024_06_14) \| [GuestsDefaultFieldInput_2024_06_14](#schemaguestsdefaultfieldinput_2024_06_14) \| [RescheduleReasonDefaultFieldInput_2024_06_14](#schemareschedulereasondefaultfieldinput_2024_06_14) \| [PhoneFieldInput_2024_06_14](#schemaphonefieldinput_2024_06_14) \| [AddressFieldInput_2024_06_14](#schemaaddressfieldinput_2024_06_14) \| [TextFieldInput_2024_06_14](#schematextfieldinput_2024_06_14) \| [NumberFieldInput_2024_06_14](#schemanumberfieldinput_2024_06_14) \| [TextAreaFieldInput_2024_06_14](#schematextareafieldinput_2024_06_14) \| [SelectFieldInput_2024_06_14](#schemaselectfieldinput_2024_06_14) \| [MultiSelectFieldInput_2024_06_14](#schemamultiselectfieldinput_2024_06_14) \| [MultiEmailFieldInput_2024_06_14](#schemamultiemailfieldinput_2024_06_14) \| [CheckboxGroupFieldInput_2024_06_14](#schemacheckboxgroupfieldinput_2024_06_14) \| [RadioGroupFieldInput_2024_06_14](#schemaradiogroupfieldinput_2024_06_14) \| [BooleanFieldInput_2024_06_14](#schemabooleanfieldinput_2024_06_14)]|false|none|Complete set of booking form fields. This array replaces all existing booking fields. To modify existing fields, first fetch the current event type, then include all desired fields in this array. Sending only one field will remove all other custom fields, keeping only default fields plus the provided one.|
|disableGuests|boolean|false|none|If true, person booking this event can't add guests via their emails.|
|slotInterval|number|false|none|Number representing length of each slot when event is booked. By default it equal length of the event type.<br>      If event length is 60 minutes then we would have slots 9AM, 10AM, 11AM etc. but if it was changed to 30 minutes then<br>      we would have slots 9AM, 9:30AM, 10AM, 10:30AM etc. as the available times to book the 60 minute event.|
|minimumBookingNotice|number|false|none|Minimum number of minutes before the event that a booking can be made.|
|beforeEventBuffer|number|false|none|Extra time automatically blocked on your calendar before a meeting starts. This gives you time to prepare, review notes, or transition from your previous activity.|
|afterEventBuffer|number|false|none|Extra time automatically blocked on your calendar after a meeting ends. This gives you time to wrap up, add notes, or decompress before your next commitment.|
|scheduleId|number|false|none|If you want that this event has different schedule than user's default one you can specify it here.|
|bookingLimitsCount|[BaseBookingLimitsCount_2024_06_14](#schemabasebookinglimitscount_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Limit how many times this event can be booked|
|bookerActiveBookingsLimit|[BookerActiveBookingsLimit_2024_06_14](#schemabookeractivebookingslimit_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Limit the number of active bookings a booker can make for this event type.|
|onlyShowFirstAvailableSlot|boolean|false|none|This will limit your availability for this event type to one slot per day, scheduled at the earliest available time.|
|bookingLimitsDuration|[BaseBookingLimitsDuration_2024_06_14](#schemabasebookinglimitsduration_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Limit total amount of time that this event can be booked|
|bookingWindow|[BusinessDaysWindow_2024_06_14](#schemabusinessdayswindow_2024_06_14) \| [CalendarDaysWindow_2024_06_14](#schemacalendardayswindow_2024_06_14) \| [RangeWindow_2024_06_14](#schemarangewindow_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Limit how far in the future this event can be booked|
|offsetStart|number|false|none|Offset timeslots shown to bookers by a specified number of minutes|
|bookerLayouts|object|false|none|Should booker have week, month or column view. Specify default layout and enabled layouts user can pick.|
|confirmationPolicy|[BaseConfirmationPolicy_2024_06_14](#schemabaseconfirmationpolicy_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Specify how the booking needs to be manually confirmed before it is pushed to the integrations and a confirmation mail is sent.|
|recurrence|[Recurrence_2024_06_14](#schemarecurrence_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Create a recurring event type.|
|requiresBookerEmailVerification|boolean|false|none|none|
|hideCalendarNotes|boolean|false|none|none|
|lockTimeZoneToggleOnBookingPage|boolean|false|none|none|
|color|[EventTypeColor_2024_06_14](#schemaeventtypecolor_2024_06_14)|false|none|none|
|seats|[Seats_2024_06_14](#schemaseats_2024_06_14) \| [Disabled_2024_06_14](#schemadisabled_2024_06_14)|false|none|Create an event type with multiple seats.|
|customName|string|false|none|Customizable event name with valid variables:<br>      {Event type title}, {Organiser}, {Scheduler}, {Location}, {Organiser first name},<br>      {Scheduler first name}, {Scheduler last name}, {Event duration}, {LOCATION},<br>      {HOST/ATTENDEE}, {HOST}, {ATTENDEE}, {USER}|
|destinationCalendar|[DestinationCalendar_2024_06_14](#schemadestinationcalendar_2024_06_14)|false|none|none|
|useDestinationCalendarEmail|boolean|false|none|none|
|hideCalendarEventDetails|boolean|false|none|none|
|successRedirectUrl|string|false|none|A valid URL where the booker will redirect to, once the booking is completed successfully|
|hideOrganizerEmail|boolean|false|none|Boolean to Hide organizer's email address from the booking screen, email notifications, and calendar events|
|calVideoSettings|object|false|none|Cal video settings for the event type|
|hidden|boolean|false|none|none|
|bookingRequiresAuthentication|boolean|false|none|Boolean to require authentication for booking this event type via api. If true, only authenticated users who are the event-type owner or org/team admin/owner can book this event type.|
|disableCancelling|object|false|none|Settings for disabling cancelling of this event type.|
|disableRescheduling|object|false|none|Settings for disabling rescheduling of this event type. Can be always disabled or disabled when less than X minutes before the meeting.|
|interfaceLanguage|string|false|none|Set preferred language for the booking interface. Use empty string for visitor's browser language (default).|
|allowReschedulingPastBookings|boolean|false|none|Enabling this option allows for past events to be rescheduled.|
|allowReschedulingCancelledBookings|boolean|false|none|When enabled, users will be able to create a new booking when trying to reschedule a cancelled booking.|
|showOptimizedSlots|boolean|false|none|Arrange time slots to optimize availability.|
|locations|[[InputAddressLocation_2024_06_14](#schemainputaddresslocation_2024_06_14) \| [InputLinkLocation_2024_06_14](#schemainputlinklocation_2024_06_14) \| [InputIntegrationLocation_2024_06_14](#schemainputintegrationlocation_2024_06_14) \| [InputPhoneLocation_2024_06_14](#schemainputphonelocation_2024_06_14) \| [InputAttendeeAddressLocation_2024_06_14](#schemainputattendeeaddresslocation_2024_06_14) \| [InputAttendeePhoneLocation_2024_06_14](#schemainputattendeephonelocation_2024_06_14) \| [InputAttendeeDefinedLocation_2024_06_14](#schemainputattendeedefinedlocation_2024_06_14)]|false|none|Locations where the event will take place. If not provided, cal video link will be used as the location. Note: Setting a location to a conferencing app does not install the app - the app must already be installed. Via API, only Google Meet (google-meet), Microsoft Teams (office365-video), and Zoom (zoom) can be installed. Cal Video (cal-video) is installed by default. All other conferencing apps must be connected via the Cal.diy web app and are not available for Platform plan customers. You can only set an event type location to an app that has already been installed or connected.|

#### Enumerated Values

|Property|Value|
|---|---|
|interfaceLanguage|""|
|interfaceLanguage|en|
|interfaceLanguage|ar|
|interfaceLanguage|az|
|interfaceLanguage|bg|
|interfaceLanguage|bn|
|interfaceLanguage|ca|
|interfaceLanguage|cs|
|interfaceLanguage|da|
|interfaceLanguage|de|
|interfaceLanguage|el|
|interfaceLanguage|es|
|interfaceLanguage|es-419|
|interfaceLanguage|eu|
|interfaceLanguage|et|
|interfaceLanguage|fi|
|interfaceLanguage|fr|
|interfaceLanguage|he|
|interfaceLanguage|hu|
|interfaceLanguage|it|
|interfaceLanguage|ja|
|interfaceLanguage|km|
|interfaceLanguage|ko|
|interfaceLanguage|nl|
|interfaceLanguage|no|
|interfaceLanguage|pl|
|interfaceLanguage|pt-BR|
|interfaceLanguage|pt|
|interfaceLanguage|ro|
|interfaceLanguage|ru|
|interfaceLanguage|sk-SK|
|interfaceLanguage|sr|
|interfaceLanguage|sv|
|interfaceLanguage|tr|
|interfaceLanguage|uk|
|interfaceLanguage|vi|
|interfaceLanguage|zh-CN|
|interfaceLanguage|zh-TW|

<h2 id="tocS_UpdateEventTypeOutput_2024_06_14">UpdateEventTypeOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventtypeoutput_2024_06_14"></a>
<a id="schema_UpdateEventTypeOutput_2024_06_14"></a>
<a id="tocSupdateeventtypeoutput_2024_06_14"></a>
<a id="tocsupdateeventtypeoutput_2024_06_14"></a>

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "lengthInMinutes": 60,
    "lengthInMinutesOptions": [
      15,
      30,
      60
    ],
    "title": "Learn the secrets of masterchief!",
    "slug": "learn-the-secrets-of-masterchief",
    "description": "Discover the culinary wonders of Argentina by making the best flan ever!",
    "locations": [
      {
        "type": "address",
        "address": "123 Example St, City, Country",
        "public": true
      }
    ],
    "bookingFields": [
      {
        "type": "name",
        "label": "string",
        "placeholder": "string",
        "disableOnPrefill": true,
        "isDefault": true,
        "slug": "name",
        "required": true
      }
    ],
    "disableGuests": true,
    "slotInterval": 60,
    "minimumBookingNotice": 0,
    "beforeEventBuffer": 0,
    "afterEventBuffer": 0,
    "recurrence": {
      "interval": 10,
      "occurrences": 10,
      "frequency": "yearly"
    },
    "metadata": {},
    "price": 0,
    "currency": "string",
    "lockTimeZoneToggleOnBookingPage": true,
    "seatsPerTimeSlot": {},
    "forwardParamsSuccessRedirect": {},
    "successRedirectUrl": {},
    "isInstantEvent": true,
    "seatsShowAvailabilityCount": true,
    "scheduleId": 0,
    "bookingLimitsCount": {},
    "bookerActiveBookingsLimit": {
      "maximumActiveBookings": 3,
      "offerReschedule": true
    },
    "onlyShowFirstAvailableSlot": true,
    "bookingLimitsDuration": {},
    "bookingWindow": [
      {
        "type": "businessDays",
        "value": 5,
        "rolling": true
      }
    ],
    "bookerLayouts": {
      "defaultLayout": "month",
      "enabledLayouts": [
        "month"
      ]
    },
    "confirmationPolicy": {},
    "requiresBookerEmailVerification": true,
    "hideCalendarNotes": true,
    "color": {
      "lightThemeHex": "#292929",
      "darkThemeHex": "#fafafa"
    },
    "seats": {
      "seatsPerTimeSlot": 4,
      "showAttendeeInfo": true,
      "showAvailabilityCount": true
    },
    "offsetStart": 0,
    "customName": "string",
    "destinationCalendar": {
      "integration": "string",
      "externalId": "string"
    },
    "useDestinationCalendarEmail": true,
    "hideCalendarEventDetails": true,
    "hideOrganizerEmail": true,
    "calVideoSettings": {
      "disableRecordingForOrganizer": false,
      "disableRecordingForGuests": false,
      "redirectUrlOnExit": {},
      "enableAutomaticRecordingForOrganizer": false,
      "enableAutomaticTranscription": false,
      "disableTranscriptionForGuests": false,
      "disableTranscriptionForOrganizer": false,
      "sendTranscriptionEmails": true
    },
    "hidden": true,
    "bookingRequiresAuthentication": true,
    "disableCancelling": {
      "disabled": true
    },
    "disableRescheduling": {
      "disabled": true,
      "minutesBefore": 60
    },
    "interfaceLanguage": "string",
    "allowReschedulingPastBookings": true,
    "allowReschedulingCancelledBookings": true,
    "showOptimizedSlots": true,
    "ownerId": 10,
    "users": [
      "string"
    ],
    "bookingUrl": "https://cal.com/john-doe/30min"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[EventTypeOutput_2024_06_14](#schemaeventtypeoutput_2024_06_14)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_DeleteData_2024_06_14">DeleteData_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemadeletedata_2024_06_14"></a>
<a id="schema_DeleteData_2024_06_14"></a>
<a id="tocSdeletedata_2024_06_14"></a>
<a id="tocsdeletedata_2024_06_14"></a>

```json
{
  "id": 1,
  "lengthInMinutes": 60,
  "title": "Learn the secrets of masterchief!",
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|lengthInMinutes|number|true|none|none|
|title|string|true|none|none|
|slug|string|true|none|none|

<h2 id="tocS_DeleteEventTypeOutput_2024_06_14">DeleteEventTypeOutput_2024_06_14</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventtypeoutput_2024_06_14"></a>
<a id="schema_DeleteEventTypeOutput_2024_06_14"></a>
<a id="tocSdeleteeventtypeoutput_2024_06_14"></a>
<a id="tocsdeleteeventtypeoutput_2024_06_14"></a>

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "lengthInMinutes": 60,
    "title": "Learn the secrets of masterchief!",
    "slug": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[DeleteData_2024_06_14](#schemadeletedata_2024_06_14)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_SelectedCalendarsInputDto">SelectedCalendarsInputDto</h2>
<!-- backwards compatibility -->
<a id="schemaselectedcalendarsinputdto"></a>
<a id="schema_SelectedCalendarsInputDto"></a>
<a id="tocSselectedcalendarsinputdto"></a>
<a id="tocsselectedcalendarsinputdto"></a>

```json
{
  "integration": "string",
  "externalId": "string",
  "credentialId": 0,
  "delegationCredentialId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration|string|true|none|none|
|externalId|string|true|none|none|
|credentialId|number|true|none|none|
|delegationCredentialId|string|false|none|none|

<h2 id="tocS_SelectedCalendarOutputDto">SelectedCalendarOutputDto</h2>
<!-- backwards compatibility -->
<a id="schemaselectedcalendaroutputdto"></a>
<a id="schema_SelectedCalendarOutputDto"></a>
<a id="tocSselectedcalendaroutputdto"></a>
<a id="tocsselectedcalendaroutputdto"></a>

```json
{
  "userId": 0,
  "integration": "string",
  "externalId": "string",
  "credentialId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|number|true|none|none|
|integration|string|true|none|none|
|externalId|string|true|none|none|
|credentialId|number \| null|true|none|none|

<h2 id="tocS_SelectedCalendarOutputResponseDto">SelectedCalendarOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaselectedcalendaroutputresponsedto"></a>
<a id="schema_SelectedCalendarOutputResponseDto"></a>
<a id="tocSselectedcalendaroutputresponsedto"></a>
<a id="tocsselectedcalendaroutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "userId": 0,
    "integration": "string",
    "externalId": "string",
    "credentialId": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[SelectedCalendarOutputDto](#schemaselectedcalendaroutputdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_StripConnectOutputDto">StripConnectOutputDto</h2>
<!-- backwards compatibility -->
<a id="schemastripconnectoutputdto"></a>
<a id="schema_StripConnectOutputDto"></a>
<a id="tocSstripconnectoutputdto"></a>
<a id="tocsstripconnectoutputdto"></a>

```json
{
  "authUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authUrl|string|true|none|none|

<h2 id="tocS_StripConnectOutputResponseDto">StripConnectOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemastripconnectoutputresponsedto"></a>
<a id="schema_StripConnectOutputResponseDto"></a>
<a id="tocSstripconnectoutputresponsedto"></a>
<a id="tocsstripconnectoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "authUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[StripConnectOutputDto](#schemastripconnectoutputdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_StripCredentialsSaveOutputResponseDto">StripCredentialsSaveOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemastripcredentialssaveoutputresponsedto"></a>
<a id="schema_StripCredentialsSaveOutputResponseDto"></a>
<a id="tocSstripcredentialssaveoutputresponsedto"></a>
<a id="tocsstripcredentialssaveoutputresponsedto"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

<h2 id="tocS_StripCredentialsCheckOutputResponseDto">StripCredentialsCheckOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemastripcredentialscheckoutputresponsedto"></a>
<a id="schema_StripCredentialsCheckOutputResponseDto"></a>
<a id="tocSstripcredentialscheckoutputresponsedto"></a>
<a id="tocsstripcredentialscheckoutputresponsedto"></a>

```json
{
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|none|

<h2 id="tocS_ScheduleAvailabilityInput_2024_06_11">ScheduleAvailabilityInput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemascheduleavailabilityinput_2024_06_11"></a>
<a id="schema_ScheduleAvailabilityInput_2024_06_11"></a>
<a id="tocSscheduleavailabilityinput_2024_06_11"></a>
<a id="tocsscheduleavailabilityinput_2024_06_11"></a>

```json
{
  "days": [
    "Monday",
    "Tuesday"
  ],
  "startTime": "08:00",
  "endTime": "15:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|[string]|true|none|Array of days when schedule is active.|
|startTime|string|true|none|startTime must be a valid time in format HH:MM e.g. 08:00|
|endTime|string|true|none|endTime must be a valid time in format HH:MM e.g. 15:00|

#### Enumerated Values

|Property|Value|
|---|---|
|days|Monday|
|days|Tuesday|
|days|Wednesday|
|days|Thursday|
|days|Friday|
|days|Saturday|
|days|Sunday|

<h2 id="tocS_ScheduleOverrideInput_2024_06_11">ScheduleOverrideInput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemascheduleoverrideinput_2024_06_11"></a>
<a id="schema_ScheduleOverrideInput_2024_06_11"></a>
<a id="tocSscheduleoverrideinput_2024_06_11"></a>
<a id="tocsscheduleoverrideinput_2024_06_11"></a>

```json
{
  "date": "2024-05-20",
  "startTime": "12:00",
  "endTime": "13:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|none|
|startTime|string|true|none|startTime must be a valid time in format HH:MM e.g. 12:00|
|endTime|string|true|none|endTime must be a valid time in format HH:MM e.g. 13:00|

<h2 id="tocS_CreateScheduleInput_2024_06_11">CreateScheduleInput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemacreatescheduleinput_2024_06_11"></a>
<a id="schema_CreateScheduleInput_2024_06_11"></a>
<a id="tocScreatescheduleinput_2024_06_11"></a>
<a id="tocscreatescheduleinput_2024_06_11"></a>

```json
{
  "name": "Catch up hours",
  "timeZone": "Europe/Rome",
  "availability": [
    {
      "days": [
        "Monday",
        "Tuesday"
      ],
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "days": [
        "Wednesday",
        "Thursday"
      ],
      "startTime": "16:00",
      "endTime": "20:00"
    }
  ],
  "isDefault": true,
  "overrides": [
    {
      "date": "2024-05-20",
      "startTime": "18:00",
      "endTime": "21:00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|timeZone|string|true|none|Timezone is used to calculate available times when an event using the schedule is booked.|
|availability|[[ScheduleAvailabilityInput_2024_06_11](#schemascheduleavailabilityinput_2024_06_11)]|false|none|Each object contains days and times when the user is available. If not passed, the default availability is Monday to Friday from 09:00 to 17:00.|
|isDefault|boolean|true|none|Each user should have 1 default schedule. If you specified `timeZone` when creating managed user, then the default schedule will be created with that timezone.<br>    Default schedule means that if an event type is not tied to a specific schedule then the default schedule is used.|
|overrides|[[ScheduleOverrideInput_2024_06_11](#schemascheduleoverrideinput_2024_06_11)]|false|none|Need to change availability for a specific date? Add an override.|

<h2 id="tocS_ScheduleOutput_2024_06_11">ScheduleOutput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemascheduleoutput_2024_06_11"></a>
<a id="schema_ScheduleOutput_2024_06_11"></a>
<a id="tocSscheduleoutput_2024_06_11"></a>
<a id="tocsscheduleoutput_2024_06_11"></a>

```json
{
  "id": 254,
  "ownerId": 478,
  "name": "Catch up hours",
  "timeZone": "Europe/Rome",
  "availability": [
    {
      "days": [
        "Monday",
        "Tuesday"
      ],
      "startTime": "17:00",
      "endTime": "19:00"
    },
    {
      "days": [
        "Wednesday",
        "Thursday"
      ],
      "startTime": "16:00",
      "endTime": "20:00"
    }
  ],
  "isDefault": true,
  "overrides": [
    {
      "date": "2024-05-20",
      "startTime": "18:00",
      "endTime": "21:00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|ownerId|number|true|none|none|
|name|string|true|none|none|
|timeZone|string|true|none|none|
|availability|[[ScheduleAvailabilityInput_2024_06_11](#schemascheduleavailabilityinput_2024_06_11)]|true|none|none|
|isDefault|boolean|true|none|none|
|overrides|[[ScheduleOverrideInput_2024_06_11](#schemascheduleoverrideinput_2024_06_11)]|true|none|none|

<h2 id="tocS_CreateScheduleOutput_2024_06_11">CreateScheduleOutput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemacreatescheduleoutput_2024_06_11"></a>
<a id="schema_CreateScheduleOutput_2024_06_11"></a>
<a id="tocScreatescheduleoutput_2024_06_11"></a>
<a id="tocscreatescheduleoutput_2024_06_11"></a>

```json
{
  "status": "success",
  "data": {
    "id": 254,
    "ownerId": 478,
    "name": "Catch up hours",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "17:00",
        "endTime": "19:00"
      },
      {
        "days": [
          "Wednesday",
          "Thursday"
        ],
        "startTime": "16:00",
        "endTime": "20:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "18:00",
        "endTime": "21:00"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ScheduleOutput_2024_06_11](#schemascheduleoutput_2024_06_11)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetDefaultScheduleOutput_2024_06_11">GetDefaultScheduleOutput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemagetdefaultscheduleoutput_2024_06_11"></a>
<a id="schema_GetDefaultScheduleOutput_2024_06_11"></a>
<a id="tocSgetdefaultscheduleoutput_2024_06_11"></a>
<a id="tocsgetdefaultscheduleoutput_2024_06_11"></a>

```json
{
  "status": "success",
  "data": {
    "id": 254,
    "ownerId": 478,
    "name": "Catch up hours",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "17:00",
        "endTime": "19:00"
      },
      {
        "days": [
          "Wednesday",
          "Thursday"
        ],
        "startTime": "16:00",
        "endTime": "20:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "18:00",
        "endTime": "21:00"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ScheduleOutput_2024_06_11](#schemascheduleoutput_2024_06_11)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetScheduleOutput_2024_06_11">GetScheduleOutput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemagetscheduleoutput_2024_06_11"></a>
<a id="schema_GetScheduleOutput_2024_06_11"></a>
<a id="tocSgetscheduleoutput_2024_06_11"></a>
<a id="tocsgetscheduleoutput_2024_06_11"></a>

```json
{
  "status": "success",
  "data": {
    "id": 254,
    "ownerId": 478,
    "name": "Catch up hours",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "17:00",
        "endTime": "19:00"
      },
      {
        "days": [
          "Wednesday",
          "Thursday"
        ],
        "startTime": "16:00",
        "endTime": "20:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "18:00",
        "endTime": "21:00"
      }
    ]
  },
  "error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|object \| null|true|none|none|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetSchedulesOutput_2024_06_11">GetSchedulesOutput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemagetschedulesoutput_2024_06_11"></a>
<a id="schema_GetSchedulesOutput_2024_06_11"></a>
<a id="tocSgetschedulesoutput_2024_06_11"></a>
<a id="tocsgetschedulesoutput_2024_06_11"></a>

```json
{
  "status": "success",
  "data": [
    {
      "id": 254,
      "ownerId": 478,
      "name": "Catch up hours",
      "timeZone": "Europe/Rome",
      "availability": [
        {
          "days": [
            "Monday",
            "Tuesday"
          ],
          "startTime": "17:00",
          "endTime": "19:00"
        },
        {
          "days": [
            "Wednesday",
            "Thursday"
          ],
          "startTime": "16:00",
          "endTime": "20:00"
        }
      ],
      "isDefault": true,
      "overrides": [
        {
          "date": "2024-05-20",
          "startTime": "18:00",
          "endTime": "21:00"
        }
      ]
    }
  ],
  "error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[ScheduleOutput_2024_06_11](#schemascheduleoutput_2024_06_11)]|true|none|none|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UpdateScheduleInput_2024_06_11">UpdateScheduleInput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescheduleinput_2024_06_11"></a>
<a id="schema_UpdateScheduleInput_2024_06_11"></a>
<a id="tocSupdatescheduleinput_2024_06_11"></a>
<a id="tocsupdatescheduleinput_2024_06_11"></a>

```json
{
  "name": "One-on-one coaching",
  "timeZone": "Europe/Rome",
  "availability": [
    {
      "days": [
        "Monday",
        "Tuesday"
      ],
      "startTime": "09:00",
      "endTime": "10:00"
    }
  ],
  "isDefault": true,
  "overrides": [
    {
      "date": "2024-05-20",
      "startTime": "12:00",
      "endTime": "14:00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|timeZone|string|false|none|none|
|availability|[[ScheduleAvailabilityInput_2024_06_11](#schemascheduleavailabilityinput_2024_06_11)]|false|none|none|
|isDefault|boolean|false|none|none|
|overrides|[[ScheduleOverrideInput_2024_06_11](#schemascheduleoverrideinput_2024_06_11)]|false|none|none|

<h2 id="tocS_UpdateScheduleOutput_2024_06_11">UpdateScheduleOutput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescheduleoutput_2024_06_11"></a>
<a id="schema_UpdateScheduleOutput_2024_06_11"></a>
<a id="tocSupdatescheduleoutput_2024_06_11"></a>
<a id="tocsupdatescheduleoutput_2024_06_11"></a>

```json
{
  "status": "success",
  "data": {
    "id": 254,
    "ownerId": 478,
    "name": "Catch up hours",
    "timeZone": "Europe/Rome",
    "availability": [
      {
        "days": [
          "Monday",
          "Tuesday"
        ],
        "startTime": "17:00",
        "endTime": "19:00"
      },
      {
        "days": [
          "Wednesday",
          "Thursday"
        ],
        "startTime": "16:00",
        "endTime": "20:00"
      }
    ],
    "isDefault": true,
    "overrides": [
      {
        "date": "2024-05-20",
        "startTime": "18:00",
        "endTime": "21:00"
      }
    ]
  },
  "error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ScheduleOutput_2024_06_11](#schemascheduleoutput_2024_06_11)|true|none|none|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_DeleteScheduleOutput_2024_06_11">DeleteScheduleOutput_2024_06_11</h2>
<!-- backwards compatibility -->
<a id="schemadeletescheduleoutput_2024_06_11"></a>
<a id="schema_DeleteScheduleOutput_2024_06_11"></a>
<a id="tocSdeletescheduleoutput_2024_06_11"></a>
<a id="tocsdeletescheduleoutput_2024_06_11"></a>

```json
{
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CreatePrivateLinkInput">CreatePrivateLinkInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateprivatelinkinput"></a>
<a id="schema_CreatePrivateLinkInput"></a>
<a id="tocScreateprivatelinkinput"></a>
<a id="tocscreateprivatelinkinput"></a>

```json
{
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "maxUsageCount": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiresAt|string(date-time)|false|none|Expiration date for time-based links|
|maxUsageCount|number|false|none|Maximum number of times the link can be used. If omitted and expiresAt is not provided, defaults to 1 (one time use).|

<h2 id="tocS_TimeBasedPrivateLinkOutput">TimeBasedPrivateLinkOutput</h2>
<!-- backwards compatibility -->
<a id="schematimebasedprivatelinkoutput"></a>
<a id="schema_TimeBasedPrivateLinkOutput"></a>
<a id="tocStimebasedprivatelinkoutput"></a>
<a id="tocstimebasedprivatelinkoutput"></a>

```json
{
  "linkId": "abc123def456",
  "eventTypeId": 123,
  "isExpired": false,
  "bookingUrl": "https://cal.com/d/abc123def456/30min",
  "expiresAt": "2025-12-31T23:59:59.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkId|string|true|none|The private link ID|
|eventTypeId|number|true|none|Event type ID this link belongs to|
|isExpired|boolean|true|none|Whether the link is currently expired|
|bookingUrl|string(uri)|true|none|Full booking URL for this private link|
|expiresAt|string(date-time)|true|none|Expiration date for this time-based link|

<h2 id="tocS_UsageBasedPrivateLinkOutput">UsageBasedPrivateLinkOutput</h2>
<!-- backwards compatibility -->
<a id="schemausagebasedprivatelinkoutput"></a>
<a id="schema_UsageBasedPrivateLinkOutput"></a>
<a id="tocSusagebasedprivatelinkoutput"></a>
<a id="tocsusagebasedprivatelinkoutput"></a>

```json
{
  "linkId": "abc123def456",
  "eventTypeId": 123,
  "isExpired": false,
  "bookingUrl": "https://cal.com/d/abc123def456/30min",
  "maxUsageCount": 10,
  "usageCount": 3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkId|string|true|none|The private link ID|
|eventTypeId|number|true|none|Event type ID this link belongs to|
|isExpired|boolean|true|none|Whether the link is currently expired|
|bookingUrl|string(uri)|true|none|Full booking URL for this private link|
|maxUsageCount|number|true|none|Maximum number of times this link can be used|
|usageCount|number|true|none|Current usage count for this link|

<h2 id="tocS_CreatePrivateLinkOutput">CreatePrivateLinkOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateprivatelinkoutput"></a>
<a id="schema_CreatePrivateLinkOutput"></a>
<a id="tocScreateprivatelinkoutput"></a>
<a id="tocscreateprivatelinkoutput"></a>

```json
{
  "status": "success",
  "data": {
    "linkId": "abc123def456",
    "eventTypeId": 123,
    "isExpired": false,
    "bookingUrl": "https://cal.com/d/abc123def456/30min",
    "expiresAt": "2025-12-31T23:59:59.000Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status|
|data|[TimeBasedPrivateLinkOutput](#schematimebasedprivatelinkoutput) \| [UsageBasedPrivateLinkOutput](#schemausagebasedprivatelinkoutput)|true|none|Created private link data (either time-based or usage-based)|

<h2 id="tocS_GetPrivateLinksOutput">GetPrivateLinksOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetprivatelinksoutput"></a>
<a id="schema_GetPrivateLinksOutput"></a>
<a id="tocSgetprivatelinksoutput"></a>
<a id="tocsgetprivatelinksoutput"></a>

```json
{
  "status": "success",
  "data": [
    {
      "linkId": "abc123def456",
      "eventTypeId": 123,
      "isExpired": false,
      "bookingUrl": "https://cal.com/d/abc123def456/30min",
      "expiresAt": "2025-12-31T23:59:59.000Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status|
|data|[[TimeBasedPrivateLinkOutput](#schematimebasedprivatelinkoutput) \| [UsageBasedPrivateLinkOutput](#schemausagebasedprivatelinkoutput)]|true|none|Array of private links for the event type (mix of time-based and usage-based)|

<h2 id="tocS_UpdatePrivateLinkBody">UpdatePrivateLinkBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprivatelinkbody"></a>
<a id="schema_UpdatePrivateLinkBody"></a>
<a id="tocSupdateprivatelinkbody"></a>
<a id="tocsupdateprivatelinkbody"></a>

```json
{
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "maxUsageCount": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiresAt|string(date-time)|false|none|New expiration date for time-based links|
|maxUsageCount|number|false|none|New maximum number of times the link can be used|

<h2 id="tocS_UpdatePrivateLinkOutput">UpdatePrivateLinkOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprivatelinkoutput"></a>
<a id="schema_UpdatePrivateLinkOutput"></a>
<a id="tocSupdateprivatelinkoutput"></a>
<a id="tocsupdateprivatelinkoutput"></a>

```json
{
  "status": "success",
  "data": {
    "linkId": "abc123def456",
    "eventTypeId": 123,
    "isExpired": false,
    "bookingUrl": "https://cal.com/d/abc123def456/30min",
    "expiresAt": "2025-12-31T23:59:59.000Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status|
|data|[TimeBasedPrivateLinkOutput](#schematimebasedprivatelinkoutput) \| [UsageBasedPrivateLinkOutput](#schemausagebasedprivatelinkoutput)|true|none|Updated private link data (either time-based or usage-based)|

<h2 id="tocS_DeletePrivateLinkOutput">DeletePrivateLinkOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprivatelinkoutput"></a>
<a id="schema_DeletePrivateLinkOutput"></a>
<a id="tocSdeleteprivatelinkoutput"></a>
<a id="tocsdeleteprivatelinkoutput"></a>

```json
{
  "status": "success",
  "data": {
    "linkId": "abc123def456",
    "message": "Private link deleted successfully"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Response status|
|data|object|true|none|Deleted link information|

<h2 id="tocS_MeOrgOutput">MeOrgOutput</h2>
<!-- backwards compatibility -->
<a id="schemameorgoutput"></a>
<a id="schema_MeOrgOutput"></a>
<a id="tocSmeorgoutput"></a>
<a id="tocsmeorgoutput"></a>

```json
{
  "isPlatform": true,
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPlatform|boolean|true|none|none|
|id|number|true|none|none|

<h2 id="tocS_MeOutput">MeOutput</h2>
<!-- backwards compatibility -->
<a id="schemameoutput"></a>
<a id="schema_MeOutput"></a>
<a id="tocSmeoutput"></a>
<a id="tocsmeoutput"></a>

```json
{
  "id": 0,
  "username": "string",
  "email": "string",
  "name": "string",
  "avatarUrl": "string",
  "bio": "string",
  "timeFormat": 0,
  "defaultScheduleId": 0,
  "weekStart": "string",
  "timeZone": "string",
  "organizationId": 0,
  "organization": {
    "isPlatform": true,
    "id": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|username|string|true|none|none|
|email|string|true|none|none|
|name|string \| null|true|none|none|
|avatarUrl|string \| null|true|none|none|
|bio|string \| null|true|none|none|
|timeFormat|number|true|none|none|
|defaultScheduleId|number \| null|true|none|none|
|weekStart|string|true|none|none|
|timeZone|string|true|none|none|
|organizationId|number \| null|true|none|none|
|organization|[MeOrgOutput](#schemameorgoutput)|false|none|none|

<h2 id="tocS_GetMeOutput">GetMeOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmeoutput"></a>
<a id="schema_GetMeOutput"></a>
<a id="tocSgetmeoutput"></a>
<a id="tocsgetmeoutput"></a>

```json
{
  "status": "success",
  "data": {
    "id": 0,
    "username": "string",
    "email": "string",
    "name": "string",
    "avatarUrl": "string",
    "bio": "string",
    "timeFormat": 0,
    "defaultScheduleId": 0,
    "weekStart": "string",
    "timeZone": "string",
    "organizationId": 0,
    "organization": {
      "isPlatform": true,
      "id": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[MeOutput](#schemameoutput)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UpdateMeOutput">UpdateMeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemeoutput"></a>
<a id="schema_UpdateMeOutput"></a>
<a id="tocSupdatemeoutput"></a>
<a id="tocsupdatemeoutput"></a>

```json
{
  "status": "success",
  "data": {
    "id": 0,
    "username": "string",
    "email": "string",
    "name": "string",
    "avatarUrl": "string",
    "bio": "string",
    "timeFormat": 0,
    "defaultScheduleId": 0,
    "weekStart": "string",
    "timeZone": "string",
    "organizationId": 0,
    "organization": {
      "isPlatform": true,
      "id": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[MeOutput](#schemameoutput)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CreateIcsFeedInputDto">CreateIcsFeedInputDto</h2>
<!-- backwards compatibility -->
<a id="schemacreateicsfeedinputdto"></a>
<a id="schema_CreateIcsFeedInputDto"></a>
<a id="tocScreateicsfeedinputdto"></a>
<a id="tocscreateicsfeedinputdto"></a>

```json
{
  "urls": [
    "https://cal.com/ics/feed.ics",
    "http://cal.com/ics/feed.ics"
  ],
  "readOnly": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urls|[string]|true|none|An array of ICS URLs|
|readOnly|boolean|false|none|Whether to allowing writing to the calendar or not|

<h2 id="tocS_CreateIcsFeedOutput">CreateIcsFeedOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateicsfeedoutput"></a>
<a id="schema_CreateIcsFeedOutput"></a>
<a id="tocScreateicsfeedoutput"></a>
<a id="tocscreateicsfeedoutput"></a>

```json
{
  "id": 1234567890,
  "type": "ics-feed_calendar",
  "userId": 1234567890,
  "teamId": 1234567890,
  "appId": "ics-feed",
  "invalid": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|The id of the calendar credential|
|type|string|true|none|The type of the calendar|
|userId|integer \| null|true|none|The user id of the user that created the calendar|
|teamId|integer \| null|true|none|The team id of the user that created the calendar|
|appId|string \| null|true|none|The slug of the calendar|
|invalid|boolean \| null|true|none|Whether the calendar credentials are valid or not|

<h2 id="tocS_CreateIcsFeedOutputResponseDto">CreateIcsFeedOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemacreateicsfeedoutputresponsedto"></a>
<a id="schema_CreateIcsFeedOutputResponseDto"></a>
<a id="tocScreateicsfeedoutputresponsedto"></a>
<a id="tocscreateicsfeedoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "id": 1234567890,
    "type": "ics-feed_calendar",
    "userId": 1234567890,
    "teamId": 1234567890,
    "appId": "ics-feed",
    "invalid": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[CreateIcsFeedOutput](#schemacreateicsfeedoutput)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_BusyTimesOutput">BusyTimesOutput</h2>
<!-- backwards compatibility -->
<a id="schemabusytimesoutput"></a>
<a id="schema_BusyTimesOutput"></a>
<a id="tocSbusytimesoutput"></a>
<a id="tocsbusytimesoutput"></a>

```json
{
  "start": "1970-01-01T00:00:00Z",
  "end": "1970-01-01T00:00:00Z",
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string(date-time)|true|none|none|
|end|string(date-time)|true|none|none|
|source|string \| null|false|none|none|

<h2 id="tocS_GetBusyTimesOutput">GetBusyTimesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbusytimesoutput"></a>
<a id="schema_GetBusyTimesOutput"></a>
<a id="tocSgetbusytimesoutput"></a>
<a id="tocsgetbusytimesoutput"></a>

```json
{
  "status": "success",
  "data": [
    {
      "start": "1970-01-01T00:00:00Z",
      "end": "1970-01-01T00:00:00Z",
      "source": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[BusyTimesOutput](#schemabusytimesoutput)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
{
  "appData": {},
  "dirName": "string",
  "__template": "string",
  "name": "string",
  "description": "string",
  "installed": true,
  "type": "string",
  "title": "string",
  "variant": "string",
  "category": "string",
  "categories": [
    "string"
  ],
  "logo": "string",
  "publisher": "string",
  "slug": "string",
  "url": "string",
  "email": "string",
  "locationOption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appData|object \| null|false|none|none|
|dirName|string|false|none|none|
|__template|string|false|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|installed|boolean|false|none|none|
|type|string|true|none|none|
|title|string|false|none|none|
|variant|string|true|none|none|
|category|string|false|none|none|
|categories|[string]|true|none|none|
|logo|string|true|none|none|
|publisher|string|true|none|none|
|slug|string|true|none|none|
|url|string|true|none|none|
|email|string|true|none|none|
|locationOption|object \| null|true|none|none|

<h2 id="tocS_Primary">Primary</h2>
<!-- backwards compatibility -->
<a id="schemaprimary"></a>
<a id="schema_Primary"></a>
<a id="tocSprimary"></a>
<a id="tocsprimary"></a>

```json
{
  "externalId": "string",
  "integration": "string",
  "name": "string",
  "primary": true,
  "readOnly": true,
  "email": "string",
  "isSelected": true,
  "credentialId": 0,
  "delegationCredentialId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalId|string|true|none|none|
|integration|string|false|none|none|
|name|string|false|none|none|
|primary|boolean \| null|true|none|none|
|readOnly|boolean|true|none|none|
|email|string|false|none|none|
|isSelected|boolean|true|none|none|
|credentialId|number|true|none|none|
|delegationCredentialId|string \| null|false|none|none|

<h2 id="tocS_Calendar">Calendar</h2>
<!-- backwards compatibility -->
<a id="schemacalendar"></a>
<a id="schema_Calendar"></a>
<a id="tocScalendar"></a>
<a id="tocscalendar"></a>

```json
{
  "externalId": "string",
  "integration": "string",
  "name": "string",
  "primary": true,
  "readOnly": true,
  "email": "string",
  "isSelected": true,
  "credentialId": 0,
  "delegationCredentialId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalId|string|true|none|none|
|integration|string|false|none|none|
|name|string|false|none|none|
|primary|boolean \| null|false|none|none|
|readOnly|boolean|true|none|none|
|email|string|false|none|none|
|isSelected|boolean|true|none|none|
|credentialId|number|true|none|none|
|delegationCredentialId|string \| null|false|none|none|

<h2 id="tocS_ConnectedCalendar">ConnectedCalendar</h2>
<!-- backwards compatibility -->
<a id="schemaconnectedcalendar"></a>
<a id="schema_ConnectedCalendar"></a>
<a id="tocSconnectedcalendar"></a>
<a id="tocsconnectedcalendar"></a>

```json
{
  "integration": {
    "appData": {},
    "dirName": "string",
    "__template": "string",
    "name": "string",
    "description": "string",
    "installed": true,
    "type": "string",
    "title": "string",
    "variant": "string",
    "category": "string",
    "categories": [
      "string"
    ],
    "logo": "string",
    "publisher": "string",
    "slug": "string",
    "url": "string",
    "email": "string",
    "locationOption": {}
  },
  "credentialId": 0,
  "delegationCredentialId": "string",
  "primary": {
    "externalId": "string",
    "integration": "string",
    "name": "string",
    "primary": true,
    "readOnly": true,
    "email": "string",
    "isSelected": true,
    "credentialId": 0,
    "delegationCredentialId": "string"
  },
  "calendars": [
    {
      "externalId": "string",
      "integration": "string",
      "name": "string",
      "primary": true,
      "readOnly": true,
      "email": "string",
      "isSelected": true,
      "credentialId": 0,
      "delegationCredentialId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration|[Integration](#schemaintegration)|true|none|none|
|credentialId|number|true|none|none|
|delegationCredentialId|string \| null|false|none|none|
|primary|[Primary](#schemaprimary)|false|none|none|
|calendars|[[Calendar](#schemacalendar)]|false|none|none|

<h2 id="tocS_DestinationCalendar">DestinationCalendar</h2>
<!-- backwards compatibility -->
<a id="schemadestinationcalendar"></a>
<a id="schema_DestinationCalendar"></a>
<a id="tocSdestinationcalendar"></a>
<a id="tocsdestinationcalendar"></a>

```json
{
  "id": {},
  "integration": "string",
  "externalId": "string",
  "primaryEmail": "string",
  "userId": 0,
  "eventTypeId": 0,
  "credentialId": 0,
  "delegationCredentialId": "string",
  "name": "string",
  "primary": true,
  "readOnly": true,
  "email": "string",
  "integrationTitle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|integration|string|true|none|none|
|externalId|string|true|none|none|
|primaryEmail|string \| null|true|none|none|
|userId|number \| null|true|none|none|
|eventTypeId|number \| null|true|none|none|
|credentialId|number \| null|true|none|none|
|delegationCredentialId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|primary|boolean|false|none|none|
|readOnly|boolean|false|none|none|
|email|string|false|none|none|
|integrationTitle|string|false|none|none|

<h2 id="tocS_ConnectedCalendarsData">ConnectedCalendarsData</h2>
<!-- backwards compatibility -->
<a id="schemaconnectedcalendarsdata"></a>
<a id="schema_ConnectedCalendarsData"></a>
<a id="tocSconnectedcalendarsdata"></a>
<a id="tocsconnectedcalendarsdata"></a>

```json
{
  "connectedCalendars": [
    {
      "integration": {
        "appData": {},
        "dirName": "string",
        "__template": "string",
        "name": "string",
        "description": "string",
        "installed": true,
        "type": "string",
        "title": "string",
        "variant": "string",
        "category": "string",
        "categories": [
          "string"
        ],
        "logo": "string",
        "publisher": "string",
        "slug": "string",
        "url": "string",
        "email": "string",
        "locationOption": {}
      },
      "credentialId": 0,
      "delegationCredentialId": "string",
      "primary": {
        "externalId": "string",
        "integration": "string",
        "name": "string",
        "primary": true,
        "readOnly": true,
        "email": "string",
        "isSelected": true,
        "credentialId": 0,
        "delegationCredentialId": "string"
      },
      "calendars": [
        {
          "externalId": "string",
          "integration": "string",
          "name": "string",
          "primary": true,
          "readOnly": true,
          "email": "string",
          "isSelected": true,
          "credentialId": 0,
          "delegationCredentialId": "string"
        }
      ]
    }
  ],
  "destinationCalendar": {
    "id": {},
    "integration": "string",
    "externalId": "string",
    "primaryEmail": "string",
    "userId": 0,
    "eventTypeId": 0,
    "credentialId": 0,
    "delegationCredentialId": "string",
    "name": "string",
    "primary": true,
    "readOnly": true,
    "email": "string",
    "integrationTitle": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectedCalendars|[[ConnectedCalendar](#schemaconnectedcalendar)]|true|none|none|
|destinationCalendar|[DestinationCalendar](#schemadestinationcalendar)|true|none|none|

<h2 id="tocS_ConnectedCalendarsOutput">ConnectedCalendarsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaconnectedcalendarsoutput"></a>
<a id="schema_ConnectedCalendarsOutput"></a>
<a id="tocSconnectedcalendarsoutput"></a>
<a id="tocsconnectedcalendarsoutput"></a>

```json
{
  "status": "success",
  "data": {
    "connectedCalendars": [
      {
        "integration": {
          "appData": {},
          "dirName": "string",
          "__template": "string",
          "name": "string",
          "description": "string",
          "installed": true,
          "type": "string",
          "title": "string",
          "variant": "string",
          "category": "string",
          "categories": [
            "string"
          ],
          "logo": "string",
          "publisher": "string",
          "slug": "string",
          "url": "string",
          "email": "string",
          "locationOption": {}
        },
        "credentialId": 0,
        "delegationCredentialId": "string",
        "primary": {
          "externalId": "string",
          "integration": "string",
          "name": "string",
          "primary": true,
          "readOnly": true,
          "email": "string",
          "isSelected": true,
          "credentialId": 0,
          "delegationCredentialId": "string"
        },
        "calendars": [
          {
            "externalId": "string",
            "integration": "string",
            "name": "string",
            "primary": true,
            "readOnly": true,
            "email": "string",
            "isSelected": true,
            "credentialId": 0,
            "delegationCredentialId": "string"
          }
        ]
      }
    ],
    "destinationCalendar": {
      "id": {},
      "integration": "string",
      "externalId": "string",
      "primaryEmail": "string",
      "userId": 0,
      "eventTypeId": 0,
      "credentialId": 0,
      "delegationCredentialId": "string",
      "name": "string",
      "primary": true,
      "readOnly": true,
      "email": "string",
      "integrationTitle": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ConnectedCalendarsData](#schemaconnectedcalendarsdata)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CreateCalendarCredentialsInput">CreateCalendarCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecalendarcredentialsinput"></a>
<a id="schema_CreateCalendarCredentialsInput"></a>
<a id="tocScreatecalendarcredentialsinput"></a>
<a id="tocscreatecalendarcredentialsinput"></a>

```json
{
  "username": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_DeleteCalendarCredentialsInputBodyDto">DeleteCalendarCredentialsInputBodyDto</h2>
<!-- backwards compatibility -->
<a id="schemadeletecalendarcredentialsinputbodydto"></a>
<a id="schema_DeleteCalendarCredentialsInputBodyDto"></a>
<a id="tocSdeletecalendarcredentialsinputbodydto"></a>
<a id="tocsdeletecalendarcredentialsinputbodydto"></a>

```json
{
  "id": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Credential ID of the calendar to delete, as returned by the /calendars endpoint|

<h2 id="tocS_DeletedCalendarCredentialsOutputDto">DeletedCalendarCredentialsOutputDto</h2>
<!-- backwards compatibility -->
<a id="schemadeletedcalendarcredentialsoutputdto"></a>
<a id="schema_DeletedCalendarCredentialsOutputDto"></a>
<a id="tocSdeletedcalendarcredentialsoutputdto"></a>
<a id="tocsdeletedcalendarcredentialsoutputdto"></a>

```json
{
  "id": 0,
  "type": "string",
  "userId": 0,
  "teamId": 0,
  "appId": "string",
  "invalid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|type|string|true|none|none|
|userId|number \| null|true|none|none|
|teamId|number \| null|true|none|none|
|appId|string \| null|true|none|none|
|invalid|boolean \| null|true|none|none|

<h2 id="tocS_DeletedCalendarCredentialsOutputResponseDto">DeletedCalendarCredentialsOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemadeletedcalendarcredentialsoutputresponsedto"></a>
<a id="schema_DeletedCalendarCredentialsOutputResponseDto"></a>
<a id="tocSdeletedcalendarcredentialsoutputresponsedto"></a>
<a id="tocsdeletedcalendarcredentialsoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "id": 0,
    "type": "string",
    "userId": 0,
    "teamId": 0,
    "appId": "string",
    "invalid": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[DeletedCalendarCredentialsOutputDto](#schemadeletedcalendarcredentialsoutputdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_BookingInputAddressLocation_2024_08_13">BookingInputAddressLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookinginputaddresslocation_2024_08_13"></a>
<a id="schema_BookingInputAddressLocation_2024_08_13"></a>
<a id="tocSbookinginputaddresslocation_2024_08_13"></a>
<a id="tocsbookinginputaddresslocation_2024_08_13"></a>

```json
{
  "type": "address"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `address` - it refers to address defined by the organizer.|

<h2 id="tocS_BookingInputAttendeeAddressLocation_2024_08_13">BookingInputAttendeeAddressLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookinginputattendeeaddresslocation_2024_08_13"></a>
<a id="schema_BookingInputAttendeeAddressLocation_2024_08_13"></a>
<a id="tocSbookinginputattendeeaddresslocation_2024_08_13"></a>
<a id="tocsbookinginputattendeeaddresslocation_2024_08_13"></a>

```json
{
  "type": "attendeeAddress",
  "address": "123 Example St, City, Country"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `attendeeAddress`|
|address|string|true|none|none|

<h2 id="tocS_BookingInputAttendeeDefinedLocation_2024_08_13">BookingInputAttendeeDefinedLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookinginputattendeedefinedlocation_2024_08_13"></a>
<a id="schema_BookingInputAttendeeDefinedLocation_2024_08_13"></a>
<a id="tocSbookinginputattendeedefinedlocation_2024_08_13"></a>
<a id="tocsbookinginputattendeedefinedlocation_2024_08_13"></a>

```json
{
  "type": "attendeeDefined",
  "location": "321 Example St, City, Country"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `attendeeDefined`|
|location|string|true|none|none|

<h2 id="tocS_BookingInputAttendeePhoneLocation_2024_08_13">BookingInputAttendeePhoneLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookinginputattendeephonelocation_2024_08_13"></a>
<a id="schema_BookingInputAttendeePhoneLocation_2024_08_13"></a>
<a id="tocSbookinginputattendeephonelocation_2024_08_13"></a>
<a id="tocsbookinginputattendeephonelocation_2024_08_13"></a>

```json
{
  "type": "attendeePhone",
  "phone": "+37120993151"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `attendeePhone`|
|phone|string|true|none|none|

<h2 id="tocS_BookingInputIntegrationLocation_2024_08_13">BookingInputIntegrationLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookinginputintegrationlocation_2024_08_13"></a>
<a id="schema_BookingInputIntegrationLocation_2024_08_13"></a>
<a id="tocSbookinginputintegrationlocation_2024_08_13"></a>
<a id="tocsbookinginputintegrationlocation_2024_08_13"></a>

```json
{
  "type": "integration",
  "integration": "cal-video"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `integration`|
|integration|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|integration|cal-video|
|integration|google-meet|
|integration|zoom|
|integration|whereby-video|
|integration|whatsapp-video|
|integration|webex-video|
|integration|telegram-video|
|integration|tandem|
|integration|sylaps-video|
|integration|skype-video|
|integration|sirius-video|
|integration|signal-video|
|integration|shimmer-video|
|integration|salesroom-video|
|integration|roam-video|
|integration|riverside-video|
|integration|ping-video|
|integration|office365-video|
|integration|mirotalk-video|
|integration|jitsi|
|integration|jelly-video|
|integration|jelly-conferencing|
|integration|huddle|
|integration|facetime-video|
|integration|element-call-video|
|integration|eightxeight-video|
|integration|discord-video|
|integration|demodesk-video|
|integration|campfire-video|

<h2 id="tocS_BookingInputLinkLocation_2024_08_13">BookingInputLinkLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookinginputlinklocation_2024_08_13"></a>
<a id="schema_BookingInputLinkLocation_2024_08_13"></a>
<a id="tocSbookinginputlinklocation_2024_08_13"></a>
<a id="tocsbookinginputlinklocation_2024_08_13"></a>

```json
{
  "type": "link"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `link` - it refers to link defined by the organizer.|

<h2 id="tocS_BookingInputPhoneLocation_2024_08_13">BookingInputPhoneLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookinginputphonelocation_2024_08_13"></a>
<a id="schema_BookingInputPhoneLocation_2024_08_13"></a>
<a id="tocSbookinginputphonelocation_2024_08_13"></a>
<a id="tocsbookinginputphonelocation_2024_08_13"></a>

```json
{
  "type": "phone"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `phone` - it refers to phone defined by the organizer.|

<h2 id="tocS_BookingInputOrganizersDefaultAppLocation_2024_08_13">BookingInputOrganizersDefaultAppLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookinginputorganizersdefaultapplocation_2024_08_13"></a>
<a id="schema_BookingInputOrganizersDefaultAppLocation_2024_08_13"></a>
<a id="tocSbookinginputorganizersdefaultapplocation_2024_08_13"></a>
<a id="tocsbookinginputorganizersdefaultapplocation_2024_08_13"></a>

```json
{
  "type": "organizersDefaultApp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only available for team event types and the only allowed value for type is `organizersDefaultApp` - it refers to the default app defined by the organizer.|

<h2 id="tocS_ValidateBookingLocation_2024_08_13">ValidateBookingLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemavalidatebookinglocation_2024_08_13"></a>
<a id="schema_ValidateBookingLocation_2024_08_13"></a>
<a id="tocSvalidatebookinglocation_2024_08_13"></a>
<a id="tocsvalidatebookinglocation_2024_08_13"></a>

```json
{}
```

<h2 id="tocS_CreateBookingAttendee">CreateBookingAttendee</h2>
<!-- backwards compatibility -->
<a id="schemacreatebookingattendee"></a>
<a id="schema_CreateBookingAttendee"></a>
<a id="tocScreatebookingattendee"></a>
<a id="tocscreatebookingattendee"></a>

```json
{
  "name": "John Doe",
  "timeZone": "America/New_York",
  "phoneNumber": "+919876543210",
  "language": "it",
  "email": "john.doe@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the attendee.|
|timeZone|string|true|none|The time zone of the attendee.|
|phoneNumber|string|false|none|The phone number of the attendee in international format.|
|language|string|false|none|The preferred language of the attendee. Used for booking confirmation.|
|email|string|false|none|The email of the attendee.|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ar|
|language|ca|
|language|de|
|language|es|
|language|eu|
|language|he|
|language|id|
|language|ja|
|language|lv|
|language|pl|
|language|ro|
|language|sr|
|language|th|
|language|vi|
|language|az|
|language|cs|
|language|el|
|language|es-419|
|language|fi|
|language|hr|
|language|it|
|language|km|
|language|nl|
|language|pt|
|language|ru|
|language|sv|
|language|tr|
|language|zh-CN|
|language|bg|
|language|da|
|language|en|
|language|et|
|language|fr|
|language|hu|
|language|iw|
|language|ko|
|language|no|
|language|pt-BR|
|language|sk|
|language|ta|
|language|uk|
|language|zh-TW|
|language|bn|

<h2 id="tocS_Routing">Routing</h2>
<!-- backwards compatibility -->
<a id="schemarouting"></a>
<a id="schema_Routing"></a>
<a id="tocSrouting"></a>
<a id="tocsrouting"></a>

```json
{
  "responseId": 123,
  "teamMemberIds": [
    101,
    102
  ],
  "teamMemberEmail": "john.doe@example.com",
  "skipContactOwner": true,
  "crmAppSlug": "salesforce",
  "crmOwnerRecordType": "Account"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responseId|number|true|none|The ID of the routing form response that determined this booking assignment.|
|teamMemberIds|[number]|true|none|Array of team member IDs that were routed to handle this booking.|
|teamMemberEmail|string|false|none|The email of the team member assigned to handle this booking.|
|skipContactOwner|boolean|false|none|Whether to skip contact owner assignment from CRM integration.|
|crmAppSlug|string|false|none|The CRM application slug for integration.|
|crmOwnerRecordType|string|false|none|The CRM owner record type for contact assignment.|

<h2 id="tocS_CreateBookingInput_2024_08_13">CreateBookingInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemacreatebookinginput_2024_08_13"></a>
<a id="schema_CreateBookingInput_2024_08_13"></a>
<a id="tocScreatebookinginput_2024_08_13"></a>
<a id="tocscreatebookinginput_2024_08_13"></a>

```json
{
  "start": "2024-08-13T09:00:00Z",
  "attendee": {
    "name": "John Doe",
    "timeZone": "America/New_York",
    "phoneNumber": "+919876543210",
    "language": "it",
    "email": "john.doe@example.com"
  },
  "bookingFieldsResponses": {
    "customField": "customValue"
  },
  "eventTypeId": 123,
  "eventTypeSlug": "my-event-type",
  "username": "john-doe",
  "teamSlug": "john-doe",
  "organizationSlug": "acme-corp",
  "guests": [
    "guest1@example.com",
    "guest2@example.com"
  ],
  "meetingUrl": "https://example.com/meeting",
  "location": {
    "type": "address"
  },
  "metadata": {
    "key": "value"
  },
  "lengthInMinutes": 30,
  "routing": {
    "responseId": 123,
    "teamMemberIds": [
      101,
      102
    ]
  },
  "emailVerificationCode": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string|true|none|The start time of the booking in ISO 8601 format in UTC timezone.|
|attendee|object|true|none|The attendee's details.|
|bookingFieldsResponses|object|false|none|Booking field responses consisting of an object with booking field slug as keys and user response as values for custom booking fields added by you.|
|eventTypeId|number|false|none|The ID of the event type that is booked. Required unless eventTypeSlug and username are provided as an alternative to identifying the event type.|
|eventTypeSlug|string|false|none|The slug of the event type. Required along with username / teamSlug and optionally organizationSlug if eventTypeId is not provided.|
|username|string|false|none|The username of the event owner. Required along with eventTypeSlug and optionally organizationSlug if eventTypeId is not provided.|
|teamSlug|string|false|none|Team slug for team that owns event type for which slots are fetched. Required along with eventTypeSlug and optionally organizationSlug if the team is part of organization|
|organizationSlug|string|false|none|The organization slug. Optional, only used when booking with eventTypeSlug + username or eventTypeSlug + teamSlug.|
|guests|[string]|false|none|An optional list of guest emails attending the event.|
|meetingUrl|string|false|none|**Deprecated.** Deprecated - use 'location' instead. Meeting URL just for this booking. Displayed in email and calendar event. If not provided then cal video link will be generated.|
|location|[BookingInputAddressLocation_2024_08_13](#schemabookinginputaddresslocation_2024_08_13) \| [BookingInputAttendeeAddressLocation_2024_08_13](#schemabookinginputattendeeaddresslocation_2024_08_13) \| [BookingInputAttendeeDefinedLocation_2024_08_13](#schemabookinginputattendeedefinedlocation_2024_08_13) \| [BookingInputAttendeePhoneLocation_2024_08_13](#schemabookinginputattendeephonelocation_2024_08_13) \| [BookingInputIntegrationLocation_2024_08_13](#schemabookinginputintegrationlocation_2024_08_13) \| [BookingInputLinkLocation_2024_08_13](#schemabookinginputlinklocation_2024_08_13) \| [BookingInputPhoneLocation_2024_08_13](#schemabookinginputphonelocation_2024_08_13) \| [BookingInputOrganizersDefaultAppLocation_2024_08_13](#schemabookinginputorganizersdefaultapplocation_2024_08_13)|false|none|One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.|
|metadata|object|false|none|You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.|
|lengthInMinutes|number|false|none|If it is an event type that has multiple possible lengths that attendee can pick from, you can pass the desired booking length here.<br>    If not provided then event type default length will be used for the booking.|
|routing|object|false|none|Routing information from routing forms that determined the booking assignment. Both responseId and teamMemberIds are required if provided.|
|emailVerificationCode|string|false|none|Email verification code required when event type has email verification enabled.|

<h2 id="tocS_CreateRecurringBookingInput_2024_08_13">CreateRecurringBookingInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecurringbookinginput_2024_08_13"></a>
<a id="schema_CreateRecurringBookingInput_2024_08_13"></a>
<a id="tocScreaterecurringbookinginput_2024_08_13"></a>
<a id="tocscreaterecurringbookinginput_2024_08_13"></a>

```json
{
  "start": "2024-08-13T09:00:00Z",
  "attendee": {
    "name": "John Doe",
    "timeZone": "America/New_York",
    "phoneNumber": "+919876543210",
    "language": "it",
    "email": "john.doe@example.com"
  },
  "bookingFieldsResponses": {
    "customField": "customValue"
  },
  "eventTypeId": 123,
  "eventTypeSlug": "my-event-type",
  "username": "john-doe",
  "teamSlug": "john-doe",
  "organizationSlug": "acme-corp",
  "guests": [
    "guest1@example.com",
    "guest2@example.com"
  ],
  "meetingUrl": "https://example.com/meeting",
  "location": {
    "type": "address"
  },
  "metadata": {
    "key": "value"
  },
  "lengthInMinutes": 30,
  "routing": {
    "responseId": 123,
    "teamMemberIds": [
      101,
      102
    ]
  },
  "emailVerificationCode": "123456",
  "recurrenceCount": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string|true|none|The start time of the booking in ISO 8601 format in UTC timezone.|
|attendee|object|true|none|The attendee's details.|
|bookingFieldsResponses|object|false|none|Booking field responses consisting of an object with booking field slug as keys and user response as values for custom booking fields added by you.|
|eventTypeId|number|false|none|The ID of the event type that is booked. Required unless eventTypeSlug and username are provided as an alternative to identifying the event type.|
|eventTypeSlug|string|false|none|The slug of the event type. Required along with username / teamSlug and optionally organizationSlug if eventTypeId is not provided.|
|username|string|false|none|The username of the event owner. Required along with eventTypeSlug and optionally organizationSlug if eventTypeId is not provided.|
|teamSlug|string|false|none|Team slug for team that owns event type for which slots are fetched. Required along with eventTypeSlug and optionally organizationSlug if the team is part of organization|
|organizationSlug|string|false|none|The organization slug. Optional, only used when booking with eventTypeSlug + username or eventTypeSlug + teamSlug.|
|guests|[string]|false|none|An optional list of guest emails attending the event.|
|meetingUrl|string|false|none|**Deprecated.** Deprecated - use 'location' instead. Meeting URL just for this booking. Displayed in email and calendar event. If not provided then cal video link will be generated.|
|location|[BookingInputAddressLocation_2024_08_13](#schemabookinginputaddresslocation_2024_08_13) \| [BookingInputAttendeeAddressLocation_2024_08_13](#schemabookinginputattendeeaddresslocation_2024_08_13) \| [BookingInputAttendeeDefinedLocation_2024_08_13](#schemabookinginputattendeedefinedlocation_2024_08_13) \| [BookingInputAttendeePhoneLocation_2024_08_13](#schemabookinginputattendeephonelocation_2024_08_13) \| [BookingInputIntegrationLocation_2024_08_13](#schemabookinginputintegrationlocation_2024_08_13) \| [BookingInputLinkLocation_2024_08_13](#schemabookinginputlinklocation_2024_08_13) \| [BookingInputPhoneLocation_2024_08_13](#schemabookinginputphonelocation_2024_08_13) \| [BookingInputOrganizersDefaultAppLocation_2024_08_13](#schemabookinginputorganizersdefaultapplocation_2024_08_13)|false|none|One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.|
|metadata|object|false|none|You can store any additional data you want here. Metadata must have at most 50 keys, each key up to 40 characters, and string values up to 500 characters.|
|lengthInMinutes|number|false|none|If it is an event type that has multiple possible lengths that attendee can pick from, you can pass the desired booking length here.<br>    If not provided then event type default length will be used for the booking.|
|routing|object|false|none|Routing information from routing forms that determined the booking assignment. Both responseId and teamMemberIds are required if provided.|
|emailVerificationCode|string|false|none|Email verification code required when event type has email verification enabled.|
|recurrenceCount|number|false|none|The number of recurrences. If not provided then event type recurrence count will be used. Can't be more than<br>    event type recurrence count|

<h2 id="tocS_BookingHost">BookingHost</h2>
<!-- backwards compatibility -->
<a id="schemabookinghost"></a>
<a id="schema_BookingHost"></a>
<a id="tocSbookinghost"></a>
<a id="tocsbookinghost"></a>

```json
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane100@example.com",
  "displayEmail": "jane100@example.com",
  "username": "jane100",
  "timeZone": "America/Los_Angeles"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|name|string|true|none|none|
|email|string|true|none|none|
|displayEmail|string|true|none|Clean email for display purposes|
|username|string|true|none|none|
|timeZone|string|true|none|none|

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
{
  "id": 1,
  "slug": "some-event"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|slug|string|true|none|none|

<h2 id="tocS_BookingAttendee">BookingAttendee</h2>
<!-- backwards compatibility -->
<a id="schemabookingattendee"></a>
<a id="schema_BookingAttendee"></a>
<a id="tocSbookingattendee"></a>
<a id="tocsbookingattendee"></a>

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "displayEmail": "john@example.com",
  "timeZone": "America/New_York",
  "language": "en",
  "absent": false,
  "phoneNumber": "+1234567890"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|email|string|true|none|none|
|displayEmail|string|true|none|Clean email for display purposes|
|timeZone|string|true|none|none|
|language|string|false|none|none|
|absent|boolean|true|none|none|
|phoneNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ar|
|language|ca|
|language|de|
|language|es|
|language|eu|
|language|he|
|language|id|
|language|ja|
|language|lv|
|language|pl|
|language|ro|
|language|sr|
|language|th|
|language|vi|
|language|az|
|language|cs|
|language|el|
|language|es-419|
|language|fi|
|language|hr|
|language|it|
|language|km|
|language|nl|
|language|pt|
|language|ru|
|language|sv|
|language|tr|
|language|zh-CN|
|language|bg|
|language|da|
|language|en|
|language|et|
|language|fr|
|language|hu|
|language|iw|
|language|ko|
|language|no|
|language|pt-BR|
|language|sk|
|language|ta|
|language|uk|
|language|zh-TW|
|language|bn|

<h2 id="tocS_BookingOutput_2024_08_13">BookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookingoutput_2024_08_13"></a>
<a id="schema_BookingOutput_2024_08_13"></a>
<a id="tocSbookingoutput_2024_08_13"></a>
<a id="tocsbookingoutput_2024_08_13"></a>

```json
{
  "id": 123,
  "uid": "booking_uid_123",
  "title": "Consultation",
  "description": "Learn how to integrate scheduling into marketplace.",
  "hosts": [
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane100@example.com",
      "displayEmail": "jane100@example.com",
      "username": "jane100",
      "timeZone": "America/Los_Angeles"
    }
  ],
  "status": "accepted",
  "cancellationReason": "User requested cancellation",
  "cancelledByEmail": "canceller@example.com",
  "reschedulingReason": "User rescheduled the event",
  "rescheduledByEmail": "rescheduler@example.com",
  "rescheduledFromUid": "previous_uid_123",
  "rescheduledToUid": "new_uid_456",
  "start": "2024-08-13T15:30:00Z",
  "end": "2024-08-13T16:30:00Z",
  "duration": 60,
  "eventTypeId": 50,
  "eventType": {
    "id": 1,
    "slug": "some-event"
  },
  "meetingUrl": "https://example.com/recurring-meeting",
  "location": "https://example.com/meeting",
  "absentHost": true,
  "createdAt": "2024-08-13T15:30:00Z",
  "updatedAt": "2024-08-13T15:30:00Z",
  "metadata": {
    "key": "value"
  },
  "rating": 4,
  "icsUid": "ics_uid_123",
  "attendees": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "displayEmail": "john@example.com",
      "timeZone": "America/New_York",
      "language": "en",
      "absent": false,
      "phoneNumber": "+1234567890"
    }
  ],
  "guests": [
    "guest1@example.com",
    "guest2@example.com"
  ],
  "bookingFieldsResponses": {
    "customField": "customValue"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|uid|string|true|none|none|
|title|string|true|none|none|
|description|string|true|none|none|
|hosts|[[BookingHost](#schemabookinghost)]|true|none|none|
|status|string|true|none|none|
|cancellationReason|string|false|none|none|
|cancelledByEmail|string|false|none|none|
|reschedulingReason|string|false|none|none|
|rescheduledByEmail|string|false|none|none|
|rescheduledFromUid|string|false|none|UID of the previous booking from which this booking was rescheduled.|
|rescheduledToUid|string|false|none|UID of the new booking to which this booking was rescheduled.|
|start|string|true|none|none|
|end|string|true|none|none|
|duration|number|true|none|none|
|eventTypeId|number|true|none|**Deprecated.** Deprecated - rely on 'eventType' object containing the id instead.|
|eventType|[EventType](#schemaeventtype)|true|none|none|
|meetingUrl|string|false|none|**Deprecated.** Deprecated - rely on 'location' field instead.|
|location|string|true|none|none|
|absentHost|boolean|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|
|metadata|object|false|none|none|
|rating|number|false|none|none|
|icsUid|string|false|none|UID of ICS event.|
|attendees|[[BookingAttendee](#schemabookingattendee)]|true|none|none|
|guests|[string]|false|none|none|
|bookingFieldsResponses|object|true|none|Booking field responses consisting of an object with booking field slug as keys and user response as values.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|
|status|accepted|
|status|rejected|
|status|pending|

<h2 id="tocS_RecurringBookingOutput_2024_08_13">RecurringBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemarecurringbookingoutput_2024_08_13"></a>
<a id="schema_RecurringBookingOutput_2024_08_13"></a>
<a id="tocSrecurringbookingoutput_2024_08_13"></a>
<a id="tocsrecurringbookingoutput_2024_08_13"></a>

```json
{
  "id": 123,
  "uid": "booking_uid_123",
  "title": "Consultation",
  "description": "Learn how to integrate scheduling into marketplace.",
  "hosts": [
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane100@example.com",
      "displayEmail": "jane100@example.com",
      "username": "jane100",
      "timeZone": "America/Los_Angeles"
    }
  ],
  "status": "accepted",
  "cancellationReason": "User requested cancellation",
  "cancelledByEmail": "canceller@example.com",
  "reschedulingReason": "User rescheduled the event",
  "rescheduledByEmail": "rescheduler@example.com",
  "rescheduledFromUid": "previous_uid_123",
  "rescheduledToUid": "new_uid_456",
  "start": "2024-08-13T15:30:00Z",
  "end": "2024-08-13T16:30:00Z",
  "duration": 60,
  "eventTypeId": 50,
  "eventType": {
    "id": 1,
    "slug": "some-event"
  },
  "meetingUrl": "https://example.com/recurring-meeting",
  "location": "https://example.com/meeting",
  "absentHost": true,
  "createdAt": "2024-08-13T15:30:00Z",
  "updatedAt": "2024-08-13T15:30:00Z",
  "metadata": {
    "key": "value"
  },
  "rating": 4,
  "icsUid": "ics_uid_123",
  "attendees": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "displayEmail": "john@example.com",
      "timeZone": "America/New_York",
      "language": "en",
      "absent": false,
      "phoneNumber": "+1234567890"
    }
  ],
  "guests": [
    "guest1@example.com",
    "guest2@example.com"
  ],
  "bookingFieldsResponses": {
    "customField": "customValue"
  },
  "recurringBookingUid": "recurring_uid_987"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|uid|string|true|none|none|
|title|string|true|none|none|
|description|string|true|none|none|
|hosts|[[BookingHost](#schemabookinghost)]|true|none|none|
|status|string|true|none|none|
|cancellationReason|string|false|none|none|
|cancelledByEmail|string|false|none|none|
|reschedulingReason|string|false|none|none|
|rescheduledByEmail|string|false|none|none|
|rescheduledFromUid|string|false|none|UID of the previous booking from which this booking was rescheduled.|
|rescheduledToUid|string|false|none|UID of the new booking to which this booking was rescheduled.|
|start|string|true|none|none|
|end|string|true|none|none|
|duration|number|true|none|none|
|eventTypeId|number|true|none|**Deprecated.** Deprecated - rely on 'eventType' object containing the id instead.|
|eventType|[EventType](#schemaeventtype)|true|none|none|
|meetingUrl|string|false|none|**Deprecated.** Deprecated - rely on 'location' field instead.|
|location|string|true|none|none|
|absentHost|boolean|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|
|metadata|object|false|none|none|
|rating|number|false|none|none|
|icsUid|string|false|none|UID of ICS event.|
|attendees|[[BookingAttendee](#schemabookingattendee)]|true|none|none|
|guests|[string]|false|none|none|
|bookingFieldsResponses|object|true|none|Booking field responses consisting of an object with booking field slug as keys and user response as values.|
|recurringBookingUid|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|
|status|accepted|
|status|rejected|
|status|pending|

<h2 id="tocS_SeatedAttendee">SeatedAttendee</h2>
<!-- backwards compatibility -->
<a id="schemaseatedattendee"></a>
<a id="schema_SeatedAttendee"></a>
<a id="tocSseatedattendee"></a>
<a id="tocsseatedattendee"></a>

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "displayEmail": "john@example.com",
  "timeZone": "America/New_York",
  "language": "en",
  "absent": false,
  "phoneNumber": "+1234567890",
  "seatUid": "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
  "bookingFieldsResponses": {
    "customField": "customValue"
  },
  "metadata": {
    "key": "value"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|email|string|true|none|none|
|displayEmail|string|true|none|Clean email for display purposes|
|timeZone|string|true|none|none|
|language|string|false|none|none|
|absent|boolean|true|none|none|
|phoneNumber|string|false|none|none|
|seatUid|string|true|none|none|
|bookingFieldsResponses|object|true|none|Booking field responses consisting of an object with booking field slug as keys and user response as values.|
|metadata|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ar|
|language|ca|
|language|de|
|language|es|
|language|eu|
|language|he|
|language|id|
|language|ja|
|language|lv|
|language|pl|
|language|ro|
|language|sr|
|language|th|
|language|vi|
|language|az|
|language|cs|
|language|el|
|language|es-419|
|language|fi|
|language|hr|
|language|it|
|language|km|
|language|nl|
|language|pt|
|language|ru|
|language|sv|
|language|tr|
|language|zh-CN|
|language|bg|
|language|da|
|language|en|
|language|et|
|language|fr|
|language|hu|
|language|iw|
|language|ko|
|language|no|
|language|pt-BR|
|language|sk|
|language|ta|
|language|uk|
|language|zh-TW|
|language|bn|

<h2 id="tocS_CreateSeatedBookingOutput_2024_08_13">CreateSeatedBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemacreateseatedbookingoutput_2024_08_13"></a>
<a id="schema_CreateSeatedBookingOutput_2024_08_13"></a>
<a id="tocScreateseatedbookingoutput_2024_08_13"></a>
<a id="tocscreateseatedbookingoutput_2024_08_13"></a>

```json
{
  "id": 123,
  "uid": "booking_uid_123",
  "title": "Consultation",
  "description": "Learn how to integrate scheduling into marketplace.",
  "hosts": [
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane100@example.com",
      "displayEmail": "jane100@example.com",
      "username": "jane100",
      "timeZone": "America/Los_Angeles"
    }
  ],
  "status": "accepted",
  "cancellationReason": "User requested cancellation",
  "cancelledByEmail": "canceller@example.com",
  "reschedulingReason": "User rescheduled the event",
  "rescheduledByEmail": "rescheduler@example.com",
  "rescheduledFromUid": "previous_uid_123",
  "rescheduledToUid": "new_uid_456",
  "start": "2024-08-13T15:30:00Z",
  "end": "2024-08-13T16:30:00Z",
  "duration": 60,
  "eventTypeId": 50,
  "eventType": {
    "id": 1,
    "slug": "some-event"
  },
  "meetingUrl": "https://example.com/recurring-meeting",
  "location": "https://example.com/meeting",
  "absentHost": true,
  "createdAt": "2024-08-13T15:30:00Z",
  "updatedAt": "2024-08-13T15:30:00Z",
  "metadata": {
    "key": "value"
  },
  "rating": 4,
  "icsUid": "ics_uid_123",
  "seatUid": "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
  "attendees": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "displayEmail": "john@example.com",
      "timeZone": "America/New_York",
      "language": "en",
      "absent": false,
      "phoneNumber": "+1234567890",
      "seatUid": "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
      "bookingFieldsResponses": {
        "customField": "customValue"
      },
      "metadata": {
        "key": "value"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|uid|string|true|none|none|
|title|string|true|none|none|
|description|string|true|none|none|
|hosts|[[BookingHost](#schemabookinghost)]|true|none|none|
|status|string|true|none|none|
|cancellationReason|string|false|none|none|
|cancelledByEmail|string|false|none|none|
|reschedulingReason|string|false|none|none|
|rescheduledByEmail|string|false|none|none|
|rescheduledFromUid|string|false|none|UID of the previous booking from which this booking was rescheduled.|
|rescheduledToUid|string|false|none|UID of the new booking to which this booking was rescheduled.|
|start|string|true|none|none|
|end|string|true|none|none|
|duration|number|true|none|none|
|eventTypeId|number|true|none|**Deprecated.** Deprecated - rely on 'eventType' object containing the id instead.|
|eventType|[EventType](#schemaeventtype)|true|none|none|
|meetingUrl|string|false|none|**Deprecated.** Deprecated - rely on 'location' field instead.|
|location|string|true|none|none|
|absentHost|boolean|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|
|metadata|object|false|none|none|
|rating|number|false|none|none|
|icsUid|string|false|none|UID of ICS event.|
|seatUid|string|true|none|none|
|attendees|[[SeatedAttendee](#schemaseatedattendee)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|
|status|accepted|
|status|rejected|
|status|pending|

<h2 id="tocS_CreateRecurringSeatedBookingOutput_2024_08_13">CreateRecurringSeatedBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemacreaterecurringseatedbookingoutput_2024_08_13"></a>
<a id="schema_CreateRecurringSeatedBookingOutput_2024_08_13"></a>
<a id="tocScreaterecurringseatedbookingoutput_2024_08_13"></a>
<a id="tocscreaterecurringseatedbookingoutput_2024_08_13"></a>

```json
{
  "id": 123,
  "uid": "booking_uid_123",
  "title": "Consultation",
  "description": "Learn how to integrate scheduling into marketplace.",
  "hosts": [
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane100@example.com",
      "displayEmail": "jane100@example.com",
      "username": "jane100",
      "timeZone": "America/Los_Angeles"
    }
  ],
  "status": "accepted",
  "cancellationReason": "User requested cancellation",
  "cancelledByEmail": "canceller@example.com",
  "reschedulingReason": "User rescheduled the event",
  "rescheduledByEmail": "rescheduler@example.com",
  "rescheduledFromUid": "previous_uid_123",
  "rescheduledToUid": "new_uid_456",
  "start": "2024-08-13T15:30:00Z",
  "end": "2024-08-13T16:30:00Z",
  "duration": 60,
  "eventTypeId": 50,
  "eventType": {
    "id": 1,
    "slug": "some-event"
  },
  "meetingUrl": "https://example.com/recurring-meeting",
  "location": "https://example.com/meeting",
  "absentHost": true,
  "createdAt": "2024-08-13T15:30:00Z",
  "updatedAt": "2024-08-13T15:30:00Z",
  "metadata": {
    "key": "value"
  },
  "rating": 4,
  "icsUid": "ics_uid_123",
  "seatUid": "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
  "attendees": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "displayEmail": "john@example.com",
      "timeZone": "America/New_York",
      "language": "en",
      "absent": false,
      "phoneNumber": "+1234567890",
      "seatUid": "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
      "bookingFieldsResponses": {
        "customField": "customValue"
      },
      "metadata": {
        "key": "value"
      }
    }
  ],
  "recurringBookingUid": "recurring_uid_987"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|uid|string|true|none|none|
|title|string|true|none|none|
|description|string|true|none|none|
|hosts|[[BookingHost](#schemabookinghost)]|true|none|none|
|status|string|true|none|none|
|cancellationReason|string|false|none|none|
|cancelledByEmail|string|false|none|none|
|reschedulingReason|string|false|none|none|
|rescheduledByEmail|string|false|none|none|
|rescheduledFromUid|string|false|none|UID of the previous booking from which this booking was rescheduled.|
|rescheduledToUid|string|false|none|UID of the new booking to which this booking was rescheduled.|
|start|string|true|none|none|
|end|string|true|none|none|
|duration|number|true|none|none|
|eventTypeId|number|true|none|**Deprecated.** Deprecated - rely on 'eventType' object containing the id instead.|
|eventType|[EventType](#schemaeventtype)|true|none|none|
|meetingUrl|string|false|none|**Deprecated.** Deprecated - rely on 'location' field instead.|
|location|string|true|none|none|
|absentHost|boolean|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|
|metadata|object|false|none|none|
|rating|number|false|none|none|
|icsUid|string|false|none|UID of ICS event.|
|seatUid|string|true|none|none|
|attendees|[[SeatedAttendee](#schemaseatedattendee)]|true|none|none|
|recurringBookingUid|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|
|status|accepted|
|status|rejected|
|status|pending|

<h2 id="tocS_CreateBookingOutput_2024_08_13">CreateBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemacreatebookingoutput_2024_08_13"></a>
<a id="schema_CreateBookingOutput_2024_08_13"></a>
<a id="tocScreatebookingoutput_2024_08_13"></a>
<a id="tocscreatebookingoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[BookingOutput_2024_08_13](#schemabookingoutput_2024_08_13) \| [[RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13)] \| [CreateSeatedBookingOutput_2024_08_13](#schemacreateseatedbookingoutput_2024_08_13) \| [[CreateRecurringSeatedBookingOutput_2024_08_13](#schemacreaterecurringseatedbookingoutput_2024_08_13)]|true|none|Booking data, which can be either a BookingOutput object or an array of RecurringBookingOutput objects|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetSeatedBookingOutput_2024_08_13">GetSeatedBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemagetseatedbookingoutput_2024_08_13"></a>
<a id="schema_GetSeatedBookingOutput_2024_08_13"></a>
<a id="tocSgetseatedbookingoutput_2024_08_13"></a>
<a id="tocsgetseatedbookingoutput_2024_08_13"></a>

```json
{
  "id": 123,
  "uid": "booking_uid_123",
  "title": "Consultation",
  "description": "Learn how to integrate scheduling into marketplace.",
  "hosts": [
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane100@example.com",
      "displayEmail": "jane100@example.com",
      "username": "jane100",
      "timeZone": "America/Los_Angeles"
    }
  ],
  "status": "accepted",
  "cancellationReason": "User requested cancellation",
  "cancelledByEmail": "canceller@example.com",
  "reschedulingReason": "User rescheduled the event",
  "rescheduledByEmail": "rescheduler@example.com",
  "rescheduledFromUid": "previous_uid_123",
  "rescheduledToUid": "new_uid_456",
  "start": "2024-08-13T15:30:00Z",
  "end": "2024-08-13T16:30:00Z",
  "duration": 60,
  "eventTypeId": 50,
  "eventType": {
    "id": 1,
    "slug": "some-event"
  },
  "meetingUrl": "https://example.com/recurring-meeting",
  "location": "https://example.com/meeting",
  "absentHost": true,
  "createdAt": "2024-08-13T15:30:00Z",
  "updatedAt": "2024-08-13T15:30:00Z",
  "metadata": {
    "key": "value"
  },
  "rating": 4,
  "icsUid": "ics_uid_123",
  "attendees": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "displayEmail": "john@example.com",
      "timeZone": "America/New_York",
      "language": "en",
      "absent": false,
      "phoneNumber": "+1234567890",
      "seatUid": "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
      "bookingFieldsResponses": {
        "customField": "customValue"
      },
      "metadata": {
        "key": "value"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|uid|string|true|none|none|
|title|string|true|none|none|
|description|string|true|none|none|
|hosts|[[BookingHost](#schemabookinghost)]|true|none|none|
|status|string|true|none|none|
|cancellationReason|string|false|none|none|
|cancelledByEmail|string|false|none|none|
|reschedulingReason|string|false|none|none|
|rescheduledByEmail|string|false|none|none|
|rescheduledFromUid|string|false|none|UID of the previous booking from which this booking was rescheduled.|
|rescheduledToUid|string|false|none|UID of the new booking to which this booking was rescheduled.|
|start|string|true|none|none|
|end|string|true|none|none|
|duration|number|true|none|none|
|eventTypeId|number|true|none|**Deprecated.** Deprecated - rely on 'eventType' object containing the id instead.|
|eventType|[EventType](#schemaeventtype)|true|none|none|
|meetingUrl|string|false|none|**Deprecated.** Deprecated - rely on 'location' field instead.|
|location|string|true|none|none|
|absentHost|boolean|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|
|metadata|object|false|none|none|
|rating|number|false|none|none|
|icsUid|string|false|none|UID of ICS event.|
|attendees|[[SeatedAttendee](#schemaseatedattendee)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|
|status|accepted|
|status|rejected|
|status|pending|

<h2 id="tocS_GetRecurringSeatedBookingOutput_2024_08_13">GetRecurringSeatedBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemagetrecurringseatedbookingoutput_2024_08_13"></a>
<a id="schema_GetRecurringSeatedBookingOutput_2024_08_13"></a>
<a id="tocSgetrecurringseatedbookingoutput_2024_08_13"></a>
<a id="tocsgetrecurringseatedbookingoutput_2024_08_13"></a>

```json
{
  "id": 123,
  "uid": "booking_uid_123",
  "title": "Consultation",
  "description": "Learn how to integrate scheduling into marketplace.",
  "hosts": [
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane100@example.com",
      "displayEmail": "jane100@example.com",
      "username": "jane100",
      "timeZone": "America/Los_Angeles"
    }
  ],
  "status": "accepted",
  "cancellationReason": "User requested cancellation",
  "cancelledByEmail": "canceller@example.com",
  "reschedulingReason": "User rescheduled the event",
  "rescheduledByEmail": "rescheduler@example.com",
  "rescheduledFromUid": "previous_uid_123",
  "rescheduledToUid": "new_uid_456",
  "start": "2024-08-13T15:30:00Z",
  "end": "2024-08-13T16:30:00Z",
  "duration": 60,
  "eventTypeId": 50,
  "eventType": {
    "id": 1,
    "slug": "some-event"
  },
  "meetingUrl": "https://example.com/recurring-meeting",
  "location": "https://example.com/meeting",
  "absentHost": true,
  "createdAt": "2024-08-13T15:30:00Z",
  "updatedAt": "2024-08-13T15:30:00Z",
  "metadata": {
    "key": "value"
  },
  "rating": 4,
  "icsUid": "ics_uid_123",
  "attendees": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "displayEmail": "john@example.com",
      "timeZone": "America/New_York",
      "language": "en",
      "absent": false,
      "phoneNumber": "+1234567890",
      "seatUid": "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
      "bookingFieldsResponses": {
        "customField": "customValue"
      },
      "metadata": {
        "key": "value"
      }
    }
  ],
  "recurringBookingUid": "recurring_uid_987"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|uid|string|true|none|none|
|title|string|true|none|none|
|description|string|true|none|none|
|hosts|[[BookingHost](#schemabookinghost)]|true|none|none|
|status|string|true|none|none|
|cancellationReason|string|false|none|none|
|cancelledByEmail|string|false|none|none|
|reschedulingReason|string|false|none|none|
|rescheduledByEmail|string|false|none|none|
|rescheduledFromUid|string|false|none|UID of the previous booking from which this booking was rescheduled.|
|rescheduledToUid|string|false|none|UID of the new booking to which this booking was rescheduled.|
|start|string|true|none|none|
|end|string|true|none|none|
|duration|number|true|none|none|
|eventTypeId|number|true|none|**Deprecated.** Deprecated - rely on 'eventType' object containing the id instead.|
|eventType|[EventType](#schemaeventtype)|true|none|none|
|meetingUrl|string|false|none|**Deprecated.** Deprecated - rely on 'location' field instead.|
|location|string|true|none|none|
|absentHost|boolean|true|none|none|
|createdAt|string|true|none|none|
|updatedAt|string|true|none|none|
|metadata|object|false|none|none|
|rating|number|false|none|none|
|icsUid|string|false|none|UID of ICS event.|
|attendees|[[SeatedAttendee](#schemaseatedattendee)]|true|none|none|
|recurringBookingUid|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|
|status|accepted|
|status|rejected|
|status|pending|

<h2 id="tocS_GetBookingOutput_2024_08_13">GetBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemagetbookingoutput_2024_08_13"></a>
<a id="schema_GetBookingOutput_2024_08_13"></a>
<a id="tocSgetbookingoutput_2024_08_13"></a>
<a id="tocsgetbookingoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  },
  "error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[BookingOutput_2024_08_13](#schemabookingoutput_2024_08_13) \| [RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13) \| [[RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13)] \| [GetSeatedBookingOutput_2024_08_13](#schemagetseatedbookingoutput_2024_08_13) \| [GetRecurringSeatedBookingOutput_2024_08_13](#schemagetrecurringseatedbookingoutput_2024_08_13) \| [[GetRecurringSeatedBookingOutput_2024_08_13](#schemagetrecurringseatedbookingoutput_2024_08_13)]|true|none|Booking data, which can be either a BookingOutput object, a RecurringBookingOutput object, or an array of RecurringBookingOutput objects|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_RecordingItem">RecordingItem</h2>
<!-- backwards compatibility -->
<a id="schemarecordingitem"></a>
<a id="schema_RecordingItem"></a>
<a id="tocSrecordingitem"></a>
<a id="tocsrecordingitem"></a>

```json
{
  "id": "1234567890",
  "roomName": "daily-video-room-123",
  "startTs": 1678901234,
  "status": "completed",
  "maxParticipants": 10,
  "duration": 3600,
  "shareToken": "share-token-123",
  "downloadLink": "https://cal-video-recordings.s3.us-east-2.amazonaws.com/meetco/123s",
  "error": "Error message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|roomName|string|true|none|none|
|startTs|number|true|none|none|
|status|string|true|none|none|
|maxParticipants|number|false|none|none|
|duration|number|true|none|none|
|shareToken|string|true|none|none|
|downloadLink|string \| null|false|none|none|
|error|string \| null|false|none|none|

<h2 id="tocS_GetBookingRecordingsOutput">GetBookingRecordingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbookingrecordingsoutput"></a>
<a id="schema_GetBookingRecordingsOutput"></a>
<a id="tocSgetbookingrecordingsoutput"></a>
<a id="tocsgetbookingrecordingsoutput"></a>

```json
{
  "status": "success",
  "error": {},
  "data": [
    {
      "id": "1234567890",
      "roomName": "daily-video-room-123",
      "startTs": 1678901234,
      "status": "completed",
      "maxParticipants": 10,
      "duration": 3600,
      "shareToken": "share-token-123",
      "downloadLink": "https://cal-video-recordings.s3.us-east-2.amazonaws.com/meetco/123s",
      "error": "Error message"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|error|object|false|none|none|
|data|[[RecordingItem](#schemarecordingitem)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetBookingTranscriptsOutput">GetBookingTranscriptsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbookingtranscriptsoutput"></a>
<a id="schema_GetBookingTranscriptsOutput"></a>
<a id="tocSgetbookingtranscriptsoutput"></a>
<a id="tocsgetbookingtranscriptsoutput"></a>

```json
{
  "status": "success",
  "data": [
    "https://transcript1.com",
    "https://transcript2.com"
  ],
  "error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[string]|true|none|none|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_PaginationMetaDto">PaginationMetaDto</h2>
<!-- backwards compatibility -->
<a id="schemapaginationmetadto"></a>
<a id="schema_PaginationMetaDto"></a>
<a id="tocSpaginationmetadto"></a>
<a id="tocspaginationmetadto"></a>

```json
{
  "totalItems": 123,
  "remainingItems": 103,
  "returnedItems": 10,
  "itemsPerPage": 10,
  "currentPage": 2,
  "totalPages": 13,
  "hasNextPage": true,
  "hasPreviousPage": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalItems|number|true|none|The total number of items available across all pages, matching the query criteria.|
|remainingItems|number|true|none|The number of items remaining to be fetched *after* the current page. Calculated as: `totalItems - (skip + itemsPerPage)`.|
|returnedItems|number|true|none|The number of items returned in the current page.|
|itemsPerPage|number|true|none|The maximum number of items requested per page.|
|currentPage|number|true|none|The current page number being returned.|
|totalPages|number|true|none|The total number of pages available.|
|hasNextPage|boolean|true|none|Indicates if there is a subsequent page available after the current one.|
|hasPreviousPage|boolean|true|none|Indicates if there is a preceding page available before the current one.|

<h2 id="tocS_GetBookingsOutput_2024_08_13">GetBookingsOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemagetbookingsoutput_2024_08_13"></a>
<a id="schema_GetBookingsOutput_2024_08_13"></a>
<a id="tocSgetbookingsoutput_2024_08_13"></a>
<a id="tocsgetbookingsoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": [
    {
      "id": 123,
      "uid": "booking_uid_123",
      "title": "Consultation",
      "description": "Learn how to integrate scheduling into marketplace.",
      "hosts": [
        {
          "id": 1,
          "name": "Jane Doe",
          "email": "jane100@example.com",
          "displayEmail": "jane100@example.com",
          "username": "jane100",
          "timeZone": "America/Los_Angeles"
        }
      ],
      "status": "accepted",
      "cancellationReason": "User requested cancellation",
      "cancelledByEmail": "canceller@example.com",
      "reschedulingReason": "User rescheduled the event",
      "rescheduledByEmail": "rescheduler@example.com",
      "rescheduledFromUid": "previous_uid_123",
      "rescheduledToUid": "new_uid_456",
      "start": "2024-08-13T15:30:00Z",
      "end": "2024-08-13T16:30:00Z",
      "duration": 60,
      "eventTypeId": 50,
      "eventType": {
        "id": 1,
        "slug": "some-event"
      },
      "meetingUrl": "https://example.com/recurring-meeting",
      "location": "https://example.com/meeting",
      "absentHost": true,
      "createdAt": "2024-08-13T15:30:00Z",
      "updatedAt": "2024-08-13T15:30:00Z",
      "metadata": {
        "key": "value"
      },
      "rating": 4,
      "icsUid": "ics_uid_123",
      "attendees": [
        {
          "name": "John Doe",
          "email": "john@example.com",
          "displayEmail": "john@example.com",
          "timeZone": "America/New_York",
          "language": "en",
          "absent": false,
          "phoneNumber": "+1234567890"
        }
      ],
      "guests": [
        "guest1@example.com",
        "guest2@example.com"
      ],
      "bookingFieldsResponses": {
        "customField": "customValue"
      }
    }
  ],
  "pagination": {
    "totalItems": 123,
    "remainingItems": 103,
    "returnedItems": 10,
    "itemsPerPage": 10,
    "currentPage": 2,
    "totalPages": 13,
    "hasNextPage": true,
    "hasPreviousPage": true
  },
  "error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[BookingOutput_2024_08_13](#schemabookingoutput_2024_08_13) \| [RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13) \| [GetSeatedBookingOutput_2024_08_13](#schemagetseatedbookingoutput_2024_08_13) \| [GetRecurringSeatedBookingOutput_2024_08_13](#schemagetrecurringseatedbookingoutput_2024_08_13)]|true|none|Array of booking data, which can contain either BookingOutput objects or RecurringBookingOutput objects|
|pagination|[PaginationMetaDto](#schemapaginationmetadto)|true|none|none|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_RescheduleBookingInput_2024_08_13">RescheduleBookingInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemareschedulebookinginput_2024_08_13"></a>
<a id="schema_RescheduleBookingInput_2024_08_13"></a>
<a id="tocSreschedulebookinginput_2024_08_13"></a>
<a id="tocsreschedulebookinginput_2024_08_13"></a>

```json
{
  "start": "2024-08-13T09:00:00Z",
  "rescheduledBy": "string",
  "reschedulingReason": "User requested reschedule",
  "emailVerificationCode": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string|true|none|The start time of the booking in ISO 8601 format in UTC timezone.|
|rescheduledBy|string|false|none|Email of the person who is rescheduling the booking - only needed when rescheduling a booking that requires a confirmation.<br>If event type owner email is provided then rescheduled booking will be automatically confirmed. If attendee email or no email is passed then the event type<br>owner will have to confirm the rescheduled booking.|
|reschedulingReason|string|false|none|Reason for rescheduling the booking|
|emailVerificationCode|string|false|none|Email verification code required when event type has email verification enabled.|

<h2 id="tocS_RescheduleSeatedBookingInput_2024_08_13">RescheduleSeatedBookingInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemarescheduleseatedbookinginput_2024_08_13"></a>
<a id="schema_RescheduleSeatedBookingInput_2024_08_13"></a>
<a id="tocSrescheduleseatedbookinginput_2024_08_13"></a>
<a id="tocsrescheduleseatedbookinginput_2024_08_13"></a>

```json
{
  "start": "2024-08-13T09:00:00Z",
  "rescheduledBy": "string",
  "seatUid": "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
  "emailVerificationCode": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string|true|none|The start time of the booking in ISO 8601 format in UTC timezone.|
|rescheduledBy|string|false|none|Email of the person who is rescheduling the booking - only needed when rescheduling a booking that requires a confirmation.<br>If event type owner email is provided then rescheduled booking will be automatically confirmed. If attendee email or no email is passed then the event type<br>owner will have to confirm the rescheduled booking.|
|seatUid|string|true|none|Uid of the specific seat within booking.|
|emailVerificationCode|string|false|none|Email verification code required when event type has email verification enabled.|

<h2 id="tocS_RescheduleBookingOutput_2024_08_13">RescheduleBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemareschedulebookingoutput_2024_08_13"></a>
<a id="schema_RescheduleBookingOutput_2024_08_13"></a>
<a id="tocSreschedulebookingoutput_2024_08_13"></a>
<a id="tocsreschedulebookingoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[BookingOutput_2024_08_13](#schemabookingoutput_2024_08_13) \| [RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13) \| [CreateSeatedBookingOutput_2024_08_13](#schemacreateseatedbookingoutput_2024_08_13) \| [CreateRecurringSeatedBookingOutput_2024_08_13](#schemacreaterecurringseatedbookingoutput_2024_08_13)|true|none|Booking data, which can be either a BookingOutput object or a RecurringBookingOutput object|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CancelBookingInput_2024_08_13">CancelBookingInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemacancelbookinginput_2024_08_13"></a>
<a id="schema_CancelBookingInput_2024_08_13"></a>
<a id="tocScancelbookinginput_2024_08_13"></a>
<a id="tocscancelbookinginput_2024_08_13"></a>

```json
{
  "cancellationReason": "User requested cancellation",
  "cancelSubsequentBookings": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationReason|string|false|none|none|
|cancelSubsequentBookings|boolean|false|none|For recurring non-seated booking only - if true, cancel booking with the bookingUid of the individual recurrence and all recurrences that come after it.|

<h2 id="tocS_CancelSeatedBookingInput_2024_08_13">CancelSeatedBookingInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemacancelseatedbookinginput_2024_08_13"></a>
<a id="schema_CancelSeatedBookingInput_2024_08_13"></a>
<a id="tocScancelseatedbookinginput_2024_08_13"></a>
<a id="tocscancelseatedbookinginput_2024_08_13"></a>

```json
{
  "seatUid": "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
  "cancellationReason": "User requested cancellation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seatUid|string|true|none|Uid of the specific seat within booking.|
|cancellationReason|string|false|none|none|

<h2 id="tocS_CancelBookingOutput_2024_08_13">CancelBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemacancelbookingoutput_2024_08_13"></a>
<a id="schema_CancelBookingOutput_2024_08_13"></a>
<a id="tocScancelbookingoutput_2024_08_13"></a>
<a id="tocscancelbookingoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[BookingOutput_2024_08_13](#schemabookingoutput_2024_08_13) \| [RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13) \| [[RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13)] \| [GetSeatedBookingOutput_2024_08_13](#schemagetseatedbookingoutput_2024_08_13) \| [GetRecurringSeatedBookingOutput_2024_08_13](#schemagetrecurringseatedbookingoutput_2024_08_13) \| [[GetRecurringSeatedBookingOutput_2024_08_13](#schemagetrecurringseatedbookingoutput_2024_08_13)]|true|none|Booking data, which can be either a BookingOutput object, a RecurringBookingOutput object, or an array of RecurringBookingOutput objects|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_MarkAbsentAttendee">MarkAbsentAttendee</h2>
<!-- backwards compatibility -->
<a id="schemamarkabsentattendee"></a>
<a id="schema_MarkAbsentAttendee"></a>
<a id="tocSmarkabsentattendee"></a>
<a id="tocsmarkabsentattendee"></a>

```json
{
  "email": "string",
  "absent": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|absent|boolean|true|none|none|

<h2 id="tocS_MarkAbsentBookingInput_2024_08_13">MarkAbsentBookingInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemamarkabsentbookinginput_2024_08_13"></a>
<a id="schema_MarkAbsentBookingInput_2024_08_13"></a>
<a id="tocSmarkabsentbookinginput_2024_08_13"></a>
<a id="tocsmarkabsentbookinginput_2024_08_13"></a>

```json
{
  "host": false,
  "attendees": [
    {
      "email": "string",
      "absent": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|boolean|false|none|Whether the host was absent|
|attendees|[[MarkAbsentAttendee](#schemamarkabsentattendee)]|false|none|none|

<h2 id="tocS_MarkAbsentBookingOutput_2024_08_13">MarkAbsentBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemamarkabsentbookingoutput_2024_08_13"></a>
<a id="schema_MarkAbsentBookingOutput_2024_08_13"></a>
<a id="tocSmarkabsentbookingoutput_2024_08_13"></a>
<a id="tocsmarkabsentbookingoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[BookingOutput_2024_08_13](#schemabookingoutput_2024_08_13) \| [RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13)|true|none|Booking data, which can be either a BookingOutput object or a RecurringBookingOutput object|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_ReassignedToDto">ReassignedToDto</h2>
<!-- backwards compatibility -->
<a id="schemareassignedtodto"></a>
<a id="schema_ReassignedToDto"></a>
<a id="tocSreassignedtodto"></a>
<a id="tocsreassignedtodto"></a>

```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "displayEmail": "john.doe@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|name|string|true|none|none|
|email|string|true|none|none|
|displayEmail|string|true|none|Clean email for display purposes|

<h2 id="tocS_ReassignBookingOutput_2024_08_13">ReassignBookingOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemareassignbookingoutput_2024_08_13"></a>
<a id="schema_ReassignBookingOutput_2024_08_13"></a>
<a id="tocSreassignbookingoutput_2024_08_13"></a>
<a id="tocsreassignbookingoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "status": "success",
    "data": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ReassignBookingOutput_2024_08_13](#schemareassignbookingoutput_2024_08_13)|true|none|Booking data, which can be either a ReassignAutoBookingOutput object or a ReassignManualBookingOutput object|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_ReassignToUserBookingInput_2024_08_13">ReassignToUserBookingInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemareassigntouserbookinginput_2024_08_13"></a>
<a id="schema_ReassignToUserBookingInput_2024_08_13"></a>
<a id="tocSreassigntouserbookinginput_2024_08_13"></a>
<a id="tocsreassigntouserbookinginput_2024_08_13"></a>

```json
{
  "reason": "Host has to take another call"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Reason for reassigning the booking|

<h2 id="tocS_DeclineBookingInput_2024_08_13">DeclineBookingInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemadeclinebookinginput_2024_08_13"></a>
<a id="schema_DeclineBookingInput_2024_08_13"></a>
<a id="tocSdeclinebookinginput_2024_08_13"></a>
<a id="tocsdeclinebookinginput_2024_08_13"></a>

```json
{
  "reason": "Host has to take another call"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Reason for declining a booking that requires a confirmation|

<h2 id="tocS_CalendarLink">CalendarLink</h2>
<!-- backwards compatibility -->
<a id="schemacalendarlink"></a>
<a id="schema_CalendarLink"></a>
<a id="tocScalendarlink"></a>
<a id="tocscalendarlink"></a>

```json
{
  "label": "string",
  "link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|The label of the calendar link|
|link|string|true|none|The link to the calendar|

<h2 id="tocS_CalendarLinksOutput_2024_08_13">CalendarLinksOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemacalendarlinksoutput_2024_08_13"></a>
<a id="schema_CalendarLinksOutput_2024_08_13"></a>
<a id="tocScalendarlinksoutput_2024_08_13"></a>
<a id="tocscalendarlinksoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": [
    {
      "label": "string",
      "link": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|The status of the request, always 'success' for successful responses|
|data|[[CalendarLink](#schemacalendarlink)]|true|none|Calendar links for the booking|

<h2 id="tocS_BookingReference">BookingReference</h2>
<!-- backwards compatibility -->
<a id="schemabookingreference"></a>
<a id="schema_BookingReference"></a>
<a id="tocSbookingreference"></a>
<a id="tocsbookingreference"></a>

```json
{
  "type": "string",
  "eventUid": "string",
  "destinationCalendarId": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of the booking reference|
|eventUid|string|true|none|The event uid of the booking|
|destinationCalendarId|string \| null|true|none|The id of the calendar the event is created in|
|id|number|true|none|The id of the booking reference|

<h2 id="tocS_BookingReferencesOutput_2024_08_13">BookingReferencesOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookingreferencesoutput_2024_08_13"></a>
<a id="schema_BookingReferencesOutput_2024_08_13"></a>
<a id="tocSbookingreferencesoutput_2024_08_13"></a>
<a id="tocsbookingreferencesoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": [
    {
      "type": "string",
      "eventUid": "string",
      "destinationCalendarId": "string",
      "id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|The status of the request, always 'success' for successful responses|
|data|[[BookingReference](#schemabookingreference)]|true|none|Booking References|

<h2 id="tocS_CalMeetingParticipant">CalMeetingParticipant</h2>
<!-- backwards compatibility -->
<a id="schemacalmeetingparticipant"></a>
<a id="schema_CalMeetingParticipant"></a>
<a id="tocScalmeetingparticipant"></a>
<a id="tocscalmeetingparticipant"></a>

```json
{
  "userId": "user123",
  "userName": "John Doe",
  "joinTime": 1678901234,
  "duration": 3600
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string \| null|true|none|none|
|userName|string \| null|true|none|none|
|joinTime|number|true|none|none|
|duration|number|true|none|none|

<h2 id="tocS_CalMeetingSession">CalMeetingSession</h2>
<!-- backwards compatibility -->
<a id="schemacalmeetingsession"></a>
<a id="schema_CalMeetingSession"></a>
<a id="tocScalmeetingsession"></a>
<a id="tocscalmeetingsession"></a>

```json
{
  "id": "session123",
  "room": "daily-video-room-123",
  "startTime": 1678901234,
  "duration": 3600,
  "ongoing": false,
  "maxParticipants": 10,
  "participants": [
    {
      "userId": "user123",
      "userName": "John Doe",
      "joinTime": 1678901234,
      "duration": 3600
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|room|string|true|none|none|
|startTime|number|true|none|none|
|duration|number|true|none|none|
|ongoing|boolean|true|none|none|
|maxParticipants|number|true|none|none|
|participants|[[CalMeetingParticipant](#schemacalmeetingparticipant)]|true|none|none|

<h2 id="tocS_GetBookingVideoSessionsOutput">GetBookingVideoSessionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbookingvideosessionsoutput"></a>
<a id="schema_GetBookingVideoSessionsOutput"></a>
<a id="tocSgetbookingvideosessionsoutput"></a>
<a id="tocsgetbookingvideosessionsoutput"></a>

```json
{
  "status": "success",
  "data": [
    {
      "id": "session123",
      "room": "daily-video-room-123",
      "startTime": 1678901234,
      "duration": 3600,
      "ongoing": false,
      "maxParticipants": 10,
      "participants": [
        {
          "userId": "user123",
          "userName": "John Doe",
          "joinTime": 1678901234,
          "duration": 3600
        }
      ]
    }
  ],
  "error": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[CalMeetingSession](#schemacalmeetingsession)]|true|none|none|
|error|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_BookingAttendeeWithId_2024_08_13">BookingAttendeeWithId_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookingattendeewithid_2024_08_13"></a>
<a id="schema_BookingAttendeeWithId_2024_08_13"></a>
<a id="tocSbookingattendeewithid_2024_08_13"></a>
<a id="tocsbookingattendeewithid_2024_08_13"></a>

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "displayEmail": "john@example.com",
  "timeZone": "America/New_York",
  "language": "en",
  "absent": false,
  "phoneNumber": "+1234567890",
  "id": 251
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|email|string|true|none|none|
|displayEmail|string|true|none|Clean email for display purposes|
|timeZone|string|true|none|none|
|language|string|false|none|none|
|absent|boolean|true|none|none|
|phoneNumber|string|false|none|none|
|id|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ar|
|language|ca|
|language|de|
|language|es|
|language|eu|
|language|he|
|language|id|
|language|ja|
|language|lv|
|language|pl|
|language|ro|
|language|sr|
|language|th|
|language|vi|
|language|az|
|language|cs|
|language|el|
|language|es-419|
|language|fi|
|language|hr|
|language|it|
|language|km|
|language|nl|
|language|pt|
|language|ru|
|language|sv|
|language|tr|
|language|zh-CN|
|language|bg|
|language|da|
|language|en|
|language|et|
|language|fr|
|language|hu|
|language|iw|
|language|ko|
|language|no|
|language|pt-BR|
|language|sk|
|language|ta|
|language|uk|
|language|zh-TW|
|language|bn|

<h2 id="tocS_GetBookingAttendeesOutput_2024_08_13">GetBookingAttendeesOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemagetbookingattendeesoutput_2024_08_13"></a>
<a id="schema_GetBookingAttendeesOutput_2024_08_13"></a>
<a id="tocSgetbookingattendeesoutput_2024_08_13"></a>
<a id="tocsgetbookingattendeesoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "displayEmail": "john@example.com",
      "timeZone": "America/New_York",
      "language": "en",
      "absent": false,
      "phoneNumber": "+1234567890",
      "id": 251
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[BookingAttendeeWithId_2024_08_13](#schemabookingattendeewithid_2024_08_13)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetBookingAttendeeOutput_2024_08_13">GetBookingAttendeeOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemagetbookingattendeeoutput_2024_08_13"></a>
<a id="schema_GetBookingAttendeeOutput_2024_08_13"></a>
<a id="tocSgetbookingattendeeoutput_2024_08_13"></a>
<a id="tocsgetbookingattendeeoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "displayEmail": "john@example.com",
    "timeZone": "America/New_York",
    "language": "en",
    "absent": false,
    "phoneNumber": "+1234567890",
    "id": 251
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[BookingAttendeeWithId_2024_08_13](#schemabookingattendeewithid_2024_08_13)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_AddAttendeeInput_2024_08_13">AddAttendeeInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaaddattendeeinput_2024_08_13"></a>
<a id="schema_AddAttendeeInput_2024_08_13"></a>
<a id="tocSaddattendeeinput_2024_08_13"></a>
<a id="tocsaddattendeeinput_2024_08_13"></a>

```json
{
  "name": "John Doe",
  "timeZone": "America/New_York",
  "phoneNumber": "+919876543210",
  "language": "it",
  "email": "john.doe@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the attendee.|
|timeZone|string|true|none|The time zone of the attendee.|
|phoneNumber|string|false|none|The phone number of the attendee in international format.|
|language|string|false|none|The preferred language of the attendee. Used for booking confirmation.|
|email|string|true|none|The email of the attendee.|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ar|
|language|ca|
|language|de|
|language|es|
|language|eu|
|language|he|
|language|id|
|language|ja|
|language|lv|
|language|pl|
|language|ro|
|language|sr|
|language|th|
|language|vi|
|language|az|
|language|cs|
|language|el|
|language|es-419|
|language|fi|
|language|hr|
|language|it|
|language|km|
|language|nl|
|language|pt|
|language|ru|
|language|sv|
|language|tr|
|language|zh-CN|
|language|bg|
|language|da|
|language|en|
|language|et|
|language|fr|
|language|hu|
|language|iw|
|language|ko|
|language|no|
|language|pt-BR|
|language|sk|
|language|ta|
|language|uk|
|language|zh-TW|
|language|bn|

<h2 id="tocS_BookingAttendeeOutput_2024_08_13">BookingAttendeeOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemabookingattendeeoutput_2024_08_13"></a>
<a id="schema_BookingAttendeeOutput_2024_08_13"></a>
<a id="tocSbookingattendeeoutput_2024_08_13"></a>
<a id="tocsbookingattendeeoutput_2024_08_13"></a>

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "displayEmail": "john@example.com",
  "timeZone": "America/New_York",
  "language": "en",
  "absent": false,
  "phoneNumber": "+1234567890",
  "id": 251,
  "bookingId": 313
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|email|string|true|none|none|
|displayEmail|string|true|none|Clean email for display purposes|
|timeZone|string|true|none|none|
|language|string|false|none|none|
|absent|boolean|true|none|none|
|phoneNumber|string|false|none|none|
|id|number|true|none|none|
|bookingId|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ar|
|language|ca|
|language|de|
|language|es|
|language|eu|
|language|he|
|language|id|
|language|ja|
|language|lv|
|language|pl|
|language|ro|
|language|sr|
|language|th|
|language|vi|
|language|az|
|language|cs|
|language|el|
|language|es-419|
|language|fi|
|language|hr|
|language|it|
|language|km|
|language|nl|
|language|pt|
|language|ru|
|language|sv|
|language|tr|
|language|zh-CN|
|language|bg|
|language|da|
|language|en|
|language|et|
|language|fr|
|language|hu|
|language|iw|
|language|ko|
|language|no|
|language|pt-BR|
|language|sk|
|language|ta|
|language|uk|
|language|zh-TW|
|language|bn|

<h2 id="tocS_AddAttendeeOutput_2024_08_13">AddAttendeeOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaaddattendeeoutput_2024_08_13"></a>
<a id="schema_AddAttendeeOutput_2024_08_13"></a>
<a id="tocSaddattendeeoutput_2024_08_13"></a>
<a id="tocsaddattendeeoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "displayEmail": "john@example.com",
    "timeZone": "America/New_York",
    "language": "en",
    "absent": false,
    "phoneNumber": "+1234567890",
    "id": 251,
    "bookingId": 313
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[BookingAttendeeOutput_2024_08_13](#schemabookingattendeeoutput_2024_08_13)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_RemovedAttendeeOutput_2024_08_13">RemovedAttendeeOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaremovedattendeeoutput_2024_08_13"></a>
<a id="schema_RemovedAttendeeOutput_2024_08_13"></a>
<a id="tocSremovedattendeeoutput_2024_08_13"></a>
<a id="tocsremovedattendeeoutput_2024_08_13"></a>

```json
{
  "id": 123,
  "bookingId": 456,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "timeZone": "America/New_York"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|The ID of the attendee.|
|bookingId|number|true|none|The ID of the booking.|
|name|string|true|none|The name of the attendee.|
|email|string|true|none|The email of the attendee.|
|timeZone|string|true|none|The time zone of the attendee.|

<h2 id="tocS_RemoveAttendeeOutput_2024_08_13">RemoveAttendeeOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaremoveattendeeoutput_2024_08_13"></a>
<a id="schema_RemoveAttendeeOutput_2024_08_13"></a>
<a id="tocSremoveattendeeoutput_2024_08_13"></a>
<a id="tocsremoveattendeeoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "bookingId": 456,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "timeZone": "America/New_York"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[RemovedAttendeeOutput_2024_08_13](#schemaremovedattendeeoutput_2024_08_13)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_Guest">Guest</h2>
<!-- backwards compatibility -->
<a id="schemaguest"></a>
<a id="schema_Guest"></a>
<a id="tocSguest"></a>
<a id="tocsguest"></a>

```json
{
  "email": "john.doe@example.com",
  "name": "John Doe",
  "timeZone": "America/New_York",
  "phoneNumber": "+919876543210",
  "language": "it"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email of the guest.|
|name|string|false|none|The name of the guest.|
|timeZone|string|false|none|The time zone of the guest.|
|phoneNumber|string|false|none|The phone number of the guest in international format.|
|language|string|false|none|The preferred language of the guest. Used for booking confirmation.|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ar|
|language|ca|
|language|de|
|language|es|
|language|eu|
|language|he|
|language|id|
|language|ja|
|language|lv|
|language|pl|
|language|ro|
|language|sr|
|language|th|
|language|vi|
|language|az|
|language|cs|
|language|el|
|language|es-419|
|language|fi|
|language|hr|
|language|it|
|language|km|
|language|nl|
|language|pt|
|language|ru|
|language|sv|
|language|tr|
|language|zh-CN|
|language|bg|
|language|da|
|language|en|
|language|et|
|language|fr|
|language|hu|
|language|iw|
|language|ko|
|language|no|
|language|pt-BR|
|language|sk|
|language|ta|
|language|uk|
|language|zh-TW|
|language|bn|

<h2 id="tocS_AddGuestsInput_2024_08_13">AddGuestsInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaaddguestsinput_2024_08_13"></a>
<a id="schema_AddGuestsInput_2024_08_13"></a>
<a id="tocSaddguestsinput_2024_08_13"></a>
<a id="tocsaddguestsinput_2024_08_13"></a>

```json
{
  "guests": [
    {
      "email": "john.doe@example.com",
      "name": "John Doe",
      "timeZone": "America/New_York"
    },
    {
      "email": "jane.smith@example.com",
      "name": "Jane Smith"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guests|[[Guest](#schemaguest)]|true|none|Array of guests to add to the booking. Maximum 10 guests per request.|

<h2 id="tocS_AddGuestsOutput_2024_08_13">AddGuestsOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaaddguestsoutput_2024_08_13"></a>
<a id="schema_AddGuestsOutput_2024_08_13"></a>
<a id="tocSaddguestsoutput_2024_08_13"></a>
<a id="tocsaddguestsoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[BookingOutput_2024_08_13](#schemabookingoutput_2024_08_13) \| [RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13) \| [[RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13)] \| [GetSeatedBookingOutput_2024_08_13](#schemagetseatedbookingoutput_2024_08_13) \| [GetRecurringSeatedBookingOutput_2024_08_13](#schemagetrecurringseatedbookingoutput_2024_08_13) \| [[GetRecurringSeatedBookingOutput_2024_08_13](#schemagetrecurringseatedbookingoutput_2024_08_13)]|true|none|Booking data, which can be either a BookingOutput object, a RecurringBookingOutput object, or an array of RecurringBookingOutput objects|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UpdateInputAddressLocation_2024_08_13">UpdateInputAddressLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinputaddresslocation_2024_08_13"></a>
<a id="schema_UpdateInputAddressLocation_2024_08_13"></a>
<a id="tocSupdateinputaddresslocation_2024_08_13"></a>
<a id="tocsupdateinputaddresslocation_2024_08_13"></a>

```json
{
  "type": "address",
  "address": "123 Example St, City, Country"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `address` - it refers to address defined by the organizer.|
|address|string|true|none|none|

<h2 id="tocS_UpdateBookingInputAttendeeAddressLocation_2024_08_13">UpdateBookingInputAttendeeAddressLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookinginputattendeeaddresslocation_2024_08_13"></a>
<a id="schema_UpdateBookingInputAttendeeAddressLocation_2024_08_13"></a>
<a id="tocSupdatebookinginputattendeeaddresslocation_2024_08_13"></a>
<a id="tocsupdatebookinginputattendeeaddresslocation_2024_08_13"></a>

```json
{
  "type": "attendeeAddress",
  "address": "123 Example St, City, Country"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `attendeeAddress`|
|address|string|true|none|none|

<h2 id="tocS_UpdateBookingInputAttendeeDefinedLocation_2024_08_13">UpdateBookingInputAttendeeDefinedLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookinginputattendeedefinedlocation_2024_08_13"></a>
<a id="schema_UpdateBookingInputAttendeeDefinedLocation_2024_08_13"></a>
<a id="tocSupdatebookinginputattendeedefinedlocation_2024_08_13"></a>
<a id="tocsupdatebookinginputattendeedefinedlocation_2024_08_13"></a>

```json
{
  "type": "attendeeDefined",
  "location": "321 Example St, City, Country"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `attendeeDefined`|
|location|string|true|none|none|

<h2 id="tocS_UpdateBookingInputAttendeePhoneLocation_2024_08_13">UpdateBookingInputAttendeePhoneLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookinginputattendeephonelocation_2024_08_13"></a>
<a id="schema_UpdateBookingInputAttendeePhoneLocation_2024_08_13"></a>
<a id="tocSupdatebookinginputattendeephonelocation_2024_08_13"></a>
<a id="tocsupdatebookinginputattendeephonelocation_2024_08_13"></a>

```json
{
  "type": "attendeePhone",
  "phone": "+37120993151"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `attendeePhone`|
|phone|string|true|none|none|

<h2 id="tocS_UpdateBookingInputLinkLocation_2024_08_13">UpdateBookingInputLinkLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookinginputlinklocation_2024_08_13"></a>
<a id="schema_UpdateBookingInputLinkLocation_2024_08_13"></a>
<a id="tocSupdatebookinginputlinklocation_2024_08_13"></a>
<a id="tocsupdatebookinginputlinklocation_2024_08_13"></a>

```json
{
  "type": "link",
  "link": "https://meet.google.com/txi-fein-xyz"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `link` - it refers to link defined by the organizer.|
|link|string|true|none|none|

<h2 id="tocS_UpdateBookingInputPhoneLocation_2024_08_13">UpdateBookingInputPhoneLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookinginputphonelocation_2024_08_13"></a>
<a id="schema_UpdateBookingInputPhoneLocation_2024_08_13"></a>
<a id="tocSupdatebookinginputphonelocation_2024_08_13"></a>
<a id="tocsupdatebookinginputphonelocation_2024_08_13"></a>

```json
{
  "type": "phone",
  "phone": "+37120993151"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `phone` - it refers to phone defined by the organizer.|
|phone|string|true|none|none|

<h2 id="tocS_UpdateBookingInputIntegrationLocation_2024_08_13">UpdateBookingInputIntegrationLocation_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookinginputintegrationlocation_2024_08_13"></a>
<a id="schema_UpdateBookingInputIntegrationLocation_2024_08_13"></a>
<a id="tocSupdatebookinginputintegrationlocation_2024_08_13"></a>
<a id="tocsupdatebookinginputintegrationlocation_2024_08_13"></a>

```json
{
  "type": "integration",
  "integration": "cal-video"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|only allowed value for type is `integration`|
|integration|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|integration|cal-video|
|integration|google-meet|
|integration|zoom|
|integration|whereby-video|
|integration|whatsapp-video|
|integration|webex-video|
|integration|telegram-video|
|integration|tandem|
|integration|sylaps-video|
|integration|skype-video|
|integration|sirius-video|
|integration|signal-video|
|integration|shimmer-video|
|integration|salesroom-video|
|integration|roam-video|
|integration|riverside-video|
|integration|ping-video|
|integration|office365-video|
|integration|mirotalk-video|
|integration|jitsi|
|integration|jelly-video|
|integration|jelly-conferencing|
|integration|huddle|
|integration|facetime-video|
|integration|element-call-video|
|integration|eightxeight-video|
|integration|discord-video|
|integration|demodesk-video|
|integration|campfire-video|

<h2 id="tocS_UpdateBookingLocationInput_2024_08_13">UpdateBookingLocationInput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookinglocationinput_2024_08_13"></a>
<a id="schema_UpdateBookingLocationInput_2024_08_13"></a>
<a id="tocSupdatebookinglocationinput_2024_08_13"></a>
<a id="tocsupdatebookinglocationinput_2024_08_13"></a>

```json
{
  "location": {
    "type": "address",
    "address": "123 Example St, City, Country"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[UpdateInputAddressLocation_2024_08_13](#schemaupdateinputaddresslocation_2024_08_13) \| [UpdateBookingInputAttendeeAddressLocation_2024_08_13](#schemaupdatebookinginputattendeeaddresslocation_2024_08_13) \| [UpdateBookingInputAttendeeDefinedLocation_2024_08_13](#schemaupdatebookinginputattendeedefinedlocation_2024_08_13) \| [UpdateBookingInputAttendeePhoneLocation_2024_08_13](#schemaupdatebookinginputattendeephonelocation_2024_08_13) \| [UpdateBookingInputLinkLocation_2024_08_13](#schemaupdatebookinginputlinklocation_2024_08_13) \| [UpdateBookingInputPhoneLocation_2024_08_13](#schemaupdatebookinginputphonelocation_2024_08_13) \| [UpdateBookingInputIntegrationLocation_2024_08_13](#schemaupdatebookinginputintegrationlocation_2024_08_13)|false|none|One of the event type locations. If instead of passing one of the location objects as required by schema you are still passing a string please use an object.|

<h2 id="tocS_UpdateBookingLocationOutput_2024_08_13">UpdateBookingLocationOutput_2024_08_13</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebookinglocationoutput_2024_08_13"></a>
<a id="schema_UpdateBookingLocationOutput_2024_08_13"></a>
<a id="tocSupdatebookinglocationoutput_2024_08_13"></a>
<a id="tocsupdatebookinglocationoutput_2024_08_13"></a>

```json
{
  "status": "success",
  "data": {
    "id": 123,
    "uid": "booking_uid_123",
    "title": "Consultation",
    "description": "Learn how to integrate scheduling into marketplace.",
    "hosts": [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane100@example.com",
        "displayEmail": "jane100@example.com",
        "username": "jane100",
        "timeZone": "America/Los_Angeles"
      }
    ],
    "status": "accepted",
    "cancellationReason": "User requested cancellation",
    "cancelledByEmail": "canceller@example.com",
    "reschedulingReason": "User rescheduled the event",
    "rescheduledByEmail": "rescheduler@example.com",
    "rescheduledFromUid": "previous_uid_123",
    "rescheduledToUid": "new_uid_456",
    "start": "2024-08-13T15:30:00Z",
    "end": "2024-08-13T16:30:00Z",
    "duration": 60,
    "eventTypeId": 50,
    "eventType": {
      "id": 1,
      "slug": "some-event"
    },
    "meetingUrl": "https://example.com/recurring-meeting",
    "location": "https://example.com/meeting",
    "absentHost": true,
    "createdAt": "2024-08-13T15:30:00Z",
    "updatedAt": "2024-08-13T15:30:00Z",
    "metadata": {
      "key": "value"
    },
    "rating": 4,
    "icsUid": "ics_uid_123",
    "attendees": [
      {
        "name": "John Doe",
        "email": "john@example.com",
        "displayEmail": "john@example.com",
        "timeZone": "America/New_York",
        "language": "en",
        "absent": false,
        "phoneNumber": "+1234567890"
      }
    ],
    "guests": [
      "guest1@example.com",
      "guest2@example.com"
    ],
    "bookingFieldsResponses": {
      "customField": "customValue"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[BookingOutput_2024_08_13](#schemabookingoutput_2024_08_13) \| [RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13) \| [[RecurringBookingOutput_2024_08_13](#schemarecurringbookingoutput_2024_08_13)] \| [GetSeatedBookingOutput_2024_08_13](#schemagetseatedbookingoutput_2024_08_13) \| [GetRecurringSeatedBookingOutput_2024_08_13](#schemagetrecurringseatedbookingoutput_2024_08_13) \| [[GetRecurringSeatedBookingOutput_2024_08_13](#schemagetrecurringseatedbookingoutput_2024_08_13)]|true|none|Booking data, which can be either a BookingOutput object, a RecurringBookingOutput object, or an array of RecurringBookingOutput objects|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_ReserveSlotInput_2024_09_04">ReserveSlotInput_2024_09_04</h2>
<!-- backwards compatibility -->
<a id="schemareserveslotinput_2024_09_04"></a>
<a id="schema_ReserveSlotInput_2024_09_04"></a>
<a id="tocSreserveslotinput_2024_09_04"></a>
<a id="tocsreserveslotinput_2024_09_04"></a>

```json
{
  "eventTypeId": 1,
  "slotStart": "2024-09-04T09:00:00Z",
  "slotDuration": "30",
  "reservationDuration": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeId|number|true|none|The ID of the event type for which slot should be reserved.|
|slotStart|string|true|none|ISO 8601 datestring in UTC timezone representing available slot.|
|slotDuration|number|false|none|By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here as a number in minutes. If you don't have this set explicitly that event type can have one of many lengths you can omit this.|
|reservationDuration|number|false|none|ONLY for authenticated requests with api key, access token or OAuth credentials (ID + secret).<br>      <br>      For how many minutes the slot should be reserved - for this long time noone else can book this event type at `start` time. If not provided, defaults to 5 minutes.|

<h2 id="tocS_ReserveSlotOutput_2024_09_04">ReserveSlotOutput_2024_09_04</h2>
<!-- backwards compatibility -->
<a id="schemareserveslotoutput_2024_09_04"></a>
<a id="schema_ReserveSlotOutput_2024_09_04"></a>
<a id="tocSreserveslotoutput_2024_09_04"></a>
<a id="tocsreserveslotoutput_2024_09_04"></a>

```json
{
  "eventTypeId": 1,
  "slotStart": "2024-09-04T09:00:00Z",
  "slotEnd": "2024-09-04T10:00:00Z",
  "slotDuration": "30",
  "reservationUid": "e84be5a3-4696-49e3-acc7-b2f3999c3b94",
  "reservationDuration": 5,
  "reservationUntil": "2023-09-04T10:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeId|number|true|none|The ID of the event type for which slot was reserved.|
|slotStart|string|true|none|ISO 8601 datestring in UTC timezone representing available slot.|
|slotEnd|string|true|none|ISO 8601 datestring in UTC timezone representing slot end.|
|slotDuration|number|true|none|By default slot duration is equal to event type length, but if you want to reserve a slot for an event type that has a variable length you can specify it here. If you don't have this set explicitly that event type can have one of many lengths you can omit this.|
|reservationUid|string|true|none|The unique identifier of the reservation. Use it to update, get or delete the reservation.|
|reservationDuration|number|true|none|For how many minutes the slot is reserved - for this long time noone else can book this event type at `start` time.|
|reservationUntil|string|true|none|ISO 8601 datestring in UTC timezone representing time until which the slot is reserved.|

<h2 id="tocS_ReserveSlotOutputResponse_2024_09_04">ReserveSlotOutputResponse_2024_09_04</h2>
<!-- backwards compatibility -->
<a id="schemareserveslotoutputresponse_2024_09_04"></a>
<a id="schema_ReserveSlotOutputResponse_2024_09_04"></a>
<a id="tocSreserveslotoutputresponse_2024_09_04"></a>
<a id="tocsreserveslotoutputresponse_2024_09_04"></a>

```json
{
  "status": "success",
  "data": {
    "eventTypeId": 1,
    "slotStart": "2024-09-04T09:00:00Z",
    "slotEnd": "2024-09-04T10:00:00Z",
    "slotDuration": "30",
    "reservationUid": "e84be5a3-4696-49e3-acc7-b2f3999c3b94",
    "reservationDuration": 5,
    "reservationUntil": "2023-09-04T10:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ReserveSlotOutput_2024_09_04](#schemareserveslotoutput_2024_09_04)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetReservedSlotOutput_2024_09_04">GetReservedSlotOutput_2024_09_04</h2>
<!-- backwards compatibility -->
<a id="schemagetreservedslotoutput_2024_09_04"></a>
<a id="schema_GetReservedSlotOutput_2024_09_04"></a>
<a id="tocSgetreservedslotoutput_2024_09_04"></a>
<a id="tocsgetreservedslotoutput_2024_09_04"></a>

```json
{
  "status": "success",
  "data": {
    "status": "success",
    "data": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|object \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CreateWebhookInputDto">CreateWebhookInputDto</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookinputdto"></a>
<a id="schema_CreateWebhookInputDto"></a>
<a id="tocScreatewebhookinputdto"></a>
<a id="tocscreatewebhookinputdto"></a>

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "active": true,
  "subscriberUrl": "string",
  "triggers": [
    "BOOKING_CREATED",
    "BOOKING_RESCHEDULED",
    "BOOKING_CANCELLED",
    "BOOKING_CONFIRMED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_NO_SHOW",
    "BOOKING_REOPENED"
  ],
  "secret": "string",
  "version": "2021-10-20"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloadTemplate|string|false|none|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|active|boolean|true|none|none|
|subscriberUrl|string|true|none|none|
|triggers|[string]|true|none|none|
|secret|string|false|none|none|
|version|string|false|none|The version of the webhook|

#### Enumerated Values

|Property|Value|
|---|---|
|triggers|BOOKING_CREATED|
|triggers|BOOKING_PAYMENT_INITIATED|
|triggers|BOOKING_PAID|
|triggers|BOOKING_RESCHEDULED|
|triggers|BOOKING_REQUESTED|
|triggers|BOOKING_CANCELLED|
|triggers|BOOKING_REJECTED|
|triggers|BOOKING_NO_SHOW_UPDATED|
|triggers|FORM_SUBMITTED|
|triggers|MEETING_ENDED|
|triggers|MEETING_STARTED|
|triggers|RECORDING_READY|
|triggers|INSTANT_MEETING|
|triggers|RECORDING_TRANSCRIPTION_GENERATED|
|triggers|OOO_CREATED|
|triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|triggers|FORM_SUBMITTED_NO_EVENT|
|triggers|DELEGATION_CREDENTIAL_ERROR|
|triggers|WRONG_ASSIGNMENT_REPORT|
|version|2021-10-20|

<h2 id="tocS_UserWebhookOutputDto">UserWebhookOutputDto</h2>
<!-- backwards compatibility -->
<a id="schemauserwebhookoutputdto"></a>
<a id="schema_UserWebhookOutputDto"></a>
<a id="tocSuserwebhookoutputdto"></a>
<a id="tocsuserwebhookoutputdto"></a>

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "triggers": [
    "BOOKING_CREATED"
  ],
  "userId": 0,
  "id": 0,
  "subscriberUrl": "string",
  "active": true,
  "secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloadTemplate|string|true|none|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|triggers|[string]|true|none|none|
|userId|number|true|none|none|
|id|number|true|none|none|
|subscriberUrl|string|true|none|none|
|active|boolean|true|none|none|
|secret|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|triggers|BOOKING_CREATED|
|triggers|BOOKING_PAYMENT_INITIATED|
|triggers|BOOKING_PAID|
|triggers|BOOKING_RESCHEDULED|
|triggers|BOOKING_REQUESTED|
|triggers|BOOKING_CANCELLED|
|triggers|BOOKING_REJECTED|
|triggers|BOOKING_NO_SHOW_UPDATED|
|triggers|FORM_SUBMITTED|
|triggers|MEETING_ENDED|
|triggers|MEETING_STARTED|
|triggers|RECORDING_READY|
|triggers|INSTANT_MEETING|
|triggers|RECORDING_TRANSCRIPTION_GENERATED|
|triggers|OOO_CREATED|
|triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|triggers|FORM_SUBMITTED_NO_EVENT|
|triggers|DELEGATION_CREDENTIAL_ERROR|
|triggers|WRONG_ASSIGNMENT_REPORT|

<h2 id="tocS_UserWebhookOutputResponseDto">UserWebhookOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemauserwebhookoutputresponsedto"></a>
<a id="schema_UserWebhookOutputResponseDto"></a>
<a id="tocSuserwebhookoutputresponsedto"></a>
<a id="tocsuserwebhookoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "userId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[UserWebhookOutputDto](#schemauserwebhookoutputdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UpdateWebhookInputDto">UpdateWebhookInputDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookinputdto"></a>
<a id="schema_UpdateWebhookInputDto"></a>
<a id="tocSupdatewebhookinputdto"></a>
<a id="tocsupdatewebhookinputdto"></a>

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "active": true,
  "subscriberUrl": "string",
  "triggers": [
    "BOOKING_CREATED",
    "BOOKING_RESCHEDULED",
    "BOOKING_CANCELLED",
    "BOOKING_CONFIRMED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_NO_SHOW",
    "BOOKING_REOPENED"
  ],
  "secret": "string",
  "version": "2021-10-20"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloadTemplate|string|false|none|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|active|boolean|false|none|none|
|subscriberUrl|string|false|none|none|
|triggers|[string]|false|none|none|
|secret|string|false|none|none|
|version|string|false|none|The version of the webhook|

#### Enumerated Values

|Property|Value|
|---|---|
|triggers|BOOKING_CREATED|
|triggers|BOOKING_PAYMENT_INITIATED|
|triggers|BOOKING_PAID|
|triggers|BOOKING_RESCHEDULED|
|triggers|BOOKING_REQUESTED|
|triggers|BOOKING_CANCELLED|
|triggers|BOOKING_REJECTED|
|triggers|BOOKING_NO_SHOW_UPDATED|
|triggers|FORM_SUBMITTED|
|triggers|MEETING_ENDED|
|triggers|MEETING_STARTED|
|triggers|RECORDING_READY|
|triggers|INSTANT_MEETING|
|triggers|RECORDING_TRANSCRIPTION_GENERATED|
|triggers|OOO_CREATED|
|triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|triggers|FORM_SUBMITTED_NO_EVENT|
|triggers|DELEGATION_CREDENTIAL_ERROR|
|triggers|WRONG_ASSIGNMENT_REPORT|
|version|2021-10-20|

<h2 id="tocS_UserWebhooksOutputResponseDto">UserWebhooksOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemauserwebhooksoutputresponsedto"></a>
<a id="schema_UserWebhooksOutputResponseDto"></a>
<a id="tocSuserwebhooksoutputresponsedto"></a>
<a id="tocsuserwebhooksoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": [
    {
      "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
      "triggers": [
        "BOOKING_CREATED"
      ],
      "userId": 0,
      "id": 0,
      "subscriberUrl": "string",
      "active": true,
      "secret": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[UserWebhookOutputDto](#schemauserwebhookoutputdto)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_EventTypeWebhookOutputDto">EventTypeWebhookOutputDto</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypewebhookoutputdto"></a>
<a id="schema_EventTypeWebhookOutputDto"></a>
<a id="tocSeventtypewebhookoutputdto"></a>
<a id="tocseventtypewebhookoutputdto"></a>

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "triggers": [
    "BOOKING_CREATED"
  ],
  "eventTypeId": 0,
  "id": 0,
  "subscriberUrl": "string",
  "active": true,
  "secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloadTemplate|string|true|none|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|triggers|[string]|true|none|none|
|eventTypeId|number|true|none|none|
|id|number|true|none|none|
|subscriberUrl|string|true|none|none|
|active|boolean|true|none|none|
|secret|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|triggers|BOOKING_CREATED|
|triggers|BOOKING_PAYMENT_INITIATED|
|triggers|BOOKING_PAID|
|triggers|BOOKING_RESCHEDULED|
|triggers|BOOKING_REQUESTED|
|triggers|BOOKING_CANCELLED|
|triggers|BOOKING_REJECTED|
|triggers|BOOKING_NO_SHOW_UPDATED|
|triggers|FORM_SUBMITTED|
|triggers|MEETING_ENDED|
|triggers|MEETING_STARTED|
|triggers|RECORDING_READY|
|triggers|INSTANT_MEETING|
|triggers|RECORDING_TRANSCRIPTION_GENERATED|
|triggers|OOO_CREATED|
|triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|triggers|FORM_SUBMITTED_NO_EVENT|
|triggers|DELEGATION_CREDENTIAL_ERROR|
|triggers|WRONG_ASSIGNMENT_REPORT|

<h2 id="tocS_EventTypeWebhookOutputResponseDto">EventTypeWebhookOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypewebhookoutputresponsedto"></a>
<a id="schema_EventTypeWebhookOutputResponseDto"></a>
<a id="tocSeventtypewebhookoutputresponsedto"></a>
<a id="tocseventtypewebhookoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "eventTypeId": 0,
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[EventTypeWebhookOutputDto](#schemaeventtypewebhookoutputdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_EventTypeWebhooksOutputResponseDto">EventTypeWebhooksOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypewebhooksoutputresponsedto"></a>
<a id="schema_EventTypeWebhooksOutputResponseDto"></a>
<a id="tocSeventtypewebhooksoutputresponsedto"></a>
<a id="tocseventtypewebhooksoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": [
    {
      "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
      "triggers": [
        "BOOKING_CREATED"
      ],
      "eventTypeId": 0,
      "id": 0,
      "subscriberUrl": "string",
      "active": true,
      "secret": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[EventTypeWebhookOutputDto](#schemaeventtypewebhookoutputdto)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_DeleteManyWebhooksOutputResponseDto">DeleteManyWebhooksOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemadeletemanywebhooksoutputresponsedto"></a>
<a id="schema_DeleteManyWebhooksOutputResponseDto"></a>
<a id="tocSdeletemanywebhooksoutputresponsedto"></a>
<a id="tocsdeletemanywebhooksoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_OAuthClientWebhookOutputDto">OAuthClientWebhookOutputDto</h2>
<!-- backwards compatibility -->
<a id="schemaoauthclientwebhookoutputdto"></a>
<a id="schema_OAuthClientWebhookOutputDto"></a>
<a id="tocSoauthclientwebhookoutputdto"></a>
<a id="tocsoauthclientwebhookoutputdto"></a>

```json
{
  "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
  "triggers": [
    "BOOKING_CREATED"
  ],
  "oAuthClientId": "string",
  "id": 0,
  "subscriberUrl": "string",
  "active": true,
  "secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloadTemplate|string|true|none|The template of the payload that will be sent to the subscriberUrl, check cal.com/docs/core-features/webhooks for more information|
|triggers|[string]|true|none|none|
|oAuthClientId|string|true|none|none|
|id|number|true|none|none|
|subscriberUrl|string|true|none|none|
|active|boolean|true|none|none|
|secret|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|triggers|BOOKING_CREATED|
|triggers|BOOKING_PAYMENT_INITIATED|
|triggers|BOOKING_PAID|
|triggers|BOOKING_RESCHEDULED|
|triggers|BOOKING_REQUESTED|
|triggers|BOOKING_CANCELLED|
|triggers|BOOKING_REJECTED|
|triggers|BOOKING_NO_SHOW_UPDATED|
|triggers|FORM_SUBMITTED|
|triggers|MEETING_ENDED|
|triggers|MEETING_STARTED|
|triggers|RECORDING_READY|
|triggers|INSTANT_MEETING|
|triggers|RECORDING_TRANSCRIPTION_GENERATED|
|triggers|OOO_CREATED|
|triggers|AFTER_HOSTS_CAL_VIDEO_NO_SHOW|
|triggers|AFTER_GUESTS_CAL_VIDEO_NO_SHOW|
|triggers|FORM_SUBMITTED_NO_EVENT|
|triggers|DELEGATION_CREDENTIAL_ERROR|
|triggers|WRONG_ASSIGNMENT_REPORT|

<h2 id="tocS_OAuthClientWebhookOutputResponseDto">OAuthClientWebhookOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaoauthclientwebhookoutputresponsedto"></a>
<a id="schema_OAuthClientWebhookOutputResponseDto"></a>
<a id="tocSoauthclientwebhookoutputresponsedto"></a>
<a id="tocsoauthclientwebhookoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
    "triggers": [
      "BOOKING_CREATED"
    ],
    "oAuthClientId": "string",
    "id": 0,
    "subscriberUrl": "string",
    "active": true,
    "secret": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[OAuthClientWebhookOutputDto](#schemaoauthclientwebhookoutputdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_OAuthClientWebhooksOutputResponseDto">OAuthClientWebhooksOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaoauthclientwebhooksoutputresponsedto"></a>
<a id="schema_OAuthClientWebhooksOutputResponseDto"></a>
<a id="tocSoauthclientwebhooksoutputresponsedto"></a>
<a id="tocsoauthclientwebhooksoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": [
    {
      "payloadTemplate": "{\"content\":\"A new event has been scheduled\",\"type\":\"{{type}}\",\"name\":\"{{title}}\",\"organizer\":\"{{organizer.name}}\",\"booker\":\"{{attendees.0.name}}\"}",
      "triggers": [
        "BOOKING_CREATED"
      ],
      "oAuthClientId": "string",
      "id": 0,
      "subscriberUrl": "string",
      "active": true,
      "secret": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[OAuthClientWebhookOutputDto](#schemaoauthclientwebhookoutputdto)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_DestinationCalendarsInputBodyDto">DestinationCalendarsInputBodyDto</h2>
<!-- backwards compatibility -->
<a id="schemadestinationcalendarsinputbodydto"></a>
<a id="schema_DestinationCalendarsInputBodyDto"></a>
<a id="tocSdestinationcalendarsinputbodydto"></a>
<a id="tocsdestinationcalendarsinputbodydto"></a>

```json
{
  "integration": "apple_calendar",
  "externalId": "https://caldav.icloud.com/26962146906/calendars/1644422A-1945-4438-BBC0-4F0Q23A57R7S/",
  "delegationCredentialId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration|string|true|none|The calendar service you want to integrate, as returned by the /calendars endpoint|
|externalId|string|true|none|Unique identifier used to represent the specific calendar, as returned by the /calendars endpoint|
|delegationCredentialId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|integration|apple_calendar|
|integration|google_calendar|
|integration|office365_calendar|

<h2 id="tocS_DestinationCalendarsOutputDto">DestinationCalendarsOutputDto</h2>
<!-- backwards compatibility -->
<a id="schemadestinationcalendarsoutputdto"></a>
<a id="schema_DestinationCalendarsOutputDto"></a>
<a id="tocSdestinationcalendarsoutputdto"></a>
<a id="tocsdestinationcalendarsoutputdto"></a>

```json
{
  "userId": 0,
  "integration": "string",
  "externalId": "string",
  "credentialId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|number|true|none|none|
|integration|string|true|none|none|
|externalId|string|true|none|none|
|credentialId|number \| null|true|none|none|

<h2 id="tocS_DestinationCalendarsOutputResponseDto">DestinationCalendarsOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemadestinationcalendarsoutputresponsedto"></a>
<a id="schema_DestinationCalendarsOutputResponseDto"></a>
<a id="tocSdestinationcalendarsoutputresponsedto"></a>
<a id="tocsdestinationcalendarsoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "userId": 0,
    "integration": "string",
    "externalId": "string",
    "credentialId": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[DestinationCalendarsOutputDto](#schemadestinationcalendarsoutputdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_ConferencingAppsOutputDto">ConferencingAppsOutputDto</h2>
<!-- backwards compatibility -->
<a id="schemaconferencingappsoutputdto"></a>
<a id="schema_ConferencingAppsOutputDto"></a>
<a id="tocSconferencingappsoutputdto"></a>
<a id="tocsconferencingappsoutputdto"></a>

```json
{
  "id": 0,
  "type": "google_video",
  "userId": 0,
  "invalid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|Id of the conferencing app credentials|
|type|string|true|none|Type of conferencing app|
|userId|number|true|none|Id of the user associated to the conferencing app|
|invalid|boolean \| null|false|none|Whether if the connection is working or not.|

<h2 id="tocS_ConferencingAppOutputResponseDto">ConferencingAppOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaconferencingappoutputresponsedto"></a>
<a id="schema_ConferencingAppOutputResponseDto"></a>
<a id="tocSconferencingappoutputresponsedto"></a>
<a id="tocsconferencingappoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "id": 0,
    "type": "google_video",
    "userId": 0,
    "invalid": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ConferencingAppsOutputDto](#schemaconferencingappsoutputdto)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_GetConferencingAppsOauthUrlResponseDto">GetConferencingAppsOauthUrlResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemagetconferencingappsoauthurlresponsedto"></a>
<a id="schema_GetConferencingAppsOauthUrlResponseDto"></a>
<a id="tocSgetconferencingappsoauthurlresponsedto"></a>
<a id="tocsgetconferencingappsoauthurlresponsedto"></a>

```json
{
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_ConferencingAppsOutputResponseDto">ConferencingAppsOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaconferencingappsoutputresponsedto"></a>
<a id="schema_ConferencingAppsOutputResponseDto"></a>
<a id="tocSconferencingappsoutputresponsedto"></a>
<a id="tocsconferencingappsoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": [
    {
      "id": 0,
      "type": "google_video",
      "userId": 0,
      "invalid": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[ConferencingAppsOutputDto](#schemaconferencingappsoutputdto)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_SetDefaultConferencingAppOutputResponseDto">SetDefaultConferencingAppOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemasetdefaultconferencingappoutputresponsedto"></a>
<a id="schema_SetDefaultConferencingAppOutputResponseDto"></a>
<a id="tocSsetdefaultconferencingappoutputresponsedto"></a>
<a id="tocssetdefaultconferencingappoutputresponsedto"></a>

```json
{
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_DefaultConferencingAppsOutputDto">DefaultConferencingAppsOutputDto</h2>
<!-- backwards compatibility -->
<a id="schemadefaultconferencingappsoutputdto"></a>
<a id="schema_DefaultConferencingAppsOutputDto"></a>
<a id="tocSdefaultconferencingappsoutputdto"></a>
<a id="tocsdefaultconferencingappsoutputdto"></a>

```json
{
  "appSlug": "string",
  "appLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appSlug|string|false|none|none|
|appLink|string|false|none|none|

<h2 id="tocS_GetDefaultConferencingAppOutputResponseDto">GetDefaultConferencingAppOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemagetdefaultconferencingappoutputresponsedto"></a>
<a id="schema_GetDefaultConferencingAppOutputResponseDto"></a>
<a id="tocSgetdefaultconferencingappoutputresponsedto"></a>
<a id="tocsgetdefaultconferencingappoutputresponsedto"></a>

```json
{
  "status": "success",
  "data": {
    "appSlug": "string",
    "appLink": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[DefaultConferencingAppsOutputDto](#schemadefaultconferencingappsoutputdto)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_DisconnectConferencingAppOutputResponseDto">DisconnectConferencingAppOutputResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemadisconnectconferencingappoutputresponsedto"></a>
<a id="schema_DisconnectConferencingAppOutputResponseDto"></a>
<a id="tocSdisconnectconferencingappoutputresponsedto"></a>
<a id="tocsdisconnectconferencingappoutputresponsedto"></a>

```json
{
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CalendarConnectionItem">CalendarConnectionItem</h2>
<!-- backwards compatibility -->
<a id="schemacalendarconnectionitem"></a>
<a id="schema_CalendarConnectionItem"></a>
<a id="tocScalendarconnectionitem"></a>
<a id="tocscalendarconnectionitem"></a>

```json
{
  "connectionId": "123",
  "type": "google",
  "email": "user@gmail.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionId|string|true|none|Stable ID for this calendar connection (use in connection-scoped endpoints)|
|type|string|true|none|Calendar provider type|
|email|string \| null|false|none|Primary email for this connection (null if unavailable)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|google|
|type|office365|
|type|apple|

<h2 id="tocS_ListConnectionsData">ListConnectionsData</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionsdata"></a>
<a id="schema_ListConnectionsData"></a>
<a id="tocSlistconnectionsdata"></a>
<a id="tocslistconnectionsdata"></a>

```json
{
  "connections": [
    {
      "connectionId": "123",
      "type": "google",
      "email": "user@gmail.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[CalendarConnectionItem](#schemacalendarconnectionitem)]|true|none|none|

<h2 id="tocS_ListConnectionsOutput">ListConnectionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionsoutput"></a>
<a id="schema_ListConnectionsOutput"></a>
<a id="tocSlistconnectionsoutput"></a>
<a id="tocslistconnectionsoutput"></a>

```json
{
  "status": "success",
  "data": {
    "connections": [
      {
        "connectionId": "123",
        "type": "google",
        "email": "user@gmail.com"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[ListConnectionsData](#schemalistconnectionsdata)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CalendarEventVideoLocation">CalendarEventVideoLocation</h2>
<!-- backwards compatibility -->
<a id="schemacalendareventvideolocation"></a>
<a id="schema_CalendarEventVideoLocation"></a>
<a id="tocScalendareventvideolocation"></a>
<a id="tocscalendareventvideolocation"></a>

```json
{
  "type": "video",
  "url": "string",
  "label": "string",
  "password": "string",
  "meetingCode": "string",
  "accessCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Indicates this is a video conference location|
|url|string|true|none|URL for joining the video conference|
|label|string \| null|false|none|Display name for the video conference|
|password|string \| null|false|none|Password required to join the video conference|
|meetingCode|string \| null|false|none|Meeting code or ID required to join the conference|
|accessCode|string \| null|false|none|Access code required to join the conference|

#### Enumerated Values

|Property|Value|
|---|---|
|type|video|

<h2 id="tocS_CalendarEventPhoneLocation">CalendarEventPhoneLocation</h2>
<!-- backwards compatibility -->
<a id="schemacalendareventphonelocation"></a>
<a id="schema_CalendarEventPhoneLocation"></a>
<a id="tocScalendareventphonelocation"></a>
<a id="tocscalendareventphonelocation"></a>

```json
{
  "type": "phone",
  "url": "string",
  "label": "string",
  "pin": "string",
  "password": "string",
  "accessCode": "string",
  "regionCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Indicates this is a phone conference location|
|url|string|true|none|Phone number or URL for dialing into the conference|
|label|string \| null|false|none|Display name for the phone conference|
|pin|string \| null|false|none|PIN number required for the phone conference|
|password|string \| null|false|none|Password required for the phone conference|
|accessCode|string \| null|false|none|Access code required for the phone conference|
|regionCode|string \| null|false|none|Country/region code for the phone number|

#### Enumerated Values

|Property|Value|
|---|---|
|type|phone|

<h2 id="tocS_CalendarEventSipLocation">CalendarEventSipLocation</h2>
<!-- backwards compatibility -->
<a id="schemacalendareventsiplocation"></a>
<a id="schema_CalendarEventSipLocation"></a>
<a id="tocScalendareventsiplocation"></a>
<a id="tocscalendareventsiplocation"></a>

```json
{
  "type": "sip",
  "url": "string",
  "label": "string",
  "pin": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Indicates this is a SIP (Session Initiation Protocol) conference location|
|url|string|true|none|SIP URL for joining the conference|
|label|string \| null|false|none|Display name for the SIP conference|
|pin|string \| null|false|none|PIN number required for the SIP conference|
|password|string \| null|false|none|Password required for the SIP conference|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sip|

<h2 id="tocS_CalendarEventMoreLocation">CalendarEventMoreLocation</h2>
<!-- backwards compatibility -->
<a id="schemacalendareventmorelocation"></a>
<a id="schema_CalendarEventMoreLocation"></a>
<a id="tocScalendareventmorelocation"></a>
<a id="tocscalendareventmorelocation"></a>

```json
{
  "type": "more",
  "url": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Indicates this is an additional conference location type|
|url|string|true|none|URL for accessing this location|
|label|string \| null|false|none|Display name for this location|

#### Enumerated Values

|Property|Value|
|---|---|
|type|more|

<h2 id="tocS_CalendarEventResponseStatus">CalendarEventResponseStatus</h2>
<!-- backwards compatibility -->
<a id="schemacalendareventresponsestatus"></a>
<a id="schema_CalendarEventResponseStatus"></a>
<a id="tocScalendareventresponsestatus"></a>
<a id="tocscalendareventresponsestatus"></a>

```json
"accepted"
```

Response status of the attendee

<h2 id="tocS_CalendarEventAttendee">CalendarEventAttendee</h2>
<!-- backwards compatibility -->
<a id="schemacalendareventattendee"></a>
<a id="schema_CalendarEventAttendee"></a>
<a id="tocScalendareventattendee"></a>
<a id="tocscalendareventattendee"></a>

```json
{
  "email": "string",
  "name": "string",
  "responseStatus": "accepted",
  "self": true,
  "optional": true,
  "host": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the attendee|
|name|string|false|none|Display name of the attendee|
|responseStatus|[CalendarEventResponseStatus](#schemacalendareventresponsestatus)|false|none|Response status of the attendee|
|self|boolean \| null|false|none|Indicates if this attendee is the current user|
|optional|boolean \| null|false|none|Indicates if this attendee's attendance is optional|
|host|boolean \| null|false|none|Indicates if this attendee is the host|

#### Enumerated Values

|Property|Value|
|---|---|
|responseStatus|accepted|
|responseStatus|pending|
|responseStatus|declined|
|responseStatus|needsAction|

<h2 id="tocS_CalendarEventStatus">CalendarEventStatus</h2>
<!-- backwards compatibility -->
<a id="schemacalendareventstatus"></a>
<a id="schema_CalendarEventStatus"></a>
<a id="tocScalendareventstatus"></a>
<a id="tocscalendareventstatus"></a>

```json
"accepted"
```

Status of the event (accepted, pending, declined, cancelled)

<h2 id="tocS_CalendarEventHost">CalendarEventHost</h2>
<!-- backwards compatibility -->
<a id="schemacalendareventhost"></a>
<a id="schema_CalendarEventHost"></a>
<a id="tocScalendareventhost"></a>
<a id="tocscalendareventhost"></a>

```json
{
  "email": "string",
  "name": "string",
  "responseStatus": "accepted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the event host|
|name|string \| null|false|none|Display name of the event host|
|responseStatus|[CalendarEventResponseStatus](#schemacalendareventresponsestatus)|false|none|Response status of the attendee|

#### Enumerated Values

|Property|Value|
|---|---|
|responseStatus|accepted|
|responseStatus|pending|
|responseStatus|declined|
|responseStatus|needsAction|

<h2 id="tocS_calendarEventOwner">calendarEventOwner</h2>
<!-- backwards compatibility -->
<a id="schemacalendareventowner"></a>
<a id="schema_calendarEventOwner"></a>
<a id="tocScalendareventowner"></a>
<a id="tocscalendareventowner"></a>

```json
{
  "email": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the event host|
|name|string \| null|false|none|Display name of the event host|

<h2 id="tocS_CalendarSource">CalendarSource</h2>
<!-- backwards compatibility -->
<a id="schemacalendarsource"></a>
<a id="schema_CalendarSource"></a>
<a id="tocScalendarsource"></a>
<a id="tocscalendarsource"></a>

```json
"google"
```

Calendar integration source (e.g., Google Calendar, Office 365, Apple Calendar). Currently only Google Calendar is supported.

<h2 id="tocS_UnifiedCalendarEventOutput">UnifiedCalendarEventOutput</h2>
<!-- backwards compatibility -->
<a id="schemaunifiedcalendareventoutput"></a>
<a id="schema_UnifiedCalendarEventOutput"></a>
<a id="tocSunifiedcalendareventoutput"></a>
<a id="tocsunifiedcalendareventoutput"></a>

```json
{
  "start": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "end": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "id": "string",
  "title": "string",
  "description": "string",
  "locations": [
    {
      "type": "video",
      "url": "string",
      "label": "string",
      "password": "string",
      "meetingCode": "string",
      "accessCode": "string"
    }
  ],
  "attendees": [
    {
      "email": "string",
      "name": "string",
      "responseStatus": "accepted",
      "self": true,
      "optional": true,
      "host": true
    }
  ],
  "status": "accepted",
  "hosts": [
    {
      "email": "string",
      "name": "string",
      "responseStatus": "accepted"
    }
  ],
  "calendarEventOwner": {
    "email": "string",
    "name": "string"
  },
  "source": "google"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|object|true|none|Start date and time of the calendar event with timezone information|
|end|object|true|none|End date and time of the calendar event with timezone information|
|id|string|true|none|Unique identifier of the calendar event|
|title|string|true|none|Title of the calendar event|
|description|string \| null|false|none|Detailed description of the calendar event|
|locations|[[CalendarEventVideoLocation](#schemacalendareventvideolocation) \| [CalendarEventPhoneLocation](#schemacalendareventphonelocation) \| [CalendarEventSipLocation](#schemacalendareventsiplocation) \| [CalendarEventMoreLocation](#schemacalendareventmorelocation)]|false|none|Conference locations with entry points (video, phone, sip, more)|
|attendees|[[CalendarEventAttendee](#schemacalendareventattendee)]|false|none|List of attendees with their response status|
|status|[CalendarEventStatus](#schemacalendareventstatus)|false|none|Status of the event (accepted, pending, declined, cancelled)|
|hosts|[[CalendarEventHost](#schemacalendareventhost)]|false|none|Information about the event hosts (organizers)|
|calendarEventOwner|object \| null|false|none|The calendar account that owns this event. This is the primary calendar where the event is stored and cannot be modified without appropriate permissions. Changing this would require moving the event to a different calendar|
|source|[CalendarSource](#schemacalendarsource)|true|none|Calendar integration source (e.g., Google Calendar, Office 365, Apple Calendar). Currently only Google Calendar is supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|accepted|
|status|pending|
|status|declined|
|status|cancelled|
|source|google|
|source|office365|
|source|apple|

<h2 id="tocS_ListUnifiedCalendarEventsOutput">ListUnifiedCalendarEventsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistunifiedcalendareventsoutput"></a>
<a id="schema_ListUnifiedCalendarEventsOutput"></a>
<a id="tocSlistunifiedcalendareventsoutput"></a>
<a id="tocslistunifiedcalendareventsoutput"></a>

```json
{
  "status": "success",
  "data": [
    {
      "start": {
        "time": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "end": {
        "time": "1970-01-01T00:00:00Z",
        "timeZone": "string"
      },
      "id": "string",
      "title": "string",
      "description": "string",
      "locations": [
        {
          "type": "video",
          "url": "string",
          "label": "string",
          "password": "string",
          "meetingCode": "string",
          "accessCode": "string"
        }
      ],
      "attendees": [
        {
          "email": "string",
          "name": "string",
          "responseStatus": "accepted",
          "self": true,
          "optional": true,
          "host": true
        }
      ],
      "status": "accepted",
      "hosts": [
        {
          "email": "string",
          "name": "string",
          "responseStatus": "accepted"
        }
      ],
      "calendarEventOwner": {
        "email": "string",
        "name": "string"
      },
      "source": "google"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[UnifiedCalendarEventOutput](#schemaunifiedcalendareventoutput)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_CreateEventDateTimeWithZone">CreateEventDateTimeWithZone</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventdatetimewithzone"></a>
<a id="schema_CreateEventDateTimeWithZone"></a>
<a id="tocScreateeventdatetimewithzone"></a>
<a id="tocscreateeventdatetimewithzone"></a>

```json
{
  "time": "1970-01-01T00:00:00Z",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|string(date-time)|true|none|Start or end time in ISO 8601 format|
|timeZone|string|true|none|IANA time zone (e.g. America/New_York)|

<h2 id="tocS_CreateEventAttendee">CreateEventAttendee</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventattendee"></a>
<a id="schema_CreateEventAttendee"></a>
<a id="tocScreateeventattendee"></a>
<a id="tocscreateeventattendee"></a>

```json
{
  "email": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the attendee|
|name|string|false|none|Display name of the attendee|

<h2 id="tocS_CreateUnifiedCalendarEventInput">CreateUnifiedCalendarEventInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateunifiedcalendareventinput"></a>
<a id="schema_CreateUnifiedCalendarEventInput"></a>
<a id="tocScreateunifiedcalendareventinput"></a>
<a id="tocscreateunifiedcalendareventinput"></a>

```json
{
  "title": "string",
  "start": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "end": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "description": "string",
  "attendees": [
    {
      "email": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|Title of the calendar event|
|start|object|true|none|Start date and time with time zone|
|end|object|true|none|End date and time with time zone|
|description|string \| null|false|none|Description of the event|
|attendees|[[CreateEventAttendee](#schemacreateeventattendee)]|false|none|List of attendees|

<h2 id="tocS_GetUnifiedCalendarEventOutput">GetUnifiedCalendarEventOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetunifiedcalendareventoutput"></a>
<a id="schema_GetUnifiedCalendarEventOutput"></a>
<a id="tocSgetunifiedcalendareventoutput"></a>
<a id="tocsgetunifiedcalendareventoutput"></a>

```json
{
  "status": "success",
  "data": {
    "start": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "end": {
      "time": "1970-01-01T00:00:00Z",
      "timeZone": "string"
    },
    "id": "string",
    "title": "string",
    "description": "string",
    "locations": [
      {
        "type": "video",
        "url": "string",
        "label": "string",
        "password": "string",
        "meetingCode": "string",
        "accessCode": "string"
      }
    ],
    "attendees": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted",
        "self": true,
        "optional": true,
        "host": true
      }
    ],
    "status": "accepted",
    "hosts": [
      {
        "email": "string",
        "name": "string",
        "responseStatus": "accepted"
      }
    ],
    "calendarEventOwner": {
      "email": "string",
      "name": "string"
    },
    "source": "google"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[UnifiedCalendarEventOutput](#schemaunifiedcalendareventoutput)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UpdateCalendarEventAttendee">UpdateCalendarEventAttendee</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecalendareventattendee"></a>
<a id="schema_UpdateCalendarEventAttendee"></a>
<a id="tocSupdatecalendareventattendee"></a>
<a id="tocsupdatecalendareventattendee"></a>

```json
{
  "email": "string",
  "name": "string",
  "responseStatus": "accepted",
  "self": true,
  "optional": true,
  "host": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address of the attendee|
|name|string|false|none|Display name of the attendee|
|responseStatus|[CalendarEventResponseStatus](#schemacalendareventresponsestatus)|false|none|Response status of the attendee|
|self|boolean \| null|false|none|Indicates if this attendee is the current user|
|optional|boolean \| null|false|none|Indicates if this attendee's attendance is optional|
|host|boolean \| null|false|none|Indicates if this attendee is the host|

#### Enumerated Values

|Property|Value|
|---|---|
|responseStatus|accepted|
|responseStatus|pending|
|responseStatus|declined|
|responseStatus|needsAction|

<h2 id="tocS_UpdateUnifiedCalendarEventInput">UpdateUnifiedCalendarEventInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateunifiedcalendareventinput"></a>
<a id="schema_UpdateUnifiedCalendarEventInput"></a>
<a id="tocSupdateunifiedcalendareventinput"></a>
<a id="tocsupdateunifiedcalendareventinput"></a>

```json
{
  "start": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "end": {
    "time": "1970-01-01T00:00:00Z",
    "timeZone": "string"
  },
  "title": "string",
  "description": "string",
  "attendees": [
    {
      "email": "string",
      "name": "string",
      "responseStatus": "accepted",
      "self": true,
      "optional": true,
      "host": true
    }
  ],
  "status": "accepted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|object|false|none|Start date and time of the calendar event with timezone information|
|end|object|false|none|End date and time of the calendar event with timezone information|
|title|string|false|none|Title of the calendar event|
|description|string \| null|false|none|Detailed description of the calendar event|
|attendees|[[UpdateCalendarEventAttendee](#schemaupdatecalendareventattendee)]|false|none|List of attendees. CAUTION: You must pass the entire array with all updated values. Any attendees not included in this array will be removed from the event.|
|status|[CalendarEventStatus](#schemacalendareventstatus)|false|none|Status of the event (accepted, pending, declined, cancelled)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|accepted|
|status|pending|
|status|declined|
|status|cancelled|

<h2 id="tocS_RequestEmailVerificationInput">RequestEmailVerificationInput</h2>
<!-- backwards compatibility -->
<a id="schemarequestemailverificationinput"></a>
<a id="schema_RequestEmailVerificationInput"></a>
<a id="tocSrequestemailverificationinput"></a>
<a id="tocsrequestemailverificationinput"></a>

```json
{
  "email": "acme@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email to verify.|

<h2 id="tocS_RequestEmailVerificationOutput">RequestEmailVerificationOutput</h2>
<!-- backwards compatibility -->
<a id="schemarequestemailverificationoutput"></a>
<a id="schema_RequestEmailVerificationOutput"></a>
<a id="tocSrequestemailverificationoutput"></a>
<a id="tocsrequestemailverificationoutput"></a>

```json
{
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_RequestPhoneVerificationInput">RequestPhoneVerificationInput</h2>
<!-- backwards compatibility -->
<a id="schemarequestphoneverificationinput"></a>
<a id="schema_RequestPhoneVerificationInput"></a>
<a id="tocSrequestphoneverificationinput"></a>
<a id="tocsrequestphoneverificationinput"></a>

```json
{
  "phone": "+372 5555 6666"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|string|true|none|Phone number to verify.|

<h2 id="tocS_RequestPhoneVerificationOutput">RequestPhoneVerificationOutput</h2>
<!-- backwards compatibility -->
<a id="schemarequestphoneverificationoutput"></a>
<a id="schema_RequestPhoneVerificationOutput"></a>
<a id="tocSrequestphoneverificationoutput"></a>
<a id="tocsrequestphoneverificationoutput"></a>

```json
{
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_VerifyEmailInput">VerifyEmailInput</h2>
<!-- backwards compatibility -->
<a id="schemaverifyemailinput"></a>
<a id="schema_VerifyEmailInput"></a>
<a id="tocSverifyemailinput"></a>
<a id="tocsverifyemailinput"></a>

```json
{
  "email": "example@acme.com",
  "code": "1ABG2C"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email to verify.|
|code|string|true|none|verification code sent to the email to verify|

<h2 id="tocS_UserVerifiedEmailOutputData">UserVerifiedEmailOutputData</h2>
<!-- backwards compatibility -->
<a id="schemauserverifiedemailoutputdata"></a>
<a id="schema_UserVerifiedEmailOutputData"></a>
<a id="tocSuserverifiedemailoutputdata"></a>
<a id="tocsuserverifiedemailoutputdata"></a>

```json
{
  "id": 789,
  "email": "user@example.com",
  "userId": 45
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|The unique identifier for the verified email.|
|email|string(email)|true|none|The verified email address.|
|userId|number|true|none|The ID of the associated user, if applicable.|

<h2 id="tocS_UserVerifiedEmailOutput">UserVerifiedEmailOutput</h2>
<!-- backwards compatibility -->
<a id="schemauserverifiedemailoutput"></a>
<a id="schema_UserVerifiedEmailOutput"></a>
<a id="tocSuserverifiedemailoutput"></a>
<a id="tocsuserverifiedemailoutput"></a>

```json
{
  "status": "success",
  "data": {
    "id": 789,
    "email": "user@example.com",
    "userId": 45
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[UserVerifiedEmailOutputData](#schemauserverifiedemailoutputdata)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_VerifyPhoneInput">VerifyPhoneInput</h2>
<!-- backwards compatibility -->
<a id="schemaverifyphoneinput"></a>
<a id="schema_VerifyPhoneInput"></a>
<a id="tocSverifyphoneinput"></a>
<a id="tocsverifyphoneinput"></a>

```json
{
  "phone": "+37255556666",
  "code": "1ABG2C"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|string|true|none|phone number to verify.|
|code|string|true|none|verification code sent to the phone number to verify|

<h2 id="tocS_UserVerifiedPhoneOutputData">UserVerifiedPhoneOutputData</h2>
<!-- backwards compatibility -->
<a id="schemauserverifiedphoneoutputdata"></a>
<a id="schema_UserVerifiedPhoneOutputData"></a>
<a id="tocSuserverifiedphoneoutputdata"></a>
<a id="tocsuserverifiedphoneoutputdata"></a>

```json
{
  "id": 789,
  "phoneNumber": "+37255556666",
  "userId": 45
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|The unique identifier for the verified email.|
|phoneNumber|string(phone)|true|none|The verified phone number.|
|userId|number|true|none|The ID of the associated user, if applicable.|

<h2 id="tocS_UserVerifiedPhoneOutput">UserVerifiedPhoneOutput</h2>
<!-- backwards compatibility -->
<a id="schemauserverifiedphoneoutput"></a>
<a id="schema_UserVerifiedPhoneOutput"></a>
<a id="tocSuserverifiedphoneoutput"></a>
<a id="tocsuserverifiedphoneoutput"></a>

```json
{
  "status": "success",
  "data": {
    "id": 789,
    "phoneNumber": "+37255556666",
    "userId": 45
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[UserVerifiedPhoneOutputData](#schemauserverifiedphoneoutputdata)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UserVerifiedEmailsOutput">UserVerifiedEmailsOutput</h2>
<!-- backwards compatibility -->
<a id="schemauserverifiedemailsoutput"></a>
<a id="schema_UserVerifiedEmailsOutput"></a>
<a id="tocSuserverifiedemailsoutput"></a>
<a id="tocsuserverifiedemailsoutput"></a>

```json
{
  "status": "success",
  "data": [
    {
      "id": 789,
      "email": "user@example.com",
      "userId": 45
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[UserVerifiedEmailOutputData](#schemauserverifiedemailoutputdata)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<h2 id="tocS_UserVerifiedPhonesOutput">UserVerifiedPhonesOutput</h2>
<!-- backwards compatibility -->
<a id="schemauserverifiedphonesoutput"></a>
<a id="schema_UserVerifiedPhonesOutput"></a>
<a id="tocSuserverifiedphonesoutput"></a>
<a id="tocsuserverifiedphonesoutput"></a>

```json
{
  "status": "success",
  "data": [
    {
      "id": 789,
      "phoneNumber": "+37255556666",
      "userId": 45
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|data|[[UserVerifiedPhoneOutputData](#schemauserverifiedphoneoutputdata)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|
