<h1 id="my-business-verifications-api">My Business Verifications API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The My Business Verifications API provides an interface for taking verifications related actions for locations.

Base URLs:

* <a href="https://mybusinessverifications.googleapis.com/">https://mybusinessverifications.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="my-business-verifications-api-locations">locations</h1>

## mybusinessverifications.locations.fetchVerificationOptions

<a id="opIdmybusinessverifications.locations.fetchVerificationOptions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:fetchVerificationOptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "context": {
      "address": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      }
    },
    "languageCode": "string"
  }'
```

`POST /v1/{location}:fetchVerificationOptions`

Reports all eligible verification options for a location in a specific language.

> Body parameter

```json
{
  "context": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    }
  },
  "languageCode": "string"
}
```

<h3 id="mybusinessverificationslocationsfetchverificationoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. The location to verify.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[FetchVerificationOptionsRequest](#schemafetchverificationoptionsrequest)|false|none|
|» context|body|[ServiceBusinessContext](#schemaservicebusinesscontext)|false|Optional. Extra context information for the verification of service businesses. Can only be applied to the locations whose business type is CUSTOMER_LOCATION_ONLY. Specifying an accurate address could enable more options. INVALID_ARGUMENT will be thrown if it is set for other business types of locations.|
|» languageCode|body|string|false|Required. The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "options": [
    {
      "addressData": {
        "address": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "business": "string",
        "expectedDeliveryDaysRegion": 0
      },
      "announcement": "string",
      "emailData": {
        "domain": "string",
        "isUserNameEditable": true,
        "user": "string"
      },
      "phoneNumber": "string",
      "verificationMethod": "VERIFICATION_METHOD_UNSPECIFIED"
    }
  ]
}
```

<h3 id="mybusinessverificationslocationsfetchverificationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchVerificationOptionsResponse](#schemafetchverificationoptionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessverifications.locations.getVoiceOfMerchantState

<a id="opIdmybusinessverifications.locations.getVoiceOfMerchantState"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/VoiceOfMerchantState \
  -H 'Accept: application/json'
```

`GET /v1/{name}/VoiceOfMerchantState`

Gets the VoiceOfMerchant state.

<h3 id="mybusinessverificationslocationsgetvoiceofmerchantstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the location.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "complyWithGuidelines": {
    "recommendationReason": "RECOMMENDATION_REASON_UNSPECIFIED"
  },
  "hasBusinessAuthority": true,
  "hasVoiceOfMerchant": true,
  "resolveOwnershipConflict": {},
  "verify": {
    "hasPendingVerification": true
  },
  "waitForVoiceOfMerchant": {}
}
```

<h3 id="mybusinessverificationslocationsgetvoiceofmerchantstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VoiceOfMerchantState](#schemavoiceofmerchantstate)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessverifications.locations.verifications.complete

<a id="opIdmybusinessverifications.locations.verifications.complete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:complete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "pin": "string"
  }'
```

`POST /v1/{name}:complete`

Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.

> Body parameter

```json
{
  "pin": "string"
}
```

<h3 id="mybusinessverificationslocationsverificationscomplete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the verification to complete.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CompleteVerificationRequest](#schemacompleteverificationrequest)|false|none|
|» pin|body|string|false|Required. PIN code received by the merchant to complete the verification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "verification": {
    "announcement": "string",
    "createTime": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

<h3 id="mybusinessverificationslocationsverificationscomplete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CompleteVerificationResponse](#schemacompleteverificationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessverifications.locations.verify

<a id="opIdmybusinessverifications.locations.verify"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "context": {
      "address": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      }
    },
    "emailAddress": "string",
    "languageCode": "string",
    "mailerContact": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "phoneNumber": "string",
    "token": {
      "tokenString": "string"
    }
  }'
```

`POST /v1/{name}:verify`

Starts the verification process for a location.

> Body parameter

```json
{
  "context": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    }
  },
  "emailAddress": "string",
  "languageCode": "string",
  "mailerContact": "string",
  "method": "VERIFICATION_METHOD_UNSPECIFIED",
  "phoneNumber": "string",
  "token": {
    "tokenString": "string"
  }
}
```

<h3 id="mybusinessverificationslocationsverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the location to verify.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[VerifyLocationRequest](#schemaverifylocationrequest)|false|none|
|» context|body|[ServiceBusinessContext](#schemaservicebusinesscontext)|false|Optional. Extra context information for the verification of service businesses. It is only required for the locations whose business type is CUSTOMER_LOCATION_ONLY. For ADDRESS verification, the address will be used to send out postcard. For other methods, it should be the same as the one that is passed to GetVerificationOptions. INVALID_ARGUMENT will be thrown if it is set for other types of business locations.|
|» emailAddress|body|string|false|Optional. The input for EMAIL method. Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name.|
|» languageCode|body|string|false|Optional. The BCP 47 language code representing the language that is to be used for the verification process.|
|» mailerContact|body|string|false|Optional. The input for ADDRESS method. Contact name the mail should be sent to.|
|» method|body|string|false|Required. Verification method.|
|» phoneNumber|body|string|false|Optional. The input for PHONE_CALL/SMS method The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options.|
|» token|body|[VerificationToken](#schemaverificationtoken)|false|Optional. The input for VETTED_PARTNER method available to select [partners.](https://support.google.com/business/answer/7674102) The input is not needed for a vetted account. Token that is associated to the location. Token that is associated to the location.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» method|VERIFICATION_METHOD_UNSPECIFIED|
|» method|ADDRESS|
|» method|EMAIL|
|» method|PHONE_CALL|
|» method|SMS|
|» method|AUTO|
|» method|VETTED_PARTNER|

> Example responses

> 200 Response

```json
{
  "verification": {
    "announcement": "string",
    "createTime": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

<h3 id="mybusinessverificationslocationsverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VerifyLocationResponse](#schemaverifylocationresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessverifications.locations.verifications.list

<a id="opIdmybusinessverifications.locations.verifications.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/verifications \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/verifications`

List verifications of a location, ordered by create time.

<h3 id="mybusinessverificationslocationsverificationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the location that verification requests belong to.|
|pageSize|query|integer|false|How many verification to include per page. Minimum is 1, and the default and maximum page size is 100.|
|pageToken|query|string|false|If specified, returns the next page of verifications.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "verifications": [
    {
      "announcement": "string",
      "createTime": "string",
      "method": "VERIFICATION_METHOD_UNSPECIFIED",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="mybusinessverificationslocationsverificationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVerificationsResponse](#schemalistverificationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="my-business-verifications-api-verificationtokens">verificationTokens</h1>

## mybusinessverifications.verificationTokens.generate

<a id="opIdmybusinessverifications.verificationTokens.generate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/verificationTokens:generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "location": {
      "address": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "name": "string",
      "primaryCategoryId": "string",
      "primaryPhone": "string",
      "websiteUri": "string"
    }
  }'
```

`POST /v1/verificationTokens:generate`

Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.

> Body parameter

```json
{
  "location": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "name": "string",
    "primaryCategoryId": "string",
    "primaryPhone": "string",
    "websiteUri": "string"
  }
}
```

<h3 id="mybusinessverificationsverificationtokensgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GenerateVerificationTokenRequest](#schemagenerateverificationtokenrequest)|false|none|
|» location|body|[Location](#schemalocation)|false|Required. The target location. Note: The location information should exactly match the target Location, otherwise the generated verification token won't be able to verify the target Location.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "token": {
    "tokenString": "string"
  }
}
```

<h3 id="mybusinessverificationsverificationtokensgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateVerificationTokenResponse](#schemagenerateverificationtokenresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AddressVerificationData">AddressVerificationData</h2>
<!-- backwards compatibility -->
<a id="schemaaddressverificationdata"></a>
<a id="schema_AddressVerificationData"></a>
<a id="tocSaddressverificationdata"></a>
<a id="tocsaddressverificationdata"></a>

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "business": "string",
  "expectedDeliveryDaysRegion": 0
}
```

Display data for verifications through postcard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PostalAddress](#schemapostaladdress)|false|none|Address that a postcard can be sent to.|
|business|string|false|none|Merchant's business name.|
|expectedDeliveryDaysRegion|integer(int32)|false|none|Expected number of days it takes to deliver a postcard to the address's region.|

<h2 id="tocS_CompleteVerificationRequest">CompleteVerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompleteverificationrequest"></a>
<a id="schema_CompleteVerificationRequest"></a>
<a id="tocScompleteverificationrequest"></a>
<a id="tocscompleteverificationrequest"></a>

```json
{
  "pin": "string"
}
```

Request message for Verifications.CompleteVerificationAction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pin|string|false|none|Required. PIN code received by the merchant to complete the verification.|

<h2 id="tocS_CompleteVerificationResponse">CompleteVerificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompleteverificationresponse"></a>
<a id="schema_CompleteVerificationResponse"></a>
<a id="tocScompleteverificationresponse"></a>
<a id="tocscompleteverificationresponse"></a>

```json
{
  "verification": {
    "announcement": "string",
    "createTime": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

Response message for Verifications.CompleteVerificationAction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verification|[Verification](#schemaverification)|false|none|The completed verification.|

<h2 id="tocS_ComplyWithGuidelines">ComplyWithGuidelines</h2>
<!-- backwards compatibility -->
<a id="schemacomplywithguidelines"></a>
<a id="schema_ComplyWithGuidelines"></a>
<a id="tocScomplywithguidelines"></a>
<a id="tocscomplywithguidelines"></a>

```json
{
  "recommendationReason": "RECOMMENDATION_REASON_UNSPECIFIED"
}
```

Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendationReason|string|false|none|The reason why the location is being recommended to comply with guidelines.|

#### Enumerated Values

|Property|Value|
|---|---|
|recommendationReason|RECOMMENDATION_REASON_UNSPECIFIED|
|recommendationReason|BUSINESS_LOCATION_SUSPENDED|
|recommendationReason|BUSINESS_LOCATION_DISABLED|

<h2 id="tocS_EmailVerificationData">EmailVerificationData</h2>
<!-- backwards compatibility -->
<a id="schemaemailverificationdata"></a>
<a id="schema_EmailVerificationData"></a>
<a id="tocSemailverificationdata"></a>
<a id="tocsemailverificationdata"></a>

```json
{
  "domain": "string",
  "isUserNameEditable": true,
  "user": "string"
}
```

Display data for verifications through email.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|Domain name in the email address. e.g. "gmail.com" in foo@gmail.com|
|isUserNameEditable|boolean|false|none|Whether client is allowed to provide a different user name.|
|user|string|false|none|User name in the email address. e.g. "foo" in foo@gmail.com|

<h2 id="tocS_FetchVerificationOptionsRequest">FetchVerificationOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemafetchverificationoptionsrequest"></a>
<a id="schema_FetchVerificationOptionsRequest"></a>
<a id="tocSfetchverificationoptionsrequest"></a>
<a id="tocsfetchverificationoptionsrequest"></a>

```json
{
  "context": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    }
  },
  "languageCode": "string"
}
```

Request message for Verifications.FetchVerificationOptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[ServiceBusinessContext](#schemaservicebusinesscontext)|false|none|Optional. Extra context information for the verification of service businesses. Can only be applied to the locations whose business type is CUSTOMER_LOCATION_ONLY. Specifying an accurate address could enable more options. INVALID_ARGUMENT will be thrown if it is set for other business types of locations.|
|languageCode|string|false|none|Required. The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language.|

<h2 id="tocS_FetchVerificationOptionsResponse">FetchVerificationOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchverificationoptionsresponse"></a>
<a id="schema_FetchVerificationOptionsResponse"></a>
<a id="tocSfetchverificationoptionsresponse"></a>
<a id="tocsfetchverificationoptionsresponse"></a>

```json
{
  "options": [
    {
      "addressData": {
        "address": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "business": "string",
        "expectedDeliveryDaysRegion": 0
      },
      "announcement": "string",
      "emailData": {
        "domain": "string",
        "isUserNameEditable": true,
        "user": "string"
      },
      "phoneNumber": "string",
      "verificationMethod": "VERIFICATION_METHOD_UNSPECIFIED"
    }
  ]
}
```

Response message for Verifications.FetchVerificationOptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[[VerificationOption](#schemaverificationoption)]|false|none|The available verification options.|

<h2 id="tocS_GenerateVerificationTokenRequest">GenerateVerificationTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagenerateverificationtokenrequest"></a>
<a id="schema_GenerateVerificationTokenRequest"></a>
<a id="tocSgenerateverificationtokenrequest"></a>
<a id="tocsgenerateverificationtokenrequest"></a>

```json
{
  "location": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "name": "string",
    "primaryCategoryId": "string",
    "primaryPhone": "string",
    "websiteUri": "string"
  }
}
```

Request message for Verifications.GenerateVerificationToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[Location](#schemalocation)|false|none|Required. The target location. Note: The location information should exactly match the target Location, otherwise the generated verification token won't be able to verify the target Location.|

<h2 id="tocS_GenerateVerificationTokenResponse">GenerateVerificationTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateverificationtokenresponse"></a>
<a id="schema_GenerateVerificationTokenResponse"></a>
<a id="tocSgenerateverificationtokenresponse"></a>
<a id="tocsgenerateverificationtokenresponse"></a>

```json
{
  "token": {
    "tokenString": "string"
  }
}
```

Response message for Verifications.GenerateVerificationToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[VerificationToken](#schemaverificationtoken)|false|none|The generated token to verify the location.|

<h2 id="tocS_ListVerificationsResponse">ListVerificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistverificationsresponse"></a>
<a id="schema_ListVerificationsResponse"></a>
<a id="tocSlistverificationsresponse"></a>
<a id="tocslistverificationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "verifications": [
    {
      "announcement": "string",
      "createTime": "string",
      "method": "VERIFICATION_METHOD_UNSPECIFIED",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

Response message for Verifications.ListVerifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If the number of verifications exceeded the requested page size, this field will be populated with a token to fetch the next page of verification on a subsequent call. If there are no more attributes, this field will not be present in the response.|
|verifications|[[Verification](#schemaverification)]|false|none|List of the verifications.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "name": "string",
  "primaryCategoryId": "string",
  "primaryPhone": "string",
  "websiteUri": "string"
}
```

A subset of location info. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PostalAddress](#schemapostaladdress)|false|none|Required. A precise, accurate address to describe your business location. PO boxes or mailboxes located at remote locations are not acceptable. At this time, you can specify a maximum of five `address_lines` values in the address.|
|name|string|false|none|Required. Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").|
|primaryCategoryId|string|false|none|Required. Id of the category that best describes the core business this location engages in. e.g. gcid:bakery.|
|primaryPhone|string|false|none|Optional. A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible.|
|websiteUri|string|false|none|Optional. A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.|

<h2 id="tocS_PostalAddress">PostalAddress</h2>
<!-- backwards compatibility -->
<a id="schemapostaladdress"></a>
<a id="schema_PostalAddress"></a>
<a id="tocSpostaladdress"></a>
<a id="tocspostaladdress"></a>

```json
{
  "addressLines": [
    "string"
  ],
  "administrativeArea": "string",
  "languageCode": "string",
  "locality": "string",
  "organization": "string",
  "postalCode": "string",
  "recipients": [
    "string"
  ],
  "regionCode": "string",
  "revision": 0,
  "sortingCode": "string",
  "sublocality": "string"
}
```

Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLines|[string]|false|none|Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).|
|administrativeArea|string|false|none|Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.|
|languageCode|string|false|none|Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".|
|locality|string|false|none|Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.|
|organization|string|false|none|Optional. The name of the organization at the address.|
|postalCode|string|false|none|Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).|
|recipients|[string]|false|none|Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.|
|regionCode|string|false|none|Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.|
|revision|integer(int32)|false|none|The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.|
|sortingCode|string|false|none|Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).|
|sublocality|string|false|none|Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.|

<h2 id="tocS_ResolveOwnershipConflict">ResolveOwnershipConflict</h2>
<!-- backwards compatibility -->
<a id="schemaresolveownershipconflict"></a>
<a id="schema_ResolveOwnershipConflict"></a>
<a id="tocSresolveownershipconflict"></a>
<a id="tocsresolveownershipconflict"></a>

```json
{}
```

Indicates that the location duplicates another location that is in good standing.

<h2 id="tocS_ServiceBusinessContext">ServiceBusinessContext</h2>
<!-- backwards compatibility -->
<a id="schemaservicebusinesscontext"></a>
<a id="schema_ServiceBusinessContext"></a>
<a id="tocSservicebusinesscontext"></a>
<a id="tocsservicebusinesscontext"></a>

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  }
}
```

Additional data for service business verification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PostalAddress](#schemapostaladdress)|false|none|The verification address of the location. It is used to either enable more verification options or send a postcard.|

<h2 id="tocS_Verification">Verification</h2>
<!-- backwards compatibility -->
<a id="schemaverification"></a>
<a id="schema_Verification"></a>
<a id="tocSverification"></a>
<a id="tocsverification"></a>

```json
{
  "announcement": "string",
  "createTime": "string",
  "method": "VERIFICATION_METHOD_UNSPECIFIED",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

A verification represents a verification attempt on a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|announcement|string|false|none|Optional. Response announcement set only if the method is VETTED_PARTNER.|
|createTime|string(google-datetime)|false|none|The timestamp when the verification is requested.|
|method|string|false|none|The method of the verification.|
|name|string|false|none|Resource name of the verification.|
|state|string|false|none|The state of the verification.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|VERIFICATION_METHOD_UNSPECIFIED|
|method|ADDRESS|
|method|EMAIL|
|method|PHONE_CALL|
|method|SMS|
|method|AUTO|
|method|VETTED_PARTNER|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|COMPLETED|
|state|FAILED|

<h2 id="tocS_VerificationOption">VerificationOption</h2>
<!-- backwards compatibility -->
<a id="schemaverificationoption"></a>
<a id="schema_VerificationOption"></a>
<a id="tocSverificationoption"></a>
<a id="tocsverificationoption"></a>

```json
{
  "addressData": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "business": "string",
    "expectedDeliveryDaysRegion": 0
  },
  "announcement": "string",
  "emailData": {
    "domain": "string",
    "isUserNameEditable": true,
    "user": "string"
  },
  "phoneNumber": "string",
  "verificationMethod": "VERIFICATION_METHOD_UNSPECIFIED"
}
```

The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressData|[AddressVerificationData](#schemaaddressverificationdata)|false|none|Set only if the method is MAIL.|
|announcement|string|false|none|Set only if the method is VETTED_PARTNER.|
|emailData|[EmailVerificationData](#schemaemailverificationdata)|false|none|Set only if the method is EMAIL.|
|phoneNumber|string|false|none|Set only if the method is PHONE_CALL or SMS. Phone number that the PIN will be sent to.|
|verificationMethod|string|false|none|Method to verify the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|verificationMethod|VERIFICATION_METHOD_UNSPECIFIED|
|verificationMethod|ADDRESS|
|verificationMethod|EMAIL|
|verificationMethod|PHONE_CALL|
|verificationMethod|SMS|
|verificationMethod|AUTO|
|verificationMethod|VETTED_PARTNER|

<h2 id="tocS_VerificationToken">VerificationToken</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtoken"></a>
<a id="schema_VerificationToken"></a>
<a id="tocSverificationtoken"></a>
<a id="tocsverificationtoken"></a>

```json
{
  "tokenString": "string"
}
```

Token generated by a vetted [partner](https://support.google.com/business/answer/7674102).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenString|string|false|none|The token string.|

<h2 id="tocS_Verify">Verify</h2>
<!-- backwards compatibility -->
<a id="schemaverify"></a>
<a id="schema_Verify"></a>
<a id="tocSverify"></a>
<a id="tocsverify"></a>

```json
{
  "hasPendingVerification": true
}
```

Indicates that the location requires verification. Contains information about the current verification actions performed on the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasPendingVerification|boolean|false|none|Indicates whether a verification process has already started, and can be completed by the location.|

<h2 id="tocS_VerifyLocationRequest">VerifyLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifylocationrequest"></a>
<a id="schema_VerifyLocationRequest"></a>
<a id="tocSverifylocationrequest"></a>
<a id="tocsverifylocationrequest"></a>

```json
{
  "context": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    }
  },
  "emailAddress": "string",
  "languageCode": "string",
  "mailerContact": "string",
  "method": "VERIFICATION_METHOD_UNSPECIFIED",
  "phoneNumber": "string",
  "token": {
    "tokenString": "string"
  }
}
```

Request message for Verifications.VerifyLocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[ServiceBusinessContext](#schemaservicebusinesscontext)|false|none|Optional. Extra context information for the verification of service businesses. It is only required for the locations whose business type is CUSTOMER_LOCATION_ONLY. For ADDRESS verification, the address will be used to send out postcard. For other methods, it should be the same as the one that is passed to GetVerificationOptions. INVALID_ARGUMENT will be thrown if it is set for other types of business locations.|
|emailAddress|string|false|none|Optional. The input for EMAIL method. Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name.|
|languageCode|string|false|none|Optional. The BCP 47 language code representing the language that is to be used for the verification process.|
|mailerContact|string|false|none|Optional. The input for ADDRESS method. Contact name the mail should be sent to.|
|method|string|false|none|Required. Verification method.|
|phoneNumber|string|false|none|Optional. The input for PHONE_CALL/SMS method The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options.|
|token|[VerificationToken](#schemaverificationtoken)|false|none|Optional. The input for VETTED_PARTNER method available to select [partners.](https://support.google.com/business/answer/7674102) The input is not needed for a vetted account. Token that is associated to the location. Token that is associated to the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|VERIFICATION_METHOD_UNSPECIFIED|
|method|ADDRESS|
|method|EMAIL|
|method|PHONE_CALL|
|method|SMS|
|method|AUTO|
|method|VETTED_PARTNER|

<h2 id="tocS_VerifyLocationResponse">VerifyLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifylocationresponse"></a>
<a id="schema_VerifyLocationResponse"></a>
<a id="tocSverifylocationresponse"></a>
<a id="tocsverifylocationresponse"></a>

```json
{
  "verification": {
    "announcement": "string",
    "createTime": "string",
    "method": "VERIFICATION_METHOD_UNSPECIFIED",
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

Response message for Verifications.VerifyLocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verification|[Verification](#schemaverification)|false|none|The created verification request.|

<h2 id="tocS_VoiceOfMerchantState">VoiceOfMerchantState</h2>
<!-- backwards compatibility -->
<a id="schemavoiceofmerchantstate"></a>
<a id="schema_VoiceOfMerchantState"></a>
<a id="tocSvoiceofmerchantstate"></a>
<a id="tocsvoiceofmerchantstate"></a>

```json
{
  "complyWithGuidelines": {
    "recommendationReason": "RECOMMENDATION_REASON_UNSPECIFIED"
  },
  "hasBusinessAuthority": true,
  "hasVoiceOfMerchant": true,
  "resolveOwnershipConflict": {},
  "verify": {
    "hasPendingVerification": true
  },
  "waitForVoiceOfMerchant": {}
}
```

Response message for VoiceOfMerchant.GetVoiceOfMerchantState.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|complyWithGuidelines|[ComplyWithGuidelines](#schemacomplywithguidelines)|false|none|The location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177) and requires additional steps for reinstatement. To fix this issue, consult the [Help Center Article](https://support.google.com/business/answer/4569145).|
|hasBusinessAuthority|boolean|false|none|Indicates whether the location has the authority (ownership) over the business on Google. If true, another location cannot take over and become the dominant listing on Maps. However, edits will not become live unless Voice of Merchant is gained (i.e. has_voice_of_merchant is true).|
|hasVoiceOfMerchant|boolean|false|none|Indicates whether the location is in good standing and has control over the business on Google. Any edits made to the location will propagate to Maps after passing the review phase.|
|resolveOwnershipConflict|[ResolveOwnershipConflict](#schemaresolveownershipconflict)|false|none|This location duplicates another location that is in good standing. If you have access to the location in good standing, use that location's id to perform operations. Otherwise, request access from the current owner.|
|verify|[Verify](#schemaverify)|false|none|Start or continue the verification process.|
|waitForVoiceOfMerchant|[WaitForVoiceOfMerchant](#schemawaitforvoiceofmerchant)|false|none|Wait to gain Voice of Merchant. The location is under review for quality purposes.|

<h2 id="tocS_WaitForVoiceOfMerchant">WaitForVoiceOfMerchant</h2>
<!-- backwards compatibility -->
<a id="schemawaitforvoiceofmerchant"></a>
<a id="schema_WaitForVoiceOfMerchant"></a>
<a id="tocSwaitforvoiceofmerchant"></a>
<a id="tocswaitforvoiceofmerchant"></a>

```json
{}
```

Indicates that the location will gain voice of merchant after passing review.
