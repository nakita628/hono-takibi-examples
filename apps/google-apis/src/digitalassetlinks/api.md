<h1 id="digital-asset-links-api">Digital Asset Links API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Discovers relationships between online assets such as websites or mobile apps.

Base URLs:

* <a href="https://digitalassetlinks.googleapis.com/">https://digitalassetlinks.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/digital-asset-links/">External documentation</a>

<h1 id="digital-asset-links-api-assetlinks">assetlinks</h1>

## digitalassetlinks.assetlinks.bulkCheck

<a id="opIddigitalassetlinks.assetlinks.bulkCheck"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/assetlinks:bulkCheck \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allowGoogleInternalDataSources": true,
    "defaultRelation": "string",
    "defaultSource": {
      "androidApp": {
        "certificate": {
          "sha256Fingerprint": "string"
        },
        "packageName": "string"
      },
      "web": {
        "site": "string"
      }
    },
    "defaultTarget": {
      "androidApp": {
        "certificate": {
          "sha256Fingerprint": "string"
        },
        "packageName": "string"
      },
      "web": {
        "site": "string"
      }
    },
    "skipCacheLookup": true,
    "statements": [
      {
        "relation": "string",
        "source": {
          "androidApp": {
            "certificate": {
              "sha256Fingerprint": "string"
            },
            "packageName": "string"
          },
          "web": {
            "site": "string"
          }
        },
        "target": {
          "androidApp": {
            "certificate": {
              "sha256Fingerprint": "string"
            },
            "packageName": "string"
          },
          "web": {
            "site": "string"
          }
        }
      }
    ]
  }'
```

`POST /v1/assetlinks:bulkCheck`

Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.

> Body parameter

```json
{
  "allowGoogleInternalDataSources": true,
  "defaultRelation": "string",
  "defaultSource": {
    "androidApp": {
      "certificate": {
        "sha256Fingerprint": "string"
      },
      "packageName": "string"
    },
    "web": {
      "site": "string"
    }
  },
  "defaultTarget": {
    "androidApp": {
      "certificate": {
        "sha256Fingerprint": "string"
      },
      "packageName": "string"
    },
    "web": {
      "site": "string"
    }
  },
  "skipCacheLookup": true,
  "statements": [
    {
      "relation": "string",
      "source": {
        "androidApp": {
          "certificate": {
            "sha256Fingerprint": "string"
          },
          "packageName": "string"
        },
        "web": {
          "site": "string"
        }
      },
      "target": {
        "androidApp": {
          "certificate": {
            "sha256Fingerprint": "string"
          },
          "packageName": "string"
        },
        "web": {
          "site": "string"
        }
      }
    }
  ]
}
```

<h3 id="digitalassetlinksassetlinksbulkcheck-parameters">Parameters</h3>

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
|body|body|[BulkCheckRequest](#schemabulkcheckrequest)|false|none|
|» allowGoogleInternalDataSources|body|boolean|false|Same configuration as in Check request, all statements checks will use same configurations.|
|» defaultRelation|body|string|false|If specified, will be used in any given template statement that doesn’t specify a relation.|
|» defaultSource|body|[Asset](#schemaasset)|false|If specified, will be used in any given template statement that doesn’t specify a source.|
|» defaultTarget|body|[Asset](#schemaasset)|false|If specified, will be used in any given template statement that doesn’t specify a target.|
|» skipCacheLookup|body|boolean|false|Same configuration as in Check request, all statements checks will use same configurations.|
|» statements|body|[[StatementTemplate](#schemastatementtemplate)]|false|List of statements to check. For each statement, you can omit a field if the corresponding default_* field below was supplied. Minimum 1 statement; maximum 1,000 statements. Any additional statements will be ignored.|

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
  "bulkErrorCode": "ERROR_CODE_UNSPECIFIED",
  "checkResults": [
    {
      "debugString": "string",
      "errorCode": [
        "ERROR_CODE_UNSPECIFIED"
      ],
      "linked": true,
      "maxAge": "string"
    }
  ]
}
```

<h3 id="digitalassetlinksassetlinksbulkcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BulkCheckResponse](#schemabulkcheckresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## digitalassetlinks.assetlinks.check

<a id="opIddigitalassetlinks.assetlinks.check"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/assetlinks:check \
  -H 'Accept: application/json'
```

`GET /v1/assetlinks:check`

Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

<h3 id="digitalassetlinksassetlinkscheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|relation|query|string|false|Query string for the relation. We identify relations with strings of the format `/`, where `` must be one of a set of pre-defined purpose categories, and `` is a free-form lowercase alphanumeric string that describes the specific use case of the statement. Refer to [our API documentation](/digital-asset-links/v1/relation-strings) for the current list of supported relations. For a query to match an asset link, both the query's and the asset link's relation strings must match exactly. Example: A query with relation `delegate_permission/common.handle_all_urls` matches an asset link with relation `delegate_permission/common.handle_all_urls`.|
|source.androidApp.certificate.sha256Fingerprint|query|string|false|The uppercase SHA-265 fingerprint of the certificate. From the PEM certificate, it can be acquired like this: $ keytool -printcert -file $CERTFILE \| grep SHA256: SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \ 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 or like this: $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256 SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \ 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`. If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).|
|source.androidApp.packageName|query|string|false|Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED|
|source.web.site|query|string|false|Web assets are identified by a URL that contains only the scheme, hostname and port parts. The format is http[s]://[:] Hostnames must be fully qualified: they must end in a single period ("`.`"). Only the schemes "http" and "https" are currently allowed. Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https. We call this limited URL the "site". All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset. Example: the asset with the site `https://www.google.com` contains all these URLs: * `https://www.google.com/` * `https://www.google.com:443/` * `https://www.google.com/foo` * `https://www.google.com/foo?bar` * `https://www.google.com/foo#bar` * `https://user@password:www.google.com/` But it does not contain these URLs: * `http://www.google.com/` (wrong scheme) * `https://google.com/` (hostname does not match) * `https://www.google.com:444/` (port does not match) REQUIRED|
|target.androidApp.certificate.sha256Fingerprint|query|string|false|The uppercase SHA-265 fingerprint of the certificate. From the PEM certificate, it can be acquired like this: $ keytool -printcert -file $CERTFILE \| grep SHA256: SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \ 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 or like this: $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256 SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \ 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`. If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).|
|target.androidApp.packageName|query|string|false|Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED|
|target.web.site|query|string|false|Web assets are identified by a URL that contains only the scheme, hostname and port parts. The format is http[s]://[:] Hostnames must be fully qualified: they must end in a single period ("`.`"). Only the schemes "http" and "https" are currently allowed. Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https. We call this limited URL the "site". All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset. Example: the asset with the site `https://www.google.com` contains all these URLs: * `https://www.google.com/` * `https://www.google.com:443/` * `https://www.google.com/foo` * `https://www.google.com/foo?bar` * `https://www.google.com/foo#bar` * `https://user@password:www.google.com/` But it does not contain these URLs: * `http://www.google.com/` (wrong scheme) * `https://google.com/` (hostname does not match) * `https://www.google.com:444/` (port does not match) REQUIRED|
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
  "debugString": "string",
  "errorCode": [
    "ERROR_CODE_UNSPECIFIED"
  ],
  "linked": true,
  "maxAge": "string"
}
```

<h3 id="digitalassetlinksassetlinkscheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CheckResponse](#schemacheckresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="digital-asset-links-api-statements">statements</h1>

## digitalassetlinks.statements.list

<a id="opIddigitalassetlinks.statements.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/statements:list \
  -H 'Accept: application/json'
```

`GET /v1/statements:list`

Retrieves a list of all statements from a given source that match the specified target and statement string. The API guarantees that all statements with secure source assets, such as HTTPS websites or Android apps, have been made in a secure way by the owner of those assets, as described in the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md). Specifically, you should consider that for insecure websites (that is, where the URL starts with `http://` instead of `https://`), this guarantee cannot be made. The `List` command is most useful in cases where the API client wants to know all the ways in which two assets are related, or enumerate all the relationships from a particular source asset. Example: a feature that helps users navigate to related items. When a mobile app is running on a device, the feature would make it easy to navigate to the corresponding web site or Google+ profile.

<h3 id="digitalassetlinksstatementslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|relation|query|string|false|Use only associations that match the specified relation. See the [`Statement`](#Statement) message for a detailed definition of relation strings. For a query to match a statement, one of the following must be true: * both the query's and the statement's relation strings match exactly, or * the query's relation string is empty or missing. Example: A query with relation `delegate_permission/common.handle_all_urls` matches an asset link with relation `delegate_permission/common.handle_all_urls`.|
|source.androidApp.certificate.sha256Fingerprint|query|string|false|The uppercase SHA-265 fingerprint of the certificate. From the PEM certificate, it can be acquired like this: $ keytool -printcert -file $CERTFILE \| grep SHA256: SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \ 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 or like this: $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256 SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \ 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`. If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).|
|source.androidApp.packageName|query|string|false|Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED|
|source.web.site|query|string|false|Web assets are identified by a URL that contains only the scheme, hostname and port parts. The format is http[s]://[:] Hostnames must be fully qualified: they must end in a single period ("`.`"). Only the schemes "http" and "https" are currently allowed. Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https. We call this limited URL the "site". All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset. Example: the asset with the site `https://www.google.com` contains all these URLs: * `https://www.google.com/` * `https://www.google.com:443/` * `https://www.google.com/foo` * `https://www.google.com/foo?bar` * `https://www.google.com/foo#bar` * `https://user@password:www.google.com/` But it does not contain these URLs: * `http://www.google.com/` (wrong scheme) * `https://google.com/` (hostname does not match) * `https://www.google.com:444/` (port does not match) REQUIRED|
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
  "debugString": "string",
  "errorCode": [
    "ERROR_CODE_UNSPECIFIED"
  ],
  "maxAge": "string",
  "statements": [
    {
      "relation": "string",
      "source": {
        "androidApp": {
          "certificate": {
            "sha256Fingerprint": "string"
          },
          "packageName": "string"
        },
        "web": {
          "site": "string"
        }
      },
      "target": {
        "androidApp": {
          "certificate": {
            "sha256Fingerprint": "string"
          },
          "packageName": "string"
        },
        "web": {
          "site": "string"
        }
      }
    }
  ]
}
```

<h3 id="digitalassetlinksstatementslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListResponse](#schemalistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AndroidAppAsset">AndroidAppAsset</h2>
<!-- backwards compatibility -->
<a id="schemaandroidappasset"></a>
<a id="schema_AndroidAppAsset"></a>
<a id="tocSandroidappasset"></a>
<a id="tocsandroidappasset"></a>

```json
{
  "certificate": {
    "sha256Fingerprint": "string"
  },
  "packageName": "string"
}
```

Describes an android app asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|[CertificateInfo](#schemacertificateinfo)|false|none|Because there is no global enforcement of package name uniqueness, we also require a signing certificate, which in combination with the package name uniquely identifies an app. Some apps' signing keys are rotated, so they may be signed by different keys over time. We treat these as distinct assets, since we use (package name, cert) as the unique ID. This should not normally pose any problems as both versions of the app will make the same or similar statements. Other assets making statements about the app will have to be updated when a key is rotated, however. (Note that the syntaxes for publishing and querying for statements contain syntactic sugar to easily let you specify apps that are known by multiple certificates.) REQUIRED|
|packageName|string|false|none|Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "androidApp": {
    "certificate": {
      "sha256Fingerprint": "string"
    },
    "packageName": "string"
  },
  "web": {
    "site": "string"
  }
}
```

Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidApp|[AndroidAppAsset](#schemaandroidappasset)|false|none|Set if this is an Android App asset.|
|web|[WebAsset](#schemawebasset)|false|none|Set if this is a web asset.|

<h2 id="tocS_BulkCheckRequest">BulkCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkcheckrequest"></a>
<a id="schema_BulkCheckRequest"></a>
<a id="tocSbulkcheckrequest"></a>
<a id="tocsbulkcheckrequest"></a>

```json
{
  "allowGoogleInternalDataSources": true,
  "defaultRelation": "string",
  "defaultSource": {
    "androidApp": {
      "certificate": {
        "sha256Fingerprint": "string"
      },
      "packageName": "string"
    },
    "web": {
      "site": "string"
    }
  },
  "defaultTarget": {
    "androidApp": {
      "certificate": {
        "sha256Fingerprint": "string"
      },
      "packageName": "string"
    },
    "web": {
      "site": "string"
    }
  },
  "skipCacheLookup": true,
  "statements": [
    {
      "relation": "string",
      "source": {
        "androidApp": {
          "certificate": {
            "sha256Fingerprint": "string"
          },
          "packageName": "string"
        },
        "web": {
          "site": "string"
        }
      },
      "target": {
        "androidApp": {
          "certificate": {
            "sha256Fingerprint": "string"
          },
          "packageName": "string"
        },
        "web": {
          "site": "string"
        }
      }
    }
  ]
}
```

Message used to check for the existence of multiple digital asset links within a single RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowGoogleInternalDataSources|boolean|false|none|Same configuration as in Check request, all statements checks will use same configurations.|
|defaultRelation|string|false|none|If specified, will be used in any given template statement that doesn’t specify a relation.|
|defaultSource|[Asset](#schemaasset)|false|none|If specified, will be used in any given template statement that doesn’t specify a source.|
|defaultTarget|[Asset](#schemaasset)|false|none|If specified, will be used in any given template statement that doesn’t specify a target.|
|skipCacheLookup|boolean|false|none|Same configuration as in Check request, all statements checks will use same configurations.|
|statements|[[StatementTemplate](#schemastatementtemplate)]|false|none|List of statements to check. For each statement, you can omit a field if the corresponding default_* field below was supplied. Minimum 1 statement; maximum 1,000 statements. Any additional statements will be ignored.|

<h2 id="tocS_BulkCheckResponse">BulkCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkcheckresponse"></a>
<a id="schema_BulkCheckResponse"></a>
<a id="tocSbulkcheckresponse"></a>
<a id="tocsbulkcheckresponse"></a>

```json
{
  "bulkErrorCode": "ERROR_CODE_UNSPECIFIED",
  "checkResults": [
    {
      "debugString": "string",
      "errorCode": [
        "ERROR_CODE_UNSPECIFIED"
      ],
      "linked": true,
      "maxAge": "string"
    }
  ]
}
```

Response for BulkCheck call. Results are sent in a list in the same order in which they were sent. Individual check errors are described in the appropriate check_results entry. If the entire call fails, the response will include a bulk_error_code field describing the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulkErrorCode|string|false|none|Error code for the entire request. Present only if the entire request failed. Individual check errors will not trigger the presence of this field.|
|checkResults|[[CheckResponse](#schemacheckresponse)]|false|none|List of results for each check request. Results are returned in the same order in which they were sent in the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|bulkErrorCode|ERROR_CODE_UNSPECIFIED|
|bulkErrorCode|ERROR_CODE_INVALID_QUERY|
|bulkErrorCode|ERROR_CODE_FETCH_ERROR|
|bulkErrorCode|ERROR_CODE_FAILED_SSL_VALIDATION|
|bulkErrorCode|ERROR_CODE_REDIRECT|
|bulkErrorCode|ERROR_CODE_TOO_LARGE|
|bulkErrorCode|ERROR_CODE_MALFORMED_HTTP_RESPONSE|
|bulkErrorCode|ERROR_CODE_WRONG_CONTENT_TYPE|
|bulkErrorCode|ERROR_CODE_MALFORMED_CONTENT|
|bulkErrorCode|ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE|
|bulkErrorCode|ERROR_CODE_FETCH_BUDGET_EXHAUSTED|

<h2 id="tocS_CertificateInfo">CertificateInfo</h2>
<!-- backwards compatibility -->
<a id="schemacertificateinfo"></a>
<a id="schema_CertificateInfo"></a>
<a id="tocScertificateinfo"></a>
<a id="tocscertificateinfo"></a>

```json
{
  "sha256Fingerprint": "string"
}
```

Describes an X509 certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sha256Fingerprint|string|false|none|The uppercase SHA-265 fingerprint of the certificate. From the PEM certificate, it can be acquired like this: $ keytool -printcert -file $CERTFILE \| grep SHA256: SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \ 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 or like this: $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256 SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \ 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`. If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).|

<h2 id="tocS_CheckResponse">CheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckresponse"></a>
<a id="schema_CheckResponse"></a>
<a id="tocScheckresponse"></a>
<a id="tocscheckresponse"></a>

```json
{
  "debugString": "string",
  "errorCode": [
    "ERROR_CODE_UNSPECIFIED"
  ],
  "linked": true,
  "maxAge": "string"
}
```

Response message for the CheckAssetLinks call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debugString|string|false|none|Human-readable message containing information intended to help end users understand, reproduce and debug the result. The message will be in English and we are currently not planning to offer any translations. Please note that no guarantees are made about the contents or format of this string. Any aspect of it may be subject to change without notice. You should not attempt to programmatically parse this data. For programmatic access, use the error_code field below.|
|errorCode|[string]|false|none|Error codes that describe the result of the Check operation.|
|linked|boolean|false|none|Set to true if the assets specified in the request are linked by the relation specified in the request.|
|maxAge|string(google-duration)|false|none|From serving time, how much longer the response should be considered valid barring further updates. REQUIRED|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|ERROR_CODE_UNSPECIFIED|
|errorCode|ERROR_CODE_INVALID_QUERY|
|errorCode|ERROR_CODE_FETCH_ERROR|
|errorCode|ERROR_CODE_FAILED_SSL_VALIDATION|
|errorCode|ERROR_CODE_REDIRECT|
|errorCode|ERROR_CODE_TOO_LARGE|
|errorCode|ERROR_CODE_MALFORMED_HTTP_RESPONSE|
|errorCode|ERROR_CODE_WRONG_CONTENT_TYPE|
|errorCode|ERROR_CODE_MALFORMED_CONTENT|
|errorCode|ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE|
|errorCode|ERROR_CODE_FETCH_BUDGET_EXHAUSTED|

<h2 id="tocS_ListResponse">ListResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresponse"></a>
<a id="schema_ListResponse"></a>
<a id="tocSlistresponse"></a>
<a id="tocslistresponse"></a>

```json
{
  "debugString": "string",
  "errorCode": [
    "ERROR_CODE_UNSPECIFIED"
  ],
  "maxAge": "string",
  "statements": [
    {
      "relation": "string",
      "source": {
        "androidApp": {
          "certificate": {
            "sha256Fingerprint": "string"
          },
          "packageName": "string"
        },
        "web": {
          "site": "string"
        }
      },
      "target": {
        "androidApp": {
          "certificate": {
            "sha256Fingerprint": "string"
          },
          "packageName": "string"
        },
        "web": {
          "site": "string"
        }
      }
    }
  ]
}
```

Response message for the List call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debugString|string|false|none|Human-readable message containing information intended to help end users understand, reproduce and debug the result. The message will be in English and we are currently not planning to offer any translations. Please note that no guarantees are made about the contents or format of this string. Any aspect of it may be subject to change without notice. You should not attempt to programmatically parse this data. For programmatic access, use the error_code field below.|
|errorCode|[string]|false|none|Error codes that describe the result of the List operation.|
|maxAge|string(google-duration)|false|none|From serving time, how much longer the response should be considered valid barring further updates. REQUIRED|
|statements|[[Statement](#schemastatement)]|false|none|A list of all the matching statements that have been found.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|ERROR_CODE_UNSPECIFIED|
|errorCode|ERROR_CODE_INVALID_QUERY|
|errorCode|ERROR_CODE_FETCH_ERROR|
|errorCode|ERROR_CODE_FAILED_SSL_VALIDATION|
|errorCode|ERROR_CODE_REDIRECT|
|errorCode|ERROR_CODE_TOO_LARGE|
|errorCode|ERROR_CODE_MALFORMED_HTTP_RESPONSE|
|errorCode|ERROR_CODE_WRONG_CONTENT_TYPE|
|errorCode|ERROR_CODE_MALFORMED_CONTENT|
|errorCode|ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE|
|errorCode|ERROR_CODE_FETCH_BUDGET_EXHAUSTED|

<h2 id="tocS_Statement">Statement</h2>
<!-- backwards compatibility -->
<a id="schemastatement"></a>
<a id="schema_Statement"></a>
<a id="tocSstatement"></a>
<a id="tocsstatement"></a>

```json
{
  "relation": "string",
  "source": {
    "androidApp": {
      "certificate": {
        "sha256Fingerprint": "string"
      },
      "packageName": "string"
    },
    "web": {
      "site": "string"
    }
  },
  "target": {
    "androidApp": {
      "certificate": {
        "sha256Fingerprint": "string"
      },
      "packageName": "string"
    },
    "web": {
      "site": "string"
    }
  }
}
```

Describes a reliable statement that has been made about the relationship between a source asset and a target asset. Statements are always made by the source asset, either directly or by delegating to a statement list that is stored elsewhere. For more detailed definitions of statements and assets, please refer to our [API documentation landing page](/digital-asset-links/v1/getting-started).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relation|string|false|none|The relation identifies the use of the statement as intended by the source asset's owner (that is, the person or entity who issued the statement). Every complete statement has a relation. We identify relations with strings of the format `/`, where `` must be one of a set of pre-defined purpose categories, and `` is a free-form lowercase alphanumeric string that describes the specific use case of the statement. Refer to [our API documentation](/digital-asset-links/v1/relation-strings) for the current list of supported relations. Example: `delegate_permission/common.handle_all_urls` REQUIRED|
|source|[Asset](#schemaasset)|false|none|Every statement has a source asset. REQUIRED|
|target|[Asset](#schemaasset)|false|none|Every statement has a target asset. REQUIRED|

<h2 id="tocS_StatementTemplate">StatementTemplate</h2>
<!-- backwards compatibility -->
<a id="schemastatementtemplate"></a>
<a id="schema_StatementTemplate"></a>
<a id="tocSstatementtemplate"></a>
<a id="tocsstatementtemplate"></a>

```json
{
  "relation": "string",
  "source": {
    "androidApp": {
      "certificate": {
        "sha256Fingerprint": "string"
      },
      "packageName": "string"
    },
    "web": {
      "site": "string"
    }
  },
  "target": {
    "androidApp": {
      "certificate": {
        "sha256Fingerprint": "string"
      },
      "packageName": "string"
    },
    "web": {
      "site": "string"
    }
  }
}
```

A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relation|string|false|none|The relationship being asserted between the source and target. If omitted, you must specify a BulkCheckRequest.default_relation value to use here.|
|source|[Asset](#schemaasset)|false|none|The source asset that is asserting the statement. If omitted, you must specify a BulkCheckRequest.default_source value to use here.|
|target|[Asset](#schemaasset)|false|none|The target that the source is declaring the relationship with. If omitted, you must specify a BulkCheckRequest.default_target to use here.|

<h2 id="tocS_WebAsset">WebAsset</h2>
<!-- backwards compatibility -->
<a id="schemawebasset"></a>
<a id="schema_WebAsset"></a>
<a id="tocSwebasset"></a>
<a id="tocswebasset"></a>

```json
{
  "site": "string"
}
```

Describes a web asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|site|string|false|none|Web assets are identified by a URL that contains only the scheme, hostname and port parts. The format is http[s]://[:] Hostnames must be fully qualified: they must end in a single period ("`.`"). Only the schemes "http" and "https" are currently allowed. Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https. We call this limited URL the "site". All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset. Example: the asset with the site `https://www.google.com` contains all these URLs: * `https://www.google.com/` * `https://www.google.com:443/` * `https://www.google.com/foo` * `https://www.google.com/foo?bar` * `https://www.google.com/foo#bar` * `https://user@password:www.google.com/` But it does not contain these URLs: * `http://www.google.com/` (wrong scheme) * `https://google.com/` (hostname does not match) * `https://www.google.com:444/` (port does not match) REQUIRED|
