<h1 id="dropbox-sign-api">Dropbox Sign API v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Dropbox Sign v3 API

Base URLs:

* <a href="https://api.hellosign.com/v3">https://api.hellosign.com/v3</a>

<a href="https://sign.dropbox.com/terms">Terms of service</a>
Email: <a href="mailto:apisupport@hellosign.com">apisupport@hellosign.com</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT</a>

<a href="https://app.hellosign.com/api/reference">Legacy API Reference</a>

# Authentication

- HTTP Authentication, scheme: basic Your API key can be used to make calls to the Dropbox Sign API. See [Authentication](/api/reference/authentication) for more information.
✅ Supported by Try it console (calls sent in `test_mode` only).

- HTTP Authentication, scheme: bearer You can use an Access Token issued through an OAuth flow to send calls to the Dropbox Sign API from your app. The access scopes required by this endpoint are listed in the gray box above. See [Authentication](/api/reference/authentication) for more information.
❌ **Not supported** by Try it console.

<h1 id="dropbox-sign-api-account">Account</h1>

Contains information about an account and its settings

## Create Account

<a id="opIdaccountCreate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/account/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "newuser@dropboxsign.com"
  }'
```

`POST /account/create`

Creates a new Dropbox Sign Account that is associated with the specified `email_address`.

> Body parameter

```json
{
  "email_address": "newuser@dropboxsign.com"
}
```

<h3 id="create-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountCreateRequest](#schemaaccountcreaterequest)|true|none|
|» client_id|body|string|false|Used when creating a new account with OAuth authorization.<br><br>See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)|
|» client_secret|body|string|false|Used when creating a new account with OAuth authorization.<br><br>See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)|
|» email_address|body|string(email)|true|The email address which will be associated with the new Account.|
|» locale|body|string|false|The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.|

> Example responses

> 200 Response

```json
{
  "account": {
    "account_id": "a2b31224f7e6fb5581d2f8cbd91cf65fa2f86aae",
    "email_address": "newuser@dropboxsign.com",
    "is_paid_hs": false,
    "is_paid_hf": false,
    "is_locked": false,
    "quotas": {
      "templates_left": 0,
      "api_signature_requests_left": 0,
      "documents_left": 3,
      "sms_signatures_left": 5
    },
    "callback_url": null,
    "role_code": null,
    "locale": "en-US"
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AccountCreateResponse](#schemaaccountcreateresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get Account

<a id="opIdaccountGet"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/account \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /account`

Returns the properties and settings of your Account.

<h3 id="get-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|query|string|false|`account_id` or `email_address` is required. If both are provided, the account id prevails.<br><br>The ID of the Account.|
|email_address|query|string|false|`account_id` or `email_address` is required, If both are provided, the account id prevails.<br><br>The email address of the Account.|

> Example responses

> 200 Response

```json
{
  "account": {
    "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
    "email_address": "me@dropboxsign.com",
    "is_locked": false,
    "is_paid_hs": true,
    "is_paid_hf": false,
    "quotas": {
      "api_signature_requests_left": 1250,
      "documents_left": null,
      "templates_left": null,
      "sms_signatures_left": 1
    },
    "callback_url": null,
    "role_code": null,
    "locale": "en-US"
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AccountGetResponse](#schemaaccountgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Update Account

<a id="opIdaccountUpdate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/account \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "callback_url": "https://www.example.com/callback",
    "locale": "en-US"
  }'
```

`PUT /account`

Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.

> Body parameter

```json
{
  "callback_url": "https://www.example.com/callback",
  "locale": "en-US"
}
```

<h3 id="update-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountUpdateRequest](#schemaaccountupdaterequest)|true|none|
|» account_id|body|string \| null|false|The ID of the Account|
|» callback_url|body|string|false|The URL that Dropbox Sign should POST events to.|
|» locale|body|string|false|The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.|

> Example responses

> 200 Response

```json
{
  "account": {
    "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
    "email_address": "me@dropboxsign.com",
    "is_locked": false,
    "is_paid_hs": true,
    "is_paid_hf": false,
    "quotas": {
      "api_signature_requests_left": 1250,
      "documents_left": null,
      "templates_left": null,
      "sms_signatures_left": 1
    },
    "callback_url": "https://www.example.com/callback",
    "role_code": null,
    "locale": "en-US"
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="update-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AccountGetResponse](#schemaaccountgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Verify Account

<a id="opIdaccountVerify"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/account/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "some_user@dropboxsign.com"
  }'
```

`POST /account/verify`

Verifies whether an Dropbox Sign Account exists for the given email address.

> Body parameter

```json
{
  "email_address": "some_user@dropboxsign.com"
}
```

<h3 id="verify-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountVerifyRequest](#schemaaccountverifyrequest)|true|none|
|» email_address|body|string(email)|true|Email address to run the verification for.|

> Example responses

> 200 Response

```json
{
  "account": {
    "email_address": "some_user@dropboxsign.com"
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="verify-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AccountVerifyResponse](#schemaaccountverifyresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

<h1 id="dropbox-sign-api-signature-request">Signature Request</h1>

Contains information regarding documents that need to be signed

## Embedded Bulk Send with Template

<a id="opIdsignatureRequestBulkCreateEmbeddedWithTemplate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/bulk_create_embedded_with_template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "1a659d9ad95bccd307ecad78d72192f8",
    "template_ids": [
      "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
    ],
    "subject": "Purchase Order",
    "message": "Glad we could come to an agreement.",
    "signer_list": [
      {
        "signers": [
          {
            "role": "Client",
            "name": "George",
            "email_address": "george@example.com",
            "pin": "d79a3td"
          }
        ],
        "custom_fields": [
          {
            "name": "company",
            "value": "ABC Corp"
          }
        ]
      },
      {
        "signers": [
          {
            "role": "Client",
            "name": "Mary",
            "email_address": "mary@example.com",
            "pin": "gd9as5b"
          }
        ],
        "custom_fields": [
          {
            "name": "company",
            "value": "123 LLC"
          }
        ]
      }
    ],
    "ccs": [
      {
        "role": "Accounting",
        "email_address": "accounting@example.com"
      }
    ],
    "test_mode": true
  }'
```

`POST /signature_request/bulk_create_embedded_with_template`

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE:** Only available for Standard plan and higher.

> Body parameter

```json
{
  "client_id": "1a659d9ad95bccd307ecad78d72192f8",
  "template_ids": [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
  ],
  "subject": "Purchase Order",
  "message": "Glad we could come to an agreement.",
  "signer_list": [
    {
      "signers": [
        {
          "role": "Client",
          "name": "George",
          "email_address": "george@example.com",
          "pin": "d79a3td"
        }
      ],
      "custom_fields": [
        {
          "name": "company",
          "value": "ABC Corp"
        }
      ]
    },
    {
      "signers": [
        {
          "role": "Client",
          "name": "Mary",
          "email_address": "mary@example.com",
          "pin": "gd9as5b"
        }
      ],
      "custom_fields": [
        {
          "name": "company",
          "value": "123 LLC"
        }
      ]
    }
  ],
  "ccs": [
    {
      "role": "Accounting",
      "email_address": "accounting@example.com"
    }
  ],
  "test_mode": true
}
```

<h3 id="embedded-bulk-send-with-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignatureRequestBulkCreateEmbeddedWithTemplateRequest](#schemasignaturerequestbulkcreateembeddedwithtemplaterequest)|true|none|
|» template_ids|body|[string]|true|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|» signer_file|body|string(binary)|false|`signer_file` is a CSV file defining values and options for signer fields. Required unless a `signer_list` is used, you may not use both. The CSV can have the following columns:<br><br>- `name`: the name of the signer filling the role of RoleName<br>- `email_address`: email address of the signer filling the role of RoleName<br>- `pin`: the 4- to 12-character access code that will secure this signer's signature page (optional)<br>- `sms_phone_number`: An E.164 formatted phone number that will receive a code via SMS to access this signer's signature page. (optional)<br><br>    By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>    **NOTE:** Not available in test mode and requires a Standard plan or higher.<br>- `*_field`: any column with a _field" suffix will be treated as a custom field (optional)<br><br>    You may only specify field values here, any other options should be set in the custom_fields request parameter.<br><br>Example CSV:<br><br>```<br>name, email_address, pin, company_field<br>George, george@example.com, d79a3td, ABC Corp<br>Mary, mary@example.com, gd9as5b, 123 LLC<br>```|
|» signer_list|body|[[SubBulkSignerList](#schemasubbulksignerlist)]|false|`signer_list` is an array defining values and options for signer fields. Required unless a `signer_file` is used, you may not use both.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» ccs|body|[[SubCC](#schemasubcc)]|false|Add CC email recipients. Required when a CC role exists for the Template.|
|» client_id|body|string|true|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

> Example responses

> 200 Response

```json
{
  "bulk_send_job": {
    "bulk_send_job_id": "ccaf88244ef006b6e31ebba5ed4cb53b3131d9ac",
    "total": 3,
    "is_creator": true,
    "created_at": 1543556038
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="embedded-bulk-send-with-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BulkSendJobSendResponse](#schemabulksendjobsendresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Bulk Send with Template

<a id="opIdsignatureRequestBulkSendWithTemplate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/bulk_send_with_template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "template_ids": [
      "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
    ],
    "subject": "Purchase Order",
    "message": "Glad we could come to an agreement.",
    "signer_list": [
      {
        "signers": [
          {
            "role": "Client",
            "name": "George",
            "email_address": "george@example.com",
            "pin": "d79a3td"
          }
        ],
        "custom_fields": [
          {
            "name": "company",
            "value": "ABC Corp"
          }
        ]
      },
      {
        "signers": [
          {
            "role": "Client",
            "name": "Mary",
            "email_address": "mary@example.com",
            "pin": "gd9as5b"
          }
        ],
        "custom_fields": [
          {
            "name": "company",
            "value": "123 LLC"
          }
        ]
      }
    ],
    "ccs": [
      {
        "role": "Accounting",
        "email_address": "accounting@example.com"
      }
    ],
    "test_mode": true
  }'
```

`POST /signature_request/bulk_send_with_template`

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.

**NOTE:** Only available for Standard plan and higher.

> Body parameter

```json
{
  "template_ids": [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
  ],
  "subject": "Purchase Order",
  "message": "Glad we could come to an agreement.",
  "signer_list": [
    {
      "signers": [
        {
          "role": "Client",
          "name": "George",
          "email_address": "george@example.com",
          "pin": "d79a3td"
        }
      ],
      "custom_fields": [
        {
          "name": "company",
          "value": "ABC Corp"
        }
      ]
    },
    {
      "signers": [
        {
          "role": "Client",
          "name": "Mary",
          "email_address": "mary@example.com",
          "pin": "gd9as5b"
        }
      ],
      "custom_fields": [
        {
          "name": "company",
          "value": "123 LLC"
        }
      ]
    }
  ],
  "ccs": [
    {
      "role": "Accounting",
      "email_address": "accounting@example.com"
    }
  ],
  "test_mode": true
}
```

<h3 id="bulk-send-with-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignatureRequestBulkSendWithTemplateRequest](#schemasignaturerequestbulksendwithtemplaterequest)|true|none|
|» template_ids|body|[string]|true|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|» signer_file|body|string(binary)|false|`signer_file` is a CSV file defining values and options for signer fields. Required unless a `signer_list` is used, you may not use both. The CSV can have the following columns:<br><br>- `name`: the name of the signer filling the role of RoleName<br>- `email_address`: email address of the signer filling the role of RoleName<br>- `pin`: the 4- to 12-character access code that will secure this signer's signature page (optional)<br>- `sms_phone_number`: An E.164 formatted phone number that will receive a code via SMS to access this signer's signature page. (optional)<br><br>    By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>    **NOTE:** Not available in test mode and requires a Standard plan or higher.<br>- `*_field`: any column with a _field" suffix will be treated as a custom field (optional)<br><br>    You may only specify field values here, any other options should be set in the custom_fields request parameter.<br><br>Example CSV:<br><br>```<br>name, email_address, pin, company_field<br>George, george@example.com, d79a3td, ABC Corp<br>Mary, mary@example.com, gd9as5b, 123 LLC<br>```|
|» signer_list|body|[[SubBulkSignerList](#schemasubbulksignerlist)]|false|`signer_list` is an array defining values and options for signer fields. Required unless a `signer_file` is used, you may not use both.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» ccs|body|[[SubCC](#schemasubcc)]|false|Add CC email recipients. Required when a CC role exists for the Template.|
|» client_id|body|string|false|The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

> Example responses

> 200 Response

```json
{
  "bulk_send_job": {
    "bulk_send_job_id": "4bce667844dc3711d05e7aa4a1b5a6b64b738b2b",
    "total": 1,
    "is_creator": true,
    "created_at": 1532640962
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="bulk-send-with-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BulkSendJobSendResponse](#schemabulksendjobsendresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Cancel Incomplete Signature Request

<a id="opIdsignatureRequestCancel"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/cancel/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /signature_request/cancel/{signature_request_id}`

Cancels an incomplete signature request. This action is **not reversible**.

The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.

This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.

To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.

**NOTE:** To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

<h3 id="cancel-incomplete-signature-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the incomplete SignatureRequest to cancel.|

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="cancel-incomplete-signature-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Create Embedded Signature Request

<a id="opIdsignatureRequestCreateEmbedded"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/create_embedded \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
    "title": "NDA with Acme Co.",
    "subject": "The NDA we talked about",
    "message": "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
    "signers": [
      {
        "email_address": "jack@example.com",
        "name": "Jack",
        "order": 0
      },
      {
        "email_address": "jill@example.com",
        "name": "Jill",
        "order": 1
      }
    ],
    "cc_email_addresses": [
      "lawyer1@dropboxsign.com",
      "lawyer2@dropboxsign.com"
    ],
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ],
    "signing_options": {
      "draw": true,
      "type": true,
      "upload": true,
      "phone": false,
      "default_type": "draw",
      "force_advanced_signature_details": false
    },
    "test_mode": true
  }'
```

`POST /signature_request/create_embedded`

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

> Body parameter

```json
{
  "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  "title": "NDA with Acme Co.",
  "subject": "The NDA we talked about",
  "message": "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  "signers": [
    {
      "email_address": "jack@example.com",
      "name": "Jack",
      "order": 0
    },
    {
      "email_address": "jill@example.com",
      "name": "Jill",
      "order": 1
    }
  ],
  "cc_email_addresses": [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com"
  ],
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ],
  "signing_options": {
    "draw": true,
    "type": true,
    "upload": true,
    "phone": false,
    "default_type": "draw",
    "force_advanced_signature_details": false
  },
  "test_mode": true
}
```

<h3 id="create-embedded-signature-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignatureRequestCreateEmbeddedRequest](#schemasignaturerequestcreateembeddedrequest)|true|none|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» signers|body|[[SubSignatureRequestSigner](#schemasubsignaturerequestsigner)]|false|Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|» grouped_signers|body|[[SubSignatureRequestGroupedSigners](#schemasubsignaturerequestgroupedsigners)]|false|Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» allow_reassign|body|boolean|false|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan.|
|» attachments|body|[[SubAttachment](#schemasubattachment)]|false|A list describing the attachments|
|» cc_email_addresses|body|[string(email)]|false|The email addresses that should be CCed.|
|» client_id|body|string|true|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|» field_options|body|[SubFieldOptions](#schemasubfieldoptions)|false|This allows the requester to specify field options for a signature request.|
|» form_field_groups|body|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|» form_field_rules|body|[[SubFormFieldRule](#schemasubformfieldrule)]|false|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|» form_fields_per_document|body|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|» hide_text_tags|body|boolean|false|Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» use_text_tags|body|boolean|false|Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.|
|» ignore_text_tags_extraction_errors|body|boolean|false|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|» populate_auto_fill_fields|body|boolean|false|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "a9f4825edef25f47e7b4c14ce8100d81d1693160",
    "title": "NDA with Acme Co.",
    "original_title": "The NDA we talked about",
    "subject": "The NDA we talked about",
    "message": "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
    "metadata": {},
    "created_at": 1570471067,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [],
    "response_data": [],
    "signing_url": null,
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=a9f4825edef25f47e7b4c14ce8100d81d1693160",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "jack@example.com",
        "signer_name": "Jack",
        "signer_role": null,
        "order": 0,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      },
      {
        "signature_id": "616629ed37f8588d28600be17ab5d6b7",
        "signer_email_address": "jill@example.com",
        "signer_name": "Jill",
        "signer_role": null,
        "order": 1,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [
      "lawyer1@dropboxsign.com",
      "lawyer2@dropboxsign.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-embedded-signature-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Create Embedded Signature Request with Template

<a id="opIdsignatureRequestCreateEmbeddedWithTemplate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/create_embedded_with_template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
    "template_ids": [
      "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
    ],
    "subject": "Purchase Order",
    "message": "Glad we could come to an agreement.",
    "signers": [
      {
        "role": "Client",
        "name": "George",
        "email_address": "george@example.com"
      }
    ],
    "signing_options": {
      "draw": true,
      "type": true,
      "upload": true,
      "phone": false,
      "default_type": "draw",
      "force_advanced_signature_details": false
    },
    "test_mode": true
  }'
```

`POST /signature_request/create_embedded_with_template`

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

> Body parameter

```json
{
  "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  "template_ids": [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
  ],
  "subject": "Purchase Order",
  "message": "Glad we could come to an agreement.",
  "signers": [
    {
      "role": "Client",
      "name": "George",
      "email_address": "george@example.com"
    }
  ],
  "signing_options": {
    "draw": true,
    "type": true,
    "upload": true,
    "phone": false,
    "default_type": "draw",
    "force_advanced_signature_details": false
  },
  "test_mode": true
}
```

<h3 id="create-embedded-signature-request-with-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignatureRequestCreateEmbeddedWithTemplateRequest](#schemasignaturerequestcreateembeddedwithtemplaterequest)|true|none|
|» template_ids|body|[string]|true|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» ccs|body|[[SubCC](#schemasubcc)]|false|Add CC email recipients. Required when a CC role exists for the Template.|
|» client_id|body|string|true|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signers|body|[[SubSignatureRequestTemplateSigner](#schemasubsignaturerequesttemplatesigner)]|true|Add Signers to your Templated-based Signature Request.|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» populate_auto_fill_fields|body|boolean|false|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "title": "Purchase Order",
    "original_title": "Purchase Order",
    "subject": "Purchase Order",
    "metadata": {},
    "message": "Glad we could come to an agreement.",
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [
      {
        "name": "Cost",
        "value": "$20,000",
        "type": "text",
        "editor": "Client",
        "required": true
      }
    ],
    "response_data": [],
    "signing_url": null,
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "george@example.com",
        "signer_name": "George",
        "signer_role": "Client",
        "order": null,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [
      "accounting@dropboxsign.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-embedded-signature-request-with-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Edit Signature Request

<a id="opIdsignatureRequestEdit"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/edit/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "NDA with Acme Co.",
    "subject": "The NDA we talked about",
    "message": "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
    "signers": [
      {
        "email_address": "jack@example.com",
        "name": "Jack",
        "order": 0
      },
      {
        "email_address": "jill@example.com",
        "name": "Jill",
        "order": 1
      }
    ],
    "cc_email_addresses": [
      "lawyer1@dropboxsign.com",
      "lawyer2@dropboxsign.com"
    ],
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ],
    "metadata": {
      "custom_id": 1234,
      "custom_text": "NDA #9"
    },
    "signing_options": {
      "draw": true,
      "type": true,
      "upload": true,
      "phone": false,
      "default_type": "draw"
    },
    "field_options": {
      "date_format": "DD - MM - YYYY"
    },
    "test_mode": true
  }'
```

`PUT /signature_request/edit/{signature_request_id}`

Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

**NOTE:** Edit and resend *will* deduct your signature request quota.

> Body parameter

```json
{
  "title": "NDA with Acme Co.",
  "subject": "The NDA we talked about",
  "message": "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  "signers": [
    {
      "email_address": "jack@example.com",
      "name": "Jack",
      "order": 0
    },
    {
      "email_address": "jill@example.com",
      "name": "Jill",
      "order": 1
    }
  ],
  "cc_email_addresses": [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com"
  ],
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ],
  "metadata": {
    "custom_id": 1234,
    "custom_text": "NDA #9"
  },
  "signing_options": {
    "draw": true,
    "type": true,
    "upload": true,
    "phone": false,
    "default_type": "draw"
  },
  "field_options": {
    "date_format": "DD - MM - YYYY"
  },
  "test_mode": true
}
```

<h3 id="edit-signature-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to edit.|
|body|body|[SignatureRequestEditRequest](#schemasignaturerequesteditrequest)|true|none|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» signers|body|[[SubSignatureRequestSigner](#schemasubsignaturerequestsigner)]|false|Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|» grouped_signers|body|[[SubSignatureRequestGroupedSigners](#schemasubsignaturerequestgroupedsigners)]|false|Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» allow_reassign|body|boolean|false|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|» attachments|body|[[SubAttachment](#schemasubattachment)]|false|A list describing the attachments|
|» cc_email_addresses|body|[string(email)]|false|The email addresses that should be CCed.|
|» client_id|body|string|false|The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|» field_options|body|[SubFieldOptions](#schemasubfieldoptions)|false|This allows the requester to specify field options for a signature request.|
|» form_field_groups|body|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|» form_field_rules|body|[[SubFormFieldRule](#schemasubformfieldrule)]|false|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|» form_fields_per_document|body|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|» hide_text_tags|body|boolean|false|Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.|
|» is_eid|body|boolean|false|Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://sign.dropbox.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» use_text_tags|body|boolean|false|Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.|
|» ignore_text_tags_extraction_errors|body|boolean|false|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
    "title": "NDA with Acme Co.",
    "original_title": "The NDA we talked about",
    "subject": "The NDA we talked about",
    "message": "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
    "test_mode": true,
    "metadata": {
      "custom_id": "1234",
      "custom_text": "NDA #9"
    },
    "created_at": 1570471067,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [],
    "response_data": [],
    "signing_url": "https://app.hellosign.com/sign/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
    "signing_redirect_url": null,
    "files_url": "https://api.hellosign.com/v3/signature_request/files/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
    "details_url": "https://app.hellosign.com/home/manage?guid=2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "jack@example.com",
        "signer_name": "Jack",
        "signer_role": null,
        "order": 0,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      },
      {
        "signature_id": "616629ed37f8588d28600be17ab5d6b7",
        "signer_email_address": "jill@example.com",
        "signer_name": "Jill",
        "signer_role": null,
        "order": 1,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [
      "lawyer1@dropboxsign.com",
      "lawyer2@example.com"
    ],
    "attachments": [
      {
        "id": "id_1",
        "signer": "1",
        "name": "Attachment #1",
        "required": true,
        "instructions": "Instructions #1",
        "uploaded_at": 1650398513
      },
      {
        "id": "id_2",
        "signer": "2",
        "name": "Attachment #2",
        "required": true,
        "instructions": null,
        "uploaded_at": null
      }
    ],
    "template_ids": null
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="edit-signature-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Edit Embedded Signature Request

<a id="opIdsignatureRequestEditEmbedded"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/edit_embedded/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
    "title": "NDA with Acme Co.",
    "subject": "The NDA we talked about",
    "message": "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
    "signers": [
      {
        "email_address": "jack@example.com",
        "name": "Jack",
        "order": 0
      },
      {
        "email_address": "jill@example.com",
        "name": "Jill",
        "order": 1
      }
    ],
    "cc_email_addresses": [
      "lawyer1@dropboxsign.com",
      "lawyer2@dropboxsign.com"
    ],
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ],
    "signing_options": {
      "draw": true,
      "type": true,
      "upload": true,
      "phone": false,
      "default_type": "draw"
    },
    "test_mode": true
  }'
```

`PUT /signature_request/edit_embedded/{signature_request_id}`

Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE:** Edit and resend *will* deduct your signature request quota.

> Body parameter

```json
{
  "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  "title": "NDA with Acme Co.",
  "subject": "The NDA we talked about",
  "message": "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  "signers": [
    {
      "email_address": "jack@example.com",
      "name": "Jack",
      "order": 0
    },
    {
      "email_address": "jill@example.com",
      "name": "Jill",
      "order": 1
    }
  ],
  "cc_email_addresses": [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com"
  ],
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ],
  "signing_options": {
    "draw": true,
    "type": true,
    "upload": true,
    "phone": false,
    "default_type": "draw"
  },
  "test_mode": true
}
```

<h3 id="edit-embedded-signature-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to edit.|
|body|body|[SignatureRequestEditEmbeddedRequest](#schemasignaturerequesteditembeddedrequest)|true|none|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» signers|body|[[SubSignatureRequestSigner](#schemasubsignaturerequestsigner)]|false|Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|» grouped_signers|body|[[SubSignatureRequestGroupedSigners](#schemasubsignaturerequestgroupedsigners)]|false|Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» allow_reassign|body|boolean|false|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan.|
|» attachments|body|[[SubAttachment](#schemasubattachment)]|false|A list describing the attachments|
|» cc_email_addresses|body|[string(email)]|false|The email addresses that should be CCed.|
|» client_id|body|string|true|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|» field_options|body|[SubFieldOptions](#schemasubfieldoptions)|false|This allows the requester to specify field options for a signature request.|
|» form_field_groups|body|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|» form_field_rules|body|[[SubFormFieldRule](#schemasubformfieldrule)]|false|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|» form_fields_per_document|body|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|» hide_text_tags|body|boolean|false|Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» use_text_tags|body|boolean|false|Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.|
|» ignore_text_tags_extraction_errors|body|boolean|false|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|» populate_auto_fill_fields|body|boolean|false|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "a9f4825edef25f47e7b4c14ce8100d81d1693160",
    "title": "NDA with Acme Co.",
    "original_title": "The NDA we talked about",
    "subject": "The NDA we talked about",
    "message": "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
    "metadata": {},
    "created_at": 1570471067,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [],
    "response_data": [],
    "signing_url": null,
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=a9f4825edef25f47e7b4c14ce8100d81d1693160",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "jack@example.com",
        "signer_name": "Jack",
        "signer_role": null,
        "order": 0,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      },
      {
        "signature_id": "616629ed37f8588d28600be17ab5d6b7",
        "signer_email_address": "jill@example.com",
        "signer_name": "Jill",
        "signer_role": null,
        "order": 1,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [
      "lawyer1@dropboxsign.com",
      "lawyer2@dropboxsign.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="edit-embedded-signature-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Edit Embedded Signature Request with Template

<a id="opIdsignatureRequestEditEmbeddedWithTemplate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/edit_embedded_with_template/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
    "template_ids": [
      "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
    ],
    "subject": "Purchase Order",
    "message": "Glad we could come to an agreement.",
    "signers": [
      {
        "role": "Client",
        "name": "George",
        "email_address": "george@example.com"
      }
    ],
    "signing_options": {
      "draw": true,
      "type": true,
      "upload": true,
      "phone": false,
      "default_type": "draw"
    },
    "test_mode": true
  }'
```

`PUT /signature_request/edit_embedded_with_template/{signature_request_id}`

Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE:** Edit and resend *will* deduct your signature request quota.

> Body parameter

```json
{
  "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  "template_ids": [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
  ],
  "subject": "Purchase Order",
  "message": "Glad we could come to an agreement.",
  "signers": [
    {
      "role": "Client",
      "name": "George",
      "email_address": "george@example.com"
    }
  ],
  "signing_options": {
    "draw": true,
    "type": true,
    "upload": true,
    "phone": false,
    "default_type": "draw"
  },
  "test_mode": true
}
```

<h3 id="edit-embedded-signature-request-with-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to edit.|
|body|body|[SignatureRequestEditEmbeddedWithTemplateRequest](#schemasignaturerequesteditembeddedwithtemplaterequest)|true|none|
|» template_ids|body|[string]|true|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» ccs|body|[[SubCC](#schemasubcc)]|false|Add CC email recipients. Required when a CC role exists for the Template.|
|» client_id|body|string|true|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signers|body|[[SubSignatureRequestTemplateSigner](#schemasubsignaturerequesttemplatesigner)]|true|Add Signers to your Templated-based Signature Request.|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» populate_auto_fill_fields|body|boolean|false|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "title": "Purchase Order",
    "original_title": "Purchase Order",
    "subject": "Purchase Order",
    "metadata": {},
    "message": "Glad we could come to an agreement.",
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [
      {
        "name": "Cost",
        "value": "$20,000",
        "type": "text",
        "editor": "Client",
        "required": true
      }
    ],
    "response_data": [],
    "signing_url": null,
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "george@example.com",
        "signer_name": "George",
        "signer_role": "Client",
        "order": null,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [
      "accounting@dropboxsign.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="edit-embedded-signature-request-with-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Edit Signature Request With Template

<a id="opIdsignatureRequestEditWithTemplate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/edit_with_template/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "template_ids": [
      "61a832ff0d8423f91d503e76bfbcc750f7417c78"
    ],
    "subject": "Purchase Order",
    "message": "Glad we could come to an agreement.",
    "signers": [
      {
        "role": "Client",
        "name": "George",
        "email_address": "george@example.com"
      }
    ],
    "ccs": [
      {
        "role": "Accounting",
        "email_address": "accounting@example.com"
      }
    ],
    "custom_fields": [
      {
        "name": "Cost",
        "value": "$20,000",
        "editor": "Client",
        "required": true
      }
    ],
    "signing_options": {
      "draw": true,
      "type": true,
      "upload": true,
      "phone": false,
      "default_type": "draw"
    },
    "test_mode": true
  }'
```

`PUT /signature_request/edit_with_template/{signature_request_id}`

Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.

**NOTE:** Edit and resend *will* deduct your signature request quota.

> Body parameter

```json
{
  "template_ids": [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78"
  ],
  "subject": "Purchase Order",
  "message": "Glad we could come to an agreement.",
  "signers": [
    {
      "role": "Client",
      "name": "George",
      "email_address": "george@example.com"
    }
  ],
  "ccs": [
    {
      "role": "Accounting",
      "email_address": "accounting@example.com"
    }
  ],
  "custom_fields": [
    {
      "name": "Cost",
      "value": "$20,000",
      "editor": "Client",
      "required": true
    }
  ],
  "signing_options": {
    "draw": true,
    "type": true,
    "upload": true,
    "phone": false,
    "default_type": "draw"
  },
  "test_mode": true
}
```

<h3 id="edit-signature-request-with-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to edit.|
|body|body|[SignatureRequestEditWithTemplateRequest](#schemasignaturerequesteditwithtemplaterequest)|true|none|
|» template_ids|body|[string]|true|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» ccs|body|[[SubCC](#schemasubcc)]|false|Add CC email recipients. Required when a CC role exists for the Template.|
|» client_id|body|string|false|Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» is_eid|body|boolean|false|Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://sign.dropbox.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signers|body|[[SubSignatureRequestTemplateSigner](#schemasubsignaturerequesttemplatesigner)]|true|Add Signers to your Templated-based Signature Request.|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "title": "Purchase Order",
    "original_title": "Purchase Order",
    "subject": "Purchase Order",
    "metadata": {},
    "message": "Glad we could come to an agreement.",
    "created_at": 1570471067,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [
      {
        "name": "Cost",
        "value": "$20,000",
        "type": "text",
        "editor": "Client",
        "required": true
      }
    ],
    "response_data": [],
    "signing_url": "https://app.hellosign.com/sign/17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "10ab1cd037d9b6cba7975d61ff428c8d",
        "signer_email_address": "george@example.com",
        "signer_name": "George",
        "signer_role": "Client",
        "order": null,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [
      "accounting@dropboxsign.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="edit-signature-request-with-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Download Files

<a id="opIdsignatureRequestFiles"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/files/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /signature_request/files/{signature_request_id}`

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.

If the files are currently being prepared, a status code of `409` will be returned instead.

<h3 id="download-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to retrieve.|
|file_type|query|string|false|Set to `pdf` for a single merged document or `zip` for a collection of individual documents.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|file_type|pdf|
|file_type|zip|

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="download-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Download Files as Data Uri

<a id="opIdsignatureRequestFilesAsDataUri"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/files_as_data_uri/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /signature_request/files_as_data_uri/{signature_request_id}`

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead.

<h3 id="download-files-as-data-uri-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to retrieve.|

> Example responses

> 200 Response

```json
{
  "file_url": "https://s3.amazonaws.com/hellofax_uploads/super_groups/2016/03/18/9aba07a585d7e223b4f137c8981c5e5892893c00/merged-completed.pdf?AWSAccessKeyId=EXAMPLE_ACCESS_KEY_ID&amp;Expires=1452868903&amp;Signature=EXAMPLE_SIGNATURE",
  "expires_at": 1458605123
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="download-files-as-data-uri-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FileResponseDataUri](#schemafileresponsedatauri)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Download Files as File Url

<a id="opIdsignatureRequestFilesAsFileUrl"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/files_as_file_url/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /signature_request/files_as_file_url/{signature_request_id}`

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead.

<h3 id="download-files-as-file-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to retrieve.|
|force_download|query|integer|false|By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser.|

> Example responses

> 200 Response

```json
{
  "file_url": "https://s3.amazonaws.com/hellofax_uploads/super_groups/2016/03/18/9aba07a585d7e223b4f137c8981c5e5892893c00/merged-completed.pdf?AWSAccessKeyId=EXAMPLE_ACCESS_KEY_ID&amp;Expires=1452868903&amp;Signature=EXAMPLE_SIGNATURE",
  "expires_at": 1458605123
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="download-files-as-file-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FileResponse](#schemafileresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get Signature Request

<a id="opIdsignatureRequestGet"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /signature_request/{signature_request_id}`

Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.

<h3 id="get-signature-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to retrieve.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "title": "Purchase Agreement",
    "original_title": "Purchase Agreement",
    "subject": "Purchase Agreement",
    "message": "Please sign and return.",
    "metadata": {},
    "created_at": 1570471067,
    "is_complete": true,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [],
    "response_data": [
      {
        "api_id": "80c678_1",
        "name": "Needs Express Shipping",
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "value": true,
        "type": "checkbox"
      },
      {
        "api_id": "80c678_2",
        "name": "Shipping Address",
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "value": "1212 Park Avenue",
        "type": "text"
      },
      {
        "api_id": "80c678_3",
        "name": "DateSigned",
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "value": "09/01/2012",
        "type": "text"
      }
    ],
    "signing_url": null,
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "john@example.com",
        "signer_name": "John Doe",
        "signer_role": null,
        "order": null,
        "status_code": "signed",
        "signed_at": 1346521550,
        "last_viewed_at": 1346521483,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": []
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-signature-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## List Signature Requests

<a id="opIdsignatureRequestList"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /signature_request/list`

Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.

Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.

<h3 id="list-signature-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|query|string|false|Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account.|
|page|query|integer|false|Which page number of the SignatureRequest List to return. Defaults to `1`.|
|page_size|query|integer|false|Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.|
|query|query|string|false|String that includes search terms and/or fields to be used to filter the SignatureRequest objects.|

> Example responses

> 200 Response

```json
{
  "list_info": {
    "page": 1,
    "num_pages": 1,
    "num_results": 2,
    "page_size": 20
  },
  "signature_requests": [
    {
      "signature_request_id": "d10338cad145e1cb68afc828",
      "title": "FHA",
      "original_title": "FHA",
      "subject": "FHA",
      "message": "Let me know if you two have any questions.",
      "metadata": {},
      "created_at": 1570471067,
      "is_complete": false,
      "is_declined": false,
      "has_error": false,
      "custom_fields": [],
      "response_data": [],
      "signing_url": "https://app.hellosign.com/sign/d10338cad145e1cb68afc828",
      "signing_redirect_url": null,
      "details_url": "https://app.hellosign.com/home/manage?guid=d10338cad145e1cb68afc828",
      "requester_email_address": "me@dropboxsign.com",
      "signatures": [
        {
          "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
          "signer_email_address": "george-jetson@example.com",
          "signer_name": "George Jetson",
          "signer_role": null,
          "order": 0,
          "status_code": "awaiting_signature",
          "signed_at": null,
          "last_viewed_at": null,
          "last_reminded_at": null,
          "has_pin": false,
          "has_sms_auth": false
        },
        {
          "signature_id": "616629ed37f8588d28600be17ab5d6b7",
          "signer_email_address": "jane-jetson@example.com",
          "signer_name": "Jane Jetson",
          "signer_role": null,
          "order": 1,
          "status_code": "awaiting_signature",
          "signed_at": null,
          "last_viewed_at": null,
          "last_reminded_at": null,
          "has_pin": false,
          "has_sms_auth": false
        }
      ],
      "cc_email_addresses": [
        "stan@example.com"
      ]
    },
    {
      "signature_request_id": "fa5c8a0b0f492d768749333a",
      "title": "Purchase Agreement",
      "original_title": "Purchase Agreement",
      "subject": "Purchase Agreement",
      "message": "Please sign and return.",
      "metadata": {},
      "is_complete": true,
      "is_declined": false,
      "has_error": false,
      "custom_fields": [],
      "response_data": [
        {
          "api_id": "uniqueIdHere_1",
          "name": "Needs Express Shipping",
          "signature_id": "5687fb7bd5aaacb1689728762b600c74",
          "value": true,
          "type": "checkbox"
        },
        {
          "api_id": "uniqueIdHere_2",
          "name": "Shipping Address",
          "signature_id": "5687fb7bd5aaacb1689728762b600c74",
          "value": "1212 Park Avenue",
          "type": "text"
        },
        {
          "api_id": "uniqueIdHere_3",
          "name": "DateSigned",
          "signature_id": "5687fb7bd5aaacb1689728762b600c74",
          "value": "09/01/2012",
          "type": "date_signed"
        }
      ],
      "signing_url": null,
      "signing_redirect_url": null,
      "details_url": "https://app.hellosign.com/home/manage?guid=fa5c8a0b0f492d768749333a",
      "requester_email_address": "me@dropboxsign.com",
      "signatures": [
        {
          "signature_id": "5687fb7bd5aaacb1689728762b600c74",
          "signer_email_address": "john@example.com",
          "signer_name": "John Doe",
          "signer_role": null,
          "order": null,
          "status_code": "signed",
          "signed_at": 1346521550,
          "last_viewed_at": 1346521483,
          "last_reminded_at": null
        }
      ],
      "cc_email_addresses": []
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="list-signature-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestListResponse](#schemasignaturerequestlistresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Release On-Hold Signature Request

<a id="opIdsignatureRequestReleaseHold"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/release_hold/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /signature_request/release_hold/{signature_request_id}`

Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.

<h3 id="release-on-hold-signature-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to release.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "title": "ok",
    "subject": "ok",
    "message": null,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [],
    "response_data": [],
    "signing_url": "https://app.hellosign.com/sign/fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "5687fb7bd5aaacb1689728762b600c74",
        "signer_email_address": "john@example.com",
        "signer_name": "John Doe",
        "order": 0,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": 1346616433,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": []
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="release-on-hold-signature-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Send Request Reminder

<a id="opIdsignatureRequestRemind"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/remind/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "john@example.com"
  }'
```

`POST /signature_request/remind/{signature_request_id}`

Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.

**NOTE:** This action can **not** be used with embedded signature requests.

> Body parameter

```json
{
  "email_address": "john@example.com"
}
```

<h3 id="send-request-reminder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to send a reminder for.|
|body|body|[SignatureRequestRemindRequest](#schemasignaturerequestremindrequest)|true|none|
|» email_address|body|string(email)|true|The email address of the signer to send a reminder to.|
|» name|body|string|false|The name of the signer to send a reminder to. Include if two or more signers share an email address.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f",
    "title": "ok",
    "original_title": "ok",
    "subject": "ok",
    "metadata": {},
    "message": null,
    "created_at": 1570471067,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [],
    "response_data": [],
    "signing_url": "https://app.hellosign.com/sign/2f9781e1a8e2045224d808c153c2e1d3df6f8f2f",
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=2f9781e1a8e2045224d808c153c2e1d3df6f8f2f",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "5687fb7bd5aaacb1689728762b600c74",
        "signer_email_address": "john@example.com",
        "signer_name": "John Doe",
        "order": 0,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": 1346616433,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": []
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="send-request-reminder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Remove Signature Request Access

<a id="opIdsignatureRequestRemove"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/remove/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /signature_request/remove/{signature_request_id}`

Removes your access to a completed signature request. This action is **not reversible**.

The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).

Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.

<h3 id="remove-signature-request-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to remove.|

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="remove-signature-request-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Send Signature Request

<a id="opIdsignatureRequestSend"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "title": "NDA with Acme Co.",
    "subject": "The NDA we talked about",
    "message": "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
    "signers": [
      {
        "email_address": "jack@example.com",
        "name": "Jack",
        "order": 0
      },
      {
        "email_address": "jill@example.com",
        "name": "Jill",
        "order": 1
      }
    ],
    "cc_email_addresses": [
      "lawyer1@dropboxsign.com",
      "lawyer2@dropboxsign.com"
    ],
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ],
    "metadata": {
      "custom_id": 1234,
      "custom_text": "NDA #9"
    },
    "signing_options": {
      "draw": true,
      "type": true,
      "upload": true,
      "phone": false,
      "default_type": "draw",
      "force_advanced_signature_details": false
    },
    "field_options": {
      "date_format": "DD - MM - YYYY"
    },
    "test_mode": true
  }'
```

`POST /signature_request/send`

Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

> Body parameter

```json
{
  "title": "NDA with Acme Co.",
  "subject": "The NDA we talked about",
  "message": "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  "signers": [
    {
      "email_address": "jack@example.com",
      "name": "Jack",
      "order": 0
    },
    {
      "email_address": "jill@example.com",
      "name": "Jill",
      "order": 1
    }
  ],
  "cc_email_addresses": [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com"
  ],
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ],
  "metadata": {
    "custom_id": 1234,
    "custom_text": "NDA #9"
  },
  "signing_options": {
    "draw": true,
    "type": true,
    "upload": true,
    "phone": false,
    "default_type": "draw",
    "force_advanced_signature_details": false
  },
  "field_options": {
    "date_format": "DD - MM - YYYY"
  },
  "test_mode": true
}
```

<h3 id="send-signature-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignatureRequestSendRequest](#schemasignaturerequestsendrequest)|true|none|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» signers|body|[[SubSignatureRequestSigner](#schemasubsignaturerequestsigner)]|false|Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|» grouped_signers|body|[[SubSignatureRequestGroupedSigners](#schemasubsignaturerequestgroupedsigners)]|false|Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» allow_reassign|body|boolean|false|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|» attachments|body|[[SubAttachment](#schemasubattachment)]|false|A list describing the attachments|
|» cc_email_addresses|body|[string(email)]|false|The email addresses that should be CCed.|
|» client_id|body|string|false|The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|» field_options|body|[SubFieldOptions](#schemasubfieldoptions)|false|This allows the requester to specify field options for a signature request.|
|» form_field_groups|body|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|» form_field_rules|body|[[SubFormFieldRule](#schemasubformfieldrule)]|false|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|» form_fields_per_document|body|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|» hide_text_tags|body|boolean|false|Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.|
|» is_eid|body|boolean|false|Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://sign.dropbox.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» use_text_tags|body|boolean|false|Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.|
|» ignore_text_tags_extraction_errors|body|boolean|false|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
    "title": "NDA with Acme Co.",
    "original_title": "The NDA we talked about",
    "subject": "The NDA we talked about",
    "message": "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
    "test_mode": true,
    "metadata": {
      "custom_id": "1234",
      "custom_text": "NDA #9"
    },
    "created_at": 1570471067,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [],
    "response_data": [],
    "signing_url": "https://app.hellosign.com/sign/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
    "signing_redirect_url": null,
    "files_url": "https://api.hellosign.com/v3/signature_request/files/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
    "details_url": "https://app.hellosign.com/home/manage?guid=2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "jack@example.com",
        "signer_name": "Jack",
        "signer_role": null,
        "order": 0,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      },
      {
        "signature_id": "616629ed37f8588d28600be17ab5d6b7",
        "signer_email_address": "jill@example.com",
        "signer_name": "Jill",
        "signer_role": null,
        "order": 1,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [
      "lawyer1@dropboxsign.com",
      "lawyer2@example.com"
    ],
    "attachments": [
      {
        "id": "id_1",
        "signer": "1",
        "name": "Attachment #1",
        "required": true,
        "instructions": "Instructions #1",
        "uploaded_at": 1650398513
      },
      {
        "id": "id_2",
        "signer": "2",
        "name": "Attachment #2",
        "required": true,
        "instructions": null,
        "uploaded_at": null
      }
    ],
    "template_ids": null
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="send-signature-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Send with Template

<a id="opIdsignatureRequestSendWithTemplate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/send_with_template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "template_ids": [
      "61a832ff0d8423f91d503e76bfbcc750f7417c78"
    ],
    "subject": "Purchase Order",
    "message": "Glad we could come to an agreement.",
    "signers": [
      {
        "role": "Client",
        "name": "George",
        "email_address": "george@example.com"
      }
    ],
    "ccs": [
      {
        "role": "Accounting",
        "email_address": "accounting@example.com"
      }
    ],
    "custom_fields": [
      {
        "name": "Cost",
        "value": "$20,000",
        "editor": "Client",
        "required": true
      }
    ],
    "signing_options": {
      "draw": true,
      "type": true,
      "upload": true,
      "phone": false,
      "default_type": "draw",
      "force_advanced_signature_details": false
    },
    "test_mode": true
  }'
```

`POST /signature_request/send_with_template`

Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.

> Body parameter

```json
{
  "template_ids": [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78"
  ],
  "subject": "Purchase Order",
  "message": "Glad we could come to an agreement.",
  "signers": [
    {
      "role": "Client",
      "name": "George",
      "email_address": "george@example.com"
    }
  ],
  "ccs": [
    {
      "role": "Accounting",
      "email_address": "accounting@example.com"
    }
  ],
  "custom_fields": [
    {
      "name": "Cost",
      "value": "$20,000",
      "editor": "Client",
      "required": true
    }
  ],
  "signing_options": {
    "draw": true,
    "type": true,
    "upload": true,
    "phone": false,
    "default_type": "draw",
    "force_advanced_signature_details": false
  },
  "test_mode": true
}
```

<h3 id="send-with-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignatureRequestSendWithTemplateRequest](#schemasignaturerequestsendwithtemplaterequest)|true|none|
|» template_ids|body|[string]|true|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» ccs|body|[[SubCC](#schemasubcc)]|false|Add CC email recipients. Required when a CC role exists for the Template.|
|» client_id|body|string|false|Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» is_eid|body|boolean|false|Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://sign.dropbox.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signers|body|[[SubSignatureRequestTemplateSigner](#schemasubsignaturerequesttemplatesigner)]|true|Add Signers to your Templated-based Signature Request.|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "title": "Purchase Order",
    "original_title": "Purchase Order",
    "subject": "Purchase Order",
    "metadata": {},
    "message": "Glad we could come to an agreement.",
    "created_at": 1570471067,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [
      {
        "name": "Cost",
        "value": "$20,000",
        "type": "text",
        "editor": "Client",
        "required": true
      }
    ],
    "response_data": [],
    "signing_url": "https://app.hellosign.com/sign/17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=17d163069282df5eb63857d31ff4a3bffa9e46c0",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "10ab1cd037d9b6cba7975d61ff428c8d",
        "signer_email_address": "george@example.com",
        "signer_name": "George",
        "signer_role": "Client",
        "order": null,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [
      "accounting@dropboxsign.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="send-with-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Update Signature Request

<a id="opIdsignatureRequestUpdate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/signature_request/update/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "john@example.com",
    "signature_id": "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f"
  }'
```

`POST /signature_request/update/{signature_request_id}`

Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.

Updating the email address of a signer will generate a new `signature_id` value.

**NOTE:** This action cannot be performed on a signature request with an appended signature page.

> Body parameter

```json
{
  "email_address": "john@example.com",
  "signature_id": "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f"
}
```

<h3 id="update-signature-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The id of the SignatureRequest to update.|
|body|body|[SignatureRequestUpdateRequest](#schemasignaturerequestupdaterequest)|true|none|
|» email_address|body|string(email)|false|The new email address for the recipient.<br><br>This will generate a new `signature_id` value.<br><br>**NOTE:** Optional if `name` is provided.|
|» name|body|string|false|The new name for the recipient.<br><br>**NOTE:** Optional if `email_address` is provided.|
|» signature_id|body|string|true|The signature ID for the recipient.|
|» expires_at|body|integer \| null|false|The new time when the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

> Example responses

> 200 Response

```json
{
  "signature_request": {
    "signature_request_id": "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "title": "Purchase Agreement",
    "subject": "Purchase Agreement",
    "message": "Please sign and return.",
    "created_at": 1570471067,
    "is_complete": true,
    "has_error": false,
    "custom_fields": [],
    "signing_url": null,
    "signing_redirect_url": null,
    "details_url": "https://app.hellosign.com/home/manage?guid=fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "danaerys@mereen.gov.ws",
        "signer_name": "Danaerys Stormborn",
        "signer_role": null,
        "order": null,
        "status_code": "awaiting_signature",
        "signed_at": null,
        "last_viewed_at": null,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": []
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="update-signature-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SignatureRequestGetResponse](#schemasignaturerequestgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

<h1 id="dropbox-sign-api-template">Template</h1>

Contains information about the templates you and your team have created

## Add User to Template

<a id="opIdtemplateAddUser"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/add_user/f57db65d3f933b5316d398057a36176831451a35 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "george@dropboxsign.com"
  }'
```

`POST /template/add_user/{template_id}`

Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.

> Body parameter

```json
{
  "email_address": "george@dropboxsign.com"
}
```

<h3 id="add-user-to-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The id of the Template to give the Account access to.|
|body|body|[TemplateAddUserRequest](#schematemplateadduserrequest)|true|none|
|» account_id|body|string|false|The id of the Account to give access to the Template.<br>**NOTE:** The account id prevails if email address is also provided.|
|» email_address|body|string(email)|false|The email address of the Account to give access to the Template.<br>**NOTE:** The account id prevails if it is also provided.|
|» skip_notification|body|boolean|false|If set to `true`, the user does not receive an email notification when a template has been shared with them. Defaults to `false`.|

> Example responses

> 200 Response

```json
{
  "template": {
    "template_id": "f57db65d3f933b5316d398057a36176831451a35",
    "title": "Mutual NDA",
    "message": "Please sign this NDA as soon as possible.",
    "updated_at": 1570471067,
    "is_creator": true,
    "is_embedded": false,
    "can_edit": true,
    "metadata": {},
    "is_locked": false,
    "signer_roles": [
      {
        "name": "Outside Vendor",
        "order": 0
      },
      {
        "name": "Internal Manager",
        "order": 1
      }
    ],
    "cc_roles": [
      {
        "name": "Corporate Attorney"
      }
    ],
    "documents": [
      {
        "index": 0,
        "name": "mutual_nda.pdf",
        "field_groups": [
          {
            "name": "group1",
            "rule": "require_1-ormore"
          }
        ],
        "form_fields": [
          {
            "api_id": "b65e03_10",
            "name": "DepartmentA",
            "type": "checkbox",
            "signer": "1",
            "x": 117,
            "y": 19,
            "width": 15,
            "height": 15,
            "required": false,
            "group": "group1"
          },
          {
            "api_id": "b65e03_11",
            "name": "DepartmentB",
            "type": "checkbox",
            "signer": "2",
            "x": 118,
            "y": 41,
            "width": 15,
            "height": 15,
            "required": false,
            "group": "group1"
          },
          {
            "api_id": "0ec7a7_1",
            "name": "VendorName",
            "type": "text",
            "signer": "1",
            "x": 160,
            "y": 141,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_2",
            "name": "VendorTitle",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 181,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_3",
            "name": "ManagerName",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 221,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_4",
            "name": "ManagerTitle",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 251,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_5",
            "name": "DateSigned",
            "type": "date_signed",
            "signer": "1",
            "x": 523,
            "y": 28,
            "width": 105,
            "height": 16,
            "required": true,
            "group": null
          }
        ],
        "custom_fields": [
          {
            "name": "Effective Date",
            "type": "text",
            "signer": null,
            "x": 378,
            "y": 36,
            "width": 84,
            "height": 14,
            "required": false,
            "api_id": "78083014-32d8-4b5b-b65e-fe6010f3be64",
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 22
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          }
        ]
      }
    ],
    "accounts": [
      {
        "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": 3600000,
          "api_signature_requests_left": 0,
          "sms_verifications_left": 300000
        }
      },
      {
        "account_id": "",
        "email_address": "teammate@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": 3600000,
          "api_signature_requests_left": 0,
          "sms_verifications_left": 300000
        }
      }
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="add-user-to-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplateGetResponse](#schematemplategetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Create Template

<a id="opIdtemplateCreate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "37dee8d8440c66d54cfa05d92c160882",
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ],
    "title": "Test Template",
    "subject": "Please sign this document",
    "message": "For your approval",
    "signer_roles": [
      {
        "name": "Client",
        "order": 0
      },
      {
        "name": "Witness",
        "order": 1
      }
    ],
    "cc_roles": [
      "Manager"
    ],
    "merge_fields": [
      {
        "name": "Full Name",
        "type": "text"
      },
      {
        "name": "Is Registered?",
        "type": "checkbox"
      }
    ],
    "field_options": {
      "date_format": "DD - MM - YYYY"
    },
    "form_fields_per_document": [
      {
        "document_index": 0,
        "api_id": "uniqueIdHere_1",
        "name": "",
        "placeholder": "",
        "type": "text",
        "x": 112,
        "y": 328,
        "width": 100,
        "height": 16,
        "required": true,
        "signer": 1,
        "page": 1,
        "validation_type": "numbers_only"
      },
      {
        "document_index": 0,
        "api_id": "uniqueIdHere_2",
        "name": "",
        "type": "signature",
        "x": 530,
        "y": 415,
        "width": 120,
        "height": 30,
        "required": true,
        "signer": 0,
        "page": 1
      }
    ],
    "test_mode": true
  }'
```

`POST /template/create`

Creates a template that can be used in future signature requests.

If `client_id` is provided, the template will be created as an embedded template. Embedded templates can be used for embedded signature requests and can be edited later by generating a new `edit_url` with [/embedded/edit_url/{template_id}](/api/reference/operation/embeddedEditUrl/).

Template creation may complete asynchronously after the initial request is accepted. It is recommended that a callback be implemented to listen for the callback event. A `template_created` event indicates the template is ready to use, while a `template_error` event indicates there was a problem while creating the template. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.

> Body parameter

```json
{
  "client_id": "37dee8d8440c66d54cfa05d92c160882",
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ],
  "title": "Test Template",
  "subject": "Please sign this document",
  "message": "For your approval",
  "signer_roles": [
    {
      "name": "Client",
      "order": 0
    },
    {
      "name": "Witness",
      "order": 1
    }
  ],
  "cc_roles": [
    "Manager"
  ],
  "merge_fields": [
    {
      "name": "Full Name",
      "type": "text"
    },
    {
      "name": "Is Registered?",
      "type": "checkbox"
    }
  ],
  "field_options": {
    "date_format": "DD - MM - YYYY"
  },
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "uniqueIdHere_1",
      "name": "",
      "placeholder": "",
      "type": "text",
      "x": 112,
      "y": 328,
      "width": 100,
      "height": 16,
      "required": true,
      "signer": 1,
      "page": 1,
      "validation_type": "numbers_only"
    },
    {
      "document_index": 0,
      "api_id": "uniqueIdHere_2",
      "name": "",
      "type": "signature",
      "x": 530,
      "y": 415,
      "width": 120,
      "height": 30,
      "required": true,
      "signer": 0,
      "page": 1
    }
  ],
  "test_mode": true
}
```

<h3 id="create-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplateCreateRequest](#schematemplatecreaterequest)|true|none|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» allow_reassign|body|boolean|false|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|» attachments|body|[[SubAttachment](#schemasubattachment)]|false|A list describing the attachments|
|» cc_roles|body|[string]|false|The CC roles that must be assigned when using the template to send a signature request|
|» client_id|body|string|false|Client id of the app you're using to create this draft. Used to apply the branding and callback url defined for the app.|
|» field_options|body|[SubFieldOptions](#schemasubfieldoptions)|false|This allows the requester to specify field options for a signature request.|
|» form_field_groups|body|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|» form_field_rules|body|[[SubFormFieldRule](#schemasubformfieldrule)]|false|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|» form_fields_per_document|body|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|true|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|» merge_fields|body|[[SubMergeField](#schemasubmergefield)]|false|Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter.<br>If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document.|
|» message|body|string|false|The default template email message.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» signer_roles|body|[[SubTemplateRole](#schemasubtemplaterole)]|true|An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.|
|» subject|body|string|false|The template title (alias).|
|» test_mode|body|boolean|false|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» use_preexisting_fields|body|boolean|false|Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).|
|» ignore_text_tags_extraction_errors|body|boolean|false|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|

> Example responses

> 200 Response

```json
{
  "template": {
    "template_id": "f57db65d3f933b5316d398057a36176831451a35",
    "title": "Mutual NDA",
    "message": "Please sign this NDA as soon as possible.",
    "updated_at": 1570471067,
    "is_creator": true,
    "is_embedded": false,
    "can_edit": true,
    "metadata": {},
    "is_locked": false,
    "signer_roles": [
      {
        "name": "Outside Vendor",
        "order": 0
      },
      {
        "name": "Internal Manager",
        "order": 1
      }
    ],
    "cc_roles": [
      {
        "name": "Corporate Attorney"
      }
    ],
    "documents": [
      {
        "index": 0,
        "name": "mutual_nda.pdf",
        "field_groups": [
          {
            "name": "group1",
            "rule": "require_1-ormore"
          }
        ],
        "form_fields": [
          {
            "api_id": "b65e03_10",
            "name": "DepartmentA",
            "type": "checkbox",
            "signer": "1",
            "x": 117,
            "y": 19,
            "width": 15,
            "height": 15,
            "required": false,
            "group": "group1"
          },
          {
            "api_id": "b65e03_11",
            "name": "DepartmentB",
            "type": "checkbox",
            "signer": "2",
            "x": 118,
            "y": 41,
            "width": 15,
            "height": 15,
            "required": false,
            "group": "group1"
          },
          {
            "api_id": "0ec7a7_1",
            "name": "VendorName",
            "type": "text",
            "signer": "1",
            "x": 160,
            "y": 141,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_2",
            "name": "VendorTitle",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 181,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_3",
            "name": "ManagerName",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 221,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_4",
            "name": "ManagerTitle",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 251,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_5",
            "name": "DateSigned",
            "type": "date_signed",
            "signer": "1",
            "x": 523,
            "y": 28,
            "width": 105,
            "height": 16,
            "required": true,
            "group": null
          }
        ],
        "custom_fields": [
          {
            "name": "Effective Date",
            "type": "text",
            "signer": null,
            "x": 378,
            "y": 36,
            "width": 84,
            "height": 14,
            "required": false,
            "api_id": "78083014-32d8-4b5b-b65e-fe6010f3be64",
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 22
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          }
        ]
      }
    ],
    "accounts": [
      {
        "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": 3600000,
          "api_signature_requests_left": 0,
          "sms_verifications_left": 300000
        }
      }
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplateCreateResponse](#schematemplatecreateresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Create Embedded Template Draft

<a id="opIdtemplateCreateEmbeddedDraft"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/create_embedded_draft \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "37dee8d8440c66d54cfa05d92c160882",
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ],
    "title": "Test Template",
    "subject": "Please sign this document",
    "message": "For your approval",
    "signer_roles": [
      {
        "name": "Client",
        "order": 0
      },
      {
        "name": "Witness",
        "order": 1
      }
    ],
    "cc_roles": [
      "Manager"
    ],
    "merge_fields": [
      {
        "name": "Full Name",
        "type": "text"
      },
      {
        "name": "Is Registered?",
        "type": "checkbox"
      }
    ],
    "field_options": {
      "date_format": "DD - MM - YYYY"
    },
    "test_mode": true
  }'
```

`POST /template/create_embedded_draft`

The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template 'edit' stage.

> Body parameter

```json
{
  "client_id": "37dee8d8440c66d54cfa05d92c160882",
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ],
  "title": "Test Template",
  "subject": "Please sign this document",
  "message": "For your approval",
  "signer_roles": [
    {
      "name": "Client",
      "order": 0
    },
    {
      "name": "Witness",
      "order": 1
    }
  ],
  "cc_roles": [
    "Manager"
  ],
  "merge_fields": [
    {
      "name": "Full Name",
      "type": "text"
    },
    {
      "name": "Is Registered?",
      "type": "checkbox"
    }
  ],
  "field_options": {
    "date_format": "DD - MM - YYYY"
  },
  "test_mode": true
}
```

<h3 id="create-embedded-template-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplateCreateEmbeddedDraftRequest](#schematemplatecreateembeddeddraftrequest)|true|none|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» allow_ccs|body|boolean|false|This allows the requester to specify whether the user is allowed to provide email addresses to CC when creating a template.|
|» allow_reassign|body|boolean|false|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|» attachments|body|[[SubAttachment](#schemasubattachment)]|false|A list describing the attachments|
|» cc_roles|body|[string]|false|The CC roles that must be assigned when using the template to send a signature request|
|» client_id|body|string|true|Client id of the app you're using to create this draft. Used to apply the branding and callback url defined for the app.|
|» editor_options|body|[SubEditorOptions](#schemasubeditoroptions)|false|This allows the requester to specify editor options when a preparing a document|
|» field_options|body|[SubFieldOptions](#schemasubfieldoptions)|false|This allows the requester to specify field options for a signature request.|
|» force_signer_roles|body|boolean|false|Provide users the ability to review/edit the template signer roles.|
|» force_subject_message|body|boolean|false|Provide users the ability to review/edit the template subject and message.|
|» form_field_groups|body|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|» form_field_rules|body|[[SubFormFieldRule](#schemasubformfieldrule)]|false|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|» form_fields_per_document|body|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|» merge_fields|body|[[SubMergeField](#schemasubmergefield)]|false|Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter.<br>If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document.|
|» message|body|string|false|The default template email message.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» show_preview|body|boolean|false|This allows the requester to enable the editor/preview experience.<br><br>- `show_preview=true`: Allows requesters to enable the editor/preview experience.<br>- `show_preview=false`: Allows requesters to disable the editor/preview experience.|
|» show_progress_stepper|body|boolean|false|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|» signer_roles|body|[[SubTemplateRole](#schemasubtemplaterole)]|false|An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.|
|» skip_me_now|body|boolean|false|Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.|
|» subject|body|string|false|The template title (alias).|
|» test_mode|body|boolean|false|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» use_preexisting_fields|body|boolean|false|Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).|
|» ignore_text_tags_extraction_errors|body|boolean|false|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|

> Example responses

> 200 Response

```json
{
  "template": {
    "template_id": "61a832ff0d8423f91d503e76bfbcc750f7417c78",
    "edit_url": "https://app.hellosign.com/editor/embeddedTemplate?token=8d80ead273a0405d6844005a20beb99b&amp;root_snapshot_guids%5B0%5D=74cc144a76afa5bdca3378278e9a6ac3c2947c92&amp;snapshot_access_guids%5B0%5D=9ceac764&amp;guid=61a832ff0d8423f91d503e76bfbcc750f7417c78",
    "expires_at": 1427306768
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-embedded-template-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplateCreateEmbeddedDraftResponse](#schematemplatecreateembeddeddraftresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Delete Template

<a id="opIdtemplateDelete"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/delete/f57db65d3f933b5316d398057a36176831451a35 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /template/delete/{template_id}`

Completely deletes the template specified from the account.

<h3 id="delete-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The id of the Template to delete.|

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="delete-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get Template Files

<a id="opIdtemplateFiles"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/files/f57db65d3f933b5316d398057a36176831451a35 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /template/files/{template_id}`

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a PDF or ZIP file.

If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

<h3 id="get-template-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The id of the template files to retrieve.|
|file_type|query|string|false|Set to `pdf` for a single merged document or `zip` for a collection of individual documents.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|file_type|pdf|
|file_type|zip|

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-template-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get Template Files as Data Uri

<a id="opIdtemplateFilesAsDataUri"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/files_as_data_uri/f57db65d3f933b5316d398057a36176831451a35 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /template/files_as_data_uri/{template_id}`

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

<h3 id="get-template-files-as-data-uri-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The id of the template files to retrieve.|

> Example responses

> 200 Response

```json
{
  "file_url": "https://s3.amazonaws.com/hellofax_uploads/super_groups/2016/03/18/9aba07a585d7e223b4f137c8981c5e5892893c00/merged-completed.pdf?AWSAccessKeyId=EXAMPLE_ACCESS_KEY_ID&amp;Expires=1452868903&amp;Signature=EXAMPLE_SIGNATURE",
  "expires_at": 1458605123
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-template-files-as-data-uri-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FileResponseDataUri](#schemafileresponsedatauri)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get Template Files as File Url

<a id="opIdtemplateFilesAsFileUrl"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/files_as_file_url/f57db65d3f933b5316d398057a36176831451a35 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /template/files_as_file_url/{template_id}`

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a url to the file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

<h3 id="get-template-files-as-file-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The id of the template files to retrieve.|
|force_download|query|integer|false|By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser.|

> Example responses

> 200 Response

```json
{
  "file_url": "https://s3.amazonaws.com/hellofax_uploads/super_groups/2016/03/18/9aba07a585d7e223b4f137c8981c5e5892893c00/merged-completed.pdf?AWSAccessKeyId=EXAMPLE_ACCESS_KEY_ID&amp;Expires=1452868903&amp;Signature=EXAMPLE_SIGNATURE",
  "expires_at": 1458605123
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-template-files-as-file-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FileResponse](#schemafileresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get Template

<a id="opIdtemplateGet"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/f57db65d3f933b5316d398057a36176831451a35 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /template/{template_id}`

Returns the Template specified by the `template_id` parameter.

<h3 id="get-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The id of the Template to retrieve.|

> Example responses

> 200 Response

```json
{
  "template": {
    "template_id": "f57db65d3f933b5316d398057a36176831451a35",
    "title": "Mutual NDA",
    "message": "Please sign this NDA as soon as possible.",
    "updated_at": 1570471067,
    "is_creator": true,
    "is_embedded": false,
    "can_edit": true,
    "metadata": {},
    "is_locked": false,
    "signer_roles": [
      {
        "name": "Outside Vendor",
        "order": 0
      },
      {
        "name": "Internal Manager",
        "order": 1
      }
    ],
    "cc_roles": [
      {
        "name": "Corporate Attorney"
      }
    ],
    "documents": [
      {
        "index": 0,
        "name": "mutual_nda.pdf",
        "field_groups": [
          {
            "name": "group1",
            "rule": "require_1-ormore"
          }
        ],
        "form_fields": [
          {
            "api_id": "b65e03_10",
            "name": "DepartmentA",
            "type": "checkbox",
            "signer": "1",
            "x": 117,
            "y": 19,
            "width": 15,
            "height": 15,
            "required": false,
            "group": "group1"
          },
          {
            "api_id": "b65e03_11",
            "name": "DepartmentB",
            "type": "checkbox",
            "signer": "2",
            "x": 118,
            "y": 41,
            "width": 15,
            "height": 15,
            "required": false,
            "group": "group1"
          },
          {
            "api_id": "0ec7a7_1",
            "name": "VendorName",
            "type": "text",
            "signer": "1",
            "x": 160,
            "y": 141,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_2",
            "name": "VendorTitle",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 181,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_3",
            "name": "ManagerName",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 221,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_4",
            "name": "ManagerTitle",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 251,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_5",
            "name": "DateSigned",
            "type": "date_signed",
            "signer": "1",
            "x": 523,
            "y": 28,
            "width": 105,
            "height": 16,
            "required": true,
            "group": null
          }
        ],
        "custom_fields": [
          {
            "name": "Effective Date",
            "type": "text",
            "signer": null,
            "x": 378,
            "y": 36,
            "width": 84,
            "height": 14,
            "required": false,
            "api_id": "78083014-32d8-4b5b-b65e-fe6010f3be64",
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 22
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          }
        ]
      }
    ],
    "accounts": [
      {
        "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": 3600000,
          "api_signature_requests_left": 0,
          "sms_verifications_left": 300000
        }
      }
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplateGetResponse](#schematemplategetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## List Templates

<a id="opIdtemplateList"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /template/list`

Returns a list of the Templates that are accessible by you.

Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.

<h3 id="list-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|query|string|false|Which account to return Templates for. Must be a team member. Use `all` to indicate all team members. Defaults to your account.|
|page|query|integer|false|Which page number of the Template List to return. Defaults to `1`.|
|page_size|query|integer|false|Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.|
|query|query|string|false|String that includes search terms and/or fields to be used to filter the Template objects.|

> Example responses

> 200 Response

```json
{
  "list_info": {
    "page": 1,
    "num_pages": 1,
    "num_results": 2,
    "page_size": 20
  },
  "templates": [
    {
      "template_id": "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
      "title": "Purchase order",
      "message": "",
      "updated_at": 1570471067,
      "is_creator": false,
      "is_embedded": false,
      "can_edit": true,
      "metadata": {},
      "is_locked": false,
      "signer_roles": [
        {
          "name": "Client"
        }
      ],
      "cc_roles": [
        {
          "name": "Accounting"
        }
      ],
      "documents": [
        {
          "index": 0,
          "name": "purchase_order.pdf",
          "field_groups": [],
          "form_fields": [],
          "custom_fields": [
            {
              "name": "Cost",
              "type": "text",
              "signer": null,
              "x": 378,
              "y": 36,
              "width": 84,
              "height": 14,
              "required": false,
              "api_id": "b0e195cf-fb85-4dd4-94ab-6f62450c7059",
              "group": null,
              "avg_text_length": {
                "num_lines": 1,
                "num_chars_per_line": 22
              },
              "isMultiline": false,
              "originalFontSize": 12,
              "fontFamily": "arial"
            }
          ]
        }
      ],
      "accounts": [
        {
          "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
          "email_address": "me@dropboxsign.com",
          "is_locked": false,
          "is_paid_hs": true,
          "is_paid_hf": false,
          "quotas": {
            "templates_left": null,
            "documents_left": 3600000,
            "api_signature_requests_left": 0,
            "sms_verifications_left": 300000
          }
        }
      ]
    },
    {
      "template_id": "f57db65d3f933b5316d398057a36176831451a35",
      "title": "Mutual NDA",
      "message": "Please sign this NDA as soon as possible.",
      "updated_at": 1570471067,
      "is_creator": true,
      "is_embedded": false,
      "can_edit": true,
      "metadata": {},
      "is_locked": false,
      "signer_roles": [
        {
          "name": "Outside Vendor",
          "order": 0
        },
        {
          "name": "Internal Manager",
          "order": 1
        }
      ],
      "cc_roles": [
        {
          "name": "Corporate Attorney"
        }
      ],
      "documents": [
        {
          "index": 0,
          "name": "mutual_nda.pdf",
          "field_groups": [
            {
              "name": "group1",
              "rule": "require_1-ormore"
            }
          ],
          "form_fields": [
            {
              "api_id": "b65e03_10",
              "name": "DepartmentA",
              "type": "checkbox",
              "signer": "1",
              "x": 117,
              "y": 19,
              "width": 15,
              "height": 15,
              "required": false,
              "group": "group1"
            },
            {
              "api_id": "b65e03_11",
              "name": "DepartmentB",
              "type": "checkbox",
              "signer": "2",
              "x": 118,
              "y": 41,
              "width": 15,
              "height": 15,
              "required": false,
              "group": "group1"
            },
            {
              "api_id": "0ec7a7_1",
              "name": "VendorName",
              "type": "text",
              "signer": "1",
              "x": 160,
              "y": 141,
              "width": 80,
              "height": 30,
              "required": true,
              "group": null,
              "avg_text_length": {
                "num_lines": 1,
                "num_chars_per_line": 19
              },
              "isMultiline": false,
              "originalFontSize": 12,
              "fontFamily": "arial"
            },
            {
              "api_id": "0ec7a7_2",
              "name": "VendorTitle",
              "type": "text",
              "signer": "2",
              "x": 160,
              "y": 181,
              "width": 80,
              "height": 30,
              "required": true,
              "group": null,
              "avg_text_length": {
                "num_lines": 1,
                "num_chars_per_line": 19
              },
              "isMultiline": false,
              "originalFontSize": 12,
              "fontFamily": "arial"
            },
            {
              "api_id": "0ec7a7_3",
              "name": "ManagerName",
              "type": "text",
              "signer": "2",
              "x": 160,
              "y": 221,
              "width": 80,
              "height": 30,
              "required": true,
              "group": null,
              "avg_text_length": {
                "num_lines": 1,
                "num_chars_per_line": 19
              },
              "isMultiline": false,
              "originalFontSize": 12,
              "fontFamily": "arial"
            },
            {
              "api_id": "0ec7a7_4",
              "name": "ManagerTitle",
              "type": "text",
              "signer": "2",
              "x": 160,
              "y": 251,
              "width": 80,
              "height": 30,
              "required": true,
              "group": null,
              "avg_text_length": {
                "num_lines": 1,
                "num_chars_per_line": 19
              },
              "isMultiline": false,
              "originalFontSize": 12,
              "fontFamily": "arial"
            },
            {
              "api_id": "0ec7a7_5",
              "name": "DateSigned",
              "type": "date_signed",
              "signer": "1",
              "x": 523,
              "y": 28,
              "width": 105,
              "height": 16,
              "required": true,
              "group": null
            }
          ],
          "custom_fields": [
            {
              "name": "Effective Date",
              "type": "text",
              "signer": null,
              "x": 378,
              "y": 36,
              "width": 84,
              "height": 14,
              "required": false,
              "api_id": "78083014-32d8-4b5b-b65e-fe6010f3be64",
              "group": null,
              "avg_text_length": {
                "num_lines": 1,
                "num_chars_per_line": 22
              },
              "isMultiline": false,
              "originalFontSize": 12,
              "fontFamily": "arial"
            }
          ]
        }
      ],
      "accounts": [
        {
          "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
          "email_address": "me@dropboxsign.com",
          "is_locked": false,
          "is_paid_hs": true,
          "is_paid_hf": false,
          "quotas": {
            "templates_left": null,
            "documents_left": 3600000,
            "api_signature_requests_left": 0,
            "sms_verifications_left": 300000
          }
        }
      ]
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="list-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplateListResponse](#schematemplatelistresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Remove User from Template

<a id="opIdtemplateRemoveUser"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/remove_user/f57db65d3f933b5316d398057a36176831451a35 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "george@dropboxsign.com"
  }'
```

`POST /template/remove_user/{template_id}`

Removes the specified Account's access to the specified Template.

> Body parameter

```json
{
  "email_address": "george@dropboxsign.com"
}
```

<h3 id="remove-user-from-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The id of the Template to remove the Account's access to.|
|body|body|[TemplateRemoveUserRequest](#schematemplateremoveuserrequest)|true|none|
|» account_id|body|string|false|The id or email address of the Account to remove access to the Template. The account id prevails if both are provided.|
|» email_address|body|string(email)|false|The id or email address of the Account to remove access to the Template. The account id prevails if both are provided.|

> Example responses

> 200 Response

```json
{
  "template": {
    "template_id": "f57db65d3f933b5316d398057a36176831451a35",
    "title": "Mutual NDA",
    "message": "Please sign this NDA as soon as possible.",
    "updated_at": 1570471067,
    "is_creator": true,
    "is_embedded": false,
    "can_edit": true,
    "metadata": {},
    "is_locked": false,
    "signer_roles": [
      {
        "name": "Outside Vendor",
        "order": 0
      },
      {
        "name": "Internal Manager",
        "order": 1
      }
    ],
    "cc_roles": [
      {
        "name": "Corporate Attorney"
      }
    ],
    "documents": [
      {
        "index": 0,
        "name": "mutual_nda.pdf",
        "field_groups": [
          {
            "name": "group1",
            "rule": "require_1-ormore"
          }
        ],
        "form_fields": [
          {
            "api_id": "b65e03_10",
            "name": "DepartmentA",
            "type": "checkbox",
            "signer": "1",
            "x": 117,
            "y": 19,
            "width": 15,
            "height": 15,
            "required": false,
            "group": "group1"
          },
          {
            "api_id": "b65e03_11",
            "name": "DepartmentB",
            "type": "checkbox",
            "signer": "2",
            "x": 118,
            "y": 41,
            "width": 15,
            "height": 15,
            "required": false,
            "group": "group1"
          },
          {
            "api_id": "0ec7a7_1",
            "name": "VendorName",
            "type": "text",
            "signer": "1",
            "x": 160,
            "y": 141,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_2",
            "name": "VendorTitle",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 181,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_3",
            "name": "ManagerName",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 221,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_4",
            "name": "ManagerTitle",
            "type": "text",
            "signer": "2",
            "x": 160,
            "y": 251,
            "width": 80,
            "height": 30,
            "required": true,
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 19
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          },
          {
            "api_id": "0ec7a7_5",
            "name": "DateSigned",
            "type": "date_signed",
            "signer": "1",
            "x": 523,
            "y": 28,
            "width": 105,
            "height": 16,
            "required": true,
            "group": null
          }
        ],
        "custom_fields": [
          {
            "name": "Effective Date",
            "type": "text",
            "signer": null,
            "x": 378,
            "y": 36,
            "width": 84,
            "height": 14,
            "required": false,
            "api_id": "78083014-32d8-4b5b-b65e-fe6010f3be64",
            "group": null,
            "avg_text_length": {
              "num_lines": 1,
              "num_chars_per_line": 22
            },
            "isMultiline": false,
            "originalFontSize": 12,
            "fontFamily": "arial"
          }
        ]
      }
    ],
    "accounts": [
      {
        "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": 3600000,
          "api_signature_requests_left": 0,
          "sms_verifications_left": 300000
        }
      }
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="remove-user-from-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplateGetResponse](#schematemplategetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Update Template Files

<a id="opIdtemplateUpdateFiles"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/template/update_files/f57db65d3f933b5316d398057a36176831451a35 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ]
  }'
```

`POST /template/update_files/{template_id}`

Overlays a new file with the overlay of an existing template. The new file(s) must:

1. have the same or higher page count
2. the same orientation as the file(s) being replaced.

This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.

Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.

It is recommended that a callback be implemented to listen for the callback event. A `template_created` event will be sent when the files are updated or a `template_error` event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.

If the page orientation or page count is different from the original template document, we will notify you with a `template_error` [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).

> Body parameter

```json
{
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ]
}
```

<h3 id="update-template-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The ID of the template whose files to update.|
|body|body|[TemplateUpdateFilesRequest](#schematemplateupdatefilesrequest)|true|none|
|» client_id|body|string|false|Client id of the app you're using to update this template.|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» message|body|string|false|The new default template email message.|
|» subject|body|string|false|The new default template email subject.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|

> Example responses

> 200 Response

```json
{
  "template": {
    "template_id": "f57db65d3f933122019888057a36176831451a35"
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="update-template-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TemplateUpdateFilesResponse](#schematemplateupdatefilesresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

<h1 id="dropbox-sign-api-bulk-send-job">Bulk Send Job</h1>

Contains information about bulk sent signature requests

## Get Bulk Send Job

<a id="opIdbulkSendJobGet"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/bulk_send_job/6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /bulk_send_job/{bulk_send_job_id}`

Returns the status of the BulkSendJob and its SignatureRequests specified by the `bulk_send_job_id` parameter.

<h3 id="get-bulk-send-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bulk_send_job_id|path|string|true|The id of the BulkSendJob to retrieve.|
|page|query|integer|false|Which page number of the BulkSendJob list to return. Defaults to `1`.|
|page_size|query|integer|false|Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.|

> Example responses

> 200 Response

```json
{
  "bulk_send_job": {
    "bulk_send_job_id": "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174",
    "total": 1,
    "is_creator": true,
    "created_at": 1532640962
  },
  "list_info": {
    "page": 1,
    "num_pages": 1,
    "num_results": 1,
    "page_size": 20
  },
  "signature_requests": [
    {
      "signature_request_id": "fa5c8a0b0f492d768749333ad6fcc214c111e967",
      "title": "Purchase Agreement",
      "subject": "Purchase Agreement",
      "message": "Please sign and return.",
      "is_complete": true,
      "is_declined": false,
      "has_error": false,
      "custom_fields": [],
      "response_data": [
        {
          "api_id": "80c678_1",
          "name": "Needs Express Shipping",
          "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
          "value": true,
          "type": "checkbox"
        },
        {
          "api_id": "80c678_2",
          "name": "Shipping Address",
          "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
          "value": "1212 Park Avenue",
          "type": "text"
        },
        {
          "api_id": "80c678_3",
          "name": "DateSigned",
          "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
          "value": "09/01/2012",
          "type": "text"
        }
      ],
      "signing_url": null,
      "signing_redirect_url": null,
      "details_url": "https://app.hellosign.com/home/manage?guid=fa5c8a0b0f492d768749333ad6fcc214c111e967",
      "requester_email_address": "me@dropboxsign.com",
      "signatures": [
        {
          "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
          "signer_email_address": "john@example.com",
          "signer_name": "John Doe",
          "signer_role": null,
          "order": null,
          "status_code": "signed",
          "signed_at": 1346521550,
          "last_viewed_at": 1346521483,
          "last_reminded_at": null,
          "has_pin": false
        }
      ],
      "cc_email_addresses": [],
      "bulk_send_job_id": "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174"
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-bulk-send-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BulkSendJobGetResponse](#schemabulksendjobgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## List Bulk Send Jobs

<a id="opIdbulkSendJobList"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/bulk_send_job/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /bulk_send_job/list`

Returns a list of BulkSendJob that you can access.

<h3 id="list-bulk-send-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Which page number of the BulkSendJob List to return. Defaults to `1`.|
|page_size|query|integer|false|Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.|

> Example responses

> 200 Response

```json
{
  "list_info": {
    "page": 1,
    "num_pages": 1,
    "num_results": 2,
    "page_size": 20
  },
  "bulk_send_jobs": [
    {
      "bulk_send_job_id": "fef03f144d9384737a98ff2ca6c1fd9d7bc2239a",
      "total": 250,
      "is_creator": false,
      "created_at": 1532740871
    },
    {
      "bulk_send_job_id": "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174",
      "total": 1,
      "is_creator": true,
      "created_at": 1532640962
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="list-bulk-send-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BulkSendJobListResponse](#schemabulksendjoblistresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

<h1 id="dropbox-sign-api-report">Report</h1>

Provides insights into your team's user activity and document status

## Create Report

<a id="opIdreportCreate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/report/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "start_date": "09/01/2020",
    "end_date": "09/01/2020",
    "report_type": [
      "user_activity",
      "document_status"
    ]
  }'
```

`POST /report/create`

Request the creation of one or more report(s).

When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and `start_date` must not be more than 10 years in the past.

> Body parameter

```json
{
  "start_date": "09/01/2020",
  "end_date": "09/01/2020",
  "report_type": [
    "user_activity",
    "document_status"
  ]
}
```

<h3 id="create-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportCreateRequest](#schemareportcreaterequest)|true|none|
|» end_date|body|string|true|The (inclusive) end date for the report data in `MM/DD/YYYY` format.|
|» report_type|body|[string]|true|The type(s) of the report you are requesting. Allowed values are `user_activity` and `document_status`. User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).|
|» start_date|body|string|true|The (inclusive) start date for the report data in `MM/DD/YYYY` format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» report_type|user_activity|
|» report_type|document_status|
|» report_type|sms_activity|
|» report_type|fax_usage|

> Example responses

> 200 Response

```json
{
  "report": {
    "success": "Your request is being processed. You will receive an email when the report is ready.",
    "start_date": "09/01/2020",
    "end_date": "09/02/2020",
    "report_type": [
      "user_activity",
      "document_status"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ReportCreateResponse](#schemareportcreateresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="dropbox-sign-api-team">Team</h1>

Contains information about your team and its members

## Add User to Team

<a id="opIdteamAddMember"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team/add_member \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "george@example.com"
  }'
```

`PUT /team/add_member`

Invites a user (specified using the `email_address` parameter) to your Team. If the user does not currently have a Dropbox Sign Account, a new one will be created for them. If a user is already a part of another Team, a `team_invite_failed` error will be returned.

> Body parameter

```json
{
  "email_address": "george@example.com"
}
```

<h3 id="add-user-to-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_id|query|string|false|The id of the team.|
|body|body|[TeamAddMemberRequest](#schemateamaddmemberrequest)|true|none|
|» account_id|body|string|false|`account_id` or `email_address` is required. If both are provided, the account id prevails.<br><br>Account id of the user to invite to your Team.|
|» email_address|body|string(email)|false|`account_id` or `email_address` is required, If both are provided, the account id prevails.<br><br>Email address of the user to invite to your Team.|
|» role|body|string|false|A role member will take in a new Team.<br><br>**NOTE:** This parameter is used only if `team_id` is provided.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|Member|
|» role|Developer|
|» role|Team Manager|
|» role|Admin|

> Example responses

> 200 Response

```json
{
  "team": {
    "name": "New Team Name",
    "accounts": [
      {
        "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": null,
          "api_signature_requests_left": 1250
        },
        "role_code": "a"
      }
    ],
    "invited_accounts": [
      {
        "account_id": "8e239b5a50eac117fdd9a0e2359620aa57cb2463",
        "email_address": "george@hellofax.com",
        "is_locked": false,
        "is_paid_hs": false,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": 0,
          "documents_left": 3,
          "api_signature_requests_left": 0
        }
      }
    ],
    "invited_emails": [
      "invite_1@example.com",
      "invite_2@example.com",
      "invite_3@example.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="add-user-to-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamGetResponse](#schemateamgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Create Team

<a id="opIdteamCreate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "New Team Name"
  }'
```

`POST /team/create`

Creates a new Team and makes you a member. You must not currently belong to a Team to invoke.

> Body parameter

```json
{
  "name": "New Team Name"
}
```

<h3 id="create-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TeamCreateRequest](#schemateamcreaterequest)|true|none|
|» name|body|string|false|The name of your Team.|

> Example responses

> 200 Response

```json
{
  "team": {
    "name": "New Team Name",
    "accounts": [
      {
        "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": null,
          "api_signature_requests_left": 1250
        },
        "role_code": "a"
      }
    ],
    "invited_accounts": [],
    "invited_emails": []
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamGetResponse](#schemateamgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Delete Team

<a id="opIdteamDelete"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team/destroy \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /team/destroy`

Deletes your Team. Can only be invoked when you have a Team with only one member (yourself).

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="delete-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get Team

<a id="opIdteamGet"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /team`

Returns information about your Team as well as a list of its members. If you do not belong to a Team, a 404 error with an error_name of "not_found" will be returned.

> Example responses

> 200 Response

```json
{
  "team": {
    "name": "Team Dropbox Sign",
    "accounts": [
      {
        "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": null,
          "api_signature_requests_left": 1250
        },
        "role_code": "a"
      },
      {
        "account_id": "d3d3d7b98d80b67d07740df7cdfd1f49fa8e2b82",
        "email_address": "teammate@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": null,
          "api_signature_requests_left": 1250
        },
        "role_code": "m"
      }
    ],
    "invited_accounts": [
      {
        "account_id": "8e239b5a50eac117fdd9a0e2359620aa57cb2463",
        "email_address": "george@hellofax.com",
        "is_locked": false,
        "is_paid_hs": false,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": 0,
          "documents_left": 3,
          "api_signature_requests_left": 0
        }
      }
    ],
    "invited_emails": [
      "invite_1@example.com",
      "invite_2@example.com",
      "invite_3@example.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamGetResponse](#schemateamgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Update Team

<a id="opIdteamUpdate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "New Team Name"
  }'
```

`PUT /team`

Updates the name of your Team.

> Body parameter

```json
{
  "name": "New Team Name"
}
```

<h3 id="update-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TeamUpdateRequest](#schemateamupdaterequest)|true|none|
|» name|body|string|false|The name of your Team.|

> Example responses

> 200 Response

```json
{
  "team": {
    "name": "New Team Name",
    "accounts": [
      {
        "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": null,
          "api_signature_requests_left": 1250
        },
        "role_code": "a"
      }
    ],
    "invited_accounts": [
      {
        "account_id": "8e239b5a50eac117fdd9a0e2359620aa57cb2463",
        "email_address": "george@hellofax.com",
        "is_locked": false,
        "is_paid_hs": false,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": 0,
          "documents_left": 3,
          "api_signature_requests_left": 0
        }
      }
    ],
    "invited_emails": [
      "invite_1@example.com",
      "invite_2@example.com",
      "invite_3@example.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="update-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamGetResponse](#schemateamgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get Team Info

<a id="opIdteamInfo"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team/info \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /team/info`

Provides information about a team.

<h3 id="get-team-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_id|query|string|false|The id of the team.|

> Example responses

> 200 Response

```json
{
  "team": {
    "team_id": "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
    "name": "Team A",
    "num_sub_teams": 4,
    "num_members": 0,
    "parent_team": {
      "team_id": "89dc8eea8361bf7dc760b09004856a9d4eae8faa",
      "name": "Root Team"
    }
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-team-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamGetInfoResponse](#schemateamgetinforesponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## List Team Invites

<a id="opIdteamInvites"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team/invites \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /team/invites`

Provides a list of team invites (and their roles).

<h3 id="list-team-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_address|query|string|false|The email address for which to display the team invites.|

> Example responses

> 200 Response

```json
{
  "team_invites": [
    {
      "email_address": "user@dropboxsign.com",
      "team_id": "e51f544655faa0f79e2a811c94eacaadf854162c",
      "role": "Member",
      "sent_at": 1663261509,
      "redeemed_at": null,
      "expires_at": 1663263958
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="list-team-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamInvitesResponse](#schemateaminvitesresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## List Team Members

<a id="opIdteamMembers"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team/members/4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /team/members/{team_id}`

Provides a paginated list of members (and their roles) that belong to a given team.

<h3 id="list-team-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_id|path|string|true|The id of the team that a member list is being requested from.|
|page|query|integer|false|Which page number of the team member list to return. Defaults to `1`.|
|page_size|query|integer|false|Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.|

> Example responses

> 200 Response

```json
{
  "list_info": {
    "page": 1,
    "num_pages": 1,
    "num_results": 2,
    "page_size": 20
  },
  "members": [
    {
      "account_id": "bb7e16df3cf8944a059ae908ba914539c1ce3d13",
      "email_address": "team-admin@example.com",
      "role": "Admin"
    },
    {
      "account_id": "29b09ebad6013a2b56cda80ccdc25847158e06a8",
      "email_address": "developer@example.com",
      "role": "Developer"
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="list-team-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamMembersResponse](#schemateammembersresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Remove User from Team

<a id="opIdteamRemoveMember"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team/remove_member \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "teammate@dropboxsign.com",
    "new_owner_email_address": "new_teammate@dropboxsign.com"
  }'
```

`POST /team/remove_member`

Removes the provided user Account from your Team. If the Account had an outstanding invitation to your Team, the invitation will be expired. If you choose to transfer documents from the removed Account to an Account provided in the `new_owner_email_address` parameter (available only for Enterprise plans), the response status code will be 201, which indicates that your request has been queued but not fully executed.

> Body parameter

```json
{
  "email_address": "teammate@dropboxsign.com",
  "new_owner_email_address": "new_teammate@dropboxsign.com"
}
```

<h3 id="remove-user-from-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TeamRemoveMemberRequest](#schemateamremovememberrequest)|true|none|
|» account_id|body|string|false|**account_id** or **email_address** is required. If both are provided, the account id prevails.<br><br>Account id to remove from your Team.|
|» email_address|body|string(email)|false|**account_id** or **email_address** is required. If both are provided, the account id prevails.<br><br>Email address of the Account to remove from your Team.|
|» new_owner_email_address|body|string(email)|false|The email address of an Account on this Team to receive all documents, templates, and API apps (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data will remain with the removed Account.<br><br>**NOTE:** Only available for Enterprise plans.|
|» new_team_id|body|string|false|Id of the new Team.|
|» new_role|body|string|false|A new role member will take in a new Team.<br><br>**NOTE:** This parameter is used only if `new_team_id` is provided.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» new_role|Member|
|» new_role|Developer|
|» new_role|Team Manager|
|» new_role|Admin|

> Example responses

> 201 Response

```json
{
  "team": {
    "name": "Team Dropbox Sign",
    "accounts": [
      {
        "account_id": "5008b25c7f67153e57d5a357b1687968068fb465",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": true,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": null,
          "documents_left": null,
          "api_signature_requests_left": 1250
        },
        "role_code": "a"
      }
    ],
    "invited_accounts": [
      {
        "account_id": "8e239b5a50eac117fdd9a0e2359620aa57cb2463",
        "email_address": "george@hellofax.com",
        "is_locked": false,
        "is_paid_hs": false,
        "is_paid_hf": false,
        "quotas": {
          "templates_left": 0,
          "documents_left": 3,
          "api_signature_requests_left": 0
        }
      }
    ],
    "invited_emails": [
      "invite_1@example.com",
      "invite_2@example.com",
      "invite_3@example.com"
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="remove-user-from-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[TeamGetResponse](#schemateamgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|201|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|201|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## List Sub Teams

<a id="opIdteamSubTeams"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/team/sub_teams/4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /team/sub_teams/{team_id}`

Provides a paginated list of sub teams that belong to a given team.

<h3 id="list-sub-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team_id|path|string|true|The id of the parent Team.|
|page|query|integer|false|Which page number of the SubTeam List to return. Defaults to `1`.|
|page_size|query|integer|false|Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.|

> Example responses

> 200 Response

```json
{
  "list_info": {
    "page": 1,
    "num_pages": 1,
    "num_results": 4,
    "page_size": 20
  },
  "sub_teams": [
    {
      "team_id": "29b09ebad6013a2b56cda80ccdc25847158e06a8",
      "name": "Team A"
    },
    {
      "team_id": "d6218f881ec36ae628507fa60c8099934730b7ca",
      "name": "Team B"
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="list-sub-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamSubTeamsResponse](#schemateamsubteamsresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

<h1 id="dropbox-sign-api-unclaimed-draft">Unclaimed Draft</h1>

A group of documents that a user can take ownership of via the claim URL

## Create Unclaimed Draft

<a id="opIdunclaimedDraftCreate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/unclaimed_draft/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ],
    "signers": [
      {
        "email_address": "jack@example.com",
        "name": "Jack",
        "order": 0
      }
    ],
    "type": "request_signature",
    "test_mode": true
  }'
```

`POST /unclaimed_draft/create`

Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the "Sign and send" or the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.

> Body parameter

```json
{
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ],
  "signers": [
    {
      "email_address": "jack@example.com",
      "name": "Jack",
      "order": 0
    }
  ],
  "type": "request_signature",
  "test_mode": true
}
```

<h3 id="create-unclaimed-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UnclaimedDraftCreateRequest](#schemaunclaimeddraftcreaterequest)|true|none|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» attachments|body|[[SubAttachment](#schemasubattachment)]|false|A list describing the attachments|
|» cc_email_addresses|body|[string(email)]|false|The email addresses that should be CCed.|
|» client_id|body|string|false|Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|» field_options|body|[SubFieldOptions](#schemasubfieldoptions)|false|This allows the requester to specify field options for a signature request.|
|» form_field_groups|body|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|» form_field_rules|body|[[SubFormFieldRule](#schemasubformfieldrule)]|false|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|» form_fields_per_document|body|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|» hide_text_tags|body|boolean|false|Send with a value of `true` if you wish to enable automatic Text Tag removal. Defaults to `false`. When using Text Tags it is preferred that you set this to `false` and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» show_progress_stepper|body|boolean|false|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|» signers|body|[[SubUnclaimedDraftSigner](#schemasubunclaimeddraftsigner)]|false|Add Signers to your Unclaimed Draft Signature Request.|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|» type|body|string|true|The type of unclaimed draft to create. Use `send_document` to create a claimable file, and `request_signature` for a claimable signature request. If the type is `request_signature` then signers name and email_address are not optional.|
|» use_preexisting_fields|body|boolean|false|Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.|
|» use_text_tags|body|boolean|false|Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.|
|» ignore_text_tags_extraction_errors|body|boolean|false|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.<br><br>**NOTE:** This does not correspond to the **expires_at** returned in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|send_document|
|» type|request_signature|

> Example responses

> 200 Response

```json
{
  "unclaimed_draft": {
    "claim_url": "https://app.hellosign.com/send/resendDocs?root_snapshot_guids[]=7f967b7d06e154394eab693febedf61e8ebe49eb&amp;snapshot_access_guids[]=fb848631&amp;root_snapshot_guids[]=7aedaf31e12edf9f2672a0b2ddf028aca670e101&amp;snapshot_access_guids[]=f398ef87",
    "signing_redirect_url": null,
    "expires_at": 1414093891,
    "test_mode": true
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-unclaimed-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[UnclaimedDraftCreateResponse](#schemaunclaimeddraftcreateresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Create Embedded Unclaimed Draft

<a id="opIdunclaimedDraftCreateEmbedded"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/unclaimed_draft/create_embedded \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ],
    "requester_email_address": "jack@dropboxsign.com",
    "test_mode": true
  }'
```

`POST /unclaimed_draft/create_embedded`

Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

> Body parameter

```json
{
  "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ],
  "requester_email_address": "jack@dropboxsign.com",
  "test_mode": true
}
```

<h3 id="create-embedded-unclaimed-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UnclaimedDraftCreateEmbeddedRequest](#schemaunclaimeddraftcreateembeddedrequest)|true|none|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» allow_ccs|body|boolean|false|This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft.|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» allow_reassign|body|boolean|false|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|» attachments|body|[[SubAttachment](#schemasubattachment)]|false|A list describing the attachments|
|» cc_email_addresses|body|[string(email)]|false|The email addresses that should be CCed.|
|» client_id|body|string|true|Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|» editor_options|body|[SubEditorOptions](#schemasubeditoroptions)|false|This allows the requester to specify editor options when a preparing a document|
|» field_options|body|[SubFieldOptions](#schemasubfieldoptions)|false|This allows the requester to specify field options for a signature request.|
|» force_signer_page|body|boolean|false|Provide users the ability to review/edit the signers.|
|» force_subject_message|body|boolean|false|Provide users the ability to review/edit the subject and message.|
|» form_field_groups|body|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|» form_field_rules|body|[[SubFormFieldRule](#schemasubformfieldrule)]|false|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|» form_fields_per_document|body|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|» hide_text_tags|body|boolean|false|Send with a value of `true` if you wish to enable automatic Text Tag removal. Defaults to `false`. When using Text Tags it is preferred that you set this to `false` and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details.|
|» hold_request|body|boolean|false|The request from this draft will not automatically send to signers post-claim if set to `true`. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.|
|» is_for_embedded_signing|body|boolean|false|The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» requester_email_address|body|string(email)|true|The email address of the user that should be designated as the requester of this draft, if the draft type is `request_signature`.|
|» requesting_redirect_url|body|string|false|The URL you want signers redirected to after they successfully request a signature.|
|» show_preview|body|boolean|false|This allows the requester to enable the editor/preview experience.<br><br>- `show_preview=true`: Allows requesters to enable the editor/preview experience.<br>- `show_preview=false`: Allows requesters to disable the editor/preview experience.|
|» show_progress_stepper|body|boolean|false|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|» signers|body|[[SubUnclaimedDraftSigner](#schemasubunclaimeddraftsigner)]|false|Add Signers to your Unclaimed Draft Signature Request.|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» skip_me_now|body|boolean|false|Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|» type|body|string|false|The type of the draft. By default this is `request_signature`, but you can set it to `send_document` if you want to self sign a document and download it.|
|» use_preexisting_fields|body|boolean|false|Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.|
|» use_text_tags|body|boolean|false|Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.|
|» ignore_text_tags_extraction_errors|body|boolean|false|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|» populate_auto_fill_fields|body|boolean|false|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|» expires_at|body|integer \| null|false|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.<br><br>**NOTE:** This does not correspond to the **expires_at** returned in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|send_document|
|» type|request_signature|

> Example responses

> 200 Response

```json
{
  "unclaimed_draft": {
    "claim_url": "https://embedded.hellosign.com/prep-and-send/embedded-request?cached_params_token=30c4d8df776038c2fa5f7094c3718937",
    "signing_redirect_url": null,
    "expires_at": 1414093891,
    "test_mode": true,
    "signature_request_id": "340e9843ac552b5170ee9c374d67e312f53ca129",
    "requesting_redirect_url": null
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-embedded-unclaimed-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[UnclaimedDraftCreateResponse](#schemaunclaimeddraftcreateresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Create Embedded Unclaimed Draft with Template

<a id="opIdunclaimedDraftCreateEmbeddedWithTemplate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/unclaimed_draft/create_embedded_with_template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
    "template_ids": [
      "61a832ff0d8423f91d503e76bfbcc750f7417c78"
    ],
    "requester_email_address": "jack@dropboxsign.com",
    "signers": [
      {
        "role": "Client",
        "name": "George",
        "email_address": "george@example.com"
      }
    ],
    "ccs": [
      {
        "role": "Accounting",
        "email_address": "accounting@dropboxsign.com"
      }
    ],
    "test_mode": false
  }'
```

`POST /unclaimed_draft/create_embedded_with_template`

Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

> Body parameter

```json
{
  "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  "template_ids": [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78"
  ],
  "requester_email_address": "jack@dropboxsign.com",
  "signers": [
    {
      "role": "Client",
      "name": "George",
      "email_address": "george@example.com"
    }
  ],
  "ccs": [
    {
      "role": "Accounting",
      "email_address": "accounting@dropboxsign.com"
    }
  ],
  "test_mode": false
}
```

<h3 id="create-embedded-unclaimed-draft-with-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UnclaimedDraftCreateEmbeddedWithTemplateRequest](#schemaunclaimeddraftcreateembeddedwithtemplaterequest)|true|none|
|» allow_decline|body|boolean|false|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|» allow_reassign|body|boolean|false|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|» ccs|body|[[SubCC](#schemasubcc)]|false|Add CC email recipients. Required when a CC role exists for the Template.|
|» client_id|body|string|true|Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.|
|» custom_fields|body|[[SubCustomField](#schemasubcustomfield)]|false|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|» editor_options|body|[SubEditorOptions](#schemasubeditoroptions)|false|This allows the requester to specify editor options when a preparing a document|
|» field_options|body|[SubFieldOptions](#schemasubfieldoptions)|false|This allows the requester to specify field options for a signature request.|
|» files|body|[string(binary)]|false|Use `files[]` to append additional files to the signature request being created from the template. Dropbox Sign will parse the files for [text tags](https://app.hellosign.com/api/textTagsWalkthrough) and append it to the signature request. Text tags for signers not on the template(s) will be ignored.<br><br>**files** or **file_urls[]** is required, but not both.|
|» file_urls|body|[string]|false|Use file_urls[] to append additional files to the signature request being created from the template. Dropbox Sign will download the file, then parse it for [text tags](https://app.hellosign.com/api/textTagsWalkthrough), and append to the signature request. Text tags for signers not on the template(s) will be ignored.<br><br>**files** or **file_urls[]** is required, but not both.|
|» force_signer_roles|body|boolean|false|Provide users the ability to review/edit the template signer roles.|
|» force_subject_message|body|boolean|false|Provide users the ability to review/edit the template subject and message.|
|» hold_request|body|boolean|false|The request from this draft will not automatically send to signers post-claim if set to 1. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.|
|» is_for_embedded_signing|body|boolean|false|The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.|
|» message|body|string|false|The custom message in the email that will be sent to the signers.|
|» metadata|body|object|false|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|» » **additionalProperties**|body|object|false|none|
|» preview_only|body|boolean|false|This allows the requester to enable the preview experience (i.e. does not allow the requester's end user to add any additional fields via the editor).<br><br>- `preview_only=true`: Allows requesters to enable the preview only experience.<br>- `preview_only=false`: Allows requesters to disable the preview only experience.<br><br>**NOTE:** This parameter overwrites `show_preview=1` (if set).|
|» requester_email_address|body|string(email)|true|The email address of the user that should be designated as the requester of this draft.|
|» requesting_redirect_url|body|string|false|The URL you want signers redirected to after they successfully request a signature.|
|» show_preview|body|boolean|false|This allows the requester to enable the editor/preview experience.<br><br>- `show_preview=true`: Allows requesters to enable the editor/preview experience.<br>- `show_preview=false`: Allows requesters to disable the editor/preview experience.|
|» show_progress_stepper|body|boolean|false|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|» signers|body|[[SubUnclaimedDraftTemplateSigner](#schemasubunclaimeddrafttemplatesigner)]|false|Add Signers to your Templated-based Signature Request.|
|» signing_options|body|[SubSigningOptions](#schemasubsigningoptions)|false|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» skip_me_now|body|boolean|false|Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.|
|» subject|body|string|false|The subject in the email that will be sent to the signers.|
|» template_ids|body|[string]|true|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the templates will be used.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|» title|body|string|false|The title you want to assign to the SignatureRequest.|
|» populate_auto_fill_fields|body|boolean|false|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|» allow_ccs|body|boolean|false|This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft.|

> Example responses

> 200 Response

```json
{
  "unclaimed_draft": {
    "claim_url": "https://embedded.hellosign.com/prep-and-send/embedded-request?cached_params_token=30c4d8df776038c2fa5f7094c3718937",
    "signature_request_id": "8e55b3880c62497791dda0f3b4181cfd95f7ddb4",
    "signing_redirect_url": null,
    "requesting_redirect_url": null,
    "test_mode": true
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-embedded-unclaimed-draft-with-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[UnclaimedDraftCreateResponse](#schemaunclaimeddraftcreateresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Edit and Resend Unclaimed Draft

<a id="opIdunclaimedDraftEditAndResend"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/unclaimed_draft/edit_and_resend/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
    "test_mode": false
  }'
```

`POST /unclaimed_draft/edit_and_resend/{signature_request_id}`

Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester's email address will remain unchanged if `requester_email_address` parameter is not set.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

> Body parameter

```json
{
  "client_id": "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  "test_mode": false
}
```

<h3 id="edit-and-resend-unclaimed-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_request_id|path|string|true|The ID of the signature request to edit and resend.|
|body|body|[UnclaimedDraftEditAndResendRequest](#schemaunclaimeddrafteditandresendrequest)|true|none|
|» client_id|body|string|true|Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.|
|» editor_options|body|[SubEditorOptions](#schemasubeditoroptions)|false|This allows the requester to specify editor options when a preparing a document|
|» is_for_embedded_signing|body|boolean|false|The request created from this draft will also be signable in embedded mode if set to `true`.|
|» requester_email_address|body|string(email)|false|The email address of the user that should be designated as the requester of this draft. If not set, original requester's email address will be used.|
|» requesting_redirect_url|body|string|false|The URL you want signers redirected to after they successfully request a signature.|
|» show_progress_stepper|body|boolean|false|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|» signing_redirect_url|body|string|false|The URL you want signers redirected to after they successfully sign.|
|» test_mode|body|boolean|false|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|

> Example responses

> 200 Response

```json
{
  "unclaimed_draft": {
    "claim_url": "https://embedded.hellosign.com/prep-and-send/embedded-request?cached_params_token=30c4d8df776038c2fa5f7094c3718937",
    "signature_request_id": "8e55b3880c62497791dda0f3b4181cfd95f7ddb4",
    "signing_redirect_url": null,
    "requesting_redirect_url": null,
    "test_mode": true,
    "expires_at": 1414093891
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="edit-and-resend-unclaimed-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[UnclaimedDraftCreateResponse](#schemaunclaimeddraftcreateresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

<h1 id="dropbox-sign-api-embedded">Embedded</h1>

An object that contains necessary information to set up embedded signing

## Get Embedded Template Edit URL

<a id="opIdembeddedEditUrl"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/embedded/edit_url/f57db65d3f933b5316d398057a36176831451a35 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "cc_roles": [
      ""
    ],
    "merge_fields": []
  }'
```

`POST /embedded/edit_url/{template_id}`

Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.

> Body parameter

```json
{
  "cc_roles": [
    ""
  ],
  "merge_fields": []
}
```

<h3 id="get-embedded-template-edit-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The id of the template to edit.|
|body|body|[EmbeddedEditUrlRequest](#schemaembeddedediturlrequest)|true|none|
|» allow_edit_ccs|body|boolean|false|This allows the requester to enable/disable to add or change CC roles when editing the template.|
|» cc_roles|body|[string]|false|The CC roles that must be assigned when using the template to send a signature request. To remove all CC roles, pass in a single role with no name. For use in a POST request.|
|» editor_options|body|[SubEditorOptions](#schemasubeditoroptions)|false|This allows the requester to specify editor options when a preparing a document|
|» force_signer_roles|body|boolean|false|Provide users the ability to review/edit the template signer roles.|
|» force_subject_message|body|boolean|false|Provide users the ability to review/edit the template subject and message.|
|» merge_fields|body|[[SubMergeField](#schemasubmergefield)]|false|Add additional merge fields to the template, which can be used used to pre-fill data by passing values into signature requests made with that template.<br><br>Remove all merge fields on the template by passing an empty array `[]`.|
|» preview_only|body|boolean|false|This allows the requester to enable the preview experience (i.e. does not allow the requester's end user to add any additional fields via the editor).<br><br>**NOTE:** This parameter overwrites `show_preview=true` (if set).|
|» show_preview|body|boolean|false|This allows the requester to enable the editor/preview experience.|
|» show_progress_stepper|body|boolean|false|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|» test_mode|body|boolean|false|Whether this is a test, locked templates will only be available for editing if this is set to `true`. Defaults to `false`.|

> Example responses

> 200 Response

```json
{
  "embedded": {
    "edit_url": "https://app.hellosign.com/editor/embeddedTemplate?token=70ca8e5779c9a931125db09f3170efc1&amp;root_snapshot_guids[]=a97ce534aec6cbe09e70cdd55112e31bd320ed00&amp;edited_template_guid=61a832ff0d8423f91d503e76bfbcc750f7417c78&amp;guid=56ecaf0659aa29215d2ee489c0c88ff8c9496099&amp;force_signer_input=1",
    "expires_at": 1634313821
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-embedded-template-edit-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[EmbeddedEditUrlResponse](#schemaembeddedediturlresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get Embedded Sign URL

<a id="opIdembeddedSignUrl"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/embedded/sign_url/50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /embedded/sign_url/{signature_id}`

Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.

<h3 id="get-embedded-sign-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signature_id|path|string|true|The id of the signature to get a signature url for.|

> Example responses

> 200 Response

```json
{
  "embedded": {
    "sign_url": "https://app.hellosign.com/editor/embeddedSign?signature_id=50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b&amp;token=b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
    "expires_at": 1634313821
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-embedded-sign-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[EmbeddedSignUrlResponse](#schemaembeddedsignurlresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

<h1 id="dropbox-sign-api-api-app">Api App</h1>

Contains information about an API App

## Create API App

<a id="opIdapiAppCreate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/api_app \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "My Production App",
    "custom_logo_file": "CustomLogoFile.png",
    "domains": [
      "example.com"
    ],
    "oauth": {
      "callback_url": "https://example.com/oauth",
      "scopes": [
        "basic_account_info",
        "request_signature"
      ]
    },
    "white_labeling_options": {
      "primary_button_color": "#00b3e6",
      "primary_button_text_color": "#ffffff"
    }
  }'
```

`POST /api_app`

Creates a new API App.

> Body parameter

```json
{
  "name": "My Production App",
  "custom_logo_file": "CustomLogoFile.png",
  "domains": [
    "example.com"
  ],
  "oauth": {
    "callback_url": "https://example.com/oauth",
    "scopes": [
      "basic_account_info",
      "request_signature"
    ]
  },
  "white_labeling_options": {
    "primary_button_color": "#00b3e6",
    "primary_button_text_color": "#ffffff"
  }
}
```

<h3 id="create-api-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiAppCreateRequest](#schemaapiappcreaterequest)|true|none|
|» callback_url|body|string|false|The URL at which the ApiApp should receive event callbacks.|
|» custom_logo_file|body|string(binary)|false|An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)|
|» domains|body|[string]|true|The domain names the ApiApp will be associated with.|
|» name|body|string|true|The name you want to assign to the ApiApp.|
|» oauth|body|[SubOAuth](#schemasuboauth)|false|OAuth related parameters.|
|» options|body|[SubOptions](#schemasuboptions)|false|Additional options supported by API App.|
|» white_labeling_options|body|[SubWhiteLabelingOptions](#schemasubwhitelabelingoptions)|false|An array of elements and values serialized to a string, to be used to customize the app's signer page. (Only applies to some API plans)<br><br>Take a look at our [white labeling guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.|

> Example responses

> 201 Response

```json
{
  "api_app": {
    "callback_url": null,
    "client_id": "0dd3b823a682527788c4e40cb7b6f7e9",
    "created_at": 1436232339,
    "domains": [
      "example.com"
    ],
    "is_approved": false,
    "name": "My Production App",
    "oauth": {
      "callback_url": "https://example.com/oauth",
      "scopes": [
        "basic_account_info",
        "request_signature"
      ],
      "secret": "98891a1b59f312d04cd88e4e0c498d75"
    },
    "owner_account": {
      "account_id": "dc5deeb9e10b044c591ef2475aafad1d1d3bd888",
      "email_address": "john@example.com"
    },
    "white_labeling_options": {
      "primary_button_color": "#00b3e6",
      "primary_button_text_color": "#ffffff"
    }
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="create-api-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiAppGetResponse](#schemaapiappgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|201|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|201|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Get API App

<a id="opIdapiAppGet"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/api_app/0dd3b823a682527788c4e40cb7b6f7e9 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api_app/{client_id}`

Returns an object with information about an API App.

<h3 id="get-api-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|path|string|true|The client id of the API App to retrieve.|

> Example responses

> 200 Response

```json
{
  "api_app": {
    "callback_url": null,
    "client_id": "0dd3b823a682527788c4e40cb7b6f7e9",
    "created_at": 1436232339,
    "domains": [
      "example.com"
    ],
    "is_approved": true,
    "name": "My Production App",
    "oauth": {
      "callback_url": "https://example.com/oauth",
      "scopes": [
        "basic_account_info",
        "request_signature"
      ],
      "secret": "98891a1b59f312d04cd88e4e0c498d75"
    },
    "owner_account": {
      "account_id": "dc5deeb9e10b044c591ef2475aafad1d1d3bd888",
      "email_address": "john@example.com"
    }
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-api-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiAppGetResponse](#schemaapiappgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Update API App

<a id="opIdapiAppUpdate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/api_app/0dd3b823a682527788c4e40cb7b6f7e9 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "New Name",
    "callback_url": "https://example.com/dropboxsign",
    "custom_logo_file": "CustomLogoFile.png",
    "domains": [
      "example.com"
    ],
    "oauth": {
      "callback_url": "https://example.com/oauth",
      "scopes": [
        "basic_account_info",
        "request_signature"
      ]
    },
    "white_labeling_options": {
      "primary_button_color": "#00b3e6",
      "primary_button_text_color": "#ffffff"
    }
  }'
```

`PUT /api_app/{client_id}`

Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.

> Body parameter

```json
{
  "name": "New Name",
  "callback_url": "https://example.com/dropboxsign",
  "custom_logo_file": "CustomLogoFile.png",
  "domains": [
    "example.com"
  ],
  "oauth": {
    "callback_url": "https://example.com/oauth",
    "scopes": [
      "basic_account_info",
      "request_signature"
    ]
  },
  "white_labeling_options": {
    "primary_button_color": "#00b3e6",
    "primary_button_text_color": "#ffffff"
  }
}
```

<h3 id="update-api-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|path|string|true|The client id of the API App to update.|
|body|body|[ApiAppUpdateRequest](#schemaapiappupdaterequest)|true|none|
|» callback_url|body|string|false|The URL at which the API App should receive event callbacks.|
|» custom_logo_file|body|string(binary)|false|An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)|
|» domains|body|[string]|false|The domain names the ApiApp will be associated with.|
|» name|body|string|false|The name you want to assign to the ApiApp.|
|» oauth|body|[SubOAuth](#schemasuboauth)|false|OAuth related parameters.|
|» options|body|[SubOptions](#schemasuboptions)|false|Additional options supported by API App.|
|» white_labeling_options|body|[SubWhiteLabelingOptions](#schemasubwhitelabelingoptions)|false|An array of elements and values serialized to a string, to be used to customize the app's signer page. (Only applies to some API plans)<br><br>Take a look at our [white labeling guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.|

> Example responses

> 200 Response

```json
{
  "api_app": {
    "callback_url": "https://example.com/dropboxsign",
    "client_id": "0dd3b823a682527788c4e40cb7b6f7e9",
    "created_at": 1436232339,
    "domains": [
      "example.com"
    ],
    "is_approved": false,
    "name": "New Name",
    "oauth": {
      "callback_url": "https://example.com/oauth",
      "scopes": [
        "basic_account_info",
        "request_signature"
      ],
      "secret": "98891a1b59f312d04cd88e4e0c498d75"
    },
    "owner_account": {
      "account_id": "dc5deeb9e10b044c591ef2475aafad1d1d3bd888",
      "email_address": "john@example.com"
    },
    "white_labeling_options": {
      "primary_button_color": "#00b3e6",
      "primary_button_text_color": "#ffffff"
    }
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="update-api-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiAppGetResponse](#schemaapiappgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## Delete API App

<a id="opIdapiAppDelete"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/api_app/0dd3b823a682527788c4e40cb7b6f7e9 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api_app/{client_id}`

Deletes an API App. Can only be invoked for apps you own.

<h3 id="delete-api-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|path|string|true|The client id of the API App to delete.|

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="delete-api-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|204|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|204|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## List API Apps

<a id="opIdapiAppList"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/api_app/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api_app/list`

Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.

<h3 id="list-api-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Which page number of the API App List to return. Defaults to `1`.|
|page_size|query|integer|false|Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.|

> Example responses

> 200 Response

```json
{
  "api_apps": [
    {
      "callback_url": null,
      "client_id": "0dd3b823a682527788c4e40cb7b6f7e9",
      "created_at": 1436232339,
      "domains": [
        "example.com"
      ],
      "is_approved": true,
      "name": "My Production App",
      "oauth": {
        "callback_url": "https://example.com/oauth",
        "scopes": [
          "basic_account_info",
          "request_signature"
        ],
        "secret": "98891a1b59f312d04cd88e4e0c498d75"
      },
      "owner_account": {
        "account_id": "dc5deeb9e10b044c591ef2475aafad1d1d3bd888",
        "email_address": "john@example.com"
      }
    },
    {
      "callback_url": null,
      "client_id": "bff6d867fafcca27554cf89b1ca98793",
      "created_at": 1433458421,
      "domains": [
        "example.com"
      ],
      "is_approved": false,
      "name": "My Other App",
      "oauth": null,
      "owner_account": {
        "account_id": "dc5deeb9e10b044c591ef2475aafad1d1d3bd888",
        "email_address": "john@example.com"
      }
    }
  ],
  "list_info": {
    "num_pages": 1,
    "num_results": 2,
    "page": 1,
    "page_size": 20
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="list-api-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiAppListResponse](#schemaapiapplistresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

<h1 id="dropbox-sign-api-oauth">OAuth</h1>

OAuth allows you to perform actions on behalf of other users after they grant you the authorization to do so. For example, you could send signature requests on behalf of your users.

We recommend using our [OAuth Walkthrough](https://app.hellosign.com/api/oauthWalkthrough) for more detailed instructions.

OAuth apps can either be set up to charge you, the **app owner**, or the **user you are acting on behalf of**. This choice is determined by which scopes you select for your app.

### OAuth scopes where app owner is charged
| Name | Value | Description |
|--|--|--|
| Basic Account Info (limited) | `basic_account_info` | Access basic account information, such as email address and name. |
| Send Signature Requests (limited) | `request_signature` | Send signature requests, access statuses and document files. |

### OAuth scopes where users are charged
| Name | Value | Description |
|--|--|--|
| Account Access | `account_access` | Access to basic account information, such as email address and name. |
| Signature Request Access | `signature_request_access` | Access to send, view, and update signature requests and to download document files. Signature requests must be made with oAuth token in order to access.  |
| Template Access | `template_access` | Access to view, create, and modify templates. |
| Team Access | `team_access` | Access to view and modify team settings and team members. |
| API App Access | `api_app_access` | Access to view, create, and modify embedded API apps. |

## OAuth Token Generate

<a id="opIdoauthTokenGenerate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/oauth/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "state": "900e06e2",
    "code": "1b0d28d90c86c141",
    "grant_type": "authorization_code",
    "client_id": "cc91c61d00f8bb2ece1428035716b",
    "client_secret": "1d14434088507ffa390e6f5528465"
  }'
```

`POST /oauth/token`

Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.

> Body parameter

```json
{
  "state": "900e06e2",
  "code": "1b0d28d90c86c141",
  "grant_type": "authorization_code",
  "client_id": "cc91c61d00f8bb2ece1428035716b",
  "client_secret": "1d14434088507ffa390e6f5528465"
}
```

<h3 id="oauth-token-generate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OAuthTokenGenerateRequest](#schemaoauthtokengeneraterequest)|true|none|
|» client_id|body|string|true|The client id of the app requesting authorization.|
|» client_secret|body|string|true|The secret token of your app.|
|» code|body|string|true|The code passed to your callback when the user granted access.|
|» grant_type|body|string|true|When generating a new token use `authorization_code`.|
|» state|body|string|true|Same as the state you specified earlier.|

> Example responses

> 200 Response

```json
{
  "access_token": "NWNiOTMxOGFkOGVjMDhhNTAxZN2NkNjgxMjMwOWJiYTEzZTBmZGUzMjMThhMzYyMzc=",
  "token_type": "Bearer",
  "refresh_token": "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3",
  "expires_in": 86400,
  "state": "900e06e2"
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="oauth-token-generate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[OAuthTokenResponse](#schemaoauthtokenresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="success">
This operation does not require authentication
</aside>

## OAuth Token Refresh

<a id="opIdoauthTokenRefresh"></a>

> Code samples

```bash
curl 'https://api.hellosign.com/v3/oauth/token?refresh' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "grant_type": "refresh_token",
    "refresh_token": "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3"
  }'
```

`POST /oauth/token?refresh`

Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see `expires_in`), along with a refresh token that can be used to acquire a new access token after the current one has expired.

> Body parameter

```json
{
  "grant_type": "refresh_token",
  "refresh_token": "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3"
}
```

<h3 id="oauth-token-refresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OAuthTokenRefreshRequest](#schemaoauthtokenrefreshrequest)|true|none|
|» grant_type|body|string|true|When refreshing an existing token use `refresh_token`.|
|» refresh_token|body|string|true|The token provided when you got the expired access token.|
|» client_id|body|string|false|The client ID for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.|
|» client_secret|body|string|false|The client secret for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.|

> Example responses

> 200 Response

```json
{
  "access_token": "MDZhYzBlMGI1YzQ0ZjI1ZjYzYmUyNmMzZWQ5ZGNmOGYyNmQxMmMyMmQ2NmNiY2M3NW=",
  "expires_in": 86400,
  "refresh_token": "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3",
  "token_type": "Bearer"
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="oauth-token-refresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[OAuthTokenResponse](#schemaoauthtokenresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="dropbox-sign-api-fax-line">Fax Line</h1>

Contains information about the fax lines you and your team have created

## Add Fax Line User

<a id="opIdfaxLineAddUser"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax_line/add_user \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "number": "[FAX_NUMBER]",
    "email_address": "member@dropboxsign.com"
  }'
```

`PUT /fax_line/add_user`

Grants a user access to the specified Fax Line.

> Body parameter

```json
{
  "number": "[FAX_NUMBER]",
  "email_address": "member@dropboxsign.com"
}
```

<h3 id="add-fax-line-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FaxLineAddUserRequest](#schemafaxlineadduserrequest)|true|none|
|» number|body|string|true|The Fax Line number|
|» account_id|body|string|false|Account ID|
|» email_address|body|string(email)|false|Email address|

> Example responses

> 200 Response

```json
{
  "fax_line": {
    "number": "[FAX_NUMBER]",
    "created_at": 1723231831,
    "updated_at": 1723231831,
    "accounts": [
      {
        "account_id": "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": false,
        "is_paid_hf": true
      }
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="add-fax-line-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FaxLineResponse](#schemafaxlineresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Available Fax Line Area Codes

<a id="opIdfaxLineAreaCodeGet"></a>

> Code samples

```bash
curl 'https://api.hellosign.com/v3/fax_line/area_codes?country=US' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /fax_line/area_codes`

Returns a list of available area codes for a given state/province and city

<h3 id="get-available-fax-line-area-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|true|Filter area codes by country|
|state|query|string|false|Filter area codes by state|
|province|query|string|false|Filter area codes by province|
|city|query|string|false|Filter area codes by city|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|CA|
|country|US|
|country|UK|
|state|AK|
|state|AL|
|state|AR|
|state|AZ|
|state|CA|
|state|CO|
|state|CT|
|state|DC|
|state|DE|
|state|FL|
|state|GA|
|state|HI|
|state|IA|
|state|ID|
|state|IL|
|state|IN|
|state|KS|
|state|KY|
|state|LA|
|state|MA|
|state|MD|
|state|ME|
|state|MI|
|state|MN|
|state|MO|
|state|MS|
|state|MT|
|state|NC|
|state|ND|
|state|NE|
|state|NH|
|state|NJ|
|state|NM|
|state|NV|
|state|NY|
|state|OH|
|state|OK|
|state|OR|
|state|PA|
|state|RI|
|state|SC|
|state|SD|
|state|TN|
|state|TX|
|state|UT|
|state|VA|
|state|VT|
|state|WA|
|state|WI|
|state|WV|
|state|WY|
|province|AB|
|province|BC|
|province|MB|
|province|NB|
|province|NL|
|province|NT|
|province|NS|
|province|NU|
|province|ON|
|province|PE|
|province|QC|
|province|SK|
|province|YT|

> Example responses

> 200 Response

```json
{
  "area_codes": [
    209,
    213,
    310,
    323,
    408,
    415,
    424,
    510,
    530,
    559,
    562,
    619,
    626,
    650,
    657,
    661,
    669,
    707,
    714,
    747,
    760,
    805,
    818,
    831,
    858,
    909,
    916,
    925,
    949,
    951
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-available-fax-line-area-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FaxLineAreaCodeGetResponse](#schemafaxlineareacodegetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Purchase Fax Line

<a id="opIdfaxLineCreate"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax_line/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "area_code": 209,
    "country": "US"
  }'
```

`POST /fax_line/create`

Purchases a new Fax Line

> Body parameter

```json
{
  "area_code": 209,
  "country": "US"
}
```

<h3 id="purchase-fax-line-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FaxLineCreateRequest](#schemafaxlinecreaterequest)|true|none|
|» area_code|body|integer|true|Area code of the new Fax Line|
|» country|body|string|true|Country of the area code|
|» city|body|string|false|City of the area code|
|» account_id|body|string|false|Account ID of the account that will be assigned this new Fax Line|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» country|CA|
|» country|US|
|» country|UK|

> Example responses

> 200 Response

```json
{
  "fax_line": {
    "number": "[FAX_NUMBER]",
    "created_at": 1723231831,
    "updated_at": 1723231831,
    "accounts": [
      {
        "account_id": "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": false,
        "is_paid_hf": true
      }
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="purchase-fax-line-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FaxLineResponse](#schemafaxlineresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get Fax Line

<a id="opIdfaxLineGet"></a>

> Code samples

```bash
curl 'https://api.hellosign.com/v3/fax_line?number=123-123-1234' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /fax_line`

Returns the properties and settings of a Fax Line.

<h3 id="get-fax-line-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|string|true|The Fax Line number|

> Example responses

> 200 Response

```json
{
  "fax_line": {
    "number": "[FAX_NUMBER]",
    "created_at": 1723231831,
    "updated_at": 1723231831,
    "accounts": [
      {
        "account_id": "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": false,
        "is_paid_hf": true
      }
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-fax-line-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FaxLineResponse](#schemafaxlineresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete Fax Line

<a id="opIdfaxLineDelete"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax_line \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "number": "[FAX_NUMBER]"
  }'
```

`DELETE /fax_line`

Deletes the specified Fax Line from the subscription.

> Body parameter

```json
{
  "number": "[FAX_NUMBER]"
}
```

<h3 id="delete-fax-line-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FaxLineDeleteRequest](#schemafaxlinedeleterequest)|true|none|
|» number|body|string|true|The Fax Line number|

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="delete-fax-line-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List Fax Lines

<a id="opIdfaxLineList"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax_line/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /fax_line/list`

Returns the properties and settings of multiple Fax Lines.

<h3 id="list-fax-lines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|query|string|false|Account ID|
|page|query|integer|false|Which page number of the Fax Line List to return. Defaults to `1`.|
|page_size|query|integer|false|Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.|
|show_team_lines|query|boolean|false|Include Fax Lines belonging to team members in the list|

> Example responses

> 200 Response

```json
{
  "list_info": {
    "num_pages": 1,
    "num_results": 1,
    "page": 1,
    "page_size": 1
  },
  "fax_lines": [
    {
      "number": "[FAX_NUMBER]",
      "created_at": 1723231831,
      "updated_at": 1723231831,
      "accounts": [
        {
          "account_id": "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d",
          "email_address": "me@dropboxsign.com",
          "is_locked": false,
          "is_paid_hs": false,
          "is_paid_hf": true
        }
      ]
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="list-fax-lines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FaxLineListResponse](#schemafaxlinelistresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Remove Fax Line Access

<a id="opIdfaxLineRemoveUser"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax_line/remove_user \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "number": "[FAX_NUMBER]",
    "email_address": "member@dropboxsign.com"
  }'
```

`PUT /fax_line/remove_user`

Removes a user's access to the specified Fax Line

> Body parameter

```json
{
  "number": "[FAX_NUMBER]",
  "email_address": "member@dropboxsign.com"
}
```

<h3 id="remove-fax-line-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FaxLineRemoveUserRequest](#schemafaxlineremoveuserrequest)|true|none|
|» number|body|string|true|The Fax Line number|
|» account_id|body|string|false|Account ID of the user to remove access|
|» email_address|body|string(email)|false|Email address of the user to remove access|

> Example responses

> 200 Response

```json
{
  "fax_line": {
    "number": "[FAX_NUMBER]",
    "created_at": 1723231831,
    "updated_at": 1723231831,
    "accounts": [
      {
        "account_id": "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d",
        "email_address": "me@dropboxsign.com",
        "is_locked": false,
        "is_paid_hs": false,
        "is_paid_hf": true
      }
    ]
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="remove-fax-line-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FaxLineResponse](#schemafaxlineresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="dropbox-sign-api-document">Document</h1>

## Detect Document Fields

<a id="opIddocumentDetectFields"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/document/detect_fields \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "file": "string",
    "file_url": "http://example.com",
    "detection_mode": "annotations",
    "page_range": "0-2,5,7-9"
  }'
```

`POST /document/detect_fields`

Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.

> Body parameter

```json
{
  "file": "string",
  "file_url": "http://example.com",
  "detection_mode": "annotations",
  "page_range": "0-2,5,7-9"
}
```

<h3 id="detect-document-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DocumentFieldDetectionRequest](#schemadocumentfielddetectionrequest)|true|none|
|» file|body|string(binary)|false|The PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.|
|» file_url|body|string(uri)|false|The URL of the PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.|
|» detection_mode|body|string|true|The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|string|false|none|
|» page_range|body|string|false|The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`.|

> Example responses

> 200 Response

```json
{
  "detection_result": {
    "document_hash": "stringstringstringstringstringstringstringstringstringstringstri",
    "detection_mode": "annotations",
    "page_count": 0,
    "pages_analyzed": "all",
    "detected_at": 0,
    "form_fields_per_document": [
      {
        "document_index": 0,
        "api_id": "string",
        "height": 0,
        "name": "string",
        "page": 0,
        "required": true,
        "signer": "string",
        "type": "string",
        "width": 0,
        "x": 0,
        "y": 0
      }
    ],
    "form_field_groups": [
      {
        "group_id": "string",
        "group_label": "string",
        "requirement": "string"
      }
    ],
    "warnings": [
      {
        "warning_msg": "string",
        "warning_name": "string"
      }
    ],
    "errors": [
      {
        "error_msg": "string",
        "error_path": "string",
        "error_name": "string"
      }
    ],
    "suggestions": [
      "string"
    ]
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="detect-document-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DocumentFieldDetectionResponse](#schemadocumentfielddetectionresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

<h1 id="dropbox-sign-api-fax">Fax</h1>

## Get Fax

<a id="opIdfaxGet"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /fax/{fax_id}`

Returns information about a Fax

<h3 id="get-fax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fax_id|path|string|true|Fax ID|

> Example responses

> 200 Response

```json
{
  "fax": {
    "fax_id": "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d",
    "title": "example title",
    "original_title": "example original title",
    "subject": "example subject",
    "message": "example message",
    "metadata": [],
    "created_at": 1726774555,
    "sender": "me@dropboxsign.com",
    "transmissions": [
      {
        "recipient": "recipient@dropboxsign.com",
        "sender": "me@dropboxsign.com",
        "sent_at": 1723231831,
        "status_code": "success"
      }
    ],
    "files_url": "https://api.hellosign.com/v3/fax/files/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2"
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="get-fax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FaxGetResponse](#schemafaxgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete Fax

<a id="opIdfaxDelete"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /fax/{fax_id}`

Deletes the specified Fax from the system

<h3 id="delete-fax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fax_id|path|string|true|Fax ID|

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="delete-fax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|204|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|204|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Download Fax Files

<a id="opIdfaxFiles"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax/files/fa5c8a0b0f492d768749333ad6fcc214c111e967 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /fax/files/{fax_id}`

Downloads files associated with a Fax

<h3 id="download-fax-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fax_id|path|string|true|Fax ID|

> Example responses

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="download-fax-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Lists Faxes

<a id="opIdfaxList"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /fax/list`

Returns properties of multiple Faxes

<h3 id="lists-faxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Which page number of the Fax List to return. Defaults to `1`.|
|page_size|query|integer|false|Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.|

> Example responses

> 200 Response

```json
{
  "list_info": {
    "num_pages": 1,
    "num_results": 1,
    "page": 1,
    "page_size": 1
  },
  "faxes": [
    {
      "fax_id": "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d",
      "title": "example title",
      "original_title": "example original title",
      "subject": "example subject",
      "message": "example message",
      "metadata": [],
      "created_at": 1726774555,
      "sender": "me@dropboxsign.com",
      "transmissions": [
        {
          "recipient": "recipient@dropboxsign.com",
          "sender": "me@dropboxsign.com",
          "sent_at": 1723231831,
          "status_code": "success"
        }
      ],
      "files_url": "https://api.hellosign.com/v3/fax/files/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2"
    }
  ]
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="lists-faxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FaxListResponse](#schemafaxlistresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Send Fax

<a id="opIdfaxSend"></a>

> Code samples

```bash
curl https://api.hellosign.com/v3/fax/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "file_urls": [
      "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
    ],
    "test_mode": "true",
    "recipient": "16690000001",
    "sender": "16690000000",
    "cover_page_to": "Jill Fax",
    "cover_page_message": "I'\''m sending you a fax!",
    "cover_page_from": "Faxer Faxerson",
    "title": "This is what the fax is about!"
  }'
```

`POST /fax/send`

Creates and sends a new Fax with the submitted file(s)

> Body parameter

```json
{
  "file_urls": [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
  ],
  "test_mode": "true",
  "recipient": "16690000001",
  "sender": "16690000000",
  "cover_page_to": "Jill Fax",
  "cover_page_message": "I'm sending you a fax!",
  "cover_page_from": "Faxer Faxerson",
  "title": "This is what the fax is about!"
}
```

<h3 id="send-fax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FaxSendRequest](#schemafaxsendrequest)|true|none|
|» recipient|body|string|true|Recipient of the fax <br>Can be a phone number in E.164 format or email address|
|» sender|body|string|false|Fax Send From Sender (used only with fax number)|
|» files|body|[string(binary)]|false|Use `files[]` to indicate the uploaded file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» file_urls|body|[string]|false|Use `file_urls[]` to have Dropbox Fax download the file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|» test_mode|body|boolean|false|API Test Mode Setting|
|» cover_page_to|body|string|false|Fax cover page recipient information|
|» cover_page_from|body|string|false|Fax cover page sender information|
|» cover_page_message|body|string|false|Fax Cover Page Message|
|» title|body|string|false|Fax Title|

> Example responses

> 200 Response

```json
{
  "fax": {
    "fax_id": "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d",
    "title": "example title",
    "original_title": "example original title",
    "subject": "example subject",
    "message": "example message",
    "metadata": [],
    "created_at": 1726774555,
    "sender": "me@dropboxsign.com",
    "transmissions": [
      {
        "recipient": "recipient@dropboxsign.com",
        "sender": "me@dropboxsign.com",
        "sent_at": 1723231831,
        "status_code": "success"
      }
    ],
    "files_url": "https://api.hellosign.com/v3/fax/files/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2"
  }
}
```

> 4XX Response

```json
{
  "error": {
    "error_msg": "This value should not be blank",
    "error_path": "cc_email_addresses[0]",
    "error_name": "bad_request"
  }
}
```

<h3 id="send-fax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FaxGetResponse](#schemafaxgetresponse)|
|4XX|Client Error|failed_operation|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer|int32|The maximum number of requests per hour that you can make.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests remaining in the current rate limit window.|
|200|X-Ratelimit-Reset|integer|int64|The Unix time at which the rate limit will reset to its maximum.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="dropbox-sign-api-webhooks">Webhooks</h1>

## Account Callbacks

<a id="opIdaccountUpdateEventCallback"></a>

`POST accountUpdateEventCallback`

This type of callback URL can be set up at the account level (either by setting it through an API request to "/v3/account" or on the Account Settings page on hellosign.com).
          
All signature request events that involve your account are reported to this URL. This includes events such as receiving a signature request, or when a signature request you've sent is signed by someone. Events are reported to the account callback URL for either requests originating on hellosign.com, or on a partner site, via an embedded flow.

You can set your account callback by using the [account API call](https://app.hellosign.com/api/account/post) or manually on the [settings page](https://app.hellosign.com/home/myAccount#api).

> Body parameter

```json
{
  "event": {
    "event_time": "1348177752",
    "event_type": "signature_request_viewed",
    "event_hash": "3a31324d1919d7cdc849ff407adf38fc01e01107d9400b028ff8c892469ca947",
    "event_metadata": {
      "related_signature_id": "ad4d8a769b555fa5ef38691465d426682bf2c992",
      "reported_for_account_id": "63522885f9261e2b04eea043933ee7313eb674fd",
      "reported_for_app_id": null
    }
  },
  "signature_request": {
    "signature_request_id": "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "title": "Purchase Agreement",
    "original_title": "Purchase Agreement",
    "subject": "Purchase Agreement we talked about",
    "message": "Please sign and return.",
    "metadata": {},
    "created_at": 1570471067,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [],
    "response_data": [],
    "signing_url": null,
    "signing_redirect_url": null,
    "files_url": "https://api.hellosign.com/v3/signature_request/files/2d055d5449fcbf016f5ebf0cf967bdd2bc42494f",
    "details_url": "https://app.hellosign.com/home/manage?guid=fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "john@example.com",
        "signer_name": "John Doe",
        "signer_role": null,
        "order": null,
        "status_code": "signed",
        "signed_at": 1346521550,
        "last_viewed_at": 1346521483,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [],
    "template_ids": null,
    "client_id": null
  }
}
```

<h3 id="account-callbacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EventCallbackPayload](#schemaeventcallbackpayload)|false|**Account Callback Payloads --**<br>      Events that are reported at the Account level through the the *Account callback URL* defined in your [API settings](https://app.hellosign.com/home/myAccount#api). The *Account callback URL* can also be updated by calling [Update Account](/api/reference/operation/accountUpdate) and passing a `callback_url`.<br><br>> **Delivery format:** This payload is delivered to your callback URL as an HTTP `POST` with `Content-Type: multipart/form-data`. The JSON structure documented below is sent as the value of a single form field named `json`. The schema below describes that JSON value.|
|» *oneOf*|body|[EventCallbackSignatureRequestViewed](#schemaeventcallbacksignaturerequestviewed)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestSigned](#schemaeventcallbacksignaturerequestsigned)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestSignerRemoved](#schemaeventcallbacksignaturerequestsignerremoved)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestDownloadable](#schemaeventcallbacksignaturerequestdownloadable)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestSent](#schemaeventcallbacksignaturerequestsent)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestAllSigned](#schemaeventcallbacksignaturerequestallsigned)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestInvalid](#schemaeventcallbacksignaturerequestinvalid)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestEmailBounce](#schemaeventcallbacksignaturerequestemailbounce)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestRemind](#schemaeventcallbacksignaturerequestremind)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestIncompleteQes](#schemaeventcallbacksignaturerequestincompleteqes)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestDestroyed](#schemaeventcallbacksignaturerequestdestroyed)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestCanceled](#schemaeventcallbacksignaturerequestcanceled)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestDeclined](#schemaeventcallbacksignaturerequestdeclined)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestExpired](#schemaeventcallbacksignaturerequestexpired)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestReassigned](#schemaeventcallbacksignaturerequestreassigned)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestPrepared](#schemaeventcallbacksignaturerequestprepared)|false|none|
|» *oneOf*|body|[EventCallbackAccountConfirmed](#schemaeventcallbackaccountconfirmed)|false|none|
|» *oneOf*|body|[EventCallbackUnknownError](#schemaeventcallbackunknownerror)|false|none|
|» *oneOf*|body|[EventCallbackFileError](#schemaeventcallbackfileerror)|false|none|
|» *oneOf*|body|[EventCallbackTemplateCreated](#schemaeventcallbacktemplatecreated)|false|none|
|» *oneOf*|body|[EventCallbackTemplateError](#schemaeventcallbacktemplateerror)|false|none|
|» *oneOf*|body|[EventCallbackSignUrlInvalid](#schemaeventcallbacksignurlinvalid)|false|none|
|» *oneOf*|body|[EventCallbackCallbackTest](#schemaeventcallbackcallbacktest)|false|none|
|» *oneOf*|body|[EventCallbackFaxReceived](#schemaeventcallbackfaxreceived)|false|none|
|» *oneOf*|body|[EventCallbackFaxSent](#schemaeventcallbackfaxsent)|false|none|
|» *oneOf*|body|[EventCallbackFaxOnHold](#schemaeventcallbackfaxonhold)|false|none|
|» *oneOf*|body|[EventCallbackFaxBusy](#schemaeventcallbackfaxbusy)|false|none|
|» *oneOf*|body|[EventCallbackFaxNoAnswer](#schemaeventcallbackfaxnoanswer)|false|none|
|» *oneOf*|body|[EventCallbackFaxDisconnected](#schemaeventcallbackfaxdisconnected)|false|none|
|» *oneOf*|body|[EventCallbackFaxBlacklisted](#schemaeventcallbackfaxblacklisted)|false|none|

<h3 id="account-callbacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

## App Callbacks

<a id="opIdapiAppCreateEventCallback"></a>

`POST apiAppCreateEventCallback`

This type of callback URL is set up at the API app level. API apps are used to identify a partner integration and configure embedded flows ([embedded signign](https://app.hellosign.com/api/embeddedSigningWalkthrough), [embedded requesting](https://app.hellosign.com/api/embeddedRequestingWalkthrough), and [embedded templates](https://app.hellosign.com/api/embeddedTemplatesWalkthrough)) and [OAuth providers](https://app.hellosign.com/api/oauthWalkthrough)
        
All events that involve signature requests created by an API app are reported to this URL. The event will include a `client_id` field to indicate which app the event is being reported for, which allows multiple API apps to share the same callback URL.

You can manage your apps and their callbacks from the [settings page](https://app.hellosign.com/home/myAccount#api).

> Body parameter

```json
{
  "event": {
    "event_time": "1348177752",
    "event_type": "signature_request_viewed",
    "event_hash": "3a31324d1919d7cdc849ff407adf38fc01e01107d9400b028ff8c892469ca947",
    "event_metadata": {
      "related_signature_id": "ad4d8a769b555fa5ef38691465d426682bf2c992",
      "reported_for_account_id": "63522885f9261e2b04eea043933ee7313eb674fd",
      "reported_for_app_id": null
    }
  },
  "signature_request": {
    "signature_request_id": "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "title": "Purchase Agreement",
    "original_title": "Purchase Agreement",
    "subject": "Purchase Agreement we talked about",
    "message": "Please sign and return.",
    "metadata": {},
    "created_at": 1570471067,
    "is_complete": false,
    "is_declined": false,
    "has_error": false,
    "custom_fields": [],
    "response_data": [],
    "signing_url": null,
    "signing_redirect_url": null,
    "files_url": "https://api.hellosign.com/v3/signature_request/files/2d055d5449fcbf016f5ebf0cf967bdd2bc42494f",
    "details_url": "https://app.hellosign.com/home/manage?guid=fa5c8a0b0f492d768749333ad6fcc214c111e967",
    "requester_email_address": "me@dropboxsign.com",
    "signatures": [
      {
        "signature_id": "78caf2a1d01cd39cea2bc1cbb340dac3",
        "signer_email_address": "john@example.com",
        "signer_name": "John Doe",
        "signer_role": null,
        "order": null,
        "status_code": "signed",
        "signed_at": 1346521550,
        "last_viewed_at": 1346521483,
        "last_reminded_at": null,
        "has_pin": false,
        "has_sms_auth": false
      }
    ],
    "cc_email_addresses": [],
    "template_ids": null,
    "client_id": null
  }
}
```

<h3 id="app-callbacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EventCallbackPayload](#schemaeventcallbackpayload)|false|**API App Callback Payloads --**<br>Events that are reported at the API App level through the *Event callback URL* defined in your [API settings](https://app.hellosign.com/home/myAccount#api) for a specific app. The *Event callback URL* can also be updated by calling [Update API App](/api/reference/operation/apiAppUpdate) and passing a `callback_url`.<br><br>> **Delivery format:** This payload is delivered to your callback URL as an HTTP `POST` with `Content-Type: multipart/form-data`. The JSON structure documented below is sent as the value of a single form field named `json`. The schema below describes that JSON value.|
|» *oneOf*|body|[EventCallbackSignatureRequestViewed](#schemaeventcallbacksignaturerequestviewed)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestSigned](#schemaeventcallbacksignaturerequestsigned)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestSignerRemoved](#schemaeventcallbacksignaturerequestsignerremoved)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestDownloadable](#schemaeventcallbacksignaturerequestdownloadable)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestSent](#schemaeventcallbacksignaturerequestsent)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestAllSigned](#schemaeventcallbacksignaturerequestallsigned)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestInvalid](#schemaeventcallbacksignaturerequestinvalid)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestEmailBounce](#schemaeventcallbacksignaturerequestemailbounce)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestRemind](#schemaeventcallbacksignaturerequestremind)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestIncompleteQes](#schemaeventcallbacksignaturerequestincompleteqes)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestDestroyed](#schemaeventcallbacksignaturerequestdestroyed)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestCanceled](#schemaeventcallbacksignaturerequestcanceled)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestDeclined](#schemaeventcallbacksignaturerequestdeclined)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestExpired](#schemaeventcallbacksignaturerequestexpired)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestReassigned](#schemaeventcallbacksignaturerequestreassigned)|false|none|
|» *oneOf*|body|[EventCallbackSignatureRequestPrepared](#schemaeventcallbacksignaturerequestprepared)|false|none|
|» *oneOf*|body|[EventCallbackAccountConfirmed](#schemaeventcallbackaccountconfirmed)|false|none|
|» *oneOf*|body|[EventCallbackUnknownError](#schemaeventcallbackunknownerror)|false|none|
|» *oneOf*|body|[EventCallbackFileError](#schemaeventcallbackfileerror)|false|none|
|» *oneOf*|body|[EventCallbackTemplateCreated](#schemaeventcallbacktemplatecreated)|false|none|
|» *oneOf*|body|[EventCallbackTemplateError](#schemaeventcallbacktemplateerror)|false|none|
|» *oneOf*|body|[EventCallbackSignUrlInvalid](#schemaeventcallbacksignurlinvalid)|false|none|
|» *oneOf*|body|[EventCallbackCallbackTest](#schemaeventcallbackcallbacktest)|false|none|
|» *oneOf*|body|[EventCallbackFaxReceived](#schemaeventcallbackfaxreceived)|false|none|
|» *oneOf*|body|[EventCallbackFaxSent](#schemaeventcallbackfaxsent)|false|none|
|» *oneOf*|body|[EventCallbackFaxOnHold](#schemaeventcallbackfaxonhold)|false|none|
|» *oneOf*|body|[EventCallbackFaxBusy](#schemaeventcallbackfaxbusy)|false|none|
|» *oneOf*|body|[EventCallbackFaxNoAnswer](#schemaeventcallbackfaxnoanswer)|false|none|
|» *oneOf*|body|[EventCallbackFaxDisconnected](#schemaeventcallbackfaxdisconnected)|false|none|
|» *oneOf*|body|[EventCallbackFaxBlacklisted](#schemaeventcallbackfaxblacklisted)|false|none|

<h3 id="app-callbacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2
</aside>

# Schemas

<h2 id="tocS_AccountCreateRequest">AccountCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcreaterequest"></a>
<a id="schema_AccountCreateRequest"></a>
<a id="tocSaccountcreaterequest"></a>
<a id="tocsaccountcreaterequest"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "email_address": "user@example.com",
  "locale": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|Used when creating a new account with OAuth authorization.<br><br>See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)|
|client_secret|string|false|none|Used when creating a new account with OAuth authorization.<br><br>See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)|
|email_address|string(email)|true|none|The email address which will be associated with the new Account.|
|locale|string|false|none|The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.|

<h2 id="tocS_AccountUpdateRequest">AccountUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountupdaterequest"></a>
<a id="schema_AccountUpdateRequest"></a>
<a id="tocSaccountupdaterequest"></a>
<a id="tocsaccountupdaterequest"></a>

```json
{
  "account_id": "string",
  "callback_url": "string",
  "locale": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string \| null|false|none|The ID of the Account|
|callback_url|string|false|none|The URL that Dropbox Sign should POST events to.|
|locale|string|false|none|The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.|

<h2 id="tocS_AccountVerifyRequest">AccountVerifyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountverifyrequest"></a>
<a id="schema_AccountVerifyRequest"></a>
<a id="tocSaccountverifyrequest"></a>
<a id="tocsaccountverifyrequest"></a>

```json
{
  "email_address": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string(email)|true|none|Email address to run the verification for.|

<h2 id="tocS_ApiAppCreateRequest">ApiAppCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiappcreaterequest"></a>
<a id="schema_ApiAppCreateRequest"></a>
<a id="tocSapiappcreaterequest"></a>
<a id="tocsapiappcreaterequest"></a>

```json
{
  "callback_url": "string",
  "custom_logo_file": "string",
  "domains": [
    "string"
  ],
  "name": "string",
  "oauth": {
    "callback_url": "string",
    "scopes": [
      "request_signature"
    ]
  },
  "options": {
    "can_insert_everywhere": false
  },
  "white_labeling_options": {
    "header_background_color": "#1a1a1a",
    "legal_version": "terms1",
    "link_color": "#0061FE",
    "page_background_color": "#f7f8f9",
    "primary_button_color": "#0061FE",
    "primary_button_color_hover": "#0061FE",
    "primary_button_text_color": "#ffffff",
    "primary_button_text_color_hover": "#ffffff",
    "secondary_button_color": "#ffffff",
    "secondary_button_color_hover": "#ffffff",
    "secondary_button_text_color": "#0061FE",
    "secondary_button_text_color_hover": "#0061FE",
    "text_color1": "#808080",
    "text_color2": "#ffffff",
    "reset_to_default": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|The URL at which the ApiApp should receive event callbacks.|
|custom_logo_file|string(binary)|false|none|An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)|
|domains|[string]|true|none|The domain names the ApiApp will be associated with.|
|name|string|true|none|The name you want to assign to the ApiApp.|
|oauth|[SubOAuth](#schemasuboauth)|false|none|OAuth related parameters.|
|options|[SubOptions](#schemasuboptions)|false|none|Additional options supported by API App.|
|white_labeling_options|[SubWhiteLabelingOptions](#schemasubwhitelabelingoptions)|false|none|An array of elements and values serialized to a string, to be used to customize the app's signer page. (Only applies to some API plans)<br><br>Take a look at our [white labeling guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.|

<h2 id="tocS_ApiAppUpdateRequest">ApiAppUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiappupdaterequest"></a>
<a id="schema_ApiAppUpdateRequest"></a>
<a id="tocSapiappupdaterequest"></a>
<a id="tocsapiappupdaterequest"></a>

```json
{
  "callback_url": "string",
  "custom_logo_file": "string",
  "domains": [
    "string"
  ],
  "name": "string",
  "oauth": {
    "callback_url": "string",
    "scopes": [
      "request_signature"
    ]
  },
  "options": {
    "can_insert_everywhere": false
  },
  "white_labeling_options": {
    "header_background_color": "#1a1a1a",
    "legal_version": "terms1",
    "link_color": "#0061FE",
    "page_background_color": "#f7f8f9",
    "primary_button_color": "#0061FE",
    "primary_button_color_hover": "#0061FE",
    "primary_button_text_color": "#ffffff",
    "primary_button_text_color_hover": "#ffffff",
    "secondary_button_color": "#ffffff",
    "secondary_button_color_hover": "#ffffff",
    "secondary_button_text_color": "#0061FE",
    "secondary_button_text_color_hover": "#0061FE",
    "text_color1": "#808080",
    "text_color2": "#ffffff",
    "reset_to_default": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|The URL at which the API App should receive event callbacks.|
|custom_logo_file|string(binary)|false|none|An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)|
|domains|[string]|false|none|The domain names the ApiApp will be associated with.|
|name|string|false|none|The name you want to assign to the ApiApp.|
|oauth|[SubOAuth](#schemasuboauth)|false|none|OAuth related parameters.|
|options|[SubOptions](#schemasuboptions)|false|none|Additional options supported by API App.|
|white_labeling_options|[SubWhiteLabelingOptions](#schemasubwhitelabelingoptions)|false|none|An array of elements and values serialized to a string, to be used to customize the app's signer page. (Only applies to some API plans)<br><br>Take a look at our [white labeling guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.|

<h2 id="tocS_DocumentFieldDetectionRequest">DocumentFieldDetectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadocumentfielddetectionrequest"></a>
<a id="schema_DocumentFieldDetectionRequest"></a>
<a id="tocSdocumentfielddetectionrequest"></a>
<a id="tocsdocumentfielddetectionrequest"></a>

```json
{
  "file": "string",
  "file_url": "http://example.com",
  "detection_mode": "annotations",
  "page_range": "0-2,5,7-9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|false|none|The PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.|
|file_url|string(uri)|false|none|The URL of the PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.|
|detection_mode|string|true|none|The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags.|
|page_range|string|false|none|The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`.|

<h2 id="tocS_EmbeddedEditUrlRequest">EmbeddedEditUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedediturlrequest"></a>
<a id="schema_EmbeddedEditUrlRequest"></a>
<a id="tocSembeddedediturlrequest"></a>
<a id="tocsembeddedediturlrequest"></a>

```json
{
  "allow_edit_ccs": false,
  "cc_roles": [
    "string"
  ],
  "editor_options": {
    "allow_edit_signers": false,
    "allow_edit_documents": false
  },
  "force_signer_roles": false,
  "force_subject_message": false,
  "merge_fields": [
    {
      "name": "string",
      "type": "text"
    }
  ],
  "preview_only": false,
  "show_preview": false,
  "show_progress_stepper": true,
  "test_mode": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_edit_ccs|boolean|false|none|This allows the requester to enable/disable to add or change CC roles when editing the template.|
|cc_roles|[string]|false|none|The CC roles that must be assigned when using the template to send a signature request. To remove all CC roles, pass in a single role with no name. For use in a POST request.|
|editor_options|[SubEditorOptions](#schemasubeditoroptions)|false|none|This allows the requester to specify editor options when a preparing a document|
|force_signer_roles|boolean|false|none|Provide users the ability to review/edit the template signer roles.|
|force_subject_message|boolean|false|none|Provide users the ability to review/edit the template subject and message.|
|merge_fields|[[SubMergeField](#schemasubmergefield)]|false|none|Add additional merge fields to the template, which can be used used to pre-fill data by passing values into signature requests made with that template.<br><br>Remove all merge fields on the template by passing an empty array `[]`.|
|preview_only|boolean|false|none|This allows the requester to enable the preview experience (i.e. does not allow the requester's end user to add any additional fields via the editor).<br><br>**NOTE:** This parameter overwrites `show_preview=true` (if set).|
|show_preview|boolean|false|none|This allows the requester to enable the editor/preview experience.|
|show_progress_stepper|boolean|false|none|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|test_mode|boolean|false|none|Whether this is a test, locked templates will only be available for editing if this is set to `true`. Defaults to `false`.|

<h2 id="tocS_FaxLineAddUserRequest">FaxLineAddUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemafaxlineadduserrequest"></a>
<a id="schema_FaxLineAddUserRequest"></a>
<a id="tocSfaxlineadduserrequest"></a>
<a id="tocsfaxlineadduserrequest"></a>

```json
{
  "number": "string",
  "account_id": "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
  "email_address": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|true|none|The Fax Line number|
|account_id|string|false|none|Account ID|
|email_address|string(email)|false|none|Email address|

<h2 id="tocS_FaxLineAreaCodeGetStateEnum">FaxLineAreaCodeGetStateEnum</h2>
<!-- backwards compatibility -->
<a id="schemafaxlineareacodegetstateenum"></a>
<a id="schema_FaxLineAreaCodeGetStateEnum"></a>
<a id="tocSfaxlineareacodegetstateenum"></a>
<a id="tocsfaxlineareacodegetstateenum"></a>

```json
"AK"
```

<h2 id="tocS_FaxLineAreaCodeGetProvinceEnum">FaxLineAreaCodeGetProvinceEnum</h2>
<!-- backwards compatibility -->
<a id="schemafaxlineareacodegetprovinceenum"></a>
<a id="schema_FaxLineAreaCodeGetProvinceEnum"></a>
<a id="tocSfaxlineareacodegetprovinceenum"></a>
<a id="tocsfaxlineareacodegetprovinceenum"></a>

```json
"AB"
```

<h2 id="tocS_FaxLineAreaCodeGetCountryEnum">FaxLineAreaCodeGetCountryEnum</h2>
<!-- backwards compatibility -->
<a id="schemafaxlineareacodegetcountryenum"></a>
<a id="schema_FaxLineAreaCodeGetCountryEnum"></a>
<a id="tocSfaxlineareacodegetcountryenum"></a>
<a id="tocsfaxlineareacodegetcountryenum"></a>

```json
"CA"
```

<h2 id="tocS_FaxLineCreateRequest">FaxLineCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemafaxlinecreaterequest"></a>
<a id="schema_FaxLineCreateRequest"></a>
<a id="tocSfaxlinecreaterequest"></a>
<a id="tocsfaxlinecreaterequest"></a>

```json
{
  "area_code": 0,
  "country": "CA",
  "city": "string",
  "account_id": "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area_code|integer|true|none|Area code of the new Fax Line|
|country|string|true|none|Country of the area code|
|city|string|false|none|City of the area code|
|account_id|string|false|none|Account ID of the account that will be assigned this new Fax Line|

#### Enumerated Values

|Property|Value|
|---|---|
|country|CA|
|country|US|
|country|UK|

<h2 id="tocS_FaxLineDeleteRequest">FaxLineDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemafaxlinedeleterequest"></a>
<a id="schema_FaxLineDeleteRequest"></a>
<a id="tocSfaxlinedeleterequest"></a>
<a id="tocsfaxlinedeleterequest"></a>

```json
{
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|true|none|The Fax Line number|

<h2 id="tocS_FaxLineRemoveUserRequest">FaxLineRemoveUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemafaxlineremoveuserrequest"></a>
<a id="schema_FaxLineRemoveUserRequest"></a>
<a id="tocSfaxlineremoveuserrequest"></a>
<a id="tocsfaxlineremoveuserrequest"></a>

```json
{
  "number": "string",
  "account_id": "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
  "email_address": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|true|none|The Fax Line number|
|account_id|string|false|none|Account ID of the user to remove access|
|email_address|string(email)|false|none|Email address of the user to remove access|

<h2 id="tocS_FaxSendRequest">FaxSendRequest</h2>
<!-- backwards compatibility -->
<a id="schemafaxsendrequest"></a>
<a id="schema_FaxSendRequest"></a>
<a id="tocSfaxsendrequest"></a>
<a id="tocsfaxsendrequest"></a>

```json
{
  "recipient": "recipient@example.com",
  "sender": "sender@example.com",
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "test_mode": false,
  "cover_page_to": "Recipient Name",
  "cover_page_from": "Sender Name",
  "cover_page_message": "Please find the attached documents.",
  "title": "Fax Title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipient|string|true|none|Recipient of the fax <br>Can be a phone number in E.164 format or email address|
|sender|string|false|none|Fax Send From Sender (used only with fax number)|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Fax download the file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|test_mode|boolean|false|none|API Test Mode Setting|
|cover_page_to|string|false|none|Fax cover page recipient information|
|cover_page_from|string|false|none|Fax cover page sender information|
|cover_page_message|string|false|none|Fax Cover Page Message|
|title|string|false|none|Fax Title|

<h2 id="tocS_OAuthTokenGenerateRequest">OAuthTokenGenerateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoauthtokengeneraterequest"></a>
<a id="schema_OAuthTokenGenerateRequest"></a>
<a id="tocSoauthtokengeneraterequest"></a>
<a id="tocsoauthtokengeneraterequest"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "code": "string",
  "grant_type": "authorization_code",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|The client id of the app requesting authorization.|
|client_secret|string|true|none|The secret token of your app.|
|code|string|true|none|The code passed to your callback when the user granted access.|
|grant_type|string|true|none|When generating a new token use `authorization_code`.|
|state|string|true|none|Same as the state you specified earlier.|

<h2 id="tocS_OAuthTokenRefreshRequest">OAuthTokenRefreshRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoauthtokenrefreshrequest"></a>
<a id="schema_OAuthTokenRefreshRequest"></a>
<a id="tocSoauthtokenrefreshrequest"></a>
<a id="tocsoauthtokenrefreshrequest"></a>

```json
{
  "grant_type": "refresh_token",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|true|none|When refreshing an existing token use `refresh_token`.|
|refresh_token|string|true|none|The token provided when you got the expired access token.|
|client_id|string|false|none|The client ID for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.|
|client_secret|string|false|none|The client secret for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.|

<h2 id="tocS_ReportCreateRequest">ReportCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportcreaterequest"></a>
<a id="schema_ReportCreateRequest"></a>
<a id="tocSreportcreaterequest"></a>
<a id="tocsreportcreaterequest"></a>

```json
{
  "end_date": "string",
  "report_type": [
    "user_activity"
  ],
  "start_date": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_date|string|true|none|The (inclusive) end date for the report data in `MM/DD/YYYY` format.|
|report_type|[string]|true|none|The type(s) of the report you are requesting. Allowed values are `user_activity` and `document_status`. User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).|
|start_date|string|true|none|The (inclusive) start date for the report data in `MM/DD/YYYY` format.|

#### Enumerated Values

|Property|Value|
|---|---|
|report_type|user_activity|
|report_type|document_status|
|report_type|sms_activity|
|report_type|fax_usage|

<h2 id="tocS_SignatureRequestBulkCreateEmbeddedWithTemplateRequest">SignatureRequestBulkCreateEmbeddedWithTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestbulkcreateembeddedwithtemplaterequest"></a>
<a id="schema_SignatureRequestBulkCreateEmbeddedWithTemplateRequest"></a>
<a id="tocSsignaturerequestbulkcreateembeddedwithtemplaterequest"></a>
<a id="tocssignaturerequestbulkcreateembeddedwithtemplaterequest"></a>

```json
{
  "template_ids": [
    "string"
  ],
  "signer_file": "string",
  "signer_list": [
    {
      "custom_fields": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "signers": [
        {
          "role": "string",
          "name": "string",
          "email_address": "user@example.com",
          "pin": "string",
          "sms_phone_number": "string",
          "sms_phone_number_type": "authentication"
        }
      ]
    }
  ],
  "allow_decline": false,
  "ccs": [
    {
      "role": "string",
      "email_address": "user@example.com"
    }
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signing_redirect_url": "string",
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_ids|[string]|true|none|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|signer_file|string(binary)|false|none|`signer_file` is a CSV file defining values and options for signer fields. Required unless a `signer_list` is used, you may not use both. The CSV can have the following columns:<br><br>- `name`: the name of the signer filling the role of RoleName<br>- `email_address`: email address of the signer filling the role of RoleName<br>- `pin`: the 4- to 12-character access code that will secure this signer's signature page (optional)<br>- `sms_phone_number`: An E.164 formatted phone number that will receive a code via SMS to access this signer's signature page. (optional)<br><br>    By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>    **NOTE:** Not available in test mode and requires a Standard plan or higher.<br>- `*_field`: any column with a _field" suffix will be treated as a custom field (optional)<br><br>    You may only specify field values here, any other options should be set in the custom_fields request parameter.<br><br>Example CSV:<br><br>```<br>name, email_address, pin, company_field<br>George, george@example.com, d79a3td, ABC Corp<br>Mary, mary@example.com, gd9as5b, 123 LLC<br>```|
|signer_list|[[SubBulkSignerList](#schemasubbulksignerlist)]|false|none|`signer_list` is an array defining values and options for signer fields. Required unless a `signer_file` is used, you may not use both.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|ccs|[[SubCC](#schemasubcc)]|false|none|Add CC email recipients. Required when a CC role exists for the Template.|
|client_id|string|true|none|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

<h2 id="tocS_SignatureRequestBulkSendWithTemplateRequest">SignatureRequestBulkSendWithTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestbulksendwithtemplaterequest"></a>
<a id="schema_SignatureRequestBulkSendWithTemplateRequest"></a>
<a id="tocSsignaturerequestbulksendwithtemplaterequest"></a>
<a id="tocssignaturerequestbulksendwithtemplaterequest"></a>

```json
{
  "template_ids": [
    "string"
  ],
  "signer_file": "string",
  "signer_list": [
    {
      "custom_fields": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "signers": [
        {
          "role": "string",
          "name": "string",
          "email_address": "user@example.com",
          "pin": "string",
          "sms_phone_number": "string",
          "sms_phone_number_type": "authentication"
        }
      ]
    }
  ],
  "allow_decline": false,
  "ccs": [
    {
      "role": "string",
      "email_address": "user@example.com"
    }
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signing_redirect_url": "string",
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_ids|[string]|true|none|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|signer_file|string(binary)|false|none|`signer_file` is a CSV file defining values and options for signer fields. Required unless a `signer_list` is used, you may not use both. The CSV can have the following columns:<br><br>- `name`: the name of the signer filling the role of RoleName<br>- `email_address`: email address of the signer filling the role of RoleName<br>- `pin`: the 4- to 12-character access code that will secure this signer's signature page (optional)<br>- `sms_phone_number`: An E.164 formatted phone number that will receive a code via SMS to access this signer's signature page. (optional)<br><br>    By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>    **NOTE:** Not available in test mode and requires a Standard plan or higher.<br>- `*_field`: any column with a _field" suffix will be treated as a custom field (optional)<br><br>    You may only specify field values here, any other options should be set in the custom_fields request parameter.<br><br>Example CSV:<br><br>```<br>name, email_address, pin, company_field<br>George, george@example.com, d79a3td, ABC Corp<br>Mary, mary@example.com, gd9as5b, 123 LLC<br>```|
|signer_list|[[SubBulkSignerList](#schemasubbulksignerlist)]|false|none|`signer_list` is an array defining values and options for signer fields. Required unless a `signer_file` is used, you may not use both.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|ccs|[[SubCC](#schemasubcc)]|false|none|Add CC email recipients. Required when a CC role exists for the Template.|
|client_id|string|false|none|The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

<h2 id="tocS_SignatureRequestCreateEmbeddedRequest">SignatureRequestCreateEmbeddedRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestcreateembeddedrequest"></a>
<a id="schema_SignatureRequestCreateEmbeddedRequest"></a>
<a id="tocSsignaturerequestcreateembeddedrequest"></a>
<a id="tocssignaturerequestcreateembeddedrequest"></a>

```json
{
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "signers": [
    {
      "name": "string",
      "email_address": "user@example.com",
      "order": 0,
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ],
  "grouped_signers": [
    {
      "group": "string",
      "order": 0,
      "signers": [
        {
          "name": "string",
          "email_address": "user@example.com",
          "order": 0,
          "pin": "string",
          "sms_phone_number": "string",
          "sms_phone_number_type": "authentication"
        }
      ]
    }
  ],
  "allow_decline": false,
  "allow_reassign": false,
  "attachments": [
    {
      "instructions": "string",
      "name": "string",
      "required": false,
      "signer_index": 0
    }
  ],
  "cc_email_addresses": [
    "user@example.com"
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "field_options": {
    "date_format": "MM / DD / YYYY"
  },
  "form_field_groups": [
    {
      "group_id": "string",
      "group_label": "string",
      "requirement": "string"
    }
  ],
  "form_field_rules": [
    {
      "id": "string",
      "trigger_operator": "AND",
      "triggers": [
        {
          "id": "string",
          "operator": "any",
          "value": "string",
          "values": [
            "string"
          ]
        }
      ],
      "actions": [
        {
          "field_id": "string",
          "group_id": "string",
          "hidden": true,
          "type": "change-field-visibility"
        }
      ]
    }
  ],
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "string",
      "height": 0,
      "name": "string",
      "page": 0,
      "required": true,
      "signer": "string",
      "type": "string",
      "width": 0,
      "x": 0,
      "y": 0
    }
  ],
  "hide_text_tags": false,
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "use_text_tags": false,
  "ignore_text_tags_extraction_errors": false,
  "populate_auto_fill_fields": false,
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|signers|[[SubSignatureRequestSigner](#schemasubsignaturerequestsigner)]|false|none|Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|grouped_signers|[[SubSignatureRequestGroupedSigners](#schemasubsignaturerequestgroupedsigners)]|false|none|Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|allow_reassign|boolean|false|none|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan.|
|attachments|[[SubAttachment](#schemasubattachment)]|false|none|A list describing the attachments|
|cc_email_addresses|[string(email)]|false|none|The email addresses that should be CCed.|
|client_id|string|true|none|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|field_options|[SubFieldOptions](#schemasubfieldoptions)|false|none|This allows the requester to specify field options for a signature request.|
|form_field_groups|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|none|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|form_field_rules|[[SubFormFieldRule](#schemasubformfieldrule)]|false|none|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|form_fields_per_document|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|none|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|hide_text_tags|boolean|false|none|Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|use_text_tags|boolean|false|none|Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.|
|ignore_text_tags_extraction_errors|boolean|false|none|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|populate_auto_fill_fields|boolean|false|none|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

<h2 id="tocS_SignatureRequestCreateEmbeddedWithTemplateRequest">SignatureRequestCreateEmbeddedWithTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestcreateembeddedwithtemplaterequest"></a>
<a id="schema_SignatureRequestCreateEmbeddedWithTemplateRequest"></a>
<a id="tocSsignaturerequestcreateembeddedwithtemplaterequest"></a>
<a id="tocssignaturerequestcreateembeddedwithtemplaterequest"></a>

```json
{
  "template_ids": [
    "string"
  ],
  "allow_decline": false,
  "ccs": [
    {
      "role": "string",
      "email_address": "user@example.com"
    }
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signers": [
    {
      "role": "string",
      "name": "string",
      "email_address": "user@example.com",
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ],
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "populate_auto_fill_fields": false,
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_ids|[string]|true|none|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|ccs|[[SubCC](#schemasubcc)]|false|none|Add CC email recipients. Required when a CC role exists for the Template.|
|client_id|string|true|none|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signers|[[SubSignatureRequestTemplateSigner](#schemasubsignaturerequesttemplatesigner)]|true|none|Add Signers to your Templated-based Signature Request.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|populate_auto_fill_fields|boolean|false|none|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

<h2 id="tocS_SignatureRequestEditRequest">SignatureRequestEditRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequesteditrequest"></a>
<a id="schema_SignatureRequestEditRequest"></a>
<a id="tocSsignaturerequesteditrequest"></a>
<a id="tocssignaturerequesteditrequest"></a>

```json
{
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "signers": [
    {
      "name": "string",
      "email_address": "user@example.com",
      "order": 0,
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ],
  "grouped_signers": [
    {
      "group": "string",
      "order": 0,
      "signers": [
        {
          "name": "string",
          "email_address": "user@example.com",
          "order": 0,
          "pin": "string",
          "sms_phone_number": "string",
          "sms_phone_number_type": "authentication"
        }
      ]
    }
  ],
  "allow_decline": false,
  "allow_reassign": false,
  "attachments": [
    {
      "instructions": "string",
      "name": "string",
      "required": false,
      "signer_index": 0
    }
  ],
  "cc_email_addresses": [
    "user@example.com"
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "field_options": {
    "date_format": "MM / DD / YYYY"
  },
  "form_field_groups": [
    {
      "group_id": "string",
      "group_label": "string",
      "requirement": "string"
    }
  ],
  "form_field_rules": [
    {
      "id": "string",
      "trigger_operator": "AND",
      "triggers": [
        {
          "id": "string",
          "operator": "any",
          "value": "string",
          "values": [
            "string"
          ]
        }
      ],
      "actions": [
        {
          "field_id": "string",
          "group_id": "string",
          "hidden": true,
          "type": "change-field-visibility"
        }
      ]
    }
  ],
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "string",
      "height": 0,
      "name": "string",
      "page": 0,
      "required": true,
      "signer": "string",
      "type": "string",
      "width": 0,
      "x": 0,
      "y": 0
    }
  ],
  "hide_text_tags": false,
  "is_eid": false,
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "signing_redirect_url": "string",
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "use_text_tags": false,
  "ignore_text_tags_extraction_errors": false,
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|signers|[[SubSignatureRequestSigner](#schemasubsignaturerequestsigner)]|false|none|Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|grouped_signers|[[SubSignatureRequestGroupedSigners](#schemasubsignaturerequestgroupedsigners)]|false|none|Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|allow_reassign|boolean|false|none|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|attachments|[[SubAttachment](#schemasubattachment)]|false|none|A list describing the attachments|
|cc_email_addresses|[string(email)]|false|none|The email addresses that should be CCed.|
|client_id|string|false|none|The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|field_options|[SubFieldOptions](#schemasubfieldoptions)|false|none|This allows the requester to specify field options for a signature request.|
|form_field_groups|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|none|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|form_field_rules|[[SubFormFieldRule](#schemasubformfieldrule)]|false|none|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|form_fields_per_document|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|none|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|hide_text_tags|boolean|false|none|Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.|
|is_eid|boolean|false|none|Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://sign.dropbox.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|use_text_tags|boolean|false|none|Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.|
|ignore_text_tags_extraction_errors|boolean|false|none|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

<h2 id="tocS_SignatureRequestEditEmbeddedRequest">SignatureRequestEditEmbeddedRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequesteditembeddedrequest"></a>
<a id="schema_SignatureRequestEditEmbeddedRequest"></a>
<a id="tocSsignaturerequesteditembeddedrequest"></a>
<a id="tocssignaturerequesteditembeddedrequest"></a>

```json
{
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "signers": [
    {
      "name": "string",
      "email_address": "user@example.com",
      "order": 0,
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ],
  "grouped_signers": [
    {
      "group": "string",
      "order": 0,
      "signers": [
        {
          "name": "string",
          "email_address": "user@example.com",
          "order": 0,
          "pin": "string",
          "sms_phone_number": "string",
          "sms_phone_number_type": "authentication"
        }
      ]
    }
  ],
  "allow_decline": false,
  "allow_reassign": false,
  "attachments": [
    {
      "instructions": "string",
      "name": "string",
      "required": false,
      "signer_index": 0
    }
  ],
  "cc_email_addresses": [
    "user@example.com"
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "field_options": {
    "date_format": "MM / DD / YYYY"
  },
  "form_field_groups": [
    {
      "group_id": "string",
      "group_label": "string",
      "requirement": "string"
    }
  ],
  "form_field_rules": [
    {
      "id": "string",
      "trigger_operator": "AND",
      "triggers": [
        {
          "id": "string",
          "operator": "any",
          "value": "string",
          "values": [
            "string"
          ]
        }
      ],
      "actions": [
        {
          "field_id": "string",
          "group_id": "string",
          "hidden": true,
          "type": "change-field-visibility"
        }
      ]
    }
  ],
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "string",
      "height": 0,
      "name": "string",
      "page": 0,
      "required": true,
      "signer": "string",
      "type": "string",
      "width": 0,
      "x": 0,
      "y": 0
    }
  ],
  "hide_text_tags": false,
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "use_text_tags": false,
  "ignore_text_tags_extraction_errors": false,
  "populate_auto_fill_fields": false,
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|signers|[[SubSignatureRequestSigner](#schemasubsignaturerequestsigner)]|false|none|Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|grouped_signers|[[SubSignatureRequestGroupedSigners](#schemasubsignaturerequestgroupedsigners)]|false|none|Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|allow_reassign|boolean|false|none|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan.|
|attachments|[[SubAttachment](#schemasubattachment)]|false|none|A list describing the attachments|
|cc_email_addresses|[string(email)]|false|none|The email addresses that should be CCed.|
|client_id|string|true|none|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|field_options|[SubFieldOptions](#schemasubfieldoptions)|false|none|This allows the requester to specify field options for a signature request.|
|form_field_groups|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|none|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|form_field_rules|[[SubFormFieldRule](#schemasubformfieldrule)]|false|none|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|form_fields_per_document|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|none|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|hide_text_tags|boolean|false|none|Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|use_text_tags|boolean|false|none|Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.|
|ignore_text_tags_extraction_errors|boolean|false|none|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|populate_auto_fill_fields|boolean|false|none|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

<h2 id="tocS_SignatureRequestEditEmbeddedWithTemplateRequest">SignatureRequestEditEmbeddedWithTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequesteditembeddedwithtemplaterequest"></a>
<a id="schema_SignatureRequestEditEmbeddedWithTemplateRequest"></a>
<a id="tocSsignaturerequesteditembeddedwithtemplaterequest"></a>
<a id="tocssignaturerequesteditembeddedwithtemplaterequest"></a>

```json
{
  "template_ids": [
    "string"
  ],
  "allow_decline": false,
  "ccs": [
    {
      "role": "string",
      "email_address": "user@example.com"
    }
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signers": [
    {
      "role": "string",
      "name": "string",
      "email_address": "user@example.com",
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ],
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "populate_auto_fill_fields": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_ids|[string]|true|none|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|ccs|[[SubCC](#schemasubcc)]|false|none|Add CC email recipients. Required when a CC role exists for the Template.|
|client_id|string|true|none|Client id of the app you're using to create this embedded signature request. Used for security purposes.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signers|[[SubSignatureRequestTemplateSigner](#schemasubsignaturerequesttemplatesigner)]|true|none|Add Signers to your Templated-based Signature Request.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|populate_auto_fill_fields|boolean|false|none|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|

<h2 id="tocS_SignatureRequestEditWithTemplateRequest">SignatureRequestEditWithTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequesteditwithtemplaterequest"></a>
<a id="schema_SignatureRequestEditWithTemplateRequest"></a>
<a id="tocSsignaturerequesteditwithtemplaterequest"></a>
<a id="tocssignaturerequesteditwithtemplaterequest"></a>

```json
{
  "template_ids": [
    "string"
  ],
  "allow_decline": false,
  "ccs": [
    {
      "role": "string",
      "email_address": "user@example.com"
    }
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "is_eid": false,
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signers": [
    {
      "role": "string",
      "name": "string",
      "email_address": "user@example.com",
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ],
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "signing_redirect_url": "string",
  "subject": "string",
  "test_mode": false,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_ids|[string]|true|none|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|ccs|[[SubCC](#schemasubcc)]|false|none|Add CC email recipients. Required when a CC role exists for the Template.|
|client_id|string|false|none|Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|is_eid|boolean|false|none|Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://sign.dropbox.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signers|[[SubSignatureRequestTemplateSigner](#schemasubsignaturerequesttemplatesigner)]|true|none|Add Signers to your Templated-based Signature Request.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|

<h2 id="tocS_SignatureRequestRemindRequest">SignatureRequestRemindRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestremindrequest"></a>
<a id="schema_SignatureRequestRemindRequest"></a>
<a id="tocSsignaturerequestremindrequest"></a>
<a id="tocssignaturerequestremindrequest"></a>

```json
{
  "email_address": "user@example.com",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string(email)|true|none|The email address of the signer to send a reminder to.|
|name|string|false|none|The name of the signer to send a reminder to. Include if two or more signers share an email address.|

<h2 id="tocS_SignatureRequestSendRequest">SignatureRequestSendRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestsendrequest"></a>
<a id="schema_SignatureRequestSendRequest"></a>
<a id="tocSsignaturerequestsendrequest"></a>
<a id="tocssignaturerequestsendrequest"></a>

```json
{
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "signers": [
    {
      "name": "string",
      "email_address": "user@example.com",
      "order": 0,
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ],
  "grouped_signers": [
    {
      "group": "string",
      "order": 0,
      "signers": [
        {
          "name": "string",
          "email_address": "user@example.com",
          "order": 0,
          "pin": "string",
          "sms_phone_number": "string",
          "sms_phone_number_type": "authentication"
        }
      ]
    }
  ],
  "allow_decline": false,
  "allow_reassign": false,
  "attachments": [
    {
      "instructions": "string",
      "name": "string",
      "required": false,
      "signer_index": 0
    }
  ],
  "cc_email_addresses": [
    "user@example.com"
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "field_options": {
    "date_format": "MM / DD / YYYY"
  },
  "form_field_groups": [
    {
      "group_id": "string",
      "group_label": "string",
      "requirement": "string"
    }
  ],
  "form_field_rules": [
    {
      "id": "string",
      "trigger_operator": "AND",
      "triggers": [
        {
          "id": "string",
          "operator": "any",
          "value": "string",
          "values": [
            "string"
          ]
        }
      ],
      "actions": [
        {
          "field_id": "string",
          "group_id": "string",
          "hidden": true,
          "type": "change-field-visibility"
        }
      ]
    }
  ],
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "string",
      "height": 0,
      "name": "string",
      "page": 0,
      "required": true,
      "signer": "string",
      "type": "string",
      "width": 0,
      "x": 0,
      "y": 0
    }
  ],
  "hide_text_tags": false,
  "is_eid": false,
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "signing_redirect_url": "string",
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "use_text_tags": false,
  "ignore_text_tags_extraction_errors": false,
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|signers|[[SubSignatureRequestSigner](#schemasubsignaturerequestsigner)]|false|none|Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|grouped_signers|[[SubSignatureRequestGroupedSigners](#schemasubsignaturerequestgroupedsigners)]|false|none|Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|allow_reassign|boolean|false|none|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|attachments|[[SubAttachment](#schemasubattachment)]|false|none|A list describing the attachments|
|cc_email_addresses|[string(email)]|false|none|The email addresses that should be CCed.|
|client_id|string|false|none|The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|field_options|[SubFieldOptions](#schemasubfieldoptions)|false|none|This allows the requester to specify field options for a signature request.|
|form_field_groups|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|none|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|form_field_rules|[[SubFormFieldRule](#schemasubformfieldrule)]|false|none|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|form_fields_per_document|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|none|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|hide_text_tags|boolean|false|none|Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.|
|is_eid|boolean|false|none|Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://sign.dropbox.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|use_text_tags|boolean|false|none|Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.|
|ignore_text_tags_extraction_errors|boolean|false|none|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

<h2 id="tocS_SignatureRequestSendWithTemplateRequest">SignatureRequestSendWithTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestsendwithtemplaterequest"></a>
<a id="schema_SignatureRequestSendWithTemplateRequest"></a>
<a id="tocSsignaturerequestsendwithtemplaterequest"></a>
<a id="tocssignaturerequestsendwithtemplaterequest"></a>

```json
{
  "template_ids": [
    "string"
  ],
  "allow_decline": false,
  "ccs": [
    {
      "role": "string",
      "email_address": "user@example.com"
    }
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "is_eid": false,
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signers": [
    {
      "role": "string",
      "name": "string",
      "email_address": "user@example.com",
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ],
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "signing_redirect_url": "string",
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_ids|[string]|true|none|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|ccs|[[SubCC](#schemasubcc)]|false|none|Add CC email recipients. Required when a CC role exists for the Template.|
|client_id|string|false|none|Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|is_eid|boolean|false|none|Send with a value of `true` if you wish to enable<br>[electronic identification (eID)](https://sign.dropbox.com/features/electronic-id),<br>which requires the signer to verify their identity with an eID provider to sign a document.<br><br>**NOTE:** You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signers|[[SubSignatureRequestTemplateSigner](#schemasubsignaturerequesttemplatesigner)]|true|none|Add Signers to your Templated-based Signature Request.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

<h2 id="tocS_SignatureRequestUpdateRequest">SignatureRequestUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestupdaterequest"></a>
<a id="schema_SignatureRequestUpdateRequest"></a>
<a id="tocSsignaturerequestupdaterequest"></a>
<a id="tocssignaturerequestupdaterequest"></a>

```json
{
  "email_address": "user@example.com",
  "name": "string",
  "signature_id": "string",
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string(email)|false|none|The new email address for the recipient.<br><br>This will generate a new `signature_id` value.<br><br>**NOTE:** Optional if `name` is provided.|
|name|string|false|none|The new name for the recipient.<br><br>**NOTE:** Optional if `email_address` is provided.|
|signature_id|string|true|none|The signature ID for the recipient.|
|expires_at|integer \| null|false|none|The new time when the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|

<h2 id="tocS_SubAttachment">SubAttachment</h2>
<!-- backwards compatibility -->
<a id="schemasubattachment"></a>
<a id="schema_SubAttachment"></a>
<a id="tocSsubattachment"></a>
<a id="tocssubattachment"></a>

```json
{
  "instructions": "string",
  "name": "string",
  "required": false,
  "signer_index": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instructions|string|false|none|The instructions for uploading the attachment.|
|name|string|true|none|The name of attachment.|
|required|boolean|false|none|Determines if the attachment must be uploaded.|
|signer_index|integer|true|none|The signer's index in the `signers` parameter (0-based indexing).<br><br>**NOTE:** Only one signer can be assigned per attachment.|

<h2 id="tocS_SubBulkSignerList">SubBulkSignerList</h2>
<!-- backwards compatibility -->
<a id="schemasubbulksignerlist"></a>
<a id="schema_SubBulkSignerList"></a>
<a id="tocSsubbulksignerlist"></a>
<a id="tocssubbulksignerlist"></a>

```json
{
  "custom_fields": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "signers": [
    {
      "role": "string",
      "name": "string",
      "email_address": "user@example.com",
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_fields|[[SubBulkSignerListCustomField](#schemasubbulksignerlistcustomfield)]|false|none|An array of custom field values.|
|signers|[[SubSignatureRequestTemplateSigner](#schemasubsignaturerequesttemplatesigner)]|false|none|Add Signers to your Templated-based Signature Request. Allows the requester to specify editor options when a preparing a document.<br><br>Currently only templates with a single role are supported. All signers must have the same `role` value.|

<h2 id="tocS_SubBulkSignerListCustomField">SubBulkSignerListCustomField</h2>
<!-- backwards compatibility -->
<a id="schemasubbulksignerlistcustomfield"></a>
<a id="schema_SubBulkSignerListCustomField"></a>
<a id="tocSsubbulksignerlistcustomfield"></a>
<a id="tocssubbulksignerlistcustomfield"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the custom field. Must be the field's `name` or `api_id`.|
|value|string|true|none|The value of the custom field.|

<h2 id="tocS_SubCC">SubCC</h2>
<!-- backwards compatibility -->
<a id="schemasubcc"></a>
<a id="schema_SubCC"></a>
<a id="tocSsubcc"></a>
<a id="tocssubcc"></a>

```json
{
  "role": "string",
  "email_address": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|Must match an existing CC role in chosen Template(s). Multiple CC recipients cannot share the same CC role.|
|email_address|string(email)|true|none|The email address of the CC recipient.|

<h2 id="tocS_SubCustomField">SubCustomField</h2>
<!-- backwards compatibility -->
<a id="schemasubcustomfield"></a>
<a id="schema_SubCustomField"></a>
<a id="tocSsubcustomfield"></a>
<a id="tocssubcustomfield"></a>

```json
{
  "editor": "string",
  "name": "string",
  "required": false,
  "value": "string"
}
```

When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|editor|string|false|none|Used to create editable merge fields. When the value matches a role passed in with `signers`, that role can edit the data that was pre-filled to that field. This field is optional, but required when this custom field object is set to `required = true`.<br><br>**NOTE:** Editable merge fields are only supported for single signer requests (or the first signer in ordered signature requests). If used when there are multiple signers in an unordered signature request, the editor value is ignored and the field won't be editable.|
|name|string|true|none|The name of a custom field. When working with pre-filled data, the custom field's name must have a matching merge field name or the field will remain empty on the document during signing.|
|required|boolean|false|none|Used to set an editable merge field when working with pre-filled data. When `true`, the custom field must specify a signer role in `editor`.|
|value|string|false|none|The string that resolves (aka "pre-fills") to the merge field on the final document(s) used for signing.|

<h2 id="tocS_SubEditorOptions">SubEditorOptions</h2>
<!-- backwards compatibility -->
<a id="schemasubeditoroptions"></a>
<a id="schema_SubEditorOptions"></a>
<a id="tocSsubeditoroptions"></a>
<a id="tocssubeditoroptions"></a>

```json
{
  "allow_edit_signers": false,
  "allow_edit_documents": false
}
```

This allows the requester to specify editor options when a preparing a document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_edit_signers|boolean|false|none|Allows requesters to edit the list of signers|
|allow_edit_documents|boolean|false|none|Allows requesters to edit documents, including delete and add|

<h2 id="tocS_SubFieldOptions">SubFieldOptions</h2>
<!-- backwards compatibility -->
<a id="schemasubfieldoptions"></a>
<a id="schema_SubFieldOptions"></a>
<a id="tocSsubfieldoptions"></a>
<a id="tocssubfieldoptions"></a>

```json
{
  "date_format": "MM / DD / YYYY"
}
```

This allows the requester to specify field options for a signature request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_format|string|true|none|Allows requester to specify the date format (see list of allowed [formats](/api/reference/constants/#date-formats))<br><br>**NOTE:** Only available for Premium and higher.|

#### Enumerated Values

|Property|Value|
|---|---|
|date_format|MM / DD / YYYY|
|date_format|MM - DD - YYYY|
|date_format|DD / MM / YYYY|
|date_format|DD - MM - YYYY|
|date_format|YYYY / MM / DD|
|date_format|YYYY - MM - DD|

<h2 id="tocS_SubFormFieldGroup">SubFormFieldGroup</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldgroup"></a>
<a id="schema_SubFormFieldGroup"></a>
<a id="tocSsubformfieldgroup"></a>
<a id="tocssubformfieldgroup"></a>

```json
{
  "group_id": "string",
  "group_label": "string",
  "requirement": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string|true|none|ID of group. Use this to reference a specific group from the `group` value in `form_fields_per_document`.|
|group_label|string|true|none|Name of the group|
|requirement|string|true|none|Examples: `require_0-1` `require_1` `require_1-ormore`<br><br>- Check out the list of [acceptable `requirement` checkbox type values](/api/reference/constants/#checkbox-field-grouping).<br>- Check out the list of [acceptable `requirement` radio type fields](/api/reference/constants/#radio-field-grouping).<br>- Radio groups require **at least** two fields per group.|

<h2 id="tocS_SubFormFieldRule">SubFormFieldRule</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldrule"></a>
<a id="schema_SubFormFieldRule"></a>
<a id="tocSsubformfieldrule"></a>
<a id="tocssubformfieldrule"></a>

```json
{
  "id": "string",
  "trigger_operator": "AND",
  "triggers": [
    {
      "id": "string",
      "operator": "any",
      "value": "string",
      "values": [
        "string"
      ]
    }
  ],
  "actions": [
    {
      "field_id": "string",
      "group_id": "string",
      "hidden": true,
      "type": "change-field-visibility"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Must be unique across all defined rules.|
|trigger_operator|string|true|none|Currently only `AND` is supported. Support for `OR` is being worked on.|
|triggers|[[SubFormFieldRuleTrigger](#schemasubformfieldruletrigger)]|true|none|An array of trigger definitions, the "if this" part of "**if this**, then that". Currently only a single trigger per rule is allowed.|
|actions|[[SubFormFieldRuleAction](#schemasubformfieldruleaction)]|true|none|An array of action definitions, the "then that" part of "if this, **then that**". Any number of actions may be attached to a single rule.|

<h2 id="tocS_SubFormFieldRuleAction">SubFormFieldRuleAction</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldruleaction"></a>
<a id="schema_SubFormFieldRuleAction"></a>
<a id="tocSsubformfieldruleaction"></a>
<a id="tocssubformfieldruleaction"></a>

```json
{
  "field_id": "string",
  "group_id": "string",
  "hidden": true,
  "type": "change-field-visibility"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_id|string|false|none|**field_id** or **group_id** is required, but not both.<br><br>Must reference the `api_id` of an existing field defined within `form_fields_per_document`.<br><br>Cannot use with `group_id`. Trigger and action fields must belong to the same signer.|
|group_id|string|false|none|**group_id** or **field_id** is required, but not both.<br><br>Must reference the ID of an existing group defined within `form_field_groups`.<br><br>Cannot use with `field_id`. Trigger and action fields and groups must belong to the same signer.|
|hidden|boolean|true|none|`true` to hide the target field when rule is satisfied, otherwise `false`.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|change-field-visibility|
|type|change-group-visibility|

<h2 id="tocS_SubFormFieldRuleTrigger">SubFormFieldRuleTrigger</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldruletrigger"></a>
<a id="schema_SubFormFieldRuleTrigger"></a>
<a id="tocSsubformfieldruletrigger"></a>
<a id="tocssubformfieldruletrigger"></a>

```json
{
  "id": "string",
  "operator": "any",
  "value": "string",
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Must reference the `api_id` of an existing field defined within `form_fields_per_document`. Trigger and action fields and groups must belong to the same signer.|
|operator|string|true|none|Different field types allow different `operator` values:<br>- Field type of **text**:<br>  - **is**: exact match<br>  - **not**: not exact match<br>  - **match**: regular expression, without /. Example:<br>    - OK `[a-zA-Z0-9]`<br>    - Not OK `/[a-zA-Z0-9]/`<br>- Field type of **dropdown**:<br>  - **is**: exact match, single value<br>  - **not**: not exact match, single value<br>  - **any**: exact match, array of values.<br>  - **none**: not exact match, array of values.<br>- Field type of **checkbox**:<br>  - **is**: exact match, single value<br>  - **not**: not exact match, single value<br>- Field type of **radio**:<br>  - **is**: exact match, single value<br>  - **not**: not exact match, single value|
|value|string|false|none|**value** or **values** is required, but not both.<br><br>The value to match against **operator**.<br><br>- When **operator** is one of the following, **value** must be `String`:<br>  - `is`<br>  - `not`<br>  - `match`<br><br>Otherwise,<br>- **checkbox**: When **type** of trigger is **checkbox**, **value** must be `0` or `1`<br>- **radio**: When **type** of trigger is **radio**, **value** must be `1`|
|values|[string]|false|none|**values** or **value** is required, but not both.<br><br>The values to match against **operator** when it is one of the following:<br><br>- `any`<br>- `none`|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|any|
|operator|is|
|operator|match|
|operator|none|
|operator|not|

<h2 id="tocS_SubFormFieldsPerDocumentCheckbox">SubFormFieldsPerDocumentCheckbox</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumentcheckbox"></a>
<a id="schema_SubFormFieldsPerDocumentCheckbox"></a>
<a id="tocSsubformfieldsperdocumentcheckbox"></a>
<a id="tocssubformfieldsperdocumentcheckbox"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "checkbox",
  "width": 0,
  "x": 0,
  "y": 0,
  "group": "string",
  "is_checked": true
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|A yes/no checkbox. Use the `SubFormFieldsPerDocumentCheckbox` class.|
|group|string|false|none|String referencing group defined in `form_field_groups` parameter.|
|is_checked|boolean|true|none|`true` for checking the checkbox field by default, otherwise `false`.|

<h2 id="tocS_SubFormFieldsPerDocumentCheckboxMerge">SubFormFieldsPerDocumentCheckboxMerge</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumentcheckboxmerge"></a>
<a id="schema_SubFormFieldsPerDocumentCheckboxMerge"></a>
<a id="tocSsubformfieldsperdocumentcheckboxmerge"></a>
<a id="tocssubformfieldsperdocumentcheckboxmerge"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "checkbox-merge",
  "width": 0,
  "x": 0,
  "y": 0
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|A checkbox field that has default value set using pre-filled data. Use the `SubFormFieldsPerDocumentCheckboxMerge` class.|

<h2 id="tocS_SubFormFieldsPerDocumentDateSigned">SubFormFieldsPerDocumentDateSigned</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumentdatesigned"></a>
<a id="schema_SubFormFieldsPerDocumentDateSigned"></a>
<a id="tocSsubformfieldsperdocumentdatesigned"></a>
<a id="tocssubformfieldsperdocumentdatesigned"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "date_signed",
  "width": 0,
  "x": 0,
  "y": 0,
  "font_family": "helvetica",
  "font_size": 12
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|A date. Use the `SubFormFieldsPerDocumentDateSigned` class.|
|font_family|string|false|none|Font family for the field.|
|font_size|integer|false|none|The initial px font size for the field contents. Can be any integer value between `7` and `49`.<br><br>**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|font_family|helvetica|
|font_family|arial|
|font_family|courier|
|font_family|calibri|
|font_family|cambria|
|font_family|georgia|
|font_family|times|
|font_family|trebuchet|
|font_family|verdana|
|font_family|roboto|
|font_family|robotoMono|
|font_family|notoSans|
|font_family|notoSerif|
|font_family|notoCJK-JP-Regular|
|font_family|notoHebrew-Regular|
|font_family|notoSanThaiMerged|

<h2 id="tocS_SubFormFieldsPerDocumentDropdown">SubFormFieldsPerDocumentDropdown</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumentdropdown"></a>
<a id="schema_SubFormFieldsPerDocumentDropdown"></a>
<a id="tocSsubformfieldsperdocumentdropdown"></a>
<a id="tocssubformfieldsperdocumentdropdown"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "dropdown",
  "width": 0,
  "x": 0,
  "y": 0,
  "options": [
    "string"
  ],
  "content": "string",
  "font_family": "helvetica",
  "font_size": 12
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|An input field for dropdowns. Use the `SubFormFieldsPerDocumentDropdown` class.|
|options|[string]|true|none|Array of string values representing dropdown values.|
|content|string|false|none|Selected value in `options` array. Value must exist in array.|
|font_family|string|false|none|Font family for the field.|
|font_size|integer|false|none|The initial px font size for the field contents. Can be any integer value between `7` and `49`.<br><br>**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|font_family|helvetica|
|font_family|arial|
|font_family|courier|
|font_family|calibri|
|font_family|cambria|
|font_family|georgia|
|font_family|times|
|font_family|trebuchet|
|font_family|verdana|
|font_family|roboto|
|font_family|robotoMono|
|font_family|notoSans|
|font_family|notoSerif|
|font_family|notoCJK-JP-Regular|
|font_family|notoHebrew-Regular|
|font_family|notoSanThaiMerged|

<h2 id="tocS_SubFormFieldsPerDocumentHyperlink">SubFormFieldsPerDocumentHyperlink</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumenthyperlink"></a>
<a id="schema_SubFormFieldsPerDocumentHyperlink"></a>
<a id="tocSsubformfieldsperdocumenthyperlink"></a>
<a id="tocssubformfieldsperdocumenthyperlink"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "hyperlink",
  "width": 0,
  "x": 0,
  "y": 0,
  "content": "string",
  "content_url": "string",
  "font_family": "helvetica",
  "font_size": 12
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|A hyperlink field. Use the `SubFormFieldsPerDocumentHyperlink` class.|
|content|string|true|none|Link Text.|
|content_url|string|true|none|Link URL.|
|font_family|string|false|none|Font family for the field.|
|font_size|integer|false|none|The initial px font size for the field contents. Can be any integer value between `7` and `49`.<br><br>**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|font_family|helvetica|
|font_family|arial|
|font_family|courier|
|font_family|calibri|
|font_family|cambria|
|font_family|georgia|
|font_family|times|
|font_family|trebuchet|
|font_family|verdana|
|font_family|roboto|
|font_family|robotoMono|
|font_family|notoSans|
|font_family|notoSerif|
|font_family|notoCJK-JP-Regular|
|font_family|notoHebrew-Regular|
|font_family|notoSanThaiMerged|

<h2 id="tocS_SubFormFieldsPerDocumentInitials">SubFormFieldsPerDocumentInitials</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumentinitials"></a>
<a id="schema_SubFormFieldsPerDocumentInitials"></a>
<a id="tocSsubformfieldsperdocumentinitials"></a>
<a id="tocssubformfieldsperdocumentinitials"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "initials",
  "width": 0,
  "x": 0,
  "y": 0
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|An input field for initials. Use the `SubFormFieldsPerDocumentInitials` class.|

<h2 id="tocS_SubFormFieldsPerDocumentRadio">SubFormFieldsPerDocumentRadio</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumentradio"></a>
<a id="schema_SubFormFieldsPerDocumentRadio"></a>
<a id="tocSsubformfieldsperdocumentradio"></a>
<a id="tocssubformfieldsperdocumentradio"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "radio",
  "width": 0,
  "x": 0,
  "y": 0,
  "group": "string",
  "is_checked": true
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|An input field for radios. Use the `SubFormFieldsPerDocumentRadio` class.|
|group|string|true|none|String referencing group defined in `form_field_groups` parameter.|
|is_checked|boolean|true|none|`true` for checking the radio field by default, otherwise `false`. Only one radio field per group can be `true`.|

<h2 id="tocS_SubFormFieldsPerDocumentSignature">SubFormFieldsPerDocumentSignature</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumentsignature"></a>
<a id="schema_SubFormFieldsPerDocumentSignature"></a>
<a id="tocSsubformfieldsperdocumentsignature"></a>
<a id="tocssubformfieldsperdocumentsignature"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "signature",
  "width": 0,
  "x": 0,
  "y": 0
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|A signature input field. Use the `SubFormFieldsPerDocumentSignature` class.|

<h2 id="tocS_SubFormFieldsPerDocumentText">SubFormFieldsPerDocumentText</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumenttext"></a>
<a id="schema_SubFormFieldsPerDocumentText"></a>
<a id="tocSsubformfieldsperdocumenttext"></a>
<a id="tocssubformfieldsperdocumenttext"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "text",
  "width": 0,
  "x": 0,
  "y": 0,
  "placeholder": "string",
  "auto_fill_type": "string",
  "link_id": "string",
  "masked": true,
  "validation_type": "numbers_only",
  "validation_custom_regex": "string",
  "validation_custom_regex_format_label": "string",
  "content": "string",
  "font_family": "helvetica",
  "font_size": 12
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|A text input field. Use the `SubFormFieldsPerDocumentText` class.|
|placeholder|string|false|none|Placeholder value for text field.|
|auto_fill_type|string|false|none|Auto fill type for populating fields automatically. Check out the list of [auto fill types](/api/reference/constants/#auto-fill-types) to learn more about the possible values.|
|link_id|string|false|none|Link two or more text fields. Enter data into one linked text field, which automatically fill all other linked text fields.|
|masked|boolean|false|none|Masks entered data. For more information see [Masking sensitive information](https://faq.hellosign.com/hc/en-us/articles/360040742811-Masking-sensitive-information). `true` for masking the data in a text field, otherwise `false`.|
|validation_type|string|false|none|Each text field may contain a `validation_type` parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.<br><br>**NOTE:** When using `custom_regex` you are required to pass a second parameter `validation_custom_regex` and you can optionally provide `validation_custom_regex_format_label` for the error message the user will see in case of an invalid value.|
|validation_custom_regex|string|false|none|none|
|validation_custom_regex_format_label|string|false|none|none|
|content|string|false|none|Content of a `me_now` text field|
|font_family|string|false|none|Font family for the field.|
|font_size|integer|false|none|The initial px font size for the field contents. Can be any integer value between `7` and `49`.<br><br>**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|validation_type|numbers_only|
|validation_type|letters_only|
|validation_type|phone_number|
|validation_type|bank_routing_number|
|validation_type|bank_account_number|
|validation_type|email_address|
|validation_type|zip_code|
|validation_type|social_security_number|
|validation_type|employer_identification_number|
|validation_type|custom_regex|
|font_family|helvetica|
|font_family|arial|
|font_family|courier|
|font_family|calibri|
|font_family|cambria|
|font_family|georgia|
|font_family|times|
|font_family|trebuchet|
|font_family|verdana|
|font_family|roboto|
|font_family|robotoMono|
|font_family|notoSans|
|font_family|notoSerif|
|font_family|notoCJK-JP-Regular|
|font_family|notoHebrew-Regular|
|font_family|notoSanThaiMerged|

<h2 id="tocS_SubFormFieldsPerDocumentTextMerge">SubFormFieldsPerDocumentTextMerge</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumenttextmerge"></a>
<a id="schema_SubFormFieldsPerDocumentTextMerge"></a>
<a id="tocSsubformfieldsperdocumenttextmerge"></a>
<a id="tocssubformfieldsperdocumenttextmerge"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "text-merge",
  "width": 0,
  "x": 0,
  "y": 0,
  "font_family": "helvetica",
  "font_size": 12
}
```

This class extends `SubFormFieldsPerDocumentBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|
|type|string|true|none|A text field that has default text set using pre-filled data. Use the `SubFormFieldsPerDocumentTextMerge` class.|
|font_family|string|false|none|Font family for the field.|
|font_size|integer|false|none|The initial px font size for the field contents. Can be any integer value between `7` and `49`.<br><br>**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|font_family|helvetica|
|font_family|arial|
|font_family|courier|
|font_family|calibri|
|font_family|cambria|
|font_family|georgia|
|font_family|times|
|font_family|trebuchet|
|font_family|verdana|
|font_family|roboto|
|font_family|robotoMono|
|font_family|notoSans|
|font_family|notoSerif|
|font_family|notoCJK-JP-Regular|
|font_family|notoHebrew-Regular|
|font_family|notoSanThaiMerged|

<h2 id="tocS_SubFormFieldsPerDocumentTypeEnum">SubFormFieldsPerDocumentTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumenttypeenum"></a>
<a id="schema_SubFormFieldsPerDocumentTypeEnum"></a>
<a id="tocSsubformfieldsperdocumenttypeenum"></a>
<a id="tocssubformfieldsperdocumenttypeenum"></a>

```json
"checkbox"
```

<h2 id="tocS_SubFormFieldsPerDocumentFontEnum">SubFormFieldsPerDocumentFontEnum</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumentfontenum"></a>
<a id="schema_SubFormFieldsPerDocumentFontEnum"></a>
<a id="tocSsubformfieldsperdocumentfontenum"></a>
<a id="tocssubformfieldsperdocumentfontenum"></a>

```json
"helvetica"
```

<h2 id="tocS_SubFormFieldsPerDocumentBase">SubFormFieldsPerDocumentBase</h2>
<!-- backwards compatibility -->
<a id="schemasubformfieldsperdocumentbase"></a>
<a id="schema_SubFormFieldsPerDocumentBase"></a>
<a id="tocSsubformfieldsperdocumentbase"></a>
<a id="tocssubformfieldsperdocumentbase"></a>

```json
{
  "document_index": 0,
  "api_id": "string",
  "height": 0,
  "name": "string",
  "page": 0,
  "required": true,
  "signer": "string",
  "type": "string",
  "width": 0,
  "x": 0,
  "y": 0
}
```

The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

* Text Field use `SubFormFieldsPerDocumentText`
* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
* Radio Field use `SubFormFieldsPerDocumentRadio`
* Signature Field use `SubFormFieldsPerDocumentSignature`
* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
* Initials Field use `SubFormFieldsPerDocumentInitials`
* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_index|integer|true|none|Represents the integer index of the `file` or `file_url` document the field should be attached to.|
|api_id|string|true|none|An identifier for the field that is unique across all documents in the request.|
|height|integer|true|none|Size of the field in pixels.|
|name|string|false|none|Display name for the field.|
|page|integer \| null|false|none|Page in the document where the field should be placed (requires documents be PDF files).<br><br>- When the page number parameter is supplied, the API will use the new coordinate system.<br>- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.|
|required|boolean|true|none|Whether this field is required.|
|signer|string|true|none|Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.<br><br>**NOTE:** To set the value of the field as the preparer you must set this to `me_now`<br><br>**NOTE:** If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.|
|type|string|true|none|none|
|width|integer|true|none|Size of the field in pixels.|
|x|integer|true|none|Location coordinates of the field in pixels.|
|y|integer|true|none|Location coordinates of the field in pixels.|

<h2 id="tocS_SubSignatureRequestGroupedSigners">SubSignatureRequestGroupedSigners</h2>
<!-- backwards compatibility -->
<a id="schemasubsignaturerequestgroupedsigners"></a>
<a id="schema_SubSignatureRequestGroupedSigners"></a>
<a id="tocSsubsignaturerequestgroupedsigners"></a>
<a id="tocssubsignaturerequestgroupedsigners"></a>

```json
{
  "group": "string",
  "order": 0,
  "signers": [
    {
      "name": "string",
      "email_address": "user@example.com",
      "order": 0,
      "pin": "string",
      "sms_phone_number": "string",
      "sms_phone_number_type": "authentication"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|string|true|none|The name of the group.|
|order|integer \| null|false|none|The order the group is required to sign in. Use this instead of Signer-level `order`.|
|signers|[[SubSignatureRequestSigner](#schemasubsignaturerequestsigner)]|true|none|Signers belonging to this Group.<br><br>**NOTE:** Only `name`, `email_address`, and `pin` are available to Grouped Signers. We will ignore all other properties, even though they are listed below.|

<h2 id="tocS_SubMergeField">SubMergeField</h2>
<!-- backwards compatibility -->
<a id="schemasubmergefield"></a>
<a id="schema_SubMergeField"></a>
<a id="tocSsubmergefield"></a>
<a id="tocssubmergefield"></a>

```json
{
  "name": "string",
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the merge field. Must be unique.|
|type|string|true|none|The type of merge field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|checkbox|

<h2 id="tocS_SubOAuth">SubOAuth</h2>
<!-- backwards compatibility -->
<a id="schemasuboauth"></a>
<a id="schema_SubOAuth"></a>
<a id="tocSsuboauth"></a>
<a id="tocssuboauth"></a>

```json
{
  "callback_url": "string",
  "scopes": [
    "request_signature"
  ]
}
```

OAuth related parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|The callback URL to be used for OAuth flows. (Required if `oauth[scopes]` is provided)|
|scopes|[string]|false|none|A list of [OAuth scopes](/api/reference/tag/OAuth) to be granted to the app. (Required if `oauth[callback_url]` is provided).|

#### Enumerated Values

|Property|Value|
|---|---|
|scopes|request_signature|
|scopes|basic_account_info|
|scopes|account_access|
|scopes|signature_request_access|
|scopes|template_access|
|scopes|team_access|
|scopes|api_app_access|
|scopes|""|

<h2 id="tocS_SubOptions">SubOptions</h2>
<!-- backwards compatibility -->
<a id="schemasuboptions"></a>
<a id="schema_SubOptions"></a>
<a id="tocSsuboptions"></a>
<a id="tocssuboptions"></a>

```json
{
  "can_insert_everywhere": false
}
```

Additional options supported by API App.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_insert_everywhere|boolean|false|none|Determines if signers can use "Insert Everywhere" when signing a document.|

<h2 id="tocS_SubSignatureRequestSigner">SubSignatureRequestSigner</h2>
<!-- backwards compatibility -->
<a id="schemasubsignaturerequestsigner"></a>
<a id="schema_SubSignatureRequestSigner"></a>
<a id="tocSsubsignaturerequestsigner"></a>
<a id="tocssubsignaturerequestsigner"></a>

```json
{
  "name": "string",
  "email_address": "user@example.com",
  "order": 0,
  "pin": "string",
  "sms_phone_number": "string",
  "sms_phone_number_type": "authentication"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the signer.|
|email_address|string(email)|true|none|The email address of the signer.|
|order|integer \| null|false|none|The order the signer is required to sign in.|
|pin|string|false|none|The 4- to 12-character access code that will secure this signer's signature page.|
|sms_phone_number|string|false|none|An E.164 formatted phone number.<br><br>By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>**NOTE:** Not available in test mode and requires a Standard plan or higher.|
|sms_phone_number_type|string|false|none|Specifies the feature used with the `sms_phone_number`. Default `authentication`.<br><br>If `authentication`, signer is sent a verification code via SMS that is required to access the document.<br><br>If `delivery`, a link to complete the signature request is delivered via SMS (_and_ email).|

#### Enumerated Values

|Property|Value|
|---|---|
|sms_phone_number_type|authentication|
|sms_phone_number_type|delivery|

<h2 id="tocS_SubSignatureRequestTemplateSigner">SubSignatureRequestTemplateSigner</h2>
<!-- backwards compatibility -->
<a id="schemasubsignaturerequesttemplatesigner"></a>
<a id="schema_SubSignatureRequestTemplateSigner"></a>
<a id="tocSsubsignaturerequesttemplatesigner"></a>
<a id="tocssubsignaturerequesttemplatesigner"></a>

```json
{
  "role": "string",
  "name": "string",
  "email_address": "user@example.com",
  "pin": "string",
  "sms_phone_number": "string",
  "sms_phone_number_type": "authentication"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|Must match an existing role in chosen Template(s). It's case-sensitive.|
|name|string|true|none|The name of the signer.|
|email_address|string(email)|true|none|The email address of the signer.|
|pin|string|false|none|The 4- to 12-character access code that will secure this signer's signature page.|
|sms_phone_number|string|false|none|An E.164 formatted phone number.<br><br>By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>**NOTE:** Not available in test mode and requires a Standard plan or higher.|
|sms_phone_number_type|string|false|none|Specifies the feature used with the `sms_phone_number`. Default `authentication`.<br><br>If `authentication`, signer is sent a verification code via SMS that is required to access the document.<br><br>If `delivery`, a link to complete the signature request is delivered via SMS (_and_ email).|

#### Enumerated Values

|Property|Value|
|---|---|
|sms_phone_number_type|authentication|
|sms_phone_number_type|delivery|

<h2 id="tocS_SubUnclaimedDraftSigner">SubUnclaimedDraftSigner</h2>
<!-- backwards compatibility -->
<a id="schemasubunclaimeddraftsigner"></a>
<a id="schema_SubUnclaimedDraftSigner"></a>
<a id="tocSsubunclaimeddraftsigner"></a>
<a id="tocssubunclaimeddraftsigner"></a>

```json
{
  "email_address": "user@example.com",
  "name": "string",
  "order": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string(email)|true|none|The email address of the signer.|
|name|string|true|none|The name of the signer.|
|order|integer \| null|false|none|The order the signer is required to sign in.|

<h2 id="tocS_SubUnclaimedDraftTemplateSigner">SubUnclaimedDraftTemplateSigner</h2>
<!-- backwards compatibility -->
<a id="schemasubunclaimeddrafttemplatesigner"></a>
<a id="schema_SubUnclaimedDraftTemplateSigner"></a>
<a id="tocSsubunclaimeddrafttemplatesigner"></a>
<a id="tocssubunclaimeddrafttemplatesigner"></a>

```json
{
  "role": "string",
  "name": "string",
  "email_address": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|Must match an existing role in chosen Template(s).|
|name|string|true|none|The name of the signer filling the role of `role`.|
|email_address|string(email)|true|none|The email address of the signer filling the role of `role`.|

<h2 id="tocS_SubTemplateRole">SubTemplateRole</h2>
<!-- backwards compatibility -->
<a id="schemasubtemplaterole"></a>
<a id="schema_SubTemplateRole"></a>
<a id="tocSsubtemplaterole"></a>
<a id="tocssubtemplaterole"></a>

```json
{
  "name": "string",
  "order": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The role name of the signer that will be displayed when the template is used to create a signature request.|
|order|integer \| null|false|none|The order in which this signer role is required to sign.|

<h2 id="tocS_SubSigningOptions">SubSigningOptions</h2>
<!-- backwards compatibility -->
<a id="schemasubsigningoptions"></a>
<a id="schema_SubSigningOptions"></a>
<a id="tocSsubsigningoptions"></a>
<a id="tocssubsigningoptions"></a>

```json
{
  "default_type": "draw",
  "draw": false,
  "phone": false,
  "type": false,
  "upload": false,
  "force_advanced_signature_details": false
}
```

This allows the requester to specify the types allowed for creating a signature and specify another signing options.

**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.

**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_type|string|true|none|The default type shown (limited to the listed types)|
|draw|boolean|false|none|Allows drawing the signature|
|phone|boolean|false|none|Allows using a smartphone to email the signature|
|type|boolean|false|none|Allows typing the signature|
|upload|boolean|false|none|Allows uploading the signature|
|force_advanced_signature_details|boolean|false|none|Turning on advanced signature details for the signature request|

#### Enumerated Values

|Property|Value|
|---|---|
|default_type|draw|
|default_type|phone|
|default_type|type|
|default_type|upload|

<h2 id="tocS_SubWhiteLabelingOptions">SubWhiteLabelingOptions</h2>
<!-- backwards compatibility -->
<a id="schemasubwhitelabelingoptions"></a>
<a id="schema_SubWhiteLabelingOptions"></a>
<a id="tocSsubwhitelabelingoptions"></a>
<a id="tocssubwhitelabelingoptions"></a>

```json
{
  "header_background_color": "#1a1a1a",
  "legal_version": "terms1",
  "link_color": "#0061FE",
  "page_background_color": "#f7f8f9",
  "primary_button_color": "#0061FE",
  "primary_button_color_hover": "#0061FE",
  "primary_button_text_color": "#ffffff",
  "primary_button_text_color_hover": "#ffffff",
  "secondary_button_color": "#ffffff",
  "secondary_button_color_hover": "#ffffff",
  "secondary_button_text_color": "#0061FE",
  "secondary_button_text_color_hover": "#0061FE",
  "text_color1": "#808080",
  "text_color2": "#ffffff",
  "reset_to_default": true
}
```

An array of elements and values serialized to a string, to be used to customize the app's signer page. (Only applies to some API plans)

Take a look at our [white labeling guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header_background_color|string|false|none|none|
|legal_version|string|false|none|none|
|link_color|string|false|none|none|
|page_background_color|string|false|none|none|
|primary_button_color|string|false|none|none|
|primary_button_color_hover|string|false|none|none|
|primary_button_text_color|string|false|none|none|
|primary_button_text_color_hover|string|false|none|none|
|secondary_button_color|string|false|none|none|
|secondary_button_color_hover|string|false|none|none|
|secondary_button_text_color|string|false|none|none|
|secondary_button_text_color_hover|string|false|none|none|
|text_color1|string|false|none|none|
|text_color2|string|false|none|none|
|reset_to_default|boolean|false|none|Resets white labeling options to defaults. Only useful when updating an API App.|

#### Enumerated Values

|Property|Value|
|---|---|
|legal_version|terms1|
|legal_version|terms2|

<h2 id="tocS_TeamAddMemberRequest">TeamAddMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemateamaddmemberrequest"></a>
<a id="schema_TeamAddMemberRequest"></a>
<a id="tocSteamaddmemberrequest"></a>
<a id="tocsteamaddmemberrequest"></a>

```json
{
  "account_id": "string",
  "email_address": "user@example.com",
  "role": "Member"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|`account_id` or `email_address` is required. If both are provided, the account id prevails.<br><br>Account id of the user to invite to your Team.|
|email_address|string(email)|false|none|`account_id` or `email_address` is required, If both are provided, the account id prevails.<br><br>Email address of the user to invite to your Team.|
|role|string|false|none|A role member will take in a new Team.<br><br>**NOTE:** This parameter is used only if `team_id` is provided.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|Member|
|role|Developer|
|role|Team Manager|
|role|Admin|

<h2 id="tocS_TeamCreateRequest">TeamCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemateamcreaterequest"></a>
<a id="schema_TeamCreateRequest"></a>
<a id="tocSteamcreaterequest"></a>
<a id="tocsteamcreaterequest"></a>

```json
{
  "name": "Untitled Team"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of your Team.|

<h2 id="tocS_TeamRemoveMemberRequest">TeamRemoveMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemateamremovememberrequest"></a>
<a id="schema_TeamRemoveMemberRequest"></a>
<a id="tocSteamremovememberrequest"></a>
<a id="tocsteamremovememberrequest"></a>

```json
{
  "account_id": "string",
  "email_address": "user@example.com",
  "new_owner_email_address": "user@example.com",
  "new_team_id": "string",
  "new_role": "Member"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|**account_id** or **email_address** is required. If both are provided, the account id prevails.<br><br>Account id to remove from your Team.|
|email_address|string(email)|false|none|**account_id** or **email_address** is required. If both are provided, the account id prevails.<br><br>Email address of the Account to remove from your Team.|
|new_owner_email_address|string(email)|false|none|The email address of an Account on this Team to receive all documents, templates, and API apps (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data will remain with the removed Account.<br><br>**NOTE:** Only available for Enterprise plans.|
|new_team_id|string|false|none|Id of the new Team.|
|new_role|string|false|none|A new role member will take in a new Team.<br><br>**NOTE:** This parameter is used only if `new_team_id` is provided.|

#### Enumerated Values

|Property|Value|
|---|---|
|new_role|Member|
|new_role|Developer|
|new_role|Team Manager|
|new_role|Admin|

<h2 id="tocS_TeamUpdateRequest">TeamUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemateamupdaterequest"></a>
<a id="schema_TeamUpdateRequest"></a>
<a id="tocSteamupdaterequest"></a>
<a id="tocsteamupdaterequest"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of your Team.|

<h2 id="tocS_TemplateAddUserRequest">TemplateAddUserRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplateadduserrequest"></a>
<a id="schema_TemplateAddUserRequest"></a>
<a id="tocStemplateadduserrequest"></a>
<a id="tocstemplateadduserrequest"></a>

```json
{
  "account_id": "string",
  "email_address": "user@example.com",
  "skip_notification": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|The id of the Account to give access to the Template.<br>**NOTE:** The account id prevails if email address is also provided.|
|email_address|string(email)|false|none|The email address of the Account to give access to the Template.<br>**NOTE:** The account id prevails if it is also provided.|
|skip_notification|boolean|false|none|If set to `true`, the user does not receive an email notification when a template has been shared with them. Defaults to `false`.|

<h2 id="tocS_TemplateCreateRequest">TemplateCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplatecreaterequest"></a>
<a id="schema_TemplateCreateRequest"></a>
<a id="tocStemplatecreaterequest"></a>
<a id="tocstemplatecreaterequest"></a>

```json
{
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "allow_reassign": false,
  "attachments": [
    {
      "instructions": "string",
      "name": "string",
      "required": false,
      "signer_index": 0
    }
  ],
  "cc_roles": [
    "string"
  ],
  "client_id": "string",
  "field_options": {
    "date_format": "MM / DD / YYYY"
  },
  "form_field_groups": [
    {
      "group_id": "string",
      "group_label": "string",
      "requirement": "string"
    }
  ],
  "form_field_rules": [
    {
      "id": "string",
      "trigger_operator": "AND",
      "triggers": [
        {
          "id": "string",
          "operator": "any",
          "value": "string",
          "values": [
            "string"
          ]
        }
      ],
      "actions": [
        {
          "field_id": "string",
          "group_id": "string",
          "hidden": true,
          "type": "change-field-visibility"
        }
      ]
    }
  ],
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "string",
      "height": 0,
      "name": "string",
      "page": 0,
      "required": true,
      "signer": "string",
      "type": "string",
      "width": 0,
      "x": 0,
      "y": 0
    }
  ],
  "merge_fields": [
    {
      "name": "string",
      "type": "text"
    }
  ],
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signer_roles": [
    {
      "name": "string",
      "order": 0
    }
  ],
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "use_preexisting_fields": false,
  "ignore_text_tags_extraction_errors": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|allow_reassign|boolean|false|none|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|attachments|[[SubAttachment](#schemasubattachment)]|false|none|A list describing the attachments|
|cc_roles|[string]|false|none|The CC roles that must be assigned when using the template to send a signature request|
|client_id|string|false|none|Client id of the app you're using to create this draft. Used to apply the branding and callback url defined for the app.|
|field_options|[SubFieldOptions](#schemasubfieldoptions)|false|none|This allows the requester to specify field options for a signature request.|
|form_field_groups|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|none|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|form_field_rules|[[SubFormFieldRule](#schemasubformfieldrule)]|false|none|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|form_fields_per_document|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|true|none|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|merge_fields|[[SubMergeField](#schemasubmergefield)]|false|none|Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter.<br>If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document.|
|message|string|false|none|The default template email message.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|signer_roles|[[SubTemplateRole](#schemasubtemplaterole)]|true|none|An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.|
|subject|string|false|none|The template title (alias).|
|test_mode|boolean|false|none|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|use_preexisting_fields|boolean|false|none|Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).|
|ignore_text_tags_extraction_errors|boolean|false|none|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|

<h2 id="tocS_TemplateCreateEmbeddedDraftRequest">TemplateCreateEmbeddedDraftRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplatecreateembeddeddraftrequest"></a>
<a id="schema_TemplateCreateEmbeddedDraftRequest"></a>
<a id="tocStemplatecreateembeddeddraftrequest"></a>
<a id="tocstemplatecreateembeddeddraftrequest"></a>

```json
{
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "allow_ccs": true,
  "allow_reassign": false,
  "attachments": [
    {
      "instructions": "string",
      "name": "string",
      "required": false,
      "signer_index": 0
    }
  ],
  "cc_roles": [
    "string"
  ],
  "client_id": "string",
  "editor_options": {
    "allow_edit_signers": false,
    "allow_edit_documents": false
  },
  "field_options": {
    "date_format": "MM / DD / YYYY"
  },
  "force_signer_roles": false,
  "force_subject_message": false,
  "form_field_groups": [
    {
      "group_id": "string",
      "group_label": "string",
      "requirement": "string"
    }
  ],
  "form_field_rules": [
    {
      "id": "string",
      "trigger_operator": "AND",
      "triggers": [
        {
          "id": "string",
          "operator": "any",
          "value": "string",
          "values": [
            "string"
          ]
        }
      ],
      "actions": [
        {
          "field_id": "string",
          "group_id": "string",
          "hidden": true,
          "type": "change-field-visibility"
        }
      ]
    }
  ],
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "string",
      "height": 0,
      "name": "string",
      "page": 0,
      "required": true,
      "signer": "string",
      "type": "string",
      "width": 0,
      "x": 0,
      "y": 0
    }
  ],
  "merge_fields": [
    {
      "name": "string",
      "type": "text"
    }
  ],
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "show_preview": false,
  "show_progress_stepper": true,
  "signer_roles": [
    {
      "name": "string",
      "order": 0
    }
  ],
  "skip_me_now": false,
  "subject": "string",
  "test_mode": false,
  "title": "string",
  "use_preexisting_fields": false,
  "ignore_text_tags_extraction_errors": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|allow_ccs|boolean|false|none|This allows the requester to specify whether the user is allowed to provide email addresses to CC when creating a template.|
|allow_reassign|boolean|false|none|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|attachments|[[SubAttachment](#schemasubattachment)]|false|none|A list describing the attachments|
|cc_roles|[string]|false|none|The CC roles that must be assigned when using the template to send a signature request|
|client_id|string|true|none|Client id of the app you're using to create this draft. Used to apply the branding and callback url defined for the app.|
|editor_options|[SubEditorOptions](#schemasubeditoroptions)|false|none|This allows the requester to specify editor options when a preparing a document|
|field_options|[SubFieldOptions](#schemasubfieldoptions)|false|none|This allows the requester to specify field options for a signature request.|
|force_signer_roles|boolean|false|none|Provide users the ability to review/edit the template signer roles.|
|force_subject_message|boolean|false|none|Provide users the ability to review/edit the template subject and message.|
|form_field_groups|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|none|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|form_field_rules|[[SubFormFieldRule](#schemasubformfieldrule)]|false|none|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|form_fields_per_document|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|none|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|merge_fields|[[SubMergeField](#schemasubmergefield)]|false|none|Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter.<br>If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document.|
|message|string|false|none|The default template email message.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|show_preview|boolean|false|none|This allows the requester to enable the editor/preview experience.<br><br>- `show_preview=true`: Allows requesters to enable the editor/preview experience.<br>- `show_preview=false`: Allows requesters to disable the editor/preview experience.|
|show_progress_stepper|boolean|false|none|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|signer_roles|[[SubTemplateRole](#schemasubtemplaterole)]|false|none|An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.|
|skip_me_now|boolean|false|none|Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.|
|subject|string|false|none|The template title (alias).|
|test_mode|boolean|false|none|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|use_preexisting_fields|boolean|false|none|Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).|
|ignore_text_tags_extraction_errors|boolean|false|none|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|

<h2 id="tocS_TemplateRemoveUserRequest">TemplateRemoveUserRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplateremoveuserrequest"></a>
<a id="schema_TemplateRemoveUserRequest"></a>
<a id="tocStemplateremoveuserrequest"></a>
<a id="tocstemplateremoveuserrequest"></a>

```json
{
  "account_id": "string",
  "email_address": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|The id or email address of the Account to remove access to the Template. The account id prevails if both are provided.|
|email_address|string(email)|false|none|The id or email address of the Account to remove access to the Template. The account id prevails if both are provided.|

<h2 id="tocS_TemplateUpdateFilesRequest">TemplateUpdateFilesRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplateupdatefilesrequest"></a>
<a id="schema_TemplateUpdateFilesRequest"></a>
<a id="tocStemplateupdatefilesrequest"></a>
<a id="tocstemplateupdatefilesrequest"></a>

```json
{
  "client_id": "string",
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "message": "string",
  "subject": "string",
  "test_mode": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|Client id of the app you're using to update this template.|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|message|string|false|none|The new default template email message.|
|subject|string|false|none|The new default template email subject.|
|test_mode|boolean|false|none|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|

<h2 id="tocS_UnclaimedDraftCreateRequest">UnclaimedDraftCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimeddraftcreaterequest"></a>
<a id="schema_UnclaimedDraftCreateRequest"></a>
<a id="tocSunclaimeddraftcreaterequest"></a>
<a id="tocsunclaimeddraftcreaterequest"></a>

```json
{
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "allow_decline": false,
  "attachments": [
    {
      "instructions": "string",
      "name": "string",
      "required": false,
      "signer_index": 0
    }
  ],
  "cc_email_addresses": [
    "user@example.com"
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "field_options": {
    "date_format": "MM / DD / YYYY"
  },
  "form_field_groups": [
    {
      "group_id": "string",
      "group_label": "string",
      "requirement": "string"
    }
  ],
  "form_field_rules": [
    {
      "id": "string",
      "trigger_operator": "AND",
      "triggers": [
        {
          "id": "string",
          "operator": "any",
          "value": "string",
          "values": [
            "string"
          ]
        }
      ],
      "actions": [
        {
          "field_id": "string",
          "group_id": "string",
          "hidden": true,
          "type": "change-field-visibility"
        }
      ]
    }
  ],
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "string",
      "height": 0,
      "name": "string",
      "page": 0,
      "required": true,
      "signer": "string",
      "type": "string",
      "width": 0,
      "x": 0,
      "y": 0
    }
  ],
  "hide_text_tags": false,
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "show_progress_stepper": true,
  "signers": [
    {
      "email_address": "user@example.com",
      "name": "string",
      "order": 0
    }
  ],
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "signing_redirect_url": "string",
  "subject": "string",
  "test_mode": false,
  "type": "send_document",
  "use_preexisting_fields": false,
  "use_text_tags": false,
  "ignore_text_tags_extraction_errors": false,
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|attachments|[[SubAttachment](#schemasubattachment)]|false|none|A list describing the attachments|
|cc_email_addresses|[string(email)]|false|none|The email addresses that should be CCed.|
|client_id|string|false|none|Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|field_options|[SubFieldOptions](#schemasubfieldoptions)|false|none|This allows the requester to specify field options for a signature request.|
|form_field_groups|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|none|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|form_field_rules|[[SubFormFieldRule](#schemasubformfieldrule)]|false|none|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|form_fields_per_document|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|none|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|hide_text_tags|boolean|false|none|Send with a value of `true` if you wish to enable automatic Text Tag removal. Defaults to `false`. When using Text Tags it is preferred that you set this to `false` and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|show_progress_stepper|boolean|false|none|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|signers|[[SubUnclaimedDraftSigner](#schemasubunclaimeddraftsigner)]|false|none|Add Signers to your Unclaimed Draft Signature Request.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|type|string|true|none|The type of unclaimed draft to create. Use `send_document` to create a claimable file, and `request_signature` for a claimable signature request. If the type is `request_signature` then signers name and email_address are not optional.|
|use_preexisting_fields|boolean|false|none|Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.|
|use_text_tags|boolean|false|none|Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.|
|ignore_text_tags_extraction_errors|boolean|false|none|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.<br><br>**NOTE:** This does not correspond to the **expires_at** returned in the response.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|send_document|
|type|request_signature|

<h2 id="tocS_UnclaimedDraftCreateEmbeddedRequest">UnclaimedDraftCreateEmbeddedRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimeddraftcreateembeddedrequest"></a>
<a id="schema_UnclaimedDraftCreateEmbeddedRequest"></a>
<a id="tocSunclaimeddraftcreateembeddedrequest"></a>
<a id="tocsunclaimeddraftcreateembeddedrequest"></a>

```json
{
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "allow_ccs": true,
  "allow_decline": false,
  "allow_reassign": false,
  "attachments": [
    {
      "instructions": "string",
      "name": "string",
      "required": false,
      "signer_index": 0
    }
  ],
  "cc_email_addresses": [
    "user@example.com"
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "editor_options": {
    "allow_edit_signers": false,
    "allow_edit_documents": false
  },
  "field_options": {
    "date_format": "MM / DD / YYYY"
  },
  "force_signer_page": false,
  "force_subject_message": false,
  "form_field_groups": [
    {
      "group_id": "string",
      "group_label": "string",
      "requirement": "string"
    }
  ],
  "form_field_rules": [
    {
      "id": "string",
      "trigger_operator": "AND",
      "triggers": [
        {
          "id": "string",
          "operator": "any",
          "value": "string",
          "values": [
            "string"
          ]
        }
      ],
      "actions": [
        {
          "field_id": "string",
          "group_id": "string",
          "hidden": true,
          "type": "change-field-visibility"
        }
      ]
    }
  ],
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "string",
      "height": 0,
      "name": "string",
      "page": 0,
      "required": true,
      "signer": "string",
      "type": "string",
      "width": 0,
      "x": 0,
      "y": 0
    }
  ],
  "hide_text_tags": false,
  "hold_request": false,
  "is_for_embedded_signing": false,
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "requester_email_address": "user@example.com",
  "requesting_redirect_url": "string",
  "show_preview": true,
  "show_progress_stepper": true,
  "signers": [
    {
      "email_address": "user@example.com",
      "name": "string",
      "order": 0
    }
  ],
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "signing_redirect_url": "string",
  "skip_me_now": false,
  "subject": "string",
  "test_mode": false,
  "type": "request_signature",
  "use_preexisting_fields": false,
  "use_text_tags": false,
  "ignore_text_tags_extraction_errors": false,
  "populate_auto_fill_fields": false,
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string(binary)]|false|none|Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|file_urls|[string]|false|none|Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.|
|allow_ccs|boolean|false|none|This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft.|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|allow_reassign|boolean|false|none|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|attachments|[[SubAttachment](#schemasubattachment)]|false|none|A list describing the attachments|
|cc_email_addresses|[string(email)]|false|none|The email addresses that should be CCed.|
|client_id|string|true|none|Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.|
|editor_options|[SubEditorOptions](#schemasubeditoroptions)|false|none|This allows the requester to specify editor options when a preparing a document|
|field_options|[SubFieldOptions](#schemasubfieldoptions)|false|none|This allows the requester to specify field options for a signature request.|
|force_signer_page|boolean|false|none|Provide users the ability to review/edit the signers.|
|force_subject_message|boolean|false|none|Provide users the ability to review/edit the subject and message.|
|form_field_groups|[[SubFormFieldGroup](#schemasubformfieldgroup)]|false|none|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|form_field_rules|[[SubFormFieldRule](#schemasubformfieldrule)]|false|none|Conditional Logic rules for fields defined in `form_fields_per_document`.|
|form_fields_per_document|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|false|none|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|hide_text_tags|boolean|false|none|Send with a value of `true` if you wish to enable automatic Text Tag removal. Defaults to `false`. When using Text Tags it is preferred that you set this to `false` and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details.|
|hold_request|boolean|false|none|The request from this draft will not automatically send to signers post-claim if set to `true`. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.|
|is_for_embedded_signing|boolean|false|none|The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|requester_email_address|string(email)|true|none|The email address of the user that should be designated as the requester of this draft, if the draft type is `request_signature`.|
|requesting_redirect_url|string|false|none|The URL you want signers redirected to after they successfully request a signature.|
|show_preview|boolean|false|none|This allows the requester to enable the editor/preview experience.<br><br>- `show_preview=true`: Allows requesters to enable the editor/preview experience.<br>- `show_preview=false`: Allows requesters to disable the editor/preview experience.|
|show_progress_stepper|boolean|false|none|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|signers|[[SubUnclaimedDraftSigner](#schemasubunclaimeddraftsigner)]|false|none|Add Signers to your Unclaimed Draft Signature Request.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|skip_me_now|boolean|false|none|Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|test_mode|boolean|false|none|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|type|string|false|none|The type of the draft. By default this is `request_signature`, but you can set it to `send_document` if you want to self sign a document and download it.|
|use_preexisting_fields|boolean|false|none|Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.|
|use_text_tags|boolean|false|none|Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.|
|ignore_text_tags_extraction_errors|boolean|false|none|Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.|
|populate_auto_fill_fields|boolean|false|none|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|expires_at|integer \| null|false|none|When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.<br><br>**NOTE:** This does not correspond to the **expires_at** returned in the response.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|send_document|
|type|request_signature|

<h2 id="tocS_UnclaimedDraftCreateEmbeddedWithTemplateRequest">UnclaimedDraftCreateEmbeddedWithTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimeddraftcreateembeddedwithtemplaterequest"></a>
<a id="schema_UnclaimedDraftCreateEmbeddedWithTemplateRequest"></a>
<a id="tocSunclaimeddraftcreateembeddedwithtemplaterequest"></a>
<a id="tocsunclaimeddraftcreateembeddedwithtemplaterequest"></a>

```json
{
  "allow_decline": false,
  "allow_reassign": false,
  "ccs": [
    {
      "role": "string",
      "email_address": "user@example.com"
    }
  ],
  "client_id": "string",
  "custom_fields": [
    {
      "editor": "string",
      "name": "string",
      "required": false,
      "value": "string"
    }
  ],
  "editor_options": {
    "allow_edit_signers": false,
    "allow_edit_documents": false
  },
  "field_options": {
    "date_format": "MM / DD / YYYY"
  },
  "files": [
    "string"
  ],
  "file_urls": [
    "string"
  ],
  "force_signer_roles": false,
  "force_subject_message": false,
  "hold_request": false,
  "is_for_embedded_signing": false,
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "preview_only": false,
  "requester_email_address": "user@example.com",
  "requesting_redirect_url": "string",
  "show_preview": false,
  "show_progress_stepper": true,
  "signers": [
    {
      "role": "string",
      "name": "string",
      "email_address": "user@example.com"
    }
  ],
  "signing_options": {
    "default_type": "draw",
    "draw": false,
    "phone": false,
    "type": false,
    "upload": false,
    "force_advanced_signature_details": false
  },
  "signing_redirect_url": "string",
  "skip_me_now": false,
  "subject": "string",
  "template_ids": [
    "string"
  ],
  "test_mode": false,
  "title": "string",
  "populate_auto_fill_fields": false,
  "allow_ccs": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_decline|boolean|false|none|Allows signers to decline to sign a document if `true`. Defaults to `false`.|
|allow_reassign|boolean|false|none|Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.|
|ccs|[[SubCC](#schemasubcc)]|false|none|Add CC email recipients. Required when a CC role exists for the Template.|
|client_id|string|true|none|Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.|
|custom_fields|[[SubCustomField](#schemasubcustomfield)]|false|none|An array defining values and options for custom fields. Required when a custom field exists in the Template.|
|editor_options|[SubEditorOptions](#schemasubeditoroptions)|false|none|This allows the requester to specify editor options when a preparing a document|
|field_options|[SubFieldOptions](#schemasubfieldoptions)|false|none|This allows the requester to specify field options for a signature request.|
|files|[string(binary)]|false|none|Use `files[]` to append additional files to the signature request being created from the template. Dropbox Sign will parse the files for [text tags](https://app.hellosign.com/api/textTagsWalkthrough) and append it to the signature request. Text tags for signers not on the template(s) will be ignored.<br><br>**files** or **file_urls[]** is required, but not both.|
|file_urls|[string]|false|none|Use file_urls[] to append additional files to the signature request being created from the template. Dropbox Sign will download the file, then parse it for [text tags](https://app.hellosign.com/api/textTagsWalkthrough), and append to the signature request. Text tags for signers not on the template(s) will be ignored.<br><br>**files** or **file_urls[]** is required, but not both.|
|force_signer_roles|boolean|false|none|Provide users the ability to review/edit the template signer roles.|
|force_subject_message|boolean|false|none|Provide users the ability to review/edit the template subject and message.|
|hold_request|boolean|false|none|The request from this draft will not automatically send to signers post-claim if set to 1. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.|
|is_for_embedded_signing|boolean|false|none|The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.|
|message|string|false|none|The custom message in the email that will be sent to the signers.|
|metadata|object|false|none|Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.|
|preview_only|boolean|false|none|This allows the requester to enable the preview experience (i.e. does not allow the requester's end user to add any additional fields via the editor).<br><br>- `preview_only=true`: Allows requesters to enable the preview only experience.<br>- `preview_only=false`: Allows requesters to disable the preview only experience.<br><br>**NOTE:** This parameter overwrites `show_preview=1` (if set).|
|requester_email_address|string(email)|true|none|The email address of the user that should be designated as the requester of this draft.|
|requesting_redirect_url|string|false|none|The URL you want signers redirected to after they successfully request a signature.|
|show_preview|boolean|false|none|This allows the requester to enable the editor/preview experience.<br><br>- `show_preview=true`: Allows requesters to enable the editor/preview experience.<br>- `show_preview=false`: Allows requesters to disable the editor/preview experience.|
|show_progress_stepper|boolean|false|none|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|signers|[[SubUnclaimedDraftTemplateSigner](#schemasubunclaimeddrafttemplatesigner)]|false|none|Add Signers to your Templated-based Signature Request.|
|signing_options|[SubSigningOptions](#schemasubsigningoptions)|false|none|This allows the requester to specify the types allowed for creating a signature and specify another signing options.<br><br>**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.<br><br>**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|skip_me_now|boolean|false|none|Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.|
|subject|string|false|none|The subject in the email that will be sent to the signers.|
|template_ids|[string]|true|none|Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the templates will be used.|
|test_mode|boolean|false|none|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|
|title|string|false|none|The title you want to assign to the SignatureRequest.|
|populate_auto_fill_fields|boolean|false|none|Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.<br><br>**NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.|
|allow_ccs|boolean|false|none|This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft.|

<h2 id="tocS_UnclaimedDraftEditAndResendRequest">UnclaimedDraftEditAndResendRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimeddrafteditandresendrequest"></a>
<a id="schema_UnclaimedDraftEditAndResendRequest"></a>
<a id="tocSunclaimeddrafteditandresendrequest"></a>
<a id="tocsunclaimeddrafteditandresendrequest"></a>

```json
{
  "client_id": "string",
  "editor_options": {
    "allow_edit_signers": false,
    "allow_edit_documents": false
  },
  "is_for_embedded_signing": true,
  "requester_email_address": "user@example.com",
  "requesting_redirect_url": "string",
  "show_progress_stepper": true,
  "signing_redirect_url": "string",
  "test_mode": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.|
|editor_options|[SubEditorOptions](#schemasubeditoroptions)|false|none|This allows the requester to specify editor options when a preparing a document|
|is_for_embedded_signing|boolean|false|none|The request created from this draft will also be signable in embedded mode if set to `true`.|
|requester_email_address|string(email)|false|none|The email address of the user that should be designated as the requester of this draft. If not set, original requester's email address will be used.|
|requesting_redirect_url|string|false|none|The URL you want signers redirected to after they successfully request a signature.|
|show_progress_stepper|boolean|false|none|When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.|
|signing_redirect_url|string|false|none|The URL you want signers redirected to after they successfully sign.|
|test_mode|boolean|false|none|Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.|

<h2 id="tocS_AccountCreateResponse">AccountCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcreateresponse"></a>
<a id="schema_AccountCreateResponse"></a>
<a id="tocSaccountcreateresponse"></a>
<a id="tocsaccountcreateresponse"></a>

```json
{
  "account": {
    "account_id": "string",
    "email_address": "string",
    "is_locked": true,
    "is_paid_hs": true,
    "is_paid_hf": true,
    "quotas": {
      "api_signature_requests_left": 0,
      "documents_left": 0,
      "templates_total": 0,
      "templates_left": 0,
      "sms_verifications_left": 0,
      "num_fax_pages_left": 0
    },
    "callback_url": "string",
    "role_code": "string",
    "team_id": "string",
    "locale": "string",
    "usage": {
      "fax_pages_sent": 0
    },
    "settings": {
      "signer_access_codes": true,
      "sms_delivery": true,
      "sms_authentication": true
    }
  },
  "oauth_data": {
    "access_token": "string",
    "token_type": "string",
    "refresh_token": "string",
    "expires_in": 0,
    "state": "string"
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[AccountResponse](#schemaaccountresponse)|true|none|none|
|oauth_data|[OAuthTokenResponse](#schemaoauthtokenresponse)|false|none|none|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_AccountGetResponse">AccountGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountgetresponse"></a>
<a id="schema_AccountGetResponse"></a>
<a id="tocSaccountgetresponse"></a>
<a id="tocsaccountgetresponse"></a>

```json
{
  "account": {
    "account_id": "string",
    "email_address": "string",
    "is_locked": true,
    "is_paid_hs": true,
    "is_paid_hf": true,
    "quotas": {
      "api_signature_requests_left": 0,
      "documents_left": 0,
      "templates_total": 0,
      "templates_left": 0,
      "sms_verifications_left": 0,
      "num_fax_pages_left": 0
    },
    "callback_url": "string",
    "role_code": "string",
    "team_id": "string",
    "locale": "string",
    "usage": {
      "fax_pages_sent": 0
    },
    "settings": {
      "signer_access_codes": true,
      "sms_delivery": true,
      "sms_authentication": true
    }
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[AccountResponse](#schemaaccountresponse)|true|none|none|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_AccountVerifyResponse">AccountVerifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountverifyresponse"></a>
<a id="schema_AccountVerifyResponse"></a>
<a id="tocSaccountverifyresponse"></a>
<a id="tocsaccountverifyresponse"></a>

```json
{
  "account": {
    "email_address": "string"
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[AccountVerifyResponseAccount](#schemaaccountverifyresponseaccount)|false|none|none|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_ApiAppGetResponse">ApiAppGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiappgetresponse"></a>
<a id="schema_ApiAppGetResponse"></a>
<a id="tocSapiappgetresponse"></a>
<a id="tocsapiappgetresponse"></a>

```json
{
  "api_app": {
    "callback_url": "string",
    "client_id": "string",
    "created_at": 0,
    "domains": [
      "string"
    ],
    "name": "string",
    "is_approved": true,
    "oauth": {
      "callback_url": "string",
      "secret": "string",
      "scopes": [
        "string"
      ],
      "charges_users": true
    },
    "options": {
      "can_insert_everywhere": true
    },
    "owner_account": {
      "account_id": "string",
      "email_address": "string"
    },
    "white_labeling_options": {
      "header_background_color": "string",
      "legal_version": "string",
      "link_color": "string",
      "page_background_color": "string",
      "primary_button_color": "string",
      "primary_button_color_hover": "string",
      "primary_button_text_color": "string",
      "primary_button_text_color_hover": "string",
      "secondary_button_color": "string",
      "secondary_button_color_hover": "string",
      "secondary_button_text_color": "string",
      "secondary_button_text_color_hover": "string",
      "text_color1": "string",
      "text_color2": "string"
    }
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_app|[ApiAppResponse](#schemaapiappresponse)|true|none|Contains information about an API App.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_ApiAppListResponse">ApiAppListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplistresponse"></a>
<a id="schema_ApiAppListResponse"></a>
<a id="tocSapiapplistresponse"></a>
<a id="tocsapiapplistresponse"></a>

```json
{
  "api_apps": [
    {
      "callback_url": "string",
      "client_id": "string",
      "created_at": 0,
      "domains": [
        "string"
      ],
      "name": "string",
      "is_approved": true,
      "oauth": {
        "callback_url": "string",
        "secret": "string",
        "scopes": [
          "string"
        ],
        "charges_users": true
      },
      "options": {
        "can_insert_everywhere": true
      },
      "owner_account": {
        "account_id": "string",
        "email_address": "string"
      },
      "white_labeling_options": {
        "header_background_color": "string",
        "legal_version": "string",
        "link_color": "string",
        "page_background_color": "string",
        "primary_button_color": "string",
        "primary_button_color_hover": "string",
        "primary_button_text_color": "string",
        "primary_button_text_color_hover": "string",
        "secondary_button_color": "string",
        "secondary_button_color_hover": "string",
        "secondary_button_text_color": "string",
        "secondary_button_text_color_hover": "string",
        "text_color1": "string",
        "text_color2": "string"
      }
    }
  ],
  "list_info": {
    "num_pages": 0,
    "num_results": 0,
    "page": 0,
    "page_size": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_apps|[[ApiAppResponse](#schemaapiappresponse)]|true|none|Contains information about API Apps.|
|list_info|[ListInfoResponse](#schemalistinforesponse)|true|none|Contains pagination information about the data returned.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_BulkSendJobGetResponse">BulkSendJobGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulksendjobgetresponse"></a>
<a id="schema_BulkSendJobGetResponse"></a>
<a id="tocSbulksendjobgetresponse"></a>
<a id="tocsbulksendjobgetresponse"></a>

```json
{
  "bulk_send_job": {
    "bulk_send_job_id": "string",
    "total": 0,
    "is_creator": true,
    "created_at": 0
  },
  "list_info": {
    "num_pages": 0,
    "num_results": 0,
    "page": 0,
    "page_size": 0
  },
  "signature_requests": [
    {
      "test_mode": false,
      "signature_request_id": "string",
      "requester_email_address": "string",
      "title": "string",
      "original_title": "string",
      "subject": "string",
      "message": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "created_at": 0,
      "expires_at": 0,
      "is_complete": true,
      "is_declined": true,
      "has_error": true,
      "files_url": "string",
      "signing_url": "string",
      "details_url": "string",
      "cc_email_addresses": [
        "string"
      ],
      "signing_redirect_url": "string",
      "final_copy_uri": "string",
      "template_ids": [
        "string"
      ],
      "custom_fields": [
        {
          "type": "string",
          "name": "string",
          "required": true,
          "api_id": "string",
          "editor": "string"
        }
      ],
      "attachments": [
        {
          "id": "string",
          "signer": "string",
          "name": "string",
          "required": true,
          "instructions": "string",
          "uploaded_at": 0
        }
      ],
      "response_data": [
        {
          "api_id": "string",
          "signature_id": "string",
          "name": "string",
          "required": true,
          "type": "string"
        }
      ],
      "signatures": [
        {
          "signature_id": "string",
          "signer_group_guid": "string",
          "signer_email_address": "string",
          "signer_name": "string",
          "signer_role": "string",
          "order": 0,
          "status_code": "string",
          "decline_reason": "string",
          "signed_at": 0,
          "last_viewed_at": 0,
          "last_reminded_at": 0,
          "has_pin": true,
          "has_sms_auth": true,
          "has_sms_delivery": true,
          "sms_phone_number": "string",
          "reassigned_by": "string",
          "reassignment_reason": "string",
          "reassigned_from": "string",
          "error": "string"
        }
      ],
      "bulk_send_job_id": "string"
    }
  ],
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulk_send_job|[BulkSendJobResponse](#schemabulksendjobresponse)|true|none|Contains information about the BulkSendJob such as when it was created and how many signature requests are queued.|
|list_info|[ListInfoResponse](#schemalistinforesponse)|true|none|Contains pagination information about the data returned.|
|signature_requests|[[BulkSendJobGetResponseSignatureRequests](#schemabulksendjobgetresponsesignaturerequests)]|true|none|Contains information about the Signature Requests sent in bulk.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_BulkSendJobListResponse">BulkSendJobListResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulksendjoblistresponse"></a>
<a id="schema_BulkSendJobListResponse"></a>
<a id="tocSbulksendjoblistresponse"></a>
<a id="tocsbulksendjoblistresponse"></a>

```json
{
  "bulk_send_jobs": [
    {
      "bulk_send_job_id": "string",
      "total": 0,
      "is_creator": true,
      "created_at": 0
    }
  ],
  "list_info": {
    "num_pages": 0,
    "num_results": 0,
    "page": 0,
    "page_size": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulk_send_jobs|[[BulkSendJobResponse](#schemabulksendjobresponse)]|true|none|Contains a list of BulkSendJobs that the API caller has access to.|
|list_info|[ListInfoResponse](#schemalistinforesponse)|true|none|Contains pagination information about the data returned.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_BulkSendJobSendResponse">BulkSendJobSendResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulksendjobsendresponse"></a>
<a id="schema_BulkSendJobSendResponse"></a>
<a id="tocSbulksendjobsendresponse"></a>
<a id="tocsbulksendjobsendresponse"></a>

```json
{
  "bulk_send_job": {
    "bulk_send_job_id": "string",
    "total": 0,
    "is_creator": true,
    "created_at": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulk_send_job|[BulkSendJobResponse](#schemabulksendjobresponse)|true|none|Contains information about the BulkSendJob such as when it was created and how many signature requests are queued.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_DocumentFieldDetectionResponse">DocumentFieldDetectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentfielddetectionresponse"></a>
<a id="schema_DocumentFieldDetectionResponse"></a>
<a id="tocSdocumentfielddetectionresponse"></a>
<a id="tocsdocumentfielddetectionresponse"></a>

```json
{
  "detection_result": {
    "document_hash": "stringstringstringstringstringstringstringstringstringstringstri",
    "detection_mode": "annotations",
    "page_count": 0,
    "pages_analyzed": "all",
    "detected_at": 0,
    "form_fields_per_document": [
      {
        "document_index": 0,
        "api_id": "string",
        "height": 0,
        "name": "string",
        "page": 0,
        "required": true,
        "signer": "string",
        "type": "string",
        "width": 0,
        "x": 0,
        "y": 0
      }
    ],
    "form_field_groups": [
      {
        "group_id": "string",
        "group_label": "string",
        "requirement": "string"
      }
    ],
    "warnings": [
      {
        "warning_msg": "string",
        "warning_name": "string"
      }
    ],
    "errors": [
      {
        "error_msg": "string",
        "error_path": "string",
        "error_name": "string"
      }
    ],
    "suggestions": [
      "string"
    ]
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detection_result|[DocumentFieldDetectionResponseDetectionResult](#schemadocumentfielddetectionresponsedetectionresult)|true|none|none|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_EmbeddedEditUrlResponse">EmbeddedEditUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedediturlresponse"></a>
<a id="schema_EmbeddedEditUrlResponse"></a>
<a id="tocSembeddedediturlresponse"></a>
<a id="tocsembeddedediturlresponse"></a>

```json
{
  "embedded": {
    "edit_url": "string",
    "expires_at": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embedded|[EmbeddedEditUrlResponseEmbedded](#schemaembeddedediturlresponseembedded)|true|none|An embedded template object.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_EmbeddedSignUrlResponse">EmbeddedSignUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedsignurlresponse"></a>
<a id="schema_EmbeddedSignUrlResponse"></a>
<a id="tocSembeddedsignurlresponse"></a>
<a id="tocsembeddedsignurlresponse"></a>

```json
{
  "embedded": {
    "sign_url": "string",
    "expires_at": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embedded|[EmbeddedSignUrlResponseEmbedded](#schemaembeddedsignurlresponseembedded)|true|none|An object that contains necessary information to set up embedded signing.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "error_msg": "string",
    "error_path": "string",
    "error_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorResponseError](#schemaerrorresponseerror)|true|none|Contains information about an error that occurred.|

<h2 id="tocS_FaxGetResponse">FaxGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemafaxgetresponse"></a>
<a id="schema_FaxGetResponse"></a>
<a id="tocSfaxgetresponse"></a>
<a id="tocsfaxgetresponse"></a>

```json
{
  "fax": {
    "fax_id": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "sender": "string",
    "files_url": "string",
    "final_copy_uri": "string",
    "transmissions": [
      {
        "recipient": "string",
        "status_code": "success",
        "sent_at": 0
      }
    ],
    "test_mode": false
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fax|[FaxResponse](#schemafaxresponse)|true|none|none|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_FaxLineResponse">FaxLineResponse</h2>
<!-- backwards compatibility -->
<a id="schemafaxlineresponse"></a>
<a id="schema_FaxLineResponse"></a>
<a id="tocSfaxlineresponse"></a>
<a id="tocsfaxlineresponse"></a>

```json
{
  "fax_line": {
    "number": "string",
    "created_at": 0,
    "updated_at": 0,
    "accounts": [
      {
        "account_id": "string",
        "email_address": "string",
        "is_locked": true,
        "is_paid_hs": true,
        "is_paid_hf": true,
        "quotas": {
          "api_signature_requests_left": 0,
          "documents_left": 0,
          "templates_total": 0,
          "templates_left": 0,
          "sms_verifications_left": 0,
          "num_fax_pages_left": 0
        },
        "callback_url": "string",
        "role_code": "string",
        "team_id": "string",
        "locale": "string",
        "usage": {
          "fax_pages_sent": 0
        },
        "settings": {
          "signer_access_codes": true,
          "sms_delivery": true,
          "sms_authentication": true
        }
      }
    ]
  },
  "warnings": {
    "warning_msg": "string",
    "warning_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fax_line|[FaxLineResponseFaxLine](#schemafaxlineresponsefaxline)|true|none|none|
|warnings|[WarningResponse](#schemawarningresponse)|false|none|A list of warnings.|

<h2 id="tocS_FaxLineAreaCodeGetResponse">FaxLineAreaCodeGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemafaxlineareacodegetresponse"></a>
<a id="schema_FaxLineAreaCodeGetResponse"></a>
<a id="tocSfaxlineareacodegetresponse"></a>
<a id="tocsfaxlineareacodegetresponse"></a>

```json
{
  "area_codes": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area_codes|[integer]|true|none|none|

<h2 id="tocS_FaxLineListResponse">FaxLineListResponse</h2>
<!-- backwards compatibility -->
<a id="schemafaxlinelistresponse"></a>
<a id="schema_FaxLineListResponse"></a>
<a id="tocSfaxlinelistresponse"></a>
<a id="tocsfaxlinelistresponse"></a>

```json
{
  "list_info": {
    "num_pages": 0,
    "num_results": 0,
    "page": 0,
    "page_size": 0
  },
  "fax_lines": [
    {
      "number": "string",
      "created_at": 0,
      "updated_at": 0,
      "accounts": [
        {
          "account_id": "string",
          "email_address": "string",
          "is_locked": true,
          "is_paid_hs": true,
          "is_paid_hf": true,
          "quotas": {
            "api_signature_requests_left": 0,
            "documents_left": 0,
            "templates_total": 0,
            "templates_left": 0,
            "sms_verifications_left": 0,
            "num_fax_pages_left": 0
          },
          "callback_url": "string",
          "role_code": "string",
          "team_id": "string",
          "locale": "string",
          "usage": {
            "fax_pages_sent": 0
          },
          "settings": {
            "signer_access_codes": true,
            "sms_delivery": true,
            "sms_authentication": true
          }
        }
      ]
    }
  ],
  "warnings": {
    "warning_msg": "string",
    "warning_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list_info|[ListInfoResponse](#schemalistinforesponse)|true|none|Contains pagination information about the data returned.|
|fax_lines|[[FaxLineResponseFaxLine](#schemafaxlineresponsefaxline)]|true|none|none|
|warnings|[WarningResponse](#schemawarningresponse)|false|none|A list of warnings.|

<h2 id="tocS_FaxListResponse">FaxListResponse</h2>
<!-- backwards compatibility -->
<a id="schemafaxlistresponse"></a>
<a id="schema_FaxListResponse"></a>
<a id="tocSfaxlistresponse"></a>
<a id="tocsfaxlistresponse"></a>

```json
{
  "faxes": [
    {
      "fax_id": "string",
      "title": "string",
      "original_title": "string",
      "subject": "string",
      "message": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "created_at": 0,
      "sender": "string",
      "files_url": "string",
      "final_copy_uri": "string",
      "transmissions": [
        {
          "recipient": "string",
          "status_code": "success",
          "sent_at": 0
        }
      ],
      "test_mode": false
    }
  ],
  "list_info": {
    "num_pages": 0,
    "num_results": 0,
    "page": 0,
    "page_size": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|faxes|[[FaxResponse](#schemafaxresponse)]|true|none|none|
|list_info|[ListInfoResponse](#schemalistinforesponse)|true|none|Contains pagination information about the data returned.|

<h2 id="tocS_FileResponse">FileResponse</h2>
<!-- backwards compatibility -->
<a id="schemafileresponse"></a>
<a id="schema_FileResponse"></a>
<a id="tocSfileresponse"></a>
<a id="tocsfileresponse"></a>

```json
{
  "file_url": "string",
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_url|string|true|none|URL to the file.|
|expires_at|integer|true|none|When the link expires.|

<h2 id="tocS_FileResponseDataUri">FileResponseDataUri</h2>
<!-- backwards compatibility -->
<a id="schemafileresponsedatauri"></a>
<a id="schema_FileResponseDataUri"></a>
<a id="tocSfileresponsedatauri"></a>
<a id="tocsfileresponsedatauri"></a>

```json
{
  "data_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_uri|string|true|none|File as base64 encoded string.|

<h2 id="tocS_ReportCreateResponse">ReportCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportcreateresponse"></a>
<a id="schema_ReportCreateResponse"></a>
<a id="tocSreportcreateresponse"></a>
<a id="tocsreportcreateresponse"></a>

```json
{
  "report": {
    "success": "string",
    "start_date": "string",
    "end_date": "string",
    "report_type": [
      "user_activity"
    ]
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|report|[ReportResponse](#schemareportresponse)|true|none|Contains information about the report request.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_SignatureRequestGetResponse">SignatureRequestGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestgetresponse"></a>
<a id="schema_SignatureRequestGetResponse"></a>
<a id="tocSsignaturerequestgetresponse"></a>
<a id="tocssignaturerequestgetresponse"></a>

```json
{
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|true|none|Contains information about a signature request.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_SignatureRequestListResponse">SignatureRequestListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestlistresponse"></a>
<a id="schema_SignatureRequestListResponse"></a>
<a id="tocSsignaturerequestlistresponse"></a>
<a id="tocssignaturerequestlistresponse"></a>

```json
{
  "signature_requests": [
    {
      "test_mode": false,
      "signature_request_id": "string",
      "requester_email_address": "string",
      "title": "string",
      "original_title": "string",
      "subject": "string",
      "message": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "created_at": 0,
      "expires_at": 0,
      "is_complete": true,
      "is_declined": true,
      "has_error": true,
      "files_url": "string",
      "signing_url": "string",
      "details_url": "string",
      "cc_email_addresses": [
        "string"
      ],
      "signing_redirect_url": "string",
      "final_copy_uri": "string",
      "template_ids": [
        "string"
      ],
      "custom_fields": [
        {
          "type": "string",
          "name": "string",
          "required": true,
          "api_id": "string",
          "editor": "string"
        }
      ],
      "attachments": [
        {
          "id": "string",
          "signer": "string",
          "name": "string",
          "required": true,
          "instructions": "string",
          "uploaded_at": 0
        }
      ],
      "response_data": [
        {
          "api_id": "string",
          "signature_id": "string",
          "name": "string",
          "required": true,
          "type": "string"
        }
      ],
      "signatures": [
        {
          "signature_id": "string",
          "signer_group_guid": "string",
          "signer_email_address": "string",
          "signer_name": "string",
          "signer_role": "string",
          "order": 0,
          "status_code": "string",
          "decline_reason": "string",
          "signed_at": 0,
          "last_viewed_at": 0,
          "last_reminded_at": 0,
          "has_pin": true,
          "has_sms_auth": true,
          "has_sms_delivery": true,
          "sms_phone_number": "string",
          "reassigned_by": "string",
          "reassignment_reason": "string",
          "reassigned_from": "string",
          "error": "string"
        }
      ],
      "bulk_send_job_id": "string"
    }
  ],
  "list_info": {
    "num_pages": 0,
    "num_results": 0,
    "page": 0,
    "page_size": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signature_requests|[[SignatureRequestResponse](#schemasignaturerequestresponse)]|true|none|Contains information about signature requests.|
|list_info|[ListInfoResponse](#schemalistinforesponse)|true|none|Contains pagination information about the data returned.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_AccountResponse">AccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponse"></a>
<a id="schema_AccountResponse"></a>
<a id="tocSaccountresponse"></a>
<a id="tocsaccountresponse"></a>

```json
{
  "account_id": "string",
  "email_address": "string",
  "is_locked": true,
  "is_paid_hs": true,
  "is_paid_hf": true,
  "quotas": {
    "api_signature_requests_left": 0,
    "documents_left": 0,
    "templates_total": 0,
    "templates_left": 0,
    "sms_verifications_left": 0,
    "num_fax_pages_left": 0
  },
  "callback_url": "string",
  "role_code": "string",
  "team_id": "string",
  "locale": "string",
  "usage": {
    "fax_pages_sent": 0
  },
  "settings": {
    "signer_access_codes": true,
    "sms_delivery": true,
    "sms_authentication": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|The ID of the Account|
|email_address|string|false|none|The email address associated with the Account.|
|is_locked|boolean|false|none|Returns `true` if the user has been locked out of their account by a team admin.|
|is_paid_hs|boolean|false|none|Returns `true` if the user has a paid Dropbox Sign account.|
|is_paid_hf|boolean|false|none|Returns `true` if the user has a paid HelloFax account.|
|quotas|[AccountResponseQuotas](#schemaaccountresponsequotas)|false|none|Details concerning remaining monthly quotas.|
|callback_url|string \| null|false|none|The URL that Dropbox Sign events will `POST` to.|
|role_code|string \| null|false|none|The membership role for the team.|
|team_id|string \| null|false|none|The id of the team account belongs to.|
|locale|string \| null|false|none|The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.|
|usage|[AccountResponseUsage](#schemaaccountresponseusage)|false|none|Details concerning monthly usage|
|settings|[AccountResponseSettings](#schemaaccountresponsesettings)|false|none|Subset of configured settings|

<h2 id="tocS_OAuthTokenResponse">OAuthTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoauthtokenresponse"></a>
<a id="schema_OAuthTokenResponse"></a>
<a id="tocSoauthtokenresponse"></a>
<a id="tocsoauthtokenresponse"></a>

```json
{
  "access_token": "string",
  "token_type": "string",
  "refresh_token": "string",
  "expires_in": 0,
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|none|
|token_type|string|false|none|none|
|refresh_token|string|false|none|none|
|expires_in|integer|false|none|Number of seconds until the `access_token` expires. Uses epoch time.|
|state|string \| null|false|none|none|

<h2 id="tocS_AccountResponseQuotas">AccountResponseQuotas</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponsequotas"></a>
<a id="schema_AccountResponseQuotas"></a>
<a id="tocSaccountresponsequotas"></a>
<a id="tocsaccountresponsequotas"></a>

```json
{
  "api_signature_requests_left": 0,
  "documents_left": 0,
  "templates_total": 0,
  "templates_left": 0,
  "sms_verifications_left": 0,
  "num_fax_pages_left": 0
}
```

Details concerning remaining monthly quotas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_signature_requests_left|integer \| null|false|none|API signature requests remaining.|
|documents_left|integer \| null|false|none|Signature requests remaining.|
|templates_total|integer \| null|false|none|Total API templates allowed.|
|templates_left|integer \| null|false|none|API templates remaining.|
|sms_verifications_left|integer \| null|false|none|SMS verifications remaining.|
|num_fax_pages_left|integer \| null|false|none|Number of fax pages left|

<h2 id="tocS_AccountResponseSettings">AccountResponseSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponsesettings"></a>
<a id="schema_AccountResponseSettings"></a>
<a id="tocSaccountresponsesettings"></a>
<a id="tocsaccountresponsesettings"></a>

```json
{
  "signer_access_codes": true,
  "sms_delivery": true,
  "sms_authentication": true
}
```

Subset of configured settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signer_access_codes|boolean|false|none|Returns `true` if _Custom access codes_ is enabled in Admin Console. [Read more](https://developers.hellosign.com/docs/sms-tools/walkthrough).|
|sms_delivery|boolean|false|none|Returns `true` if _Text message_ is enabled in Admin Console. [Read more](https://developers.hellosign.com/docs/sms-tools/walkthrough).|
|sms_authentication|boolean|false|none|Returns `true` if _Signer authentication_ is enabled in Admin Console. [Read more](https://developers.hellosign.com/docs/sms-tools/walkthrough).|

<h2 id="tocS_AccountResponseUsage">AccountResponseUsage</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponseusage"></a>
<a id="schema_AccountResponseUsage"></a>
<a id="tocSaccountresponseusage"></a>
<a id="tocsaccountresponseusage"></a>

```json
{
  "fax_pages_sent": 0
}
```

Details concerning monthly usage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fax_pages_sent|integer \| null|false|none|Number of fax pages sent|

<h2 id="tocS_AccountVerifyResponseAccount">AccountVerifyResponseAccount</h2>
<!-- backwards compatibility -->
<a id="schemaaccountverifyresponseaccount"></a>
<a id="schema_AccountVerifyResponseAccount"></a>
<a id="tocSaccountverifyresponseaccount"></a>
<a id="tocsaccountverifyresponseaccount"></a>

```json
{
  "email_address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string|false|none|The email address associated with the Account.|

<h2 id="tocS_ApiAppResponse">ApiAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiappresponse"></a>
<a id="schema_ApiAppResponse"></a>
<a id="tocSapiappresponse"></a>
<a id="tocsapiappresponse"></a>

```json
{
  "callback_url": "string",
  "client_id": "string",
  "created_at": 0,
  "domains": [
    "string"
  ],
  "name": "string",
  "is_approved": true,
  "oauth": {
    "callback_url": "string",
    "secret": "string",
    "scopes": [
      "string"
    ],
    "charges_users": true
  },
  "options": {
    "can_insert_everywhere": true
  },
  "owner_account": {
    "account_id": "string",
    "email_address": "string"
  },
  "white_labeling_options": {
    "header_background_color": "string",
    "legal_version": "string",
    "link_color": "string",
    "page_background_color": "string",
    "primary_button_color": "string",
    "primary_button_color_hover": "string",
    "primary_button_text_color": "string",
    "primary_button_text_color_hover": "string",
    "secondary_button_color": "string",
    "secondary_button_color_hover": "string",
    "secondary_button_text_color": "string",
    "secondary_button_text_color_hover": "string",
    "text_color1": "string",
    "text_color2": "string"
  }
}
```

Contains information about an API App.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string \| null|false|none|The app's callback URL (for events)|
|client_id|string|false|none|The app's client id|
|created_at|integer|false|none|The time that the app was created|
|domains|[string]|false|none|The domain name(s) associated with the app|
|name|string|false|none|The name of the app|
|is_approved|boolean|false|none|Boolean to indicate if the app has been approved|
|oauth|[ApiAppResponseOAuth](#schemaapiappresponseoauth)|false|none|An object describing the app's OAuth properties, or null if OAuth is not configured for the app.|
|options|[ApiAppResponseOptions](#schemaapiappresponseoptions)|false|none|An object with options that override account settings.|
|owner_account|[ApiAppResponseOwnerAccount](#schemaapiappresponseowneraccount)|false|none|An object describing the app's owner|
|white_labeling_options|[ApiAppResponseWhiteLabelingOptions](#schemaapiappresponsewhitelabelingoptions)|false|none|An object with options to customize the app's signer page|

<h2 id="tocS_ApiAppResponseOAuth">ApiAppResponseOAuth</h2>
<!-- backwards compatibility -->
<a id="schemaapiappresponseoauth"></a>
<a id="schema_ApiAppResponseOAuth"></a>
<a id="tocSapiappresponseoauth"></a>
<a id="tocsapiappresponseoauth"></a>

```json
{
  "callback_url": "string",
  "secret": "string",
  "scopes": [
    "string"
  ],
  "charges_users": true
}
```

An object describing the app's OAuth properties, or null if OAuth is not configured for the app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|The app's OAuth callback URL.|
|secret|string \| null|false|none|The app's OAuth secret, or null if the app does not belong to user.|
|scopes|[string]|false|none|Array of OAuth scopes used by the app.|
|charges_users|boolean|false|none|Boolean indicating whether the app owner or the account granting permission is billed for OAuth requests.|

<h2 id="tocS_ApiAppResponseOptions">ApiAppResponseOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapiappresponseoptions"></a>
<a id="schema_ApiAppResponseOptions"></a>
<a id="tocSapiappresponseoptions"></a>
<a id="tocsapiappresponseoptions"></a>

```json
{
  "can_insert_everywhere": true
}
```

An object with options that override account settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_insert_everywhere|boolean|false|none|Boolean denoting if signers can "Insert Everywhere" in one click while signing a document|

<h2 id="tocS_ApiAppResponseOwnerAccount">ApiAppResponseOwnerAccount</h2>
<!-- backwards compatibility -->
<a id="schemaapiappresponseowneraccount"></a>
<a id="schema_ApiAppResponseOwnerAccount"></a>
<a id="tocSapiappresponseowneraccount"></a>
<a id="tocsapiappresponseowneraccount"></a>

```json
{
  "account_id": "string",
  "email_address": "string"
}
```

An object describing the app's owner

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|The owner account's ID|
|email_address|string|false|none|The owner account's email address|

<h2 id="tocS_ApiAppResponseWhiteLabelingOptions">ApiAppResponseWhiteLabelingOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapiappresponsewhitelabelingoptions"></a>
<a id="schema_ApiAppResponseWhiteLabelingOptions"></a>
<a id="tocSapiappresponsewhitelabelingoptions"></a>
<a id="tocsapiappresponsewhitelabelingoptions"></a>

```json
{
  "header_background_color": "string",
  "legal_version": "string",
  "link_color": "string",
  "page_background_color": "string",
  "primary_button_color": "string",
  "primary_button_color_hover": "string",
  "primary_button_text_color": "string",
  "primary_button_text_color_hover": "string",
  "secondary_button_color": "string",
  "secondary_button_color_hover": "string",
  "secondary_button_text_color": "string",
  "secondary_button_text_color_hover": "string",
  "text_color1": "string",
  "text_color2": "string"
}
```

An object with options to customize the app's signer page

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header_background_color|string|false|none|none|
|legal_version|string|false|none|none|
|link_color|string|false|none|none|
|page_background_color|string|false|none|none|
|primary_button_color|string|false|none|none|
|primary_button_color_hover|string|false|none|none|
|primary_button_text_color|string|false|none|none|
|primary_button_text_color_hover|string|false|none|none|
|secondary_button_color|string|false|none|none|
|secondary_button_color_hover|string|false|none|none|
|secondary_button_text_color|string|false|none|none|
|secondary_button_text_color_hover|string|false|none|none|
|text_color1|string|false|none|none|
|text_color2|string|false|none|none|

<h2 id="tocS_BulkSendJobResponse">BulkSendJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulksendjobresponse"></a>
<a id="schema_BulkSendJobResponse"></a>
<a id="tocSbulksendjobresponse"></a>
<a id="tocsbulksendjobresponse"></a>

```json
{
  "bulk_send_job_id": "string",
  "total": 0,
  "is_creator": true,
  "created_at": 0
}
```

Contains information about the BulkSendJob such as when it was created and how many signature requests are queued.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulk_send_job_id|string \| null|false|none|The id of the BulkSendJob.|
|total|integer|false|none|The total amount of Signature Requests queued for sending.|
|is_creator|boolean|false|none|True if you are the owner of this BulkSendJob, false if it's been shared with you by a team member.|
|created_at|integer|false|none|Time that the BulkSendJob was created.|

<h2 id="tocS_BulkSendJobGetResponseSignatureRequests">BulkSendJobGetResponseSignatureRequests</h2>
<!-- backwards compatibility -->
<a id="schemabulksendjobgetresponsesignaturerequests"></a>
<a id="schema_BulkSendJobGetResponseSignatureRequests"></a>
<a id="tocSbulksendjobgetresponsesignaturerequests"></a>
<a id="tocsbulksendjobgetresponsesignaturerequests"></a>

```json
{
  "test_mode": false,
  "signature_request_id": "string",
  "requester_email_address": "string",
  "title": "string",
  "original_title": "string",
  "subject": "string",
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "created_at": 0,
  "expires_at": 0,
  "is_complete": true,
  "is_declined": true,
  "has_error": true,
  "files_url": "string",
  "signing_url": "string",
  "details_url": "string",
  "cc_email_addresses": [
    "string"
  ],
  "signing_redirect_url": "string",
  "final_copy_uri": "string",
  "template_ids": [
    "string"
  ],
  "custom_fields": [
    {
      "type": "string",
      "name": "string",
      "required": true,
      "api_id": "string",
      "editor": "string"
    }
  ],
  "attachments": [
    {
      "id": "string",
      "signer": "string",
      "name": "string",
      "required": true,
      "instructions": "string",
      "uploaded_at": 0
    }
  ],
  "response_data": [
    {
      "api_id": "string",
      "signature_id": "string",
      "name": "string",
      "required": true,
      "type": "string"
    }
  ],
  "signatures": [
    {
      "signature_id": "string",
      "signer_group_guid": "string",
      "signer_email_address": "string",
      "signer_name": "string",
      "signer_role": "string",
      "order": 0,
      "status_code": "string",
      "decline_reason": "string",
      "signed_at": 0,
      "last_viewed_at": 0,
      "last_reminded_at": 0,
      "has_pin": true,
      "has_sms_auth": true,
      "has_sms_delivery": true,
      "sms_phone_number": "string",
      "reassigned_by": "string",
      "reassignment_reason": "string",
      "reassigned_from": "string",
      "error": "string"
    }
  ],
  "bulk_send_job_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|test_mode|boolean|false|none|Whether this is a test signature request. Test requests have no legal value. Defaults to `false`.|
|signature_request_id|string|false|none|The id of the SignatureRequest.|
|requester_email_address|string \| null|false|none|The email address of the initiator of the SignatureRequest.|
|title|string|false|none|The title the specified Account uses for the SignatureRequest.|
|original_title|string|false|none|Default Label for account.|
|subject|string \| null|false|none|The subject in the email that was initially sent to the signers.|
|message|string \| null|false|none|The custom message in the email that was initially sent to the signers.|
|metadata|object|false|none|The metadata attached to the signature request.|
|created_at|integer|false|none|Time the signature request was created.|
|expires_at|integer \| null|false|none|The time when the signature request will expire unsigned signatures. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|
|is_complete|boolean|false|none|Whether or not the SignatureRequest has been fully executed by all signers.|
|is_declined|boolean|false|none|Whether or not the SignatureRequest has been declined by a signer.|
|has_error|boolean|false|none|Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings).|
|files_url|string|false|none|The URL where a copy of the request's documents can be downloaded.|
|signing_url|string \| null|false|none|The URL where a signer, after authenticating, can sign the documents. This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing.|
|details_url|string|false|none|The URL where the requester and the signers can view the current status of the SignatureRequest.|
|cc_email_addresses|[string]|false|none|A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed.|
|signing_redirect_url|string \| null|false|none|The URL you want the signer redirected to after they successfully sign.|
|final_copy_uri|string \| null|false|none|The path where the completed document can be downloaded|
|template_ids|[string]|false|none|Templates IDs used in this SignatureRequest (if any).|
|custom_fields|[[SignatureRequestResponseCustomFieldBase](#schemasignaturerequestresponsecustomfieldbase)]|false|none|An array of Custom Field objects containing the name and type of each custom field.<br><br>* Text Field uses `SignatureRequestResponseCustomFieldText`<br>* Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`|
|attachments|[[SignatureRequestResponseAttachment](#schemasignaturerequestresponseattachment)]|false|none|Signer attachments.|
|response_data|[[SignatureRequestResponseDataBase](#schemasignaturerequestresponsedatabase)]|false|none|An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.|
|signatures|[[SignatureRequestResponseSignatures](#schemasignaturerequestresponsesignatures)]|false|none|An array of signature objects, 1 for each signer.|
|bulk_send_job_id|string \| null|false|none|The ID of the Bulk Send job which sent the signature request, if applicable.|
|bulk_send_job_id|string|false|none|The id of the BulkSendJob.|
|metadata|object|false|none|The metadata attached to the signature request.|

<h2 id="tocS_DocumentFieldDetectionResponseDetectionResult">DocumentFieldDetectionResponseDetectionResult</h2>
<!-- backwards compatibility -->
<a id="schemadocumentfielddetectionresponsedetectionresult"></a>
<a id="schema_DocumentFieldDetectionResponseDetectionResult"></a>
<a id="tocSdocumentfielddetectionresponsedetectionresult"></a>
<a id="tocsdocumentfielddetectionresponsedetectionresult"></a>

```json
{
  "document_hash": "stringstringstringstringstringstringstringstringstringstringstri",
  "detection_mode": "annotations",
  "page_count": 0,
  "pages_analyzed": "all",
  "detected_at": 0,
  "form_fields_per_document": [
    {
      "document_index": 0,
      "api_id": "string",
      "height": 0,
      "name": "string",
      "page": 0,
      "required": true,
      "signer": "string",
      "type": "string",
      "width": 0,
      "x": 0,
      "y": 0
    }
  ],
  "form_field_groups": [
    {
      "group_id": "string",
      "group_label": "string",
      "requirement": "string"
    }
  ],
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ],
  "errors": [
    {
      "error_msg": "string",
      "error_path": "string",
      "error_name": "string"
    }
  ],
  "suggestions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_hash|string|true|none|The SHA-256 hash of the analyzed document.|
|detection_mode|string|true|none|The field detection method used to analyze the document: `annotations` or `text_tags`.|
|page_count|integer|true|none|The total number of pages in the document.|
|pages_analyzed|string|true|none|The zero-based page indexes analyzed, represented by the requested `page_range`, or `all` when every page was analyzed.|
|detected_at|integer(int64)|true|none|The Unix timestamp when the field detection result was generated.|
|form_fields_per_document|[[SubFormFieldsPerDocumentBase](#schemasubformfieldsperdocumentbase)]|true|none|The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`|
|form_field_groups|[[SubFormFieldGroup](#schemasubformfieldgroup)]|true|none|Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.|
|warnings|[[WarningResponse](#schemawarningresponse)]|true|none|Non-fatal issues encountered during field detection.|
|errors|[[ErrorResponseError](#schemaerrorresponseerror)]|true|none|Errors encountered during field detection. Successfully detected fields may still be included in the response.|
|suggestions|[string]|true|none|Suggestions for improving the field detection results.|

<h2 id="tocS_EmbeddedEditUrlResponseEmbedded">EmbeddedEditUrlResponseEmbedded</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedediturlresponseembedded"></a>
<a id="schema_EmbeddedEditUrlResponseEmbedded"></a>
<a id="tocSembeddedediturlresponseembedded"></a>
<a id="tocsembeddedediturlresponseembedded"></a>

```json
{
  "edit_url": "string",
  "expires_at": 0
}
```

An embedded template object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|edit_url|string|false|none|A template url that can be opened in an iFrame.|
|expires_at|integer|false|none|The specific time that the the `edit_url` link expires, in epoch.|

<h2 id="tocS_EmbeddedSignUrlResponseEmbedded">EmbeddedSignUrlResponseEmbedded</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedsignurlresponseembedded"></a>
<a id="schema_EmbeddedSignUrlResponseEmbedded"></a>
<a id="tocSembeddedsignurlresponseembedded"></a>
<a id="tocsembeddedsignurlresponseembedded"></a>

```json
{
  "sign_url": "string",
  "expires_at": 0
}
```

An object that contains necessary information to set up embedded signing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sign_url|string|false|none|A signature url that can be opened in an iFrame.|
|expires_at|integer|false|none|The specific time that the the `sign_url` link expires, in epoch.|

<h2 id="tocS_ErrorResponseError">ErrorResponseError</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponseerror"></a>
<a id="schema_ErrorResponseError"></a>
<a id="tocSerrorresponseerror"></a>
<a id="tocserrorresponseerror"></a>

```json
{
  "error_msg": "string",
  "error_path": "string",
  "error_name": "string"
}
```

Contains information about an error that occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_msg|string|true|none|Message describing an error.|
|error_path|string|false|none|Path at which an error occurred.|
|error_name|string|true|none|Name of the error. See the `x-error-codes` catalog in openapi file for a complete list of possible error codes with detailed information including HTTP status codes, causes, remediation steps, and retry guidance.|

<h2 id="tocS_FaxResponse">FaxResponse</h2>
<!-- backwards compatibility -->
<a id="schemafaxresponse"></a>
<a id="schema_FaxResponse"></a>
<a id="tocSfaxresponse"></a>
<a id="tocsfaxresponse"></a>

```json
{
  "fax_id": "string",
  "title": "string",
  "original_title": "string",
  "subject": "string",
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "created_at": 0,
  "sender": "string",
  "files_url": "string",
  "final_copy_uri": "string",
  "transmissions": [
    {
      "recipient": "string",
      "status_code": "success",
      "sent_at": 0
    }
  ],
  "test_mode": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fax_id|string|true|none|Fax ID|
|title|string|true|none|Fax Title|
|original_title|string|true|none|Fax Original Title|
|subject|string \| null|false|none|Fax Subject|
|message|string \| null|false|none|Fax Message|
|metadata|object|true|none|Fax Metadata|
|created_at|integer|true|none|Fax Created At Timestamp|
|sender|string|true|none|Fax Sender Email|
|files_url|string|true|none|Fax Files URL|
|final_copy_uri|string \| null|false|none|The path where the completed document can be downloaded|
|transmissions|[[FaxResponseTransmission](#schemafaxresponsetransmission)]|true|none|Fax Transmissions List|
|test_mode|boolean|true|none|Whether this is a test fax. Test faxes are not delivered to the recipient. Defaults to `false`.|

<h2 id="tocS_FaxLineResponseFaxLine">FaxLineResponseFaxLine</h2>
<!-- backwards compatibility -->
<a id="schemafaxlineresponsefaxline"></a>
<a id="schema_FaxLineResponseFaxLine"></a>
<a id="tocSfaxlineresponsefaxline"></a>
<a id="tocsfaxlineresponsefaxline"></a>

```json
{
  "number": "string",
  "created_at": 0,
  "updated_at": 0,
  "accounts": [
    {
      "account_id": "string",
      "email_address": "string",
      "is_locked": true,
      "is_paid_hs": true,
      "is_paid_hf": true,
      "quotas": {
        "api_signature_requests_left": 0,
        "documents_left": 0,
        "templates_total": 0,
        "templates_left": 0,
        "sms_verifications_left": 0,
        "num_fax_pages_left": 0
      },
      "callback_url": "string",
      "role_code": "string",
      "team_id": "string",
      "locale": "string",
      "usage": {
        "fax_pages_sent": 0
      },
      "settings": {
        "signer_access_codes": true,
        "sms_delivery": true,
        "sms_authentication": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|false|none|Number|
|created_at|integer|false|none|Created at|
|updated_at|integer|false|none|Updated at|
|accounts|[[AccountResponse](#schemaaccountresponse)]|false|none|none|

<h2 id="tocS_FaxResponseTransmission">FaxResponseTransmission</h2>
<!-- backwards compatibility -->
<a id="schemafaxresponsetransmission"></a>
<a id="schema_FaxResponseTransmission"></a>
<a id="tocSfaxresponsetransmission"></a>
<a id="tocsfaxresponsetransmission"></a>

```json
{
  "recipient": "string",
  "status_code": "success",
  "sent_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipient|string|true|none|Fax Transmission Recipient|
|status_code|string|true|none|Fax Transmission Status Code|
|sent_at|integer|false|none|Fax Transmission Sent Timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|status_code|success|
|status_code|transmitting|
|status_code|error_could_not_fax|
|status_code|error_unknown|
|status_code|error_busy|
|status_code|error_no_answer|
|status_code|error_disconnected|
|status_code|error_bad_destination|

<h2 id="tocS_ListInfoResponse">ListInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinforesponse"></a>
<a id="schema_ListInfoResponse"></a>
<a id="tocSlistinforesponse"></a>
<a id="tocslistinforesponse"></a>

```json
{
  "num_pages": 0,
  "num_results": 0,
  "page": 0,
  "page_size": 0
}
```

Contains pagination information about the data returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_pages|integer|false|none|Total number of pages available.|
|num_results|integer \| null|false|none|Total number of objects available.|
|page|integer|false|none|Number of the page being returned.|
|page_size|integer|false|none|Objects returned per page.|

<h2 id="tocS_ReportResponse">ReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportresponse"></a>
<a id="schema_ReportResponse"></a>
<a id="tocSreportresponse"></a>
<a id="tocsreportresponse"></a>

```json
{
  "success": "string",
  "start_date": "string",
  "end_date": "string",
  "report_type": [
    "user_activity"
  ]
}
```

Contains information about the report request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|A message indicating the requested operation's success|
|start_date|string|false|none|The (inclusive) start date for the report data in MM/DD/YYYY format.|
|end_date|string|false|none|The (inclusive) end date for the report data in MM/DD/YYYY format.|
|report_type|[string]|false|none|The type(s) of the report you are requesting. Allowed values are "user_activity" and "document_status". User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).|

#### Enumerated Values

|Property|Value|
|---|---|
|report_type|user_activity|
|report_type|document_status|
|report_type|sms_activity|
|report_type|fax_usage|

<h2 id="tocS_SignatureRequestResponse">SignatureRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponse"></a>
<a id="schema_SignatureRequestResponse"></a>
<a id="tocSsignaturerequestresponse"></a>
<a id="tocssignaturerequestresponse"></a>

```json
{
  "test_mode": false,
  "signature_request_id": "string",
  "requester_email_address": "string",
  "title": "string",
  "original_title": "string",
  "subject": "string",
  "message": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "created_at": 0,
  "expires_at": 0,
  "is_complete": true,
  "is_declined": true,
  "has_error": true,
  "files_url": "string",
  "signing_url": "string",
  "details_url": "string",
  "cc_email_addresses": [
    "string"
  ],
  "signing_redirect_url": "string",
  "final_copy_uri": "string",
  "template_ids": [
    "string"
  ],
  "custom_fields": [
    {
      "type": "string",
      "name": "string",
      "required": true,
      "api_id": "string",
      "editor": "string"
    }
  ],
  "attachments": [
    {
      "id": "string",
      "signer": "string",
      "name": "string",
      "required": true,
      "instructions": "string",
      "uploaded_at": 0
    }
  ],
  "response_data": [
    {
      "api_id": "string",
      "signature_id": "string",
      "name": "string",
      "required": true,
      "type": "string"
    }
  ],
  "signatures": [
    {
      "signature_id": "string",
      "signer_group_guid": "string",
      "signer_email_address": "string",
      "signer_name": "string",
      "signer_role": "string",
      "order": 0,
      "status_code": "string",
      "decline_reason": "string",
      "signed_at": 0,
      "last_viewed_at": 0,
      "last_reminded_at": 0,
      "has_pin": true,
      "has_sms_auth": true,
      "has_sms_delivery": true,
      "sms_phone_number": "string",
      "reassigned_by": "string",
      "reassignment_reason": "string",
      "reassigned_from": "string",
      "error": "string"
    }
  ],
  "bulk_send_job_id": "string"
}
```

Contains information about a signature request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|test_mode|boolean|false|none|Whether this is a test signature request. Test requests have no legal value. Defaults to `false`.|
|signature_request_id|string|false|none|The id of the SignatureRequest.|
|requester_email_address|string \| null|false|none|The email address of the initiator of the SignatureRequest.|
|title|string|false|none|The title the specified Account uses for the SignatureRequest.|
|original_title|string|false|none|Default Label for account.|
|subject|string \| null|false|none|The subject in the email that was initially sent to the signers.|
|message|string \| null|false|none|The custom message in the email that was initially sent to the signers.|
|metadata|object|false|none|The metadata attached to the signature request.|
|created_at|integer|false|none|Time the signature request was created.|
|expires_at|integer \| null|false|none|The time when the signature request will expire unsigned signatures. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.|
|is_complete|boolean|false|none|Whether or not the SignatureRequest has been fully executed by all signers.|
|is_declined|boolean|false|none|Whether or not the SignatureRequest has been declined by a signer.|
|has_error|boolean|false|none|Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings).|
|files_url|string|false|none|The URL where a copy of the request's documents can be downloaded.|
|signing_url|string \| null|false|none|The URL where a signer, after authenticating, can sign the documents. This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing.|
|details_url|string|false|none|The URL where the requester and the signers can view the current status of the SignatureRequest.|
|cc_email_addresses|[string]|false|none|A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed.|
|signing_redirect_url|string \| null|false|none|The URL you want the signer redirected to after they successfully sign.|
|final_copy_uri|string \| null|false|none|The path where the completed document can be downloaded|
|template_ids|[string]|false|none|Templates IDs used in this SignatureRequest (if any).|
|custom_fields|[[SignatureRequestResponseCustomFieldBase](#schemasignaturerequestresponsecustomfieldbase)]|false|none|An array of Custom Field objects containing the name and type of each custom field.<br><br>* Text Field uses `SignatureRequestResponseCustomFieldText`<br>* Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`|
|attachments|[[SignatureRequestResponseAttachment](#schemasignaturerequestresponseattachment)]|false|none|Signer attachments.|
|response_data|[[SignatureRequestResponseDataBase](#schemasignaturerequestresponsedatabase)]|false|none|An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.|
|signatures|[[SignatureRequestResponseSignatures](#schemasignaturerequestresponsesignatures)]|false|none|An array of signature objects, 1 for each signer.|
|bulk_send_job_id|string \| null|false|none|The ID of the Bulk Send job which sent the signature request, if applicable.|

<h2 id="tocS_SignatureRequestResponseAttachment">SignatureRequestResponseAttachment</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponseattachment"></a>
<a id="schema_SignatureRequestResponseAttachment"></a>
<a id="tocSsignaturerequestresponseattachment"></a>
<a id="tocssignaturerequestresponseattachment"></a>

```json
{
  "id": "string",
  "signer": "string",
  "name": "string",
  "required": true,
  "instructions": "string",
  "uploaded_at": 0
}
```

Signer attachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique ID for this attachment.|
|signer|string|true|none|The Signer this attachment is assigned to.|
|name|string|true|none|The name of this attachment.|
|required|boolean|true|none|A boolean value denoting if this attachment is required.|
|instructions|string \| null|false|none|Instructions for Signer.|
|uploaded_at|integer \| null|false|none|Timestamp when attachment was uploaded by Signer.|

<h2 id="tocS_SignatureRequestResponseCustomFieldBase">SignatureRequestResponseCustomFieldBase</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsecustomfieldbase"></a>
<a id="schema_SignatureRequestResponseCustomFieldBase"></a>
<a id="tocSsignaturerequestresponsecustomfieldbase"></a>
<a id="tocssignaturerequestresponsecustomfieldbase"></a>

```json
{
  "type": "string",
  "name": "string",
  "required": true,
  "api_id": "string",
  "editor": "string"
}
```

An array of Custom Field objects containing the name and type of each custom field.

* Text Field uses `SignatureRequestResponseCustomFieldText`
* Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of this Custom Field. Only 'text' and 'checkbox' are currently supported.|
|name|string|true|none|The name of the Custom Field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|api_id|string|false|none|The unique ID for this field.|
|editor|string \| null|false|none|The name of the Role that is able to edit this field.|

<h2 id="tocS_SignatureRequestResponseCustomFieldCheckbox">SignatureRequestResponseCustomFieldCheckbox</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsecustomfieldcheckbox"></a>
<a id="schema_SignatureRequestResponseCustomFieldCheckbox"></a>
<a id="tocSsignaturerequestresponsecustomfieldcheckbox"></a>
<a id="tocssignaturerequestresponsecustomfieldcheckbox"></a>

```json
{
  "type": "checkbox",
  "name": "string",
  "required": true,
  "api_id": "string",
  "editor": "string",
  "value": true
}
```

This class extends `SignatureRequestResponseCustomFieldBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of this Custom Field. Only 'text' and 'checkbox' are currently supported.|
|name|string|true|none|The name of the Custom Field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|api_id|string|false|none|The unique ID for this field.|
|editor|string \| null|false|none|The name of the Role that is able to edit this field.|
|type|string|true|none|The type of this Custom Field. Only 'text' and 'checkbox' are currently supported.|
|value|boolean|false|none|A true/false for checkbox fields|

<h2 id="tocS_SignatureRequestResponseCustomFieldText">SignatureRequestResponseCustomFieldText</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsecustomfieldtext"></a>
<a id="schema_SignatureRequestResponseCustomFieldText"></a>
<a id="tocSsignaturerequestresponsecustomfieldtext"></a>
<a id="tocssignaturerequestresponsecustomfieldtext"></a>

```json
{
  "type": "text",
  "name": "string",
  "required": true,
  "api_id": "string",
  "editor": "string",
  "value": "string"
}
```

This class extends `SignatureRequestResponseCustomFieldBase`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of this Custom Field. Only 'text' and 'checkbox' are currently supported.|
|name|string|true|none|The name of the Custom Field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|api_id|string|false|none|The unique ID for this field.|
|editor|string \| null|false|none|The name of the Role that is able to edit this field.|
|type|string|true|none|The type of this Custom Field. Only 'text' and 'checkbox' are currently supported.|
|value|string|false|none|A text string for text fields|

<h2 id="tocS_SignatureRequestResponseCustomFieldTypeEnum">SignatureRequestResponseCustomFieldTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsecustomfieldtypeenum"></a>
<a id="schema_SignatureRequestResponseCustomFieldTypeEnum"></a>
<a id="tocSsignaturerequestresponsecustomfieldtypeenum"></a>
<a id="tocssignaturerequestresponsecustomfieldtypeenum"></a>

```json
"text"
```

<h2 id="tocS_SignatureRequestResponseDataBase">SignatureRequestResponseDataBase</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatabase"></a>
<a id="schema_SignatureRequestResponseDataBase"></a>
<a id="tocSsignaturerequestresponsedatabase"></a>
<a id="tocssignaturerequestresponsedatabase"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "string"
}
```

An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|

<h2 id="tocS_SignatureRequestResponseDataTypeEnum">SignatureRequestResponseDataTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatatypeenum"></a>
<a id="schema_SignatureRequestResponseDataTypeEnum"></a>
<a id="tocSsignaturerequestresponsedatatypeenum"></a>
<a id="tocssignaturerequestresponsedatatypeenum"></a>

```json
"text"
```

<h2 id="tocS_SignatureRequestResponseDataValueCheckbox">SignatureRequestResponseDataValueCheckbox</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatavaluecheckbox"></a>
<a id="schema_SignatureRequestResponseDataValueCheckbox"></a>
<a id="tocSsignaturerequestresponsedatavaluecheckbox"></a>
<a id="tocssignaturerequestresponsedatavaluecheckbox"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "checkbox",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|
|type|string|false|none|A yes/no checkbox|
|value|boolean|false|none|The value of the form field.|

<h2 id="tocS_SignatureRequestResponseDataValueCheckboxMerge">SignatureRequestResponseDataValueCheckboxMerge</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatavaluecheckboxmerge"></a>
<a id="schema_SignatureRequestResponseDataValueCheckboxMerge"></a>
<a id="tocSsignaturerequestresponsedatavaluecheckboxmerge"></a>
<a id="tocssignaturerequestresponsedatavaluecheckboxmerge"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "checkbox-merge",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|
|type|string|false|none|A checkbox field that has default value set by the api|
|value|string|false|none|The value of the form field.|

<h2 id="tocS_SignatureRequestResponseDataValueDateSigned">SignatureRequestResponseDataValueDateSigned</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatavaluedatesigned"></a>
<a id="schema_SignatureRequestResponseDataValueDateSigned"></a>
<a id="tocSsignaturerequestresponsedatavaluedatesigned"></a>
<a id="tocssignaturerequestresponsedatavaluedatesigned"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "date_signed",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|
|type|string|false|none|A date|
|value|string|false|none|The value of the form field.|

<h2 id="tocS_SignatureRequestResponseDataValueDropdown">SignatureRequestResponseDataValueDropdown</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatavaluedropdown"></a>
<a id="schema_SignatureRequestResponseDataValueDropdown"></a>
<a id="tocSsignaturerequestresponsedatavaluedropdown"></a>
<a id="tocssignaturerequestresponsedatavaluedropdown"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "dropdown",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|
|type|string|false|none|An input field for dropdowns|
|value|string|false|none|The value of the form field.|

<h2 id="tocS_SignatureRequestResponseDataValueInitials">SignatureRequestResponseDataValueInitials</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatavalueinitials"></a>
<a id="schema_SignatureRequestResponseDataValueInitials"></a>
<a id="tocSsignaturerequestresponsedatavalueinitials"></a>
<a id="tocssignaturerequestresponsedatavalueinitials"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "initials",
  "value": "string",
  "is_signed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|
|type|string|false|none|An input field for initials|
|value|string|false|none|The value of the form field.|
|is_signed|boolean \| null|false|none|This field contains the boolean true if the field is signed.|

<h2 id="tocS_SignatureRequestResponseDataValueRadio">SignatureRequestResponseDataValueRadio</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatavalueradio"></a>
<a id="schema_SignatureRequestResponseDataValueRadio"></a>
<a id="tocSsignaturerequestresponsedatavalueradio"></a>
<a id="tocssignaturerequestresponsedatavalueradio"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "radio",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|
|type|string|false|none|An input field for radios|
|value|boolean|false|none|The value of the form field.|

<h2 id="tocS_SignatureRequestResponseDataValueSignature">SignatureRequestResponseDataValueSignature</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatavaluesignature"></a>
<a id="schema_SignatureRequestResponseDataValueSignature"></a>
<a id="tocSsignaturerequestresponsedatavaluesignature"></a>
<a id="tocssignaturerequestresponsedatavaluesignature"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "signature",
  "value": "string",
  "is_signed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|
|type|string|false|none|A signature input field|
|value|string|false|none|The value of the form field.|
|is_signed|boolean \| null|false|none|This field contains the boolean true if the field is signed.|

<h2 id="tocS_SignatureRequestResponseDataValueText">SignatureRequestResponseDataValueText</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatavaluetext"></a>
<a id="schema_SignatureRequestResponseDataValueText"></a>
<a id="tocSsignaturerequestresponsedatavaluetext"></a>
<a id="tocssignaturerequestresponsedatavaluetext"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "text",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|
|type|string|false|none|A text input field|
|value|string|false|none|The value of the form field.|

<h2 id="tocS_SignatureRequestResponseDataValueTextMerge">SignatureRequestResponseDataValueTextMerge</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsedatavaluetextmerge"></a>
<a id="schema_SignatureRequestResponseDataValueTextMerge"></a>
<a id="tocSsignaturerequestresponsedatavaluetextmerge"></a>
<a id="tocssignaturerequestresponsedatavaluetextmerge"></a>

```json
{
  "api_id": "string",
  "signature_id": "string",
  "name": "string",
  "required": true,
  "type": "text-merge",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|signature_id|string|false|none|The ID of the signature to which this response is linked.|
|name|string|false|none|The name of the form field.|
|required|boolean|false|none|A boolean value denoting if this field is required.|
|type|string|false|none|none|
|type|string|false|none|A text field that has default text set by the api|
|value|string|false|none|The value of the form field.|

<h2 id="tocS_SignatureRequestResponseSignatures">SignatureRequestResponseSignatures</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestresponsesignatures"></a>
<a id="schema_SignatureRequestResponseSignatures"></a>
<a id="tocSsignaturerequestresponsesignatures"></a>
<a id="tocssignaturerequestresponsesignatures"></a>

```json
{
  "signature_id": "string",
  "signer_group_guid": "string",
  "signer_email_address": "string",
  "signer_name": "string",
  "signer_role": "string",
  "order": 0,
  "status_code": "string",
  "decline_reason": "string",
  "signed_at": 0,
  "last_viewed_at": 0,
  "last_reminded_at": 0,
  "has_pin": true,
  "has_sms_auth": true,
  "has_sms_delivery": true,
  "sms_phone_number": "string",
  "reassigned_by": "string",
  "reassignment_reason": "string",
  "reassigned_from": "string",
  "error": "string"
}
```

An array of signature objects, 1 for each signer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signature_id|string|false|none|Signature identifier.|
|signer_group_guid|string \| null|false|none|Signer Group GUID|
|signer_email_address|string|false|none|The email address of the signer.|
|signer_name|string \| null|false|none|The name of the signer.|
|signer_role|string \| null|false|none|The role of the signer.|
|order|integer \| null|false|none|If signer order is assigned this is the 0-based index for this signer.|
|status_code|string|false|none|The current status of the signature. eg: awaiting_signature, signed, declined.|
|decline_reason|string \| null|false|none|The reason provided by the signer for declining the request.|
|signed_at|integer \| null|false|none|Time that the document was signed or null.|
|last_viewed_at|integer \| null|false|none|The time that the document was last viewed by this signer or null.|
|last_reminded_at|integer \| null|false|none|The time the last reminder email was sent to the signer or null.|
|has_pin|boolean|false|none|Boolean to indicate whether this signature requires a PIN to access.|
|has_sms_auth|boolean \| null|false|none|Boolean to indicate whether this signature has SMS authentication enabled.|
|has_sms_delivery|boolean \| null|false|none|Boolean to indicate whether this signature has SMS delivery enabled.|
|sms_phone_number|string \| null|false|none|The SMS phone number used for authentication or signature request delivery.|
|reassigned_by|string \| null|false|none|Email address of original signer who reassigned to this signer.|
|reassignment_reason|string \| null|false|none|Reason provided by original signer who reassigned to this signer.|
|reassigned_from|string \| null|false|none|Previous signature identifier.|
|error|string \| null|false|none|Error message pertaining to this signer, or null.|

<h2 id="tocS_SignatureRequestSignerExperience">SignatureRequestSignerExperience</h2>
<!-- backwards compatibility -->
<a id="schemasignaturerequestsignerexperience"></a>
<a id="schema_SignatureRequestSignerExperience"></a>
<a id="tocSsignaturerequestsignerexperience"></a>
<a id="tocssignaturerequestsignerexperience"></a>

```json
{}
```

Configuration options for modifying the settings of the signer application. Supports changing the form view behavior.

<h2 id="tocS_TeamResponse">TeamResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamresponse"></a>
<a id="schema_TeamResponse"></a>
<a id="tocSteamresponse"></a>
<a id="tocsteamresponse"></a>

```json
{
  "name": "string",
  "accounts": [
    {
      "account_id": "string",
      "email_address": "string",
      "is_locked": true,
      "is_paid_hs": true,
      "is_paid_hf": true,
      "quotas": {
        "api_signature_requests_left": 0,
        "documents_left": 0,
        "templates_total": 0,
        "templates_left": 0,
        "sms_verifications_left": 0,
        "num_fax_pages_left": 0
      },
      "callback_url": "string",
      "role_code": "string",
      "team_id": "string",
      "locale": "string",
      "usage": {
        "fax_pages_sent": 0
      },
      "settings": {
        "signer_access_codes": true,
        "sms_delivery": true,
        "sms_authentication": true
      }
    }
  ],
  "invited_accounts": [
    {
      "account_id": "string",
      "email_address": "string",
      "is_locked": true,
      "is_paid_hs": true,
      "is_paid_hf": true,
      "quotas": {
        "api_signature_requests_left": 0,
        "documents_left": 0,
        "templates_total": 0,
        "templates_left": 0,
        "sms_verifications_left": 0,
        "num_fax_pages_left": 0
      },
      "callback_url": "string",
      "role_code": "string",
      "team_id": "string",
      "locale": "string",
      "usage": {
        "fax_pages_sent": 0
      },
      "settings": {
        "signer_access_codes": true,
        "sms_delivery": true,
        "sms_authentication": true
      }
    }
  ],
  "invited_emails": [
    "string"
  ]
}
```

Contains information about your team and its members

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of your Team|
|accounts|[[AccountResponse](#schemaaccountresponse)]|false|none|none|
|invited_accounts|[[AccountResponse](#schemaaccountresponse)]|false|none|A list of all Accounts that have an outstanding invitation to join your Team. Note that this response is a subset of the response parameters found in `GET /account`.|
|invited_emails|[string]|false|none|A list of email addresses that have an outstanding invitation to join your Team and do not yet have a Dropbox Sign account.|

<h2 id="tocS_TeamInfoResponse">TeamInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemateaminforesponse"></a>
<a id="schema_TeamInfoResponse"></a>
<a id="tocSteaminforesponse"></a>
<a id="tocsteaminforesponse"></a>

```json
{
  "team_id": "string",
  "team_parent": {
    "team_id": "string",
    "name": "string"
  },
  "name": "string",
  "num_members": 0,
  "num_sub_teams": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_id|string|false|none|The id of a team|
|team_parent|[TeamParentResponse](#schemateamparentresponse)|false|none|Information about the parent team if a team has one, set to `null` otherwise.|
|name|string|false|none|The name of a team|
|num_members|integer|false|none|Number of members within a team|
|num_sub_teams|integer|false|none|Number of sub teams within a team|

<h2 id="tocS_TeamInviteResponse">TeamInviteResponse</h2>
<!-- backwards compatibility -->
<a id="schemateaminviteresponse"></a>
<a id="schema_TeamInviteResponse"></a>
<a id="tocSteaminviteresponse"></a>
<a id="tocsteaminviteresponse"></a>

```json
{
  "email_address": "string",
  "team_id": "string",
  "role": "string",
  "sent_at": 0,
  "redeemed_at": 0,
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string|false|none|Email address of the user invited to this team.|
|team_id|string|false|none|Id of the team.|
|role|string|false|none|Role of the user invited to this team.|
|sent_at|integer|false|none|Timestamp when the invitation was sent.|
|redeemed_at|integer|false|none|Timestamp when the invitation was redeemed.|
|expires_at|integer|false|none|Timestamp when the invitation is expiring.|

<h2 id="tocS_TeamMemberResponse">TeamMemberResponse</h2>
<!-- backwards compatibility -->
<a id="schemateammemberresponse"></a>
<a id="schema_TeamMemberResponse"></a>
<a id="tocSteammemberresponse"></a>
<a id="tocsteammemberresponse"></a>

```json
{
  "account_id": "string",
  "email_address": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|Account id of the team member.|
|email_address|string|false|none|Email address of the team member.|
|role|string|false|none|The specific role a member has on the team.|

<h2 id="tocS_TeamParentResponse">TeamParentResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamparentresponse"></a>
<a id="schema_TeamParentResponse"></a>
<a id="tocSteamparentresponse"></a>
<a id="tocsteamparentresponse"></a>

```json
{
  "team_id": "string",
  "name": "string"
}
```

Information about the parent team if a team has one, set to `null` otherwise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_id|string|false|none|The id of a team|
|name|string|false|none|The name of a team|

<h2 id="tocS_SubTeamResponse">SubTeamResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubteamresponse"></a>
<a id="schema_SubTeamResponse"></a>
<a id="tocSsubteamresponse"></a>
<a id="tocssubteamresponse"></a>

```json
{
  "team_id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_id|string|false|none|The id of a team|
|name|string|false|none|The name of a team|

<h2 id="tocS_TemplateResponse">TemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponse"></a>
<a id="schema_TemplateResponse"></a>
<a id="tocStemplateresponse"></a>
<a id="tocstemplateresponse"></a>

```json
{
  "template_id": "string",
  "title": "string",
  "message": "string",
  "updated_at": 0,
  "is_embedded": true,
  "is_creator": true,
  "can_edit": true,
  "is_locked": true,
  "metadata": {
    "property1": null,
    "property2": null
  },
  "signer_roles": [
    {
      "name": "string",
      "order": 0
    }
  ],
  "cc_roles": [
    {
      "name": "string"
    }
  ],
  "documents": [
    {
      "name": "string",
      "index": 0,
      "field_groups": [
        {
          "name": "string",
          "rule": {
            "requirement": "string",
            "groupLabel": "string"
          }
        }
      ],
      "form_fields": [
        {
          "api_id": "string",
          "name": "string",
          "type": "string",
          "signer": "string",
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0,
          "required": true
        }
      ],
      "custom_fields": [
        {
          "api_id": "string",
          "name": "string",
          "type": "string",
          "signer": "string",
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0,
          "required": true,
          "group": "string"
        }
      ],
      "static_fields": [
        {
          "api_id": "string",
          "name": "string",
          "type": "string",
          "signer": "me_now",
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0,
          "required": true,
          "group": "string"
        }
      ]
    }
  ],
  "custom_fields": [
    {
      "api_id": "string",
      "name": "string",
      "type": "string",
      "signer": "string",
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0,
      "required": true,
      "group": "string"
    }
  ],
  "named_form_fields": [
    {
      "api_id": "string",
      "name": "string",
      "type": "string",
      "signer": "string",
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0,
      "required": true
    }
  ],
  "accounts": [
    {
      "account_id": "string",
      "email_address": "string",
      "is_locked": true,
      "is_paid_hs": true,
      "is_paid_hf": true,
      "quotas": {
        "templates_left": 0,
        "api_signature_requests_left": 0,
        "documents_left": 0,
        "sms_verifications_left": 0
      }
    }
  ],
  "attachments": [
    {
      "id": "string",
      "signer": "string",
      "name": "string",
      "required": true,
      "instructions": "string",
      "uploaded_at": 0
    }
  ]
}
```

Contains information about the templates you and your team have created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_id|string|false|none|The id of the Template.|
|title|string|false|none|The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.|
|message|string|false|none|The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.|
|updated_at|integer|false|none|Time the template was last updated.|
|is_embedded|boolean \| null|false|none|`true` if this template was created using an embedded flow, `false` if it was created on our website. Will be `null` when you are not the creator of the Template.|
|is_creator|boolean|false|none|`true` if you are the owner of this template, `false` if it's been shared with you by a team member.|
|can_edit|boolean|false|none|Indicates whether edit rights have been granted to you by the owner (always `true` if that's you).|
|is_locked|boolean|false|none|Indicates whether the template is locked.<br>If `true`, then the template was created outside your quota and can only be used in `test_mode`.<br>If `false`, then the template is within your quota and can be used to create signature requests.|
|metadata|object|false|none|The metadata attached to the template.|
|signer_roles|[[TemplateResponseSignerRole](#schematemplateresponsesignerrole)]|false|none|An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.|
|cc_roles|[[TemplateResponseCCRole](#schematemplateresponseccrole)]|false|none|An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.|
|documents|[[TemplateResponseDocument](#schematemplateresponsedocument)]|false|none|An array describing each document associated with this Template. Includes form field data for each document.|
|custom_fields|[[TemplateResponseDocumentCustomFieldBase](#schematemplateresponsedocumentcustomfieldbase)]|false|none|**Deprecated.** Deprecated. Use `custom_fields` inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c=200&path=template/documents&t=response) array instead.|
|named_form_fields|[[TemplateResponseDocumentFormFieldBase](#schematemplateresponsedocumentformfieldbase)]|false|none|**Deprecated.** Deprecated. Use `form_fields` inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c=200&path=template/documents&t=response) array instead.|
|accounts|[[TemplateResponseAccount](#schematemplateresponseaccount)]|false|none|An array of the Accounts that can use this Template.|
|attachments|[[SignatureRequestResponseAttachment](#schemasignaturerequestresponseattachment)]|false|none|Signer attachments.|

<h2 id="tocS_TemplateResponseAccount">TemplateResponseAccount</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponseaccount"></a>
<a id="schema_TemplateResponseAccount"></a>
<a id="tocStemplateresponseaccount"></a>
<a id="tocstemplateresponseaccount"></a>

```json
{
  "account_id": "string",
  "email_address": "string",
  "is_locked": true,
  "is_paid_hs": true,
  "is_paid_hf": true,
  "quotas": {
    "templates_left": 0,
    "api_signature_requests_left": 0,
    "documents_left": 0,
    "sms_verifications_left": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|The id of the Account.|
|email_address|string|false|none|The email address associated with the Account.|
|is_locked|boolean|false|none|Returns `true` if the user has been locked out of their account by a team admin.|
|is_paid_hs|boolean|false|none|Returns `true` if the user has a paid Dropbox Sign account.|
|is_paid_hf|boolean|false|none|Returns `true` if the user has a paid HelloFax account.|
|quotas|[TemplateResponseAccountQuota](#schematemplateresponseaccountquota)|false|none|An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.|

<h2 id="tocS_TemplateResponseAccountQuota">TemplateResponseAccountQuota</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponseaccountquota"></a>
<a id="schema_TemplateResponseAccountQuota"></a>
<a id="tocStemplateresponseaccountquota"></a>
<a id="tocstemplateresponseaccountquota"></a>

```json
{
  "templates_left": 0,
  "api_signature_requests_left": 0,
  "documents_left": 0,
  "sms_verifications_left": 0
}
```

An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templates_left|integer|false|none|API templates remaining.|
|api_signature_requests_left|integer|false|none|API signature requests remaining.|
|documents_left|integer|false|none|Signature requests remaining.|
|sms_verifications_left|integer|false|none|SMS verifications remaining.|

<h2 id="tocS_TemplateResponseCCRole">TemplateResponseCCRole</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponseccrole"></a>
<a id="schema_TemplateResponseCCRole"></a>
<a id="tocStemplateresponseccrole"></a>
<a id="tocstemplateresponseccrole"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the Role.|

<h2 id="tocS_TemplateCreateEmbeddedDraftResponseTemplate">TemplateCreateEmbeddedDraftResponseTemplate</h2>
<!-- backwards compatibility -->
<a id="schematemplatecreateembeddeddraftresponsetemplate"></a>
<a id="schema_TemplateCreateEmbeddedDraftResponseTemplate"></a>
<a id="tocStemplatecreateembeddeddraftresponsetemplate"></a>
<a id="tocstemplatecreateembeddeddraftresponsetemplate"></a>

```json
{
  "template_id": "string",
  "edit_url": "string",
  "expires_at": 0,
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

Template object with parameters: `template_id`, `edit_url`, `expires_at`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_id|string|false|none|The id of the Template.|
|edit_url|string|false|none|Link to edit the template.|
|expires_at|integer|false|none|When the link expires.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|**Deprecated.** A list of warnings.|

<h2 id="tocS_TemplateCreateResponseTemplate">TemplateCreateResponseTemplate</h2>
<!-- backwards compatibility -->
<a id="schematemplatecreateresponsetemplate"></a>
<a id="schema_TemplateCreateResponseTemplate"></a>
<a id="tocStemplatecreateresponsetemplate"></a>
<a id="tocstemplatecreateresponsetemplate"></a>

```json
{
  "template_id": "string"
}
```

Template object with parameters: `template_id`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_id|string|false|none|The id of the Template.|

<h2 id="tocS_TemplateResponseDocument">TemplateResponseDocument</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocument"></a>
<a id="schema_TemplateResponseDocument"></a>
<a id="tocStemplateresponsedocument"></a>
<a id="tocstemplateresponsedocument"></a>

```json
{
  "name": "string",
  "index": 0,
  "field_groups": [
    {
      "name": "string",
      "rule": {
        "requirement": "string",
        "groupLabel": "string"
      }
    }
  ],
  "form_fields": [
    {
      "api_id": "string",
      "name": "string",
      "type": "string",
      "signer": "string",
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0,
      "required": true
    }
  ],
  "custom_fields": [
    {
      "api_id": "string",
      "name": "string",
      "type": "string",
      "signer": "string",
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0,
      "required": true,
      "group": "string"
    }
  ],
  "static_fields": [
    {
      "api_id": "string",
      "name": "string",
      "type": "string",
      "signer": "me_now",
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0,
      "required": true,
      "group": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the associated file.|
|index|integer|false|none|Document ordering, the lowest index is displayed first and the highest last (0-based indexing).|
|field_groups|[[TemplateResponseDocumentFieldGroup](#schematemplateresponsedocumentfieldgroup)]|false|none|An array of Form Field Group objects.|
|form_fields|[[TemplateResponseDocumentFormFieldBase](#schematemplateresponsedocumentformfieldbase)]|false|none|An array of Form Field objects containing the name and type of each named field.|
|custom_fields|[[TemplateResponseDocumentCustomFieldBase](#schematemplateresponsedocumentcustomfieldbase)]|false|none|An array of Form Field objects containing the name and type of each named field.|
|static_fields|[[TemplateResponseDocumentStaticFieldBase](#schematemplateresponsedocumentstaticfieldbase)]|false|none|An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.|

<h2 id="tocS_TemplateResponseDocumentCustomFieldBase">TemplateResponseDocumentCustomFieldBase</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentcustomfieldbase"></a>
<a id="schema_TemplateResponseDocumentCustomFieldBase"></a>
<a id="tocStemplateresponsedocumentcustomfieldbase"></a>
<a id="tocstemplateresponsedocumentcustomfieldbase"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "string",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

An array of Form Field objects containing the name and type of each named field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|name|string|false|none|The name of the Custom Field.|
|type|string|true|none|none|
|signer|string \| null|false|none|The signer of the Custom Field. Can be `null` if field is a merge field (assigned to Sender).|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|

<h2 id="tocS_TemplateResponseDocumentCustomFieldCheckbox">TemplateResponseDocumentCustomFieldCheckbox</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentcustomfieldcheckbox"></a>
<a id="schema_TemplateResponseDocumentCustomFieldCheckbox"></a>
<a id="tocStemplateresponsedocumentcustomfieldcheckbox"></a>
<a id="tocstemplateresponsedocumentcustomfieldcheckbox"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "checkbox",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentCustomFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|name|string|false|none|The name of the Custom Field.|
|type|string|true|none|none|
|signer|string \| null|false|none|The signer of the Custom Field. Can be `null` if field is a merge field (assigned to Sender).|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this Custom Field. Only `text` and `checkbox` are currently supported.<br><br>* Text uses `TemplateResponseDocumentCustomFieldText`<br>* Checkbox uses `TemplateResponseDocumentCustomFieldCheckbox`|

<h2 id="tocS_TemplateResponseDocumentCustomFieldText">TemplateResponseDocumentCustomFieldText</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentcustomfieldtext"></a>
<a id="schema_TemplateResponseDocumentCustomFieldText"></a>
<a id="tocStemplateresponsedocumentcustomfieldtext"></a>
<a id="tocstemplateresponsedocumentcustomfieldtext"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "text",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string",
  "avg_text_length": {
    "num_lines": 0,
    "num_chars_per_line": 0
  },
  "isMultiline": true,
  "originalFontSize": 0,
  "fontFamily": "string"
}
```

This class extends `TemplateResponseDocumentCustomFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|The unique ID for this field.|
|name|string|false|none|The name of the Custom Field.|
|type|string|true|none|none|
|signer|string \| null|false|none|The signer of the Custom Field. Can be `null` if field is a merge field (assigned to Sender).|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this Custom Field. Only `text` and `checkbox` are currently supported.<br><br>* Text uses `TemplateResponseDocumentCustomFieldText`<br>* Checkbox uses `TemplateResponseDocumentCustomFieldCheckbox`|
|avg_text_length|[TemplateResponseFieldAvgTextLength](#schematemplateresponsefieldavgtextlength)|false|none|Average text length in this field.|
|isMultiline|boolean|false|none|Whether this form field is multiline text.|
|originalFontSize|integer|false|none|Original font size used in this form field's text.|
|fontFamily|string|false|none|Font family used in this form field's text.|

<h2 id="tocS_TemplateResponseDocumentFieldGroup">TemplateResponseDocumentFieldGroup</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentfieldgroup"></a>
<a id="schema_TemplateResponseDocumentFieldGroup"></a>
<a id="tocStemplateresponsedocumentfieldgroup"></a>
<a id="tocstemplateresponsedocumentfieldgroup"></a>

```json
{
  "name": "string",
  "rule": {
    "requirement": "string",
    "groupLabel": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the form field group.|
|rule|[TemplateResponseDocumentFieldGroupRule](#schematemplateresponsedocumentfieldgrouprule)|false|none|The rule used to validate checkboxes in the form field group. See [checkbox field grouping](/api/reference/constants/#checkbox-field-grouping).|

<h2 id="tocS_TemplateResponseDocumentFieldGroupRule">TemplateResponseDocumentFieldGroupRule</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentfieldgrouprule"></a>
<a id="schema_TemplateResponseDocumentFieldGroupRule"></a>
<a id="tocStemplateresponsedocumentfieldgrouprule"></a>
<a id="tocstemplateresponsedocumentfieldgrouprule"></a>

```json
{
  "requirement": "string",
  "groupLabel": "string"
}
```

The rule used to validate checkboxes in the form field group. See [checkbox field grouping](/api/reference/constants/#checkbox-field-grouping).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requirement|string|false|none|Examples: `require_0-1` `require_1` `require_1-ormore`<br><br>- Check out the list of [acceptable `requirement` checkbox type values](/api/reference/constants/#checkbox-field-grouping).<br>- Check out the list of [acceptable `requirement` radio type fields](/api/reference/constants/#radio-field-grouping).<br>- Radio groups require **at least** two fields per group.|
|groupLabel|string|false|none|Name of the group|

<h2 id="tocS_TemplateResponseDocumentFormFieldBase">TemplateResponseDocumentFormFieldBase</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentformfieldbase"></a>
<a id="schema_TemplateResponseDocumentFormFieldBase"></a>
<a id="tocStemplateresponsedocumentformfieldbase"></a>
<a id="tocstemplateresponsedocumentformfieldbase"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "string",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true
}
```

An array of Form Field objects containing the name and type of each named field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the form field.|
|name|string|false|none|The name of the form field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Form Field.|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|

<h2 id="tocS_TemplateResponseDocumentFormFieldCheckbox">TemplateResponseDocumentFormFieldCheckbox</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentformfieldcheckbox"></a>
<a id="schema_TemplateResponseDocumentFormFieldCheckbox"></a>
<a id="tocStemplateresponsedocumentformfieldcheckbox"></a>
<a id="tocstemplateresponsedocumentformfieldcheckbox"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "checkbox",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentFormFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the form field.|
|name|string|false|none|The name of the form field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Form Field.|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|type|string|true|none|The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.|

<h2 id="tocS_TemplateResponseDocumentFormFieldDateSigned">TemplateResponseDocumentFormFieldDateSigned</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentformfielddatesigned"></a>
<a id="schema_TemplateResponseDocumentFormFieldDateSigned"></a>
<a id="tocStemplateresponsedocumentformfielddatesigned"></a>
<a id="tocstemplateresponsedocumentformfielddatesigned"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "date_signed",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentFormFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the form field.|
|name|string|false|none|The name of the form field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Form Field.|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|type|string|true|none|The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.|

<h2 id="tocS_TemplateResponseDocumentFormFieldDropdown">TemplateResponseDocumentFormFieldDropdown</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentformfielddropdown"></a>
<a id="schema_TemplateResponseDocumentFormFieldDropdown"></a>
<a id="tocStemplateresponsedocumentformfielddropdown"></a>
<a id="tocstemplateresponsedocumentformfielddropdown"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "dropdown",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string",
  "options": [
    "string"
  ]
}
```

This class extends `TemplateResponseDocumentFormFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the form field.|
|name|string|false|none|The name of the form field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Form Field.|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|type|string|true|none|The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.|
|options|[string]|false|none|The options available for this dropdown form field.|

<h2 id="tocS_TemplateResponseDocumentFormFieldHyperlink">TemplateResponseDocumentFormFieldHyperlink</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentformfieldhyperlink"></a>
<a id="schema_TemplateResponseDocumentFormFieldHyperlink"></a>
<a id="tocStemplateresponsedocumentformfieldhyperlink"></a>
<a id="tocstemplateresponsedocumentformfieldhyperlink"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "hyperlink",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "avg_text_length": {
    "num_lines": 0,
    "num_chars_per_line": 0
  },
  "isMultiline": true,
  "originalFontSize": 0,
  "fontFamily": "string",
  "group": "string"
}
```

This class extends `TemplateResponseDocumentFormFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the form field.|
|name|string|false|none|The name of the form field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Form Field.|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|type|string|true|none|The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`|
|avg_text_length|[TemplateResponseFieldAvgTextLength](#schematemplateresponsefieldavgtextlength)|false|none|Average text length in this field.|
|isMultiline|boolean|false|none|Whether this form field is multiline text.|
|originalFontSize|integer|false|none|Original font size used in this form field's text.|
|fontFamily|string|false|none|Font family used in this form field's text.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.|

<h2 id="tocS_TemplateResponseDocumentFormFieldInitials">TemplateResponseDocumentFormFieldInitials</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentformfieldinitials"></a>
<a id="schema_TemplateResponseDocumentFormFieldInitials"></a>
<a id="tocStemplateresponsedocumentformfieldinitials"></a>
<a id="tocstemplateresponsedocumentformfieldinitials"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "initials",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentFormFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the form field.|
|name|string|false|none|The name of the form field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Form Field.|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|type|string|true|none|The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.|

<h2 id="tocS_TemplateResponseDocumentFormFieldRadio">TemplateResponseDocumentFormFieldRadio</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentformfieldradio"></a>
<a id="schema_TemplateResponseDocumentFormFieldRadio"></a>
<a id="tocStemplateresponsedocumentformfieldradio"></a>
<a id="tocstemplateresponsedocumentformfieldradio"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "radio",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentFormFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the form field.|
|name|string|false|none|The name of the form field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Form Field.|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|type|string|true|none|The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`|
|group|string|true|none|The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.|

<h2 id="tocS_TemplateResponseDocumentFormFieldSignature">TemplateResponseDocumentFormFieldSignature</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentformfieldsignature"></a>
<a id="schema_TemplateResponseDocumentFormFieldSignature"></a>
<a id="tocStemplateresponsedocumentformfieldsignature"></a>
<a id="tocstemplateresponsedocumentformfieldsignature"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "signature",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentFormFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the form field.|
|name|string|false|none|The name of the form field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Form Field.|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|type|string|true|none|The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.|

<h2 id="tocS_TemplateResponseDocumentFormFieldText">TemplateResponseDocumentFormFieldText</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentformfieldtext"></a>
<a id="schema_TemplateResponseDocumentFormFieldText"></a>
<a id="tocStemplateresponsedocumentformfieldtext"></a>
<a id="tocstemplateresponsedocumentformfieldtext"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "text",
  "signer": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "avg_text_length": {
    "num_lines": 0,
    "num_chars_per_line": 0
  },
  "isMultiline": true,
  "originalFontSize": 0,
  "fontFamily": "string",
  "validation_type": "numbers_only",
  "validation_custom_regex": "string",
  "validation_custom_regex_format_label": "string",
  "group": "string"
}
```

This class extends `TemplateResponseDocumentFormFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the form field.|
|name|string|false|none|The name of the form field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Form Field.|
|x|integer|false|none|The horizontal offset in pixels for this form field.|
|y|integer|false|none|The vertical offset in pixels for this form field.|
|width|integer|false|none|The width in pixels of this form field.|
|height|integer|false|none|The height in pixels of this form field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|type|string|true|none|The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`|
|avg_text_length|[TemplateResponseFieldAvgTextLength](#schematemplateresponsefieldavgtextlength)|false|none|Average text length in this field.|
|isMultiline|boolean|false|none|Whether this form field is multiline text.|
|originalFontSize|integer|false|none|Original font size used in this form field's text.|
|fontFamily|string|false|none|Font family used in this form field's text.|
|validation_type|string \| null|false|none|Each text field may contain a `validation_type` parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.|
|validation_custom_regex|string \| null|false|none|When `validation_type` is set to `custom_regex`, this specifies the custom regular expression pattern that will be used to validate the text field.|
|validation_custom_regex_format_label|string \| null|false|none|When `validation_type` is set to `custom_regex`, this specifies the error message displayed to the signer when the text does not match the provided regex pattern.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.|

#### Enumerated Values

|Property|Value|
|---|---|
|validation_type|numbers_only|
|validation_type|letters_only|
|validation_type|phone_number|
|validation_type|bank_routing_number|
|validation_type|bank_account_number|
|validation_type|email_address|
|validation_type|zip_code|
|validation_type|social_security_number|
|validation_type|employer_identification_number|
|validation_type|custom_regex|

<h2 id="tocS_TemplateResponseDocumentStaticFieldBase">TemplateResponseDocumentStaticFieldBase</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentstaticfieldbase"></a>
<a id="schema_TemplateResponseDocumentStaticFieldBase"></a>
<a id="tocStemplateresponsedocumentstaticfieldbase"></a>
<a id="tocstemplateresponsedocumentstaticfieldbase"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "string",
  "signer": "me_now",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the static field.|
|name|string|false|none|The name of the static field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Static Field.|
|x|integer|false|none|The horizontal offset in pixels for this static field.|
|y|integer|false|none|The vertical offset in pixels for this static field.|
|width|integer|false|none|The width in pixels of this static field.|
|height|integer|false|none|The height in pixels of this static field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|

<h2 id="tocS_TemplateResponseDocumentStaticFieldCheckbox">TemplateResponseDocumentStaticFieldCheckbox</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentstaticfieldcheckbox"></a>
<a id="schema_TemplateResponseDocumentStaticFieldCheckbox"></a>
<a id="tocStemplateresponsedocumentstaticfieldcheckbox"></a>
<a id="tocstemplateresponsedocumentstaticfieldcheckbox"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "checkbox",
  "signer": "me_now",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentStaticFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the static field.|
|name|string|false|none|The name of the static field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Static Field.|
|x|integer|false|none|The horizontal offset in pixels for this static field.|
|y|integer|false|none|The vertical offset in pixels for this static field.|
|width|integer|false|none|The width in pixels of this static field.|
|height|integer|false|none|The height in pixels of this static field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this static field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentStaticFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentStaticFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentStaticFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentStaticFieldInitials`|

<h2 id="tocS_TemplateResponseDocumentStaticFieldDateSigned">TemplateResponseDocumentStaticFieldDateSigned</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentstaticfielddatesigned"></a>
<a id="schema_TemplateResponseDocumentStaticFieldDateSigned"></a>
<a id="tocStemplateresponsedocumentstaticfielddatesigned"></a>
<a id="tocstemplateresponsedocumentstaticfielddatesigned"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "date_signed",
  "signer": "me_now",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentStaticFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the static field.|
|name|string|false|none|The name of the static field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Static Field.|
|x|integer|false|none|The horizontal offset in pixels for this static field.|
|y|integer|false|none|The vertical offset in pixels for this static field.|
|width|integer|false|none|The width in pixels of this static field.|
|height|integer|false|none|The height in pixels of this static field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this static field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentStaticFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentStaticFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentStaticFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentStaticFieldInitials`|

<h2 id="tocS_TemplateResponseDocumentStaticFieldDropdown">TemplateResponseDocumentStaticFieldDropdown</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentstaticfielddropdown"></a>
<a id="schema_TemplateResponseDocumentStaticFieldDropdown"></a>
<a id="tocStemplateresponsedocumentstaticfielddropdown"></a>
<a id="tocstemplateresponsedocumentstaticfielddropdown"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "dropdown",
  "signer": "me_now",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentStaticFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the static field.|
|name|string|false|none|The name of the static field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Static Field.|
|x|integer|false|none|The horizontal offset in pixels for this static field.|
|y|integer|false|none|The vertical offset in pixels for this static field.|
|width|integer|false|none|The width in pixels of this static field.|
|height|integer|false|none|The height in pixels of this static field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this static field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentStaticFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentStaticFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentStaticFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentStaticFieldInitials`|

<h2 id="tocS_TemplateResponseDocumentStaticFieldHyperlink">TemplateResponseDocumentStaticFieldHyperlink</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentstaticfieldhyperlink"></a>
<a id="schema_TemplateResponseDocumentStaticFieldHyperlink"></a>
<a id="tocStemplateresponsedocumentstaticfieldhyperlink"></a>
<a id="tocstemplateresponsedocumentstaticfieldhyperlink"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "hyperlink",
  "signer": "me_now",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentStaticFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the static field.|
|name|string|false|none|The name of the static field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Static Field.|
|x|integer|false|none|The horizontal offset in pixels for this static field.|
|y|integer|false|none|The vertical offset in pixels for this static field.|
|width|integer|false|none|The width in pixels of this static field.|
|height|integer|false|none|The height in pixels of this static field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this static field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentStaticFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentStaticFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentStaticFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentStaticFieldInitials`|

<h2 id="tocS_TemplateResponseDocumentStaticFieldInitials">TemplateResponseDocumentStaticFieldInitials</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentstaticfieldinitials"></a>
<a id="schema_TemplateResponseDocumentStaticFieldInitials"></a>
<a id="tocStemplateresponsedocumentstaticfieldinitials"></a>
<a id="tocstemplateresponsedocumentstaticfieldinitials"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "initials",
  "signer": "me_now",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentStaticFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the static field.|
|name|string|false|none|The name of the static field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Static Field.|
|x|integer|false|none|The horizontal offset in pixels for this static field.|
|y|integer|false|none|The vertical offset in pixels for this static field.|
|width|integer|false|none|The width in pixels of this static field.|
|height|integer|false|none|The height in pixels of this static field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this static field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentStaticFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentStaticFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentStaticFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentStaticFieldInitials`|

<h2 id="tocS_TemplateResponseDocumentStaticFieldRadio">TemplateResponseDocumentStaticFieldRadio</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentstaticfieldradio"></a>
<a id="schema_TemplateResponseDocumentStaticFieldRadio"></a>
<a id="tocStemplateresponsedocumentstaticfieldradio"></a>
<a id="tocstemplateresponsedocumentstaticfieldradio"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "radio",
  "signer": "me_now",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentStaticFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the static field.|
|name|string|false|none|The name of the static field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Static Field.|
|x|integer|false|none|The horizontal offset in pixels for this static field.|
|y|integer|false|none|The vertical offset in pixels for this static field.|
|width|integer|false|none|The width in pixels of this static field.|
|height|integer|false|none|The height in pixels of this static field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this static field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentStaticFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentStaticFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentStaticFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentStaticFieldInitials`|

<h2 id="tocS_TemplateResponseDocumentStaticFieldSignature">TemplateResponseDocumentStaticFieldSignature</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentstaticfieldsignature"></a>
<a id="schema_TemplateResponseDocumentStaticFieldSignature"></a>
<a id="tocStemplateresponsedocumentstaticfieldsignature"></a>
<a id="tocstemplateresponsedocumentstaticfieldsignature"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "signature",
  "signer": "me_now",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentStaticFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the static field.|
|name|string|false|none|The name of the static field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Static Field.|
|x|integer|false|none|The horizontal offset in pixels for this static field.|
|y|integer|false|none|The vertical offset in pixels for this static field.|
|width|integer|false|none|The width in pixels of this static field.|
|height|integer|false|none|The height in pixels of this static field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this static field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentStaticFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentStaticFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentStaticFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentStaticFieldInitials`|

<h2 id="tocS_TemplateResponseDocumentStaticFieldText">TemplateResponseDocumentStaticFieldText</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsedocumentstaticfieldtext"></a>
<a id="schema_TemplateResponseDocumentStaticFieldText"></a>
<a id="tocStemplateresponsedocumentstaticfieldtext"></a>
<a id="tocstemplateresponsedocumentstaticfieldtext"></a>

```json
{
  "api_id": "string",
  "name": "string",
  "type": "text",
  "signer": "me_now",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0,
  "required": true,
  "group": "string"
}
```

This class extends `TemplateResponseDocumentStaticFieldBase`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|A unique id for the static field.|
|name|string|false|none|The name of the static field.|
|type|string|true|none|none|
|signer|string|false|none|The signer of the Static Field.|
|x|integer|false|none|The horizontal offset in pixels for this static field.|
|y|integer|false|none|The vertical offset in pixels for this static field.|
|width|integer|false|none|The width in pixels of this static field.|
|height|integer|false|none|The height in pixels of this static field.|
|required|boolean|false|none|Boolean showing whether or not this field is required.|
|group|string \| null|false|none|The name of the group this field is in. If this field is not a group, this defaults to `null`.|
|type|string|true|none|The type of this static field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentStaticFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentStaticFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentStaticFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentStaticFieldInitials`|

<h2 id="tocS_TemplateResponseFieldAvgTextLength">TemplateResponseFieldAvgTextLength</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsefieldavgtextlength"></a>
<a id="schema_TemplateResponseFieldAvgTextLength"></a>
<a id="tocStemplateresponsefieldavgtextlength"></a>
<a id="tocstemplateresponsefieldavgtextlength"></a>

```json
{
  "num_lines": 0,
  "num_chars_per_line": 0
}
```

Average text length in this field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_lines|integer|false|none|Number of lines.|
|num_chars_per_line|integer|false|none|Number of characters per line.|

<h2 id="tocS_TemplateResponseSignerRole">TemplateResponseSignerRole</h2>
<!-- backwards compatibility -->
<a id="schematemplateresponsesignerrole"></a>
<a id="schema_TemplateResponseSignerRole"></a>
<a id="tocStemplateresponsesignerrole"></a>
<a id="tocstemplateresponsesignerrole"></a>

```json
{
  "name": "string",
  "order": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the Role.|
|order|integer|false|none|If signer order is assigned this is the 0-based index for this role.|

<h2 id="tocS_TemplateUpdateFilesResponseTemplate">TemplateUpdateFilesResponseTemplate</h2>
<!-- backwards compatibility -->
<a id="schematemplateupdatefilesresponsetemplate"></a>
<a id="schema_TemplateUpdateFilesResponseTemplate"></a>
<a id="tocStemplateupdatefilesresponsetemplate"></a>
<a id="tocstemplateupdatefilesresponsetemplate"></a>

```json
{
  "template_id": "string",
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

Contains template id

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_id|string|false|none|The id of the Template.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|**Deprecated.** A list of warnings.|

<h2 id="tocS_UnclaimedDraftResponse">UnclaimedDraftResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimeddraftresponse"></a>
<a id="schema_UnclaimedDraftResponse"></a>
<a id="tocSunclaimeddraftresponse"></a>
<a id="tocsunclaimeddraftresponse"></a>

```json
{
  "signature_request_id": "string",
  "claim_url": "string",
  "signing_redirect_url": "string",
  "requesting_redirect_url": "string",
  "expires_at": 0,
  "test_mode": true
}
```

A group of documents that a user can take ownership of via the claim URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signature_request_id|string \| null|false|none|The ID of the signature request that is represented by this UnclaimedDraft.|
|claim_url|string|false|none|The URL to be used to claim this UnclaimedDraft.|
|signing_redirect_url|string \| null|false|none|The URL you want signers redirected to after they successfully sign.|
|requesting_redirect_url|string \| null|false|none|The URL you want signers redirected to after they successfully request a signature (Will only be returned in the response if it is applicable to the request.).|
|expires_at|integer \| null|false|none|When the link expires.|
|test_mode|boolean|false|none|Whether this is a test draft. Signature requests made from test drafts have no legal value.|

<h2 id="tocS_WarningResponse">WarningResponse</h2>
<!-- backwards compatibility -->
<a id="schemawarningresponse"></a>
<a id="schema_WarningResponse"></a>
<a id="tocSwarningresponse"></a>
<a id="tocswarningresponse"></a>

```json
{
  "warning_msg": "string",
  "warning_name": "string"
}
```

A list of warnings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warning_msg|string|true|none|Warning message|
|warning_name|string|true|none|Warning name|

<h2 id="tocS_TeamGetResponse">TeamGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamgetresponse"></a>
<a id="schema_TeamGetResponse"></a>
<a id="tocSteamgetresponse"></a>
<a id="tocsteamgetresponse"></a>

```json
{
  "team": {
    "name": "string",
    "accounts": [
      {
        "account_id": "string",
        "email_address": "string",
        "is_locked": true,
        "is_paid_hs": true,
        "is_paid_hf": true,
        "quotas": {
          "api_signature_requests_left": 0,
          "documents_left": 0,
          "templates_total": 0,
          "templates_left": 0,
          "sms_verifications_left": 0,
          "num_fax_pages_left": 0
        },
        "callback_url": "string",
        "role_code": "string",
        "team_id": "string",
        "locale": "string",
        "usage": {
          "fax_pages_sent": 0
        },
        "settings": {
          "signer_access_codes": true,
          "sms_delivery": true,
          "sms_authentication": true
        }
      }
    ],
    "invited_accounts": [
      {
        "account_id": "string",
        "email_address": "string",
        "is_locked": true,
        "is_paid_hs": true,
        "is_paid_hf": true,
        "quotas": {
          "api_signature_requests_left": 0,
          "documents_left": 0,
          "templates_total": 0,
          "templates_left": 0,
          "sms_verifications_left": 0,
          "num_fax_pages_left": 0
        },
        "callback_url": "string",
        "role_code": "string",
        "team_id": "string",
        "locale": "string",
        "usage": {
          "fax_pages_sent": 0
        },
        "settings": {
          "signer_access_codes": true,
          "sms_delivery": true,
          "sms_authentication": true
        }
      }
    ],
    "invited_emails": [
      "string"
    ]
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team|[TeamResponse](#schemateamresponse)|true|none|Contains information about your team and its members|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_TeamGetInfoResponse">TeamGetInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamgetinforesponse"></a>
<a id="schema_TeamGetInfoResponse"></a>
<a id="tocSteamgetinforesponse"></a>
<a id="tocsteamgetinforesponse"></a>

```json
{
  "team": {
    "team_id": "string",
    "team_parent": {
      "team_id": "string",
      "name": "string"
    },
    "name": "string",
    "num_members": 0,
    "num_sub_teams": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team|[TeamInfoResponse](#schemateaminforesponse)|true|none|none|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_TeamInvitesResponse">TeamInvitesResponse</h2>
<!-- backwards compatibility -->
<a id="schemateaminvitesresponse"></a>
<a id="schema_TeamInvitesResponse"></a>
<a id="tocSteaminvitesresponse"></a>
<a id="tocsteaminvitesresponse"></a>

```json
{
  "team_invites": [
    {
      "email_address": "string",
      "team_id": "string",
      "role": "string",
      "sent_at": 0,
      "redeemed_at": 0,
      "expires_at": 0
    }
  ],
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_invites|[[TeamInviteResponse](#schemateaminviteresponse)]|true|none|Contains a list of team invites and their roles.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|none|

<h2 id="tocS_TeamMembersResponse">TeamMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemateammembersresponse"></a>
<a id="schema_TeamMembersResponse"></a>
<a id="tocSteammembersresponse"></a>
<a id="tocsteammembersresponse"></a>

```json
{
  "team_members": [
    {
      "account_id": "string",
      "email_address": "string",
      "role": "string"
    }
  ],
  "list_info": {
    "num_pages": 0,
    "num_results": 0,
    "page": 0,
    "page_size": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_members|[[TeamMemberResponse](#schemateammemberresponse)]|true|none|Contains a list of team members and their roles for a specific team.|
|list_info|[ListInfoResponse](#schemalistinforesponse)|true|none|Contains pagination information about the data returned.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|none|

<h2 id="tocS_TeamSubTeamsResponse">TeamSubTeamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamsubteamsresponse"></a>
<a id="schema_TeamSubTeamsResponse"></a>
<a id="tocSteamsubteamsresponse"></a>
<a id="tocsteamsubteamsresponse"></a>

```json
{
  "sub_teams": [
    {
      "team_id": "string",
      "name": "string"
    }
  ],
  "list_info": {
    "num_pages": 0,
    "num_results": 0,
    "page": 0,
    "page_size": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sub_teams|[[SubTeamResponse](#schemasubteamresponse)]|true|none|Contains a list with sub teams.|
|list_info|[ListInfoResponse](#schemalistinforesponse)|true|none|Contains pagination information about the data returned.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|none|

<h2 id="tocS_TemplateCreateResponse">TemplateCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatecreateresponse"></a>
<a id="schema_TemplateCreateResponse"></a>
<a id="tocStemplatecreateresponse"></a>
<a id="tocstemplatecreateresponse"></a>

```json
{
  "template": {
    "template_id": "string"
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|[TemplateCreateResponseTemplate](#schematemplatecreateresponsetemplate)|true|none|Template object with parameters: `template_id`.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_TemplateCreateEmbeddedDraftResponse">TemplateCreateEmbeddedDraftResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatecreateembeddeddraftresponse"></a>
<a id="schema_TemplateCreateEmbeddedDraftResponse"></a>
<a id="tocStemplatecreateembeddeddraftresponse"></a>
<a id="tocstemplatecreateembeddeddraftresponse"></a>

```json
{
  "template": {
    "template_id": "string",
    "edit_url": "string",
    "expires_at": 0,
    "warnings": [
      {
        "warning_msg": "string",
        "warning_name": "string"
      }
    ]
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|[TemplateCreateEmbeddedDraftResponseTemplate](#schematemplatecreateembeddeddraftresponsetemplate)|true|none|Template object with parameters: `template_id`, `edit_url`, `expires_at`.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_TemplateGetResponse">TemplateGetResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplategetresponse"></a>
<a id="schema_TemplateGetResponse"></a>
<a id="tocStemplategetresponse"></a>
<a id="tocstemplategetresponse"></a>

```json
{
  "template": {
    "template_id": "string",
    "title": "string",
    "message": "string",
    "updated_at": 0,
    "is_embedded": true,
    "is_creator": true,
    "can_edit": true,
    "is_locked": true,
    "metadata": {
      "property1": null,
      "property2": null
    },
    "signer_roles": [
      {
        "name": "string",
        "order": 0
      }
    ],
    "cc_roles": [
      {
        "name": "string"
      }
    ],
    "documents": [
      {
        "name": "string",
        "index": 0,
        "field_groups": [
          {
            "name": "string",
            "rule": {
              "requirement": "string",
              "groupLabel": "string"
            }
          }
        ],
        "form_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true
          }
        ],
        "custom_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true,
            "group": "string"
          }
        ],
        "static_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "me_now",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true,
            "group": "string"
          }
        ]
      }
    ],
    "custom_fields": [
      {
        "api_id": "string",
        "name": "string",
        "type": "string",
        "signer": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0,
        "required": true,
        "group": "string"
      }
    ],
    "named_form_fields": [
      {
        "api_id": "string",
        "name": "string",
        "type": "string",
        "signer": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0,
        "required": true
      }
    ],
    "accounts": [
      {
        "account_id": "string",
        "email_address": "string",
        "is_locked": true,
        "is_paid_hs": true,
        "is_paid_hf": true,
        "quotas": {
          "templates_left": 0,
          "api_signature_requests_left": 0,
          "documents_left": 0,
          "sms_verifications_left": 0
        }
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ]
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|[TemplateResponse](#schematemplateresponse)|true|none|Contains information about the templates you and your team have created.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_TemplateListResponse">TemplateListResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatelistresponse"></a>
<a id="schema_TemplateListResponse"></a>
<a id="tocStemplatelistresponse"></a>
<a id="tocstemplatelistresponse"></a>

```json
{
  "templates": [
    {
      "template_id": "string",
      "title": "string",
      "message": "string",
      "updated_at": 0,
      "is_embedded": true,
      "is_creator": true,
      "can_edit": true,
      "is_locked": true,
      "metadata": {
        "property1": null,
        "property2": null
      },
      "signer_roles": [
        {
          "name": "string",
          "order": 0
        }
      ],
      "cc_roles": [
        {
          "name": "string"
        }
      ],
      "documents": [
        {
          "name": "string",
          "index": 0,
          "field_groups": [
            {
              "name": "string",
              "rule": {
                "requirement": "string",
                "groupLabel": "string"
              }
            }
          ],
          "form_fields": [
            {
              "api_id": "string",
              "name": "string",
              "type": "string",
              "signer": "string",
              "x": 0,
              "y": 0,
              "width": 0,
              "height": 0,
              "required": true
            }
          ],
          "custom_fields": [
            {
              "api_id": "string",
              "name": "string",
              "type": "string",
              "signer": "string",
              "x": 0,
              "y": 0,
              "width": 0,
              "height": 0,
              "required": true,
              "group": "string"
            }
          ],
          "static_fields": [
            {
              "api_id": "string",
              "name": "string",
              "type": "string",
              "signer": "me_now",
              "x": 0,
              "y": 0,
              "width": 0,
              "height": 0,
              "required": true,
              "group": "string"
            }
          ]
        }
      ],
      "custom_fields": [
        {
          "api_id": "string",
          "name": "string",
          "type": "string",
          "signer": "string",
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0,
          "required": true,
          "group": "string"
        }
      ],
      "named_form_fields": [
        {
          "api_id": "string",
          "name": "string",
          "type": "string",
          "signer": "string",
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0,
          "required": true
        }
      ],
      "accounts": [
        {
          "account_id": "string",
          "email_address": "string",
          "is_locked": true,
          "is_paid_hs": true,
          "is_paid_hf": true,
          "quotas": {
            "templates_left": 0,
            "api_signature_requests_left": 0,
            "documents_left": 0,
            "sms_verifications_left": 0
          }
        }
      ],
      "attachments": [
        {
          "id": "string",
          "signer": "string",
          "name": "string",
          "required": true,
          "instructions": "string",
          "uploaded_at": 0
        }
      ]
    }
  ],
  "list_info": {
    "num_pages": 0,
    "num_results": 0,
    "page": 0,
    "page_size": 0
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templates|[[TemplateResponse](#schematemplateresponse)]|true|none|List of templates that the API caller has access to.|
|list_info|[ListInfoResponse](#schemalistinforesponse)|true|none|Contains pagination information about the data returned.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_TemplateUpdateFilesResponse">TemplateUpdateFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplateupdatefilesresponse"></a>
<a id="schema_TemplateUpdateFilesResponse"></a>
<a id="tocStemplateupdatefilesresponse"></a>
<a id="tocstemplateupdatefilesresponse"></a>

```json
{
  "template": {
    "template_id": "string",
    "warnings": [
      {
        "warning_msg": "string",
        "warning_name": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|[TemplateUpdateFilesResponseTemplate](#schematemplateupdatefilesresponsetemplate)|true|none|Contains template id|

<h2 id="tocS_UnclaimedDraftCreateResponse">UnclaimedDraftCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimeddraftcreateresponse"></a>
<a id="schema_UnclaimedDraftCreateResponse"></a>
<a id="tocSunclaimeddraftcreateresponse"></a>
<a id="tocsunclaimeddraftcreateresponse"></a>

```json
{
  "unclaimed_draft": {
    "signature_request_id": "string",
    "claim_url": "string",
    "signing_redirect_url": "string",
    "requesting_redirect_url": "string",
    "expires_at": 0,
    "test_mode": true
  },
  "warnings": [
    {
      "warning_msg": "string",
      "warning_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unclaimed_draft|[UnclaimedDraftResponse](#schemaunclaimeddraftresponse)|true|none|A group of documents that a user can take ownership of via the claim URL.|
|warnings|[[WarningResponse](#schemawarningresponse)]|false|none|A list of warnings.|

<h2 id="tocS_EventCallbackRequest">EventCallbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackrequest"></a>
<a id="schema_EventCallbackRequest"></a>
<a id="tocSeventcallbackrequest"></a>
<a id="tocseventcallbackrequest"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "account_confirmed",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "account": {
    "account_id": "string",
    "email_address": "string",
    "is_locked": true,
    "is_paid_hs": true,
    "is_paid_hf": true,
    "quotas": {
      "api_signature_requests_left": 0,
      "documents_left": 0,
      "templates_total": 0,
      "templates_left": 0,
      "sms_verifications_left": 0,
      "num_fax_pages_left": 0
    },
    "callback_url": "string",
    "role_code": "string",
    "team_id": "string",
    "locale": "string",
    "usage": {
      "fax_pages_sent": 0
    },
    "settings": {
      "signer_access_codes": true,
      "sms_delivery": true,
      "sms_authentication": true
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  },
  "template": {
    "template_id": "string",
    "title": "string",
    "message": "string",
    "updated_at": 0,
    "is_embedded": true,
    "is_creator": true,
    "can_edit": true,
    "is_locked": true,
    "metadata": {
      "property1": null,
      "property2": null
    },
    "signer_roles": [
      {
        "name": "string",
        "order": 0
      }
    ],
    "cc_roles": [
      {
        "name": "string"
      }
    ],
    "documents": [
      {
        "name": "string",
        "index": 0,
        "field_groups": [
          {
            "name": "string",
            "rule": {
              "requirement": "string",
              "groupLabel": "string"
            }
          }
        ],
        "form_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true
          }
        ],
        "custom_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true,
            "group": "string"
          }
        ],
        "static_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "me_now",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true,
            "group": "string"
          }
        ]
      }
    ],
    "custom_fields": [
      {
        "api_id": "string",
        "name": "string",
        "type": "string",
        "signer": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0,
        "required": true,
        "group": "string"
      }
    ],
    "named_form_fields": [
      {
        "api_id": "string",
        "name": "string",
        "type": "string",
        "signer": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0,
        "required": true
      }
    ],
    "accounts": [
      {
        "account_id": "string",
        "email_address": "string",
        "is_locked": true,
        "is_paid_hs": true,
        "is_paid_hf": true,
        "quotas": {
          "templates_left": 0,
          "api_signature_requests_left": 0,
          "documents_left": 0,
          "sms_verifications_left": 0
        }
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[EventCallbackRequestEvent](#schemaeventcallbackrequestevent)|true|none|Basic information about the event that occurred.|
|account|[AccountResponse](#schemaaccountresponse)|false|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|
|template|[TemplateResponse](#schematemplateresponse)|false|none|Contains information about the templates you and your team have created.|

<h2 id="tocS_EventCallbackRequestEvent">EventCallbackRequestEvent</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackrequestevent"></a>
<a id="schema_EventCallbackRequestEvent"></a>
<a id="tocSeventcallbackrequestevent"></a>
<a id="tocseventcallbackrequestevent"></a>

```json
{
  "event_time": "string",
  "event_type": "account_confirmed",
  "event_hash": "string",
  "event_metadata": {
    "related_signature_id": "string",
    "reported_for_account_id": "string",
    "reported_for_app_id": "string",
    "event_message": "string"
  }
}
```

Basic information about the event that occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_time|string|true|none|Time the event was created (using Unix time).|
|event_type|string|true|none|Type of callback event that was triggered.|
|event_hash|string|true|none|Generated hash used to verify source of event data.|
|event_metadata|[EventCallbackRequestEventMetadata](#schemaeventcallbackrequesteventmetadata)|false|none|Specific metadata about the event.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|account_confirmed|
|event_type|unknown_error|
|event_type|file_error|
|event_type|sign_url_invalid|
|event_type|signature_request_viewed|
|event_type|signature_request_signed|
|event_type|signature_request_sent|
|event_type|signature_request_all_signed|
|event_type|signature_request_email_bounce|
|event_type|signature_request_remind|
|event_type|signature_request_incomplete_qes|
|event_type|signature_request_destroyed|
|event_type|signature_request_canceled|
|event_type|signature_request_downloadable|
|event_type|signature_request_declined|
|event_type|signature_request_reassigned|
|event_type|signature_request_invalid|
|event_type|signature_request_prepared|
|event_type|signature_request_expired|
|event_type|template_created|
|event_type|template_error|
|event_type|callback_test|
|event_type|signature_request_signer_removed|
|event_type|fax_received|
|event_type|fax_sent|
|event_type|fax_on_hold|
|event_type|fax_busy|
|event_type|fax_no_answer|
|event_type|fax_disconnected|
|event_type|fax_blacklisted|

<h2 id="tocS_EventCallbackRequestEventMetadata">EventCallbackRequestEventMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackrequesteventmetadata"></a>
<a id="schema_EventCallbackRequestEventMetadata"></a>
<a id="tocSeventcallbackrequesteventmetadata"></a>
<a id="tocseventcallbackrequesteventmetadata"></a>

```json
{
  "related_signature_id": "string",
  "reported_for_account_id": "string",
  "reported_for_app_id": "string",
  "event_message": "string"
}
```

Specific metadata about the event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|related_signature_id|string \| null|false|none|Signature ID for a specific signer. Applicable to `signature_request_signed` and `signature_request_viewed` events.|
|reported_for_account_id|string \| null|false|none|Account ID the event was reported for.|
|reported_for_app_id|string \| null|false|none|App ID the event was reported for.|
|event_message|string \| null|false|none|Message about a declined or failed (due to error) signature flow.|

<h2 id="tocS_EventCallbackSignatureRequestViewed">EventCallbackSignatureRequestViewed</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestviewed"></a>
<a id="schema_EventCallbackSignatureRequestViewed"></a>
<a id="tocSeventcallbacksignaturerequestviewed"></a>
<a id="tocseventcallbacksignaturerequestviewed"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_viewed",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestSigned">EventCallbackSignatureRequestSigned</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestsigned"></a>
<a id="schema_EventCallbackSignatureRequestSigned"></a>
<a id="tocSeventcallbacksignaturerequestsigned"></a>
<a id="tocseventcallbacksignaturerequestsigned"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_signed",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestSignerRemoved">EventCallbackSignatureRequestSignerRemoved</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestsignerremoved"></a>
<a id="schema_EventCallbackSignatureRequestSignerRemoved"></a>
<a id="tocSeventcallbacksignaturerequestsignerremoved"></a>
<a id="tocseventcallbacksignaturerequestsignerremoved"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_signer_removed",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestDownloadable">EventCallbackSignatureRequestDownloadable</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestdownloadable"></a>
<a id="schema_EventCallbackSignatureRequestDownloadable"></a>
<a id="tocSeventcallbacksignaturerequestdownloadable"></a>
<a id="tocseventcallbacksignaturerequestdownloadable"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_downloadable",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestSent">EventCallbackSignatureRequestSent</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestsent"></a>
<a id="schema_EventCallbackSignatureRequestSent"></a>
<a id="tocSeventcallbacksignaturerequestsent"></a>
<a id="tocseventcallbacksignaturerequestsent"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_sent",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestAllSigned">EventCallbackSignatureRequestAllSigned</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestallsigned"></a>
<a id="schema_EventCallbackSignatureRequestAllSigned"></a>
<a id="tocSeventcallbacksignaturerequestallsigned"></a>
<a id="tocseventcallbacksignaturerequestallsigned"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_all_signed",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestInvalid">EventCallbackSignatureRequestInvalid</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestinvalid"></a>
<a id="schema_EventCallbackSignatureRequestInvalid"></a>
<a id="tocSeventcallbacksignaturerequestinvalid"></a>
<a id="tocseventcallbacksignaturerequestinvalid"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_invalid",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestEmailBounce">EventCallbackSignatureRequestEmailBounce</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestemailbounce"></a>
<a id="schema_EventCallbackSignatureRequestEmailBounce"></a>
<a id="tocSeventcallbacksignaturerequestemailbounce"></a>
<a id="tocseventcallbacksignaturerequestemailbounce"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_email_bounce",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestRemind">EventCallbackSignatureRequestRemind</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestremind"></a>
<a id="schema_EventCallbackSignatureRequestRemind"></a>
<a id="tocSeventcallbacksignaturerequestremind"></a>
<a id="tocseventcallbacksignaturerequestremind"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_remind",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestIncompleteQes">EventCallbackSignatureRequestIncompleteQes</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestincompleteqes"></a>
<a id="schema_EventCallbackSignatureRequestIncompleteQes"></a>
<a id="tocSeventcallbacksignaturerequestincompleteqes"></a>
<a id="tocseventcallbacksignaturerequestincompleteqes"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_incomplete_qes",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestDestroyed">EventCallbackSignatureRequestDestroyed</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestdestroyed"></a>
<a id="schema_EventCallbackSignatureRequestDestroyed"></a>
<a id="tocSeventcallbacksignaturerequestdestroyed"></a>
<a id="tocseventcallbacksignaturerequestdestroyed"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_destroyed",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestCanceled">EventCallbackSignatureRequestCanceled</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestcanceled"></a>
<a id="schema_EventCallbackSignatureRequestCanceled"></a>
<a id="tocSeventcallbacksignaturerequestcanceled"></a>
<a id="tocseventcallbacksignaturerequestcanceled"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_canceled",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestDeclined">EventCallbackSignatureRequestDeclined</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestdeclined"></a>
<a id="schema_EventCallbackSignatureRequestDeclined"></a>
<a id="tocSeventcallbacksignaturerequestdeclined"></a>
<a id="tocseventcallbacksignaturerequestdeclined"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_declined",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestExpired">EventCallbackSignatureRequestExpired</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestexpired"></a>
<a id="schema_EventCallbackSignatureRequestExpired"></a>
<a id="tocSeventcallbacksignaturerequestexpired"></a>
<a id="tocseventcallbacksignaturerequestexpired"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_expired",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestReassigned">EventCallbackSignatureRequestReassigned</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestreassigned"></a>
<a id="schema_EventCallbackSignatureRequestReassigned"></a>
<a id="tocSeventcallbacksignaturerequestreassigned"></a>
<a id="tocseventcallbacksignaturerequestreassigned"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_reassigned",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackSignatureRequestPrepared">EventCallbackSignatureRequestPrepared</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignaturerequestprepared"></a>
<a id="schema_EventCallbackSignatureRequestPrepared"></a>
<a id="tocSeventcallbacksignaturerequestprepared"></a>
<a id="tocseventcallbacksignaturerequestprepared"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_prepared",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackAccountConfirmed">EventCallbackAccountConfirmed</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackaccountconfirmed"></a>
<a id="schema_EventCallbackAccountConfirmed"></a>
<a id="tocSeventcallbackaccountconfirmed"></a>
<a id="tocseventcallbackaccountconfirmed"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "account_confirmed",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "account": {
    "account_id": "string",
    "email_address": "string",
    "is_locked": true,
    "is_paid_hs": true,
    "is_paid_hf": true,
    "quotas": {
      "api_signature_requests_left": 0,
      "documents_left": 0,
      "templates_total": 0,
      "templates_left": 0,
      "sms_verifications_left": 0,
      "num_fax_pages_left": 0
    },
    "callback_url": "string",
    "role_code": "string",
    "team_id": "string",
    "locale": "string",
    "usage": {
      "fax_pages_sent": 0
    },
    "settings": {
      "signer_access_codes": true,
      "sms_delivery": true,
      "sms_authentication": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|account|[AccountResponse](#schemaaccountresponse)|false|none|none|

<h2 id="tocS_EventCallbackUnknownError">EventCallbackUnknownError</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackunknownerror"></a>
<a id="schema_EventCallbackUnknownError"></a>
<a id="tocSeventcallbackunknownerror"></a>
<a id="tocseventcallbackunknownerror"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "unknown_error",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackFileError">EventCallbackFileError</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackfileerror"></a>
<a id="schema_EventCallbackFileError"></a>
<a id="tocSeventcallbackfileerror"></a>
<a id="tocseventcallbackfileerror"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "file_error",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackTemplateCreated">EventCallbackTemplateCreated</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacktemplatecreated"></a>
<a id="schema_EventCallbackTemplateCreated"></a>
<a id="tocSeventcallbacktemplatecreated"></a>
<a id="tocseventcallbacktemplatecreated"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "template_created",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "template": {
    "template_id": "string",
    "title": "string",
    "message": "string",
    "updated_at": 0,
    "is_embedded": true,
    "is_creator": true,
    "can_edit": true,
    "is_locked": true,
    "metadata": {
      "property1": null,
      "property2": null
    },
    "signer_roles": [
      {
        "name": "string",
        "order": 0
      }
    ],
    "cc_roles": [
      {
        "name": "string"
      }
    ],
    "documents": [
      {
        "name": "string",
        "index": 0,
        "field_groups": [
          {
            "name": "string",
            "rule": {
              "requirement": "string",
              "groupLabel": "string"
            }
          }
        ],
        "form_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true
          }
        ],
        "custom_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true,
            "group": "string"
          }
        ],
        "static_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "me_now",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true,
            "group": "string"
          }
        ]
      }
    ],
    "custom_fields": [
      {
        "api_id": "string",
        "name": "string",
        "type": "string",
        "signer": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0,
        "required": true,
        "group": "string"
      }
    ],
    "named_form_fields": [
      {
        "api_id": "string",
        "name": "string",
        "type": "string",
        "signer": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0,
        "required": true
      }
    ],
    "accounts": [
      {
        "account_id": "string",
        "email_address": "string",
        "is_locked": true,
        "is_paid_hs": true,
        "is_paid_hf": true,
        "quotas": {
          "templates_left": 0,
          "api_signature_requests_left": 0,
          "documents_left": 0,
          "sms_verifications_left": 0
        }
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|template|[TemplateResponse](#schematemplateresponse)|false|none|Contains information about the templates you and your team have created.|

<h2 id="tocS_EventCallbackTemplateError">EventCallbackTemplateError</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacktemplateerror"></a>
<a id="schema_EventCallbackTemplateError"></a>
<a id="tocSeventcallbacktemplateerror"></a>
<a id="tocseventcallbacktemplateerror"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "template_error",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "template": {
    "template_id": "string",
    "title": "string",
    "message": "string",
    "updated_at": 0,
    "is_embedded": true,
    "is_creator": true,
    "can_edit": true,
    "is_locked": true,
    "metadata": {
      "property1": null,
      "property2": null
    },
    "signer_roles": [
      {
        "name": "string",
        "order": 0
      }
    ],
    "cc_roles": [
      {
        "name": "string"
      }
    ],
    "documents": [
      {
        "name": "string",
        "index": 0,
        "field_groups": [
          {
            "name": "string",
            "rule": {
              "requirement": "string",
              "groupLabel": "string"
            }
          }
        ],
        "form_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true
          }
        ],
        "custom_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true,
            "group": "string"
          }
        ],
        "static_fields": [
          {
            "api_id": "string",
            "name": "string",
            "type": "string",
            "signer": "me_now",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0,
            "required": true,
            "group": "string"
          }
        ]
      }
    ],
    "custom_fields": [
      {
        "api_id": "string",
        "name": "string",
        "type": "string",
        "signer": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0,
        "required": true,
        "group": "string"
      }
    ],
    "named_form_fields": [
      {
        "api_id": "string",
        "name": "string",
        "type": "string",
        "signer": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0,
        "required": true
      }
    ],
    "accounts": [
      {
        "account_id": "string",
        "email_address": "string",
        "is_locked": true,
        "is_paid_hs": true,
        "is_paid_hf": true,
        "quotas": {
          "templates_left": 0,
          "api_signature_requests_left": 0,
          "documents_left": 0,
          "sms_verifications_left": 0
        }
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|template|[TemplateResponse](#schematemplateresponse)|false|none|Contains information about the templates you and your team have created.|

<h2 id="tocS_EventCallbackSignUrlInvalid">EventCallbackSignUrlInvalid</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbacksignurlinvalid"></a>
<a id="schema_EventCallbackSignUrlInvalid"></a>
<a id="tocSeventcallbacksignurlinvalid"></a>
<a id="tocseventcallbacksignurlinvalid"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "sign_url_invalid",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|signature_request|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackCallbackTest">EventCallbackCallbackTest</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackcallbacktest"></a>
<a id="schema_EventCallbackCallbackTest"></a>
<a id="tocSeventcallbackcallbacktest"></a>
<a id="tocseventcallbackcallbacktest"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "callback_test",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|

<h2 id="tocS_EventCallbackFaxReceived">EventCallbackFaxReceived</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackfaxreceived"></a>
<a id="schema_EventCallbackFaxReceived"></a>
<a id="tocSeventcallbackfaxreceived"></a>
<a id="tocseventcallbackfaxreceived"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "fax_received",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "transmission": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|transmission|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackFaxSent">EventCallbackFaxSent</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackfaxsent"></a>
<a id="schema_EventCallbackFaxSent"></a>
<a id="tocSeventcallbackfaxsent"></a>
<a id="tocseventcallbackfaxsent"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "fax_sent",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "transmission": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|transmission|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackFaxOnHold">EventCallbackFaxOnHold</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackfaxonhold"></a>
<a id="schema_EventCallbackFaxOnHold"></a>
<a id="tocSeventcallbackfaxonhold"></a>
<a id="tocseventcallbackfaxonhold"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "fax_on_hold",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "transmission": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|transmission|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackFaxBusy">EventCallbackFaxBusy</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackfaxbusy"></a>
<a id="schema_EventCallbackFaxBusy"></a>
<a id="tocSeventcallbackfaxbusy"></a>
<a id="tocseventcallbackfaxbusy"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "fax_busy",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "transmission": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|transmission|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackFaxNoAnswer">EventCallbackFaxNoAnswer</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackfaxnoanswer"></a>
<a id="schema_EventCallbackFaxNoAnswer"></a>
<a id="tocSeventcallbackfaxnoanswer"></a>
<a id="tocseventcallbackfaxnoanswer"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "fax_no_answer",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "transmission": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|transmission|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackFaxDisconnected">EventCallbackFaxDisconnected</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackfaxdisconnected"></a>
<a id="schema_EventCallbackFaxDisconnected"></a>
<a id="tocSeventcallbackfaxdisconnected"></a>
<a id="tocseventcallbackfaxdisconnected"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "fax_disconnected",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "transmission": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|transmission|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackFaxBlacklisted">EventCallbackFaxBlacklisted</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackfaxblacklisted"></a>
<a id="schema_EventCallbackFaxBlacklisted"></a>
<a id="tocSeventcallbackfaxblacklisted"></a>
<a id="tocseventcallbackfaxblacklisted"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "fax_blacklisted",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "transmission": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|true|none|none|
|transmission|[SignatureRequestResponse](#schemasignaturerequestresponse)|false|none|Contains information about a signature request.|

<h2 id="tocS_EventCallbackPayload">EventCallbackPayload</h2>
<!-- backwards compatibility -->
<a id="schemaeventcallbackpayload"></a>
<a id="schema_EventCallbackPayload"></a>
<a id="tocSeventcallbackpayload"></a>
<a id="tocseventcallbackpayload"></a>

```json
{
  "event": {
    "event_time": "string",
    "event_type": "signature_request_viewed",
    "event_hash": "string",
    "event_metadata": {
      "related_signature_id": "string",
      "reported_for_account_id": "string",
      "reported_for_app_id": "string",
      "event_message": "string"
    }
  },
  "signature_request": {
    "test_mode": false,
    "signature_request_id": "string",
    "requester_email_address": "string",
    "title": "string",
    "original_title": "string",
    "subject": "string",
    "message": "string",
    "metadata": {
      "property1": null,
      "property2": null
    },
    "created_at": 0,
    "expires_at": 0,
    "is_complete": true,
    "is_declined": true,
    "has_error": true,
    "files_url": "string",
    "signing_url": "string",
    "details_url": "string",
    "cc_email_addresses": [
      "string"
    ],
    "signing_redirect_url": "string",
    "final_copy_uri": "string",
    "template_ids": [
      "string"
    ],
    "custom_fields": [
      {
        "type": "string",
        "name": "string",
        "required": true,
        "api_id": "string",
        "editor": "string"
      }
    ],
    "attachments": [
      {
        "id": "string",
        "signer": "string",
        "name": "string",
        "required": true,
        "instructions": "string",
        "uploaded_at": 0
      }
    ],
    "response_data": [
      {
        "api_id": "string",
        "signature_id": "string",
        "name": "string",
        "required": true,
        "type": "string"
      }
    ],
    "signatures": [
      {
        "signature_id": "string",
        "signer_group_guid": "string",
        "signer_email_address": "string",
        "signer_name": "string",
        "signer_role": "string",
        "order": 0,
        "status_code": "string",
        "decline_reason": "string",
        "signed_at": 0,
        "last_viewed_at": 0,
        "last_reminded_at": 0,
        "has_pin": true,
        "has_sms_auth": true,
        "has_sms_delivery": true,
        "sms_phone_number": "string",
        "reassigned_by": "string",
        "reassignment_reason": "string",
        "reassigned_from": "string",
        "error": "string"
      }
    ],
    "bulk_send_job_id": "string"
  }
}
```

JSON payload delivered for a webhook event. The concrete shape is selected by `event.event_type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[EventCallbackSignatureRequestViewed](#schemaeventcallbacksignaturerequestviewed)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestSigned](#schemaeventcallbacksignaturerequestsigned)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestSignerRemoved](#schemaeventcallbacksignaturerequestsignerremoved)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestDownloadable](#schemaeventcallbacksignaturerequestdownloadable)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestSent](#schemaeventcallbacksignaturerequestsent)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestAllSigned](#schemaeventcallbacksignaturerequestallsigned)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestInvalid](#schemaeventcallbacksignaturerequestinvalid)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestEmailBounce](#schemaeventcallbacksignaturerequestemailbounce)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestRemind](#schemaeventcallbacksignaturerequestremind)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestIncompleteQes](#schemaeventcallbacksignaturerequestincompleteqes)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestDestroyed](#schemaeventcallbacksignaturerequestdestroyed)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestCanceled](#schemaeventcallbacksignaturerequestcanceled)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestDeclined](#schemaeventcallbacksignaturerequestdeclined)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestExpired](#schemaeventcallbacksignaturerequestexpired)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestReassigned](#schemaeventcallbacksignaturerequestreassigned)|false|none|none|
|*oneOf*|[EventCallbackSignatureRequestPrepared](#schemaeventcallbacksignaturerequestprepared)|false|none|none|
|*oneOf*|[EventCallbackAccountConfirmed](#schemaeventcallbackaccountconfirmed)|false|none|none|
|*oneOf*|[EventCallbackUnknownError](#schemaeventcallbackunknownerror)|false|none|none|
|*oneOf*|[EventCallbackFileError](#schemaeventcallbackfileerror)|false|none|none|
|*oneOf*|[EventCallbackTemplateCreated](#schemaeventcallbacktemplatecreated)|false|none|none|
|*oneOf*|[EventCallbackTemplateError](#schemaeventcallbacktemplateerror)|false|none|none|
|*oneOf*|[EventCallbackSignUrlInvalid](#schemaeventcallbacksignurlinvalid)|false|none|none|
|*oneOf*|[EventCallbackCallbackTest](#schemaeventcallbackcallbacktest)|false|none|none|
|*oneOf*|[EventCallbackFaxReceived](#schemaeventcallbackfaxreceived)|false|none|none|
|*oneOf*|[EventCallbackFaxSent](#schemaeventcallbackfaxsent)|false|none|none|
|*oneOf*|[EventCallbackFaxOnHold](#schemaeventcallbackfaxonhold)|false|none|none|
|*oneOf*|[EventCallbackFaxBusy](#schemaeventcallbackfaxbusy)|false|none|none|
|*oneOf*|[EventCallbackFaxNoAnswer](#schemaeventcallbackfaxnoanswer)|false|none|none|
|*oneOf*|[EventCallbackFaxDisconnected](#schemaeventcallbackfaxdisconnected)|false|none|none|
|*oneOf*|[EventCallbackFaxBlacklisted](#schemaeventcallbackfaxblacklisted)|false|none|none|
