<h1 id="discovery-api">Discovery API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

Base URLs:

* <a href="https://api.apis.guru//www.ticketmaster.com/discovery/v2">https://api.apis.guru//www.ticketmaster.com/discovery/v2</a>

Web: <a href="http://developer.ticketmaster.com/support/contact-us/">http://developer.ticketmaster.com/support/contact-us/</a> 

<h1 id="discovery-api-v2">v2</h1>

## Find Suggest

> Code samples

```bash
curl https://example.com/discovery/v2/suggest \
  -H 'Accept: application/json'
```

`GET /discovery/v2/suggest`

Find search suggestions and filter your suggestions by location, source, etc.

<h3 id="find-suggest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyword|query|string|false|Keyword to search on|
|source|query|string|false|Filter entities by its source name|
|latlong|query|string|false|Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead|
|radius|query|string|false|Radius of the area in which we want to search for events.|
|unit|query|string|false|Unit of the radius|
|size|query|string|false|Size of every entity returned in the response|
|includeFuzzy|query|string|false|yes, to include fuzzy matches in the search. This has performance impact.|
|clientVisibility|query|string|false|Filter events to clientName|
|countryCode|query|string|false|Filter suggestions by country code|
|includeTBA|query|string|false|True, to include events with date to be announce (TBA)|
|includeTBD|query|string|false|True, to include event with a date to be defined (TBD)|
|segmentId|query|string|false|Filter suggestions by segment id|
|geoPoint|query|string|false|filter events by geoHash|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|Yes if you want to display licensed content|
|includeSpellcheck|query|string|false|yes, to include spell check suggestions in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|ticketmaster|
|source| universe|
|source| frontgate|
|source| tmr|
|unit|miles|
|unit|km|
|includeFuzzy|yes|
|includeFuzzy| no|
|includeTBA|yes|
|includeTBA| no|
|includeTBA| only|
|includeTBD|yes|
|includeTBD| no|
|includeTBD| only|
|includeLicensedContent|yes|
|includeLicensedContent| no|
|includeSpellcheck|yes|
|includeSpellcheck| no|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="find-suggest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discovery-api-default">Default</h1>

## Attraction Search

<a id="opIdfind"></a>

> Code samples

```bash
curl https://example.com/discovery/v2/attractions
```

`GET /discovery/v2/attractions`

Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.

<h3 id="attraction-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Sorting order of the search result. Allowable Values : 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc'|
|classificationName|query|[object]|false|Filter attractions by classification name: name of any segment, genre, sub-genre, type, sub-type|
|classificationId|query|[object]|false|Filter attractions by classification id: id of any segment, genre, sub-genre, type, sub-type|
|keyword|query|string|false|Keyword to search on|
|id|query|string|false|Filter entities by its id|
|source|query|string|false|Filter entities by its source name|
|includeTest|query|string|false|True if you want to have entities flag as test in the response. Only, if you only wanted test entities|
|page|query|string|false|Page number|
|size|query|string|false|Page size of the response|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|Yes if you want to display licensed content|
|includeSpellcheck|query|string|false|yes, to include spell check suggestions in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|ticketmaster|
|source| universe|
|source| frontgate|
|source| tmr|
|includeTest|yes|
|includeTest| no|
|includeTest| only|
|includeLicensedContent|yes|
|includeLicensedContent| no|
|includeSpellcheck|yes|
|includeSpellcheck| no|

<h3 id="attraction-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="attraction-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Attraction](#schemaattraction)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Attraction Details

<a id="opIdget"></a>

> Code samples

```bash
curl https://example.com/discovery/v2/attractions/string
```

`GET /discovery/v2/attractions/{id}`

Get details for a specific attraction using the unique identifier for the attraction.

<h3 id="get-attraction-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the attraction|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|True if you want to display licensed content|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeLicensedContent|yes|
|includeLicensedContent| no|

<h3 id="get-attraction-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Attraction](#schemaattraction)|

<aside class="success">
This operation does not require authentication
</aside>

## Classification Search

> Code samples

```bash
curl https://example.com/discovery/v2/classifications
```

`GET /discovery/v2/classifications`

Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.

<h3 id="classification-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Sorting order of the search result|
|keyword|query|string|false|Keyword to search on|
|id|query|string|false|Filter entities by its id|
|source|query|string|false|Filter entities by its source name|
|includeTest|query|string|false|True if you want to have entities flag as test in the response. Only, if you only wanted test entities|
|page|query|string|false|Page number|
|size|query|string|false|Page size of the response|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|Yes if you want to display licensed content|
|includeSpellcheck|query|string|false|yes, to include spell check suggestions in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|ticketmaster|
|source| universe|
|source| frontgate|
|source| tmr|
|includeTest|yes|
|includeTest| no|
|includeTest| only|
|includeLicensedContent|yes|
|includeLicensedContent| no|
|includeSpellcheck|yes|
|includeSpellcheck| no|

<h3 id="classification-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="classification-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Classification](#schemaclassification)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Genre Details

<a id="opIdgetGenre"></a>

> Code samples

```bash
curl https://example.com/discovery/v2/classifications/genres/string
```

`GET /discovery/v2/classifications/genres/{id}`

Get details for a specific genre using its unique identifier.

<h3 id="get-genre-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the genre|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|True if you want to display licensed content|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeLicensedContent|yes|
|includeLicensedContent| no|

<h3 id="get-genre-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Genre](#schemagenre)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Segment Details

<a id="opIdgetSegment"></a>

> Code samples

```bash
curl https://example.com/discovery/v2/classifications/segments/string
```

`GET /discovery/v2/classifications/segments/{id}`

Get details for a specific segment using its unique identifier.

<h3 id="get-segment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the segment|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|True if you want to display licensed content|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeLicensedContent|yes|
|includeLicensedContent| no|

<h3 id="get-segment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Segment](#schemasegment)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Sub-Genre Details

<a id="opIdgetSubgenre"></a>

> Code samples

```bash
curl https://example.com/discovery/v2/classifications/subgenres/string
```

`GET /discovery/v2/classifications/subgenres/{id}`

Get details for a specific sub-genre using its unique identifier.

<h3 id="get-sub-genre-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the subgenre|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|True if you want to display licensed content|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeLicensedContent|yes|
|includeLicensedContent| no|

<h3 id="get-sub-genre-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Level](#schemalevel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Classification Details

> Code samples

```bash
curl https://example.com/discovery/v2/classifications/string
```

`GET /discovery/v2/classifications/{id}`

Get details for a specific segment, genre, or sub-genre using its unique identifier.

<h3 id="get-classification-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the segment, genre, or sub-genre|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|True if you want to display licensed content|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeLicensedContent|yes|
|includeLicensedContent| no|

<h3 id="get-classification-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Classification](#schemaclassification)|

<aside class="success">
This operation does not require authentication
</aside>

## Event Search

> Code samples

```bash
curl https://example.com/discovery/v2/events
```

`GET /discovery/v2/events`

Find events and filter your search by location, date, availability, and much more.

<h3 id="event-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc','onsaleStartDate,asc', 'id,asc'|
|startDateTime|query|string|false|Filter events with a start date after this date|
|endDateTime|query|string|false|Filter events with a start date before this date|
|onsaleStartDateTime|query|string|false|Filter events with onsale start date after this date|
|onsaleOnStartDate|query|string|false|Filter events with onsale start date on this date|
|onsaleOnAfterStartDate|query|string|false|Filter events with onsale range within this date|
|onsaleEndDateTime|query|string|false|Filter events with onsale end date before this date|
|city|query|string|false|Filter events by city|
|countryCode|query|string|false|Filter events by country code|
|stateCode|query|string|false|Filter events by state code|
|postalCode|query|string|false|Filter events by postal code / zipcode|
|venueId|query|string|false|Filter events by venue id|
|attractionId|query|string|false|Filter events by attraction id|
|segmentId|query|string|false|Filter events by segment id|
|segmentName|query|string|false|Filter events by segment name|
|classificationName|query|[object]|false|Filter events by classification name: name of any segment, genre, sub-genre, type, sub-type|
|classificationId|query|[object]|false|Filter events by classification id: id of any segment, genre, sub-genre, type, sub-type|
|marketId|query|string|false|Filter events by market id|
|promoterId|query|string|false|Filter events by promoter id|
|dmaId|query|string|false|Filter events by dma id|
|includeTBA|query|string|false|True, to include events with date to be announce (TBA)|
|includeTBD|query|string|false|True, to include event with a date to be defined (TBD)|
|clientVisibility|query|string|false|Filter events by clientName|
|latlong|query|string|false|Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead|
|radius|query|string|false|Radius of the area in which we want to search for events.|
|unit|query|string|false|Unit of the radius|
|geoPoint|query|string|false|filter events by geoHash|
|keyword|query|string|false|Keyword to search on|
|id|query|string|false|Filter entities by its id|
|source|query|string|false|Filter entities by its source name|
|includeTest|query|string|false|True if you want to have entities flag as test in the response. Only, if you only wanted test entities|
|page|query|string|false|Page number|
|size|query|string|false|Page size of the response|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|Yes if you want to display licensed content|
|includeSpellcheck|query|string|false|yes, to include spell check suggestions in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeTBA|yes|
|includeTBA| no|
|includeTBA| only|
|includeTBD|yes|
|includeTBD| no|
|includeTBD| only|
|unit|miles|
|unit|km|
|source|ticketmaster|
|source| universe|
|source| frontgate|
|source| tmr|
|includeTest|yes|
|includeTest| no|
|includeTest| only|
|includeLicensedContent|yes|
|includeLicensedContent| no|
|includeSpellcheck|yes|
|includeSpellcheck| no|

<h3 id="event-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="event-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Event Details

> Code samples

```bash
curl https://example.com/discovery/v2/events/string
```

`GET /discovery/v2/events/{id}`

Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.

<h3 id="get-event-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the event|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|True if you want to display licensed content|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeLicensedContent|yes|
|includeLicensedContent| no|

<h3 id="get-event-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Event](#schemaevent)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Event Images

<a id="opIdgetImages"></a>

> Code samples

```bash
curl https://example.com/discovery/v2/events/string/images
```

`GET /discovery/v2/events/{id}/images`

Get images for a specific event using the unique identifier for the event.

<h3 id="get-event-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the event|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|True if you want to display licensed content|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeLicensedContent|yes|
|includeLicensedContent| no|

<h3 id="get-event-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[EventImages](#schemaeventimages)|

<aside class="success">
This operation does not require authentication
</aside>

## Venue Search

> Code samples

```bash
curl https://example.com/discovery/v2/venues
```

`GET /discovery/v2/venues`

Find venues and filter your search by name, and much more.

<h3 id="venue-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Sorting order of the search result. Allowable Values: 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'distance,desc'|
|stateCode|query|string|false|Filter venues by state / province code|
|countryCode|query|string|false|Filter venues by country code|
|latlong|query|string|false|Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead|
|radius|query|string|false|Radius of the area in which we want to search for events.|
|unit|query|string|false|Unit of the radius|
|geoPoint|query|string|false|filter events by geoHash|
|keyword|query|string|false|Keyword to search on|
|id|query|string|false|Filter entities by its id|
|source|query|string|false|Filter entities by its source name|
|includeTest|query|string|false|True if you want to have entities flag as test in the response. Only, if you only wanted test entities|
|page|query|string|false|Page number|
|size|query|string|false|Page size of the response|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|Yes if you want to display licensed content|
|includeSpellcheck|query|string|false|yes, to include spell check suggestions in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|unit|miles|
|unit|km|
|source|ticketmaster|
|source| universe|
|source| frontgate|
|source| tmr|
|includeTest|yes|
|includeTest| no|
|includeTest| only|
|includeLicensedContent|yes|
|includeLicensedContent| no|
|includeSpellcheck|yes|
|includeSpellcheck| no|

<h3 id="venue-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="venue-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Venue](#schemavenue)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Venue Details

> Code samples

```bash
curl https://example.com/discovery/v2/venues/string
```

`GET /discovery/v2/venues/{id}`

Get details for a specific venue using the unique identifier for the venue.

<h3 id="get-venue-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the venue|
|locale|query|string|false|The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') |
|includeLicensedContent|query|string|false|True if you want to display licensed content|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includeLicensedContent|yes|
|includeLicensedContent| no|

<h3 id="get-venue-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Venue](#schemavenue)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccessDates">AccessDates</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdates"></a>
<a id="schema_AccessDates"></a>
<a id="tocSaccessdates"></a>
<a id="tocsaccessdates"></a>

```json
{
  "endApproximate": "yyyy-MM-ddThh-mm-ssZ",
  "endDateTime": "yyyy-MM-ddThh-mm-ssZ",
  "startApproximate": false,
  "startDateTime": "yyyy-MM-ddThh-mm-ssZ"
}
```

Event's Access Date

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endApproximate|boolean|false|none|Boolean flag to indicate whether or not the access end date is approximated|
|endDateTime|string(date-time)|false|none|Event's end access time|
|startApproximate|boolean|false|none|Boolean flag to indicate whether or not the access start date is approximated|
|startDateTime|string(date-time)|false|none|Event's start access time|

<h2 id="tocS_Accessibility">Accessibility</h2>
<!-- backwards compatibility -->
<a id="schemaaccessibility"></a>
<a id="schema_Accessibility"></a>
<a id="tocSaccessibility"></a>
<a id="tocsaccessibility"></a>

```json
{
  "info": "string"
}
```

Additional information for people who experience disabilities

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|string|false|none|Accessibility's information|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "line1": "string",
  "line2": "string",
  "line3": "string"
}
```

Address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line1|string|false|none|Address first line|
|line2|string|false|none|Address second line|
|line3|string|false|none|Address third line|

<h2 id="tocS_Area">Area</h2>
<!-- backwards compatibility -->
<a id="schemaarea"></a>
<a id="schema_Area"></a>
<a id="tocSarea"></a>
<a id="tocsarea"></a>

```json
{
  "name": "string"
}
```

Area

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the entity|

<h2 id="tocS_Attraction">Attraction</h2>
<!-- backwards compatibility -->
<a id="schemaattraction"></a>
<a id="schema_Attraction"></a>
<a id="tocSattraction"></a>
<a id="tocsattraction"></a>

```json
{
  "additionalInfo": "string",
  "classifications": [
    {
      "genre": {
        "id": "string",
        "name": "string"
      },
      "primary": false,
      "segment": {
        "id": "string",
        "name": "string"
      },
      "subGenre": {
        "id": "string",
        "name": "string"
      },
      "subType": {
        "id": "string",
        "name": "string"
      },
      "type": {
        "id": "string",
        "name": "string"
      }
    }
  ],
  "description": "string",
  "externalLinks": {
    "property1": [
      {
        "id": "string",
        "url": "string"
      }
    ],
    "property2": [
      {
        "id": "string",
        "url": "string"
      }
    ]
  },
  "id": "string",
  "images": [
    {
      "attribution": "string",
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "locale": "string",
  "name": "string",
  "test": false,
  "type": "event",
  "upcomingEvents": {
    "property1": 0,
    "property2": 0
  },
  "url": "string"
}
```

Attraction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfo|string|false|none|Additional information of the entity|
|classifications|[[Classification](#schemaclassification)]|false|none|Attraction's classifications|
|description|string|false|none|Description's of the entity|
|externalLinks|object|false|none|List of external links|
|id|string|true|none|Unique id of the entity in the discovery API|
|images|[[Image](#schemaimage)]|false|none|Images of the entity|
|locale|string|false|none|Locale in which the content is returned|
|name|string|false|none|Name of the entity|
|test|boolean|false|none|Indicate if this is a test entity, by default test entities won't appear in discovery API|
|type|string|true|none|Type of the entity|
|upcomingEvents|object|false|none|number of upcoming events|
|url|string|false|none|URL of a web site detail page of the entity|

#### Enumerated Values

|Property|Value|
|---|---|
|type|event|
|type|venue|
|type|attraction|

<h2 id="tocS_AttractionExtensions">AttractionExtensions</h2>
<!-- backwards compatibility -->
<a id="schemaattractionextensions"></a>
<a id="schema_AttractionExtensions"></a>
<a id="tocSattractionextensions"></a>
<a id="tocsattractionextensions"></a>

```json
{}
```

All Attraction's extensions

<h2 id="tocS_Attribution">Attribution</h2>
<!-- backwards compatibility -->
<a id="schemaattribution"></a>
<a id="schema_Attribution"></a>
<a id="tocSattribution"></a>
<a id="tocsattribution"></a>

```json
{
  "licenceName": "string",
  "licenceUrl": "string",
  "sourceName": "string",
  "sourceUrl": "string"
}
```

Attribution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenceName|string|false|none|LicenceName|
|licenceUrl|string|false|none|LicenceUrl|
|sourceName|string|false|none|SourceName|
|sourceUrl|string|false|none|SourceUrl|

<h2 id="tocS_Attributions">Attributions</h2>
<!-- backwards compatibility -->
<a id="schemaattributions"></a>
<a id="schema_Attributions"></a>
<a id="tocSattributions"></a>
<a id="tocsattributions"></a>

```json
{
  "description": {
    "licenceName": "string",
    "licenceUrl": "string",
    "sourceName": "string",
    "sourceUrl": "string"
  },
  "descriptions": {
    "property1": {
      "licenceName": "string",
      "licenceUrl": "string",
      "sourceName": "string",
      "sourceUrl": "string"
    },
    "property2": {
      "licenceName": "string",
      "licenceUrl": "string",
      "sourceName": "string",
      "sourceUrl": "string"
    }
  }
}
```

Attributions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[Attribution](#schemaattribution)|false|none|Attribution|
|descriptions|object|false|none|Attribution descriptions - multi-lingual fields|

<h2 id="tocS_Chronology">Chronology</h2>
<!-- backwards compatibility -->
<a id="schemachronology"></a>
<a id="schema_Chronology"></a>
<a id="tocSchronology"></a>
<a id="tocschronology"></a>

```json
{
  "zone": {
    "fixed": false,
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|zone|[DateTimeZone](#schemadatetimezone)|false|none|none|

<h2 id="tocS_City">City</h2>
<!-- backwards compatibility -->
<a id="schemacity"></a>
<a id="schema_City"></a>
<a id="tocScity"></a>
<a id="tocscity"></a>

```json
{
  "name": "string"
}
```

City

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the entity|

<h2 id="tocS_Classification">Classification</h2>
<!-- backwards compatibility -->
<a id="schemaclassification"></a>
<a id="schema_Classification"></a>
<a id="tocSclassification"></a>
<a id="tocsclassification"></a>

```json
{
  "genre": {
    "id": "string",
    "name": "string"
  },
  "primary": false,
  "segment": {
    "id": "string",
    "name": "string"
  },
  "subGenre": {
    "id": "string",
    "name": "string"
  },
  "subType": {
    "id": "string",
    "name": "string"
  },
  "type": {
    "id": "string",
    "name": "string"
  }
}
```

Classification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genre|[Level](#schemalevel)|false|none|none|
|primary|boolean|false|none|True if this is the entity's primary classification|
|segment|[Segment](#schemasegment)|false|none|Segment|
|subGenre|[Level](#schemalevel)|false|none|none|
|subType|[Level](#schemalevel)|false|none|none|
|type|[Level](#schemalevel)|false|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "countryCode": "string",
  "name": "string"
}
```

Country

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|Country code (ISO 3166)|
|name|string|false|none|Name of the entity|

<h2 id="tocS_DateTimeField">DateTimeField</h2>
<!-- backwards compatibility -->
<a id="schemadatetimefield"></a>
<a id="schema_DateTimeField"></a>
<a id="tocSdatetimefield"></a>
<a id="tocsdatetimefield"></a>

```json
{
  "durationField": {
    "name": "string",
    "precise": false,
    "supported": false,
    "type": {
      "name": "string"
    },
    "unitMillis": 0
  },
  "leapDurationField": {
    "name": "string",
    "precise": false,
    "supported": false,
    "type": {
      "name": "string"
    },
    "unitMillis": 0
  },
  "lenient": false,
  "maximumValue": 0,
  "minimumValue": 0,
  "name": "string",
  "rangeDurationField": {
    "name": "string",
    "precise": false,
    "supported": false,
    "type": {
      "name": "string"
    },
    "unitMillis": 0
  },
  "supported": false,
  "type": {
    "durationType": {
      "name": "string"
    },
    "name": "string",
    "rangeDurationType": {
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationField|[DurationField](#schemadurationfield)|false|none|none|
|leapDurationField|[DurationField](#schemadurationfield)|false|none|none|
|lenient|boolean|false|none|none|
|maximumValue|integer(int32)|false|none|none|
|minimumValue|integer(int32)|false|none|none|
|name|string|false|none|none|
|rangeDurationField|[DurationField](#schemadurationfield)|false|none|none|
|supported|boolean|false|none|none|
|type|[DateTimeFieldType](#schemadatetimefieldtype)|false|none|none|

<h2 id="tocS_DateTimeFieldType">DateTimeFieldType</h2>
<!-- backwards compatibility -->
<a id="schemadatetimefieldtype"></a>
<a id="schema_DateTimeFieldType"></a>
<a id="tocSdatetimefieldtype"></a>
<a id="tocsdatetimefieldtype"></a>

```json
{
  "durationType": {
    "name": "string"
  },
  "name": "string",
  "rangeDurationType": {
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationType|[DurationFieldType](#schemadurationfieldtype)|false|none|none|
|name|string|false|none|none|
|rangeDurationType|[DurationFieldType](#schemadurationfieldtype)|false|none|none|

<h2 id="tocS_DateTimeZone">DateTimeZone</h2>
<!-- backwards compatibility -->
<a id="schemadatetimezone"></a>
<a id="schema_DateTimeZone"></a>
<a id="tocSdatetimezone"></a>
<a id="tocsdatetimezone"></a>

```json
{
  "fixed": false,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixed|boolean|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_DisplaySettingExtension">DisplaySettingExtension</h2>
<!-- backwards compatibility -->
<a id="schemadisplaysettingextension"></a>
<a id="schema_DisplaySettingExtension"></a>
<a id="tocSdisplaysettingextension"></a>
<a id="tocsdisplaysettingextension"></a>

```json
{
  "softLanding": false
}
```

Event's display settings extension

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softLanding|boolean|false|none|True the landing is Soft otherwise it's Comingled|

<h2 id="tocS_Dma">Dma</h2>
<!-- backwards compatibility -->
<a id="schemadma"></a>
<a id="schema_Dma"></a>
<a id="tocSdma"></a>
<a id="tocsdma"></a>

```json
{
  "id": 0
}
```

DMA (Designated Market Area)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|DMS's id|

<h2 id="tocS_DurationField">DurationField</h2>
<!-- backwards compatibility -->
<a id="schemadurationfield"></a>
<a id="schema_DurationField"></a>
<a id="tocSdurationfield"></a>
<a id="tocsdurationfield"></a>

```json
{
  "name": "string",
  "precise": false,
  "supported": false,
  "type": {
    "name": "string"
  },
  "unitMillis": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|precise|boolean|false|none|none|
|supported|boolean|false|none|none|
|type|[DurationFieldType](#schemadurationfieldtype)|false|none|none|
|unitMillis|integer(int64)|false|none|none|

<h2 id="tocS_DurationFieldType">DurationFieldType</h2>
<!-- backwards compatibility -->
<a id="schemadurationfieldtype"></a>
<a id="schema_DurationFieldType"></a>
<a id="tocSdurationfieldtype"></a>
<a id="tocsdurationfieldtype"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_EndDates">EndDates</h2>
<!-- backwards compatibility -->
<a id="schemaenddates"></a>
<a id="schema_EndDates"></a>
<a id="tocSenddates"></a>
<a id="tocsenddates"></a>

```json
{
  "approximate": false,
  "dateTime": "yyyy-MM-ddThh-mm-ssZ",
  "localDate": "yyyy-MM-dd",
  "localTime": {
    "chronology": {
      "zone": {
        "fixed": false,
        "id": "string"
      }
    },
    "fieldTypes": [
      {
        "durationType": {
          "name": "string"
        },
        "name": "string",
        "rangeDurationType": {
          "name": "string"
        }
      }
    ],
    "fields": [
      {
        "durationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "leapDurationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "lenient": false,
        "maximumValue": 0,
        "minimumValue": 0,
        "name": "string",
        "rangeDurationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "supported": false,
        "type": {
          "durationType": {
            "name": "string"
          },
          "name": "string",
          "rangeDurationType": {
            "name": "string"
          }
        }
      }
    ],
    "hourOfDay": 0,
    "millisOfDay": 0,
    "millisOfSecond": 0,
    "minuteOfHour": 0,
    "secondOfMinute": 0,
    "values": [
      0
    ]
  },
  "noSpecificTime": false
}
```

Event's End Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approximate|boolean|false|none|Boolean flag to indicate whether or not the end date is approximated|
|dateTime|string(date-time)|false|none|The event end date time|
|localDate|string(date)|false|none|The event end date in local date|
|localTime|[LocalTime](#schemalocaltime)|false|none|none|
|noSpecificTime|boolean|false|none|Boolean flag to indicate whether or not the event end time has no specific time|

<h2 id="tocS_EntityChanges">EntityChanges</h2>
<!-- backwards compatibility -->
<a id="schemaentitychanges"></a>
<a id="schema_EntityChanges"></a>
<a id="tocSentitychanges"></a>
<a id="tocsentitychanges"></a>

```json
{
  "changes": [
    "string"
  ],
  "newlyCreated": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[string]|false|none|none|
|newlyCreated|boolean|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "accessibility": {
    "info": "string"
  },
  "additionalInfo": "string",
  "classifications": [
    {
      "genre": {
        "id": "string",
        "name": "string"
      },
      "primary": false,
      "segment": {
        "id": "string",
        "name": "string"
      },
      "subGenre": {
        "id": "string",
        "name": "string"
      },
      "subType": {
        "id": "string",
        "name": "string"
      },
      "type": {
        "id": "string",
        "name": "string"
      }
    }
  ],
  "dates": {
    "access": {
      "endApproximate": "yyyy-MM-ddThh-mm-ssZ",
      "endDateTime": "yyyy-MM-ddThh-mm-ssZ",
      "startApproximate": false,
      "startDateTime": "yyyy-MM-ddThh-mm-ssZ"
    },
    "end": {
      "approximate": false,
      "dateTime": "yyyy-MM-ddThh-mm-ssZ",
      "localDate": "yyyy-MM-dd",
      "localTime": {
        "chronology": {
          "zone": {
            "fixed": false,
            "id": "string"
          }
        },
        "fieldTypes": [
          {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        ],
        "fields": [
          {
            "durationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "leapDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "lenient": false,
            "maximumValue": 0,
            "minimumValue": 0,
            "name": "string",
            "rangeDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "supported": false,
            "type": {
              "durationType": {
                "name": "string"
              },
              "name": "string",
              "rangeDurationType": {
                "name": "string"
              }
            }
          }
        ],
        "hourOfDay": 0,
        "millisOfDay": 0,
        "millisOfSecond": 0,
        "minuteOfHour": 0,
        "secondOfMinute": 0,
        "values": [
          0
        ]
      },
      "noSpecificTime": false
    },
    "spanMultipleDays": false,
    "start": {
      "dateTBA": false,
      "dateTBD": false,
      "dateTime": "yyyy-MM-ddThh:mm:ssZ",
      "localDate": "yyyy-MM-dd",
      "localTime": {
        "chronology": {
          "zone": {
            "fixed": false,
            "id": "string"
          }
        },
        "fieldTypes": [
          {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        ],
        "fields": [
          {
            "durationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "leapDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "lenient": false,
            "maximumValue": 0,
            "minimumValue": 0,
            "name": "string",
            "rangeDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "supported": false,
            "type": {
              "durationType": {
                "name": "string"
              },
              "name": "string",
              "rangeDurationType": {
                "name": "string"
              }
            }
          }
        ],
        "hourOfDay": 0,
        "millisOfDay": 0,
        "millisOfSecond": 0,
        "minuteOfHour": 0,
        "secondOfMinute": 0,
        "values": [
          0
        ]
      },
      "noSpecificTime": false,
      "timeTBA": false
    },
    "status": {
      "code": "onsale"
    },
    "timezone": "string"
  },
  "description": "string",
  "distance": 0,
  "externalLinks": {
    "property1": [
      {
        "id": "string",
        "url": "string"
      }
    ],
    "property2": [
      {
        "id": "string",
        "url": "string"
      }
    ]
  },
  "id": "string",
  "images": [
    {
      "attribution": "string",
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "info": "string",
  "locale": "string",
  "location": {
    "latitude": 0,
    "longitude": 0
  },
  "name": "string",
  "outlets": [
    {
      "type": "string",
      "url": "string"
    }
  ],
  "place": {
    "address": {
      "line1": "string",
      "line2": "string",
      "line3": "string"
    },
    "area": {
      "name": "string"
    },
    "city": {
      "name": "string"
    },
    "country": {
      "countryCode": "string",
      "name": "string"
    },
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "name": "string",
    "postalCode": "string",
    "state": {
      "name": "string",
      "stateCode": "string"
    }
  },
  "pleaseNote": "string",
  "priceRanges": [
    {
      "currency": "string",
      "max": 0,
      "min": 0,
      "type": "standard"
    }
  ],
  "products": [
    {
      "id": "string",
      "name": "string",
      "type": "string",
      "url": "string"
    }
  ],
  "promoter": {
    "description": "string",
    "id": "string",
    "name": "string"
  },
  "promoters": [
    {
      "description": "string",
      "id": "string",
      "name": "string"
    }
  ],
  "sales": {
    "presales": [
      {
        "description": "string",
        "endDateTime": "1970-01-01T00:00:00Z",
        "name": "string",
        "startDateTime": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "public": {
      "endDateTime": "1970-01-01T00:00:00Z",
      "startDateTime": "1970-01-01T00:00:00Z",
      "startTBD": false
    }
  },
  "seatmap": {
    "staticUrl": "string"
  },
  "test": false,
  "type": "event",
  "units": "string",
  "url": "string"
}
```

Event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibility|[Accessibility](#schemaaccessibility)|false|none|Additional information for people who experience disabilities|
|additionalInfo|string|false|none|Additional information of the entity|
|classifications|[[Classification](#schemaclassification)]|false|none|Event's classifications|
|dates|[EventDates](#schemaeventdates)|false|none|Event's Dates|
|description|string|false|none|Description's of the entity|
|distance|number(double)|false|none|none|
|externalLinks|object|false|none|List of external links|
|id|string|true|none|Unique id of the entity in the discovery API|
|images|[[Image](#schemaimage)]|false|none|Images of the entity|
|info|string|false|none|Any information related to the event|
|locale|string|false|none|Locale in which the content is returned|
|location|[Location](#schemalocation)|false|none|Location|
|name|string|false|none|Name of the entity|
|outlets|[[Outlet](#schemaoutlet)]|false|none|Related outlets informations|
|place|[Place](#schemaplace)|false|none|Place|
|pleaseNote|string|false|none|Any notes related to the event|
|priceRanges|[[PriceRange](#schemapricerange)]|false|none|Price ranges of this event|
|products|[[Product](#schemaproduct)]|false|none|Related products informations|
|promoter|[Promoter](#schemapromoter)|false|none|Promoter|
|promoters|[[Promoter](#schemapromoter)]|false|none|Event's promoters|
|sales|[EventSalesDates](#schemaeventsalesdates)|false|none|Event's Sales Dates|
|seatmap|[SeatMap](#schemaseatmap)|false|none|Seatmap|
|test|boolean|false|none|Indicate if this is a test entity, by default test entities won't appear in discovery API|
|type|string|true|none|Type of the entity|
|units|string|false|none|none|
|url|string|false|none|URL of a web site detail page of the entity|

#### Enumerated Values

|Property|Value|
|---|---|
|type|event|
|type|venue|
|type|attraction|

<h2 id="tocS_EventDates">EventDates</h2>
<!-- backwards compatibility -->
<a id="schemaeventdates"></a>
<a id="schema_EventDates"></a>
<a id="tocSeventdates"></a>
<a id="tocseventdates"></a>

```json
{
  "access": {
    "endApproximate": "yyyy-MM-ddThh-mm-ssZ",
    "endDateTime": "yyyy-MM-ddThh-mm-ssZ",
    "startApproximate": false,
    "startDateTime": "yyyy-MM-ddThh-mm-ssZ"
  },
  "end": {
    "approximate": false,
    "dateTime": "yyyy-MM-ddThh-mm-ssZ",
    "localDate": "yyyy-MM-dd",
    "localTime": {
      "chronology": {
        "zone": {
          "fixed": false,
          "id": "string"
        }
      },
      "fieldTypes": [
        {
          "durationType": {
            "name": "string"
          },
          "name": "string",
          "rangeDurationType": {
            "name": "string"
          }
        }
      ],
      "fields": [
        {
          "durationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "leapDurationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "lenient": false,
          "maximumValue": 0,
          "minimumValue": 0,
          "name": "string",
          "rangeDurationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "supported": false,
          "type": {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        }
      ],
      "hourOfDay": 0,
      "millisOfDay": 0,
      "millisOfSecond": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "values": [
        0
      ]
    },
    "noSpecificTime": false
  },
  "spanMultipleDays": false,
  "start": {
    "dateTBA": false,
    "dateTBD": false,
    "dateTime": "yyyy-MM-ddThh:mm:ssZ",
    "localDate": "yyyy-MM-dd",
    "localTime": {
      "chronology": {
        "zone": {
          "fixed": false,
          "id": "string"
        }
      },
      "fieldTypes": [
        {
          "durationType": {
            "name": "string"
          },
          "name": "string",
          "rangeDurationType": {
            "name": "string"
          }
        }
      ],
      "fields": [
        {
          "durationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "leapDurationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "lenient": false,
          "maximumValue": 0,
          "minimumValue": 0,
          "name": "string",
          "rangeDurationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "supported": false,
          "type": {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        }
      ],
      "hourOfDay": 0,
      "millisOfDay": 0,
      "millisOfSecond": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "values": [
        0
      ]
    },
    "noSpecificTime": false,
    "timeTBA": false
  },
  "status": {
    "code": "onsale"
  },
  "timezone": "string"
}
```

Event's Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[AccessDates](#schemaaccessdates)|false|none|Event's Access Date|
|end|[EndDates](#schemaenddates)|false|none|Event's End Dates|
|spanMultipleDays|boolean|false|none|Flag indicating if date spans of multiple days|
|start|[StartDates](#schemastartdates)|false|none|Event's Start Dates|
|status|[EventStatus](#schemaeventstatus)|false|none|Event's Status|
|timezone|string|false|none|Event's timezone|

<h2 id="tocS_EventExtensions">EventExtensions</h2>
<!-- backwards compatibility -->
<a id="schemaeventextensions"></a>
<a id="schema_EventExtensions"></a>
<a id="tocSeventextensions"></a>
<a id="tocseventextensions"></a>

```json
{}
```

All Event's extensions

<h2 id="tocS_EventImages">EventImages</h2>
<!-- backwards compatibility -->
<a id="schemaeventimages"></a>
<a id="schema_EventImages"></a>
<a id="tocSeventimages"></a>
<a id="tocseventimages"></a>

```json
{
  "id": "string",
  "images": [
    {
      "attribution": "string",
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "type": "event"
}
```

This class defines an Event with only images view on the Discovery API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique id of the entity in the discovery API|
|images|[[Image](#schemaimage)]|false|none|Images of the entity|
|type|string|true|none|Type of the entity|

#### Enumerated Values

|Property|Value|
|---|---|
|type|event|

<h2 id="tocS_EventSalesDates">EventSalesDates</h2>
<!-- backwards compatibility -->
<a id="schemaeventsalesdates"></a>
<a id="schema_EventSalesDates"></a>
<a id="tocSeventsalesdates"></a>
<a id="tocseventsalesdates"></a>

```json
{
  "presales": [
    {
      "description": "string",
      "endDateTime": "1970-01-01T00:00:00Z",
      "name": "string",
      "startDateTime": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "public": {
    "endDateTime": "1970-01-01T00:00:00Z",
    "startDateTime": "1970-01-01T00:00:00Z",
    "startTBD": false
  }
}
```

Event's Sales Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|presales|[[Presale](#schemapresale)]|false|none|Presale information on this event|
|public|[PublicSaleDates](#schemapublicsaledates)|false|none|Event's Public Onsales Dates|

<h2 id="tocS_EventStatus">EventStatus</h2>
<!-- backwards compatibility -->
<a id="schemaeventstatus"></a>
<a id="schema_EventStatus"></a>
<a id="tocSeventstatus"></a>
<a id="tocseventstatus"></a>

```json
{
  "code": "onsale"
}
```

Event's Status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The event's status code|

#### Enumerated Values

|Property|Value|
|---|---|
|code|onsale|
|code|offsale|
|code|canceled|
|code|postponed|
|code|rescheduled|

<h2 id="tocS_Extension">Extension</h2>
<!-- backwards compatibility -->
<a id="schemaextension"></a>
<a id="schema_Extension"></a>
<a id="tocSextension"></a>
<a id="tocsextension"></a>

```json
{}
```

<h2 id="tocS_ExternalLink">ExternalLink</h2>
<!-- backwards compatibility -->
<a id="schemaexternallink"></a>
<a id="schema_ExternalLink"></a>
<a id="tocSexternallink"></a>
<a id="tocsexternallink"></a>

```json
{
  "id": "string",
  "url": "string"
}
```

ExternalLink

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|An external link id is the unique identifier of a resource on a different domain or api|
|url|string|false|none|An external link url is a url that goes to a different domain or api|

<h2 id="tocS_Genre">Genre</h2>
<!-- backwards compatibility -->
<a id="schemagenre"></a>
<a id="schema_Genre"></a>
<a id="tocSgenre"></a>
<a id="tocsgenre"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

Secondary Genre

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the classification's level|
|name|string|false|none|The Name of the classification's level|

<h2 id="tocS_GeocodeExtension">GeocodeExtension</h2>
<!-- backwards compatibility -->
<a id="schemageocodeextension"></a>
<a id="schema_GeocodeExtension"></a>
<a id="tocSgeocodeextension"></a>
<a id="tocsgeocodeextension"></a>

```json
{
  "city": "string",
  "country": "string",
  "county": "string",
  "formattedAddress": "string",
  "geometry": {
    "location": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "postalCode": "string",
  "route": "string",
  "state": "string",
  "streetNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|country|string|false|none|none|
|county|string|false|none|none|
|formattedAddress|string|false|none|none|
|geometry|[Geometry](#schemageometry)|false|none|none|
|postalCode|string|false|none|none|
|route|string|false|none|none|
|state|string|false|none|none|
|streetNumber|string|false|none|none|

<h2 id="tocS_GeolocationVenueExtensions">GeolocationVenueExtensions</h2>
<!-- backwards compatibility -->
<a id="schemageolocationvenueextensions"></a>
<a id="schema_GeolocationVenueExtensions"></a>
<a id="tocSgeolocationvenueextensions"></a>
<a id="tocsgeolocationvenueextensions"></a>

```json
{
  "geocode": {
    "city": "string",
    "country": "string",
    "county": "string",
    "formattedAddress": "string",
    "geometry": {
      "location": {
        "latitude": 0,
        "longitude": 0
      }
    },
    "postalCode": "string",
    "route": "string",
    "state": "string",
    "streetNumber": "string"
  }
}
```

Venue's geocode extension

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geocode|[GeocodeExtension](#schemageocodeextension)|false|none|none|

<h2 id="tocS_Geometry">Geometry</h2>
<!-- backwards compatibility -->
<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "location": {
    "latitude": 0,
    "longitude": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[Location](#schemalocation)|false|none|Location|

<h2 id="tocS_HostExtension">HostExtension</h2>
<!-- backwards compatibility -->
<a id="schemahostextension"></a>
<a id="schema_HostExtension"></a>
<a id="tocShostextension"></a>
<a id="tocshostextension"></a>

```json
{}
```

Event's Host extension

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "attribution": "string",
  "fallback": false,
  "height": 0,
  "ratio": "16_9",
  "url": "string",
  "width": 0
}
```

Image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribution|string|false|none|Attribution of the image|
|fallback|boolean|false|none|true if the image is not the event's image but a fallbak image|
|height|integer(int32)|false|none|Height of the image|
|ratio|string|false|none|Aspect ratio of the image|
|url|string|false|none|Public URL of the image|
|width|integer(int32)|false|none|Width of the image|

#### Enumerated Values

|Property|Value|
|---|---|
|ratio|16_9|
|ratio|3_2|
|ratio|4_3|

<h2 id="tocS_Level">Level</h2>
<!-- backwards compatibility -->
<a id="schemalevel"></a>
<a id="schema_Level"></a>
<a id="tocSlevel"></a>
<a id="tocslevel"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the classification's level|
|name|string|false|none|The Name of the classification's level|

<h2 id="tocS_LocalTime">LocalTime</h2>
<!-- backwards compatibility -->
<a id="schemalocaltime"></a>
<a id="schema_LocalTime"></a>
<a id="tocSlocaltime"></a>
<a id="tocslocaltime"></a>

```json
{
  "chronology": {
    "zone": {
      "fixed": false,
      "id": "string"
    }
  },
  "fieldTypes": [
    {
      "durationType": {
        "name": "string"
      },
      "name": "string",
      "rangeDurationType": {
        "name": "string"
      }
    }
  ],
  "fields": [
    {
      "durationField": {
        "name": "string",
        "precise": false,
        "supported": false,
        "type": {
          "name": "string"
        },
        "unitMillis": 0
      },
      "leapDurationField": {
        "name": "string",
        "precise": false,
        "supported": false,
        "type": {
          "name": "string"
        },
        "unitMillis": 0
      },
      "lenient": false,
      "maximumValue": 0,
      "minimumValue": 0,
      "name": "string",
      "rangeDurationField": {
        "name": "string",
        "precise": false,
        "supported": false,
        "type": {
          "name": "string"
        },
        "unitMillis": 0
      },
      "supported": false,
      "type": {
        "durationType": {
          "name": "string"
        },
        "name": "string",
        "rangeDurationType": {
          "name": "string"
        }
      }
    }
  ],
  "hourOfDay": 0,
  "millisOfDay": 0,
  "millisOfSecond": 0,
  "minuteOfHour": 0,
  "secondOfMinute": 0,
  "values": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chronology|[Chronology](#schemachronology)|false|none|none|
|fieldTypes|[[DateTimeFieldType](#schemadatetimefieldtype)]|false|none|none|
|fields|[[DateTimeField](#schemadatetimefield)]|false|none|none|
|hourOfDay|integer(int32)|false|none|none|
|millisOfDay|integer(int32)|false|none|none|
|millisOfSecond|integer(int32)|false|none|none|
|minuteOfHour|integer(int32)|false|none|none|
|secondOfMinute|integer(int32)|false|none|none|
|values|[integer(int32)]|false|none|none|

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
{
  "country": "string",
  "displayCountry": "string",
  "displayLanguage": "string",
  "displayName": "string",
  "displayScript": "string",
  "displayVariant": "string",
  "extensionKeys": [
    "string"
  ],
  "iso3Country": "string",
  "iso3Language": "string",
  "language": "string",
  "script": "string",
  "unicodeLocaleAttributes": [
    "string"
  ],
  "unicodeLocaleKeys": [
    "string"
  ],
  "variant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|none|
|displayCountry|string|false|none|none|
|displayLanguage|string|false|none|none|
|displayName|string|false|none|none|
|displayScript|string|false|none|none|
|displayVariant|string|false|none|none|
|extensionKeys|[string]|false|none|none|
|iso3Country|string|false|none|none|
|iso3Language|string|false|none|none|
|language|string|false|none|none|
|script|string|false|none|none|
|unicodeLocaleAttributes|[string]|false|none|none|
|unicodeLocaleKeys|[string]|false|none|none|
|variant|string|false|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

Location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number|false|none|Latitude|
|longitude|number|false|none|Longitude|

<h2 id="tocS_Market">Market</h2>
<!-- backwards compatibility -->
<a id="schemamarket"></a>
<a id="schema_Market"></a>
<a id="tocSmarket"></a>
<a id="tocsmarket"></a>

```json
{
  "id": "string"
}
```

Market

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Market's id|

<h2 id="tocS_Outlet">Outlet</h2>
<!-- backwards compatibility -->
<a id="schemaoutlet"></a>
<a id="schema_Outlet"></a>
<a id="tocSoutlet"></a>
<a id="tocsoutlet"></a>

```json
{
  "type": "string",
  "url": "string"
}
```

A selling point for tickets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Outlet's type|
|url|string|false|none|Outlet's url|

<h2 id="tocS_Parking">Parking</h2>
<!-- backwards compatibility -->
<a id="schemaparking"></a>
<a id="schema_Parking"></a>
<a id="tocSparking"></a>
<a id="tocsparking"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

Parking

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the entity|
|url|string|false|none|Url to the web page of the parking|

<h2 id="tocS_Place">Place</h2>
<!-- backwards compatibility -->
<a id="schemaplace"></a>
<a id="schema_Place"></a>
<a id="tocSplace"></a>
<a id="tocsplace"></a>

```json
{
  "address": {
    "line1": "string",
    "line2": "string",
    "line3": "string"
  },
  "area": {
    "name": "string"
  },
  "city": {
    "name": "string"
  },
  "country": {
    "countryCode": "string",
    "name": "string"
  },
  "location": {
    "latitude": 0,
    "longitude": 0
  },
  "name": "string",
  "postalCode": "string",
  "state": {
    "name": "string",
    "stateCode": "string"
  }
}
```

Place

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|Address|
|area|[Area](#schemaarea)|false|none|Area|
|city|[City](#schemacity)|false|none|City|
|country|[Country](#schemacountry)|false|none|Country|
|location|[Location](#schemalocation)|false|none|Location|
|name|string|false|none|Name of the entity|
|postalCode|string|false|none|Postal code / zipcode of the place|
|state|[State](#schemastate)|false|none|State|

<h2 id="tocS_Presale">Presale</h2>
<!-- backwards compatibility -->
<a id="schemapresale"></a>
<a id="schema_Presale"></a>
<a id="tocSpresale"></a>
<a id="tocspresale"></a>

```json
{
  "description": "string",
  "endDateTime": "1970-01-01T00:00:00Z",
  "name": "string",
  "startDateTime": "1970-01-01T00:00:00Z",
  "url": "string"
}
```

Event's Presale Info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the presame|
|endDateTime|string(date-time)|false|none|Presale's end dates. The date and time when the presale will end|
|name|string|false|none|Name of the presale|
|startDateTime|string(date-time)|false|none|Presale's start dates. The date and time when the presale will start|
|url|string|false|none|Presale link URL|

<h2 id="tocS_PriceRange">PriceRange</h2>
<!-- backwards compatibility -->
<a id="schemapricerange"></a>
<a id="schema_PriceRange"></a>
<a id="tocSpricerange"></a>
<a id="tocspricerange"></a>

```json
{
  "currency": "string",
  "max": 0,
  "min": 0,
  "type": "standard"
}
```

PriceRange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|Currency|
|max|number(double)|false|none|Maximum price|
|min|number(double)|false|none|Minimum price|
|type|string|false|none|Type of price|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "url": "string"
}
```

Product

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Product's primary id|
|name|string|false|none|Name of the entity|
|type|string|false|none|Product's type|
|url|string|false|none|Product's url|

<h2 id="tocS_Promoter">Promoter</h2>
<!-- backwards compatibility -->
<a id="schemapromoter"></a>
<a id="schema_Promoter"></a>
<a id="tocSpromoter"></a>
<a id="tocspromoter"></a>

```json
{
  "description": "string",
  "id": "string",
  "name": "string"
}
```

Promoter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the promoter|
|id|string|false|none|Id of the promoter|
|name|string|false|none|Name of the promoter|

<h2 id="tocS_PublicSaleDates">PublicSaleDates</h2>
<!-- backwards compatibility -->
<a id="schemapublicsaledates"></a>
<a id="schema_PublicSaleDates"></a>
<a id="tocSpublicsaledates"></a>
<a id="tocspublicsaledates"></a>

```json
{
  "endDateTime": "1970-01-01T00:00:00Z",
  "startDateTime": "1970-01-01T00:00:00Z",
  "startTBD": false
}
```

Event's Public Onsales Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDateTime|string(date-time)|false|none|Public sale's end dates. The date and time when the public sale will end|
|startDateTime|string(date-time)|false|none|Public sale's start dates. The date and time when the public sale will start|
|startTBD|boolean|false|none|True if the public sale's date is to be determined|

<h2 id="tocS_PublicVisibility">PublicVisibility</h2>
<!-- backwards compatibility -->
<a id="schemapublicvisibility"></a>
<a id="schema_PublicVisibility"></a>
<a id="tocSpublicvisibility"></a>
<a id="tocspublicvisibility"></a>

```json
{}
```

The class defines the public visibility period on the Discovery/Publish API.

<h2 id="tocS_Relationship">Relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_Relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{
  "id": "string",
  "references": "sourceName: id",
  "source": "string",
  "type": "duplicate"
}
```

Relationship

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the related entity|
|references|object|false|none|References of this relationship in another system. Reference is the exact same entity|
|source|string|false|none|The source name of the related entity|
|type|string|false|none|The type of the relationship|

#### Enumerated Values

|Property|Value|
|---|---|
|type|duplicate|

<h2 id="tocS_SeatMap">SeatMap</h2>
<!-- backwards compatibility -->
<a id="schemaseatmap"></a>
<a id="schema_SeatMap"></a>
<a id="tocSseatmap"></a>
<a id="tocsseatmap"></a>

```json
{
  "staticUrl": "string"
}
```

Seatmap

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staticUrl|string|false|none|Static Seatmap Url|

<h2 id="tocS_Segment">Segment</h2>
<!-- backwards compatibility -->
<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

Segment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the classification's level|
|name|string|false|none|The Name of the classification's level|

<h2 id="tocS_Social">Social</h2>
<!-- backwards compatibility -->
<a id="schemasocial"></a>
<a id="schema_Social"></a>
<a id="tocSsocial"></a>
<a id="tocssocial"></a>

```json
{
  "twitter": {
    "handle": "@a Twitter handle exampe",
    "hashtags": "#hashtag example #hashtag another example"
  }
}
```

Social networks data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|twitter|[Twitter](#schematwitter)|false|none|Twitter data|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{}
```

Source

<h2 id="tocS_StartDates">StartDates</h2>
<!-- backwards compatibility -->
<a id="schemastartdates"></a>
<a id="schema_StartDates"></a>
<a id="tocSstartdates"></a>
<a id="tocsstartdates"></a>

```json
{
  "dateTBA": false,
  "dateTBD": false,
  "dateTime": "yyyy-MM-ddThh:mm:ssZ",
  "localDate": "yyyy-MM-dd",
  "localTime": {
    "chronology": {
      "zone": {
        "fixed": false,
        "id": "string"
      }
    },
    "fieldTypes": [
      {
        "durationType": {
          "name": "string"
        },
        "name": "string",
        "rangeDurationType": {
          "name": "string"
        }
      }
    ],
    "fields": [
      {
        "durationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "leapDurationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "lenient": false,
        "maximumValue": 0,
        "minimumValue": 0,
        "name": "string",
        "rangeDurationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "supported": false,
        "type": {
          "durationType": {
            "name": "string"
          },
          "name": "string",
          "rangeDurationType": {
            "name": "string"
          }
        }
      }
    ],
    "hourOfDay": 0,
    "millisOfDay": 0,
    "millisOfSecond": 0,
    "minuteOfHour": 0,
    "secondOfMinute": 0,
    "values": [
      0
    ]
  },
  "noSpecificTime": false,
  "timeTBA": false
}
```

Event's Start Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTBA|boolean|false|none|Boolean flag to indicate whether or not the start date is TBA|
|dateTBD|boolean|false|none|Boolean flag to indicate whether or not the start date is TBD|
|dateTime|string(date-time)|false|none|The event start datetime|
|localDate|string(date)|false|none|The event start date in local date|
|localTime|[LocalTime](#schemalocaltime)|false|none|none|
|noSpecificTime|boolean|false|none|Boolean flag to indicate whether or not the event start time has no specific time|
|timeTBA|boolean|false|none|Boolean flag to indicate whether or not the start time is TBA|

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
{
  "name": "string",
  "stateCode": "string"
}
```

State

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the entity|
|stateCode|string|false|none|State code|

<h2 id="tocS_TatExtension">TatExtension</h2>
<!-- backwards compatibility -->
<a id="schematatextension"></a>
<a id="schema_TatExtension"></a>
<a id="tocStatextension"></a>
<a id="tocstatextension"></a>

```json
{}
```

The Attraction Tool (TAT) extension

<h2 id="tocS_TicketmasterAttractionExtensions">TicketmasterAttractionExtensions</h2>
<!-- backwards compatibility -->
<a id="schematicketmasterattractionextensions"></a>
<a id="schema_TicketmasterAttractionExtensions"></a>
<a id="tocSticketmasterattractionextensions"></a>
<a id="tocsticketmasterattractionextensions"></a>

```json
{}
```

Attraction's extension (ticketmaster source)

<h2 id="tocS_TicketmasterEventExtensions">TicketmasterEventExtensions</h2>
<!-- backwards compatibility -->
<a id="schematicketmastereventextensions"></a>
<a id="schema_TicketmasterEventExtensions"></a>
<a id="tocSticketmastereventextensions"></a>
<a id="tocsticketmastereventextensions"></a>

```json
{
  "displaySettings": {
    "softLanding": false
  }
}
```

Event's extension (ticketmaster source)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displaySettings|[DisplaySettingExtension](#schemadisplaysettingextension)|false|none|Event's display settings extension|

<h2 id="tocS_TicketmasterVenueExtensions">TicketmasterVenueExtensions</h2>
<!-- backwards compatibility -->
<a id="schematicketmastervenueextensions"></a>
<a id="schema_TicketmasterVenueExtensions"></a>
<a id="tocSticketmastervenueextensions"></a>
<a id="tocsticketmastervenueextensions"></a>

```json
{}
```

Venue's extension (ticketmaster source)

<h2 id="tocS_Twitter">Twitter</h2>
<!-- backwards compatibility -->
<a id="schematwitter"></a>
<a id="schema_Twitter"></a>
<a id="tocStwitter"></a>
<a id="tocstwitter"></a>

```json
{
  "handle": "@a Twitter handle exampe",
  "hashtags": "#hashtag example #hashtag another example"
}
```

Twitter data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|handle|string|false|none|Twitter handle|
|hashtags|[string]|false|none|Twitter hashtags|

#### Enumerated Values

|Property|Value|
|---|---|
|handle|@a Twitter handle|

<h2 id="tocS_Venue">Venue</h2>
<!-- backwards compatibility -->
<a id="schemavenue"></a>
<a id="schema_Venue"></a>
<a id="tocSvenue"></a>
<a id="tocsvenue"></a>

```json
{
  "accessibleSeatingDetail": "string",
  "additionalInfo": "string",
  "address": {
    "line1": "string",
    "line2": "string",
    "line3": "string"
  },
  "boxOfficeInfo": {
    "acceptedPaymentDetail": "string",
    "openHoursDetail": "string",
    "phoneNumberDetail": "string",
    "willCallDetail": "string"
  },
  "city": {
    "name": "string"
  },
  "country": {
    "countryCode": "string",
    "name": "string"
  },
  "currency": "string",
  "description": "string",
  "distance": 0,
  "dma": [
    {
      "id": 0
    }
  ],
  "externalLinks": {
    "property1": [
      {
        "id": "string",
        "url": "string"
      }
    ],
    "property2": [
      {
        "id": "string",
        "url": "string"
      }
    ]
  },
  "generalInfo": {
    "childRule": "string",
    "generalRule": "string"
  },
  "id": "string",
  "images": [
    {
      "attribution": "string",
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "locale": "string",
  "location": {
    "latitude": 0,
    "longitude": 0
  },
  "markets": [
    {
      "id": "string"
    }
  ],
  "name": "string",
  "parkingDetail": "string",
  "postalCode": "string",
  "social": {
    "twitter": {
      "handle": "@a Twitter handle exampe",
      "hashtags": "#hashtag example #hashtag another example"
    }
  },
  "state": {
    "name": "string",
    "stateCode": "string"
  },
  "test": false,
  "timezone": "string",
  "type": "event",
  "units": "string",
  "upcomingEvents": {
    "property1": 0,
    "property2": 0
  },
  "url": "string"
}
```

Venue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibleSeatingDetail|string|false|none|Venue accessible seating detail|
|additionalInfo|string|false|none|Additional information of the entity|
|address|[Address](#schemaaddress)|false|none|Address|
|boxOfficeInfo|[VenueBoxOfficeInfo](#schemavenueboxofficeinfo)|false|none|Venue box office information|
|city|[City](#schemacity)|false|none|City|
|country|[Country](#schemacountry)|false|none|Country|
|currency|string|false|none|Default currency of ticket prices for events in this venue|
|description|string|false|none|Description's of the entity|
|distance|number(double)|false|none|none|
|dma|[[Dma](#schemadma)]|false|none|The list of associated DMAs (Designated Market Areas) of the venue|
|externalLinks|object|false|none|List of external links|
|generalInfo|[VenueGeneralInfo](#schemavenuegeneralinfo)|false|none|Venue general information|
|id|string|true|none|Unique id of the entity in the discovery API|
|images|[[Image](#schemaimage)]|false|none|Images of the entity|
|locale|string|false|none|Locale in which the content is returned|
|location|[Location](#schemalocation)|false|none|Location|
|markets|[[Market](#schemamarket)]|false|none|Markets of the venue|
|name|string|false|none|Name of the entity|
|parkingDetail|string|false|none|Venue parking info|
|postalCode|string|false|none|Postal code / zipcode of the venue|
|social|[Social](#schemasocial)|false|none|Social networks data|
|state|[State](#schemastate)|false|none|State|
|test|boolean|false|none|Indicate if this is a test entity, by default test entities won't appear in discovery API|
|timezone|string|false|none|Timezone of the venue|
|type|string|true|none|Type of the entity|
|units|string|false|none|none|
|upcomingEvents|object|false|none|number of upcoming events|
|url|string|false|none|URL of a web site detail page of the entity|

#### Enumerated Values

|Property|Value|
|---|---|
|type|event|
|type|venue|
|type|attraction|

<h2 id="tocS_VenueBoxOfficeInfo">VenueBoxOfficeInfo</h2>
<!-- backwards compatibility -->
<a id="schemavenueboxofficeinfo"></a>
<a id="schema_VenueBoxOfficeInfo"></a>
<a id="tocSvenueboxofficeinfo"></a>
<a id="tocsvenueboxofficeinfo"></a>

```json
{
  "acceptedPaymentDetail": "string",
  "openHoursDetail": "string",
  "phoneNumberDetail": "string",
  "willCallDetail": "string"
}
```

Venue box office information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedPaymentDetail|string|false|none|Venue box office accepted payment details|
|openHoursDetail|string|false|none|Venue box office opening hours|
|phoneNumberDetail|string|false|none|Venue box office phone number|
|willCallDetail|string|false|none|Venue box office will call details|

<h2 id="tocS_VenueExtensions">VenueExtensions</h2>
<!-- backwards compatibility -->
<a id="schemavenueextensions"></a>
<a id="schema_VenueExtensions"></a>
<a id="tocSvenueextensions"></a>
<a id="tocsvenueextensions"></a>

```json
{
  "geolocation": {
    "geocode": {
      "city": "string",
      "country": "string",
      "county": "string",
      "formattedAddress": "string",
      "geometry": {
        "location": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "postalCode": "string",
      "route": "string",
      "state": "string",
      "streetNumber": "string"
    }
  }
}
```

All Venue's extensions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geolocation|[GeolocationVenueExtensions](#schemageolocationvenueextensions)|false|none|Venue's geocode extension|

<h2 id="tocS_VenueGeneralInfo">VenueGeneralInfo</h2>
<!-- backwards compatibility -->
<a id="schemavenuegeneralinfo"></a>
<a id="schema_VenueGeneralInfo"></a>
<a id="tocSvenuegeneralinfo"></a>
<a id="tocsvenuegeneralinfo"></a>

```json
{
  "childRule": "string",
  "generalRule": "string"
}
```

Venue general information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childRule|string|false|none|Venue children rule|
|generalRule|string|false|none|Venue general rules|
