<h1 id="drivebcs-open511-api">DriveBC's Open511 API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API is DriveBC's implementation of the Open511 specification.  It provides information about known road events (traffic accidents, construction, etc.) in British Columbia, Canada.  Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.

Base URLs:

* <a href="http://api.open511.gov.bc.ca/">http://api.open511.gov.bc.ca/</a>

* <a href="https://api.open511.gov.bc.ca/">https://api.open511.gov.bc.ca/</a>

<a href="http://www2.gov.bc.ca/gov/content?id=D1EE0A405E584363B205CD4353E02C88">Terms of service</a>
Email: <a href="mailto:TRANBMClientRelations@gov.bc.ca">Drive BC</a> 
Web: <a href="http://www.drivebc.ca/">Drive BC</a> 
License: <a href="http://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61">Open Government License - British Columbia</a>

<a href="http://api.open511.gov.bc.ca/help">Additional API Documentation</a>

<h1 id="drivebcs-open511-api-resources">resources</h1>

## Lists the geographical areas (e.g. districts) that can be used to filter events.

> Code samples

```bash
curl https://example.com/areas
```

`GET /areas`

<h3 id="lists-the-geographical-areas-eg-districts-that-can-be-used-to-filter-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

<h3 id="lists-the-geographical-areas-eg-districts-that-can-be-used-to-filter-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of packages|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists road events

> Code samples

```bash
curl https://example.com/events
```

`GET /events`

The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided. 

<h3 id="lists-road-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The format of the response|
|status|query|string|false|Limits the response to events having a given status.|
|severity|query|string|false|Limits the response to events tagged with one of the listed severity values. The possible values are: [MINOR, MODERATE, MAJOR].  Multiple values may be listed, and should be separated by a comma. The default is to return events of any severity.|
|jurisdiction|query|string|false|Limits the response to events reported by a given jurisdiction. The value given must be specified as the ID of a jurisdiction returned by the /jurisdiction resource. The default is to return events from all jurisdictions.|
|event_type|query|string|false|Limits the response to events tagged with one of the listed event types.  The possible values include: [CONSTRUCTION, INCIDENT, SPECIAL_EVENT, WEATHER_CONDITION].  Multiple values may be listed, and should be separated by a comma. The default is to return events of all types.|
|created|query|string|false|Limits the response to events based on the date and time that the event was created (first recorded). The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events create after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time.  The default is to return events with any creation time.|
|updated|query|string|false|Limits the response to events based on the date and time that the event was last updated. The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events updated after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time. The default is to return events with any update time|
|road_name|query|string|false|Limits the response to events on a given road as specified by the road name.  An example of a valid road name is 'Highway 1'. The default is to return events on all roads.|
|area_id|query|string|false|Limits the response to events within one of the specified areas.  An area must be specified as the ID of an item returned by the /areas resource. For example: an area_id of 'drivebc.ca/1' limits events to those within the Lower Mainland District.  The default is to return events in all areas.|
|bbox|query|string|false|Limits the response to events that fall within the specified geographical bounding box.  The bbox format must be '[min longitude],[min latitude],[max longitude],[max latitude]' with WGS84 coordinates.  For example: -123.45,48.99,-122.45,49.49.  The default is to return events in all geographical locations.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|status|ALL|
|status|ACTIVE|
|status|ARCHIVED|
|event_type|CONSTRUCTION|
|event_type|SPECIAL_EVENT|
|event_type|INCIDENT|
|event_type|WEATHER_CONDITION|
|event_type|ROAD_CONDITION|

<h3 id="lists-road-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of packages|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists the jurisdictions publishing data through this Open511 API implementation

> Code samples

```bash
curl https://example.com/jurisdiction
```

`GET /jurisdiction`

<h3 id="lists-the-jurisdictions-publishing-data-through-this-open511-api-implementation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

<h3 id="lists-the-jurisdictions-publishing-data-through-this-open511-api-implementation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of packages|None|

<aside class="success">
This operation does not require authentication
</aside>

## Provides the geographical boundaries for all the jurisdictions.

> Code samples

```bash
curl https://example.com/jurisdictiongeography
```

`GET /jurisdictiongeography`

<h3 id="provides-the-geographical-boundaries-for-all-the-jurisdictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

<h3 id="provides-the-geographical-boundaries-for-all-the-jurisdictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of packages|None|

<aside class="success">
This operation does not require authentication
</aside>
