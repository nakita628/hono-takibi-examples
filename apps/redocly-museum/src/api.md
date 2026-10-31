<h1 id="redocly-museum-api">Redocly Museum API v1.2.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Imaginary, but delightful Museum API for interacting with museum services and information. Built with love by Redocly.

Base URLs:

* <a href="https://redocly.com/_mock/docs/openapi/museum-api">https://redocly.com/_mock/docs/openapi/museum-api</a>

<a href="https://redocly.com/subscription-agreement/">Terms of service</a>
Email: <a href="mailto:team@redocly.com">team@redocly.com</a> 
Web: <a href="https://redocly.com/docs/cli/">https://redocly.com/docs/cli/</a> 
License: <a href="https://opensource.org/license/mit/">MIT</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="redocly-museum-api-operations">Operations</h1>

Operational information about the museum.

## Get museum hours

<a id="opIdgetMuseumHours"></a>

> Code samples

```bash
curl https://api.fake-museum-example.com/v1.1/museum-hours \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /museum-hours`

Get upcoming museum operating hours.

<h3 id="get-museum-hours-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string(date)|false|Starting date to retrieve future operating hours from. Defaults to today's date.|
|page|query|integer|false|Page number to retrieve.|
|limit|query|integer|false|Number of days per page.|

> Example responses

> 200 Response

```json
[
  {
    "date": "2023-09-11",
    "timeOpen": "09:00",
    "timeClose": "18:00"
  },
  {
    "date": "2023-09-12",
    "timeOpen": "09:00",
    "timeClose": "18:00"
  },
  {
    "date": "2023-09-13",
    "timeOpen": "09:00",
    "timeClose": "18:00"
  },
  {
    "date": "2023-09-14",
    "timeOpen": "09:00",
    "timeClose": "18:00"
  },
  {
    "date": "2023-09-15",
    "timeOpen": "10:00",
    "timeClose": "16:00"
  },
  {
    "date": "2023-09-18",
    "timeOpen": "09:00",
    "timeClose": "18:00"
  },
  {
    "date": "2023-09-19",
    "timeOpen": "09:00",
    "timeClose": "18:00"
  },
  {
    "date": "2023-09-20",
    "timeOpen": "09:00",
    "timeClose": "18:00"
  },
  {
    "date": "2023-09-21",
    "timeOpen": "09:00",
    "timeClose": "18:00"
  },
  {
    "date": "2023-09-22",
    "timeOpen": "10:00",
    "timeClose": "16:00"
  }
]
```

> 400 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

> 404 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

<h3 id="get-museum-hours-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[MuseumHours](#schemamuseumhours)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
MuseumPlaceholderAuth
</aside>

<h1 id="redocly-museum-api-events">Events</h1>

Special events hosted by the museum.

## List special events

<a id="opIdlistSpecialEvents"></a>

> Code samples

```bash
curl https://api.fake-museum-example.com/v1.1/special-events \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /special-events`

Return a list of upcoming special events at the museum.

<h3 id="list-special-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string(date)|false|Starting date to retrieve future operating hours from. Defaults to today's date.|
|endDate|query|string(date)|false|End of a date range to retrieve special events for. Defaults to 7 days after `startDate`.|
|page|query|integer|false|Page number to retrieve.|
|limit|query|integer|false|Number of days per page.|

> Example responses

> 200 Response

```json
[
  {
    "eventId": "f3e0e76e-e4a8-466e-ab9c-ae36c15b8e97",
    "name": "Sasquatch Ballet",
    "location": "Seattle... probably",
    "eventDescription": "They're big, they're hairy, but they're also graceful. Come learn how the biggest feet can have the lightest touch.",
    "dates": [
      "2023-12-15",
      "2023-12-22"
    ],
    "price": 40
  },
  {
    "eventId": "2f14374a-9c65-4ee5-94b7-fba66d893483",
    "name": "Solar Telescope Demonstration",
    "location": "Far from the sun.",
    "eventDescription": "Look at the sun without going blind!",
    "dates": [
      "2023-09-07",
      "2023-09-14"
    ],
    "price": 50
  },
  {
    "eventId": "6aaa61ba-b2aa-4868-b803-603dbbf7bfdb",
    "name": "Cook like a Caveman",
    "location": "Fire Pit on East side",
    "eventDescription": "Learn to cook on an open flame.",
    "dates": [
      "2023-11-10",
      "2023-11-17",
      "2023-11-24"
    ],
    "price": 5
  },
  {
    "eventId": "602b75e1-5696-4ab8-8c7a-f9e13580f910",
    "name": "Underwater Basket Weaving",
    "location": "Rec Center Pool next door.",
    "eventDescription": "Learn to weave baskets underwater.",
    "dates": [
      "2023-09-12",
      "2023-09-15"
    ],
    "price": 15
  },
  {
    "eventId": "dad4bce8-f5cb-4078-a211-995864315e39",
    "name": "Mermaid Treasure Identification and Analysis",
    "location": "Room Sea-12",
    "eventDescription": "Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits — kindly donated by Ariel.",
    "dates": [
      "2023-09-05",
      "2023-09-08"
    ],
    "price": 30
  },
  {
    "eventId": "6744a0da-4121-49cd-8479-f8cc20526495",
    "name": "Time Traveler Tea Party",
    "location": "Temporal Tearoom",
    "eventDescription": "Sip tea with important historical figures.",
    "dates": [
      "2023-11-18",
      "2023-11-25",
      "2023-12-02"
    ],
    "price": 60
  },
  {
    "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54",
    "name": "Pirate Coding Workshop",
    "location": "Computer Room",
    "eventDescription": "Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang).",
    "dates": [
      "2023-10-29",
      "2023-10-30",
      "2023-10-31"
    ],
    "price": 45
  },
  {
    "eventId": "9d90d29a-2af5-4206-97d9-9ea9ceadcb78",
    "name": "Llama Street Art Through the Ages",
    "location": "Auditorium",
    "eventDescription": "Llama street art?! Alpaca my bags -- let's go!",
    "dates": [
      "2023-10-29",
      "2023-10-30",
      "2023-10-31"
    ],
    "price": 45
  },
  {
    "eventId": "a3c7b2c4-b5fb-4ef7-9322-00a919864957",
    "name": "The Great Parrot Debate",
    "location": "Outdoor Amphitheatre",
    "eventDescription": "See leading parrot minds discuss important geopolitical issues.",
    "dates": [
      "2023-11-03",
      "2023-11-10"
    ],
    "price": 35
  },
  {
    "eventId": "b92d46b7-4c5d-422b-87a5-287767e26f29",
    "name": "Eat a Bunch of Corn",
    "location": "Cafeteria",
    "eventDescription": "We accidentally bought too much corn. Please come eat it.",
    "dates": [
      "2023-11-10",
      "2023-11-17",
      "2023-11-24"
    ],
    "price": 5
  }
]
```

> 400 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

> 404 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

<h3 id="list-special-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[SpecialEventCollection](#schemaspecialeventcollection)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
MuseumPlaceholderAuth
</aside>

## Create special events

<a id="opIdcreateSpecialEvent"></a>

> Code samples

```bash
curl https://api.fake-museum-example.com/v1.1/special-events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "Mermaid Treasure Identification and Analysis",
    "location": "Under the seaaa 🦀 🎶 🌊.",
    "eventDescription": "Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits, kindly donated by Ariel.",
    "dates": [
      "2023-09-05",
      "2023-09-08"
    ],
    "price": 0
  }'
```

`POST /special-events`

Creates a new special event for the museum.

> Body parameter

```json
{
  "name": "Mermaid Treasure Identification and Analysis",
  "location": "Under the seaaa 🦀 🎶 🌊.",
  "eventDescription": "Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits, kindly donated by Ariel.",
  "dates": [
    "2023-09-05",
    "2023-09-08"
  ],
  "price": 0
}
```

<h3 id="create-special-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SpecialEvent](#schemaspecialevent)|true|none|
|» eventId|body|[EventId](#schemaeventid)|false|Identifier for a special event.|
|» name|body|[EventName](#schemaeventname)|true|Name of the special event.|
|» location|body|[EventLocation](#schemaeventlocation)|true|Location where the special event is held.|
|» eventDescription|body|[EventDescription](#schemaeventdescription)|true|Description of the special event.|
|» dates|body|[EventDates](#schemaeventdates)|true|List of planned dates for the special event.|
|» price|body|[EventPrice](#schemaeventprice)|true|Price of a ticket for the special event.|

> Example responses

> 201 Response

```json
{
  "eventId": "dad4bce8-f5cb-4078-a211-995864315e39",
  "name": "Mermaid Treasure Identification and Analysis",
  "location": "Under the seaaa 🦀 🎶 🌊.",
  "eventDescription": "Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits, kindly donated by Ariel.",
  "dates": [
    "2023-09-05",
    "2023-09-08"
  ],
  "price": 30
}
```

> 400 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

> 404 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

<h3 id="create-special-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created.|[SpecialEvent](#schemaspecialevent)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
MuseumPlaceholderAuth
</aside>

## Get special event

<a id="opIdgetSpecialEvent"></a>

> Code samples

```bash
curl https://api.fake-museum-example.com/v1.1/special-events/dad4bce8-f5cb-4078-a211-995864315e39 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /special-events/{eventId}`

Get details about a special event.

<h3 id="get-special-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string(uuid)|true|Identifier for a special event.|

> Example responses

> 200 Response

```json
{
  "eventId": "6744a0da-4121-49cd-8479-f8cc20526495",
  "name": "Time Traveler Tea Party",
  "location": "Temporal Tearoom",
  "eventDescription": "Sip tea with important historical figures.",
  "dates": [
    "2023-11-18",
    "2023-11-25",
    "2023-12-02"
  ],
  "price": 60
}
```

> 400 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

> 404 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

<h3 id="get-special-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[SpecialEvent](#schemaspecialevent)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
MuseumPlaceholderAuth
</aside>

## Delete special event

<a id="opIddeleteSpecialEvent"></a>

> Code samples

```bash
curl https://api.fake-museum-example.com/v1.1/special-events/dad4bce8-f5cb-4078-a211-995864315e39 \
  -X DELETE \
  -H 'Accept: application/problem+json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /special-events/{eventId}`

Delete a special event from the collection. Allows museum to cancel planned events.

<h3 id="delete-special-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string(uuid)|true|Identifier for a special event.|

> Example responses

> 400 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

> 401 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

> 404 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

<h3 id="delete-special-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success - no content.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
MuseumPlaceholderAuth
</aside>

## Update special event

<a id="opIdupdateSpecialEvent"></a>

> Code samples

```bash
curl https://api.fake-museum-example.com/v1.1/special-events/dad4bce8-f5cb-4078-a211-995864315e39 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "location": "On the beach.",
    "price": 15
  }'
```

`PATCH /special-events/{eventId}`

Update the details of a special event.

> Body parameter

```json
{
  "location": "On the beach.",
  "price": 15
}
```

<h3 id="update-special-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string(uuid)|true|Identifier for a special event.|
|body|body|[SpecialEventFields](#schemaspecialeventfields)|true|none|
|» name|body|[EventName](#schemaeventname)|false|Name of the special event.|
|» location|body|[EventLocation](#schemaeventlocation)|false|Location where the special event is held.|
|» eventDescription|body|[EventDescription](#schemaeventdescription)|false|Description of the special event.|
|» dates|body|[EventDates](#schemaeventdates)|false|List of planned dates for the special event.|
|» price|body|[EventPrice](#schemaeventprice)|false|Price of a ticket for the special event.|

> Example responses

> 200 Response

```json
{
  "eventId": "dad4bce8-f5cb-4078-a211-995864315e39",
  "name": "Mermaid Treasure Identification and Analysis",
  "location": "On the beach.",
  "eventDescription": "Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits, kindly donated by Ariel.",
  "dates": [
    "2023-09-05",
    "2023-09-08"
  ],
  "price": 15
}
```

> 400 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

> 404 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

<h3 id="update-special-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[SpecialEvent](#schemaspecialevent)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
MuseumPlaceholderAuth
</aside>

<h1 id="redocly-museum-api-tickets">Tickets</h1>

Museum tickets for general entrance or special events.

## Buy museum tickets

<a id="opIdbuyMuseumTickets"></a>

> Code samples

```bash
curl https://api.fake-museum-example.com/v1.1/tickets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "ticketType": "general",
    "ticketDate": "2023-09-07",
    "email": "todd@example.com"
  }'
```

`POST /tickets`

Purchase museum tickets for general entry or special events.

> Body parameter

```json
{
  "ticketType": "general",
  "ticketDate": "2023-09-07",
  "email": "todd@example.com"
}
```

<h3 id="buy-museum-tickets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BuyMuseumTickets](#schemabuymuseumtickets)|true|none|
|» email|body|[Email](#schemaemail)|false|Email address for ticket purchaser.|
|» ticketId|body|[TicketId](#schematicketid)|false|Unique identifier for museum ticket. Generated when purchased.|
|» ticketDate|body|[Date](#schemadate)|true|Date when this ticket can be used for museum entry.|
|» ticketType|body|[TicketType](#schematickettype)|true|Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.|
|» eventId|body|[EventId](#schemaeventid)|false|Unique identifier for a special event. Required if purchasing tickets for the museum's special events.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ticketType|event|
|» ticketType|general|

> Example responses

> 201 Response

```json
{
  "message": "Museum general entry ticket purchased",
  "ticketId": "382c0820-0530-4f4b-99af-13811ad0f17a",
  "ticketType": "general",
  "ticketDate": "2023-09-07",
  "confirmationCode": "ticket-general-e5e5c6-dce78"
}
```

> 400 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

> 404 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

<h3 id="buy-museum-tickets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created.|[MuseumTicketsConfirmation](#schemamuseumticketsconfirmation)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
MuseumPlaceholderAuth
</aside>

## Get ticket QR code

<a id="opIdgetTicketCode"></a>

> Code samples

```bash
curl https://api.fake-museum-example.com/v1.1/tickets/a54a57ca-36f8-421b-a6b4-2e8f26858a4c/qr \
  -H 'Accept: application/problem+json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /tickets/{ticketId}/qr`

Return an image of your ticket with scannable QR code. Used for event entry.

<h3 id="get-ticket-qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticketId|path|string(uuid)|true|Identifier for a ticket to a museum event. Used to generate ticket image.|

> Example responses

> 400 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

> 404 Response

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

<h3 id="get-ticket-qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scannable event ticket in image format.|[TicketCodeImage](#schematicketcodeimage)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
MuseumPlaceholderAuth
</aside>

<h1 id="redocly-museum-api-webhooks">Webhooks</h1>

## New special event added

<a id="opIdpublishNewEvent"></a>

`POST publishNewEvent`

Publish details of a new or updated event.

> Body parameter

```json
{
  "eventId": "6744a0da-4121-49cd-8479-f8cc20526495",
  "name": "Time Traveler Tea Party",
  "location": "Temporal Tearoom",
  "eventDescription": "Sip tea with important historical figures.",
  "dates": [
    "2023-11-18",
    "2023-11-25",
    "2023-12-02"
  ],
  "price": 60
}
```

<h3 id="new-special-event-added-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SpecialEvent](#schemaspecialevent)|false|none|
|» eventId|body|[EventId](#schemaeventid)|false|Identifier for a special event.|
|» name|body|[EventName](#schemaeventname)|true|Name of the special event.|
|» location|body|[EventLocation](#schemaeventlocation)|true|Location where the special event is held.|
|» eventDescription|body|[EventDescription](#schemaeventdescription)|true|Description of the special event.|
|» dates|body|[EventDates](#schemaeventdates)|true|List of planned dates for the special event.|
|» price|body|[EventPrice](#schemaeventprice)|true|Price of a ticket for the special event.|

<h3 id="new-special-event-added-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Data accepted.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
MuseumPlaceholderAuth
</aside>

# Schemas

<h2 id="tocS_TicketType">TicketType</h2>
<!-- backwards compatibility -->
<a id="schematickettype"></a>
<a id="schema_TicketType"></a>
<a id="tocStickettype"></a>
<a id="tocstickettype"></a>

```json
"event"
```

Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"2023-10-29"
```

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"museum-lover@example.com"
```

Email address for ticket purchaser.

<h2 id="tocS_BuyMuseumTickets">BuyMuseumTickets</h2>
<!-- backwards compatibility -->
<a id="schemabuymuseumtickets"></a>
<a id="schema_BuyMuseumTickets"></a>
<a id="tocSbuymuseumtickets"></a>
<a id="tocsbuymuseumtickets"></a>

```json
{
  "email": "museum-lover@example.com",
  "ticketId": "a54a57ca-36f8-421b-a6b4-2e8f26858a4c",
  "ticketDate": "2023-10-29",
  "ticketType": "event",
  "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54"
}
```

Data to purchase a ticket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|[Email](#schemaemail)|false|none|Email address for ticket purchaser.|
|ticketId|[TicketId](#schematicketid)|false|none|Unique identifier for museum ticket. Generated when purchased.|
|ticketDate|[Date](#schemadate)|true|none|Date when this ticket can be used for museum entry.|
|ticketType|[TicketType](#schematickettype)|true|none|Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.|
|eventId|[EventId](#schemaeventid)|false|none|Unique identifier for a special event. Required if purchasing tickets for the museum's special events.|

#### Enumerated Values

|Property|Value|
|---|---|
|ticketType|event|
|ticketType|general|

<h2 id="tocS_TicketMessage">TicketMessage</h2>
<!-- backwards compatibility -->
<a id="schematicketmessage"></a>
<a id="schema_TicketMessage"></a>
<a id="tocSticketmessage"></a>
<a id="tocsticketmessage"></a>

```json
"Museum general entry ticket purchased"
```

Confirmation message after a ticket purchase.

<h2 id="tocS_TicketId">TicketId</h2>
<!-- backwards compatibility -->
<a id="schematicketid"></a>
<a id="schema_TicketId"></a>
<a id="tocSticketid"></a>
<a id="tocsticketid"></a>

```json
"a54a57ca-36f8-421b-a6b4-2e8f26858a4c"
```

Unique identifier for museum ticket. Generated when purchased.

<h2 id="tocS_TicketConfirmation">TicketConfirmation</h2>
<!-- backwards compatibility -->
<a id="schematicketconfirmation"></a>
<a id="schema_TicketConfirmation"></a>
<a id="tocSticketconfirmation"></a>
<a id="tocsticketconfirmation"></a>

```json
"ticket-event-a98c8f-7eb12"
```

Unique confirmation code used to verify ticket purchase.

<h2 id="tocS_Ticket">Ticket</h2>
<!-- backwards compatibility -->
<a id="schematicket"></a>
<a id="schema_Ticket"></a>
<a id="tocSticket"></a>
<a id="tocsticket"></a>

```json
{
  "ticketId": "a54a57ca-36f8-421b-a6b4-2e8f26858a4c",
  "ticketDate": "2023-10-29",
  "ticketType": "event",
  "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54"
}
```

Ticket for museum entry, can be general admission or special event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticketId|[TicketId](#schematicketid)|false|none|Unique identifier for museum ticket. Generated when purchased.|
|ticketDate|[Date](#schemadate)|true|none|Date when this ticket can be used for museum entry.|
|ticketType|[TicketType](#schematickettype)|true|none|Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.|
|eventId|[EventId](#schemaeventid)|false|none|Unique identifier for a special event. Required if purchasing tickets for the museum's special events.|

#### Enumerated Values

|Property|Value|
|---|---|
|ticketType|event|
|ticketType|general|

<h2 id="tocS_MuseumTicketsConfirmation">MuseumTicketsConfirmation</h2>
<!-- backwards compatibility -->
<a id="schemamuseumticketsconfirmation"></a>
<a id="schema_MuseumTicketsConfirmation"></a>
<a id="tocSmuseumticketsconfirmation"></a>
<a id="tocsmuseumticketsconfirmation"></a>

```json
{
  "ticketId": "a54a57ca-36f8-421b-a6b4-2e8f26858a4c",
  "ticketDate": "2023-10-29",
  "ticketType": "event",
  "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54",
  "message": "Museum general entry ticket purchased",
  "confirmationCode": "ticket-event-a98c8f-7eb12"
}
```

Details for a museum ticket after a successful purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ticketId|[TicketId](#schematicketid)|false|none|Unique identifier for museum ticket. Generated when purchased.|
|ticketDate|[Date](#schemadate)|true|none|Date when this ticket can be used for museum entry.|
|ticketType|[TicketType](#schematickettype)|true|none|Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.|
|eventId|[EventId](#schemaeventid)|false|none|Unique identifier for a special event. Required if purchasing tickets for the museum's special events.|
|message|[TicketMessage](#schematicketmessage)|true|none|Confirmation message after a ticket purchase.|
|confirmationCode|[TicketConfirmation](#schematicketconfirmation)|true|none|Unique confirmation code used to verify ticket purchase.|

#### Enumerated Values

|Property|Value|
|---|---|
|ticketType|event|
|ticketType|general|

<h2 id="tocS_TicketCodeImage">TicketCodeImage</h2>
<!-- backwards compatibility -->
<a id="schematicketcodeimage"></a>
<a id="schema_TicketCodeImage"></a>
<a id="tocSticketcodeimage"></a>
<a id="tocsticketcodeimage"></a>

```json
"string"
```

Image of a ticket with a QR code used for museum or event entry.

<h2 id="tocS_MuseumHours">MuseumHours</h2>
<!-- backwards compatibility -->
<a id="schemamuseumhours"></a>
<a id="schema_MuseumHours"></a>
<a id="tocSmuseumhours"></a>
<a id="tocsmuseumhours"></a>

```json
[
  {
    "date": "2024-12-31",
    "timeOpen": "09:00",
    "timeClose": "18:00"
  }
]
```

List of museum operating hours for a date range.

<h2 id="tocS_MuseumDailyHours">MuseumDailyHours</h2>
<!-- backwards compatibility -->
<a id="schemamuseumdailyhours"></a>
<a id="schema_MuseumDailyHours"></a>
<a id="tocSmuseumdailyhours"></a>
<a id="tocsmuseumdailyhours"></a>

```json
{
  "date": "2024-12-31",
  "timeOpen": "09:00",
  "timeClose": "18:00"
}
```

Daily operating hours for the museum.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|[Date](#schemadate)|true|none|Date the operating hours apply to.|
|timeOpen|string|true|none|Time the museum opens on a specific date. Uses 24 hour time format (`HH:mm`).|
|timeClose|string|true|none|Time the museum closes on a specific date. Uses 24 hour time format (`HH:mm`).|

<h2 id="tocS_EventId">EventId</h2>
<!-- backwards compatibility -->
<a id="schemaeventid"></a>
<a id="schema_EventId"></a>
<a id="tocSeventid"></a>
<a id="tocseventid"></a>

```json
"3be6453c-03eb-4357-ae5a-984a0e574a54"
```

Identifier for a special event.

<h2 id="tocS_EventName">EventName</h2>
<!-- backwards compatibility -->
<a id="schemaeventname"></a>
<a id="schema_EventName"></a>
<a id="tocSeventname"></a>
<a id="tocseventname"></a>

```json
"Pirate Coding Workshop"
```

Name of the special event.

<h2 id="tocS_EventLocation">EventLocation</h2>
<!-- backwards compatibility -->
<a id="schemaeventlocation"></a>
<a id="schema_EventLocation"></a>
<a id="tocSeventlocation"></a>
<a id="tocseventlocation"></a>

```json
"Computer Room"
```

Location where the special event is held.

<h2 id="tocS_EventDescription">EventDescription</h2>
<!-- backwards compatibility -->
<a id="schemaeventdescription"></a>
<a id="schema_EventDescription"></a>
<a id="tocSeventdescription"></a>
<a id="tocseventdescription"></a>

```json
"Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang)."
```

Description of the special event.

<h2 id="tocS_EventDates">EventDates</h2>
<!-- backwards compatibility -->
<a id="schemaeventdates"></a>
<a id="schema_EventDates"></a>
<a id="tocSeventdates"></a>
<a id="tocseventdates"></a>

```json
[
  "2023-10-29"
]
```

List of planned dates for the special event.

<h2 id="tocS_EventPrice">EventPrice</h2>
<!-- backwards compatibility -->
<a id="schemaeventprice"></a>
<a id="schema_EventPrice"></a>
<a id="tocSeventprice"></a>
<a id="tocseventprice"></a>

```json
25
```

Price of a ticket for the special event.

<h2 id="tocS_SpecialEventFields">SpecialEventFields</h2>
<!-- backwards compatibility -->
<a id="schemaspecialeventfields"></a>
<a id="schema_SpecialEventFields"></a>
<a id="tocSspecialeventfields"></a>
<a id="tocsspecialeventfields"></a>

```json
{
  "name": "Pirate Coding Workshop",
  "location": "Computer Room",
  "eventDescription": "Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang).",
  "dates": [
    "2023-10-29"
  ],
  "price": 25
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[EventName](#schemaeventname)|false|none|Name of the special event.|
|location|[EventLocation](#schemaeventlocation)|false|none|Location where the special event is held.|
|eventDescription|[EventDescription](#schemaeventdescription)|false|none|Description of the special event.|
|dates|[EventDates](#schemaeventdates)|false|none|List of planned dates for the special event.|
|price|[EventPrice](#schemaeventprice)|false|none|Price of a ticket for the special event.|

<h2 id="tocS_SpecialEvent">SpecialEvent</h2>
<!-- backwards compatibility -->
<a id="schemaspecialevent"></a>
<a id="schema_SpecialEvent"></a>
<a id="tocSspecialevent"></a>
<a id="tocsspecialevent"></a>

```json
{
  "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54",
  "name": "Pirate Coding Workshop",
  "location": "Computer Room",
  "eventDescription": "Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang).",
  "dates": [
    "2023-10-29"
  ],
  "price": 25
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|[EventId](#schemaeventid)|false|none|Identifier for a special event.|
|name|[EventName](#schemaeventname)|true|none|Name of the special event.|
|location|[EventLocation](#schemaeventlocation)|true|none|Location where the special event is held.|
|eventDescription|[EventDescription](#schemaeventdescription)|true|none|Description of the special event.|
|dates|[EventDates](#schemaeventdates)|true|none|List of planned dates for the special event.|
|price|[EventPrice](#schemaeventprice)|true|none|Price of a ticket for the special event.|

<h2 id="tocS_SpecialEventCollection">SpecialEventCollection</h2>
<!-- backwards compatibility -->
<a id="schemaspecialeventcollection"></a>
<a id="schema_SpecialEventCollection"></a>
<a id="tocSspecialeventcollection"></a>
<a id="tocsspecialeventcollection"></a>

```json
[
  {
    "eventId": "3be6453c-03eb-4357-ae5a-984a0e574a54",
    "name": "Pirate Coding Workshop",
    "location": "Computer Room",
    "eventDescription": "Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang).",
    "dates": [
      "2023-10-29"
    ],
    "price": 25
  }
]
```

List of upcoming special events.

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "type": "object",
  "title": "Validation failed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|title|string|false|none|none|
