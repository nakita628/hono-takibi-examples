<h1 id="sas-portal-api-testing">SAS Portal API (Testing) v1alpha1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://prod-tt-sasportal.googleapis.com/">https://prod-tt-sasportal.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/spectrum-access-system/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/sasportal|Read, create, update, and delete your SAS Portal data.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/sasportal|Read, create, update, and delete your SAS Portal data.|

<h1 id="sas-portal-api-testing-customers">customers</h1>

## prod_tt_sasportal.customers.list

<a id="opIdprod_tt_sasportal.customers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/customers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/customers`

Returns a list of requested customers.

<h3 id="prodttsasportalcustomerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of customers to return in the response.|
|pageToken|query|string|false|A pagination token returned from a previous call to ListCustomers that indicates where this listing should continue from.|
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
  "customers": [
    {
      "displayName": "string",
      "name": "string",
      "sasUserIds": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="prodttsasportalcustomerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalListCustomersResponse](#schemasasportallistcustomersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.customers.provisionDeployment

<a id="opIdprod_tt_sasportal.customers.provisionDeployment"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/customers:provisionDeployment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "newDeploymentDisplayName": "string",
    "newOrganizationDisplayName": "string"
  }'
```

`POST /v1alpha1/customers:provisionDeployment`

Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

> Body parameter

```json
{
  "newDeploymentDisplayName": "string",
  "newOrganizationDisplayName": "string"
}
```

<h3 id="prodttsasportalcustomersprovisiondeployment-parameters">Parameters</h3>

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
|body|body|[SasPortalProvisionDeploymentRequest](#schemasasportalprovisiondeploymentrequest)|false|none|
|» newDeploymentDisplayName|body|string|false|Optional. If this field is set, and a new SAS Portal Deployment needs to be created, its display name will be set to the value of this field.|
|» newOrganizationDisplayName|body|string|false|Optional. If this field is set, and a new SAS Portal Organization needs to be created, its display name will be set to the value of this field.|

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
  "errorMessage": "string"
}
```

<h3 id="prodttsasportalcustomersprovisiondeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalProvisionDeploymentResponse](#schemasasportalprovisiondeploymentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

<h1 id="sas-portal-api-testing-installer">installer</h1>

## prod_tt_sasportal.installer.generateSecret

<a id="opIdprod_tt_sasportal.installer.generateSecret"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/installer:generateSecret \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/installer:generateSecret`

Generates a secret to be used with the ValidateInstaller.

> Body parameter

```json
{}
```

<h3 id="prodttsasportalinstallergeneratesecret-parameters">Parameters</h3>

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
|body|body|[SasPortalGenerateSecretRequest](#schemasasportalgeneratesecretrequest)|false|none|

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
  "secret": "string"
}
```

<h3 id="prodttsasportalinstallergeneratesecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalGenerateSecretResponse](#schemasasportalgeneratesecretresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.installer.validate

<a id="opIdprod_tt_sasportal.installer.validate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/installer:validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "encodedSecret": "string",
    "installerId": "string",
    "secret": "string"
  }'
```

`POST /v1alpha1/installer:validate`

Validates the identity of a Certified Professional Installer (CPI).

> Body parameter

```json
{
  "encodedSecret": "string",
  "installerId": "string",
  "secret": "string"
}
```

<h3 id="prodttsasportalinstallervalidate-parameters">Parameters</h3>

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
|body|body|[SasPortalValidateInstallerRequest](#schemasasportalvalidateinstallerrequest)|false|none|
|» encodedSecret|body|string|false|Required. JSON Web Token signed using a CPI private key. Payload must include a "secret" claim whose value is the secret.|
|» installerId|body|string|false|Required. Unique installer id (CPI ID) from the Certified Professional Installers database.|
|» secret|body|string|false|Required. Secret returned by the GenerateSecret.|

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
{}
```

<h3 id="prodttsasportalinstallervalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalValidateInstallerResponse](#schemasasportalvalidateinstallerresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

<h1 id="sas-portal-api-testing-nodes">nodes</h1>

## prod_tt_sasportal.nodes.nodes.get

<a id="opIdprod_tt_sasportal.nodes.nodes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}`

Returns a requested node.

<h3 id="prodttsasportalnodesnodesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the node.|
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
  "displayName": "string",
  "name": "string",
  "sasUserIds": [
    "string"
  ]
}
```

<h3 id="prodttsasportalnodesnodesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalNode](#schemasasportalnode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.delete

<a id="opIdprod_tt_sasportal.nodes.nodes.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1alpha1/{name}`

Deletes a node.

<h3 id="prodttsasportalnodesnodesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the node.|
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
{}
```

<h3 id="prodttsasportalnodesnodesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalEmpty](#schemasasportalempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.patch

<a id="opIdprod_tt_sasportal.nodes.nodes.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string",
    "sasUserIds": [
      "string"
    ]
  }'
```

`PATCH /v1alpha1/{name}`

Updates an existing node.

> Body parameter

```json
{
  "displayName": "string",
  "name": "string",
  "sasUserIds": [
    "string"
  ]
}
```

<h3 id="prodttsasportalnodesnodespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Resource name.|
|updateMask|query|string|false|Fields to be updated.|
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
|body|body|[SasPortalNode](#schemasasportalnode)|false|none|
|» displayName|body|string|false|The node's display name.|
|» name|body|string|false|Output only. Resource name.|
|» sasUserIds|body|[string]|false|User ids used by the devices belonging to this node.|

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
  "displayName": "string",
  "name": "string",
  "sasUserIds": [
    "string"
  ]
}
```

<h3 id="prodttsasportalnodesnodespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalNode](#schemasasportalnode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.move

<a id="opIdprod_tt_sasportal.nodes.nodes.move"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destination": "string"
  }'
```

`POST /v1alpha1/{name}:move`

Moves a node under another node or customer.

> Body parameter

```json
{
  "destination": "string"
}
```

<h3 id="prodttsasportalnodesnodesmove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the node to move.|
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
|body|body|[SasPortalMoveNodeRequest](#schemasasportalmovenoderequest)|false|none|
|» destination|body|string|false|Required. The name of the new parent resource node or customer to reparent the node under.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="prodttsasportalnodesnodesmove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalOperation](#schemasasportaloperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.devices.signDevice

<a id="opIdprod_tt_sasportal.nodes.devices.signDevice"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:signDevice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "device": {
      "activeConfig": {
        "airInterface": {
          "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
          "supportedSpec": "string"
        },
        "callSign": "string",
        "category": "DEVICE_CATEGORY_UNSPECIFIED",
        "installationParams": {
          "antennaAzimuth": 0,
          "antennaBeamwidth": 0,
          "antennaDowntilt": 0,
          "antennaGain": 0,
          "antennaGainNewField": 0,
          "antennaModel": "string",
          "cpeCbsdIndication": true,
          "eirpCapability": 0,
          "eirpCapabilityNewField": 0,
          "height": 0,
          "heightType": "HEIGHT_TYPE_UNSPECIFIED",
          "horizontalAccuracy": 0,
          "indoorDeployment": true,
          "latitude": 0,
          "longitude": 0,
          "verticalAccuracy": 0
        },
        "isSigned": true,
        "measurementCapabilities": [
          "MEASUREMENT_CAPABILITY_UNSPECIFIED"
        ],
        "model": {
          "firmwareVersion": "string",
          "hardwareVersion": "string",
          "name": "string",
          "softwareVersion": "string",
          "vendor": "string"
        },
        "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
        "updateTime": "string",
        "userId": "string"
      },
      "deviceMetadata": {
        "antennaModel": "string",
        "commonChannelGroup": "string",
        "interferenceCoordinationGroup": "string"
      },
      "displayName": "string",
      "fccId": "string",
      "grantRangeAllowlists": [
        {
          "highFrequencyMhz": 0,
          "lowFrequencyMhz": 0
        }
      ],
      "grants": [
        {
          "channelType": "CHANNEL_TYPE_UNSPECIFIED",
          "expireTime": "string",
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          },
          "grantId": "string",
          "lastHeartbeatTransmitExpireTime": "string",
          "maxEirp": 0,
          "moveList": [
            {
              "dpaId": "string",
              "frequencyRange": {
                "highFrequencyMhz": 0,
                "lowFrequencyMhz": 0
              }
            }
          ],
          "state": "GRANT_STATE_UNSPECIFIED",
          "suspensionReason": [
            "string"
          ]
        }
      ],
      "name": "string",
      "preloadedConfig": {
        "airInterface": {
          "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
          "supportedSpec": "string"
        },
        "callSign": "string",
        "category": "DEVICE_CATEGORY_UNSPECIFIED",
        "installationParams": {
          "antennaAzimuth": 0,
          "antennaBeamwidth": 0,
          "antennaDowntilt": 0,
          "antennaGain": 0,
          "antennaGainNewField": 0,
          "antennaModel": "string",
          "cpeCbsdIndication": true,
          "eirpCapability": 0,
          "eirpCapabilityNewField": 0,
          "height": 0,
          "heightType": "HEIGHT_TYPE_UNSPECIFIED",
          "horizontalAccuracy": 0,
          "indoorDeployment": true,
          "latitude": 0,
          "longitude": 0,
          "verticalAccuracy": 0
        },
        "isSigned": true,
        "measurementCapabilities": [
          "MEASUREMENT_CAPABILITY_UNSPECIFIED"
        ],
        "model": {
          "firmwareVersion": "string",
          "hardwareVersion": "string",
          "name": "string",
          "softwareVersion": "string",
          "vendor": "string"
        },
        "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
        "updateTime": "string",
        "userId": "string"
      },
      "serialNumber": "string",
      "state": "DEVICE_STATE_UNSPECIFIED"
    }
  }'
```

`POST /v1alpha1/{name}:signDevice`

Signs a device.

> Body parameter

```json
{
  "device": {
    "activeConfig": {
      "airInterface": {
        "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
        "supportedSpec": "string"
      },
      "callSign": "string",
      "category": "DEVICE_CATEGORY_UNSPECIFIED",
      "installationParams": {
        "antennaAzimuth": 0,
        "antennaBeamwidth": 0,
        "antennaDowntilt": 0,
        "antennaGain": 0,
        "antennaGainNewField": 0,
        "antennaModel": "string",
        "cpeCbsdIndication": true,
        "eirpCapability": 0,
        "eirpCapabilityNewField": 0,
        "height": 0,
        "heightType": "HEIGHT_TYPE_UNSPECIFIED",
        "horizontalAccuracy": 0,
        "indoorDeployment": true,
        "latitude": 0,
        "longitude": 0,
        "verticalAccuracy": 0
      },
      "isSigned": true,
      "measurementCapabilities": [
        "MEASUREMENT_CAPABILITY_UNSPECIFIED"
      ],
      "model": {
        "firmwareVersion": "string",
        "hardwareVersion": "string",
        "name": "string",
        "softwareVersion": "string",
        "vendor": "string"
      },
      "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    },
    "deviceMetadata": {
      "antennaModel": "string",
      "commonChannelGroup": "string",
      "interferenceCoordinationGroup": "string"
    },
    "displayName": "string",
    "fccId": "string",
    "grantRangeAllowlists": [
      {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      }
    ],
    "grants": [
      {
        "channelType": "CHANNEL_TYPE_UNSPECIFIED",
        "expireTime": "string",
        "frequencyRange": {
          "highFrequencyMhz": 0,
          "lowFrequencyMhz": 0
        },
        "grantId": "string",
        "lastHeartbeatTransmitExpireTime": "string",
        "maxEirp": 0,
        "moveList": [
          {
            "dpaId": "string",
            "frequencyRange": {
              "highFrequencyMhz": 0,
              "lowFrequencyMhz": 0
            }
          }
        ],
        "state": "GRANT_STATE_UNSPECIFIED",
        "suspensionReason": [
          "string"
        ]
      }
    ],
    "name": "string",
    "preloadedConfig": {
      "airInterface": {
        "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
        "supportedSpec": "string"
      },
      "callSign": "string",
      "category": "DEVICE_CATEGORY_UNSPECIFIED",
      "installationParams": {
        "antennaAzimuth": 0,
        "antennaBeamwidth": 0,
        "antennaDowntilt": 0,
        "antennaGain": 0,
        "antennaGainNewField": 0,
        "antennaModel": "string",
        "cpeCbsdIndication": true,
        "eirpCapability": 0,
        "eirpCapabilityNewField": 0,
        "height": 0,
        "heightType": "HEIGHT_TYPE_UNSPECIFIED",
        "horizontalAccuracy": 0,
        "indoorDeployment": true,
        "latitude": 0,
        "longitude": 0,
        "verticalAccuracy": 0
      },
      "isSigned": true,
      "measurementCapabilities": [
        "MEASUREMENT_CAPABILITY_UNSPECIFIED"
      ],
      "model": {
        "firmwareVersion": "string",
        "hardwareVersion": "string",
        "name": "string",
        "softwareVersion": "string",
        "vendor": "string"
      },
      "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    },
    "serialNumber": "string",
    "state": "DEVICE_STATE_UNSPECIFIED"
  }
}
```

<h3 id="prodttsasportalnodesdevicessigndevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource path name.|
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
|body|body|[SasPortalSignDeviceRequest](#schemasasportalsigndevicerequest)|false|none|
|» device|body|[SasPortalDevice](#schemasasportaldevice)|false|Required. The device to sign. The device fields name, fcc_id and serial_number must be set. The user_id field must be set.|

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
{}
```

<h3 id="prodttsasportalnodesdevicessigndevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalEmpty](#schemasasportalempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.devices.updateSigned

<a id="opIdprod_tt_sasportal.nodes.devices.updateSigned"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:updateSigned \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "encodedDevice": "string",
    "installerId": "string"
  }'
```

`PATCH /v1alpha1/{name}:updateSigned`

Updates a signed device.

> Body parameter

```json
{
  "encodedDevice": "string",
  "installerId": "string"
}
```

<h3 id="prodttsasportalnodesdevicesupdatesigned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the device to update.|
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
|body|body|[SasPortalUpdateSignedDeviceRequest](#schemasasportalupdatesigneddevicerequest)|false|none|
|» encodedDevice|body|string(byte)|false|Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.|
|» installerId|body|string|false|Required. Unique installer ID (CPI ID) from the Certified Professional Installers database.|

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
  "activeConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "currentChannels": [
    {
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      },
      "score": 0
    }
  ],
  "deviceMetadata": {
    "antennaModel": "string",
    "commonChannelGroup": "string",
    "interferenceCoordinationGroup": "string",
    "nrqzValidated": true,
    "nrqzValidation": {
      "caseId": "string",
      "cpiId": "string",
      "latitude": 0,
      "longitude": 0,
      "state": "STATE_UNSPECIFIED"
    }
  },
  "displayName": "string",
  "fccId": "string",
  "grantRangeAllowlists": [
    {
      "highFrequencyMhz": 0,
      "lowFrequencyMhz": 0
    }
  ],
  "grants": [
    {
      "channelType": "CHANNEL_TYPE_UNSPECIFIED",
      "expireTime": "string",
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      },
      "grantId": "string",
      "lastHeartbeatTransmitExpireTime": "string",
      "maxEirp": 0,
      "moveList": [
        {
          "dpaId": "string",
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          }
        }
      ],
      "state": "GRANT_STATE_UNSPECIFIED",
      "suspensionReason": [
        "string"
      ]
    }
  ],
  "name": "string",
  "preloadedConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "serialNumber": "string",
  "state": "DEVICE_STATE_UNSPECIFIED"
}
```

<h3 id="prodttsasportalnodesdevicesupdatesigned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalDevice](#schemasasportaldevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.deployments.list

<a id="opIdprod_tt_sasportal.nodes.nodes.deployments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/deployments`

Lists deployments.

<h3 id="prodttsasportalnodesnodesdeploymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.|
|filter|query|string|false|The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.|
|pageSize|query|integer|false|The maximum number of deployments to return in the response.|
|pageToken|query|string|false|A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.|
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
  "deployments": [
    {
      "displayName": "string",
      "frns": [
        "string"
      ],
      "name": "string",
      "sasUserIds": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="prodttsasportalnodesnodesdeploymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalListDeploymentsResponse](#schemasasportallistdeploymentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.deployments.create

<a id="opIdprod_tt_sasportal.nodes.nodes.deployments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/deployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "sasUserIds": [
      "string"
    ]
  }'
```

`POST /v1alpha1/{parent}/deployments`

Creates a new deployment.

> Body parameter

```json
{
  "displayName": "string",
  "sasUserIds": [
    "string"
  ]
}
```

<h3 id="prodttsasportalnodesnodesdeploymentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name where the deployment is to be created.|
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
|body|body|[SasPortalDeployment](#schemasasportaldeployment)|false|none|
|» displayName|body|string|false|The deployment's display name.|
|» sasUserIds|body|[string]|false|User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.|

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
  "displayName": "string",
  "frns": [
    "string"
  ],
  "name": "string",
  "sasUserIds": [
    "string"
  ]
}
```

<h3 id="prodttsasportalnodesnodesdeploymentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalDeployment](#schemasasportaldeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.devices.list

<a id="opIdprod_tt_sasportal.nodes.nodes.devices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/devices`

Lists devices under a node or customer.

<h3 id="prodttsasportalnodesnodesdeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the parent resource.|
|filter|query|string|false|The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.|
|pageSize|query|integer|false|The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].|
|pageToken|query|string|false|A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.|
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
  "devices": [
    {
      "activeConfig": {
        "airInterface": {
          "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
          "supportedSpec": "string"
        },
        "callSign": "string",
        "category": "DEVICE_CATEGORY_UNSPECIFIED",
        "installationParams": {
          "antennaAzimuth": 0,
          "antennaBeamwidth": 0,
          "antennaDowntilt": 0,
          "antennaGain": 0,
          "antennaGainNewField": 0,
          "antennaModel": "string",
          "cpeCbsdIndication": true,
          "eirpCapability": 0,
          "eirpCapabilityNewField": 0,
          "height": 0,
          "heightType": "HEIGHT_TYPE_UNSPECIFIED",
          "horizontalAccuracy": 0,
          "indoorDeployment": true,
          "latitude": 0,
          "longitude": 0,
          "verticalAccuracy": 0
        },
        "isSigned": true,
        "measurementCapabilities": [
          "MEASUREMENT_CAPABILITY_UNSPECIFIED"
        ],
        "model": {
          "firmwareVersion": "string",
          "hardwareVersion": "string",
          "name": "string",
          "softwareVersion": "string",
          "vendor": "string"
        },
        "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
        "updateTime": "string",
        "userId": "string"
      },
      "currentChannels": [
        {
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          },
          "score": 0
        }
      ],
      "deviceMetadata": {
        "antennaModel": "string",
        "commonChannelGroup": "string",
        "interferenceCoordinationGroup": "string",
        "nrqzValidated": true,
        "nrqzValidation": {
          "caseId": "string",
          "cpiId": "string",
          "latitude": 0,
          "longitude": 0,
          "state": "STATE_UNSPECIFIED"
        }
      },
      "displayName": "string",
      "fccId": "string",
      "grantRangeAllowlists": [
        {
          "highFrequencyMhz": 0,
          "lowFrequencyMhz": 0
        }
      ],
      "grants": [
        {
          "channelType": "CHANNEL_TYPE_UNSPECIFIED",
          "expireTime": "string",
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          },
          "grantId": "string",
          "lastHeartbeatTransmitExpireTime": "string",
          "maxEirp": 0,
          "moveList": [
            {
              "dpaId": "string",
              "frequencyRange": {
                "highFrequencyMhz": 0,
                "lowFrequencyMhz": 0
              }
            }
          ],
          "state": "GRANT_STATE_UNSPECIFIED",
          "suspensionReason": [
            "string"
          ]
        }
      ],
      "name": "string",
      "preloadedConfig": {
        "airInterface": {
          "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
          "supportedSpec": "string"
        },
        "callSign": "string",
        "category": "DEVICE_CATEGORY_UNSPECIFIED",
        "installationParams": {
          "antennaAzimuth": 0,
          "antennaBeamwidth": 0,
          "antennaDowntilt": 0,
          "antennaGain": 0,
          "antennaGainNewField": 0,
          "antennaModel": "string",
          "cpeCbsdIndication": true,
          "eirpCapability": 0,
          "eirpCapabilityNewField": 0,
          "height": 0,
          "heightType": "HEIGHT_TYPE_UNSPECIFIED",
          "horizontalAccuracy": 0,
          "indoorDeployment": true,
          "latitude": 0,
          "longitude": 0,
          "verticalAccuracy": 0
        },
        "isSigned": true,
        "measurementCapabilities": [
          "MEASUREMENT_CAPABILITY_UNSPECIFIED"
        ],
        "model": {
          "firmwareVersion": "string",
          "hardwareVersion": "string",
          "name": "string",
          "softwareVersion": "string",
          "vendor": "string"
        },
        "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
        "updateTime": "string",
        "userId": "string"
      },
      "serialNumber": "string",
      "state": "DEVICE_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="prodttsasportalnodesnodesdeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalListDevicesResponse](#schemasasportallistdevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.devices.create

<a id="opIdprod_tt_sasportal.nodes.nodes.devices.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/devices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activeConfig": {
      "airInterface": {
        "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
        "supportedSpec": "string"
      },
      "callSign": "string",
      "category": "DEVICE_CATEGORY_UNSPECIFIED",
      "installationParams": {
        "antennaAzimuth": 0,
        "antennaBeamwidth": 0,
        "antennaDowntilt": 0,
        "antennaGain": 0,
        "antennaGainNewField": 0,
        "antennaModel": "string",
        "cpeCbsdIndication": true,
        "eirpCapability": 0,
        "eirpCapabilityNewField": 0,
        "height": 0,
        "heightType": "HEIGHT_TYPE_UNSPECIFIED",
        "horizontalAccuracy": 0,
        "indoorDeployment": true,
        "latitude": 0,
        "longitude": 0,
        "verticalAccuracy": 0
      },
      "isSigned": true,
      "measurementCapabilities": [
        "MEASUREMENT_CAPABILITY_UNSPECIFIED"
      ],
      "model": {
        "firmwareVersion": "string",
        "hardwareVersion": "string",
        "name": "string",
        "softwareVersion": "string",
        "vendor": "string"
      },
      "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    },
    "deviceMetadata": {
      "antennaModel": "string",
      "commonChannelGroup": "string",
      "interferenceCoordinationGroup": "string"
    },
    "displayName": "string",
    "fccId": "string",
    "grantRangeAllowlists": [
      {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      }
    ],
    "grants": [
      {
        "channelType": "CHANNEL_TYPE_UNSPECIFIED",
        "expireTime": "string",
        "frequencyRange": {
          "highFrequencyMhz": 0,
          "lowFrequencyMhz": 0
        },
        "grantId": "string",
        "lastHeartbeatTransmitExpireTime": "string",
        "maxEirp": 0,
        "moveList": [
          {
            "dpaId": "string",
            "frequencyRange": {
              "highFrequencyMhz": 0,
              "lowFrequencyMhz": 0
            }
          }
        ],
        "state": "GRANT_STATE_UNSPECIFIED",
        "suspensionReason": [
          "string"
        ]
      }
    ],
    "name": "string",
    "preloadedConfig": {
      "airInterface": {
        "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
        "supportedSpec": "string"
      },
      "callSign": "string",
      "category": "DEVICE_CATEGORY_UNSPECIFIED",
      "installationParams": {
        "antennaAzimuth": 0,
        "antennaBeamwidth": 0,
        "antennaDowntilt": 0,
        "antennaGain": 0,
        "antennaGainNewField": 0,
        "antennaModel": "string",
        "cpeCbsdIndication": true,
        "eirpCapability": 0,
        "eirpCapabilityNewField": 0,
        "height": 0,
        "heightType": "HEIGHT_TYPE_UNSPECIFIED",
        "horizontalAccuracy": 0,
        "indoorDeployment": true,
        "latitude": 0,
        "longitude": 0,
        "verticalAccuracy": 0
      },
      "isSigned": true,
      "measurementCapabilities": [
        "MEASUREMENT_CAPABILITY_UNSPECIFIED"
      ],
      "model": {
        "firmwareVersion": "string",
        "hardwareVersion": "string",
        "name": "string",
        "softwareVersion": "string",
        "vendor": "string"
      },
      "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    },
    "serialNumber": "string",
    "state": "DEVICE_STATE_UNSPECIFIED"
  }'
```

`POST /v1alpha1/{parent}/devices`

Creates a device under a node or customer.

> Body parameter

```json
{
  "activeConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "deviceMetadata": {
    "antennaModel": "string",
    "commonChannelGroup": "string",
    "interferenceCoordinationGroup": "string"
  },
  "displayName": "string",
  "fccId": "string",
  "grantRangeAllowlists": [
    {
      "highFrequencyMhz": 0,
      "lowFrequencyMhz": 0
    }
  ],
  "grants": [
    {
      "channelType": "CHANNEL_TYPE_UNSPECIFIED",
      "expireTime": "string",
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      },
      "grantId": "string",
      "lastHeartbeatTransmitExpireTime": "string",
      "maxEirp": 0,
      "moveList": [
        {
          "dpaId": "string",
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          }
        }
      ],
      "state": "GRANT_STATE_UNSPECIFIED",
      "suspensionReason": [
        "string"
      ]
    }
  ],
  "name": "string",
  "preloadedConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "serialNumber": "string",
  "state": "DEVICE_STATE_UNSPECIFIED"
}
```

<h3 id="prodttsasportalnodesnodesdevicescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the parent resource.|
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
|body|body|[SasPortalDevice](#schemasasportaldevice)|false|none|
|» activeConfig|body|[SasPortalDeviceConfig](#schemasasportaldeviceconfig)|false|Output only. Current configuration of the device as registered to the SAS.|
|» deviceMetadata|body|[SasPortalDeviceMetadata](#schemasasportaldevicemetadata)|false|Device parameters that can be overridden by both SAS Portal and SAS registration requests.|
|» displayName|body|string|false|Device display name.|
|» fccId|body|string|false|The FCC identifier of the device.|
|» grantRangeAllowlists|body|[[SasPortalFrequencyRange](#schemasasportalfrequencyrange)]|false|Only ranges that are within the allowlists are available for new grants.|
|» grants|body|[[SasPortalDeviceGrant](#schemasasportaldevicegrant)]|false|Output only. Grants held by the device.|
|» name|body|string|false|Output only. The resource path name.|
|» preloadedConfig|body|[SasPortalDeviceConfig](#schemasasportaldeviceconfig)|false|Configuration of the device, as specified via SAS Portal API.|
|» serialNumber|body|string|false|A serial number assigned to the device by the device manufacturer.|
|» state|body|string|false|Output only. Device state.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|DEVICE_STATE_UNSPECIFIED|
|» state|RESERVED|
|» state|REGISTERED|
|» state|DEREGISTERED|

> Example responses

> 200 Response

```json
{
  "activeConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "currentChannels": [
    {
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      },
      "score": 0
    }
  ],
  "deviceMetadata": {
    "antennaModel": "string",
    "commonChannelGroup": "string",
    "interferenceCoordinationGroup": "string",
    "nrqzValidated": true,
    "nrqzValidation": {
      "caseId": "string",
      "cpiId": "string",
      "latitude": 0,
      "longitude": 0,
      "state": "STATE_UNSPECIFIED"
    }
  },
  "displayName": "string",
  "fccId": "string",
  "grantRangeAllowlists": [
    {
      "highFrequencyMhz": 0,
      "lowFrequencyMhz": 0
    }
  ],
  "grants": [
    {
      "channelType": "CHANNEL_TYPE_UNSPECIFIED",
      "expireTime": "string",
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      },
      "grantId": "string",
      "lastHeartbeatTransmitExpireTime": "string",
      "maxEirp": 0,
      "moveList": [
        {
          "dpaId": "string",
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          }
        }
      ],
      "state": "GRANT_STATE_UNSPECIFIED",
      "suspensionReason": [
        "string"
      ]
    }
  ],
  "name": "string",
  "preloadedConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "serialNumber": "string",
  "state": "DEVICE_STATE_UNSPECIFIED"
}
```

<h3 id="prodttsasportalnodesnodesdevicescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalDevice](#schemasasportaldevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.devices.createSigned

<a id="opIdprod_tt_sasportal.nodes.nodes.devices.createSigned"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/devices:createSigned \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "encodedDevice": "string",
    "installerId": "string"
  }'
```

`POST /v1alpha1/{parent}/devices:createSigned`

Creates a signed device under a node or customer.

> Body parameter

```json
{
  "encodedDevice": "string",
  "installerId": "string"
}
```

<h3 id="prodttsasportalnodesnodesdevicescreatesigned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the parent resource.|
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
|body|body|[SasPortalCreateSignedDeviceRequest](#schemasasportalcreatesigneddevicerequest)|false|none|
|» encodedDevice|body|string(byte)|false|Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.|
|» installerId|body|string|false|Required. Unique installer id (CPI ID) from the Certified Professional Installers database.|

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
  "activeConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "currentChannels": [
    {
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      },
      "score": 0
    }
  ],
  "deviceMetadata": {
    "antennaModel": "string",
    "commonChannelGroup": "string",
    "interferenceCoordinationGroup": "string",
    "nrqzValidated": true,
    "nrqzValidation": {
      "caseId": "string",
      "cpiId": "string",
      "latitude": 0,
      "longitude": 0,
      "state": "STATE_UNSPECIFIED"
    }
  },
  "displayName": "string",
  "fccId": "string",
  "grantRangeAllowlists": [
    {
      "highFrequencyMhz": 0,
      "lowFrequencyMhz": 0
    }
  ],
  "grants": [
    {
      "channelType": "CHANNEL_TYPE_UNSPECIFIED",
      "expireTime": "string",
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      },
      "grantId": "string",
      "lastHeartbeatTransmitExpireTime": "string",
      "maxEirp": 0,
      "moveList": [
        {
          "dpaId": "string",
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          }
        }
      ],
      "state": "GRANT_STATE_UNSPECIFIED",
      "suspensionReason": [
        "string"
      ]
    }
  ],
  "name": "string",
  "preloadedConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "serialNumber": "string",
  "state": "DEVICE_STATE_UNSPECIFIED"
}
```

<h3 id="prodttsasportalnodesnodesdevicescreatesigned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalDevice](#schemasasportaldevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.nodes.list

<a id="opIdprod_tt_sasportal.nodes.nodes.nodes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/nodes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/nodes`

Lists nodes.

<h3 id="prodttsasportalnodesnodesnodeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name, for example, "nodes/1".|
|filter|query|string|false|The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.|
|pageSize|query|integer|false|The maximum number of nodes to return in the response.|
|pageToken|query|string|false|A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.|
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
  "nodes": [
    {
      "displayName": "string",
      "name": "string",
      "sasUserIds": [
        "string"
      ]
    }
  ]
}
```

<h3 id="prodttsasportalnodesnodesnodeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalListNodesResponse](#schemasasportallistnodesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.nodes.nodes.nodes.create

<a id="opIdprod_tt_sasportal.nodes.nodes.nodes.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/nodes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string",
    "sasUserIds": [
      "string"
    ]
  }'
```

`POST /v1alpha1/{parent}/nodes`

Creates a new node.

> Body parameter

```json
{
  "displayName": "string",
  "name": "string",
  "sasUserIds": [
    "string"
  ]
}
```

<h3 id="prodttsasportalnodesnodesnodescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name where the node is to be created.|
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
|body|body|[SasPortalNode](#schemasasportalnode)|false|none|
|» displayName|body|string|false|The node's display name.|
|» name|body|string|false|Output only. Resource name.|
|» sasUserIds|body|[string]|false|User ids used by the devices belonging to this node.|

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
  "displayName": "string",
  "name": "string",
  "sasUserIds": [
    "string"
  ]
}
```

<h3 id="prodttsasportalnodesnodesnodescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalNode](#schemasasportalnode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

<h1 id="sas-portal-api-testing-policies">policies</h1>

## prod_tt_sasportal.policies.get

<a id="opIdprod_tt_sasportal.policies.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/policies:get \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "resource": "string"
  }'
```

`POST /v1alpha1/policies:get`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

> Body parameter

```json
{
  "resource": "string"
}
```

<h3 id="prodttsasportalpoliciesget-parameters">Parameters</h3>

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
|body|body|[SasPortalGetPolicyRequest](#schemasasportalgetpolicyrequest)|false|none|
|» resource|body|string|false|Required. The resource for which the policy is being requested.|

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
  "assignments": [
    {
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string"
}
```

<h3 id="prodttsasportalpoliciesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalPolicy](#schemasasportalpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.policies.set

<a id="opIdprod_tt_sasportal.policies.set"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/policies:set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "disableNotification": true,
    "policy": {
      "assignments": [
        {
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string"
    },
    "resource": "string"
  }'
```

`POST /v1alpha1/policies:set`

Sets the access control policy on the specified resource. Replaces any existing policy.

> Body parameter

```json
{
  "disableNotification": true,
  "policy": {
    "assignments": [
      {
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string"
  },
  "resource": "string"
}
```

<h3 id="prodttsasportalpoliciesset-parameters">Parameters</h3>

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
|body|body|[SasPortalSetPolicyRequest](#schemasasportalsetpolicyrequest)|false|none|
|» disableNotification|body|boolean|false|Optional. Set the field as `true` to disable the onboarding notification.|
|» policy|body|[SasPortalPolicy](#schemasasportalpolicy)|false|Required. The policy to be applied to the `resource`.|
|» resource|body|string|false|Required. The resource for which the policy is being specified. This policy replaces any existing policy.|

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
  "assignments": [
    {
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string"
}
```

<h3 id="prodttsasportalpoliciesset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalPolicy](#schemasasportalpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

## prod_tt_sasportal.policies.test

<a id="opIdprod_tt_sasportal.policies.test"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/policies:test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ],
    "resource": "string"
  }'
```

`POST /v1alpha1/policies:test`

Returns permissions that a caller has on the specified resource.

> Body parameter

```json
{
  "permissions": [
    "string"
  ],
  "resource": "string"
}
```

<h3 id="prodttsasportalpoliciestest-parameters">Parameters</h3>

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
|body|body|[SasPortalTestPermissionsRequest](#schemasasportaltestpermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`.|
|» resource|body|string|false|Required. The resource for which the permissions are being requested.|

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
  "permissions": [
    "string"
  ]
}
```

<h3 id="prodttsasportalpoliciestest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SasPortalTestPermissionsResponse](#schemasasportaltestpermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/sasportal ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/sasportal )
</aside>

# Schemas

<h2 id="tocS_SasPortalAssignment">SasPortalAssignment</h2>
<!-- backwards compatibility -->
<a id="schemasasportalassignment"></a>
<a id="schema_SasPortalAssignment"></a>
<a id="tocSsasportalassignment"></a>
<a id="tocssasportalassignment"></a>

```json
{
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members` with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[string]|false|none|The identities the role is assigned to. It can have the following values: * `{user_email}`: An email address that represents a specific Google account. For example: `alice@gmail.com`. * `{group_email}`: An email address that represents a Google group. For example, `viewers@gmail.com`.|
|role|string|false|none|Required. Role that is assigned to `members`.|

<h2 id="tocS_SasPortalChannelWithScore">SasPortalChannelWithScore</h2>
<!-- backwards compatibility -->
<a id="schemasasportalchannelwithscore"></a>
<a id="schema_SasPortalChannelWithScore"></a>
<a id="tocSsasportalchannelwithscore"></a>
<a id="tocssasportalchannelwithscore"></a>

```json
{
  "frequencyRange": {
    "highFrequencyMhz": 0,
    "lowFrequencyMhz": 0
  },
  "score": 0
}
```

The channel with score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequencyRange|[SasPortalFrequencyRange](#schemasasportalfrequencyrange)|false|none|The frequency range of the channel.|
|score|number(double)|false|none|The channel score, normalized to be in the range [0,100].|

<h2 id="tocS_SasPortalCreateSignedDeviceRequest">SasPortalCreateSignedDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalcreatesigneddevicerequest"></a>
<a id="schema_SasPortalCreateSignedDeviceRequest"></a>
<a id="tocSsasportalcreatesigneddevicerequest"></a>
<a id="tocssasportalcreatesigneddevicerequest"></a>

```json
{
  "encodedDevice": "string",
  "installerId": "string"
}
```

Request for CreateSignedDevice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encodedDevice|string(byte)|false|none|Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.|
|installerId|string|false|none|Required. Unique installer id (CPI ID) from the Certified Professional Installers database.|

<h2 id="tocS_SasPortalCustomer">SasPortalCustomer</h2>
<!-- backwards compatibility -->
<a id="schemasasportalcustomer"></a>
<a id="schema_SasPortalCustomer"></a>
<a id="tocSsasportalcustomer"></a>
<a id="tocssasportalcustomer"></a>

```json
{
  "displayName": "string",
  "name": "string",
  "sasUserIds": [
    "string"
  ]
}
```

Entity representing a SAS customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Required. Name of the organization that the customer entity represents.|
|name|string|false|none|Output only. Resource name of the customer.|
|sasUserIds|[string]|false|none|User IDs used by the devices belonging to this customer.|

<h2 id="tocS_SasPortalDeployment">SasPortalDeployment</h2>
<!-- backwards compatibility -->
<a id="schemasasportaldeployment"></a>
<a id="schema_SasPortalDeployment"></a>
<a id="tocSsasportaldeployment"></a>
<a id="tocssasportaldeployment"></a>

```json
{
  "displayName": "string",
  "frns": [
    "string"
  ],
  "name": "string",
  "sasUserIds": [
    "string"
  ]
}
```

The Deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The deployment's display name.|
|frns|[string]|false|read-only|Output only. The FCC Registration Numbers (FRNs) copied from its direct parent.|
|name|string|false|read-only|Output only. Resource name.|
|sasUserIds|[string]|false|none|User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.|

<h2 id="tocS_SasPortalDevice">SasPortalDevice</h2>
<!-- backwards compatibility -->
<a id="schemasasportaldevice"></a>
<a id="schema_SasPortalDevice"></a>
<a id="tocSsasportaldevice"></a>
<a id="tocssasportaldevice"></a>

```json
{
  "activeConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "currentChannels": [
    {
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      },
      "score": 0
    }
  ],
  "deviceMetadata": {
    "antennaModel": "string",
    "commonChannelGroup": "string",
    "interferenceCoordinationGroup": "string",
    "nrqzValidated": true,
    "nrqzValidation": {
      "caseId": "string",
      "cpiId": "string",
      "latitude": 0,
      "longitude": 0,
      "state": "STATE_UNSPECIFIED"
    }
  },
  "displayName": "string",
  "fccId": "string",
  "grantRangeAllowlists": [
    {
      "highFrequencyMhz": 0,
      "lowFrequencyMhz": 0
    }
  ],
  "grants": [
    {
      "channelType": "CHANNEL_TYPE_UNSPECIFIED",
      "expireTime": "string",
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      },
      "grantId": "string",
      "lastHeartbeatTransmitExpireTime": "string",
      "maxEirp": 0,
      "moveList": [
        {
          "dpaId": "string",
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          }
        }
      ],
      "state": "GRANT_STATE_UNSPECIFIED",
      "suspensionReason": [
        "string"
      ]
    }
  ],
  "name": "string",
  "preloadedConfig": {
    "airInterface": {
      "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
      "supportedSpec": "string"
    },
    "callSign": "string",
    "category": "DEVICE_CATEGORY_UNSPECIFIED",
    "installationParams": {
      "antennaAzimuth": 0,
      "antennaBeamwidth": 0,
      "antennaDowntilt": 0,
      "antennaGain": 0,
      "antennaGainNewField": 0,
      "antennaModel": "string",
      "cpeCbsdIndication": true,
      "eirpCapability": 0,
      "eirpCapabilityNewField": 0,
      "height": 0,
      "heightType": "HEIGHT_TYPE_UNSPECIFIED",
      "horizontalAccuracy": 0,
      "indoorDeployment": true,
      "latitude": 0,
      "longitude": 0,
      "verticalAccuracy": 0
    },
    "isSigned": true,
    "measurementCapabilities": [
      "MEASUREMENT_CAPABILITY_UNSPECIFIED"
    ],
    "model": {
      "firmwareVersion": "string",
      "hardwareVersion": "string",
      "name": "string",
      "softwareVersion": "string",
      "vendor": "string"
    },
    "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
    "updateTime": "string",
    "userId": "string"
  },
  "serialNumber": "string",
  "state": "DEVICE_STATE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeConfig|[SasPortalDeviceConfig](#schemasasportaldeviceconfig)|false|none|Output only. Current configuration of the device as registered to the SAS.|
|currentChannels|[[SasPortalChannelWithScore](#schemasasportalchannelwithscore)]|false|read-only|Output only. Current channels with scores.|
|deviceMetadata|[SasPortalDeviceMetadata](#schemasasportaldevicemetadata)|false|none|Device parameters that can be overridden by both SAS Portal and SAS registration requests.|
|displayName|string|false|none|Device display name.|
|fccId|string|false|none|The FCC identifier of the device.|
|grantRangeAllowlists|[[SasPortalFrequencyRange](#schemasasportalfrequencyrange)]|false|none|Only ranges that are within the allowlists are available for new grants.|
|grants|[[SasPortalDeviceGrant](#schemasasportaldevicegrant)]|false|none|Output only. Grants held by the device.|
|name|string|false|none|Output only. The resource path name.|
|preloadedConfig|[SasPortalDeviceConfig](#schemasasportaldeviceconfig)|false|none|Configuration of the device, as specified via SAS Portal API.|
|serialNumber|string|false|none|A serial number assigned to the device by the device manufacturer.|
|state|string|false|none|Output only. Device state.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|DEVICE_STATE_UNSPECIFIED|
|state|RESERVED|
|state|REGISTERED|
|state|DEREGISTERED|

<h2 id="tocS_SasPortalDeviceAirInterface">SasPortalDeviceAirInterface</h2>
<!-- backwards compatibility -->
<a id="schemasasportaldeviceairinterface"></a>
<a id="schema_SasPortalDeviceAirInterface"></a>
<a id="tocSsasportaldeviceairinterface"></a>
<a id="tocssasportaldeviceairinterface"></a>

```json
{
  "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
  "supportedSpec": "string"
}
```

Information about the device's air interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|radioTechnology|string|false|none|Conditional. This field specifies the radio access technology that is used for the CBSD.|
|supportedSpec|string|false|none|Optional. This field is related to the `radioTechnology` and provides the air interface specification that the CBSD is compliant with at the time of registration.|

#### Enumerated Values

|Property|Value|
|---|---|
|radioTechnology|RADIO_TECHNOLOGY_UNSPECIFIED|
|radioTechnology|E_UTRA|
|radioTechnology|CAMBIUM_NETWORKS|
|radioTechnology|FOUR_G_BBW_SAA_1|
|radioTechnology|NR|
|radioTechnology|DOODLE_CBRS|
|radioTechnology|CW|
|radioTechnology|REDLINE|
|radioTechnology|TARANA_WIRELESS|

<h2 id="tocS_SasPortalDeviceConfig">SasPortalDeviceConfig</h2>
<!-- backwards compatibility -->
<a id="schemasasportaldeviceconfig"></a>
<a id="schema_SasPortalDeviceConfig"></a>
<a id="tocSsasportaldeviceconfig"></a>
<a id="tocssasportaldeviceconfig"></a>

```json
{
  "airInterface": {
    "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
    "supportedSpec": "string"
  },
  "callSign": "string",
  "category": "DEVICE_CATEGORY_UNSPECIFIED",
  "installationParams": {
    "antennaAzimuth": 0,
    "antennaBeamwidth": 0,
    "antennaDowntilt": 0,
    "antennaGain": 0,
    "antennaGainNewField": 0,
    "antennaModel": "string",
    "cpeCbsdIndication": true,
    "eirpCapability": 0,
    "eirpCapabilityNewField": 0,
    "height": 0,
    "heightType": "HEIGHT_TYPE_UNSPECIFIED",
    "horizontalAccuracy": 0,
    "indoorDeployment": true,
    "latitude": 0,
    "longitude": 0,
    "verticalAccuracy": 0
  },
  "isSigned": true,
  "measurementCapabilities": [
    "MEASUREMENT_CAPABILITY_UNSPECIFIED"
  ],
  "model": {
    "firmwareVersion": "string",
    "hardwareVersion": "string",
    "name": "string",
    "softwareVersion": "string",
    "vendor": "string"
  },
  "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
  "updateTime": "string",
  "userId": "string"
}
```

Information about the device configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airInterface|[SasPortalDeviceAirInterface](#schemasasportaldeviceairinterface)|false|none|Information about this device's air interface.|
|callSign|string|false|none|The call sign of the device operator.|
|category|string|false|none|FCC category of the device.|
|installationParams|[SasPortalInstallationParams](#schemasasportalinstallationparams)|false|none|Installation parameters for the device.|
|isSigned|boolean|false|none|Output only. Whether the configuration has been signed by a CPI.|
|measurementCapabilities|[string]|false|none|Measurement reporting capabilities of the device.|
|model|[SasPortalDeviceModel](#schemasasportaldevicemodel)|false|none|Information about this device model.|
|state|string|false|none|State of the configuration.|
|updateTime|string(google-datetime)|false|none|Output only. The last time the device configuration was edited.|
|userId|string|false|none|The identifier of a device user.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|DEVICE_CATEGORY_UNSPECIFIED|
|category|DEVICE_CATEGORY_A|
|category|DEVICE_CATEGORY_B|
|measurementCapabilities|MEASUREMENT_CAPABILITY_UNSPECIFIED|
|measurementCapabilities|MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT|
|measurementCapabilities|MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT|
|state|DEVICE_CONFIG_STATE_UNSPECIFIED|
|state|DRAFT|
|state|FINAL|

<h2 id="tocS_SasPortalDeviceGrant">SasPortalDeviceGrant</h2>
<!-- backwards compatibility -->
<a id="schemasasportaldevicegrant"></a>
<a id="schema_SasPortalDeviceGrant"></a>
<a id="tocSsasportaldevicegrant"></a>
<a id="tocssasportaldevicegrant"></a>

```json
{
  "channelType": "CHANNEL_TYPE_UNSPECIFIED",
  "expireTime": "string",
  "frequencyRange": {
    "highFrequencyMhz": 0,
    "lowFrequencyMhz": 0
  },
  "grantId": "string",
  "lastHeartbeatTransmitExpireTime": "string",
  "maxEirp": 0,
  "moveList": [
    {
      "dpaId": "string",
      "frequencyRange": {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      }
    }
  ],
  "state": "GRANT_STATE_UNSPECIFIED",
  "suspensionReason": [
    "string"
  ]
}
```

Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelType|string|false|none|Type of channel used.|
|expireTime|string(google-datetime)|false|none|The expiration time of the grant.|
|frequencyRange|[SasPortalFrequencyRange](#schemasasportalfrequencyrange)|false|none|The transmission frequency range.|
|grantId|string|false|none|Grant Id.|
|lastHeartbeatTransmitExpireTime|string(google-datetime)|false|none|The transmit expiration time of the last heartbeat.|
|maxEirp|number(double)|false|none|Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of `maxEirp` represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3).|
|moveList|[[SasPortalDpaMoveList](#schemasasportaldpamovelist)]|false|none|The DPA move lists on which this grant appears.|
|state|string|false|none|State of the grant.|
|suspensionReason|[string]|false|none|If the grant is suspended, the reason(s) for suspension.|

#### Enumerated Values

|Property|Value|
|---|---|
|channelType|CHANNEL_TYPE_UNSPECIFIED|
|channelType|CHANNEL_TYPE_GAA|
|channelType|CHANNEL_TYPE_PAL|
|state|GRANT_STATE_UNSPECIFIED|
|state|GRANT_STATE_GRANTED|
|state|GRANT_STATE_TERMINATED|
|state|GRANT_STATE_SUSPENDED|
|state|GRANT_STATE_AUTHORIZED|
|state|GRANT_STATE_EXPIRED|

<h2 id="tocS_SasPortalDeviceMetadata">SasPortalDeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasasportaldevicemetadata"></a>
<a id="schema_SasPortalDeviceMetadata"></a>
<a id="tocSsasportaldevicemetadata"></a>
<a id="tocssasportaldevicemetadata"></a>

```json
{
  "antennaModel": "string",
  "commonChannelGroup": "string",
  "interferenceCoordinationGroup": "string",
  "nrqzValidated": true,
  "nrqzValidation": {
    "caseId": "string",
    "cpiId": "string",
    "latitude": 0,
    "longitude": 0,
    "state": "STATE_UNSPECIFIED"
  }
}
```

Device data overridable by both SAS Portal and registration requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antennaModel|string|false|none|If populated, the Antenna Model Pattern to use. Format is: `RecordCreatorId:PatternId`|
|commonChannelGroup|string|false|none|Common Channel Group (CCG). A group of CBSDs in the same ICG requesting a common primary channel assignment. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).|
|interferenceCoordinationGroup|string|false|none|Interference Coordination Group (ICG). A group of CBSDs that manage their own interference with the group. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).|
|nrqzValidated|boolean|false|read-only|Output only. Set to `true` if a CPI has validated that they have coordinated with the National Quiet Zone office.|
|nrqzValidation|[SasPortalNrqzValidation](#schemasasportalnrqzvalidation)|false|none|Output only. National Radio Quiet Zone validation info.|

<h2 id="tocS_SasPortalDeviceModel">SasPortalDeviceModel</h2>
<!-- backwards compatibility -->
<a id="schemasasportaldevicemodel"></a>
<a id="schema_SasPortalDeviceModel"></a>
<a id="tocSsasportaldevicemodel"></a>
<a id="tocssasportaldevicemodel"></a>

```json
{
  "firmwareVersion": "string",
  "hardwareVersion": "string",
  "name": "string",
  "softwareVersion": "string",
  "vendor": "string"
}
```

Information about the model of the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firmwareVersion|string|false|none|The firmware version of the device.|
|hardwareVersion|string|false|none|The hardware version of the device.|
|name|string|false|none|The name of the device model.|
|softwareVersion|string|false|none|The software version of the device.|
|vendor|string|false|none|The name of the device vendor.|

<h2 id="tocS_SasPortalDpaMoveList">SasPortalDpaMoveList</h2>
<!-- backwards compatibility -->
<a id="schemasasportaldpamovelist"></a>
<a id="schema_SasPortalDpaMoveList"></a>
<a id="tocSsasportaldpamovelist"></a>
<a id="tocssasportaldpamovelist"></a>

```json
{
  "dpaId": "string",
  "frequencyRange": {
    "highFrequencyMhz": 0,
    "lowFrequencyMhz": 0
  }
}
```

An entry in a DPA's move list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dpaId|string|false|none|The ID of the DPA.|
|frequencyRange|[SasPortalFrequencyRange](#schemasasportalfrequencyrange)|false|none|The frequency range that the move list affects.|

<h2 id="tocS_SasPortalEmpty">SasPortalEmpty</h2>
<!-- backwards compatibility -->
<a id="schemasasportalempty"></a>
<a id="schema_SasPortalEmpty"></a>
<a id="tocSsasportalempty"></a>
<a id="tocssasportalempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_SasPortalFrequencyRange">SasPortalFrequencyRange</h2>
<!-- backwards compatibility -->
<a id="schemasasportalfrequencyrange"></a>
<a id="schema_SasPortalFrequencyRange"></a>
<a id="tocSsasportalfrequencyrange"></a>
<a id="tocssasportalfrequencyrange"></a>

```json
{
  "highFrequencyMhz": 0,
  "lowFrequencyMhz": 0
}
```

Frequency range from `low_frequency` to `high_frequency`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highFrequencyMhz|number(double)|false|none|The highest frequency of the frequency range in MHz.|
|lowFrequencyMhz|number(double)|false|none|The lowest frequency of the frequency range in MHz.|

<h2 id="tocS_SasPortalGenerateSecretRequest">SasPortalGenerateSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalgeneratesecretrequest"></a>
<a id="schema_SasPortalGenerateSecretRequest"></a>
<a id="tocSsasportalgeneratesecretrequest"></a>
<a id="tocssasportalgeneratesecretrequest"></a>

```json
{}
```

Request for GenerateSecret.

<h2 id="tocS_SasPortalGenerateSecretResponse">SasPortalGenerateSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemasasportalgeneratesecretresponse"></a>
<a id="schema_SasPortalGenerateSecretResponse"></a>
<a id="tocSsasportalgeneratesecretresponse"></a>
<a id="tocssasportalgeneratesecretresponse"></a>

```json
{
  "secret": "string"
}
```

Response for GenerateSecret.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|false|none|The secret generated by the string and used by ValidateInstaller.|

<h2 id="tocS_SasPortalGetPolicyRequest">SasPortalGetPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalgetpolicyrequest"></a>
<a id="schema_SasPortalGetPolicyRequest"></a>
<a id="tocSsasportalgetpolicyrequest"></a>
<a id="tocssasportalgetpolicyrequest"></a>

```json
{
  "resource": "string"
}
```

Request message for `GetPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|string|false|none|Required. The resource for which the policy is being requested.|

<h2 id="tocS_SasPortalInstallationParams">SasPortalInstallationParams</h2>
<!-- backwards compatibility -->
<a id="schemasasportalinstallationparams"></a>
<a id="schema_SasPortalInstallationParams"></a>
<a id="tocSsasportalinstallationparams"></a>
<a id="tocssasportalinstallationparams"></a>

```json
{
  "antennaAzimuth": 0,
  "antennaBeamwidth": 0,
  "antennaDowntilt": 0,
  "antennaGain": 0,
  "antennaGainNewField": 0,
  "antennaModel": "string",
  "cpeCbsdIndication": true,
  "eirpCapability": 0,
  "eirpCapabilityNewField": 0,
  "height": 0,
  "heightType": "HEIGHT_TYPE_UNSPECIFIED",
  "horizontalAccuracy": 0,
  "indoorDeployment": true,
  "latitude": 0,
  "longitude": 0,
  "verticalAccuracy": 0
}
```

Information about the device installation parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antennaAzimuth|integer(int32)|false|none|Boresight direction of the horizontal plane of the antenna in degrees with respect to true north. The value of this parameter is an integer with a value between 0 and 359 inclusive. A value of 0 degrees means true north; a value of 90 degrees means east. This parameter is optional for Category A devices and conditional for Category B devices.|
|antennaBeamwidth|integer(int32)|false|none|3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees. This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices.|
|antennaDowntilt|integer(int32)|false|none|Antenna downtilt in degrees and is an integer with a value between -90 and +90 inclusive; a negative value means the antenna is tilted up (above horizontal). This parameter is optional for Category A devices and conditional for Category B devices.|
|antennaGain|integer(int32)|false|none|Peak antenna gain in dBi. This parameter is an integer with a value between -127 and +128 (dBi) inclusive.|
|antennaGainNewField|number(double)|false|none|As above, but as a DoubleValue.|
|antennaModel|string|false|none|If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets.|
|cpeCbsdIndication|boolean|false|none|If present, this parameter specifies whether the CBSD is a CPE-CBSD or not.|
|eirpCapability|integer(int32)|false|none|This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category.|
|eirpCapabilityNewField|number(double)|false|none|As above, but as a DoubleValue.|
|height|number(double)|false|none|Device antenna height in meters. When the `heightType` parameter value is "AGL", the antenna height should be given relative to ground level. When the `heightType` parameter value is "AMSL", it is given with respect to WGS84 datum.|
|heightType|string|false|none|Specifies how the height is measured.|
|horizontalAccuracy|number(double)|false|none|A positive number in meters to indicate accuracy of the device antenna horizontal location. This optional parameter should only be present if its value is less than the FCC requirement of 50 meters.|
|indoorDeployment|boolean|false|none|Whether the device antenna is indoor or not. `true`: indoor. `false`: outdoor.|
|latitude|number(double)|false|none|Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator.|
|longitude|number(double)|false|none|Longitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian.|
|verticalAccuracy|number(double)|false|none|A positive number in meters to indicate accuracy of the device antenna vertical location. This optional parameter should only be present if its value is less than the FCC requirement of 3 meters.|

#### Enumerated Values

|Property|Value|
|---|---|
|heightType|HEIGHT_TYPE_UNSPECIFIED|
|heightType|HEIGHT_TYPE_AGL|
|heightType|HEIGHT_TYPE_AMSL|

<h2 id="tocS_SasPortalListCustomersResponse">SasPortalListCustomersResponse</h2>
<!-- backwards compatibility -->
<a id="schemasasportallistcustomersresponse"></a>
<a id="schema_SasPortalListCustomersResponse"></a>
<a id="tocSsasportallistcustomersresponse"></a>
<a id="tocssasportallistcustomersresponse"></a>

```json
{
  "customers": [
    {
      "displayName": "string",
      "name": "string",
      "sasUserIds": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response for `ListCustomers`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customers|[[SasPortalCustomer](#schemasasportalcustomer)]|false|none|The list of customers that match the request.|
|nextPageToken|string|false|none|A pagination token returned from a previous call to ListCustomers that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers.|

<h2 id="tocS_SasPortalListDeploymentsResponse">SasPortalListDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasasportallistdeploymentsresponse"></a>
<a id="schema_SasPortalListDeploymentsResponse"></a>
<a id="tocSsasportallistdeploymentsresponse"></a>
<a id="tocssasportallistdeploymentsresponse"></a>

```json
{
  "deployments": [
    {
      "displayName": "string",
      "frns": [
        "string"
      ],
      "name": "string",
      "sasUserIds": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListDeployments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployments|[[SasPortalDeployment](#schemasasportaldeployment)]|false|none|The deployments that match the request.|
|nextPageToken|string|false|none|A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments.|

<h2 id="tocS_SasPortalListDevicesResponse">SasPortalListDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasasportallistdevicesresponse"></a>
<a id="schema_SasPortalListDevicesResponse"></a>
<a id="tocSsasportallistdevicesresponse"></a>
<a id="tocssasportallistdevicesresponse"></a>

```json
{
  "devices": [
    {
      "activeConfig": {
        "airInterface": {
          "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
          "supportedSpec": "string"
        },
        "callSign": "string",
        "category": "DEVICE_CATEGORY_UNSPECIFIED",
        "installationParams": {
          "antennaAzimuth": 0,
          "antennaBeamwidth": 0,
          "antennaDowntilt": 0,
          "antennaGain": 0,
          "antennaGainNewField": 0,
          "antennaModel": "string",
          "cpeCbsdIndication": true,
          "eirpCapability": 0,
          "eirpCapabilityNewField": 0,
          "height": 0,
          "heightType": "HEIGHT_TYPE_UNSPECIFIED",
          "horizontalAccuracy": 0,
          "indoorDeployment": true,
          "latitude": 0,
          "longitude": 0,
          "verticalAccuracy": 0
        },
        "isSigned": true,
        "measurementCapabilities": [
          "MEASUREMENT_CAPABILITY_UNSPECIFIED"
        ],
        "model": {
          "firmwareVersion": "string",
          "hardwareVersion": "string",
          "name": "string",
          "softwareVersion": "string",
          "vendor": "string"
        },
        "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
        "updateTime": "string",
        "userId": "string"
      },
      "currentChannels": [
        {
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          },
          "score": 0
        }
      ],
      "deviceMetadata": {
        "antennaModel": "string",
        "commonChannelGroup": "string",
        "interferenceCoordinationGroup": "string",
        "nrqzValidated": true,
        "nrqzValidation": {
          "caseId": "string",
          "cpiId": "string",
          "latitude": 0,
          "longitude": 0,
          "state": "STATE_UNSPECIFIED"
        }
      },
      "displayName": "string",
      "fccId": "string",
      "grantRangeAllowlists": [
        {
          "highFrequencyMhz": 0,
          "lowFrequencyMhz": 0
        }
      ],
      "grants": [
        {
          "channelType": "CHANNEL_TYPE_UNSPECIFIED",
          "expireTime": "string",
          "frequencyRange": {
            "highFrequencyMhz": 0,
            "lowFrequencyMhz": 0
          },
          "grantId": "string",
          "lastHeartbeatTransmitExpireTime": "string",
          "maxEirp": 0,
          "moveList": [
            {
              "dpaId": "string",
              "frequencyRange": {
                "highFrequencyMhz": 0,
                "lowFrequencyMhz": 0
              }
            }
          ],
          "state": "GRANT_STATE_UNSPECIFIED",
          "suspensionReason": [
            "string"
          ]
        }
      ],
      "name": "string",
      "preloadedConfig": {
        "airInterface": {
          "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
          "supportedSpec": "string"
        },
        "callSign": "string",
        "category": "DEVICE_CATEGORY_UNSPECIFIED",
        "installationParams": {
          "antennaAzimuth": 0,
          "antennaBeamwidth": 0,
          "antennaDowntilt": 0,
          "antennaGain": 0,
          "antennaGainNewField": 0,
          "antennaModel": "string",
          "cpeCbsdIndication": true,
          "eirpCapability": 0,
          "eirpCapabilityNewField": 0,
          "height": 0,
          "heightType": "HEIGHT_TYPE_UNSPECIFIED",
          "horizontalAccuracy": 0,
          "indoorDeployment": true,
          "latitude": 0,
          "longitude": 0,
          "verticalAccuracy": 0
        },
        "isSigned": true,
        "measurementCapabilities": [
          "MEASUREMENT_CAPABILITY_UNSPECIFIED"
        ],
        "model": {
          "firmwareVersion": "string",
          "hardwareVersion": "string",
          "name": "string",
          "softwareVersion": "string",
          "vendor": "string"
        },
        "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
        "updateTime": "string",
        "userId": "string"
      },
      "serialNumber": "string",
      "state": "DEVICE_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListDevices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[SasPortalDevice](#schemasasportaldevice)]|false|none|The devices that match the request.|
|nextPageToken|string|false|none|A pagination token returned from a previous call to ListDevices that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices.|

<h2 id="tocS_SasPortalListNodesResponse">SasPortalListNodesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasasportallistnodesresponse"></a>
<a id="schema_SasPortalListNodesResponse"></a>
<a id="tocSsasportallistnodesresponse"></a>
<a id="tocssasportallistnodesresponse"></a>

```json
{
  "nextPageToken": "string",
  "nodes": [
    {
      "displayName": "string",
      "name": "string",
      "sasUserIds": [
        "string"
      ]
    }
  ]
}
```

Response for ListNodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes.|
|nodes|[[SasPortalNode](#schemasasportalnode)]|false|none|The nodes that match the request.|

<h2 id="tocS_SasPortalMoveDeploymentRequest">SasPortalMoveDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalmovedeploymentrequest"></a>
<a id="schema_SasPortalMoveDeploymentRequest"></a>
<a id="tocSsasportalmovedeploymentrequest"></a>
<a id="tocssasportalmovedeploymentrequest"></a>

```json
{
  "destination": "string"
}
```

Request for MoveDeployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|Required. The name of the new parent resource node or customer to reparent the deployment under.|

<h2 id="tocS_SasPortalMoveDeviceRequest">SasPortalMoveDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalmovedevicerequest"></a>
<a id="schema_SasPortalMoveDeviceRequest"></a>
<a id="tocSsasportalmovedevicerequest"></a>
<a id="tocssasportalmovedevicerequest"></a>

```json
{
  "destination": "string"
}
```

Request for MoveDevice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|Required. The name of the new parent resource node or customer to reparent the device under.|

<h2 id="tocS_SasPortalMoveNodeRequest">SasPortalMoveNodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalmovenoderequest"></a>
<a id="schema_SasPortalMoveNodeRequest"></a>
<a id="tocSsasportalmovenoderequest"></a>
<a id="tocssasportalmovenoderequest"></a>

```json
{
  "destination": "string"
}
```

Request for MoveNode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|Required. The name of the new parent resource node or customer to reparent the node under.|

<h2 id="tocS_SasPortalNode">SasPortalNode</h2>
<!-- backwards compatibility -->
<a id="schemasasportalnode"></a>
<a id="schema_SasPortalNode"></a>
<a id="tocSsasportalnode"></a>
<a id="tocssasportalnode"></a>

```json
{
  "displayName": "string",
  "name": "string",
  "sasUserIds": [
    "string"
  ]
}
```

The Node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The node's display name.|
|name|string|false|none|Output only. Resource name.|
|sasUserIds|[string]|false|none|User ids used by the devices belonging to this node.|

<h2 id="tocS_SasPortalNrqzValidation">SasPortalNrqzValidation</h2>
<!-- backwards compatibility -->
<a id="schemasasportalnrqzvalidation"></a>
<a id="schema_SasPortalNrqzValidation"></a>
<a id="tocSsasportalnrqzvalidation"></a>
<a id="tocssasportalnrqzvalidation"></a>

```json
{
  "caseId": "string",
  "cpiId": "string",
  "latitude": 0,
  "longitude": 0,
  "state": "STATE_UNSPECIFIED"
}
```

Information about National Radio Quiet Zone validation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseId|string|false|none|Validation case ID.|
|cpiId|string|false|none|CPI who signed the validation.|
|latitude|number(double)|false|none|Device latitude that's associated with the validation.|
|longitude|number(double)|false|none|Device longitude that's associated with the validation.|
|state|string|false|none|State of the NRQZ validation info.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|DRAFT|
|state|FINAL|

<h2 id="tocS_SasPortalOperation">SasPortalOperation</h2>
<!-- backwards compatibility -->
<a id="schemasasportaloperation"></a>
<a id="schema_SasPortalOperation"></a>
<a id="tocSsasportaloperation"></a>
<a id="tocssasportaloperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[SasPortalStatus](#schemasasportalstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_SasPortalPolicy">SasPortalPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasasportalpolicy"></a>
<a id="schema_SasPortalPolicy"></a>
<a id="tocSsasportalpolicy"></a>
<a id="tocssasportalpolicy"></a>

```json
{
  "assignments": [
    {
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string"
}
```

Defines an access control policy to the resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignments|[[SasPortalAssignment](#schemasasportalassignment)]|false|none|List of assignments|
|etag|string(byte)|false|none|The etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to GetPolicy, and systems are expected to put that etag in the request to SetPolicy to ensure that their change will be applied to the same version of the policy. If no etag is provided in the call to GetPolicy, then the existing policy is overwritten blindly.|

<h2 id="tocS_SasPortalProvisionDeploymentRequest">SasPortalProvisionDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalprovisiondeploymentrequest"></a>
<a id="schema_SasPortalProvisionDeploymentRequest"></a>
<a id="tocSsasportalprovisiondeploymentrequest"></a>
<a id="tocssasportalprovisiondeploymentrequest"></a>

```json
{
  "newDeploymentDisplayName": "string",
  "newOrganizationDisplayName": "string"
}
```

Request for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment]. GCP Project, Organization Info, and caller’s GAIA ID should be retrieved from the RPC handler, and used as inputs to create a new SAS organization (if not exists) and a new SAS deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newDeploymentDisplayName|string|false|none|Optional. If this field is set, and a new SAS Portal Deployment needs to be created, its display name will be set to the value of this field.|
|newOrganizationDisplayName|string|false|none|Optional. If this field is set, and a new SAS Portal Organization needs to be created, its display name will be set to the value of this field.|

<h2 id="tocS_SasPortalProvisionDeploymentResponse">SasPortalProvisionDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemasasportalprovisiondeploymentresponse"></a>
<a id="schema_SasPortalProvisionDeploymentResponse"></a>
<a id="tocSsasportalprovisiondeploymentresponse"></a>
<a id="tocssasportalprovisiondeploymentresponse"></a>

```json
{
  "errorMessage": "string"
}
```

Response for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|Optional. Optional error message if the provisioning request is not successful.|

<h2 id="tocS_SasPortalSetPolicyRequest">SasPortalSetPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalsetpolicyrequest"></a>
<a id="schema_SasPortalSetPolicyRequest"></a>
<a id="tocSsasportalsetpolicyrequest"></a>
<a id="tocssasportalsetpolicyrequest"></a>

```json
{
  "disableNotification": true,
  "policy": {
    "assignments": [
      {
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string"
  },
  "resource": "string"
}
```

Request message for `SetPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableNotification|boolean|false|none|Optional. Set the field as `true` to disable the onboarding notification.|
|policy|[SasPortalPolicy](#schemasasportalpolicy)|false|none|Required. The policy to be applied to the `resource`.|
|resource|string|false|none|Required. The resource for which the policy is being specified. This policy replaces any existing policy.|

<h2 id="tocS_SasPortalSignDeviceRequest">SasPortalSignDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalsigndevicerequest"></a>
<a id="schema_SasPortalSignDeviceRequest"></a>
<a id="tocSsasportalsigndevicerequest"></a>
<a id="tocssasportalsigndevicerequest"></a>

```json
{
  "device": {
    "activeConfig": {
      "airInterface": {
        "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
        "supportedSpec": "string"
      },
      "callSign": "string",
      "category": "DEVICE_CATEGORY_UNSPECIFIED",
      "installationParams": {
        "antennaAzimuth": 0,
        "antennaBeamwidth": 0,
        "antennaDowntilt": 0,
        "antennaGain": 0,
        "antennaGainNewField": 0,
        "antennaModel": "string",
        "cpeCbsdIndication": true,
        "eirpCapability": 0,
        "eirpCapabilityNewField": 0,
        "height": 0,
        "heightType": "HEIGHT_TYPE_UNSPECIFIED",
        "horizontalAccuracy": 0,
        "indoorDeployment": true,
        "latitude": 0,
        "longitude": 0,
        "verticalAccuracy": 0
      },
      "isSigned": true,
      "measurementCapabilities": [
        "MEASUREMENT_CAPABILITY_UNSPECIFIED"
      ],
      "model": {
        "firmwareVersion": "string",
        "hardwareVersion": "string",
        "name": "string",
        "softwareVersion": "string",
        "vendor": "string"
      },
      "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    },
    "currentChannels": [
      {
        "frequencyRange": {
          "highFrequencyMhz": 0,
          "lowFrequencyMhz": 0
        },
        "score": 0
      }
    ],
    "deviceMetadata": {
      "antennaModel": "string",
      "commonChannelGroup": "string",
      "interferenceCoordinationGroup": "string",
      "nrqzValidated": true,
      "nrqzValidation": {
        "caseId": "string",
        "cpiId": "string",
        "latitude": 0,
        "longitude": 0,
        "state": "STATE_UNSPECIFIED"
      }
    },
    "displayName": "string",
    "fccId": "string",
    "grantRangeAllowlists": [
      {
        "highFrequencyMhz": 0,
        "lowFrequencyMhz": 0
      }
    ],
    "grants": [
      {
        "channelType": "CHANNEL_TYPE_UNSPECIFIED",
        "expireTime": "string",
        "frequencyRange": {
          "highFrequencyMhz": 0,
          "lowFrequencyMhz": 0
        },
        "grantId": "string",
        "lastHeartbeatTransmitExpireTime": "string",
        "maxEirp": 0,
        "moveList": [
          {
            "dpaId": "string",
            "frequencyRange": {
              "highFrequencyMhz": 0,
              "lowFrequencyMhz": 0
            }
          }
        ],
        "state": "GRANT_STATE_UNSPECIFIED",
        "suspensionReason": [
          "string"
        ]
      }
    ],
    "name": "string",
    "preloadedConfig": {
      "airInterface": {
        "radioTechnology": "RADIO_TECHNOLOGY_UNSPECIFIED",
        "supportedSpec": "string"
      },
      "callSign": "string",
      "category": "DEVICE_CATEGORY_UNSPECIFIED",
      "installationParams": {
        "antennaAzimuth": 0,
        "antennaBeamwidth": 0,
        "antennaDowntilt": 0,
        "antennaGain": 0,
        "antennaGainNewField": 0,
        "antennaModel": "string",
        "cpeCbsdIndication": true,
        "eirpCapability": 0,
        "eirpCapabilityNewField": 0,
        "height": 0,
        "heightType": "HEIGHT_TYPE_UNSPECIFIED",
        "horizontalAccuracy": 0,
        "indoorDeployment": true,
        "latitude": 0,
        "longitude": 0,
        "verticalAccuracy": 0
      },
      "isSigned": true,
      "measurementCapabilities": [
        "MEASUREMENT_CAPABILITY_UNSPECIFIED"
      ],
      "model": {
        "firmwareVersion": "string",
        "hardwareVersion": "string",
        "name": "string",
        "softwareVersion": "string",
        "vendor": "string"
      },
      "state": "DEVICE_CONFIG_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    },
    "serialNumber": "string",
    "state": "DEVICE_STATE_UNSPECIFIED"
  }
}
```

Request for SignDevice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[SasPortalDevice](#schemasasportaldevice)|false|none|Required. The device to sign. The device fields name, fcc_id and serial_number must be set. The user_id field must be set.|

<h2 id="tocS_SasPortalStatus">SasPortalStatus</h2>
<!-- backwards compatibility -->
<a id="schemasasportalstatus"></a>
<a id="schema_SasPortalStatus"></a>
<a id="tocSsasportalstatus"></a>
<a id="tocssasportalstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_SasPortalTestPermissionsRequest">SasPortalTestPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportaltestpermissionsrequest"></a>
<a id="schema_SasPortalTestPermissionsRequest"></a>
<a id="tocSsasportaltestpermissionsrequest"></a>
<a id="tocssasportaltestpermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ],
  "resource": "string"
}
```

Request message for `TestPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`.|
|resource|string|false|none|Required. The resource for which the permissions are being requested.|

<h2 id="tocS_SasPortalTestPermissionsResponse">SasPortalTestPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasasportaltestpermissionsresponse"></a>
<a id="schema_SasPortalTestPermissionsResponse"></a>
<a id="tocSsasportaltestpermissionsresponse"></a>
<a id="tocssasportaltestpermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A set of permissions that the caller is allowed.|

<h2 id="tocS_SasPortalUpdateSignedDeviceRequest">SasPortalUpdateSignedDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalupdatesigneddevicerequest"></a>
<a id="schema_SasPortalUpdateSignedDeviceRequest"></a>
<a id="tocSsasportalupdatesigneddevicerequest"></a>
<a id="tocssasportalupdatesigneddevicerequest"></a>

```json
{
  "encodedDevice": "string",
  "installerId": "string"
}
```

Request for UpdateSignedDevice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encodedDevice|string(byte)|false|none|Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.|
|installerId|string|false|none|Required. Unique installer ID (CPI ID) from the Certified Professional Installers database.|

<h2 id="tocS_SasPortalValidateInstallerRequest">SasPortalValidateInstallerRequest</h2>
<!-- backwards compatibility -->
<a id="schemasasportalvalidateinstallerrequest"></a>
<a id="schema_SasPortalValidateInstallerRequest"></a>
<a id="tocSsasportalvalidateinstallerrequest"></a>
<a id="tocssasportalvalidateinstallerrequest"></a>

```json
{
  "encodedSecret": "string",
  "installerId": "string",
  "secret": "string"
}
```

Request for ValidateInstaller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encodedSecret|string|false|none|Required. JSON Web Token signed using a CPI private key. Payload must include a "secret" claim whose value is the secret.|
|installerId|string|false|none|Required. Unique installer id (CPI ID) from the Certified Professional Installers database.|
|secret|string|false|none|Required. Secret returned by the GenerateSecret.|

<h2 id="tocS_SasPortalValidateInstallerResponse">SasPortalValidateInstallerResponse</h2>
<!-- backwards compatibility -->
<a id="schemasasportalvalidateinstallerresponse"></a>
<a id="schema_SasPortalValidateInstallerResponse"></a>
<a id="tocSsasportalvalidateinstallerresponse"></a>
<a id="tocssasportalvalidateinstallerresponse"></a>

```json
{}
```

Response for ValidateInstaller.
