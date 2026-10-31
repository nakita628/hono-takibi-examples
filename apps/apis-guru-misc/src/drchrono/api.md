<h1 id="api">API v4 (Hunt Valley)</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document is intended as a detailed reference for the precise behavior of
the drchrono API. If this is your first time using the API, start with our <a href="/api-docs-old/tutorial">tutorial</a>. If you are upgrading from a previous version, take a look at the changelog section.

# Authorization

## Initial authorization

There are three main steps in the OAuth 2.0 authentication workflow:

1. Redirect the provider to the authorization page.
2. The provider authorizes your application and is redirected back to
   your web application.
3. Your application exchanges the `authorization_code` that came with
   the redirect for an `access_token` and `refresh_token`.

### Step 1: Redirect to drchrono

The first step is redirecting your user to drchrono, typically with a button
labeled "Connect to drchrono" or "Login with drchrono".  This is just a link that
takes your user to the following URL:

    https://drchrono.com/o/authorize/?redirect_uri=REDIRECT_URI_ENCODED&response_type=code&client_id=CLIENT_ID_ENCODED&scope=SCOPES_ENCODED

- `REDIRECT_URI_ENCODED` is the URL-encoded version of the redirect URI (as registered for your application and used in later steps).
- `CLIENT_ID_ENCODED` is the URL-encoded version of your application's client ID.
- `SCOPES_ENCODED` is a URL-encoded version of a space-separated list of scopes, which can be found in each endpoint or omitted to default to all scopes.

The `scope` parameter consists of an optional, space-separated list of scopes your application is requesting.
If omitted, all scopes will be requested.

Scopes are of the form `BASE_SCOPE:[read|write]` where `BASE_SCOPE` is any of `user`, `calendar`, `patients`, `patients:summary`, `billing`, `clinical` and `labs`.
You should request only the scopes you need.
For instance, an application which sends "Happy Birthday!" emails to a doctor's patients on their birthdays would use the scope parameter `"patients:summary:read"`,
while one that allows patients to schedule appointments online would need at least
`"patients:summary:read patients:summary:write calendar:read calendar:write clinical:read clinical:write"`.

### Step 2: Provider authorization

After logging in (if necessary), the provider will be presented with a screen
with your application's name and the list of permissions you requested (via the
`scope` parameter).

When they click the "Authorize" button, they will be redirected to your redirect
URI with a `code` query parameter appended, which contains an authorization code to be
used in step 3.  If they click the "Cancel" button, they will be redirected to
your redirect URI with `error=access_denied` instead.

Note: This authorization code expires extremely quickly, so you must perform
step 3 immediately, ideally before rendering the resulting page for the end
user.

### Step 3: Token exchange

The `code` obtained from step 2 is usable exactly once to obtain an access token
and refresh token.  Here is an example token exchange in Python:

    import datetime, pytz, requests

    if 'error' in get_params:
        raise ValueError('Error authorizing application: %s' % get_params[error])

    response = requests.post('https://drchrono.com/o/token/', data={
        'code': get_params['code'],
        'grant_type': 'authorization_code',
        'redirect_uri': 'http://mytestapp.com/redirect_uri',
        'client_id': 'abcdefg12345',
        'client_secret': 'abcdefg12345',
    })
    response.raise_for_status()
    data = response.json()

    # Save these in your database associated with the user
    access_token = data['access_token']
    refresh_token = data['refresh_token']
    expires_timestamp = datetime.datetime.now(pytz.utc) + datetime.timedelta(seconds=data['expires_in'])

You now have all you need to make API requests authenticated as that provider.
When using this access token, you'll only be able to access the data that the
user has access to and that you have been granted permissions for.

## Refreshing an access token

Access tokens only last 48 hours (given in seconds in the `'expires_in'` key in
the token exchange step above), so they occasionally need to be refreshed.  It
would be inconvenient to ask the user to re-authorize every time, so instead you
can use the refresh token like the original authorization to obtain a new access
token.  Replace the `code` parameter with `refresh_token`, change the value
`grant_type` from `authorization_code` to `refresh_token`, and omit the
`redirect_uri` parameter.

Example in Python:

    ...
    response = requests.post('https://drchrono.com/o/token/', data={
        'refresh_token': get_refresh_token(),
        'grant_type': 'refresh_token',
        'client_id': 'abcdefg12345',
        'client_secret': 'abcdefg12345',
    })
    ...

# Webhooks

In order to use drchrono API webhooks, you first need to have an API application on file
(even if it is in Test Model).
Each API webhook is associated with one API application, go to
<a href="/api-management/" target="_blank">here</a> to set up both API applications and webhooks!

Once you registered an API application, you will see webhook section in each saved API applications.
Create a webhook and register some events there and save all the changes, then you are good to go!

## Webhooks setup

All fields under webhooks section are required.

**Callback URL**
Callback URl is used to receive all hooks when subscribed events are triggered. This should be an URL under your control.

**Secret token**
Secret token is used to verify webhooks, this is very important, please set something with high entropy. Also we will
talk more about this later.

**Events**

Events is used to register events you want to receiver notification when they happen. Currently we support following events.

Event name | Event description
---------- | -----------------
`APPOINTMENT_CREATE` | We will deliver a hook any time an appointment is created
`APPOINTMENT_MODIFY` | We will deliver a hook any time an appointment is modified
`PATIENT_CREATE` | We will deliver a hook any time a patient is created
`PATIENT_MODIFY` | We will deliver a hook any time a patient is modified
`PATIENT_PROBLEM_CREATE` | We will deliver a hook any time a patient problem is created
`PATIENT_PROBLEM_MODIFY` | We will deliver a hook any time a patient problem is modified
`PATIENT_ALLERGY_CREATE` | We will deliver a hook any time a patient allergy is created
`PATIENT_ALLERGY_MODIFY` | We will deliver a hook any time a patient allergy is modified
`PATIENT_MEDICATION_CREATE` | We will deliver a hook any time a patient medication is created
`PATIENT_MEDICATION_MODIFY` | We will deliver a hook any time a patient medication is modified
`CLINICAL_NOTE_LOCK` | We will deliver a hook any time a clinical note is locked
`CLINICAL_NOTE_UNLOCK` | We will deliver a hook any time a clinical note is unlocked
`TASK_CREATE` | We will deliver a hook any time a task is created
`TASK_MODIFY` | We will deliver a hook any time a task is modified and any time creation, modification and deletion of task notes, associated task item
`TASK_DELETE` | We will deliver a hook any time a task is deleted


## Webhooks verification

In order to make sure the callback URL in webhook is under your control, we added a verification
step before we send any hooks out to you.

Verification can be done by clicking "Verify webhook" button in webhooks setup page. After you click
the button, we will send a `GET` request to the callback URL, along with a parameter called `msg`.

Please use your webhook's secret token as hash key and SHA-256 as digest constructor, hash the `msg` value with
<a href="https://tools.ietf.org/html/rfc2104.html">HMAC algorithm</a>.
And we expect a `200` JSON response, in JSON response body, there should be a key called `secret_token` existing, and its value should be
equal to the <strong>hashed</strong> `msg`. Otherwise, verification will fail.

Here is an example webhook verification in Python:

    import hashlib, hmac

    def webhook_verify(request):
        secret_token = hmac.new(WEBHOOK_SECRET_TOKEN, request.GET['msg'], hashlib.sha256).hexdigest()
        return json_response({
            'secret_token': secret_token
        })

<div class="alert alert-warning">
<b>Note:</b> Verification will be needed when webhook is first created and anytime callback URl is changed.
</div>


## Webhooks header and body

**Header**

Key | Value
--- | -----
`X-drchrono-event` | Event that triggered this hook, could be any one event above or `PING`
`X-drchrono-signature` | Secret token associated with this webhook
`X-drchrono-delivery` | ID of this delivery

**Body**

Key | Value
--- | -----
`receiver` | This will be an JSON representation of the webhook
`object` | This will be an JSON representation of the object related to the triggered event, this would share same serializer as drchrono API

## Webhooks ping and deliveries

Webhooks ping and deliveries will be sent as `POST` requests.

**PING**:

You can always ping your webhook to check things, by clicking the "Ping webhook" button in webhook setup page. And a hook with header `X-drchrono-event: PING` would be sent to the callback URL.

**Deliveries**:

You can check recent deliveries by clicking the "deliveries" link in webhook setup page. And you can resend a hook by clicking "redeliver" button after select a specific delivery.

## Webhooks delivery mechanism

We will delivery a hook the moment a subscribed event is triggered. We will not record any response header or body you send back after you receive the hook.
However we only consider the response status code. We will consider any `2xx` responses as successfully delivered.
Any other responses, like `302` would be considered failing.
And we will try to redeliver unsuccessfully delivered hooks 3 times, first redeliver happens at 1 hour after the initial event,
second receliver happens 3 hours after the initial event, and the third redeliver happens 7 hours after the initial event.
After these redeliveries, if the delivery is still unsuccessful, you have to redeliver it by hand.


## Webhooks security

You may want to secure your webhooks to only consider requests send out from drchrono. And this is where <code>secret_token</code> is needed in
request header.
Try to set the <code>secret_token</code> to something with high entropy, a good example could be taking the output of
<code>ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'</code>.
After this, you might want to verify all request headers you received on your server with this token.


# iframe integration

Some API apps provide additional functionality for interacting with patient data
not offered by drchrono, and can benefit by being incorporated into drchrono's
patient information page via iframe.  We have created a simple API to make this
possible.

To make an existing API application accessible via an iframe on the patient
page, you need to update either "Patient iframe" or "Clinical note iframe" section in API management page,
to make the iframe to appear on (either the patient page or the clinical note page),
with the URL that the iframe will use for each page, and the height it should
have. The application will be reviewed before it is approved to ensure that it
is functional and secure.

## Register a Doctor

iframe applications will appear as choices on the left-hand menu of the patient
page for doctors registered with your application.  To register a doctor with
your application, make a `POST` request to the `/api/iframe_integration`
endpoint using the access token for the corresponding doctor. This endpoint does not
expect any payload.

To disable your iframe application for a doctor, make a `DELETE` request to the
same endpoint.

## Populating the iframe

There are two places where the iframe can be displayed, either within the
patient detail page or the clinical note page, shown below respectively:

<img src="{% asset 'public/images/iframe_patient_page.png' %}" alt="Iframe on the patient page"/>

<img src="{% asset 'public/images/iframe_clinical_note.png' %}" alt="Iframe on the clinical note page"/>

When requesting approval for your iframe app, you must specify a URL for one or
both of these pages which will serve as the base URL for your IFrame
contents. When a doctor views your iframe, the source URL will have various
query parameters appended to it, for example for the patient page the `src`
parameter of the IFrame will be:

```
<iframe_url>?doctor_id=<doctor_id>&patient_id=<patient_id>&practice_id=<practice_id>&iat=<iat>&jwt=<jwt>
```

The `jwt` parameter is crucial if your application transfers any sort of PHI and
does not implement its own login system.  It encapsulates the other parameters
in a [JSON web token (JWT)](http://jwt.io) and signs them using SHA-256 HMAC
with your `client_secret` as the key.  This verifies that the iframe is being
loaded within one of drchrono's pages by an authorized user.  In production, you
should validate the JWT using an approved library (which are listed on the
[official site](http://jwt.io)), and only use the parameters extracted from the
JWT.  Using Python and Django, this might look like:

    import jwt

    CLIENT_SECRET = <client_secret>
    MAX_TIME_DRIFT_SECONDS = 60

    def validate_parameters(request):
        token = request.GET['jwt']

        return jwt.decode(token, CLIENT_SECRET, algorithms=['HS256'], leeway=MAX_TIME_DRIFT_SECONDS)

Modern browsers' same-origin policy means that data cannot be passed between
your application and drchrono's page through the iframe.  Therefore, interaction
must happen through the API, using information provided in JWT.

# Versions and deprecation

## Stability Policy

Changes to this API version will be limited to adding endpoints, or adding fields to existing
endpoints, or adding optional query parameters. Any new fields which are not read-only will be optional.

## Deprecation Policy

The drchrono API is versioned. Versions can be in the following states:

* **Active:** This is our latest and greatest version of the API. It is actively supported by
our API team and is improved upon with new features, bug fixes and optimizations that do
not break backwards compatibility.

* **Deprecated:** A deprecated API version is considered second best--having been
surpassed by our active API version. An API version remains in this state for one year,
after which time it falls to the not supported state. A deprecated API version is passively supported;
while it won't be removed until becoming unsupported, it may not receive new features but will likely
be subject to security updates and performance improvements.

* **Unsupported:** An API version in the not supported state may be deactivated at any
time. An application using an unsupported API version should migrate to an active API version.

## Version Map
| Version Name | Previous Name | Start Date | Deprecation Date |
|--------------|---------------|------------|------------------|
| v2           | v2015_08      | 08/2015    | TBA              |
| v3           | v2016_06      | 06/2016    |                  |
| v4           | N/A           | 09/2018    |                  |

If you are looking for documentation for an older version

- [V4(Hunt Valley)](/api-docs-old/v4/documentation) (old V4 documentation)
- [V3(Sunnyvale)](/api-docs-old/v3/documentation)
- [V2(Mountain View)](/api-docs-old/v2/documentation)

# Changelog

Here's changelog for different versions

- [V4 Changelog](/api-docs-old/v4/changelog)
- [V3 changelog](/api-docs-old/v3/changelog)

Base URLs:

* <a href="https://app.drchrono.com">https://app.drchrono.com</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://drchrono.com/o/authorize/](https://drchrono.com/o/authorize/)
    - Token URL = [https://drchrono.com/o/token/](https://drchrono.com/o/token/)

|Scope|Scope Description|
|---|---|
|billing:patient-payment:read|View patient payment information|
|billing:patient-payment:write|Modify patient payment information|
|billing:read|View billing information.|
|billing:write|Modify billing information.|
|calendar:read|View your appointments.|
|calendar:write|Schedule appointments and modify the data associated with them.|
|clinical:read|View clinical information, such as vitals, clinical notes, medications and diagnoses.|
|clinical:write|Create and modify clinical information, such as vitals, clinical notes, medications and diagnoses.|
|labs:read|View patient lab orders and results.|
|labs:write|Create and modify patient lab orders and results.|
|messages:read|View messages in your message center.|
|messages:write|Create and modify messages in your message center.|
|patients:read|View detailed patient information.|
|patients:summary:read|View summary information about your patients. This includes patients' name, chart_id, age, and gender.|
|patients:summary:write|Create new patients and set their name, chart_id, age, and gender.|
|patients:write|Create patients and modify detailed patient information.|
|settings:read|View resources that requires Settings permission, such as custom fields.|
|settings:write|Create resources that requires Settings permission, such as custom fields.|
|tasks:read|View tasks in your tasks center|
|tasks:write|Create and modify tasks in your tasks center|
|user:read|View your basic information.|
|user:write|Edit select account information, such as creating new exam rooms.|

<h1 id="api-administrative">Administrative</h1>

Create and manage administrative resources

## doctors_list

<a id="opIddoctors_list"></a>

> Code samples

```bash
curl https://example.com/api/doctors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/doctors`

Retrieve or search doctors within practice group

<h3 id="doctorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "cell_phone": "string",
      "country": "BD",
      "email": "string",
      "first_name": "string",
      "group_npi_number": "string",
      "home_phone": "string",
      "id": 0,
      "is_account_suspended": true,
      "job_title": "",
      "last_name": "string",
      "npi_number": "string",
      "office_phone": "string",
      "practice_group": "string",
      "practice_group_name": "string",
      "profile_picture": "string",
      "specialty": "string",
      "suffix": "string",
      "timezone": "string",
      "website": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="doctorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="doctorslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Doctor](#schemadoctor)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: user:read user:write )
</aside>

## doctors_read

<a id="opIddoctors_read"></a>

> Code samples

```bash
curl https://example.com/api/doctors/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/doctors/{id}`

Retrieve an existing dcotor

<h3 id="doctorsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "cell_phone": "string",
  "country": "BD",
  "email": "string",
  "first_name": "string",
  "group_npi_number": "string",
  "home_phone": "string",
  "id": 0,
  "is_account_suspended": true,
  "job_title": "",
  "last_name": "string",
  "npi_number": "string",
  "office_phone": "string",
  "practice_group": "string",
  "practice_group_name": "string",
  "profile_picture": "string",
  "specialty": "string",
  "suffix": "string",
  "timezone": "string",
  "website": "string"
}
```

<h3 id="doctorsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Doctor](#schemadoctor)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: user:read user:write )
</aside>

## user_groups_list

<a id="opIduser_groups_list"></a>

> Code samples

```bash
curl https://example.com/api/user_groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/user_groups`

Retrieve or search user groups

<h3 id="usergroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "created_at": "string",
      "id": 0,
      "members": [
        "string"
      ],
      "name": "string",
      "practice_group": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="usergroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="usergroupslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserProfilesGroup](#schemauserprofilesgroup)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2
</aside>

## user_groups_read

<a id="opIduser_groups_read"></a>

> Code samples

```bash
curl https://example.com/api/user_groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/user_groups/{id}`

Retrieve an existing user group

<h3 id="usergroupsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "created_at": "string",
  "id": 0,
  "members": [
    "string"
  ],
  "name": "string",
  "practice_group": "string",
  "updated_at": "string"
}
```

<h3 id="usergroupsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserProfilesGroup](#schemauserprofilesgroup)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2
</aside>

## users_list

<a id="opIdusers_list"></a>

> Code samples

```bash
curl https://example.com/api/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/users`

Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

<h3 id="userslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "doctor": "string",
      "id": "string",
      "is_doctor": "string",
      "is_staff": "string",
      "permissions": "string",
      "practice_group": "string",
      "username": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="userslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="userslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserProfile](#schemauserprofile)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2
</aside>

## users_read

<a id="opIdusers_read"></a>

> Code samples

```bash
curl https://example.com/api/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/users/{id}`

Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`

<h3 id="usersread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "doctor": "string",
  "id": "string",
  "is_doctor": "string",
  "is_staff": "string",
  "permissions": "string",
  "practice_group": "string",
  "username": "string"
}
```

<h3 id="usersread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserProfile](#schemauserprofile)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2
</aside>

<h1 id="api-clinical">Clinical</h1>

Create and manage clinical resources

## allergies_list

<a id="opIdallergies_list"></a>

> Code samples

```bash
curl https://example.com/api/allergies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/allergies`

Retrieve or search patient allergies

<h3 id="allergieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "description": "string",
      "doctor": 0,
      "id": 0,
      "notes": "string",
      "patient": 0,
      "reaction": "string",
      "rxnorm": "string",
      "snomed_reaction": "",
      "status": "active"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="allergieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="allergieslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientAllergy](#schemapatientallergy)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## allergies_create

<a id="opIdallergies_create"></a>

> Code samples

```bash
curl https://example.com/api/allergies \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/allergies`

Create patient allergy

<h3 id="allergiescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "description": "string",
  "doctor": 0,
  "id": 0,
  "notes": "string",
  "patient": 0,
  "reaction": "string",
  "rxnorm": "string",
  "snomed_reaction": "",
  "status": "active"
}
```

<h3 id="allergiescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientAllergy](#schemapatientallergy)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## allergies_read

<a id="opIdallergies_read"></a>

> Code samples

```bash
curl https://example.com/api/allergies/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/allergies/{id}`

Retrieve an existing patient allergy

<h3 id="allergiesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "doctor": 0,
  "id": 0,
  "notes": "string",
  "patient": 0,
  "reaction": "string",
  "rxnorm": "string",
  "snomed_reaction": "",
  "status": "active"
}
```

<h3 id="allergiesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientAllergy](#schemapatientallergy)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## allergies_update

<a id="opIdallergies_update"></a>

> Code samples

```bash
curl https://example.com/api/allergies/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/allergies/{id}`

Update an existing patient allergy

<h3 id="allergiesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="allergiesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## allergies_partial_update

<a id="opIdallergies_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/allergies/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/allergies/{id}`

Update an existing patient allergy

<h3 id="allergiespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="allergiespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## amendments_list

<a id="opIdamendments_list"></a>

> Code samples

```bash
curl https://example.com/api/amendments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/amendments`

Retrieve or search patient amendments. You can only interact with amendments created by your API application

<h3 id="amendmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|appointment|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "amendment_file": "string",
      "amendment_name": "string",
      "appointment": 0,
      "comments": "string",
      "doctor": 0,
      "id": 0,
      "patient": 0
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="amendmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="amendmentslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientAmendment](#schemapatientamendment)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## amendments_create

<a id="opIdamendments_create"></a>

> Code samples

```bash
curl https://example.com/api/amendments \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/amendments`

Create patient amendments to a patient's clinical records

<h3 id="amendmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appointment|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "amendment_file": "string",
  "amendment_name": "string",
  "appointment": 0,
  "comments": "string",
  "doctor": 0,
  "id": 0,
  "patient": 0
}
```

<h3 id="amendmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientAmendment](#schemapatientamendment)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## amendments_read

<a id="opIdamendments_read"></a>

> Code samples

```bash
curl https://example.com/api/amendments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/amendments/{id}`

Retrieve an existing patient amendment, you can only interact with amendments created by your API application

<h3 id="amendmentsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appointment|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "amendment_file": "string",
  "amendment_name": "string",
  "appointment": 0,
  "comments": "string",
  "doctor": 0,
  "id": 0,
  "patient": 0
}
```

<h3 id="amendmentsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientAmendment](#schemapatientamendment)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## amendments_update

<a id="opIdamendments_update"></a>

> Code samples

```bash
curl https://example.com/api/amendments/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/amendments/{id}`

Update an existing patient amendment, you can only interact with amendments created by your API application

<h3 id="amendmentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appointment|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="amendmentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## amendments_delete

<a id="opIdamendments_delete"></a>

> Code samples

```bash
curl https://example.com/api/amendments/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/amendments/{id}`

Delete an existing patient amendment, you can only interact with amendments created by your API application

<h3 id="amendmentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appointment|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="amendmentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## amendments_partial_update

<a id="opIdamendments_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/amendments/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/amendments/{id}`

Update an existing patient amendment, you can only interact with amendments created by your API application

<h3 id="amendmentspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appointment|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="amendmentspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## appointment_profiles_list

<a id="opIdappointment_profiles_list"></a>

> Code samples

```bash
curl https://example.com/api/appointment_profiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/appointment_profiles`

Retrieve or search appointment profiles for a doctor's calendar

<h3 id="appointmentprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "color": "string",
      "doctor": 0,
      "duration": 0,
      "id": 0,
      "name": "string",
      "online_scheduling": true,
      "reason": "string",
      "sort_order": 0
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="appointmentprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="appointmentprofileslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AppointmentProfile](#schemaappointmentprofile)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_profiles_create

<a id="opIdappointment_profiles_create"></a>

> Code samples

```bash
curl https://example.com/api/appointment_profiles \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/appointment_profiles`

Create appointment profiles for a doctor's calendar

<h3 id="appointmentprofilescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "color": "string",
  "doctor": 0,
  "duration": 0,
  "id": 0,
  "name": "string",
  "online_scheduling": true,
  "reason": "string",
  "sort_order": 0
}
```

<h3 id="appointmentprofilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[AppointmentProfile](#schemaappointmentprofile)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_profiles_read

<a id="opIdappointment_profiles_read"></a>

> Code samples

```bash
curl https://example.com/api/appointment_profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/appointment_profiles/{id}`

Retrieve an existing appointment profile

<h3 id="appointmentprofilesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "color": "string",
  "doctor": 0,
  "duration": 0,
  "id": 0,
  "name": "string",
  "online_scheduling": true,
  "reason": "string",
  "sort_order": 0
}
```

<h3 id="appointmentprofilesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AppointmentProfile](#schemaappointmentprofile)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_profiles_update

<a id="opIdappointment_profiles_update"></a>

> Code samples

```bash
curl https://example.com/api/appointment_profiles/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/appointment_profiles/{id}`

Update an existing appointment profile

<h3 id="appointmentprofilesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="appointmentprofilesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_profiles_delete

<a id="opIdappointment_profiles_delete"></a>

> Code samples

```bash
curl https://example.com/api/appointment_profiles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/appointment_profiles/{id}`

Delete an existing appointment profile

<h3 id="appointmentprofilesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="appointmentprofilesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_profiles_partial_update

<a id="opIdappointment_profiles_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/appointment_profiles/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/appointment_profiles/{id}`

Update an existing appointment profile

<h3 id="appointmentprofilespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="appointmentprofilespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_templates_list

<a id="opIdappointment_templates_list"></a>

> Code samples

```bash
curl https://example.com/api/appointment_templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/appointment_templates`

Retrieve or search appointment templates for a doctor's calendar

<h3 id="appointmenttemplateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|profile|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "date_end": "string",
      "date_start": "string",
      "duration": 0,
      "exam_room": 0,
      "id": 0,
      "office": 0,
      "open_slots": [
        {
          "end": "string",
          "start": "string"
        }
      ],
      "profile": 0,
      "scheduled_time": "string",
      "week_days": [
        0
      ]
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="appointmenttemplateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="appointmenttemplateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AppointmentTemplate](#schemaappointmenttemplate)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_templates_create

<a id="opIdappointment_templates_create"></a>

> Code samples

```bash
curl https://example.com/api/appointment_templates \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/appointment_templates`

Create appointment templates for a doctor's calendar

<h3 id="appointmenttemplatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profile|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "date_end": "string",
  "date_start": "string",
  "duration": 0,
  "exam_room": 0,
  "id": 0,
  "office": 0,
  "open_slots": [
    {
      "end": "string",
      "start": "string"
    }
  ],
  "profile": 0,
  "scheduled_time": "string",
  "week_days": [
    0
  ]
}
```

<h3 id="appointmenttemplatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[AppointmentTemplate](#schemaappointmenttemplate)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_templates_read

<a id="opIdappointment_templates_read"></a>

> Code samples

```bash
curl https://example.com/api/appointment_templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/appointment_templates/{id}`

Retrieve an existing appointment template

<h3 id="appointmenttemplatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|profile|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "date_end": "string",
  "date_start": "string",
  "duration": 0,
  "exam_room": 0,
  "id": 0,
  "office": 0,
  "open_slots": [
    {
      "end": "string",
      "start": "string"
    }
  ],
  "profile": 0,
  "scheduled_time": "string",
  "week_days": [
    0
  ]
}
```

<h3 id="appointmenttemplatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AppointmentTemplate](#schemaappointmenttemplate)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_templates_update

<a id="opIdappointment_templates_update"></a>

> Code samples

```bash
curl https://example.com/api/appointment_templates/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/appointment_templates/{id}`

Update an existing appointment template

<h3 id="appointmenttemplatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|profile|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="appointmenttemplatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_templates_delete

<a id="opIdappointment_templates_delete"></a>

> Code samples

```bash
curl https://example.com/api/appointment_templates/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/appointment_templates/{id}`

Delete an existing appointment template

<h3 id="appointmenttemplatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|profile|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="appointmenttemplatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointment_templates_partial_update

<a id="opIdappointment_templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/appointment_templates/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/appointment_templates/{id}`

Update an existing appointment template

<h3 id="appointmenttemplatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|profile|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="appointmenttemplatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write settings:read settings:write )
</aside>

## appointments_list

<a id="opIdappointments_list"></a>

> Code samples

```bash
curl https://example.com/api/appointments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/appointments`

Retrieve or search appointment or breaks.
<b>Note:</b> Either `since`, `date` or `date_range` parameter must be specified.
            

<h3 id="appointmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|status|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|date_range|query|string|false|none|
|date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "allow_overlapping": true,
      "appt_is_break": true,
      "base_recurring_appointment": "string",
      "billing_notes": [
        {
          "appointment": 0,
          "created_at": "string",
          "created_by": "string",
          "id": 0,
          "text": "string"
        }
      ],
      "billing_provider": "string",
      "billing_status": "string",
      "clinical_note": {
        "locked": true,
        "pdf": "string",
        "updated_at": "string"
      },
      "cloned_from": 0,
      "color": "string",
      "created_at": "string",
      "custom_fields": [
        {
          "created_at": "string",
          "field_type": 0,
          "field_value": "string",
          "updated_at": "string"
        }
      ],
      "custom_vitals": [
        {
          "value": "string",
          "vital_type": 0
        }
      ],
      "deleted_flag": true,
      "doctor": 0,
      "duration": 0,
      "exam_room": 0,
      "extended_updated_at": "string",
      "first_billed_date": "string",
      "icd10_codes": [
        "string"
      ],
      "icd9_codes": [
        "string"
      ],
      "id": "string",
      "ins1_status": "",
      "ins2_status": "",
      "is_virtual_base": true,
      "is_walk_in": true,
      "last_billed_date": "string",
      "notes": "string",
      "office": 0,
      "patient": 0,
      "primary_insurance_id_number": "string",
      "primary_insurer_name": "string",
      "primary_insurer_payer_id": "string",
      "profile": 0,
      "reason": "string",
      "recurring_appointment": true,
      "reminder_profile": "string",
      "reminders": [
        {
          "id": 0,
          "scheduled_time": "string",
          "type": "email"
        }
      ],
      "scheduled_time": "string",
      "secondary_insurance_id_number": "string",
      "secondary_insurer_name": "string",
      "secondary_insurer_payer_id": "string",
      "status": "",
      "status_transitions": [
        {
          "appointment": "string",
          "datetime": "string",
          "from_status": "string",
          "to_status": "string"
        }
      ],
      "supervising_provider": "string",
      "updated_at": "string",
      "vitals": {
        "blood_pressure_1": 0,
        "blood_pressure_2": 0,
        "bmi": "string",
        "head_circumference": 0,
        "head_circumference_units": "string",
        "height": 0,
        "height_units": "string",
        "oxygen_saturation": 0,
        "pain": "string",
        "pulse": 0,
        "respiratory_rate": 0,
        "smoking_status": "blank",
        "temperature": 0,
        "temperature_units": "string",
        "weight": 0,
        "weight_units": "string"
      }
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="appointmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="appointmentslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Appointment](#schemaappointment)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write clinical:read clinical:write )
</aside>

## appointments_create

<a id="opIdappointments_create"></a>

> Code samples

```bash
curl https://example.com/api/appointments \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/appointments`

Create a new appointment or break on doctor's calendar

<h3 id="appointmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|date_range|query|string|false|none|
|date|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "allow_overlapping": true,
  "appt_is_break": true,
  "base_recurring_appointment": "string",
  "billing_notes": [
    {
      "appointment": 0,
      "created_at": "string",
      "created_by": "string",
      "id": 0,
      "text": "string"
    }
  ],
  "billing_provider": "string",
  "billing_status": "string",
  "clinical_note": {
    "locked": true,
    "pdf": "string",
    "updated_at": "string"
  },
  "cloned_from": 0,
  "color": "string",
  "created_at": "string",
  "custom_fields": [
    {
      "created_at": "string",
      "field_type": 0,
      "field_value": "string",
      "updated_at": "string"
    }
  ],
  "custom_vitals": [
    {
      "value": "string",
      "vital_type": 0
    }
  ],
  "deleted_flag": true,
  "doctor": 0,
  "duration": 0,
  "exam_room": 0,
  "extended_updated_at": "string",
  "first_billed_date": "string",
  "icd10_codes": [
    "string"
  ],
  "icd9_codes": [
    "string"
  ],
  "id": "string",
  "ins1_status": "",
  "ins2_status": "",
  "is_virtual_base": true,
  "is_walk_in": true,
  "last_billed_date": "string",
  "notes": "string",
  "office": 0,
  "patient": 0,
  "primary_insurance_id_number": "string",
  "primary_insurer_name": "string",
  "primary_insurer_payer_id": "string",
  "profile": 0,
  "reason": "string",
  "recurring_appointment": true,
  "reminder_profile": "string",
  "reminders": [
    {
      "id": 0,
      "scheduled_time": "string",
      "type": "email"
    }
  ],
  "scheduled_time": "string",
  "secondary_insurance_id_number": "string",
  "secondary_insurer_name": "string",
  "secondary_insurer_payer_id": "string",
  "status": "",
  "status_transitions": [
    {
      "appointment": "string",
      "datetime": "string",
      "from_status": "string",
      "to_status": "string"
    }
  ],
  "supervising_provider": "string",
  "updated_at": "string",
  "vitals": {
    "blood_pressure_1": 0,
    "blood_pressure_2": 0,
    "bmi": "string",
    "head_circumference": 0,
    "head_circumference_units": "string",
    "height": 0,
    "height_units": "string",
    "oxygen_saturation": 0,
    "pain": "string",
    "pulse": 0,
    "respiratory_rate": 0,
    "smoking_status": "blank",
    "temperature": 0,
    "temperature_units": "string",
    "weight": 0,
    "weight_units": "string"
  }
}
```

<h3 id="appointmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Appointment](#schemaappointment)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Scheduled time overlaps with an existing appointment|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write clinical:read clinical:write )
</aside>

## appointments_read

<a id="opIdappointments_read"></a>

> Code samples

```bash
curl https://example.com/api/appointments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/appointments/{id}`

Retrieve an existing appointment or break

<h3 id="appointmentsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|status|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|date_range|query|string|false|none|
|date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "allow_overlapping": true,
  "appt_is_break": true,
  "base_recurring_appointment": "string",
  "billing_notes": [
    {
      "appointment": 0,
      "created_at": "string",
      "created_by": "string",
      "id": 0,
      "text": "string"
    }
  ],
  "billing_provider": "string",
  "billing_status": "string",
  "clinical_note": {
    "locked": true,
    "pdf": "string",
    "updated_at": "string"
  },
  "cloned_from": 0,
  "color": "string",
  "created_at": "string",
  "custom_fields": [
    {
      "created_at": "string",
      "field_type": 0,
      "field_value": "string",
      "updated_at": "string"
    }
  ],
  "custom_vitals": [
    {
      "value": "string",
      "vital_type": 0
    }
  ],
  "deleted_flag": true,
  "doctor": 0,
  "duration": 0,
  "exam_room": 0,
  "extended_updated_at": "string",
  "first_billed_date": "string",
  "icd10_codes": [
    "string"
  ],
  "icd9_codes": [
    "string"
  ],
  "id": "string",
  "ins1_status": "",
  "ins2_status": "",
  "is_virtual_base": true,
  "is_walk_in": true,
  "last_billed_date": "string",
  "notes": "string",
  "office": 0,
  "patient": 0,
  "primary_insurance_id_number": "string",
  "primary_insurer_name": "string",
  "primary_insurer_payer_id": "string",
  "profile": 0,
  "reason": "string",
  "recurring_appointment": true,
  "reminder_profile": "string",
  "reminders": [
    {
      "id": 0,
      "scheduled_time": "string",
      "type": "email"
    }
  ],
  "scheduled_time": "string",
  "secondary_insurance_id_number": "string",
  "secondary_insurer_name": "string",
  "secondary_insurer_payer_id": "string",
  "status": "",
  "status_transitions": [
    {
      "appointment": "string",
      "datetime": "string",
      "from_status": "string",
      "to_status": "string"
    }
  ],
  "supervising_provider": "string",
  "updated_at": "string",
  "vitals": {
    "blood_pressure_1": 0,
    "blood_pressure_2": 0,
    "bmi": "string",
    "head_circumference": 0,
    "head_circumference_units": "string",
    "height": 0,
    "height_units": "string",
    "oxygen_saturation": 0,
    "pain": "string",
    "pulse": 0,
    "respiratory_rate": 0,
    "smoking_status": "blank",
    "temperature": 0,
    "temperature_units": "string",
    "weight": 0,
    "weight_units": "string"
  }
}
```

<h3 id="appointmentsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Appointment](#schemaappointment)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write clinical:read clinical:write )
</aside>

## appointments_update

<a id="opIdappointments_update"></a>

> Code samples

```bash
curl https://example.com/api/appointments/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/appointments/{id}`

Update an existing appointment or break

<h3 id="appointmentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|status|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|date_range|query|string|false|none|
|date|query|string|false|none|

<h3 id="appointmentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Scheduled time overlaps with an existing appointment|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write clinical:read clinical:write )
</aside>

## appointments_delete

<a id="opIdappointments_delete"></a>

> Code samples

```bash
curl https://example.com/api/appointments/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/appointments/{id}`

Delete an existing appointment or break

<h3 id="appointmentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|status|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|date_range|query|string|false|none|
|date|query|string|false|none|

<h3 id="appointmentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write clinical:read clinical:write )
</aside>

## appointments_partial_update

<a id="opIdappointments_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/appointments/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/appointments/{id}`

Update an existing appointment or break

<h3 id="appointmentspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|status|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|date_range|query|string|false|none|
|date|query|string|false|none|

<h3 id="appointmentspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Scheduled time overlaps with an existing appointment|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write clinical:read clinical:write )
</aside>

## care_plans_list

<a id="opIdcare_plans_list"></a>

> Code samples

```bash
curl https://example.com/api/care_plans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/care_plans`

Retrieve or search care plans

<h3 id="careplanslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|plan_type|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "appointment": "string",
      "code": "string",
      "code_system": "string",
      "created_at": "string",
      "description": "string",
      "id": 0,
      "instructions": "string",
      "patient": "string",
      "plan_type": "1",
      "scheduled_date": "string",
      "title": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="careplanslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="careplanslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CarePlan](#schemacareplan)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## care_plans_read

<a id="opIdcare_plans_read"></a>

> Code samples

```bash
curl https://example.com/api/care_plans/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/care_plans/{id}`

Retrieve an existing care plan

<h3 id="careplansread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|plan_type|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "appointment": "string",
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "description": "string",
  "id": 0,
  "instructions": "string",
  "patient": "string",
  "plan_type": "1",
  "scheduled_date": "string",
  "title": "string",
  "updated_at": "string"
}
```

<h3 id="careplansread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CarePlan](#schemacareplan)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## care_team_members_list

<a id="opIdcare_team_members_list"></a>

> Code samples

```bash
curl https://example.com/api/care_team_members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/care_team_members`

<h3 id="careteammemberslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|appointment|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "appointment": "string",
      "created_at": "string",
      "id": 0,
      "patient": "string",
      "user": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="careteammemberslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="careteammemberslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CareTeamMember](#schemacareteammember)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## care_team_members_read

<a id="opIdcare_team_members_read"></a>

> Code samples

```bash
curl https://example.com/api/care_team_members/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/care_team_members/{id}`

<h3 id="careteammembersread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|appointment|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "appointment": "string",
  "created_at": "string",
  "id": 0,
  "patient": "string",
  "user": "string"
}
```

<h3 id="careteammembersread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CareTeamMember](#schemacareteammember)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## claim_billing_notes_list

<a id="opIdclaim_billing_notes_list"></a>

> Code samples

```bash
curl https://example.com/api/claim_billing_notes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/claim_billing_notes`

Retrieve or search billing notes

<h3 id="claimbillingnoteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|appointment|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "appointment": 0,
      "created_at": "string",
      "created_by": "string",
      "id": 0,
      "text": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="claimbillingnoteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="claimbillingnoteslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ClaimBillingNotes](#schemaclaimbillingnotes)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## claim_billing_notes_create

<a id="opIdclaim_billing_notes_create"></a>

> Code samples

```bash
curl https://example.com/api/claim_billing_notes \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/claim_billing_notes`

Create a new billing note

<h3 id="claimbillingnotescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appointment|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "appointment": 0,
  "created_at": "string",
  "created_by": "string",
  "id": 0,
  "text": "string"
}
```

<h3 id="claimbillingnotescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ClaimBillingNotes](#schemaclaimbillingnotes)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## claim_billing_notes_read

<a id="opIdclaim_billing_notes_read"></a>

> Code samples

```bash
curl https://example.com/api/claim_billing_notes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/claim_billing_notes/{id}`

Retrieve an existing billing note

<h3 id="claimbillingnotesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appointment|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "appointment": 0,
  "created_at": "string",
  "created_by": "string",
  "id": 0,
  "text": "string"
}
```

<h3 id="claimbillingnotesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ClaimBillingNotes](#schemaclaimbillingnotes)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## clinical_note_field_types_list

<a id="opIdclinical_note_field_types_list"></a>

> Code samples

```bash
curl https://example.com/api/clinical_note_field_types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/clinical_note_field_types`

Retrieve or search clinical note field types

<h3 id="clinicalnotefieldtypeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|clinical_note_template|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "allowed_values": [
        "string"
      ],
      "archived": true,
      "clinical_note_template": "string",
      "comment": "string",
      "data_type": "string",
      "id": 0,
      "name": "string",
      "required": true
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="clinicalnotefieldtypeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="clinicalnotefieldtypeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SoapNoteLineItemFieldType](#schemasoapnotelineitemfieldtype)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_note_field_types_read

<a id="opIdclinical_note_field_types_read"></a>

> Code samples

```bash
curl https://example.com/api/clinical_note_field_types/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/clinical_note_field_types/{id}`

Retrieve an existing clinial note field type

<h3 id="clinicalnotefieldtypesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|clinical_note_template|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "allowed_values": [
    "string"
  ],
  "archived": true,
  "clinical_note_template": "string",
  "comment": "string",
  "data_type": "string",
  "id": 0,
  "name": "string",
  "required": true
}
```

<h3 id="clinicalnotefieldtypesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SoapNoteLineItemFieldType](#schemasoapnotelineitemfieldtype)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_note_field_values_list

<a id="opIdclinical_note_field_values_list"></a>

> Code samples

```bash
curl https://example.com/api/clinical_note_field_values \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/clinical_note_field_values`

Retrieve or search clinical note field values

<h3 id="clinicalnotefieldvalueslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|clinical_note_field|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|clinical_note_template|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "appointment": 0,
      "clinical_note_field": 0,
      "created_at": "string",
      "id": 0,
      "updated_at": "string",
      "value": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="clinicalnotefieldvalueslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="clinicalnotefieldvalueslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SoapNoteLineItemFieldValue](#schemasoapnotelineitemfieldvalue)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_note_field_values_create

<a id="opIdclinical_note_field_values_create"></a>

> Code samples

```bash
curl https://example.com/api/clinical_note_field_values \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/clinical_note_field_values`

Create clinical note field value

<h3 id="clinicalnotefieldvaluescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clinical_note_field|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|clinical_note_template|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "appointment": 0,
  "clinical_note_field": 0,
  "created_at": "string",
  "id": 0,
  "updated_at": "string",
  "value": "string"
}
```

<h3 id="clinicalnotefieldvaluescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[SoapNoteLineItemFieldValue](#schemasoapnotelineitemfieldvalue)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_note_field_values_read

<a id="opIdclinical_note_field_values_read"></a>

> Code samples

```bash
curl https://example.com/api/clinical_note_field_values/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/clinical_note_field_values/{id}`

Retrieve an existing clinical note field value

<h3 id="clinicalnotefieldvaluesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|clinical_note_field|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|clinical_note_template|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "appointment": 0,
  "clinical_note_field": 0,
  "created_at": "string",
  "id": 0,
  "updated_at": "string",
  "value": "string"
}
```

<h3 id="clinicalnotefieldvaluesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SoapNoteLineItemFieldValue](#schemasoapnotelineitemfieldvalue)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_note_field_values_update

<a id="opIdclinical_note_field_values_update"></a>

> Code samples

```bash
curl https://example.com/api/clinical_note_field_values/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/clinical_note_field_values/{id}`

Update an existing clinical note field value

<h3 id="clinicalnotefieldvaluesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|clinical_note_field|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|clinical_note_template|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="clinicalnotefieldvaluesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_note_field_values_partial_update

<a id="opIdclinical_note_field_values_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/clinical_note_field_values/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/clinical_note_field_values/{id}`

Update an existing clinical note field value

<h3 id="clinicalnotefieldvaluespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|clinical_note_field|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|clinical_note_template|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="clinicalnotefieldvaluespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_note_templates_list

<a id="opIdclinical_note_templates_list"></a>

> Code samples

```bash
curl https://example.com/api/clinical_note_templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/clinical_note_templates`

Retrieve or search clinical note templates

<h3 id="clinicalnotetemplateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "clinical_note_fields": [
        {
          "allowed_values": [
            "string"
          ],
          "archived": true,
          "clinical_note_template": 0,
          "data_type": "string",
          "name": "string",
          "required": true
        }
      ],
      "doctor": "string",
      "id": 0,
      "is_onpatient": true,
      "is_persistent": true,
      "name": "string",
      "order": {
        "on_complete_note": 0,
        "on_ipad": 0
      },
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="clinicalnotetemplateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="clinicalnotetemplateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SoapNoteCustomReport](#schemasoapnotecustomreport)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_note_templates_read

<a id="opIdclinical_note_templates_read"></a>

> Code samples

```bash
curl https://example.com/api/clinical_note_templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/clinical_note_templates/{id}`

Retrieve an existing clinical note tempalte

<h3 id="clinicalnotetemplatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "clinical_note_fields": [
    {
      "allowed_values": [
        "string"
      ],
      "archived": true,
      "clinical_note_template": 0,
      "data_type": "string",
      "name": "string",
      "required": true
    }
  ],
  "doctor": "string",
  "id": 0,
  "is_onpatient": true,
  "is_persistent": true,
  "name": "string",
  "order": {
    "on_complete_note": 0,
    "on_ipad": 0
  },
  "updated_at": "string"
}
```

<h3 id="clinicalnotetemplatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SoapNoteCustomReport](#schemasoapnotecustomreport)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_notes_list

<a id="opIdclinical_notes_list"></a>

> Code samples

```bash
curl https://example.com/api/clinical_notes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/clinical_notes`

<h3 id="clinicalnoteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|date_range|query|string|false|none|
|date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "appointment": "string",
      "archived": true,
      "clinical_note_sections": [
        {
          "clinical_note_template": 0,
          "name": "string",
          "values": [
            {
              "clinical_note_field": 0,
              "id": 0,
              "value": "string"
            }
          ]
        }
      ],
      "patient": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="clinicalnoteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="clinicalnoteslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ClinicalNote](#schemaclinicalnote)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## clinical_notes_read

<a id="opIdclinical_notes_read"></a>

> Code samples

```bash
curl https://example.com/api/clinical_notes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/clinical_notes/{id}`

<h3 id="clinicalnotesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|date_range|query|string|false|none|
|date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "appointment": "string",
  "archived": true,
  "clinical_note_sections": [
    {
      "clinical_note_template": 0,
      "name": "string",
      "values": [
        {
          "clinical_note_field": 0,
          "id": 0,
          "value": "string"
        }
      ]
    }
  ],
  "patient": "string"
}
```

<h3 id="clinicalnotesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ClinicalNote](#schemaclinicalnote)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## consent_forms_list

<a id="opIdconsent_forms_list"></a>

> Code samples

```bash
curl https://example.com/api/consent_forms \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/consent_forms`

Retrieve or search patient consent forms

<h3 id="consentformslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "assign_by_default": true,
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "is_mandatory": true,
      "order": 0,
      "title": "string",
      "updated_at": "string",
      "uri": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="consentformslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="consentformslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ConsentForm](#schemaconsentform)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## consent_forms_create

<a id="opIdconsent_forms_create"></a>

> Code samples

```bash
curl https://example.com/api/consent_forms \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/consent_forms`

Create a patient consent form

<h3 id="consentformscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "assign_by_default": true,
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "is_mandatory": true,
  "order": 0,
  "title": "string",
  "updated_at": "string",
  "uri": "string"
}
```

<h3 id="consentformscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ConsentForm](#schemaconsentform)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## consent_forms_read

<a id="opIdconsent_forms_read"></a>

> Code samples

```bash
curl https://example.com/api/consent_forms/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/consent_forms/{id}`

Retrieve an existing patient consent form

<h3 id="consentformsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "assign_by_default": true,
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "is_mandatory": true,
  "order": 0,
  "title": "string",
  "updated_at": "string",
  "uri": "string"
}
```

<h3 id="consentformsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ConsentForm](#schemaconsentform)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## consent_forms_update

<a id="opIdconsent_forms_update"></a>

> Code samples

```bash
curl https://example.com/api/consent_forms/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/consent_forms/{id}`

Update an existing patient consent form

<h3 id="consentformsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="consentformsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## consent_forms_partial_update

<a id="opIdconsent_forms_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/consent_forms/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/consent_forms/{id}`

Update an existing patient consent form

<h3 id="consentformspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="consentformspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## consent_forms_apply_to_appointment

<a id="opIdconsent_forms_apply_to_appointment"></a>

> Code samples

```bash
curl https://example.com/api/consent_forms/string/apply_to_appointment \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/consent_forms/{id}/apply_to_appointment`

Assign (apply) a consent form to appointment

<h3 id="consentformsapplytoappointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="consentformsapplytoappointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## consent_forms_unapply_from_appointment

<a id="opIdconsent_forms_unapply_from_appointment"></a>

> Code samples

```bash
curl https://example.com/api/consent_forms/string/unapply_from_appointment \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/consent_forms/{id}/unapply_from_appointment`

Unassign (unapply) a consent form from appointment

<h3 id="consentformsunapplyfromappointment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="consentformsunapplyfromappointment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## custom_appointment_fields_list

<a id="opIdcustom_appointment_fields_list"></a>

> Code samples

```bash
curl https://example.com/api/custom_appointment_fields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/custom_appointment_fields`

Retrieve or search custom appointment fields

<h3 id="customappointmentfieldslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "created_at": "string",
      "doctor": "string",
      "field_desc": "string",
      "field_name": "string",
      "id": 0,
      "order": 0,
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="customappointmentfieldslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="customappointmentfieldslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomAppointmentFieldType](#schemacustomappointmentfieldtype)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write settings:read settings:write )
</aside>

## custom_appointment_fields_create

<a id="opIdcustom_appointment_fields_create"></a>

> Code samples

```bash
curl https://example.com/api/custom_appointment_fields \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/custom_appointment_fields`

Create custom appointment fields

<h3 id="customappointmentfieldscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "created_at": "string",
  "doctor": "string",
  "field_desc": "string",
  "field_name": "string",
  "id": 0,
  "order": 0,
  "updated_at": "string"
}
```

<h3 id="customappointmentfieldscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CustomAppointmentFieldType](#schemacustomappointmentfieldtype)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write settings:read settings:write )
</aside>

## custom_appointment_fields_read

<a id="opIdcustom_appointment_fields_read"></a>

> Code samples

```bash
curl https://example.com/api/custom_appointment_fields/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/custom_appointment_fields/{id}`

Retrieve an existing custom appointment field

<h3 id="customappointmentfieldsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "created_at": "string",
  "doctor": "string",
  "field_desc": "string",
  "field_name": "string",
  "id": 0,
  "order": 0,
  "updated_at": "string"
}
```

<h3 id="customappointmentfieldsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomAppointmentFieldType](#schemacustomappointmentfieldtype)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write settings:read settings:write )
</aside>

## custom_appointment_fields_update

<a id="opIdcustom_appointment_fields_update"></a>

> Code samples

```bash
curl https://example.com/api/custom_appointment_fields/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/custom_appointment_fields/{id}`

Update an existing custom appointment field

<h3 id="customappointmentfieldsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="customappointmentfieldsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write settings:read settings:write )
</aside>

## custom_appointment_fields_partial_update

<a id="opIdcustom_appointment_fields_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/custom_appointment_fields/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/custom_appointment_fields/{id}`

Update an existing custom appointment field

<h3 id="customappointmentfieldspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="customappointmentfieldspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write settings:read settings:write )
</aside>

## custom_demographics_list

<a id="opIdcustom_demographics_list"></a>

> Code samples

```bash
curl https://example.com/api/custom_demographics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/custom_demographics`

Retrieve or search custom demographics fields

<h3 id="customdemographicslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "allowed_values": "string",
      "archived": true,
      "description": "string",
      "doctor": 0,
      "id": 0,
      "name": "string",
      "template_name": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="customdemographicslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="customdemographicslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomPatientFieldType](#schemacustompatientfieldtype)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## custom_demographics_create

<a id="opIdcustom_demographics_create"></a>

> Code samples

```bash
curl https://example.com/api/custom_demographics \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/custom_demographics`

Create custom demographics fields

<h3 id="customdemographicscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "allowed_values": "string",
  "archived": true,
  "description": "string",
  "doctor": 0,
  "id": 0,
  "name": "string",
  "template_name": "string"
}
```

<h3 id="customdemographicscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CustomPatientFieldType](#schemacustompatientfieldtype)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## custom_demographics_read

<a id="opIdcustom_demographics_read"></a>

> Code samples

```bash
curl https://example.com/api/custom_demographics/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/custom_demographics/{id}`

Retrieve an existing custom demographics field

<h3 id="customdemographicsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "allowed_values": "string",
  "archived": true,
  "description": "string",
  "doctor": 0,
  "id": 0,
  "name": "string",
  "template_name": "string"
}
```

<h3 id="customdemographicsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomPatientFieldType](#schemacustompatientfieldtype)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## custom_demographics_update

<a id="opIdcustom_demographics_update"></a>

> Code samples

```bash
curl https://example.com/api/custom_demographics/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/custom_demographics/{id}`

Update an existing custom demographics field

<h3 id="customdemographicsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="customdemographicsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## custom_demographics_partial_update

<a id="opIdcustom_demographics_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/custom_demographics/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/custom_demographics/{id}`

Update an existing custom demographics field

<h3 id="customdemographicspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="customdemographicspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## custom_vitals_list

<a id="opIdcustom_vitals_list"></a>

> Code samples

```bash
curl https://example.com/api/custom_vitals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/custom_vitals`

Retrieve or search custom vital types

<h3 id="customvitalslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "allowed_values": [
        "string"
      ],
      "archived": true,
      "data_type": "text",
      "description": "string",
      "doctor": "string",
      "fraction_delimiter": "string",
      "id": 0,
      "is_fraction_field": true,
      "name": "string",
      "unit": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="customvitalslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="customvitalslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomVitalType](#schemacustomvitaltype)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write settings:read settings:write )
</aside>

## custom_vitals_read

<a id="opIdcustom_vitals_read"></a>

> Code samples

```bash
curl https://example.com/api/custom_vitals/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/custom_vitals/{id}`

Retrieve an existing custom vital type

<h3 id="customvitalsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "allowed_values": [
    "string"
  ],
  "archived": true,
  "data_type": "text",
  "description": "string",
  "doctor": "string",
  "fraction_delimiter": "string",
  "id": 0,
  "is_fraction_field": true,
  "name": "string",
  "unit": "string"
}
```

<h3 id="customvitalsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomVitalType](#schemacustomvitaltype)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write settings:read settings:write )
</aside>

## documents_list

<a id="opIddocuments_list"></a>

> Code samples

```bash
curl https://example.com/api/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/documents`

Retrieve or search documents

<h3 id="documentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "date": "string",
      "description": "string",
      "doctor": 0,
      "document": "string",
      "id": 0,
      "metatags": "string",
      "patient": 0,
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="documentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="documentslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ScannedClinicalDocument](#schemascannedclinicaldocument)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## documents_create

<a id="opIddocuments_create"></a>

> Code samples

```bash
curl https://example.com/api/documents \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/documents`

Create documents

<h3 id="documentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "date": "string",
  "description": "string",
  "doctor": 0,
  "document": "string",
  "id": 0,
  "metatags": "string",
  "patient": 0,
  "updated_at": "string"
}
```

<h3 id="documentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ScannedClinicalDocument](#schemascannedclinicaldocument)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## documents_read

<a id="opIddocuments_read"></a>

> Code samples

```bash
curl https://example.com/api/documents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/documents/{id}`

Retrieve an existing appointment template

<h3 id="documentsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "date": "string",
  "description": "string",
  "doctor": 0,
  "document": "string",
  "id": 0,
  "metatags": "string",
  "patient": 0,
  "updated_at": "string"
}
```

<h3 id="documentsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ScannedClinicalDocument](#schemascannedclinicaldocument)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## documents_update

<a id="opIddocuments_update"></a>

> Code samples

```bash
curl https://example.com/api/documents/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/documents/{id}`

Update an existing appointment template

<h3 id="documentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="documentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## documents_delete

<a id="opIddocuments_delete"></a>

> Code samples

```bash
curl https://example.com/api/documents/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/documents/{id}`

Delete an existing appointment template

<h3 id="documentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="documentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## documents_partial_update

<a id="opIddocuments_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/documents/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/documents/{id}`

Update an existing appointment template

<h3 id="documentspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="documentspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## eobs_list

<a id="opIdeobs_list"></a>

> Code samples

```bash
curl https://example.com/api/eobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/eobs`

Retrieve or search EOB objects

<h3 id="eobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "check_date": "string",
      "deposit_date": "string",
      "doctor": 0,
      "id": 0,
      "insurance_payer_id": "string",
      "insurance_payer_name": "string",
      "insurance_payer_trace_number": "string",
      "payment_method": "",
      "posted_date": "string",
      "scanned_eob": "string",
      "total_paid": 0,
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="eobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="eobslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EOBObject](#schemaeobobject)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## eobs_create

<a id="opIdeobs_create"></a>

> Code samples

```bash
curl https://example.com/api/eobs \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/eobs`

Create EOB object

<h3 id="eobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "check_date": "string",
  "deposit_date": "string",
  "doctor": 0,
  "id": 0,
  "insurance_payer_id": "string",
  "insurance_payer_name": "string",
  "insurance_payer_trace_number": "string",
  "payment_method": "",
  "posted_date": "string",
  "scanned_eob": "string",
  "total_paid": 0,
  "updated_at": "string"
}
```

<h3 id="eobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[EOBObject](#schemaeobobject)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## eobs_read

<a id="opIdeobs_read"></a>

> Code samples

```bash
curl https://example.com/api/eobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/eobs/{id}`

Retrieve an existing EOB object

<h3 id="eobsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "check_date": "string",
  "deposit_date": "string",
  "doctor": 0,
  "id": 0,
  "insurance_payer_id": "string",
  "insurance_payer_name": "string",
  "insurance_payer_trace_number": "string",
  "payment_method": "",
  "posted_date": "string",
  "scanned_eob": "string",
  "total_paid": 0,
  "updated_at": "string"
}
```

<h3 id="eobsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EOBObject](#schemaeobobject)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## fee_schedules_list

<a id="opIdfee_schedules_list"></a>

> Code samples

```bash
curl https://example.com/api/fee_schedules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/fee_schedules`

<h3 id="feescheduleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|code|query|string|false|none|
|code_type|query|string|false|none|
|since|query|string|false|none|
|payer_id|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "allowed_amount": 0,
      "base_price": 0,
      "billing_description": "string",
      "cash_price": 0,
      "code": "string",
      "code_type": "CPT",
      "cpt_hcpcs_modifier1": "string",
      "cpt_hcpcs_modifier2": "",
      "cpt_hcpcs_modifier3": "",
      "cpt_hcpcs_modifier4": "",
      "created_at": "string",
      "description": "string",
      "doctor": 0,
      "id": 0,
      "insured_out_of_network_price": 0,
      "insured_price": 0,
      "ndc_code": "string",
      "ndc_quantity": 0,
      "ndc_units": "F2",
      "office": 0,
      "payer_id": "string",
      "picklist_category": "string",
      "plan_name": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="feescheduleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="feescheduleslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DoctorFeeSchedule](#schemadoctorfeeschedule)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## fee_schedules_read

<a id="opIdfee_schedules_read"></a>

> Code samples

```bash
curl https://example.com/api/fee_schedules/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/fee_schedules/{id}`

<h3 id="feeschedulesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|code|query|string|false|none|
|code_type|query|string|false|none|
|since|query|string|false|none|
|payer_id|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "allowed_amount": 0,
  "base_price": 0,
  "billing_description": "string",
  "cash_price": 0,
  "code": "string",
  "code_type": "CPT",
  "cpt_hcpcs_modifier1": "string",
  "cpt_hcpcs_modifier2": "",
  "cpt_hcpcs_modifier3": "",
  "cpt_hcpcs_modifier4": "",
  "created_at": "string",
  "description": "string",
  "doctor": 0,
  "id": 0,
  "insured_out_of_network_price": 0,
  "insured_price": 0,
  "ndc_code": "string",
  "ndc_quantity": 0,
  "ndc_units": "F2",
  "office": 0,
  "payer_id": "string",
  "picklist_category": "string",
  "plan_name": "string",
  "updated_at": "string"
}
```

<h3 id="feeschedulesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DoctorFeeSchedule](#schemadoctorfeeschedule)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## implantable_devices_list

<a id="opIdimplantable_devices_list"></a>

> Code samples

```bash
curl https://example.com/api/implantable_devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/implantable_devices`

Retrieve or search implantable devices

<h3 id="implantabledeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|mu_date|query|string|false|none|
|patient|query|integer|false|none|
|mu_date_range|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "brand_name": "string",
      "company_name": "string",
      "created_at": "string",
      "expiration_date": "string",
      "gmdn_pt_name": "string",
      "id": 0,
      "manufacturing_date": "string",
      "patient": "string",
      "procedure": "string",
      "serial_number": "string",
      "status": "active",
      "udi": "string",
      "updated_at": "string",
      "version_or_model": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="implantabledeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="implantabledeviceslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ImplantableDevice](#schemaimplantabledevice)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## implantable_devices_read

<a id="opIdimplantable_devices_read"></a>

> Code samples

```bash
curl https://example.com/api/implantable_devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/implantable_devices/{id}`

Retrieve an existing implantable device

<h3 id="implantabledevicesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|mu_date|query|string|false|none|
|patient|query|integer|false|none|
|mu_date_range|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "brand_name": "string",
  "company_name": "string",
  "created_at": "string",
  "expiration_date": "string",
  "gmdn_pt_name": "string",
  "id": 0,
  "manufacturing_date": "string",
  "patient": "string",
  "procedure": "string",
  "serial_number": "string",
  "status": "active",
  "udi": "string",
  "updated_at": "string",
  "version_or_model": "string"
}
```

<h3 id="implantabledevicesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImplantableDevice](#schemaimplantabledevice)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## insurances_list

<a id="opIdinsurances_list"></a>

> Code samples

```bash
curl 'https://example.com/api/insurances?payer_type=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/insurances`

<h3 id="insuranceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|payer_type|query|string|true|One of `"emdeon"`, `"gateway"`, `"ihcfa"`|
|term|query|string|false|Search term, which can be either a partial name, partial ID or the state.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "payer_id": "string",
      "payer_name": "string",
      "state": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="insuranceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="insuranceslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Insurance](#schemainsurance)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: user:read user:write )
</aside>

## insurances_read

<a id="opIdinsurances_read"></a>

> Code samples

```bash
curl 'https://example.com/api/insurances/string?payer_type=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/insurances/{id}`

<h3 id="insurancesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|payer_type|query|string|true|One of `"emdeon"`, `"gateway"`, `"ihcfa"`|
|term|query|string|false|Search term, which can be either a partial name, partial ID or the state.|

> Example responses

> 200 Response

```json
{
  "payer_id": "string",
  "payer_name": "string",
  "state": "string"
}
```

<h3 id="insurancesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Insurance](#schemainsurance)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: user:read user:write )
</aside>

## lab_documents_list

<a id="opIdlab_documents_list"></a>

> Code samples

```bash
curl https://example.com/api/lab_documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_documents`

Retrieve or search lab order documents

<h3 id="labdocumentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "document": "string",
      "id": 0,
      "lab_order": 0,
      "timestamp": "string",
      "type": "REQ"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="labdocumentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="labdocumentslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LabOrderDocument](#schemalaborderdocument)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_documents_create

<a id="opIdlab_documents_create"></a>

> Code samples

```bash
curl https://example.com/api/lab_documents \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/lab_documents`

Create lab order documents. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


<h3 id="labdocumentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "document": "string",
  "id": 0,
  "lab_order": 0,
  "timestamp": "string",
  "type": "REQ"
}
```

<h3 id="labdocumentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[LabOrderDocument](#schemalaborderdocument)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_documents_read

<a id="opIdlab_documents_read"></a>

> Code samples

```bash
curl https://example.com/api/lab_documents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_documents/{id}`

Retrieve an existing lab order document

<h3 id="labdocumentsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "document": "string",
  "id": 0,
  "lab_order": 0,
  "timestamp": "string",
  "type": "REQ"
}
```

<h3 id="labdocumentsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LabOrderDocument](#schemalaborderdocument)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_documents_update

<a id="opIdlab_documents_update"></a>

> Code samples

```bash
curl https://example.com/api/lab_documents/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/lab_documents/{id}`

Update an existing lab order document

<h3 id="labdocumentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

<h3 id="labdocumentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_documents_delete

<a id="opIdlab_documents_delete"></a>

> Code samples

```bash
curl https://example.com/api/lab_documents/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/lab_documents/{id}`

Delete an existing lab order document

<h3 id="labdocumentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

<h3 id="labdocumentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_documents_partial_update

<a id="opIdlab_documents_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/lab_documents/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/lab_documents/{id}`

Update an existing lab order document

<h3 id="labdocumentspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

<h3 id="labdocumentspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_orders_list

<a id="opIdlab_orders_list"></a>

> Code samples

```bash
curl https://example.com/api/lab_orders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_orders`

Retrieve or search lab orders

<h3 id="laborderslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "accession_number": "string",
      "doctor": 0,
      "documents": [
        "string"
      ],
      "icd10_codes": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "id": 0,
      "notes": "string",
      "patient": 0,
      "priority": "N",
      "requisition_id": "string",
      "status": "string",
      "sublab": 0,
      "timestamp": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="laborderslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="laborderslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LabOrder](#schemalaborder)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_orders_create

<a id="opIdlab_orders_create"></a>

> Code samples

```bash
curl https://example.com/api/lab_orders \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/lab_orders`

Create lab orders. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


<h3 id="laborderscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "accession_number": "string",
  "doctor": 0,
  "documents": [
    "string"
  ],
  "icd10_codes": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "id": 0,
  "notes": "string",
  "patient": 0,
  "priority": "N",
  "requisition_id": "string",
  "status": "string",
  "sublab": 0,
  "timestamp": "string"
}
```

<h3 id="laborderscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[LabOrder](#schemalaborder)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_orders_read

<a id="opIdlab_orders_read"></a>

> Code samples

```bash
curl https://example.com/api/lab_orders/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_orders/{id}`

Retrieve an existing lab order

<h3 id="labordersread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "accession_number": "string",
  "doctor": 0,
  "documents": [
    "string"
  ],
  "icd10_codes": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "id": 0,
  "notes": "string",
  "patient": 0,
  "priority": "N",
  "requisition_id": "string",
  "status": "string",
  "sublab": 0,
  "timestamp": "string"
}
```

<h3 id="labordersread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LabOrder](#schemalaborder)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_orders_update

<a id="opIdlab_orders_update"></a>

> Code samples

```bash
curl https://example.com/api/lab_orders/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/lab_orders/{id}`

Update an existing lab order

<h3 id="labordersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

<h3 id="labordersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_orders_delete

<a id="opIdlab_orders_delete"></a>

> Code samples

```bash
curl https://example.com/api/lab_orders/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/lab_orders/{id}`

Delete an existing lab order

<h3 id="labordersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

<h3 id="labordersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_orders_partial_update

<a id="opIdlab_orders_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/lab_orders/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/lab_orders/{id}`

Update an existing lab order

<h3 id="laborderspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

<h3 id="laborderspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_orders_summary_list

<a id="opIdlab_orders_summary_list"></a>

> Code samples

```bash
curl https://example.com/api/lab_orders_summary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_orders_summary`

<h3 id="laborderssummarylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "accession_number": "string",
      "doctor": 0,
      "documents": [
        "string"
      ],
      "icd10_codes": [
        {
          "code": "string",
          "description": "string"
        }
      ],
      "id": 0,
      "notes": "string",
      "patient": 0,
      "priority": "N",
      "requisition_id": "string",
      "status": "string",
      "sublab": 0,
      "timestamp": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="laborderssummarylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="laborderssummarylist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LabOrder](#schemalaborder)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## lab_orders_summary_read

<a id="opIdlab_orders_summary_read"></a>

> Code samples

```bash
curl https://example.com/api/lab_orders_summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_orders_summary/{id}`

<h3 id="laborderssummaryread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "accession_number": "string",
  "doctor": 0,
  "documents": [
    "string"
  ],
  "icd10_codes": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "id": 0,
  "notes": "string",
  "patient": 0,
  "priority": "N",
  "requisition_id": "string",
  "status": "string",
  "sublab": 0,
  "timestamp": "string"
}
```

<h3 id="laborderssummaryread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LabOrder](#schemalaborder)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## lab_results_list

<a id="opIdlab_results_list"></a>

> Code samples

```bash
curl https://example.com/api/lab_results \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_results`

Retrieve or search lab results

<h3 id="labresultslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "abnormal_status": "L",
      "comments": "string",
      "document": 0,
      "group_code": "string",
      "id": 0,
      "is_abnormal": "string",
      "lab_order": "string",
      "lab_test": 0,
      "normal_range": "string",
      "observation_code": "string",
      "observation_description": "string",
      "specimen_received": "string",
      "status": "P",
      "test_performed": "string",
      "unit": "string",
      "value": "string",
      "value_is_numeric": true
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="labresultslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="labresultslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LabResult](#schemalabresult)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_results_create

<a id="opIdlab_results_create"></a>

> Code samples

```bash
curl https://example.com/api/lab_results \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/lab_results`

Create lab results. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


<h3 id="labresultscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "abnormal_status": "L",
  "comments": "string",
  "document": 0,
  "group_code": "string",
  "id": 0,
  "is_abnormal": "string",
  "lab_order": "string",
  "lab_test": 0,
  "normal_range": "string",
  "observation_code": "string",
  "observation_description": "string",
  "specimen_received": "string",
  "status": "P",
  "test_performed": "string",
  "unit": "string",
  "value": "string",
  "value_is_numeric": true
}
```

<h3 id="labresultscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[LabResult](#schemalabresult)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_results_read

<a id="opIdlab_results_read"></a>

> Code samples

```bash
curl https://example.com/api/lab_results/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_results/{id}`

Retrieve an existing lab result

<h3 id="labresultsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "abnormal_status": "L",
  "comments": "string",
  "document": 0,
  "group_code": "string",
  "id": 0,
  "is_abnormal": "string",
  "lab_order": "string",
  "lab_test": 0,
  "normal_range": "string",
  "observation_code": "string",
  "observation_description": "string",
  "specimen_received": "string",
  "status": "P",
  "test_performed": "string",
  "unit": "string",
  "value": "string",
  "value_is_numeric": true
}
```

<h3 id="labresultsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LabResult](#schemalabresult)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_results_update

<a id="opIdlab_results_update"></a>

> Code samples

```bash
curl https://example.com/api/lab_results/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/lab_results/{id}`

Update an existing lab result

<h3 id="labresultsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="labresultsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_results_delete

<a id="opIdlab_results_delete"></a>

> Code samples

```bash
curl https://example.com/api/lab_results/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/lab_results/{id}`

Delete an existing lab result

<h3 id="labresultsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="labresultsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_results_partial_update

<a id="opIdlab_results_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/lab_results/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/lab_results/{id}`

Update an existing lab result

<h3 id="labresultspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="labresultspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_tests_list

<a id="opIdlab_tests_list"></a>

> Code samples

```bash
curl https://example.com/api/lab_tests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_tests`

Retrieve or search lab tests

<h3 id="labtestslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "string",
      "collection_date": "string",
      "description": "string",
      "id": 0,
      "internal_notes": "string",
      "lab_order": 0,
      "name": "string",
      "report_notes": "string",
      "specimen_condition": "string",
      "specimen_source": "string",
      "specimen_total_volume": 0,
      "status": "P"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="labtestslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="labtestslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LabTest](#schemalabtest)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_tests_create

<a id="opIdlab_tests_create"></a>

> Code samples

```bash
curl https://example.com/api/lab_tests \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/lab_tests`

Create lab tests. An example lab workflow is as following:

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


<h3 id="labtestscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "code": "string",
  "collection_date": "string",
  "description": "string",
  "id": 0,
  "internal_notes": "string",
  "lab_order": 0,
  "name": "string",
  "report_notes": "string",
  "specimen_condition": "string",
  "specimen_source": "string",
  "specimen_total_volume": 0,
  "status": "P"
}
```

<h3 id="labtestscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[LabTest](#schemalabtest)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_tests_read

<a id="opIdlab_tests_read"></a>

> Code samples

```bash
curl https://example.com/api/lab_tests/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/lab_tests/{id}`

Retrieve an existing lab test

<h3 id="labtestsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "collection_date": "string",
  "description": "string",
  "id": 0,
  "internal_notes": "string",
  "lab_order": 0,
  "name": "string",
  "report_notes": "string",
  "specimen_condition": "string",
  "specimen_source": "string",
  "specimen_total_volume": 0,
  "status": "P"
}
```

<h3 id="labtestsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LabTest](#schemalabtest)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_tests_update

<a id="opIdlab_tests_update"></a>

> Code samples

```bash
curl https://example.com/api/lab_tests/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/lab_tests/{id}`

Update an existing lab test

<h3 id="labtestsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="labtestsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_tests_delete

<a id="opIdlab_tests_delete"></a>

> Code samples

```bash
curl https://example.com/api/lab_tests/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/lab_tests/{id}`

Delete an existing lab test

<h3 id="labtestsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="labtestsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## lab_tests_partial_update

<a id="opIdlab_tests_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/lab_tests/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/lab_tests/{id}`

Update an existing lab test

<h3 id="labtestspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|order|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="labtestspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## medications_list

<a id="opIdmedications_list"></a>

> Code samples

```bash
curl https://example.com/api/medications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/medications`

Retrieve or search patient medications

<h3 id="medicationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "appointment": 0,
      "date_prescribed": "string",
      "date_started_taking": "string",
      "date_stopped_taking": "string",
      "daw": true,
      "dispense_quantity": 0,
      "doctor": 0,
      "dosage_quantity": "string",
      "dosage_units": "string",
      "frequency": "string",
      "id": 0,
      "indication": "string",
      "name": "string",
      "ndc": "string",
      "notes": "string",
      "number_refills": 0,
      "order_status": "",
      "patient": 0,
      "pharmacy_note": "string",
      "prn": true,
      "route": "string",
      "rxnorm": "string",
      "signature_note": "string",
      "status": "active"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="medicationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="medicationslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientDrug](#schemapatientdrug)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## medications_create

<a id="opIdmedications_create"></a>

> Code samples

```bash
curl https://example.com/api/medications \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/medications`

Create patient medications

<h3 id="medicationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "appointment": 0,
  "date_prescribed": "string",
  "date_started_taking": "string",
  "date_stopped_taking": "string",
  "daw": true,
  "dispense_quantity": 0,
  "doctor": 0,
  "dosage_quantity": "string",
  "dosage_units": "string",
  "frequency": "string",
  "id": 0,
  "indication": "string",
  "name": "string",
  "ndc": "string",
  "notes": "string",
  "number_refills": 0,
  "order_status": "",
  "patient": 0,
  "pharmacy_note": "string",
  "prn": true,
  "route": "string",
  "rxnorm": "string",
  "signature_note": "string",
  "status": "active"
}
```

<h3 id="medicationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientDrug](#schemapatientdrug)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## medications_read

<a id="opIdmedications_read"></a>

> Code samples

```bash
curl https://example.com/api/medications/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/medications/{id}`

Retrieve an existing patient medications

<h3 id="medicationsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "appointment": 0,
  "date_prescribed": "string",
  "date_started_taking": "string",
  "date_stopped_taking": "string",
  "daw": true,
  "dispense_quantity": 0,
  "doctor": 0,
  "dosage_quantity": "string",
  "dosage_units": "string",
  "frequency": "string",
  "id": 0,
  "indication": "string",
  "name": "string",
  "ndc": "string",
  "notes": "string",
  "number_refills": 0,
  "order_status": "",
  "patient": 0,
  "pharmacy_note": "string",
  "prn": true,
  "route": "string",
  "rxnorm": "string",
  "signature_note": "string",
  "status": "active"
}
```

<h3 id="medicationsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientDrug](#schemapatientdrug)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## medications_update

<a id="opIdmedications_update"></a>

> Code samples

```bash
curl https://example.com/api/medications/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/medications/{id}`

Update an existing patient medications

<h3 id="medicationsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="medicationsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## medications_partial_update

<a id="opIdmedications_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/medications/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/medications/{id}`

Update an existing patient medications

<h3 id="medicationspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="medicationspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## medications_append_to_pharmacy_note

<a id="opIdmedications_append_to_pharmacy_note"></a>

> Code samples

```bash
curl https://example.com/api/medications/string/append_to_pharmacy_note \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/medications/{id}/append_to_pharmacy_note`

Append a message to the "pharmacy_note" section of the prescription, in a new paragraph

<h3 id="medicationsappendtopharmacynote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="medicationsappendtopharmacynote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_communications_list

<a id="opIdpatient_communications_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_communications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_communications`

Retrieve or search patient communications for CQM

<h3 id="patientcommunicationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "string",
      "code_system": "string",
      "created_at": "string",
      "doctor": 0,
      "effective_time": "string",
      "id": 0,
      "name": "string",
      "patient": 0,
      "value_code": "string",
      "value_code_system": "string",
      "value_name": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientcommunicationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientcommunicationslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientCommunication](#schemapatientcommunication)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_communications_create

<a id="opIdpatient_communications_create"></a>

> Code samples

```bash
curl https://example.com/api/patient_communications \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patient_communications`

Create patient communication for CQM

<h3 id="patientcommunicationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

<h3 id="patientcommunicationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientCommunication](#schemapatientcommunication)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_communications_read

<a id="opIdpatient_communications_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_communications/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_communications/{id}`

Retrieve an existing patient communication for CQM

<h3 id="patientcommunicationsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

<h3 id="patientcommunicationsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientCommunication](#schemapatientcommunication)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_communications_update

<a id="opIdpatient_communications_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_communications/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patient_communications/{id}`

Update an existing patient communication for CQM

<h3 id="patientcommunicationsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientcommunicationsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_communications_partial_update

<a id="opIdpatient_communications_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_communications/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patient_communications/{id}`

Update an existing patient communication for CQM

<h3 id="patientcommunicationspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientcommunicationspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_flag_types_list

<a id="opIdpatient_flag_types_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_flag_types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_flag_types`

Retrieve or search patient flag types

<h3 id="patientflagtypeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "color": "string",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "name": "string",
      "priority": 0,
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientflagtypeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientflagtypeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientFlagType](#schemapatientflagtype)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## patient_flag_types_create

<a id="opIdpatient_flag_types_create"></a>

> Code samples

```bash
curl https://example.com/api/patient_flag_types \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patient_flag_types`

Create patient flag types

<h3 id="patientflagtypescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "color": "string",
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "name": "string",
  "priority": 0,
  "updated_at": "string"
}
```

<h3 id="patientflagtypescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientFlagType](#schemapatientflagtype)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## patient_flag_types_read

<a id="opIdpatient_flag_types_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_flag_types/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_flag_types/{id}`

Retrieve an existing patient flag type

<h3 id="patientflagtypesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "color": "string",
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "name": "string",
  "priority": 0,
  "updated_at": "string"
}
```

<h3 id="patientflagtypesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientFlagType](#schemapatientflagtype)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## patient_flag_types_update

<a id="opIdpatient_flag_types_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_flag_types/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patient_flag_types/{id}`

Update an existing patient flag type

<h3 id="patientflagtypesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="patientflagtypesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## patient_flag_types_partial_update

<a id="opIdpatient_flag_types_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_flag_types/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patient_flag_types/{id}`

Update an existing patient flag type

<h3 id="patientflagtypespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="patientflagtypespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write settings:read settings:write )
</aside>

## patient_interventions_list

<a id="opIdpatient_interventions_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_interventions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_interventions`

Retrieve or search patient interventions for CQM

<h3 id="patientinterventionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "string",
      "code_system": "string",
      "created_at": "string",
      "doctor": 0,
      "effective_time": "string",
      "id": 0,
      "name": "string",
      "patient": 0,
      "value_code": "string",
      "value_code_system": "string",
      "value_name": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientinterventionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientinterventionslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientIntervention](#schemapatientintervention)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_interventions_create

<a id="opIdpatient_interventions_create"></a>

> Code samples

```bash
curl https://example.com/api/patient_interventions \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patient_interventions`

Create patient intervention for CQM

<h3 id="patientinterventionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

<h3 id="patientinterventionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientIntervention](#schemapatientintervention)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_interventions_read

<a id="opIdpatient_interventions_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_interventions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_interventions/{id}`

Retrieve an existing patient intervention for CQM

<h3 id="patientinterventionsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

<h3 id="patientinterventionsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientIntervention](#schemapatientintervention)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_interventions_update

<a id="opIdpatient_interventions_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_interventions/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patient_interventions/{id}`

Update an existing patient intervention for CQM

<h3 id="patientinterventionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientinterventionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_interventions_partial_update

<a id="opIdpatient_interventions_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_interventions/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patient_interventions/{id}`

Update an existing patient intervention for CQM

<h3 id="patientinterventionspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientinterventionspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_lab_results_list

<a id="opIdpatient_lab_results_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_lab_results \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_lab_results`

<h3 id="patientlabresultslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|ordering_doctor|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "string",
      "date_test_performed": "string",
      "doctor_comments": "string",
      "doctor_signoff": true,
      "id": 0,
      "lab_abnormal_flag": "",
      "lab_imported_from_ccr": "string",
      "lab_normal_range": "string",
      "lab_normal_range_units": "string",
      "lab_order_status": "",
      "lab_result_value": "string",
      "lab_result_value_as_float": 0,
      "lab_result_value_units": "string",
      "loinc_code": "string",
      "ordering_doctor": 0,
      "patient": 0,
      "scanned_in_result": "string",
      "title": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientlabresultslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientlabresultslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientLabResultSet](#schemapatientlabresultset)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write patients:read patients:write )
</aside>

## patient_lab_results_create

<a id="opIdpatient_lab_results_create"></a>

> Code samples

```bash
curl https://example.com/api/patient_lab_results \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patient_lab_results`

<h3 id="patientlabresultscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ordering_doctor|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "created_at": "string",
  "date_test_performed": "string",
  "doctor_comments": "string",
  "doctor_signoff": true,
  "id": 0,
  "lab_abnormal_flag": "",
  "lab_imported_from_ccr": "string",
  "lab_normal_range": "string",
  "lab_normal_range_units": "string",
  "lab_order_status": "",
  "lab_result_value": "string",
  "lab_result_value_as_float": 0,
  "lab_result_value_units": "string",
  "loinc_code": "string",
  "ordering_doctor": 0,
  "patient": 0,
  "scanned_in_result": "string",
  "title": "string",
  "updated_at": "string"
}
```

<h3 id="patientlabresultscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientLabResultSet](#schemapatientlabresultset)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write patients:read patients:write )
</aside>

## patient_lab_results_read

<a id="opIdpatient_lab_results_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_lab_results/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_lab_results/{id}`

<h3 id="patientlabresultsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|ordering_doctor|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "string",
  "date_test_performed": "string",
  "doctor_comments": "string",
  "doctor_signoff": true,
  "id": 0,
  "lab_abnormal_flag": "",
  "lab_imported_from_ccr": "string",
  "lab_normal_range": "string",
  "lab_normal_range_units": "string",
  "lab_order_status": "",
  "lab_result_value": "string",
  "lab_result_value_as_float": 0,
  "lab_result_value_units": "string",
  "loinc_code": "string",
  "ordering_doctor": 0,
  "patient": 0,
  "scanned_in_result": "string",
  "title": "string",
  "updated_at": "string"
}
```

<h3 id="patientlabresultsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientLabResultSet](#schemapatientlabresultset)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write patients:read patients:write )
</aside>

## patient_lab_results_update

<a id="opIdpatient_lab_results_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_lab_results/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patient_lab_results/{id}`

<h3 id="patientlabresultsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|ordering_doctor|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientlabresultsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write patients:read patients:write )
</aside>

## patient_lab_results_delete

<a id="opIdpatient_lab_results_delete"></a>

> Code samples

```bash
curl https://example.com/api/patient_lab_results/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/patient_lab_results/{id}`

<h3 id="patientlabresultsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|ordering_doctor|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientlabresultsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write patients:read patients:write )
</aside>

## patient_lab_results_partial_update

<a id="opIdpatient_lab_results_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_lab_results/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patient_lab_results/{id}`

<h3 id="patientlabresultspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|ordering_doctor|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientlabresultspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write patients:read patients:write )
</aside>

## patient_messages_list

<a id="opIdpatient_messages_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_messages`

<h3 id="patientmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attachments": [
        {
          "attachment": "string",
          "created_at": "string",
          "doctor": 0,
          "updated_at": "string"
        }
      ],
      "body": "string",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "message": "string",
      "patient": 0,
      "subject": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientmessageslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientMessage](#schemapatientmessage)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write messages:read messages:write )
</aside>

## patient_messages_create

<a id="opIdpatient_messages_create"></a>

> Code samples

```bash
curl https://example.com/api/patient_messages \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patient_messages`

<h3 id="patientmessagescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "attachments": [
    {
      "attachment": "string",
      "created_at": "string",
      "doctor": 0,
      "updated_at": "string"
    }
  ],
  "body": "string",
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "message": "string",
  "patient": 0,
  "subject": "string",
  "updated_at": "string"
}
```

<h3 id="patientmessagescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientMessage](#schemapatientmessage)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write messages:read messages:write )
</aside>

## patient_messages_read

<a id="opIdpatient_messages_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_messages/{id}`

<h3 id="patientmessagesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "attachment": "string",
      "created_at": "string",
      "doctor": 0,
      "updated_at": "string"
    }
  ],
  "body": "string",
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "message": "string",
  "patient": 0,
  "subject": "string",
  "updated_at": "string"
}
```

<h3 id="patientmessagesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientMessage](#schemapatientmessage)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write messages:read messages:write )
</aside>

## patient_messages_update

<a id="opIdpatient_messages_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_messages/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patient_messages/{id}`

<h3 id="patientmessagesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientmessagesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write messages:read messages:write )
</aside>

## patient_messages_partial_update

<a id="opIdpatient_messages_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_messages/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patient_messages/{id}`

<h3 id="patientmessagespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientmessagespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write messages:read messages:write )
</aside>

## patient_physical_exams_list

<a id="opIdpatient_physical_exams_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_physical_exams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_physical_exams`

Retrieve or search patient physical exams for CQM

<h3 id="patientphysicalexamslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "string",
      "code_system": "string",
      "created_at": "string",
      "doctor": 0,
      "effective_time": "string",
      "id": 0,
      "name": "string",
      "patient": 0,
      "value_code": "string",
      "value_code_system": "string",
      "value_name": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientphysicalexamslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientphysicalexamslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientPhysicalExam](#schemapatientphysicalexam)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_physical_exams_create

<a id="opIdpatient_physical_exams_create"></a>

> Code samples

```bash
curl https://example.com/api/patient_physical_exams \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patient_physical_exams`

Create patient physical exam for CQM

<h3 id="patientphysicalexamscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

<h3 id="patientphysicalexamscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientPhysicalExam](#schemapatientphysicalexam)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_physical_exams_read

<a id="opIdpatient_physical_exams_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_physical_exams/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_physical_exams/{id}`

Retrieve an existing patient physical exam for CQM

<h3 id="patientphysicalexamsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

<h3 id="patientphysicalexamsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientPhysicalExam](#schemapatientphysicalexam)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_physical_exams_update

<a id="opIdpatient_physical_exams_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_physical_exams/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patient_physical_exams/{id}`

Update an existing patient physical exam for CQM

<h3 id="patientphysicalexamsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientphysicalexamsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_physical_exams_partial_update

<a id="opIdpatient_physical_exams_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_physical_exams/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patient_physical_exams/{id}`

Update an existing patient physical exam for CQM

<h3 id="patientphysicalexamspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientphysicalexamspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_risk_assessments_list

<a id="opIdpatient_risk_assessments_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_risk_assessments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_risk_assessments`

<h3 id="patientriskassessmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "string",
      "code_system": "string",
      "created_at": "string",
      "doctor": 0,
      "effective_time": "string",
      "id": 0,
      "name": "string",
      "patient": 0,
      "value_code": "string",
      "value_code_system": "string",
      "value_name": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientriskassessmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientriskassessmentslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientRiskAssessment](#schemapatientriskassessment)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_risk_assessments_create

<a id="opIdpatient_risk_assessments_create"></a>

> Code samples

```bash
curl https://example.com/api/patient_risk_assessments \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patient_risk_assessments`

<h3 id="patientriskassessmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

<h3 id="patientriskassessmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientRiskAssessment](#schemapatientriskassessment)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_risk_assessments_read

<a id="opIdpatient_risk_assessments_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_risk_assessments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_risk_assessments/{id}`

<h3 id="patientriskassessmentsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

<h3 id="patientriskassessmentsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientRiskAssessment](#schemapatientriskassessment)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_risk_assessments_update

<a id="opIdpatient_risk_assessments_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_risk_assessments/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patient_risk_assessments/{id}`

<h3 id="patientriskassessmentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientriskassessmentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_risk_assessments_partial_update

<a id="opIdpatient_risk_assessments_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_risk_assessments/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patient_risk_assessments/{id}`

<h3 id="patientriskassessmentspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="patientriskassessmentspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_vaccine_records_list

<a id="opIdpatient_vaccine_records_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_vaccine_records \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_vaccine_records`

Retrieve or search patient vaccine records

<h3 id="patientvaccinerecordslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|cvx_code|query|string|false|none|
|patient|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "administered_at": 0,
      "administered_by": "string",
      "administration_start": "string",
      "amount": 0,
      "comments": "string",
      "completion_status": "CP",
      "consent_form": 0,
      "cpt_code": "string",
      "created_at": "string",
      "cvx_code": "string",
      "doses": [
        {
          "id": 0,
          "max_age_months": 0,
          "min_age_months": 0,
          "title": "string"
        }
      ],
      "entered_by": "string",
      "funding_eligibility": "V01",
      "id": 0,
      "name": "string",
      "next_dose_date": "string",
      "observed_immunity": "398102009",
      "ordering_doctor": 0,
      "patient": 0,
      "record_source": "00",
      "route": "string",
      "site": "string",
      "units": "string",
      "updated_at": "string",
      "vaccine_inventory": 0,
      "vis": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientvaccinerecordslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientvaccinerecordslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientVaccineRecord](#schemapatientvaccinerecord)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_vaccine_records_create

<a id="opIdpatient_vaccine_records_create"></a>

> Code samples

```bash
curl https://example.com/api/patient_vaccine_records \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patient_vaccine_records`

Create patient vaccine records

<h3 id="patientvaccinerecordscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cvx_code|query|string|false|none|
|patient|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "administered_at": 0,
  "administered_by": "string",
  "administration_start": "string",
  "amount": 0,
  "comments": "string",
  "completion_status": "CP",
  "consent_form": 0,
  "cpt_code": "string",
  "created_at": "string",
  "cvx_code": "string",
  "doses": [
    {
      "id": 0,
      "max_age_months": 0,
      "min_age_months": 0,
      "title": "string"
    }
  ],
  "entered_by": "string",
  "funding_eligibility": "V01",
  "id": 0,
  "name": "string",
  "next_dose_date": "string",
  "observed_immunity": "398102009",
  "ordering_doctor": 0,
  "patient": 0,
  "record_source": "00",
  "route": "string",
  "site": "string",
  "units": "string",
  "updated_at": "string",
  "vaccine_inventory": 0,
  "vis": "string"
}
```

<h3 id="patientvaccinerecordscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientVaccineRecord](#schemapatientvaccinerecord)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_vaccine_records_read

<a id="opIdpatient_vaccine_records_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_vaccine_records/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_vaccine_records/{id}`

Retrieve an existing patient vaccine records

<h3 id="patientvaccinerecordsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|cvx_code|query|string|false|none|
|patient|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "administered_at": 0,
  "administered_by": "string",
  "administration_start": "string",
  "amount": 0,
  "comments": "string",
  "completion_status": "CP",
  "consent_form": 0,
  "cpt_code": "string",
  "created_at": "string",
  "cvx_code": "string",
  "doses": [
    {
      "id": 0,
      "max_age_months": 0,
      "min_age_months": 0,
      "title": "string"
    }
  ],
  "entered_by": "string",
  "funding_eligibility": "V01",
  "id": 0,
  "name": "string",
  "next_dose_date": "string",
  "observed_immunity": "398102009",
  "ordering_doctor": 0,
  "patient": 0,
  "record_source": "00",
  "route": "string",
  "site": "string",
  "units": "string",
  "updated_at": "string",
  "vaccine_inventory": 0,
  "vis": "string"
}
```

<h3 id="patientvaccinerecordsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientVaccineRecord](#schemapatientvaccinerecord)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_vaccine_records_update

<a id="opIdpatient_vaccine_records_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_vaccine_records/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patient_vaccine_records/{id}`

Update an existing patient vaccine records

<h3 id="patientvaccinerecordsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|cvx_code|query|string|false|none|
|patient|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

<h3 id="patientvaccinerecordsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patient_vaccine_records_partial_update

<a id="opIdpatient_vaccine_records_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patient_vaccine_records/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patient_vaccine_records/{id}`

Update an existing patient vaccine records

<h3 id="patientvaccinerecordspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|cvx_code|query|string|false|none|
|patient|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

<h3 id="patientvaccinerecordspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## patients_list

<a id="opIdpatients_list"></a>

> Code samples

```bash
curl https://example.com/api/patients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patients`

Retrieve or search patients

<h3 id="patientslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "address": "string",
      "auto_accident_insurance": {
        "auto_accident_case_number": "string",
        "auto_accident_claim_rep_address": "string",
        "auto_accident_claim_rep_city": "string",
        "auto_accident_claim_rep_is_insurer": true,
        "auto_accident_claim_rep_name": "string",
        "auto_accident_claim_rep_state": "AL",
        "auto_accident_claim_rep_zip": "string",
        "auto_accident_company": "string",
        "auto_accident_date_of_accident": "string",
        "auto_accident_disabled_from_date": "string",
        "auto_accident_disabled_to_date": "string",
        "auto_accident_had_similar_condition": true,
        "auto_accident_is_subscriber_the_patient": true,
        "auto_accident_notes": "string",
        "auto_accident_patient_relationship_to_subscriber": "",
        "auto_accident_payer_address": "string",
        "auto_accident_payer_city": "string",
        "auto_accident_payer_id": "string",
        "auto_accident_payer_state": "AL",
        "auto_accident_payer_zip": "string",
        "auto_accident_policy_number": "string",
        "auto_accident_return_to_work_date": "string",
        "auto_accident_significant_injury": "YES",
        "auto_accident_significant_injury_notes": "string",
        "auto_accident_similar_condition_date": "string",
        "auto_accident_similar_condition_notes": "string",
        "auto_accident_state_of_occurrence": "AL",
        "auto_accident_still_under_care": true,
        "auto_accident_subscriber_address": "string",
        "auto_accident_subscriber_city": "string",
        "auto_accident_subscriber_date_of_birth": "string",
        "auto_accident_subscriber_first_name": "string",
        "auto_accident_subscriber_last_name": "string",
        "auto_accident_subscriber_middle_name": "string",
        "auto_accident_subscriber_phone_number": "string",
        "auto_accident_subscriber_social_security": "string",
        "auto_accident_subscriber_state": "AL",
        "auto_accident_subscriber_suffix": "string",
        "auto_accident_subscriber_zip_code": "string",
        "auto_accident_treatment_duration": "string",
        "auto_accident_will_require_therapy": true,
        "auto_accident_will_require_therapy_rec": "string"
      },
      "cell_phone": "string",
      "chart_id": "string",
      "city": "string",
      "copay": "string",
      "custom_demographics": [
        {
          "field_type": 0,
          "updated_at": "string",
          "value": "string"
        }
      ],
      "date_of_birth": "string",
      "date_of_first_appointment": "string",
      "date_of_last_appointment": "string",
      "default_pharmacy": "string",
      "disable_sms_messages": true,
      "doctor": 0,
      "email": "string",
      "emergency_contact_name": "string",
      "emergency_contact_phone": "string",
      "emergency_contact_relation": "string",
      "employer": "string",
      "employer_address": "string",
      "employer_city": "string",
      "employer_state": "string",
      "employer_zip_code": "string",
      "ethnicity": "blank",
      "first_name": "string",
      "gender": "",
      "home_phone": "string",
      "id": 0,
      "last_name": "string",
      "middle_name": "string",
      "nick_name": "string",
      "office_phone": "string",
      "offices": [
        0
      ],
      "patient_flags": [
        {
          "archived": true,
          "color": "string",
          "created_at": "string",
          "doctor": 0,
          "id": 0,
          "name": "string",
          "priority": 0,
          "updated_at": "string"
        }
      ],
      "patient_flags_attached": [
        {
          "archived": true,
          "created_at": "string",
          "flag_text": "string",
          "flag_type": 0,
          "id": 0,
          "updated_at": "string"
        }
      ],
      "patient_payment_profile": "",
      "patient_photo": "string",
      "patient_photo_date": "string",
      "patient_status": "A",
      "preferred_language": "blank",
      "primary_care_physician": "string",
      "primary_insurance": {
        "insurance_claim_office_number": "string",
        "insurance_company": "string",
        "insurance_group_name": "string",
        "insurance_group_number": "string",
        "insurance_id_number": "string",
        "insurance_payer_id": "string",
        "insurance_plan_name": "string",
        "insurance_plan_type": "",
        "is_subscriber_the_patient": true,
        "patient_relationship_to_subscriber": "",
        "photo_back": "string",
        "photo_front": "string",
        "subscriber_address": "string",
        "subscriber_city": "string",
        "subscriber_country": "",
        "subscriber_date_of_birth": "string",
        "subscriber_first_name": "string",
        "subscriber_gender": "",
        "subscriber_last_name": "string",
        "subscriber_middle_name": "string",
        "subscriber_social_security": "string",
        "subscriber_state": "AL",
        "subscriber_suffix": "string",
        "subscriber_zip_code": "string"
      },
      "race": "blank",
      "referring_doctor": {
        "address": "string",
        "email": "string",
        "fax": "string",
        "first_name": "string",
        "last_name": "string",
        "middle_name": "string",
        "npi": "string",
        "phone": "string",
        "provider_number": "string",
        "provider_qualifier": "",
        "specialty": "",
        "suffix": "string"
      },
      "referring_source": "string",
      "responsible_party_email": "string",
      "responsible_party_name": "string",
      "responsible_party_phone": "string",
      "responsible_party_relation": "string",
      "secondary_insurance": {
        "insurance_claim_office_number": "string",
        "insurance_company": "string",
        "insurance_group_name": "string",
        "insurance_group_number": "string",
        "insurance_id_number": "string",
        "insurance_payer_id": "string",
        "insurance_plan_name": "string",
        "insurance_plan_type": "",
        "is_subscriber_the_patient": true,
        "patient_relationship_to_subscriber": "",
        "photo_back": "string",
        "photo_front": "string",
        "subscriber_address": "string",
        "subscriber_city": "string",
        "subscriber_country": "",
        "subscriber_date_of_birth": "string",
        "subscriber_first_name": "string",
        "subscriber_gender": "",
        "subscriber_last_name": "string",
        "subscriber_middle_name": "string",
        "subscriber_social_security": "string",
        "subscriber_state": "AL",
        "subscriber_suffix": "string",
        "subscriber_zip_code": "string"
      },
      "social_security_number": "string",
      "state": "string",
      "tertiary_insurance": {
        "insurance_claim_office_number": "string",
        "insurance_company": "string",
        "insurance_group_name": "string",
        "insurance_group_number": "string",
        "insurance_id_number": "string",
        "insurance_payer_id": "string",
        "insurance_plan_name": "string",
        "insurance_plan_type": "",
        "is_subscriber_the_patient": true,
        "patient_relationship_to_subscriber": "",
        "photo_back": "string",
        "photo_front": "string",
        "subscriber_address": "string",
        "subscriber_city": "string",
        "subscriber_country": "",
        "subscriber_date_of_birth": "string",
        "subscriber_first_name": "string",
        "subscriber_gender": "",
        "subscriber_last_name": "string",
        "subscriber_middle_name": "string",
        "subscriber_social_security": "string",
        "subscriber_state": "AL",
        "subscriber_suffix": "string",
        "subscriber_zip_code": "string"
      },
      "updated_at": "string",
      "workers_comp_insurance": {
        "property_and_casualty_agency_claim_number": "string",
        "workers_comp_carrier_code": "string",
        "workers_comp_case_number": "string",
        "workers_comp_company": "string",
        "workers_comp_date_of_accident": "string",
        "workers_comp_group_name": "string",
        "workers_comp_group_number": "string",
        "workers_comp_notes": "string",
        "workers_comp_payer_address": "string",
        "workers_comp_payer_city": "string",
        "workers_comp_payer_id": "string",
        "workers_comp_payer_state": "AL",
        "workers_comp_payer_zip": "string",
        "workers_comp_state_of_occurrence": "AL",
        "workers_comp_wcb": "string",
        "workers_comp_wcb_rating_code": "string"
      },
      "zip_code": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Patient](#schemapatient)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_create

<a id="opIdpatients_create"></a>

> Code samples

```bash
curl https://example.com/api/patients \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patients`

Create patient

<h3 id="patientscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "address": "string",
  "auto_accident_insurance": {
    "auto_accident_case_number": "string",
    "auto_accident_claim_rep_address": "string",
    "auto_accident_claim_rep_city": "string",
    "auto_accident_claim_rep_is_insurer": true,
    "auto_accident_claim_rep_name": "string",
    "auto_accident_claim_rep_state": "AL",
    "auto_accident_claim_rep_zip": "string",
    "auto_accident_company": "string",
    "auto_accident_date_of_accident": "string",
    "auto_accident_disabled_from_date": "string",
    "auto_accident_disabled_to_date": "string",
    "auto_accident_had_similar_condition": true,
    "auto_accident_is_subscriber_the_patient": true,
    "auto_accident_notes": "string",
    "auto_accident_patient_relationship_to_subscriber": "",
    "auto_accident_payer_address": "string",
    "auto_accident_payer_city": "string",
    "auto_accident_payer_id": "string",
    "auto_accident_payer_state": "AL",
    "auto_accident_payer_zip": "string",
    "auto_accident_policy_number": "string",
    "auto_accident_return_to_work_date": "string",
    "auto_accident_significant_injury": "YES",
    "auto_accident_significant_injury_notes": "string",
    "auto_accident_similar_condition_date": "string",
    "auto_accident_similar_condition_notes": "string",
    "auto_accident_state_of_occurrence": "AL",
    "auto_accident_still_under_care": true,
    "auto_accident_subscriber_address": "string",
    "auto_accident_subscriber_city": "string",
    "auto_accident_subscriber_date_of_birth": "string",
    "auto_accident_subscriber_first_name": "string",
    "auto_accident_subscriber_last_name": "string",
    "auto_accident_subscriber_middle_name": "string",
    "auto_accident_subscriber_phone_number": "string",
    "auto_accident_subscriber_social_security": "string",
    "auto_accident_subscriber_state": "AL",
    "auto_accident_subscriber_suffix": "string",
    "auto_accident_subscriber_zip_code": "string",
    "auto_accident_treatment_duration": "string",
    "auto_accident_will_require_therapy": true,
    "auto_accident_will_require_therapy_rec": "string"
  },
  "cell_phone": "string",
  "chart_id": "string",
  "city": "string",
  "copay": "string",
  "custom_demographics": [
    {
      "field_type": 0,
      "updated_at": "string",
      "value": "string"
    }
  ],
  "date_of_birth": "string",
  "date_of_first_appointment": "string",
  "date_of_last_appointment": "string",
  "default_pharmacy": "string",
  "disable_sms_messages": true,
  "doctor": 0,
  "email": "string",
  "emergency_contact_name": "string",
  "emergency_contact_phone": "string",
  "emergency_contact_relation": "string",
  "employer": "string",
  "employer_address": "string",
  "employer_city": "string",
  "employer_state": "string",
  "employer_zip_code": "string",
  "ethnicity": "blank",
  "first_name": "string",
  "gender": "",
  "home_phone": "string",
  "id": 0,
  "last_name": "string",
  "middle_name": "string",
  "nick_name": "string",
  "office_phone": "string",
  "offices": [
    0
  ],
  "patient_flags": [
    {
      "archived": true,
      "color": "string",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "name": "string",
      "priority": 0,
      "updated_at": "string"
    }
  ],
  "patient_flags_attached": [
    {
      "archived": true,
      "created_at": "string",
      "flag_text": "string",
      "flag_type": 0,
      "id": 0,
      "updated_at": "string"
    }
  ],
  "patient_payment_profile": "",
  "patient_photo": "string",
  "patient_photo_date": "string",
  "patient_status": "A",
  "preferred_language": "blank",
  "primary_care_physician": "string",
  "primary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "race": "blank",
  "referring_doctor": {
    "address": "string",
    "email": "string",
    "fax": "string",
    "first_name": "string",
    "last_name": "string",
    "middle_name": "string",
    "npi": "string",
    "phone": "string",
    "provider_number": "string",
    "provider_qualifier": "",
    "specialty": "",
    "suffix": "string"
  },
  "referring_source": "string",
  "responsible_party_email": "string",
  "responsible_party_name": "string",
  "responsible_party_phone": "string",
  "responsible_party_relation": "string",
  "secondary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "social_security_number": "string",
  "state": "string",
  "tertiary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "updated_at": "string",
  "workers_comp_insurance": {
    "property_and_casualty_agency_claim_number": "string",
    "workers_comp_carrier_code": "string",
    "workers_comp_case_number": "string",
    "workers_comp_company": "string",
    "workers_comp_date_of_accident": "string",
    "workers_comp_group_name": "string",
    "workers_comp_group_number": "string",
    "workers_comp_notes": "string",
    "workers_comp_payer_address": "string",
    "workers_comp_payer_city": "string",
    "workers_comp_payer_id": "string",
    "workers_comp_payer_state": "AL",
    "workers_comp_payer_zip": "string",
    "workers_comp_state_of_occurrence": "AL",
    "workers_comp_wcb": "string",
    "workers_comp_wcb_rating_code": "string"
  },
  "zip_code": "string"
}
```

<h3 id="patientscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Patient](#schemapatient)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_read

<a id="opIdpatients_read"></a>

> Code samples

```bash
curl https://example.com/api/patients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patients/{id}`

Retrieve an existing patient

<h3 id="patientsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "auto_accident_insurance": {
    "auto_accident_case_number": "string",
    "auto_accident_claim_rep_address": "string",
    "auto_accident_claim_rep_city": "string",
    "auto_accident_claim_rep_is_insurer": true,
    "auto_accident_claim_rep_name": "string",
    "auto_accident_claim_rep_state": "AL",
    "auto_accident_claim_rep_zip": "string",
    "auto_accident_company": "string",
    "auto_accident_date_of_accident": "string",
    "auto_accident_disabled_from_date": "string",
    "auto_accident_disabled_to_date": "string",
    "auto_accident_had_similar_condition": true,
    "auto_accident_is_subscriber_the_patient": true,
    "auto_accident_notes": "string",
    "auto_accident_patient_relationship_to_subscriber": "",
    "auto_accident_payer_address": "string",
    "auto_accident_payer_city": "string",
    "auto_accident_payer_id": "string",
    "auto_accident_payer_state": "AL",
    "auto_accident_payer_zip": "string",
    "auto_accident_policy_number": "string",
    "auto_accident_return_to_work_date": "string",
    "auto_accident_significant_injury": "YES",
    "auto_accident_significant_injury_notes": "string",
    "auto_accident_similar_condition_date": "string",
    "auto_accident_similar_condition_notes": "string",
    "auto_accident_state_of_occurrence": "AL",
    "auto_accident_still_under_care": true,
    "auto_accident_subscriber_address": "string",
    "auto_accident_subscriber_city": "string",
    "auto_accident_subscriber_date_of_birth": "string",
    "auto_accident_subscriber_first_name": "string",
    "auto_accident_subscriber_last_name": "string",
    "auto_accident_subscriber_middle_name": "string",
    "auto_accident_subscriber_phone_number": "string",
    "auto_accident_subscriber_social_security": "string",
    "auto_accident_subscriber_state": "AL",
    "auto_accident_subscriber_suffix": "string",
    "auto_accident_subscriber_zip_code": "string",
    "auto_accident_treatment_duration": "string",
    "auto_accident_will_require_therapy": true,
    "auto_accident_will_require_therapy_rec": "string"
  },
  "cell_phone": "string",
  "chart_id": "string",
  "city": "string",
  "copay": "string",
  "custom_demographics": [
    {
      "field_type": 0,
      "updated_at": "string",
      "value": "string"
    }
  ],
  "date_of_birth": "string",
  "date_of_first_appointment": "string",
  "date_of_last_appointment": "string",
  "default_pharmacy": "string",
  "disable_sms_messages": true,
  "doctor": 0,
  "email": "string",
  "emergency_contact_name": "string",
  "emergency_contact_phone": "string",
  "emergency_contact_relation": "string",
  "employer": "string",
  "employer_address": "string",
  "employer_city": "string",
  "employer_state": "string",
  "employer_zip_code": "string",
  "ethnicity": "blank",
  "first_name": "string",
  "gender": "",
  "home_phone": "string",
  "id": 0,
  "last_name": "string",
  "middle_name": "string",
  "nick_name": "string",
  "office_phone": "string",
  "offices": [
    0
  ],
  "patient_flags": [
    {
      "archived": true,
      "color": "string",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "name": "string",
      "priority": 0,
      "updated_at": "string"
    }
  ],
  "patient_flags_attached": [
    {
      "archived": true,
      "created_at": "string",
      "flag_text": "string",
      "flag_type": 0,
      "id": 0,
      "updated_at": "string"
    }
  ],
  "patient_payment_profile": "",
  "patient_photo": "string",
  "patient_photo_date": "string",
  "patient_status": "A",
  "preferred_language": "blank",
  "primary_care_physician": "string",
  "primary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "race": "blank",
  "referring_doctor": {
    "address": "string",
    "email": "string",
    "fax": "string",
    "first_name": "string",
    "last_name": "string",
    "middle_name": "string",
    "npi": "string",
    "phone": "string",
    "provider_number": "string",
    "provider_qualifier": "",
    "specialty": "",
    "suffix": "string"
  },
  "referring_source": "string",
  "responsible_party_email": "string",
  "responsible_party_name": "string",
  "responsible_party_phone": "string",
  "responsible_party_relation": "string",
  "secondary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "social_security_number": "string",
  "state": "string",
  "tertiary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "updated_at": "string",
  "workers_comp_insurance": {
    "property_and_casualty_agency_claim_number": "string",
    "workers_comp_carrier_code": "string",
    "workers_comp_case_number": "string",
    "workers_comp_company": "string",
    "workers_comp_date_of_accident": "string",
    "workers_comp_group_name": "string",
    "workers_comp_group_number": "string",
    "workers_comp_notes": "string",
    "workers_comp_payer_address": "string",
    "workers_comp_payer_city": "string",
    "workers_comp_payer_id": "string",
    "workers_comp_payer_state": "AL",
    "workers_comp_payer_zip": "string",
    "workers_comp_state_of_occurrence": "AL",
    "workers_comp_wcb": "string",
    "workers_comp_wcb_rating_code": "string"
  },
  "zip_code": "string"
}
```

<h3 id="patientsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Patient](#schemapatient)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_update

<a id="opIdpatients_update"></a>

> Code samples

```bash
curl https://example.com/api/patients/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patients/{id}`

Update an existing patient

<h3 id="patientsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

<h3 id="patientsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_delete

<a id="opIdpatients_delete"></a>

> Code samples

```bash
curl https://example.com/api/patients/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/patients/{id}`

Delete an existing patient

<h3 id="patientsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

<h3 id="patientsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_partial_update

<a id="opIdpatients_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patients/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patients/{id}`

Update an existing patient

<h3 id="patientspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

<h3 id="patientspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_ccda

<a id="opIdpatients_ccda"></a>

> Code samples

```bash
curl https://example.com/api/patients/string/ccda \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patients/{id}/ccda`

Retrieve patient CCDA

<h3 id="patientsccda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

<h3 id="patientsccda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_onpatient_access_read

<a id="opIdpatients_onpatient_access_read"></a>

> Code samples

```bash
curl https://example.com/api/patients/string/onpatient_access \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patients/{id}/onpatient_access`

Retrieve or search existing onpatient access invites

<h3 id="patientsonpatientaccessread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "auto_accident_insurance": {
    "auto_accident_case_number": "string",
    "auto_accident_claim_rep_address": "string",
    "auto_accident_claim_rep_city": "string",
    "auto_accident_claim_rep_is_insurer": true,
    "auto_accident_claim_rep_name": "string",
    "auto_accident_claim_rep_state": "AL",
    "auto_accident_claim_rep_zip": "string",
    "auto_accident_company": "string",
    "auto_accident_date_of_accident": "string",
    "auto_accident_disabled_from_date": "string",
    "auto_accident_disabled_to_date": "string",
    "auto_accident_had_similar_condition": true,
    "auto_accident_is_subscriber_the_patient": true,
    "auto_accident_notes": "string",
    "auto_accident_patient_relationship_to_subscriber": "",
    "auto_accident_payer_address": "string",
    "auto_accident_payer_city": "string",
    "auto_accident_payer_id": "string",
    "auto_accident_payer_state": "AL",
    "auto_accident_payer_zip": "string",
    "auto_accident_policy_number": "string",
    "auto_accident_return_to_work_date": "string",
    "auto_accident_significant_injury": "YES",
    "auto_accident_significant_injury_notes": "string",
    "auto_accident_similar_condition_date": "string",
    "auto_accident_similar_condition_notes": "string",
    "auto_accident_state_of_occurrence": "AL",
    "auto_accident_still_under_care": true,
    "auto_accident_subscriber_address": "string",
    "auto_accident_subscriber_city": "string",
    "auto_accident_subscriber_date_of_birth": "string",
    "auto_accident_subscriber_first_name": "string",
    "auto_accident_subscriber_last_name": "string",
    "auto_accident_subscriber_middle_name": "string",
    "auto_accident_subscriber_phone_number": "string",
    "auto_accident_subscriber_social_security": "string",
    "auto_accident_subscriber_state": "AL",
    "auto_accident_subscriber_suffix": "string",
    "auto_accident_subscriber_zip_code": "string",
    "auto_accident_treatment_duration": "string",
    "auto_accident_will_require_therapy": true,
    "auto_accident_will_require_therapy_rec": "string"
  },
  "cell_phone": "string",
  "chart_id": "string",
  "city": "string",
  "copay": "string",
  "custom_demographics": [
    {
      "field_type": 0,
      "updated_at": "string",
      "value": "string"
    }
  ],
  "date_of_birth": "string",
  "date_of_first_appointment": "string",
  "date_of_last_appointment": "string",
  "default_pharmacy": "string",
  "disable_sms_messages": true,
  "doctor": 0,
  "email": "string",
  "emergency_contact_name": "string",
  "emergency_contact_phone": "string",
  "emergency_contact_relation": "string",
  "employer": "string",
  "employer_address": "string",
  "employer_city": "string",
  "employer_state": "string",
  "employer_zip_code": "string",
  "ethnicity": "blank",
  "first_name": "string",
  "gender": "",
  "home_phone": "string",
  "id": 0,
  "last_name": "string",
  "middle_name": "string",
  "nick_name": "string",
  "office_phone": "string",
  "offices": [
    0
  ],
  "patient_flags": [
    {
      "archived": true,
      "color": "string",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "name": "string",
      "priority": 0,
      "updated_at": "string"
    }
  ],
  "patient_flags_attached": [
    {
      "archived": true,
      "created_at": "string",
      "flag_text": "string",
      "flag_type": 0,
      "id": 0,
      "updated_at": "string"
    }
  ],
  "patient_payment_profile": "",
  "patient_photo": "string",
  "patient_photo_date": "string",
  "patient_status": "A",
  "preferred_language": "blank",
  "primary_care_physician": "string",
  "primary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "race": "blank",
  "referring_doctor": {
    "address": "string",
    "email": "string",
    "fax": "string",
    "first_name": "string",
    "last_name": "string",
    "middle_name": "string",
    "npi": "string",
    "phone": "string",
    "provider_number": "string",
    "provider_qualifier": "",
    "specialty": "",
    "suffix": "string"
  },
  "referring_source": "string",
  "responsible_party_email": "string",
  "responsible_party_name": "string",
  "responsible_party_phone": "string",
  "responsible_party_relation": "string",
  "secondary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "social_security_number": "string",
  "state": "string",
  "tertiary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "updated_at": "string",
  "workers_comp_insurance": {
    "property_and_casualty_agency_claim_number": "string",
    "workers_comp_carrier_code": "string",
    "workers_comp_case_number": "string",
    "workers_comp_company": "string",
    "workers_comp_date_of_accident": "string",
    "workers_comp_group_name": "string",
    "workers_comp_group_number": "string",
    "workers_comp_notes": "string",
    "workers_comp_payer_address": "string",
    "workers_comp_payer_city": "string",
    "workers_comp_payer_id": "string",
    "workers_comp_payer_state": "AL",
    "workers_comp_payer_zip": "string",
    "workers_comp_state_of_occurrence": "AL",
    "workers_comp_wcb": "string",
    "workers_comp_wcb_rating_code": "string"
  },
  "zip_code": "string"
}
```

<h3 id="patientsonpatientaccessread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Patient](#schemapatient)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_onpatient_access_create

<a id="opIdpatients_onpatient_access_create"></a>

> Code samples

```bash
curl https://example.com/api/patients/string/onpatient_access \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patients/{id}/onpatient_access`

Send new onpatient invite to patient

<h3 id="patientsonpatientaccesscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "address": "string",
  "auto_accident_insurance": {
    "auto_accident_case_number": "string",
    "auto_accident_claim_rep_address": "string",
    "auto_accident_claim_rep_city": "string",
    "auto_accident_claim_rep_is_insurer": true,
    "auto_accident_claim_rep_name": "string",
    "auto_accident_claim_rep_state": "AL",
    "auto_accident_claim_rep_zip": "string",
    "auto_accident_company": "string",
    "auto_accident_date_of_accident": "string",
    "auto_accident_disabled_from_date": "string",
    "auto_accident_disabled_to_date": "string",
    "auto_accident_had_similar_condition": true,
    "auto_accident_is_subscriber_the_patient": true,
    "auto_accident_notes": "string",
    "auto_accident_patient_relationship_to_subscriber": "",
    "auto_accident_payer_address": "string",
    "auto_accident_payer_city": "string",
    "auto_accident_payer_id": "string",
    "auto_accident_payer_state": "AL",
    "auto_accident_payer_zip": "string",
    "auto_accident_policy_number": "string",
    "auto_accident_return_to_work_date": "string",
    "auto_accident_significant_injury": "YES",
    "auto_accident_significant_injury_notes": "string",
    "auto_accident_similar_condition_date": "string",
    "auto_accident_similar_condition_notes": "string",
    "auto_accident_state_of_occurrence": "AL",
    "auto_accident_still_under_care": true,
    "auto_accident_subscriber_address": "string",
    "auto_accident_subscriber_city": "string",
    "auto_accident_subscriber_date_of_birth": "string",
    "auto_accident_subscriber_first_name": "string",
    "auto_accident_subscriber_last_name": "string",
    "auto_accident_subscriber_middle_name": "string",
    "auto_accident_subscriber_phone_number": "string",
    "auto_accident_subscriber_social_security": "string",
    "auto_accident_subscriber_state": "AL",
    "auto_accident_subscriber_suffix": "string",
    "auto_accident_subscriber_zip_code": "string",
    "auto_accident_treatment_duration": "string",
    "auto_accident_will_require_therapy": true,
    "auto_accident_will_require_therapy_rec": "string"
  },
  "cell_phone": "string",
  "chart_id": "string",
  "city": "string",
  "copay": "string",
  "custom_demographics": [
    {
      "field_type": 0,
      "updated_at": "string",
      "value": "string"
    }
  ],
  "date_of_birth": "string",
  "date_of_first_appointment": "string",
  "date_of_last_appointment": "string",
  "default_pharmacy": "string",
  "disable_sms_messages": true,
  "doctor": 0,
  "email": "string",
  "emergency_contact_name": "string",
  "emergency_contact_phone": "string",
  "emergency_contact_relation": "string",
  "employer": "string",
  "employer_address": "string",
  "employer_city": "string",
  "employer_state": "string",
  "employer_zip_code": "string",
  "ethnicity": "blank",
  "first_name": "string",
  "gender": "",
  "home_phone": "string",
  "id": 0,
  "last_name": "string",
  "middle_name": "string",
  "nick_name": "string",
  "office_phone": "string",
  "offices": [
    0
  ],
  "patient_flags": [
    {
      "archived": true,
      "color": "string",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "name": "string",
      "priority": 0,
      "updated_at": "string"
    }
  ],
  "patient_flags_attached": [
    {
      "archived": true,
      "created_at": "string",
      "flag_text": "string",
      "flag_type": 0,
      "id": 0,
      "updated_at": "string"
    }
  ],
  "patient_payment_profile": "",
  "patient_photo": "string",
  "patient_photo_date": "string",
  "patient_status": "A",
  "preferred_language": "blank",
  "primary_care_physician": "string",
  "primary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "race": "blank",
  "referring_doctor": {
    "address": "string",
    "email": "string",
    "fax": "string",
    "first_name": "string",
    "last_name": "string",
    "middle_name": "string",
    "npi": "string",
    "phone": "string",
    "provider_number": "string",
    "provider_qualifier": "",
    "specialty": "",
    "suffix": "string"
  },
  "referring_source": "string",
  "responsible_party_email": "string",
  "responsible_party_name": "string",
  "responsible_party_phone": "string",
  "responsible_party_relation": "string",
  "secondary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "social_security_number": "string",
  "state": "string",
  "tertiary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "updated_at": "string",
  "workers_comp_insurance": {
    "property_and_casualty_agency_claim_number": "string",
    "workers_comp_carrier_code": "string",
    "workers_comp_case_number": "string",
    "workers_comp_company": "string",
    "workers_comp_date_of_accident": "string",
    "workers_comp_group_name": "string",
    "workers_comp_group_number": "string",
    "workers_comp_notes": "string",
    "workers_comp_payer_address": "string",
    "workers_comp_payer_city": "string",
    "workers_comp_payer_id": "string",
    "workers_comp_payer_state": "AL",
    "workers_comp_payer_zip": "string",
    "workers_comp_state_of_occurrence": "AL",
    "workers_comp_wcb": "string",
    "workers_comp_wcb_rating_code": "string"
  },
  "zip_code": "string"
}
```

<h3 id="patientsonpatientaccesscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Patient](#schemapatient)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_onpatient_access_delete

<a id="opIdpatients_onpatient_access_delete"></a>

> Code samples

```bash
curl https://example.com/api/patients/string/onpatient_access \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/patients/{id}/onpatient_access`

Revoke sent onpatient invites

<h3 id="patientsonpatientaccessdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

<h3 id="patientsonpatientaccessdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_qrda1

<a id="opIdpatients_qrda1"></a>

> Code samples

```bash
curl https://example.com/api/patients/string/qrda1 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patients/{id}/qrda1`

Retrieve patient QRDA1

<h3 id="patientsqrda1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|preferred_language|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|
|race|query|string|false|none|
|chart_id|query|string|false|none|
|email|query|string|false|none|
|ethnicity|query|string|false|none|

<h3 id="patientsqrda1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:read patients:write )
</aside>

## patients_summary_list

<a id="opIdpatients_summary_list"></a>

> Code samples

```bash
curl https://example.com/api/patients_summary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patients_summary`

<h3 id="patientssummarylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "address": "string",
      "auto_accident_insurance": {
        "auto_accident_case_number": "string",
        "auto_accident_claim_rep_address": "string",
        "auto_accident_claim_rep_city": "string",
        "auto_accident_claim_rep_is_insurer": true,
        "auto_accident_claim_rep_name": "string",
        "auto_accident_claim_rep_state": "AL",
        "auto_accident_claim_rep_zip": "string",
        "auto_accident_company": "string",
        "auto_accident_date_of_accident": "string",
        "auto_accident_disabled_from_date": "string",
        "auto_accident_disabled_to_date": "string",
        "auto_accident_had_similar_condition": true,
        "auto_accident_is_subscriber_the_patient": true,
        "auto_accident_notes": "string",
        "auto_accident_patient_relationship_to_subscriber": "",
        "auto_accident_payer_address": "string",
        "auto_accident_payer_city": "string",
        "auto_accident_payer_id": "string",
        "auto_accident_payer_state": "AL",
        "auto_accident_payer_zip": "string",
        "auto_accident_policy_number": "string",
        "auto_accident_return_to_work_date": "string",
        "auto_accident_significant_injury": "YES",
        "auto_accident_significant_injury_notes": "string",
        "auto_accident_similar_condition_date": "string",
        "auto_accident_similar_condition_notes": "string",
        "auto_accident_state_of_occurrence": "AL",
        "auto_accident_still_under_care": true,
        "auto_accident_subscriber_address": "string",
        "auto_accident_subscriber_city": "string",
        "auto_accident_subscriber_date_of_birth": "string",
        "auto_accident_subscriber_first_name": "string",
        "auto_accident_subscriber_last_name": "string",
        "auto_accident_subscriber_middle_name": "string",
        "auto_accident_subscriber_phone_number": "string",
        "auto_accident_subscriber_social_security": "string",
        "auto_accident_subscriber_state": "AL",
        "auto_accident_subscriber_suffix": "string",
        "auto_accident_subscriber_zip_code": "string",
        "auto_accident_treatment_duration": "string",
        "auto_accident_will_require_therapy": true,
        "auto_accident_will_require_therapy_rec": "string"
      },
      "cell_phone": "string",
      "chart_id": "string",
      "city": "string",
      "copay": "string",
      "custom_demographics": [
        {
          "field_type": 0,
          "updated_at": "string",
          "value": "string"
        }
      ],
      "date_of_birth": "string",
      "date_of_first_appointment": "string",
      "date_of_last_appointment": "string",
      "default_pharmacy": "string",
      "disable_sms_messages": true,
      "doctor": 0,
      "email": "string",
      "emergency_contact_name": "string",
      "emergency_contact_phone": "string",
      "emergency_contact_relation": "string",
      "employer": "string",
      "employer_address": "string",
      "employer_city": "string",
      "employer_state": "string",
      "employer_zip_code": "string",
      "ethnicity": "blank",
      "first_name": "string",
      "gender": "",
      "home_phone": "string",
      "id": 0,
      "last_name": "string",
      "middle_name": "string",
      "nick_name": "string",
      "office_phone": "string",
      "offices": [
        0
      ],
      "patient_flags": [
        {
          "archived": true,
          "color": "string",
          "created_at": "string",
          "doctor": 0,
          "id": 0,
          "name": "string",
          "priority": 0,
          "updated_at": "string"
        }
      ],
      "patient_flags_attached": [
        {
          "archived": true,
          "created_at": "string",
          "flag_text": "string",
          "flag_type": 0,
          "id": 0,
          "updated_at": "string"
        }
      ],
      "patient_payment_profile": "",
      "patient_photo": "string",
      "patient_photo_date": "string",
      "patient_status": "A",
      "preferred_language": "blank",
      "primary_care_physician": "string",
      "primary_insurance": {
        "insurance_claim_office_number": "string",
        "insurance_company": "string",
        "insurance_group_name": "string",
        "insurance_group_number": "string",
        "insurance_id_number": "string",
        "insurance_payer_id": "string",
        "insurance_plan_name": "string",
        "insurance_plan_type": "",
        "is_subscriber_the_patient": true,
        "patient_relationship_to_subscriber": "",
        "photo_back": "string",
        "photo_front": "string",
        "subscriber_address": "string",
        "subscriber_city": "string",
        "subscriber_country": "",
        "subscriber_date_of_birth": "string",
        "subscriber_first_name": "string",
        "subscriber_gender": "",
        "subscriber_last_name": "string",
        "subscriber_middle_name": "string",
        "subscriber_social_security": "string",
        "subscriber_state": "AL",
        "subscriber_suffix": "string",
        "subscriber_zip_code": "string"
      },
      "race": "blank",
      "referring_doctor": {
        "address": "string",
        "email": "string",
        "fax": "string",
        "first_name": "string",
        "last_name": "string",
        "middle_name": "string",
        "npi": "string",
        "phone": "string",
        "provider_number": "string",
        "provider_qualifier": "",
        "specialty": "",
        "suffix": "string"
      },
      "referring_source": "string",
      "responsible_party_email": "string",
      "responsible_party_name": "string",
      "responsible_party_phone": "string",
      "responsible_party_relation": "string",
      "secondary_insurance": {
        "insurance_claim_office_number": "string",
        "insurance_company": "string",
        "insurance_group_name": "string",
        "insurance_group_number": "string",
        "insurance_id_number": "string",
        "insurance_payer_id": "string",
        "insurance_plan_name": "string",
        "insurance_plan_type": "",
        "is_subscriber_the_patient": true,
        "patient_relationship_to_subscriber": "",
        "photo_back": "string",
        "photo_front": "string",
        "subscriber_address": "string",
        "subscriber_city": "string",
        "subscriber_country": "",
        "subscriber_date_of_birth": "string",
        "subscriber_first_name": "string",
        "subscriber_gender": "",
        "subscriber_last_name": "string",
        "subscriber_middle_name": "string",
        "subscriber_social_security": "string",
        "subscriber_state": "AL",
        "subscriber_suffix": "string",
        "subscriber_zip_code": "string"
      },
      "social_security_number": "string",
      "state": "string",
      "tertiary_insurance": {
        "insurance_claim_office_number": "string",
        "insurance_company": "string",
        "insurance_group_name": "string",
        "insurance_group_number": "string",
        "insurance_id_number": "string",
        "insurance_payer_id": "string",
        "insurance_plan_name": "string",
        "insurance_plan_type": "",
        "is_subscriber_the_patient": true,
        "patient_relationship_to_subscriber": "",
        "photo_back": "string",
        "photo_front": "string",
        "subscriber_address": "string",
        "subscriber_city": "string",
        "subscriber_country": "",
        "subscriber_date_of_birth": "string",
        "subscriber_first_name": "string",
        "subscriber_gender": "",
        "subscriber_last_name": "string",
        "subscriber_middle_name": "string",
        "subscriber_social_security": "string",
        "subscriber_state": "AL",
        "subscriber_suffix": "string",
        "subscriber_zip_code": "string"
      },
      "updated_at": "string",
      "workers_comp_insurance": {
        "property_and_casualty_agency_claim_number": "string",
        "workers_comp_carrier_code": "string",
        "workers_comp_case_number": "string",
        "workers_comp_company": "string",
        "workers_comp_date_of_accident": "string",
        "workers_comp_group_name": "string",
        "workers_comp_group_number": "string",
        "workers_comp_notes": "string",
        "workers_comp_payer_address": "string",
        "workers_comp_payer_city": "string",
        "workers_comp_payer_id": "string",
        "workers_comp_payer_state": "AL",
        "workers_comp_payer_zip": "string",
        "workers_comp_state_of_occurrence": "AL",
        "workers_comp_wcb": "string",
        "workers_comp_wcb_rating_code": "string"
      },
      "zip_code": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientssummarylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientssummarylist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Patient](#schemapatient)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:summary:read patients:summary:write )
</aside>

## patients_summary_create

<a id="opIdpatients_summary_create"></a>

> Code samples

```bash
curl https://example.com/api/patients_summary \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patients_summary`

<h3 id="patientssummarycreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "address": "string",
  "auto_accident_insurance": {
    "auto_accident_case_number": "string",
    "auto_accident_claim_rep_address": "string",
    "auto_accident_claim_rep_city": "string",
    "auto_accident_claim_rep_is_insurer": true,
    "auto_accident_claim_rep_name": "string",
    "auto_accident_claim_rep_state": "AL",
    "auto_accident_claim_rep_zip": "string",
    "auto_accident_company": "string",
    "auto_accident_date_of_accident": "string",
    "auto_accident_disabled_from_date": "string",
    "auto_accident_disabled_to_date": "string",
    "auto_accident_had_similar_condition": true,
    "auto_accident_is_subscriber_the_patient": true,
    "auto_accident_notes": "string",
    "auto_accident_patient_relationship_to_subscriber": "",
    "auto_accident_payer_address": "string",
    "auto_accident_payer_city": "string",
    "auto_accident_payer_id": "string",
    "auto_accident_payer_state": "AL",
    "auto_accident_payer_zip": "string",
    "auto_accident_policy_number": "string",
    "auto_accident_return_to_work_date": "string",
    "auto_accident_significant_injury": "YES",
    "auto_accident_significant_injury_notes": "string",
    "auto_accident_similar_condition_date": "string",
    "auto_accident_similar_condition_notes": "string",
    "auto_accident_state_of_occurrence": "AL",
    "auto_accident_still_under_care": true,
    "auto_accident_subscriber_address": "string",
    "auto_accident_subscriber_city": "string",
    "auto_accident_subscriber_date_of_birth": "string",
    "auto_accident_subscriber_first_name": "string",
    "auto_accident_subscriber_last_name": "string",
    "auto_accident_subscriber_middle_name": "string",
    "auto_accident_subscriber_phone_number": "string",
    "auto_accident_subscriber_social_security": "string",
    "auto_accident_subscriber_state": "AL",
    "auto_accident_subscriber_suffix": "string",
    "auto_accident_subscriber_zip_code": "string",
    "auto_accident_treatment_duration": "string",
    "auto_accident_will_require_therapy": true,
    "auto_accident_will_require_therapy_rec": "string"
  },
  "cell_phone": "string",
  "chart_id": "string",
  "city": "string",
  "copay": "string",
  "custom_demographics": [
    {
      "field_type": 0,
      "updated_at": "string",
      "value": "string"
    }
  ],
  "date_of_birth": "string",
  "date_of_first_appointment": "string",
  "date_of_last_appointment": "string",
  "default_pharmacy": "string",
  "disable_sms_messages": true,
  "doctor": 0,
  "email": "string",
  "emergency_contact_name": "string",
  "emergency_contact_phone": "string",
  "emergency_contact_relation": "string",
  "employer": "string",
  "employer_address": "string",
  "employer_city": "string",
  "employer_state": "string",
  "employer_zip_code": "string",
  "ethnicity": "blank",
  "first_name": "string",
  "gender": "",
  "home_phone": "string",
  "id": 0,
  "last_name": "string",
  "middle_name": "string",
  "nick_name": "string",
  "office_phone": "string",
  "offices": [
    0
  ],
  "patient_flags": [
    {
      "archived": true,
      "color": "string",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "name": "string",
      "priority": 0,
      "updated_at": "string"
    }
  ],
  "patient_flags_attached": [
    {
      "archived": true,
      "created_at": "string",
      "flag_text": "string",
      "flag_type": 0,
      "id": 0,
      "updated_at": "string"
    }
  ],
  "patient_payment_profile": "",
  "patient_photo": "string",
  "patient_photo_date": "string",
  "patient_status": "A",
  "preferred_language": "blank",
  "primary_care_physician": "string",
  "primary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "race": "blank",
  "referring_doctor": {
    "address": "string",
    "email": "string",
    "fax": "string",
    "first_name": "string",
    "last_name": "string",
    "middle_name": "string",
    "npi": "string",
    "phone": "string",
    "provider_number": "string",
    "provider_qualifier": "",
    "specialty": "",
    "suffix": "string"
  },
  "referring_source": "string",
  "responsible_party_email": "string",
  "responsible_party_name": "string",
  "responsible_party_phone": "string",
  "responsible_party_relation": "string",
  "secondary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "social_security_number": "string",
  "state": "string",
  "tertiary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "updated_at": "string",
  "workers_comp_insurance": {
    "property_and_casualty_agency_claim_number": "string",
    "workers_comp_carrier_code": "string",
    "workers_comp_case_number": "string",
    "workers_comp_company": "string",
    "workers_comp_date_of_accident": "string",
    "workers_comp_group_name": "string",
    "workers_comp_group_number": "string",
    "workers_comp_notes": "string",
    "workers_comp_payer_address": "string",
    "workers_comp_payer_city": "string",
    "workers_comp_payer_id": "string",
    "workers_comp_payer_state": "AL",
    "workers_comp_payer_zip": "string",
    "workers_comp_state_of_occurrence": "AL",
    "workers_comp_wcb": "string",
    "workers_comp_wcb_rating_code": "string"
  },
  "zip_code": "string"
}
```

<h3 id="patientssummarycreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Patient](#schemapatient)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:summary:read patients:summary:write )
</aside>

## patients_summary_read

<a id="opIdpatients_summary_read"></a>

> Code samples

```bash
curl https://example.com/api/patients_summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patients_summary/{id}`

<h3 id="patientssummaryread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "auto_accident_insurance": {
    "auto_accident_case_number": "string",
    "auto_accident_claim_rep_address": "string",
    "auto_accident_claim_rep_city": "string",
    "auto_accident_claim_rep_is_insurer": true,
    "auto_accident_claim_rep_name": "string",
    "auto_accident_claim_rep_state": "AL",
    "auto_accident_claim_rep_zip": "string",
    "auto_accident_company": "string",
    "auto_accident_date_of_accident": "string",
    "auto_accident_disabled_from_date": "string",
    "auto_accident_disabled_to_date": "string",
    "auto_accident_had_similar_condition": true,
    "auto_accident_is_subscriber_the_patient": true,
    "auto_accident_notes": "string",
    "auto_accident_patient_relationship_to_subscriber": "",
    "auto_accident_payer_address": "string",
    "auto_accident_payer_city": "string",
    "auto_accident_payer_id": "string",
    "auto_accident_payer_state": "AL",
    "auto_accident_payer_zip": "string",
    "auto_accident_policy_number": "string",
    "auto_accident_return_to_work_date": "string",
    "auto_accident_significant_injury": "YES",
    "auto_accident_significant_injury_notes": "string",
    "auto_accident_similar_condition_date": "string",
    "auto_accident_similar_condition_notes": "string",
    "auto_accident_state_of_occurrence": "AL",
    "auto_accident_still_under_care": true,
    "auto_accident_subscriber_address": "string",
    "auto_accident_subscriber_city": "string",
    "auto_accident_subscriber_date_of_birth": "string",
    "auto_accident_subscriber_first_name": "string",
    "auto_accident_subscriber_last_name": "string",
    "auto_accident_subscriber_middle_name": "string",
    "auto_accident_subscriber_phone_number": "string",
    "auto_accident_subscriber_social_security": "string",
    "auto_accident_subscriber_state": "AL",
    "auto_accident_subscriber_suffix": "string",
    "auto_accident_subscriber_zip_code": "string",
    "auto_accident_treatment_duration": "string",
    "auto_accident_will_require_therapy": true,
    "auto_accident_will_require_therapy_rec": "string"
  },
  "cell_phone": "string",
  "chart_id": "string",
  "city": "string",
  "copay": "string",
  "custom_demographics": [
    {
      "field_type": 0,
      "updated_at": "string",
      "value": "string"
    }
  ],
  "date_of_birth": "string",
  "date_of_first_appointment": "string",
  "date_of_last_appointment": "string",
  "default_pharmacy": "string",
  "disable_sms_messages": true,
  "doctor": 0,
  "email": "string",
  "emergency_contact_name": "string",
  "emergency_contact_phone": "string",
  "emergency_contact_relation": "string",
  "employer": "string",
  "employer_address": "string",
  "employer_city": "string",
  "employer_state": "string",
  "employer_zip_code": "string",
  "ethnicity": "blank",
  "first_name": "string",
  "gender": "",
  "home_phone": "string",
  "id": 0,
  "last_name": "string",
  "middle_name": "string",
  "nick_name": "string",
  "office_phone": "string",
  "offices": [
    0
  ],
  "patient_flags": [
    {
      "archived": true,
      "color": "string",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "name": "string",
      "priority": 0,
      "updated_at": "string"
    }
  ],
  "patient_flags_attached": [
    {
      "archived": true,
      "created_at": "string",
      "flag_text": "string",
      "flag_type": 0,
      "id": 0,
      "updated_at": "string"
    }
  ],
  "patient_payment_profile": "",
  "patient_photo": "string",
  "patient_photo_date": "string",
  "patient_status": "A",
  "preferred_language": "blank",
  "primary_care_physician": "string",
  "primary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "race": "blank",
  "referring_doctor": {
    "address": "string",
    "email": "string",
    "fax": "string",
    "first_name": "string",
    "last_name": "string",
    "middle_name": "string",
    "npi": "string",
    "phone": "string",
    "provider_number": "string",
    "provider_qualifier": "",
    "specialty": "",
    "suffix": "string"
  },
  "referring_source": "string",
  "responsible_party_email": "string",
  "responsible_party_name": "string",
  "responsible_party_phone": "string",
  "responsible_party_relation": "string",
  "secondary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "social_security_number": "string",
  "state": "string",
  "tertiary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "updated_at": "string",
  "workers_comp_insurance": {
    "property_and_casualty_agency_claim_number": "string",
    "workers_comp_carrier_code": "string",
    "workers_comp_case_number": "string",
    "workers_comp_company": "string",
    "workers_comp_date_of_accident": "string",
    "workers_comp_group_name": "string",
    "workers_comp_group_number": "string",
    "workers_comp_notes": "string",
    "workers_comp_payer_address": "string",
    "workers_comp_payer_city": "string",
    "workers_comp_payer_id": "string",
    "workers_comp_payer_state": "AL",
    "workers_comp_payer_zip": "string",
    "workers_comp_state_of_occurrence": "AL",
    "workers_comp_wcb": "string",
    "workers_comp_wcb_rating_code": "string"
  },
  "zip_code": "string"
}
```

<h3 id="patientssummaryread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Patient](#schemapatient)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:summary:read patients:summary:write )
</aside>

## patients_summary_update

<a id="opIdpatients_summary_update"></a>

> Code samples

```bash
curl https://example.com/api/patients_summary/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/patients_summary/{id}`

<h3 id="patientssummaryupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|

<h3 id="patientssummaryupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:summary:read patients:summary:write )
</aside>

## patients_summary_delete

<a id="opIdpatients_summary_delete"></a>

> Code samples

```bash
curl https://example.com/api/patients_summary/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/patients_summary/{id}`

<h3 id="patientssummarydelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|

<h3 id="patientssummarydelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:summary:read patients:summary:write )
</aside>

## patients_summary_partial_update

<a id="opIdpatients_summary_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/patients_summary/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/patients_summary/{id}`

<h3 id="patientssummarypartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|first_name|query|string|false|none|
|last_name|query|string|false|none|
|doctor|query|integer|false|none|
|gender|query|string|false|none|
|since|query|string|false|none|
|date_of_birth|query|string|false|none|

<h3 id="patientssummarypartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: patients:summary:read patients:summary:write )
</aside>

## prescription_messages_list

<a id="opIdprescription_messages_list"></a>

> Code samples

```bash
curl https://example.com/api/prescription_messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/prescription_messages`

Retrieve or search prescription messages

<h3 id="prescriptionmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|parent_message|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "json_data": "string",
      "message_direction": "I",
      "message_status": "string",
      "message_type": "string",
      "parent_message": "string",
      "patient": 0,
      "pharmacy": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="prescriptionmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="prescriptionmessageslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PrescriptionMessage](#schemaprescriptionmessage)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## prescription_messages_read

<a id="opIdprescription_messages_read"></a>

> Code samples

```bash
curl https://example.com/api/prescription_messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/prescription_messages/{id}`

Retrieve an existing prescription message

<h3 id="prescriptionmessagesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|parent_message|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "json_data": "string",
  "message_direction": "I",
  "message_status": "string",
  "message_type": "string",
  "parent_message": "string",
  "patient": 0,
  "pharmacy": "string"
}
```

<h3 id="prescriptionmessagesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PrescriptionMessage](#schemaprescriptionmessage)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## problems_list

<a id="opIdproblems_list"></a>

> Code samples

```bash
curl https://example.com/api/problems \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/problems`

Retrieve or search patient problems

<h3 id="problemslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "date_changed": "string",
      "date_diagnosis": "string",
      "date_onset": "string",
      "description": "string",
      "doctor": 0,
      "icd_code": "string",
      "icd_version": "9",
      "id": 0,
      "info_url": "string",
      "name": "string",
      "notes": "string",
      "patient": 0,
      "snomed_ct_code": "string",
      "status": "active"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="problemslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="problemslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PatientProblem](#schemapatientproblem)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## problems_create

<a id="opIdproblems_create"></a>

> Code samples

```bash
curl https://example.com/api/problems \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/problems`

Create patient problems

<h3 id="problemscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "date_changed": "string",
  "date_diagnosis": "string",
  "date_onset": "string",
  "description": "string",
  "doctor": 0,
  "icd_code": "string",
  "icd_version": "9",
  "id": 0,
  "info_url": "string",
  "name": "string",
  "notes": "string",
  "patient": 0,
  "snomed_ct_code": "string",
  "status": "active"
}
```

<h3 id="problemscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PatientProblem](#schemapatientproblem)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## problems_read

<a id="opIdproblems_read"></a>

> Code samples

```bash
curl https://example.com/api/problems/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/problems/{id}`

Retrieve an existing patient problems

<h3 id="problemsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "date_changed": "string",
  "date_diagnosis": "string",
  "date_onset": "string",
  "description": "string",
  "doctor": 0,
  "icd_code": "string",
  "icd_version": "9",
  "id": 0,
  "info_url": "string",
  "name": "string",
  "notes": "string",
  "patient": 0,
  "snomed_ct_code": "string",
  "status": "active"
}
```

<h3 id="problemsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatientProblem](#schemapatientproblem)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## problems_update

<a id="opIdproblems_update"></a>

> Code samples

```bash
curl https://example.com/api/problems/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/problems/{id}`

Update an existing patient problems

<h3 id="problemsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="problemsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## problems_partial_update

<a id="opIdproblems_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/problems/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/problems/{id}`

Update an existing patient problems

<h3 id="problemspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="problemspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## reminder_profiles_list

<a id="opIdreminder_profiles_list"></a>

> Code samples

```bash
curl https://example.com/api/reminder_profiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/reminder_profiles`

Retrieve or search reminder profiles

<h3 id="reminderprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "doctor": 0,
      "id": 0,
      "name": "string",
      "reminders": [
        {
          "amount": 0,
          "type": "email",
          "unit": "minutes"
        }
      ]
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="reminderprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="reminderprofileslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ReminderProfile](#schemareminderprofile)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## reminder_profiles_create

<a id="opIdreminder_profiles_create"></a>

> Code samples

```bash
curl https://example.com/api/reminder_profiles \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/reminder_profiles`

Create reminder profile

<h3 id="reminderprofilescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "doctor": 0,
  "id": 0,
  "name": "string",
  "reminders": [
    {
      "amount": 0,
      "type": "email",
      "unit": "minutes"
    }
  ]
}
```

<h3 id="reminderprofilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ReminderProfile](#schemareminderprofile)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## reminder_profiles_read

<a id="opIdreminder_profiles_read"></a>

> Code samples

```bash
curl https://example.com/api/reminder_profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/reminder_profiles/{id}`

Retrieve an existing reminder profile

<h3 id="reminderprofilesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "doctor": 0,
  "id": 0,
  "name": "string",
  "reminders": [
    {
      "amount": 0,
      "type": "email",
      "unit": "minutes"
    }
  ]
}
```

<h3 id="reminderprofilesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReminderProfile](#schemareminderprofile)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## reminder_profiles_update

<a id="opIdreminder_profiles_update"></a>

> Code samples

```bash
curl https://example.com/api/reminder_profiles/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/reminder_profiles/{id}`

Update an existing reminder profile

<h3 id="reminderprofilesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="reminderprofilesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## reminder_profiles_delete

<a id="opIdreminder_profiles_delete"></a>

> Code samples

```bash
curl https://example.com/api/reminder_profiles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/reminder_profiles/{id}`

Delete an existing reminder profile

<h3 id="reminderprofilesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="reminderprofilesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## reminder_profiles_partial_update

<a id="opIdreminder_profiles_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/reminder_profiles/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/reminder_profiles/{id}`

Update an existing reminder profile

<h3 id="reminderprofilespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="reminderprofilespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## sublabs_list

<a id="opIdsublabs_list"></a>

> Code samples

```bash
curl https://example.com/api/sublabs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/sublabs`

Retrieve or search sub vendors

<h3 id="sublabslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "facility_code": "string",
      "id": 0,
      "name": "string",
      "vendor_name": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="sublabslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="sublabslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LabVendorLocation](#schemalabvendorlocation)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## sublabs_create

<a id="opIdsublabs_create"></a>

> Code samples

```bash
curl https://example.com/api/sublabs \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/sublabs`

Create sub-vendors

- When you get orders, submit them via `/api/lab_orders`, such that doctors can see them in drchrono.

- When results come in, submit the result document PDF via `/api/lab_documents` and submit the results data via `/api/lab_results`

- Update `/api/lab_orders` status


> Example responses

> 201 Response

```json
{
  "facility_code": "string",
  "id": 0,
  "name": "string",
  "vendor_name": "string"
}
```

<h3 id="sublabscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[LabVendorLocation](#schemalabvendorlocation)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## sublabs_read

<a id="opIdsublabs_read"></a>

> Code samples

```bash
curl https://example.com/api/sublabs/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/sublabs/{id}`

Retrieve an existing sub vendor

<h3 id="sublabsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "facility_code": "string",
  "id": 0,
  "name": "string",
  "vendor_name": "string"
}
```

<h3 id="sublabsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LabVendorLocation](#schemalabvendorlocation)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## sublabs_update

<a id="opIdsublabs_update"></a>

> Code samples

```bash
curl https://example.com/api/sublabs/0 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/sublabs/{id}`

Update an existing sub vendor

<h3 id="sublabsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="sublabsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## sublabs_delete

<a id="opIdsublabs_delete"></a>

> Code samples

```bash
curl https://example.com/api/sublabs/0 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/sublabs/{id}`

Delete an existing sub vendor

<h3 id="sublabsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="sublabsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

## sublabs_partial_update

<a id="opIdsublabs_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/sublabs/0 \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/sublabs/{id}`

Update an existing sub vendor

<h3 id="sublabspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="sublabspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: labs:read labs:write )
</aside>

<h1 id="api-billing">Billing</h1>

Create and manage billing resources

## billing_profiles_list

<a id="opIdbilling_profiles_list"></a>

> Code samples

```bash
curl https://example.com/api/billing_profiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/billing_profiles`

Retrieve or search billing profiles

<h3 id="billingprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "cpt_codes": [
        {
          "code": "string",
          "diagnosis_pointers_icd10": [
            "string"
          ],
          "diagnosis_pointers_icd9": [
            "string"
          ],
          "modifiers": [
            "string"
          ],
          "ndc_code": [
            {
              "ndc_package_code": "string",
              "quantity": "string",
              "units": "F2"
            }
          ],
          "price": "string",
          "quantity": "string"
        }
      ],
      "created_at": "string",
      "custom_procedure_codes": [
        {
          "code": "string",
          "price": "string",
          "quantity": "string"
        }
      ],
      "doctor": "string",
      "hcpcs_codes": [
        {
          "code": "string",
          "diagnosis_pointers_icd10": [
            "string"
          ],
          "diagnosis_pointers_icd9": [
            "string"
          ],
          "modifiers": [
            "string"
          ],
          "ndc_code": [
            {
              "ndc_package_code": "string",
              "quantity": "string",
              "units": "F2"
            }
          ],
          "price": "string",
          "quantity": "string"
        }
      ],
      "icd10_codes": [
        "string"
      ],
      "icd9_codes": [
        "string"
      ],
      "id": 0,
      "name": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="billingprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="billingprofileslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BillingProfile](#schemabillingprofile)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## billing_profiles_read

<a id="opIdbilling_profiles_read"></a>

> Code samples

```bash
curl https://example.com/api/billing_profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/billing_profiles/{id}`

Retrieve an existing billing profiles

<h3 id="billingprofilesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "cpt_codes": [
    {
      "code": "string",
      "diagnosis_pointers_icd10": [
        "string"
      ],
      "diagnosis_pointers_icd9": [
        "string"
      ],
      "modifiers": [
        "string"
      ],
      "ndc_code": [
        {
          "ndc_package_code": "string",
          "quantity": "string",
          "units": "F2"
        }
      ],
      "price": "string",
      "quantity": "string"
    }
  ],
  "created_at": "string",
  "custom_procedure_codes": [
    {
      "code": "string",
      "price": "string",
      "quantity": "string"
    }
  ],
  "doctor": "string",
  "hcpcs_codes": [
    {
      "code": "string",
      "diagnosis_pointers_icd10": [
        "string"
      ],
      "diagnosis_pointers_icd9": [
        "string"
      ],
      "modifiers": [
        "string"
      ],
      "ndc_code": [
        {
          "ndc_package_code": "string",
          "quantity": "string",
          "units": "F2"
        }
      ],
      "price": "string",
      "quantity": "string"
    }
  ],
  "icd10_codes": [
    "string"
  ],
  "icd9_codes": [
    "string"
  ],
  "id": 0,
  "name": "string",
  "updated_at": "string"
}
```

<h3 id="billingprofilesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BillingProfile](#schemabillingprofile)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## comm_logs_list

<a id="opIdcomm_logs_list"></a>

> Code samples

```bash
curl https://example.com/api/comm_logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/comm_logs`

Retrieve or search communicatioin (phone call) logs

<h3 id="commlogslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "appointment": 0,
      "archived": true,
      "author": "string",
      "cash_charged": 0,
      "created_at": "string",
      "doctor": 0,
      "duration": 0,
      "id": 0,
      "message": "string",
      "patient": 0,
      "scheduled_time": "string",
      "title": "string",
      "type": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="commlogslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="commlogslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PhoneCallLog](#schemaphonecalllog)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## comm_logs_create

<a id="opIdcomm_logs_create"></a>

> Code samples

```bash
curl https://example.com/api/comm_logs \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/comm_logs`

Create communication (phone call) logs

<h3 id="commlogscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "appointment": 0,
  "archived": true,
  "author": "string",
  "cash_charged": 0,
  "created_at": "string",
  "doctor": 0,
  "duration": 0,
  "id": 0,
  "message": "string",
  "patient": 0,
  "scheduled_time": "string",
  "title": "string",
  "type": "string",
  "updated_at": "string"
}
```

<h3 id="commlogscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PhoneCallLog](#schemaphonecalllog)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## comm_logs_read

<a id="opIdcomm_logs_read"></a>

> Code samples

```bash
curl https://example.com/api/comm_logs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/comm_logs/{id}`

Retrieve an existing communication (phone call) logs

<h3 id="commlogsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "appointment": 0,
  "archived": true,
  "author": "string",
  "cash_charged": 0,
  "created_at": "string",
  "doctor": 0,
  "duration": 0,
  "id": 0,
  "message": "string",
  "patient": 0,
  "scheduled_time": "string",
  "title": "string",
  "type": "string",
  "updated_at": "string"
}
```

<h3 id="commlogsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PhoneCallLog](#schemaphonecalllog)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## comm_logs_update

<a id="opIdcomm_logs_update"></a>

> Code samples

```bash
curl https://example.com/api/comm_logs/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/comm_logs/{id}`

Update an existing communication (phone call) logs

<h3 id="commlogsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="commlogsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## comm_logs_partial_update

<a id="opIdcomm_logs_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/comm_logs/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/comm_logs/{id}`

Update an existing communication (phone call) logs

<h3 id="commlogspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

<h3 id="commlogspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write )
</aside>

## custom_insurance_plan_names_list

<a id="opIdcustom_insurance_plan_names_list"></a>

> Code samples

```bash
curl https://example.com/api/custom_insurance_plan_names \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/custom_insurance_plan_names`

Retrieve or search custom insurance plan names

<h3 id="custominsuranceplannameslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|user|query|integer|false|none|
|name|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "created_at": "string",
      "doctor": "string",
      "id": 0,
      "insurance_plan_name": "string",
      "updated_at": "string",
      "user": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="custominsuranceplannameslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="custominsuranceplannameslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomInsurancePlanName](#schemacustominsuranceplanname)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: settings:read settings:write )
</aside>

## custom_insurance_plan_names_read

<a id="opIdcustom_insurance_plan_names_read"></a>

> Code samples

```bash
curl https://example.com/api/custom_insurance_plan_names/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/custom_insurance_plan_names/{id}`

Retrieve an existing custom insurance plan name

<h3 id="custominsuranceplannamesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|user|query|integer|false|none|
|name|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "created_at": "string",
  "doctor": "string",
  "id": 0,
  "insurance_plan_name": "string",
  "updated_at": "string",
  "user": "string"
}
```

<h3 id="custominsuranceplannamesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomInsurancePlanName](#schemacustominsuranceplanname)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: settings:read settings:write )
</aside>

## eligibility_checks_list

<a id="opIdeligibility_checks_list"></a>

> Code samples

```bash
curl https://example.com/api/eligibility_checks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/eligibility_checks`

Retrieve or search past eligibility checks for patient

<h3 id="eligibilitycheckslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|appointment|query|integer|false|none|
|appointment_date|query|string|false|none|
|doctor|query|integer|false|none|
|query_date_range|query|string|false|none|
|appointment_date_range|query|string|false|none|
|query_date|query|string|false|none|
|patient|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "appointment": "string",
      "cob_level": "string",
      "coverage_details": "string",
      "coverage_subscriber": "string",
      "eligibility": "string",
      "patient": "string",
      "payer_name": "string",
      "query_date": "string",
      "request_service_type": "1",
      "service_type_description": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="eligibilitycheckslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="eligibilitycheckslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Coverage](#schemacoverage)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write patients:read patients:write )
</aside>

## eligibility_checks_read

<a id="opIdeligibility_checks_read"></a>

> Code samples

```bash
curl https://example.com/api/eligibility_checks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/eligibility_checks/{id}`

Retrieve an existing past eligibility check

<h3 id="eligibilitychecksread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|appointment|query|integer|false|none|
|appointment_date|query|string|false|none|
|doctor|query|integer|false|none|
|query_date_range|query|string|false|none|
|appointment_date_range|query|string|false|none|
|query_date|query|string|false|none|
|patient|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "appointment": "string",
  "cob_level": "string",
  "coverage_details": "string",
  "coverage_subscriber": "string",
  "eligibility": "string",
  "patient": "string",
  "payer_name": "string",
  "query_date": "string",
  "request_service_type": "1",
  "service_type_description": "string"
}
```

<h3 id="eligibilitychecksread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Coverage](#schemacoverage)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: calendar:read calendar:write patients:read patients:write )
</aside>

## line_items_list

<a id="opIdline_items_list"></a>

> Code samples

```bash
curl https://example.com/api/line_items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/line_items`

Retrieve or search billing line items

<h3 id="lineitemslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|posted_date|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|service_date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "adjustment": 0,
      "allowed": 0,
      "appointment": 0,
      "balance_ins": 0,
      "balance_pt": 0,
      "balance_total": "string",
      "billed": 0,
      "billing_status": "",
      "code": "string",
      "denied_flag": true,
      "description": "string",
      "diagnosis_pointers": [
        "string"
      ],
      "doctor": "string",
      "expected_reimbursement": 0,
      "id": 0,
      "ins1_paid": 0,
      "ins2_paid": 0,
      "ins3_paid": 0,
      "ins_total": "string",
      "insurance_status": "string",
      "modifiers": [
        "string"
      ],
      "paid_total": "string",
      "patient": "string",
      "posted_date": "string",
      "price": 0,
      "procedure_type": "C",
      "pt_paid": 0,
      "quantity": 0,
      "service_date": "string",
      "units": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="lineitemslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="lineitemslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BillingLineItem](#schemabillinglineitem)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## line_items_create

<a id="opIdline_items_create"></a>

> Code samples

```bash
curl https://example.com/api/line_items \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/line_items`

Create billing line item for appointments

<h3 id="lineitemscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|posted_date|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|service_date|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "adjustment": 0,
  "allowed": 0,
  "appointment": 0,
  "balance_ins": 0,
  "balance_pt": 0,
  "balance_total": "string",
  "billed": 0,
  "billing_status": "",
  "code": "string",
  "denied_flag": true,
  "description": "string",
  "diagnosis_pointers": [
    "string"
  ],
  "doctor": "string",
  "expected_reimbursement": 0,
  "id": 0,
  "ins1_paid": 0,
  "ins2_paid": 0,
  "ins3_paid": 0,
  "ins_total": "string",
  "insurance_status": "string",
  "modifiers": [
    "string"
  ],
  "paid_total": "string",
  "patient": "string",
  "posted_date": "string",
  "price": 0,
  "procedure_type": "C",
  "pt_paid": 0,
  "quantity": 0,
  "service_date": "string",
  "units": "string",
  "updated_at": "string"
}
```

<h3 id="lineitemscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[BillingLineItem](#schemabillinglineitem)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## line_items_read

<a id="opIdline_items_read"></a>

> Code samples

```bash
curl https://example.com/api/line_items/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/line_items/{id}`

Retrieve an existing billing line item

<h3 id="lineitemsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|posted_date|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|service_date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "adjustment": 0,
  "allowed": 0,
  "appointment": 0,
  "balance_ins": 0,
  "balance_pt": 0,
  "balance_total": "string",
  "billed": 0,
  "billing_status": "",
  "code": "string",
  "denied_flag": true,
  "description": "string",
  "diagnosis_pointers": [
    "string"
  ],
  "doctor": "string",
  "expected_reimbursement": 0,
  "id": 0,
  "ins1_paid": 0,
  "ins2_paid": 0,
  "ins3_paid": 0,
  "ins_total": "string",
  "insurance_status": "string",
  "modifiers": [
    "string"
  ],
  "paid_total": "string",
  "patient": "string",
  "posted_date": "string",
  "price": 0,
  "procedure_type": "C",
  "pt_paid": 0,
  "quantity": 0,
  "service_date": "string",
  "units": "string",
  "updated_at": "string"
}
```

<h3 id="lineitemsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BillingLineItem](#schemabillinglineitem)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## line_items_update

<a id="opIdline_items_update"></a>

> Code samples

```bash
curl https://example.com/api/line_items/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/line_items/{id}`

<h3 id="lineitemsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|posted_date|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|service_date|query|string|false|none|

<h3 id="lineitemsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## line_items_delete

<a id="opIdline_items_delete"></a>

> Code samples

```bash
curl https://example.com/api/line_items/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/line_items/{id}`

<h3 id="lineitemsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|posted_date|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|service_date|query|string|false|none|

<h3 id="lineitemsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## line_items_partial_update

<a id="opIdline_items_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/line_items/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/line_items/{id}`

<h3 id="lineitemspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|posted_date|query|string|false|none|
|patient|query|integer|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|
|since|query|string|false|none|
|appointment|query|integer|false|none|
|service_date|query|string|false|none|

<h3 id="lineitemspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## patient_payment_log_list

<a id="opIdpatient_payment_log_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_payment_log \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_payment_log`

Retrieve or search patient payment logs

<h3 id="patientpaymentloglist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "action": "C",
      "amount": 0,
      "appointment": "string",
      "created_by": "string",
      "doctor": "string",
      "id": 0,
      "patient": "string",
      "payment_method": "CASH",
      "source": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientpaymentloglist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientpaymentloglist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CashPaymentLog](#schemacashpaymentlog)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## patient_payment_log_read

<a id="opIdpatient_payment_log_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_payment_log/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_payment_log/{id}`

Retrieve an existing patient payment log

<h3 id="patientpaymentlogread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|office|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "action": "C",
  "amount": 0,
  "appointment": "string",
  "created_by": "string",
  "doctor": "string",
  "id": 0,
  "patient": "string",
  "payment_method": "CASH",
  "source": "string",
  "updated_at": "string"
}
```

<h3 id="patientpaymentlogread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CashPaymentLog](#schemacashpaymentlog)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## patient_payments_list

<a id="opIdpatient_payments_list"></a>

> Code samples

```bash
curl https://example.com/api/patient_payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_payments`

Retrieve or search patient payments

<h3 id="patientpaymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "amount": 0,
      "appointment": 0,
      "created_at": "string",
      "created_by": "string",
      "doctor": 0,
      "id": 0,
      "line_item": 0,
      "notes": "string",
      "patient": 0,
      "payment_method": "CASH",
      "payment_transaction_type": "",
      "posted_date": "string",
      "received_date": "string",
      "trace_number": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="patientpaymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="patientpaymentslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CashPayment](#schemacashpayment)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:patient-payment:read billing:patient-payment:write )
</aside>

## patient_payments_create

<a id="opIdpatient_payments_create"></a>

> Code samples

```bash
curl https://example.com/api/patient_payments \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/patient_payments`

Create patient payment

<h3 id="patientpaymentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "amount": 0,
  "appointment": 0,
  "created_at": "string",
  "created_by": "string",
  "doctor": 0,
  "id": 0,
  "line_item": 0,
  "notes": "string",
  "patient": 0,
  "payment_method": "CASH",
  "payment_transaction_type": "",
  "posted_date": "string",
  "received_date": "string",
  "trace_number": "string",
  "updated_at": "string"
}
```

<h3 id="patientpaymentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CashPayment](#schemacashpayment)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:patient-payment:read billing:patient-payment:write )
</aside>

## patient_payments_read

<a id="opIdpatient_payments_read"></a>

> Code samples

```bash
curl https://example.com/api/patient_payments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/patient_payments/{id}`

Retrieve an existing patient payment

<h3 id="patientpaymentsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "amount": 0,
  "appointment": 0,
  "created_at": "string",
  "created_by": "string",
  "doctor": 0,
  "id": 0,
  "line_item": 0,
  "notes": "string",
  "patient": 0,
  "payment_method": "CASH",
  "payment_transaction_type": "",
  "posted_date": "string",
  "received_date": "string",
  "trace_number": "string",
  "updated_at": "string"
}
```

<h3 id="patientpaymentsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CashPayment](#schemacashpayment)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:patient-payment:read billing:patient-payment:write )
</aside>

## procedures_list

<a id="opIdprocedures_list"></a>

> Code samples

```bash
curl https://example.com/api/procedures \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/procedures`

<h3 id="procedureslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|mu_date|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|
|mu_date_range|query|string|false|none|
|appointment|query|integer|false|none|
|service_date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "adjustment": 0,
      "allowed": 0,
      "appointment": 0,
      "balance_ins": 0,
      "balance_pt": 0,
      "balance_total": "string",
      "billed": 0,
      "billing_status": "",
      "code": "string",
      "denied_flag": true,
      "description": "string",
      "diagnosis_pointers": [
        "string"
      ],
      "doctor": "string",
      "expected_reimbursement": 0,
      "id": 0,
      "ins1_paid": 0,
      "ins2_paid": 0,
      "ins3_paid": 0,
      "ins_total": "string",
      "insurance_status": "string",
      "modifiers": [
        "string"
      ],
      "paid_total": "string",
      "patient": "string",
      "posted_date": "string",
      "price": 0,
      "procedure_type": "C",
      "pt_paid": 0,
      "quantity": 0,
      "service_date": "string",
      "units": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="procedureslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="procedureslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BillingLineItem](#schemabillinglineitem)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## procedures_read

<a id="opIdprocedures_read"></a>

> Code samples

```bash
curl https://example.com/api/procedures/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/procedures/{id}`

<h3 id="proceduresread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|mu_date|query|string|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|
|mu_date_range|query|string|false|none|
|appointment|query|integer|false|none|
|service_date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "adjustment": 0,
  "allowed": 0,
  "appointment": 0,
  "balance_ins": 0,
  "balance_pt": 0,
  "balance_total": "string",
  "billed": 0,
  "billing_status": "",
  "code": "string",
  "denied_flag": true,
  "description": "string",
  "diagnosis_pointers": [
    "string"
  ],
  "doctor": "string",
  "expected_reimbursement": 0,
  "id": 0,
  "ins1_paid": 0,
  "ins2_paid": 0,
  "ins3_paid": 0,
  "ins_total": "string",
  "insurance_status": "string",
  "modifiers": [
    "string"
  ],
  "paid_total": "string",
  "patient": "string",
  "posted_date": "string",
  "price": 0,
  "procedure_type": "C",
  "pt_paid": 0,
  "quantity": 0,
  "service_date": "string",
  "units": "string",
  "updated_at": "string"
}
```

<h3 id="proceduresread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BillingLineItem](#schemabillinglineitem)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## transactions_list

<a id="opIdtransactions_list"></a>

> Code samples

```bash
curl https://example.com/api/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/transactions`

Retrieve or search insurance transactions associated with billing line items

<h3 id="transactionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|line_item|query|integer|false|none|
|posted_date|query|string|false|none|
|appointment|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "adjustment": 0,
      "adjustment_group_code": "",
      "adjustment_reason": "-3",
      "appointment": 0,
      "check_date": "string",
      "claim_status": "",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "ins_name": 0,
      "ins_paid": 0,
      "line_item": 0,
      "patient": 0,
      "posted_date": "string",
      "trace_number": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="transactionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="transactionslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LineItemTransaction](#schemalineitemtransaction)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

## transactions_read

<a id="opIdtransactions_read"></a>

> Code samples

```bash
curl https://example.com/api/transactions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/transactions/{id}`

Retrieve an existing insurance transaction

<h3 id="transactionsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|line_item|query|integer|false|none|
|posted_date|query|string|false|none|
|appointment|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "adjustment": 0,
  "adjustment_group_code": "",
  "adjustment_reason": "-3",
  "appointment": 0,
  "check_date": "string",
  "claim_status": "",
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "ins_name": 0,
  "ins_paid": 0,
  "line_item": 0,
  "patient": 0,
  "posted_date": "string",
  "trace_number": "string",
  "updated_at": "string"
}
```

<h3 id="transactionsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LineItemTransaction](#schemalineitemtransaction)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: billing:read billing:write )
</aside>

<h1 id="api-practicemanagement">PracticeManagement</h1>

Create and manage practice management resources

## inventory_categories_list

<a id="opIdinventory_categories_list"></a>

> Code samples

```bash
curl https://example.com/api/inventory_categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/inventory_categories`

Retrieve or search inventory categories

<h3 id="inventorycategorieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "category_type": "vaccine",
      "created_at": "string",
      "doctor": "string",
      "id": 0,
      "name": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="inventorycategorieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="inventorycategorieslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[InventoryCategory](#schemainventorycategory)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## inventory_categories_read

<a id="opIdinventory_categories_read"></a>

> Code samples

```bash
curl https://example.com/api/inventory_categories/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/inventory_categories/{id}`

Retrieve an existing inventory category

<h3 id="inventorycategoriesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "category_type": "vaccine",
  "created_at": "string",
  "doctor": "string",
  "id": 0,
  "name": "string",
  "updated_at": "string"
}
```

<h3 id="inventorycategoriesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InventoryCategory](#schemainventorycategory)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## inventory_vaccines_list

<a id="opIdinventory_vaccines_list"></a>

> Code samples

```bash
curl https://example.com/api/inventory_vaccines \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/inventory_vaccines`

Retrieve or search vaccine inventories

<h3 id="inventoryvaccineslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|status|query|string|false|none|
|cvx_code|query|string|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "category": 0,
      "cost": 0,
      "created_at": "string",
      "current_quantity": 0,
      "cvx_code": "string",
      "doctor": 0,
      "expiry": "string",
      "id": 0,
      "lot_number": "string",
      "manufacturer": "string",
      "manufacturer_code": "string",
      "name": "string",
      "note": "string",
      "original_quantity": 0,
      "price": 0,
      "price_with_tax": 0,
      "sales_tax_applicable": true,
      "status": "active",
      "updated_at": "string",
      "vaccination_type": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="inventoryvaccineslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="inventoryvaccineslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[InventoryVaccine](#schemainventoryvaccine)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## inventory_vaccines_create

<a id="opIdinventory_vaccines_create"></a>

> Code samples

```bash
curl https://example.com/api/inventory_vaccines \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/inventory_vaccines`

Create vaccine inventory

<h3 id="inventoryvaccinescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|none|
|cvx_code|query|string|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "category": 0,
  "cost": 0,
  "created_at": "string",
  "current_quantity": 0,
  "cvx_code": "string",
  "doctor": 0,
  "expiry": "string",
  "id": 0,
  "lot_number": "string",
  "manufacturer": "string",
  "manufacturer_code": "string",
  "name": "string",
  "note": "string",
  "original_quantity": 0,
  "price": 0,
  "price_with_tax": 0,
  "sales_tax_applicable": true,
  "status": "active",
  "updated_at": "string",
  "vaccination_type": "string"
}
```

<h3 id="inventoryvaccinescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[InventoryVaccine](#schemainventoryvaccine)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## inventory_vaccines_read

<a id="opIdinventory_vaccines_read"></a>

> Code samples

```bash
curl https://example.com/api/inventory_vaccines/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/inventory_vaccines/{id}`

Retrieve an existing vaccine inventory

<h3 id="inventoryvaccinesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|status|query|string|false|none|
|cvx_code|query|string|false|none|
|since|query|string|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "category": 0,
  "cost": 0,
  "created_at": "string",
  "current_quantity": 0,
  "cvx_code": "string",
  "doctor": 0,
  "expiry": "string",
  "id": 0,
  "lot_number": "string",
  "manufacturer": "string",
  "manufacturer_code": "string",
  "name": "string",
  "note": "string",
  "original_quantity": 0,
  "price": 0,
  "price_with_tax": 0,
  "sales_tax_applicable": true,
  "status": "active",
  "updated_at": "string",
  "vaccination_type": "string"
}
```

<h3 id="inventoryvaccinesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InventoryVaccine](#schemainventoryvaccine)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: clinical:read clinical:write )
</aside>

## messages_list

<a id="opIdmessages_list"></a>

> Code samples

```bash
curl https://example.com/api/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/messages`

Retrieve or search messages in doctor's message center

<h3 id="messageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|
|responsible_user|query|integer|false|none|
|updated_since|query|string|false|none|
|received_since|query|string|false|none|
|owner|query|integer|false|none|
|type|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "attachment": "string",
      "doctor": 0,
      "id": 0,
      "message_notes": [
        {
          "created_at": "string",
          "created_by": "string",
          "text": "string"
        }
      ],
      "owner": "string",
      "patient": 0,
      "read": true,
      "received_at": "string",
      "responsible_user": "string",
      "starred": true,
      "title": "string",
      "type": "GP",
      "updated_at": "string",
      "workflow_step": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="messageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="messageslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DoctorMessage](#schemadoctormessage)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: messages:read messages:write )
</aside>

## messages_create

<a id="opIdmessages_create"></a>

> Code samples

```bash
curl https://example.com/api/messages \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/messages`

Create messages in doctor's message center

<h3 id="messagescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|
|responsible_user|query|integer|false|none|
|updated_since|query|string|false|none|
|received_since|query|string|false|none|
|owner|query|integer|false|none|
|type|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "attachment": "string",
  "doctor": 0,
  "id": 0,
  "message_notes": [
    {
      "created_at": "string",
      "created_by": "string",
      "text": "string"
    }
  ],
  "owner": "string",
  "patient": 0,
  "read": true,
  "received_at": "string",
  "responsible_user": "string",
  "starred": true,
  "title": "string",
  "type": "GP",
  "updated_at": "string",
  "workflow_step": "string"
}
```

<h3 id="messagescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[DoctorMessage](#schemadoctormessage)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: messages:read messages:write )
</aside>

## messages_read

<a id="opIdmessages_read"></a>

> Code samples

```bash
curl https://example.com/api/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/messages/{id}`

Retrieve an existing message in doctor's message center

<h3 id="messagesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|
|responsible_user|query|integer|false|none|
|updated_since|query|string|false|none|
|received_since|query|string|false|none|
|owner|query|integer|false|none|
|type|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "attachment": "string",
  "doctor": 0,
  "id": 0,
  "message_notes": [
    {
      "created_at": "string",
      "created_by": "string",
      "text": "string"
    }
  ],
  "owner": "string",
  "patient": 0,
  "read": true,
  "received_at": "string",
  "responsible_user": "string",
  "starred": true,
  "title": "string",
  "type": "GP",
  "updated_at": "string",
  "workflow_step": "string"
}
```

<h3 id="messagesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DoctorMessage](#schemadoctormessage)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: messages:read messages:write )
</aside>

## messages_update

<a id="opIdmessages_update"></a>

> Code samples

```bash
curl https://example.com/api/messages/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/messages/{id}`

Update an existing message in doctor's message center

<h3 id="messagesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|
|responsible_user|query|integer|false|none|
|updated_since|query|string|false|none|
|received_since|query|string|false|none|
|owner|query|integer|false|none|
|type|query|string|false|none|

<h3 id="messagesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: messages:read messages:write )
</aside>

## messages_delete

<a id="opIdmessages_delete"></a>

> Code samples

```bash
curl https://example.com/api/messages/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/messages/{id}`

Delete an existing message in doctor's message center

<h3 id="messagesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|
|responsible_user|query|integer|false|none|
|updated_since|query|string|false|none|
|received_since|query|string|false|none|
|owner|query|integer|false|none|
|type|query|string|false|none|

<h3 id="messagesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: messages:read messages:write )
</aside>

## messages_partial_update

<a id="opIdmessages_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/messages/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/messages/{id}`

Update an existing message in doctor's message center

<h3 id="messagespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|patient|query|integer|false|none|
|doctor|query|integer|false|none|
|responsible_user|query|integer|false|none|
|updated_since|query|string|false|none|
|received_since|query|string|false|none|
|owner|query|integer|false|none|
|type|query|string|false|none|

<h3 id="messagespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: messages:read messages:write )
</aside>

## offices_list

<a id="opIdoffices_list"></a>

> Code samples

```bash
curl https://example.com/api/offices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/offices`

Retrieve or search offices

<h3 id="officeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "address": "string",
      "archived": true,
      "city": "string",
      "country": "",
      "doctor": "string",
      "end_time": "string",
      "exam_rooms": "string",
      "fax_number": "string",
      "id": 0,
      "name": "string",
      "online_scheduling": true,
      "online_timeslots": [
        {
          "day": 0,
          "hour": 0,
          "minute": 0
        }
      ],
      "phone_number": "string",
      "start_time": "string",
      "state": "AL",
      "tax_id_number_professional": "string",
      "zip_code": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="officeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="officeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Office](#schemaoffice)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: user:read user:write )
</aside>

## offices_read

<a id="opIdoffices_read"></a>

> Code samples

```bash
curl https://example.com/api/offices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/offices/{id}`

Retrieve an existing office

<h3 id="officesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "archived": true,
  "city": "string",
  "country": "",
  "doctor": "string",
  "end_time": "string",
  "exam_rooms": "string",
  "fax_number": "string",
  "id": 0,
  "name": "string",
  "online_scheduling": true,
  "online_timeslots": [
    {
      "day": 0,
      "hour": 0,
      "minute": 0
    }
  ],
  "phone_number": "string",
  "start_time": "string",
  "state": "AL",
  "tax_id_number_professional": "string",
  "zip_code": "string"
}
```

<h3 id="officesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Office](#schemaoffice)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: user:read user:write )
</aside>

## offices_update

<a id="opIdoffices_update"></a>

> Code samples

```bash
curl https://example.com/api/offices/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/offices/{id}`

Update an existing office

<h3 id="officesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="officesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: user:read user:write )
</aside>

## offices_partial_update

<a id="opIdoffices_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/offices/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/offices/{id}`

Update an existing office

<h3 id="officespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

<h3 id="officespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: user:read user:write )
</aside>

## offices_add_exam_room

<a id="opIdoffices_add_exam_room"></a>

> Code samples

```bash
curl https://example.com/api/offices/string/add_exam_room \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/offices/{id}/add_exam_room`

Add an exam room to the office

<h3 id="officesaddexamroom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|doctor|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "address": "string",
  "archived": true,
  "city": "string",
  "country": "",
  "doctor": "string",
  "end_time": "string",
  "exam_rooms": "string",
  "fax_number": "string",
  "id": 0,
  "name": "string",
  "online_scheduling": true,
  "online_timeslots": [
    {
      "day": 0,
      "hour": 0,
      "minute": 0
    }
  ],
  "phone_number": "string",
  "start_time": "string",
  "state": "AL",
  "tax_id_number_professional": "string",
  "zip_code": "string"
}
```

<h3 id="officesaddexamroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Office](#schemaoffice)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: user:read user:write )
</aside>

## task_categories_list

<a id="opIdtask_categories_list"></a>

> Code samples

```bash
curl https://example.com/api/task_categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/task_categories`

Retrieve or search task categories

<h3 id="taskcategorieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "created_at": "string",
      "id": 0,
      "is_global": "string",
      "name": "string",
      "practice_group": 0,
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="taskcategorieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="taskcategorieslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TaskCategory](#schemataskcategory)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_categories_create

<a id="opIdtask_categories_create"></a>

> Code samples

```bash
curl https://example.com/api/task_categories \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/task_categories`

Create a task category

<h3 id="taskcategoriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "created_at": "string",
  "id": 0,
  "is_global": "string",
  "name": "string",
  "practice_group": 0,
  "updated_at": "string"
}
```

<h3 id="taskcategoriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[TaskCategory](#schemataskcategory)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_categories_read

<a id="opIdtask_categories_read"></a>

> Code samples

```bash
curl https://example.com/api/task_categories/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/task_categories/{id}`

Retrieve an existing task category

<h3 id="taskcategoriesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "created_at": "string",
  "id": 0,
  "is_global": "string",
  "name": "string",
  "practice_group": 0,
  "updated_at": "string"
}
```

<h3 id="taskcategoriesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TaskCategory](#schemataskcategory)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_categories_update

<a id="opIdtask_categories_update"></a>

> Code samples

```bash
curl https://example.com/api/task_categories/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/task_categories/{id}`

Update an existing task category

<h3 id="taskcategoriesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|

<h3 id="taskcategoriesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_categories_partial_update

<a id="opIdtask_categories_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/task_categories/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/task_categories/{id}`

Update an existing task category

<h3 id="taskcategoriespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|

<h3 id="taskcategoriespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_notes_list

<a id="opIdtask_notes_list"></a>

> Code samples

```bash
curl https://example.com/api/task_notes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/task_notes`

Retrieve or search task notes

<h3 id="tasknoteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|task|query|integer|false|none|
|since|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "created_at": "string",
      "created_by": "string",
      "id": 0,
      "task": 0,
      "text": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="tasknoteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="tasknoteslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TaskNote](#schematasknote)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_notes_create

<a id="opIdtask_notes_create"></a>

> Code samples

```bash
curl https://example.com/api/task_notes \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/task_notes`

Create a task note

<h3 id="tasknotescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task|query|integer|false|none|
|since|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "created_at": "string",
  "created_by": "string",
  "id": 0,
  "task": 0,
  "text": "string",
  "updated_at": "string"
}
```

<h3 id="tasknotescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[TaskNote](#schematasknote)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_notes_read

<a id="opIdtask_notes_read"></a>

> Code samples

```bash
curl https://example.com/api/task_notes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/task_notes/{id}`

Retrieve an existing task note

<h3 id="tasknotesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|task|query|integer|false|none|
|since|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "created_at": "string",
  "created_by": "string",
  "id": 0,
  "task": 0,
  "text": "string",
  "updated_at": "string"
}
```

<h3 id="tasknotesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TaskNote](#schematasknote)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_notes_update

<a id="opIdtask_notes_update"></a>

> Code samples

```bash
curl https://example.com/api/task_notes/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/task_notes/{id}`

Update an existing task note

<h3 id="tasknotesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|task|query|integer|false|none|
|since|query|string|false|none|

<h3 id="tasknotesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_notes_partial_update

<a id="opIdtask_notes_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/task_notes/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/task_notes/{id}`

Update an existing task note

<h3 id="tasknotespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|task|query|integer|false|none|
|since|query|string|false|none|

<h3 id="tasknotespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_statuses_list

<a id="opIdtask_statuses_list"></a>

> Code samples

```bash
curl https://example.com/api/task_statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/task_statuses`

Retrieve or search task statuses

<h3 id="taskstatuseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|since|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "created_at": "string",
      "id": 0,
      "name": "string",
      "practice_group": 0,
      "status_category": "O",
      "task_category": 0,
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="taskstatuseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="taskstatuseslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TaskStatus](#schemataskstatus)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_statuses_create

<a id="opIdtask_statuses_create"></a>

> Code samples

```bash
curl https://example.com/api/task_statuses \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/task_statuses`

Create a task status

<h3 id="taskstatusescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "created_at": "string",
  "id": 0,
  "name": "string",
  "practice_group": 0,
  "status_category": "O",
  "task_category": 0,
  "updated_at": "string"
}
```

<h3 id="taskstatusescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[TaskStatus](#schemataskstatus)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_statuses_read

<a id="opIdtask_statuses_read"></a>

> Code samples

```bash
curl https://example.com/api/task_statuses/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/task_statuses/{id}`

Retrieve an existing task status

<h3 id="taskstatusesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "created_at": "string",
  "id": 0,
  "name": "string",
  "practice_group": 0,
  "status_category": "O",
  "task_category": 0,
  "updated_at": "string"
}
```

<h3 id="taskstatusesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TaskStatus](#schemataskstatus)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_statuses_update

<a id="opIdtask_statuses_update"></a>

> Code samples

```bash
curl https://example.com/api/task_statuses/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/task_statuses/{id}`

Update an existing task status

<h3 id="taskstatusesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|

<h3 id="taskstatusesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_statuses_partial_update

<a id="opIdtask_statuses_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/task_statuses/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/task_statuses/{id}`

Update an existing task status

<h3 id="taskstatusespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|since|query|string|false|none|

<h3 id="taskstatusespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_templates_list

<a id="opIdtask_templates_list"></a>

> Code samples

```bash
curl https://example.com/api/task_templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/task_templates`

Retrieve or search task templates

<h3 id="tasktemplateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|assignee_user|query|integer|false|none|
|status|query|integer|false|none|
|assignee_group|query|integer|false|none|
|since|query|string|false|none|
|category|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "created_at": "string",
      "default_assignee_group": 0,
      "default_assignee_user": "string",
      "default_category": 0,
      "default_due_date_offset": "string",
      "default_note": "string",
      "default_priority": "10",
      "default_status": 0,
      "default_title": "string",
      "id": 0,
      "name": "string",
      "practice_group": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="tasktemplateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="tasktemplateslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TaskTemplate](#schematasktemplate)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_templates_create

<a id="opIdtask_templates_create"></a>

> Code samples

```bash
curl https://example.com/api/task_templates \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/task_templates`

Create a task template

<h3 id="tasktemplatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assignee_user|query|integer|false|none|
|status|query|integer|false|none|
|assignee_group|query|integer|false|none|
|since|query|string|false|none|
|category|query|integer|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "created_at": "string",
  "default_assignee_group": 0,
  "default_assignee_user": "string",
  "default_category": 0,
  "default_due_date_offset": "string",
  "default_note": "string",
  "default_priority": "10",
  "default_status": 0,
  "default_title": "string",
  "id": 0,
  "name": "string",
  "practice_group": "string",
  "updated_at": "string"
}
```

<h3 id="tasktemplatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[TaskTemplate](#schematasktemplate)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_templates_read

<a id="opIdtask_templates_read"></a>

> Code samples

```bash
curl https://example.com/api/task_templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/task_templates/{id}`

Retrieve an existing task template

<h3 id="tasktemplatesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|assignee_user|query|integer|false|none|
|status|query|integer|false|none|
|assignee_group|query|integer|false|none|
|since|query|string|false|none|
|category|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "created_at": "string",
  "default_assignee_group": 0,
  "default_assignee_user": "string",
  "default_category": 0,
  "default_due_date_offset": "string",
  "default_note": "string",
  "default_priority": "10",
  "default_status": 0,
  "default_title": "string",
  "id": 0,
  "name": "string",
  "practice_group": "string",
  "updated_at": "string"
}
```

<h3 id="tasktemplatesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TaskTemplate](#schematasktemplate)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_templates_update

<a id="opIdtask_templates_update"></a>

> Code samples

```bash
curl https://example.com/api/task_templates/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/task_templates/{id}`

Update an existing task template

<h3 id="tasktemplatesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|assignee_user|query|integer|false|none|
|status|query|integer|false|none|
|assignee_group|query|integer|false|none|
|since|query|string|false|none|
|category|query|integer|false|none|

<h3 id="tasktemplatesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## task_templates_partial_update

<a id="opIdtask_templates_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/task_templates/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/task_templates/{id}`

Update an existing task template

<h3 id="tasktemplatespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|assignee_user|query|integer|false|none|
|status|query|integer|false|none|
|assignee_group|query|integer|false|none|
|since|query|string|false|none|
|category|query|integer|false|none|

<h3 id="tasktemplatespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## tasks_list

<a id="opIdtasks_list"></a>

> Code samples

```bash
curl https://example.com/api/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/tasks`

Retrieve or search tasks

<h3 id="taskslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|page_size|query|integer|false|none|
|status|query|integer|false|none|
|category|query|integer|false|none|
|due_at_date|query|string|false|none|
|due_at_unknown|query|string|false|none|
|since|query|string|false|none|
|due_at_since|query|string|false|none|
|assignee_user|query|integer|false|none|
|assignee_group|query|integer|false|none|
|due_at_range|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": true,
      "assigned_by": "string",
      "assignee_group": 0,
      "assignee_user": "string",
      "associated_items": [
        {
          "task": 0,
          "type": "Patient",
          "value": 0
        }
      ],
      "category": 0,
      "created_at": "string",
      "created_by": "string",
      "due_date": {
        "time": "string"
      },
      "id": 0,
      "notes": [
        {
          "archived": true,
          "created_at": "string",
          "created_by": "string",
          "id": 0,
          "task": 0,
          "text": "string",
          "updated_at": "string"
        }
      ],
      "priority": "10",
      "status": 0,
      "title": "string",
      "updated_at": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

<h3 id="taskslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="taskslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Task](#schematask)]|false|none|result data|
|next|string|false|none|Next Paginated page|
|previous|string|false|none|Previous paginated page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## tasks_create

<a id="opIdtasks_create"></a>

> Code samples

```bash
curl https://example.com/api/tasks \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/tasks`

Create a task

<h3 id="taskscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|integer|false|none|
|category|query|integer|false|none|
|due_at_date|query|string|false|none|
|due_at_unknown|query|string|false|none|
|since|query|string|false|none|
|due_at_since|query|string|false|none|
|assignee_user|query|integer|false|none|
|assignee_group|query|integer|false|none|
|due_at_range|query|string|false|none|

> Example responses

> 201 Response

```json
{
  "archived": true,
  "assigned_by": "string",
  "assignee_group": 0,
  "assignee_user": "string",
  "associated_items": [
    {
      "task": 0,
      "type": "Patient",
      "value": 0
    }
  ],
  "category": 0,
  "created_at": "string",
  "created_by": "string",
  "due_date": {
    "time": "string"
  },
  "id": 0,
  "notes": [
    {
      "archived": true,
      "created_at": "string",
      "created_by": "string",
      "id": 0,
      "task": 0,
      "text": "string",
      "updated_at": "string"
    }
  ],
  "priority": "10",
  "status": 0,
  "title": "string",
  "updated_at": "string"
}
```

<h3 id="taskscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Task](#schematask)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## tasks_read

<a id="opIdtasks_read"></a>

> Code samples

```bash
curl https://example.com/api/tasks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/tasks/{id}`

Retrieve an existing task

<h3 id="tasksread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|status|query|integer|false|none|
|category|query|integer|false|none|
|due_at_date|query|string|false|none|
|due_at_unknown|query|string|false|none|
|since|query|string|false|none|
|due_at_since|query|string|false|none|
|assignee_user|query|integer|false|none|
|assignee_group|query|integer|false|none|
|due_at_range|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "archived": true,
  "assigned_by": "string",
  "assignee_group": 0,
  "assignee_user": "string",
  "associated_items": [
    {
      "task": 0,
      "type": "Patient",
      "value": 0
    }
  ],
  "category": 0,
  "created_at": "string",
  "created_by": "string",
  "due_date": {
    "time": "string"
  },
  "id": 0,
  "notes": [
    {
      "archived": true,
      "created_at": "string",
      "created_by": "string",
      "id": 0,
      "task": 0,
      "text": "string",
      "updated_at": "string"
    }
  ],
  "priority": "10",
  "status": 0,
  "title": "string",
  "updated_at": "string"
}
```

<h3 id="tasksread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Task](#schematask)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## tasks_update

<a id="opIdtasks_update"></a>

> Code samples

```bash
curl https://example.com/api/tasks/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/tasks/{id}`

Update an existing task

<h3 id="tasksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|status|query|integer|false|none|
|category|query|integer|false|none|
|due_at_date|query|string|false|none|
|due_at_unknown|query|string|false|none|
|since|query|string|false|none|
|due_at_since|query|string|false|none|
|assignee_user|query|integer|false|none|
|assignee_group|query|integer|false|none|
|due_at_range|query|string|false|none|

<h3 id="tasksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

## tasks_partial_update

<a id="opIdtasks_partial_update"></a>

> Code samples

```bash
curl https://example.com/api/tasks/string \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/tasks/{id}`

Update an existing task

<h3 id="taskspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|status|query|integer|false|none|
|category|query|integer|false|none|
|due_at_date|query|string|false|none|
|due_at_unknown|query|string|false|none|
|since|query|string|false|none|
|due_at_since|query|string|false|none|
|assignee_user|query|integer|false|none|
|assignee_group|query|integer|false|none|
|due_at_range|query|string|false|none|

<h3 id="taskspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission Denied|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
drchrono_oauth2 ( Scopes: tasks:read tasks:write )
</aside>

# Schemas

<h2 id="tocS_Appointment">Appointment</h2>
<!-- backwards compatibility -->
<a id="schemaappointment"></a>
<a id="schema_Appointment"></a>
<a id="tocSappointment"></a>
<a id="tocsappointment"></a>

```json
{
  "allow_overlapping": true,
  "appt_is_break": true,
  "base_recurring_appointment": "string",
  "billing_notes": [
    {
      "appointment": 0,
      "created_at": "string",
      "created_by": "string",
      "id": 0,
      "text": "string"
    }
  ],
  "billing_provider": "string",
  "billing_status": "string",
  "clinical_note": {
    "locked": true,
    "pdf": "string",
    "updated_at": "string"
  },
  "cloned_from": 0,
  "color": "string",
  "created_at": "string",
  "custom_fields": [
    {
      "created_at": "string",
      "field_type": 0,
      "field_value": "string",
      "updated_at": "string"
    }
  ],
  "custom_vitals": [
    {
      "value": "string",
      "vital_type": 0
    }
  ],
  "deleted_flag": true,
  "doctor": 0,
  "duration": 0,
  "exam_room": 0,
  "extended_updated_at": "string",
  "first_billed_date": "string",
  "icd10_codes": [
    "string"
  ],
  "icd9_codes": [
    "string"
  ],
  "id": "string",
  "ins1_status": "",
  "ins2_status": "",
  "is_virtual_base": true,
  "is_walk_in": true,
  "last_billed_date": "string",
  "notes": "string",
  "office": 0,
  "patient": 0,
  "primary_insurance_id_number": "string",
  "primary_insurer_name": "string",
  "primary_insurer_payer_id": "string",
  "profile": 0,
  "reason": "string",
  "recurring_appointment": true,
  "reminder_profile": "string",
  "reminders": [
    {
      "id": 0,
      "scheduled_time": "string",
      "type": "email"
    }
  ],
  "scheduled_time": "string",
  "secondary_insurance_id_number": "string",
  "secondary_insurer_name": "string",
  "secondary_insurer_payer_id": "string",
  "status": "",
  "status_transitions": [
    {
      "appointment": "string",
      "datetime": "string",
      "from_status": "string",
      "to_status": "string"
    }
  ],
  "supervising_provider": "string",
  "updated_at": "string",
  "vitals": {
    "blood_pressure_1": 0,
    "blood_pressure_2": 0,
    "bmi": "string",
    "head_circumference": 0,
    "head_circumference_units": "string",
    "height": 0,
    "height_units": "string",
    "oxygen_saturation": 0,
    "pain": "string",
    "pulse": 0,
    "respiratory_rate": 0,
    "smoking_status": "blank",
    "temperature": 0,
    "temperature_units": "string",
    "weight": 0,
    "weight_units": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_overlapping|boolean|false|none|Bypass overlap check.|
|appt_is_break|boolean|false|none|none|
|base_recurring_appointment|string|false|read-only|ID of base appointment of a recurrign series|
|billing_notes|[object]|false|read-only|Billing notes of the appointment. For writing, check `/api/claim_billing_notes`|
|billing_provider|string|false|read-only|none|
|billing_status|string|false|none|Should be one of `Auto Accident Claim`, `Balance Due`, `Bill Insurance`, `Bill Secondary Insurance`, `Durable Medical Equipment Claim`, `Internal Review`, `Paid In Full`, `Settled`, `Worker's Comp Claim` or one of the custom billing status|
|clinical_note|object|false|none|Associated clinical note object|
|cloned_from|integer|false|none|ID of the original appointment which this appointment cloned from. Will be null if the appointment is not cloned.|
|color|string|false|none|none|
|created_at|string|false|read-only|none|
|custom_fields|[object]|false|none|Custom appointment fields|
|custom_vitals|[object]|false|none|Custom vitals associated with this appointment.|
|deleted_flag|boolean|false|read-only|Whether the appointmetn is deleted.|
|doctor|integer|true|none|Doctor ID|
|duration|integer|false|none|Length of the appointment in minutes. Optional if `profile` is provided.|
|exam_room|integer|true|none|Index of the exam room that this appointment occurs in. See `/api/offices`|
|extended_updated_at|string|false|read-only|The most recent update time among appointment itself, its vitals and its custom vitals|
|first_billed_date|string|false|read-only|none|
|icd10_codes|[string]|false|none|none|
|icd9_codes|[string]|false|none|none|
|id|string|false|read-only|Unique identifier. Usually numeric, but not always|
|ins1_status|string|false|read-only|Billing status of primary insurer|
|ins2_status|string|false|read-only|Billing status of secondary insurer|
|is_virtual_base|boolean|false|read-only|none|
|is_walk_in|boolean|false|none|Whether the appointment is a walk-in appointment|
|last_billed_date|string|false|read-only|none|
|notes|string|false|none|none|
|office|integer|true|none|Office ID|
|patient|integer|true|none|ID of this appointment's patient. Breaks have a null patient field.|
|primary_insurance_id_number|string|false|read-only|none|
|primary_insurer_name|string|false|read-only|none|
|primary_insurer_payer_id|string|false|read-only|none|
|profile|integer|false|none|ID of an `/api/appointment_profiles` instance. The profile sets default values for `color`, `duration`, and `reason` on creation, which can be overriden by setting these values explicitly.|
|reason|string|false|none|Default to `""`|
|recurring_appointment|boolean|false|read-only|Whether the appointment is a recurring appointment or not|
|reminder_profile|string|false|none|Write-only. ID of an `/api/reminder_profiles` instance. Set this to apply a reminder profile to the appointment. Cannot be applied to an appointment with reminders.|
|reminders|[object]|false|read-only|Scheduled reminders of the appointment|
|scheduled_time|string|true|none|The starting time of the appointment|
|secondary_insurance_id_number|string|false|read-only|none|
|secondary_insurer_name|string|false|read-only|none|
|secondary_insurer_payer_id|string|false|read-only|none|
|status|string|false|none|One of ``, `Arrived`, `Checked In`, `In Room`, `Cancelled`, `Complete`, `Confirmed`, `In Session`, `No Show`, `Not Confirmed`, or `Rescheduled`. Or one of the custom statuses.|
|status_transitions|[object]|false|read-only|none|
|supervising_provider|string|false|read-only|Supervising provider of appointment if set.|
|updated_at|string|false|read-only|none|
|vitals|object|false|none|Clinical vitals associated with the appointment|

#### Enumerated Values

|Property|Value|
|---|---|
|ins1_status|""|
|ins1_status|Incomplete Information|
|ins1_status|In Process Emdeon|
|ins1_status|Rejected Emdeon|
|ins1_status|Rejected Jopari|
|ins1_status|In Process Payor|
|ins1_status|Rejected Waystar Professional|
|ins1_status|Rejected Waystar Institutional|
|ins1_status|In Process Payer|
|ins1_status|Payer Acknowledged|
|ins1_status|Rejected Payor|
|ins1_status|Rejected Payer|
|ins1_status|Paid in Full|
|ins1_status|Partially Paid|
|ins1_status|Coordination of Benefits|
|ins1_status|ERA Received|
|ins1_status|ERA Denied|
|ins1_status|HCFA Form Faxed|
|ins2_status|""|
|ins2_status|Incomplete Information|
|ins2_status|In Process Emdeon|
|ins2_status|Rejected Emdeon|
|ins2_status|Rejected Jopari|
|ins2_status|In Process Payor|
|ins2_status|Rejected Waystar Professional|
|ins2_status|Rejected Waystar Institutional|
|ins2_status|In Process Payer|
|ins2_status|Payer Acknowledged|
|ins2_status|Rejected Payor|
|ins2_status|Rejected Payer|
|ins2_status|Paid in Full|
|ins2_status|Partially Paid|
|ins2_status|Coordination of Benefits|
|ins2_status|ERA Received|
|ins2_status|ERA Denied|
|ins2_status|HCFA Form Faxed|
|status|""|
|status|Arrived|
|status|Checked In|
|status|Checked In Online|
|status|In Room|
|status|In Session|
|status|Complete|
|status|Confirmed|
|status|Not Confirmed|
|status|Rescheduled|
|status|Cancelled|
|status|No Show|

<h2 id="tocS_AppointmentProfile">AppointmentProfile</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentprofile"></a>
<a id="schema_AppointmentProfile"></a>
<a id="tocSappointmentprofile"></a>
<a id="tocsappointmentprofile"></a>

```json
{
  "archived": true,
  "color": "string",
  "doctor": 0,
  "duration": 0,
  "id": 0,
  "name": "string",
  "online_scheduling": true,
  "reason": "string",
  "sort_order": 0
}
```

Appointment profiles are for common kinds of appointments a doctor might have, such as "physical exam", which have a standard duration and should show up as the same color on the calendar.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|Indicates that the object has been soft-deleted and should not be used|
|color|string|true|none|none|
|doctor|integer|false|none|none|
|duration|integer|false|none|Length of an appointment in minutes|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|online_scheduling|boolean|true|none|Whether this profile should be available for online scheduling|
|reason|string|false|none|none|
|sort_order|integer|false|none|Override the usual ordering ordering of appointments in the patient's appointments page. Lower values are shown at the top|

<h2 id="tocS_AppointmentTemplate">AppointmentTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaappointmenttemplate"></a>
<a id="schema_AppointmentTemplate"></a>
<a id="tocSappointmenttemplate"></a>
<a id="tocsappointmenttemplate"></a>

```json
{
  "archived": true,
  "date_end": "string",
  "date_start": "string",
  "duration": 0,
  "exam_room": 0,
  "id": 0,
  "office": 0,
  "open_slots": [
    {
      "end": "string",
      "start": "string"
    }
  ],
  "profile": 0,
  "scheduled_time": "string",
  "week_days": [
    0
  ]
}
```

Appointment templates are blocks of time during which a doctor usually sees appointments with the same profile. These may have a longer duration then the corresponding profile, in which case they may allow multiple appointments to be booked during that period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|Indicats that the object has been soft-deleted and should not be used|
|date_end|string|false|none|none|
|date_start|string|false|none|none|
|duration|integer|false|none|Length of an appointment in minutes|
|exam_room|integer|true|none|**1-based** index for the exam room|
|id|integer|false|read-only|none|
|office|integer|true|none|none|
|open_slots|[object]|false|none|Array of time intervals during which the template is available. Only computed if the available and verbose query parameters are passed. Note that only slots long enough to fit an appointment with the corresponding profile are included.|
|profile|integer|true|none|ID of the appointment profile to default to|
|scheduled_time|string|true|none|none|
|week_days|[integer]|true|none|Array of integers that indicate week days (`0` = Monday, ..., `6` = Sunday)|

<h2 id="tocS_BillingLineItem">BillingLineItem</h2>
<!-- backwards compatibility -->
<a id="schemabillinglineitem"></a>
<a id="schema_BillingLineItem"></a>
<a id="tocSbillinglineitem"></a>
<a id="tocsbillinglineitem"></a>

```json
{
  "adjustment": 0,
  "allowed": 0,
  "appointment": 0,
  "balance_ins": 0,
  "balance_pt": 0,
  "balance_total": "string",
  "billed": 0,
  "billing_status": "",
  "code": "string",
  "denied_flag": true,
  "description": "string",
  "diagnosis_pointers": [
    "string"
  ],
  "doctor": "string",
  "expected_reimbursement": 0,
  "id": 0,
  "ins1_paid": 0,
  "ins2_paid": 0,
  "ins3_paid": 0,
  "ins_total": "string",
  "insurance_status": "string",
  "modifiers": [
    "string"
  ],
  "paid_total": "string",
  "patient": "string",
  "posted_date": "string",
  "price": 0,
  "procedure_type": "C",
  "pt_paid": 0,
  "quantity": 0,
  "service_date": "string",
  "units": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustment|number|false|read-only|Adjustment from total billed|
|allowed|number|false|read-only|Amount allowed by insurance|
|appointment|integer|true|none|Appointment ID|
|balance_ins|number|false|none|Insurance balance|
|balance_pt|number|false|read-only|Patient balance|
|balance_total|string|false|read-only|Total balance|
|billed|number|false|read-only|Total billed|
|billing_status|string|false|read-only|One of `""`, `"Incomplete Information"`, `"In Process Emdeon"`, `"In Process iHCFA"`, `"In Process Gateway"`, `"Rejected Emdeon"`, `"Rejected iHCFA"`, `"Rejected Gateway"`, `"In Process Payer"`, `"Payer Acknowledged"`, `"Rejected Payer"`, `"Paid in Full"`,  `"Partially Paid"`,  `"Coordination of Benefits"`,  `"ERA Received"`,  `"ERA Denied"`|
|code|string|true|none|none|
|denied_flag|boolean|false|read-only|none|
|description|string|false|read-only|none|
|diagnosis_pointers|[string]|true|none|List of 4 diagnosis pointers|
|doctor|string|false|read-only|Doctor ID|
|expected_reimbursement|number|false|read-only|none|
|id|integer|false|read-only|none|
|ins1_paid|number|false|read-only|Amount paid by patient's primary insurer|
|ins2_paid|number|false|read-only|Amount paid by patient's secondary insurer|
|ins3_paid|number|false|read-only|Amount paid by patinet's tertiary insurer|
|ins_total|string|false|read-only|Total amount paid by patient's insurers|
|insurance_status|string|false|read-only|This corresponds to the "Status/Adj Type" from billing detail screen|
|modifiers|[string]|false|none|List of 4 code modifiers|
|paid_total|string|false|read-only|Total amount paid|
|patient|string|false|read-only|Patient ID|
|posted_date|string|false|read-only|none|
|price|number|false|none|Price of procedure|
|procedure_type|string|true|none|One of `"CPT(C)"`, `"HCPCS(H)"`, `"Custom(U)"`, use 1 character identifier when using `POST`|
|pt_paid|number|false|none|Amount paid by patient|
|quantity|number|false|none|none|
|service_date|string|false|read-only|Date on which the service was rendered|
|units|string|false|none|Default to "UN"|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|billing_status|""|
|billing_status|Incomplete Information|
|billing_status|In Process Emdeon|
|billing_status|In Process iHCFA|
|billing_status|In Process Gateway|
|billing_status|In Process Jopari|
|billing_status|In Process Waystar|
|billing_status|Rejected Emdeon|
|billing_status|Rejected iHCFA|
|billing_status|Rejected Gateway|
|billing_status|Rejected Jopari|
|billing_status|Rejected Waystar|
|billing_status|In Process Payer|
|billing_status|Payer Acknowledged|
|billing_status|Rejected Payer|
|billing_status|Paid in Full|
|billing_status|Partially Paid|
|billing_status|Coordination of Benefits|
|billing_status|ERA Received|
|billing_status|ERA Denied|
|procedure_type|C|
|procedure_type|H|
|procedure_type|U|
|procedure_type|S|

<h2 id="tocS_BillingProfile">BillingProfile</h2>
<!-- backwards compatibility -->
<a id="schemabillingprofile"></a>
<a id="schema_BillingProfile"></a>
<a id="tocSbillingprofile"></a>
<a id="tocsbillingprofile"></a>

```json
{
  "archived": true,
  "cpt_codes": [
    {
      "code": "string",
      "diagnosis_pointers_icd10": [
        "string"
      ],
      "diagnosis_pointers_icd9": [
        "string"
      ],
      "modifiers": [
        "string"
      ],
      "ndc_code": [
        {
          "ndc_package_code": "string",
          "quantity": "string",
          "units": "F2"
        }
      ],
      "price": "string",
      "quantity": "string"
    }
  ],
  "created_at": "string",
  "custom_procedure_codes": [
    {
      "code": "string",
      "price": "string",
      "quantity": "string"
    }
  ],
  "doctor": "string",
  "hcpcs_codes": [
    {
      "code": "string",
      "diagnosis_pointers_icd10": [
        "string"
      ],
      "diagnosis_pointers_icd9": [
        "string"
      ],
      "modifiers": [
        "string"
      ],
      "ndc_code": [
        {
          "ndc_package_code": "string",
          "quantity": "string",
          "units": "F2"
        }
      ],
      "price": "string",
      "quantity": "string"
    }
  ],
  "icd10_codes": [
    "string"
  ],
  "icd9_codes": [
    "string"
  ],
  "id": 0,
  "name": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|none|
|cpt_codes|[object]|false|read-only|Array of CPT Code objects|
|created_at|string|false|read-only|none|
|custom_procedure_codes|[object]|false|read-only|Array of custom procedure code objects|
|doctor|string|false|read-only|none|
|hcpcs_codes|[object]|false|read-only|Array of HCPCS Code objects|
|icd10_codes|[string]|false|read-only|ICD10 Codes represented in string format|
|icd9_codes|[string]|false|read-only|ICD9 Codes represented in string format|
|id|integer|false|read-only|none|
|name|string|false|none|none|
|updated_at|string|false|read-only|none|

<h2 id="tocS_CarePlan">CarePlan</h2>
<!-- backwards compatibility -->
<a id="schemacareplan"></a>
<a id="schema_CarePlan"></a>
<a id="tocScareplan"></a>
<a id="tocscareplan"></a>

```json
{
  "appointment": "string",
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "description": "string",
  "id": 0,
  "instructions": "string",
  "patient": "string",
  "plan_type": "1",
  "scheduled_date": "string",
  "title": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointment|string|false|read-only|none|
|code|string|false|read-only|none|
|code_system|string|false|read-only|none|
|created_at|string|false|read-only|none|
|description|string|false|read-only|none|
|id|integer|false|read-only|none|
|instructions|string|false|read-only|none|
|patient|string|false|read-only|none|
|plan_type|string|false|read-only|Can be one of the following: `1`(Goal), `2`(Patient education), `3`(Patient decision aid), `4`(Patient clinical instruction), `5`(Referral to other doctor), `6`(Health concerns)|
|scheduled_date|string|false|read-only|none|
|title|string|false|read-only|none|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|plan_type|1|
|plan_type|2|
|plan_type|3|
|plan_type|4|
|plan_type|5|
|plan_type|6|

<h2 id="tocS_CareTeamMember">CareTeamMember</h2>
<!-- backwards compatibility -->
<a id="schemacareteammember"></a>
<a id="schema_CareTeamMember"></a>
<a id="tocScareteammember"></a>
<a id="tocscareteammember"></a>

```json
{
  "appointment": "string",
  "created_at": "string",
  "id": 0,
  "patient": "string",
  "user": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointment|string|false|read-only|none|
|created_at|string|false|read-only|none|
|id|integer|false|read-only|none|
|patient|string|false|read-only|none|
|user|string|false|read-only|none|

<h2 id="tocS_CashPayment">CashPayment</h2>
<!-- backwards compatibility -->
<a id="schemacashpayment"></a>
<a id="schema_CashPayment"></a>
<a id="tocScashpayment"></a>
<a id="tocscashpayment"></a>

```json
{
  "amount": 0,
  "appointment": 0,
  "created_at": "string",
  "created_by": "string",
  "doctor": 0,
  "id": 0,
  "line_item": 0,
  "notes": "string",
  "patient": 0,
  "payment_method": "CASH",
  "payment_transaction_type": "",
  "posted_date": "string",
  "received_date": "string",
  "trace_number": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|Amount of cash for this payment, cannot be zero|
|appointment|integer|false|none|If this is absent, the apponitment will be inferred from line item|
|created_at|string|false|read-only|none|
|created_by|string|false|read-only|none|
|doctor|integer|false|none|none|
|id|integer|false|read-only|none|
|line_item|integer|false|none|none|
|notes|string|false|none|none|
|patient|integer|true|none|none|
|payment_method|string|false|none|`"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`|
|payment_transaction_type|string|false|none|`"" for Credit, "REF" for Refund, "COR" for Correction, "COPAY" for Copay, "COINSR" for Coinsurance, "OTHR" for Other`|
|posted_date|string|false|read-only|none|
|received_date|string|false|none|none|
|trace_number|string|false|none|none|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_method|CASH|
|payment_method|CHCK|
|payment_method|DBIT|
|payment_method|CRDT|
|payment_method|AMEX|
|payment_method|VISA|
|payment_method|MSTR|
|payment_method|DISC|
|payment_method|SQR1|
|payment_method|SQRE|
|payment_method|PTPA|
|payment_method|ONPT|
|payment_method|OTHR|
|payment_transaction_type|""|
|payment_transaction_type|REF|
|payment_transaction_type|COR|
|payment_transaction_type|COPAY|
|payment_transaction_type|COINSR|
|payment_transaction_type|OTHR|

<h2 id="tocS_CashPaymentLog">CashPaymentLog</h2>
<!-- backwards compatibility -->
<a id="schemacashpaymentlog"></a>
<a id="schema_CashPaymentLog"></a>
<a id="tocScashpaymentlog"></a>
<a id="tocscashpaymentlog"></a>

```json
{
  "action": "C",
  "amount": 0,
  "appointment": "string",
  "created_by": "string",
  "doctor": "string",
  "id": 0,
  "patient": "string",
  "payment_method": "CASH",
  "source": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|`C`(Create), `U`(Update), `D`(Delete), `F`(Fill), `A`(Autofill)|
|amount|number|false|none|none|
|appointment|string|false|read-only|ID of appointment associated with the payment|
|created_by|string|false|read-only|ID of user who created the payment|
|doctor|string|false|read-only|none|
|id|integer|false|read-only|none|
|patient|string|false|read-only|none|
|payment_method|string|false|none|`"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`|
|source|string|false|none|none|
|updated_at|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|C|
|action|U|
|action|D|
|action|F|
|action|A|
|payment_method|CASH|
|payment_method|CHCK|
|payment_method|DBIT|
|payment_method|CRDT|
|payment_method|AMEX|
|payment_method|VISA|
|payment_method|MSTR|
|payment_method|DISC|
|payment_method|SQR1|
|payment_method|SQRE|
|payment_method|PTPA|
|payment_method|ONPT|
|payment_method|OTHR|

<h2 id="tocS_ClaimBillingNotes">ClaimBillingNotes</h2>
<!-- backwards compatibility -->
<a id="schemaclaimbillingnotes"></a>
<a id="schema_ClaimBillingNotes"></a>
<a id="tocSclaimbillingnotes"></a>
<a id="tocsclaimbillingnotes"></a>

```json
{
  "appointment": 0,
  "created_at": "string",
  "created_by": "string",
  "id": 0,
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointment|integer|true|none|none|
|created_at|string|false|read-only|none|
|created_by|string|false|read-only|ID of `/users` when created the note|
|id|integer|false|read-only|none|
|text|string|false|none|none|

<h2 id="tocS_ClinicalNote">ClinicalNote</h2>
<!-- backwards compatibility -->
<a id="schemaclinicalnote"></a>
<a id="schema_ClinicalNote"></a>
<a id="tocSclinicalnote"></a>
<a id="tocsclinicalnote"></a>

```json
{
  "appointment": "string",
  "archived": true,
  "clinical_note_sections": [
    {
      "clinical_note_template": 0,
      "name": "string",
      "values": [
        {
          "clinical_note_field": 0,
          "id": 0,
          "value": "string"
        }
      ]
    }
  ],
  "patient": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointment|string|false|read-only|none|
|archived|boolean|false|none|none|
|clinical_note_sections|[object]|false|none|none|
|patient|string|false|read-only|none|

<h2 id="tocS_ConsentForm">ConsentForm</h2>
<!-- backwards compatibility -->
<a id="schemaconsentform"></a>
<a id="schema_ConsentForm"></a>
<a id="tocSconsentform"></a>
<a id="tocsconsentform"></a>

```json
{
  "archived": true,
  "assign_by_default": true,
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "is_mandatory": true,
  "order": 0,
  "title": "string",
  "updated_at": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|none|
|assign_by_default|boolean|true|none|If true, consent form will always be automatically assigned to appointments|
|created_at|string|false|read-only|none|
|doctor|integer|true|none|none|
|id|integer|false|read-only|none|
|is_mandatory|boolean|true|none|If true, consent form must be signed prior to appointment check in|
|order|integer|false|read-only|The order of consent forms that will show in management screen|
|title|string|true|none|none|
|updated_at|string|false|read-only|none|
|uri|string|true|none|Files are passed using `multipart/form-data` encoding, but returned as URLs.|

<h2 id="tocS_Coverage">Coverage</h2>
<!-- backwards compatibility -->
<a id="schemacoverage"></a>
<a id="schema_Coverage"></a>
<a id="tocScoverage"></a>
<a id="tocscoverage"></a>

```json
{
  "appointment": "string",
  "cob_level": "string",
  "coverage_details": "string",
  "coverage_subscriber": "string",
  "eligibility": "string",
  "patient": "string",
  "payer_name": "string",
  "query_date": "string",
  "request_service_type": "1",
  "service_type_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointment|string|false|read-only|none|
|cob_level|string|false|read-only|The level of insurance the eligibility check was run on. Can be one of the following: `Primary Insurance` or `Secondary Insurance`|
|coverage_details|string|false|read-only|A variable size object containing the details of the eligibility check, if returned by the clearinghouse that ran the eligibility check|
|coverage_subscriber|string|false|read-only|A variable size object containing subscriber information, if returned by the clearinghouse that ran the eligibility check|
|eligibility|string|false|none|<br>Value \| Description<br>--- \| ----<br>`'1'` \| Active Coverage<br>`'2'` \| Active - Full Risk Capitation<br>`'3'` \| Active - Services Capitated<br>`'4'` \| Active - Services Capitated to Primary Care Physician<br>`'5'` \| Active - Pending Investigation<br>`'6'` \| Inactive<br>`'7'` \| Inactive - Pending Eligibility Update<br>`'8'` \| Inactive - Pending Investigation<br>`'A'` \| Co-Insurance<br>`'B'` \| Co-Payment<br>`'C'` \| Deductible<br>`'CB'` \| Coverage Basis<br>`'D'` \| Benefit Description<br>`'E'` \| Exclusions<br>`'F'` \| Limitations<br>`'G'` \| Out of Pocket (Stop Loss)<br>`'H'` \| Unlimited<br>`'I'` \| Non-Covered<br>`'J'` \| Cost Containment<br>`'K'` \| Reserve<br>`'L'` \| Primary Care Provider<br>`'M'` \| Pre-existing Condition<br>`'MC'` \| Managed Care Coordinator<br>`'N'` \| Services Restricted to Following Provider<br>`'O'` \| Not Deemed a Medical Necessity<br>`'P'` \| Benefit Disclaimer<br>`'Q'` \| Second Surgical Opinion Required<br>`'R'` \| Other or Additional Payor<br>`'S'` \| Prior Year(s) History<br>`'T'` \| Card(s) Reported Lost/Stolen<br>`'U'` \| Contact Following Entity for Eligibility or Benefit Information<br>`'V'` \| Cannot Process<br>`'W'` \| Other Source of Data<br>`'X'` \| Health Care Facility<br>`'Y'` \| Spend Down<br>|
|patient|string|false|read-only|none|
|payer_name|string|false|none|The name of the payer as returned by the clearinghouse that ran the eligibility check|
|query_date|string|false|read-only|The time at which the request was made|
|request_service_type|string|false|none|<br>Value \| Description<br>--- \| ----<br>`'1'` \| Medical Care<br>`'2'` \| Surgical<br>`'3'` \| Consultation<br>`'4'` \| Diagnostic X-Ray<br>`'5'` \| Diagnostic Lab<br>`'6'` \| Radiation Therapy<br>`'7'` \| Anesthesia<br>`'8'` \| Surgical Assistance<br>`'9'` \| Other Medical<br>`'10'` \| Blood Charges<br>`'11'` \| Used Durable Medical Equipment<br>`'12'` \| Durable Medical Equipment Purchase<br>`'13'` \| Ambulatory Service Center Facility<br>`'14'` \| Renal Supplies in the Home<br>`'15'` \| Alternate Method Dialysis<br>`'16'` \| Chronic Renal Disease (CRD) Equipment<br>`'17'` \| Pre-Admission Testing<br>`'18'` \| Durable Medical Equipment Rental<br>`'19'` \| Pneumonia Vaccine<br>`'20'` \| Second Surgical Opinion<br>`'21'` \| Third Surgical Opinion<br>`'22'` \| Social Work<br>`'23'` \| Diagnostic Dental<br>`'24'` \| Periodontics<br>`'25'` \| Restorative<br>`'26'` \| Endodontics<br>`'27'` \| Maxillofacial Prosthetics<br>`'28'` \| Adjunctive Dental Services<br>`'30'` \| Health Benefit Plan Coverage<br>`'32'` \| Plan Waiting Period<br>`'33'` \| Chiropractic<br>`'34'` \| Chiropractic Office Visits<br>`'35'` \| Dental Care<br>`'36'` \| Dental Crowns<br>`'37'` \| Dental Accident<br>`'38'` \| Orthodontics<br>`'39'` \| Prosthodontics<br>`'40'` \| Oral Surgery<br>`'41'` \| Routine (Preventive) Dental<br>`'42'` \| Home Health Care<br>`'43'` \| Home Health Prescriptions<br>`'44'` \| Home Health Visits<br>`'45'` \| Hospice<br>`'46'` \| Respite Care<br>`'47'` \| Hospital<br>`'48'` \| Hospital - Inpatient<br>`'49'` \| Hospital - Room and Board<br>`'50'` \| Hospital - Outpatient<br>`'51'` \| Hospital - Emergency Accident<br>`'52'` \| Hospital - Emergency Medical<br>`'53'` \| Hospital - Ambulatory Surgical<br>`'54'` \| Long Term Care<br>`'55'` \| Major Medical<br>`'56'` \| Medically Related Transportation<br>`'57'` \| Air Transportation<br>`'58'` \| Cabulance<br>`'59'` \| Licensed Ambulance<br>`'60'` \| General Benefits<br>`'61'` \| In-vitro Fertilization<br>`'62'` \| MRI/CAT Scan<br>`'63'` \| Donor Procedures<br>`'64'` \| Acupuncture<br>`'65'` \| Newborn Care<br>`'66'` \| Pathology<br>`'67'` \| Smoking Cessation<br>`'68'` \| Well Baby Care<br>`'69'` \| Maternity<br>`'70'` \| Transplants<br>`'71'` \| Audiology Exam<br>`'72'` \| Inhalation Therapy<br>`'73'` \| Diagnostic Medical<br>`'74'` \| Private Duty Nursing<br>`'75'` \| Prosthetic Device<br>`'76'` \| Dialysis<br>`'77'` \| Otological Exam<br>`'78'` \| Chemotherapy<br>`'79'` \| Allergy Testing<br>`'80'` \| Immunizations<br>`'81'` \| Routine Physical<br>`'82'` \| Family Planning<br>`'83'` \| Infertility<br>`'84'` \| Abortion<br>`'85'` \| AIDS<br>`'86'` \| Emergency Services<br>`'87'` \| Cancer<br>`'88'` \| Pharmacy<br>`'89'` \| Free Standing Prescription Drug<br>`'90'` \| Mail Order Prescription Drug<br>`'91'` \| Brand Name Prescription Drug<br>`'92'` \| Generic Prescription Drug<br>`'93'` \| Podiatry<br>`'94'` \| Podiatry - Office Visits<br>`'95'` \| Podiatry - Nursing Home Visits<br>`'96'` \| Professional (Physician)<br>`'97'` \| Anesthesiologist<br>`'98'` \| Professional (Physician) Visit - Office<br>`'99'` \| Professional (Physician) Visit - Inpatient<br>`'A0'` \| Professional (Physician) Visit - Outpatient<br>`'A1'` \| Professional (Physician) Visit - Nursing Home<br>`'A2'` \| Professional (Physician) Visit - Skilled Nursing Facility<br>`'A3'` \| Professional (Physician) Visit - Home<br>`'A4'` \| Psychiatric<br>`'A5'` \| Psychiatric - Room and Board<br>`'A6'` \| Psychotherapy<br>`'A7'` \| Psychiatric - Inpatient<br>`'A8'` \| Psychiatric - Outpatient<br>`'A9'` \| Rehabilitation<br>`'AA'` \| Rehabilitation - Room and Board<br>`'AB'` \| Rehabilitation - Inpatient<br>`'AC'` \| Rehabilitation - Outpatient<br>`'AD'` \| Occupational Therapy<br>`'AE'` \| Physical Medicine<br>`'AF'` \| Speech Therapy<br>`'AG'` \| Skilled Nursing Care<br>`'AH'` \| Skilled Nursing Care - Room and Board<br>`'AI'` \| Substance Abuse<br>`'AJ'` \| Alcoholism<br>`'AK'` \| Drug Addiction<br>`'AL'` \| Vision (Optometry)<br>`'AM'` \| Frames<br>`'AN'` \| Routine Exam<br>`'AO'` \| Lenses<br>`'AQ'` \| Nonmedically Necessary Physical<br>`'AR'` \| Experimental Drug Therapy<br>`'B1'` \| Burn Care<br>`'B2'` \| Brand Name Prescription Drug - Formulary<br>`'B3'` \| Brand Name Prescription Drug - Non-Formulary<br>`'BA'` \| Independent Medical Evaluation<br>`'BB'` \| Partial Hospitalization (Psychiatric)<br>`'BC'` \| Day Care (Psychiatric)<br>`'BD'` \| Cognitive Therapy<br>`'BE'` \| Massage Therapy<br>`'BF'` \| Pulmonary Rehabilitation<br>`'BG'` \| Cardiac Rehabilitation<br>`'BH'` \| Pediatric<br>`'BI'` \| Nursery<br>`'BJ'` \| Skin<br>`'BK'` \| Orthopedic<br>`'BL'` \| Cardiac<br>`'BM'` \| Lymphatic<br>`'BN'` \| Gastrointestinal<br>`'BP'` \| Endocrine<br>`'BQ'` \| Neurology<br>`'BR'` \| Eye<br>`'BS'` \| Invasive Procedures<br>`'BT'` \| Gynecological<br>`'BU'` \| Obstetrical<br>`'BV'` \| Obstetrical/Gynecological<br>`'BW'` \| Mail Order Prescription Drug: Brand Name<br>`'BX'` \| Mail Order Prescription Drug: Generic<br>`'BY'` \| Physician Visit - Office: Sick<br>`'BZ'` \| Physician Visit - Office: Well<br>`'C1'` \| Coronary Care<br>`'CA'` \| Private Duty Nursing - Inpatient<br>`'CB'` \| Private Duty Nursing - Home<br>`'CC'` \| Surgical Benefits - Professional (Physician)<br>`'CD'` \| Surgical Benefits - Facility<br>`'CE'` \| Mental Health Provider - Inpatient<br>`'CF'` \| Mental Health Provider - Outpatient<br>`'CG'` \| Mental Health Facility - Inpatient<br>`'CH'` \| Mental Health Facility - Outpatient<br>`'CI'` \| Substance Abuse Facility - Inpatient<br>`'CJ'` \| Substance Abuse Facility - Outpatient<br>`'CK'` \| Screening X-ray<br>`'CL'` \| Screening laboratory<br>`'CM'` \| Mammogram, High Risk Patient<br>`'CN'` \| Mammogram, Low Risk Patient<br>`'CO'` \| Flu Vaccination<br>`'CP'` \| Eyewear and Eyewear Accessories<br>`'CQ'` \| Case Management<br>`'DG'` \| Dermatology<br>`'DM'` \| Durable Medical Equipment<br>`'DS'` \| Diabetic Supplies<br>`'GF'` \| Generic Prescription Drug - Formulary<br>`'GN'` \| Generic Prescription Drug - Non-Formulary<br>`'GY'` \| Allergy<br>`'IC'` \| Intensive Care<br>`'MH'` \| Mental Health<br>`'NI'` \| Neonatal Intensive Care<br>`'ON'` \| Oncology<br>`'PT'` \| Physical Therapy<br>`'PU'` \| Pulmonary<br>`'RN'` \| Renal<br>`'RT'` \| Residential Psychiatric Treatment<br>`'TC'` \| Transitional Care<br>`'TN'` \| Transitional Nursery Care<br>`'UC'` \| Urgent Care<br>|
|service_type_description|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|request_service_type|1|
|request_service_type|2|
|request_service_type|3|
|request_service_type|4|
|request_service_type|5|
|request_service_type|6|
|request_service_type|7|
|request_service_type|8|
|request_service_type|9|
|request_service_type|10|
|request_service_type|11|
|request_service_type|12|
|request_service_type|13|
|request_service_type|14|
|request_service_type|15|
|request_service_type|16|
|request_service_type|17|
|request_service_type|18|
|request_service_type|19|
|request_service_type|20|
|request_service_type|21|
|request_service_type|22|
|request_service_type|23|
|request_service_type|24|
|request_service_type|25|
|request_service_type|26|
|request_service_type|27|
|request_service_type|28|
|request_service_type|30|
|request_service_type|32|
|request_service_type|33|
|request_service_type|34|
|request_service_type|35|
|request_service_type|36|
|request_service_type|37|
|request_service_type|38|
|request_service_type|39|
|request_service_type|40|
|request_service_type|41|
|request_service_type|42|
|request_service_type|43|
|request_service_type|44|
|request_service_type|45|
|request_service_type|46|
|request_service_type|47|
|request_service_type|48|
|request_service_type|49|
|request_service_type|50|
|request_service_type|51|
|request_service_type|52|
|request_service_type|53|
|request_service_type|54|
|request_service_type|55|
|request_service_type|56|
|request_service_type|57|
|request_service_type|58|
|request_service_type|59|
|request_service_type|60|
|request_service_type|61|
|request_service_type|62|
|request_service_type|63|
|request_service_type|64|
|request_service_type|65|
|request_service_type|66|
|request_service_type|67|
|request_service_type|68|
|request_service_type|69|
|request_service_type|70|
|request_service_type|71|
|request_service_type|72|
|request_service_type|73|
|request_service_type|74|
|request_service_type|75|
|request_service_type|76|
|request_service_type|77|
|request_service_type|78|
|request_service_type|79|
|request_service_type|80|
|request_service_type|81|
|request_service_type|82|
|request_service_type|83|
|request_service_type|84|
|request_service_type|85|
|request_service_type|86|
|request_service_type|87|
|request_service_type|88|
|request_service_type|89|
|request_service_type|90|
|request_service_type|91|
|request_service_type|92|
|request_service_type|93|
|request_service_type|94|
|request_service_type|95|
|request_service_type|96|
|request_service_type|97|
|request_service_type|98|
|request_service_type|99|
|request_service_type|A0|
|request_service_type|A1|
|request_service_type|A2|
|request_service_type|A3|
|request_service_type|A4|
|request_service_type|A5|
|request_service_type|A6|
|request_service_type|A7|
|request_service_type|A8|
|request_service_type|A9|
|request_service_type|AA|
|request_service_type|AB|
|request_service_type|AC|
|request_service_type|AD|
|request_service_type|AE|
|request_service_type|AF|
|request_service_type|AG|
|request_service_type|AH|
|request_service_type|AI|
|request_service_type|AJ|
|request_service_type|AK|
|request_service_type|AL|
|request_service_type|AM|
|request_service_type|AN|
|request_service_type|AO|
|request_service_type|AQ|
|request_service_type|AR|
|request_service_type|B1|
|request_service_type|B2|
|request_service_type|B3|
|request_service_type|BA|
|request_service_type|BB|
|request_service_type|BC|
|request_service_type|BD|
|request_service_type|BE|
|request_service_type|BF|
|request_service_type|BG|
|request_service_type|BH|
|request_service_type|BI|
|request_service_type|BJ|
|request_service_type|BK|
|request_service_type|BL|
|request_service_type|BM|
|request_service_type|BN|
|request_service_type|BP|
|request_service_type|BQ|
|request_service_type|BR|
|request_service_type|BS|
|request_service_type|BT|
|request_service_type|BU|
|request_service_type|BV|
|request_service_type|BW|
|request_service_type|BX|
|request_service_type|BY|
|request_service_type|BZ|
|request_service_type|C1|
|request_service_type|CA|
|request_service_type|CB|
|request_service_type|CC|
|request_service_type|CD|
|request_service_type|CE|
|request_service_type|CF|
|request_service_type|CG|
|request_service_type|CH|
|request_service_type|CI|
|request_service_type|CJ|
|request_service_type|CK|
|request_service_type|CL|
|request_service_type|CM|
|request_service_type|CN|
|request_service_type|CO|
|request_service_type|CP|
|request_service_type|CQ|
|request_service_type|DG|
|request_service_type|DM|
|request_service_type|DS|
|request_service_type|GF|
|request_service_type|GN|
|request_service_type|GY|
|request_service_type|IC|
|request_service_type|MH|
|request_service_type|NI|
|request_service_type|ON|
|request_service_type|PT|
|request_service_type|PU|
|request_service_type|RN|
|request_service_type|RT|
|request_service_type|TC|
|request_service_type|TN|
|request_service_type|UC|

<h2 id="tocS_CustomAppointmentFieldType">CustomAppointmentFieldType</h2>
<!-- backwards compatibility -->
<a id="schemacustomappointmentfieldtype"></a>
<a id="schema_CustomAppointmentFieldType"></a>
<a id="tocScustomappointmentfieldtype"></a>
<a id="tocscustomappointmentfieldtype"></a>

```json
{
  "archived": true,
  "created_at": "string",
  "doctor": "string",
  "field_desc": "string",
  "field_name": "string",
  "id": 0,
  "order": 0,
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|Indicates that the object has been soft-deleted and should not be used|
|created_at|string|false|read-only|none|
|doctor|string|false|read-only|none|
|field_desc|string|false|none|Description of the custom field|
|field_name|string|false|none|none|
|id|integer|false|read-only|none|
|order|integer|false|read-only|displayed order in patient's demographic page|
|updated_at|string|false|read-only|none|

<h2 id="tocS_CustomInsurancePlanName">CustomInsurancePlanName</h2>
<!-- backwards compatibility -->
<a id="schemacustominsuranceplanname"></a>
<a id="schema_CustomInsurancePlanName"></a>
<a id="tocScustominsuranceplanname"></a>
<a id="tocscustominsuranceplanname"></a>

```json
{
  "archived": true,
  "created_at": "string",
  "doctor": "string",
  "id": 0,
  "insurance_plan_name": "string",
  "updated_at": "string",
  "user": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|created_at|string|false|read-only|none|
|doctor|string|false|read-only|List custom appointment fields defined by the doctor with the given ID|
|id|integer|false|read-only|none|
|insurance_plan_name|string|false|none|Custom name|
|updated_at|string|false|read-only|none|
|user|string|false|read-only|User who created the custom insurance plan name|

<h2 id="tocS_CustomPatientFieldType">CustomPatientFieldType</h2>
<!-- backwards compatibility -->
<a id="schemacustompatientfieldtype"></a>
<a id="schema_CustomPatientFieldType"></a>
<a id="tocScustompatientfieldtype"></a>
<a id="tocscustompatientfieldtype"></a>

```json
{
  "allowed_values": "string",
  "archived": true,
  "description": "string",
  "doctor": 0,
  "id": 0,
  "name": "string",
  "template_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_values|string|false|none|Allowed values if needed. Values must be separated by comma `,`|
|archived|boolean|false|none|Indicates that the object has been soft-deleted, and should not be used|
|description|string|false|none|none|
|doctor|integer|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|template_name|string|false|none|Custom Patient Demographics with `template_name` set can be inserted into clinical notes via Form Builder. Only letters (a-z or A-Z), numbers (0-9) or underscore(_) are allowed for template name.|

<h2 id="tocS_CustomVitalType">CustomVitalType</h2>
<!-- backwards compatibility -->
<a id="schemacustomvitaltype"></a>
<a id="schema_CustomVitalType"></a>
<a id="tocScustomvitaltype"></a>
<a id="tocscustomvitaltype"></a>

```json
{
  "allowed_values": [
    "string"
  ],
  "archived": true,
  "data_type": "text",
  "description": "string",
  "doctor": "string",
  "fraction_delimiter": "string",
  "id": 0,
  "is_fraction_field": true,
  "name": "string",
  "unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_values|[string]|false|none|If `data_type` is `single_sel`, this is the array of values in the select's dropdown.|
|archived|boolean|false|none|Indicates that the object has been soft-deleted and should not be used|
|data_type|string|false|none|One of `text`, `number`, or `single_sel`|
|description|string|false|none|none|
|doctor|string|false|read-only|ID of the doctor who created the custom vital|
|fraction_delimiter|string|false|none|If `is_fraction_field` is true, this is the character separating the numerator and denominator|
|id|integer|false|read-only|none|
|is_fraction_field|boolean|false|none|none|
|name|string|false|none|none|
|unit|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|data_type|text|
|data_type|number|
|data_type|single_sel|

<h2 id="tocS_Doctor">Doctor</h2>
<!-- backwards compatibility -->
<a id="schemadoctor"></a>
<a id="schema_Doctor"></a>
<a id="tocSdoctor"></a>
<a id="tocsdoctor"></a>

```json
{
  "cell_phone": "string",
  "country": "BD",
  "email": "string",
  "first_name": "string",
  "group_npi_number": "string",
  "home_phone": "string",
  "id": 0,
  "is_account_suspended": true,
  "job_title": "",
  "last_name": "string",
  "npi_number": "string",
  "office_phone": "string",
  "practice_group": "string",
  "practice_group_name": "string",
  "profile_picture": "string",
  "specialty": "string",
  "suffix": "string",
  "timezone": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cell_phone|string|false|none|none|
|country|string|false|none|Two-letter conutry code. Default is `US`|
|email|string|false|read-only|none|
|first_name|string|false|none|none|
|group_npi_number|string|false|none|none|
|home_phone|string|false|none|none|
|id|integer|false|read-only|none|
|is_account_suspended|boolean|false|none|Indicates the doctor's account is suspended or not|
|job_title|string|false|none|none|
|last_name|string|false|none|none|
|npi_number|string|false|none|If both this field and `group_npi_number` are set, prefer this field|
|office_phone|string|false|none|none|
|practice_group|string|false|read-only|The ID of the practice group this user belongs to. This can be used to identify users in the same practice.|
|practice_group_name|string|false|read-only|none|
|profile_picture|string|false|read-only|none|
|specialty|string|false|none|none|
|suffix|string|false|none|none|
|timezone|string|false|none|none|
|website|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|country|BD|
|country|WF|
|country|BF|
|country|BG|
|country|BA|
|country|BB|
|country|BE|
|country|BL|
|country|BM|
|country|BN|
|country|BO|
|country|JP|
|country|BI|
|country|BJ|
|country|BT|
|country|JM|
|country|BV|
|country|JO|
|country|WS|
|country|BQ|
|country|BR|
|country|BS|
|country|JE|
|country|BY|
|country|BZ|
|country|RU|
|country|RW|
|country|RS|
|country|TL|
|country|RE|
|country|TM|
|country|TJ|
|country|RO|
|country|TK|
|country|GW|
|country|GU|
|country|GT|
|country|GS|
|country|GR|
|country|GQ|
|country|GP|
|country|BH|
|country|GY|
|country|GG|
|country|GF|
|country|GE|
|country|GD|
|country|GB|
|country|GA|
|country|GN|
|country|GM|
|country|GL|
|country|KW|
|country|GI|
|country|GH|
|country|OM|
|country|TN|
|country|BW|
|country|HR|
|country|HT|
|country|HU|
|country|HK|
|country|HN|
|country|HM|
|country|KR|
|country|AD|
|country|PR|
|country|PS|
|country|PW|
|country|PT|
|country|KN|
|country|PY|
|country|AI|
|country|PA|
|country|PF|
|country|PG|
|country|PE|
|country|PK|
|country|PH|
|country|PN|
|country|PL|
|country|PM|
|country|ZM|
|country|EH|
|country|EE|
|country|EG|
|country|ZA|
|country|EC|
|country|AL|
|country|AO|
|country|KZ|
|country|ET|
|country|ZW|
|country|KY|
|country|ES|
|country|ER|
|country|ME|
|country|MD|
|country|MG|
|country|MF|
|country|MA|
|country|MC|
|country|UZ|
|country|MM|
|country|ML|
|country|MO|
|country|MN|
|country|MH|
|country|MK|
|country|MU|
|country|MT|
|country|MW|
|country|MV|
|country|MQ|
|country|MP|
|country|MS|
|country|MR|
|country|AU|
|country|UG|
|country|MY|
|country|MX|
|country|MZ|
|country|FR|
|country|AW|
|country|AF|
|country|AX|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|NI|
|country|NL|
|country|NO|
|country|NA|
|country|VU|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NZ|
|country|NP|
|country|NR|
|country|NU|
|country|CK|
|country|CI|
|country|CH|
|country|CO|
|country|CN|
|country|CM|
|country|CL|
|country|CC|
|country|CA|
|country|CG|
|country|CF|
|country|CD|
|country|CZ|
|country|CY|
|country|CX|
|country|CR|
|country|KP|
|country|CW|
|country|CV|
|country|CU|
|country|SZ|
|country|SY|
|country|SX|
|country|KG|
|country|KE|
|country|SS|
|country|SR|
|country|KI|
|country|KH|
|country|SV|
|country|KM|
|country|ST|
|country|SK|
|country|SJ|
|country|SI|
|country|SH|
|country|SO|
|country|SN|
|country|SM|
|country|SL|
|country|SC|
|country|SB|
|country|SA|
|country|SG|
|country|SE|
|country|SD|
|country|DO|
|country|DM|
|country|DJ|
|country|DK|
|country|DE|
|country|YE|
|country|AT|
|country|DZ|
|country|US|
|country|UY|
|country|YT|
|country|UM|
|country|LB|
|country|LC|
|country|LA|
|country|TV|
|country|TW|
|country|TT|
|country|TR|
|country|LK|
|country|LI|
|country|LV|
|country|TO|
|country|LT|
|country|LU|
|country|LR|
|country|LS|
|country|TH|
|country|TF|
|country|TG|
|country|TD|
|country|TC|
|country|LY|
|country|VA|
|country|VC|
|country|AE|
|country|VE|
|country|AG|
|country|VG|
|country|IQ|
|country|VI|
|country|IS|
|country|IR|
|country|AM|
|country|IT|
|country|VN|
|country|AQ|
|country|AS|
|country|AR|
|country|IM|
|country|IL|
|country|IO|
|country|IN|
|country|TZ|
|country|AZ|
|country|IE|
|country|ID|
|country|UA|
|country|QA|
|job_title|""|
|job_title|Provider/Staff (Private Practice)|
|job_title|Provider/Staff (Hospital)|
|job_title|Patients/Interview Candidate|
|job_title|Educator/Student|
|job_title|API/Developer|
|job_title|Consultant|
|job_title|Other|

<h2 id="tocS_DoctorFeeSchedule">DoctorFeeSchedule</h2>
<!-- backwards compatibility -->
<a id="schemadoctorfeeschedule"></a>
<a id="schema_DoctorFeeSchedule"></a>
<a id="tocSdoctorfeeschedule"></a>
<a id="tocsdoctorfeeschedule"></a>

```json
{
  "allowed_amount": 0,
  "base_price": 0,
  "billing_description": "string",
  "cash_price": 0,
  "code": "string",
  "code_type": "CPT",
  "cpt_hcpcs_modifier1": "string",
  "cpt_hcpcs_modifier2": "",
  "cpt_hcpcs_modifier3": "",
  "cpt_hcpcs_modifier4": "",
  "created_at": "string",
  "description": "string",
  "doctor": 0,
  "id": 0,
  "insured_out_of_network_price": 0,
  "insured_price": 0,
  "ndc_code": "string",
  "ndc_quantity": 0,
  "ndc_units": "F2",
  "office": 0,
  "payer_id": "string",
  "picklist_category": "string",
  "plan_name": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_amount|number|false|none|Typical allowed amount for payer. Not used if blank.|
|base_price|number|false|none|none|
|billing_description|string|false|none|none|
|cash_price|number|false|none|none|
|code|string|false|none|none|
|code_type|string|false|none|none|
|cpt_hcpcs_modifier1|string|false|none|none|
|cpt_hcpcs_modifier2|string|false|none|none|
|cpt_hcpcs_modifier3|string|false|none|none|
|cpt_hcpcs_modifier4|string|false|none|none|
|created_at|string|false|read-only|none|
|description|string|false|none|none|
|doctor|integer|false|none|none|
|id|integer|false|read-only|none|
|insured_out_of_network_price|number|false|none|none|
|insured_price|number|false|none|none|
|ndc_code|string|false|none|none|
|ndc_quantity|number|false|none|none|
|ndc_units|string|false|none|none|
|office|integer|false|none|none|
|payer_id|string|false|none|Fee Schedule pricing specific to this payer, if null, then applies as default to all payers without a more specific fee schedule.|
|picklist_category|string|false|none|Optional: Category to organize the code into.|
|plan_name|string|false|none|Name of insurance plan.|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code_type|CPT|
|code_type|HCPCS|
|code_type|Custom|
|code_type|ICD9|
|code_type|ICD10|
|code_type|Revenue|
|cpt_hcpcs_modifier2|""|
|cpt_hcpcs_modifier2|17|
|cpt_hcpcs_modifier2|1D|
|cpt_hcpcs_modifier2|22|
|cpt_hcpcs_modifier2|23|
|cpt_hcpcs_modifier2|24|
|cpt_hcpcs_modifier2|25|
|cpt_hcpcs_modifier2|26|
|cpt_hcpcs_modifier2|29|
|cpt_hcpcs_modifier2|32|
|cpt_hcpcs_modifier2|33|
|cpt_hcpcs_modifier2|47|
|cpt_hcpcs_modifier2|50|
|cpt_hcpcs_modifier2|51|
|cpt_hcpcs_modifier2|52|
|cpt_hcpcs_modifier2|53|
|cpt_hcpcs_modifier2|54|
|cpt_hcpcs_modifier2|55|
|cpt_hcpcs_modifier2|56|
|cpt_hcpcs_modifier2|57|
|cpt_hcpcs_modifier2|58|
|cpt_hcpcs_modifier2|59|
|cpt_hcpcs_modifier2|62|
|cpt_hcpcs_modifier2|63|
|cpt_hcpcs_modifier2|66|
|cpt_hcpcs_modifier2|73|
|cpt_hcpcs_modifier2|74|
|cpt_hcpcs_modifier2|76|
|cpt_hcpcs_modifier2|77|
|cpt_hcpcs_modifier2|78|
|cpt_hcpcs_modifier2|79|
|cpt_hcpcs_modifier2|80|
|cpt_hcpcs_modifier2|81|
|cpt_hcpcs_modifier2|82|
|cpt_hcpcs_modifier2|83|
|cpt_hcpcs_modifier2|90|
|cpt_hcpcs_modifier2|91|
|cpt_hcpcs_modifier2|92|
|cpt_hcpcs_modifier2|93|
|cpt_hcpcs_modifier2|95|
|cpt_hcpcs_modifier2|96|
|cpt_hcpcs_modifier2|97|
|cpt_hcpcs_modifier2|99|
|cpt_hcpcs_modifier2|A1|
|cpt_hcpcs_modifier2|A2|
|cpt_hcpcs_modifier2|A3|
|cpt_hcpcs_modifier2|A4|
|cpt_hcpcs_modifier2|A5|
|cpt_hcpcs_modifier2|A6|
|cpt_hcpcs_modifier2|A7|
|cpt_hcpcs_modifier2|A8|
|cpt_hcpcs_modifier2|A9|
|cpt_hcpcs_modifier2|AA|
|cpt_hcpcs_modifier2|AD|
|cpt_hcpcs_modifier2|AE|
|cpt_hcpcs_modifier2|AF|
|cpt_hcpcs_modifier2|AG|
|cpt_hcpcs_modifier2|AH|
|cpt_hcpcs_modifier2|AI|
|cpt_hcpcs_modifier2|AJ|
|cpt_hcpcs_modifier2|AK|
|cpt_hcpcs_modifier2|AM|
|cpt_hcpcs_modifier2|AO|
|cpt_hcpcs_modifier2|AP|
|cpt_hcpcs_modifier2|AQ|
|cpt_hcpcs_modifier2|AR|
|cpt_hcpcs_modifier2|AS|
|cpt_hcpcs_modifier2|AT|
|cpt_hcpcs_modifier2|AU|
|cpt_hcpcs_modifier2|AV|
|cpt_hcpcs_modifier2|AW|
|cpt_hcpcs_modifier2|AX|
|cpt_hcpcs_modifier2|AY|
|cpt_hcpcs_modifier2|AZ|
|cpt_hcpcs_modifier2|BA|
|cpt_hcpcs_modifier2|BL|
|cpt_hcpcs_modifier2|BO|
|cpt_hcpcs_modifier2|BP|
|cpt_hcpcs_modifier2|BR|
|cpt_hcpcs_modifier2|BU|
|cpt_hcpcs_modifier2|CA|
|cpt_hcpcs_modifier2|CB|
|cpt_hcpcs_modifier2|CC|
|cpt_hcpcs_modifier2|CD|
|cpt_hcpcs_modifier2|CE|
|cpt_hcpcs_modifier2|CF|
|cpt_hcpcs_modifier2|CG|
|cpt_hcpcs_modifier2|CH|
|cpt_hcpcs_modifier2|CI|
|cpt_hcpcs_modifier2|CJ|
|cpt_hcpcs_modifier2|CK|
|cpt_hcpcs_modifier2|CL|
|cpt_hcpcs_modifier2|CM|
|cpt_hcpcs_modifier2|CN|
|cpt_hcpcs_modifier2|CO|
|cpt_hcpcs_modifier2|CP|
|cpt_hcpcs_modifier2|CQ|
|cpt_hcpcs_modifier2|CR|
|cpt_hcpcs_modifier2|CS|
|cpt_hcpcs_modifier2|CT|
|cpt_hcpcs_modifier2|DA|
|cpt_hcpcs_modifier2|E1|
|cpt_hcpcs_modifier2|E2|
|cpt_hcpcs_modifier2|E3|
|cpt_hcpcs_modifier2|E4|
|cpt_hcpcs_modifier2|EA|
|cpt_hcpcs_modifier2|EB|
|cpt_hcpcs_modifier2|EC|
|cpt_hcpcs_modifier2|ED|
|cpt_hcpcs_modifier2|EE|
|cpt_hcpcs_modifier2|EJ|
|cpt_hcpcs_modifier2|EM|
|cpt_hcpcs_modifier2|EP|
|cpt_hcpcs_modifier2|ER|
|cpt_hcpcs_modifier2|ET|
|cpt_hcpcs_modifier2|EX|
|cpt_hcpcs_modifier2|EY|
|cpt_hcpcs_modifier2|F1|
|cpt_hcpcs_modifier2|F2|
|cpt_hcpcs_modifier2|F3|
|cpt_hcpcs_modifier2|F4|
|cpt_hcpcs_modifier2|F5|
|cpt_hcpcs_modifier2|F6|
|cpt_hcpcs_modifier2|F7|
|cpt_hcpcs_modifier2|F8|
|cpt_hcpcs_modifier2|F9|
|cpt_hcpcs_modifier2|FA|
|cpt_hcpcs_modifier2|FB|
|cpt_hcpcs_modifier2|FC|
|cpt_hcpcs_modifier2|FP|
|cpt_hcpcs_modifier2|FX|
|cpt_hcpcs_modifier2|FY|
|cpt_hcpcs_modifier2|G0|
|cpt_hcpcs_modifier2|G1|
|cpt_hcpcs_modifier2|G2|
|cpt_hcpcs_modifier2|G3|
|cpt_hcpcs_modifier2|G4|
|cpt_hcpcs_modifier2|G5|
|cpt_hcpcs_modifier2|G6|
|cpt_hcpcs_modifier2|G7|
|cpt_hcpcs_modifier2|G8|
|cpt_hcpcs_modifier2|G9|
|cpt_hcpcs_modifier2|GA|
|cpt_hcpcs_modifier2|GB|
|cpt_hcpcs_modifier2|GC|
|cpt_hcpcs_modifier2|GD|
|cpt_hcpcs_modifier2|GE|
|cpt_hcpcs_modifier2|GF|
|cpt_hcpcs_modifier2|GG|
|cpt_hcpcs_modifier2|GH|
|cpt_hcpcs_modifier2|GJ|
|cpt_hcpcs_modifier2|GK|
|cpt_hcpcs_modifier2|GL|
|cpt_hcpcs_modifier2|GM|
|cpt_hcpcs_modifier2|GN|
|cpt_hcpcs_modifier2|GO|
|cpt_hcpcs_modifier2|GP|
|cpt_hcpcs_modifier2|GQ|
|cpt_hcpcs_modifier2|GR|
|cpt_hcpcs_modifier2|GS|
|cpt_hcpcs_modifier2|GT|
|cpt_hcpcs_modifier2|GU|
|cpt_hcpcs_modifier2|GV|
|cpt_hcpcs_modifier2|GW|
|cpt_hcpcs_modifier2|GX|
|cpt_hcpcs_modifier2|GY|
|cpt_hcpcs_modifier2|GZ|
|cpt_hcpcs_modifier2|H9|
|cpt_hcpcs_modifier2|HA|
|cpt_hcpcs_modifier2|HB|
|cpt_hcpcs_modifier2|HC|
|cpt_hcpcs_modifier2|HD|
|cpt_hcpcs_modifier2|HE|
|cpt_hcpcs_modifier2|HF|
|cpt_hcpcs_modifier2|HG|
|cpt_hcpcs_modifier2|HH|
|cpt_hcpcs_modifier2|HI|
|cpt_hcpcs_modifier2|HJ|
|cpt_hcpcs_modifier2|HK|
|cpt_hcpcs_modifier2|HL|
|cpt_hcpcs_modifier2|HM|
|cpt_hcpcs_modifier2|HN|
|cpt_hcpcs_modifier2|HO|
|cpt_hcpcs_modifier2|HP|
|cpt_hcpcs_modifier2|HQ|
|cpt_hcpcs_modifier2|HR|
|cpt_hcpcs_modifier2|HS|
|cpt_hcpcs_modifier2|HT|
|cpt_hcpcs_modifier2|HU|
|cpt_hcpcs_modifier2|HV|
|cpt_hcpcs_modifier2|HW|
|cpt_hcpcs_modifier2|HX|
|cpt_hcpcs_modifier2|HY|
|cpt_hcpcs_modifier2|HZ|
|cpt_hcpcs_modifier2|J1|
|cpt_hcpcs_modifier2|J2|
|cpt_hcpcs_modifier2|J3|
|cpt_hcpcs_modifier2|J4|
|cpt_hcpcs_modifier2|JA|
|cpt_hcpcs_modifier2|JB|
|cpt_hcpcs_modifier2|JC|
|cpt_hcpcs_modifier2|JD|
|cpt_hcpcs_modifier2|JE|
|cpt_hcpcs_modifier2|JF|
|cpt_hcpcs_modifier2|JG|
|cpt_hcpcs_modifier2|JW|
|cpt_hcpcs_modifier2|K0|
|cpt_hcpcs_modifier2|K1|
|cpt_hcpcs_modifier2|K2|
|cpt_hcpcs_modifier2|K3|
|cpt_hcpcs_modifier2|K4|
|cpt_hcpcs_modifier2|KA|
|cpt_hcpcs_modifier2|KB|
|cpt_hcpcs_modifier2|KC|
|cpt_hcpcs_modifier2|KD|
|cpt_hcpcs_modifier2|KE|
|cpt_hcpcs_modifier2|KF|
|cpt_hcpcs_modifier2|KG|
|cpt_hcpcs_modifier2|KH|
|cpt_hcpcs_modifier2|KI|
|cpt_hcpcs_modifier2|KJ|
|cpt_hcpcs_modifier2|KK|
|cpt_hcpcs_modifier2|KL|
|cpt_hcpcs_modifier2|KM|
|cpt_hcpcs_modifier2|KN|
|cpt_hcpcs_modifier2|KO|
|cpt_hcpcs_modifier2|KP|
|cpt_hcpcs_modifier2|KQ|
|cpt_hcpcs_modifier2|KR|
|cpt_hcpcs_modifier2|KS|
|cpt_hcpcs_modifier2|KT|
|cpt_hcpcs_modifier2|KU|
|cpt_hcpcs_modifier2|KV|
|cpt_hcpcs_modifier2|KW|
|cpt_hcpcs_modifier2|KX|
|cpt_hcpcs_modifier2|KY|
|cpt_hcpcs_modifier2|KZ|
|cpt_hcpcs_modifier2|L1|
|cpt_hcpcs_modifier2|LC|
|cpt_hcpcs_modifier2|LD|
|cpt_hcpcs_modifier2|LL|
|cpt_hcpcs_modifier2|LM|
|cpt_hcpcs_modifier2|LR|
|cpt_hcpcs_modifier2|LS|
|cpt_hcpcs_modifier2|LT|
|cpt_hcpcs_modifier2|M2|
|cpt_hcpcs_modifier2|ME|
|cpt_hcpcs_modifier2|MI|
|cpt_hcpcs_modifier2|MR|
|cpt_hcpcs_modifier2|MS|
|cpt_hcpcs_modifier2|NB|
|cpt_hcpcs_modifier2|NH|
|cpt_hcpcs_modifier2|NM|
|cpt_hcpcs_modifier2|NR|
|cpt_hcpcs_modifier2|NU|
|cpt_hcpcs_modifier2|P1|
|cpt_hcpcs_modifier2|P2|
|cpt_hcpcs_modifier2|P3|
|cpt_hcpcs_modifier2|P4|
|cpt_hcpcs_modifier2|P5|
|cpt_hcpcs_modifier2|P6|
|cpt_hcpcs_modifier2|PA|
|cpt_hcpcs_modifier2|PB|
|cpt_hcpcs_modifier2|PC|
|cpt_hcpcs_modifier2|PD|
|cpt_hcpcs_modifier2|PE|
|cpt_hcpcs_modifier2|PI|
|cpt_hcpcs_modifier2|PL|
|cpt_hcpcs_modifier2|PM|
|cpt_hcpcs_modifier2|PN|
|cpt_hcpcs_modifier2|PO|
|cpt_hcpcs_modifier2|PS|
|cpt_hcpcs_modifier2|PT|
|cpt_hcpcs_modifier2|Q0|
|cpt_hcpcs_modifier2|Q1|
|cpt_hcpcs_modifier2|Q2|
|cpt_hcpcs_modifier2|Q3|
|cpt_hcpcs_modifier2|Q4|
|cpt_hcpcs_modifier2|Q5|
|cpt_hcpcs_modifier2|Q6|
|cpt_hcpcs_modifier2|Q7|
|cpt_hcpcs_modifier2|Q8|
|cpt_hcpcs_modifier2|Q9|
|cpt_hcpcs_modifier2|QA|
|cpt_hcpcs_modifier2|QB|
|cpt_hcpcs_modifier2|QC|
|cpt_hcpcs_modifier2|QD|
|cpt_hcpcs_modifier2|QE|
|cpt_hcpcs_modifier2|QF|
|cpt_hcpcs_modifier2|QG|
|cpt_hcpcs_modifier2|QH|
|cpt_hcpcs_modifier2|QJ|
|cpt_hcpcs_modifier2|QK|
|cpt_hcpcs_modifier2|QL|
|cpt_hcpcs_modifier2|QM|
|cpt_hcpcs_modifier2|QN|
|cpt_hcpcs_modifier2|QP|
|cpt_hcpcs_modifier2|QQ|
|cpt_hcpcs_modifier2|QR|
|cpt_hcpcs_modifier2|QS|
|cpt_hcpcs_modifier2|QT|
|cpt_hcpcs_modifier2|QU|
|cpt_hcpcs_modifier2|QV|
|cpt_hcpcs_modifier2|QW|
|cpt_hcpcs_modifier2|QX|
|cpt_hcpcs_modifier2|QY|
|cpt_hcpcs_modifier2|QZ|
|cpt_hcpcs_modifier2|RA|
|cpt_hcpcs_modifier2|RB|
|cpt_hcpcs_modifier2|RC|
|cpt_hcpcs_modifier2|RD|
|cpt_hcpcs_modifier2|RE|
|cpt_hcpcs_modifier2|RI|
|cpt_hcpcs_modifier2|RP|
|cpt_hcpcs_modifier2|RR|
|cpt_hcpcs_modifier2|RT|
|cpt_hcpcs_modifier2|SA|
|cpt_hcpcs_modifier2|SB|
|cpt_hcpcs_modifier2|SC|
|cpt_hcpcs_modifier2|SD|
|cpt_hcpcs_modifier2|SE|
|cpt_hcpcs_modifier2|SF|
|cpt_hcpcs_modifier2|SG|
|cpt_hcpcs_modifier2|SH|
|cpt_hcpcs_modifier2|SJ|
|cpt_hcpcs_modifier2|SK|
|cpt_hcpcs_modifier2|SL|
|cpt_hcpcs_modifier2|SM|
|cpt_hcpcs_modifier2|SN|
|cpt_hcpcs_modifier2|SP|
|cpt_hcpcs_modifier2|SQ|
|cpt_hcpcs_modifier2|SS|
|cpt_hcpcs_modifier2|ST|
|cpt_hcpcs_modifier2|SU|
|cpt_hcpcs_modifier2|SV|
|cpt_hcpcs_modifier2|SW|
|cpt_hcpcs_modifier2|SY|
|cpt_hcpcs_modifier2|SZ|
|cpt_hcpcs_modifier2|T1|
|cpt_hcpcs_modifier2|T2|
|cpt_hcpcs_modifier2|T3|
|cpt_hcpcs_modifier2|T4|
|cpt_hcpcs_modifier2|T5|
|cpt_hcpcs_modifier2|T6|
|cpt_hcpcs_modifier2|T7|
|cpt_hcpcs_modifier2|T8|
|cpt_hcpcs_modifier2|T9|
|cpt_hcpcs_modifier2|TA|
|cpt_hcpcs_modifier2|TB|
|cpt_hcpcs_modifier2|TC|
|cpt_hcpcs_modifier2|TD|
|cpt_hcpcs_modifier2|TE|
|cpt_hcpcs_modifier2|TF|
|cpt_hcpcs_modifier2|TG|
|cpt_hcpcs_modifier2|TH|
|cpt_hcpcs_modifier2|TJ|
|cpt_hcpcs_modifier2|TK|
|cpt_hcpcs_modifier2|TL|
|cpt_hcpcs_modifier2|TM|
|cpt_hcpcs_modifier2|TN|
|cpt_hcpcs_modifier2|TP|
|cpt_hcpcs_modifier2|TQ|
|cpt_hcpcs_modifier2|TR|
|cpt_hcpcs_modifier2|TS|
|cpt_hcpcs_modifier2|TT|
|cpt_hcpcs_modifier2|TU|
|cpt_hcpcs_modifier2|TV|
|cpt_hcpcs_modifier2|TW|
|cpt_hcpcs_modifier2|TX|
|cpt_hcpcs_modifier2|U1|
|cpt_hcpcs_modifier2|U2|
|cpt_hcpcs_modifier2|U3|
|cpt_hcpcs_modifier2|U4|
|cpt_hcpcs_modifier2|U5|
|cpt_hcpcs_modifier2|U6|
|cpt_hcpcs_modifier2|U7|
|cpt_hcpcs_modifier2|U8|
|cpt_hcpcs_modifier2|U9|
|cpt_hcpcs_modifier2|UA|
|cpt_hcpcs_modifier2|UB|
|cpt_hcpcs_modifier2|UC|
|cpt_hcpcs_modifier2|UD|
|cpt_hcpcs_modifier2|UE|
|cpt_hcpcs_modifier2|UF|
|cpt_hcpcs_modifier2|UG|
|cpt_hcpcs_modifier2|UH|
|cpt_hcpcs_modifier2|UJ|
|cpt_hcpcs_modifier2|UK|
|cpt_hcpcs_modifier2|UN|
|cpt_hcpcs_modifier2|UP|
|cpt_hcpcs_modifier2|UQ|
|cpt_hcpcs_modifier2|UR|
|cpt_hcpcs_modifier2|US|
|cpt_hcpcs_modifier2|V1|
|cpt_hcpcs_modifier2|V2|
|cpt_hcpcs_modifier2|V3|
|cpt_hcpcs_modifier2|V4|
|cpt_hcpcs_modifier2|V5|
|cpt_hcpcs_modifier2|V6|
|cpt_hcpcs_modifier2|V7|
|cpt_hcpcs_modifier2|V8|
|cpt_hcpcs_modifier2|V9|
|cpt_hcpcs_modifier2|VP|
|cpt_hcpcs_modifier2|VR|
|cpt_hcpcs_modifier2|W1|
|cpt_hcpcs_modifier2|W5|
|cpt_hcpcs_modifier2|W6|
|cpt_hcpcs_modifier2|W7|
|cpt_hcpcs_modifier2|W8|
|cpt_hcpcs_modifier2|W9|
|cpt_hcpcs_modifier2|WC|
|cpt_hcpcs_modifier2|WH|
|cpt_hcpcs_modifier2|WP|
|cpt_hcpcs_modifier2|X1|
|cpt_hcpcs_modifier2|X2|
|cpt_hcpcs_modifier2|X3|
|cpt_hcpcs_modifier2|X4|
|cpt_hcpcs_modifier2|X5|
|cpt_hcpcs_modifier2|XE|
|cpt_hcpcs_modifier2|XP|
|cpt_hcpcs_modifier2|XS|
|cpt_hcpcs_modifier2|XU|
|cpt_hcpcs_modifier2|VM|
|cpt_hcpcs_modifier2|ZA|
|cpt_hcpcs_modifier2|ZB|
|cpt_hcpcs_modifier2|ZL|
|cpt_hcpcs_modifier2|ZS|
|cpt_hcpcs_modifier2|1P|
|cpt_hcpcs_modifier2|2P|
|cpt_hcpcs_modifier2|3P|
|cpt_hcpcs_modifier2|8P|
|cpt_hcpcs_modifier3|""|
|cpt_hcpcs_modifier3|17|
|cpt_hcpcs_modifier3|1D|
|cpt_hcpcs_modifier3|22|
|cpt_hcpcs_modifier3|23|
|cpt_hcpcs_modifier3|24|
|cpt_hcpcs_modifier3|25|
|cpt_hcpcs_modifier3|26|
|cpt_hcpcs_modifier3|29|
|cpt_hcpcs_modifier3|32|
|cpt_hcpcs_modifier3|33|
|cpt_hcpcs_modifier3|47|
|cpt_hcpcs_modifier3|50|
|cpt_hcpcs_modifier3|51|
|cpt_hcpcs_modifier3|52|
|cpt_hcpcs_modifier3|53|
|cpt_hcpcs_modifier3|54|
|cpt_hcpcs_modifier3|55|
|cpt_hcpcs_modifier3|56|
|cpt_hcpcs_modifier3|57|
|cpt_hcpcs_modifier3|58|
|cpt_hcpcs_modifier3|59|
|cpt_hcpcs_modifier3|62|
|cpt_hcpcs_modifier3|63|
|cpt_hcpcs_modifier3|66|
|cpt_hcpcs_modifier3|73|
|cpt_hcpcs_modifier3|74|
|cpt_hcpcs_modifier3|76|
|cpt_hcpcs_modifier3|77|
|cpt_hcpcs_modifier3|78|
|cpt_hcpcs_modifier3|79|
|cpt_hcpcs_modifier3|80|
|cpt_hcpcs_modifier3|81|
|cpt_hcpcs_modifier3|82|
|cpt_hcpcs_modifier3|83|
|cpt_hcpcs_modifier3|90|
|cpt_hcpcs_modifier3|91|
|cpt_hcpcs_modifier3|92|
|cpt_hcpcs_modifier3|93|
|cpt_hcpcs_modifier3|95|
|cpt_hcpcs_modifier3|96|
|cpt_hcpcs_modifier3|97|
|cpt_hcpcs_modifier3|99|
|cpt_hcpcs_modifier3|A1|
|cpt_hcpcs_modifier3|A2|
|cpt_hcpcs_modifier3|A3|
|cpt_hcpcs_modifier3|A4|
|cpt_hcpcs_modifier3|A5|
|cpt_hcpcs_modifier3|A6|
|cpt_hcpcs_modifier3|A7|
|cpt_hcpcs_modifier3|A8|
|cpt_hcpcs_modifier3|A9|
|cpt_hcpcs_modifier3|AA|
|cpt_hcpcs_modifier3|AD|
|cpt_hcpcs_modifier3|AE|
|cpt_hcpcs_modifier3|AF|
|cpt_hcpcs_modifier3|AG|
|cpt_hcpcs_modifier3|AH|
|cpt_hcpcs_modifier3|AI|
|cpt_hcpcs_modifier3|AJ|
|cpt_hcpcs_modifier3|AK|
|cpt_hcpcs_modifier3|AM|
|cpt_hcpcs_modifier3|AO|
|cpt_hcpcs_modifier3|AP|
|cpt_hcpcs_modifier3|AQ|
|cpt_hcpcs_modifier3|AR|
|cpt_hcpcs_modifier3|AS|
|cpt_hcpcs_modifier3|AT|
|cpt_hcpcs_modifier3|AU|
|cpt_hcpcs_modifier3|AV|
|cpt_hcpcs_modifier3|AW|
|cpt_hcpcs_modifier3|AX|
|cpt_hcpcs_modifier3|AY|
|cpt_hcpcs_modifier3|AZ|
|cpt_hcpcs_modifier3|BA|
|cpt_hcpcs_modifier3|BL|
|cpt_hcpcs_modifier3|BO|
|cpt_hcpcs_modifier3|BP|
|cpt_hcpcs_modifier3|BR|
|cpt_hcpcs_modifier3|BU|
|cpt_hcpcs_modifier3|CA|
|cpt_hcpcs_modifier3|CB|
|cpt_hcpcs_modifier3|CC|
|cpt_hcpcs_modifier3|CD|
|cpt_hcpcs_modifier3|CE|
|cpt_hcpcs_modifier3|CF|
|cpt_hcpcs_modifier3|CG|
|cpt_hcpcs_modifier3|CH|
|cpt_hcpcs_modifier3|CI|
|cpt_hcpcs_modifier3|CJ|
|cpt_hcpcs_modifier3|CK|
|cpt_hcpcs_modifier3|CL|
|cpt_hcpcs_modifier3|CM|
|cpt_hcpcs_modifier3|CN|
|cpt_hcpcs_modifier3|CO|
|cpt_hcpcs_modifier3|CP|
|cpt_hcpcs_modifier3|CQ|
|cpt_hcpcs_modifier3|CR|
|cpt_hcpcs_modifier3|CS|
|cpt_hcpcs_modifier3|CT|
|cpt_hcpcs_modifier3|DA|
|cpt_hcpcs_modifier3|E1|
|cpt_hcpcs_modifier3|E2|
|cpt_hcpcs_modifier3|E3|
|cpt_hcpcs_modifier3|E4|
|cpt_hcpcs_modifier3|EA|
|cpt_hcpcs_modifier3|EB|
|cpt_hcpcs_modifier3|EC|
|cpt_hcpcs_modifier3|ED|
|cpt_hcpcs_modifier3|EE|
|cpt_hcpcs_modifier3|EJ|
|cpt_hcpcs_modifier3|EM|
|cpt_hcpcs_modifier3|EP|
|cpt_hcpcs_modifier3|ER|
|cpt_hcpcs_modifier3|ET|
|cpt_hcpcs_modifier3|EX|
|cpt_hcpcs_modifier3|EY|
|cpt_hcpcs_modifier3|F1|
|cpt_hcpcs_modifier3|F2|
|cpt_hcpcs_modifier3|F3|
|cpt_hcpcs_modifier3|F4|
|cpt_hcpcs_modifier3|F5|
|cpt_hcpcs_modifier3|F6|
|cpt_hcpcs_modifier3|F7|
|cpt_hcpcs_modifier3|F8|
|cpt_hcpcs_modifier3|F9|
|cpt_hcpcs_modifier3|FA|
|cpt_hcpcs_modifier3|FB|
|cpt_hcpcs_modifier3|FC|
|cpt_hcpcs_modifier3|FP|
|cpt_hcpcs_modifier3|FX|
|cpt_hcpcs_modifier3|FY|
|cpt_hcpcs_modifier3|G0|
|cpt_hcpcs_modifier3|G1|
|cpt_hcpcs_modifier3|G2|
|cpt_hcpcs_modifier3|G3|
|cpt_hcpcs_modifier3|G4|
|cpt_hcpcs_modifier3|G5|
|cpt_hcpcs_modifier3|G6|
|cpt_hcpcs_modifier3|G7|
|cpt_hcpcs_modifier3|G8|
|cpt_hcpcs_modifier3|G9|
|cpt_hcpcs_modifier3|GA|
|cpt_hcpcs_modifier3|GB|
|cpt_hcpcs_modifier3|GC|
|cpt_hcpcs_modifier3|GD|
|cpt_hcpcs_modifier3|GE|
|cpt_hcpcs_modifier3|GF|
|cpt_hcpcs_modifier3|GG|
|cpt_hcpcs_modifier3|GH|
|cpt_hcpcs_modifier3|GJ|
|cpt_hcpcs_modifier3|GK|
|cpt_hcpcs_modifier3|GL|
|cpt_hcpcs_modifier3|GM|
|cpt_hcpcs_modifier3|GN|
|cpt_hcpcs_modifier3|GO|
|cpt_hcpcs_modifier3|GP|
|cpt_hcpcs_modifier3|GQ|
|cpt_hcpcs_modifier3|GR|
|cpt_hcpcs_modifier3|GS|
|cpt_hcpcs_modifier3|GT|
|cpt_hcpcs_modifier3|GU|
|cpt_hcpcs_modifier3|GV|
|cpt_hcpcs_modifier3|GW|
|cpt_hcpcs_modifier3|GX|
|cpt_hcpcs_modifier3|GY|
|cpt_hcpcs_modifier3|GZ|
|cpt_hcpcs_modifier3|H9|
|cpt_hcpcs_modifier3|HA|
|cpt_hcpcs_modifier3|HB|
|cpt_hcpcs_modifier3|HC|
|cpt_hcpcs_modifier3|HD|
|cpt_hcpcs_modifier3|HE|
|cpt_hcpcs_modifier3|HF|
|cpt_hcpcs_modifier3|HG|
|cpt_hcpcs_modifier3|HH|
|cpt_hcpcs_modifier3|HI|
|cpt_hcpcs_modifier3|HJ|
|cpt_hcpcs_modifier3|HK|
|cpt_hcpcs_modifier3|HL|
|cpt_hcpcs_modifier3|HM|
|cpt_hcpcs_modifier3|HN|
|cpt_hcpcs_modifier3|HO|
|cpt_hcpcs_modifier3|HP|
|cpt_hcpcs_modifier3|HQ|
|cpt_hcpcs_modifier3|HR|
|cpt_hcpcs_modifier3|HS|
|cpt_hcpcs_modifier3|HT|
|cpt_hcpcs_modifier3|HU|
|cpt_hcpcs_modifier3|HV|
|cpt_hcpcs_modifier3|HW|
|cpt_hcpcs_modifier3|HX|
|cpt_hcpcs_modifier3|HY|
|cpt_hcpcs_modifier3|HZ|
|cpt_hcpcs_modifier3|J1|
|cpt_hcpcs_modifier3|J2|
|cpt_hcpcs_modifier3|J3|
|cpt_hcpcs_modifier3|J4|
|cpt_hcpcs_modifier3|JA|
|cpt_hcpcs_modifier3|JB|
|cpt_hcpcs_modifier3|JC|
|cpt_hcpcs_modifier3|JD|
|cpt_hcpcs_modifier3|JE|
|cpt_hcpcs_modifier3|JF|
|cpt_hcpcs_modifier3|JG|
|cpt_hcpcs_modifier3|JW|
|cpt_hcpcs_modifier3|K0|
|cpt_hcpcs_modifier3|K1|
|cpt_hcpcs_modifier3|K2|
|cpt_hcpcs_modifier3|K3|
|cpt_hcpcs_modifier3|K4|
|cpt_hcpcs_modifier3|KA|
|cpt_hcpcs_modifier3|KB|
|cpt_hcpcs_modifier3|KC|
|cpt_hcpcs_modifier3|KD|
|cpt_hcpcs_modifier3|KE|
|cpt_hcpcs_modifier3|KF|
|cpt_hcpcs_modifier3|KG|
|cpt_hcpcs_modifier3|KH|
|cpt_hcpcs_modifier3|KI|
|cpt_hcpcs_modifier3|KJ|
|cpt_hcpcs_modifier3|KK|
|cpt_hcpcs_modifier3|KL|
|cpt_hcpcs_modifier3|KM|
|cpt_hcpcs_modifier3|KN|
|cpt_hcpcs_modifier3|KO|
|cpt_hcpcs_modifier3|KP|
|cpt_hcpcs_modifier3|KQ|
|cpt_hcpcs_modifier3|KR|
|cpt_hcpcs_modifier3|KS|
|cpt_hcpcs_modifier3|KT|
|cpt_hcpcs_modifier3|KU|
|cpt_hcpcs_modifier3|KV|
|cpt_hcpcs_modifier3|KW|
|cpt_hcpcs_modifier3|KX|
|cpt_hcpcs_modifier3|KY|
|cpt_hcpcs_modifier3|KZ|
|cpt_hcpcs_modifier3|L1|
|cpt_hcpcs_modifier3|LC|
|cpt_hcpcs_modifier3|LD|
|cpt_hcpcs_modifier3|LL|
|cpt_hcpcs_modifier3|LM|
|cpt_hcpcs_modifier3|LR|
|cpt_hcpcs_modifier3|LS|
|cpt_hcpcs_modifier3|LT|
|cpt_hcpcs_modifier3|M2|
|cpt_hcpcs_modifier3|ME|
|cpt_hcpcs_modifier3|MI|
|cpt_hcpcs_modifier3|MR|
|cpt_hcpcs_modifier3|MS|
|cpt_hcpcs_modifier3|NB|
|cpt_hcpcs_modifier3|NH|
|cpt_hcpcs_modifier3|NM|
|cpt_hcpcs_modifier3|NR|
|cpt_hcpcs_modifier3|NU|
|cpt_hcpcs_modifier3|P1|
|cpt_hcpcs_modifier3|P2|
|cpt_hcpcs_modifier3|P3|
|cpt_hcpcs_modifier3|P4|
|cpt_hcpcs_modifier3|P5|
|cpt_hcpcs_modifier3|P6|
|cpt_hcpcs_modifier3|PA|
|cpt_hcpcs_modifier3|PB|
|cpt_hcpcs_modifier3|PC|
|cpt_hcpcs_modifier3|PD|
|cpt_hcpcs_modifier3|PE|
|cpt_hcpcs_modifier3|PI|
|cpt_hcpcs_modifier3|PL|
|cpt_hcpcs_modifier3|PM|
|cpt_hcpcs_modifier3|PN|
|cpt_hcpcs_modifier3|PO|
|cpt_hcpcs_modifier3|PS|
|cpt_hcpcs_modifier3|PT|
|cpt_hcpcs_modifier3|Q0|
|cpt_hcpcs_modifier3|Q1|
|cpt_hcpcs_modifier3|Q2|
|cpt_hcpcs_modifier3|Q3|
|cpt_hcpcs_modifier3|Q4|
|cpt_hcpcs_modifier3|Q5|
|cpt_hcpcs_modifier3|Q6|
|cpt_hcpcs_modifier3|Q7|
|cpt_hcpcs_modifier3|Q8|
|cpt_hcpcs_modifier3|Q9|
|cpt_hcpcs_modifier3|QA|
|cpt_hcpcs_modifier3|QB|
|cpt_hcpcs_modifier3|QC|
|cpt_hcpcs_modifier3|QD|
|cpt_hcpcs_modifier3|QE|
|cpt_hcpcs_modifier3|QF|
|cpt_hcpcs_modifier3|QG|
|cpt_hcpcs_modifier3|QH|
|cpt_hcpcs_modifier3|QJ|
|cpt_hcpcs_modifier3|QK|
|cpt_hcpcs_modifier3|QL|
|cpt_hcpcs_modifier3|QM|
|cpt_hcpcs_modifier3|QN|
|cpt_hcpcs_modifier3|QP|
|cpt_hcpcs_modifier3|QQ|
|cpt_hcpcs_modifier3|QR|
|cpt_hcpcs_modifier3|QS|
|cpt_hcpcs_modifier3|QT|
|cpt_hcpcs_modifier3|QU|
|cpt_hcpcs_modifier3|QV|
|cpt_hcpcs_modifier3|QW|
|cpt_hcpcs_modifier3|QX|
|cpt_hcpcs_modifier3|QY|
|cpt_hcpcs_modifier3|QZ|
|cpt_hcpcs_modifier3|RA|
|cpt_hcpcs_modifier3|RB|
|cpt_hcpcs_modifier3|RC|
|cpt_hcpcs_modifier3|RD|
|cpt_hcpcs_modifier3|RE|
|cpt_hcpcs_modifier3|RI|
|cpt_hcpcs_modifier3|RP|
|cpt_hcpcs_modifier3|RR|
|cpt_hcpcs_modifier3|RT|
|cpt_hcpcs_modifier3|SA|
|cpt_hcpcs_modifier3|SB|
|cpt_hcpcs_modifier3|SC|
|cpt_hcpcs_modifier3|SD|
|cpt_hcpcs_modifier3|SE|
|cpt_hcpcs_modifier3|SF|
|cpt_hcpcs_modifier3|SG|
|cpt_hcpcs_modifier3|SH|
|cpt_hcpcs_modifier3|SJ|
|cpt_hcpcs_modifier3|SK|
|cpt_hcpcs_modifier3|SL|
|cpt_hcpcs_modifier3|SM|
|cpt_hcpcs_modifier3|SN|
|cpt_hcpcs_modifier3|SP|
|cpt_hcpcs_modifier3|SQ|
|cpt_hcpcs_modifier3|SS|
|cpt_hcpcs_modifier3|ST|
|cpt_hcpcs_modifier3|SU|
|cpt_hcpcs_modifier3|SV|
|cpt_hcpcs_modifier3|SW|
|cpt_hcpcs_modifier3|SY|
|cpt_hcpcs_modifier3|SZ|
|cpt_hcpcs_modifier3|T1|
|cpt_hcpcs_modifier3|T2|
|cpt_hcpcs_modifier3|T3|
|cpt_hcpcs_modifier3|T4|
|cpt_hcpcs_modifier3|T5|
|cpt_hcpcs_modifier3|T6|
|cpt_hcpcs_modifier3|T7|
|cpt_hcpcs_modifier3|T8|
|cpt_hcpcs_modifier3|T9|
|cpt_hcpcs_modifier3|TA|
|cpt_hcpcs_modifier3|TB|
|cpt_hcpcs_modifier3|TC|
|cpt_hcpcs_modifier3|TD|
|cpt_hcpcs_modifier3|TE|
|cpt_hcpcs_modifier3|TF|
|cpt_hcpcs_modifier3|TG|
|cpt_hcpcs_modifier3|TH|
|cpt_hcpcs_modifier3|TJ|
|cpt_hcpcs_modifier3|TK|
|cpt_hcpcs_modifier3|TL|
|cpt_hcpcs_modifier3|TM|
|cpt_hcpcs_modifier3|TN|
|cpt_hcpcs_modifier3|TP|
|cpt_hcpcs_modifier3|TQ|
|cpt_hcpcs_modifier3|TR|
|cpt_hcpcs_modifier3|TS|
|cpt_hcpcs_modifier3|TT|
|cpt_hcpcs_modifier3|TU|
|cpt_hcpcs_modifier3|TV|
|cpt_hcpcs_modifier3|TW|
|cpt_hcpcs_modifier3|TX|
|cpt_hcpcs_modifier3|U1|
|cpt_hcpcs_modifier3|U2|
|cpt_hcpcs_modifier3|U3|
|cpt_hcpcs_modifier3|U4|
|cpt_hcpcs_modifier3|U5|
|cpt_hcpcs_modifier3|U6|
|cpt_hcpcs_modifier3|U7|
|cpt_hcpcs_modifier3|U8|
|cpt_hcpcs_modifier3|U9|
|cpt_hcpcs_modifier3|UA|
|cpt_hcpcs_modifier3|UB|
|cpt_hcpcs_modifier3|UC|
|cpt_hcpcs_modifier3|UD|
|cpt_hcpcs_modifier3|UE|
|cpt_hcpcs_modifier3|UF|
|cpt_hcpcs_modifier3|UG|
|cpt_hcpcs_modifier3|UH|
|cpt_hcpcs_modifier3|UJ|
|cpt_hcpcs_modifier3|UK|
|cpt_hcpcs_modifier3|UN|
|cpt_hcpcs_modifier3|UP|
|cpt_hcpcs_modifier3|UQ|
|cpt_hcpcs_modifier3|UR|
|cpt_hcpcs_modifier3|US|
|cpt_hcpcs_modifier3|V1|
|cpt_hcpcs_modifier3|V2|
|cpt_hcpcs_modifier3|V3|
|cpt_hcpcs_modifier3|V4|
|cpt_hcpcs_modifier3|V5|
|cpt_hcpcs_modifier3|V6|
|cpt_hcpcs_modifier3|V7|
|cpt_hcpcs_modifier3|V8|
|cpt_hcpcs_modifier3|V9|
|cpt_hcpcs_modifier3|VP|
|cpt_hcpcs_modifier3|VR|
|cpt_hcpcs_modifier3|W1|
|cpt_hcpcs_modifier3|W5|
|cpt_hcpcs_modifier3|W6|
|cpt_hcpcs_modifier3|W7|
|cpt_hcpcs_modifier3|W8|
|cpt_hcpcs_modifier3|W9|
|cpt_hcpcs_modifier3|WC|
|cpt_hcpcs_modifier3|WH|
|cpt_hcpcs_modifier3|WP|
|cpt_hcpcs_modifier3|X1|
|cpt_hcpcs_modifier3|X2|
|cpt_hcpcs_modifier3|X3|
|cpt_hcpcs_modifier3|X4|
|cpt_hcpcs_modifier3|X5|
|cpt_hcpcs_modifier3|XE|
|cpt_hcpcs_modifier3|XP|
|cpt_hcpcs_modifier3|XS|
|cpt_hcpcs_modifier3|XU|
|cpt_hcpcs_modifier3|VM|
|cpt_hcpcs_modifier3|ZA|
|cpt_hcpcs_modifier3|ZB|
|cpt_hcpcs_modifier3|ZL|
|cpt_hcpcs_modifier3|ZS|
|cpt_hcpcs_modifier3|1P|
|cpt_hcpcs_modifier3|2P|
|cpt_hcpcs_modifier3|3P|
|cpt_hcpcs_modifier3|8P|
|cpt_hcpcs_modifier4|""|
|cpt_hcpcs_modifier4|17|
|cpt_hcpcs_modifier4|1D|
|cpt_hcpcs_modifier4|22|
|cpt_hcpcs_modifier4|23|
|cpt_hcpcs_modifier4|24|
|cpt_hcpcs_modifier4|25|
|cpt_hcpcs_modifier4|26|
|cpt_hcpcs_modifier4|29|
|cpt_hcpcs_modifier4|32|
|cpt_hcpcs_modifier4|33|
|cpt_hcpcs_modifier4|47|
|cpt_hcpcs_modifier4|50|
|cpt_hcpcs_modifier4|51|
|cpt_hcpcs_modifier4|52|
|cpt_hcpcs_modifier4|53|
|cpt_hcpcs_modifier4|54|
|cpt_hcpcs_modifier4|55|
|cpt_hcpcs_modifier4|56|
|cpt_hcpcs_modifier4|57|
|cpt_hcpcs_modifier4|58|
|cpt_hcpcs_modifier4|59|
|cpt_hcpcs_modifier4|62|
|cpt_hcpcs_modifier4|63|
|cpt_hcpcs_modifier4|66|
|cpt_hcpcs_modifier4|73|
|cpt_hcpcs_modifier4|74|
|cpt_hcpcs_modifier4|76|
|cpt_hcpcs_modifier4|77|
|cpt_hcpcs_modifier4|78|
|cpt_hcpcs_modifier4|79|
|cpt_hcpcs_modifier4|80|
|cpt_hcpcs_modifier4|81|
|cpt_hcpcs_modifier4|82|
|cpt_hcpcs_modifier4|83|
|cpt_hcpcs_modifier4|90|
|cpt_hcpcs_modifier4|91|
|cpt_hcpcs_modifier4|92|
|cpt_hcpcs_modifier4|93|
|cpt_hcpcs_modifier4|95|
|cpt_hcpcs_modifier4|96|
|cpt_hcpcs_modifier4|97|
|cpt_hcpcs_modifier4|99|
|cpt_hcpcs_modifier4|A1|
|cpt_hcpcs_modifier4|A2|
|cpt_hcpcs_modifier4|A3|
|cpt_hcpcs_modifier4|A4|
|cpt_hcpcs_modifier4|A5|
|cpt_hcpcs_modifier4|A6|
|cpt_hcpcs_modifier4|A7|
|cpt_hcpcs_modifier4|A8|
|cpt_hcpcs_modifier4|A9|
|cpt_hcpcs_modifier4|AA|
|cpt_hcpcs_modifier4|AD|
|cpt_hcpcs_modifier4|AE|
|cpt_hcpcs_modifier4|AF|
|cpt_hcpcs_modifier4|AG|
|cpt_hcpcs_modifier4|AH|
|cpt_hcpcs_modifier4|AI|
|cpt_hcpcs_modifier4|AJ|
|cpt_hcpcs_modifier4|AK|
|cpt_hcpcs_modifier4|AM|
|cpt_hcpcs_modifier4|AO|
|cpt_hcpcs_modifier4|AP|
|cpt_hcpcs_modifier4|AQ|
|cpt_hcpcs_modifier4|AR|
|cpt_hcpcs_modifier4|AS|
|cpt_hcpcs_modifier4|AT|
|cpt_hcpcs_modifier4|AU|
|cpt_hcpcs_modifier4|AV|
|cpt_hcpcs_modifier4|AW|
|cpt_hcpcs_modifier4|AX|
|cpt_hcpcs_modifier4|AY|
|cpt_hcpcs_modifier4|AZ|
|cpt_hcpcs_modifier4|BA|
|cpt_hcpcs_modifier4|BL|
|cpt_hcpcs_modifier4|BO|
|cpt_hcpcs_modifier4|BP|
|cpt_hcpcs_modifier4|BR|
|cpt_hcpcs_modifier4|BU|
|cpt_hcpcs_modifier4|CA|
|cpt_hcpcs_modifier4|CB|
|cpt_hcpcs_modifier4|CC|
|cpt_hcpcs_modifier4|CD|
|cpt_hcpcs_modifier4|CE|
|cpt_hcpcs_modifier4|CF|
|cpt_hcpcs_modifier4|CG|
|cpt_hcpcs_modifier4|CH|
|cpt_hcpcs_modifier4|CI|
|cpt_hcpcs_modifier4|CJ|
|cpt_hcpcs_modifier4|CK|
|cpt_hcpcs_modifier4|CL|
|cpt_hcpcs_modifier4|CM|
|cpt_hcpcs_modifier4|CN|
|cpt_hcpcs_modifier4|CO|
|cpt_hcpcs_modifier4|CP|
|cpt_hcpcs_modifier4|CQ|
|cpt_hcpcs_modifier4|CR|
|cpt_hcpcs_modifier4|CS|
|cpt_hcpcs_modifier4|CT|
|cpt_hcpcs_modifier4|DA|
|cpt_hcpcs_modifier4|E1|
|cpt_hcpcs_modifier4|E2|
|cpt_hcpcs_modifier4|E3|
|cpt_hcpcs_modifier4|E4|
|cpt_hcpcs_modifier4|EA|
|cpt_hcpcs_modifier4|EB|
|cpt_hcpcs_modifier4|EC|
|cpt_hcpcs_modifier4|ED|
|cpt_hcpcs_modifier4|EE|
|cpt_hcpcs_modifier4|EJ|
|cpt_hcpcs_modifier4|EM|
|cpt_hcpcs_modifier4|EP|
|cpt_hcpcs_modifier4|ER|
|cpt_hcpcs_modifier4|ET|
|cpt_hcpcs_modifier4|EX|
|cpt_hcpcs_modifier4|EY|
|cpt_hcpcs_modifier4|F1|
|cpt_hcpcs_modifier4|F2|
|cpt_hcpcs_modifier4|F3|
|cpt_hcpcs_modifier4|F4|
|cpt_hcpcs_modifier4|F5|
|cpt_hcpcs_modifier4|F6|
|cpt_hcpcs_modifier4|F7|
|cpt_hcpcs_modifier4|F8|
|cpt_hcpcs_modifier4|F9|
|cpt_hcpcs_modifier4|FA|
|cpt_hcpcs_modifier4|FB|
|cpt_hcpcs_modifier4|FC|
|cpt_hcpcs_modifier4|FP|
|cpt_hcpcs_modifier4|FX|
|cpt_hcpcs_modifier4|FY|
|cpt_hcpcs_modifier4|G0|
|cpt_hcpcs_modifier4|G1|
|cpt_hcpcs_modifier4|G2|
|cpt_hcpcs_modifier4|G3|
|cpt_hcpcs_modifier4|G4|
|cpt_hcpcs_modifier4|G5|
|cpt_hcpcs_modifier4|G6|
|cpt_hcpcs_modifier4|G7|
|cpt_hcpcs_modifier4|G8|
|cpt_hcpcs_modifier4|G9|
|cpt_hcpcs_modifier4|GA|
|cpt_hcpcs_modifier4|GB|
|cpt_hcpcs_modifier4|GC|
|cpt_hcpcs_modifier4|GD|
|cpt_hcpcs_modifier4|GE|
|cpt_hcpcs_modifier4|GF|
|cpt_hcpcs_modifier4|GG|
|cpt_hcpcs_modifier4|GH|
|cpt_hcpcs_modifier4|GJ|
|cpt_hcpcs_modifier4|GK|
|cpt_hcpcs_modifier4|GL|
|cpt_hcpcs_modifier4|GM|
|cpt_hcpcs_modifier4|GN|
|cpt_hcpcs_modifier4|GO|
|cpt_hcpcs_modifier4|GP|
|cpt_hcpcs_modifier4|GQ|
|cpt_hcpcs_modifier4|GR|
|cpt_hcpcs_modifier4|GS|
|cpt_hcpcs_modifier4|GT|
|cpt_hcpcs_modifier4|GU|
|cpt_hcpcs_modifier4|GV|
|cpt_hcpcs_modifier4|GW|
|cpt_hcpcs_modifier4|GX|
|cpt_hcpcs_modifier4|GY|
|cpt_hcpcs_modifier4|GZ|
|cpt_hcpcs_modifier4|H9|
|cpt_hcpcs_modifier4|HA|
|cpt_hcpcs_modifier4|HB|
|cpt_hcpcs_modifier4|HC|
|cpt_hcpcs_modifier4|HD|
|cpt_hcpcs_modifier4|HE|
|cpt_hcpcs_modifier4|HF|
|cpt_hcpcs_modifier4|HG|
|cpt_hcpcs_modifier4|HH|
|cpt_hcpcs_modifier4|HI|
|cpt_hcpcs_modifier4|HJ|
|cpt_hcpcs_modifier4|HK|
|cpt_hcpcs_modifier4|HL|
|cpt_hcpcs_modifier4|HM|
|cpt_hcpcs_modifier4|HN|
|cpt_hcpcs_modifier4|HO|
|cpt_hcpcs_modifier4|HP|
|cpt_hcpcs_modifier4|HQ|
|cpt_hcpcs_modifier4|HR|
|cpt_hcpcs_modifier4|HS|
|cpt_hcpcs_modifier4|HT|
|cpt_hcpcs_modifier4|HU|
|cpt_hcpcs_modifier4|HV|
|cpt_hcpcs_modifier4|HW|
|cpt_hcpcs_modifier4|HX|
|cpt_hcpcs_modifier4|HY|
|cpt_hcpcs_modifier4|HZ|
|cpt_hcpcs_modifier4|J1|
|cpt_hcpcs_modifier4|J2|
|cpt_hcpcs_modifier4|J3|
|cpt_hcpcs_modifier4|J4|
|cpt_hcpcs_modifier4|JA|
|cpt_hcpcs_modifier4|JB|
|cpt_hcpcs_modifier4|JC|
|cpt_hcpcs_modifier4|JD|
|cpt_hcpcs_modifier4|JE|
|cpt_hcpcs_modifier4|JF|
|cpt_hcpcs_modifier4|JG|
|cpt_hcpcs_modifier4|JW|
|cpt_hcpcs_modifier4|K0|
|cpt_hcpcs_modifier4|K1|
|cpt_hcpcs_modifier4|K2|
|cpt_hcpcs_modifier4|K3|
|cpt_hcpcs_modifier4|K4|
|cpt_hcpcs_modifier4|KA|
|cpt_hcpcs_modifier4|KB|
|cpt_hcpcs_modifier4|KC|
|cpt_hcpcs_modifier4|KD|
|cpt_hcpcs_modifier4|KE|
|cpt_hcpcs_modifier4|KF|
|cpt_hcpcs_modifier4|KG|
|cpt_hcpcs_modifier4|KH|
|cpt_hcpcs_modifier4|KI|
|cpt_hcpcs_modifier4|KJ|
|cpt_hcpcs_modifier4|KK|
|cpt_hcpcs_modifier4|KL|
|cpt_hcpcs_modifier4|KM|
|cpt_hcpcs_modifier4|KN|
|cpt_hcpcs_modifier4|KO|
|cpt_hcpcs_modifier4|KP|
|cpt_hcpcs_modifier4|KQ|
|cpt_hcpcs_modifier4|KR|
|cpt_hcpcs_modifier4|KS|
|cpt_hcpcs_modifier4|KT|
|cpt_hcpcs_modifier4|KU|
|cpt_hcpcs_modifier4|KV|
|cpt_hcpcs_modifier4|KW|
|cpt_hcpcs_modifier4|KX|
|cpt_hcpcs_modifier4|KY|
|cpt_hcpcs_modifier4|KZ|
|cpt_hcpcs_modifier4|L1|
|cpt_hcpcs_modifier4|LC|
|cpt_hcpcs_modifier4|LD|
|cpt_hcpcs_modifier4|LL|
|cpt_hcpcs_modifier4|LM|
|cpt_hcpcs_modifier4|LR|
|cpt_hcpcs_modifier4|LS|
|cpt_hcpcs_modifier4|LT|
|cpt_hcpcs_modifier4|M2|
|cpt_hcpcs_modifier4|ME|
|cpt_hcpcs_modifier4|MI|
|cpt_hcpcs_modifier4|MR|
|cpt_hcpcs_modifier4|MS|
|cpt_hcpcs_modifier4|NB|
|cpt_hcpcs_modifier4|NH|
|cpt_hcpcs_modifier4|NM|
|cpt_hcpcs_modifier4|NR|
|cpt_hcpcs_modifier4|NU|
|cpt_hcpcs_modifier4|P1|
|cpt_hcpcs_modifier4|P2|
|cpt_hcpcs_modifier4|P3|
|cpt_hcpcs_modifier4|P4|
|cpt_hcpcs_modifier4|P5|
|cpt_hcpcs_modifier4|P6|
|cpt_hcpcs_modifier4|PA|
|cpt_hcpcs_modifier4|PB|
|cpt_hcpcs_modifier4|PC|
|cpt_hcpcs_modifier4|PD|
|cpt_hcpcs_modifier4|PE|
|cpt_hcpcs_modifier4|PI|
|cpt_hcpcs_modifier4|PL|
|cpt_hcpcs_modifier4|PM|
|cpt_hcpcs_modifier4|PN|
|cpt_hcpcs_modifier4|PO|
|cpt_hcpcs_modifier4|PS|
|cpt_hcpcs_modifier4|PT|
|cpt_hcpcs_modifier4|Q0|
|cpt_hcpcs_modifier4|Q1|
|cpt_hcpcs_modifier4|Q2|
|cpt_hcpcs_modifier4|Q3|
|cpt_hcpcs_modifier4|Q4|
|cpt_hcpcs_modifier4|Q5|
|cpt_hcpcs_modifier4|Q6|
|cpt_hcpcs_modifier4|Q7|
|cpt_hcpcs_modifier4|Q8|
|cpt_hcpcs_modifier4|Q9|
|cpt_hcpcs_modifier4|QA|
|cpt_hcpcs_modifier4|QB|
|cpt_hcpcs_modifier4|QC|
|cpt_hcpcs_modifier4|QD|
|cpt_hcpcs_modifier4|QE|
|cpt_hcpcs_modifier4|QF|
|cpt_hcpcs_modifier4|QG|
|cpt_hcpcs_modifier4|QH|
|cpt_hcpcs_modifier4|QJ|
|cpt_hcpcs_modifier4|QK|
|cpt_hcpcs_modifier4|QL|
|cpt_hcpcs_modifier4|QM|
|cpt_hcpcs_modifier4|QN|
|cpt_hcpcs_modifier4|QP|
|cpt_hcpcs_modifier4|QQ|
|cpt_hcpcs_modifier4|QR|
|cpt_hcpcs_modifier4|QS|
|cpt_hcpcs_modifier4|QT|
|cpt_hcpcs_modifier4|QU|
|cpt_hcpcs_modifier4|QV|
|cpt_hcpcs_modifier4|QW|
|cpt_hcpcs_modifier4|QX|
|cpt_hcpcs_modifier4|QY|
|cpt_hcpcs_modifier4|QZ|
|cpt_hcpcs_modifier4|RA|
|cpt_hcpcs_modifier4|RB|
|cpt_hcpcs_modifier4|RC|
|cpt_hcpcs_modifier4|RD|
|cpt_hcpcs_modifier4|RE|
|cpt_hcpcs_modifier4|RI|
|cpt_hcpcs_modifier4|RP|
|cpt_hcpcs_modifier4|RR|
|cpt_hcpcs_modifier4|RT|
|cpt_hcpcs_modifier4|SA|
|cpt_hcpcs_modifier4|SB|
|cpt_hcpcs_modifier4|SC|
|cpt_hcpcs_modifier4|SD|
|cpt_hcpcs_modifier4|SE|
|cpt_hcpcs_modifier4|SF|
|cpt_hcpcs_modifier4|SG|
|cpt_hcpcs_modifier4|SH|
|cpt_hcpcs_modifier4|SJ|
|cpt_hcpcs_modifier4|SK|
|cpt_hcpcs_modifier4|SL|
|cpt_hcpcs_modifier4|SM|
|cpt_hcpcs_modifier4|SN|
|cpt_hcpcs_modifier4|SP|
|cpt_hcpcs_modifier4|SQ|
|cpt_hcpcs_modifier4|SS|
|cpt_hcpcs_modifier4|ST|
|cpt_hcpcs_modifier4|SU|
|cpt_hcpcs_modifier4|SV|
|cpt_hcpcs_modifier4|SW|
|cpt_hcpcs_modifier4|SY|
|cpt_hcpcs_modifier4|SZ|
|cpt_hcpcs_modifier4|T1|
|cpt_hcpcs_modifier4|T2|
|cpt_hcpcs_modifier4|T3|
|cpt_hcpcs_modifier4|T4|
|cpt_hcpcs_modifier4|T5|
|cpt_hcpcs_modifier4|T6|
|cpt_hcpcs_modifier4|T7|
|cpt_hcpcs_modifier4|T8|
|cpt_hcpcs_modifier4|T9|
|cpt_hcpcs_modifier4|TA|
|cpt_hcpcs_modifier4|TB|
|cpt_hcpcs_modifier4|TC|
|cpt_hcpcs_modifier4|TD|
|cpt_hcpcs_modifier4|TE|
|cpt_hcpcs_modifier4|TF|
|cpt_hcpcs_modifier4|TG|
|cpt_hcpcs_modifier4|TH|
|cpt_hcpcs_modifier4|TJ|
|cpt_hcpcs_modifier4|TK|
|cpt_hcpcs_modifier4|TL|
|cpt_hcpcs_modifier4|TM|
|cpt_hcpcs_modifier4|TN|
|cpt_hcpcs_modifier4|TP|
|cpt_hcpcs_modifier4|TQ|
|cpt_hcpcs_modifier4|TR|
|cpt_hcpcs_modifier4|TS|
|cpt_hcpcs_modifier4|TT|
|cpt_hcpcs_modifier4|TU|
|cpt_hcpcs_modifier4|TV|
|cpt_hcpcs_modifier4|TW|
|cpt_hcpcs_modifier4|TX|
|cpt_hcpcs_modifier4|U1|
|cpt_hcpcs_modifier4|U2|
|cpt_hcpcs_modifier4|U3|
|cpt_hcpcs_modifier4|U4|
|cpt_hcpcs_modifier4|U5|
|cpt_hcpcs_modifier4|U6|
|cpt_hcpcs_modifier4|U7|
|cpt_hcpcs_modifier4|U8|
|cpt_hcpcs_modifier4|U9|
|cpt_hcpcs_modifier4|UA|
|cpt_hcpcs_modifier4|UB|
|cpt_hcpcs_modifier4|UC|
|cpt_hcpcs_modifier4|UD|
|cpt_hcpcs_modifier4|UE|
|cpt_hcpcs_modifier4|UF|
|cpt_hcpcs_modifier4|UG|
|cpt_hcpcs_modifier4|UH|
|cpt_hcpcs_modifier4|UJ|
|cpt_hcpcs_modifier4|UK|
|cpt_hcpcs_modifier4|UN|
|cpt_hcpcs_modifier4|UP|
|cpt_hcpcs_modifier4|UQ|
|cpt_hcpcs_modifier4|UR|
|cpt_hcpcs_modifier4|US|
|cpt_hcpcs_modifier4|V1|
|cpt_hcpcs_modifier4|V2|
|cpt_hcpcs_modifier4|V3|
|cpt_hcpcs_modifier4|V4|
|cpt_hcpcs_modifier4|V5|
|cpt_hcpcs_modifier4|V6|
|cpt_hcpcs_modifier4|V7|
|cpt_hcpcs_modifier4|V8|
|cpt_hcpcs_modifier4|V9|
|cpt_hcpcs_modifier4|VP|
|cpt_hcpcs_modifier4|VR|
|cpt_hcpcs_modifier4|W1|
|cpt_hcpcs_modifier4|W5|
|cpt_hcpcs_modifier4|W6|
|cpt_hcpcs_modifier4|W7|
|cpt_hcpcs_modifier4|W8|
|cpt_hcpcs_modifier4|W9|
|cpt_hcpcs_modifier4|WC|
|cpt_hcpcs_modifier4|WH|
|cpt_hcpcs_modifier4|WP|
|cpt_hcpcs_modifier4|X1|
|cpt_hcpcs_modifier4|X2|
|cpt_hcpcs_modifier4|X3|
|cpt_hcpcs_modifier4|X4|
|cpt_hcpcs_modifier4|X5|
|cpt_hcpcs_modifier4|XE|
|cpt_hcpcs_modifier4|XP|
|cpt_hcpcs_modifier4|XS|
|cpt_hcpcs_modifier4|XU|
|cpt_hcpcs_modifier4|VM|
|cpt_hcpcs_modifier4|ZA|
|cpt_hcpcs_modifier4|ZB|
|cpt_hcpcs_modifier4|ZL|
|cpt_hcpcs_modifier4|ZS|
|cpt_hcpcs_modifier4|1P|
|cpt_hcpcs_modifier4|2P|
|cpt_hcpcs_modifier4|3P|
|cpt_hcpcs_modifier4|8P|
|ndc_units|F2|
|ndc_units|GR|
|ndc_units|ME|
|ndc_units|ML|
|ndc_units|UN|

<h2 id="tocS_DoctorMessage">DoctorMessage</h2>
<!-- backwards compatibility -->
<a id="schemadoctormessage"></a>
<a id="schema_DoctorMessage"></a>
<a id="tocSdoctormessage"></a>
<a id="tocsdoctormessage"></a>

```json
{
  "archived": true,
  "attachment": "string",
  "doctor": 0,
  "id": 0,
  "message_notes": [
    {
      "created_at": "string",
      "created_by": "string",
      "text": "string"
    }
  ],
  "owner": "string",
  "patient": 0,
  "read": true,
  "received_at": "string",
  "responsible_user": "string",
  "starred": true,
  "title": "string",
  "type": "GP",
  "updated_at": "string",
  "workflow_step": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|If true, indicates that the message has been soft-deleted|
|attachment|string|false|none|Files are passed using `multipart/form-data` encoding, but returned as URLs.|
|doctor|integer|true|none|none|
|id|integer|false|read-only|none|
|message_notes|[object]|false|none|Array of notes attached to the message|
|owner|string|false|none|ID of `/api/users` who owns the message, who may be the doctor themselves or one of their staff members|
|patient|integer|false|none|ID of patient that the message concerns, if applicable|
|read|boolean|false|read-only|none|
|received_at|string|false|read-only|none|
|responsible_user|string|false|none|ID of `/api/users` who has been assigned to process the message, who may be the doctor themselves or one of their staff members|
|starred|boolean|false|read-only|none|
|title|string|true|none|none|
|type|string|false|none|<br>Value \| Description<br>----- \| -----------<br>`"GP"` \| Generated PDF<br>`"GC"` \| Generated CSV<br>`"GZ"` \| Generated ZIP<br>`"IF"` \| Incoming Fax<br>`"OF"` \| Outgoing Fax<br>`"IL"` \| Incoming Labs<br>`"IR"` \| Inbound Referrals<br>`"OR"` \| Outbound Referrals<br>`"IE"` \| Incoming eRx<br>`"OA"` \| Online Appointments<br>`"PO"` \| Patient Onboarding<br>`"PI"` \| Patient Incoming Message<br>`"PM"` \| Patient Outgoing Message<br>`"OO"` \| Demo Meeting Message<br>`"OD"` \| Outbound Direct Message<br>`"ID"` \| Inbound Direct Message<br>|
|updated_at|string|false|read-only|none|
|workflow_step|string|false|read-only|Used by doctors and their staff to keep track of what step of processing the message is in|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GP|
|type|GC|
|type|GT|
|type|GZ|
|type|IF|
|type|OF|
|type|IL|
|type|IR|
|type|OR|
|type|IE|
|type|OA|
|type|PO|
|type|PI|
|type|PM|
|type|OO|
|type|OD|
|type|ID|
|type|DL|
|type|CN|

<h2 id="tocS_EOBObject">EOBObject</h2>
<!-- backwards compatibility -->
<a id="schemaeobobject"></a>
<a id="schema_EOBObject"></a>
<a id="tocSeobobject"></a>
<a id="tocseobobject"></a>

```json
{
  "check_date": "string",
  "deposit_date": "string",
  "doctor": 0,
  "id": 0,
  "insurance_payer_id": "string",
  "insurance_payer_name": "string",
  "insurance_payer_trace_number": "string",
  "payment_method": "",
  "posted_date": "string",
  "scanned_eob": "string",
  "total_paid": 0,
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check_date|string|false|none|Date of check. If missing, default to the date when the request is made|
|deposit_date|string|false|none|Date when EOB gets deposited.|
|doctor|integer|true|none|none|
|id|integer|false|read-only|none|
|insurance_payer_id|string|true|none|none|
|insurance_payer_name|string|true|none|none|
|insurance_payer_trace_number|string|true|none|none|
|payment_method|string|false|none|`""` - Unknown, `"ACH"` - Automated Clearing House (ACH), `"BOPCCP"` - Cash Concentration/Disbursement plus Addenda (CCD+) (ACH), `"BOPCTX"` - Corporate Trade Exchange (CTX) (ACH), `"CHK"` - Check, `"FWT"` - Federal Reserve Funds/Wire Transfer - Nonrepetitive, `"VPAY"` - vPayment, `"NON"` - Non-Payment Data|
|posted_date|string|false|read-only|none|
|scanned_eob|string|false|none|none|
|total_paid|number|false|none|Total amount paid. If missing, default to 0.00|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_method|""|
|payment_method|ACH|
|payment_method|BOPCCP|
|payment_method|BOPCTX|
|payment_method|CHK|
|payment_method|FWT|
|payment_method|VPAY|
|payment_method|NON|

<h2 id="tocS_ImplantableDevice">ImplantableDevice</h2>
<!-- backwards compatibility -->
<a id="schemaimplantabledevice"></a>
<a id="schema_ImplantableDevice"></a>
<a id="tocSimplantabledevice"></a>
<a id="tocsimplantabledevice"></a>

```json
{
  "archived": true,
  "brand_name": "string",
  "company_name": "string",
  "created_at": "string",
  "expiration_date": "string",
  "gmdn_pt_name": "string",
  "id": 0,
  "manufacturing_date": "string",
  "patient": "string",
  "procedure": "string",
  "serial_number": "string",
  "status": "active",
  "udi": "string",
  "updated_at": "string",
  "version_or_model": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|none|
|brand_name|string|false|read-only|none|
|company_name|string|false|read-only|none|
|created_at|string|false|read-only|none|
|expiration_date|string|false|read-only|none|
|gmdn_pt_name|string|false|read-only|"GMDN PT Name" or "SNOMED CT Description" mapped to the attribute in  the "GMDN PT Name"|
|id|integer|false|read-only|none|
|manufacturing_date|string|false|read-only|none|
|patient|string|false|read-only|none|
|procedure|string|false|read-only|ID of `/api/procedures` object|
|serial_number|string|false|read-only|none|
|status|string|false|read-only|One of `'active'` or `'inactive'`|
|udi|string|false|read-only|none|
|updated_at|string|false|read-only|none|
|version_or_model|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_Insurance">Insurance</h2>
<!-- backwards compatibility -->
<a id="schemainsurance"></a>
<a id="schema_Insurance"></a>
<a id="tocSinsurance"></a>
<a id="tocsinsurance"></a>

```json
{
  "payer_id": "string",
  "payer_name": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payer_id|string|false|none|none|
|payer_name|string|false|none|none|
|state|string|false|none|none|

<h2 id="tocS_InventoryCategory">InventoryCategory</h2>
<!-- backwards compatibility -->
<a id="schemainventorycategory"></a>
<a id="schema_InventoryCategory"></a>
<a id="tocSinventorycategory"></a>
<a id="tocsinventorycategory"></a>

```json
{
  "archived": true,
  "category_type": "vaccine",
  "created_at": "string",
  "doctor": "string",
  "id": 0,
  "name": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|If the category is archived or not|
|category_type|string|false|none|Can be one of `"vaccine"`, `"product"` or `"service"`|
|created_at|string|false|read-only|none|
|doctor|string|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|false|none|Name of the inventory category|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|category_type|vaccine|
|category_type|product|
|category_type|service|

<h2 id="tocS_InventoryVaccine">InventoryVaccine</h2>
<!-- backwards compatibility -->
<a id="schemainventoryvaccine"></a>
<a id="schema_InventoryVaccine"></a>
<a id="tocSinventoryvaccine"></a>
<a id="tocsinventoryvaccine"></a>

```json
{
  "category": 0,
  "cost": 0,
  "created_at": "string",
  "current_quantity": 0,
  "cvx_code": "string",
  "doctor": 0,
  "expiry": "string",
  "id": 0,
  "lot_number": "string",
  "manufacturer": "string",
  "manufacturer_code": "string",
  "name": "string",
  "note": "string",
  "original_quantity": 0,
  "price": 0,
  "price_with_tax": 0,
  "sales_tax_applicable": true,
  "status": "active",
  "updated_at": "string",
  "vaccination_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|integer|false|none|ID of `/api/inventory_categories`|
|cost|number|false|none|Base cost for consumables.|
|created_at|string|false|read-only|none|
|current_quantity|integer|false|read-only|This field can onlyu be changed by creating new patient vaccine record. Current quantity of an inventory vaccine is calculated by subtract number of records pointing to this inventory from the original quantity value.|
|cvx_code|string|false|none|none|
|doctor|integer|true|none|none|
|expiry|string|false|none|When will the vaccine expire|
|id|integer|false|read-only|none|
|lot_number|string|false|none|none|
|manufacturer|string|false|none|none|
|manufacturer_code|string|true|none|none|
|name|string|true|none|none|
|note|string|false|none|none|
|original_quantity|integer|false|none|Default to zero|
|price|number|false|none|none|
|price_with_tax|number|false|none|none|
|sales_tax_applicable|boolean|false|none|Is sales tax applicable to this service/product? Default to false|
|status|string|false|none|Status of vaccine, could be one of `active`, `inactive`, `archived`, `voided`, default to `active`|
|updated_at|string|false|read-only|none|
|vaccination_type|string|false|none|Default to `"standard vaccine"`|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|status|archived|
|status|voided|

<h2 id="tocS_LabOrder">LabOrder</h2>
<!-- backwards compatibility -->
<a id="schemalaborder"></a>
<a id="schema_LabOrder"></a>
<a id="tocSlaborder"></a>
<a id="tocslaborder"></a>

```json
{
  "accession_number": "string",
  "doctor": 0,
  "documents": [
    "string"
  ],
  "icd10_codes": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "id": 0,
  "notes": "string",
  "patient": 0,
  "priority": "N",
  "requisition_id": "string",
  "status": "string",
  "sublab": 0,
  "timestamp": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accession_number|string|false|none|For external use only|
|doctor|integer|true|none|none|
|documents|[string]|false|read-only|Associated `/lab_documents` objects|
|icd10_codes|[object]|false|none|ICD-10 codes of the conditions which the tests concerns.|
|id|integer|false|read-only|none|
|notes|string|false|none|none|
|patient|integer|true|none|none|
|priority|string|false|none|`"Normal"` or `"STAT"`. Default `"Normal"`|
|requisition_id|string|false|read-only|The ID printed on the requisition PDF. Generally the same as id.|
|status|string|false|none|Equivalent to HL7's ORC.5. Defaults to `"N"`.<br>Value \| Notes<br>----- \| -----<br>`"N"` \| not sent                                          \|<br>`"Q"` \| queued for processing                             \|<br>`"A"` \| `ABN (Advance Beneficiary Notice)` required       \|<br>`"S"` \| send                                              \|<br>`"R"` \| results received                                  \|<br>`"E"` \| error                                             \|<br>|
|sublab|integer|true|none|none|
|timestamp|string|false|read-only|Time at which the order was submitted. Defaults to now|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|N|
|priority|S|

<h2 id="tocS_LabOrderDocument">LabOrderDocument</h2>
<!-- backwards compatibility -->
<a id="schemalaborderdocument"></a>
<a id="schema_LabOrderDocument"></a>
<a id="tocSlaborderdocument"></a>
<a id="tocslaborderdocument"></a>

```json
{
  "document": "string",
  "id": 0,
  "lab_order": 0,
  "timestamp": "string",
  "type": "REQ"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string|true|none|none|
|id|integer|false|read-only|none|
|lab_order|integer|true|none|ID of the order this document is associated with|
|timestamp|string|false|read-only|Time at which the document was uploaded|
|type|string|true|none|<br>Value \| Notes<br>----- \| -----<br>`"REQ"` \| requisition form                                              \|<br>`"ABN"` \| `ABN (Advance Beneficiary Notice)`                            \|<br>`"R-A"` \| requisition form and :abbr:`ABN (Advance Beneficiary Notice)` \|<br>`"RES"` \| lab results                                                   \|<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|REQ|
|type|ABN|
|type|R-A|
|type|RES|

<h2 id="tocS_LabResult">LabResult</h2>
<!-- backwards compatibility -->
<a id="schemalabresult"></a>
<a id="schema_LabResult"></a>
<a id="tocSlabresult"></a>
<a id="tocslabresult"></a>

```json
{
  "abnormal_status": "L",
  "comments": "string",
  "document": 0,
  "group_code": "string",
  "id": 0,
  "is_abnormal": "string",
  "lab_order": "string",
  "lab_test": 0,
  "normal_range": "string",
  "observation_code": "string",
  "observation_description": "string",
  "specimen_received": "string",
  "status": "P",
  "test_performed": "string",
  "unit": "string",
  "value": "string",
  "value_is_numeric": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abnormal_status|string|false|none|<br>Value \| Notes<br>----- \| -----<br>`'L'` \| `'low'`<br>`'LL'` \| `'alert low'`<br>`'H'` \| `'high'`<br>`'HH'` \| `'alert high'`<br>`'<'` \| `'panic low'`<br>`'>'` \| `'panic high'`<br>`'A'` \| `'abnormal'`<br>`'AA'` \| `'very abnormal'`<br>`'S'` \| `'susceptible'`<br>`'R'` \| `'resistant'`<br>`'I'` \| `'intermediate'`<br>`'NEG'` \| `'negative'`<br>`'POS'` \| `'positive'`<br>`'N'` \| `'normal'`<br>`''` \| `'no comment'`<br>|
|comments|string|false|none|none|
|document|integer|true|none|ID of `/lab_documents` object for the result|
|group_code|string|false|none|This is the code used for grouping result data.|
|id|integer|false|read-only|none|
|is_abnormal|string|false|none|If true, the result will be flagged for the doctor's attention|
|lab_order|string|false|read-only|ID of `/lab_orders` object the result belongs to|
|lab_test|integer|true|none|ID of `/lab_tests` object for the result|
|normal_range|string|false|none|When ``value_is_numeric`` is True, this parameter must be a string of the form ``"<lower> <upper>", where both lower and upper are numerical``|
|observation_code|string|false|none|none|
|observation_description|string|false|none|For example, ``"Blood Urea Nitrogen (BUN)"``|
|specimen_received|string|false|none|none|
|status|string|true|none|<br>Value \| Notes<br>----- \| -----<br>`'P'` \| `'preliminary'`<br>`'I'` \| `'pending'`<br>`'C'` \| `'correction'`<br>`'F'` \| `'final'`<br>`'X'` \| `'canceled'`<br>|
|test_performed|string|true|none|none|
|unit|string|false|none|Unit used for the value|
|value|string|true|none|none|
|value_is_numeric|boolean|false|none|Default to `False`|

#### Enumerated Values

|Property|Value|
|---|---|
|abnormal_status|L|
|abnormal_status|LL|
|abnormal_status|H|
|abnormal_status|HH|
|abnormal_status|<|
|abnormal_status|>|
|abnormal_status|A|
|abnormal_status|AA|
|abnormal_status|S|
|abnormal_status|R|
|abnormal_status|I|
|abnormal_status|NEG|
|abnormal_status|POS|
|abnormal_status|N|
|abnormal_status|""|
|status|P|
|status|I|
|status|C|
|status|F|
|status|X|

<h2 id="tocS_LabTest">LabTest</h2>
<!-- backwards compatibility -->
<a id="schemalabtest"></a>
<a id="schema_LabTest"></a>
<a id="tocSlabtest"></a>
<a id="tocslabtest"></a>

```json
{
  "code": "string",
  "collection_date": "string",
  "description": "string",
  "id": 0,
  "internal_notes": "string",
  "lab_order": 0,
  "name": "string",
  "report_notes": "string",
  "specimen_condition": "string",
  "specimen_source": "string",
  "specimen_total_volume": 0,
  "status": "P"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|collection_date|string|false|none|The date the specimen were collected|
|description|string|false|none|Short description of the ICD-10 code|
|id|integer|false|read-only|none|
|internal_notes|string|false|none|Notes which are meant for, and read by, the labs|
|lab_order|integer|true|none|ID of associated lab order|
|name|string|false|none|Name for the test|
|report_notes|string|false|none|Notes which are not meant for labs, but are copied on the results.|
|specimen_condition|string|false|none|none|
|specimen_source|string|false|none|none|
|specimen_total_volume|number|false|none|none|
|status|string|false|none|One of `"preliminary"`, `"pending"`, `"correction"`, `"final"` or `"canceled"`. Defaults to `"preliminary"`|

#### Enumerated Values

|Property|Value|
|---|---|
|status|P|
|status|I|
|status|C|
|status|F|
|status|X|

<h2 id="tocS_LabVendorLocation">LabVendorLocation</h2>
<!-- backwards compatibility -->
<a id="schemalabvendorlocation"></a>
<a id="schema_LabVendorLocation"></a>
<a id="tocSlabvendorlocation"></a>
<a id="tocslabvendorlocation"></a>

```json
{
  "facility_code": "string",
  "id": 0,
  "name": "string",
  "vendor_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facility_code|string|true|none|Used for identifying the lab in orders and results|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|vendor_name|string|false|read-only|none|

<h2 id="tocS_LineItemTransaction">LineItemTransaction</h2>
<!-- backwards compatibility -->
<a id="schemalineitemtransaction"></a>
<a id="schema_LineItemTransaction"></a>
<a id="tocSlineitemtransaction"></a>
<a id="tocslineitemtransaction"></a>

```json
{
  "adjustment": 0,
  "adjustment_group_code": "",
  "adjustment_reason": "-3",
  "appointment": 0,
  "check_date": "string",
  "claim_status": "",
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "ins_name": 0,
  "ins_paid": 0,
  "line_item": 0,
  "patient": 0,
  "posted_date": "string",
  "trace_number": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustment|number|false|none|Adjustment from total billed|
|adjustment_group_code|string|false|read-only|Group code for adjustment|
|adjustment_reason|string|false|none|Reason for adjustment|
|appointment|integer|false|none|Appointment ID|
|check_date|string|false|read-only|Date of check|
|claim_status|string|false|read-only|Status of claim|
|created_at|string|false|read-only|none|
|doctor|integer|false|none|Doctor ID|
|id|integer|false|read-only|none|
|ins_name|integer|false|none|Can be one of the following, `1`(Primary Insurance), `2`(Secondary Insurance)|
|ins_paid|number|false|none|none|
|line_item|integer|false|none|ID of `/api/line_item` object|
|patient|integer|false|none|none|
|posted_date|string|false|read-only|Date when transaction is created|
|trace_number|string|false|none|Check number|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|adjustment_group_code|""|
|adjustment_group_code|CO|
|adjustment_group_code|OA|
|adjustment_group_code|PI|
|adjustment_group_code|PR|
|adjustment_reason|-3|
|adjustment_reason|-2|
|adjustment_reason|-4|
|adjustment_reason|-1|
|adjustment_reason|0|
|adjustment_reason|1|
|adjustment_reason|2|
|adjustment_reason|3|
|adjustment_reason|4|
|adjustment_reason|5|
|adjustment_reason|6|
|adjustment_reason|7|
|adjustment_reason|8|
|adjustment_reason|9|
|adjustment_reason|10|
|adjustment_reason|11|
|adjustment_reason|12|
|adjustment_reason|13|
|adjustment_reason|14|
|adjustment_reason|15|
|adjustment_reason|16|
|adjustment_reason|18|
|adjustment_reason|19|
|adjustment_reason|20|
|adjustment_reason|21|
|adjustment_reason|22|
|adjustment_reason|23|
|adjustment_reason|24|
|adjustment_reason|26|
|adjustment_reason|27|
|adjustment_reason|29|
|adjustment_reason|31|
|adjustment_reason|32|
|adjustment_reason|33|
|adjustment_reason|34|
|adjustment_reason|35|
|adjustment_reason|39|
|adjustment_reason|40|
|adjustment_reason|44|
|adjustment_reason|45|
|adjustment_reason|49|
|adjustment_reason|50|
|adjustment_reason|51|
|adjustment_reason|53|
|adjustment_reason|54|
|adjustment_reason|55|
|adjustment_reason|56|
|adjustment_reason|58|
|adjustment_reason|59|
|adjustment_reason|60|
|adjustment_reason|61|
|adjustment_reason|66|
|adjustment_reason|69|
|adjustment_reason|70|
|adjustment_reason|74|
|adjustment_reason|75|
|adjustment_reason|76|
|adjustment_reason|78|
|adjustment_reason|85|
|adjustment_reason|87|
|adjustment_reason|89|
|adjustment_reason|90|
|adjustment_reason|91|
|adjustment_reason|94|
|adjustment_reason|95|
|adjustment_reason|96|
|adjustment_reason|97|
|adjustment_reason|100|
|adjustment_reason|101|
|adjustment_reason|102|
|adjustment_reason|103|
|adjustment_reason|104|
|adjustment_reason|105|
|adjustment_reason|106|
|adjustment_reason|107|
|adjustment_reason|108|
|adjustment_reason|109|
|adjustment_reason|110|
|adjustment_reason|111|
|adjustment_reason|112|
|adjustment_reason|114|
|adjustment_reason|115|
|adjustment_reason|116|
|adjustment_reason|117|
|adjustment_reason|118|
|adjustment_reason|119|
|adjustment_reason|121|
|adjustment_reason|122|
|adjustment_reason|125|
|adjustment_reason|128|
|adjustment_reason|129|
|adjustment_reason|130|
|adjustment_reason|131|
|adjustment_reason|132|
|adjustment_reason|133|
|adjustment_reason|134|
|adjustment_reason|135|
|adjustment_reason|136|
|adjustment_reason|137|
|adjustment_reason|138|
|adjustment_reason|139|
|adjustment_reason|140|
|adjustment_reason|142|
|adjustment_reason|143|
|adjustment_reason|144|
|adjustment_reason|146|
|adjustment_reason|147|
|adjustment_reason|148|
|adjustment_reason|149|
|adjustment_reason|150|
|adjustment_reason|151|
|adjustment_reason|152|
|adjustment_reason|153|
|adjustment_reason|154|
|adjustment_reason|155|
|adjustment_reason|157|
|adjustment_reason|158|
|adjustment_reason|159|
|adjustment_reason|160|
|adjustment_reason|161|
|adjustment_reason|162|
|adjustment_reason|163|
|adjustment_reason|164|
|adjustment_reason|165|
|adjustment_reason|166|
|adjustment_reason|167|
|adjustment_reason|168|
|adjustment_reason|169|
|adjustment_reason|170|
|adjustment_reason|171|
|adjustment_reason|172|
|adjustment_reason|173|
|adjustment_reason|174|
|adjustment_reason|175|
|adjustment_reason|176|
|adjustment_reason|177|
|adjustment_reason|178|
|adjustment_reason|179|
|adjustment_reason|180|
|adjustment_reason|181|
|adjustment_reason|182|
|adjustment_reason|183|
|adjustment_reason|184|
|adjustment_reason|185|
|adjustment_reason|186|
|adjustment_reason|187|
|adjustment_reason|188|
|adjustment_reason|189|
|adjustment_reason|190|
|adjustment_reason|191|
|adjustment_reason|192|
|adjustment_reason|193|
|adjustment_reason|194|
|adjustment_reason|195|
|adjustment_reason|197|
|adjustment_reason|198|
|adjustment_reason|199|
|adjustment_reason|200|
|adjustment_reason|201|
|adjustment_reason|202|
|adjustment_reason|203|
|adjustment_reason|204|
|adjustment_reason|205|
|adjustment_reason|206|
|adjustment_reason|207|
|adjustment_reason|208|
|adjustment_reason|209|
|adjustment_reason|210|
|adjustment_reason|211|
|adjustment_reason|212|
|adjustment_reason|213|
|adjustment_reason|214|
|adjustment_reason|215|
|adjustment_reason|216|
|adjustment_reason|217|
|adjustment_reason|218|
|adjustment_reason|219|
|adjustment_reason|220|
|adjustment_reason|221|
|adjustment_reason|222|
|adjustment_reason|223|
|adjustment_reason|224|
|adjustment_reason|225|
|adjustment_reason|226|
|adjustment_reason|227|
|adjustment_reason|228|
|adjustment_reason|229|
|adjustment_reason|230|
|adjustment_reason|231|
|adjustment_reason|232|
|adjustment_reason|233|
|adjustment_reason|234|
|adjustment_reason|235|
|adjustment_reason|236|
|adjustment_reason|237|
|adjustment_reason|238|
|adjustment_reason|239|
|adjustment_reason|240|
|adjustment_reason|241|
|adjustment_reason|242|
|adjustment_reason|243|
|adjustment_reason|244|
|adjustment_reason|245|
|adjustment_reason|246|
|adjustment_reason|247|
|adjustment_reason|248|
|adjustment_reason|249|
|adjustment_reason|250|
|adjustment_reason|251|
|adjustment_reason|252|
|adjustment_reason|253|
|adjustment_reason|254|
|adjustment_reason|256|
|adjustment_reason|257|
|adjustment_reason|258|
|adjustment_reason|259|
|adjustment_reason|260|
|adjustment_reason|261|
|adjustment_reason|262|
|adjustment_reason|263|
|adjustment_reason|264|
|adjustment_reason|265|
|adjustment_reason|266|
|adjustment_reason|267|
|adjustment_reason|268|
|adjustment_reason|269|
|adjustment_reason|270|
|adjustment_reason|271|
|adjustment_reason|272|
|adjustment_reason|273|
|adjustment_reason|274|
|adjustment_reason|275|
|adjustment_reason|276|
|adjustment_reason|277|
|adjustment_reason|287|
|adjustment_reason|288|
|adjustment_reason|A0|
|adjustment_reason|A1|
|adjustment_reason|A5|
|adjustment_reason|A6|
|adjustment_reason|A7|
|adjustment_reason|A8|
|adjustment_reason|B1|
|adjustment_reason|B4|
|adjustment_reason|B5|
|adjustment_reason|B7|
|adjustment_reason|B8|
|adjustment_reason|B9|
|adjustment_reason|B10|
|adjustment_reason|B11|
|adjustment_reason|B12|
|adjustment_reason|B13|
|adjustment_reason|B14|
|adjustment_reason|B15|
|adjustment_reason|B16|
|adjustment_reason|B20|
|adjustment_reason|B22|
|adjustment_reason|B23|
|adjustment_reason|P1|
|adjustment_reason|P2|
|adjustment_reason|P3|
|adjustment_reason|P4|
|adjustment_reason|P5|
|adjustment_reason|P6|
|adjustment_reason|P7|
|adjustment_reason|P8|
|adjustment_reason|P9|
|adjustment_reason|P10|
|adjustment_reason|P11|
|adjustment_reason|P12|
|adjustment_reason|P13|
|adjustment_reason|P14|
|adjustment_reason|P15|
|adjustment_reason|P16|
|adjustment_reason|P17|
|adjustment_reason|P18|
|adjustment_reason|P19|
|adjustment_reason|P20|
|adjustment_reason|P21|
|adjustment_reason|P22|
|adjustment_reason|P23|
|adjustment_reason|W1|
|adjustment_reason|W2|
|adjustment_reason|W3|
|adjustment_reason|W4|
|adjustment_reason|Y1|
|adjustment_reason|Y2|
|adjustment_reason|Y3|
|claim_status|""|
|claim_status|0|
|claim_status|1|
|claim_status|2|
|claim_status|3|
|claim_status|4|
|claim_status|5|
|claim_status|10|
|claim_status|13|
|claim_status|15|
|claim_status|16|
|claim_status|17|
|claim_status|19|
|claim_status|20|
|claim_status|21|
|claim_status|22|
|claim_status|23|
|claim_status|25|
|claim_status|27|

<h2 id="tocS_Office">Office</h2>
<!-- backwards compatibility -->
<a id="schemaoffice"></a>
<a id="schema_Office"></a>
<a id="tocSoffice"></a>
<a id="tocsoffice"></a>

```json
{
  "address": "string",
  "archived": true,
  "city": "string",
  "country": "",
  "doctor": "string",
  "end_time": "string",
  "exam_rooms": "string",
  "fax_number": "string",
  "id": 0,
  "name": "string",
  "online_scheduling": true,
  "online_timeslots": [
    {
      "day": 0,
      "hour": 0,
      "minute": 0
    }
  ],
  "phone_number": "string",
  "start_time": "string",
  "state": "AL",
  "tax_id_number_professional": "string",
  "zip_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|read-only|none|
|archived|boolean|false|none|Indicates that the object has been soft-deleted and should not be used|
|city|string|false|read-only|none|
|country|string|false|read-only|Two-letter country code|
|doctor|string|false|read-only|ID of the doctor who owns the office|
|end_time|string|false|none|Truncated to the hour. Default is `24:00`|
|exam_rooms|string|false|read-only|none|
|fax_number|string|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|false|read-only|none|
|online_scheduling|boolean|false|none|Default is `false`|
|online_timeslots|[object]|false|none|Array of timslots|
|phone_number|string|false|read-only|none|
|start_time|string|false|none|Truncated to the hour. Default is `00:00:00`|
|state|string|false|read-only|Two-letter abbreviation|
|tax_id_number_professional|string|false|read-only|Billing Tax ID #|
|zip_code|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|country|""|
|country|AF|
|country|AX|
|country|AL|
|country|DZ|
|country|AS|
|country|AD|
|country|AO|
|country|AI|
|country|AQ|
|country|AG|
|country|AR|
|country|AM|
|country|AW|
|country|AU|
|country|AT|
|country|AZ|
|country|BS|
|country|BH|
|country|BD|
|country|BB|
|country|BY|
|country|BE|
|country|BZ|
|country|BJ|
|country|BM|
|country|BT|
|country|BO|
|country|BQ|
|country|BA|
|country|BW|
|country|BV|
|country|BR|
|country|IO|
|country|BN|
|country|BG|
|country|BF|
|country|BI|
|country|KH|
|country|CM|
|country|CA|
|country|CV|
|country|KY|
|country|CF|
|country|TD|
|country|CL|
|country|CN|
|country|CX|
|country|CC|
|country|CO|
|country|KM|
|country|CG|
|country|CD|
|country|CK|
|country|CR|
|country|CI|
|country|HR|
|country|CU|
|country|CW|
|country|CY|
|country|CZ|
|country|CYM|
|country|DK|
|country|DJ|
|country|DM|
|country|DO|
|country|EC|
|country|EG|
|country|SV|
|country|GQ|
|country|ER|
|country|EE|
|country|ET|
|country|FK|
|country|FO|
|country|FJ|
|country|FI|
|country|FR|
|country|GF|
|country|PF|
|country|TF|
|country|GA|
|country|GM|
|country|GE|
|country|DE|
|country|GH|
|country|GI|
|country|GR|
|country|GL|
|country|GD|
|country|GP|
|country|GU|
|country|GT|
|country|GG|
|country|GN|
|country|GW|
|country|GY|
|country|HT|
|country|HM|
|country|VA|
|country|HN|
|country|HK|
|country|HU|
|country|IS|
|country|IN|
|country|ID|
|country|IR|
|country|IQ|
|country|IE|
|country|IM|
|country|IL|
|country|IT|
|country|JM|
|country|JP|
|country|JE|
|country|JO|
|country|KZ|
|country|KE|
|country|KI|
|country|KP|
|country|KR|
|country|XK|
|country|KW|
|country|KG|
|country|LA|
|country|LV|
|country|LB|
|country|LS|
|country|LR|
|country|LY|
|country|LI|
|country|LT|
|country|LU|
|country|MO|
|country|MK|
|country|MG|
|country|MW|
|country|MY|
|country|MV|
|country|ML|
|country|MT|
|country|MH|
|country|MQ|
|country|MR|
|country|MU|
|country|YT|
|country|MX|
|country|FM|
|country|MD|
|country|MC|
|country|MN|
|country|ME|
|country|MS|
|country|MA|
|country|MZ|
|country|MM|
|country|NA|
|country|NR|
|country|NP|
|country|NL|
|country|NC|
|country|NZ|
|country|NI|
|country|NE|
|country|NG|
|country|NU|
|country|NF|
|country|MP|
|country|NO|
|country|OM|
|country|PK|
|country|PW|
|country|PS|
|country|PA|
|country|PG|
|country|PY|
|country|PE|
|country|PH|
|country|PN|
|country|PL|
|country|PT|
|country|PR|
|country|QA|
|country|RE|
|country|RO|
|country|RU|
|country|RW|
|country|BL|
|country|SH|
|country|KN|
|country|LC|
|country|MF|
|country|PM|
|country|VC|
|country|WS|
|country|SM|
|country|ST|
|country|SA|
|country|SN|
|country|RS|
|country|SC|
|country|SL|
|country|SG|
|country|SX|
|country|SK|
|country|SI|
|country|SB|
|country|SO|
|country|ZA|
|country|GS|
|country|SS|
|country|ES|
|country|LK|
|country|SD|
|country|SR|
|country|SJ|
|country|SZ|
|country|SE|
|country|CH|
|country|SY|
|country|TW|
|country|TJ|
|country|TZ|
|country|TH|
|country|TL|
|country|TG|
|country|TK|
|country|TO|
|country|TT|
|country|TN|
|country|TR|
|country|TM|
|country|TC|
|country|TV|
|country|UG|
|country|UA|
|country|AE|
|country|GB|
|country|US|
|country|UM|
|country|UY|
|country|UZ|
|country|VU|
|country|VE|
|country|VN|
|country|VG|
|country|VI|
|country|WF|
|country|EH|
|country|YE|
|country|ZM|
|country|ZW|
|state|AL|
|state|AK|
|state|AS|
|state|AZ|
|state|AR|
|state|AA|
|state|AE|
|state|AP|
|state|CA|
|state|CO|
|state|CT|
|state|DE|
|state|DC|
|state|FL|
|state|GA|
|state|GU|
|state|HI|
|state|ID|
|state|IL|
|state|IN|
|state|IA|
|state|KS|
|state|KY|
|state|LA|
|state|ME|
|state|MD|
|state|MA|
|state|MI|
|state|MN|
|state|MS|
|state|MO|
|state|MT|
|state|NE|
|state|NV|
|state|NH|
|state|NJ|
|state|NM|
|state|NY|
|state|NC|
|state|ND|
|state|MP|
|state|OH|
|state|OK|
|state|OR|
|state|PA|
|state|PR|
|state|RI|
|state|SC|
|state|SD|
|state|TN|
|state|TX|
|state|UT|
|state|VT|
|state|VI|
|state|VA|
|state|WA|
|state|WV|
|state|WI|
|state|WY|

<h2 id="tocS_Patient">Patient</h2>
<!-- backwards compatibility -->
<a id="schemapatient"></a>
<a id="schema_Patient"></a>
<a id="tocSpatient"></a>
<a id="tocspatient"></a>

```json
{
  "address": "string",
  "auto_accident_insurance": {
    "auto_accident_case_number": "string",
    "auto_accident_claim_rep_address": "string",
    "auto_accident_claim_rep_city": "string",
    "auto_accident_claim_rep_is_insurer": true,
    "auto_accident_claim_rep_name": "string",
    "auto_accident_claim_rep_state": "AL",
    "auto_accident_claim_rep_zip": "string",
    "auto_accident_company": "string",
    "auto_accident_date_of_accident": "string",
    "auto_accident_disabled_from_date": "string",
    "auto_accident_disabled_to_date": "string",
    "auto_accident_had_similar_condition": true,
    "auto_accident_is_subscriber_the_patient": true,
    "auto_accident_notes": "string",
    "auto_accident_patient_relationship_to_subscriber": "",
    "auto_accident_payer_address": "string",
    "auto_accident_payer_city": "string",
    "auto_accident_payer_id": "string",
    "auto_accident_payer_state": "AL",
    "auto_accident_payer_zip": "string",
    "auto_accident_policy_number": "string",
    "auto_accident_return_to_work_date": "string",
    "auto_accident_significant_injury": "YES",
    "auto_accident_significant_injury_notes": "string",
    "auto_accident_similar_condition_date": "string",
    "auto_accident_similar_condition_notes": "string",
    "auto_accident_state_of_occurrence": "AL",
    "auto_accident_still_under_care": true,
    "auto_accident_subscriber_address": "string",
    "auto_accident_subscriber_city": "string",
    "auto_accident_subscriber_date_of_birth": "string",
    "auto_accident_subscriber_first_name": "string",
    "auto_accident_subscriber_last_name": "string",
    "auto_accident_subscriber_middle_name": "string",
    "auto_accident_subscriber_phone_number": "string",
    "auto_accident_subscriber_social_security": "string",
    "auto_accident_subscriber_state": "AL",
    "auto_accident_subscriber_suffix": "string",
    "auto_accident_subscriber_zip_code": "string",
    "auto_accident_treatment_duration": "string",
    "auto_accident_will_require_therapy": true,
    "auto_accident_will_require_therapy_rec": "string"
  },
  "cell_phone": "string",
  "chart_id": "string",
  "city": "string",
  "copay": "string",
  "custom_demographics": [
    {
      "field_type": 0,
      "updated_at": "string",
      "value": "string"
    }
  ],
  "date_of_birth": "string",
  "date_of_first_appointment": "string",
  "date_of_last_appointment": "string",
  "default_pharmacy": "string",
  "disable_sms_messages": true,
  "doctor": 0,
  "email": "string",
  "emergency_contact_name": "string",
  "emergency_contact_phone": "string",
  "emergency_contact_relation": "string",
  "employer": "string",
  "employer_address": "string",
  "employer_city": "string",
  "employer_state": "string",
  "employer_zip_code": "string",
  "ethnicity": "blank",
  "first_name": "string",
  "gender": "",
  "home_phone": "string",
  "id": 0,
  "last_name": "string",
  "middle_name": "string",
  "nick_name": "string",
  "office_phone": "string",
  "offices": [
    0
  ],
  "patient_flags": [
    {
      "archived": true,
      "color": "string",
      "created_at": "string",
      "doctor": 0,
      "id": 0,
      "name": "string",
      "priority": 0,
      "updated_at": "string"
    }
  ],
  "patient_flags_attached": [
    {
      "archived": true,
      "created_at": "string",
      "flag_text": "string",
      "flag_type": 0,
      "id": 0,
      "updated_at": "string"
    }
  ],
  "patient_payment_profile": "",
  "patient_photo": "string",
  "patient_photo_date": "string",
  "patient_status": "A",
  "preferred_language": "blank",
  "primary_care_physician": "string",
  "primary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "race": "blank",
  "referring_doctor": {
    "address": "string",
    "email": "string",
    "fax": "string",
    "first_name": "string",
    "last_name": "string",
    "middle_name": "string",
    "npi": "string",
    "phone": "string",
    "provider_number": "string",
    "provider_qualifier": "",
    "specialty": "",
    "suffix": "string"
  },
  "referring_source": "string",
  "responsible_party_email": "string",
  "responsible_party_name": "string",
  "responsible_party_phone": "string",
  "responsible_party_relation": "string",
  "secondary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "social_security_number": "string",
  "state": "string",
  "tertiary_insurance": {
    "insurance_claim_office_number": "string",
    "insurance_company": "string",
    "insurance_group_name": "string",
    "insurance_group_number": "string",
    "insurance_id_number": "string",
    "insurance_payer_id": "string",
    "insurance_plan_name": "string",
    "insurance_plan_type": "",
    "is_subscriber_the_patient": true,
    "patient_relationship_to_subscriber": "",
    "photo_back": "string",
    "photo_front": "string",
    "subscriber_address": "string",
    "subscriber_city": "string",
    "subscriber_country": "",
    "subscriber_date_of_birth": "string",
    "subscriber_first_name": "string",
    "subscriber_gender": "",
    "subscriber_last_name": "string",
    "subscriber_middle_name": "string",
    "subscriber_social_security": "string",
    "subscriber_state": "AL",
    "subscriber_suffix": "string",
    "subscriber_zip_code": "string"
  },
  "updated_at": "string",
  "workers_comp_insurance": {
    "property_and_casualty_agency_claim_number": "string",
    "workers_comp_carrier_code": "string",
    "workers_comp_case_number": "string",
    "workers_comp_company": "string",
    "workers_comp_date_of_accident": "string",
    "workers_comp_group_name": "string",
    "workers_comp_group_number": "string",
    "workers_comp_notes": "string",
    "workers_comp_payer_address": "string",
    "workers_comp_payer_city": "string",
    "workers_comp_payer_id": "string",
    "workers_comp_payer_state": "AL",
    "workers_comp_payer_zip": "string",
    "workers_comp_state_of_occurrence": "AL",
    "workers_comp_wcb": "string",
    "workers_comp_wcb_rating_code": "string"
  },
  "zip_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|auto_accident_insurance|object|false|none|none|
|cell_phone|string|false|none|none|
|chart_id|string|false|none|Automatically set using first & last name if absent|
|city|string|false|none|none|
|copay|string|false|none|none|
|custom_demographics|[object]|false|none|none|
|date_of_birth|string|false|none|none|
|date_of_first_appointment|string|false|none|Date of first patient visit.|
|date_of_last_appointment|string|false|none|Date of previous patient visit|
|default_pharmacy|string|false|none|ncpdp id of patient's default pharmacy|
|disable_sms_messages|boolean|false|none|If True, suppress SMS/Txt messages to this patient even if we have a cell phone # for them.|
|doctor|integer|true|none|none|
|email|string|false|none|none|
|emergency_contact_name|string|false|none|none|
|emergency_contact_phone|string|false|none|none|
|emergency_contact_relation|string|false|none|none|
|employer|string|false|none|none|
|employer_address|string|false|none|none|
|employer_city|string|false|none|none|
|employer_state|string|false|none|Two-letter abbreviation|
|employer_zip_code|string|false|none|none|
|ethnicity|string|false|none|One of `"blank"`, `"hispanic"`, `"not_hispanic"` or `"declined"`|
|first_name|string|false|none|none|
|gender|string|true|none|One of `"Male"`, `"Female"`, or `"Other"`|
|home_phone|string|false|none|none|
|id|integer|false|read-only|none|
|last_name|string|false|none|none|
|middle_name|string|false|none|none|
|nick_name|string|false|none|Common name for patient, should be used instead of first name if supplied.|
|office_phone|string|false|none|none|
|offices|[integer]|false|none|IDs of every office this patient has been to|
|patient_flags|[object]|false|read-only|Possible patient flag type that can be attached to the patient|
|patient_flags_attached|[object]|false|none|Patient flags attached to the patient|
|patient_payment_profile|string|false|none|One of `""`, `"Cash"`, `"Insurance"`, `"Insurance Out of Network"`, `"Auto Accident"` or `"Worker's Comp"`.<br>**Note:** Patient must already have either `primary_insurance` or `secondary_insurance` or new `primary_insurance` or `secondary_insurance` is passed in request if `Insurance`, `Auto Accident` or `Worker's Comp` payment profiles are chosen.|
|patient_photo|string|false|none|none|
|patient_photo_date|string|false|none|Cannot be passed without `patient_photo`|
|patient_status|string|false|none|One of `"A"` (active), `"I"` (inactive), `"D"` (inactive-deceased)|
|preferred_language|string|false|none|Use ISO 639 alpha-3 codes|
|primary_care_physician|string|false|none|Referring doctor for this patient|
|primary_insurance|object|false|none|**Warning:** Changing insurance information may make past appointments unbillable. Insurance data is also **unvalidated**; you should use the [`/api/insurances`](#apiinsurances) endpoint to find the appropriate insurance payer.|
|race|string|false|none|One of `"blank"`, `"indian"`, `"asian"`, `"black"`, `"hawaiian"`, `"white"` or `"declined"`|
|referring_doctor|object|false|none|none|
|referring_source|string|false|none|Referring source.|
|responsible_party_email|string|false|none|none|
|responsible_party_name|string|false|none|none|
|responsible_party_phone|string|false|none|none|
|responsible_party_relation|string|false|none|none|
|secondary_insurance|object|false|none|**Warning:** Changing insurance information may make past appointments unbillable. Insurance data is also **unvalidated**; you should use the [`/api/insurances`](#apiinsurances) endpoint to find the appropriate insurance payer.|
|social_security_number|string|false|none|none|
|state|string|false|none|Two-letter abbreviation|
|tertiary_insurance|object|false|none|**Warning:** Changing insurance information may make past appointments unbillable. Insurance data is also **unvalidated**; you should use the [`/api/insurances`](#apiinsurances) endpoint to find the appropriate insurance payer.|
|updated_at|string|false|read-only|none|
|workers_comp_insurance|object|false|none|none|
|zip_code|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ethnicity|blank|
|ethnicity|hispanic|
|ethnicity|not_hispanic|
|ethnicity|declined|
|gender|""|
|gender|Male|
|gender|Female|
|gender|Other|
|gender|UNK|
|gender|ASKU|
|patient_payment_profile|""|
|patient_payment_profile|Cash|
|patient_payment_profile|Insurance|
|patient_payment_profile|Insurance Out of Network|
|patient_payment_profile|Auto Accident|
|patient_payment_profile|Worker's Comp|
|patient_status|A|
|patient_status|I|
|patient_status|D|
|preferred_language|blank|
|preferred_language|eng|
|preferred_language|zho|
|preferred_language|fra|
|preferred_language|ita|
|preferred_language|jpn|
|preferred_language|por|
|preferred_language|rus|
|preferred_language|spa|
|preferred_language|other|
|preferred_language|unknown|
|preferred_language|declined|
|race|blank|
|race|indian|
|race|asian|
|race|black|
|race|hawaiian|
|race|white|
|race|other|
|race|declined|

<h2 id="tocS_PatientAllergy">PatientAllergy</h2>
<!-- backwards compatibility -->
<a id="schemapatientallergy"></a>
<a id="schema_PatientAllergy"></a>
<a id="tocSpatientallergy"></a>
<a id="tocspatientallergy"></a>

```json
{
  "description": "string",
  "doctor": 0,
  "id": 0,
  "notes": "string",
  "patient": 0,
  "reaction": "string",
  "rxnorm": "string",
  "snomed_reaction": "",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the allergy, such as `"Cat hair"`|
|doctor|integer|true|none|Id of the doctor who diagnosed the allergy|
|id|integer|false|read-only|none|
|notes|string|false|none|Any additional notes from the provider|
|patient|integer|true|none|none|
|reaction|string|false|none|Short description of the patient's allergic reaction, such as `"Hives"`|
|rxnorm|string|false|none|If the allergy is a drug allergy, this is the RxNorm code of the drug|
|snomed_reaction|string|false|none|SNOMED code for the reaction. For possible SnoMED codes, please see [this link from PHIN VADS](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=896AABB4-5ACD-DE11-913D-0015173D1785)|
|status|string|false|none|One of `"active"`, `"inactive"`. If absent in `POST`, default to `"active"`|

#### Enumerated Values

|Property|Value|
|---|---|
|snomed_reaction|""|
|snomed_reaction|14669001|
|snomed_reaction|39579001|
|snomed_reaction|57676002|
|snomed_reaction|43724002|
|snomed_reaction|49727002|
|snomed_reaction|386661006|
|snomed_reaction|25064002|
|snomed_reaction|247472004|
|snomed_reaction|271795006|
|snomed_reaction|68962001|
|snomed_reaction|68235000|
|snomed_reaction|422587007|
|snomed_reaction|95388000|
|snomed_reaction|271807003|
|snomed_reaction|271825005|
|snomed_reaction|64531003|
|snomed_reaction|267036007|
|snomed_reaction|162397003|
|snomed_reaction|65124004|
|status|active|
|status|inactive|

<h2 id="tocS_PatientAmendment">PatientAmendment</h2>
<!-- backwards compatibility -->
<a id="schemapatientamendment"></a>
<a id="schema_PatientAmendment"></a>
<a id="tocSpatientamendment"></a>
<a id="tocspatientamendment"></a>

```json
{
  "amendment_file": "string",
  "amendment_name": "string",
  "appointment": 0,
  "comments": "string",
  "doctor": 0,
  "id": 0,
  "patient": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amendment_file|string|true|none|A PDF file containing the amended information for the patient's record|
|amendment_name|string|true|none|none|
|appointment|integer|false|none|ID of the appointment to which the amendment applies, if any. If present, the `amendment_file` will be appended to the clinical note for this appointment.|
|comments|string|false|none|none|
|doctor|integer|true|none|ID of the doctor who owns the amendment|
|id|integer|false|read-only|none|
|patient|integer|true|none|ID of the patient to whom the amendment applies|

<h2 id="tocS_PatientCommunication">PatientCommunication</h2>
<!-- backwards compatibility -->
<a id="schemapatientcommunication"></a>
<a id="schema_PatientCommunication"></a>
<a id="tocSpatientcommunication"></a>
<a id="tocspatientcommunication"></a>

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Code from different code system|
|code_system|string|false|none|Can be `SNOMEDCT`, `LOINC`|
|created_at|string|false|read-only|none|
|doctor|integer|true|none|none|
|effective_time|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|false|read-only|none|
|patient|integer|true|none|none|
|value_code|string|false|none|Code from different code system represent communication value|
|value_code_system|string|false|none|Can be `SNOMEDCT`, `ICD10CM`, `LOINC`|
|value_name|string|false|read-only|Description of value|

<h2 id="tocS_PatientDrug">PatientDrug</h2>
<!-- backwards compatibility -->
<a id="schemapatientdrug"></a>
<a id="schema_PatientDrug"></a>
<a id="tocSpatientdrug"></a>
<a id="tocspatientdrug"></a>

```json
{
  "appointment": 0,
  "date_prescribed": "string",
  "date_started_taking": "string",
  "date_stopped_taking": "string",
  "daw": true,
  "dispense_quantity": 0,
  "doctor": 0,
  "dosage_quantity": "string",
  "dosage_units": "string",
  "frequency": "string",
  "id": 0,
  "indication": "string",
  "name": "string",
  "ndc": "string",
  "notes": "string",
  "number_refills": 0,
  "order_status": "",
  "patient": 0,
  "pharmacy_note": "string",
  "prn": true,
  "route": "string",
  "rxnorm": "string",
  "signature_note": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointment|integer|false|none|Appointment ID corresponding to the initial prescription|
|date_prescribed|string|false|none|none|
|date_started_taking|string|false|none|none|
|date_stopped_taking|string|false|none|none|
|daw|boolean|false|none|If true, the prescription should be dispensed as written and not substituted|
|dispense_quantity|number|false|none|none|
|doctor|integer|true|none|Prescribing doctor ID|
|dosage_quantity|string|false|none|Please note, this used to be an decimal field, you can still pass decimal value to it. Or you can pass in some formatted string if needed.|
|dosage_units|string|false|none|none|
|frequency|string|false|none|Frequency pf administration|
|id|integer|false|read-only|none|
|indication|string|false|none|none|
|name|string|false|none|none|
|ndc|string|false|none|none|
|notes|string|false|none|Any additional notes from the provider|
|number_refills|integer|false|none|none|
|order_status|string|false|none|One of `""`, `"Ordered"`, `"Administered during visit"`, `"Electronic eRx Sent"`, `"Phoned into Pharmacy"`, `"Faxed to Pharmacy"`, `"Paper Rx"`, `"Prescription Printed"`, `"Discontinued"`, `"Prescribed by other Dr"` or `"Over the Counter"`. If omitted in writing, default to `""`|
|patient|integer|true|none|none|
|pharmacy_note|string|false|none|none|
|prn|boolean|false|none|If `True`, the medication should be taken when necessary|
|route|string|false|none|Route of administration|
|rxnorm|string|false|none|RxNorm code for the medication|
|signature_note|string|false|none|none|
|status|string|false|none|If present, one of `"active"` or `"inactive"`. If omitted in writing, default to `"active"`|

#### Enumerated Values

|Property|Value|
|---|---|
|order_status|""|
|order_status|Ordered|
|order_status|Administered during visit|
|order_status|Electronic eRx Sent|
|order_status|Phoned into Pharmacy|
|order_status|Faxed to Pharmacy|
|order_status|Paper Rx|
|order_status|Prescription Printed|
|order_status|Discontinued|
|order_status|Prescribed by other Dr|
|order_status|Over the Counter|
|status|active|
|status|inactive|

<h2 id="tocS_PatientFlagType">PatientFlagType</h2>
<!-- backwards compatibility -->
<a id="schemapatientflagtype"></a>
<a id="schema_PatientFlagType"></a>
<a id="tocSpatientflagtype"></a>
<a id="tocspatientflagtype"></a>

```json
{
  "archived": true,
  "color": "string",
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "name": "string",
  "priority": 0,
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|Indicates the flag type is soft-deleted and should not be used|
|color|string|false|none|none|
|created_at|string|false|read-only|none|
|doctor|integer|true|none|Doctor who owns the flag type|
|id|integer|false|read-only|none|
|name|string|true|none|Name of the patient flag type|
|priority|integer|false|none|Priority of the flag type|
|updated_at|string|false|read-only|none|

<h2 id="tocS_PatientIntervention">PatientIntervention</h2>
<!-- backwards compatibility -->
<a id="schemapatientintervention"></a>
<a id="schema_PatientIntervention"></a>
<a id="tocSpatientintervention"></a>
<a id="tocspatientintervention"></a>

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Code from different code system|
|code_system|string|false|none|Can be `SNOMEDCT`, `HCPCS`, `CPT`, `ICD10CM`|
|created_at|string|false|read-only|none|
|doctor|integer|true|none|none|
|effective_time|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|false|read-only|Description of intervention|
|patient|integer|true|none|none|
|value_code|string|false|none|Code from different code system represent intervention value|
|value_code_system|string|false|none|Can be `SNOMEDCT`, `ICD10CM`, `LOINC`|
|value_name|string|false|read-only|Description of value|

<h2 id="tocS_PatientLabResultSet">PatientLabResultSet</h2>
<!-- backwards compatibility -->
<a id="schemapatientlabresultset"></a>
<a id="schema_PatientLabResultSet"></a>
<a id="tocSpatientlabresultset"></a>
<a id="tocspatientlabresultset"></a>

```json
{
  "created_at": "string",
  "date_test_performed": "string",
  "doctor_comments": "string",
  "doctor_signoff": true,
  "id": 0,
  "lab_abnormal_flag": "",
  "lab_imported_from_ccr": "string",
  "lab_normal_range": "string",
  "lab_normal_range_units": "string",
  "lab_order_status": "",
  "lab_result_value": "string",
  "lab_result_value_as_float": 0,
  "lab_result_value_units": "string",
  "loinc_code": "string",
  "ordering_doctor": 0,
  "patient": 0,
  "scanned_in_result": "string",
  "title": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|read-only|none|
|date_test_performed|string|false|none|Date of lab test.|
|doctor_comments|string|false|none|Comment from the doctor on lab result.|
|doctor_signoff|boolean|false|none|Check this box when the doctor has reviewed the lab result and taken appropriate action.|
|id|integer|false|read-only|none|
|lab_abnormal_flag|string|false|none|HL7 codified abnormal flag for the result.|
|lab_imported_from_ccr|string|false|read-only|Imported CCR document that contains lab results.|
|lab_normal_range|string|false|none|none|
|lab_normal_range_units|string|false|none|none|
|lab_order_status|string|false|none|Status of the lab order.|
|lab_result_value|string|false|none|none|
|lab_result_value_as_float|number|false|none|none|
|lab_result_value_units|string|false|none|none|
|loinc_code|string|false|none|none|
|ordering_doctor|integer|true|none|none|
|patient|integer|true|none|none|
|scanned_in_result|string|false|read-only|Scanned in PDF for this lab result (optional).|
|title|string|false|none|none|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lab_abnormal_flag|""|
|lab_abnormal_flag|L|
|lab_abnormal_flag|H|
|lab_abnormal_flag|LL|
|lab_abnormal_flag|HH|
|lab_abnormal_flag|<|
|lab_abnormal_flag|>|
|lab_abnormal_flag|N|
|lab_abnormal_flag|A|
|lab_abnormal_flag|AA|
|lab_abnormal_flag|null|
|lab_abnormal_flag|U|
|lab_abnormal_flag|D|
|lab_abnormal_flag|B|
|lab_abnormal_flag|W|
|lab_abnormal_flag|S|
|lab_abnormal_flag|R|
|lab_abnormal_flag|I|
|lab_abnormal_flag|MS|
|lab_abnormal_flag|VS|
|lab_order_status|""|
|lab_order_status|Order Entered|
|lab_order_status|Discontinued|
|lab_order_status|In Progress|
|lab_order_status|Results Received|
|lab_order_status|Results Reviewed with Patient|
|lab_order_status|Paper Order|

<h2 id="tocS_PatientMessage">PatientMessage</h2>
<!-- backwards compatibility -->
<a id="schemapatientmessage"></a>
<a id="schema_PatientMessage"></a>
<a id="tocSpatientmessage"></a>
<a id="tocspatientmessage"></a>

```json
{
  "attachments": [
    {
      "attachment": "string",
      "created_at": "string",
      "doctor": 0,
      "updated_at": "string"
    }
  ],
  "body": "string",
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "message": "string",
  "patient": 0,
  "subject": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[object]|false|none|none|
|body|string|false|none|none|
|created_at|string|false|read-only|none|
|doctor|integer|true|none|none|
|id|integer|false|read-only|none|
|message|string|false|read-only|none|
|patient|integer|true|none|none|
|subject|string|true|none|none|
|updated_at|string|false|read-only|none|

<h2 id="tocS_PatientPhysicalExam">PatientPhysicalExam</h2>
<!-- backwards compatibility -->
<a id="schemapatientphysicalexam"></a>
<a id="schema_PatientPhysicalExam"></a>
<a id="tocSpatientphysicalexam"></a>
<a id="tocspatientphysicalexam"></a>

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Code from different code system|
|code_system|string|false|none|Can be `SNOMEDCT`, `LOINC`|
|created_at|string|false|read-only|none|
|doctor|integer|true|none|none|
|effective_time|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|false|read-only|Description of physical exam|
|patient|integer|true|none|none|
|value_code|string|false|none|Code from different code system represent physical exam value|
|value_code_system|string|false|none|Can be `SNOMEDCT`, `ICD10CM`, `LOINC`|
|value_name|string|false|read-only|Description of value|

<h2 id="tocS_PatientProblem">PatientProblem</h2>
<!-- backwards compatibility -->
<a id="schemapatientproblem"></a>
<a id="schema_PatientProblem"></a>
<a id="tocSpatientproblem"></a>
<a id="tocspatientproblem"></a>

```json
{
  "date_changed": "string",
  "date_diagnosis": "string",
  "date_onset": "string",
  "description": "string",
  "doctor": 0,
  "icd_code": "string",
  "icd_version": "9",
  "id": 0,
  "info_url": "string",
  "name": "string",
  "notes": "string",
  "patient": 0,
  "snomed_ct_code": "string",
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_changed|string|false|none|none|
|date_diagnosis|string|false|none|none|
|date_onset|string|false|none|none|
|description|string|false|none|none|
|doctor|integer|true|none|none|
|icd_code|string|false|none|ICD9 or ICD10 code for the problem|
|icd_version|string|false|none|Either `9` or `10`. If omitted in writing, default to 10.|
|id|integer|false|read-only|none|
|info_url|string|false|read-only|External URL with more information about the problem, intended for patient education|
|name|string|false|none|Name of the problem|
|notes|string|false|none|Any additional notes by the provider|
|patient|integer|true|none|none|
|snomed_ct_code|string|false|none|SnoMED code for the problem|
|status|string|false|none|Either `active`, `inactive` or `resolved`. If omitted in writing, default to `active`|

#### Enumerated Values

|Property|Value|
|---|---|
|icd_version|9|
|icd_version|10|
|status|active|
|status|inactive|
|status|resolved|

<h2 id="tocS_PatientRiskAssessment">PatientRiskAssessment</h2>
<!-- backwards compatibility -->
<a id="schemapatientriskassessment"></a>
<a id="schema_PatientRiskAssessment"></a>
<a id="tocSpatientriskassessment"></a>
<a id="tocspatientriskassessment"></a>

```json
{
  "code": "string",
  "code_system": "string",
  "created_at": "string",
  "doctor": 0,
  "effective_time": "string",
  "id": 0,
  "name": "string",
  "patient": 0,
  "value_code": "string",
  "value_code_system": "string",
  "value_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|code_system|string|false|none|none|
|created_at|string|false|read-only|none|
|doctor|integer|true|none|none|
|effective_time|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|false|read-only|none|
|patient|integer|true|none|none|
|value_code|string|false|none|none|
|value_code_system|string|false|none|none|
|value_name|string|false|read-only|none|

<h2 id="tocS_PatientVaccineRecord">PatientVaccineRecord</h2>
<!-- backwards compatibility -->
<a id="schemapatientvaccinerecord"></a>
<a id="schema_PatientVaccineRecord"></a>
<a id="tocSpatientvaccinerecord"></a>
<a id="tocspatientvaccinerecord"></a>

```json
{
  "administered_at": 0,
  "administered_by": "string",
  "administration_start": "string",
  "amount": 0,
  "comments": "string",
  "completion_status": "CP",
  "consent_form": 0,
  "cpt_code": "string",
  "created_at": "string",
  "cvx_code": "string",
  "doses": [
    {
      "id": 0,
      "max_age_months": 0,
      "min_age_months": 0,
      "title": "string"
    }
  ],
  "entered_by": "string",
  "funding_eligibility": "V01",
  "id": 0,
  "name": "string",
  "next_dose_date": "string",
  "observed_immunity": "398102009",
  "ordering_doctor": 0,
  "patient": 0,
  "record_source": "00",
  "route": "string",
  "site": "string",
  "units": "string",
  "updated_at": "string",
  "vaccine_inventory": 0,
  "vis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administered_at|integer|false|none|ID of `/api/offices` where the administration happened|
|administered_by|string|false|none|ID of `/api/users` who performs the administration|
|administration_start|string|false|none|Datetime when the administration starts|
|amount|number|false|none|Amount of vaccine administered|
|comments|string|false|none|none|
|completion_status|string|false|none|Vaccination status, can be `CP`(Complete), `RE`(Refused), `NA`(Not administered), `PA`(Partially administered)|
|consent_form|integer|false|none|Consent form related with vaccine record|
|cpt_code|string|false|none|Vaccine cpt code|
|created_at|string|false|read-only|none|
|cvx_code|string|true|none|Vaccine cvx code|
|doses|[object]|false|none|Vaccine dose IDs received in consent form signed hook|
|entered_by|string|false|read-only|ID of user who created the record|
|funding_eligibility|string|false|none|The funding program that should pay for a given immunization|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|next_dose_date|string|false|none|Date for next dose of vaccine|
|observed_immunity|string|false|none|none|
|ordering_doctor|integer|false|none|none|
|patient|integer|true|none|none|
|record_source|string|false|none|none|
|route|string|false|none|none|
|site|string|false|none|none|
|units|string|false|none|none|
|updated_at|string|false|read-only|none|
|vaccine_inventory|integer|false|none|ID of `/api/vaccine_inventories` the vaccine is from|
|vis|string|false|read-only|Related vaccine information statement|

#### Enumerated Values

|Property|Value|
|---|---|
|completion_status|CP|
|completion_status|RE|
|completion_status|NA|
|completion_status|PA|
|funding_eligibility|V01|
|funding_eligibility|V02|
|funding_eligibility|V03|
|funding_eligibility|V04|
|funding_eligibility|V05|
|funding_eligibility|V07|
|observed_immunity|398102009|
|observed_immunity|409498004|
|observed_immunity|397428000|
|observed_immunity|18624000|
|observed_immunity|91428005|
|observed_immunity|271511000|
|observed_immunity|240532009|
|observed_immunity|6142004|
|observed_immunity|52947006|
|observed_immunity|14189004|
|observed_immunity|23511006|
|observed_immunity|36989005|
|observed_immunity|27836007|
|observed_immunity|16814004|
|observed_immunity|14168008|
|observed_immunity|36653000|
|observed_immunity|76902006|
|observed_immunity|66071002|
|observed_immunity|4834000|
|observed_immunity|111852003|
|observed_immunity|38907003|
|observed_immunity|40468003|
|observed_immunity|16541001|
|record_source|00|
|record_source|01|
|record_source|02|
|record_source|03|
|record_source|04|
|record_source|05|
|record_source|06|
|record_source|07|
|record_source|08|

<h2 id="tocS_PhoneCallLog">PhoneCallLog</h2>
<!-- backwards compatibility -->
<a id="schemaphonecalllog"></a>
<a id="schema_PhoneCallLog"></a>
<a id="tocSphonecalllog"></a>
<a id="tocsphonecalllog"></a>

```json
{
  "appointment": 0,
  "archived": true,
  "author": "string",
  "cash_charged": 0,
  "created_at": "string",
  "doctor": 0,
  "duration": 0,
  "id": 0,
  "message": "string",
  "patient": 0,
  "scheduled_time": "string",
  "title": "string",
  "type": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointment|integer|false|none|Appointment related with the phone call log|
|archived|boolean|false|read-only|If this phone call log is archived or not|
|author|string|false|read-only|Author of post.|
|cash_charged|number|false|none|Amount of cash needs to be charged|
|created_at|string|false|read-only|none|
|doctor|integer|true|none|none|
|duration|integer|false|none|Duration of the phone call|
|id|integer|false|read-only|none|
|message|string|false|none|Additional message for the phone call|
|patient|integer|true|none|none|
|scheduled_time|string|false|none|Date of phone call, if `appointment` is set, this field will be set as the `scheduled_time` of that appointment|
|title|string|false|none|Title of this log|
|type|string|false|none|Type of phone call log|
|updated_at|string|false|read-only|none|

<h2 id="tocS_PrescriptionMessage">PrescriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaprescriptionmessage"></a>
<a id="schema_PrescriptionMessage"></a>
<a id="tocSprescriptionmessage"></a>
<a id="tocsprescriptionmessage"></a>

```json
{
  "created_at": "string",
  "doctor": 0,
  "id": 0,
  "json_data": "string",
  "message_direction": "I",
  "message_status": "string",
  "message_type": "string",
  "parent_message": "string",
  "patient": 0,
  "pharmacy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|read-only|none|
|doctor|integer|false|none|none|
|id|integer|false|read-only|none|
|json_data|string|false|read-only|Data sent along with `NewRx`, `RefillRequest`, and `RefillResponses` messages. The format varies, but most likely it will contain `BenefitsCoordination` section with insurance info and `MedicationPrescribed` with medication info. `Patient`, `Pharmacy`, and `Prescriber` are also usually present.|
|message_direction|string|false|read-only|Possible values are `Outgoing` and `Incoming`.|
|message_status|string|false|read-only|Message status for Incoming and Outgoing values. Success message for message_type are: `NewRx` : `Sent`, `RefillRequest` : `Received`, `RefillResponse` : `Sent`.|
|message_type|string|false|none|Possible values are `NewRx` for outgoing new prescriptions, `RefillRequest` for incoming refill requests, `RefillResponse` for outgoing refill responses, `Error` for incoming errors, `Status` and `Verify` for incoming status reports from Surescripts.|
|parent_message|string|false|read-only|Refers to the parent message, used for refill responses and incoming error/status reports.|
|patient|integer|false|none|An optional field which refers to a patient.|
|pharmacy|string|false|none|NCPDPID allocated #ID of the Pharmacy|

#### Enumerated Values

|Property|Value|
|---|---|
|message_direction|I|
|message_direction|O|

<h2 id="tocS_ReminderProfile">ReminderProfile</h2>
<!-- backwards compatibility -->
<a id="schemareminderprofile"></a>
<a id="schema_ReminderProfile"></a>
<a id="tocSreminderprofile"></a>
<a id="tocsreminderprofile"></a>

```json
{
  "doctor": 0,
  "id": 0,
  "name": "string",
  "reminders": [
    {
      "amount": 0,
      "type": "email",
      "unit": "minutes"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doctor|integer|true|none|Doctor who created the profile. Other doctors in the practice group may have access to their profiles|
|id|integer|false|read-only|none|
|name|string|false|none|none|
|reminders|[object]|true|none|Reminders set in the profile|

<h2 id="tocS_ScannedClinicalDocument">ScannedClinicalDocument</h2>
<!-- backwards compatibility -->
<a id="schemascannedclinicaldocument"></a>
<a id="schema_ScannedClinicalDocument"></a>
<a id="tocSscannedclinicaldocument"></a>
<a id="tocsscannedclinicaldocument"></a>

```json
{
  "archived": true,
  "date": "string",
  "description": "string",
  "doctor": 0,
  "document": "string",
  "id": 0,
  "metatags": "string",
  "patient": 0,
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|`DELETE` operation will set this field to `true`|
|date|string|true|none|none|
|description|string|true|none|none|
|doctor|integer|true|none|ID of the doctor who owns the document|
|document|string|true|none|When creating, if you receive response as 201, but this field is `null`, please send a `GET` request with the created object's ID to retrieve the updated file URL|
|id|integer|false|read-only|none|
|metatags|string|false|none|Array of tags represented as string. This should be quoted--e.g. `'["a", "b"]'`--since this endpoint requires `multipart/form-data` encoding|
|patient|integer|true|none|ID of the patient the document concerns|
|updated_at|string|false|read-only|none|

<h2 id="tocS_SoapNoteCustomReport">SoapNoteCustomReport</h2>
<!-- backwards compatibility -->
<a id="schemasoapnotecustomreport"></a>
<a id="schema_SoapNoteCustomReport"></a>
<a id="tocSsoapnotecustomreport"></a>
<a id="tocssoapnotecustomreport"></a>

```json
{
  "archived": true,
  "clinical_note_fields": [
    {
      "allowed_values": [
        "string"
      ],
      "archived": true,
      "clinical_note_template": 0,
      "data_type": "string",
      "name": "string",
      "required": true
    }
  ],
  "doctor": "string",
  "id": 0,
  "is_onpatient": true,
  "is_persistent": true,
  "name": "string",
  "order": {
    "on_complete_note": 0,
    "on_ipad": 0
  },
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|Indicates that the doctor has soft-deleted this template, and will not use it for future appointments|
|clinical_note_fields|[object]|false|none|clinical note fields|
|doctor|string|false|read-only|none|
|id|integer|false|read-only|none|
|is_onpatient|boolean|false|none|none|
|is_persistent|boolean|false|none|If this is true, this report will be the same across all notes|
|name|string|false|none|none|
|order|object|false|none|Order of templates|
|updated_at|string|false|read-only|none|

<h2 id="tocS_SoapNoteLineItemFieldType">SoapNoteLineItemFieldType</h2>
<!-- backwards compatibility -->
<a id="schemasoapnotelineitemfieldtype"></a>
<a id="schema_SoapNoteLineItemFieldType"></a>
<a id="tocSsoapnotelineitemfieldtype"></a>
<a id="tocssoapnotelineitemfieldtype"></a>

```json
{
  "allowed_values": [
    "string"
  ],
  "archived": true,
  "clinical_note_template": "string",
  "comment": "string",
  "data_type": "string",
  "id": 0,
  "name": "string",
  "required": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_values|[string]|false|none|Value options the field type relies on if applicable, otherwise it will be an empty array|
|archived|boolean|false|none|Indicates that the field has been soft-deleted by the doctor and will not be used in future notes|
|clinical_note_template|string|false|read-only|ID of the `/api/clinical_note_templates` object that the field belongs to|
|comment|string|false|none|Comment|
|data_type|string|false|none|One of `""`, `"Checkbox"`, `"NullCheckbox"`, `"String"`, `"TwoStrings"`, `"FreeDraw"`, `"Photo"`, `"Header"`, `"Subheader"`|
|id|integer|false|read-only|none|
|name|string|false|none|none|
|required|boolean|false|none|Indicates that a note should not be locked unless a value is provided for this field|

<h2 id="tocS_SoapNoteLineItemFieldValue">SoapNoteLineItemFieldValue</h2>
<!-- backwards compatibility -->
<a id="schemasoapnotelineitemfieldvalue"></a>
<a id="schema_SoapNoteLineItemFieldValue"></a>
<a id="tocSsoapnotelineitemfieldvalue"></a>
<a id="tocssoapnotelineitemfieldvalue"></a>

```json
{
  "appointment": 0,
  "clinical_note_field": 0,
  "created_at": "string",
  "id": 0,
  "updated_at": "string",
  "value": "string"
}
```

Values entered by doctor when charting a particular appointment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointment|integer|true|none|ID of appointment that the value applies to|
|clinical_note_field|integer|true|none|ID of `/api/clinical_note_field_types` object that indicates type of the value|
|created_at|string|false|read-only|none|
|id|integer|false|read-only|none|
|updated_at|string|false|read-only|none|
|value|string|true|none|Value of the field. Interpretation varies by field type.<br>`clinical_note_field.data_type` \| Value \| Description<br>------------------------------- \| ----- \| -----------<br>`"Header"` \| string \| <br>`"SubHeader"` \| string \|<br>`"String"` \| string \| If field is single/multiple select field, make sure value presents in allowed values set.<br>`"TwoStrings"` \| string \| String is seperated by `"/"`<br>`"NullCheckbox"` \| string \| Can be `"0"`, `"1"`, `"2"`, `"0"`-`Not selected`, `"1"`-`No`, `"2"`-`Yes`<br>`"Checkbox"` \| string \| Can be `"True"`, `"False"`<br>|

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "archived": true,
  "assigned_by": "string",
  "assignee_group": 0,
  "assignee_user": "string",
  "associated_items": [
    {
      "task": 0,
      "type": "Patient",
      "value": 0
    }
  ],
  "category": 0,
  "created_at": "string",
  "created_by": "string",
  "due_date": {
    "time": "string"
  },
  "id": 0,
  "notes": [
    {
      "archived": true,
      "created_at": "string",
      "created_by": "string",
      "id": 0,
      "task": 0,
      "text": "string",
      "updated_at": "string"
    }
  ],
  "priority": "10",
  "status": 0,
  "title": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|assigned_by|string|false|read-only|ID of `/api/users/` who assigned the task|
|assignee_group|integer|false|none|Either `assignee_user` or `assignee_group` should be set|
|assignee_user|string|false|none|Either `assignee_user` or `assignee_group` should be set|
|associated_items|[object]|false|none|Associated task items|
|category|integer|false|none|none|
|created_at|string|false|read-only|none|
|created_by|string|false|read-only|ID of `/api/users` who created the task|
|due_date|object|false|none|When the task is due|
|id|integer|false|read-only|none|
|notes|[object]|false|none|Additional notes of the task|
|priority|string|false|none|Can be one of the following 10(Low), 20(Medium), 30(High), 40(Urgent)|
|status|integer|true|none|none|
|title|string|true|none|none|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|10|
|priority|20|
|priority|30|
|priority|40|

<h2 id="tocS_TaskCategory">TaskCategory</h2>
<!-- backwards compatibility -->
<a id="schemataskcategory"></a>
<a id="schema_TaskCategory"></a>
<a id="tocStaskcategory"></a>
<a id="tocstaskcategory"></a>

```json
{
  "archived": true,
  "created_at": "string",
  "id": 0,
  "is_global": "string",
  "name": "string",
  "practice_group": 0,
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|created_at|string|false|read-only|none|
|id|integer|false|read-only|none|
|is_global|string|false|read-only|Indicates that the category is a system wide (pre-defined) category|
|name|string|true|none|none|
|practice_group|integer|true|none|none|
|updated_at|string|false|read-only|none|

<h2 id="tocS_TaskNote">TaskNote</h2>
<!-- backwards compatibility -->
<a id="schematasknote"></a>
<a id="schema_TaskNote"></a>
<a id="tocStasknote"></a>
<a id="tocstasknote"></a>

```json
{
  "archived": true,
  "created_at": "string",
  "created_by": "string",
  "id": 0,
  "task": 0,
  "text": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|If the task note is archived or not|
|created_at|string|false|read-only|none|
|created_by|string|false|read-only|ID of the `/api/users` who created the note|
|id|integer|false|read-only|none|
|task|integer|true|none|ID of task this note is related with|
|text|string|true|none|Content of the task note|
|updated_at|string|false|read-only|none|

<h2 id="tocS_TaskStatus">TaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskstatus"></a>
<a id="schema_TaskStatus"></a>
<a id="tocStaskstatus"></a>
<a id="tocstaskstatus"></a>

```json
{
  "archived": true,
  "created_at": "string",
  "id": 0,
  "name": "string",
  "practice_group": 0,
  "status_category": "O",
  "task_category": 0,
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|created_at|string|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|practice_group|integer|true|none|none|
|status_category|string|false|none|Can be one of the following `O`(open), `P`(In progress), `H`(On hold), `C`(Complete), default to `O`(Open)|
|task_category|integer|false|none|ID of `/api/task_categories`|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status_category|O|
|status_category|P|
|status_category|H|
|status_category|C|

<h2 id="tocS_TaskTemplate">TaskTemplate</h2>
<!-- backwards compatibility -->
<a id="schematasktemplate"></a>
<a id="schema_TaskTemplate"></a>
<a id="tocStasktemplate"></a>
<a id="tocstasktemplate"></a>

```json
{
  "archived": true,
  "created_at": "string",
  "default_assignee_group": 0,
  "default_assignee_user": "string",
  "default_category": 0,
  "default_due_date_offset": "string",
  "default_note": "string",
  "default_priority": "10",
  "default_status": 0,
  "default_title": "string",
  "id": 0,
  "name": "string",
  "practice_group": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|created_at|string|false|read-only|none|
|default_assignee_group|integer|false|none|none|
|default_assignee_user|string|false|none|none|
|default_category|integer|false|none|none|
|default_due_date_offset|string|false|none|Offset due date, format should follow `"[DD] [HH:[MM:]]ss[.uuuuuu]"`|
|default_note|string|false|none|none|
|default_priority|string|false|none|Can be one of the following 10(Low), 20(Medium), 30(High), 40(Urgent)|
|default_status|integer|false|none|none|
|default_title|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|practice_group|string|false|read-only|none|
|updated_at|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|default_priority|10|
|default_priority|20|
|default_priority|30|
|default_priority|40|

<h2 id="tocS_UserProfile">UserProfile</h2>
<!-- backwards compatibility -->
<a id="schemauserprofile"></a>
<a id="schema_UserProfile"></a>
<a id="tocSuserprofile"></a>
<a id="tocsuserprofile"></a>

```json
{
  "doctor": "string",
  "id": "string",
  "is_doctor": "string",
  "is_staff": "string",
  "permissions": "string",
  "practice_group": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doctor|string|false|read-only|For staff members, this is their primary physician's ID. For doctors, it is their own ID.|
|id|string|false|read-only|none|
|is_doctor|string|false|read-only|Mutually exclusive with `is_staff`|
|is_staff|string|false|read-only|Mutually exclusive with `is_doctor`|
|permissions|string|false|read-only|Permissions the user has.|
|practice_group|string|false|read-only|The ID of the practice group this user belongs to. This can be used to identify users in the same practice.|
|username|string|false|none|none|

<h2 id="tocS_UserProfilesGroup">UserProfilesGroup</h2>
<!-- backwards compatibility -->
<a id="schemauserprofilesgroup"></a>
<a id="schema_UserProfilesGroup"></a>
<a id="tocSuserprofilesgroup"></a>
<a id="tocsuserprofilesgroup"></a>

```json
{
  "archived": true,
  "created_at": "string",
  "id": 0,
  "members": [
    "string"
  ],
  "name": "string",
  "practice_group": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|Group is archived or not|
|created_at|string|false|none|none|
|id|integer|false|read-only|none|
|members|[string]|false|read-only|Users in this user group.|
|name|string|false|read-only|none|
|practice_group|string|false|read-only|Practice group this user group belongs to|
|updated_at|string|false|none|none|
