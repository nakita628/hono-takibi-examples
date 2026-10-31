<h1 id="onsched-setup-api">OnSched Setup API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Build secure and scalable custom apps for onboarding and setup. Our flexible API provides many options for configuration.
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

<h1 id="onsched-setup-api-appointments">Appointments</h1>

## List Appointments

> Code samples

```bash
curl https://example.com/setup/v1/appointments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/appointments`

<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

<h3 id="list-appointments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|email|query|string|false|Filter appointments by email address|
|lastname|query|string|false|Filter appointments by lastname or part of|
|serviceId|query|string|false|Filter appointments by service|
|calendarId|query|string|false|Filter appointments by calendar|
|resourceId|query|string|false|Filter appointments by resource|
|customerId|query|string|false|Filter appointments by customer|
|serviceAllocationId|query|string|false|Filter appointments by service allocation|
|startDate|query|string(date-time)|false|Format YYYY-MM-DD: Filter appointments by on/after startDate|
|endDate|query|string(date-time)|false|Format YYYY-MM-DD: Filter appointments on/before endDate|
|status|query|string|false|Filter appointments by status: IN, BK, CN, RE, RS|
|bookedBy|query|string|false|Filter appointments by user email who booked|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

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

<h3 id="list-appointments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentListViewModel](#schemaappointmentlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Appointment

> Code samples

```bash
curl https://example.com/setup/v1/appointments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/appointments/{id}`

<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. Find appointment id's by using the <i>GET​/setup​/v1​/appointments</i> endpoint.</p>

<h3 id="get-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of appointment object|

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

## Reassign Appointment

> Code samples

```bash
curl https://example.com/setup/v1/appointments/string/reassign/resource/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/appointments/{id}/reassign/resource/{resourceId}`

<p>Use this endpoint to <b>Reassign</b> an appointment from one resource to another. The result returned is a single appointment that was reassigned to the target resource. A valid <b>appointment id</b> and <b>resource id</b> is required. Find appointment id's by using the <i>GET /setup/v1/appointments</i> endpoint, find resource id's by using the <i>GET ​/setup​/v1​/resources</i> endpoint.</p>

<h3 id="reassign-appointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of appointment object|
|resourceId|path|string|true|id of target resource|

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

<h3 id="reassign-appointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentViewModel](#schemaappointmentviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-setup-api-businessusers">BusinessUsers</h1>

## List Users

> Code samples

```bash
curl https://example.com/setup/v1/businessusers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/businessusers`

<p>Use this endpoint to return a <b>List of Business Users and their Roles</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|email|query|string|false|Filter by email address|
|role|query|string|false|Filter user role|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "businessName": "string",
      "email": "string",
      "id": "string",
      "identityAccount": true,
      "locationId": "string",
      "name": "string",
      "object": "string",
      "permissions": [
        {
          "access": "string",
          "function": "string",
          "object": "string"
        }
      ],
      "resourceId": "string",
      "resourceName": "string",
      "role": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BusinessUserListViewModel](#schemabusinessuserlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create User

> Code samples

```bash
curl https://example.com/setup/v1/businessusers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string",
    "locationId": "string",
    "name": "string",
    "resourceId": "string",
    "role": "string",
    "sendRegistrationInvite": true
  }'
```

`POST /setup/v1/businessusers`

<p>Use this endpoint to <b>Create</b> a Business User. If not specified, the business location defaults to the primary business location. </p>
<p>Required fields: <b>Name</b>, <b>Email</b> and <b>Role</b><b>Note:</b> If the businessUser is a bookable resource (bizresource) then a resourceId is required.</p>
<p>For role, use one of the values listed. <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>
<p>The <b>sendRegistrationInvite</b> parameter is available to API consumers for their own use. It provides no added functionality in OnSched.</p>

> Body parameter

```json
{
  "email": "string",
  "locationId": "string",
  "name": "string",
  "resourceId": "string",
  "role": "string",
  "sendRegistrationInvite": true
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BusinessUserInputModel](#schemabusinessuserinputmodel)|false|none|
|» email|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» resourceId|body|string \| null|false|none|
|» role|body|string \| null|false|none|
|» sendRegistrationInvite|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "businessName": "string",
  "email": "string",
  "id": "string",
  "identityAccount": true,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "permissions": [
    {
      "access": "string",
      "function": "string",
      "object": "string"
    }
  ],
  "resourceId": "string",
  "resourceName": "string",
  "role": "string"
}
```

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BusinessUserViewModel](#schemabusinessuserviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List User Permissions

> Code samples

```bash
curl https://example.com/setup/v1/businessusers/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/businessusers/permissions`

<p>Use this endpoint to return a <b>List of Business User Permissions by Role</b>. Results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-user-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|query|string|false|Filter permissions by role|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "access": "string",
      "function": "string",
      "object": "string",
      "role": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-user-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BusinessPermissionListViewModel](#schemabusinesspermissionlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List User Companies

> Code samples

```bash
curl https://example.com/setup/v1/businessusers/string/companies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/businessusers/{email}/companies`

<p>Use this endpoint to return a <b>List of Companies</b> associated with the business users email requested. A business user <b>email</b> address is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-user-companies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|path|string|true|Email of business user|
|searchText|query|string|false|All or partial company name|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "id": "string",
      "name": "string",
      "object": "string"
    }
  ],
  "email": "string",
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-user-companies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AuthorizedCompanyListViewModel](#schemaauthorizedcompanylistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get User

> Code samples

```bash
curl https://example.com/setup/v1/businessusers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/businessusers/{id}`

<p>Use this endpoint to return a <b>Business User</b> object. A valid <b>businessUser id</b> is required. Find businessUser id's using the <i>GET /setup/v1/businessusers</i> endpoint.</p>

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of businessUser object|

> Example responses

> 200 Response

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "businessName": "string",
  "email": "string",
  "id": "string",
  "identityAccount": true,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "permissions": [
    {
      "access": "string",
      "function": "string",
      "object": "string"
    }
  ],
  "resourceId": "string",
  "resourceName": "string",
  "role": "string"
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BusinessUserViewModel](#schemabusinessuserviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update User

> Code samples

```bash
curl https://example.com/setup/v1/businessusers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string",
    "name": "string",
    "resourceId": "string",
    "role": "string",
    "sendRegistrationInvite": true
  }'
```

`PUT /setup/v1/businessusers/{id}`

<p>Use this endpoint to <b>Update</b> a Business User. A valid <b>businessUser id</b> is required.</p>
<p>
  <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>

> Body parameter

```json
{
  "email": "string",
  "name": "string",
  "resourceId": "string",
  "role": "string",
  "sendRegistrationInvite": true
}
```

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[BusinessUserUpdateModel](#schemabusinessuserupdatemodel)|false|none|
|» email|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» resourceId|body|string \| null|false|none|
|» role|body|string \| null|false|none|
|» sendRegistrationInvite|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "businessName": "string",
  "email": "string",
  "id": "string",
  "identityAccount": true,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "permissions": [
    {
      "access": "string",
      "function": "string",
      "object": "string"
    }
  ],
  "resourceId": "string",
  "resourceName": "string",
  "role": "string"
}
```

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BusinessUserViewModel](#schemabusinessuserviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete User

> Code samples

```bash
curl https://example.com/setup/v1/businessusers/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/businessusers/{id}`

<p>Use this endpoint to permanently <b>Delete</b> a Business User. A valid <b>businessUser id</b> is required.</p>

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-setup-api-calendars">Calendars</h1>

## List Calendars

> Code samples

```bash
curl https://example.com/setup/v1/calendars \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/calendars`

<p>Use this endpoint to return a <b>List of Calendars</b> from the requested location. If not specified, the business location defaults to the primary business location. </p>

<h3 id="list-calendars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
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
      "bookingsPerSlot": 0,
      "deletedStatus": true,
      "deletedTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "interval": 0,
      "locationId": "string",
      "name": "string",
      "object": "string",
      "primary": true,
      "resourceGroupId": "string",
      "type": "string"
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-calendars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleListViewModel](#schemaschedulelistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## DEPRECATING: Create

> Code samples

```bash
curl https://example.com/setup/v1/calendars \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
    "bookingsPerSlot": 0,
    "interval": 0,
    "locationId": "string",
    "name": "string",
    "resourceGroupId": "string",
    "type": "string"
  }'
```

`POST /setup/v1/calendars`

<p>
  <b>DEPRECATING:</b> Create Calendar</p>
<p>We are no longer supporting Multiple Calendar Functionality as it is part of our Legacy Application and has no relevance in the API.</p>

> Body parameter

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
  "bookingsPerSlot": 0,
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "resourceGroupId": "string",
  "type": "string"
}
```

<h3 id="deprecating-create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScheduleInputModel](#schemascheduleinputmodel)|false|none|
|» availability|body|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|
|» bookingsPerSlot|body|integer(int32)|false|none|
|» interval|body|integer(int32)|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» resourceGroupId|body|string \| null|false|none|
|» type|body|string \| null|false|none|

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
  "bookingsPerSlot": 0,
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "primary": true,
  "resourceGroupId": "string",
  "type": "string"
}
```

<h3 id="deprecating-create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleViewModel](#schemascheduleviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Calendar Block

> Code samples

```bash
curl https://example.com/setup/v1/calendars/block/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endDate": "1970-01-01",
    "endTime": 0,
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`PUT /setup/v1/calendars/block/{id}`

<p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendarBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/calendars​/{id}​/block</i> endpoint for fieldnames and details.</p>

> Body parameter

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="update-calendar-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calendarBlock object|
|body|body|[CalendarBlockUpdateModel](#schemacalendarblockupdatemodel)|false|Resource Block input model|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatInputModel](#schemarepeatinputmodel)|false|none|
|» repeats|body|boolean \| null|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "calendarId": "string",
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
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="update-calendar-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CalendarBlockViewModel](#schemacalendarblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Calendar Block

> Code samples

```bash
curl https://example.com/setup/v1/calendars/block/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/calendars/block/{id}`

<p>Use this endpoint to permanently <b>Delete</b> a calendar block. A valid <b>calendarBlock id</b> is required.</p>

<h3 id="delete-calendar-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of a calendarBlock object|

> Example responses

> 200 Response

```json
{
  "calendarId": "string",
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
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="delete-calendar-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CalendarBlockViewModel](#schemacalendarblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Calendar Block

> Code samples

```bash
curl https://example.com/setup/v1/calendars/blocks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/calendars/blocks/{id}`

<p>Use this endpoint to return a <b>Calendar Block</b>. A valid <b>calendarBlock id</b> is required. </p>

<h3 id="get-calendar-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calendarBlock object|

> Example responses

> 200 Response

```json
{
  "calendarId": "string",
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
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="get-calendar-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CalendarBlockViewModel](#schemacalendarblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Calendar

> Code samples

```bash
curl https://example.com/setup/v1/calendars/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/calendars/{id}`

<p>Use this endpoint to return a <b>Calendar</b> object. A valid <b>calendar id</b> is required.</p>

<h3 id="get-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calendar object|

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
  "bookingsPerSlot": 0,
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "primary": true,
  "resourceGroupId": "string",
  "type": "string"
}
```

<h3 id="get-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleViewModel](#schemascheduleviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Calendar

> Code samples

```bash
curl https://example.com/setup/v1/calendars/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
    "bookingsPerSlot": 0,
    "interval": 0,
    "locationId": "string",
    "name": "string",
    "resourceGroupId": "string",
    "type": "string"
  }'
```

`PUT /setup/v1/calendars/{id}`

<p>Use this endpoint to <b>Update</b> a calendar object. A valid <b>calendar id</b> is required. When your company was created a calendar object was automatically created with 24-hour weekly availability. Its <b>name = Main</b>, the <b>type = resource</b> and by default the <b>interval = 30 mins</b>. We are currently supporting resource calendar type. Other types were part of our Legacy Application and has no relevance in the API product.</p>

> Body parameter

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
  "bookingsPerSlot": 0,
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "resourceGroupId": "string",
  "type": "string"
}
```

<h3 id="update-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calendar object|
|body|body|[ScheduleUpdateModel](#schemascheduleupdatemodel)|false|Input model for the calendar object|
|» availability|body|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|
|» bookingsPerSlot|body|integer(int32)|false|none|
|» interval|body|integer(int32)|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» resourceGroupId|body|string \| null|false|none|
|» type|body|string \| null|false|none|

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
  "bookingsPerSlot": 0,
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "primary": true,
  "resourceGroupId": "string",
  "type": "string"
}
```

<h3 id="update-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleViewModel](#schemascheduleviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Calendar

> Code samples

```bash
curl https://example.com/setup/v1/calendars/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/calendars/{id}`

<p>Use this endpoint to <b>Delete</b> a calendar object. A valid <b>calendar id</b> is required. The calendar is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/calendars​/{id}​/recover </i>endpoint.</p>

<h3 id="delete-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calendar object|

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
  "bookingsPerSlot": 0,
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "primary": true,
  "resourceGroupId": "string",
  "type": "string"
}
```

<h3 id="delete-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleViewModel](#schemascheduleviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Calendar Block

> Code samples

```bash
curl https://example.com/setup/v1/calendars/string/block \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endDate": "1970-01-01",
    "endTime": 0,
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`POST /setup/v1/calendars/{id}/block`

<p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendar id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
<p>Calendar blocks can be set to specific time ranges or for the whole day. Th block a whole day set the startTime to 0 and endTime to 2400.</p>
<p>Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.</p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b>  is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
<p>
  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
<p>
  <b>Repeats will end on the date specified by the end date.</b>
</p>

> Body parameter

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="create-calendar-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calendar object|
|body|body|[CalendarBlockInputModel](#schemacalendarblockinputmodel)|false|none|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatInputModel](#schemarepeatinputmodel)|false|none|
|» repeats|body|boolean \| null|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="create-calendar-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Calendar Blocks

> Code samples

```bash
curl https://example.com/setup/v1/calendars/string/blocks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/calendars/{id}/blocks`

<p>Use this endpoint to return a <b>List of Calendar Blocks</b> for the requested calendar. A valid <b>calendar id</b> is required. </p>

<h3 id="list-calendar-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calendar to list blocks|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "calendarId": "string",
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
      "startDate": "string",
      "startTime": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-calendar-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid response|[CalendarBlockListViewModel](#schemacalendarblocklistviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|401|Unauthorized|Authorization error.|None|
|404|Not Found|Resource was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Recover Calendar

> Code samples

```bash
curl https://example.com/setup/v1/calendars/string/recover \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/calendars/{id}/recover`

<p>Use this endpoint to <b>Recover</b> a previously deleted calendar object. A valid <b>calendar id</b> is required.</p>

<h3 id="recover-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calendar object|

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
  "bookingsPerSlot": 0,
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "primary": true,
  "resourceGroupId": "string",
  "type": "string"
}
```

<h3 id="recover-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScheduleViewModel](#schemascheduleviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Calendar Services

> Code samples

```bash
curl https://example.com/setup/v1/calendars/string/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/calendars/{id}/services`

<p>Use this endpoint to return a <b>List of Linked Services</b> of a calendar object. A valid <b>calendar id</b> is required. Find calendar id's by using the <i>GET /setup/v1/calendars</i> endpoint.</p>

<h3 id="list-calendar-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calendar object|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

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

<h3 id="list-calendar-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceListViewModel](#schemaservicelistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-setup-api-companies">Companies</h1>

## Get Company

> Code samples

```bash
curl https://example.com/setup/v1/companies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/companies`

<p>Use this endpoint to return the <b>Authorized Company</b> information. The company is the main entity that oversees all business locations defined below it, hierarchically. </p>
<p>Access to the company credentials gives you access to all business locations defined in the authorized company. Client credentials resolve to a single company and are purposely hidden from this endpoint.</p>

> Example responses

> 200 Response

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "bookingWebhookUrl": "string",
  "city": "string",
  "clientId": "string",
  "clientSecret": "string",
  "country": "string",
  "customerWebhookUrl": "string",
  "deletedStatus": true,
  "deletedTime": "string",
  "disableEmailAndSmsNotifications": true,
  "email": "string",
  "fax": "string",
  "id": "string",
  "name": "string",
  "notificationFromEmailAddress": "string",
  "notificationFromName": "string",
  "object": "string",
  "phone": "string",
  "postalCode": "string",
  "registrationDate": "string",
  "registrationEmail": "string",
  "reminderWebhookUrl": "string",
  "resourceWebhookUrl": "string",
  "state": "string",
  "timezoneId": "string",
  "timezoneName": "string",
  "webhookSignatureHash": "string",
  "website": "string"
}
```

<h3 id="get-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyViewModel](#schemacompanyviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Company

> Code samples

```bash
curl https://example.com/setup/v1/companies \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addressLine1": "string",
    "addressLine2": "string",
    "bookingWebhookUrl": "string",
    "city": "string",
    "country": "string",
    "customerWebhookUrl": "string",
    "disableEmailAndSmsNotifications": true,
    "email": "string",
    "fax": "string",
    "name": "string",
    "notificationFromEmailAddress": "string",
    "notificationFromName": "string",
    "phone": "string",
    "postalCode": "string",
    "registrationEmail": "string",
    "reminderWebhookUrl": "string",
    "resourceWebhookUrl": "string",
    "state": "string",
    "timezoneName": "string",
    "webhookSignatureHash": "string",
    "website": "string"
  }'
```

`PUT /setup/v1/companies`

<p>Use this endpoint to <b>Update</b> the authorized company information. Your client credentials resolve to a single company. The timezoneName must be expressed as an IANA Timezone, e.g., <i>America/New_York</i>. </p>
<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>

> Body parameter

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "bookingWebhookUrl": "string",
  "city": "string",
  "country": "string",
  "customerWebhookUrl": "string",
  "disableEmailAndSmsNotifications": true,
  "email": "string",
  "fax": "string",
  "name": "string",
  "notificationFromEmailAddress": "string",
  "notificationFromName": "string",
  "phone": "string",
  "postalCode": "string",
  "registrationEmail": "string",
  "reminderWebhookUrl": "string",
  "resourceWebhookUrl": "string",
  "state": "string",
  "timezoneName": "string",
  "webhookSignatureHash": "string",
  "website": "string"
}
```

<h3 id="update-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompanyUpdateModel](#schemacompanyupdatemodel)|false|Company Update Model|
|» addressLine1|body|string \| null|false|none|
|» addressLine2|body|string \| null|false|none|
|» bookingWebhookUrl|body|string \| null|false|none|
|» city|body|string \| null|false|none|
|» country|body|string \| null|false|none|
|» customerWebhookUrl|body|string \| null|false|none|
|» disableEmailAndSmsNotifications|body|boolean \| null|false|none|
|» email|body|string \| null|false|none|
|» fax|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» notificationFromEmailAddress|body|string \| null|false|none|
|» notificationFromName|body|string \| null|false|none|
|» phone|body|string \| null|false|none|
|» postalCode|body|string \| null|false|none|
|» registrationEmail|body|string \| null|false|none|
|» reminderWebhookUrl|body|string \| null|false|none|
|» resourceWebhookUrl|body|string \| null|false|none|
|» state|body|string \| null|false|none|
|» timezoneName|body|string \| null|false|none|
|» webhookSignatureHash|body|string \| null|false|none|
|» website|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "bookingWebhookUrl": "string",
  "city": "string",
  "clientId": "string",
  "clientSecret": "string",
  "country": "string",
  "customerWebhookUrl": "string",
  "deletedStatus": true,
  "deletedTime": "string",
  "disableEmailAndSmsNotifications": true,
  "email": "string",
  "fax": "string",
  "id": "string",
  "name": "string",
  "notificationFromEmailAddress": "string",
  "notificationFromName": "string",
  "object": "string",
  "phone": "string",
  "postalCode": "string",
  "registrationDate": "string",
  "registrationEmail": "string",
  "reminderWebhookUrl": "string",
  "resourceWebhookUrl": "string",
  "state": "string",
  "timezoneId": "string",
  "timezoneName": "string",
  "webhookSignatureHash": "string",
  "website": "string"
}
```

<h3 id="update-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyViewModel](#schemacompanyviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Company

> Code samples

```bash
curl https://example.com/setup/v1/companies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addressLine1": "string",
    "addressLine2": "string",
    "bookingWebhookUrl": "string",
    "city": "string",
    "country": "string",
    "customerWebhookUrl": "string",
    "disableEmailAndSmsNotifications": true,
    "email": "string",
    "fax": "string",
    "name": "string",
    "notificationFromEmailAddress": "string",
    "notificationFromName": "string",
    "phone": "string",
    "postalCode": "string",
    "registrationEmail": "string",
    "reminderWebhookUrl": "string",
    "resourceWebhookUrl": "string",
    "state": "string",
    "timezoneName": "string",
    "webhookSignatureHash": "string",
    "website": "string"
  }'
```

`POST /setup/v1/companies`

<p>Use this endpoint to <b>Create</b> a new authorized company.</p>
<p>
  <b>Note: Special API Partner credentials are required to access this endpoint.</b>
</p>
<p>The <b>name, registrationEmail, phone, country</b> and <b>timezoneName</b> are required fields. For <b>country</b> use the standard ISO 3166 2-character country code.</p>
<p>The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>.</p>
<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>

> Body parameter

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "bookingWebhookUrl": "string",
  "city": "string",
  "country": "string",
  "customerWebhookUrl": "string",
  "disableEmailAndSmsNotifications": true,
  "email": "string",
  "fax": "string",
  "name": "string",
  "notificationFromEmailAddress": "string",
  "notificationFromName": "string",
  "phone": "string",
  "postalCode": "string",
  "registrationEmail": "string",
  "reminderWebhookUrl": "string",
  "resourceWebhookUrl": "string",
  "state": "string",
  "timezoneName": "string",
  "webhookSignatureHash": "string",
  "website": "string"
}
```

<h3 id="create-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompanyInputModel](#schemacompanyinputmodel)|false|Company Input Model|
|» addressLine1|body|string \| null|false|none|
|» addressLine2|body|string \| null|false|none|
|» bookingWebhookUrl|body|string \| null|false|none|
|» city|body|string \| null|false|none|
|» country|body|string \| null|false|none|
|» customerWebhookUrl|body|string \| null|false|none|
|» disableEmailAndSmsNotifications|body|boolean \| null|false|none|
|» email|body|string \| null|false|none|
|» fax|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» notificationFromEmailAddress|body|string \| null|false|none|
|» notificationFromName|body|string \| null|false|none|
|» phone|body|string \| null|false|none|
|» postalCode|body|string \| null|false|none|
|» registrationEmail|body|string \| null|false|none|
|» reminderWebhookUrl|body|string \| null|false|none|
|» resourceWebhookUrl|body|string \| null|false|none|
|» state|body|string \| null|false|none|
|» timezoneName|body|string \| null|false|none|
|» webhookSignatureHash|body|string \| null|false|none|
|» website|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "bookingWebhookUrl": "string",
  "city": "string",
  "clientId": "string",
  "clientSecret": "string",
  "country": "string",
  "customerWebhookUrl": "string",
  "deletedStatus": true,
  "deletedTime": "string",
  "disableEmailAndSmsNotifications": true,
  "email": "string",
  "fax": "string",
  "id": "string",
  "name": "string",
  "notificationFromEmailAddress": "string",
  "notificationFromName": "string",
  "object": "string",
  "phone": "string",
  "postalCode": "string",
  "registrationDate": "string",
  "registrationEmail": "string",
  "reminderWebhookUrl": "string",
  "resourceWebhookUrl": "string",
  "state": "string",
  "timezoneId": "string",
  "timezoneName": "string",
  "webhookSignatureHash": "string",
  "website": "string"
}
```

<h3 id="create-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyViewModel](#schemacompanyviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Company Domains

> Code samples

```bash
curl https://example.com/setup/v1/companies/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/companies/domains`

<p>Use this endpoint to return a <b>List of Company Domains</b> for the authorized company. To share the OnSchedJS booking widget on your website or in your application your domain must be listed.</p>

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "domain": "string",
      "id": "string",
      "object": "string"
    }
  ],
  "object": "string",
  "url": "string"
}
```

<h3 id="list-company-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyDomainListViewModel](#schemacompanydomainlistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Company Domain

> Code samples

```bash
curl https://example.com/setup/v1/companies/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domain": "string"
  }'
```

`POST /setup/v1/companies/domains`

<p>Use this endpoint to <b>Create</b> an OnSchedJs domain for your authorized company. To share the OnSchedJS booking widget on your website or in your application you must add the domain.</p>

> Body parameter

```json
{
  "domain": "string"
}
```

<h3 id="create-company-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompanyDomainInputModel](#schemacompanydomaininputmodel)|false|Company Domain Input Model|
|» domain|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "id": "string",
  "object": "string"
}
```

<h3 id="create-company-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyDomainViewModel](#schemacompanydomainviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Company Domain

> Code samples

```bash
curl https://example.com/setup/v1/companies/domains/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/companies/domains/{id}`

<p>Use this endpoint to return a <b>Company Domain</b> object. A valid <b>companyDomain id</b> is required. </p>

<h3 id="get-company-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of companyDomain object|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "id": "string",
  "object": "string"
}
```

<h3 id="get-company-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyDomainViewModel](#schemacompanydomainviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Company Domain

> Code samples

```bash
curl https://example.com/setup/v1/companies/domains/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domain": "string"
  }'
```

`PUT /setup/v1/companies/domains/{id}`

<p>Use this endpoint to <b>Update</b> an OnSchedJs domain for your authorized company. A valid <b>companyDomain id</b> is required.</p>

> Body parameter

```json
{
  "domain": "string"
}
```

<h3 id="update-company-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of companyDomain object|
|body|body|[CompanyDomainUpdateModel](#schemacompanydomainupdatemodel)|false|Company Domain Update Model|
|» domain|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "id": "string",
  "object": "string"
}
```

<h3 id="update-company-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyDomainViewModel](#schemacompanydomainviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Company Domain

> Code samples

```bash
curl https://example.com/setup/v1/companies/domains/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/companies/domains/{id}`

<p>Use this endpoint to <b>Delete</b> an OnSchedJs domain from your authorized company. A valid <b>companyDomain id</b> is required.</p>

<h3 id="delete-company-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of companyDomain object|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "id": "string",
  "object": "string"
}
```

<h3 id="delete-company-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyDomainViewModel](#schemacompanydomainviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Email Templates

> Code samples

```bash
curl https://example.com/setup/v1/companies/email/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/companies/email/templates`

<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized at the Business Location level or Company level. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "customized": true,
      "description": "string",
      "name": "string",
      "object": "string",
      "scope": "string"
    }
  ],
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-email-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EmailTemplateListViewModel](#schemaemailtemplatelistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Master Template Settings

> Code samples

```bash
curl https://example.com/setup/v1/companies/email/templates/master \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/companies/email/templates/master`

<p>Use this endpoint to return the <b>Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. </p>

> Example responses

> 200 Response

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true,
  "version": "string"
}
```

<h3 id="get-master-template-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MasterEmailTemplateSettingsViewModel](#schemamasteremailtemplatesettingsviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Master Template Settings

> Code samples

```bash
curl https://example.com/setup/v1/companies/email/templates/master \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "centerEmailContent": true,
    "centerEmailContentPanel": true,
    "centerEmailFooter": true,
    "contentBackgroundColor": "string",
    "contentColor": "string",
    "contentLinkColor": "string",
    "emailBackgroundColor": "string",
    "emailColor": "string",
    "emailLinkColor": "string",
    "footerFontSize": "string",
    "footerLogoHeight": "string",
    "footerLogoPadding": "string",
    "footerPanelEmailContact": true,
    "footerPanelPhoneContact": true,
    "footerPanelWebsiteContact": true,
    "headerLogoHeight": "string",
    "headerLogoPadding": "string",
    "panelBackgroundColor": "string",
    "panelColor": "string",
    "panelLinkColor": "string",
    "privacyPolicyLink": "string",
    "showContentPanel": true,
    "showFooterLogo": true,
    "showFooterPanel": true,
    "showHeaderLogo": true,
    "showHeaderPanel": true
  }'
```

`POST /setup/v1/companies/email/templates/master`

<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>

> Body parameter

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true
}
```

<h3 id="create-master-template-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MasterTemplateSettingsInputModel](#schemamastertemplatesettingsinputmodel)|false|none|
|» centerEmailContent|body|boolean \| null|false|none|
|» centerEmailContentPanel|body|boolean \| null|false|none|
|» centerEmailFooter|body|boolean \| null|false|none|
|» contentBackgroundColor|body|string \| null|false|none|
|» contentColor|body|string \| null|false|none|
|» contentLinkColor|body|string \| null|false|none|
|» emailBackgroundColor|body|string \| null|false|none|
|» emailColor|body|string \| null|false|none|
|» emailLinkColor|body|string \| null|false|none|
|» footerFontSize|body|string \| null|false|none|
|» footerLogoHeight|body|string \| null|false|none|
|» footerLogoPadding|body|string \| null|false|none|
|» footerPanelEmailContact|body|boolean \| null|false|none|
|» footerPanelPhoneContact|body|boolean \| null|false|none|
|» footerPanelWebsiteContact|body|boolean \| null|false|none|
|» headerLogoHeight|body|string \| null|false|none|
|» headerLogoPadding|body|string \| null|false|none|
|» panelBackgroundColor|body|string \| null|false|none|
|» panelColor|body|string \| null|false|none|
|» panelLinkColor|body|string \| null|false|none|
|» privacyPolicyLink|body|string \| null|false|none|
|» showContentPanel|body|boolean \| null|false|none|
|» showFooterLogo|body|boolean \| null|false|none|
|» showFooterPanel|body|boolean \| null|false|none|
|» showHeaderLogo|body|boolean \| null|false|none|
|» showHeaderPanel|body|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true,
  "version": "string"
}
```

<h3 id="create-master-template-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MasterEmailTemplateSettingsViewModel](#schemamasteremailtemplatesettingsviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Master Template Settings

> Code samples

```bash
curl https://example.com/setup/v1/companies/email/templates/master \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/companies/email/templates/master`

<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. Deleting a custom master email template setting will reactivate the original default OnSched template settings.</p>

> Example responses

> 200 Response

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true,
  "version": "string"
}
```

<h3 id="delete-master-template-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MasterEmailTemplateSettingsViewModel](#schemamasteremailtemplatesettingsviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Email Template

> Code samples

```bash
curl https://example.com/setup/v1/companies/email/templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/companies/email/templates/{templateName}`

<p>Use this endpoint to return the requested <b>Email Template</b>. If it wasn't customized the default template is returned. The response content is in html format. A valid emailTemplate <b>name</b> is required. Find template names by using the: <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>
<p>To create custom company email templates, go to the <i>POST ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint and create a template using the Primary Business Location Id.</p>

<h3 id="get-email-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateName|path|string|true|Email template name|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "contentType": "string",
  "statusCode": 0
}
```

<h3 id="get-email-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContentResult](#schemacontentresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Regions

> Code samples

```bash
curl https://example.com/setup/v1/companies/regions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/companies/regions`

<p>Use this endpoint to return a list of <b>Regions</b> in the authorized company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. </p>

<h3 id="list-regions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "id": "string",
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

<h3 id="list-regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|region object's|[RegionListViewModel](#schemaregionlistviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|401|Unauthorized|Authorization error.|None|
|404|Not Found|Resource was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Region

> Code samples

```bash
curl https://example.com/setup/v1/companies/regions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /setup/v1/companies/regions`

<p>Use this endpoint to <b>Create</b> a region object. Regions can be mapped to business locations. They can be used by the locations endpoints to filter locations by region id.</p>

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegionInputModel](#schemaregioninputmodel)|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "object": "string"
}
```

<h3 id="create-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegionViewModel](#schemaregionviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Region

> Code samples

```bash
curl https://example.com/setup/v1/companies/regions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/companies/regions/{id}`

<p>Use this endpoint to return a <b>Region</b> object. A valid <b>region id</b> is required.</p>

<h3 id="get-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of a region object|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "object": "string"
}
```

<h3 id="get-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegionViewModel](#schemaregionviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Region

> Code samples

```bash
curl https://example.com/setup/v1/companies/regions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`PUT /setup/v1/companies/regions/{id}`

<p>Use this endpoint to <b>Update</b> a region object. A valid <b>region id</b> is required.</p>

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of Region|
|body|body|[RegionUpdateModel](#schemaregionupdatemodel)|false|Region Update Model|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "object": "string"
}
```

<h3 id="update-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegionViewModel](#schemaregionviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Region

> Code samples

```bash
curl https://example.com/setup/v1/companies/regions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/companies/regions/{id}`

<p>Use this endpoint to <b>Delete</b> a region object. A valid <b>region id</b> is required. If the region is related to any business locations it won't be deleted. You must first remove any references to region id from the business locations prior to deleting.</p>

<h3 id="delete-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of Region|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "object": "string"
}
```

<h3 id="delete-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegionViewModel](#schemaregionviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Time Zones

> Code samples

```bash
curl https://example.com/setup/v1/companies/timezones/1970-01-01T00%3A00%3A00Z \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/companies/timezones/{date}`

<p>Use this endpoint to return a <b>List of timezone names, timezoneIana and tzOffset values</b> calculated for the date requested. Daylight Savings may or may not apply depending on the date specified.</p>

<h3 id="list-time-zones-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|path|string(date-time)|true|"YYYY-MM-DD: Date for timezone info"|

> Example responses

> 200 Response

```json
{
  "object": "string",
  "regions": [
    "string"
  ],
  "timezones": [
    {
      "name": "string",
      "region": "string",
      "timezoneIanna": "string",
      "tzOffset": 0
    }
  ]
}
```

<h3 id="list-time-zones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TimezoneViewModel](#schematimezoneviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-setup-api-customers">Customers</h1>

## List Customers

> Code samples

```bash
curl https://example.com/setup/v1/customers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/customers`

<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-customers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|groupId|query|string|false|Filter by groupId|
|email|query|string|false|Filter by email address.|
|lastname|query|string|false|Search by lastname.|
|deleted|query|boolean|false|Filter by deleted status.|
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

## Get Customer

> Code samples

```bash
curl https://example.com/setup/v1/customers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/customers/{id}`

<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /setup/v1/customers</i> endpoint.</p>

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

## Get Customer Data

> Code samples

```bash
curl https://example.com/setup/v1/customers/string/privacy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/customers/{id}/privacy`

<p>Use this endpoint to return the <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's using the <i>GET /setup/v1/customers</i> endpoint.</p>

<h3 id="get-customer-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of customer object|

> Example responses

> 200 Response

```json
{
  "appointments": [
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
  "customer": {
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
}
```

<h3 id="get-customer-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomerPrivacyViewModel](#schemacustomerprivacyviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-setup-api-locations">Locations</h1>

## List Locations

> Code samples

```bash
curl https://example.com/setup/v1/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/locations`

<p>Use this endpoint to <b>List Business Locations</b> associated with your company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

<h3 id="list-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Location name(full or partial) to filter on|
|serviceId|query|string|false|Find locations that offer this service|
|friendlyId|query|string|false|friendlyId of location|
|deleted|query|boolean|false|Filter locations on deleted status|
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

## Create Location

> Code samples

```bash
curl https://example.com/setup/v1/locations \
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
    "defaults": {
      "autoUpdateCustomer": true,
      "businessNotification": true,
      "customerCity": true,
      "customerState": true,
      "emailInfo": true,
      "enableUtcTimezone": true
    },
    "email": "string",
    "fax": "string",
    "friendlyId": "string",
    "name": "string",
    "phone": "string",
    "regionId": "string",
    "settings": {
      "bookAheadUnit": 0,
      "bookAheadValue": 0,
      "bookInAdvance": 0,
      "bookingTimerMins": 0,
      "customerBookingsPerDay": 0,
      "enableWorldTimezones": true
    },
    "timezoneName": "string",
    "website": "string"
  }'
```

`POST /setup/v1/locations`

<p>Use this endpoint to <b>Create</b> a new business location. The result is a business location object with a GUID assigned to the location.</p>
<p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
<p>
  <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
<p>
  <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
<p>
  <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

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
  "defaults": {
    "autoUpdateCustomer": true,
    "businessNotification": true,
    "customerCity": true,
    "customerState": true,
    "emailInfo": true,
    "enableUtcTimezone": true
  },
  "email": "string",
  "fax": "string",
  "friendlyId": "string",
  "name": "string",
  "phone": "string",
  "regionId": "string",
  "settings": {
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0,
    "bookingTimerMins": 0,
    "customerBookingsPerDay": 0,
    "enableWorldTimezones": true
  },
  "timezoneName": "string",
  "website": "string"
}
```

<h3 id="create-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LocationInputModel](#schemalocationinputmodel)|false|none|
|» address|body|[AddressInputModel](#schemaaddressinputmodel)|false|none|
|» adminEmail|body|string \| null|false|Field is required.|
|» adminName|body|string \| null|false|This field is no longer required and has been deprecated.|
|» appointmentReminders|body|[AppointmentRemindersInputModel](#schemaappointmentremindersinputmodel)|false|none|
|» businessHours|body|[BusinessHoursInputModel](#schemabusinesshoursinputmodel)|false|none|
|» defaults|body|[BusinessDefaultsInputModel](#schemabusinessdefaultsinputmodel)|false|none|
|» email|body|string \| null|false|none|
|» fax|body|string \| null|false|none|
|» friendlyId|body|string \| null|false|Use the friendlyId as an alternative to the assigned locationId<br>Choose something easy and meaningful. Must be unique within your company.<br>FriendlyId's are limited to maximum of 64 characters.|
|» name|body|string \| null|false|none|
|» phone|body|string \| null|false|GroupSize Limits the number of people that can come<br>along on a single appointment|
|» regionId|body|string \| null|false|none|
|» settings|body|[OnlineSettingsInputModel](#schemaonlinesettingsinputmodel)|false|none|
|» timezoneName|body|string \| null|false|Field is required. It is in Iana format. e.g. America/New_York. Use moment.js in your client for ease of timezone detection and selection|
|» website|body|string \| null|false|none|

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

<h3 id="create-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Locations Bulk

> Code samples

```bash
curl https://example.com/setup/v1/locations/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "locations": [
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
        "defaults": {
          "autoUpdateCustomer": true,
          "businessNotification": true,
          "customerCity": true,
          "customerState": true,
          "emailInfo": true,
          "enableUtcTimezone": true
        },
        "email": "string",
        "fax": "string",
        "friendlyId": "string",
        "name": "string",
        "phone": "string",
        "regionId": "string",
        "settings": {
          "bookAheadUnit": 0,
          "bookAheadValue": 0,
          "bookInAdvance": 0,
          "bookingTimerMins": 0,
          "customerBookingsPerDay": 0,
          "enableWorldTimezones": true
        },
        "timezoneName": "string",
        "website": "string"
      }
    ]
  }'
```

`POST /setup/v1/locations/bulk`

<p>Use this endpoint to <b>Create Bulk</b> business locations. The posted list of locations cannot exceed 100 location objects per transaction for performance purposes. The result is a list of new business location objects with a GUID assigned to each location.</p>
<p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
<p>
  <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
<p>
  <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
<p>
  <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

> Body parameter

```json
{
  "locations": [
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
      "defaults": {
        "autoUpdateCustomer": true,
        "businessNotification": true,
        "customerCity": true,
        "customerState": true,
        "emailInfo": true,
        "enableUtcTimezone": true
      },
      "email": "string",
      "fax": "string",
      "friendlyId": "string",
      "name": "string",
      "phone": "string",
      "regionId": "string",
      "settings": {
        "bookAheadUnit": 0,
        "bookAheadValue": 0,
        "bookInAdvance": 0,
        "bookingTimerMins": 0,
        "customerBookingsPerDay": 0,
        "enableWorldTimezones": true
      },
      "timezoneName": "string",
      "website": "string"
    }
  ]
}
```

<h3 id="create-locations-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LocationsInputModel](#schemalocationsinputmodel)|false|none|
|» locations|body|[[LocationInputModel](#schemalocationinputmodel)]|false|none|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="create-locations-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="create-locations-bulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LocationViewModel](#schemalocationviewmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Linked Service

> Code samples

```bash
curl https://example.com/setup/v1/locations/services/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/locations/services/{id}`

<p>Use this endpoint to <b>Get a Linked Service</b>. A valid <b>locationService id</b> is required.</p>

<h3 id="get-linked-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of locationService object|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "object": "string",
  "serviceId": 0,
  "serviceName": "string"
}
```

<h3 id="get-linked-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|location service objects|[BusinessServiceViewModel](#schemabusinessserviceviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|401|Unauthorized|Authorization error.|None|
|404|Not Found|Location was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Unlink Service

> Code samples

```bash
curl https://example.com/setup/v1/locations/services/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/locations/services/{id}`

<p>Use this endpoint to <b>Unlink</b> a location service from a business location. A valid <b>locationService id</b> is required. Find location services by using the <i>GET ​/setup​/v1​/locations​/{id}​/services</i> endpoint. </p>

<h3 id="unlink-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of locationService object|

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

<h3 id="unlink-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Location

> Code samples

```bash
curl https://example.com/setup/v1/locations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/locations/{id}`

<p>Use this endpoint to return a <b>Location</b> object. A valid <b>location id</b> is required. If not specified, the business location defaults to the primary business location. Find all business location id's, by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

<h3 id="get-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|

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

## Update Location

> Code samples

```bash
curl https://example.com/setup/v1/locations/string \
  -X PUT \
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
    "defaults": {
      "autoUpdateCustomer": true,
      "businessNotification": true,
      "customerCity": true,
      "customerState": true,
      "emailInfo": true,
      "enableUtcTimezone": true
    },
    "email": "string",
    "fax": "string",
    "friendlyId": "string",
    "name": "string",
    "phone": "string",
    "regionId": "string",
    "settings": {
      "bookAheadUnit": 0,
      "bookAheadValue": 0,
      "bookInAdvance": 0,
      "bookingTimerMins": 0,
      "customerBookingsPerDay": 0,
      "enableWorldTimezones": true
    },
    "timezoneName": "string",
    "website": "string"
  }'
```

`PUT /setup/v1/locations/{id}`

<p>Use this endpoint to <b>Update</b> a business location object. A valid business <b>location id</b> is required. The optional removeRegion query parameter can be used to remove the region relationship from the location.</p>
<p>If the settings element is populated the scope will be set to the business location with the settings supplied. If your settings are uniform across all locations, then do not supply the settings element and the location will use the settings defined on the primary business location (company scoped). Company scoped settings cascade down to the locations. You can override any location that needs different settings by providing settings in the update model. Use the <i>PUT /setup/v1/locations/{id}/settings/scope/{settingsScope}</i> endpoint to change the settings scope only. This is typically used when switching from business location scope back to company.</p>
<p>Refer to: <i><b>POST ​/setup​/v1​/locations</b></i> endpoint for details.</p>

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
  "defaults": {
    "autoUpdateCustomer": true,
    "businessNotification": true,
    "customerCity": true,
    "customerState": true,
    "emailInfo": true,
    "enableUtcTimezone": true
  },
  "email": "string",
  "fax": "string",
  "friendlyId": "string",
  "name": "string",
  "phone": "string",
  "regionId": "string",
  "settings": {
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0,
    "bookingTimerMins": 0,
    "customerBookingsPerDay": 0,
    "enableWorldTimezones": true
  },
  "timezoneName": "string",
  "website": "string"
}
```

<h3 id="update-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|removeRegion|query|boolean|false|none|
|body|body|[LocationUpdateModel](#schemalocationupdatemodel)|false|none|
|» address|body|[AddressUpdateModel](#schemaaddressupdatemodel)|false|none|
|» adminEmail|body|string \| null|false|none|
|» adminName|body|string \| null|false|none|
|» appointmentReminders|body|[AppointmentRemindersInputModel](#schemaappointmentremindersinputmodel)|false|none|
|» businessHours|body|[BusinessHoursUpdateModel](#schemabusinesshoursupdatemodel)|false|none|
|» defaults|body|[BusinessDefaultsUpdateModel](#schemabusinessdefaultsupdatemodel)|false|none|
|» email|body|string \| null|false|none|
|» fax|body|string \| null|false|none|
|» friendlyId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» phone|body|string \| null|false|none|
|» regionId|body|string \| null|false|none|
|» settings|body|[OnlineSettingsUpdateModel](#schemaonlinesettingsupdatemodel)|false|none|
|» timezoneName|body|string \| null|false|none|
|» website|body|string \| null|false|none|

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

<h3 id="update-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Location

> Code samples

```bash
curl https://example.com/setup/v1/locations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/locations/{id}`

<p>Use this endpoint to <b>Delete</b> a business location. A valid business <b>location id</b> is required. The location is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/locations​/{id}​/recover</i> endpoint.</p>

<h3 id="delete-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|

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

<h3 id="delete-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Reminders

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/appointmentreminders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/locations/{id}/appointmentreminders`

<p>Use this endpoint to <b>Get Email and SMS appointment reminder settings</b> for the requested location. A valid business <b>location id</b> is required. </p>

<h3 id="get-reminders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|

> Example responses

> 200 Response

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

<h3 id="get-reminders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AppointmentReminderViewModel](#schemaappointmentreminderviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Reminders

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/appointmentreminders \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emailFirstReminder": 0,
    "emailFirstReminderInterval": 0,
    "emailSecondReminder": 0,
    "emailSecondReminderInterval": 0,
    "smsFirstReminder": 0,
    "smsFirstReminderInterval": 0,
    "smsSecondReminder": 0,
    "smsSecondReminderInterval": 0
  }'
```

`PUT /setup/v1/locations/{id}/appointmentreminders`

<p>Use this endpoint to <b>Update</b> Email and SMS appointment reminder settings for the requested location. A valid business <b>location id</b> is required. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>

> Body parameter

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

<h3 id="update-reminders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|
|body|body|[AppointmentRemindersInputModel](#schemaappointmentremindersinputmodel)|false|input model for reminders|
|» emailFirstReminder|body|integer(int32) \| null|false|none|
|» emailFirstReminderInterval|body|integer(int32)|false|none|
|» emailSecondReminder|body|integer(int32) \| null|false|none|
|» emailSecondReminderInterval|body|integer(int32)|false|none|
|» smsFirstReminder|body|integer(int32) \| null|false|none|
|» smsFirstReminderInterval|body|integer(int32)|false|none|
|» smsSecondReminder|body|integer(int32) \| null|false|none|
|» smsSecondReminderInterval|body|integer(int32)|false|none|

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

<h3 id="update-reminders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete All Location Images

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/deleteallimages \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/locations/{id}/deleteallimages`

<p>Use this endpoint to <b>Delete All</b> location images from the location blob storage container. An option exists to use upper case for matching the subdirectory name. Legacy apps stored pics using upper case while the API uses lower case names.</p>

<h3 id="delete-all-location-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|uppercase|query|boolean|false|none|

> Example responses

> 200 Response

```json
true
```

<h3 id="delete-all-location-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Location Image

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/deleteimage \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/locations/{id}/deleteimage`

<p>Use this endpoint to <b>Delete</b> a previously uploaded location image. A valid business <b>location id</b> is required.</p>

<h3 id="delete-location-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|

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

<h3 id="delete-location-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Email Templates

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/email/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/locations/{id}/email/templates`

<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>

<h3 id="list-email-templates-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "customized": true,
      "description": "string",
      "name": "string",
      "object": "string",
      "scope": "string"
    }
  ],
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-email-templates-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EmailTemplateListViewModel](#schemaemailtemplatelistviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Custom Template

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/email/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "templateContent": "string",
    "templateName": "string"
  }'
```

`POST /setup/v1/locations/{id}/email/templates`

<p>Use this endpoint to a <b>Create</b> a Custom Email Template. You must convert the content to a base64 encoded string. Updates to the primary business location create company scoped custom templates. Updates to non-primary business locations create business location scoped custom templates. The master template cannot be updated with this endpoint.</p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new email template that will be used instead. If you delete it, you are deleting the custom template you created and the original default template created by OnSched will be reactivated.</p>

> Body parameter

```json
{
  "templateContent": "string",
  "templateName": "string"
}
```

<h3 id="create-custom-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|
|body|body|[EmailTemplateInputModel](#schemaemailtemplateinputmodel)|false|Input model for email template|
|» templateContent|body|string \| null|false|none|
|» templateName|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "contentType": "string",
  "statusCode": 0
}
```

<h3 id="create-custom-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContentResult](#schemacontentresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Master Template Settings

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/email/templates/master \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/locations/{id}/email/templates/master`

<p>Use this endpoint to get <b>Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding panels and for changing color schemes. </p>

<h3 id="get-master-template-settings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|

> Example responses

> 200 Response

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true,
  "version": "string"
}
```

<h3 id="get-master-template-settings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MasterEmailTemplateSettingsViewModel](#schemamasteremailtemplatesettingsviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Master Template Settings

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/email/templates/master \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "centerEmailContent": true,
    "centerEmailContentPanel": true,
    "centerEmailFooter": true,
    "contentBackgroundColor": "string",
    "contentColor": "string",
    "contentLinkColor": "string",
    "emailBackgroundColor": "string",
    "emailColor": "string",
    "emailLinkColor": "string",
    "footerFontSize": "string",
    "footerLogoHeight": "string",
    "footerLogoPadding": "string",
    "footerPanelEmailContact": true,
    "footerPanelPhoneContact": true,
    "footerPanelWebsiteContact": true,
    "headerLogoHeight": "string",
    "headerLogoPadding": "string",
    "panelBackgroundColor": "string",
    "panelColor": "string",
    "panelLinkColor": "string",
    "privacyPolicyLink": "string",
    "showContentPanel": true,
    "showFooterLogo": true,
    "showFooterPanel": true,
    "showHeaderLogo": true,
    "showHeaderPanel": true
  }'
```

`POST /setup/v1/locations/{id}/email/templates/master`

<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates​/masterSettings</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it, you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>

> Body parameter

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true
}
```

<h3 id="create-master-template-settings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|
|body|body|[MasterTemplateSettingsInputModel](#schemamastertemplatesettingsinputmodel)|false|Input model for master email template settings|
|» centerEmailContent|body|boolean \| null|false|none|
|» centerEmailContentPanel|body|boolean \| null|false|none|
|» centerEmailFooter|body|boolean \| null|false|none|
|» contentBackgroundColor|body|string \| null|false|none|
|» contentColor|body|string \| null|false|none|
|» contentLinkColor|body|string \| null|false|none|
|» emailBackgroundColor|body|string \| null|false|none|
|» emailColor|body|string \| null|false|none|
|» emailLinkColor|body|string \| null|false|none|
|» footerFontSize|body|string \| null|false|none|
|» footerLogoHeight|body|string \| null|false|none|
|» footerLogoPadding|body|string \| null|false|none|
|» footerPanelEmailContact|body|boolean \| null|false|none|
|» footerPanelPhoneContact|body|boolean \| null|false|none|
|» footerPanelWebsiteContact|body|boolean \| null|false|none|
|» headerLogoHeight|body|string \| null|false|none|
|» headerLogoPadding|body|string \| null|false|none|
|» panelBackgroundColor|body|string \| null|false|none|
|» panelColor|body|string \| null|false|none|
|» panelLinkColor|body|string \| null|false|none|
|» privacyPolicyLink|body|string \| null|false|none|
|» showContentPanel|body|boolean \| null|false|none|
|» showFooterLogo|body|boolean \| null|false|none|
|» showFooterPanel|body|boolean \| null|false|none|
|» showHeaderLogo|body|boolean \| null|false|none|
|» showHeaderPanel|body|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true,
  "version": "string"
}
```

<h3 id="create-master-template-settings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MasterEmailTemplateSettingsViewModel](#schemamasteremailtemplatesettingsviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Master Template Settings

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/email/templates/master \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/locations/{id}/email/templates/master`

<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Deleting a custom master email template will reactivate the original default OnSched template settings.</p>

<h3 id="delete-master-template-settings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|

> Example responses

> 200 Response

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true,
  "version": "string"
}
```

<h3 id="delete-master-template-settings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MasterEmailTemplateSettingsViewModel](#schemamasteremailtemplatesettingsviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Email Template

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/email/templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/locations/{id}/email/templates/{templateName}`

<p>Use this endpoint to return the requested <b>Email Template</b>. The template is from the primary business location. If it wasn't customized the default template is returned. The response content is in html format. A valid <b>emailTemplate name</b> is required. Find template names by using the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>

<h3 id="get-email-template-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location|
|templateName|path|string|true|name of the email template|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "contentType": "string",
  "statusCode": 0
}
```

<h3 id="get-email-template-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContentResult](#schemacontentresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Custom Template

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/email/templates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/locations/{id}/email/templates/{templateName}`

<p>Use this endpoint to <b>Delete</b> a Custom Email Template that was previously created. A valid business <b>location id</b> and email <b>templateName</b> are required. Deleting a custom email template will revert the template back to its default originally created by OnSched. Changes will be reflected in all business locations associated with this company.</p>
<p>The email template endpoints work a little differently than most. When you delete you are deleting the custom template you created, and the original default Email Template created by OnSched will be reactivated.</p>

<h3 id="delete-custom-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|
|templateName|path|string|true|Name of the email template|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "contentType": "string",
  "statusCode": 0
}
```

<h3 id="delete-custom-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContentResult](#schemacontentresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Google Cal Access

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/google/service/account \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "auth_provider_x509_cert_url": "string",
    "auth_uri": "string",
    "client_email": "string",
    "client_id": "string",
    "client_x509_cert_url": "string",
    "private_key": "string",
    "private_key_id": "string",
    "project_id": "string",
    "token_uri": "string",
    "type": "string"
  }'
```

`POST /setup/v1/locations/{id}/google/service/account`

<p>Use this endpoint to <b>Authorize Access</b> to google calendar users in your organization. You must create/have a Google Service account as an admin of your GSuite, then save the credentials as a Json Key file. This <b>Json Key</b> and a valid business <b>location id</b> are required. </p>

> Body parameter

```json
{
  "auth_provider_x509_cert_url": "string",
  "auth_uri": "string",
  "client_email": "string",
  "client_id": "string",
  "client_x509_cert_url": "string",
  "private_key": "string",
  "private_key_id": "string",
  "project_id": "string",
  "token_uri": "string",
  "type": "string"
}
```

<h3 id="create-google-cal-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|
|body|body|[GoogleServiceAccountCreds](#schemagoogleserviceaccountcreds)|false|Generated Json Key file from Google|
|» auth_provider_x509_cert_url|body|string \| null|false|none|
|» auth_uri|body|string \| null|false|none|
|» client_email|body|string \| null|false|none|
|» client_id|body|string \| null|false|none|
|» client_x509_cert_url|body|string \| null|false|none|
|» private_key|body|string \| null|false|none|
|» private_key_id|body|string \| null|false|none|
|» project_id|body|string \| null|false|none|
|» token_uri|body|string \| null|false|none|
|» type|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "auth_provider_x509_cert_url": "string",
  "auth_uri": "string",
  "client_email": "string",
  "client_id": "string",
  "client_x509_cert_url": "string",
  "private_key": "string",
  "private_key_id": "string",
  "project_id": "string",
  "token_uri": "string",
  "type": "string"
}
```

<h3 id="create-google-cal-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GoogleServiceAccountCreds](#schemagoogleserviceaccountcreds)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Google Cal Access

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/google/service/account \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/locations/{id}/google/service/account`

<p>Use this endpoint to <b>Delete</b> authorized access to all google calendar users in your organization. Upon deletion Google Calendars will no longer be synced for resources.</p>

<h3 id="delete-google-cal-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|

<h3 id="delete-google-cal-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Location Holidays

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/holidays/string/true \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/locations/{id}/holidays/{holidayId}/{closed}`

<p>Use this endpoint to <b>Update</b> Business Holidays as Opened or Closed. A valid business <b>location id</b> is required. If not specified, the business location defaults to the primary business location.</p>
<p>Holidays are automatically defined with the initial Post Location endpoint and are based on country code. Find your location holiday codes by using the: <i>GET /setup​/v1​/locations​/{id}</i> endpoint. Change your holidays to open or closed by passing in the <b>holidayId</b> along with the <b>closed</b> boolean value to change the status of a specific holiday. Pass in an <b>asterisk *</b> for the holidayId then all business holidays will be set as defined.</p>

<h3 id="update-location-holidays-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|holidayId|path|string|true|none|
|closed|path|boolean|true|none|

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

<h3 id="update-location-holidays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Recover Location

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/recover \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/locations/{id}/recover`

<p>Use this endpoint to <b>Recover</b> a deleted business location. A valid business <b>location id</b> is required.</p>

<h3 id="recover-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

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

<h3 id="recover-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Location Linked Services

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/locations/{id}/services`

<p>Use this endpoint to return a list of <b>Location Linked Services</b>. A valid business <b>location id</b> is required. By default, there are no location linked services attached to a location. Refer to the: <i>POST /setup​/v1​/locations​/{id}​/services</i> for details. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-location-linked-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "id": 0,
      "object": "string",
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

<h3 id="list-location-linked-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|location service objects|[BusinessServiceListViewModel](#schemabusinessservicelistviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|401|Unauthorized|Authorization error|None|
|404|Not Found|Location was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Linked Service

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/services \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`POST /setup/v1/locations/{id}/services`

<p>Use this endpoint to <b>Link Services</b> to a location object. A valid business <b>location id</b> is required. By default, there are <i>no services linked</i> to a location. </p>
<p>Services are definable globally at the Company level and associated with the Primary Business Location, or at a Secondary Business Location. When accessing the Services endpoints, by default, API consumers are provided with a <b>combined</b> list of Services defined from both the Primary and Secondary Business Location.</p>
<p>If necessary, the list of Service(s) provided can be cherry-picked/linked to <b>only include specific Service(s)</b> by using this endpoint. This allows for a subset of defined Services to be provided for a location.</p>
<p>Supplying the list of services ids to cherry-pick/link to the location in the request body will explicitly define which Primary Location Services are offered by the specified business location.</p>

> Body parameter

```json
[
  "string"
]
```

<h3 id="create-linked-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|
|body|body|[string]|false|array of valid service object id's|

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

<h3 id="create-linked-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Linked Services

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/services \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/locations/{id}/services`

<p>Use this endpoint to <b>Delete All</b> location linked services from a business location. A valid business <b>location id</b> is required. </p>

<h3 id="delete-linked-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|

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

<h3 id="delete-linked-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Location Scope

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/settings/scope/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/locations/{id}/settings/scope/{settingsScope}`

<p>Use this endpoint to <b>Update</b> a business locations online booking settings scope. A valid business <b>location id</b> is required.</p>
<p>
  <b>settingsScope</b> values are <b>0 = company scope, 1 = business location scope</b>. To inherit the online settings defined in the primary business location, then use value = 0 for company scope. Otherwise, to override the settings for a specific location then use value = 1 for business location scope. <b>Note</b>: You cannot change the settings scope of the Primary Business Location.</p>

<h3 id="update-location-scope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|settingsScope|path|string|true|none|

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

<h3 id="update-location-scope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Upload Location Image

> Code samples

```bash
curl https://example.com/setup/v1/locations/string/uploadimage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "imageFileData": "string",
    "imageFileName": "string"
  }'
```

`POST /setup/v1/locations/{id}/uploadimage`

<p>Use this endpoint to <b>Upload</b> an image to a location object. A valid business <b>location id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

> Body parameter

```json
{
  "imageFileData": "string",
  "imageFileName": "string"
}
```

<h3 id="upload-location-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of business location, defaults to primary business location|
|body|body|[ResourceImageInputModel](#schemaresourceimageinputmodel)|false|Input model for image upload|
|» imageFileData|body|string \| null|false|none|
|» imageFileName|body|string \| null|false|none|

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

<h3 id="upload-location-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocationViewModel](#schemalocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-setup-api-resourcegroups">ResourceGroups</h1>

## List Resource Groups

> Code samples

```bash
curl https://example.com/setup/v1/resourcegroups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resourcegroups`

<p>Use this endpoint to <b>List Resource Groups</b> for the specified location. If not specified, the business location defaults to the primary business location. <b>Name</b> is a required field.</p>
<p>Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the query parameters to filter the results further.</p>

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

## Create Resource Group

> Code samples

```bash
curl https://example.com/setup/v1/resourcegroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "email": "string",
    "locationId": "string",
    "name": "string"
  }'
```

`POST /setup/v1/resourcegroups`

<p>Use this endpoint to <b>Create</b> a resourceGroup object. Resource groups are used to categorize your resources.</p>

> Body parameter

```json
{
  "description": "string",
  "email": "string",
  "locationId": "string",
  "name": "string"
}
```

<h3 id="create-resource-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ResourceGroupInputModel](#schemaresourcegroupinputmodel)|false|Resource input model|
|» description|body|string \| null|false|none|
|» email|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|

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

<h3 id="create-resource-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceGroupViewModel](#schemaresourcegroupviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Resource Group

> Code samples

```bash
curl https://example.com/setup/v1/resourcegroups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resourcegroups/{id}`

<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET setup/v1/resourceGroups</i> endpoint.</p>

<h3 id="get-resource-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourceGroup object|

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

## Update Resource Group

> Code samples

```bash
curl https://example.com/setup/v1/resourcegroups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "email": "string",
    "name": "string"
  }'
```

`PUT /setup/v1/resourcegroups/{id}`

<p>Use this endpoint to <b>Update</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. </p>

> Body parameter

```json
{
  "description": "string",
  "email": "string",
  "name": "string"
}
```

<h3 id="update-resource-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourcGroup object|
|body|body|[ResourceGroupUpdateModel](#schemaresourcegroupupdatemodel)|false|Resource Group Update Model|
|» description|body|string \| null|false|none|
|» email|body|string \| null|false|none|
|» name|body|string \| null|false|none|

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

<h3 id="update-resource-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceGroupViewModel](#schemaresourcegroupviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Resource Group

> Code samples

```bash
curl https://example.com/setup/v1/resourcegroups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/resourcegroups/{id}`

<p>Use this endpoint to <b>Delete</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. The resource group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/resourcegroups​/{id}​/recover</i> endpoint.</p>

<h3 id="delete-resource-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourceGroup object|

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

<h3 id="delete-resource-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceGroupViewModel](#schemaresourcegroupviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Recover Resource Group

> Code samples

```bash
curl https://example.com/setup/v1/resourcegroups/string/recover \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/resourcegroups/{id}/recover`

<p>Use this endpoint to <b>Recover</b> a deleted resourceGroup object. A valid <b>resourceGroup id</b> is required.</p>

<h3 id="recover-resource-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourceGroup object|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="recover-resource-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-setup-api-resources">Resources</h1>

## List Resources

> Code samples

```bash
curl https://example.com/setup/v1/resources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources`

<p>Use this endpoint to return a <b>List of Resources</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|resourceGroupId|query|string|false|Filter by group Id|
|email|query|string|false|Filter by email address|
|name|query|string|false|Search by name|
|deleted|query|boolean|false|Show by deleted status, default is false|
|googleAuthReturnUrl|query|string|false|Google calendar authorization return url|
|outlookAuthReturnUrl|query|string|false|Outlook calendar authorization return url|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max is 100|

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
      "googleCalendarAuthUrl": "string",
      "googleCalendarAuthorized": true,
      "googleCalendarId": "string",
      "groupId": 0,
      "hourly": 0,
      "id": "string",
      "ignoreBusinessHours": true,
      "imageUrl": "string",
      "locationId": "string",
      "name": "string",
      "notificationType": 0,
      "object": "string",
      "options": {
        "bioLink": "string",
        "bookingNotification": 0,
        "calendarAvailability": 0,
        "displayColor": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "gender": "string",
        "googleCalendarId": "string",
        "hourly": 0,
        "ignoreBusinessHours": true,
        "notificationType": 0,
        "outlookCalendarId": "string",
        "sortKey": 0
      },
      "outlookCalendarAuthUrl": "string",
      "outlookCalendarAuthorized": true,
      "outlookCalendarId": "string",
      "phone": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string"
      },
      "recurringAvailability": true,
      "services": [
        {
          "object": "string",
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

## Create Resource

> Code samples

```bash
curl https://example.com/setup/v1/resources \
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
    "description": "string",
    "email": "string",
    "groupId": "string",
    "locationId": "string",
    "name": "string",
    "options": {
      "bioLink": "string",
      "bookingNotification": 0,
      "calendarAvailability": 0,
      "displayColor": "string",
      "effectiveDate": "1970-01-01T00:00:00Z",
      "gender": "string",
      "googleCalendarId": "string",
      "hourly": 0,
      "ignoreBusinessHours": true,
      "notificationType": 0,
      "outlookCalendarId": "string",
      "sortKey": 0
    },
    "recurringAvailability": true,
    "serviceIds": [
      "string"
    ],
    "timezoneId": "string"
  }'
```

`POST /setup/v1/resources`

<p>Use this endpoint to <b>Create</b> a new resource.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

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
  "description": "string",
  "email": "string",
  "groupId": "string",
  "locationId": "string",
  "name": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "recurringAvailability": true,
  "serviceIds": [
    "string"
  ],
  "timezoneId": "string"
}
```

<h3 id="create-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|googleAuthReturnUrl|query|string|false|Google calendar authorization return url|
|outlookAuthReturnUrl|query|string|false|Outlook calendar authorization return url|
|body|body|[ResourceInputModel](#schemaresourceinputmodel)|false|Resource input model|
|» address|body|[AddressInputModel](#schemaaddressinputmodel)|false|none|
|» availability|body|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|
|» contact|body|[ContactInputModel](#schemacontactinputmodel)|false|none|
|» customFields|body|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|
|» description|body|string \| null|false|none|
|» email|body|string \| null|false|none|
|» groupId|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» options|body|[ResourceOptionsInputModel](#schemaresourceoptionsinputmodel)|false|Options for the new resource|
|» recurringAvailability|body|boolean \| null|false|none|
|» serviceIds|body|[string]|false|none|
|» timezoneId|body|string \| null|false|none|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="create-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Allocation

> Code samples

```bash
curl https://example.com/setup/v1/resources/allocations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources/allocations/{id}`

<p>Use this endpoint to return a <b>Resource Allocation</b>. A valid <b>resourceAllocation id</b> is required. </p>

<h3 id="get-allocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourceAllocation object|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="get-allocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceAllocationViewModel](#schemaresourceallocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Allocation

> Code samples

```bash
curl https://example.com/setup/v1/resources/allocations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endDate": "1970-01-01",
    "endTime": 0,
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`PUT /setup/v1/resources/allocations/{id}`

<p>Use this endpoint to <b>Update</b> a resource allocation. A valid <b>resourceAllocation id</b> is required. Refer to the <i>POST /setup/v1/resources/{id}/allocations</i> endpoint for details.</p>

> Body parameter

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="update-allocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourceAllocation object|
|body|body|[ResourceAllocationUpdateModel](#schemaresourceallocationupdatemodel)|false|Resource allocation update model|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatInputModel](#schemarepeatinputmodel)|false|none|
|» repeats|body|boolean \| null|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="update-allocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Allocation

> Code samples

```bash
curl https://example.com/setup/v1/resources/allocations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/resources/allocations/{id}`

<p>Use this endpoint to <b>Delete</b> a Resource Allocation. A valid <b>resourceAllocation id</b> is required.</p>

<h3 id="delete-allocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourceAllocation object|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="delete-allocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Block

> Code samples

```bash
curl https://example.com/setup/v1/resources/block/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allDay": true,
    "endDate": "1970-01-01",
    "endTime": 0,
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`PUT /setup/v1/resources/block/{id}`

<p>Use this endpoint to <b>Update</b> a Resource Block. A valid <b>resourceBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/resources​/{id}​/block</i> endpoint for fieldnames and details.</p>

> Body parameter

```json
{
  "allDay": true,
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="update-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourceBlock object|
|body|body|[ResourceBlockUpdateModel](#schemaresourceblockupdatemodel)|false|Resource Block update model|
|» allDay|body|boolean \| null|false|none|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatInputModel](#schemarepeatinputmodel)|false|none|
|» repeats|body|boolean \| null|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="update-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Block

> Code samples

```bash
curl https://example.com/setup/v1/resources/block/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/resources/block/{id}`

<p>Use this endpoint to <b>Delete</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>

<h3 id="delete-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourceBlock object|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="delete-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Block

> Code samples

```bash
curl https://example.com/setup/v1/resources/blocks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources/blocks/{id}`

<p>Use this endpoint to <b>Get</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>

<h3 id="get-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resourceBlock object|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="get-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Resources Bulk

> Code samples

```bash
curl https://example.com/setup/v1/resources/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "resources": [
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
        "description": "string",
        "email": "string",
        "groupId": "string",
        "id": "string",
        "name": "string",
        "options": {
          "bioLink": "string",
          "bookingNotification": 0,
          "calendarAvailability": 0,
          "displayColor": "string",
          "effectiveDate": "1970-01-01T00:00:00Z",
          "gender": "string",
          "googleCalendarId": "string",
          "hourly": 0,
          "ignoreBusinessHours": true,
          "notificationType": 0,
          "outlookCalendarId": "string",
          "sortKey": 0
        },
        "recurringAvailability": true,
        "serviceIds": [
          "string"
        ],
        "timezoneId": "string"
      }
    ]
  }'
```

`PUT /setup/v1/resources/bulk`

<p>Use this endpoint to <b>Bulk Update</b> resources. Valid <b>resource id's</b> are required. The list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

> Body parameter

```json
{
  "resources": [
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
      "description": "string",
      "email": "string",
      "groupId": "string",
      "id": "string",
      "name": "string",
      "options": {
        "bioLink": "string",
        "bookingNotification": 0,
        "calendarAvailability": 0,
        "displayColor": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "gender": "string",
        "googleCalendarId": "string",
        "hourly": 0,
        "ignoreBusinessHours": true,
        "notificationType": 0,
        "outlookCalendarId": "string",
        "sortKey": 0
      },
      "recurringAvailability": true,
      "serviceIds": [
        "string"
      ],
      "timezoneId": "string"
    }
  ]
}
```

<h3 id="update-resources-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|googleAuthReturnUrl|query|string|false|Google calendar authorization return url|
|outlookAuthReturnUrl|query|string|false|Outlook calendar authorization return url|
|body|body|[ResourcesUpdateModel](#schemaresourcesupdatemodel)|false|Resources update model|
|» resources|body|[[ResourceBulkUpdateModel](#schemaresourcebulkupdatemodel)]|false|none|

> Example responses

> 200 Response

```json
[
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
    "googleCalendarAuthUrl": "string",
    "googleCalendarAuthorized": true,
    "googleCalendarId": "string",
    "groupId": 0,
    "hourly": 0,
    "id": "string",
    "ignoreBusinessHours": true,
    "imageUrl": "string",
    "locationId": "string",
    "name": "string",
    "notificationType": 0,
    "object": "string",
    "options": {
      "bioLink": "string",
      "bookingNotification": 0,
      "calendarAvailability": 0,
      "displayColor": "string",
      "effectiveDate": "1970-01-01T00:00:00Z",
      "gender": "string",
      "googleCalendarId": "string",
      "hourly": 0,
      "ignoreBusinessHours": true,
      "notificationType": 0,
      "outlookCalendarId": "string",
      "sortKey": 0
    },
    "outlookCalendarAuthUrl": "string",
    "outlookCalendarAuthorized": true,
    "outlookCalendarId": "string",
    "phone": {
      "businessPhone": "string",
      "businessPhoneExt": "string",
      "homePhone": "string",
      "mobilePhone": "string",
      "phoneType": "string"
    },
    "recurringAvailability": true,
    "services": [
      {
        "object": "string",
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
]
```

<h3 id="update-resources-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="update-resources-bulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ResourceViewModel](#schemaresourceviewmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Resources Bulk

> Code samples

```bash
curl https://example.com/setup/v1/resources/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "resources": [
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
        "description": "string",
        "email": "string",
        "groupId": "string",
        "locationId": "string",
        "name": "string",
        "options": {
          "bioLink": "string",
          "bookingNotification": 0,
          "calendarAvailability": 0,
          "displayColor": "string",
          "effectiveDate": "1970-01-01T00:00:00Z",
          "gender": "string",
          "googleCalendarId": "string",
          "hourly": 0,
          "ignoreBusinessHours": true,
          "notificationType": 0,
          "outlookCalendarId": "string",
          "sortKey": 0
        },
        "recurringAvailability": true,
        "serviceIds": [
          "string"
        ],
        "timezoneId": "string"
      }
    ]
  }'
```

`POST /setup/v1/resources/bulk`

<p>Use this endpoint to <b>Bulk Create</b> resources. Valid <b>resource ids</b> are required. The posted list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

> Body parameter

```json
{
  "resources": [
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
      "description": "string",
      "email": "string",
      "groupId": "string",
      "locationId": "string",
      "name": "string",
      "options": {
        "bioLink": "string",
        "bookingNotification": 0,
        "calendarAvailability": 0,
        "displayColor": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "gender": "string",
        "googleCalendarId": "string",
        "hourly": 0,
        "ignoreBusinessHours": true,
        "notificationType": 0,
        "outlookCalendarId": "string",
        "sortKey": 0
      },
      "recurringAvailability": true,
      "serviceIds": [
        "string"
      ],
      "timezoneId": "string"
    }
  ]
}
```

<h3 id="create-resources-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|googleAuthReturnUrl|query|string|false|Google calendar authorization return url|
|outlookAuthReturnUrl|query|string|false|Outlook calendar authorization return url|
|body|body|[ResourcesInputModel](#schemaresourcesinputmodel)|false|Resources input model|
|» resources|body|[[ResourceInputModel](#schemaresourceinputmodel)]|false|none|

> Example responses

> 200 Response

```json
[
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
    "googleCalendarAuthUrl": "string",
    "googleCalendarAuthorized": true,
    "googleCalendarId": "string",
    "groupId": 0,
    "hourly": 0,
    "id": "string",
    "ignoreBusinessHours": true,
    "imageUrl": "string",
    "locationId": "string",
    "name": "string",
    "notificationType": 0,
    "object": "string",
    "options": {
      "bioLink": "string",
      "bookingNotification": 0,
      "calendarAvailability": 0,
      "displayColor": "string",
      "effectiveDate": "1970-01-01T00:00:00Z",
      "gender": "string",
      "googleCalendarId": "string",
      "hourly": 0,
      "ignoreBusinessHours": true,
      "notificationType": 0,
      "outlookCalendarId": "string",
      "sortKey": 0
    },
    "outlookCalendarAuthUrl": "string",
    "outlookCalendarAuthorized": true,
    "outlookCalendarId": "string",
    "phone": {
      "businessPhone": "string",
      "businessPhoneExt": "string",
      "homePhone": "string",
      "mobilePhone": "string",
      "phoneType": "string"
    },
    "recurringAvailability": true,
    "services": [
      {
        "object": "string",
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
]
```

<h3 id="create-resources-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="create-resources-bulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ResourceViewModel](#schemaresourceviewmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Time Zones

> Code samples

```bash
curl https://example.com/setup/v1/resources/timezones \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources/timezones`

<p>Use this endpoint to return a <b>List of Time Zones</b>.</p>

> Example responses

> 200 Response

```json
{
  "baseUtcOffset": 0,
  "daylightName": "string",
  "displayName": "string",
  "standardName": "string",
  "supportsDaylightSavingTime": true,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

<h3 id="get-time-zones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SystemTimezoneViewModel](#schemasystemtimezoneviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Resource

> Code samples

```bash
curl https://example.com/setup/v1/resources/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources/{id}`

<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the: <i>GET /setup/v1/resources</i> endpoint.</p>

<h3 id="get-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|googleAuthReturnUrl|query|string|false|Google calendar authorization return url|
|outlookAuthReturnUrl|query|string|false|Outlook calendar authorization return url|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

## Update Resource

> Code samples

```bash
curl https://example.com/setup/v1/resources/string \
  -X PUT \
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
    "description": "string",
    "email": "string",
    "groupId": "string",
    "locationId": "string",
    "name": "string",
    "options": {
      "bioLink": "string",
      "bookingNotification": 0,
      "calendarAvailability": 0,
      "displayColor": "string",
      "effectiveDate": "1970-01-01T00:00:00Z",
      "gender": "string",
      "googleCalendarId": "string",
      "hourly": 0,
      "ignoreBusinessHours": true,
      "notificationType": 0,
      "outlookCalendarId": "string",
      "sortKey": 0
    },
    "recurringAvailability": true,
    "serviceIds": [
      "string"
    ],
    "timezoneId": "string"
  }'
```

`PUT /setup/v1/resources/{id}`

<p>Use this endpoint to <b>Update</b> a resource. A valid <b>resource id</b> is required.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

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
  "description": "string",
  "email": "string",
  "groupId": "string",
  "locationId": "string",
  "name": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "recurringAvailability": true,
  "serviceIds": [
    "string"
  ],
  "timezoneId": "string"
}
```

<h3 id="update-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|googleAuthReturnUrl|query|string|false|Google calendar authorization return url|
|outlookAuthReturnUrl|query|string|false|Outlook calendar authorization return url|
|body|body|[ResourceUpdateModel](#schemaresourceupdatemodel)|false|Resource Update Model|
|» address|body|[AddressUpdateModel](#schemaaddressupdatemodel)|false|none|
|» availability|body|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|
|» contact|body|[ContactUpdateModel](#schemacontactupdatemodel)|false|none|
|» customFields|body|[CustomFieldUpdateModel](#schemacustomfieldupdatemodel)|false|none|
|» description|body|string \| null|false|none|
|» email|body|string \| null|false|none|
|» groupId|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» options|body|[ResourceOptionsUpdateModel](#schemaresourceoptionsupdatemodel)|false|none|
|» recurringAvailability|body|boolean \| null|false|none|
|» serviceIds|body|[string]|false|none|
|» timezoneId|body|string \| null|false|none|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="update-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Resource

> Code samples

```bash
curl https://example.com/setup/v1/resources/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/resources/{id}`

<p>Use this endpoint to <b>Delete</b> a resource. The resource is not permanently deleted and can be recovered. A valid <b>resource id</b> is required.</p>

<h3 id="delete-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="delete-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Resource Allocations

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/allocations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources/{id}/allocations`

<p>Use this endpoint to return a list of <b>Resource Allocations</b> for a specified resource. We recommend using allocations if a resource's schedule changes frequently from day to day or week to week. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-resource-allocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource to list allocations for|
|startDate|query|string(date-time)|false|yyyy-mm-dd, filter allocations on/after startDate|
|endDate|query|string(date-time)|false|yyyy-mm-dd, filter on/before endDate|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "businessId": 0,
      "deletedStatus": true,
      "deletedTime": "string",
      "endDate": "string",
      "endTime": 0,
      "id": 0,
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
      "resourceId": 0,
      "startDate": "string",
      "startTime": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-resource-allocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|resource allocation objects|[ResourceAllocationListViewModel](#schemaresourceallocationlistviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|401|Unauthorized|Authorization error.|None|
|404|Not Found|Resource was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Allocation

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/allocations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endDate": "1970-01-01",
    "endTime": 0,
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`POST /setup/v1/resources/{id}/allocations`

<p>Use this endpoint to <b>Create</b> a resource allocation for a resource. A valid <b>resource id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Resource allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. They can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M </b>for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the allocation repeats. For example, an interval of 2 for a weekly allocation means that the allocation will repeat every 2nd week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will repeat every 10 days. The interval property applies to all repeat frequencies.  <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY ALLOCATIONS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY ALLOCATIONS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>. You must specify the <b>“weekdays”</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>.  For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the allocation date range.</p>
<p>
  <b>MONTHLY ALLOCATIONS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly. <b>monthDay</b> is the day of the month you want allocated.  If monthDay=’15’ this means to allocate the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on.  For <b>monthType M</b>, monthDay value contains 2 digits:  day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
<p>
  <b>Repeats will end on the date specified by the end date.</b>
</p>

> Body parameter

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="create-allocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|body|body|[ResourceAllocationInputModel](#schemaresourceallocationinputmodel)|false|none|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatInputModel](#schemarepeatinputmodel)|false|none|
|» repeats|body|boolean \| null|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="create-allocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Weekly Availability

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/availability \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources/{id}/availability`

<p>Use this endpoint to view the <b>Weekly Availability</b> for a resource. The displayed available times are represented in the resource's timezone. The resource timezone can be set to any world timezone. If not provided, by default it is set to the Business timezone.</p>

<h3 id="list-weekly-availability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "ignoreBusinessHours": true,
  "resourceId": 0,
  "resourceName": "string",
  "resourceTzo": 0,
  "weekdays": {
    "fri": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    }
  }
}
```

<h3 id="list-weekly-availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceAvailabilityViewModel](#schemaresourceavailabilityviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Weekly Availability

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/availability \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
  }'
```

`PUT /setup/v1/resources/{id}/availability`

<p>Use this endpoint to <b>Update</b> resource weekly availability. A valid <b>resource id</b> is required. The availability day entries are created when a resource object is created.</p>
<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the resource. Resources can be set to any world timezone. </p>

> Body parameter

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

<h3 id="update-weekly-availability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|body|body|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|Resource Availability Input Model|
|» fri|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» mon|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» sat|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» sun|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» thu|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» tue|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» wed|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "ignoreBusinessHours": true,
  "resourceId": 0,
  "resourceName": "string",
  "resourceTzo": 0,
  "weekdays": {
    "fri": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    }
  }
}
```

<h3 id="update-weekly-availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceAvailabilityViewModel](#schemaresourceavailabilityviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Block

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/block \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allDay": true,
    "endDate": "1970-01-01",
    "endTime": 0,
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`POST /setup/v1/resources/{id}/block`

<p>Use this endpoint to <b>Create</b> a Resource Block. A valid <b>resource id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
<p>Resource blocks can be set to specific time ranges or for the whole day. Use the <b>AllDay</b> setting to create an all-day block. <b>AllDay</b> will automatically set startTime to 0 and endTime to 2400.</p>
<p>Resource blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
<p>
  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”. </p>
<p>
  <b>Repeats will end on the date specified by the end date.</b>
</p>

> Body parameter

```json
{
  "allDay": true,
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="create-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|body|body|[ResourceBlockInputModel](#schemaresourceblockinputmodel)|false|none|
|» allDay|body|boolean \| null|false|none|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatInputModel](#schemarepeatinputmodel)|false|none|
|» repeats|body|boolean \| null|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="create-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Resource Blocks

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/blocks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources/{id}/blocks`

<p>Use this endpoint to return a list of <b>Resource Blocks</b>. A valid <b>resource id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-resource-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource to list blocks for|
|startDate|query|string(date-time)|false|YYYY-MM-DD, filter blocks on/after startDate|
|endDate|query|string(date-time)|false|YYYY-MM-DD, filter on/before endDate|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
      "businessId": 0,
      "deletedStatus": true,
      "deletedTime": "string",
      "endDate": "string",
      "endTime": 0,
      "id": 0,
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
      "resourceId": 0,
      "startDate": "string",
      "startTime": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-resource-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|resource block object's|[ResourceBlockListViewModel](#schemaresourceblocklistviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|401|Unauthorized|Authorization error.|None|
|404|Not Found|Resource was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Resource Google URL

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/calendar/auth/google/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}`

<p>Use this endpoint to return the <b>Resources Google Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Google Email Address</b> are required.</p>

<h3 id="get-resource-google-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|googleEmailAddress|path|string|true|Email address of Google Calendar|
|googleAuthReturnUrl|query|string|false|Google calendar authorization return url|

> Example responses

> 200 Response

```json
{
  "calendarAuthUrl": "string",
  "calendarId": "string",
  "object": "string"
}
```

<h3 id="get-resource-google-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CalendarAuthViewModel](#schemacalendarauthviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Resource Outlook URL

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/calendar/auth/outlook/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}`

<p>Use this endpoint to return the <b>Resources Outlook Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Outlook Email Address</b> are required.</p>

<h3 id="get-resource-outlook-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|outlookEmailAddress|path|string|true|Email address of Outlook Calendar|
|outlookAuthReturnUrl|query|string|false|Outlook calendar authorization return url|

> Example responses

> 200 Response

```json
{
  "calendarAuthUrl": "string",
  "calendarId": "string",
  "object": "string"
}
```

<h3 id="get-resource-outlook-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CalendarAuthViewModel](#schemacalendarauthviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Resource Image

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/deleteimage \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/resources/{id}/deleteimage`

<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded resource image. A valid <b>resource id</b> is required.</p>

<h3 id="delete-resource-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="delete-resource-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Reassign Resource

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/reassign/appointments/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/resources/{id}/reassign/appointments/{resourceId}`

<p>Use this endpoint to <b>Reassign</b> appointments from one resource to another. If the startDate is not supplied, the default is today's date + 1 day; If the endDate is not supplied, all future appointments from the start date will be reassigned. If the calendar id is not supplied the default is the primary calendar of the location.</p>

<h3 id="reassign-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of the original resource|
|resourceId|path|string|true|id of the target resource|
|startDate|query|string(date-time)|false|YYYY-MM-DD, Appt range start date|
|endDate|query|string(date-time)|false|YYYY-MM-DD, Appt range end date|
|calendarId|query|string|false|CalendarId of calendar containing appointments|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="reassign-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="reassign-resource-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AppointmentViewModel](#schemaappointmentviewmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Recover Resource

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/recover \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/resources/{id}/recover`

<p>Use this endpoint to <b>Recover</b> a deleted resource. A valid <b>resource id</b> is required.</p>

<h3 id="recover-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|googleAuthReturnUrl|query|string|false|Google calendar authorization return url|
|outlookAuthReturnUrl|query|string|false|Outlook calendar authorization return url|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="recover-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Linked Services

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/services \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /setup/v1/resources/{id}/services`

<p>Use this endpoint to <b>Update</b> the linked services of a Resource. A valid <b>resource id</b> is required.</p>
<p>Updating services with this endpoint will update the linked services available to the resource. Only those services will be available to the resource.</p>
<p>
  <b>Note:</b> This is a destructive process, any existing linked services will be removed and replaced with the list of services supplied here. Provide the resources complete list of services when using this endpoint.</p>

> Body parameter

```json
[
  "string"
]
```

<h3 id="update-linked-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|body|body|[string]|false|Array of valid service object id's|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="update-linked-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Linked Services

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/services \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`POST /setup/v1/resources/{id}/services`

<p>Use this endpoint to explicitly <b>Link Services</b> to a Resource. A valid <b>resource id</b> is required.</p>
<p>
  <b>Note:</b> By default, the services array is empty which signifies that all services are provided by the resource. Linking services here will add to the linked service(s) array available to this resource. This will limit the services available to the resource.</p>
<p>You cannot post services that already exist in the array, you can only add new ones. Use the <i>PUT ​/setup​/v1​/resources​/{id}​/services</i> endpoint to update the entire list.</p>

> Body parameter

```json
[
  "string"
]
```

<h3 id="create-linked-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|body|body|[string]|false|Array of valid service object id's|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="create-linked-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Linked Services

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/services \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/resources/{id}/services`

<p>Use this endpoint to <b>Delete</b> linked services from a Resource, i.e. unlink the services. A valid <b>resource id</b> is required. Once deleted, all services become available to the resource.</p>

<h3 id="delete-linked-services-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="delete-linked-services-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Upload Resource Image

> Code samples

```bash
curl https://example.com/setup/v1/resources/string/uploadimage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "imageFileData": "string",
    "imageFileName": "string"
  }'
```

`POST /setup/v1/resources/{id}/uploadimage`

<p>Use this endpoint to <b>Upload</b> a resource image to the resource. A valid <b>resource id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

> Body parameter

```json
{
  "imageFileData": "string",
  "imageFileName": "string"
}
```

<h3 id="upload-resource-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of resource object|
|body|body|[ResourceImageInputModel](#schemaresourceimageinputmodel)|false|Input model for image upload|
|» imageFileData|body|string \| null|false|none|
|» imageFileName|body|string \| null|false|none|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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

<h3 id="upload-resource-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceViewModel](#schemaresourceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-setup-api-servicegroups">ServiceGroups</h1>

## List Service Groups

> Code samples

```bash
curl https://example.com/setup/v1/servicegroups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/servicegroups`

<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If no business location is specified it will default to the Primary Business Location of the company. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>

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

## Create Service Group

> Code samples

```bash
curl https://example.com/setup/v1/servicegroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "locationId": "string",
    "name": "string",
    "type": 0
  }'
```

`POST /setup/v1/servicegroups`

<p>Use this endpoint to <b>Create</b> a Service Group. If no locationId is specified in the body, the business location will default to the primary business location. Service groups are used to categorize services. Service groups are optional and only make sense if you have multiple services that will be easier read if categorized. Only the service group Type of 0 is supported by the API. It defaults to 0 if not supplied.</p>

> Body parameter

```json
{
  "description": "string",
  "locationId": "string",
  "name": "string",
  "type": 0
}
```

<h3 id="create-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ServiceGroupInputModel](#schemaservicegroupinputmodel)|false|none|
|» description|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» type|body|integer(int32) \| null|false|none|

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

<h3 id="create-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceGroupViewModel](#schemaservicegroupviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Service Group

> Code samples

```bash
curl https://example.com/setup/v1/servicegroups/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/servicegroups/{id}`

<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find service group id's by using the <i>GET /setup/v1/serviceGroups</i> endpoint.</p>

<h3 id="get-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|id of serviceGroup object|

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

## Update Service Group

> Code samples

```bash
curl https://example.com/setup/v1/servicegroups/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "locationId": "string",
    "name": "string",
    "type": 0
  }'
```

`PUT /setup/v1/servicegroups/{id}`

<p>Use this endpoint to <b>Update</b> a Service Group object. A valid <b>serviceGroup id</b> is required. </p>

> Body parameter

```json
{
  "description": "string",
  "locationId": "string",
  "name": "string",
  "type": 0
}
```

<h3 id="update-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|id of serviceGroup object|
|body|body|[ServiceGroupInputModel](#schemaservicegroupinputmodel)|false|none|
|» description|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» type|body|integer(int32) \| null|false|none|

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

<h3 id="update-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceGroupViewModel](#schemaservicegroupviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Service Group

> Code samples

```bash
curl https://example.com/setup/v1/servicegroups/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/servicegroups/{id}`

<p>Use this endpoint to <b>Delete</b> a Service Group object. A valid <b>serviceGroup id</b> is required. The service group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/servicegroups​/{id}​/recover</i> endpoint.</p>

<h3 id="delete-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|id of serviceGroup object|

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

<h3 id="delete-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceGroupViewModel](#schemaservicegroupviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Recover Service Group

> Code samples

```bash
curl https://example.com/setup/v1/servicegroups/0/recover \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/servicegroups/{id}/recover`

<p>Use this endpoint to <b>Recover</b> a deleted Service Group. A valid <b>serviceGroup id</b> is required. </p>

<h3 id="recover-service-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|id of serviceGroup object|

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

<h3 id="recover-service-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceGroupViewModel](#schemaservicegroupviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

<h1 id="onsched-setup-api-services">Services</h1>

## List Services

> Code samples

```bash
curl https://example.com/setup/v1/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/services`

<p>Use this endpoint to return a <b>List of Service</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locationId|query|string|false|id of business location, defaults to primary business location|
|serviceGroupId|query|integer(int32)|false|Filter services by groupId|
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

## Create Service

> Code samples

```bash
curl https://example.com/setup/v1/services \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
    "bookingInterval": 0,
    "bookingLimit": 0,
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
    "description": "string",
    "duration": 0,
    "fees": {
      "cancellationFeeAmount": 0,
      "cancellationFeeTaxable": true,
      "feeAmount": 0,
      "feeTaxable": true,
      "nonRefundable": true
    },
    "locationId": "string",
    "maxCapacity": 0,
    "maxGroupSize": 0,
    "mediaPageUrl": "string",
    "name": "string",
    "options": {
      "consumerPadding": true,
      "defaultService": true,
      "durationInterval": 0,
      "durationMax": 0,
      "durationMin": 0,
      "durationSelect": true,
      "padding": 0
    },
    "public": true,
    "serviceGroupId": "string",
    "settings": {
      "bookAheadUnit": 0,
      "bookAheadValue": 0,
      "bookInAdvance": 0
    },
    "type": "string"
  }'
```

`POST /setup/v1/services`

<p>Use this endpoint to <b>Create</b> a new service. If not specified, the business location defaults to the primary business location. Note: Posting a service to the Primary Business Location will scope as company scoped and make the service available to all locations. If you want a service to only be available from a specific location, include the business location id.</p>
<p>Required fields: <b>Name</b> and <b>Duration</b></p>
<p>The service <b>Type</b> is either, <b>1 = Appointment</b> or <b>2 = Event</b>. Default is 1 if not specified.</p>
<p>For type = 1, Appointments - Create an availability entry for each weekday to provide the service for. <b>All days of the week must be provided when adding service availability.</b> Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. Start and End Times are entered in military format. e.g., 800 is 8:00am, 2230 is 10:30pm. If not provided, it defaults to the primary location business hours.</p>
<p>We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. If you require times in between specified hours to be unavailable, use the service block endpoint at: <i>POST ​/setup​/v1​/services​/{id}​/block</i>.</p>
<p>For type = 2, Events - Create service allocations for their availability. Refer to the: <i>POST /setup​/v1​/services​/{id}​/allocations</i> to set up service allocations for the event.</p>
<p>Options are available for customer selected durations, for details: <a href="https://docs.onsched.com/docs/services-overview#variable-duration">Variable Duration Overview</a></p>
<p>Additional parameters include but are not limited to bookingLimit, maxCapacity and maxGroupSize. For details: <a href="https://docs.onsched.com/docs/service-max-capacity">Service Limits Overview</a></p>

> Body parameter

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
  "bookingInterval": 0,
  "bookingLimit": 0,
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
  "description": "string",
  "duration": 0,
  "fees": {
    "cancellationFeeAmount": 0,
    "cancellationFeeTaxable": true,
    "feeAmount": 0,
    "feeTaxable": true,
    "nonRefundable": true
  },
  "locationId": "string",
  "maxCapacity": 0,
  "maxGroupSize": 0,
  "mediaPageUrl": "string",
  "name": "string",
  "options": {
    "consumerPadding": true,
    "defaultService": true,
    "durationInterval": 0,
    "durationMax": 0,
    "durationMin": 0,
    "durationSelect": true,
    "padding": 0
  },
  "public": true,
  "serviceGroupId": "string",
  "settings": {
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0
  },
  "type": "string"
}
```

<h3 id="create-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ServiceInputModel](#schemaserviceinputmodel)|false|none|
|» availability|body|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|
|» bookingInterval|body|integer(int32)|false|none|
|» bookingLimit|body|integer(int32)|false|none|
|» customFields|body|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|
|» description|body|string \| null|false|none|
|» duration|body|integer(int32)|false|none|
|» fees|body|[ServiceFeesInputModel](#schemaservicefeesinputmodel)|false|none|
|» locationId|body|string \| null|false|none|
|» maxCapacity|body|integer(int32)|false|none|
|» maxGroupSize|body|integer(int32)|false|none|
|» mediaPageUrl|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» options|body|[ServiceOptionsInputModel](#schemaserviceoptionsinputmodel)|false|none|
|» public|body|boolean|false|none|
|» serviceGroupId|body|string \| null|false|none|
|» settings|body|[ServiceSettingsInputModel](#schemaservicesettingsinputmodel)|false|none|
|» type|body|string \| null|false|none|

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

<h3 id="create-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceViewModel](#schemaserviceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Allocation

> Code samples

```bash
curl https://example.com/setup/v1/services/allocations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/services/allocations/{id}`

<p>Use this endpoint to <b>Get a Service Allocation</b>. A valid <b>serviceAllocation id</b> is required.</p>

<h3 id="get-allocation-1-parameters">Parameters</h3>

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

<h3 id="get-allocation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceAllocationViewModel](#schemaserviceallocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Allocation

> Code samples

```bash
curl https://example.com/setup/v1/services/allocations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bookingLimit": 0,
    "endDate": "1970-01-01",
    "endTime": 0,
    "locationId": "string",
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "resourceId": "string",
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`PUT /setup/v1/services/allocations/{id}`

<p>Use this endpoint to <b>Update</b> a service allocation. A valid <b>serviceAllocation id</b> is required. Refer to the <i>POST /setup/v1/services/{id}/allocations</i> endpoint for fields names and details.</p>

> Body parameter

```json
{
  "bookingLimit": 0,
  "endDate": "1970-01-01",
  "endTime": 0,
  "locationId": "string",
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "resourceId": "string",
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="update-allocation-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of serviceAllocation object|
|body|body|[ServiceAllocationUpdateModel](#schemaserviceallocationupdatemodel)|false|Service allocation update model|
|» bookingLimit|body|integer(int32)|false|none|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» locationId|body|string \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatInputModel](#schemarepeatinputmodel)|false|none|
|» repeats|body|boolean \| null|false|none|
|» resourceId|body|string \| null|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

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

<h3 id="update-allocation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceAllocationViewModel](#schemaserviceallocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Allocation

> Code samples

```bash
curl https://example.com/setup/v1/services/allocations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/services/allocations/{id}`

<p>Use this endpoint to permanently <b>Delete</b> a service allocation. A valid <b>serviceAllocation id</b> is required.</p>

<h3 id="delete-allocation-1-parameters">Parameters</h3>

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

<h3 id="delete-allocation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceAllocationViewModel](#schemaserviceallocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Block

> Code samples

```bash
curl https://example.com/setup/v1/services/block/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endDate": "1970-01-01",
    "endTime": 0,
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`PUT /setup/v1/services/block/{id}`

<p>Use this endpoint to <b>Update</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>

> Body parameter

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="update-block-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of serviceBlock object|
|body|body|[ServiceBlockUpdateModel](#schemaserviceblockupdatemodel)|false|Service Block update model|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatUpdateModel](#schemarepeatupdatemodel)|false|none|
|» repeats|body|boolean \| null|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
{
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
  "serviceId": "string",
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="update-block-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceBlockViewModel](#schemaserviceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Block

> Code samples

```bash
curl https://example.com/setup/v1/services/block/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/services/block/{id}`

<p>Use this endpoint to permanently <b>Delete</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>

<h3 id="delete-block-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of serviceBlock object|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="delete-block-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Block

> Code samples

```bash
curl https://example.com/setup/v1/services/blocks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/services/blocks/{id}`

<p>Use this endpoint to <b>Get a Service Block</b>. A valid <b>serviceBlock id</b> is required.</p>

<h3 id="get-block-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of serviceBlock object|

> Example responses

> 200 Response

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="get-block-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResourceBlockViewModel](#schemaresourceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Link Service to Calendar

> Code samples

```bash
curl https://example.com/setup/v1/services/calendar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "calendarId": "string",
    "locationId": "string",
    "serviceId": "string"
  }'
```

`POST /setup/v1/services/calendar`

<p>Use this endpoint to <b>Link a Service</b> to a calendar. </p>

> Body parameter

```json
{
  "calendarId": "string",
  "locationId": "string",
  "serviceId": "string"
}
```

<h3 id="link-service-to-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ServiceCalendarInputModel](#schemaservicecalendarinputmodel)|false|none|
|» calendarId|body|string \| null|false|none|
|» locationId|body|string \| null|false|none|
|» serviceId|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "calendarId": "string",
  "calendarName": "string",
  "id": "string",
  "locationId": "string",
  "serviceId": "string",
  "serviceName": "string"
}
```

<h3 id="link-service-to-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceCalendarViewModel](#schemaservicecalendarviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Service Links

> Code samples

```bash
curl https://example.com/setup/v1/services/calendar/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/services/calendar/{id}`

<p>Use this endpoint to <b>Delete</b> service links from the calendar specified. A valid <b>calendar id</b> is required.</p>

<h3 id="delete-service-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of calender to delete service links from|

> Example responses

> 200 Response

```json
{
  "calendarId": "string",
  "calendarName": "string",
  "id": "string",
  "locationId": "string",
  "serviceId": "string",
  "serviceName": "string"
}
```

<h3 id="delete-service-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceCalendarViewModel](#schemaservicecalendarviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Service

> Code samples

```bash
curl https://example.com/setup/v1/services/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/services/{id}`

<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /setup/v1/services</i> endpoint.</p>

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

## Update Service

> Code samples

```bash
curl https://example.com/setup/v1/services/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
    "bookingInterval": 0,
    "bookingLimit": 0,
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
    "description": "string",
    "duration": 0,
    "fees": {
      "cancellationFeeAmount": 0,
      "cancellationFeeTaxable": true,
      "feeAmount": 0,
      "feeTaxable": true,
      "nonRefundable": true
    },
    "locationId": "string",
    "maxCapacity": 0,
    "maxGroupSize": 0,
    "mediaPageUrl": "string",
    "name": "string",
    "options": {
      "consumerPadding": true,
      "defaultService": true,
      "durationInterval": 0,
      "durationMax": 0,
      "durationMin": 0,
      "durationSelect": true,
      "padding": 0
    },
    "public": true,
    "serviceGroupId": "string",
    "settings": {
      "bookAheadUnit": 0,
      "bookAheadValue": 0,
      "bookInAdvance": 0
    },
    "type": "string"
  }'
```

`PUT /setup/v1/services/{id}`

<p>Use this endpoint to <b>Update</b> a service object. A valid <b>service id</b> is required.</p>

> Body parameter

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
  "bookingInterval": 0,
  "bookingLimit": 0,
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
  "description": "string",
  "duration": 0,
  "fees": {
    "cancellationFeeAmount": 0,
    "cancellationFeeTaxable": true,
    "feeAmount": 0,
    "feeTaxable": true,
    "nonRefundable": true
  },
  "locationId": "string",
  "maxCapacity": 0,
  "maxGroupSize": 0,
  "mediaPageUrl": "string",
  "name": "string",
  "options": {
    "consumerPadding": true,
    "defaultService": true,
    "durationInterval": 0,
    "durationMax": 0,
    "durationMin": 0,
    "durationSelect": true,
    "padding": 0
  },
  "public": true,
  "serviceGroupId": "string",
  "settings": {
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0
  },
  "type": "string"
}
```

<h3 id="update-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[ServiceUpdateModel](#schemaserviceupdatemodel)|false|none|
|» availability|body|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|
|» bookingInterval|body|integer(int32) \| null|false|none|
|» bookingLimit|body|integer(int32) \| null|false|none|
|» customFields|body|[CustomFieldUpdateModel](#schemacustomfieldupdatemodel)|false|none|
|» description|body|string \| null|false|none|
|» duration|body|integer(int32) \| null|false|none|
|» fees|body|[ServiceFeesUpdateModel](#schemaservicefeesupdatemodel)|false|none|
|» locationId|body|string \| null|false|none|
|» maxCapacity|body|integer(int32) \| null|false|none|
|» maxGroupSize|body|integer(int32) \| null|false|none|
|» mediaPageUrl|body|string \| null|false|none|
|» name|body|string \| null|false|none|
|» options|body|[ServiceOptionsUpdateModel](#schemaserviceoptionsupdatemodel)|false|none|
|» public|body|boolean \| null|false|none|
|» serviceGroupId|body|string \| null|false|none|
|» settings|body|[ServiceSettingsUpdateModel](#schemaservicesettingsupdatemodel)|false|none|
|» type|body|string \| null|false|none|

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

<h3 id="update-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceViewModel](#schemaserviceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Service

> Code samples

```bash
curl https://example.com/setup/v1/services/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/services/{id}`

<p>Use this endpoint to <b>Delete</b> a service object. A valid <b>service id</b> is required. The service is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/services​/{id}​/recover</i> endpoint.</p>

<h3 id="delete-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|

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

<h3 id="delete-service-responses">Responses</h3>

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
curl https://example.com/setup/v1/services/string/allocations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/services/{id}/allocations`

<p>Use this endpoint to return a <b>List of Service Allocations</b> for a specified service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b> where the events are offered on specific dates and times. Retrieve all allocations for a location by passing in 0 as the service id.</p>
<p>The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-service-allocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of  service to list allocations for, 0 for all|
|locationId|query|string|false|The id of the location. Defaults to the primary location|
|resourceId|query|string|false|The id of the resource to filter on|
|startDate|query|string(date-time)|false|Format YYYY-MM-DD. Filter appointments by on/after startDate|
|endDate|query|string(date-time)|false|Format YYYY-MM-DD. Filter appointments on/before endDate|
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

## Create Allocation

> Code samples

```bash
curl https://example.com/setup/v1/services/string/allocations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bookingLimit": 0,
    "endDate": "1970-01-01",
    "endTime": 0,
    "locationId": "string",
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "resourceId": "string",
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`POST /setup/v1/services/{id}/allocations`

<p>Use this endpoint to <b>Create</b> a service allocation for a service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b>. Service allocations allow you to specify the time(s) a service is available as opposed to using weekly availability which represents a weekly schedule, ie: Mon-Fri 9am-5pm.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Service allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. Service allocations can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the allocation repeats. For example, an interval of 2 for a weekly allocation means that the allocation will repeat every 2nd week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will repeat every 10 days. The interval property applies to all repeat frequencies.  <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY ALLOCATIONS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY ALLOCATIONS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>. You must specify the <b>“weekdays”</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>.  For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the allocation date range.</p>
<p>
  <b>MONTHLY ALLOCATIONS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly. <b>monthDay</b> is the day of the month you want allocated.  If monthDay=’15’ this means to allocate the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on.  For <b>monthType M</b>, monthDay value contains 2 digits:  day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
<p>
  <b>Repeats will end on the date specified by the end date.</b>
</p>

> Body parameter

```json
{
  "bookingLimit": 0,
  "endDate": "1970-01-01",
  "endTime": 0,
  "locationId": "string",
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "resourceId": "string",
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="create-allocation-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|
|body|body|[ServiceAllocationInputModel](#schemaserviceallocationinputmodel)|false|none|
|» bookingLimit|body|integer(int32)|false|none|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» locationId|body|string \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatInputModel](#schemarepeatinputmodel)|false|none|
|» repeats|body|boolean \| null|false|none|
|» resourceId|body|string \| null|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

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

<h3 id="create-allocation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceAllocationViewModel](#schemaserviceallocationviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Allocations Bulk

> Code samples

```bash
curl https://example.com/setup/v1/services/string/allocations/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "serviceAllocations": [
      {
        "bookingLimit": 0,
        "endDate": "1970-01-01",
        "endTime": 0,
        "locationId": "string",
        "reason": "string",
        "repeat": {
          "frequency": "string",
          "interval": 0,
          "monthDay": 0,
          "monthType": "string",
          "weekdays": "string"
        },
        "repeats": true,
        "resourceId": "string",
        "startDate": "1970-01-01",
        "startTime": 0
      }
    ]
  }'
```

`POST /setup/v1/services/{id}/allocations/bulk`

<p>Use this endpoint to <b>Create</b> bulk service allocations. A valid <b>service id</b> is required. Use this endpoint only if you need to POST multiple service allocations in one transaction. For details refer to: <a href="POST ​/setup​/v1​/services​/{id}​/allocations">Post Service Allocation</a></p>

> Body parameter

```json
{
  "serviceAllocations": [
    {
      "bookingLimit": 0,
      "endDate": "1970-01-01",
      "endTime": 0,
      "locationId": "string",
      "reason": "string",
      "repeat": {
        "frequency": "string",
        "interval": 0,
        "monthDay": 0,
        "monthType": "string",
        "weekdays": "string"
      },
      "repeats": true,
      "resourceId": "string",
      "startDate": "1970-01-01",
      "startTime": 0
    }
  ]
}
```

<h3 id="create-allocations-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|
|body|body|[ServiceAllocationsInputModel](#schemaserviceallocationsinputmodel)|false|none|
|» serviceAllocations|body|[[ServiceAllocationInputModel](#schemaserviceallocationinputmodel)]|false|none|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="create-allocations-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="create-allocations-bulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ServiceAllocationViewModel](#schemaserviceallocationviewmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Weekly Availability

> Code samples

```bash
curl https://example.com/setup/v1/services/string/availability \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/services/{id}/availability`

<p>Use this endpoint to return the <b>Weekly Service Availability</b> for an appointment service. A valid <b>service id</b> is required. Weekly availability is returned for services where the Type = 1. For event type services, where service Type = 2, refer to the <i>GET ​/setup​/v1​/services​/{id}​/allocations</i> endpoint.</p>

<h3 id="get-weekly-availability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|

> Example responses

> 200 Response

```json
{
  "ignoreBusinessHours": true,
  "serviceId": 0,
  "serviceName": "string",
  "weekdays": {
    "fri": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    }
  }
}
```

<h3 id="get-weekly-availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceAvailabilityViewModel](#schemaserviceavailabilityviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Update Weekly Availability

> Code samples

```bash
curl https://example.com/setup/v1/services/string/availability \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
  }'
```

`PUT /setup/v1/services/{id}/availability`

<p>Use this endpoint to <b>Update</b> service weekly availability. A valid <b>service id</b> is required. The availability day entries are created when a service object is created.</p>
<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the business location.</p>

> Body parameter

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

<h3 id="update-weekly-availability-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|
|body|body|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|Service Availability Input Model|
|» fri|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» mon|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» sat|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» sun|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» thu|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» tue|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|
|» wed|body|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|

> Example responses

> 200 Response

```json
{
  "ignoreBusinessHours": true,
  "serviceId": 0,
  "serviceName": "string",
  "weekdays": {
    "fri": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    }
  }
}
```

<h3 id="update-weekly-availability-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceAvailabilityViewModel](#schemaserviceavailabilityviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Create Block

> Code samples

```bash
curl https://example.com/setup/v1/services/string/block \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endDate": "1970-01-01",
    "endTime": 0,
    "locationId": "string",
    "reason": "string",
    "repeat": {
      "frequency": "string",
      "interval": 0,
      "monthDay": 0,
      "monthType": "string",
      "weekdays": "string"
    },
    "repeats": true,
    "startDate": "1970-01-01",
    "startTime": 0
  }'
```

`POST /setup/v1/services/{id}/block`

<p>Use this endpoint to <b>Create</b> a Service Block. A valid <b>service id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
<p>Service blocks can be set to specific time ranges or for the whole day. To block a whole day set startTime to 0 and endTime to 2400.</p>
<p>Service blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
<p>
  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
<p>
  <b>Repeats will end on the date specified by the end date.</b>
</p>

> Body parameter

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "locationId": "string",
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

<h3 id="create-block-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|
|body|body|[ServiceBlockInputModel](#schemaserviceblockinputmodel)|false|none|
|» endDate|body|string(date) \| null|false|none|
|» endTime|body|integer(int32) \| null|false|none|
|» locationId|body|string \| null|false|none|
|» reason|body|string \| null|false|none|
|» repeat|body|[RepeatInputModel](#schemarepeatinputmodel)|false|none|
|» repeats|body|boolean|false|none|
|» startDate|body|string(date) \| null|false|none|
|» startTime|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
{
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
  "serviceId": "string",
  "startDate": "string",
  "startTime": 0
}
```

<h3 id="create-block-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceBlockViewModel](#schemaserviceblockviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Service Blocks

> Code samples

```bash
curl https://example.com/setup/v1/services/string/blocks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/services/{id}/blocks`

<p>Use this endpoint to return a list of <b>Service Blocks</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-service-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service to list blocks for|
|startDate|query|string(date-time)|false|Format YYYY-MM-DD. Filter blocks on/after startDate|
|endDate|query|string(date-time)|false|Format YYYY-MM-DD. Filter on/before endDate|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": [
    {
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
      "serviceId": "string",
      "startDate": "string",
      "startTime": 0
    }
  ],
  "hasMore": true,
  "object": "string",
  "total": 0,
  "url": "string"
}
```

<h3 id="list-service-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|service block object's|[ServiceBlockListViewModel](#schemaserviceblocklistviewmodel)|
|400|Bad Request|Missing or invalid values in the request|None|
|401|Unauthorized|Authorization error.|None|
|404|Not Found|Service was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Get Linked Calendar

> Code samples

```bash
curl https://example.com/setup/v1/services/string/calendar \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/services/{id}/calendar`

<p>Use this endpoint to <b>Get the Linked Calendar</b> for the service requested. A valid <b>service id</b> is required. A service can only be linked to one calendar in a location.</p>

<h3 id="get-linked-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|
|locationId|query|string|false|id of business location, defaults to primary business location|

> Example responses

> 200 Response

```json
{
  "calendarId": "string",
  "calendarName": "string",
  "id": "string",
  "locationId": "string",
  "serviceId": "string",
  "serviceName": "string"
}
```

<h3 id="get-linked-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceCalendarViewModel](#schemaservicecalendarviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Delete Service Image

> Code samples

```bash
curl https://example.com/setup/v1/services/string/deleteimage \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /setup/v1/services/{id}/deleteimage`

<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded service image. A valid <b>service id</b> is required.</p>

<h3 id="delete-service-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|

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

<h3 id="delete-service-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceViewModel](#schemaserviceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## Recover Service

> Code samples

```bash
curl https://example.com/setup/v1/services/string/recover \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /setup/v1/services/{id}/recover`

<p>Use this endpoint to <b>Recover</b> a deleted service object. A valid <b>service id</b> is required.</p>

<h3 id="recover-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

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

<h3 id="recover-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceViewModel](#schemaserviceviewmodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: OnSchedApi )
</aside>

## List Resources for Service

> Code samples

```bash
curl https://example.com/setup/v1/services/string/resources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /setup/v1/services/{id}/resources`

<p>Use this endpoint to return a list of <b>Resources</b> that provide the requested service. A valid <b>service id</b> is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

<h3 id="list-resources-for-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|
|offset|query|integer(int32)|false|Starting row of page, default 0|
|limit|query|integer(int32)|false|Page limit default 20, max 100|
|googleAuthReturnUrl|query|string|false|Google calendar authorization return url|
|outlookAuthReturnUrl|query|string|false|Outlook calendar authorization return url|

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
      "googleCalendarAuthUrl": "string",
      "googleCalendarAuthorized": true,
      "googleCalendarId": "string",
      "groupId": 0,
      "hourly": 0,
      "id": "string",
      "ignoreBusinessHours": true,
      "imageUrl": "string",
      "locationId": "string",
      "name": "string",
      "notificationType": 0,
      "object": "string",
      "options": {
        "bioLink": "string",
        "bookingNotification": 0,
        "calendarAvailability": 0,
        "displayColor": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "gender": "string",
        "googleCalendarId": "string",
        "hourly": 0,
        "ignoreBusinessHours": true,
        "notificationType": 0,
        "outlookCalendarId": "string",
        "sortKey": 0
      },
      "outlookCalendarAuthUrl": "string",
      "outlookCalendarAuthorized": true,
      "outlookCalendarId": "string",
      "phone": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string"
      },
      "recurringAvailability": true,
      "services": [
        {
          "object": "string",
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

## Upload Service Image

> Code samples

```bash
curl https://example.com/setup/v1/services/string/uploadimage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "imageFileData": "string",
    "imageFileName": "string"
  }'
```

`POST /setup/v1/services/{id}/uploadimage`

<p>Use this endpoint to <b>Upload</b> an image to the service. A valid <b>service id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

> Body parameter

```json
{
  "imageFileData": "string",
  "imageFileName": "string"
}
```

<h3 id="upload-service-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of service object|
|body|body|[ServiceImageInputModel](#schemaserviceimageinputmodel)|false|Input model for image upload|
|» imageFileData|body|string \| null|false|none|
|» imageFileName|body|string \| null|false|none|

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

<h3 id="upload-service-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ServiceViewModel](#schemaserviceviewmodel)|

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

<h2 id="tocS_AppointmentRemindersInputModel">AppointmentRemindersInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentremindersinputmodel"></a>
<a id="schema_AppointmentRemindersInputModel"></a>
<a id="tocSappointmentremindersinputmodel"></a>
<a id="tocsappointmentremindersinputmodel"></a>

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
|emailFirstReminder|integer(int32) \| null|false|none|none|
|emailFirstReminderInterval|integer(int32)|false|none|none|
|emailSecondReminder|integer(int32) \| null|false|none|none|
|emailSecondReminderInterval|integer(int32)|false|none|none|
|smsFirstReminder|integer(int32) \| null|false|none|none|
|smsFirstReminderInterval|integer(int32)|false|none|none|
|smsSecondReminder|integer(int32) \| null|false|none|none|
|smsSecondReminderInterval|integer(int32)|false|none|none|

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

<h2 id="tocS_AuthorizedCompanyListViewModel">AuthorizedCompanyListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizedcompanylistviewmodel"></a>
<a id="schema_AuthorizedCompanyListViewModel"></a>
<a id="tocSauthorizedcompanylistviewmodel"></a>
<a id="tocsauthorizedcompanylistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "id": "string",
      "name": "string",
      "object": "string"
    }
  ],
  "email": "string",
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
|data|[[AuthorizedCompanyViewModel](#schemaauthorizedcompanyviewmodel)]|false|none|none|
|email|string \| null|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_AuthorizedCompanyViewModel">AuthorizedCompanyViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizedcompanyviewmodel"></a>
<a id="schema_AuthorizedCompanyViewModel"></a>
<a id="tocSauthorizedcompanyviewmodel"></a>
<a id="tocsauthorizedcompanyviewmodel"></a>

```json
{
  "id": "string",
  "name": "string",
  "object": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|

<h2 id="tocS_AvailabilityInputModel">AvailabilityInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityinputmodel"></a>
<a id="schema_AvailabilityInputModel"></a>
<a id="tocSavailabilityinputmodel"></a>
<a id="tocsavailabilityinputmodel"></a>

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
|fri|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|none|
|mon|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|none|
|sat|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|none|
|sun|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|none|
|thu|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|none|
|tue|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|none|
|wed|[WeekDayInputModel](#schemaweekdayinputmodel)|false|none|none|

<h2 id="tocS_AvailabilityViewModel2">AvailabilityViewModel2</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityviewmodel2"></a>
<a id="schema_AvailabilityViewModel2"></a>
<a id="tocSavailabilityviewmodel2"></a>
<a id="tocsavailabilityviewmodel2"></a>

```json
{
  "fri": {
    "displayEndTime": "string",
    "displayStartTime": "string",
    "endTime": 0,
    "startTime": 0
  },
  "mon": {
    "displayEndTime": "string",
    "displayStartTime": "string",
    "endTime": 0,
    "startTime": 0
  },
  "sat": {
    "displayEndTime": "string",
    "displayStartTime": "string",
    "endTime": 0,
    "startTime": 0
  },
  "sun": {
    "displayEndTime": "string",
    "displayStartTime": "string",
    "endTime": 0,
    "startTime": 0
  },
  "thu": {
    "displayEndTime": "string",
    "displayStartTime": "string",
    "endTime": 0,
    "startTime": 0
  },
  "tue": {
    "displayEndTime": "string",
    "displayStartTime": "string",
    "endTime": 0,
    "startTime": 0
  },
  "wed": {
    "displayEndTime": "string",
    "displayStartTime": "string",
    "endTime": 0,
    "startTime": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fri|[WeekDayViewModel2](#schemaweekdayviewmodel2)|false|none|none|
|mon|[WeekDayViewModel2](#schemaweekdayviewmodel2)|false|none|none|
|sat|[WeekDayViewModel2](#schemaweekdayviewmodel2)|false|none|none|
|sun|[WeekDayViewModel2](#schemaweekdayviewmodel2)|false|none|none|
|thu|[WeekDayViewModel2](#schemaweekdayviewmodel2)|false|none|none|
|tue|[WeekDayViewModel2](#schemaweekdayviewmodel2)|false|none|none|
|wed|[WeekDayViewModel2](#schemaweekdayviewmodel2)|false|none|none|

<h2 id="tocS_BusinessDefaultsInputModel">BusinessDefaultsInputModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessdefaultsinputmodel"></a>
<a id="schema_BusinessDefaultsInputModel"></a>
<a id="tocSbusinessdefaultsinputmodel"></a>
<a id="tocsbusinessdefaultsinputmodel"></a>

```json
{
  "autoUpdateCustomer": true,
  "businessNotification": true,
  "customerCity": true,
  "customerState": true,
  "emailInfo": true,
  "enableUtcTimezone": true
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

<h2 id="tocS_BusinessDefaultsUpdateModel">BusinessDefaultsUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessdefaultsupdatemodel"></a>
<a id="schema_BusinessDefaultsUpdateModel"></a>
<a id="tocSbusinessdefaultsupdatemodel"></a>
<a id="tocsbusinessdefaultsupdatemodel"></a>

```json
{
  "autoUpdateCustomer": true,
  "businessNotification": true,
  "customerCity": true,
  "customerState": true,
  "emailInfo": true,
  "enableUtcTimezone": true
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

<h2 id="tocS_BusinessHourInputModel">BusinessHourInputModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinesshourinputmodel"></a>
<a id="schema_BusinessHourInputModel"></a>
<a id="tocSbusinesshourinputmodel"></a>
<a id="tocsbusinesshourinputmodel"></a>

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
|endTime|integer(int32)|false|none|endTime is entered in military format. e.g. 1800 = 6pm end, 2400 = midnight end of day.<br>For 24 hours enter startTime = 0 and endTime = 2400|
|is24Hours|boolean|false|none|If true then available for 24 hours. startTime must be zero and endTime must be 2400.|
|isOpen|boolean|false|none|If false, then not available entire day, starTime and endTime must both be zero. If true, then available between startTime and endTime.|
|startTime|integer(int32)|false|none|startTime is entered in military format. e.g. 0 = midnight start, 900 = 9am start|

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

<h2 id="tocS_BusinessHoursInputModel">BusinessHoursInputModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinesshoursinputmodel"></a>
<a id="schema_BusinessHoursInputModel"></a>
<a id="tocSbusinesshoursinputmodel"></a>
<a id="tocsbusinesshoursinputmodel"></a>

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
|fri|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|mon|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|sat|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|sun|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|thu|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|tue|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|wed|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|

<h2 id="tocS_BusinessHoursUpdateModel">BusinessHoursUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinesshoursupdatemodel"></a>
<a id="schema_BusinessHoursUpdateModel"></a>
<a id="tocSbusinesshoursupdatemodel"></a>
<a id="tocsbusinesshoursupdatemodel"></a>

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
|fri|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|mon|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|sat|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|sun|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|thu|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|tue|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|
|wed|[BusinessHourInputModel](#schemabusinesshourinputmodel)|false|none|none|

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

<h2 id="tocS_BusinessPermissionListViewModel">BusinessPermissionListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinesspermissionlistviewmodel"></a>
<a id="schema_BusinessPermissionListViewModel"></a>
<a id="tocSbusinesspermissionlistviewmodel"></a>
<a id="tocsbusinesspermissionlistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "access": "string",
      "function": "string",
      "object": "string",
      "role": "string"
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
|data|[[BusinessPermissionViewModel](#schemabusinesspermissionviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_BusinessPermissionViewModel">BusinessPermissionViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinesspermissionviewmodel"></a>
<a id="schema_BusinessPermissionViewModel"></a>
<a id="tocSbusinesspermissionviewmodel"></a>
<a id="tocsbusinesspermissionviewmodel"></a>

```json
{
  "access": "string",
  "function": "string",
  "object": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string \| null|false|none|none|
|function|string \| null|false|none|none|
|object|string \| null|false|none|none|
|role|string \| null|false|none|none|

<h2 id="tocS_BusinessServiceListViewModel">BusinessServiceListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessservicelistviewmodel"></a>
<a id="schema_BusinessServiceListViewModel"></a>
<a id="tocSbusinessservicelistviewmodel"></a>
<a id="tocsbusinessservicelistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "id": 0,
      "object": "string",
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
|data|[[BusinessServiceViewModel](#schemabusinessserviceviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

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

<h2 id="tocS_BusinessUserInputModel">BusinessUserInputModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessuserinputmodel"></a>
<a id="schema_BusinessUserInputModel"></a>
<a id="tocSbusinessuserinputmodel"></a>
<a id="tocsbusinessuserinputmodel"></a>

```json
{
  "email": "string",
  "locationId": "string",
  "name": "string",
  "resourceId": "string",
  "role": "string",
  "sendRegistrationInvite": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|role|string \| null|false|none|none|
|sendRegistrationInvite|boolean|false|none|none|

<h2 id="tocS_BusinessUserListViewModel">BusinessUserListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessuserlistviewmodel"></a>
<a id="schema_BusinessUserListViewModel"></a>
<a id="tocSbusinessuserlistviewmodel"></a>
<a id="tocsbusinessuserlistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "businessName": "string",
      "email": "string",
      "id": "string",
      "identityAccount": true,
      "locationId": "string",
      "name": "string",
      "object": "string",
      "permissions": [
        {
          "access": "string",
          "function": "string",
          "object": "string"
        }
      ],
      "resourceId": "string",
      "resourceName": "string",
      "role": "string"
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
|data|[[BusinessUserViewModel](#schemabusinessuserviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_BusinessUserPermissionViewModel">BusinessUserPermissionViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessuserpermissionviewmodel"></a>
<a id="schema_BusinessUserPermissionViewModel"></a>
<a id="tocSbusinessuserpermissionviewmodel"></a>
<a id="tocsbusinessuserpermissionviewmodel"></a>

```json
{
  "access": "string",
  "function": "string",
  "object": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string \| null|false|none|none|
|function|string \| null|false|none|none|
|object|string \| null|false|none|none|

<h2 id="tocS_BusinessUserUpdateModel">BusinessUserUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessuserupdatemodel"></a>
<a id="schema_BusinessUserUpdateModel"></a>
<a id="tocSbusinessuserupdatemodel"></a>
<a id="tocsbusinessuserupdatemodel"></a>

```json
{
  "email": "string",
  "name": "string",
  "resourceId": "string",
  "role": "string",
  "sendRegistrationInvite": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|name|string \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|role|string \| null|false|none|none|
|sendRegistrationInvite|boolean|false|none|none|

<h2 id="tocS_BusinessUserViewModel">BusinessUserViewModel</h2>
<!-- backwards compatibility -->
<a id="schemabusinessuserviewmodel"></a>
<a id="schema_BusinessUserViewModel"></a>
<a id="tocSbusinessuserviewmodel"></a>
<a id="tocsbusinessuserviewmodel"></a>

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "businessName": "string",
  "email": "string",
  "id": "string",
  "identityAccount": true,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "permissions": [
    {
      "access": "string",
      "function": "string",
      "object": "string"
    }
  ],
  "resourceId": "string",
  "resourceName": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(uuid) \| null|false|none|none|
|businessName|string \| null|false|none|none|
|email|string \| null|false|none|none|
|id|string \| null|false|none|none|
|identityAccount|boolean|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|
|permissions|[[BusinessUserPermissionViewModel](#schemabusinessuserpermissionviewmodel)]|false|none|none|
|resourceId|string \| null|false|none|none|
|resourceName|string \| null|false|none|none|
|role|string \| null|false|none|none|

<h2 id="tocS_CalendarAuthViewModel">CalendarAuthViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacalendarauthviewmodel"></a>
<a id="schema_CalendarAuthViewModel"></a>
<a id="tocScalendarauthviewmodel"></a>
<a id="tocscalendarauthviewmodel"></a>

```json
{
  "calendarAuthUrl": "string",
  "calendarId": "string",
  "object": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendarAuthUrl|string \| null|false|none|none|
|calendarId|string \| null|false|none|none|
|object|string \| null|false|none|none|

<h2 id="tocS_CalendarBlockInputModel">CalendarBlockInputModel</h2>
<!-- backwards compatibility -->
<a id="schemacalendarblockinputmodel"></a>
<a id="schema_CalendarBlockInputModel"></a>
<a id="tocScalendarblockinputmodel"></a>
<a id="tocscalendarblockinputmodel"></a>

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatInputModel](#schemarepeatinputmodel)|false|none|none|
|repeats|boolean \| null|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

<h2 id="tocS_CalendarBlockListViewModel">CalendarBlockListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacalendarblocklistviewmodel"></a>
<a id="schema_CalendarBlockListViewModel"></a>
<a id="tocScalendarblocklistviewmodel"></a>
<a id="tocscalendarblocklistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "calendarId": "string",
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
      "startDate": "string",
      "startTime": 0
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
|data|[[CalendarBlockViewModel](#schemacalendarblockviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_CalendarBlockUpdateModel">CalendarBlockUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemacalendarblockupdatemodel"></a>
<a id="schema_CalendarBlockUpdateModel"></a>
<a id="tocScalendarblockupdatemodel"></a>
<a id="tocscalendarblockupdatemodel"></a>

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatInputModel](#schemarepeatinputmodel)|false|none|none|
|repeats|boolean \| null|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

<h2 id="tocS_CalendarBlockViewModel">CalendarBlockViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacalendarblockviewmodel"></a>
<a id="schema_CalendarBlockViewModel"></a>
<a id="tocScalendarblockviewmodel"></a>
<a id="tocscalendarblockviewmodel"></a>

```json
{
  "calendarId": "string",
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
  "startDate": "string",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendarId|string \| null|false|none|none|
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
|startDate|string \| null|false|none|none|
|startTime|integer(int32)|false|none|none|

<h2 id="tocS_CalendarHourViewModel">CalendarHourViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacalendarhourviewmodel"></a>
<a id="schema_CalendarHourViewModel"></a>
<a id="tocScalendarhourviewmodel"></a>
<a id="tocscalendarhourviewmodel"></a>

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

<h2 id="tocS_CalendarHoursViewModel">CalendarHoursViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacalendarhoursviewmodel"></a>
<a id="schema_CalendarHoursViewModel"></a>
<a id="tocScalendarhoursviewmodel"></a>
<a id="tocscalendarhoursviewmodel"></a>

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
|fri|[CalendarHourViewModel](#schemacalendarhourviewmodel)|false|none|none|
|mon|[CalendarHourViewModel](#schemacalendarhourviewmodel)|false|none|none|
|sat|[CalendarHourViewModel](#schemacalendarhourviewmodel)|false|none|none|
|sun|[CalendarHourViewModel](#schemacalendarhourviewmodel)|false|none|none|
|thu|[CalendarHourViewModel](#schemacalendarhourviewmodel)|false|none|none|
|tue|[CalendarHourViewModel](#schemacalendarhourviewmodel)|false|none|none|
|wed|[CalendarHourViewModel](#schemacalendarhourviewmodel)|false|none|none|

<h2 id="tocS_CompanyDomainInputModel">CompanyDomainInputModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanydomaininputmodel"></a>
<a id="schema_CompanyDomainInputModel"></a>
<a id="tocScompanydomaininputmodel"></a>
<a id="tocscompanydomaininputmodel"></a>

```json
{
  "domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string \| null|false|none|none|

<h2 id="tocS_CompanyDomainListViewModel">CompanyDomainListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanydomainlistviewmodel"></a>
<a id="schema_CompanyDomainListViewModel"></a>
<a id="tocScompanydomainlistviewmodel"></a>
<a id="tocscompanydomainlistviewmodel"></a>

```json
{
  "data": [
    {
      "domain": "string",
      "id": "string",
      "object": "string"
    }
  ],
  "object": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CompanyDomainViewModel](#schemacompanydomainviewmodel)]|false|none|none|
|object|string \| null|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_CompanyDomainUpdateModel">CompanyDomainUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanydomainupdatemodel"></a>
<a id="schema_CompanyDomainUpdateModel"></a>
<a id="tocScompanydomainupdatemodel"></a>
<a id="tocscompanydomainupdatemodel"></a>

```json
{
  "domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string \| null|false|none|none|

<h2 id="tocS_CompanyDomainViewModel">CompanyDomainViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanydomainviewmodel"></a>
<a id="schema_CompanyDomainViewModel"></a>
<a id="tocScompanydomainviewmodel"></a>
<a id="tocscompanydomainviewmodel"></a>

```json
{
  "domain": "string",
  "id": "string",
  "object": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string \| null|false|none|none|
|id|string \| null|false|none|none|
|object|string \| null|false|none|none|

<h2 id="tocS_CompanyInputModel">CompanyInputModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanyinputmodel"></a>
<a id="schema_CompanyInputModel"></a>
<a id="tocScompanyinputmodel"></a>
<a id="tocscompanyinputmodel"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "bookingWebhookUrl": "string",
  "city": "string",
  "country": "string",
  "customerWebhookUrl": "string",
  "disableEmailAndSmsNotifications": true,
  "email": "string",
  "fax": "string",
  "name": "string",
  "notificationFromEmailAddress": "string",
  "notificationFromName": "string",
  "phone": "string",
  "postalCode": "string",
  "registrationEmail": "string",
  "reminderWebhookUrl": "string",
  "resourceWebhookUrl": "string",
  "state": "string",
  "timezoneName": "string",
  "webhookSignatureHash": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string \| null|false|none|none|
|addressLine2|string \| null|false|none|none|
|bookingWebhookUrl|string \| null|false|none|none|
|city|string \| null|false|none|none|
|country|string \| null|false|none|none|
|customerWebhookUrl|string \| null|false|none|none|
|disableEmailAndSmsNotifications|boolean \| null|false|none|none|
|email|string \| null|false|none|none|
|fax|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notificationFromEmailAddress|string \| null|false|none|none|
|notificationFromName|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|postalCode|string \| null|false|none|none|
|registrationEmail|string \| null|false|none|none|
|reminderWebhookUrl|string \| null|false|none|none|
|resourceWebhookUrl|string \| null|false|none|none|
|state|string \| null|false|none|none|
|timezoneName|string \| null|false|none|none|
|webhookSignatureHash|string \| null|false|none|none|
|website|string \| null|false|none|none|

<h2 id="tocS_CompanyUpdateModel">CompanyUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanyupdatemodel"></a>
<a id="schema_CompanyUpdateModel"></a>
<a id="tocScompanyupdatemodel"></a>
<a id="tocscompanyupdatemodel"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "bookingWebhookUrl": "string",
  "city": "string",
  "country": "string",
  "customerWebhookUrl": "string",
  "disableEmailAndSmsNotifications": true,
  "email": "string",
  "fax": "string",
  "name": "string",
  "notificationFromEmailAddress": "string",
  "notificationFromName": "string",
  "phone": "string",
  "postalCode": "string",
  "registrationEmail": "string",
  "reminderWebhookUrl": "string",
  "resourceWebhookUrl": "string",
  "state": "string",
  "timezoneName": "string",
  "webhookSignatureHash": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string \| null|false|none|none|
|addressLine2|string \| null|false|none|none|
|bookingWebhookUrl|string \| null|false|none|none|
|city|string \| null|false|none|none|
|country|string \| null|false|none|none|
|customerWebhookUrl|string \| null|false|none|none|
|disableEmailAndSmsNotifications|boolean \| null|false|none|none|
|email|string \| null|false|none|none|
|fax|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notificationFromEmailAddress|string \| null|false|none|none|
|notificationFromName|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|postalCode|string \| null|false|none|none|
|registrationEmail|string \| null|false|none|none|
|reminderWebhookUrl|string \| null|false|none|none|
|resourceWebhookUrl|string \| null|false|none|none|
|state|string \| null|false|none|none|
|timezoneName|string \| null|false|none|none|
|webhookSignatureHash|string \| null|false|none|none|
|website|string \| null|false|none|none|

<h2 id="tocS_CompanyViewModel">CompanyViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanyviewmodel"></a>
<a id="schema_CompanyViewModel"></a>
<a id="tocScompanyviewmodel"></a>
<a id="tocscompanyviewmodel"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "bookingWebhookUrl": "string",
  "city": "string",
  "clientId": "string",
  "clientSecret": "string",
  "country": "string",
  "customerWebhookUrl": "string",
  "deletedStatus": true,
  "deletedTime": "string",
  "disableEmailAndSmsNotifications": true,
  "email": "string",
  "fax": "string",
  "id": "string",
  "name": "string",
  "notificationFromEmailAddress": "string",
  "notificationFromName": "string",
  "object": "string",
  "phone": "string",
  "postalCode": "string",
  "registrationDate": "string",
  "registrationEmail": "string",
  "reminderWebhookUrl": "string",
  "resourceWebhookUrl": "string",
  "state": "string",
  "timezoneId": "string",
  "timezoneName": "string",
  "webhookSignatureHash": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string \| null|false|none|none|
|addressLine2|string \| null|false|none|none|
|bookingWebhookUrl|string \| null|false|none|none|
|city|string \| null|false|none|none|
|clientId|string \| null|false|none|none|
|clientSecret|string \| null|false|none|none|
|country|string \| null|false|none|none|
|customerWebhookUrl|string \| null|false|none|none|
|deletedStatus|boolean|false|none|none|
|deletedTime|string \| null|false|none|none|
|disableEmailAndSmsNotifications|boolean|false|none|none|
|email|string \| null|false|none|none|
|fax|string \| null|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notificationFromEmailAddress|string \| null|false|none|none|
|notificationFromName|string \| null|false|none|none|
|object|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|postalCode|string \| null|false|none|none|
|registrationDate|string \| null|false|none|none|
|registrationEmail|string \| null|false|none|none|
|reminderWebhookUrl|string \| null|false|none|none|
|resourceWebhookUrl|string \| null|false|none|none|
|state|string \| null|false|none|none|
|timezoneId|string \| null|false|none|none|
|timezoneName|string \| null|false|none|none|
|webhookSignatureHash|string \| null|false|none|none|
|website|string \| null|false|none|none|

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

<h2 id="tocS_ContentResult">ContentResult</h2>
<!-- backwards compatibility -->
<a id="schemacontentresult"></a>
<a id="schema_ContentResult"></a>
<a id="tocScontentresult"></a>
<a id="tocscontentresult"></a>

```json
{
  "content": "string",
  "contentType": "string",
  "statusCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|false|none|none|
|contentType|string \| null|false|none|none|
|statusCode|integer(int32) \| null|false|none|none|

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

<h2 id="tocS_CustomerPrivacyViewModel">CustomerPrivacyViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomerprivacyviewmodel"></a>
<a id="schema_CustomerPrivacyViewModel"></a>
<a id="tocScustomerprivacyviewmodel"></a>
<a id="tocscustomerprivacyviewmodel"></a>

```json
{
  "appointments": [
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
  "customer": {
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
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointments|[[AppointmentViewModel](#schemaappointmentviewmodel)]|false|none|none|
|customer|[CustomerViewModel](#schemacustomerviewmodel)|false|none|none|

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

<h2 id="tocS_EmailTemplateInputModel">EmailTemplateInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplateinputmodel"></a>
<a id="schema_EmailTemplateInputModel"></a>
<a id="tocSemailtemplateinputmodel"></a>
<a id="tocsemailtemplateinputmodel"></a>

```json
{
  "templateContent": "string",
  "templateName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateContent|string \| null|false|none|none|
|templateName|string \| null|false|none|none|

<h2 id="tocS_EmailTemplateListViewModel">EmailTemplateListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatelistviewmodel"></a>
<a id="schema_EmailTemplateListViewModel"></a>
<a id="tocSemailtemplatelistviewmodel"></a>
<a id="tocsemailtemplatelistviewmodel"></a>

```json
{
  "data": [
    {
      "customized": true,
      "description": "string",
      "name": "string",
      "object": "string",
      "scope": "string"
    }
  ],
  "object": "string",
  "total": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EmailTemplateViewModel](#schemaemailtemplateviewmodel)]|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_EmailTemplateViewModel">EmailTemplateViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplateviewmodel"></a>
<a id="schema_EmailTemplateViewModel"></a>
<a id="tocSemailtemplateviewmodel"></a>
<a id="tocsemailtemplateviewmodel"></a>

```json
{
  "customized": true,
  "description": "string",
  "name": "string",
  "object": "string",
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customized|boolean|false|none|none|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|
|scope|string \| null|false|none|none|

<h2 id="tocS_GoogleServiceAccountCreds">GoogleServiceAccountCreds</h2>
<!-- backwards compatibility -->
<a id="schemagoogleserviceaccountcreds"></a>
<a id="schema_GoogleServiceAccountCreds"></a>
<a id="tocSgoogleserviceaccountcreds"></a>
<a id="tocsgoogleserviceaccountcreds"></a>

```json
{
  "auth_provider_x509_cert_url": "string",
  "auth_uri": "string",
  "client_email": "string",
  "client_id": "string",
  "client_x509_cert_url": "string",
  "private_key": "string",
  "private_key_id": "string",
  "project_id": "string",
  "token_uri": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_provider_x509_cert_url|string \| null|false|none|none|
|auth_uri|string \| null|false|none|none|
|client_email|string \| null|false|none|none|
|client_id|string \| null|false|none|none|
|client_x509_cert_url|string \| null|false|none|none|
|private_key|string \| null|false|none|none|
|private_key_id|string \| null|false|none|none|
|project_id|string \| null|false|none|none|
|token_uri|string \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_LocationInputModel">LocationInputModel</h2>
<!-- backwards compatibility -->
<a id="schemalocationinputmodel"></a>
<a id="schema_LocationInputModel"></a>
<a id="tocSlocationinputmodel"></a>
<a id="tocslocationinputmodel"></a>

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
  "defaults": {
    "autoUpdateCustomer": true,
    "businessNotification": true,
    "customerCity": true,
    "customerState": true,
    "emailInfo": true,
    "enableUtcTimezone": true
  },
  "email": "string",
  "fax": "string",
  "friendlyId": "string",
  "name": "string",
  "phone": "string",
  "regionId": "string",
  "settings": {
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0,
    "bookingTimerMins": 0,
    "customerBookingsPerDay": 0,
    "enableWorldTimezones": true
  },
  "timezoneName": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressInputModel](#schemaaddressinputmodel)|false|none|none|
|adminEmail|string \| null|false|none|Field is required.|
|adminName|string \| null|false|none|This field is no longer required and has been deprecated.|
|appointmentReminders|[AppointmentRemindersInputModel](#schemaappointmentremindersinputmodel)|false|none|none|
|businessHours|[BusinessHoursInputModel](#schemabusinesshoursinputmodel)|false|none|none|
|defaults|[BusinessDefaultsInputModel](#schemabusinessdefaultsinputmodel)|false|none|none|
|email|string \| null|false|none|none|
|fax|string \| null|false|none|none|
|friendlyId|string \| null|false|none|Use the friendlyId as an alternative to the assigned locationId<br>Choose something easy and meaningful. Must be unique within your company.<br>FriendlyId's are limited to maximum of 64 characters.|
|name|string \| null|false|none|none|
|phone|string \| null|false|none|GroupSize Limits the number of people that can come<br>along on a single appointment|
|regionId|string \| null|false|none|none|
|settings|[OnlineSettingsInputModel](#schemaonlinesettingsinputmodel)|false|none|none|
|timezoneName|string \| null|false|none|Field is required. It is in Iana format. e.g. America/New_York. Use moment.js in your client for ease of timezone detection and selection|
|website|string \| null|false|none|none|

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

<h2 id="tocS_LocationUpdateModel">LocationUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemalocationupdatemodel"></a>
<a id="schema_LocationUpdateModel"></a>
<a id="tocSlocationupdatemodel"></a>
<a id="tocslocationupdatemodel"></a>

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
  "defaults": {
    "autoUpdateCustomer": true,
    "businessNotification": true,
    "customerCity": true,
    "customerState": true,
    "emailInfo": true,
    "enableUtcTimezone": true
  },
  "email": "string",
  "fax": "string",
  "friendlyId": "string",
  "name": "string",
  "phone": "string",
  "regionId": "string",
  "settings": {
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0,
    "bookingTimerMins": 0,
    "customerBookingsPerDay": 0,
    "enableWorldTimezones": true
  },
  "timezoneName": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressUpdateModel](#schemaaddressupdatemodel)|false|none|none|
|adminEmail|string \| null|false|none|none|
|adminName|string \| null|false|none|none|
|appointmentReminders|[AppointmentRemindersInputModel](#schemaappointmentremindersinputmodel)|false|none|none|
|businessHours|[BusinessHoursUpdateModel](#schemabusinesshoursupdatemodel)|false|none|none|
|defaults|[BusinessDefaultsUpdateModel](#schemabusinessdefaultsupdatemodel)|false|none|none|
|email|string \| null|false|none|none|
|fax|string \| null|false|none|none|
|friendlyId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|phone|string \| null|false|none|none|
|regionId|string \| null|false|none|none|
|settings|[OnlineSettingsUpdateModel](#schemaonlinesettingsupdatemodel)|false|none|none|
|timezoneName|string \| null|false|none|none|
|website|string \| null|false|none|none|

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

<h2 id="tocS_LocationsInputModel">LocationsInputModel</h2>
<!-- backwards compatibility -->
<a id="schemalocationsinputmodel"></a>
<a id="schema_LocationsInputModel"></a>
<a id="tocSlocationsinputmodel"></a>
<a id="tocslocationsinputmodel"></a>

```json
{
  "locations": [
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
      "defaults": {
        "autoUpdateCustomer": true,
        "businessNotification": true,
        "customerCity": true,
        "customerState": true,
        "emailInfo": true,
        "enableUtcTimezone": true
      },
      "email": "string",
      "fax": "string",
      "friendlyId": "string",
      "name": "string",
      "phone": "string",
      "regionId": "string",
      "settings": {
        "bookAheadUnit": 0,
        "bookAheadValue": 0,
        "bookInAdvance": 0,
        "bookingTimerMins": 0,
        "customerBookingsPerDay": 0,
        "enableWorldTimezones": true
      },
      "timezoneName": "string",
      "website": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[LocationInputModel](#schemalocationinputmodel)]|false|none|none|

<h2 id="tocS_MasterEmailTemplateSettingsViewModel">MasterEmailTemplateSettingsViewModel</h2>
<!-- backwards compatibility -->
<a id="schemamasteremailtemplatesettingsviewmodel"></a>
<a id="schema_MasterEmailTemplateSettingsViewModel"></a>
<a id="tocSmasteremailtemplatesettingsviewmodel"></a>
<a id="tocsmasteremailtemplatesettingsviewmodel"></a>

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|centerEmailContent|boolean|false|none|none|
|centerEmailContentPanel|boolean|false|none|none|
|centerEmailFooter|boolean|false|none|none|
|contentBackgroundColor|string \| null|false|none|none|
|contentColor|string \| null|false|none|none|
|contentLinkColor|string \| null|false|none|none|
|emailBackgroundColor|string \| null|false|none|none|
|emailColor|string \| null|false|none|none|
|emailLinkColor|string \| null|false|none|none|
|footerFontSize|string \| null|false|none|none|
|footerLogoHeight|string \| null|false|none|none|
|footerLogoPadding|string \| null|false|none|none|
|footerPanelEmailContact|boolean|false|none|none|
|footerPanelPhoneContact|boolean|false|none|none|
|footerPanelWebsiteContact|boolean|false|none|none|
|headerLogoHeight|string \| null|false|none|none|
|headerLogoPadding|string \| null|false|none|none|
|panelBackgroundColor|string \| null|false|none|none|
|panelColor|string \| null|false|none|none|
|panelLinkColor|string \| null|false|none|none|
|privacyPolicyLink|string \| null|false|none|none|
|showContentPanel|boolean|false|none|none|
|showFooterLogo|boolean|false|none|none|
|showFooterPanel|boolean|false|none|none|
|showHeaderLogo|boolean|false|none|none|
|showHeaderPanel|boolean|false|none|none|
|version|string \| null|false|none|none|

<h2 id="tocS_MasterTemplateSettingsInputModel">MasterTemplateSettingsInputModel</h2>
<!-- backwards compatibility -->
<a id="schemamastertemplatesettingsinputmodel"></a>
<a id="schema_MasterTemplateSettingsInputModel"></a>
<a id="tocSmastertemplatesettingsinputmodel"></a>
<a id="tocsmastertemplatesettingsinputmodel"></a>

```json
{
  "centerEmailContent": true,
  "centerEmailContentPanel": true,
  "centerEmailFooter": true,
  "contentBackgroundColor": "string",
  "contentColor": "string",
  "contentLinkColor": "string",
  "emailBackgroundColor": "string",
  "emailColor": "string",
  "emailLinkColor": "string",
  "footerFontSize": "string",
  "footerLogoHeight": "string",
  "footerLogoPadding": "string",
  "footerPanelEmailContact": true,
  "footerPanelPhoneContact": true,
  "footerPanelWebsiteContact": true,
  "headerLogoHeight": "string",
  "headerLogoPadding": "string",
  "panelBackgroundColor": "string",
  "panelColor": "string",
  "panelLinkColor": "string",
  "privacyPolicyLink": "string",
  "showContentPanel": true,
  "showFooterLogo": true,
  "showFooterPanel": true,
  "showHeaderLogo": true,
  "showHeaderPanel": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|centerEmailContent|boolean \| null|false|none|none|
|centerEmailContentPanel|boolean \| null|false|none|none|
|centerEmailFooter|boolean \| null|false|none|none|
|contentBackgroundColor|string \| null|false|none|none|
|contentColor|string \| null|false|none|none|
|contentLinkColor|string \| null|false|none|none|
|emailBackgroundColor|string \| null|false|none|none|
|emailColor|string \| null|false|none|none|
|emailLinkColor|string \| null|false|none|none|
|footerFontSize|string \| null|false|none|none|
|footerLogoHeight|string \| null|false|none|none|
|footerLogoPadding|string \| null|false|none|none|
|footerPanelEmailContact|boolean \| null|false|none|none|
|footerPanelPhoneContact|boolean \| null|false|none|none|
|footerPanelWebsiteContact|boolean \| null|false|none|none|
|headerLogoHeight|string \| null|false|none|none|
|headerLogoPadding|string \| null|false|none|none|
|panelBackgroundColor|string \| null|false|none|none|
|panelColor|string \| null|false|none|none|
|panelLinkColor|string \| null|false|none|none|
|privacyPolicyLink|string \| null|false|none|none|
|showContentPanel|boolean \| null|false|none|none|
|showFooterLogo|boolean \| null|false|none|none|
|showFooterPanel|boolean \| null|false|none|none|
|showHeaderLogo|boolean \| null|false|none|none|
|showHeaderPanel|boolean \| null|false|none|none|

<h2 id="tocS_OnlineSettingsInputModel">OnlineSettingsInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaonlinesettingsinputmodel"></a>
<a id="schema_OnlineSettingsInputModel"></a>
<a id="tocSonlinesettingsinputmodel"></a>
<a id="tocsonlinesettingsinputmodel"></a>

```json
{
  "bookAheadUnit": 0,
  "bookAheadValue": 0,
  "bookInAdvance": 0,
  "bookingTimerMins": 0,
  "customerBookingsPerDay": 0,
  "enableWorldTimezones": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookAheadUnit|integer(int32) \| null|false|none|none|
|bookAheadValue|integer(int32) \| null|false|none|none|
|bookInAdvance|integer(int32) \| null|false|none|none|
|bookingTimerMins|integer(int32) \| null|false|none|none|
|customerBookingsPerDay|integer(int32) \| null|false|none|none|
|enableWorldTimezones|boolean \| null|false|none|none|

<h2 id="tocS_OnlineSettingsUpdateModel">OnlineSettingsUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaonlinesettingsupdatemodel"></a>
<a id="schema_OnlineSettingsUpdateModel"></a>
<a id="tocSonlinesettingsupdatemodel"></a>
<a id="tocsonlinesettingsupdatemodel"></a>

```json
{
  "bookAheadUnit": 0,
  "bookAheadValue": 0,
  "bookInAdvance": 0,
  "bookingTimerMins": 0,
  "customerBookingsPerDay": 0,
  "enableWorldTimezones": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookAheadUnit|integer(int32) \| null|false|none|none|
|bookAheadValue|integer(int32) \| null|false|none|none|
|bookInAdvance|integer(int32) \| null|false|none|none|
|bookingTimerMins|integer(int32) \| null|false|none|none|
|customerBookingsPerDay|integer(int32) \| null|false|none|none|
|enableWorldTimezones|boolean \| null|false|none|none|

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

<h2 id="tocS_RegionInputModel">RegionInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaregioninputmodel"></a>
<a id="schema_RegionInputModel"></a>
<a id="tocSregioninputmodel"></a>
<a id="tocsregioninputmodel"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|

<h2 id="tocS_RegionListViewModel">RegionListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaregionlistviewmodel"></a>
<a id="schema_RegionListViewModel"></a>
<a id="tocSregionlistviewmodel"></a>
<a id="tocsregionlistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "id": "string",
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
|data|[[RegionViewModel](#schemaregionviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_RegionUpdateModel">RegionUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaregionupdatemodel"></a>
<a id="schema_RegionUpdateModel"></a>
<a id="tocSregionupdatemodel"></a>
<a id="tocsregionupdatemodel"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|

<h2 id="tocS_RegionViewModel">RegionViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaregionviewmodel"></a>
<a id="schema_RegionViewModel"></a>
<a id="tocSregionviewmodel"></a>
<a id="tocsregionviewmodel"></a>

```json
{
  "id": "string",
  "name": "string",
  "object": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|

<h2 id="tocS_RepeatInputModel">RepeatInputModel</h2>
<!-- backwards compatibility -->
<a id="schemarepeatinputmodel"></a>
<a id="schema_RepeatInputModel"></a>
<a id="tocSrepeatinputmodel"></a>
<a id="tocsrepeatinputmodel"></a>

```json
{
  "frequency": "string",
  "interval": 0,
  "monthDay": 0,
  "monthType": "string",
  "weekdays": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|string \| null|false|none|none|
|interval|integer(int32) \| null|false|none|none|
|monthDay|integer(int32) \| null|false|none|none|
|monthType|string \| null|false|none|none|
|weekdays|string \| null|false|none|none|

<h2 id="tocS_RepeatUpdateModel">RepeatUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemarepeatupdatemodel"></a>
<a id="schema_RepeatUpdateModel"></a>
<a id="tocSrepeatupdatemodel"></a>
<a id="tocsrepeatupdatemodel"></a>

```json
{
  "frequency": "string",
  "interval": 0,
  "monthDay": 0,
  "monthType": "string",
  "weekdays": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|string \| null|false|none|none|
|interval|integer(int32) \| null|false|none|none|
|monthDay|integer(int32) \| null|false|none|none|
|monthType|string \| null|false|none|none|
|weekdays|string \| null|false|none|none|

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

<h2 id="tocS_ResourceAllocationInputModel">ResourceAllocationInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceallocationinputmodel"></a>
<a id="schema_ResourceAllocationInputModel"></a>
<a id="tocSresourceallocationinputmodel"></a>
<a id="tocsresourceallocationinputmodel"></a>

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatInputModel](#schemarepeatinputmodel)|false|none|none|
|repeats|boolean \| null|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

<h2 id="tocS_ResourceAllocationListViewModel">ResourceAllocationListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceallocationlistviewmodel"></a>
<a id="schema_ResourceAllocationListViewModel"></a>
<a id="tocSresourceallocationlistviewmodel"></a>
<a id="tocsresourceallocationlistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "businessId": 0,
      "deletedStatus": true,
      "deletedTime": "string",
      "endDate": "string",
      "endTime": 0,
      "id": 0,
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
      "resourceId": 0,
      "startDate": "string",
      "startTime": 0
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
|data|[[ResourceAllocationViewModel](#schemaresourceallocationviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ResourceAllocationUpdateModel">ResourceAllocationUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceallocationupdatemodel"></a>
<a id="schema_ResourceAllocationUpdateModel"></a>
<a id="tocSresourceallocationupdatemodel"></a>
<a id="tocsresourceallocationupdatemodel"></a>

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatInputModel](#schemarepeatinputmodel)|false|none|none|
|repeats|boolean \| null|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

<h2 id="tocS_ResourceAllocationViewModel">ResourceAllocationViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceallocationviewmodel"></a>
<a id="schema_ResourceAllocationViewModel"></a>
<a id="tocSresourceallocationviewmodel"></a>
<a id="tocsresourceallocationviewmodel"></a>

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessId|integer(int32)|false|none|none|
|deletedStatus|boolean|false|none|none|
|deletedTime|string \| null|false|none|none|
|endDate|string \| null|false|none|none|
|endTime|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|object|string \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatViewModel](#schemarepeatviewmodel)|false|none|none|
|repeats|boolean|false|none|none|
|resourceId|integer(int32)|false|none|none|
|startDate|string \| null|false|none|none|
|startTime|integer(int32)|false|none|none|

<h2 id="tocS_ResourceAvailabilityViewModel">ResourceAvailabilityViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceavailabilityviewmodel"></a>
<a id="schema_ResourceAvailabilityViewModel"></a>
<a id="tocSresourceavailabilityviewmodel"></a>
<a id="tocsresourceavailabilityviewmodel"></a>

```json
{
  "businessId": 0,
  "ignoreBusinessHours": true,
  "resourceId": 0,
  "resourceName": "string",
  "resourceTzo": 0,
  "weekdays": {
    "fri": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessId|integer(int32)|false|none|none|
|ignoreBusinessHours|boolean|false|none|none|
|resourceId|integer(int32)|false|none|none|
|resourceName|string \| null|false|none|none|
|resourceTzo|integer(int32)|false|none|none|
|weekdays|[AvailabilityViewModel2](#schemaavailabilityviewmodel2)|false|none|none|

<h2 id="tocS_ResourceBlockInputModel">ResourceBlockInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceblockinputmodel"></a>
<a id="schema_ResourceBlockInputModel"></a>
<a id="tocSresourceblockinputmodel"></a>
<a id="tocsresourceblockinputmodel"></a>

```json
{
  "allDay": true,
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allDay|boolean \| null|false|none|none|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatInputModel](#schemarepeatinputmodel)|false|none|none|
|repeats|boolean \| null|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

<h2 id="tocS_ResourceBlockListViewModel">ResourceBlockListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceblocklistviewmodel"></a>
<a id="schema_ResourceBlockListViewModel"></a>
<a id="tocSresourceblocklistviewmodel"></a>
<a id="tocsresourceblocklistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
      "businessId": 0,
      "deletedStatus": true,
      "deletedTime": "string",
      "endDate": "string",
      "endTime": 0,
      "id": 0,
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
      "resourceId": 0,
      "startDate": "string",
      "startTime": 0
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
|data|[[ResourceBlockViewModel](#schemaresourceblockviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ResourceBlockUpdateModel">ResourceBlockUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceblockupdatemodel"></a>
<a id="schema_ResourceBlockUpdateModel"></a>
<a id="tocSresourceblockupdatemodel"></a>
<a id="tocsresourceblockupdatemodel"></a>

```json
{
  "allDay": true,
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allDay|boolean \| null|false|none|none|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatInputModel](#schemarepeatinputmodel)|false|none|none|
|repeats|boolean \| null|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

<h2 id="tocS_ResourceBlockViewModel">ResourceBlockViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceblockviewmodel"></a>
<a id="schema_ResourceBlockViewModel"></a>
<a id="tocSresourceblockviewmodel"></a>
<a id="tocsresourceblockviewmodel"></a>

```json
{
  "businessId": 0,
  "deletedStatus": true,
  "deletedTime": "string",
  "endDate": "string",
  "endTime": 0,
  "id": 0,
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
  "resourceId": 0,
  "startDate": "string",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessId|integer(int32)|false|none|none|
|deletedStatus|boolean|false|none|none|
|deletedTime|string \| null|false|none|none|
|endDate|string \| null|false|none|none|
|endTime|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|object|string \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatViewModel](#schemarepeatviewmodel)|false|none|none|
|repeats|boolean|false|none|none|
|resourceId|integer(int32)|false|none|none|
|startDate|string \| null|false|none|none|
|startTime|integer(int32)|false|none|none|

<h2 id="tocS_ResourceBulkUpdateModel">ResourceBulkUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcebulkupdatemodel"></a>
<a id="schema_ResourceBulkUpdateModel"></a>
<a id="tocSresourcebulkupdatemodel"></a>
<a id="tocsresourcebulkupdatemodel"></a>

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
  "description": "string",
  "email": "string",
  "groupId": "string",
  "id": "string",
  "name": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "recurringAvailability": true,
  "serviceIds": [
    "string"
  ],
  "timezoneId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressUpdateModel](#schemaaddressupdatemodel)|false|none|none|
|availability|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|none|
|contact|[ContactUpdateModel](#schemacontactupdatemodel)|false|none|none|
|customFields|[CustomFieldUpdateModel](#schemacustomfieldupdatemodel)|false|none|none|
|description|string \| null|false|none|none|
|email|string \| null|false|none|none|
|groupId|string \| null|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|
|options|[ResourceOptionsUpdateModel](#schemaresourceoptionsupdatemodel)|false|none|none|
|recurringAvailability|boolean \| null|false|none|none|
|serviceIds|[string]|false|none|none|
|timezoneId|string \| null|false|none|none|

<h2 id="tocS_ResourceGroupInputModel">ResourceGroupInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcegroupinputmodel"></a>
<a id="schema_ResourceGroupInputModel"></a>
<a id="tocSresourcegroupinputmodel"></a>
<a id="tocsresourcegroupinputmodel"></a>

```json
{
  "description": "string",
  "email": "string",
  "locationId": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|email|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|

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

<h2 id="tocS_ResourceGroupUpdateModel">ResourceGroupUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcegroupupdatemodel"></a>
<a id="schema_ResourceGroupUpdateModel"></a>
<a id="tocSresourcegroupupdatemodel"></a>
<a id="tocsresourcegroupupdatemodel"></a>

```json
{
  "description": "string",
  "email": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|email|string \| null|false|none|none|
|name|string \| null|false|none|none|

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

<h2 id="tocS_ResourceImageInputModel">ResourceImageInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceimageinputmodel"></a>
<a id="schema_ResourceImageInputModel"></a>
<a id="tocSresourceimageinputmodel"></a>
<a id="tocsresourceimageinputmodel"></a>

```json
{
  "imageFileData": "string",
  "imageFileName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageFileData|string \| null|false|none|none|
|imageFileName|string \| null|false|none|none|

<h2 id="tocS_ResourceInputModel">ResourceInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinputmodel"></a>
<a id="schema_ResourceInputModel"></a>
<a id="tocSresourceinputmodel"></a>
<a id="tocsresourceinputmodel"></a>

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
  "description": "string",
  "email": "string",
  "groupId": "string",
  "locationId": "string",
  "name": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "recurringAvailability": true,
  "serviceIds": [
    "string"
  ],
  "timezoneId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressInputModel](#schemaaddressinputmodel)|false|none|none|
|availability|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|none|
|contact|[ContactInputModel](#schemacontactinputmodel)|false|none|none|
|customFields|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|none|
|description|string \| null|false|none|none|
|email|string \| null|false|none|none|
|groupId|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|options|[ResourceOptionsInputModel](#schemaresourceoptionsinputmodel)|false|none|Options for the new resource|
|recurringAvailability|boolean \| null|false|none|none|
|serviceIds|[string]|false|none|none|
|timezoneId|string \| null|false|none|none|

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
      "googleCalendarAuthUrl": "string",
      "googleCalendarAuthorized": true,
      "googleCalendarId": "string",
      "groupId": 0,
      "hourly": 0,
      "id": "string",
      "ignoreBusinessHours": true,
      "imageUrl": "string",
      "locationId": "string",
      "name": "string",
      "notificationType": 0,
      "object": "string",
      "options": {
        "bioLink": "string",
        "bookingNotification": 0,
        "calendarAvailability": 0,
        "displayColor": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "gender": "string",
        "googleCalendarId": "string",
        "hourly": 0,
        "ignoreBusinessHours": true,
        "notificationType": 0,
        "outlookCalendarId": "string",
        "sortKey": 0
      },
      "outlookCalendarAuthUrl": "string",
      "outlookCalendarAuthorized": true,
      "outlookCalendarId": "string",
      "phone": {
        "businessPhone": "string",
        "businessPhoneExt": "string",
        "homePhone": "string",
        "mobilePhone": "string",
        "phoneType": "string"
      },
      "recurringAvailability": true,
      "services": [
        {
          "object": "string",
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

<h2 id="tocS_ResourceOptionsInputModel">ResourceOptionsInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceoptionsinputmodel"></a>
<a id="schema_ResourceOptionsInputModel"></a>
<a id="tocSresourceoptionsinputmodel"></a>
<a id="tocsresourceoptionsinputmodel"></a>

```json
{
  "bioLink": "string",
  "bookingNotification": 0,
  "calendarAvailability": 0,
  "displayColor": "string",
  "effectiveDate": "1970-01-01T00:00:00Z",
  "gender": "string",
  "googleCalendarId": "string",
  "hourly": 0,
  "ignoreBusinessHours": true,
  "notificationType": 0,
  "outlookCalendarId": "string",
  "sortKey": 0
}
```

Options for the new resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bioLink|string \| null|false|none|none|
|bookingNotification|integer(int32) \| null|false|none|none|
|calendarAvailability|integer(int32) \| null|false|none|0 = OnSched Availability, 1 = Google Calendar, 2 = Outlook Calendar|
|displayColor|string \| null|false|none|none|
|effectiveDate|string(date-time) \| null|false|none|none|
|gender|string \| null|false|none|none|
|googleCalendarId|string \| null|false|none|none|
|hourly|number(double) \| null|false|none|none|
|ignoreBusinessHours|boolean \| null|false|none|none|
|notificationType|integer(int32) \| null|false|none|0 = None, 1=Online Bookings 2=All Bookings.|
|outlookCalendarId|string \| null|false|none|none|
|sortKey|integer(int32) \| null|false|none|none|

<h2 id="tocS_ResourceOptionsUpdateModel">ResourceOptionsUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceoptionsupdatemodel"></a>
<a id="schema_ResourceOptionsUpdateModel"></a>
<a id="tocSresourceoptionsupdatemodel"></a>
<a id="tocsresourceoptionsupdatemodel"></a>

```json
{
  "bioLink": "string",
  "bookingNotification": 0,
  "calendarAvailability": 0,
  "displayColor": "string",
  "effectiveDate": "1970-01-01T00:00:00Z",
  "gender": "string",
  "googleCalendarId": "string",
  "hourly": 0,
  "ignoreBusinessHours": true,
  "notificationType": 0,
  "outlookCalendarId": "string",
  "sortKey": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bioLink|string \| null|false|none|none|
|bookingNotification|integer(int32) \| null|false|none|none|
|calendarAvailability|integer(int32) \| null|false|none|0 = OnSched Availability, 1 = Google Calendar, 2 = Outlook Calendar|
|displayColor|string \| null|false|none|none|
|effectiveDate|string(date-time) \| null|false|none|none|
|gender|string \| null|false|none|none|
|googleCalendarId|string \| null|false|none|none|
|hourly|number(double) \| null|false|none|none|
|ignoreBusinessHours|boolean \| null|false|none|none|
|notificationType|integer(int32) \| null|false|none|0 = None, 1=Online Bookings 2=All Bookings.|
|outlookCalendarId|string \| null|false|none|none|
|sortKey|integer(int32) \| null|false|none|none|

<h2 id="tocS_ResourceServiceViewModel">ResourceServiceViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceserviceviewmodel"></a>
<a id="schema_ResourceServiceViewModel"></a>
<a id="tocSresourceserviceviewmodel"></a>
<a id="tocsresourceserviceviewmodel"></a>

```json
{
  "object": "string",
  "serviceId": 0,
  "serviceName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string \| null|false|none|none|
|serviceId|integer(int32)|false|none|none|
|serviceName|string \| null|false|none|none|

<h2 id="tocS_ResourceUpdateModel">ResourceUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourceupdatemodel"></a>
<a id="schema_ResourceUpdateModel"></a>
<a id="tocSresourceupdatemodel"></a>
<a id="tocsresourceupdatemodel"></a>

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
  "description": "string",
  "email": "string",
  "groupId": "string",
  "locationId": "string",
  "name": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "recurringAvailability": true,
  "serviceIds": [
    "string"
  ],
  "timezoneId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AddressUpdateModel](#schemaaddressupdatemodel)|false|none|none|
|availability|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|none|
|contact|[ContactUpdateModel](#schemacontactupdatemodel)|false|none|none|
|customFields|[CustomFieldUpdateModel](#schemacustomfieldupdatemodel)|false|none|none|
|description|string \| null|false|none|none|
|email|string \| null|false|none|none|
|groupId|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|options|[ResourceOptionsUpdateModel](#schemaresourceoptionsupdatemodel)|false|none|none|
|recurringAvailability|boolean \| null|false|none|none|
|serviceIds|[string]|false|none|none|
|timezoneId|string \| null|false|none|none|

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
  "googleCalendarAuthUrl": "string",
  "googleCalendarAuthorized": true,
  "googleCalendarId": "string",
  "groupId": 0,
  "hourly": 0,
  "id": "string",
  "ignoreBusinessHours": true,
  "imageUrl": "string",
  "locationId": "string",
  "name": "string",
  "notificationType": 0,
  "object": "string",
  "options": {
    "bioLink": "string",
    "bookingNotification": 0,
    "calendarAvailability": 0,
    "displayColor": "string",
    "effectiveDate": "1970-01-01T00:00:00Z",
    "gender": "string",
    "googleCalendarId": "string",
    "hourly": 0,
    "ignoreBusinessHours": true,
    "notificationType": 0,
    "outlookCalendarId": "string",
    "sortKey": 0
  },
  "outlookCalendarAuthUrl": "string",
  "outlookCalendarAuthorized": true,
  "outlookCalendarId": "string",
  "phone": {
    "businessPhone": "string",
    "businessPhoneExt": "string",
    "homePhone": "string",
    "mobilePhone": "string",
    "phoneType": "string"
  },
  "recurringAvailability": true,
  "services": [
    {
      "object": "string",
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
|googleCalendarAuthUrl|string \| null|false|none|none|
|googleCalendarAuthorized|boolean|false|none|none|
|googleCalendarId|string \| null|false|none|none|
|groupId|integer(int32) \| null|false|none|none|
|hourly|number(double) \| null|false|none|none|
|id|string \| null|false|none|none|
|ignoreBusinessHours|boolean|false|none|none|
|imageUrl|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|notificationType|integer(int32)|false|none|none|
|object|string \| null|false|none|none|
|options|[ResourceOptionsInputModel](#schemaresourceoptionsinputmodel)|false|none|Options for the new resource|
|outlookCalendarAuthUrl|string \| null|false|none|none|
|outlookCalendarAuthorized|boolean|false|none|none|
|outlookCalendarId|string \| null|false|none|none|
|phone|[PhoneViewModel](#schemaphoneviewmodel)|false|none|none|
|recurringAvailability|boolean \| null|false|none|none|
|services|[[ResourceServiceViewModel](#schemaresourceserviceviewmodel)]|false|none|none|
|skypeName|string \| null|false|none|none|
|sortKey|integer(int32)|false|none|none|
|timezoneIana|string \| null|false|none|none|
|timezoneId|string \| null|false|none|none|
|timezoneOffset|integer(int32) \| null|false|none|none|

<h2 id="tocS_ResourcesInputModel">ResourcesInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesinputmodel"></a>
<a id="schema_ResourcesInputModel"></a>
<a id="tocSresourcesinputmodel"></a>
<a id="tocsresourcesinputmodel"></a>

```json
{
  "resources": [
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
      "description": "string",
      "email": "string",
      "groupId": "string",
      "locationId": "string",
      "name": "string",
      "options": {
        "bioLink": "string",
        "bookingNotification": 0,
        "calendarAvailability": 0,
        "displayColor": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "gender": "string",
        "googleCalendarId": "string",
        "hourly": 0,
        "ignoreBusinessHours": true,
        "notificationType": 0,
        "outlookCalendarId": "string",
        "sortKey": 0
      },
      "recurringAvailability": true,
      "serviceIds": [
        "string"
      ],
      "timezoneId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|[[ResourceInputModel](#schemaresourceinputmodel)]|false|none|none|

<h2 id="tocS_ResourcesUpdateModel">ResourcesUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesupdatemodel"></a>
<a id="schema_ResourcesUpdateModel"></a>
<a id="tocSresourcesupdatemodel"></a>
<a id="tocsresourcesupdatemodel"></a>

```json
{
  "resources": [
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
      "description": "string",
      "email": "string",
      "groupId": "string",
      "id": "string",
      "name": "string",
      "options": {
        "bioLink": "string",
        "bookingNotification": 0,
        "calendarAvailability": 0,
        "displayColor": "string",
        "effectiveDate": "1970-01-01T00:00:00Z",
        "gender": "string",
        "googleCalendarId": "string",
        "hourly": 0,
        "ignoreBusinessHours": true,
        "notificationType": 0,
        "outlookCalendarId": "string",
        "sortKey": 0
      },
      "recurringAvailability": true,
      "serviceIds": [
        "string"
      ],
      "timezoneId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|[[ResourceBulkUpdateModel](#schemaresourcebulkupdatemodel)]|false|none|none|

<h2 id="tocS_ScheduleInputModel">ScheduleInputModel</h2>
<!-- backwards compatibility -->
<a id="schemascheduleinputmodel"></a>
<a id="schema_ScheduleInputModel"></a>
<a id="tocSscheduleinputmodel"></a>
<a id="tocsscheduleinputmodel"></a>

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
  "bookingsPerSlot": 0,
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "resourceGroupId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|none|
|bookingsPerSlot|integer(int32)|false|none|none|
|interval|integer(int32)|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|resourceGroupId|string \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_ScheduleListViewModel">ScheduleListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaschedulelistviewmodel"></a>
<a id="schema_ScheduleListViewModel"></a>
<a id="tocSschedulelistviewmodel"></a>
<a id="tocsschedulelistviewmodel"></a>

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
      "bookingsPerSlot": 0,
      "deletedStatus": true,
      "deletedTime": "1970-01-01T00:00:00Z",
      "id": "string",
      "interval": 0,
      "locationId": "string",
      "name": "string",
      "object": "string",
      "primary": true,
      "resourceGroupId": "string",
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
|data|[[ScheduleViewModel](#schemascheduleviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ScheduleUpdateModel">ScheduleUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemascheduleupdatemodel"></a>
<a id="schema_ScheduleUpdateModel"></a>
<a id="tocSscheduleupdatemodel"></a>
<a id="tocsscheduleupdatemodel"></a>

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
  "bookingsPerSlot": 0,
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "resourceGroupId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|none|
|bookingsPerSlot|integer(int32)|false|none|none|
|interval|integer(int32)|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|resourceGroupId|string \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_ScheduleViewModel">ScheduleViewModel</h2>
<!-- backwards compatibility -->
<a id="schemascheduleviewmodel"></a>
<a id="schema_ScheduleViewModel"></a>
<a id="tocSscheduleviewmodel"></a>
<a id="tocsscheduleviewmodel"></a>

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
  "bookingsPerSlot": 0,
  "deletedStatus": true,
  "deletedTime": "1970-01-01T00:00:00Z",
  "id": "string",
  "interval": 0,
  "locationId": "string",
  "name": "string",
  "object": "string",
  "primary": true,
  "resourceGroupId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[CalendarHoursViewModel](#schemacalendarhoursviewmodel)|false|none|none|
|bookingsPerSlot|integer(int32)|false|none|none|
|deletedStatus|boolean|false|none|none|
|deletedTime|string(date-time) \| null|false|none|none|
|id|string \| null|false|none|none|
|interval|integer(int32)|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|object|string \| null|false|none|none|
|primary|boolean|false|none|none|
|resourceGroupId|string \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_ServiceAllocationInputModel">ServiceAllocationInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceallocationinputmodel"></a>
<a id="schema_ServiceAllocationInputModel"></a>
<a id="tocSserviceallocationinputmodel"></a>
<a id="tocsserviceallocationinputmodel"></a>

```json
{
  "bookingLimit": 0,
  "endDate": "1970-01-01",
  "endTime": 0,
  "locationId": "string",
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "resourceId": "string",
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingLimit|integer(int32)|false|none|none|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|locationId|string \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatInputModel](#schemarepeatinputmodel)|false|none|none|
|repeats|boolean \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

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

<h2 id="tocS_ServiceAllocationUpdateModel">ServiceAllocationUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceallocationupdatemodel"></a>
<a id="schema_ServiceAllocationUpdateModel"></a>
<a id="tocSserviceallocationupdatemodel"></a>
<a id="tocsserviceallocationupdatemodel"></a>

```json
{
  "bookingLimit": 0,
  "endDate": "1970-01-01",
  "endTime": 0,
  "locationId": "string",
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "resourceId": "string",
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingLimit|integer(int32)|false|none|none|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|locationId|string \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatInputModel](#schemarepeatinputmodel)|false|none|none|
|repeats|boolean \| null|false|none|none|
|resourceId|string \| null|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

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

<h2 id="tocS_ServiceAllocationsInputModel">ServiceAllocationsInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceallocationsinputmodel"></a>
<a id="schema_ServiceAllocationsInputModel"></a>
<a id="tocSserviceallocationsinputmodel"></a>
<a id="tocsserviceallocationsinputmodel"></a>

```json
{
  "serviceAllocations": [
    {
      "bookingLimit": 0,
      "endDate": "1970-01-01",
      "endTime": 0,
      "locationId": "string",
      "reason": "string",
      "repeat": {
        "frequency": "string",
        "interval": 0,
        "monthDay": 0,
        "monthType": "string",
        "weekdays": "string"
      },
      "repeats": true,
      "resourceId": "string",
      "startDate": "1970-01-01",
      "startTime": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAllocations|[[ServiceAllocationInputModel](#schemaserviceallocationinputmodel)]|false|none|none|

<h2 id="tocS_ServiceAvailabilityViewModel">ServiceAvailabilityViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceavailabilityviewmodel"></a>
<a id="schema_ServiceAvailabilityViewModel"></a>
<a id="tocSserviceavailabilityviewmodel"></a>
<a id="tocsserviceavailabilityviewmodel"></a>

```json
{
  "ignoreBusinessHours": true,
  "serviceId": 0,
  "serviceName": "string",
  "weekdays": {
    "fri": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "mon": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sat": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "sun": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "thu": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "tue": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    },
    "wed": {
      "displayEndTime": "string",
      "displayStartTime": "string",
      "endTime": 0,
      "startTime": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignoreBusinessHours|boolean|false|none|none|
|serviceId|integer(int32)|false|none|none|
|serviceName|string \| null|false|none|none|
|weekdays|[AvailabilityViewModel2](#schemaavailabilityviewmodel2)|false|none|none|

<h2 id="tocS_ServiceBlockInputModel">ServiceBlockInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceblockinputmodel"></a>
<a id="schema_ServiceBlockInputModel"></a>
<a id="tocSserviceblockinputmodel"></a>
<a id="tocsserviceblockinputmodel"></a>

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "locationId": "string",
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|locationId|string \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatInputModel](#schemarepeatinputmodel)|false|none|none|
|repeats|boolean|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

<h2 id="tocS_ServiceBlockListViewModel">ServiceBlockListViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceblocklistviewmodel"></a>
<a id="schema_ServiceBlockListViewModel"></a>
<a id="tocSserviceblocklistviewmodel"></a>
<a id="tocsserviceblocklistviewmodel"></a>

```json
{
  "count": 0,
  "data": [
    {
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
      "serviceId": "string",
      "startDate": "string",
      "startTime": 0
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
|data|[[ServiceBlockViewModel](#schemaserviceblockviewmodel)]|false|none|none|
|hasMore|boolean|false|none|none|
|object|string \| null|false|none|none|
|total|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ServiceBlockUpdateModel">ServiceBlockUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceblockupdatemodel"></a>
<a id="schema_ServiceBlockUpdateModel"></a>
<a id="tocSserviceblockupdatemodel"></a>
<a id="tocsserviceblockupdatemodel"></a>

```json
{
  "endDate": "1970-01-01",
  "endTime": 0,
  "reason": "string",
  "repeat": {
    "frequency": "string",
    "interval": 0,
    "monthDay": 0,
    "monthType": "string",
    "weekdays": "string"
  },
  "repeats": true,
  "startDate": "1970-01-01",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date) \| null|false|none|none|
|endTime|integer(int32) \| null|false|none|none|
|reason|string \| null|false|none|none|
|repeat|[RepeatUpdateModel](#schemarepeatupdatemodel)|false|none|none|
|repeats|boolean \| null|false|none|none|
|startDate|string(date) \| null|false|none|none|
|startTime|integer(int32) \| null|false|none|none|

<h2 id="tocS_ServiceBlockViewModel">ServiceBlockViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceblockviewmodel"></a>
<a id="schema_ServiceBlockViewModel"></a>
<a id="tocSserviceblockviewmodel"></a>
<a id="tocsserviceblockviewmodel"></a>

```json
{
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
  "serviceId": "string",
  "startDate": "string",
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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
|serviceId|string \| null|false|none|none|
|startDate|string \| null|false|none|none|
|startTime|integer(int32)|false|none|none|

<h2 id="tocS_ServiceCalendarInputModel">ServiceCalendarInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicecalendarinputmodel"></a>
<a id="schema_ServiceCalendarInputModel"></a>
<a id="tocSservicecalendarinputmodel"></a>
<a id="tocsservicecalendarinputmodel"></a>

```json
{
  "calendarId": "string",
  "locationId": "string",
  "serviceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendarId|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|serviceId|string \| null|false|none|none|

<h2 id="tocS_ServiceCalendarViewModel">ServiceCalendarViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicecalendarviewmodel"></a>
<a id="schema_ServiceCalendarViewModel"></a>
<a id="tocSservicecalendarviewmodel"></a>
<a id="tocsservicecalendarviewmodel"></a>

```json
{
  "calendarId": "string",
  "calendarName": "string",
  "id": "string",
  "locationId": "string",
  "serviceId": "string",
  "serviceName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendarId|string \| null|false|none|none|
|calendarName|string \| null|false|none|none|
|id|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|serviceId|string \| null|false|none|none|
|serviceName|string \| null|false|none|none|

<h2 id="tocS_ServiceFeesInputModel">ServiceFeesInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicefeesinputmodel"></a>
<a id="schema_ServiceFeesInputModel"></a>
<a id="tocSservicefeesinputmodel"></a>
<a id="tocsservicefeesinputmodel"></a>

```json
{
  "cancellationFeeAmount": 0,
  "cancellationFeeTaxable": true,
  "feeAmount": 0,
  "feeTaxable": true,
  "nonRefundable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationFeeAmount|number(double)|false|none|none|
|cancellationFeeTaxable|boolean|false|none|none|
|feeAmount|number(double)|false|none|none|
|feeTaxable|boolean|false|none|none|
|nonRefundable|boolean|false|none|none|

<h2 id="tocS_ServiceFeesUpdateModel">ServiceFeesUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicefeesupdatemodel"></a>
<a id="schema_ServiceFeesUpdateModel"></a>
<a id="tocSservicefeesupdatemodel"></a>
<a id="tocsservicefeesupdatemodel"></a>

```json
{
  "cancellationFeeAmount": 0,
  "cancellationFeeTaxable": true,
  "feeAmount": 0,
  "feeTaxable": true,
  "nonRefundable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationFeeAmount|number(double) \| null|false|none|none|
|cancellationFeeTaxable|boolean \| null|false|none|none|
|feeAmount|number(double) \| null|false|none|none|
|feeTaxable|boolean \| null|false|none|none|
|nonRefundable|boolean \| null|false|none|none|

<h2 id="tocS_ServiceGroupInputModel">ServiceGroupInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicegroupinputmodel"></a>
<a id="schema_ServiceGroupInputModel"></a>
<a id="tocSservicegroupinputmodel"></a>
<a id="tocsservicegroupinputmodel"></a>

```json
{
  "description": "string",
  "locationId": "string",
  "name": "string",
  "type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|locationId|string \| null|false|none|none|
|name|string \| null|false|none|none|
|type|integer(int32) \| null|false|none|none|

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

<h2 id="tocS_ServiceImageInputModel">ServiceImageInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceimageinputmodel"></a>
<a id="schema_ServiceImageInputModel"></a>
<a id="tocSserviceimageinputmodel"></a>
<a id="tocsserviceimageinputmodel"></a>

```json
{
  "imageFileData": "string",
  "imageFileName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageFileData|string \| null|false|none|none|
|imageFileName|string \| null|false|none|none|

<h2 id="tocS_ServiceInputModel">ServiceInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinputmodel"></a>
<a id="schema_ServiceInputModel"></a>
<a id="tocSserviceinputmodel"></a>
<a id="tocsserviceinputmodel"></a>

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
  "bookingInterval": 0,
  "bookingLimit": 0,
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
  "description": "string",
  "duration": 0,
  "fees": {
    "cancellationFeeAmount": 0,
    "cancellationFeeTaxable": true,
    "feeAmount": 0,
    "feeTaxable": true,
    "nonRefundable": true
  },
  "locationId": "string",
  "maxCapacity": 0,
  "maxGroupSize": 0,
  "mediaPageUrl": "string",
  "name": "string",
  "options": {
    "consumerPadding": true,
    "defaultService": true,
    "durationInterval": 0,
    "durationMax": 0,
    "durationMin": 0,
    "durationSelect": true,
    "padding": 0
  },
  "public": true,
  "serviceGroupId": "string",
  "settings": {
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|none|
|bookingInterval|integer(int32)|false|none|none|
|bookingLimit|integer(int32)|false|none|none|
|customFields|[CustomFieldInputModel](#schemacustomfieldinputmodel)|false|none|none|
|description|string \| null|false|none|none|
|duration|integer(int32)|false|none|none|
|fees|[ServiceFeesInputModel](#schemaservicefeesinputmodel)|false|none|none|
|locationId|string \| null|false|none|none|
|maxCapacity|integer(int32)|false|none|none|
|maxGroupSize|integer(int32)|false|none|none|
|mediaPageUrl|string \| null|false|none|none|
|name|string \| null|false|none|none|
|options|[ServiceOptionsInputModel](#schemaserviceoptionsinputmodel)|false|none|none|
|public|boolean|false|none|none|
|serviceGroupId|string \| null|false|none|none|
|settings|[ServiceSettingsInputModel](#schemaservicesettingsinputmodel)|false|none|none|
|type|string \| null|false|none|none|

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

<h2 id="tocS_ServiceOptionsInputModel">ServiceOptionsInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceoptionsinputmodel"></a>
<a id="schema_ServiceOptionsInputModel"></a>
<a id="tocSserviceoptionsinputmodel"></a>
<a id="tocsserviceoptionsinputmodel"></a>

```json
{
  "consumerPadding": true,
  "defaultService": true,
  "durationInterval": 0,
  "durationMax": 0,
  "durationMin": 0,
  "durationSelect": true,
  "padding": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerPadding|boolean \| null|false|none|none|
|defaultService|boolean \| null|false|none|none|
|durationInterval|integer(int32) \| null|false|none|none|
|durationMax|integer(int32) \| null|false|none|none|
|durationMin|integer(int32) \| null|false|none|none|
|durationSelect|boolean \| null|false|none|none|
|padding|integer(int32) \| null|false|none|none|

<h2 id="tocS_ServiceOptionsUpdateModel">ServiceOptionsUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceoptionsupdatemodel"></a>
<a id="schema_ServiceOptionsUpdateModel"></a>
<a id="tocSserviceoptionsupdatemodel"></a>
<a id="tocsserviceoptionsupdatemodel"></a>

```json
{
  "consumerPadding": true,
  "defaultService": true,
  "durationInterval": 0,
  "durationMax": 0,
  "durationMin": 0,
  "durationSelect": true,
  "padding": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerPadding|boolean \| null|false|none|none|
|defaultService|boolean \| null|false|none|none|
|durationInterval|integer(int32) \| null|false|none|none|
|durationMax|integer(int32) \| null|false|none|none|
|durationMin|integer(int32) \| null|false|none|none|
|durationSelect|boolean \| null|false|none|none|
|padding|integer(int32) \| null|false|none|none|

<h2 id="tocS_ServiceSettingsInputModel">ServiceSettingsInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicesettingsinputmodel"></a>
<a id="schema_ServiceSettingsInputModel"></a>
<a id="tocSservicesettingsinputmodel"></a>
<a id="tocsservicesettingsinputmodel"></a>

```json
{
  "bookAheadUnit": 0,
  "bookAheadValue": 0,
  "bookInAdvance": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookAheadUnit|integer(int32) \| null|false|none|none|
|bookAheadValue|integer(int32) \| null|false|none|none|
|bookInAdvance|integer(int32) \| null|false|none|none|

<h2 id="tocS_ServiceSettingsUpdateModel">ServiceSettingsUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaservicesettingsupdatemodel"></a>
<a id="schema_ServiceSettingsUpdateModel"></a>
<a id="tocSservicesettingsupdatemodel"></a>
<a id="tocsservicesettingsupdatemodel"></a>

```json
{
  "bookAheadUnit": 0,
  "bookAheadValue": 0,
  "bookInAdvance": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookAheadUnit|integer(int32) \| null|false|none|none|
|bookAheadValue|integer(int32) \| null|false|none|none|
|bookInAdvance|integer(int32) \| null|false|none|none|

<h2 id="tocS_ServiceUpdateModel">ServiceUpdateModel</h2>
<!-- backwards compatibility -->
<a id="schemaserviceupdatemodel"></a>
<a id="schema_ServiceUpdateModel"></a>
<a id="tocSserviceupdatemodel"></a>
<a id="tocsserviceupdatemodel"></a>

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
  "bookingInterval": 0,
  "bookingLimit": 0,
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
  "description": "string",
  "duration": 0,
  "fees": {
    "cancellationFeeAmount": 0,
    "cancellationFeeTaxable": true,
    "feeAmount": 0,
    "feeTaxable": true,
    "nonRefundable": true
  },
  "locationId": "string",
  "maxCapacity": 0,
  "maxGroupSize": 0,
  "mediaPageUrl": "string",
  "name": "string",
  "options": {
    "consumerPadding": true,
    "defaultService": true,
    "durationInterval": 0,
    "durationMax": 0,
    "durationMin": 0,
    "durationSelect": true,
    "padding": 0
  },
  "public": true,
  "serviceGroupId": "string",
  "settings": {
    "bookAheadUnit": 0,
    "bookAheadValue": 0,
    "bookInAdvance": 0
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|[AvailabilityInputModel](#schemaavailabilityinputmodel)|false|none|none|
|bookingInterval|integer(int32) \| null|false|none|none|
|bookingLimit|integer(int32) \| null|false|none|none|
|customFields|[CustomFieldUpdateModel](#schemacustomfieldupdatemodel)|false|none|none|
|description|string \| null|false|none|none|
|duration|integer(int32) \| null|false|none|none|
|fees|[ServiceFeesUpdateModel](#schemaservicefeesupdatemodel)|false|none|none|
|locationId|string \| null|false|none|none|
|maxCapacity|integer(int32) \| null|false|none|none|
|maxGroupSize|integer(int32) \| null|false|none|none|
|mediaPageUrl|string \| null|false|none|none|
|name|string \| null|false|none|none|
|options|[ServiceOptionsUpdateModel](#schemaserviceoptionsupdatemodel)|false|none|none|
|public|boolean \| null|false|none|none|
|serviceGroupId|string \| null|false|none|none|
|settings|[ServiceSettingsUpdateModel](#schemaservicesettingsupdatemodel)|false|none|none|
|type|string \| null|false|none|none|

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

<h2 id="tocS_SystemTimezoneViewModel">SystemTimezoneViewModel</h2>
<!-- backwards compatibility -->
<a id="schemasystemtimezoneviewmodel"></a>
<a id="schema_SystemTimezoneViewModel"></a>
<a id="tocSsystemtimezoneviewmodel"></a>
<a id="tocssystemtimezoneviewmodel"></a>

```json
{
  "baseUtcOffset": 0,
  "daylightName": "string",
  "displayName": "string",
  "standardName": "string",
  "supportsDaylightSavingTime": true,
  "timezoneIana": "string",
  "timezoneId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseUtcOffset|integer(int32)|false|none|none|
|daylightName|string \| null|false|none|none|
|displayName|string \| null|false|none|none|
|standardName|string \| null|false|none|none|
|supportsDaylightSavingTime|boolean|false|none|none|
|timezoneIana|string \| null|false|none|none|
|timezoneId|string \| null|false|none|none|

<h2 id="tocS_TimezoneViewModel">TimezoneViewModel</h2>
<!-- backwards compatibility -->
<a id="schematimezoneviewmodel"></a>
<a id="schema_TimezoneViewModel"></a>
<a id="tocStimezoneviewmodel"></a>
<a id="tocstimezoneviewmodel"></a>

```json
{
  "object": "string",
  "regions": [
    "string"
  ],
  "timezones": [
    {
      "name": "string",
      "region": "string",
      "timezoneIanna": "string",
      "tzOffset": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string \| null|false|none|none|
|regions|[string]|false|none|none|
|timezones|[[TimezonesViewModel](#schematimezonesviewmodel)]|false|none|none|

<h2 id="tocS_TimezonesViewModel">TimezonesViewModel</h2>
<!-- backwards compatibility -->
<a id="schematimezonesviewmodel"></a>
<a id="schema_TimezonesViewModel"></a>
<a id="tocStimezonesviewmodel"></a>
<a id="tocstimezonesviewmodel"></a>

```json
{
  "name": "string",
  "region": "string",
  "timezoneIanna": "string",
  "tzOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|region|string \| null|false|none|none|
|timezoneIanna|string \| null|false|none|none|
|tzOffset|integer(int32)|false|none|none|

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

<h2 id="tocS_WeekDayInputModel">WeekDayInputModel</h2>
<!-- backwards compatibility -->
<a id="schemaweekdayinputmodel"></a>
<a id="schema_WeekDayInputModel"></a>
<a id="tocSweekdayinputmodel"></a>
<a id="tocsweekdayinputmodel"></a>

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

<h2 id="tocS_WeekDayViewModel2">WeekDayViewModel2</h2>
<!-- backwards compatibility -->
<a id="schemaweekdayviewmodel2"></a>
<a id="schema_WeekDayViewModel2"></a>
<a id="tocSweekdayviewmodel2"></a>
<a id="tocsweekdayviewmodel2"></a>

```json
{
  "displayEndTime": "string",
  "displayStartTime": "string",
  "endTime": 0,
  "startTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayEndTime|string \| null|false|none|none|
|displayStartTime|string \| null|false|none|none|
|endTime|integer(int32)|false|none|none|
|startTime|integer(int32)|false|none|none|
