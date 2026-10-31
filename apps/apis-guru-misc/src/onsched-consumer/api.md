<h1 id="onsched-consumer-api">OnSched Consumer API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Build secure and scalable custom apps for Online Booking. Our flexible API provides many options for availability and booking.
<br><br>
Take the API for a test drive. Just click on the Authorize button below and authenticate. 
You can access our demo company profile if you are not a customer, or your own profile by using your assigned ClientId and Secret.
<br><br>
The API has two interfaces, consumer and setup. 
<ul>
<li>
The consumer interface provides all the endpoints required for implementing consumer booking flows.
</li>
<li>
The setup interface provides endpoints for profile configuration and setup.
</li>
</ul>
Toggle freely between the two interfaces using the swagger tool bar option labelled 'Select a definition'.

Base URLs:

* <a href="https://sandbox-api.onsched.com/">https://sandbox-api.onsched.com/</a>

# Authentication

- oAuth2 authentication.

    - Flow: clientCredentials
    - Token URL = [https://sandbox-identity.onsched.com/connect/token](https://sandbox-identity.onsched.com/connect/token)

|Scope|Scope Description|
|---|---|
|OnSchedApi|Consumer and Setup Interface|
|distance|Travel and Distance calculations|

<h1 id="onsched-consumer-api-appointments">Appointments</h1>

## Get Appointments

> Code samples

```bash
curl https://example.com/consumer/v1/appointments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/appointments`

<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

<h3 id="get-appointments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location|
|email|query|string|false|Filter by email address|
|lastname|query|string|false|Filter by lastname or part of it|
|phone|query|string|false|Filter by phone number or part of it|
|serviceId|query|string|false|Filter by service|
|calendarId|query|string|false|Filter by calendar|
|resourceId|query|string|false|Filter by resource|
|customerId|query|string|false|Filter by customer|
|serviceAllocationId|query|string|false|Filter by service allocation|
|startDate|query|string(date-time)|false|Format YYYY-MM-DD. Filter by on/after startDate|
|endDate|query|string(date-time)|false|Format YYYY-MM-DD. Filter on/before endDate|
|status|query|string|false|Filter by status: IN, BK, CN, RE, RS|
|bookedBy|query|string|false|Filter by the email of who booked|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit, default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "auditTrail": [
        {
          "appointmentId": "string",
          "id": "string",
          "modificationType": "string",
          "modifiedBy": "string",
          "modifiedOn": "string",
          "notesAfter": "string",
          "notesBefore": "string",
          "statusAfter": "string",
          "statusBefore": "string"
        }
      ],
      "bookedBy": "string",
      "businessName": "string",
      "calendarId": "string",
      "confirmationNumber": "string",
      "confirmed": true,
      "createDate": "string",
      "customFields": {
        "property1": {
          "name": "string",
          "value": "string"
        },
        "property2": {
          "name": "string",
          "value": "string"
        }
      },
      "customerId": "string",
      "customerMessage": "string",
      "customers": [
        {
          "appointmentId": "string",
          "customerId": "string"
        }
      ],
      "date": "string",
      "dateInternational": "string",
      "downloadIcsUrl": "string",
      "duration": 0,
      "email": "string",
      "emailConfirmationSent": "string",
      "emailReminderSent": "string",
      "endDateTime": "string",
      "firstname": "string",
      "groupSize": 0,
      "id": "string",
      "ipAddress": "string",
      "lastModifiedBy": "string",
      "lastModifiedOn": "string",
      "lastname": "string",
      "latitude": "string",
      "location": "string",
      "locationId": "string",
      "longitude": "string",
      "name": "string",
      "notes": "string",
      "object": "string",
      "onlineBooking": true,
      "paymentStatus": 0,
      "phone": "string",
      "phoneExt": "string",
      "phoneType": "string",
      "rescheduledId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceGroupName": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string",
      "resources": [
        {
          "appointmentId": "string",
          "resourceEmail": "string",
          "resourceGroupId": "string",
          "resourceId": "string",
          "resourceImageUrl": "string",
          "resourceName": "string"
        }
      ],
      "serviceAllocationId": "string",
      "serviceId": "string",
      "serviceImageUrl": "string",
      "serviceName": "string",
      "smsConfirmationSent": "string",
      "smsReminderSent": "string",
      "startDateTime": "string",
      "status": "string",
      "stripeChargeId": "string",
      "stripeRefundId": "string",
      "time": 0,
      "timezone": 0,
      "timezoneIana": "string",
      "timezoneId": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="get-appointments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentListViewModel](#schemaappointmentlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Appointment

> Code samples

```bash
curl https://example.com/consumer/v1/appointments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appointmentBookingFields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "bookedBy": "string",
    "bookingWindowId": "string",
    "calendarId": "string",
    "customFields": {
      "field1": "string",
      "field10": "string",
      "field2": "string",
      "field3": "string",
      "field4": "string",
      "field5": "string",
      "field6": "string",
      "field7": "string",
      "field8": "string",
      "field9": "string"
    },
    "customerBookingFields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "customerId": "string",
    "customerMessage": "string",
    "email": "string",
    "endDateTime": "1970-01-01T00:00:00Z",
    "groupSize": 0,
    "location": "string",
    "locationId": "string",
    "name": "string",
    "notes": "string",
    "phone": "string",
    "phoneType": "string",
    "resourceGroupId": "string",
    "resourceId": "string",
    "resourceIds": "string",
    "serviceAllocationId": "string",
    "serviceId": "string",
    "startDateTime": "1970-01-01T00:00:00Z",
    "timezoneName": "string",
    "travelAppointmentId": "string",
    "travelTimeMins": 0
  }'
```

`POST /consumer/v1/appointments`

<p>Use this endpoint to <b>Create</b> a new appointment. The appointment will be created with an "IN", Initial status. Posting an appointment with "IN" status requires minimal information and requires a "PUT book" call to complete the booking transaction, <i>PUT ​/consumer​/v1​/appointments​/{id}​/book</i>. Alternatively, you can post an appointment using the <b>completeBooking</b> option which completes the booking in one transaction, but it will require more data. The method you choose depends on your solutions workflow. </p>
<p>
  <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b></p>
<p>A valid <b>serviceId</b> is required. The serviceId provided must be valid for the location being booked. A valid serviceId is one that is scoped to a Primary Company Location or is associated with a Business Location</p>
<p>OPTIONAL FIELDS INCLUDE: </p>
<p>
  <b>locationId</b> - if not supplied, the appointment will be posted to the primary business location. If you support multiple location, we recommend always supplying the locationId. </p>
<p>
  <b>resourceId</b> - not required when posting with an "IN" status but is required when the appointment is booked. Use <i>GET /consumer/v1/resources</i> for a list of resources. </p>
<p>
  <b>customerId</b> - if supplied the name and email will be retrieved from the customer record. </p>
<p>
  <b>BookedBy</b> - if not supplied the email address of the booked appointment is used or the ip address if no email address is provided. BookedBy is used in the Appointment Audit trail which can be viewed in the appointment object.</p>
<p>
  <b>Location</b> - is a string value representing the location of the appointment. It provides no added functionality in OnSched and should not be confused with locationId.</p>
<p>
  <b>TimezoneName</b> - if used timezoneName must be in IANA format, <i>America/New_York</i>. This is the timezone the appointment was booked in. Populating this information can help later in situations where appointments are booked before a Daylight Savings change. If no timezoneName is supplied, the Business Locations timezone will be used.</p>
<p>
  <b>COMPLETE BOOKING:</b> This parameter provides a mechanism for immediate booking with the POST appointment endpoint. To complete the booking in one transaction, populate the <b>completeBooking</b> parameter with a "BK", booked or an "RS", reserved status and provide an (<b>email</b> and <b>name</b>) or a <b>customerId</b> in the post body. Doing so will book the appointment and send notifications all in one transaction. <b>Note:</b> "IN" can also be used as a completeBooking option to support payment flows. With the "IN" option, notifications are NOT sent.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

> Body parameter

```json
{
  "appointmentBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "bookedBy": "string",
  "bookingWindowId": "string",
  "calendarId": "string",
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "customerBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customerId": "string",
  "customerMessage": "string",
  "email": "string",
  "endDateTime": "1970-01-01T00:00:00Z",
  "groupSize": 0,
  "location": "string",
  "locationId": "string",
  "name": "string",
  "notes": "string",
  "phone": "string",
  "phoneType": "string",
  "resourceGroupId": "string",
  "resourceId": "string",
  "resourceIds": "string",
  "serviceAllocationId": "string",
  "serviceId": "string",
  "startDateTime": "1970-01-01T00:00:00Z",
  "timezoneName": "string",
  "travelAppointmentId": "string",
  "travelTimeMins": 0
}
```

<h3 id="create-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|completeBooking|query|string|false|Options are "BK", "RS" or "IN"|
|body|body|[AppointmentInitialModel](#schemaappointmentinitialmodel)|false|none|
|» appointmentBookingFields|body|[[BookingFieldItem](#schemabookingfielditem)]|false|none|
|» bookedBy|body|string \| null|false|none|
|» bookingWindowId|body|string \| null|false|none|
|» calendarId|body|string \| null|false|none|
|» customFields|body|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|
|» customerBookingFields|body|[[BookingFieldItem](#schemabookingfielditem)]|false|none|
|» customerId|body|string \| null|false|none|
|» customerMessage|body|string \| null|false|none|
|» email|body|string \| null|false|none|
|» endDateTime|body|string(date-time)|false|none|
|» groupSize|body|integer(int32) \| null|false|none|
|» location|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» notes|body|string \| null|false|none|
|» phone|body|string \| null|false|none|
|» phoneType|body|string \| null|false|none|
|» resourceGroupId|body|string \| null|false|none|
|» resourceId|body|string \| null|false|none|
|» resourceIds|body|string \| null|false|none|
|» serviceAllocationId|body|string \| null|false|none|
|» serviceId|body|string \| null|false|none|
|» startDateTime|body|string(date-time)|false|none|
|» timezoneName|body|string \| null|false|none|
|» travelAppointmentId|body|string \| null|false|none|
|» travelTimeMins|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "appointmentBookingFields": [
    {
      "businessId": "string",
      "companyId": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "auditTrail": [
    {
      "appointmentId": "string",
      "id": "string",
      "modificationType": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "notesAfter": "string",
      "notesBefore": "string",
      "statusAfter": "string",
      "statusBefore": "string"
    }
  ],
  "bookedBy": "string",
  "bookingForms": {
    "bookingConfirmationPage": "string",
    "bookingForm": "string"
  },
  "businessName": "string",
  "calendarId": "string",
  "confirmationNumber": "string",
  "confirmed": true,
  "createDate": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "customerBookingFields": [
    {
      "businessId": "string",
      "companyId": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "customerId": "string",
  "customerMessage": "string",
  "customers": [
    {
      "appointmentId": "string",
      "customerId": "string"
    }
  ],
  "date": "string",
  "dateInternational": "string",
  "downloadIcsUrl": "string",
  "duration": 0,
  "email": "string",
  "emailConfirmationSent": "string",
  "emailReminderSent": "string",
  "endDateTime": "string",
  "firstname": "string",
  "groupSize": 0,
  "id": "string",
  "ipAddress": "string",
  "lastModifiedBy": "string",
  "lastModifiedOn": "string",
  "lastname": "string",
  "latitude": "string",
  "location": "string",
  "locationId": "string",
  "longitude": "string",
  "name": "string",
  "notes": "string",
  "object": "string",
  "onlineBooking": true,
  "paymentStatus": 0,
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string",
  "rescheduledId": "string",
  "resourceEmail": "string",
  "resourceGroupId": "string",
  "resourceGroupName": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resources": [
    {
      "appointmentId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string"
    }
  ],
  "serviceAllocationId": "string",
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "smsConfirmationSent": "string",
  "smsReminderSent": "string",
  "startDateTime": "string",
  "status": "string",
  "stripeChargeId": "string",
  "stripeRefundId": "string",
  "time": 0,
  "timezone": 0,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

<h3 id="create-appointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentInitialViewModel](#schemaappointmentinitialviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Custom Fields Labels

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/bookingfields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/appointments/bookingfields`

<p>Use this endpoint to return a locations <b>Appointment Booking Fields</b>. Appointment booking fields are stored with each Appointment record. They are used when you need additional information collected during your booking process. It is tied to an appointment/visit and will be stored in the appointment record. Use the field name, type, and length to determine how to update these field values when posting an appointment.</p>

<h3 id="get-custom-fields-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location|

> Example responses

> 200 Response

```json
{
  "bookingFields": [
    {
      "businessId": "string",
      "companyId": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "object": "string",
  "total": 0
}
```

<h3 id="get-custom-fields-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BookingFieldListViewModel](#schemabookingfieldlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Custom Fields List

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/customfields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/appointments/customfields`

<p>Use this endpoint to return a locations <b>Appointment Custom Field</b> definitions. Appointment custom fields are stored with each appointment. They are used when the information collected during the booking is specific to a particular appointment/visit. The response will list the custom fields used (customField1 - 10), the field type (string, number, date, boolean) and the length of each one.</p>

<h3 id="get-custom-fields-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location|

> Example responses

> 200 Response

```json
{
  "customFields": [
    {
      "fieldKey": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldPublic": true,
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "object": "string",
  "total": 0
}
```

<h3 id="get-custom-fields-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomFieldDefinitionListViewModel](#schemacustomfielddefinitionlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Appointment

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/appointments/{id}`

<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

<h3 id="get-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of appointment requested|

> Example responses

> 200 Response

```json
{
  "auditTrail": [
    {
      "appointmentId": "string",
      "id": "string",
      "modificationType": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "notesAfter": "string",
      "notesBefore": "string",
      "statusAfter": "string",
      "statusBefore": "string"
    }
  ],
  "bookedBy": "string",
  "businessName": "string",
  "calendarId": "string",
  "confirmationNumber": "string",
  "confirmed": true,
  "createDate": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "customerId": "string",
  "customerMessage": "string",
  "customers": [
    {
      "appointmentId": "string",
      "customerId": "string"
    }
  ],
  "date": "string",
  "dateInternational": "string",
  "downloadIcsUrl": "string",
  "duration": 0,
  "email": "string",
  "emailConfirmationSent": "string",
  "emailReminderSent": "string",
  "endDateTime": "string",
  "firstname": "string",
  "groupSize": 0,
  "id": "string",
  "ipAddress": "string",
  "lastModifiedBy": "string",
  "lastModifiedOn": "string",
  "lastname": "string",
  "latitude": "string",
  "location": "string",
  "locationId": "string",
  "longitude": "string",
  "name": "string",
  "notes": "string",
  "object": "string",
  "onlineBooking": true,
  "paymentStatus": 0,
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string",
  "rescheduledId": "string",
  "resourceEmail": "string",
  "resourceGroupId": "string",
  "resourceGroupName": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resources": [
    {
      "appointmentId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string"
    }
  ],
  "serviceAllocationId": "string",
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "smsConfirmationSent": "string",
  "smsReminderSent": "string",
  "startDateTime": "string",
  "status": "string",
  "stripeChargeId": "string",
  "stripeRefundId": "string",
  "time": 0,
  "timezone": 0,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

<h3 id="get-appointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentViewModel](#schemaappointmentviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Appointment

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /consumer/v1/appointments/{id}`

<p>Use this endpoint to permanently <b>Delete</b> an appointment. Only appointments with a of "IN" status, initial, can be deleted. Past dated appointments cannot be deleted. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

<h3 id="delete-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|appointment id to delete|

> Example responses

> 200 Response

```json
{
  "auditTrail": [
    {
      "appointmentId": "string",
      "id": "string",
      "modificationType": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "notesAfter": "string",
      "notesBefore": "string",
      "statusAfter": "string",
      "statusBefore": "string"
    }
  ],
  "bookedBy": "string",
  "businessName": "string",
  "calendarId": "string",
  "confirmationNumber": "string",
  "confirmed": true,
  "createDate": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "customerId": "string",
  "customerMessage": "string",
  "customers": [
    {
      "appointmentId": "string",
      "customerId": "string"
    }
  ],
  "date": "string",
  "dateInternational": "string",
  "downloadIcsUrl": "string",
  "duration": 0,
  "email": "string",
  "emailConfirmationSent": "string",
  "emailReminderSent": "string",
  "endDateTime": "string",
  "firstname": "string",
  "groupSize": 0,
  "id": "string",
  "ipAddress": "string",
  "lastModifiedBy": "string",
  "lastModifiedOn": "string",
  "lastname": "string",
  "latitude": "string",
  "location": "string",
  "locationId": "string",
  "longitude": "string",
  "name": "string",
  "notes": "string",
  "object": "string",
  "onlineBooking": true,
  "paymentStatus": 0,
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string",
  "rescheduledId": "string",
  "resourceEmail": "string",
  "resourceGroupId": "string",
  "resourceGroupName": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resources": [
    {
      "appointmentId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string"
    }
  ],
  "serviceAllocationId": "string",
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "smsConfirmationSent": "string",
  "smsReminderSent": "string",
  "startDateTime": "string",
  "status": "string",
  "stripeChargeId": "string",
  "stripeRefundId": "string",
  "time": 0,
  "timezone": 0,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

<h3 id="delete-appointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentViewModel](#schemaappointmentviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Book Appointment

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/string/book \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appointmentBookingFields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "customFields": {
      "field1": "string",
      "field10": "string",
      "field2": "string",
      "field3": "string",
      "field4": "string",
      "field5": "string",
      "field6": "string",
      "field7": "string",
      "field8": "string",
      "field9": "string"
    },
    "customerBookingFields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "customerMessage": "string",
    "email": "string",
    "groupSize": 0,
    "name": "string",
    "notes": "string",
    "phone": "string",
    "phoneExt": "string",
    "phoneType": "string"
  }'
```

`PUT /consumer/v1/appointments/{id}/book`

<p>Use this endpoint to <b>Book</b> an appointment. Only appointments with an "IN" status, Initial, can be booked. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint. Other pertinent fields can also be updated at the time of booking by including them in the post body. <b>Note: If no name or email address was provided in the initial Post Appointment, it will be required in the post body.</b></p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

> Body parameter

```json
{
  "appointmentBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "customerBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customerMessage": "string",
  "email": "string",
  "groupSize": 0,
  "name": "string",
  "notes": "string",
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string"
}
```

<h3 id="book-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|appointment id to book|
|body|body|[AppointmentBookModel](#schemaappointmentbookmodel)|false|none|
|» appointmentBookingFields|body|[[BookingFieldItem](#schemabookingfielditem)]|false|none|
|» customFields|body|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|
|» customerBookingFields|body|[[BookingFieldItem](#schemabookingfielditem)]|false|none|
|» customerMessage|body|string \| null|false|none|
|» email|body|string \| null|false|none|
|» groupSize|body|integer(int32) \| null|false|none|
|» name|body|string \| null|false|none|
|» notes|body|string \| null|false|none|
|» phone|body|string \| null|false|none|
|» phoneExt|body|string \| null|false|none|
|» phoneType|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "auditTrail": [
    {
      "appointmentId": "string",
      "id": "string",
      "modificationType": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "notesAfter": "string",
      "notesBefore": "string",
      "statusAfter": "string",
      "statusBefore": "string"
    }
  ],
  "bookedBy": "string",
  "businessName": "string",
  "calendarId": "string",
  "confirmationNumber": "string",
  "confirmed": true,
  "createDate": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "customerId": "string",
  "customerMessage": "string",
  "customers": [
    {
      "appointmentId": "string",
      "customerId": "string"
    }
  ],
  "date": "string",
  "dateInternational": "string",
  "downloadIcsUrl": "string",
  "duration": 0,
  "email": "string",
  "emailConfirmationSent": "string",
  "emailReminderSent": "string",
  "endDateTime": "string",
  "firstname": "string",
  "groupSize": 0,
  "id": "string",
  "ipAddress": "string",
  "lastModifiedBy": "string",
  "lastModifiedOn": "string",
  "lastname": "string",
  "latitude": "string",
  "location": "string",
  "locationId": "string",
  "longitude": "string",
  "name": "string",
  "notes": "string",
  "object": "string",
  "onlineBooking": true,
  "paymentStatus": 0,
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string",
  "rescheduledId": "string",
  "resourceEmail": "string",
  "resourceGroupId": "string",
  "resourceGroupName": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resources": [
    {
      "appointmentId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string"
    }
  ],
  "serviceAllocationId": "string",
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "smsConfirmationSent": "string",
  "smsReminderSent": "string",
  "startDateTime": "string",
  "status": "string",
  "stripeChargeId": "string",
  "stripeRefundId": "string",
  "time": 0,
  "timezone": 0,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

<h3 id="book-appointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentViewModel](#schemaappointmentviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Cancel Appointment

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/string/cancel \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /consumer/v1/appointments/{id}/cancel`

<p>Use this endpoint to <b>Cancel</b> an appointment booking or reservation. Only appointments with a "BK", booked or "RS", reserved status can be cancelled. Past dated appointments cannot be cancelled. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

<h3 id="cancel-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|appointment id to cancel|

> Example responses

> 200 Response

```json
{
  "auditTrail": [
    {
      "appointmentId": "string",
      "id": "string",
      "modificationType": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "notesAfter": "string",
      "notesBefore": "string",
      "statusAfter": "string",
      "statusBefore": "string"
    }
  ],
  "bookedBy": "string",
  "businessName": "string",
  "calendarId": "string",
  "confirmationNumber": "string",
  "confirmed": true,
  "createDate": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "customerId": "string",
  "customerMessage": "string",
  "customers": [
    {
      "appointmentId": "string",
      "customerId": "string"
    }
  ],
  "date": "string",
  "dateInternational": "string",
  "downloadIcsUrl": "string",
  "duration": 0,
  "email": "string",
  "emailConfirmationSent": "string",
  "emailReminderSent": "string",
  "endDateTime": "string",
  "firstname": "string",
  "groupSize": 0,
  "id": "string",
  "ipAddress": "string",
  "lastModifiedBy": "string",
  "lastModifiedOn": "string",
  "lastname": "string",
  "latitude": "string",
  "location": "string",
  "locationId": "string",
  "longitude": "string",
  "name": "string",
  "notes": "string",
  "object": "string",
  "onlineBooking": true,
  "paymentStatus": 0,
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string",
  "rescheduledId": "string",
  "resourceEmail": "string",
  "resourceGroupId": "string",
  "resourceGroupName": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resources": [
    {
      "appointmentId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string"
    }
  ],
  "serviceAllocationId": "string",
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "smsConfirmationSent": "string",
  "smsReminderSent": "string",
  "startDateTime": "string",
  "status": "string",
  "stripeChargeId": "string",
  "stripeRefundId": "string",
  "time": 0,
  "timezone": 0,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

<h3 id="cancel-appointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentViewModel](#schemaappointmentviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Confirm Appointment

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/0/confirm \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /consumer/v1/appointments/{id}/confirm`

<p>Use this endpoint to <b>Confirm</b> an appointment. This updates the boolean confirmed field to TRUE. <b>NOTE:</b> If the appointment status is set to "RS", Reserved, it also updates the status of the appointment to "BK", Booked. </p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

<h3 id="confirm-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|appointment id to confirm|
|undo|query|boolean|false|Use this parameter to undo the confirmed status|

<h3 id="confirm-appointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Set NoShow Status

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/0/noshow \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`PUT /consumer/v1/appointments/{id}/noshow`

<p>Use this endpoint to change the status of an appointment from "BK", Booked to <b>"NS", NoShow</b>. This gives API consumers a way to internally track No Show appointments. It provides no added functionality in OnSched.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

> Body parameter

```json
{}
```

<h3 id="set-noshow-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|appointment id to mark as NoShow|
|body|body|[AppointmentNoShowModel](#schemaappointmentnoshowmodel)|false|none|

<h3 id="set-noshow-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Reschedule Appointment

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/string/reschedule \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endDateTime": "1970-01-01T00:00:00Z",
    "resourceId": "string",
    "resourceIds": "string",
    "serviceId": "string",
    "startDateTime": "1970-01-01T00:00:00Z",
    "travelAppointmentId": "string",
    "travelTimeMins": 0
  }'
```

`PUT /consumer/v1/appointments/{id}/reschedule`

<p>Use this endpoint to <b>Reschedule</b> an appointment booking. Only appointments in "BK", booked status, can be Rescheduled. Past dated appointments cannot be rescheduled. A valid <b>appointment id</b> is required.</p>
<p>The <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b>.</p>
<p>The serviceId is optional. If changing the <b>serviceId</b>, the new service id's duration must match the original service's duration.</p>
<p>The resourceId is optional. If changing the <b>resourceId</b>, verify the availability of the new resource prior to rescheduling.</p>
<p>
  <b>IMPORTANT:</b> Always run availability before rescheduling an appointment to verify the timeslot is open and available for the new time, service and/or resource requested. This is the only way to assure the slot is available. You cannot reschedule an appointment to a different location. If necessary, you should cancel and then book an appointment in the other location.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

> Body parameter

```json
{
  "endDateTime": "1970-01-01T00:00:00Z",
  "resourceId": "string",
  "resourceIds": "string",
  "serviceId": "string",
  "startDateTime": "1970-01-01T00:00:00Z",
  "travelAppointmentId": "string",
  "travelTimeMins": 0
}
```

<h3 id="reschedule-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|appointment id to reschedule|
|body|body|[AppointmentRescheduleModel](#schemaappointmentreschedulemodel)|false|none|
|» endDateTime|body|string(date-time)|false|none|
|» resourceId|body|string \| null|false|none|
|» resourceIds|body|string \| null|false|none|
|» serviceId|body|string \| null|false|none|
|» startDateTime|body|string(date-time)|false|none|
|» travelAppointmentId|body|string \| null|false|none|
|» travelTimeMins|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "auditTrail": [
    {
      "appointmentId": "string",
      "id": "string",
      "modificationType": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "notesAfter": "string",
      "notesBefore": "string",
      "statusAfter": "string",
      "statusBefore": "string"
    }
  ],
  "bookedBy": "string",
  "businessName": "string",
  "calendarId": "string",
  "confirmationNumber": "string",
  "confirmed": true,
  "createDate": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "customerId": "string",
  "customerMessage": "string",
  "customers": [
    {
      "appointmentId": "string",
      "customerId": "string"
    }
  ],
  "date": "string",
  "dateInternational": "string",
  "downloadIcsUrl": "string",
  "duration": 0,
  "email": "string",
  "emailConfirmationSent": "string",
  "emailReminderSent": "string",
  "endDateTime": "string",
  "firstname": "string",
  "groupSize": 0,
  "id": "string",
  "ipAddress": "string",
  "lastModifiedBy": "string",
  "lastModifiedOn": "string",
  "lastname": "string",
  "latitude": "string",
  "location": "string",
  "locationId": "string",
  "longitude": "string",
  "name": "string",
  "notes": "string",
  "object": "string",
  "onlineBooking": true,
  "paymentStatus": 0,
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string",
  "rescheduledId": "string",
  "resourceEmail": "string",
  "resourceGroupId": "string",
  "resourceGroupName": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resources": [
    {
      "appointmentId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string"
    }
  ],
  "serviceAllocationId": "string",
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "smsConfirmationSent": "string",
  "smsReminderSent": "string",
  "startDateTime": "string",
  "status": "string",
  "stripeChargeId": "string",
  "stripeRefundId": "string",
  "time": 0,
  "timezone": 0,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

<h3 id="reschedule-appointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentViewModel](#schemaappointmentviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Reserve Appointment

> Code samples

```bash
curl https://example.com/consumer/v1/appointments/string/reserve \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appointmentBookingFields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "customFields": {
      "field1": "string",
      "field10": "string",
      "field2": "string",
      "field3": "string",
      "field4": "string",
      "field5": "string",
      "field6": "string",
      "field7": "string",
      "field8": "string",
      "field9": "string"
    },
    "customerBookingFields": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "customerMessage": "string",
    "email": "string",
    "name": "string",
    "notes": "string",
    "phone": "string",
    "phoneExt": "string",
    "phoneType": "string"
  }'
```

`PUT /consumer/v1/appointments/{id}/reserve`

<p>Use this endpoint to <b>Reserve</b> an appointment. Only appointments with an "IN" status, Initial, can be reserved. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
<p>
  <b>NOTE: Reservations are different from Bookings as reservations are a two-step booking process that must be managed by the API consumer.</b> An appointment that is reserved is not completely booked until other business conditions have been met. For example, an appointment may be reserved if it is not yet assigned to a resource or until the customer or resource explicitly confirms it.</p>
<p>With reservations you have the ability to notify the customer of a reservation prior to officially booking and the workflow can be designed to indicate what conditions will need to be met in order to convert the reservation to a complete booking. A reservation converts to a complete booking when it is either Confirmed or Booked. </p>
<p>
  <b>IMPORTANT: A reserved appointment time will not be released, i.e., become available to others, until it is Cancelled. The booking timer is not used with reserved appointments.</b>
</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

> Body parameter

```json
{
  "appointmentBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "customerBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customerMessage": "string",
  "email": "string",
  "name": "string",
  "notes": "string",
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string"
}
```

<h3 id="reserve-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|appointment id to reserve|
|sendNotifications|query|boolean|false|none|
|body|body|[AppointmentReserveModel](#schemaappointmentreservemodel)|false|none|
|» appointmentBookingFields|body|[[BookingFieldItem](#schemabookingfielditem)]|false|none|
|» customFields|body|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|
|» customerBookingFields|body|[[BookingFieldItem](#schemabookingfielditem)]|false|none|
|» customerMessage|body|string \| null|false|none|
|» email|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» notes|body|string \| null|false|none|
|» phone|body|string \| null|false|none|
|» phoneExt|body|string \| null|false|none|
|» phoneType|body|string \| null|false|none|

<h3 id="reserve-appointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-consumer-api-availability">Availability</h1>

## Get Available Times

> Code samples

```bash
curl https://example.com/consumer/v1/availability/string/1970-01-01T00%3A00%3A00Z/1970-01-01T00%3A00%3A00Z \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}`

<p>
  <b>Choose your search criteria carefully. Availability is an expensive call.</b> If you search availability for all resources, you should only do so for a single date. If you search availability for multiple dates, you should only do so for a specific resource by specifying the optional resourceId parameter.</p>
<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
<p>A <b>resourceId</b> is optional, it is recommended if known at the time of availability call.</p>
<p>
  <b>timezoneName</b> is optional, it allows you to specify the IANA formatted name for the end user's timezone to view availability. e.g., <i>America/New_York</i>. <b>NOTE: This is the recommended approach for your implementation.</b>  The "tzOffset" parameter remains for backward compatibility.  For JavaScript, use moment.js in your client for ease of timezone detection and selection. For iOS, use the name property of the NSTimeZone returned from the localTimeZone method. For .NET, consider NodaTime or TimeZoneConverter via NuGet. </p>
<p>
  <b>duration</b> should only be populated if you allow the end user to select a duration, otherwise the service's duration will be used.</p>
<p>
  <b>startTime</b> and <b>endTime</b> are optional and are specified in <b>military time e.g., 800 = 8:00am, 2230 = 10:30pm</b>. Note: You will only see availability within the boundary of your business location start and end times.</p>
<p>
  <b>dayAvailability</b> will return day level availability for the number of days requested from the start date. See <i>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days</i> for details.</p>
<p>
  <b>firstDayAvailable</b> only works with day availability. If set to true it will look for the first day available within the range specified by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month. Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.</p>
<p>
  <b>tzOffset</b> allows you to pass in the timezone offset for the end user's timezone of choice, e.g., (-240) for EST. If you use this option, your application should be timezone aware. The requested timezone is specified as an offset (plus or minus) from GMT time.</p>
<p>Availability can be complex. For further troubleshooting refer to the: <i><b>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable</b></i> endpoint. This endpoint will show you all unavailable times for a given date range. Available times are created from any unblocked time periods. For more information: <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a></p>

<h3 id="get-available-times-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Service Id for availability search|
|startDate|path|string(date-time)|true|Format YYYY-MM-DD: Start Date for availability search|
|endDate|path|string(date-time)|true|Format YYYY-MM-DD: End Date for availability search|
|startTime|query|integer(int32)|false|Format Military Time Start Time for availability search. Defaults to Business Hours Start|
|endTime|query|integer(int32)|false|Format Military Time. End Time for availability search. Defaults to Business Hours End|
|locationId|query|string|false|Id of business location, defaults to primary business location|
|resourceId|query|string|false|Resource Id for availability search|
|resourceGroupId|query|string|false|Resource Group Id for availability search|
|resourceIds|query|string|false|Comma separated Resource Id's for availability search|
|roundRobin|query|string|false|Round robin choice 0=none, 1=random, 2=balanced|
|duration|query|integer(int32)|false|Duration of the service if different from default|
|interval|query|integer(int32)|false|Booking Interval if different than the default|
|timezoneName|query|string|false|Requested IANA timezone Id to view availability|
|tzOffset|query|integer(int32)|false|Request timezone offset to view availability|
|destination|query|string|false|For calculating travel based availability, requires distance scope|
|dayAvailabilityStartDate|query|string(date-time)|false|Format YYYY-DD-YY: Start date for day availability, defaults to startDate|
|dayAvailability|query|integer(int32)|false|Number of days of day availability to return|
|firstDayAvailable|query|boolean|false|Return available times for the first available day|

> Example responses

> 200 Response

```json
{
  "availableDays": [
    {
      "available": true,
      "bookingCount": 0,
      "bookingLimit": 0,
      "closed": true,
      "date": "string",
      "object": "string",
      "reason": "string",
      "reasonCode": 0
    }
  ],
  "availableTimes": [
    {
      "allowableBookings": 0,
      "allowableCapacity": 0,
      "availableBookings": 0,
      "availableCapacity": 0,
      "date": "string",
      "displayTime": "string",
      "duration": 0,
      "endDateTime": "string",
      "resourceId": "string",
      "startDateTime": "string",
      "time": 0,
      "travelAppointmentId": "string",
      "travelTimeMins": 0
    }
  ],
  "businessName": "string",
  "calendarId": "string",
  "calendarResourceGroupId": "string",
  "endDate": "string",
  "firstAvailableDate": "string",
  "locationId": "string",
  "object": "string",
  "resourceDescription": "string",
  "resourceId": "string",
  "resourceIds": "string",
  "resourceName": "string",
  "serviceDescription": "string",
  "serviceDuration": 0,
  "serviceId": "string",
  "serviceName": "string",
  "startDate": "string",
  "timezoneName": "string",
  "tzRequested": 0,
  "url": "string"
}
```

<h3 id="get-available-times-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AvailabilityViewModel](#schemaavailabilityviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Available Days

> Code samples

```bash
curl https://example.com/consumer/v1/availability/string/1970-01-01T00%3A00%3A00Z/1970-01-01T00%3A00%3A00Z/days \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days`

<p>This endpoint will return <b>Day Level Availability</b> for the range of dates requested. For example, if the business is closed, or there is a public holiday this endpoint will return that the "Day is unavailable".</p>
<p>Day Availability is a high-level check for Holidays and Open/Available hours of a location, service and/or resource and should be used to restrict your choices of days available in your application to improve usability and performance.</p>
<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
<p>The locationId is optional, however if not supplied it defaults to the Primary Business Location for open/closed hours information. It is recommended you always provide the locationId.</p>
<p>A <b>resourceId</b> is optional. If used the available days will be return day availability for the resource specified.</p>
<p>The <b>tzOffset</b> parameter should be used if the appointment requester, the end user, is in a different timezone than the location or resource.</p>

<h3 id="get-available-days-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Service Id for day availability search|
|startDate|path|string(date-time)|true|Format YYYY-MM-DD: Start Date for availability search|
|endDate|path|string(date-time)|true|Format YYYY-MM-DD: End Date for availability search|
|locationId|query|string|false|Id of business location, defaults to primary business location|
|resourceId|query|string|false|Resource Id to filter on|
|tzOffset|query|integer(int32)|false|Timezone offset to view availability for|

> Example responses

> 200 Response

```json
{
  "availableDays": [
    {
      "available": true,
      "bookingCount": 0,
      "bookingLimit": 0,
      "closed": true,
      "date": "string",
      "object": "string",
      "reason": "string",
      "reasonCode": 0
    }
  ],
  "object": "string",
  "resourceDescription": "string",
  "resourceId": "string",
  "resourceName": "string",
  "serviceDescription": "string",
  "serviceId": "string",
  "serviceName": "string",
  "tzRequested": 0,
  "url": "string"
}
```

<h3 id="get-available-days-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AvailabilityDayViewModel](#schemaavailabilitydayviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Unavailable Times

> Code samples

```bash
curl https://example.com/consumer/v1/availability/string/1970-01-01T00%3A00%3A00Z/1970-01-01T00%3A00%3A00Z/unavailable \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable`

<p>This endpoint is used to show <b>Unavailable</b> times and provides valuable information as to why a time slot is unavailable. If you question your availability results, populate the same parameters to this endpoint to find out why.</p>
<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
<p>Location hours, holidays, services, resources, blocks, allocations, and appointments are just some of variables that may cause time slots to become unavailable. Use this endpoint to understand why you don't see availability.</p>

<h3 id="get-unavailable-times-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|Service Id for availability search|
|startDate|path|string(date-time)|true|Format YYYY-MM-DD: Start Date for unavailable time search|
|endDate|path|string(date-time)|true|Format YYYY-MM-DD: End Date for unavailable time search|
|locationId|query|string|false|Id of business location, defaults to primary business location|
|resourceId|query|string|false|Resource Id to filter on|
|duration|query|integer(int32)|false|Duration of the service if different from default|
|tzOffset|query|integer(int32)|false|Request timezone offset to view unavailable times|
|skipTimePastUnavailability|query|boolean|false|Set as true to remove Time Past (TP) blocks in the response|

> Example responses

> 200 Response

```json
{
  "object": "string",
  "unavailableTimes": [
    {
      "calendarId": "string",
      "date": "string",
      "endDateTime": "string",
      "entityId": 0,
      "entityType": "string",
      "fromTime": 0,
      "locationId": "string",
      "objectName": "string",
      "reason": "string",
      "reasonCode": "string",
      "resourceId": "string",
      "resourceName": "string",
      "serviceId": "string",
      "serviceName": "string",
      "startDateTime": "string",
      "toTime": 0,
      "tzOffset": 0
    }
  ],
  "url": "string"
}
```

<h3 id="get-unavailable-times-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnavailableTimeListViewModel](#schemaunavailabletimelistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-consumer-api-customers">Customers</h1>

## List Customers

> Code samples

```bash
curl https://example.com/consumer/v1/customers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/customers`

<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-customers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|groupId|query|string|false|Filter by groupId|
|email|query|string|false|Filter by email address|
|lastname|query|string|false|Filter by lastname|
|deleted|query|boolean|false|Filter by deleted status|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "address": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "country": "string",
        "postalCode": "string",
        "state": "string"
      },
      "birthdate": "string",
      "businessName": "string",
      "companyName": "string",
      "contact": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "conferenceInfo": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string",
        "skypeUsername": "string"
      },
      "createdBy": "string",
      "createdOn": "string",
      "customFields": {
        "property1": {
          "name": "string",
          "value": "string"
        },
        "property2": {
          "name": "string",
          "value": "string"
        }
      },
      "deletedStatus": true,
      "deletedTime": "string",
      "disabled": true,
      "email": "string",
      "emailInfo": true,
      "emailPromotion": true,
      "firstname": "string",
      "gender": "string",
      "groupId": "string",
      "id": "string",
      "inviteEmailSent": "string",
      "lastVisitDate": "string",
      "lastname": "string",
      "latitude": "string",
      "locationId": "string",
      "longitude": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "name": "string",
      "notificationType": "string",
      "object": "string",
      "registeredBy": "string",
      "registrationDate": "string",
      "resourceId": "string",
      "stripeCustomerId": "string",
      "subscriptionId": "string",
      "verificationDate": "string",
      "verifiedBy": "string",
      "welcomeEmailSent": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-customers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomerListViewModel](#schemacustomerlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Customer

> Code samples

```bash
curl https://example.com/consumer/v1/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "state": "string"
    },
    "contact": {
      "businessPhone": "string",
      "businessPhoneExt": "string",
      "conferenceInfo": "string",
      "homePhone": "string",
      "mobilePhone": "string",
      "preferredPhoneType": "string",
      "skypeUsername": "string"
    },
    "customFields": {
      "field1": "string",
      "field10": "string",
      "field2": "string",
      "field3": "string",
      "field4": "string",
      "field5": "string",
      "field6": "string",
      "field7": "string",
      "field8": "string",
      "field9": "string"
    },
    "email": "string",
    "firstname": "string",
    "lastname": "string",
    "locationId": "string",
    "name": "string",
    "notificationType": "string",
    "sendLeadNotification": true,
    "stripeCustomerId": "string",
    "type": 0
  }'
```

`POST /consumer/v1/customers`

<p>Use this endpoint to <b>Create</b> a new Customer. A customer object is automatically created with the first appointment booking if it doesn't already exist. If not specified, the business location id defaults to the primary business location.</p>
<p>Required Fields: <b>Email</b> and <b>Name</b> or <b>First and Lastname</b> depending on customer type. Type 0 = Person, Type 1 = Business. For type 0, the firstname and lastname fields are used. For type 1, the Name field is used, and the name field is also used to populate the lastname.</p>

> Body parameter

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "contact": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "conferenceInfo": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "preferredPhoneType": "string",
    "skypeUsername": "string"
  },
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "email": "string",
  "firstname": "string",
  "lastname": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": "string",
  "sendLeadNotification": true,
  "stripeCustomerId": "string",
  "type": 0
}
```

<h3 id="create-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomerInputModel](#schemacustomerinputmodel)|false|none|
|» address|body|[AddressInputModel](#schemaaddressinputmodel)|false|none|
|» contact|body|[ContactInputModel](#schemacontactinputmodel)|false|none|
|» customFields|body|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|
|» email|body|string \| null|false|none|
|» firstname|body|string \| null|false|none|
|» lastname|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» notificationType|body|string \| null|false|0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS|
|» sendLeadNotification|body|boolean|false|none|
|» stripeCustomerId|body|string \| null|false|none|
|» type|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "birthdate": "string",
  "businessName": "string",
  "companyName": "string",
  "contact": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "conferenceInfo": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string",
    "skypeUsername": "string"
  },
  "createdBy": "string",
  "createdOn": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "deletedStatus": true,
  "deletedTime": "string",
  "disabled": true,
  "email": "string",
  "emailInfo": true,
  "emailPromotion": true,
  "firstname": "string",
  "gender": "string",
  "groupId": "string",
  "id": "string",
  "inviteEmailSent": "string",
  "lastVisitDate": "string",
  "lastname": "string",
  "latitude": "string",
  "locationId": "string",
  "longitude": "string",
  "modifiedBy": "string",
  "modifiedOn": "string",
  "name": "string",
  "notificationType": "string",
  "object": "string",
  "registeredBy": "string",
  "registrationDate": "string",
  "resourceId": "string",
  "stripeCustomerId": "string",
  "subscriptionId": "string",
  "verificationDate": "string",
  "verifiedBy": "string",
  "welcomeEmailSent": "string"
}
```

<h3 id="create-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomerViewModel](#schemacustomerviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Customer Booking Fields

> Code samples

```bash
curl https://example.com/consumer/v1/customers/bookingfields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/customers/bookingfields`

<p>Use this endpoint to return <b>Customer Booking Fields</b>. Customer booking fields are stored with each customer object. They are used when the information collected during the booking is for a particular customer. Customer Booking Fields include any custom customer fields you define and want to capture with the Booking.</p>

<h3 id="get-customer-booking-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|

> Example responses

> 200 Response

```json
{
  "bookingFields": [
    {
      "businessId": "string",
      "companyId": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "object": "string",
  "total": 0
}
```

<h3 id="get-customer-booking-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BookingFieldListViewModel](#schemabookingfieldlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Country Codes

> Code samples

```bash
curl https://example.com/consumer/v1/customers/countries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/customers/countries`

<p>Use this endpoint to return a <b>List of Countries with their associated Country Code</b>. Country codes are based on the 2-character ANSI standard. If your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "name": "string",
    "object": "string"
  }
]
```

<h3 id="list-country-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-country-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CountryViewModel](#schemacountryviewmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Customer Custom Fields

> Code samples

```bash
curl https://example.com/consumer/v1/customers/customfields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/customers/customfields`

<p>Use this endpoint to return <b>Customer Custom Fields</b>. Customer custom fields are stored with the customer object. They are used when the information collected during the booking is specific to a particular customer.</p>

<h3 id="get-customer-custom-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|leadQuestions|query|boolean|false|A true/false indicator to filter on custom fields used for lead questions|

> Example responses

> 200 Response

```json
{
  "customFields": [
    {
      "fieldKey": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldPublic": true,
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "object": "string",
  "total": 0
}
```

<h3 id="get-customer-custom-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomFieldDefinitionListViewModel](#schemacustomfielddefinitionlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Country States

> Code samples

```bash
curl https://example.com/consumer/v1/customers/states \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/customers/states`

<p>Use this endpoint to return a <b>List of Countries with their associated State Codes</b>. Supply a country code to filter results further. If states for your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>

<h3 id="list-country-states-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "country": "string",
    "countryName": "string",
    "name": "string",
    "object": "string"
  }
]
```

<h3 id="list-country-states-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-country-states-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[StateViewModel](#schemastateviewmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Customer

> Code samples

```bash
curl https://example.com/consumer/v1/customers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/customers/{id}`

<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /consumer/v1/customers</i> endpoint.</p>

<h3 id="get-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of customer object|

> Example responses

> 200 Response

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "birthdate": "string",
  "businessName": "string",
  "companyName": "string",
  "contact": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "conferenceInfo": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string",
    "skypeUsername": "string"
  },
  "createdBy": "string",
  "createdOn": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "deletedStatus": true,
  "deletedTime": "string",
  "disabled": true,
  "email": "string",
  "emailInfo": true,
  "emailPromotion": true,
  "firstname": "string",
  "gender": "string",
  "groupId": "string",
  "id": "string",
  "inviteEmailSent": "string",
  "lastVisitDate": "string",
  "lastname": "string",
  "latitude": "string",
  "locationId": "string",
  "longitude": "string",
  "modifiedBy": "string",
  "modifiedOn": "string",
  "name": "string",
  "notificationType": "string",
  "object": "string",
  "registeredBy": "string",
  "registrationDate": "string",
  "resourceId": "string",
  "stripeCustomerId": "string",
  "subscriptionId": "string",
  "verificationDate": "string",
  "verifiedBy": "string",
  "welcomeEmailSent": "string"
}
```

<h3 id="get-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomerViewModel](#schemacustomerviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Customer

> Code samples

```bash
curl https://example.com/consumer/v1/customers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "state": "string"
    },
    "contact": {
      "businessPhone": "string",
      "businessPhoneExt": "string",
      "conferenceInfo": "string",
      "homePhone": "string",
      "mobilePhone": "string",
      "preferredPhoneType": "string",
      "skypeUsername": "string"
    },
    "customFields": {
      "field1": "string",
      "field10": "string",
      "field2": "string",
      "field3": "string",
      "field4": "string",
      "field5": "string",
      "field6": "string",
      "field7": "string",
      "field8": "string",
      "field9": "string"
    },
    "email": "string",
    "firstname": "string",
    "lastname": "string",
    "locationId": "string",
    "name": "string",
    "notificationType": "string",
    "stripeCustomerId": "string",
    "type": 0
  }'
```

`PUT /consumer/v1/customers/{id}`

<p>Use this endpoint to <b>Update</b> a Customer object. A valid <b>customer id</b> is required. Note: Blank fields are not changed.</p>

> Body parameter

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "contact": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "conferenceInfo": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "preferredPhoneType": "string",
    "skypeUsername": "string"
  },
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "email": "string",
  "firstname": "string",
  "lastname": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": "string",
  "stripeCustomerId": "string",
  "type": 0
}
```

<h3 id="update-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of customer object|
|body|body|[CustomerUpdateModel](#schemacustomerupdatemodel)|false|none|
|» address|body|[AddressUpdateModel](#schemaaddressupdatemodel)|false|none|
|» contact|body|[ContactUpdateModel](#schemacontactupdatemodel)|false|none|
|» customFields|body|[CustomFieldUpdateModel](#schemacustomfieldupdatemodel)|false|none|
|» email|body|string \| null|false|none|
|» firstname|body|string \| null|false|none|
|» lastname|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» notificationType|body|string \| null|false|0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS|
|» stripeCustomerId|body|string \| null|false|none|
|» type|body|integer(int32) \| null|false|none|

<h3 id="update-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Customer

> Code samples

```bash
curl https://example.com/consumer/v1/customers/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /consumer/v1/customers/{id}`

<p>Use this endpoint to permanently <b>Delete</b> a Customer object. A valid <b>customer id</b> is required.</p>

<h3 id="delete-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of customer object|

<h3 id="delete-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-consumer-api-locations">Locations</h1>

## List Locations

> Code samples

```bash
curl https://example.com/consumer/v1/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/locations`

<p>Use this endpoint to return a <b>List of Business Locations</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20 and maximum is 100. Use the other query parameters to filter the results further. </p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

<h3 id="list-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Location name (full or partial)|
|nearestTo|query|string|false|Search by distance nearest Geocoords, City, Postal/Zip Code|
|proximity|query|integer(int32)|false|Maximum distance to display|
|units|query|string|false|Distance either imperial(miles), metric(kilometers)|
|serviceId|query|string|false|Locations that offer this service|
|friendlyId|query|string|false|Frienldy Id of location|
|regionId|query|string|false|Locations within a specific region|
|ignorePrimary|query|boolean|false|Don't include the Primary Location|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit, default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "address": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "country": "string",
        "postalCode": "string",
        "state": "string"
      },
      "adminEmail": "string",
      "adminName": "string",
      "appointmentReminders": {
        "emailFirstReminder": 0,
        "emailFirstReminderInterval": 0,
        "emailSecondReminder": 0,
        "emailSecondReminderInterval": 0,
        "smsFirstReminder": 0,
        "smsFirstReminderInterval": 0,
        "smsSecondReminder": 0,
        "smsSecondReminderInterval": 0
      },
      "businessHolidays": [
        {
          "businessClosed": true,
          "holidayName": "string",
          "id": "string",
          "publicHolidayId": 0
        }
      ],
      "businessHours": {
        "fri": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "mon": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "sat": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "sun": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "thu": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "tue": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "wed": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        }
      },
      "companyId": "string",
      "companyName": "string",
      "defaults": {
        "autoUpdateCustomer": true,
        "businessNotification": true,
        "customerCity": true,
        "customerState": true,
        "emailInfo": true,
        "enableUtcTimezone": true,
        "object": "string"
      },
      "email": "string",
      "fax": "string",
      "friendlyId": "string",
      "id": "string",
      "imageUrl": "string",
      "latitude": 0,
      "logo": "string",
      "longitude": 0,
      "name": "string",
      "object": "string",
      "phone": "string",
      "primaryBusiness": true,
      "primaryCalendarId": "string",
      "regionId": "string",
      "services": [
        {
          "id": 0,
          "object": "string",
          "serviceId": 0,
          "serviceName": "string"
        }
      ],
      "settings": {
        "availabilityForm": 0,
        "bookAheadUnit": 0,
        "bookAheadValue": 0,
        "bookInAdvance": 0,
        "bookWithAccount": true,
        "bookingConfirmationMessage": "string",
        "bookingMessage": "string",
        "bookingPolicy": "string",
        "bookingTimerMins": 0,
        "businessId": "string",
        "companyId": "string",
        "customerBookingsPerDay": 0,
        "customerVerification": true,
        "defaultService": true,
        "defaultToCustomerTimezone": true,
        "disableAuthorization": true,
        "enableWorldTimezones": true,
        "enabled": true,
        "familyMembersEnabled": true,
        "firstAvailable": true,
        "formFlow": 0,
        "hideBreadCrumbNav": true,
        "hideContinueBooking": true,
        "hideLocationNav": true,
        "hideNavBar": true,
        "hideServiceGroupsNav": true,
        "hideServicesNav": true,
        "id": 0,
        "lateCancelAction": 0,
        "lateCancelHours": 0,
        "lateRescheduleAction": 0,
        "lateRescheduleHours": 0,
        "liveMode": true,
        "locationId": "string",
        "object": "string",
        "resourceAnyLabel": "string",
        "resourceLabel": "string",
        "resourceSelection": true,
        "returnToAvailability": true,
        "returnToService": true,
        "serviceLabel": "string",
        "showBusinessLogo": true,
        "showOnSchedLogo": true,
        "showServiceGroups": true
      },
      "timezoneIana": "string",
      "timezoneId": "string",
      "timezoneOffset": 0,
      "travel": {
        "distance": "string",
        "proximity": "string",
        "startAddress": "string",
        "startLat": "string",
        "startLon": "string",
        "units": "string"
      },
      "website": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationListViewModel](#schemalocationlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Location

> Code samples

```bash
curl https://example.com/consumer/v1/locations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/locations/{id}`

<p>Use this endpoint to return a <b>Location</b> object. A valid business <b>location id</b> is required. Find all location id's by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

<h3 id="get-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location|

> Example responses

> 200 Response

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "adminEmail": "string",
  "adminName": "string",
  "appointmentReminders": {
    "emailFirstReminder": 0,
    "emailFirstReminderInterval": 0,
    "emailSecondReminder": 0,
    "emailSecondReminderInterval": 0,
    "smsFirstReminder": 0,
    "smsFirstReminderInterval": 0,
    "smsSecondReminder": 0,
    "smsSecondReminderInterval": 0
  },
  "businessHolidays": [
    {
      "businessClosed": true,
      "holidayName": "string",
      "id": "string",
      "publicHolidayId": 0
    }
  ],
  "businessHours": {
    "fri": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "mon": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "sat": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "sun": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "thu": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "tue": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "wed": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    }
  },
  "companyId": "string",
  "companyName": "string",
  "defaults": {
    "autoUpdateCustomer": true,
    "businessNotification": true,
    "customerCity": true,
    "customerState": true,
    "emailInfo": true,
    "enableUtcTimezone": true,
    "object": "string"
  },
  "email": "string",
  "fax": "string",
  "friendlyId": "string",
  "id": "string",
  "imageUrl": "string",
  "latitude": 0,
  "logo": "string",
  "longitude": 0,
  "name": "string",
  "object": "string",
  "phone": "string",
  "primaryBusiness": true,
  "primaryCalendarId": "string",
  "regionId": "string",
  "services": [
    {
      "id": 0,
      "object": "string",
      "serviceId": 0,
      "serviceName": "string"
    }
  ],
  "settings": {
    "availabilityForm": 0,
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0,
    "bookWithAccount": true,
    "bookingConfirmationMessage": "string",
    "bookingMessage": "string",
    "bookingPolicy": "string",
    "bookingTimerMins": 0,
    "businessId": "string",
    "companyId": "string",
    "customerBookingsPerDay": 0,
    "customerVerification": true,
    "defaultService": true,
    "defaultToCustomerTimezone": true,
    "disableAuthorization": true,
    "enableWorldTimezones": true,
    "enabled": true,
    "familyMembersEnabled": true,
    "firstAvailable": true,
    "formFlow": 0,
    "hideBreadCrumbNav": true,
    "hideContinueBooking": true,
    "hideLocationNav": true,
    "hideNavBar": true,
    "hideServiceGroupsNav": true,
    "hideServicesNav": true,
    "id": 0,
    "lateCancelAction": 0,
    "lateCancelHours": 0,
    "lateRescheduleAction": 0,
    "lateRescheduleHours": 0,
    "liveMode": true,
    "locationId": "string",
    "object": "string",
    "resourceAnyLabel": "string",
    "resourceLabel": "string",
    "resourceSelection": true,
    "returnToAvailability": true,
    "returnToService": true,
    "serviceLabel": "string",
    "showBusinessLogo": true,
    "showOnSchedLogo": true,
    "showServiceGroups": true
  },
  "timezoneIana": "string",
  "timezoneId": "string",
  "timezoneOffset": 0,
  "travel": {
    "distance": "string",
    "proximity": "string",
    "startAddress": "string",
    "startLat": "string",
    "startLon": "string",
    "units": "string"
  },
  "website": "string"
}
```

<h3 id="get-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-consumer-api-resourcegroups">ResourceGroups</h1>

## List Resource Groups

> Code samples

```bash
curl https://example.com/consumer/v1/resourcegroups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/resourcegroups`

<p>Use this endpoint to return a list of <b>Resource Groups</b> for the requested location. If not specified, the business location defaults to the primary business location.</p>

<h3 id="list-resource-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|deleted|query|boolean|false|Filter results by deleted status|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "bookingNotification": 0,
      "deletedStatus": true,
      "deletedTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "email": "string",
      "id": "string",
      "locationId": "string",
      "name": "string",
      "object": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-resource-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceGroupListViewModel](#schemaresourcegrouplistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Resource Group

> Code samples

```bash
curl https://example.com/consumer/v1/resourcegroups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/resourcegroups/{id}`

<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET /consumer/v1/resourceGroups</i> endpoint.</p>

<h3 id="get-resource-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of the resourceGroup object|

> Example responses

> 200 Response

```json
{
  "bookingNotification": 0,
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "email": "string",
  "id": "string",
  "locationId": "string",
  "name": "string",
  "object": "string"
}
```

<h3 id="get-resource-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceGroupViewModel](#schemaresourcegroupviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-consumer-api-resources">Resources</h1>

## List Resources

> Code samples

```bash
curl https://example.com/consumer/v1/resources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/resources`

<p>Use this endpoint to return a <b>List of Resources</b> associated with a business location. If not specified, the business location defaults to the primary business location. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|resourceGroupId|query|integer(int32)|false|Filter by groupId|
|email|query|string|false|Filter by email address|
|name|query|string|false|Search by name, supports Partial name search|
|sortOrder|query|string|false|Specify sort order of response|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "address": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "country": "string",
        "postalCode": "string",
        "state": "string"
      },
      "availability": {
        "fri": {
          "endTime": 0,
          "startTime": 0
        },
        "mon": {
          "endTime": 0,
          "startTime": 0
        },
        "sat": {
          "endTime": 0,
          "startTime": 0
        },
        "sun": {
          "endTime": 0,
          "startTime": 0
        },
        "thu": {
          "endTime": 0,
          "startTime": 0
        },
        "tue": {
          "endTime": 0,
          "startTime": 0
        },
        "wed": {
          "endTime": 0,
          "startTime": 0
        }
      },
      "bioLink": "string",
      "bookingNotification": 0,
      "calendarAvailability": 0,
      "contact": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "conferenceInfo": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string",
        "skypeUsername": "string"
      },
      "customFields": {
        "field1": "string",
        "field10": "string",
        "field2": "string",
        "field3": "string",
        "field4": "string",
        "field5": "string",
        "field6": "string",
        "field7": "string",
        "field8": "string",
        "field9": "string"
      },
      "deletedStatus": true,
      "deletedTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "effectiveDate": "1970-01-01T00:00:00Z",
      "email": "string",
      "gender": "string",
      "googleCalendarId": "string",
      "groupId": "string",
      "hourly": 0,
      "id": "string",
      "ignoreBusinessHours": true,
      "imageUrl": "string",
      "locationId": "string",
      "name": "string",
      "notificationType": 0,
      "object": "string",
      "outlookCalendarId": "string",
      "recurringAvailability": true,
      "services": [
        {
          "object": "string",
          "resourceId": 0,
          "resourceName": "string",
          "serviceId": 0,
          "serviceName": "string"
        }
      ],
      "skypeName": "string",
      "sortKey": 0,
      "timezoneIana": "string",
      "timezoneId": "string",
      "timezoneOffset": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|resource object|[ResourceListViewModel](#schemaresourcelistviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|404|Not Found|Resource was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Resource

> Code samples

```bash
curl https://example.com/consumer/v1/resources/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/resources/{id}`

<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the <i>GET consumer/v1/resources</i> endpoint. </p>

<h3 id="get-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|id of resource object|

> Example responses

> 200 Response

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "availability": {
    "fri": {
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "endTime": 0,
      "startTime": 0
    }
  },
  "bioLink": "string",
  "bookingNotification": 0,
  "calendarAvailability": 0,
  "contact": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "conferenceInfo": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string",
    "skypeUsername": "string"
  },
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "effectiveDate": "1970-01-01T00:00:00Z",
  "email": "string",
  "gender": "string",
  "googleCalendarId": "string",
  "groupId": "string",
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "outlookCalendarId": "string",
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
      "resourceId": 0,
      "resourceName": "string",
      "serviceId": 0,
      "serviceName": "string"
    }
  ],
  "skypeName": "string",
  "sortKey": 0,
  "timezoneIana": "string",
  "timezoneId": "string",
  "timezoneOffset": 0
}
```

<h3 id="get-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Resource Linked Services

> Code samples

```bash
curl https://example.com/consumer/v1/resources/0/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/resources/{id}/services`

<p>Use this endpoint to get a <b>List of Linked Services</b> associated with the resource requested. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, the maximum limit is 100. Use the other query parameters to filter the results further.</p>
<p>Resource linked services are used to explicitly define the services that can be booked for a specified resource. By default, all services are bookable for any resource. For more information: <a href="https://docs.onsched.com/docs/linked-services">Linked Services Overview</a></p>

<h3 id="get-resource-linked-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|id of resource object|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "object": "string",
      "resourceId": 0,
      "resourceName": "string",
      "serviceId": 0,
      "serviceName": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="get-resource-linked-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list of resource services|[ResourceServiceListViewModel](#schemaresourceservicelistviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|401|Unauthorized|Unauthorized request|None|
|404|Not Found|Resource was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-consumer-api-servicegroups">ServiceGroups</h1>

## List Service Groups

> Code samples

```bash
curl https://example.com/consumer/v1/servicegroups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/servicegroups`

<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>

<h3 id="list-service-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "companyId": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "isDeleted": true,
      "locationId": "string",
      "name": "string",
      "object": "string",
      "type": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-service-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceGroupListViewModel](#schemaservicegrouplistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Service Group

> Code samples

```bash
curl https://example.com/consumer/v1/servicegroups/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/servicegroups/{id}`

<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find serviceGroup id's by using the <i>GET /consumer/v1/serviceGroups</i> endpoint.</p>

<h3 id="get-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|id of the serviceGroup object|

> Example responses

> 200 Response

```json
{
  "companyId": "string",
  "description": "string",
  "id": "string",
  "imageUrl": "string",
  "isDeleted": true,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "type": 0
}
```

<h3 id="get-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceGroupViewModel](#schemaservicegroupviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-consumer-api-services">Services</h1>

## List Services

> Code samples

```bash
curl https://example.com/consumer/v1/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/services`

<p>Use this endpoint to <b>List Services</b> available at your business location and/or company. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|serviceGroupId|query|integer(int32)|false|Filter by groupId|
|defaultService|query|boolean|false|Filter by default service, default is false|
|allLocations|query|boolean|false|Search All Locations, default is false|
|scope|query|[ServicesScope](#schemaservicesscope)|false|Filter by scope, Company, Location or All, default is All|
|name|query|string|false|Filter by Name, supports Partial name search|
|serviceId|query|string|false|Filter by ServiceId, using this parameter would ignore all other parameters|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|
|sortOrder|query|[ServiceSortOrder](#schemaservicesortorder)|false|Sort results using Natural Sort or Sorted alphabetically by Service Names, default is natural|
|sortDescending|query|boolean|false|Sort results in Descending Order, default true|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|company|
|scope|location|
|scope|all|
|sortOrder|natural|
|sortOrder|name|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "availability": {
        "fri": {
          "endTime": 0,
          "startTime": 0
        },
        "mon": {
          "endTime": 0,
          "startTime": 0
        },
        "sat": {
          "endTime": 0,
          "startTime": 0
        },
        "sun": {
          "endTime": 0,
          "startTime": 0
        },
        "thu": {
          "endTime": 0,
          "startTime": 0
        },
        "tue": {
          "endTime": 0,
          "startTime": 0
        },
        "wed": {
          "endTime": 0,
          "startTime": 0
        }
      },
      "bookAheadUnit": 0,
      "bookAheadValue": 0,
      "bookInAdvance": 0,
      "bookingInterval": 0,
      "bookingLimit": 0,
      "calendarId": "string",
      "calendarResourceGroupId": "string",
      "cancellationFeeAmount": 0,
      "cancellationFeeTaxable": true,
      "companyId": "string",
      "consumerPadding": true,
      "customFields": {
        "field1": "string",
        "field10": "string",
        "field2": "string",
        "field3": "string",
        "field4": "string",
        "field5": "string",
        "field6": "string",
        "field7": "string",
        "field8": "string",
        "field9": "string"
      },
      "dailyBookingLimitCount": 0,
      "dailyBookingLimitMinutes": 0,
      "defaultService": true,
      "description": "string",
      "duration": 0,
      "durationInterval": 0,
      "durationMax": 0,
      "durationMin": 0,
      "durationSelect": true,
      "feeAmount": 0,
      "feeTaxable": true,
      "id": "string",
      "imageUrl": "string",
      "locationId": "string",
      "maxBookingLimit": 0,
      "maxCapacity": 0,
      "maxGroupSize": 0,
      "maxResourceBookingLimit": 0,
      "mediaPageUrl": "string",
      "name": "string",
      "nonRefundable": true,
      "object": "string",
      "padding": 0,
      "roundRobin": 0,
      "serviceGroupId": 0,
      "serviceGroupName": "string",
      "showOnline": true,
      "type": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceListViewModel](#schemaservicelistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Service Allocation

> Code samples

```bash
curl https://example.com/consumer/v1/services/allocations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/services/allocations/{id}`

<p>Use this endpoint to return a <b>Service Allocation</b> object. A valid <b>serviceAllocation id</b> is required. Find service allocation id's by using the <i>GET/consumer​/v1​/services​/{id}​/allocations</i> endpoint.</p>

<h3 id="get-service-allocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of serviceAllocation object|

> Example responses

> 200 Response

```json
{
  "bookingCount": 0,
  "bookingLimit": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": "string",
  "locationId": "string",
  "object": "string",
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": "string",
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "resourceAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "resourceDescription": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resourcePhone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "serviceDescription": "string",
  "serviceDuration": 0,
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "startDate": "string",
  "startTime": 0,
  "timezoneName": "string",
  "timezoneOffset": 0
}
```

<h3 id="get-service-allocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceAllocationViewModel](#schemaserviceallocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Service

> Code samples

```bash
curl https://example.com/consumer/v1/services/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/services/{id}`

<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /consumer/v1/services</i> endpoint.</p>

<h3 id="get-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|id of service object|

> Example responses

> 200 Response

```json
{
  "availability": {
    "fri": {
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "endTime": 0,
      "startTime": 0
    }
  },
  "bookAheadUnit": 0,
  "bookAheadValue": 0,
  "bookInAdvance": 0,
  "bookingInterval": 0,
  "bookingLimit": 0,
  "calendarId": "string",
  "calendarResourceGroupId": "string",
  "cancellationFeeAmount": 0,
  "cancellationFeeTaxable": true,
  "companyId": "string",
  "consumerPadding": true,
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "dailyBookingLimitCount": 0,
  "dailyBookingLimitMinutes": 0,
  "defaultService": true,
  "description": "string",
  "duration": 0,
  "durationInterval": 0,
  "durationMax": 0,
  "durationMin": 0,
  "durationSelect": true,
  "feeAmount": 0,
  "feeTaxable": true,
  "id": "string",
  "imageUrl": "string",
  "locationId": "string",
  "maxBookingLimit": 0,
  "maxCapacity": 0,
  "maxGroupSize": 0,
  "maxResourceBookingLimit": 0,
  "mediaPageUrl": "string",
  "name": "string",
  "nonRefundable": true,
  "object": "string",
  "padding": 0,
  "roundRobin": 0,
  "serviceGroupId": 0,
  "serviceGroupName": "string",
  "showOnline": true,
  "type": "string"
}
```

<h3 id="get-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceViewModel](#schemaserviceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Service Allocations

> Code samples

```bash
curl https://example.com/consumer/v1/services/string/allocations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/services/{id}/allocations`

<p>Use this endpoint to return a <b>List of Service Allocations</b> associated with the requested service. A valid <b>service id</b> is required. Allocations are used for Event type services/bookings. Retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service supply the service id. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://docs.onsched.com/reference/post_setup-v1-services-id-allocations">Create Service Allocations</a></p>

<h3 id="list-service-allocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service to list allocations for, 0 for all|
|locationId|query|string|false|id of the location, defaults to the primary location|
|resourceId|query|string|false|id of the resource to filter on|
|startDate|query|string(date-time)|false|Format YYYY-MM-DD: Filter allocations on/after startDate|
|endDate|query|string(date-time)|false|Format YYYY-MM-DD. Filter allocations on/before endDate|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "bookingCount": 0,
      "bookingLimit": 0,
      "deletedStatus": true,
      "deletedTime": "string",
      "endDate": "string",
      "endTime": 0,
      "id": "string",
      "locationId": "string",
      "object": "string",
      "reason": "string",
      "repeat": {
        "frequency": "string",
        "interval": 0,
        "monthDay": "string",
        "monthType": "string",
        "weekdays": "string"
      },
      "repeats": true,
      "resourceAddress": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "country": "string",
        "postalCode": "string",
        "state": "string"
      },
      "resourceDescription": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string",
      "resourcePhone": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string"
      },
      "serviceDescription": "string",
      "serviceDuration": 0,
      "serviceId": "string",
      "serviceImageUrl": "string",
      "serviceName": "string",
      "startDate": "string",
      "startTime": 0,
      "timezoneName": "string",
      "timezoneOffset": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-service-allocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|service alloaction object|[ServiceAllocationListViewModel](#schemaserviceallocationlistviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|401|Unauthorized|Authorization error.|None|
|404|Not Found|Service was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Resources for Service

> Code samples

```bash
curl https://example.com/consumer/v1/services/string/resources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumer/v1/services/{id}/resources`

<p>Use this endpoint to return a list of <b>Resources that provide the Service requested</b>. A valid <b>service id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-resources-for-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|
|locationId|query|string|false|id of business location, defaults to primary business location|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "address": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "country": "string",
        "postalCode": "string",
        "state": "string"
      },
      "availability": {
        "fri": {
          "endTime": 0,
          "startTime": 0
        },
        "mon": {
          "endTime": 0,
          "startTime": 0
        },
        "sat": {
          "endTime": 0,
          "startTime": 0
        },
        "sun": {
          "endTime": 0,
          "startTime": 0
        },
        "thu": {
          "endTime": 0,
          "startTime": 0
        },
        "tue": {
          "endTime": 0,
          "startTime": 0
        },
        "wed": {
          "endTime": 0,
          "startTime": 0
        }
      },
      "bioLink": "string",
      "bookingNotification": 0,
      "calendarAvailability": 0,
      "contact": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "conferenceInfo": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string",
        "skypeUsername": "string"
      },
      "customFields": {
        "field1": "string",
        "field10": "string",
        "field2": "string",
        "field3": "string",
        "field4": "string",
        "field5": "string",
        "field6": "string",
        "field7": "string",
        "field8": "string",
        "field9": "string"
      },
      "deletedStatus": true,
      "deletedTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "effectiveDate": "1970-01-01T00:00:00Z",
      "email": "string",
      "gender": "string",
      "googleCalendarId": "string",
      "groupId": "string",
      "hourly": 0,
      "id": "string",
      "ignoreBusinessHours": true,
      "imageUrl": "string",
      "locationId": "string",
      "name": "string",
      "notificationType": 0,
      "object": "string",
      "outlookCalendarId": "string",
      "recurringAvailability": true,
      "services": [
        {
          "object": "string",
          "resourceId": 0,
          "resourceName": "string",
          "serviceId": 0,
          "serviceName": "string"
        }
      ],
      "skypeName": "string",
      "sortKey": 0,
      "timezoneIana": "string",
      "timezoneId": "string",
      "timezoneOffset": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-resources-for-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceListViewModel](#schemaresourcelistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

# Schemas

<h2 id="tocS_AddressInputModel">AddressInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaaddressinputmodel"></a>
<a id="schema_AddressInputModel"></a>
<a id="tocSaddressinputmodel"></a>
<a id="tocsaddressinputmodel"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "country": "string",
  "postalCode": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string \| null|false|none|none|
|addressLine2|string \| null|false|none|none|
|city|string \| null|false|none|none|
|country|string \| null|false|none|none|
|postalCode|string \| null|false|none|none|
|state|string \| null|false|none|none|

<h2 id="tocS_AddressUpdateModel">AddressUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaaddressupdatemodel"></a>
<a id="schema_AddressUpdateModel"></a>
<a id="tocSaddressupdatemodel"></a>
<a id="tocsaddressupdatemodel"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "country": "string",
  "postalCode": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string \| null|false|none|none|
|addressLine2|string \| null|false|none|none|
|city|string \| null|false|none|none|
|country|string \| null|false|none|none|
|postalCode|string \| null|false|none|none|
|state|string \| null|false|none|none|

<h2 id="tocS_AddressViewModel">AddressViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaaddressviewmodel"></a>
<a id="schema_AddressViewModel"></a>
<a id="tocSaddressviewmodel"></a>
<a id="tocsaddressviewmodel"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "country": "string",
  "postalCode": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string \| null|false|none|none|
|addressLine2|string \| null|false|none|none|
|city|string \| null|false|none|none|
|country|string \| null|false|none|none|
|postalCode|string \| null|false|none|none|
|state|string \| null|false|none|none|

<h2 id="tocS_AppoinmentBookingFormsViewModel">AppoinmentBookingFormsViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaappoinmentbookingformsviewmodel"></a>
<a id="schema_AppoinmentBookingFormsViewModel"></a>
<a id="tocSappoinmentbookingformsviewmodel"></a>
<a id="tocsappoinmentbookingformsviewmodel"></a>

```json
{
  "bookingConfirmationPage": "string",
  "bookingForm": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingConfirmationPage|string \| null|false|none|none|
|bookingForm|string \| null|false|none|none|

<h2 id="tocS_AppointmentAuditViewModel">AppointmentAuditViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentauditviewmodel"></a>
<a id="schema_AppointmentAuditViewModel"></a>
<a id="tocSappointmentauditviewmodel"></a>
<a id="tocsappointmentauditviewmodel"></a>

```json
{
  "appointmentId": "string",
  "id": "string",
  "modificationType": "string",
  "modifiedBy": "string",
  "modifiedOn": "string",
  "notesAfter": "string",
  "notesBefore": "string",
  "statusAfter": "string",
  "statusBefore": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointmentId|string \| null|false|none|none|
|id|string \| null|false|none|none|
|modificationType|string \| null|false|none|none|
|modifiedBy|string \| null|false|none|none|
|modifiedOn|string \| null|false|none|none|
|notesAfter|string \| null|false|none|none|
|notesBefore|string \| null|false|none|none|
|statusAfter|string \| null|false|none|none|
|statusBefore|string \| null|false|none|none|

<h2 id="tocS_AppointmentBookModel">AppointmentBookModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentbookmodel"></a>
<a id="schema_AppointmentBookModel"></a>
<a id="tocSappointmentbookmodel"></a>
<a id="tocsappointmentbookmodel"></a>

```json
{
  "appointmentBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "customerBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customerMessage": "string",
  "email": "string",
  "groupSize": 0,
  "name": "string",
  "notes": "string",
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointmentBookingFields|[[BookingFieldItem](#schemabookingfielditem)]|false|none|none|
|customFields|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|none|
|customerBookingFields|[[BookingFieldItem](#schemabookingfielditem)]|false|none|none|
|customerMessage|string \| null|false|none|none|
|email|string \| null|false|none|none|
|groupSize|integer(int32) \| null|false|none|none|
|name|string \| null|false|none|none|
|notes|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|phoneExt|string \| null|false|none|none|
|phoneType|string \| null|false|none|none|

<h2 id="tocS_AppointmentCustomerViewModel">AppointmentCustomerViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentcustomerviewmodel"></a>
<a id="schema_AppointmentCustomerViewModel"></a>
<a id="tocSappointmentcustomerviewmodel"></a>
<a id="tocsappointmentcustomerviewmodel"></a>

```json
{
  "appointmentId": "string",
  "customerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointmentId|string \| null|false|none|none|
|customerId|string \| null|false|none|none|

<h2 id="tocS_AppointmentInitialModel">AppointmentInitialModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentinitialmodel"></a>
<a id="schema_AppointmentInitialModel"></a>
<a id="tocSappointmentinitialmodel"></a>
<a id="tocsappointmentinitialmodel"></a>

```json
{
  "appointmentBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "bookedBy": "string",
  "bookingWindowId": "string",
  "calendarId": "string",
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "customerBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customerId": "string",
  "customerMessage": "string",
  "email": "string",
  "endDateTime": "1970-01-01T00:00:00Z",
  "groupSize": 0,
  "location": "string",
  "locationId": "string",
  "name": "string",
  "notes": "string",
  "phone": "string",
  "phoneType": "string",
  "resourceGroupId": "string",
  "resourceId": "string",
  "resourceIds": "string",
  "serviceAllocationId": "string",
  "serviceId": "string",
  "startDateTime": "1970-01-01T00:00:00Z",
  "timezoneName": "string",
  "travelAppointmentId": "string",
  "travelTimeMins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointmentBookingFields|[[BookingFieldItem](#schemabookingfielditem)]|false|none|none|
|bookedBy|string \| null|false|none|none|
|bookingWindowId|string \| null|false|none|none|
|calendarId|string \| null|false|none|none|
|customFields|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|none|
|customerBookingFields|[[BookingFieldItem](#schemabookingfielditem)]|false|none|none|
|customerId|string \| null|false|none|none|
|customerMessage|string \| null|false|none|none|
|email|string \| null|false|none|none|
|endDateTime|string(date-time)|false|none|none|
|groupSize|integer(int32) \| null|false|none|none|
|location|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notes|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|phoneType|string \| null|false|none|none|
|resourceGroupId|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceIds|string \| null|false|none|none|
|serviceAllocationId|string \| null|false|none|none|
|serviceId|string \| null|false|none|none|
|startDateTime|string(date-time)|false|none|none|
|timezoneName|string \| null|false|none|none|
|travelAppointmentId|string \| null|false|none|none|
|travelTimeMins|integer(int32)|false|none|none|

<h2 id="tocS_AppointmentInitialViewModel">AppointmentInitialViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentinitialviewmodel"></a>
<a id="schema_AppointmentInitialViewModel"></a>
<a id="tocSappointmentinitialviewmodel"></a>
<a id="tocsappointmentinitialviewmodel"></a>

```json
{
  "appointmentBookingFields": [
    {
      "businessId": "string",
      "companyId": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "auditTrail": [
    {
      "appointmentId": "string",
      "id": "string",
      "modificationType": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "notesAfter": "string",
      "notesBefore": "string",
      "statusAfter": "string",
      "statusBefore": "string"
    }
  ],
  "bookedBy": "string",
  "bookingForms": {
    "bookingConfirmationPage": "string",
    "bookingForm": "string"
  },
  "businessName": "string",
  "calendarId": "string",
  "confirmationNumber": "string",
  "confirmed": true,
  "createDate": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "customerBookingFields": [
    {
      "businessId": "string",
      "companyId": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "customerId": "string",
  "customerMessage": "string",
  "customers": [
    {
      "appointmentId": "string",
      "customerId": "string"
    }
  ],
  "date": "string",
  "dateInternational": "string",
  "downloadIcsUrl": "string",
  "duration": 0,
  "email": "string",
  "emailConfirmationSent": "string",
  "emailReminderSent": "string",
  "endDateTime": "string",
  "firstname": "string",
  "groupSize": 0,
  "id": "string",
  "ipAddress": "string",
  "lastModifiedBy": "string",
  "lastModifiedOn": "string",
  "lastname": "string",
  "latitude": "string",
  "location": "string",
  "locationId": "string",
  "longitude": "string",
  "name": "string",
  "notes": "string",
  "object": "string",
  "onlineBooking": true,
  "paymentStatus": 0,
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string",
  "rescheduledId": "string",
  "resourceEmail": "string",
  "resourceGroupId": "string",
  "resourceGroupName": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resources": [
    {
      "appointmentId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string"
    }
  ],
  "serviceAllocationId": "string",
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "smsConfirmationSent": "string",
  "smsReminderSent": "string",
  "startDateTime": "string",
  "status": "string",
  "stripeChargeId": "string",
  "stripeRefundId": "string",
  "time": 0,
  "timezone": 0,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointmentBookingFields|[[BookingFieldViewModel](#schemabookingfieldviewmodel)]|false|none|none|
|auditTrail|[[AppointmentAuditViewModel](#schemaappointmentauditviewmodel)]|false|none|none|
|bookedBy|string \| null|false|none|none|
|bookingForms|[AppoinmentBookingFormsViewModel](#schemaappoinmentbookingformsviewmodel)|false|none|none|
|businessName|string \| null|false|none|none|
|calendarId|string \| null|false|none|none|
|confirmationNumber|string \| null|false|none|none|
|confirmed|boolean|false|none|none|
|createDate|string \| null|false|none|none|
|customFields|object \| null|false|none|none|
|customerBookingFields|[[BookingFieldViewModel](#schemabookingfieldviewmodel)]|false|none|none|
|customerId|string \| null|false|none|none|
|customerMessage|string \| null|false|none|none|
|customers|[[AppointmentCustomerViewModel](#schemaappointmentcustomerviewmodel)]|false|none|none|
|date|string \| null|false|none|none|
|dateInternational|string \| null|false|none|none|
|downloadIcsUrl|string \| null|false|none|none|
|duration|integer(int32)|false|none|none|
|email|string \| null|false|none|none|
|emailConfirmationSent|string \| null|false|none|none|
|emailReminderSent|string \| null|false|none|none|
|endDateTime|string \| null|false|none|none|
|firstname|string \| null|false|none|none|
|groupSize|integer(int32) \| null|false|none|none|
|id|string \| null|false|none|none|
|ipAddress|string \| null|false|none|none|
|lastModifiedBy|string \| null|false|none|none|
|lastModifiedOn|string \| null|false|none|none|
|lastname|string \| null|false|none|none|
|latitude|string \| null|false|none|none|
|location|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|longitude|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notes|string \| null|false|none|none|
|object|string \| null|false|none|none|
|onlineBooking|boolean \| null|false|none|none|
|paymentStatus|integer(int32)|false|none|none|
|phone|string \| null|false|none|none|
|phoneExt|string \| null|false|none|none|
|phoneType|string \| null|false|none|none|
|rescheduledId|string \| null|false|none|none|
|resourceEmail|string \| null|false|none|none|
|resourceGroupId|string \| null|false|none|none|
|resourceGroupName|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceImageUrl|string \| null|false|none|none|
|resourceName|string \| null|false|none|none|
|resources|[[AppointmentResourceViewModel](#schemaappointmentresourceviewmodel)]|false|none|none|
|serviceAllocationId|string \| null|false|none|none|
|serviceId|string \| null|false|none|none|
|serviceImageUrl|string \| null|false|none|none|
|serviceName|string \| null|false|none|none|
|smsConfirmationSent|string \| null|false|none|none|
|smsReminderSent|string \| null|false|none|none|
|startDateTime|string \| null|false|none|none|
|status|string \| null|false|none|none|
|stripeChargeId|string \| null|false|none|none|
|stripeRefundId|string \| null|false|none|none|
|time|integer(int32)|false|none|none|
|timezone|integer(int32) \| null|false|none|none|
|timezoneIana|string \| null|false|none|none|
|timezoneId|string \| null|false|none|none|

<h2 id="tocS_AppointmentListViewModel">AppointmentListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentlistviewmodel"></a>
<a id="schema_AppointmentListViewModel"></a>
<a id="tocSappointmentlistviewmodel"></a>
<a id="tocsappointmentlistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "auditTrail": [
        {
          "appointmentId": "string",
          "id": "string",
          "modificationType": "string",
          "modifiedBy": "string",
          "modifiedOn": "string",
          "notesAfter": "string",
          "notesBefore": "string",
          "statusAfter": "string",
          "statusBefore": "string"
        }
      ],
      "bookedBy": "string",
      "businessName": "string",
      "calendarId": "string",
      "confirmationNumber": "string",
      "confirmed": true,
      "createDate": "string",
      "customFields": {
        "property1": {
          "name": "string",
          "value": "string"
        },
        "property2": {
          "name": "string",
          "value": "string"
        }
      },
      "customerId": "string",
      "customerMessage": "string",
      "customers": [
        {
          "appointmentId": "string",
          "customerId": "string"
        }
      ],
      "date": "string",
      "dateInternational": "string",
      "downloadIcsUrl": "string",
      "duration": 0,
      "email": "string",
      "emailConfirmationSent": "string",
      "emailReminderSent": "string",
      "endDateTime": "string",
      "firstname": "string",
      "groupSize": 0,
      "id": "string",
      "ipAddress": "string",
      "lastModifiedBy": "string",
      "lastModifiedOn": "string",
      "lastname": "string",
      "latitude": "string",
      "location": "string",
      "locationId": "string",
      "longitude": "string",
      "name": "string",
      "notes": "string",
      "object": "string",
      "onlineBooking": true,
      "paymentStatus": 0,
      "phone": "string",
      "phoneExt": "string",
      "phoneType": "string",
      "rescheduledId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceGroupName": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string",
      "resources": [
        {
          "appointmentId": "string",
          "resourceEmail": "string",
          "resourceGroupId": "string",
          "resourceId": "string",
          "resourceImageUrl": "string",
          "resourceName": "string"
        }
      ],
      "serviceAllocationId": "string",
      "serviceId": "string",
      "serviceImageUrl": "string",
      "serviceName": "string",
      "smsConfirmationSent": "string",
      "smsReminderSent": "string",
      "startDateTime": "string",
      "status": "string",
      "stripeChargeId": "string",
      "stripeRefundId": "string",
      "time": 0,
      "timezone": 0,
      "timezoneIana": "string",
      "timezoneId": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|data|[[AppointmentViewModel](#schemaappointmentviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_AppointmentNoShowModel">AppointmentNoShowModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentnoshowmodel"></a>
<a id="schema_AppointmentNoShowModel"></a>
<a id="tocSappointmentnoshowmodel"></a>
<a id="tocsappointmentnoshowmodel"></a>

```json
{}
```

<h2 id="tocS_AppointmentReminderViewModel">AppointmentReminderViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentreminderviewmodel"></a>
<a id="schema_AppointmentReminderViewModel"></a>
<a id="tocSappointmentreminderviewmodel"></a>
<a id="tocsappointmentreminderviewmodel"></a>

```json
{
  "emailFirstReminder": 0,
  "emailFirstReminderInterval": 0,
  "emailSecondReminder": 0,
  "emailSecondReminderInterval": 0,
  "smsFirstReminder": 0,
  "smsFirstReminderInterval": 0,
  "smsSecondReminder": 0,
  "smsSecondReminderInterval": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailFirstReminder|integer(int32)|false|none|none|
|emailFirstReminderInterval|integer(int32)|false|none|none|
|emailSecondReminder|integer(int32)|false|none|none|
|emailSecondReminderInterval|integer(int32)|false|none|none|
|smsFirstReminder|integer(int32)|false|none|none|
|smsFirstReminderInterval|integer(int32)|false|none|none|
|smsSecondReminder|integer(int32)|false|none|none|
|smsSecondReminderInterval|integer(int32)|false|none|none|

<h2 id="tocS_AppointmentRescheduleModel">AppointmentRescheduleModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentreschedulemodel"></a>
<a id="schema_AppointmentRescheduleModel"></a>
<a id="tocSappointmentreschedulemodel"></a>
<a id="tocsappointmentreschedulemodel"></a>

```json
{
  "endDateTime": "1970-01-01T00:00:00Z",
  "resourceId": "string",
  "resourceIds": "string",
  "serviceId": "string",
  "startDateTime": "1970-01-01T00:00:00Z",
  "travelAppointmentId": "string",
  "travelTimeMins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDateTime|string(date-time)|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceIds|string \| null|false|none|none|
|serviceId|string \| null|false|none|none|
|startDateTime|string(date-time)|false|none|none|
|travelAppointmentId|string \| null|false|none|none|
|travelTimeMins|integer(int32)|false|none|none|

<h2 id="tocS_AppointmentReserveModel">AppointmentReserveModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentreservemodel"></a>
<a id="schema_AppointmentReserveModel"></a>
<a id="tocSappointmentreservemodel"></a>
<a id="tocsappointmentreservemodel"></a>

```json
{
  "appointmentBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "customerBookingFields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "customerMessage": "string",
  "email": "string",
  "name": "string",
  "notes": "string",
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointmentBookingFields|[[BookingFieldItem](#schemabookingfielditem)]|false|none|none|
|customFields|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|none|
|customerBookingFields|[[BookingFieldItem](#schemabookingfielditem)]|false|none|none|
|customerMessage|string \| null|false|none|none|
|email|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notes|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|phoneExt|string \| null|false|none|none|
|phoneType|string \| null|false|none|none|

<h2 id="tocS_AppointmentResourceViewModel">AppointmentResourceViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentresourceviewmodel"></a>
<a id="schema_AppointmentResourceViewModel"></a>
<a id="tocSappointmentresourceviewmodel"></a>
<a id="tocsappointmentresourceviewmodel"></a>

```json
{
  "appointmentId": "string",
  "resourceEmail": "string",
  "resourceGroupId": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointmentId|string \| null|false|none|none|
|resourceEmail|string \| null|false|none|none|
|resourceGroupId|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceImageUrl|string \| null|false|none|none|
|resourceName|string \| null|false|none|none|

<h2 id="tocS_AppointmentViewModel">AppointmentViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentviewmodel"></a>
<a id="schema_AppointmentViewModel"></a>
<a id="tocSappointmentviewmodel"></a>
<a id="tocsappointmentviewmodel"></a>

```json
{
  "auditTrail": [
    {
      "appointmentId": "string",
      "id": "string",
      "modificationType": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "notesAfter": "string",
      "notesBefore": "string",
      "statusAfter": "string",
      "statusBefore": "string"
    }
  ],
  "bookedBy": "string",
  "businessName": "string",
  "calendarId": "string",
  "confirmationNumber": "string",
  "confirmed": true,
  "createDate": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "customerId": "string",
  "customerMessage": "string",
  "customers": [
    {
      "appointmentId": "string",
      "customerId": "string"
    }
  ],
  "date": "string",
  "dateInternational": "string",
  "downloadIcsUrl": "string",
  "duration": 0,
  "email": "string",
  "emailConfirmationSent": "string",
  "emailReminderSent": "string",
  "endDateTime": "string",
  "firstname": "string",
  "groupSize": 0,
  "id": "string",
  "ipAddress": "string",
  "lastModifiedBy": "string",
  "lastModifiedOn": "string",
  "lastname": "string",
  "latitude": "string",
  "location": "string",
  "locationId": "string",
  "longitude": "string",
  "name": "string",
  "notes": "string",
  "object": "string",
  "onlineBooking": true,
  "paymentStatus": 0,
  "phone": "string",
  "phoneExt": "string",
  "phoneType": "string",
  "rescheduledId": "string",
  "resourceEmail": "string",
  "resourceGroupId": "string",
  "resourceGroupName": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resources": [
    {
      "appointmentId": "string",
      "resourceEmail": "string",
      "resourceGroupId": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string"
    }
  ],
  "serviceAllocationId": "string",
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "smsConfirmationSent": "string",
  "smsReminderSent": "string",
  "startDateTime": "string",
  "status": "string",
  "stripeChargeId": "string",
  "stripeRefundId": "string",
  "time": 0,
  "timezone": 0,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditTrail|[[AppointmentAuditViewModel](#schemaappointmentauditviewmodel)]|false|none|none|
|bookedBy|string \| null|false|none|none|
|businessName|string \| null|false|none|none|
|calendarId|string \| null|false|none|none|
|confirmationNumber|string \| null|false|none|none|
|confirmed|boolean|false|none|none|
|createDate|string \| null|false|none|none|
|customFields|object \| null|false|none|none|
|customerId|string \| null|false|none|none|
|customerMessage|string \| null|false|none|none|
|customers|[[AppointmentCustomerViewModel](#schemaappointmentcustomerviewmodel)]|false|none|none|
|date|string \| null|false|none|none|
|dateInternational|string \| null|false|none|none|
|downloadIcsUrl|string \| null|false|none|none|
|duration|integer(int32)|false|none|none|
|email|string \| null|false|none|none|
|emailConfirmationSent|string \| null|false|none|none|
|emailReminderSent|string \| null|false|none|none|
|endDateTime|string \| null|false|none|none|
|firstname|string \| null|false|none|none|
|groupSize|integer(int32) \| null|false|none|none|
|id|string \| null|false|none|none|
|ipAddress|string \| null|false|none|none|
|lastModifiedBy|string \| null|false|none|none|
|lastModifiedOn|string \| null|false|none|none|
|lastname|string \| null|false|none|none|
|latitude|string \| null|false|none|none|
|location|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|longitude|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notes|string \| null|false|none|none|
|object|string \| null|false|none|none|
|onlineBooking|boolean \| null|false|none|none|
|paymentStatus|integer(int32)|false|none|none|
|phone|string \| null|false|none|none|
|phoneExt|string \| null|false|none|none|
|phoneType|string \| null|false|none|none|
|rescheduledId|string \| null|false|none|none|
|resourceEmail|string \| null|false|none|none|
|resourceGroupId|string \| null|false|none|none|
|resourceGroupName|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceImageUrl|string \| null|false|none|none|
|resourceName|string \| null|false|none|none|
|resources|[[AppointmentResourceViewModel](#schemaappointmentresourceviewmodel)]|false|none|none|
|serviceAllocationId|string \| null|false|none|none|
|serviceId|string \| null|false|none|none|
|serviceImageUrl|string \| null|false|none|none|
|serviceName|string \| null|false|none|none|
|smsConfirmationSent|string \| null|false|none|none|
|smsReminderSent|string \| null|false|none|none|
|startDateTime|string \| null|false|none|none|
|status|string \| null|false|none|none|
|stripeChargeId|string \| null|false|none|none|
|stripeRefundId|string \| null|false|none|none|
|time|integer(int32)|false|none|none|
|timezone|integer(int32) \| null|false|none|none|
|timezoneIana|string \| null|false|none|none|
|timezoneId|string \| null|false|none|none|

<h2 id="tocS_AvailabilityDayViewModel">AvailabilityDayViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilitydayviewmodel"></a>
<a id="schema_AvailabilityDayViewModel"></a>
<a id="tocSavailabilitydayviewmodel"></a>
<a id="tocsavailabilitydayviewmodel"></a>

```json
{
  "availableDays": [
    {
      "available": true,
      "bookingCount": 0,
      "bookingLimit": 0,
      "closed": true,
      "date": "string",
      "object": "string",
      "reason": "string",
      "reasonCode": 0
    }
  ],
  "object": "string",
  "resourceDescription": "string",
  "resourceId": "string",
  "resourceName": "string",
  "serviceDescription": "string",
  "serviceId": "string",
  "serviceName": "string",
  "tzRequested": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableDays|[[AvailableDayViewModel](#schemaavailabledayviewmodel)]|false|none|none|
|object|string \| null|false|none|none|
|resourceDescription|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceName|string \| null|false|none|none|
|serviceDescription|string \| null|false|none|none|
|serviceId|string \| null|false|none|none|
|serviceName|string \| null|false|none|none|
|tzRequested|integer(int32) \| null|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_AvailabilityViewModel">AvailabilityViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityviewmodel"></a>
<a id="schema_AvailabilityViewModel"></a>
<a id="tocSavailabilityviewmodel"></a>
<a id="tocsavailabilityviewmodel"></a>

```json
{
  "availableDays": [
    {
      "available": true,
      "bookingCount": 0,
      "bookingLimit": 0,
      "closed": true,
      "date": "string",
      "object": "string",
      "reason": "string",
      "reasonCode": 0
    }
  ],
  "availableTimes": [
    {
      "allowableBookings": 0,
      "allowableCapacity": 0,
      "availableBookings": 0,
      "availableCapacity": 0,
      "date": "string",
      "displayTime": "string",
      "duration": 0,
      "endDateTime": "string",
      "resourceId": "string",
      "startDateTime": "string",
      "time": 0,
      "travelAppointmentId": "string",
      "travelTimeMins": 0
    }
  ],
  "businessName": "string",
  "calendarId": "string",
  "calendarResourceGroupId": "string",
  "endDate": "string",
  "firstAvailableDate": "string",
  "locationId": "string",
  "object": "string",
  "resourceDescription": "string",
  "resourceId": "string",
  "resourceIds": "string",
  "resourceName": "string",
  "serviceDescription": "string",
  "serviceDuration": 0,
  "serviceId": "string",
  "serviceName": "string",
  "startDate": "string",
  "timezoneName": "string",
  "tzRequested": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableDays|[[AvailableDayViewModel](#schemaavailabledayviewmodel)]|false|none|none|
|availableTimes|[[AvailableTimeViewModel](#schemaavailabletimeviewmodel)]|false|none|none|
|businessName|string \| null|false|none|none|
|calendarId|string \| null|false|none|none|
|calendarResourceGroupId|string \| null|false|none|none|
|endDate|string \| null|false|none|none|
|firstAvailableDate|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|object|string \| null|false|none|none|
|resourceDescription|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceIds|string \| null|false|none|none|
|resourceName|string \| null|false|none|none|
|serviceDescription|string \| null|false|none|none|
|serviceDuration|integer(int32)|false|none|none|
|serviceId|string \| null|false|none|none|
|serviceName|string \| null|false|none|none|
|startDate|string \| null|false|none|none|
|timezoneName|string \| null|false|none|Returns the Timezone Name in IANA format if a TimezoneName was passed into an Availability call; otherwise this property is hidden|
|tzRequested|integer(int32) \| null|false|none|Returns the timezone offset if a tzOffset was supplied into an Availability call; null if a TimezoneName was passed; otherwise the Business timezone offset is returned|
|url|string \| null|false|none|none|

<h2 id="tocS_AvailableDayViewModel">AvailableDayViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaavailabledayviewmodel"></a>
<a id="schema_AvailableDayViewModel"></a>
<a id="tocSavailabledayviewmodel"></a>
<a id="tocsavailabledayviewmodel"></a>

```json
{
  "available": true,
  "bookingCount": 0,
  "bookingLimit": 0,
  "closed": true,
  "date": "string",
  "object": "string",
  "reason": "string",
  "reasonCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|false|none|none|
|bookingCount|integer(int32)|false|none|none|
|bookingLimit|integer(int32)|false|none|none|
|closed|boolean|false|none|none|
|date|string \| null|false|none|none|
|object|string \| null|false|none|none|
|reason|string \| null|false|none|none|
|reasonCode|integer(int32)|false|none|none|

<h2 id="tocS_AvailableTimeViewModel">AvailableTimeViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaavailabletimeviewmodel"></a>
<a id="schema_AvailableTimeViewModel"></a>
<a id="tocSavailabletimeviewmodel"></a>
<a id="tocsavailabletimeviewmodel"></a>

```json
{
  "allowableBookings": 0,
  "allowableCapacity": 0,
  "availableBookings": 0,
  "availableCapacity": 0,
  "date": "string",
  "displayTime": "string",
  "duration": 0,
  "endDateTime": "string",
  "resourceId": "string",
  "startDateTime": "string",
  "time": 0,
  "travelAppointmentId": "string",
  "travelTimeMins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowableBookings|integer(int32)|false|none|none|
|allowableCapacity|integer(int32)|false|none|none|
|availableBookings|integer(int32)|false|none|none|
|availableCapacity|integer(int32)|false|none|none|
|date|string \| null|false|none|none|
|displayTime|string \| null|false|none|none|
|duration|integer(int32)|false|none|none|
|endDateTime|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|startDateTime|string \| null|false|none|none|
|time|integer(int32)|false|none|none|
|travelAppointmentId|string \| null|false|none|none|
|travelTimeMins|integer(int32)|false|none|none|

<h2 id="tocS_BookingFieldItem">BookingFieldItem</h2>
<!-- backwards compatibility -->
<a id="schemabookingfielditem"></a>
<a id="schema_BookingFieldItem"></a>
<a id="tocSbookingfielditem"></a>
<a id="tocsbookingfielditem"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_BookingFieldListItemViewModel">BookingFieldListItemViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabookingfieldlistitemviewmodel"></a>
<a id="schema_BookingFieldListItemViewModel"></a>
<a id="tocSbookingfieldlistitemviewmodel"></a>
<a id="tocsbookingfieldlistitemviewmodel"></a>

```json
{
  "id": "string",
  "leadAnswerScore": 0,
  "leadRoutingEntityId": 0,
  "leadRoutingEntityType": "string",
  "name": "string",
  "object": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|leadAnswerScore|integer(int32)|false|none|none|
|leadRoutingEntityId|integer(int32)|false|none|none|
|leadRoutingEntityType|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_BookingFieldListViewModel">BookingFieldListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabookingfieldlistviewmodel"></a>
<a id="schema_BookingFieldListViewModel"></a>
<a id="tocSbookingfieldlistviewmodel"></a>
<a id="tocsbookingfieldlistviewmodel"></a>

```json
{
  "bookingFields": [
    {
      "businessId": "string",
      "companyId": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "object": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingFields|[[BookingFieldViewModel](#schemabookingfieldviewmodel)]|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|

<h2 id="tocS_BookingFieldViewModel">BookingFieldViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabookingfieldviewmodel"></a>
<a id="schema_BookingFieldViewModel"></a>
<a id="tocSbookingfieldviewmodel"></a>
<a id="tocsbookingfieldviewmodel"></a>

```json
{
  "businessId": "string",
  "companyId": "string",
  "fieldLabel": "string",
  "fieldLength": 0,
  "fieldListItems": [
    {
      "id": "string",
      "leadAnswerScore": 0,
      "leadRoutingEntityId": 0,
      "leadRoutingEntityType": "string",
      "name": "string",
      "object": "string",
      "value": "string"
    }
  ],
  "fieldName": "string",
  "fieldRequired": true,
  "fieldType": "string",
  "id": "string",
  "leadQuestion": true,
  "leadQuestionWeight": 0,
  "object": "string",
  "sortKey": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessId|string \| null|false|none|none|
|companyId|string \| null|false|none|none|
|fieldLabel|string \| null|false|none|none|
|fieldLength|integer(int32)|false|none|none|
|fieldListItems|[[BookingFieldListItemViewModel](#schemabookingfieldlistitemviewmodel)]|false|none|none|
|fieldName|string \| null|false|none|none|
|fieldRequired|boolean|false|none|none|
|fieldType|string \| null|false|none|none|
|id|string \| null|false|none|none|
|leadQuestion|boolean|false|none|none|
|leadQuestionWeight|number(double)|false|none|none|
|object|string \| null|false|none|none|
|sortKey|integer(int32)|false|none|none|

<h2 id="tocS_BusinessDefaultsViewModel">BusinessDefaultsViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessdefaultsviewmodel"></a>
<a id="schema_BusinessDefaultsViewModel"></a>
<a id="tocSbusinessdefaultsviewmodel"></a>
<a id="tocsbusinessdefaultsviewmodel"></a>

```json
{
  "autoUpdateCustomer": true,
  "businessNotification": true,
  "customerCity": true,
  "customerState": true,
  "emailInfo": true,
  "enableUtcTimezone": true,
  "object": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoUpdateCustomer|boolean \| null|false|none|none|
|businessNotification|boolean \| null|false|none|none|
|customerCity|boolean \| null|false|none|none|
|customerState|boolean \| null|false|none|none|
|emailInfo|boolean \| null|false|none|none|
|enableUtcTimezone|boolean \| null|false|none|none|
|object|string \| null|false|none|none|

<h2 id="tocS_BusinessHolidayViewModel">BusinessHolidayViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessholidayviewmodel"></a>
<a id="schema_BusinessHolidayViewModel"></a>
<a id="tocSbusinessholidayviewmodel"></a>
<a id="tocsbusinessholidayviewmodel"></a>

```json
{
  "businessClosed": true,
  "holidayName": "string",
  "id": "string",
  "publicHolidayId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessClosed|boolean|false|none|none|
|holidayName|string \| null|false|none|none|
|id|string \| null|false|none|none|
|publicHolidayId|integer(int32)|false|none|none|

<h2 id="tocS_BusinessHourViewModel">BusinessHourViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinesshourviewmodel"></a>
<a id="schema_BusinessHourViewModel"></a>
<a id="tocSbusinesshourviewmodel"></a>
<a id="tocsbusinesshourviewmodel"></a>

```json
{
  "endTime": 0,
  "is24Hours": true,
  "isOpen": true,
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|integer(int32)|false|none|none|
|is24Hours|boolean|false|none|none|
|isOpen|boolean|false|none|none|
|startTime|integer(int32)|false|none|none|

<h2 id="tocS_BusinessHoursViewModel">BusinessHoursViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinesshoursviewmodel"></a>
<a id="schema_BusinessHoursViewModel"></a>
<a id="tocSbusinesshoursviewmodel"></a>
<a id="tocsbusinesshoursviewmodel"></a>

```json
{
  "fri": {
    "endTime": 0,
    "is24Hours": true,
    "isOpen": true,
    "startTime": 0
  },
  "mon": {
    "endTime": 0,
    "is24Hours": true,
    "isOpen": true,
    "startTime": 0
  },
  "sat": {
    "endTime": 0,
    "is24Hours": true,
    "isOpen": true,
    "startTime": 0
  },
  "sun": {
    "endTime": 0,
    "is24Hours": true,
    "isOpen": true,
    "startTime": 0
  },
  "thu": {
    "endTime": 0,
    "is24Hours": true,
    "isOpen": true,
    "startTime": 0
  },
  "tue": {
    "endTime": 0,
    "is24Hours": true,
    "isOpen": true,
    "startTime": 0
  },
  "wed": {
    "endTime": 0,
    "is24Hours": true,
    "isOpen": true,
    "startTime": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fri|[BusinessHourViewModel](#schemabusinesshourviewmodel)|false|none|none|
|mon|[BusinessHourViewModel](#schemabusinesshourviewmodel)|false|none|none|
|sat|[BusinessHourViewModel](#schemabusinesshourviewmodel)|false|none|none|
|sun|[BusinessHourViewModel](#schemabusinesshourviewmodel)|false|none|none|
|thu|[BusinessHourViewModel](#schemabusinesshourviewmodel)|false|none|none|
|tue|[BusinessHourViewModel](#schemabusinesshourviewmodel)|false|none|none|
|wed|[BusinessHourViewModel](#schemabusinesshourviewmodel)|false|none|none|

<h2 id="tocS_BusinessServiceViewModel">BusinessServiceViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessserviceviewmodel"></a>
<a id="schema_BusinessServiceViewModel"></a>
<a id="tocSbusinessserviceviewmodel"></a>
<a id="tocsbusinessserviceviewmodel"></a>

```json
{
  "id": 0,
  "object": "string",
  "serviceId": 0,
  "serviceName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|object|string \| null|false|none|none|
|serviceId|integer(int32)|false|none|none|
|serviceName|string \| null|false|none|none|

<h2 id="tocS_ContactInputModel">ContactInputModel</h2>
<!-- backwards compatibility -->
<a id="schemacontactinputmodel"></a>
<a id="schema_ContactInputModel"></a>
<a id="tocScontactinputmodel"></a>
<a id="tocscontactinputmodel"></a>

```json
{
  "businessPhone": "string",
  "businessPhoneExt": "string",
  "conferenceInfo": "string",
  "homePhone": "string",
  "mobilePhone": "string",
  "preferredPhoneType": "string",
  "skypeUsername": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessPhone|string \| null|false|none|none|
|businessPhoneExt|string \| null|false|none|none|
|conferenceInfo|string \| null|false|none|none|
|homePhone|string \| null|false|none|none|
|mobilePhone|string \| null|false|none|none|
|preferredPhoneType|string \| null|false|none|none|
|skypeUsername|string \| null|false|none|none|

<h2 id="tocS_ContactUpdateModel">ContactUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemacontactupdatemodel"></a>
<a id="schema_ContactUpdateModel"></a>
<a id="tocScontactupdatemodel"></a>
<a id="tocscontactupdatemodel"></a>

```json
{
  "businessPhone": "string",
  "businessPhoneExt": "string",
  "conferenceInfo": "string",
  "homePhone": "string",
  "mobilePhone": "string",
  "preferredPhoneType": "string",
  "skypeUsername": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessPhone|string \| null|false|none|none|
|businessPhoneExt|string \| null|false|none|none|
|conferenceInfo|string \| null|false|none|none|
|homePhone|string \| null|false|none|none|
|mobilePhone|string \| null|false|none|none|
|preferredPhoneType|string \| null|false|none|none|
|skypeUsername|string \| null|false|none|none|

<h2 id="tocS_ContactViewModel">ContactViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacontactviewmodel"></a>
<a id="schema_ContactViewModel"></a>
<a id="tocScontactviewmodel"></a>
<a id="tocscontactviewmodel"></a>

```json
{
  "businessPhone": "string",
  "businessPhoneExt": "string",
  "conferenceInfo": "string",
  "homePhone": "string",
  "mobilePhone": "string",
  "phoneType": "string",
  "skypeUsername": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessPhone|string \| null|false|none|none|
|businessPhoneExt|string \| null|false|none|none|
|conferenceInfo|string \| null|false|none|none|
|homePhone|string \| null|false|none|none|
|mobilePhone|string \| null|false|none|none|
|phoneType|string \| null|false|none|none|
|skypeUsername|string \| null|false|none|none|

<h2 id="tocS_CountryViewModel">CountryViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacountryviewmodel"></a>
<a id="schema_CountryViewModel"></a>
<a id="tocScountryviewmodel"></a>
<a id="tocscountryviewmodel"></a>

```json
{
  "code": "string",
  "name": "string",
  "object": "string"
}
```

View model for country objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|

<h2 id="tocS_CustomFieldDefinitionListViewModel">CustomFieldDefinitionListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomfielddefinitionlistviewmodel"></a>
<a id="schema_CustomFieldDefinitionListViewModel"></a>
<a id="tocScustomfielddefinitionlistviewmodel"></a>
<a id="tocscustomfielddefinitionlistviewmodel"></a>

```json
{
  "customFields": [
    {
      "fieldKey": "string",
      "fieldLabel": "string",
      "fieldLength": 0,
      "fieldListItems": [
        {
          "id": "string",
          "leadAnswerScore": 0,
          "leadRoutingEntityId": 0,
          "leadRoutingEntityType": "string",
          "name": "string",
          "object": "string",
          "value": "string"
        }
      ],
      "fieldName": "string",
      "fieldPublic": true,
      "fieldRequired": true,
      "fieldType": "string",
      "id": "string",
      "leadQuestion": true,
      "leadQuestionWeight": 0,
      "object": "string",
      "sortKey": 0
    }
  ],
  "object": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customFields|[[CustomFieldDefinitionViewModel](#schemacustomfielddefinitionviewmodel)]|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|

<h2 id="tocS_CustomFieldDefinitionViewModel">CustomFieldDefinitionViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomfielddefinitionviewmodel"></a>
<a id="schema_CustomFieldDefinitionViewModel"></a>
<a id="tocScustomfielddefinitionviewmodel"></a>
<a id="tocscustomfielddefinitionviewmodel"></a>

```json
{
  "fieldKey": "string",
  "fieldLabel": "string",
  "fieldLength": 0,
  "fieldListItems": [
    {
      "id": "string",
      "leadAnswerScore": 0,
      "leadRoutingEntityId": 0,
      "leadRoutingEntityType": "string",
      "name": "string",
      "object": "string",
      "value": "string"
    }
  ],
  "fieldName": "string",
  "fieldPublic": true,
  "fieldRequired": true,
  "fieldType": "string",
  "id": "string",
  "leadQuestion": true,
  "leadQuestionWeight": 0,
  "object": "string",
  "sortKey": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldKey|string \| null|false|none|none|
|fieldLabel|string \| null|false|none|none|
|fieldLength|integer(int32)|false|none|none|
|fieldListItems|[[CustomFieldListDefinitionViewModel](#schemacustomfieldlistdefinitionviewmodel)]|false|none|none|
|fieldName|string \| null|false|none|none|
|fieldPublic|boolean|false|none|none|
|fieldRequired|boolean|false|none|none|
|fieldType|string \| null|false|none|none|
|id|string \| null|false|none|none|
|leadQuestion|boolean|false|none|none|
|leadQuestionWeight|number(double)|false|none|none|
|object|string \| null|false|none|none|
|sortKey|integer(int32)|false|none|none|

<h2 id="tocS_CustomFieldInputModel">CustomFieldInputModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldinputmodel"></a>
<a id="schema_CustomFieldInputModel"></a>
<a id="tocScustomfieldinputmodel"></a>
<a id="tocscustomfieldinputmodel"></a>

```json
{
  "field1": "string",
  "field10": "string",
  "field2": "string",
  "field3": "string",
  "field4": "string",
  "field5": "string",
  "field6": "string",
  "field7": "string",
  "field8": "string",
  "field9": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field1|string \| null|false|none|none|
|field10|string \| null|false|none|none|
|field2|string \| null|false|none|none|
|field3|string \| null|false|none|none|
|field4|string \| null|false|none|none|
|field5|string \| null|false|none|none|
|field6|string \| null|false|none|none|
|field7|string \| null|false|none|none|
|field8|string \| null|false|none|none|
|field9|string \| null|false|none|none|

<h2 id="tocS_CustomFieldListDefinitionViewModel">CustomFieldListDefinitionViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldlistdefinitionviewmodel"></a>
<a id="schema_CustomFieldListDefinitionViewModel"></a>
<a id="tocScustomfieldlistdefinitionviewmodel"></a>
<a id="tocscustomfieldlistdefinitionviewmodel"></a>

```json
{
  "id": "string",
  "leadAnswerScore": 0,
  "leadRoutingEntityId": 0,
  "leadRoutingEntityType": "string",
  "name": "string",
  "object": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|leadAnswerScore|integer(int32)|false|none|none|
|leadRoutingEntityId|integer(int32)|false|none|none|
|leadRoutingEntityType|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_CustomFieldUpdateModel">CustomFieldUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldupdatemodel"></a>
<a id="schema_CustomFieldUpdateModel"></a>
<a id="tocScustomfieldupdatemodel"></a>
<a id="tocscustomfieldupdatemodel"></a>

```json
{
  "field1": "string",
  "field10": "string",
  "field2": "string",
  "field3": "string",
  "field4": "string",
  "field5": "string",
  "field6": "string",
  "field7": "string",
  "field8": "string",
  "field9": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field1|string \| null|false|none|none|
|field10|string \| null|false|none|none|
|field2|string \| null|false|none|none|
|field3|string \| null|false|none|none|
|field4|string \| null|false|none|none|
|field5|string \| null|false|none|none|
|field6|string \| null|false|none|none|
|field7|string \| null|false|none|none|
|field8|string \| null|false|none|none|
|field9|string \| null|false|none|none|

<h2 id="tocS_CustomFieldViewModel">CustomFieldViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldviewmodel"></a>
<a id="schema_CustomFieldViewModel"></a>
<a id="tocScustomfieldviewmodel"></a>
<a id="tocscustomfieldviewmodel"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|value|string \| null|false|none|none|

<h2 id="tocS_CustomerInputModel">CustomerInputModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomerinputmodel"></a>
<a id="schema_CustomerInputModel"></a>
<a id="tocScustomerinputmodel"></a>
<a id="tocscustomerinputmodel"></a>

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "contact": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "conferenceInfo": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "preferredPhoneType": "string",
    "skypeUsername": "string"
  },
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "email": "string",
  "firstname": "string",
  "lastname": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": "string",
  "sendLeadNotification": true,
  "stripeCustomerId": "string",
  "type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressInputModel](#schemaaddressinputmodel)|false|none|none|
|contact|[ContactInputModel](#schemacontactinputmodel)|false|none|none|
|customFields|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|none|
|email|string \| null|false|none|none|
|firstname|string \| null|false|none|none|
|lastname|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notificationType|string \| null|false|none|0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS|
|sendLeadNotification|boolean|false|none|none|
|stripeCustomerId|string \| null|false|none|none|
|type|integer(int32) \| null|false|none|none|

<h2 id="tocS_CustomerListViewModel">CustomerListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomerlistviewmodel"></a>
<a id="schema_CustomerListViewModel"></a>
<a id="tocScustomerlistviewmodel"></a>
<a id="tocscustomerlistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "address": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "country": "string",
        "postalCode": "string",
        "state": "string"
      },
      "birthdate": "string",
      "businessName": "string",
      "companyName": "string",
      "contact": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "conferenceInfo": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string",
        "skypeUsername": "string"
      },
      "createdBy": "string",
      "createdOn": "string",
      "customFields": {
        "property1": {
          "name": "string",
          "value": "string"
        },
        "property2": {
          "name": "string",
          "value": "string"
        }
      },
      "deletedStatus": true,
      "deletedTime": "string",
      "disabled": true,
      "email": "string",
      "emailInfo": true,
      "emailPromotion": true,
      "firstname": "string",
      "gender": "string",
      "groupId": "string",
      "id": "string",
      "inviteEmailSent": "string",
      "lastVisitDate": "string",
      "lastname": "string",
      "latitude": "string",
      "locationId": "string",
      "longitude": "string",
      "modifiedBy": "string",
      "modifiedOn": "string",
      "name": "string",
      "notificationType": "string",
      "object": "string",
      "registeredBy": "string",
      "registrationDate": "string",
      "resourceId": "string",
      "stripeCustomerId": "string",
      "subscriptionId": "string",
      "verificationDate": "string",
      "verifiedBy": "string",
      "welcomeEmailSent": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|data|[[CustomerViewModel](#schemacustomerviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_CustomerUpdateModel">CustomerUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomerupdatemodel"></a>
<a id="schema_CustomerUpdateModel"></a>
<a id="tocScustomerupdatemodel"></a>
<a id="tocscustomerupdatemodel"></a>

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "contact": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "conferenceInfo": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "preferredPhoneType": "string",
    "skypeUsername": "string"
  },
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "email": "string",
  "firstname": "string",
  "lastname": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": "string",
  "stripeCustomerId": "string",
  "type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressUpdateModel](#schemaaddressupdatemodel)|false|none|none|
|contact|[ContactUpdateModel](#schemacontactupdatemodel)|false|none|none|
|customFields|[CustomFieldUpdateModel](#schemacustomfieldupdatemodel)|false|none|none|
|email|string \| null|false|none|none|
|firstname|string \| null|false|none|none|
|lastname|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notificationType|string \| null|false|none|0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS|
|stripeCustomerId|string \| null|false|none|none|
|type|integer(int32) \| null|false|none|none|

<h2 id="tocS_CustomerViewModel">CustomerViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomerviewmodel"></a>
<a id="schema_CustomerViewModel"></a>
<a id="tocScustomerviewmodel"></a>
<a id="tocscustomerviewmodel"></a>

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "birthdate": "string",
  "businessName": "string",
  "companyName": "string",
  "contact": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "conferenceInfo": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string",
    "skypeUsername": "string"
  },
  "createdBy": "string",
  "createdOn": "string",
  "customFields": {
    "property1": {
      "name": "string",
      "value": "string"
    },
    "property2": {
      "name": "string",
      "value": "string"
    }
  },
  "deletedStatus": true,
  "deletedTime": "string",
  "disabled": true,
  "email": "string",
  "emailInfo": true,
  "emailPromotion": true,
  "firstname": "string",
  "gender": "string",
  "groupId": "string",
  "id": "string",
  "inviteEmailSent": "string",
  "lastVisitDate": "string",
  "lastname": "string",
  "latitude": "string",
  "locationId": "string",
  "longitude": "string",
  "modifiedBy": "string",
  "modifiedOn": "string",
  "name": "string",
  "notificationType": "string",
  "object": "string",
  "registeredBy": "string",
  "registrationDate": "string",
  "resourceId": "string",
  "stripeCustomerId": "string",
  "subscriptionId": "string",
  "verificationDate": "string",
  "verifiedBy": "string",
  "welcomeEmailSent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressViewModel](#schemaaddressviewmodel)|false|none|none|
|birthdate|string \| null|false|none|none|
|businessName|string \| null|false|none|none|
|companyName|string \| null|false|none|none|
|contact|[ContactViewModel](#schemacontactviewmodel)|false|none|none|
|createdBy|string \| null|false|none|none|
|createdOn|string \| null|false|none|none|
|customFields|object \| null|false|none|none|
|deletedStatus|boolean|false|none|none|
|deletedTime|string \| null|false|none|none|
|disabled|boolean \| null|false|none|none|
|email|string \| null|false|none|none|
|emailInfo|boolean \| null|false|none|none|
|emailPromotion|boolean \| null|false|none|none|
|firstname|string \| null|false|none|none|
|gender|string \| null|false|none|none|
|groupId|string \| null|false|none|none|
|id|string \| null|false|none|none|
|inviteEmailSent|string \| null|false|none|none|
|lastVisitDate|string \| null|false|none|none|
|lastname|string \| null|false|none|none|
|latitude|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|longitude|string \| null|false|none|none|
|modifiedBy|string \| null|false|none|none|
|modifiedOn|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notificationType|string \| null|false|none|none|
|object|string \| null|false|none|none|
|registeredBy|string \| null|false|none|none|
|registrationDate|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|stripeCustomerId|string \| null|false|none|none|
|subscriptionId|string \| null|false|none|none|
|verificationDate|string \| null|false|none|none|
|verifiedBy|string \| null|false|none|none|
|welcomeEmailSent|string \| null|false|none|none|

<h2 id="tocS_LocationListViewModel">LocationListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemalocationlistviewmodel"></a>
<a id="schema_LocationListViewModel"></a>
<a id="tocSlocationlistviewmodel"></a>
<a id="tocslocationlistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "address": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "country": "string",
        "postalCode": "string",
        "state": "string"
      },
      "adminEmail": "string",
      "adminName": "string",
      "appointmentReminders": {
        "emailFirstReminder": 0,
        "emailFirstReminderInterval": 0,
        "emailSecondReminder": 0,
        "emailSecondReminderInterval": 0,
        "smsFirstReminder": 0,
        "smsFirstReminderInterval": 0,
        "smsSecondReminder": 0,
        "smsSecondReminderInterval": 0
      },
      "businessHolidays": [
        {
          "businessClosed": true,
          "holidayName": "string",
          "id": "string",
          "publicHolidayId": 0
        }
      ],
      "businessHours": {
        "fri": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "mon": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "sat": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "sun": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "thu": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "tue": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        },
        "wed": {
          "endTime": 0,
          "is24Hours": true,
          "isOpen": true,
          "startTime": 0
        }
      },
      "companyId": "string",
      "companyName": "string",
      "defaults": {
        "autoUpdateCustomer": true,
        "businessNotification": true,
        "customerCity": true,
        "customerState": true,
        "emailInfo": true,
        "enableUtcTimezone": true,
        "object": "string"
      },
      "email": "string",
      "fax": "string",
      "friendlyId": "string",
      "id": "string",
      "imageUrl": "string",
      "latitude": 0,
      "logo": "string",
      "longitude": 0,
      "name": "string",
      "object": "string",
      "phone": "string",
      "primaryBusiness": true,
      "primaryCalendarId": "string",
      "regionId": "string",
      "services": [
        {
          "id": 0,
          "object": "string",
          "serviceId": 0,
          "serviceName": "string"
        }
      ],
      "settings": {
        "availabilityForm": 0,
        "bookAheadUnit": 0,
        "bookAheadValue": 0,
        "bookInAdvance": 0,
        "bookWithAccount": true,
        "bookingConfirmationMessage": "string",
        "bookingMessage": "string",
        "bookingPolicy": "string",
        "bookingTimerMins": 0,
        "businessId": "string",
        "companyId": "string",
        "customerBookingsPerDay": 0,
        "customerVerification": true,
        "defaultService": true,
        "defaultToCustomerTimezone": true,
        "disableAuthorization": true,
        "enableWorldTimezones": true,
        "enabled": true,
        "familyMembersEnabled": true,
        "firstAvailable": true,
        "formFlow": 0,
        "hideBreadCrumbNav": true,
        "hideContinueBooking": true,
        "hideLocationNav": true,
        "hideNavBar": true,
        "hideServiceGroupsNav": true,
        "hideServicesNav": true,
        "id": 0,
        "lateCancelAction": 0,
        "lateCancelHours": 0,
        "lateRescheduleAction": 0,
        "lateRescheduleHours": 0,
        "liveMode": true,
        "locationId": "string",
        "object": "string",
        "resourceAnyLabel": "string",
        "resourceLabel": "string",
        "resourceSelection": true,
        "returnToAvailability": true,
        "returnToService": true,
        "serviceLabel": "string",
        "showBusinessLogo": true,
        "showOnSchedLogo": true,
        "showServiceGroups": true
      },
      "timezoneIana": "string",
      "timezoneId": "string",
      "timezoneOffset": 0,
      "travel": {
        "distance": "string",
        "proximity": "string",
        "startAddress": "string",
        "startLat": "string",
        "startLon": "string",
        "units": "string"
      },
      "website": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|data|[[LocationViewModel](#schemalocationviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_LocationViewModel">LocationViewModel</h2>
<!-- backwards compatibility -->
<a id="schemalocationviewmodel"></a>
<a id="schema_LocationViewModel"></a>
<a id="tocSlocationviewmodel"></a>
<a id="tocslocationviewmodel"></a>

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "adminEmail": "string",
  "adminName": "string",
  "appointmentReminders": {
    "emailFirstReminder": 0,
    "emailFirstReminderInterval": 0,
    "emailSecondReminder": 0,
    "emailSecondReminderInterval": 0,
    "smsFirstReminder": 0,
    "smsFirstReminderInterval": 0,
    "smsSecondReminder": 0,
    "smsSecondReminderInterval": 0
  },
  "businessHolidays": [
    {
      "businessClosed": true,
      "holidayName": "string",
      "id": "string",
      "publicHolidayId": 0
    }
  ],
  "businessHours": {
    "fri": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "mon": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "sat": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "sun": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "thu": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "tue": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    },
    "wed": {
      "endTime": 0,
      "is24Hours": true,
      "isOpen": true,
      "startTime": 0
    }
  },
  "companyId": "string",
  "companyName": "string",
  "defaults": {
    "autoUpdateCustomer": true,
    "businessNotification": true,
    "customerCity": true,
    "customerState": true,
    "emailInfo": true,
    "enableUtcTimezone": true,
    "object": "string"
  },
  "email": "string",
  "fax": "string",
  "friendlyId": "string",
  "id": "string",
  "imageUrl": "string",
  "latitude": 0,
  "logo": "string",
  "longitude": 0,
  "name": "string",
  "object": "string",
  "phone": "string",
  "primaryBusiness": true,
  "primaryCalendarId": "string",
  "regionId": "string",
  "services": [
    {
      "id": 0,
      "object": "string",
      "serviceId": 0,
      "serviceName": "string"
    }
  ],
  "settings": {
    "availabilityForm": 0,
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0,
    "bookWithAccount": true,
    "bookingConfirmationMessage": "string",
    "bookingMessage": "string",
    "bookingPolicy": "string",
    "bookingTimerMins": 0,
    "businessId": "string",
    "companyId": "string",
    "customerBookingsPerDay": 0,
    "customerVerification": true,
    "defaultService": true,
    "defaultToCustomerTimezone": true,
    "disableAuthorization": true,
    "enableWorldTimezones": true,
    "enabled": true,
    "familyMembersEnabled": true,
    "firstAvailable": true,
    "formFlow": 0,
    "hideBreadCrumbNav": true,
    "hideContinueBooking": true,
    "hideLocationNav": true,
    "hideNavBar": true,
    "hideServiceGroupsNav": true,
    "hideServicesNav": true,
    "id": 0,
    "lateCancelAction": 0,
    "lateCancelHours": 0,
    "lateRescheduleAction": 0,
    "lateRescheduleHours": 0,
    "liveMode": true,
    "locationId": "string",
    "object": "string",
    "resourceAnyLabel": "string",
    "resourceLabel": "string",
    "resourceSelection": true,
    "returnToAvailability": true,
    "returnToService": true,
    "serviceLabel": "string",
    "showBusinessLogo": true,
    "showOnSchedLogo": true,
    "showServiceGroups": true
  },
  "timezoneIana": "string",
  "timezoneId": "string",
  "timezoneOffset": 0,
  "travel": {
    "distance": "string",
    "proximity": "string",
    "startAddress": "string",
    "startLat": "string",
    "startLon": "string",
    "units": "string"
  },
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressViewModel](#schemaaddressviewmodel)|false|none|none|
|adminEmail|string \| null|false|none|none|
|adminName|string \| null|false|none|none|
|appointmentReminders|[AppointmentReminderViewModel](#schemaappointmentreminderviewmodel)|false|none|none|
|businessHolidays|[[BusinessHolidayViewModel](#schemabusinessholidayviewmodel)]|false|none|none|
|businessHours|[BusinessHoursViewModel](#schemabusinesshoursviewmodel)|false|none|none|
|companyId|string \| null|false|none|none|
|companyName|string \| null|false|none|none|
|defaults|[BusinessDefaultsViewModel](#schemabusinessdefaultsviewmodel)|false|none|none|
|email|string \| null|false|none|none|
|fax|string \| null|false|none|none|
|friendlyId|string \| null|false|none|none|
|id|string \| null|false|none|none|
|imageUrl|string \| null|false|none|none|
|latitude|number(double)|false|none|none|
|logo|string \| null|false|none|none|
|longitude|number(double)|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|primaryBusiness|boolean|false|none|none|
|primaryCalendarId|string \| null|false|none|none|
|regionId|string \| null|false|none|none|
|services|[[BusinessServiceViewModel](#schemabusinessserviceviewmodel)]|false|none|none|
|settings|[OnlineSettingsViewModel](#schemaonlinesettingsviewmodel)|false|none|none|
|timezoneIana|string \| null|false|none|none|
|timezoneId|string \| null|false|none|none|
|timezoneOffset|integer(int32) \| null|false|none|none|
|travel|[TravelViewModel](#schematravelviewmodel)|false|none|none|
|website|string \| null|false|none|none|

<h2 id="tocS_OnlineSettingsViewModel">OnlineSettingsViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaonlinesettingsviewmodel"></a>
<a id="schema_OnlineSettingsViewModel"></a>
<a id="tocSonlinesettingsviewmodel"></a>
<a id="tocsonlinesettingsviewmodel"></a>

```json
{
  "availabilityForm": 0,
  "bookAheadUnit": 0,
  "bookAheadValue": 0,
  "bookInAdvance": 0,
  "bookWithAccount": true,
  "bookingConfirmationMessage": "string",
  "bookingMessage": "string",
  "bookingPolicy": "string",
  "bookingTimerMins": 0,
  "businessId": "string",
  "companyId": "string",
  "customerBookingsPerDay": 0,
  "customerVerification": true,
  "defaultService": true,
  "defaultToCustomerTimezone": true,
  "disableAuthorization": true,
  "enableWorldTimezones": true,
  "enabled": true,
  "familyMembersEnabled": true,
  "firstAvailable": true,
  "formFlow": 0,
  "hideBreadCrumbNav": true,
  "hideContinueBooking": true,
  "hideLocationNav": true,
  "hideNavBar": true,
  "hideServiceGroupsNav": true,
  "hideServicesNav": true,
  "id": 0,
  "lateCancelAction": 0,
  "lateCancelHours": 0,
  "lateRescheduleAction": 0,
  "lateRescheduleHours": 0,
  "liveMode": true,
  "locationId": "string",
  "object": "string",
  "resourceAnyLabel": "string",
  "resourceLabel": "string",
  "resourceSelection": true,
  "returnToAvailability": true,
  "returnToService": true,
  "serviceLabel": "string",
  "showBusinessLogo": true,
  "showOnSchedLogo": true,
  "showServiceGroups": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availabilityForm|integer(int32)|false|none|none|
|bookAheadUnit|integer(int32)|false|none|none|
|bookAheadValue|integer(int32)|false|none|none|
|bookInAdvance|integer(int32)|false|none|none|
|bookWithAccount|boolean|false|none|none|
|bookingConfirmationMessage|string \| null|false|none|none|
|bookingMessage|string \| null|false|none|none|
|bookingPolicy|string \| null|false|none|none|
|bookingTimerMins|integer(int32)|false|none|none|
|businessId|string \| null|false|none|none|
|companyId|string \| null|false|none|none|
|customerBookingsPerDay|integer(int32)|false|none|none|
|customerVerification|boolean|false|none|none|
|defaultService|boolean \| null|false|none|none|
|defaultToCustomerTimezone|boolean|false|none|none|
|disableAuthorization|boolean \| null|false|none|none|
|enableWorldTimezones|boolean \| null|false|none|none|
|enabled|boolean|false|none|none|
|familyMembersEnabled|boolean|false|none|none|
|firstAvailable|boolean \| null|false|none|none|
|formFlow|integer(int32)|false|none|none|
|hideBreadCrumbNav|boolean|false|none|none|
|hideContinueBooking|boolean \| null|false|none|none|
|hideLocationNav|boolean \| null|false|none|none|
|hideNavBar|boolean \| null|false|none|none|
|hideServiceGroupsNav|boolean \| null|false|none|none|
|hideServicesNav|boolean \| null|false|none|none|
|id|integer(int32)|false|none|none|
|lateCancelAction|integer(int32)|false|none|none|
|lateCancelHours|integer(int32)|false|none|none|
|lateRescheduleAction|integer(int32)|false|none|none|
|lateRescheduleHours|integer(int32)|false|none|none|
|liveMode|boolean \| null|false|none|none|
|locationId|string \| null|false|none|none|
|object|string \| null|false|none|none|
|resourceAnyLabel|string \| null|false|none|none|
|resourceLabel|string \| null|false|none|none|
|resourceSelection|boolean|false|none|none|
|returnToAvailability|boolean|false|none|none|
|returnToService|boolean|false|none|none|
|serviceLabel|string \| null|false|none|none|
|showBusinessLogo|boolean|false|none|none|
|showOnSchedLogo|boolean|false|none|none|
|showServiceGroups|boolean|false|none|none|

<h2 id="tocS_PhoneViewModel">PhoneViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaphoneviewmodel"></a>
<a id="schema_PhoneViewModel"></a>
<a id="tocSphoneviewmodel"></a>
<a id="tocsphoneviewmodel"></a>

```json
{
  "businessPhone": "string",
  "businessPhoneExt": "string",
  "homePhone": "string",
  "mobilePhone": "string",
  "phoneType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessPhone|string \| null|false|none|none|
|businessPhoneExt|string \| null|false|none|none|
|homePhone|string \| null|false|none|none|
|mobilePhone|string \| null|false|none|none|
|phoneType|string \| null|false|none|none|

<h2 id="tocS_RepeatViewModel">RepeatViewModel</h2>
<!-- backwards compatibility -->
<a id="schemarepeatviewmodel"></a>
<a id="schema_RepeatViewModel"></a>
<a id="tocSrepeatviewmodel"></a>
<a id="tocsrepeatviewmodel"></a>

```json
{
  "frequency": "string",
  "interval": 0,
  "monthDay": "string",
  "monthType": "string",
  "weekdays": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|string \| null|false|none|none|
|interval|integer(int32)|false|none|none|
|monthDay|string \| null|false|none|none|
|monthType|string \| null|false|none|none|
|weekdays|string \| null|false|none|none|

<h2 id="tocS_ResourceGroupListViewModel">ResourceGroupListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcegrouplistviewmodel"></a>
<a id="schema_ResourceGroupListViewModel"></a>
<a id="tocSresourcegrouplistviewmodel"></a>
<a id="tocsresourcegrouplistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "bookingNotification": 0,
      "deletedStatus": true,
      "deletedTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "email": "string",
      "id": "string",
      "locationId": "string",
      "name": "string",
      "object": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|data|[[ResourceGroupViewModel](#schemaresourcegroupviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ResourceGroupViewModel">ResourceGroupViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcegroupviewmodel"></a>
<a id="schema_ResourceGroupViewModel"></a>
<a id="tocSresourcegroupviewmodel"></a>
<a id="tocsresourcegroupviewmodel"></a>

```json
{
  "bookingNotification": 0,
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "email": "string",
  "id": "string",
  "locationId": "string",
  "name": "string",
  "object": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingNotification|integer(int32)|false|none|none|
|deletedStatus|boolean|false|none|none|
|deletedTime|string(date-time) \| null|false|none|none|
|description|string \| null|false|none|none|
|email|string \| null|false|none|none|
|id|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|

<h2 id="tocS_ResourceHourViewModel">ResourceHourViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcehourviewmodel"></a>
<a id="schema_ResourceHourViewModel"></a>
<a id="tocSresourcehourviewmodel"></a>
<a id="tocsresourcehourviewmodel"></a>

```json
{
  "endTime": 0,
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|integer(int32)|false|none|none|
|startTime|integer(int32)|false|none|none|

<h2 id="tocS_ResourceHoursViewModel">ResourceHoursViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcehoursviewmodel"></a>
<a id="schema_ResourceHoursViewModel"></a>
<a id="tocSresourcehoursviewmodel"></a>
<a id="tocsresourcehoursviewmodel"></a>

```json
{
  "fri": {
    "endTime": 0,
    "startTime": 0
  },
  "mon": {
    "endTime": 0,
    "startTime": 0
  },
  "sat": {
    "endTime": 0,
    "startTime": 0
  },
  "sun": {
    "endTime": 0,
    "startTime": 0
  },
  "thu": {
    "endTime": 0,
    "startTime": 0
  },
  "tue": {
    "endTime": 0,
    "startTime": 0
  },
  "wed": {
    "endTime": 0,
    "startTime": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fri|[ResourceHourViewModel](#schemaresourcehourviewmodel)|false|none|none|
|mon|[ResourceHourViewModel](#schemaresourcehourviewmodel)|false|none|none|
|sat|[ResourceHourViewModel](#schemaresourcehourviewmodel)|false|none|none|
|sun|[ResourceHourViewModel](#schemaresourcehourviewmodel)|false|none|none|
|thu|[ResourceHourViewModel](#schemaresourcehourviewmodel)|false|none|none|
|tue|[ResourceHourViewModel](#schemaresourcehourviewmodel)|false|none|none|
|wed|[ResourceHourViewModel](#schemaresourcehourviewmodel)|false|none|none|

<h2 id="tocS_ResourceListViewModel">ResourceListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelistviewmodel"></a>
<a id="schema_ResourceListViewModel"></a>
<a id="tocSresourcelistviewmodel"></a>
<a id="tocsresourcelistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "address": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "country": "string",
        "postalCode": "string",
        "state": "string"
      },
      "availability": {
        "fri": {
          "endTime": 0,
          "startTime": 0
        },
        "mon": {
          "endTime": 0,
          "startTime": 0
        },
        "sat": {
          "endTime": 0,
          "startTime": 0
        },
        "sun": {
          "endTime": 0,
          "startTime": 0
        },
        "thu": {
          "endTime": 0,
          "startTime": 0
        },
        "tue": {
          "endTime": 0,
          "startTime": 0
        },
        "wed": {
          "endTime": 0,
          "startTime": 0
        }
      },
      "bioLink": "string",
      "bookingNotification": 0,
      "calendarAvailability": 0,
      "contact": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "conferenceInfo": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string",
        "skypeUsername": "string"
      },
      "customFields": {
        "field1": "string",
        "field10": "string",
        "field2": "string",
        "field3": "string",
        "field4": "string",
        "field5": "string",
        "field6": "string",
        "field7": "string",
        "field8": "string",
        "field9": "string"
      },
      "deletedStatus": true,
      "deletedTime": "1970-01-01T00:00:00Z",
      "description": "string",
      "effectiveDate": "1970-01-01T00:00:00Z",
      "email": "string",
      "gender": "string",
      "googleCalendarId": "string",
      "groupId": "string",
      "hourly": 0,
      "id": "string",
      "ignoreBusinessHours": true,
      "imageUrl": "string",
      "locationId": "string",
      "name": "string",
      "notificationType": 0,
      "object": "string",
      "outlookCalendarId": "string",
      "recurringAvailability": true,
      "services": [
        {
          "object": "string",
          "resourceId": 0,
          "resourceName": "string",
          "serviceId": 0,
          "serviceName": "string"
        }
      ],
      "skypeName": "string",
      "sortKey": 0,
      "timezoneIana": "string",
      "timezoneId": "string",
      "timezoneOffset": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|data|[[ResourceViewModel](#schemaresourceviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ResourceServiceListViewModel">ResourceServiceListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceservicelistviewmodel"></a>
<a id="schema_ResourceServiceListViewModel"></a>
<a id="tocSresourceservicelistviewmodel"></a>
<a id="tocsresourceservicelistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "object": "string",
      "resourceId": 0,
      "resourceName": "string",
      "serviceId": 0,
      "serviceName": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|data|[[ResourceServiceViewModel](#schemaresourceserviceviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ResourceServiceViewModel">ResourceServiceViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceserviceviewmodel"></a>
<a id="schema_ResourceServiceViewModel"></a>
<a id="tocSresourceserviceviewmodel"></a>
<a id="tocsresourceserviceviewmodel"></a>

```json
{
  "object": "string",
  "resourceId": 0,
  "resourceName": "string",
  "serviceId": 0,
  "serviceName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string \| null|false|none|none|
|resourceId|integer(int32)|false|none|none|
|resourceName|string \| null|false|none|none|
|serviceId|integer(int32)|false|none|none|
|serviceName|string \| null|false|none|none|

<h2 id="tocS_ResourceViewModel">ResourceViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceviewmodel"></a>
<a id="schema_ResourceViewModel"></a>
<a id="tocSresourceviewmodel"></a>
<a id="tocsresourceviewmodel"></a>

```json
{
  "address": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "availability": {
    "fri": {
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "endTime": 0,
      "startTime": 0
    }
  },
  "bioLink": "string",
  "bookingNotification": 0,
  "calendarAvailability": 0,
  "contact": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "conferenceInfo": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string",
    "skypeUsername": "string"
  },
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "description": "string",
  "effectiveDate": "1970-01-01T00:00:00Z",
  "email": "string",
  "gender": "string",
  "googleCalendarId": "string",
  "groupId": "string",
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "outlookCalendarId": "string",
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
      "resourceId": 0,
      "resourceName": "string",
      "serviceId": 0,
      "serviceName": "string"
    }
  ],
  "skypeName": "string",
  "sortKey": 0,
  "timezoneIana": "string",
  "timezoneId": "string",
  "timezoneOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressViewModel](#schemaaddressviewmodel)|false|none|none|
|availability|[ResourceHoursViewModel](#schemaresourcehoursviewmodel)|false|none|none|
|bioLink|string \| null|false|none|none|
|bookingNotification|integer(int32)|false|none|none|
|calendarAvailability|integer(int32)|false|none|none|
|contact|[ContactViewModel](#schemacontactviewmodel)|false|none|none|
|customFields|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|none|
|deletedStatus|boolean|false|none|none|
|deletedTime|string(date-time) \| null|false|none|none|
|description|string \| null|false|none|none|
|effectiveDate|string(date-time) \| null|false|none|none|
|email|string \| null|false|none|none|
|gender|string \| null|false|none|none|
|googleCalendarId|string \| null|false|none|none|
|groupId|string \| null|false|none|none|
|hourly|number(double) \| null|false|none|none|
|id|string \| null|false|none|none|
|ignoreBusinessHours|boolean|false|none|none|
|imageUrl|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notificationType|integer(int32)|false|none|none|
|object|string \| null|false|none|none|
|outlookCalendarId|string \| null|false|none|none|
|recurringAvailability|boolean \| null|false|none|none|
|services|[[ResourceServiceViewModel](#schemaresourceserviceviewmodel)]|false|none|none|
|skypeName|string \| null|false|none|none|
|sortKey|integer(int32)|false|none|none|
|timezoneIana|string \| null|false|none|none|
|timezoneId|string \| null|false|none|none|
|timezoneOffset|integer(int32) \| null|false|none|none|

<h2 id="tocS_ServiceAllocationListViewModel">ServiceAllocationListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceallocationlistviewmodel"></a>
<a id="schema_ServiceAllocationListViewModel"></a>
<a id="tocSserviceallocationlistviewmodel"></a>
<a id="tocsserviceallocationlistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "bookingCount": 0,
      "bookingLimit": 0,
      "deletedStatus": true,
      "deletedTime": "string",
      "endDate": "string",
      "endTime": 0,
      "id": "string",
      "locationId": "string",
      "object": "string",
      "reason": "string",
      "repeat": {
        "frequency": "string",
        "interval": 0,
        "monthDay": "string",
        "monthType": "string",
        "weekdays": "string"
      },
      "repeats": true,
      "resourceAddress": {
        "addressLine1": "string",
        "addressLine2": "string",
        "city": "string",
        "country": "string",
        "postalCode": "string",
        "state": "string"
      },
      "resourceDescription": "string",
      "resourceId": "string",
      "resourceImageUrl": "string",
      "resourceName": "string",
      "resourcePhone": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string"
      },
      "serviceDescription": "string",
      "serviceDuration": 0,
      "serviceId": "string",
      "serviceImageUrl": "string",
      "serviceName": "string",
      "startDate": "string",
      "startTime": 0,
      "timezoneName": "string",
      "timezoneOffset": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|data|[[ServiceAllocationViewModel](#schemaserviceallocationviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ServiceAllocationViewModel">ServiceAllocationViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceallocationviewmodel"></a>
<a id="schema_ServiceAllocationViewModel"></a>
<a id="tocSserviceallocationviewmodel"></a>
<a id="tocsserviceallocationviewmodel"></a>

```json
{
  "bookingCount": 0,
  "bookingLimit": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": "string",
  "locationId": "string",
  "object": "string",
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": "string",
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "resourceAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "state": "string"
  },
  "resourceDescription": "string",
  "resourceId": "string",
  "resourceImageUrl": "string",
  "resourceName": "string",
  "resourcePhone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "serviceDescription": "string",
  "serviceDuration": 0,
  "serviceId": "string",
  "serviceImageUrl": "string",
  "serviceName": "string",
  "startDate": "string",
  "startTime": 0,
  "timezoneName": "string",
  "timezoneOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingCount|integer(int32)|false|none|none|
|bookingLimit|integer(int32)|false|none|none|
|deletedStatus|boolean|false|none|none|
|deletedTime|string \| null|false|none|none|
|endDate|string \| null|false|none|none|
|endTime|integer(int32)|false|none|none|
|id|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|object|string \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatViewModel](#schemarepeatviewmodel)|false|none|none|
|repeats|boolean|false|none|none|
|resourceAddress|[AddressViewModel](#schemaaddressviewmodel)|false|none|none|
|resourceDescription|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceImageUrl|string \| null|false|none|none|
|resourceName|string \| null|false|none|none|
|resourcePhone|[PhoneViewModel](#schemaphoneviewmodel)|false|none|none|
|serviceDescription|string \| null|false|none|none|
|serviceDuration|integer(int32)|false|none|none|
|serviceId|string \| null|false|none|none|
|serviceImageUrl|string \| null|false|none|none|
|serviceName|string \| null|false|none|none|
|startDate|string \| null|false|none|none|
|startTime|integer(int32)|false|none|none|
|timezoneName|string \| null|false|none|none|
|timezoneOffset|integer(int32) \| null|false|none|none|

<h2 id="tocS_ServiceGroupListViewModel">ServiceGroupListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicegrouplistviewmodel"></a>
<a id="schema_ServiceGroupListViewModel"></a>
<a id="tocSservicegrouplistviewmodel"></a>
<a id="tocsservicegrouplistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "companyId": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "string",
      "isDeleted": true,
      "locationId": "string",
      "name": "string",
      "object": "string",
      "type": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|data|[[ServiceGroupViewModel](#schemaservicegroupviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ServiceGroupViewModel">ServiceGroupViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicegroupviewmodel"></a>
<a id="schema_ServiceGroupViewModel"></a>
<a id="tocSservicegroupviewmodel"></a>
<a id="tocsservicegroupviewmodel"></a>

```json
{
  "companyId": "string",
  "description": "string",
  "id": "string",
  "imageUrl": "string",
  "isDeleted": true,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyId|string \| null|false|none|none|
|description|string \| null|false|none|none|
|id|string \| null|false|none|none|
|imageUrl|string \| null|false|none|none|
|isDeleted|boolean|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|
|type|integer(int32)|false|none|none|

<h2 id="tocS_ServiceHourViewModel">ServiceHourViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicehourviewmodel"></a>
<a id="schema_ServiceHourViewModel"></a>
<a id="tocSservicehourviewmodel"></a>
<a id="tocsservicehourviewmodel"></a>

```json
{
  "endTime": 0,
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|integer(int32)|false|none|none|
|startTime|integer(int32)|false|none|none|

<h2 id="tocS_ServiceHoursViewModel">ServiceHoursViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicehoursviewmodel"></a>
<a id="schema_ServiceHoursViewModel"></a>
<a id="tocSservicehoursviewmodel"></a>
<a id="tocsservicehoursviewmodel"></a>

```json
{
  "fri": {
    "endTime": 0,
    "startTime": 0
  },
  "mon": {
    "endTime": 0,
    "startTime": 0
  },
  "sat": {
    "endTime": 0,
    "startTime": 0
  },
  "sun": {
    "endTime": 0,
    "startTime": 0
  },
  "thu": {
    "endTime": 0,
    "startTime": 0
  },
  "tue": {
    "endTime": 0,
    "startTime": 0
  },
  "wed": {
    "endTime": 0,
    "startTime": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fri|[ServiceHourViewModel](#schemaservicehourviewmodel)|false|none|none|
|mon|[ServiceHourViewModel](#schemaservicehourviewmodel)|false|none|none|
|sat|[ServiceHourViewModel](#schemaservicehourviewmodel)|false|none|none|
|sun|[ServiceHourViewModel](#schemaservicehourviewmodel)|false|none|none|
|thu|[ServiceHourViewModel](#schemaservicehourviewmodel)|false|none|none|
|tue|[ServiceHourViewModel](#schemaservicehourviewmodel)|false|none|none|
|wed|[ServiceHourViewModel](#schemaservicehourviewmodel)|false|none|none|

<h2 id="tocS_ServiceListViewModel">ServiceListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicelistviewmodel"></a>
<a id="schema_ServiceListViewModel"></a>
<a id="tocSservicelistviewmodel"></a>
<a id="tocsservicelistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "availability": {
        "fri": {
          "endTime": 0,
          "startTime": 0
        },
        "mon": {
          "endTime": 0,
          "startTime": 0
        },
        "sat": {
          "endTime": 0,
          "startTime": 0
        },
        "sun": {
          "endTime": 0,
          "startTime": 0
        },
        "thu": {
          "endTime": 0,
          "startTime": 0
        },
        "tue": {
          "endTime": 0,
          "startTime": 0
        },
        "wed": {
          "endTime": 0,
          "startTime": 0
        }
      },
      "bookAheadUnit": 0,
      "bookAheadValue": 0,
      "bookInAdvance": 0,
      "bookingInterval": 0,
      "bookingLimit": 0,
      "calendarId": "string",
      "calendarResourceGroupId": "string",
      "cancellationFeeAmount": 0,
      "cancellationFeeTaxable": true,
      "companyId": "string",
      "consumerPadding": true,
      "customFields": {
        "field1": "string",
        "field10": "string",
        "field2": "string",
        "field3": "string",
        "field4": "string",
        "field5": "string",
        "field6": "string",
        "field7": "string",
        "field8": "string",
        "field9": "string"
      },
      "dailyBookingLimitCount": 0,
      "dailyBookingLimitMinutes": 0,
      "defaultService": true,
      "description": "string",
      "duration": 0,
      "durationInterval": 0,
      "durationMax": 0,
      "durationMin": 0,
      "durationSelect": true,
      "feeAmount": 0,
      "feeTaxable": true,
      "id": "string",
      "imageUrl": "string",
      "locationId": "string",
      "maxBookingLimit": 0,
      "maxCapacity": 0,
      "maxGroupSize": 0,
      "maxResourceBookingLimit": 0,
      "mediaPageUrl": "string",
      "name": "string",
      "nonRefundable": true,
      "object": "string",
      "padding": 0,
      "roundRobin": 0,
      "serviceGroupId": 0,
      "serviceGroupName": "string",
      "showOnline": true,
      "type": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|
|data|[[ServiceViewModel](#schemaserviceviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ServiceSortOrder">ServiceSortOrder</h2>
<!-- backwards compatibility -->
<a id="schemaservicesortorder"></a>
<a id="schema_ServiceSortOrder"></a>
<a id="tocSservicesortorder"></a>
<a id="tocsservicesortorder"></a>

```json
"natural"
```

<h2 id="tocS_ServiceViewModel">ServiceViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceviewmodel"></a>
<a id="schema_ServiceViewModel"></a>
<a id="tocSserviceviewmodel"></a>
<a id="tocsserviceviewmodel"></a>

```json
{
  "availability": {
    "fri": {
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "endTime": 0,
      "startTime": 0
    }
  },
  "bookAheadUnit": 0,
  "bookAheadValue": 0,
  "bookInAdvance": 0,
  "bookingInterval": 0,
  "bookingLimit": 0,
  "calendarId": "string",
  "calendarResourceGroupId": "string",
  "cancellationFeeAmount": 0,
  "cancellationFeeTaxable": true,
  "companyId": "string",
  "consumerPadding": true,
  "customFields": {
    "field1": "string",
    "field10": "string",
    "field2": "string",
    "field3": "string",
    "field4": "string",
    "field5": "string",
    "field6": "string",
    "field7": "string",
    "field8": "string",
    "field9": "string"
  },
  "dailyBookingLimitCount": 0,
  "dailyBookingLimitMinutes": 0,
  "defaultService": true,
  "description": "string",
  "duration": 0,
  "durationInterval": 0,
  "durationMax": 0,
  "durationMin": 0,
  "durationSelect": true,
  "feeAmount": 0,
  "feeTaxable": true,
  "id": "string",
  "imageUrl": "string",
  "locationId": "string",
  "maxBookingLimit": 0,
  "maxCapacity": 0,
  "maxGroupSize": 0,
  "maxResourceBookingLimit": 0,
  "mediaPageUrl": "string",
  "name": "string",
  "nonRefundable": true,
  "object": "string",
  "padding": 0,
  "roundRobin": 0,
  "serviceGroupId": 0,
  "serviceGroupName": "string",
  "showOnline": true,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[ServiceHoursViewModel](#schemaservicehoursviewmodel)|false|none|none|
|bookAheadUnit|integer(int32)|false|none|none|
|bookAheadValue|integer(int32)|false|none|none|
|bookInAdvance|integer(int32)|false|none|none|
|bookingInterval|integer(int32)|false|none|none|
|bookingLimit|integer(int32)|false|none|none|
|calendarId|string \| null|false|none|none|
|calendarResourceGroupId|string \| null|false|none|none|
|cancellationFeeAmount|number(double)|false|none|none|
|cancellationFeeTaxable|boolean|false|none|none|
|companyId|string \| null|false|none|none|
|consumerPadding|boolean|false|none|none|
|customFields|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|none|
|dailyBookingLimitCount|integer(int32)|false|none|none|
|dailyBookingLimitMinutes|integer(int32)|false|none|none|
|defaultService|boolean|false|none|none|
|description|string \| null|false|none|none|
|duration|integer(int32)|false|none|none|
|durationInterval|integer(int32)|false|none|none|
|durationMax|integer(int32)|false|none|none|
|durationMin|integer(int32)|false|none|none|
|durationSelect|boolean|false|none|none|
|feeAmount|number(double)|false|none|none|
|feeTaxable|boolean|false|none|none|
|id|string \| null|false|none|none|
|imageUrl|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|maxBookingLimit|integer(int32)|false|none|none|
|maxCapacity|integer(int32)|false|none|none|
|maxGroupSize|integer(int32)|false|none|none|
|maxResourceBookingLimit|integer(int32)|false|none|none|
|mediaPageUrl|string \| null|false|none|none|
|name|string \| null|false|none|none|
|nonRefundable|boolean|false|none|none|
|object|string \| null|false|none|none|
|padding|integer(int32)|false|none|none|
|roundRobin|integer(int32)|false|none|none|
|serviceGroupId|integer(int32) \| null|false|none|none|
|serviceGroupName|string \| null|false|none|none|
|showOnline|boolean|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_ServicesScope">ServicesScope</h2>
<!-- backwards compatibility -->
<a id="schemaservicesscope"></a>
<a id="schema_ServicesScope"></a>
<a id="tocSservicesscope"></a>
<a id="tocsservicesscope"></a>

```json
"company"
```

<h2 id="tocS_StateViewModel">StateViewModel</h2>
<!-- backwards compatibility -->
<a id="schemastateviewmodel"></a>
<a id="schema_StateViewModel"></a>
<a id="tocSstateviewmodel"></a>
<a id="tocsstateviewmodel"></a>

```json
{
  "code": "string",
  "country": "string",
  "countryName": "string",
  "name": "string",
  "object": "string"
}
```

View model for state object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|none|
|country|string \| null|false|none|none|
|countryName|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|

<h2 id="tocS_TravelViewModel">TravelViewModel</h2>
<!-- backwards compatibility -->
<a id="schematravelviewmodel"></a>
<a id="schema_TravelViewModel"></a>
<a id="tocStravelviewmodel"></a>
<a id="tocstravelviewmodel"></a>

```json
{
  "distance": "string",
  "proximity": "string",
  "startAddress": "string",
  "startLat": "string",
  "startLon": "string",
  "units": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distance|string \| null|false|none|none|
|proximity|string \| null|false|none|none|
|startAddress|string \| null|false|none|none|
|startLat|string \| null|false|none|none|
|startLon|string \| null|false|none|none|
|units|string \| null|false|none|none|

<h2 id="tocS_UnavailableTimeListViewModel">UnavailableTimeListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaunavailabletimelistviewmodel"></a>
<a id="schema_UnavailableTimeListViewModel"></a>
<a id="tocSunavailabletimelistviewmodel"></a>
<a id="tocsunavailabletimelistviewmodel"></a>

```json
{
  "object": "string",
  "unavailableTimes": [
    {
      "calendarId": "string",
      "date": "string",
      "endDateTime": "string",
      "entityId": 0,
      "entityType": "string",
      "fromTime": 0,
      "locationId": "string",
      "objectName": "string",
      "reason": "string",
      "reasonCode": "string",
      "resourceId": "string",
      "resourceName": "string",
      "serviceId": "string",
      "serviceName": "string",
      "startDateTime": "string",
      "toTime": 0,
      "tzOffset": 0
    }
  ],
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string \| null|false|none|none|
|unavailableTimes|[[UnavailableTimeViewModel](#schemaunavailabletimeviewmodel)]|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_UnavailableTimeViewModel">UnavailableTimeViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaunavailabletimeviewmodel"></a>
<a id="schema_UnavailableTimeViewModel"></a>
<a id="tocSunavailabletimeviewmodel"></a>
<a id="tocsunavailabletimeviewmodel"></a>

```json
{
  "calendarId": "string",
  "date": "string",
  "endDateTime": "string",
  "entityId": 0,
  "entityType": "string",
  "fromTime": 0,
  "locationId": "string",
  "objectName": "string",
  "reason": "string",
  "reasonCode": "string",
  "resourceId": "string",
  "resourceName": "string",
  "serviceId": "string",
  "serviceName": "string",
  "startDateTime": "string",
  "toTime": 0,
  "tzOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendarId|string \| null|false|none|none|
|date|string \| null|false|none|none|
|endDateTime|string \| null|false|none|none|
|entityId|integer(int32)|false|none|none|
|entityType|string \| null|false|none|none|
|fromTime|integer(int32)|false|none|none|
|locationId|string \| null|false|none|none|
|objectName|string \| null|false|none|none|
|reason|string \| null|false|none|none|
|reasonCode|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceName|string \| null|false|none|none|
|serviceId|string \| null|false|none|none|
|serviceName|string \| null|false|none|none|
|startDateTime|string \| null|false|none|none|
|toTime|integer(int32)|false|none|none|
|tzOffset|integer(int32)|false|none|none|
