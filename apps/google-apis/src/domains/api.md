<h1 id="cloud-domains-api">Cloud Domains API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Enables management and configuration of domain names.

Base URLs:

* <a href="https://domains.googleapis.com/">https://domains.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/domains/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="cloud-domains-api-projects">projects</h1>

## domains.projects.locations.registrations.retrieveImportableDomains

<a id="opIddomains.projects.locations.registrations.retrieveImportableDomains"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/registrations:retrieveImportableDomains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{location}/registrations:retrieveImportableDomains`

Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.

<h3 id="domainsprojectslocationsregistrationsretrieveimportabledomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. The location. Must be in the format `projects/*/locations/*`.|
|pageSize|query|integer|false|Maximum number of results to return.|
|pageToken|query|string|false|When set to the `next_page_token` from a prior response, provides the next page of results.|
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
  "domains": [
    {
      "domainName": "string",
      "resourceState": "RESOURCE_STATE_UNSPECIFIED",
      "yearlyPrice": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="domainsprojectslocationsregistrationsretrieveimportabledomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RetrieveImportableDomainsResponse](#schemaretrieveimportabledomainsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.retrieveRegisterParameters

<a id="opIddomains.projects.locations.registrations.retrieveRegisterParameters"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/registrations:retrieveRegisterParameters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{location}/registrations:retrieveRegisterParameters`

Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.

<h3 id="domainsprojectslocationsregistrationsretrieveregisterparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. The location. Must be in the format `projects/*/locations/*`.|
|domainName|query|string|false|Required. The domain name. Unicode domain names must be expressed in Punycode format.|
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
  "registerParameters": {
    "availability": "AVAILABILITY_UNSPECIFIED",
    "domainName": "string",
    "domainNotices": [
      "DOMAIN_NOTICE_UNSPECIFIED"
    ],
    "supportedPrivacy": [
      "CONTACT_PRIVACY_UNSPECIFIED"
    ],
    "yearlyPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  }
}
```

<h3 id="domainsprojectslocationsregistrationsretrieveregisterparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RetrieveRegisterParametersResponse](#schemaretrieveregisterparametersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.retrieveTransferParameters

<a id="opIddomains.projects.locations.registrations.retrieveTransferParameters"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/registrations:retrieveTransferParameters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{location}/registrations:retrieveTransferParameters`

Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.

<h3 id="domainsprojectslocationsregistrationsretrievetransferparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. The location. Must be in the format `projects/*/locations/*`.|
|domainName|query|string|false|Required. The domain name. Unicode domain names must be expressed in Punycode format.|
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
  "transferParameters": {
    "currentRegistrar": "string",
    "currentRegistrarUri": "string",
    "domainName": "string",
    "nameServers": [
      "string"
    ],
    "supportedPrivacy": [
      "CONTACT_PRIVACY_UNSPECIFIED"
    ],
    "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED",
    "yearlyPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  }
}
```

<h3 id="domainsprojectslocationsregistrationsretrievetransferparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RetrieveTransferParametersResponse](#schemaretrievetransferparametersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.searchDomains

<a id="opIddomains.projects.locations.registrations.searchDomains"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/registrations:searchDomains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{location}/registrations:searchDomains`

Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.

<h3 id="domainsprojectslocationsregistrationssearchdomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. The location. Must be in the format `projects/*/locations/*`.|
|query|query|string|false|Required. String used to search for available domain names.|
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
  "registerParameters": [
    {
      "availability": "AVAILABILITY_UNSPECIFIED",
      "domainName": "string",
      "domainNotices": [
        "DOMAIN_NOTICE_UNSPECIFIED"
      ],
      "supportedPrivacy": [
        "CONTACT_PRIVACY_UNSPECIFIED"
      ],
      "yearlyPrice": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    }
  ]
}
```

<h3 id="domainsprojectslocationsregistrationssearchdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchDomainsResponse](#schemasearchdomainsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.get

<a id="opIddomains.projects.locations.registrations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the details of a `Registration` resource.

<h3 id="domainsprojectslocationsregistrationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the `Registration` to get, in the format `projects/*/locations/*/registrations/*`.|
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
  "contactSettings": {
    "adminContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
    "registrantContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "technicalContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
  },
  "createTime": "string",
  "dnsSettings": {
    "customDns": {
      "dsRecords": [
        {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "digest": "string",
          "digestType": "DIGEST_TYPE_UNSPECIFIED",
          "keyTag": 0
        }
      ],
      "nameServers": [
        "string"
      ]
    },
    "glueRecords": [
      {
        "hostName": "string",
        "ipv4Addresses": [
          "string"
        ],
        "ipv6Addresses": [
          "string"
        ]
      }
    ],
    "googleDomainsDns": {
      "dsRecords": [
        {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "digest": "string",
          "digestType": "DIGEST_TYPE_UNSPECIFIED",
          "keyTag": 0
        }
      ],
      "dsState": "DS_STATE_UNSPECIFIED",
      "nameServers": [
        "string"
      ]
    }
  },
  "domainName": "string",
  "expireTime": "string",
  "issues": [
    "ISSUE_UNSPECIFIED"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "managementSettings": {
    "renewalMethod": "RENEWAL_METHOD_UNSPECIFIED",
    "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
  },
  "name": "string",
  "pendingContactSettings": {
    "adminContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
    "registrantContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "technicalContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
  },
  "registerFailureReason": "REGISTER_FAILURE_REASON_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "supportedPrivacy": [
    "CONTACT_PRIVACY_UNSPECIFIED"
  ],
  "transferFailureReason": "TRANSFER_FAILURE_REASON_UNSPECIFIED"
}
```

<h3 id="domainsprojectslocationsregistrationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Registration](#schemaregistration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.delete

<a id="opIddomains.projects.locations.registrations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

<h3 id="domainsprojectslocationsregistrationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the `Registration` to delete, in the format `projects/*/locations/*/registrations/*`.|
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

<h3 id="domainsprojectslocationsregistrationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.patch

<a id="opIddomains.projects.locations.registrations.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contactSettings": {
      "adminContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
      "registrantContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "technicalContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
    },
    "dnsSettings": {
      "customDns": {
        "dsRecords": [
          {
            "algorithm": "ALGORITHM_UNSPECIFIED",
            "digest": "string",
            "digestType": "DIGEST_TYPE_UNSPECIFIED",
            "keyTag": 0
          }
        ],
        "nameServers": [
          "string"
        ]
      },
      "glueRecords": [
        {
          "hostName": "string",
          "ipv4Addresses": [
            "string"
          ],
          "ipv6Addresses": [
            "string"
          ]
        }
      ],
      "googleDomainsDns": {
        "dsState": "DS_STATE_UNSPECIFIED"
      }
    },
    "domainName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "managementSettings": {
      "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
    }
  }'
```

`PATCH /v1beta1/{name}`

Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`

> Body parameter

```json
{
  "contactSettings": {
    "adminContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
    "registrantContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "technicalContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
  },
  "dnsSettings": {
    "customDns": {
      "dsRecords": [
        {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "digest": "string",
          "digestType": "DIGEST_TYPE_UNSPECIFIED",
          "keyTag": 0
        }
      ],
      "nameServers": [
        "string"
      ]
    },
    "glueRecords": [
      {
        "hostName": "string",
        "ipv4Addresses": [
          "string"
        ],
        "ipv6Addresses": [
          "string"
        ]
      }
    ],
    "googleDomainsDns": {
      "dsState": "DS_STATE_UNSPECIFIED"
    }
  },
  "domainName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "managementSettings": {
    "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
  }
}
```

<h3 id="domainsprojectslocationsregistrationspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Name of the `Registration` resource, in the format `projects/*/locations/*/registrations/`.|
|updateMask|query|string|false|Required. The field mask describing which fields to update as a comma-separated list. For example, if only the labels are being updated, the `update_mask` is `"labels"`.|
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
|body|body|[Registration](#schemaregistration)|false|none|
|» contactSettings|body|[ContactSettings](#schemacontactsettings)|false|Required. Settings for contact information linked to the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureContactSettings` method.|
|» dnsSettings|body|[DnsSettings](#schemadnssettings)|false|Settings controlling the DNS configuration of the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureDnsSettings` method.|
|» domainName|body|string|false|Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format.|
|» labels|body|object|false|Set of labels associated with the `Registration`.|
|» » **additionalProperties**|body|string|false|none|
|» managementSettings|body|[ManagementSettings](#schemamanagementsettings)|false|Settings for management of the `Registration`, including renewal, billing, and transfer. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureManagementSettings` method.|

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

<h3 id="domainsprojectslocationsregistrationspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.list

<a id="opIddomains.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="domainsprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.|
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
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="domainsprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.operations.list

<a id="opIddomains.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="domainsprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
  "operations": [
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
  ]
}
```

<h3 id="domainsprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.export

<a id="opIddomains.projects.locations.registrations.export"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:export`

Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

> Body parameter

```json
{}
```

<h3 id="domainsprojectslocationsregistrationsexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the `Registration` to export, in the format `projects/*/locations/*/registrations/*`.|
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
|body|body|[ExportRegistrationRequest](#schemaexportregistrationrequest)|false|none|

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

<h3 id="domainsprojectslocationsregistrationsexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.list

<a id="opIddomains.projects.locations.registrations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/registrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/registrations`

Lists the `Registration` resources in a project.

<h3 id="domainsprojectslocationsregistrationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which to list `Registration`s, specified in the format `projects/*/locations/*`.|
|filter|query|string|false|Filter expression to restrict the `Registration`s returned. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, a boolean, or an enum value. The comparison operator should be one of =, !=, >, <, >=, <=, or : for prefix or wildcard matches. For example, to filter to a specific domain name, use an expression like `domainName="example.com"`. You can also check for the existence of a field; for example, to find domains using custom DNS settings, use an expression like `dnsSettings.customDns:*`. You can also create compound filters by combining expressions with the `AND` and `OR` operators. For example, to find domains that are suspended or have specific issues flagged, use an expression like `(state=SUSPENDED) OR (issue:*)`.|
|pageSize|query|integer|false|Maximum number of results to return.|
|pageToken|query|string|false|When set to the `next_page_token` from a prior response, provides the next page of results.|
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
  "registrations": [
    {
      "contactSettings": {
        "adminContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
        "registrantContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "technicalContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
      },
      "createTime": "string",
      "dnsSettings": {
        "customDns": {
          "dsRecords": [
            {
              "algorithm": "ALGORITHM_UNSPECIFIED",
              "digest": "string",
              "digestType": "DIGEST_TYPE_UNSPECIFIED",
              "keyTag": 0
            }
          ],
          "nameServers": [
            "string"
          ]
        },
        "glueRecords": [
          {
            "hostName": "string",
            "ipv4Addresses": [
              "string"
            ],
            "ipv6Addresses": [
              "string"
            ]
          }
        ],
        "googleDomainsDns": {
          "dsRecords": [
            {
              "algorithm": "ALGORITHM_UNSPECIFIED",
              "digest": "string",
              "digestType": "DIGEST_TYPE_UNSPECIFIED",
              "keyTag": 0
            }
          ],
          "dsState": "DS_STATE_UNSPECIFIED",
          "nameServers": [
            "string"
          ]
        }
      },
      "domainName": "string",
      "expireTime": "string",
      "issues": [
        "ISSUE_UNSPECIFIED"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managementSettings": {
        "renewalMethod": "RENEWAL_METHOD_UNSPECIFIED",
        "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
      },
      "name": "string",
      "pendingContactSettings": {
        "adminContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
        "registrantContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "technicalContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
      },
      "registerFailureReason": "REGISTER_FAILURE_REASON_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "supportedPrivacy": [
        "CONTACT_PRIVACY_UNSPECIFIED"
      ],
      "transferFailureReason": "TRANSFER_FAILURE_REASON_UNSPECIFIED"
    }
  ]
}
```

<h3 id="domainsprojectslocationsregistrationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRegistrationsResponse](#schemalistregistrationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.import

<a id="opIddomains.projects.locations.registrations.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/registrations:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "domainName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/{parent}/registrations:import`

Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.

> Body parameter

```json
{
  "domainName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="domainsprojectslocationsregistrationsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the Registration. Must be in the format `projects/*/locations/*`.|
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
|body|body|[ImportDomainRequest](#schemaimportdomainrequest)|false|none|
|» domainName|body|string|false|Required. The domain name. Unicode domain names must be expressed in Punycode format.|
|» labels|body|object|false|Set of labels associated with the `Registration`.|
|» » **additionalProperties**|body|string|false|none|

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

<h3 id="domainsprojectslocationsregistrationsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.register

<a id="opIddomains.projects.locations.registrations.register"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/registrations:register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contactNotices": [
      "CONTACT_NOTICE_UNSPECIFIED"
    ],
    "domainNotices": [
      "DOMAIN_NOTICE_UNSPECIFIED"
    ],
    "registration": {
      "contactSettings": {
        "adminContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
        "registrantContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "technicalContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
      },
      "dnsSettings": {
        "customDns": {
          "dsRecords": [
            {
              "algorithm": "ALGORITHM_UNSPECIFIED",
              "digest": "string",
              "digestType": "DIGEST_TYPE_UNSPECIFIED",
              "keyTag": 0
            }
          ],
          "nameServers": [
            "string"
          ]
        },
        "glueRecords": [
          {
            "hostName": "string",
            "ipv4Addresses": [
              "string"
            ],
            "ipv6Addresses": [
              "string"
            ]
          }
        ],
        "googleDomainsDns": {
          "dsState": "DS_STATE_UNSPECIFIED"
        }
      },
      "domainName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managementSettings": {
        "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
      }
    },
    "validateOnly": true,
    "yearlyPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  }'
```

`POST /v1beta1/{parent}/registrations:register`

Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.

> Body parameter

```json
{
  "contactNotices": [
    "CONTACT_NOTICE_UNSPECIFIED"
  ],
  "domainNotices": [
    "DOMAIN_NOTICE_UNSPECIFIED"
  ],
  "registration": {
    "contactSettings": {
      "adminContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
      "registrantContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "technicalContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
    },
    "dnsSettings": {
      "customDns": {
        "dsRecords": [
          {
            "algorithm": "ALGORITHM_UNSPECIFIED",
            "digest": "string",
            "digestType": "DIGEST_TYPE_UNSPECIFIED",
            "keyTag": 0
          }
        ],
        "nameServers": [
          "string"
        ]
      },
      "glueRecords": [
        {
          "hostName": "string",
          "ipv4Addresses": [
            "string"
          ],
          "ipv6Addresses": [
            "string"
          ]
        }
      ],
      "googleDomainsDns": {
        "dsState": "DS_STATE_UNSPECIFIED"
      }
    },
    "domainName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "managementSettings": {
      "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
    }
  },
  "validateOnly": true,
  "yearlyPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

<h3 id="domainsprojectslocationsregistrationsregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`.|
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
|body|body|[RegisterDomainRequest](#schemaregisterdomainrequest)|false|none|
|» contactNotices|body|[string]|false|The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in `registration.contact_settings`.|
|» domainNotices|body|[string]|false|The list of domain notices that you acknowledge. Call `RetrieveRegisterParameters` to see the notices that need acknowledgement.|
|» registration|body|[Registration](#schemaregistration)|false|Required. The complete `Registration` resource to be created.|
|» validateOnly|body|boolean|false|When true, only validation is performed, without actually registering the domain. Follows: https://cloud.google.com/apis/design/design_patterns#request_validation|
|» yearlyPrice|body|[Money](#schemamoney)|false|Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from RetrieveRegisterParameters or SearchDomains calls.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» contactNotices|CONTACT_NOTICE_UNSPECIFIED|
|» contactNotices|PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT|
|» domainNotices|DOMAIN_NOTICE_UNSPECIFIED|
|» domainNotices|HSTS_PRELOADED|

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

<h3 id="domainsprojectslocationsregistrationsregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.transfer

<a id="opIddomains.projects.locations.registrations.transfer"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/registrations:transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorizationCode": {
      "code": "string"
    },
    "contactNotices": [
      "CONTACT_NOTICE_UNSPECIFIED"
    ],
    "registration": {
      "contactSettings": {
        "adminContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
        "registrantContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "technicalContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
      },
      "dnsSettings": {
        "customDns": {
          "dsRecords": [
            {
              "algorithm": "ALGORITHM_UNSPECIFIED",
              "digest": "string",
              "digestType": "DIGEST_TYPE_UNSPECIFIED",
              "keyTag": 0
            }
          ],
          "nameServers": [
            "string"
          ]
        },
        "glueRecords": [
          {
            "hostName": "string",
            "ipv4Addresses": [
              "string"
            ],
            "ipv6Addresses": [
              "string"
            ]
          }
        ],
        "googleDomainsDns": {
          "dsState": "DS_STATE_UNSPECIFIED"
        }
      },
      "domainName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managementSettings": {
        "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
      }
    },
    "validateOnly": true,
    "yearlyPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  }'
```

`POST /v1beta1/{parent}/registrations:transfer`

Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

> Body parameter

```json
{
  "authorizationCode": {
    "code": "string"
  },
  "contactNotices": [
    "CONTACT_NOTICE_UNSPECIFIED"
  ],
  "registration": {
    "contactSettings": {
      "adminContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
      "registrantContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "technicalContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
    },
    "dnsSettings": {
      "customDns": {
        "dsRecords": [
          {
            "algorithm": "ALGORITHM_UNSPECIFIED",
            "digest": "string",
            "digestType": "DIGEST_TYPE_UNSPECIFIED",
            "keyTag": 0
          }
        ],
        "nameServers": [
          "string"
        ]
      },
      "glueRecords": [
        {
          "hostName": "string",
          "ipv4Addresses": [
            "string"
          ],
          "ipv6Addresses": [
            "string"
          ]
        }
      ],
      "googleDomainsDns": {
        "dsState": "DS_STATE_UNSPECIFIED"
      }
    },
    "domainName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "managementSettings": {
      "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
    }
  },
  "validateOnly": true,
  "yearlyPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

<h3 id="domainsprojectslocationsregistrationstransfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the `Registration`. Must be in the format `projects/*/locations/*`.|
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
|body|body|[TransferDomainRequest](#schematransferdomainrequest)|false|none|
|» authorizationCode|body|[AuthorizationCode](#schemaauthorizationcode)|false|The domain's transfer authorization code. You can obtain this from the domain's current registrar.|
|» contactNotices|body|[string]|false|The list of contact notices that you acknowledge. The notices needed here depend on the values specified in `registration.contact_settings`.|
|» registration|body|[Registration](#schemaregistration)|false|Required. The complete `Registration` resource to be created. You can leave `registration.dns_settings` unset to import the domain's current DNS configuration from its current registrar. Use this option only if you are sure that the domain's current DNS service does not cease upon transfer, as is often the case for DNS services provided for free by the registrar.|
|» validateOnly|body|boolean|false|Validate the request without actually transferring the domain.|
|» yearlyPrice|body|[Money](#schemamoney)|false|Required. Acknowledgement of the price to transfer or renew the domain for one year. Call `RetrieveTransferParameters` to obtain the price, which you must acknowledge.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» contactNotices|CONTACT_NOTICE_UNSPECIFIED|
|» contactNotices|PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT|

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

<h3 id="domainsprojectslocationsregistrationstransfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.configureContactSettings

<a id="opIddomains.projects.locations.registrations.configureContactSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:configureContactSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contactNotices": [
      "CONTACT_NOTICE_UNSPECIFIED"
    ],
    "contactSettings": {
      "adminContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
      "registrantContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "technicalContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
    },
    "updateMask": "string",
    "validateOnly": true
  }'
```

`POST /v1beta1/{registration}:configureContactSettings`

Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .

> Body parameter

```json
{
  "contactNotices": [
    "CONTACT_NOTICE_UNSPECIFIED"
  ],
  "contactSettings": {
    "adminContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
    "registrantContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "technicalContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
  },
  "updateMask": "string",
  "validateOnly": true
}
```

<h3 id="domainsprojectslocationsregistrationsconfigurecontactsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration|path|string|true|Required. The name of the `Registration` whose contact settings are being updated, in the format `projects/*/locations/*/registrations/*`.|
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
|body|body|[ConfigureContactSettingsRequest](#schemaconfigurecontactsettingsrequest)|false|none|
|» contactNotices|body|[string]|false|The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in `contact_settings`.|
|» contactSettings|body|[ContactSettings](#schemacontactsettings)|false|Fields of the `ContactSettings` to update.|
|» updateMask|body|string(google-fieldmask)|false|Required. The field mask describing which fields to update as a comma-separated list. For example, if only the registrant contact is being updated, the `update_mask` is `"registrant_contact"`.|
|» validateOnly|body|boolean|false|Validate the request without actually updating the contact settings.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» contactNotices|CONTACT_NOTICE_UNSPECIFIED|
|» contactNotices|PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT|

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

<h3 id="domainsprojectslocationsregistrationsconfigurecontactsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.configureDnsSettings

<a id="opIddomains.projects.locations.registrations.configureDnsSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:configureDnsSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dnsSettings": {
      "customDns": {
        "dsRecords": [
          {
            "algorithm": "ALGORITHM_UNSPECIFIED",
            "digest": "string",
            "digestType": "DIGEST_TYPE_UNSPECIFIED",
            "keyTag": 0
          }
        ],
        "nameServers": [
          "string"
        ]
      },
      "glueRecords": [
        {
          "hostName": "string",
          "ipv4Addresses": [
            "string"
          ],
          "ipv6Addresses": [
            "string"
          ]
        }
      ],
      "googleDomainsDns": {
        "dsState": "DS_STATE_UNSPECIFIED"
      }
    },
    "updateMask": "string",
    "validateOnly": true
  }'
```

`POST /v1beta1/{registration}:configureDnsSettings`

Updates a `Registration`'s DNS settings.

> Body parameter

```json
{
  "dnsSettings": {
    "customDns": {
      "dsRecords": [
        {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "digest": "string",
          "digestType": "DIGEST_TYPE_UNSPECIFIED",
          "keyTag": 0
        }
      ],
      "nameServers": [
        "string"
      ]
    },
    "glueRecords": [
      {
        "hostName": "string",
        "ipv4Addresses": [
          "string"
        ],
        "ipv6Addresses": [
          "string"
        ]
      }
    ],
    "googleDomainsDns": {
      "dsState": "DS_STATE_UNSPECIFIED"
    }
  },
  "updateMask": "string",
  "validateOnly": true
}
```

<h3 id="domainsprojectslocationsregistrationsconfigurednssettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration|path|string|true|Required. The name of the `Registration` whose DNS settings are being updated, in the format `projects/*/locations/*/registrations/*`.|
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
|body|body|[ConfigureDnsSettingsRequest](#schemaconfigurednssettingsrequest)|false|none|
|» dnsSettings|body|[DnsSettings](#schemadnssettings)|false|Fields of the `DnsSettings` to update.|
|» updateMask|body|string(google-fieldmask)|false|Required. The field mask describing which fields to update as a comma-separated list. For example, if only the name servers are being updated for an existing Custom DNS configuration, the `update_mask` is `"custom_dns.name_servers"`. When changing the DNS provider from one type to another, pass the new provider's field name as part of the field mask. For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the `update_mask` is `"custom_dns"`. //|
|» validateOnly|body|boolean|false|Validate the request without actually updating the DNS settings.|

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

<h3 id="domainsprojectslocationsregistrationsconfigurednssettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.configureManagementSettings

<a id="opIddomains.projects.locations.registrations.configureManagementSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:configureManagementSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "managementSettings": {
      "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
    },
    "updateMask": "string"
  }'
```

`POST /v1beta1/{registration}:configureManagementSettings`

Updates a `Registration`'s management settings.

> Body parameter

```json
{
  "managementSettings": {
    "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
  },
  "updateMask": "string"
}
```

<h3 id="domainsprojectslocationsregistrationsconfiguremanagementsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration|path|string|true|Required. The name of the `Registration` whose management settings are being updated, in the format `projects/*/locations/*/registrations/*`.|
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
|body|body|[ConfigureManagementSettingsRequest](#schemaconfiguremanagementsettingsrequest)|false|none|
|» managementSettings|body|[ManagementSettings](#schemamanagementsettings)|false|Fields of the `ManagementSettings` to update.|
|» updateMask|body|string(google-fieldmask)|false|Required. The field mask describing which fields to update as a comma-separated list. For example, if only the transfer lock is being updated, the `update_mask` is `"transfer_lock_state"`.|

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

<h3 id="domainsprojectslocationsregistrationsconfiguremanagementsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.resetAuthorizationCode

<a id="opIddomains.projects.locations.registrations.resetAuthorizationCode"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:resetAuthorizationCode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{registration}:resetAuthorizationCode`

Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.

> Body parameter

```json
{}
```

<h3 id="domainsprojectslocationsregistrationsresetauthorizationcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration|path|string|true|Required. The name of the `Registration` whose authorization code is being reset, in the format `projects/*/locations/*/registrations/*`.|
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
|body|body|[ResetAuthorizationCodeRequest](#schemaresetauthorizationcoderequest)|false|none|

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
  "code": "string"
}
```

<h3 id="domainsprojectslocationsregistrationsresetauthorizationcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuthorizationCode](#schemaauthorizationcode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.retrieveAuthorizationCode

<a id="opIddomains.projects.locations.registrations.retrieveAuthorizationCode"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:retrieveAuthorizationCode \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{registration}:retrieveAuthorizationCode`

Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.

<h3 id="domainsprojectslocationsregistrationsretrieveauthorizationcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registration|path|string|true|Required. The name of the `Registration` whose authorization code is being retrieved, in the format `projects/*/locations/*/registrations/*`.|
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
  "code": "string"
}
```

<h3 id="domainsprojectslocationsregistrationsretrieveauthorizationcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuthorizationCode](#schemaauthorizationcode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.getIamPolicy

<a id="opIddomains.projects.locations.registrations.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="domainsprojectslocationsregistrationsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|options.requestedPolicyVersion|query|integer|false|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="domainsprojectslocationsregistrationsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.setIamPolicy

<a id="opIddomains.projects.locations.registrations.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
      "bindings": [
        {
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string",
      "version": 0
    },
    "updateMask": "string"
  }'
```

`POST /v1beta1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

> Body parameter

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  },
  "updateMask": "string"
}
```

<h3 id="domainsprojectslocationsregistrationssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="domainsprojectslocationsregistrationssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## domains.projects.locations.registrations.testIamPermissions

<a id="opIddomains.projects.locations.registrations.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v1beta1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="domainsprojectslocationsregistrationstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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

<h3 id="domainsprojectslocationsregistrationstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AuditConfig">AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditconfig"></a>
<a id="schema_AuditConfig"></a>
<a id="tocSauditconfig"></a>
<a id="tocsauditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[AuditLogConfig](#schemaauditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_AuditLogConfig">AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogconfig"></a>
<a id="schema_AuditLogConfig"></a>
<a id="tocSauditlogconfig"></a>
<a id="tocsauditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

<h2 id="tocS_AuthorizationCode">AuthorizationCode</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcode"></a>
<a id="schema_AuthorizationCode"></a>
<a id="tocSauthorizationcode"></a>
<a id="tocsauthorizationcode"></a>

```json
{
  "code": "string"
}
```

Defines an authorization code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The Authorization Code in ASCII. It can be used to transfer the domain to or from another registrar.|

<h2 id="tocS_Binding">Binding</h2>
<!-- backwards compatibility -->
<a id="schemabinding"></a>
<a id="schema_Binding"></a>
<a id="tocSbinding"></a>
<a id="tocsbinding"></a>

```json
{
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_ConfigureContactSettingsRequest">ConfigureContactSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurecontactsettingsrequest"></a>
<a id="schema_ConfigureContactSettingsRequest"></a>
<a id="tocSconfigurecontactsettingsrequest"></a>
<a id="tocsconfigurecontactsettingsrequest"></a>

```json
{
  "contactNotices": [
    "CONTACT_NOTICE_UNSPECIFIED"
  ],
  "contactSettings": {
    "adminContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
    "registrantContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "technicalContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
  },
  "updateMask": "string",
  "validateOnly": true
}
```

Request for the `ConfigureContactSettings` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactNotices|[string]|false|none|The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in `contact_settings`.|
|contactSettings|[ContactSettings](#schemacontactsettings)|false|none|Fields of the `ContactSettings` to update.|
|updateMask|string(google-fieldmask)|false|none|Required. The field mask describing which fields to update as a comma-separated list. For example, if only the registrant contact is being updated, the `update_mask` is `"registrant_contact"`.|
|validateOnly|boolean|false|none|Validate the request without actually updating the contact settings.|

#### Enumerated Values

|Property|Value|
|---|---|
|contactNotices|CONTACT_NOTICE_UNSPECIFIED|
|contactNotices|PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT|

<h2 id="tocS_ConfigureDnsSettingsRequest">ConfigureDnsSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurednssettingsrequest"></a>
<a id="schema_ConfigureDnsSettingsRequest"></a>
<a id="tocSconfigurednssettingsrequest"></a>
<a id="tocsconfigurednssettingsrequest"></a>

```json
{
  "dnsSettings": {
    "customDns": {
      "dsRecords": [
        {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "digest": "string",
          "digestType": "DIGEST_TYPE_UNSPECIFIED",
          "keyTag": 0
        }
      ],
      "nameServers": [
        "string"
      ]
    },
    "glueRecords": [
      {
        "hostName": "string",
        "ipv4Addresses": [
          "string"
        ],
        "ipv6Addresses": [
          "string"
        ]
      }
    ],
    "googleDomainsDns": {
      "dsRecords": [
        {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "digest": "string",
          "digestType": "DIGEST_TYPE_UNSPECIFIED",
          "keyTag": 0
        }
      ],
      "dsState": "DS_STATE_UNSPECIFIED",
      "nameServers": [
        "string"
      ]
    }
  },
  "updateMask": "string",
  "validateOnly": true
}
```

Request for the `ConfigureDnsSettings` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dnsSettings|[DnsSettings](#schemadnssettings)|false|none|Fields of the `DnsSettings` to update.|
|updateMask|string(google-fieldmask)|false|none|Required. The field mask describing which fields to update as a comma-separated list. For example, if only the name servers are being updated for an existing Custom DNS configuration, the `update_mask` is `"custom_dns.name_servers"`. When changing the DNS provider from one type to another, pass the new provider's field name as part of the field mask. For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the `update_mask` is `"custom_dns"`. //|
|validateOnly|boolean|false|none|Validate the request without actually updating the DNS settings.|

<h2 id="tocS_ConfigureManagementSettingsRequest">ConfigureManagementSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguremanagementsettingsrequest"></a>
<a id="schema_ConfigureManagementSettingsRequest"></a>
<a id="tocSconfiguremanagementsettingsrequest"></a>
<a id="tocsconfiguremanagementsettingsrequest"></a>

```json
{
  "managementSettings": {
    "renewalMethod": "RENEWAL_METHOD_UNSPECIFIED",
    "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
  },
  "updateMask": "string"
}
```

Request for the `ConfigureManagementSettings` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managementSettings|[ManagementSettings](#schemamanagementsettings)|false|none|Fields of the `ManagementSettings` to update.|
|updateMask|string(google-fieldmask)|false|none|Required. The field mask describing which fields to update as a comma-separated list. For example, if only the transfer lock is being updated, the `update_mask` is `"transfer_lock_state"`.|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "email": "string",
  "faxNumber": "string",
  "phoneNumber": "string",
  "postalAddress": {
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

Details required for a contact associated with a `Registration`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Required. Email address of the contact.|
|faxNumber|string|false|none|Fax number of the contact in international format. For example, `"+1-800-555-0123"`.|
|phoneNumber|string|false|none|Required. Phone number of the contact in international format. For example, `"+1-800-555-0123"`.|
|postalAddress|[PostalAddress](#schemapostaladdress)|false|none|Required. Postal address of the contact.|

<h2 id="tocS_ContactSettings">ContactSettings</h2>
<!-- backwards compatibility -->
<a id="schemacontactsettings"></a>
<a id="schema_ContactSettings"></a>
<a id="tocScontactsettings"></a>
<a id="tocscontactsettings"></a>

```json
{
  "adminContact": {
    "email": "string",
    "faxNumber": "string",
    "phoneNumber": "string",
    "postalAddress": {
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
  "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
  "registrantContact": {
    "email": "string",
    "faxNumber": "string",
    "phoneNumber": "string",
    "postalAddress": {
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
  "technicalContact": {
    "email": "string",
    "faxNumber": "string",
    "phoneNumber": "string",
    "postalAddress": {
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
}
```

Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminContact|[Contact](#schemacontact)|false|none|Required. The administrative contact for the `Registration`.|
|privacy|string|false|none|Required. Privacy setting for the contacts associated with the `Registration`.|
|registrantContact|[Contact](#schemacontact)|false|none|Required. The registrant contact for the `Registration`. *Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.* *Warning: For new `Registration`s, the registrant receives an email confirmation that they must complete within 15 days to avoid domain suspension.*|
|technicalContact|[Contact](#schemacontact)|false|none|Required. The technical contact for the `Registration`.|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|CONTACT_PRIVACY_UNSPECIFIED|
|privacy|PUBLIC_CONTACT_DATA|
|privacy|PRIVATE_CONTACT_DATA|
|privacy|REDACTED_CONTACT_DATA|

<h2 id="tocS_CustomDns">CustomDns</h2>
<!-- backwards compatibility -->
<a id="schemacustomdns"></a>
<a id="schema_CustomDns"></a>
<a id="tocScustomdns"></a>
<a id="tocscustomdns"></a>

```json
{
  "dsRecords": [
    {
      "algorithm": "ALGORITHM_UNSPECIFIED",
      "digest": "string",
      "digestType": "DIGEST_TYPE_UNSPECIFIED",
      "keyTag": 0
    }
  ],
  "nameServers": [
    "string"
  ]
}
```

Configuration for an arbitrary DNS provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dsRecords|[[DsRecord](#schemadsrecord)]|false|none|The list of DS records for this domain, which are used to enable DNSSEC. The domain's DNS provider can provide the values to set here. If this field is empty, DNSSEC is disabled.|
|nameServers|[string]|false|none|Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain name, with Unicode domain names expressed in Punycode format.|

<h2 id="tocS_DnsSettings">DnsSettings</h2>
<!-- backwards compatibility -->
<a id="schemadnssettings"></a>
<a id="schema_DnsSettings"></a>
<a id="tocSdnssettings"></a>
<a id="tocsdnssettings"></a>

```json
{
  "customDns": {
    "dsRecords": [
      {
        "algorithm": "ALGORITHM_UNSPECIFIED",
        "digest": "string",
        "digestType": "DIGEST_TYPE_UNSPECIFIED",
        "keyTag": 0
      }
    ],
    "nameServers": [
      "string"
    ]
  },
  "glueRecords": [
    {
      "hostName": "string",
      "ipv4Addresses": [
        "string"
      ],
      "ipv6Addresses": [
        "string"
      ]
    }
  ],
  "googleDomainsDns": {
    "dsRecords": [
      {
        "algorithm": "ALGORITHM_UNSPECIFIED",
        "digest": "string",
        "digestType": "DIGEST_TYPE_UNSPECIFIED",
        "keyTag": 0
      }
    ],
    "dsState": "DS_STATE_UNSPECIFIED",
    "nameServers": [
      "string"
    ]
  }
}
```

Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDns|[CustomDns](#schemacustomdns)|false|none|An arbitrary DNS provider identified by its name servers.|
|glueRecords|[[GlueRecord](#schemagluerecord)]|false|none|The list of glue records for this `Registration`. Commonly empty.|
|googleDomainsDns|[GoogleDomainsDns](#schemagoogledomainsdns)|false|none|The free DNS zone provided by [Google Domains](https://domains.google/).|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "domainName": "string",
  "resourceState": "RESOURCE_STATE_UNSPECIFIED",
  "yearlyPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

A domain that the calling user manages in Google Domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|string|false|none|The domain name. Unicode domain names are expressed in Punycode format.|
|resourceState|string|false|none|The state of this domain as a `Registration` resource.|
|yearlyPrice|[Money](#schemamoney)|false|none|Price to renew the domain for one year. Only set when `resource_state` is `IMPORTABLE`.|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceState|RESOURCE_STATE_UNSPECIFIED|
|resourceState|IMPORTABLE|
|resourceState|UNSUPPORTED|
|resourceState|SUSPENDED|
|resourceState|EXPIRED|
|resourceState|DELETED|

<h2 id="tocS_DsRecord">DsRecord</h2>
<!-- backwards compatibility -->
<a id="schemadsrecord"></a>
<a id="schema_DsRecord"></a>
<a id="tocSdsrecord"></a>
<a id="tocsdsrecord"></a>

```json
{
  "algorithm": "ALGORITHM_UNSPECIFIED",
  "digest": "string",
  "digestType": "DIGEST_TYPE_UNSPECIFIED",
  "keyTag": 0
}
```

Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|The algorithm used to generate the referenced DNSKEY.|
|digest|string|false|none|The digest generated from the referenced DNSKEY.|
|digestType|string|false|none|The hash function used to generate the digest of the referenced DNSKEY.|
|keyTag|integer(int32)|false|none|The key tag of the record. Must be set in range 0 -- 65535.|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|ALGORITHM_UNSPECIFIED|
|algorithm|RSAMD5|
|algorithm|DH|
|algorithm|DSA|
|algorithm|ECC|
|algorithm|RSASHA1|
|algorithm|DSANSEC3SHA1|
|algorithm|RSASHA1NSEC3SHA1|
|algorithm|RSASHA256|
|algorithm|RSASHA512|
|algorithm|ECCGOST|
|algorithm|ECDSAP256SHA256|
|algorithm|ECDSAP384SHA384|
|algorithm|ED25519|
|algorithm|ED448|
|algorithm|INDIRECT|
|algorithm|PRIVATEDNS|
|algorithm|PRIVATEOID|
|digestType|DIGEST_TYPE_UNSPECIFIED|
|digestType|SHA1|
|digestType|SHA256|
|digestType|GOST3411|
|digestType|SHA384|

<h2 id="tocS_ExportRegistrationRequest">ExportRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportregistrationrequest"></a>
<a id="schema_ExportRegistrationRequest"></a>
<a id="tocSexportregistrationrequest"></a>
<a id="tocsexportregistrationrequest"></a>

```json
{}
```

Request for the `ExportRegistration` method.

<h2 id="tocS_Expr">Expr</h2>
<!-- backwards compatibility -->
<a id="schemaexpr"></a>
<a id="schema_Expr"></a>
<a id="tocSexpr"></a>
<a id="tocsexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_GlueRecord">GlueRecord</h2>
<!-- backwards compatibility -->
<a id="schemagluerecord"></a>
<a id="schema_GlueRecord"></a>
<a id="tocSgluerecord"></a>
<a id="tocsgluerecord"></a>

```json
{
  "hostName": "string",
  "ipv4Addresses": [
    "string"
  ],
  "ipv6Addresses": [
    "string"
  ]
}
```

Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostName|string|false|none|Required. Domain name of the host in Punycode format.|
|ipv4Addresses|[string]|false|none|List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. `198.51.100.1`). At least one of `ipv4_address` and `ipv6_address` must be set.|
|ipv6Addresses|[string]|false|none|List of IPv6 addresses corresponding to this host in the standard hexadecimal format (e.g. `2001:db8::`). At least one of `ipv4_address` and `ipv6_address` must be set.|

<h2 id="tocS_GoogleDomainsDns">GoogleDomainsDns</h2>
<!-- backwards compatibility -->
<a id="schemagoogledomainsdns"></a>
<a id="schema_GoogleDomainsDns"></a>
<a id="tocSgoogledomainsdns"></a>
<a id="tocsgoogledomainsdns"></a>

```json
{
  "dsRecords": [
    {
      "algorithm": "ALGORITHM_UNSPECIFIED",
      "digest": "string",
      "digestType": "DIGEST_TYPE_UNSPECIFIED",
      "keyTag": 0
    }
  ],
  "dsState": "DS_STATE_UNSPECIFIED",
  "nameServers": [
    "string"
  ]
}
```

Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dsRecords|[[DsRecord](#schemadsrecord)]|false|read-only|Output only. The list of DS records published for this domain. The list is automatically populated when `ds_state` is `DS_RECORDS_PUBLISHED`, otherwise it remains empty.|
|dsState|string|false|none|Required. The state of DS records for this domain. Used to enable or disable automatic DNSSEC.|
|nameServers|[string]|false|read-only|Output only. A list of name servers that store the DNS zone for this domain. Each name server is a domain name, with Unicode domain names expressed in Punycode format. This field is automatically populated with the name servers assigned to the Google Domains DNS zone.|

#### Enumerated Values

|Property|Value|
|---|---|
|dsState|DS_STATE_UNSPECIFIED|
|dsState|DS_RECORDS_UNPUBLISHED|
|dsState|DS_RECORDS_PUBLISHED|

<h2 id="tocS_ImportDomainRequest">ImportDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportdomainrequest"></a>
<a id="schema_ImportDomainRequest"></a>
<a id="tocSimportdomainrequest"></a>
<a id="tocsimportdomainrequest"></a>

```json
{
  "domainName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request for the `ImportDomain` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|string|false|none|Required. The domain name. Unicode domain names must be expressed in Punycode format.|
|labels|object|false|none|Set of labels associated with the `Registration`.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
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
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListRegistrationsResponse">ListRegistrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistregistrationsresponse"></a>
<a id="schema_ListRegistrationsResponse"></a>
<a id="tocSlistregistrationsresponse"></a>
<a id="tocslistregistrationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "registrations": [
    {
      "contactSettings": {
        "adminContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
        "registrantContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "technicalContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
      },
      "createTime": "string",
      "dnsSettings": {
        "customDns": {
          "dsRecords": [
            {
              "algorithm": "ALGORITHM_UNSPECIFIED",
              "digest": "string",
              "digestType": "DIGEST_TYPE_UNSPECIFIED",
              "keyTag": 0
            }
          ],
          "nameServers": [
            "string"
          ]
        },
        "glueRecords": [
          {
            "hostName": "string",
            "ipv4Addresses": [
              "string"
            ],
            "ipv6Addresses": [
              "string"
            ]
          }
        ],
        "googleDomainsDns": {
          "dsRecords": [
            {
              "algorithm": "ALGORITHM_UNSPECIFIED",
              "digest": "string",
              "digestType": "DIGEST_TYPE_UNSPECIFIED",
              "keyTag": 0
            }
          ],
          "dsState": "DS_STATE_UNSPECIFIED",
          "nameServers": [
            "string"
          ]
        }
      },
      "domainName": "string",
      "expireTime": "string",
      "issues": [
        "ISSUE_UNSPECIFIED"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managementSettings": {
        "renewalMethod": "RENEWAL_METHOD_UNSPECIFIED",
        "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
      },
      "name": "string",
      "pendingContactSettings": {
        "adminContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
        "registrantContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
        "technicalContact": {
          "email": "string",
          "faxNumber": "string",
          "phoneNumber": "string",
          "postalAddress": {
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
      },
      "registerFailureReason": "REGISTER_FAILURE_REASON_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "supportedPrivacy": [
        "CONTACT_PRIVACY_UNSPECIFIED"
      ],
      "transferFailureReason": "TRANSFER_FAILURE_REASON_UNSPECIFIED"
    }
  ]
}
```

Response for the `ListRegistrations` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results.|
|registrations|[[Registration](#schemaregistration)]|false|none|A list of `Registration`s.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_ManagementSettings">ManagementSettings</h2>
<!-- backwards compatibility -->
<a id="schemamanagementsettings"></a>
<a id="schema_ManagementSettings"></a>
<a id="tocSmanagementsettings"></a>
<a id="tocsmanagementsettings"></a>

```json
{
  "renewalMethod": "RENEWAL_METHOD_UNSPECIFIED",
  "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
}
```

Defines renewal, billing, and transfer settings for a `Registration`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|renewalMethod|string|false|read-only|Output only. The renewal method for this `Registration`.|
|transferLockState|string|false|none|Controls whether the domain can be transferred to another registrar.|

#### Enumerated Values

|Property|Value|
|---|---|
|renewalMethod|RENEWAL_METHOD_UNSPECIFIED|
|renewalMethod|AUTOMATIC_RENEWAL|
|renewalMethod|MANUAL_RENEWAL|
|transferLockState|TRANSFER_LOCK_STATE_UNSPECIFIED|
|transferLockState|UNLOCKED|
|transferLockState|LOCKED|

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

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
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "createTime": "string",
  "endTime": "string",
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation. Output only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|API version used to start the operation.|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running.|
|statusDetail|string|false|none|Human-readable status of the operation, if any.|
|target|string|false|none|Server-defined resource path for the target of the operation.|
|verb|string|false|none|Name of the verb executed by the operation.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[AuditConfig](#schemaauditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

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

<h2 id="tocS_RegisterDomainRequest">RegisterDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdomainrequest"></a>
<a id="schema_RegisterDomainRequest"></a>
<a id="tocSregisterdomainrequest"></a>
<a id="tocsregisterdomainrequest"></a>

```json
{
  "contactNotices": [
    "CONTACT_NOTICE_UNSPECIFIED"
  ],
  "domainNotices": [
    "DOMAIN_NOTICE_UNSPECIFIED"
  ],
  "registration": {
    "contactSettings": {
      "adminContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
      "registrantContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "technicalContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
    },
    "createTime": "string",
    "dnsSettings": {
      "customDns": {
        "dsRecords": [
          {
            "algorithm": "ALGORITHM_UNSPECIFIED",
            "digest": "string",
            "digestType": "DIGEST_TYPE_UNSPECIFIED",
            "keyTag": 0
          }
        ],
        "nameServers": [
          "string"
        ]
      },
      "glueRecords": [
        {
          "hostName": "string",
          "ipv4Addresses": [
            "string"
          ],
          "ipv6Addresses": [
            "string"
          ]
        }
      ],
      "googleDomainsDns": {
        "dsRecords": [
          {
            "algorithm": "ALGORITHM_UNSPECIFIED",
            "digest": "string",
            "digestType": "DIGEST_TYPE_UNSPECIFIED",
            "keyTag": 0
          }
        ],
        "dsState": "DS_STATE_UNSPECIFIED",
        "nameServers": [
          "string"
        ]
      }
    },
    "domainName": "string",
    "expireTime": "string",
    "issues": [
      "ISSUE_UNSPECIFIED"
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "managementSettings": {
      "renewalMethod": "RENEWAL_METHOD_UNSPECIFIED",
      "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
    },
    "name": "string",
    "pendingContactSettings": {
      "adminContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
      "registrantContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "technicalContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
    },
    "registerFailureReason": "REGISTER_FAILURE_REASON_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "supportedPrivacy": [
      "CONTACT_PRIVACY_UNSPECIFIED"
    ],
    "transferFailureReason": "TRANSFER_FAILURE_REASON_UNSPECIFIED"
  },
  "validateOnly": true,
  "yearlyPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Request for the `RegisterDomain` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactNotices|[string]|false|none|The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in `registration.contact_settings`.|
|domainNotices|[string]|false|none|The list of domain notices that you acknowledge. Call `RetrieveRegisterParameters` to see the notices that need acknowledgement.|
|registration|[Registration](#schemaregistration)|false|none|Required. The complete `Registration` resource to be created.|
|validateOnly|boolean|false|none|When true, only validation is performed, without actually registering the domain. Follows: https://cloud.google.com/apis/design/design_patterns#request_validation|
|yearlyPrice|[Money](#schemamoney)|false|none|Required. Yearly price to register or renew the domain. The value that should be put here can be obtained from RetrieveRegisterParameters or SearchDomains calls.|

#### Enumerated Values

|Property|Value|
|---|---|
|contactNotices|CONTACT_NOTICE_UNSPECIFIED|
|contactNotices|PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT|
|domainNotices|DOMAIN_NOTICE_UNSPECIFIED|
|domainNotices|HSTS_PRELOADED|

<h2 id="tocS_RegisterParameters">RegisterParameters</h2>
<!-- backwards compatibility -->
<a id="schemaregisterparameters"></a>
<a id="schema_RegisterParameters"></a>
<a id="tocSregisterparameters"></a>
<a id="tocsregisterparameters"></a>

```json
{
  "availability": "AVAILABILITY_UNSPECIFIED",
  "domainName": "string",
  "domainNotices": [
    "DOMAIN_NOTICE_UNSPECIFIED"
  ],
  "supportedPrivacy": [
    "CONTACT_PRIVACY_UNSPECIFIED"
  ],
  "yearlyPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Parameters required to register a new domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|string|false|none|Indicates whether the domain is available for registration. This value is accurate when obtained by calling `RetrieveRegisterParameters`, but is approximate when obtained by calling `SearchDomains`.|
|domainName|string|false|none|The domain name. Unicode domain names are expressed in Punycode format.|
|domainNotices|[string]|false|none|Notices about special properties of the domain.|
|supportedPrivacy|[string]|false|none|Contact privacy options that the domain supports.|
|yearlyPrice|[Money](#schemamoney)|false|none|Price to register or renew the domain for one year.|

#### Enumerated Values

|Property|Value|
|---|---|
|availability|AVAILABILITY_UNSPECIFIED|
|availability|AVAILABLE|
|availability|UNAVAILABLE|
|availability|UNSUPPORTED|
|availability|UNKNOWN|
|domainNotices|DOMAIN_NOTICE_UNSPECIFIED|
|domainNotices|HSTS_PRELOADED|
|supportedPrivacy|CONTACT_PRIVACY_UNSPECIFIED|
|supportedPrivacy|PUBLIC_CONTACT_DATA|
|supportedPrivacy|PRIVATE_CONTACT_DATA|
|supportedPrivacy|REDACTED_CONTACT_DATA|

<h2 id="tocS_Registration">Registration</h2>
<!-- backwards compatibility -->
<a id="schemaregistration"></a>
<a id="schema_Registration"></a>
<a id="tocSregistration"></a>
<a id="tocsregistration"></a>

```json
{
  "contactSettings": {
    "adminContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
    "registrantContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "technicalContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
  },
  "createTime": "string",
  "dnsSettings": {
    "customDns": {
      "dsRecords": [
        {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "digest": "string",
          "digestType": "DIGEST_TYPE_UNSPECIFIED",
          "keyTag": 0
        }
      ],
      "nameServers": [
        "string"
      ]
    },
    "glueRecords": [
      {
        "hostName": "string",
        "ipv4Addresses": [
          "string"
        ],
        "ipv6Addresses": [
          "string"
        ]
      }
    ],
    "googleDomainsDns": {
      "dsRecords": [
        {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "digest": "string",
          "digestType": "DIGEST_TYPE_UNSPECIFIED",
          "keyTag": 0
        }
      ],
      "dsState": "DS_STATE_UNSPECIFIED",
      "nameServers": [
        "string"
      ]
    }
  },
  "domainName": "string",
  "expireTime": "string",
  "issues": [
    "ISSUE_UNSPECIFIED"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "managementSettings": {
    "renewalMethod": "RENEWAL_METHOD_UNSPECIFIED",
    "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
  },
  "name": "string",
  "pendingContactSettings": {
    "adminContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
    "registrantContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
    "technicalContact": {
      "email": "string",
      "faxNumber": "string",
      "phoneNumber": "string",
      "postalAddress": {
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
  },
  "registerFailureReason": "REGISTER_FAILURE_REASON_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "supportedPrivacy": [
    "CONTACT_PRIVACY_UNSPECIFIED"
  ],
  "transferFailureReason": "TRANSFER_FAILURE_REASON_UNSPECIFIED"
}
```

The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactSettings|[ContactSettings](#schemacontactsettings)|false|none|Required. Settings for contact information linked to the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureContactSettings` method.|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of the `Registration` resource.|
|dnsSettings|[DnsSettings](#schemadnssettings)|false|none|Settings controlling the DNS configuration of the `Registration`. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureDnsSettings` method.|
|domainName|string|false|none|Required. Immutable. The domain name. Unicode domain names must be expressed in Punycode format.|
|expireTime|string(google-datetime)|false|read-only|Output only. The expiration timestamp of the `Registration`.|
|issues|[string]|false|read-only|Output only. The set of issues with the `Registration` that require attention.|
|labels|object|false|none|Set of labels associated with the `Registration`.|
|managementSettings|[ManagementSettings](#schemamanagementsettings)|false|none|Settings for management of the `Registration`, including renewal, billing, and transfer. You cannot update these with the `UpdateRegistration` method. To update these settings, use the `ConfigureManagementSettings` method.|
|name|string|false|read-only|Output only. Name of the `Registration` resource, in the format `projects/*/locations/*/registrations/`.|
|pendingContactSettings|[ContactSettings](#schemacontactsettings)|false|none|Output only. Pending contact settings for the `Registration`. Updates to the `contact_settings` field that change its `registrant_contact` or `privacy` fields require email confirmation by the `registrant_contact` before taking effect. This field is set only if there are pending updates to the `contact_settings` that have not been confirmed. To confirm the changes, the `registrant_contact` must follow the instructions in the email they receive.|
|registerFailureReason|string|false|read-only|Output only. The reason the domain registration failed. Only set for domains in REGISTRATION_FAILED state.|
|state|string|false|read-only|Output only. The state of the `Registration`|
|supportedPrivacy|[string]|false|read-only|Output only. Set of options for the `contact_settings.privacy` field that this `Registration` supports.|
|transferFailureReason|string|false|read-only|Output only. The reason the domain transfer failed. Only set for domains in TRANSFER_FAILED state.|

#### Enumerated Values

|Property|Value|
|---|---|
|issues|ISSUE_UNSPECIFIED|
|issues|CONTACT_SUPPORT|
|issues|UNVERIFIED_EMAIL|
|registerFailureReason|REGISTER_FAILURE_REASON_UNSPECIFIED|
|registerFailureReason|REGISTER_FAILURE_REASON_UNKNOWN|
|registerFailureReason|DOMAIN_NOT_AVAILABLE|
|registerFailureReason|INVALID_CONTACTS|
|state|STATE_UNSPECIFIED|
|state|REGISTRATION_PENDING|
|state|REGISTRATION_FAILED|
|state|TRANSFER_PENDING|
|state|TRANSFER_FAILED|
|state|IMPORT_PENDING|
|state|ACTIVE|
|state|SUSPENDED|
|state|EXPORTED|
|supportedPrivacy|CONTACT_PRIVACY_UNSPECIFIED|
|supportedPrivacy|PUBLIC_CONTACT_DATA|
|supportedPrivacy|PRIVATE_CONTACT_DATA|
|supportedPrivacy|REDACTED_CONTACT_DATA|
|transferFailureReason|TRANSFER_FAILURE_REASON_UNSPECIFIED|
|transferFailureReason|TRANSFER_FAILURE_REASON_UNKNOWN|
|transferFailureReason|EMAIL_CONFIRMATION_FAILURE|
|transferFailureReason|DOMAIN_NOT_REGISTERED|
|transferFailureReason|DOMAIN_HAS_TRANSFER_LOCK|
|transferFailureReason|INVALID_AUTHORIZATION_CODE|
|transferFailureReason|TRANSFER_CANCELLED|
|transferFailureReason|TRANSFER_REJECTED|
|transferFailureReason|INVALID_REGISTRANT_EMAIL_ADDRESS|
|transferFailureReason|DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER|
|transferFailureReason|TRANSFER_ALREADY_PENDING|

<h2 id="tocS_ResetAuthorizationCodeRequest">ResetAuthorizationCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetauthorizationcoderequest"></a>
<a id="schema_ResetAuthorizationCodeRequest"></a>
<a id="tocSresetauthorizationcoderequest"></a>
<a id="tocsresetauthorizationcoderequest"></a>

```json
{}
```

Request for the `ResetAuthorizationCode` method.

<h2 id="tocS_RetrieveImportableDomainsResponse">RetrieveImportableDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaretrieveimportabledomainsresponse"></a>
<a id="schema_RetrieveImportableDomainsResponse"></a>
<a id="tocSretrieveimportabledomainsresponse"></a>
<a id="tocsretrieveimportabledomainsresponse"></a>

```json
{
  "domains": [
    {
      "domainName": "string",
      "resourceState": "RESOURCE_STATE_UNSPECIFIED",
      "yearlyPrice": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response for the `RetrieveImportableDomains` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[[Domain](#schemadomain)]|false|none|A list of domains that the calling user manages in Google Domains.|
|nextPageToken|string|false|none|When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results.|

<h2 id="tocS_RetrieveRegisterParametersResponse">RetrieveRegisterParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaretrieveregisterparametersresponse"></a>
<a id="schema_RetrieveRegisterParametersResponse"></a>
<a id="tocSretrieveregisterparametersresponse"></a>
<a id="tocsretrieveregisterparametersresponse"></a>

```json
{
  "registerParameters": {
    "availability": "AVAILABILITY_UNSPECIFIED",
    "domainName": "string",
    "domainNotices": [
      "DOMAIN_NOTICE_UNSPECIFIED"
    ],
    "supportedPrivacy": [
      "CONTACT_PRIVACY_UNSPECIFIED"
    ],
    "yearlyPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  }
}
```

Response for the `RetrieveRegisterParameters` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registerParameters|[RegisterParameters](#schemaregisterparameters)|false|none|Parameters to use when calling the `RegisterDomain` method.|

<h2 id="tocS_RetrieveTransferParametersResponse">RetrieveTransferParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaretrievetransferparametersresponse"></a>
<a id="schema_RetrieveTransferParametersResponse"></a>
<a id="tocSretrievetransferparametersresponse"></a>
<a id="tocsretrievetransferparametersresponse"></a>

```json
{
  "transferParameters": {
    "currentRegistrar": "string",
    "currentRegistrarUri": "string",
    "domainName": "string",
    "nameServers": [
      "string"
    ],
    "supportedPrivacy": [
      "CONTACT_PRIVACY_UNSPECIFIED"
    ],
    "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED",
    "yearlyPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  }
}
```

Response for the `RetrieveTransferParameters` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferParameters|[TransferParameters](#schematransferparameters)|false|none|Parameters to use when calling the `TransferDomain` method.|

<h2 id="tocS_SearchDomainsResponse">SearchDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchdomainsresponse"></a>
<a id="schema_SearchDomainsResponse"></a>
<a id="tocSsearchdomainsresponse"></a>
<a id="tocssearchdomainsresponse"></a>

```json
{
  "registerParameters": [
    {
      "availability": "AVAILABILITY_UNSPECIFIED",
      "domainName": "string",
      "domainNotices": [
        "DOMAIN_NOTICE_UNSPECIFIED"
      ],
      "supportedPrivacy": [
        "CONTACT_PRIVACY_UNSPECIFIED"
      ],
      "yearlyPrice": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    }
  ]
}
```

Response for the `SearchDomains` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registerParameters|[[RegisterParameters](#schemaregisterparameters)]|false|none|Results of the domain name search.|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  },
  "updateMask": "string"
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

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

<h2 id="tocS_TestIamPermissionsRequest">TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsrequest"></a>
<a id="schema_TestIamPermissionsRequest"></a>
<a id="tocStestiampermissionsrequest"></a>
<a id="tocstestiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_TestIamPermissionsResponse">TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsresponse"></a>
<a id="schema_TestIamPermissionsResponse"></a>
<a id="tocStestiampermissionsresponse"></a>
<a id="tocstestiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|

<h2 id="tocS_TransferDomainRequest">TransferDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferdomainrequest"></a>
<a id="schema_TransferDomainRequest"></a>
<a id="tocStransferdomainrequest"></a>
<a id="tocstransferdomainrequest"></a>

```json
{
  "authorizationCode": {
    "code": "string"
  },
  "contactNotices": [
    "CONTACT_NOTICE_UNSPECIFIED"
  ],
  "registration": {
    "contactSettings": {
      "adminContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
      "registrantContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "technicalContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
    },
    "createTime": "string",
    "dnsSettings": {
      "customDns": {
        "dsRecords": [
          {
            "algorithm": "ALGORITHM_UNSPECIFIED",
            "digest": "string",
            "digestType": "DIGEST_TYPE_UNSPECIFIED",
            "keyTag": 0
          }
        ],
        "nameServers": [
          "string"
        ]
      },
      "glueRecords": [
        {
          "hostName": "string",
          "ipv4Addresses": [
            "string"
          ],
          "ipv6Addresses": [
            "string"
          ]
        }
      ],
      "googleDomainsDns": {
        "dsRecords": [
          {
            "algorithm": "ALGORITHM_UNSPECIFIED",
            "digest": "string",
            "digestType": "DIGEST_TYPE_UNSPECIFIED",
            "keyTag": 0
          }
        ],
        "dsState": "DS_STATE_UNSPECIFIED",
        "nameServers": [
          "string"
        ]
      }
    },
    "domainName": "string",
    "expireTime": "string",
    "issues": [
      "ISSUE_UNSPECIFIED"
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "managementSettings": {
      "renewalMethod": "RENEWAL_METHOD_UNSPECIFIED",
      "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED"
    },
    "name": "string",
    "pendingContactSettings": {
      "adminContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "privacy": "CONTACT_PRIVACY_UNSPECIFIED",
      "registrantContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
      "technicalContact": {
        "email": "string",
        "faxNumber": "string",
        "phoneNumber": "string",
        "postalAddress": {
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
    },
    "registerFailureReason": "REGISTER_FAILURE_REASON_UNSPECIFIED",
    "state": "STATE_UNSPECIFIED",
    "supportedPrivacy": [
      "CONTACT_PRIVACY_UNSPECIFIED"
    ],
    "transferFailureReason": "TRANSFER_FAILURE_REASON_UNSPECIFIED"
  },
  "validateOnly": true,
  "yearlyPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Request for the `TransferDomain` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationCode|[AuthorizationCode](#schemaauthorizationcode)|false|none|The domain's transfer authorization code. You can obtain this from the domain's current registrar.|
|contactNotices|[string]|false|none|The list of contact notices that you acknowledge. The notices needed here depend on the values specified in `registration.contact_settings`.|
|registration|[Registration](#schemaregistration)|false|none|Required. The complete `Registration` resource to be created. You can leave `registration.dns_settings` unset to import the domain's current DNS configuration from its current registrar. Use this option only if you are sure that the domain's current DNS service does not cease upon transfer, as is often the case for DNS services provided for free by the registrar.|
|validateOnly|boolean|false|none|Validate the request without actually transferring the domain.|
|yearlyPrice|[Money](#schemamoney)|false|none|Required. Acknowledgement of the price to transfer or renew the domain for one year. Call `RetrieveTransferParameters` to obtain the price, which you must acknowledge.|

#### Enumerated Values

|Property|Value|
|---|---|
|contactNotices|CONTACT_NOTICE_UNSPECIFIED|
|contactNotices|PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT|

<h2 id="tocS_TransferParameters">TransferParameters</h2>
<!-- backwards compatibility -->
<a id="schematransferparameters"></a>
<a id="schema_TransferParameters"></a>
<a id="tocStransferparameters"></a>
<a id="tocstransferparameters"></a>

```json
{
  "currentRegistrar": "string",
  "currentRegistrarUri": "string",
  "domainName": "string",
  "nameServers": [
    "string"
  ],
  "supportedPrivacy": [
    "CONTACT_PRIVACY_UNSPECIFIED"
  ],
  "transferLockState": "TRANSFER_LOCK_STATE_UNSPECIFIED",
  "yearlyPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Parameters required to transfer a domain from another registrar.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentRegistrar|string|false|none|The registrar that currently manages the domain.|
|currentRegistrarUri|string|false|none|The URL of the registrar that currently manages the domain.|
|domainName|string|false|none|The domain name. Unicode domain names are expressed in Punycode format.|
|nameServers|[string]|false|none|The name servers that currently store the configuration of the domain.|
|supportedPrivacy|[string]|false|none|Contact privacy options that the domain supports.|
|transferLockState|string|false|none|Indicates whether the domain is protected by a transfer lock. For a transfer to succeed, this must show `UNLOCKED`. To unlock a domain, go to its current registrar.|
|yearlyPrice|[Money](#schemamoney)|false|none|Price to transfer or renew the domain for one year.|

#### Enumerated Values

|Property|Value|
|---|---|
|supportedPrivacy|CONTACT_PRIVACY_UNSPECIFIED|
|supportedPrivacy|PUBLIC_CONTACT_DATA|
|supportedPrivacy|PRIVATE_CONTACT_DATA|
|supportedPrivacy|REDACTED_CONTACT_DATA|
|transferLockState|TRANSFER_LOCK_STATE_UNSPECIFIED|
|transferLockState|UNLOCKED|
|transferLockState|LOCKED|
