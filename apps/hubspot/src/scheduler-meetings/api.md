<h1 id="scheduler-meetings">Scheduler Meetings v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Meetings Service For HubSpot Sales

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|crm.objects.appointments.sensitive.write.v2||
|crm.objects.appointments.write||
|crm.objects.commercepayments.write||
|crm.objects.companies.highly_sensitive.write.v2||
|crm.objects.companies.sensitive.write.v2||
|crm.objects.companies.write||
|crm.objects.contacts.highly_sensitive.write.v2||
|crm.objects.contacts.sensitive.write.v2||
|crm.objects.contacts.write||
|crm.objects.courses.write||
|crm.objects.deals.highly_sensitive.write.v2||
|crm.objects.deals.sensitive.write.v2||
|crm.objects.deals.write||
|crm.objects.goals.write||
|crm.objects.line_items.write||
|crm.objects.listings.write||
|crm.objects.products.write||
|crm.objects.projects.highly_sensitive.write||
|crm.objects.projects.sensitive.write||
|crm.objects.projects.write||
|crm.objects.services.write||
|crm.schemas.meetings.write||
|scheduler.meetings.meeting-link.read||
|tickets.highly_sensitive.v2||
|tickets.sensitive.v2||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="scheduler-meetings-advanced">Advanced</h1>

## Create meeting

<a id="opIdpost-/scheduler/2026-09/meetings/calendar"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/scheduler/2026-09/meetings/calendar?organizerUserId=' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /scheduler/2026-09/meetings/calendar`

Create a new calendar meeting event in your HubSpot account. This endpoint allows you to specify details such as the meeting title, start and end times, and associated users. The organizerUserId is required to identify the meeting organizer.

> Body parameter

```json
null
```

<h3 id="create-meeting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizerUserId|query|string|true|none|
|body|body|[ExternalCalendarMeetingEventCreateRequest](#schemaexternalcalendarmeetingeventcreaterequest)|true|none|
|» associations|body|[[ExternalAssociationCreateRequest](#schemaexternalassociationcreaterequest)]|true|An array of associations related to the meeting event, each represented by an ExternalAssociationCreateRequest object.|
|» emailReminderSchedule|body|[ExternalEmailReminderSchedule](#schemaexternalemailreminderschedule)|true|none|
|» properties|body|[ExternalCalendarMeetingEventCreateProperties](#schemaexternalcalendarmeetingeventcreateproperties)|true|none|
|» timezone|body|string|true|A string representing the timezone in which the meeting event is scheduled.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-meeting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExternalCalenderMeetingEventResponse](#schemaexternalcalendermeetingeventresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.meetings.write )
</aside>

## Book Meeting

<a id="opIdpost-/scheduler/2026-09/meetings/meeting-links/book"></a>

> Code samples

```bash
curl https://api.hubapi.com/scheduler/2026-09/meetings/meeting-links/book \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /scheduler/2026-09/meetings/meeting-links/book`

Book a meeting using a specified meeting link. This endpoint allows you to create a meeting by providing necessary details such as duration, email, and start time. It is useful for scheduling meetings programmatically through HubSpot's API.

> Body parameter

```json
null
```

<h3 id="book-meeting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExternalMeetingBooking](#schemaexternalmeetingbooking)|true|none|
|» duration|body|integer(int64)|true|An integer representing the duration of the meeting in minutes.|
|» email|body|string|true|The email address of the person booking the meeting.|
|» firstName|body|string|true|The first name of the person booking the meeting.|
|» formFields|body|[[ExternalBookingFormField](#schemaexternalbookingformfield)]|true|An array of form fields filled out by the participant, each containing a name and value.|
|» lastName|body|string|true|The last name of the person booking the meeting.|
|» legalConsentResponses|body|[[ExternalLegalConsentResponse](#schemaexternallegalconsentresponse)]|true|An array of legal consent responses, each detailing the consent given by the participant.|
|» likelyAvailableUserIds|body|[string]|true|An array of strings representing the user IDs of those likely available for the meeting.|
|» locale|body|string|false|A string representing the locale of the person booking the meeting.|
|» slug|body|string|true|A string representing the unique identifier for the meeting link.|
|» startTime|body|string(date-time)|true|The start time of the meeting in ISO 8601 date-time format.|
|» timezone|body|string|false|A string representing the timezone of the person booking the meeting.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="book-meeting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExternalMeetingBookingResponse](#schemaexternalmeetingbookingresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.meetings.write )
</aside>

<h1 id="scheduler-meetings-basic">Basic</h1>

## List Meeting Links

<a id="opIdget-/scheduler/2026-09/meetings/meeting-links"></a>

> Code samples

```bash
curl https://api.hubapi.com/scheduler/2026-09/meetings/meeting-links \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scheduler/2026-09/meetings/meeting-links`

Retrieve a list of meeting links available in the HubSpot account. This endpoint allows filtering by various criteria such as meeting name, organizer user ID, and meeting type. It supports pagination to navigate through large sets of results.

<h3 id="list-meeting-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|name|query|string|false|none|
|organizerUserId|query|string|false|none|
|type|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|GROUP_CALENDAR|
|type|PERSONAL_LINK|
|type|ROUND_ROBIN_CALENDAR|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-meeting-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalExternalLinkMetadata](#schemacollectionresponsewithtotalexternallinkmetadata)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: scheduler.meetings.meeting-link.read )
</aside>

## Retrieve availability

<a id="opIdget-/scheduler/2026-09/meetings/meeting-links/book/availability-page/{slug}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/scheduler/2026-09/meetings/meeting-links/book/availability-page/{slug}?timezone=' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scheduler/2026-09/meetings/meeting-links/book/availability-page/{slug}`

Retrieve the availability and busy times for a specific meeting link. This endpoint is useful for checking available slots for booking meetings based on the provided slug. It requires specifying the timezone and optionally allows adjusting the month view with an offset.

<h3 id="retrieve-availability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|
|timezone|query|string|true|none|
|monthOffset|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExternalLinkAvailabilityAndBusyTimes](#schemaexternallinkavailabilityandbusytimes)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: scheduler.meetings.meeting-link.read )
</aside>

## Retrieve booking info

<a id="opIdget-/scheduler/2026-09/meetings/meeting-links/book/{slug}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/scheduler/2026-09/meetings/meeting-links/book/{slug}?timezone=' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scheduler/2026-09/meetings/meeting-links/book/{slug}`

Retrieve detailed booking information for a specific meeting link using its slug. This endpoint provides insights into the availability and settings associated with the meeting link. It is useful for understanding the booking context and ensuring that the correct timezone is applied.

<h3 id="retrieve-booking-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|
|timezone|query|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-booking-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExternalBookingInfo](#schemaexternalbookinginfo)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: scheduler.meetings.meeting-link.read )
</aside>

# Schemas

<h2 id="tocS_AssociationSpec">AssociationSpec</h2>
<!-- backwards compatibility -->
<a id="schemaassociationspec"></a>
<a id="schema_AssociationSpec"></a>
<a id="tocSassociationspec"></a>
<a id="tocsassociationspec"></a>

```json
null
```

Defines the type, direction, and details of the relationship between two CRM objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationCategory|string|true|none|A string indicating the category of the association. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.|
|associationTypeId|integer(int32)|true|none|An integer representing the unique identifier for the type of association.|

#### Enumerated Values

|Property|Value|
|---|---|
|associationCategory|HUBSPOT_DEFINED|
|associationCategory|INTEGRATOR_DEFINED|
|associationCategory|USER_DEFINED|
|associationCategory|WORK|

<h2 id="tocS_CollectionResponseWithTotalExternalLinkMetadata">CollectionResponseWithTotalExternalLinkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalexternallinkmetadata"></a>
<a id="schema_CollectionResponseWithTotalExternalLinkMetadata"></a>
<a id="tocScollectionresponsewithtotalexternallinkmetadata"></a>
<a id="tocscollectionresponsewithtotalexternallinkmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[ExternalLinkMetadata](#schemaexternallinkmetadata)]|true|none|An array of external link metadata objects. Each object contains details about an external meeting link.|
|total|integer(int32)|true|none|The total number of external link metadata entries available. This is an integer value.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ExternalAssociationCreateRequest">ExternalAssociationCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexternalassociationcreaterequest"></a>
<a id="schema_ExternalAssociationCreateRequest"></a>
<a id="tocSexternalassociationcreaterequest"></a>
<a id="tocsexternalassociationcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|[PublicObjectId](#schemapublicobjectid)|true|none|Contains the Id of a Public Object|
|types|[[AssociationSpec](#schemaassociationspec)]|true|none|An array of association specifications, detailing the types of associations to be created. Each item in the array is an object that defines the association type.|

<h2 id="tocS_ExternalBookingFormField">ExternalBookingFormField</h2>
<!-- backwards compatibility -->
<a id="schemaexternalbookingformfield"></a>
<a id="schema_ExternalBookingFormField"></a>
<a id="tocSexternalbookingformfield"></a>
<a id="tocsexternalbookingformfield"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the form field, represented as a string.|
|value|string|true|none|The value associated with the form field, represented as a string.|

<h2 id="tocS_ExternalBookingInfo">ExternalBookingInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexternalbookinginfo"></a>
<a id="schema_ExternalBookingInfo"></a>
<a id="tocSexternalbookinginfo"></a>
<a id="tocsexternalbookinginfo"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allUsersBusyTimes|[[ExternalUserBusyTimes](#schemaexternaluserbusytimes)]|true|none|An array of objects representing the busy times for all users associated with the meeting link.|
|brandingMetadata|[ExternalBrandingMetadata](#schemaexternalbrandingmetadata)|false|none|none|
|customParams|[ExternalMeetingsLinkSettings](#schemaexternalmeetingslinksettings)|true|none|none|
|isOffline|boolean|true|none|A boolean indicating whether the meeting link is offline.|
|linkAvailability|[ExternalLinkAvailability](#schemaexternallinkavailability)|false|none|none|
|linkId|string|true|none|The unique identifier for the meeting link.|
|linkType|string|true|none|The type of meeting link. Valid values include 'PERSONAL_LINK', 'GROUP_CALENDAR', and 'ROUND_ROBIN_CALENDAR'.|

#### Enumerated Values

|Property|Value|
|---|---|
|linkType|GROUP_CALENDAR|
|linkType|PERSONAL_LINK|
|linkType|ROUND_ROBIN_CALENDAR|

<h2 id="tocS_ExternalBrandingMetadata">ExternalBrandingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaexternalbrandingmetadata"></a>
<a id="schema_ExternalBrandingMetadata"></a>
<a id="tocSexternalbrandingmetadata"></a>
<a id="tocsexternalbrandingmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accent2Color|string|false|none|The second accent color used for branding, represented as a string.|
|accentColor|string|false|none|The accent color used for branding, represented as a string.|
|companyAddressLine1|string|false|none|The first line of the company's address.|
|companyAddressLine2|string|false|none|The second line of the company's address, if applicable.|
|companyAvatar|string|false|none|The URL of the company's avatar image.|
|companyCity|string|false|none|The city where the company is located.|
|companyCountry|string|false|none|The country where the company is located.|
|companyDomain|string|false|none|The domain of the company, typically used in URLs.|
|companyName|string|false|none|The name of the company.|
|companyState|string|false|none|The state or region where the company is located.|
|companyZip|string|false|none|The postal or ZIP code of the company's location.|
|logoAltText|string|true|none|The alternative text for the company logo, used for accessibility.|
|logoHeight|integer(int32)|false|none|The height of the company logo in pixels.|
|logoUrl|string|false|none|The URL of the company logo image.|
|logoWidth|integer(int32)|false|none|The width of the company logo in pixels.|
|primaryColor|string|false|none|The primary color used for branding, represented as a string.|
|secondaryColor|string|false|none|The secondary color used for branding, represented as a string.|
|showMarketingAd|boolean|true|none|Indicates whether a marketing advertisement should be displayed. This is a boolean value.|
|showSalesAd|boolean|true|none|Indicates whether a sales advertisement should be displayed. This is a boolean value.|

<h2 id="tocS_ExternalCalendarMeetingEventCreateProperties">ExternalCalendarMeetingEventCreateProperties</h2>
<!-- backwards compatibility -->
<a id="schemaexternalcalendarmeetingeventcreateproperties"></a>
<a id="schema_ExternalCalendarMeetingEventCreateProperties"></a>
<a id="tocSexternalcalendarmeetingeventcreateproperties"></a>
<a id="tocsexternalcalendarmeetingeventcreateproperties"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hs_activity_type|string|false|none|The type of activity for the meeting. This is a string value.|
|hs_attachment_ids|[string]|false|none|An array of strings representing the IDs of attachments associated with the meeting.|
|hs_attendee_owner_ids|[string]|false|none|An array of strings representing the IDs of the owners of the attendees for the meeting.|
|hs_internal_meeting_notes|string|false|none|Internal notes for the meeting. This is a string value.|
|hs_meeting_body|string|false|none|The body content or description of the meeting. This is a string value.|
|hs_meeting_end_time|string(date-time)|true|none|The end time of the meeting, in ISO 8601 format.|
|hs_meeting_location|string|false|none|The location of the meeting. This is a string value.|
|hs_meeting_location_type|string|false|none|The type of location for the meeting. Valid values include 'PHONE', 'ADDRESS', and 'CUSTOM'.|
|hs_meeting_outcome|string|true|none|A string representing the outcome of the meeting.|
|hs_meeting_start_time|string(date-time)|true|none|The start time of the meeting, in ISO 8601 format.|
|hs_meeting_title|string|true|none|The title of the meeting. This is a string value.|
|hs_timestamp|string(date-time)|true|none|A timestamp indicating when the meeting event was created, in ISO 8601 format.|
|hubspot_owner_id|string|true|none|The unique identifier of the HubSpot owner associated with the meeting.|

#### Enumerated Values

|Property|Value|
|---|---|
|hs_meeting_location_type|ADDRESS|
|hs_meeting_location_type|CUSTOM|
|hs_meeting_location_type|PHONE|

<h2 id="tocS_ExternalCalendarMeetingEventCreateRequest">ExternalCalendarMeetingEventCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexternalcalendarmeetingeventcreaterequest"></a>
<a id="schema_ExternalCalendarMeetingEventCreateRequest"></a>
<a id="tocSexternalcalendarmeetingeventcreaterequest"></a>
<a id="tocsexternalcalendarmeetingeventcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associations|[[ExternalAssociationCreateRequest](#schemaexternalassociationcreaterequest)]|true|none|An array of associations related to the meeting event, each represented by an ExternalAssociationCreateRequest object.|
|emailReminderSchedule|[ExternalEmailReminderSchedule](#schemaexternalemailreminderschedule)|true|none|none|
|properties|[ExternalCalendarMeetingEventCreateProperties](#schemaexternalcalendarmeetingeventcreateproperties)|true|none|none|
|timezone|string|true|none|A string representing the timezone in which the meeting event is scheduled.|

<h2 id="tocS_ExternalCalendarMeetingEventResponseProperties">ExternalCalendarMeetingEventResponseProperties</h2>
<!-- backwards compatibility -->
<a id="schemaexternalcalendarmeetingeventresponseproperties"></a>
<a id="schema_ExternalCalendarMeetingEventResponseProperties"></a>
<a id="tocSexternalcalendarmeetingeventresponseproperties"></a>
<a id="tocsexternalcalendarmeetingeventresponseproperties"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hs_activity_type|string|false|none|The type of activity associated with the meeting.|
|hs_attachment_ids|[string]|false|none|An array of unique identifiers for attachments associated with the meeting.|
|hs_attendee_owner_ids|[string]|false|none|An array of unique identifiers for the owners of the attendees.|
|hs_engagement_source|string|true|none|The source of the engagement. Valid values include a wide range of sources such as 'UNKNOWN', 'IMPORT', 'API', 'FORM', and many others.|
|hs_engagement_source_id|string|true|none|The unique identifier for the source of the engagement.|
|hs_include_description_in_reminder|string|false|none|Indicates whether the meeting description should be included in reminders.|
|hs_internal_meeting_notes|string|false|none|Internal notes related to the meeting.|
|hs_meeting_body|string|false|none|The body or description of the meeting.|
|hs_meeting_end_time|string(date-time)|true|none|The end time of the meeting, in ISO 8601 format.|
|hs_meeting_external_url|string|false|none|The external URL associated with the meeting.|
|hs_meeting_location|string|false|none|The location where the meeting is held.|
|hs_meeting_location_type|string|false|none|The type of location for the meeting. Valid values include 'PHONE', 'ADDRESS', and 'CUSTOM'.|
|hs_meeting_outcome|string|true|none|The outcome of the meeting.|
|hs_meeting_start_time|string(date-time)|true|none|The start time of the meeting, in ISO 8601 format.|
|hs_meeting_title|string|true|none|The title of the meeting.|
|hs_timestamp|string(date-time)|true|none|A timestamp indicating when the meeting event was recorded, in ISO 8601 format.|
|hs_unique_id|string|false|none|A unique identifier for the meeting event.|
|hubspot_owner_id|string|false|none|The unique identifier of the HubSpot owner associated with the meeting.|

#### Enumerated Values

|Property|Value|
|---|---|
|hs_engagement_source|ACADEMY|
|hs_engagement_source|ACCEPTANCE_TEST|
|hs_engagement_source|ACTIVITY_AUTO_ASSOCIATE|
|hs_engagement_source|ACTIVITY_LOG_REVERT|
|hs_engagement_source|ADS|
|hs_engagement_source|AI_GROUP|
|hs_engagement_source|ANALYTICS|
|hs_engagement_source|API|
|hs_engagement_source|APPROVALS|
|hs_engagement_source|ASSISTS|
|hs_engagement_source|ASSOCIATIONS|
|hs_engagement_source|AUTO_ASSOCIATE_BY_DOMAIN|
|hs_engagement_source|AUTOMATION_JOURNEY|
|hs_engagement_source|AUTOMATION_PLATFORM|
|hs_engagement_source|AVATARS_SERVICE|
|hs_engagement_source|BATCH_UPDATE|
|hs_engagement_source|BCC_TO_CRM|
|hs_engagement_source|BEHAVIORAL_EVENTS|
|hs_engagement_source|BET_ASSIGNMENT|
|hs_engagement_source|BET_CRM_CONNECTOR|
|hs_engagement_source|BIDEN|
|hs_engagement_source|BILLING|
|hs_engagement_source|BOT|
|hs_engagement_source|BREEZE_AGENT|
|hs_engagement_source|CALCULATED|
|hs_engagement_source|CENTRAL_EXCHANGE_RATES|
|hs_engagement_source|CHATSPOT|
|hs_engagement_source|CLONE_OBJECTS|
|hs_engagement_source|COMMUNICATOR|
|hs_engagement_source|COMPANIES|
|hs_engagement_source|COMPANY_FAMILIES|
|hs_engagement_source|COMPANY_INSIGHTS|
|hs_engagement_source|CONNECTED_ACCOUNT|
|hs_engagement_source|CONTACTS|
|hs_engagement_source|CONTACTS_WEB|
|hs_engagement_source|CONTENT_MEMBERSHIP|
|hs_engagement_source|CONVERSATIONAL_ENRICHMENT|
|hs_engagement_source|CONVERSATIONS|
|hs_engagement_source|CRM_PROCESSES_PLATFORM|
|hs_engagement_source|CRM_UI|
|hs_engagement_source|CRM_UI_BULK_ACTION|
|hs_engagement_source|CUSTOMER_AGENT|
|hs_engagement_source|CUSTOMER_PORTAL|
|hs_engagement_source|DATA_ENRICHMENT|
|hs_engagement_source|DATA_QUALITY|
|hs_engagement_source|DATASET|
|hs_engagement_source|DEALS|
|hs_engagement_source|DEFAULT|
|hs_engagement_source|DELETE_OBJECTS|
|hs_engagement_source|DI_WRITE_TO_CRM|
|hs_engagement_source|EMAIL|
|hs_engagement_source|EMAIL_INBOX_IMPORT|
|hs_engagement_source|EMAIL_INTEGRATION|
|hs_engagement_source|ENGAGEMENTS|
|hs_engagement_source|EXTENSION|
|hs_engagement_source|FILE_MANAGER|
|hs_engagement_source|FLYWHEEL_PRODUCT_DATA_SYNC|
|hs_engagement_source|FORECASTING|
|hs_engagement_source|FORM|
|hs_engagement_source|FORWARD_TO_CRM|
|hs_engagement_source|GMAIL_INTEGRATION|
|hs_engagement_source|GOALS|
|hs_engagement_source|HEISENBERG|
|hs_engagement_source|HELP_DESK|
|hs_engagement_source|HELP_DESK_AI|
|hs_engagement_source|IMPORT|
|hs_engagement_source|INTEGRATION|
|hs_engagement_source|INTEGRATIONS_PLATFORM|
|hs_engagement_source|INTEGRATIONS_SYNC|
|hs_engagement_source|INTENT|
|hs_engagement_source|INTERNAL_PROCESSING|
|hs_engagement_source|LEADIN|
|hs_engagement_source|LEGAL_BASIS_REMEDIATION|
|hs_engagement_source|MARKET_SOURCING|
|hs_engagement_source|MARKETPLACE|
|hs_engagement_source|MARKETS|
|hs_engagement_source|MEETINGS|
|hs_engagement_source|MERGE_COMPANIES|
|hs_engagement_source|MERGE_CONTACTS|
|hs_engagement_source|MERGE_OBJECTS|
|hs_engagement_source|MERGE_REVERT_OBJECTS|
|hs_engagement_source|MICROAPPS|
|hs_engagement_source|MIGRATION|
|hs_engagement_source|MOBILE_ANDROID|
|hs_engagement_source|MOBILE_IOS|
|hs_engagement_source|PAYMENTS|
|hs_engagement_source|PIPELINE_SETTINGS|
|hs_engagement_source|PLAYBOOKS|
|hs_engagement_source|PORTAL_OBJECT_SYNC|
|hs_engagement_source|PORTAL_USER_ASSOCIATOR|
|hs_engagement_source|PRESENTATIONS|
|hs_engagement_source|PRIMARY_AUTOMATION|
|hs_engagement_source|PROPERTY_DEFAULT_VALUE|
|hs_engagement_source|PROPERTY_RESTORE|
|hs_engagement_source|PROPERTY_SETTINGS|
|hs_engagement_source|PROSPECTING_AGENT|
|hs_engagement_source|QUOTAS|
|hs_engagement_source|QUOTES|
|hs_engagement_source|RECYCLING_BIN|
|hs_engagement_source|RESTORE_OBJECTS|
|hs_engagement_source|REVENUE_PLATFORM|
|hs_engagement_source|SALES|
|hs_engagement_source|SALES_MESSAGES|
|hs_engagement_source|SALESFORCE|
|hs_engagement_source|SEQUENCES|
|hs_engagement_source|SETTINGS|
|hs_engagement_source|SIDEKICK|
|hs_engagement_source|SIGNALS|
|hs_engagement_source|SLACK_INTEGRATION|
|hs_engagement_source|SMART_DATA_CAPTURE|
|hs_engagement_source|SOCIAL|
|hs_engagement_source|SUCCESS|
|hs_engagement_source|TALLY|
|hs_engagement_source|TASK|
|hs_engagement_source|UNKNOWN|
|hs_engagement_source|WAL_INCREMENTAL|
|hs_engagement_source|WORK_UI|
|hs_engagement_source|WORKFLOW_CONTACT_DELETE_ACTION|
|hs_engagement_source|WORKFLOWS|
|hs_meeting_location_type|ADDRESS|
|hs_meeting_location_type|CUSTOM|
|hs_meeting_location_type|PHONE|

<h2 id="tocS_ExternalCalenderMeetingEventResponse">ExternalCalenderMeetingEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexternalcalendermeetingeventresponse"></a>
<a id="schema_ExternalCalenderMeetingEventResponse"></a>
<a id="tocSexternalcalendermeetingeventresponse"></a>
<a id="tocsexternalcalendermeetingeventresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the calendar meeting event was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for the calendar meeting event.|
|lastUpdatedAt|string(date-time)|true|none|The date and time when the calendar meeting event was last updated, in ISO 8601 format.|
|properties|[ExternalCalendarMeetingEventResponseProperties](#schemaexternalcalendarmeetingeventresponseproperties)|true|none|none|

<h2 id="tocS_ExternalClosedRange">ExternalClosedRange</h2>
<!-- backwards compatibility -->
<a id="schemaexternalclosedrange"></a>
<a id="schema_ExternalClosedRange"></a>
<a id="tocSexternalclosedrange"></a>
<a id="tocsexternalclosedrange"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer(int64)|true|none|The ending point of the range, represented as an integer in int64 format.|
|start|integer(int64)|true|none|The starting point of the range, represented as an integer in int64 format.|

<h2 id="tocS_ExternalCommunicationConsentCheckbox">ExternalCommunicationConsentCheckbox</h2>
<!-- backwards compatibility -->
<a id="schemaexternalcommunicationconsentcheckbox"></a>
<a id="schema_ExternalCommunicationConsentCheckbox"></a>
<a id="tocSexternalcommunicationconsentcheckbox"></a>
<a id="tocsexternalcommunicationconsentcheckbox"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communicationTypeId|string|true|none|A string representing the unique identifier for the type of communication this checkbox pertains to.|
|label|string|true|none|A string that contains the text label displayed next to the checkbox, describing the communication type or purpose.|
|required|boolean|true|none|A boolean indicating whether this checkbox must be checked by the user to proceed, signifying mandatory consent.|

<h2 id="tocS_ExternalEmailReminderSchedule">ExternalEmailReminderSchedule</h2>
<!-- backwards compatibility -->
<a id="schemaexternalemailreminderschedule"></a>
<a id="schema_ExternalEmailReminderSchedule"></a>
<a id="tocSexternalemailreminderschedule"></a>
<a id="tocsexternalemailreminderschedule"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reminders|[[ExternalReminder](#schemaexternalreminder)]|true|none|An array of ExternalReminder objects that specify the timing and frequency of the email reminders.|
|shouldIncludeInviteDescription|boolean|true|none|A boolean indicating whether the invite description should be included in the email reminder.|

<h2 id="tocS_ExternalGuestSettings">ExternalGuestSettings</h2>
<!-- backwards compatibility -->
<a id="schemaexternalguestsettings"></a>
<a id="schema_ExternalGuestSettings"></a>
<a id="tocSexternalguestsettings"></a>
<a id="tocsexternalguestsettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canAddGuests|boolean|true|none|A boolean indicating whether guests can be added to the meeting.|
|maxGuestCount|integer(int32)|true|none|An integer specifying the maximum number of guests that can be added to the meeting.|

<h2 id="tocS_ExternalLegalConsentOptions">ExternalLegalConsentOptions</h2>
<!-- backwards compatibility -->
<a id="schemaexternallegalconsentoptions"></a>
<a id="schema_ExternalLegalConsentOptions"></a>
<a id="tocSexternallegalconsentoptions"></a>
<a id="tocsexternallegalconsentoptions"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communicationConsentCheckboxes|[[ExternalCommunicationConsentCheckbox](#schemaexternalcommunicationconsentcheckbox)]|true|none|An array of communication consent checkboxes, each defined by an ExternalCommunicationConsentCheckbox object.|
|communicationConsentText|string|true|none|A string containing the text for communication consent.|
|isLegitimateInterest|boolean|true|none|A boolean indicating whether legitimate interest is applicable.|
|legitimateInterestLegalBasis|string|false|none|A string indicating the legal basis for legitimate interest. Valid values include 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.|
|legitimateInterestSubscriptionTypes|[integer(int64)]|true|none|An array of integers representing the subscription types that fall under legitimate interest.|
|privacyPolicyText|string|true|none|A string containing the text for the privacy policy.|
|processingConsentCheckboxLabel|string|true|none|A string representing the label for the processing consent checkbox.|
|processingConsentFooterText|string|true|none|A string containing the footer text for processing consent.|
|processingConsentText|string|true|none|A string containing the text for processing consent.|
|processingConsentType|string|true|none|A string indicating the type of processing consent. Valid values are 'IMPLICIT' and 'REQUIRED_CHECKBOX'.|

#### Enumerated Values

|Property|Value|
|---|---|
|legitimateInterestLegalBasis|CONSENT_WITH_NOTICE|
|legitimateInterestLegalBasis|LEGITIMATE_INTEREST_CLIENT|
|legitimateInterestLegalBasis|LEGITIMATE_INTEREST_OTHER|
|legitimateInterestLegalBasis|LEGITIMATE_INTEREST_PQL|
|legitimateInterestLegalBasis|NON_GDPR|
|legitimateInterestLegalBasis|PERFORMANCE_OF_CONTRACT|
|legitimateInterestLegalBasis|PROCESS_AND_STORE|
|processingConsentType|IMPLICIT|
|processingConsentType|REQUIRED_CHECKBOX|

<h2 id="tocS_ExternalLegalConsentResponse">ExternalLegalConsentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexternallegalconsentresponse"></a>
<a id="schema_ExternalLegalConsentResponse"></a>
<a id="tocSexternallegalconsentresponse"></a>
<a id="tocsexternallegalconsentresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communicationTypeId|string|true|none|A string representing the unique identifier for the type of communication for which consent is being recorded.|
|consented|boolean|true|none|A boolean indicating whether the user has given consent for the communication type. It is true if consent is given, otherwise false.|

<h2 id="tocS_ExternalLinkAvailability">ExternalLinkAvailability</h2>
<!-- backwards compatibility -->
<a id="schemaexternallinkavailability"></a>
<a id="schema_ExternalLinkAvailability"></a>
<a id="tocSexternallinkavailability"></a>
<a id="tocsexternallinkavailability"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasMore|boolean|true|none|A boolean indicating whether there are more available meeting times beyond those currently provided.|
|linkAvailabilityByDuration|object|true|none|An object where each key is a duration and the value is an availability object for that duration. This provides detailed availability information for each specified meeting duration.|

<h2 id="tocS_ExternalLinkAvailabilityAndBusyTimes">ExternalLinkAvailabilityAndBusyTimes</h2>
<!-- backwards compatibility -->
<a id="schemaexternallinkavailabilityandbusytimes"></a>
<a id="schema_ExternalLinkAvailabilityAndBusyTimes"></a>
<a id="tocSexternallinkavailabilityandbusytimes"></a>
<a id="tocsexternallinkavailabilityandbusytimes"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allUsersBusyTimes|[[ExternalUserBusyTimes](#schemaexternaluserbusytimes)]|true|none|An array of objects representing the busy times for all users associated with the meeting link. Each object includes the user's busy time ranges.|
|linkAvailability|[ExternalLinkAvailability](#schemaexternallinkavailability)|false|none|none|

<h2 id="tocS_ExternalLinkAvailabilityForDuration">ExternalLinkAvailabilityForDuration</h2>
<!-- backwards compatibility -->
<a id="schemaexternallinkavailabilityforduration"></a>
<a id="schema_ExternalLinkAvailabilityForDuration"></a>
<a id="tocSexternallinkavailabilityforduration"></a>
<a id="tocsexternallinkavailabilityforduration"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availabilities|[[ExternalMeetingAvailability](#schemaexternalmeetingavailability)]|true|none|An array of available time slots for the specified meeting duration. Each item in the array is an object representing a time slot's start and end times.|
|meetingDurationMillis|integer(int64)|true|none|The duration of the meeting in milliseconds. This is an integer value representing the length of the meeting.|

<h2 id="tocS_ExternalLinkDisplayInfo">ExternalLinkDisplayInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexternallinkdisplayinfo"></a>
<a id="schema_ExternalLinkDisplayInfo"></a>
<a id="tocSexternallinkdisplayinfo"></a>
<a id="tocsexternallinkdisplayinfo"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|false|none|A string representing the URL of the avatar image to be displayed.|
|companyAvatar|string|false|none|A string representing the URL of the company avatar image to be displayed.|
|headline|string|false|none|A string representing the headline text to be displayed with the meeting link.|
|publicDisplayAvatarOption|string|false|none|A string indicating the avatar display option, with valid values including 'PROFILE_IMAGE', 'COMPANY_LOGO', and 'CUSTOM_AVATAR'.|

#### Enumerated Values

|Property|Value|
|---|---|
|publicDisplayAvatarOption|COMPANY_LOGO|
|publicDisplayAvatarOption|CUSTOM_AVATAR|
|publicDisplayAvatarOption|PROFILE_IMAGE|

<h2 id="tocS_ExternalLinkFormField">ExternalLinkFormField</h2>
<!-- backwards compatibility -->
<a id="schemaexternallinkformfield"></a>
<a id="schema_ExternalLinkFormField"></a>
<a id="tocSexternallinkformfield"></a>
<a id="tocsexternallinkformfield"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldType|string|true|none|The type of the form field, represented as a string, indicating the kind of input expected.|
|isCustom|boolean|true|none|A boolean indicating whether the form field is a custom field defined by the user.|
|isRequired|boolean|true|none|A boolean indicating whether the form field is mandatory for the user to fill out.|
|label|string|true|none|The display label for the form field, shown to users, represented as a string.|
|name|string|true|none|The unique name identifier for the form field, represented as a string.|
|options|[[ExternalOption](#schemaexternaloption)]|true|none|An array of options available for the form field, applicable if the field type supports multiple choices.|
|type|string|true|none|The specific data type of the form field, represented as a string.|

<h2 id="tocS_ExternalLinkMetadata">ExternalLinkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaexternallinkmetadata"></a>
<a id="schema_ExternalLinkMetadata"></a>
<a id="tocSexternallinkmetadata"></a>
<a id="tocsexternallinkmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the meeting link was created, in ISO 8601 format.|
|defaultLink|boolean|true|none|A boolean indicating whether this is the default meeting link.|
|id|string|true|none|The unique identifier for the meeting link.|
|link|string|true|none|The full URL of the meeting link.|
|name|string|false|none|The name of the meeting link.|
|organizerUserId|string|true|none|The unique identifier of the user who organized the meeting.|
|paymentLinkId|string|false|none|An integer representing the identifier for the payment link associated with the meeting.|
|slug|string|true|none|A string representing the unique part of the URL for the meeting link.|
|type|string|true|none|The type of meeting link. Valid values include 'PERSONAL_LINK', 'GROUP_CALENDAR', and 'ROUND_ROBIN_CALENDAR'.|
|updatedAt|string(date-time)|false|none|The date and time when the meeting link was last updated, in ISO 8601 format.|
|userIdsOfLinkMembers|[string]|true|none|An array of user IDs representing the members associated with the meeting link.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GROUP_CALENDAR|
|type|PERSONAL_LINK|
|type|ROUND_ROBIN_CALENDAR|

<h2 id="tocS_ExternalMeetingAvailability">ExternalMeetingAvailability</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmeetingavailability"></a>
<a id="schema_ExternalMeetingAvailability"></a>
<a id="tocSexternalmeetingavailability"></a>
<a id="tocsexternalmeetingavailability"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endMillisUtc|integer(int64)|true|none|The end time of the meeting availability, represented as a Unix timestamp in milliseconds.|
|startMillisUtc|integer(int64)|true|none|The start time of the meeting availability, represented as a Unix timestamp in milliseconds.|

<h2 id="tocS_ExternalMeetingBooking">ExternalMeetingBooking</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmeetingbooking"></a>
<a id="schema_ExternalMeetingBooking"></a>
<a id="tocSexternalmeetingbooking"></a>
<a id="tocsexternalmeetingbooking"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer(int64)|true|none|An integer representing the duration of the meeting in minutes.|
|email|string|true|none|The email address of the person booking the meeting.|
|firstName|string|true|none|The first name of the person booking the meeting.|
|formFields|[[ExternalBookingFormField](#schemaexternalbookingformfield)]|true|none|An array of form fields filled out by the participant, each containing a name and value.|
|lastName|string|true|none|The last name of the person booking the meeting.|
|legalConsentResponses|[[ExternalLegalConsentResponse](#schemaexternallegalconsentresponse)]|true|none|An array of legal consent responses, each detailing the consent given by the participant.|
|likelyAvailableUserIds|[string]|true|none|An array of strings representing the user IDs of those likely available for the meeting.|
|locale|string|false|none|A string representing the locale of the person booking the meeting.|
|slug|string|true|none|A string representing the unique identifier for the meeting link.|
|startTime|string(date-time)|true|none|The start time of the meeting in ISO 8601 date-time format.|
|timezone|string|false|none|A string representing the timezone of the person booking the meeting.|

<h2 id="tocS_ExternalMeetingBookingResponse">ExternalMeetingBookingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmeetingbookingresponse"></a>
<a id="schema_ExternalMeetingBookingResponse"></a>
<a id="tocSexternalmeetingbookingresponse"></a>
<a id="tocsexternalmeetingbookingresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingTimezone|string|true|none|The timezone in which the meeting was booked, represented as a string.|
|calendarEventId|string|true|none|The unique identifier for the calendar event associated with this meeting.|
|contactId|string|true|none|The unique identifier for the contact associated with this meeting.|
|duration|integer(int64)|true|none|The duration of the meeting in minutes, represented as an integer.|
|end|string(date-time)|true|none|The end date and time of the meeting, in ISO 8601 format.|
|formFields|[[ExternalValidatedFormField](#schemaexternalvalidatedformfield)]|true|none|An array of validated form fields submitted during the booking process, each represented by an ExternalValidatedFormField object.|
|guestEmails|[string]|true|none|An array of email addresses for the guests invited to the meeting.|
|isOffline|boolean|true|none|A boolean indicating whether the meeting is offline (true) or online (false).|
|legalConsentResponses|[[ExternalLegalConsentResponse](#schemaexternallegalconsentresponse)]|true|none|An array of legal consent responses associated with the meeting, each represented by an ExternalLegalConsentResponse object.|
|locale|string|false|none|The locale setting for the meeting, represented as a string.|
|location|string|false|none|The location of the meeting, represented as a string.|
|start|string(date-time)|true|none|The start date and time of the meeting, in ISO 8601 format.|
|subject|string|true|none|The subject or title of the meeting, represented as a string.|
|webConferenceMeetingId|string|false|none|The unique identifier for the web conference meeting, if applicable.|
|webConferenceUrl|string|false|none|The URL for the web conference associated with the meeting, if applicable.|

<h2 id="tocS_ExternalMeetingsLinkSettings">ExternalMeetingsLinkSettings</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmeetingslinksettings"></a>
<a id="schema_ExternalMeetingsLinkSettings"></a>
<a id="tocSexternalmeetingslinksettings"></a>
<a id="tocsexternalmeetingslinksettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|object|true|none|An object representing the availability settings for the meeting link, with additional properties for closed ranges.|
|customAvailabilityEndDate|integer(int64)|false|none|An integer representing the custom availability end date as a Unix timestamp in milliseconds.|
|customAvailabilityStartDate|integer(int64)|false|none|An integer representing the custom availability start date as a Unix timestamp in milliseconds.|
|displayInfo|[ExternalLinkDisplayInfo](#schemaexternallinkdisplayinfo)|false|none|none|
|durations|[integer(int64)]|true|none|An array of integers representing the possible durations for meetings in milliseconds.|
|formFields|[[ExternalLinkFormField](#schemaexternallinkformfield)]|true|none|An array of form fields that are included in the meeting link form.|
|guestSettings|[ExternalGuestSettings](#schemaexternalguestsettings)|false|none|none|
|language|string|false|none|A string representing the language setting for the meeting link.|
|legalConsentEnabled|boolean|true|none|A boolean indicating whether legal consent is required for the meeting link.|
|legalConsentOptions|[ExternalLegalConsentOptions](#schemaexternallegalconsentoptions)|false|none|none|
|locale|string|false|none|A string representing the locale setting for the meeting link.|
|location|string|false|none|A string representing the location information for the meeting.|
|meetingBufferTime|integer(int64)|true|none|An integer representing the buffer time between meetings in milliseconds.|
|ownerPrioritized|boolean|true|none|A boolean indicating whether the meeting owner is prioritized in scheduling.|
|redirectUrl|string|false|none|A string representing the URL to which users are redirected after booking a meeting.|
|startTimeIncrementMinutes|string|true|none|A string indicating the increment for start times, with valid values including 'MEETING_DURATION', 'FIVE', 'TEN', 'FIFTEEN', 'TWENTY', 'THIRTY', 'FORTY_FIVE', 'SIXTY', 'NINETY', and 'ONE_HUNDRED_TWENTY'.|
|weeksToAdvertise|integer(int32)|true|none|An integer representing the number of weeks to advertise the meeting link.|
|welcomeScreenInfo|[ExternalMeetingsWelcomeScreenInfo](#schemaexternalmeetingswelcomescreeninfo)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|startTimeIncrementMinutes|FIFTEEN|
|startTimeIncrementMinutes|FIVE|
|startTimeIncrementMinutes|FORTY_FIVE|
|startTimeIncrementMinutes|MEETING_DURATION|
|startTimeIncrementMinutes|NINETY|
|startTimeIncrementMinutes|ONE_HUNDRED_TWENTY|
|startTimeIncrementMinutes|SIXTY|
|startTimeIncrementMinutes|TEN|
|startTimeIncrementMinutes|THIRTY|
|startTimeIncrementMinutes|TWENTY|

<h2 id="tocS_ExternalMeetingsUser">ExternalMeetingsUser</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmeetingsuser"></a>
<a id="schema_ExternalMeetingsUser"></a>
<a id="tocSexternalmeetingsuser"></a>
<a id="tocsexternalmeetingsuser"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendarProvider|string|true|none|The calendar service provider used by the user. Valid values include 'GOOGLE', 'OFFICE365', 'EXCHANGE', and 'UNKNOWN'.|
|id|string|true|none|The unique identifier for the meetings user.|
|isSalesStarter|boolean|true|none|A boolean indicating whether the user is a sales starter.|
|userId|string|true|none|The unique identifier for the user associated with the meetings service.|
|userProfile|[ExternalUserProfile](#schemaexternaluserprofile)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|calendarProvider|EXCHANGE|
|calendarProvider|GOOGLE|
|calendarProvider|OFFICE365|
|calendarProvider|UNKNOWN|

<h2 id="tocS_ExternalMeetingsWelcomeScreenInfo">ExternalMeetingsWelcomeScreenInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmeetingswelcomescreeninfo"></a>
<a id="schema_ExternalMeetingsWelcomeScreenInfo"></a>
<a id="tocSexternalmeetingswelcomescreeninfo"></a>
<a id="tocsexternalmeetingswelcomescreeninfo"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A descriptive text shown on the welcome screen. It is a string value.|
|logoUrl|string|false|none|The URL of the logo image displayed on the welcome screen. It is a string value.|
|showWelcomeScreen|boolean|false|none|A boolean indicating whether the welcome screen should be displayed to users.|
|title|string|false|none|The title displayed on the welcome screen. It is a string value.|
|useCompanyLogo|boolean|false|none|A boolean indicating whether the company's logo should be used on the welcome screen.|

<h2 id="tocS_ExternalOption">ExternalOption</h2>
<!-- backwards compatibility -->
<a id="schemaexternaloption"></a>
<a id="schema_ExternalOption"></a>
<a id="tocSexternaloption"></a>
<a id="tocsexternaloption"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A string providing a detailed description of the option.|
|displayOrder|integer(int32)|true|none|An integer indicating the order in which the option should be displayed relative to other options.|
|doubleData|number|true|none|A number that may hold additional data associated with the option.|
|hidden|boolean|true|none|A boolean indicating whether the option is hidden from display.|
|label|string|true|none|A string representing the display name of the option.|
|readOnly|boolean|true|none|A boolean indicating whether the option is read-only and cannot be modified.|
|value|string|true|none|A string representing the internal value associated with the option.|

<h2 id="tocS_ExternalReminder">ExternalReminder</h2>
<!-- backwards compatibility -->
<a id="schemaexternalreminder"></a>
<a id="schema_ExternalReminder"></a>
<a id="tocSexternalreminder"></a>
<a id="tocsexternalreminder"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfTimeUnits|integer(int32)|true|none|The number of time units before the meeting when the reminder should be sent. This is an integer value.|
|timeUnit|string|true|none|The unit of time for the reminder. Valid values include 'WEEKS', 'DAYS', 'HOURS', and 'MINUTES'.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeUnit|DAYS|
|timeUnit|HOURS|
|timeUnit|MINUTES|
|timeUnit|WEEKS|

<h2 id="tocS_ExternalTimeRange">ExternalTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemaexternaltimerange"></a>
<a id="schema_ExternalTimeRange"></a>
<a id="tocSexternaltimerange"></a>
<a id="tocsexternaltimerange"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer(int64)|true|none|The end of the time range, represented as an integer in int64 format.|
|start|integer(int64)|true|none|The start of the time range, represented as an integer in int64 format.|

<h2 id="tocS_ExternalUserBusyTimes">ExternalUserBusyTimes</h2>
<!-- backwards compatibility -->
<a id="schemaexternaluserbusytimes"></a>
<a id="schema_ExternalUserBusyTimes"></a>
<a id="tocSexternaluserbusytimes"></a>
<a id="tocsexternaluserbusytimes"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|busyTimes|[[ExternalTimeRange](#schemaexternaltimerange)]|true|none|An array of time ranges during which the user is busy. Each time range is represented by an object with start and end times.|
|isOffline|boolean|true|none|A boolean indicating whether the user is currently offline.|
|meetingsUser|[ExternalMeetingsUser](#schemaexternalmeetingsuser)|true|none|none|

<h2 id="tocS_ExternalUserProfile">ExternalUserProfile</h2>
<!-- backwards compatibility -->
<a id="schemaexternaluserprofile"></a>
<a id="schema_ExternalUserProfile"></a>
<a id="tocSexternaluserprofile"></a>
<a id="tocsexternaluserprofile"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email address of the user. This is a required string property.|
|firstName|string|false|none|The first name of the user. It is a string.|
|fullName|string|false|none|The full name of the user, combining first and last names. It is a string.|
|lastName|string|false|none|The last name of the user. It is a string.|

<h2 id="tocS_ExternalValidatedFormField">ExternalValidatedFormField</h2>
<!-- backwards compatibility -->
<a id="schemaexternalvalidatedformfield"></a>
<a id="schema_ExternalValidatedFormField"></a>
<a id="tocSexternalvalidatedformfield"></a>
<a id="tocsexternalvalidatedformfield"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldType|string|false|none|The type of the form field, represented as a string.|
|isCustom|boolean|true|none|A boolean indicating whether the form field is custom-defined.|
|label|string|true|none|The display label for the form field, represented as a string.|
|name|string|true|none|The name of the form field, represented as a string.|
|translatedLabel|string|false|none|The translated label for the form field, represented as a string.|
|value|string|true|none|The value assigned to the form field, represented as a string.|
|valueLabel|string|false|none|A label for the field's value, represented as a string.|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string representing the paging cursor token for the next set of results.|
|link|string|false|none|A string containing the URL link to the next page of results.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

<h2 id="tocS_PreviousPage">PreviousPage</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspage"></a>
<a id="schema_PreviousPage"></a>
<a id="tocSpreviouspage"></a>
<a id="tocspreviouspage"></a>

```json
null
```

specifies the paging information needed to retrieve the previous set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|before|string|true|none|A string token used to retrieve the previous page of results.|
|link|string|false|none|A string URL that provides a direct link to the previous page of results.|

<h2 id="tocS_PublicObjectId">PublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectid"></a>
<a id="schema_PublicObjectId"></a>
<a id="tocSpublicobjectid"></a>
<a id="tocspublicobjectid"></a>

```json
null
```

Contains the Id of a Public Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the public object. It is a string that serves as a reference to the object within the API.|
