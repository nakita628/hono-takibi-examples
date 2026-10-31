<h1 id="acme-dns-api">ACME DNS API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Google Domains ACME DNS API that allows users to complete ACME DNS-01 challenges for a domain.

Base URLs:

* <a href="https://acmedns.googleapis.com/">https://acmedns.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/domains/acme-dns/">External documentation</a>

<h1 id="acme-dns-api-acmechallengesets">acmeChallengeSets</h1>

## acmedns.acmeChallengeSets.get

<a id="opIdacmedns.acmeChallengeSets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/acmeChallengeSets/string \
  -H 'Accept: application/json'
```

`GET /v1/acmeChallengeSets/{rootDomain}`

Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.

<h3 id="acmednsacmechallengesetsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rootDomain|path|string|true|Required. SLD + TLD domain name to list challenges. For example, this would be "google.com" for any FQDN under "google.com". That includes challenges for "subdomain.google.com". This MAY be Unicode or Punycode.|
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
  "record": [
    {
      "digest": "string",
      "fqdn": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="acmednsacmechallengesetsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AcmeChallengeSet](#schemaacmechallengeset)|

<aside class="success">
This operation does not require authentication
</aside>

## acmedns.acmeChallengeSets.rotateChallenges

<a id="opIdacmedns.acmeChallengeSets.rotateChallenges"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/acmeChallengeSets/string:rotateChallenges \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accessToken": "string",
    "keepExpiredRecords": true,
    "recordsToAdd": [
      {
        "digest": "string",
        "fqdn": "string"
      }
    ],
    "recordsToRemove": [
      {
        "digest": "string",
        "fqdn": "string"
      }
    ]
  }'
```

`POST /v1/acmeChallengeSets/{rootDomain}:rotateChallenges`

Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.

> Body parameter

```json
{
  "accessToken": "string",
  "keepExpiredRecords": true,
  "recordsToAdd": [
    {
      "digest": "string",
      "fqdn": "string"
    }
  ],
  "recordsToRemove": [
    {
      "digest": "string",
      "fqdn": "string"
    }
  ]
}
```

<h3 id="acmednsacmechallengesetsrotatechallenges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rootDomain|path|string|true|Required. SLD + TLD domain name to update records for. For example, this would be "google.com" for any FQDN under "google.com". That includes challenges for "subdomain.google.com". This MAY be Unicode or Punycode.|
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
|body|body|[RotateChallengesRequest](#schemarotatechallengesrequest)|false|none|
|» accessToken|body|string(byte)|false|Required. ACME DNS access token. This is a base64 token secret that is procured from the Google Domains website. It authorizes ACME TXT record updates for a domain.|
|» keepExpiredRecords|body|boolean|false|Keep records older than 30 days that were used for previous requests.|
|» recordsToAdd|body|[[AcmeTxtRecord](#schemaacmetxtrecord)]|false|ACME TXT record challenges to add. Supports multiple challenges on the same FQDN.|
|» recordsToRemove|body|[[AcmeTxtRecord](#schemaacmetxtrecord)]|false|ACME TXT record challenges to remove.|

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
  "record": [
    {
      "digest": "string",
      "fqdn": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="acmednsacmechallengesetsrotatechallenges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AcmeChallengeSet](#schemaacmechallengeset)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AcmeChallengeSet">AcmeChallengeSet</h2>
<!-- backwards compatibility -->
<a id="schemaacmechallengeset"></a>
<a id="schema_AcmeChallengeSet"></a>
<a id="tocSacmechallengeset"></a>
<a id="tocsacmechallengeset"></a>

```json
{
  "record": [
    {
      "digest": "string",
      "fqdn": "string",
      "updateTime": "string"
    }
  ]
}
```

The up-to-date ACME challenge set on a domain for an RPC. This contains all of the ACME TXT records that exist on the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|record|[[AcmeTxtRecord](#schemaacmetxtrecord)]|false|none|The ACME challenges on the requested domain represented as individual TXT records.|

<h2 id="tocS_AcmeTxtRecord">AcmeTxtRecord</h2>
<!-- backwards compatibility -->
<a id="schemaacmetxtrecord"></a>
<a id="schema_AcmeTxtRecord"></a>
<a id="tocSacmetxtrecord"></a>
<a id="tocsacmetxtrecord"></a>

```json
{
  "digest": "string",
  "fqdn": "string",
  "updateTime": "string"
}
```

The TXT record message that represents an ACME DNS-01 challenge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|string|false|none|Holds the ACME challenge data put in the TXT record. This will be checked to be a valid TXT record data entry.|
|fqdn|string|false|none|The domain/subdomain for the record. In a request, this MAY be Unicode or Punycode. In a response, this will be in Unicode. The fqdn MUST contain the root_domain field on the request.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when this record was last updated. This will be in UTC time.|

<h2 id="tocS_RotateChallengesRequest">RotateChallengesRequest</h2>
<!-- backwards compatibility -->
<a id="schemarotatechallengesrequest"></a>
<a id="schema_RotateChallengesRequest"></a>
<a id="tocSrotatechallengesrequest"></a>
<a id="tocsrotatechallengesrequest"></a>

```json
{
  "accessToken": "string",
  "keepExpiredRecords": true,
  "recordsToAdd": [
    {
      "digest": "string",
      "fqdn": "string",
      "updateTime": "string"
    }
  ],
  "recordsToRemove": [
    {
      "digest": "string",
      "fqdn": "string",
      "updateTime": "string"
    }
  ]
}
```

The request message for the RotateChallenges RPC. Requires an access token, a root domain, and either records_to_add or records_to_remove to be populated. Records may be set for multiple subdomains at once to support SAN requests for multiple subdomains in a single domain. By default, ACME TXT record challenges that are older than 30 days will be removed. Set `keep_expired_records` to false if this behavior is undesired. There is a record maximum of 100 records per domain including expired records. Any request sent that would exceed this maximum will result in a FAILED_PRECONDITION error. NEXT ID: 6

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string(byte)|false|none|Required. ACME DNS access token. This is a base64 token secret that is procured from the Google Domains website. It authorizes ACME TXT record updates for a domain.|
|keepExpiredRecords|boolean|false|none|Keep records older than 30 days that were used for previous requests.|
|recordsToAdd|[[AcmeTxtRecord](#schemaacmetxtrecord)]|false|none|ACME TXT record challenges to add. Supports multiple challenges on the same FQDN.|
|recordsToRemove|[[AcmeTxtRecord](#schemaacmetxtrecord)]|false|none|ACME TXT record challenges to remove.|
