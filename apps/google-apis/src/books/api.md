<h1 id="books-api">Books API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Books API allows clients to access the Google Books repository.

Base URLs:

* <a href="https://books.googleapis.com/">https://books.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://code.google.com/apis/books/docs/v1/getting_started.html">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/books|Manage your books|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/books|Manage your books|

<h1 id="books-api-bookshelves">bookshelves</h1>

## books.bookshelves.list

<a id="opIdbooks.bookshelves.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/users/string/bookshelves \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/users/{userId}/bookshelves`

Retrieves a list of public bookshelves for the specified user.

<h3 id="booksbookshelveslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of user for whom to retrieve bookshelves.|
|source|query|string|false|String to identify the originator of this request.|
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
  "items": [
    {
      "access": "string",
      "created": "string",
      "description": "string",
      "id": 0,
      "kind": "string",
      "selfLink": "string",
      "title": "string",
      "updated": "string",
      "volumeCount": 0,
      "volumesLastUpdated": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="booksbookshelveslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bookshelves](#schemabookshelves)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.bookshelves.get

<a id="opIdbooks.bookshelves.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/users/string/bookshelves/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/users/{userId}/bookshelves/{shelf}`

Retrieves metadata for a specific bookshelf for the specified user.

<h3 id="booksbookshelvesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of user for whom to retrieve bookshelves.|
|shelf|path|string|true|ID of bookshelf to retrieve.|
|source|query|string|false|String to identify the originator of this request.|
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
  "access": "string",
  "created": "string",
  "description": "string",
  "id": 0,
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string",
  "volumeCount": 0,
  "volumesLastUpdated": "string"
}
```

<h3 id="booksbookshelvesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bookshelf](#schemabookshelf)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.bookshelves.volumes.list

<a id="opIdbooks.bookshelves.volumes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/users/string/bookshelves/string/volumes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/users/{userId}/bookshelves/{shelf}/volumes`

Retrieves volumes in a specific bookshelf for the specified user.

<h3 id="booksbookshelvesvolumeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of user for whom to retrieve bookshelf volumes.|
|shelf|path|string|true|ID of bookshelf to retrieve volumes.|
|maxResults|query|integer|false|Maximum number of results to return|
|showPreorders|query|boolean|false|Set to true to show pre-ordered books. Defaults to false.|
|source|query|string|false|String to identify the originator of this request.|
|startIndex|query|integer|false|Index of the first element to return (starts at 0)|
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
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

<h3 id="booksbookshelvesvolumeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumes](#schemavolumes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-cloudloading">cloudloading</h1>

## books.cloudloading.addBook

<a id="opIdbooks.cloudloading.addBook"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/cloudloading/addBook \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/cloudloading/addBook`

Add a user-upload volume and triggers processing.

<h3 id="bookscloudloadingaddbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|drive_document_id|query|string|false|A drive document id. The upload_client_token must not be set.|
|mime_type|query|string|false|The document MIME type. It can be set only if the drive_document_id is set.|
|name|query|string|false|The document name. It can be set only if the drive_document_id is set.|
|upload_client_token|query|string|false|Scotty upload token.|
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
  "author": "string",
  "processingState": "string",
  "title": "string",
  "volumeId": "string"
}
```

<h3 id="bookscloudloadingaddbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BooksCloudloadingResource](#schemabookscloudloadingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.cloudloading.deleteBook

<a id="opIdbooks.cloudloading.deleteBook"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/cloudloading/deleteBook?volumeId=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/cloudloading/deleteBook`

Remove the book and its contents

<h3 id="bookscloudloadingdeletebook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|query|string|true|The id of the book to be removed.|
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

<h3 id="bookscloudloadingdeletebook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.cloudloading.updateBook

<a id="opIdbooks.cloudloading.updateBook"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/cloudloading/updateBook \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "author": "string",
    "processingState": "string",
    "title": "string",
    "volumeId": "string"
  }'
```

`POST /books/v1/cloudloading/updateBook`

Updates a user-upload volume.

> Body parameter

```json
{
  "author": "string",
  "processingState": "string",
  "title": "string",
  "volumeId": "string"
}
```

<h3 id="bookscloudloadingupdatebook-parameters">Parameters</h3>

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
|body|body|[BooksCloudloadingResource](#schemabookscloudloadingresource)|false|none|
|» author|body|string|false|none|
|» processingState|body|string|false|none|
|» title|body|string|false|none|
|» volumeId|body|string|false|none|

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
  "author": "string",
  "processingState": "string",
  "title": "string",
  "volumeId": "string"
}
```

<h3 id="bookscloudloadingupdatebook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BooksCloudloadingResource](#schemabookscloudloadingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-dictionary">dictionary</h1>

## books.dictionary.listOfflineMetadata

<a id="opIdbooks.dictionary.listOfflineMetadata"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/dictionary/listOfflineMetadata?cpksver=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/dictionary/listOfflineMetadata`

Returns a list of offline dictionary metadata available

<h3 id="booksdictionarylistofflinemetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cpksver|query|string|true|The device/version ID from which to request the data.|
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
  "items": [
    {
      "download_url": "string",
      "encrypted_key": "string",
      "language": "string",
      "size": "string",
      "version": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="booksdictionarylistofflinemetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Metadata](#schemametadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-familysharing">familysharing</h1>

## books.familysharing.getFamilyInfo

<a id="opIdbooks.familysharing.getFamilyInfo"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/familysharing/getFamilyInfo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/familysharing/getFamilyInfo`

Gets information regarding the family that the user is part of.

<h3 id="booksfamilysharinggetfamilyinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|false|String to identify the originator of this request.|
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
  "kind": "string",
  "membership": {
    "acquirePermission": "string",
    "ageGroup": "string",
    "allowedMaturityRating": "string",
    "isInFamily": true,
    "role": "string"
  }
}
```

<h3 id="booksfamilysharinggetfamilyinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FamilyInfo](#schemafamilyinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.familysharing.share

<a id="opIdbooks.familysharing.share"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/familysharing/share \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/familysharing/share`

Initiates sharing of the content with the user's family. Empty response indicates success.

<h3 id="booksfamilysharingshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|docId|query|string|false|The docid to share.|
|source|query|string|false|String to identify the originator of this request.|
|volumeId|query|string|false|The volume to share.|
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

<h3 id="booksfamilysharingshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.familysharing.unshare

<a id="opIdbooks.familysharing.unshare"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/familysharing/unshare \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/familysharing/unshare`

Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

<h3 id="booksfamilysharingunshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|docId|query|string|false|The docid to unshare.|
|source|query|string|false|String to identify the originator of this request.|
|volumeId|query|string|false|The volume to unshare.|
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

<h3 id="booksfamilysharingunshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-layers">layers</h1>

## books.layers.volumeAnnotations.list

<a id="opIdbooks.layers.volumeAnnotations.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/volumes/string/layers/string?contentVersion=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/{volumeId}/layers/{layerId}`

Gets the volume annotations for a volume and layer.

<h3 id="bookslayersvolumeannotationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|The volume to retrieve annotations for.|
|layerId|path|string|true|The ID for the layer to get the annotations.|
|contentVersion|query|string|true|The content version for the requested volume.|
|endOffset|query|string|false|The end offset to end retrieving data from.|
|endPosition|query|string|false|The end position to end retrieving data from.|
|locale|query|string|false|The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.|
|maxResults|query|integer|false|Maximum number of results to return|
|pageToken|query|string|false|The value of the nextToken from the previous page.|
|showDeleted|query|boolean|false|Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.|
|source|query|string|false|String to identify the originator of this request.|
|startOffset|query|string|false|The start offset to start retrieving data from.|
|startPosition|query|string|false|The start position to start retrieving data from.|
|updatedMax|query|string|false|RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).|
|updatedMin|query|string|false|RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).|
|volumeAnnotationsVersion|query|string|false|The version of the volume annotations that you are requesting.|
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
  "items": [
    {
      "annotationDataId": "string",
      "annotationDataLink": "string",
      "annotationType": "string",
      "contentRanges": {
        "cfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "contentVersion": "string",
        "gbImageRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "gbTextRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        }
      },
      "data": "string",
      "deleted": true,
      "id": "string",
      "kind": "string",
      "layerId": "string",
      "pageIds": [
        "string"
      ],
      "selectedText": "string",
      "selfLink": "string",
      "updated": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "totalItems": 0,
  "version": "string"
}
```

<h3 id="bookslayersvolumeannotationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumeannotations](#schemavolumeannotations)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.layers.volumeAnnotations.get

<a id="opIdbooks.layers.volumeAnnotations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/volumes/string/layers/string/annotations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}`

Gets the volume annotation.

<h3 id="bookslayersvolumeannotationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|The volume to retrieve annotations for.|
|layerId|path|string|true|The ID for the layer to get the annotations.|
|annotationId|path|string|true|The ID of the volume annotation to retrieve.|
|locale|query|string|false|The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.|
|source|query|string|false|String to identify the originator of this request.|
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
  "annotationDataId": "string",
  "annotationDataLink": "string",
  "annotationType": "string",
  "contentRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "data": "string",
  "deleted": true,
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "pageIds": [
    "string"
  ],
  "selectedText": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

<h3 id="bookslayersvolumeannotationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumeannotation](#schemavolumeannotation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.layers.annotationData.list

<a id="opIdbooks.layers.annotationData.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/volumes/string/layers/string/data?contentVersion=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/{volumeId}/layers/{layerId}/data`

Gets the annotation data for a volume and layer.

<h3 id="bookslayersannotationdatalist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|The volume to retrieve annotation data for.|
|layerId|path|string|true|The ID for the layer to get the annotation data.|
|contentVersion|query|string|true|The content version for the requested volume.|
|annotationDataId|query|[string]|false|The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.|
|h|query|integer|false|The requested pixel height for any images. If height is provided width must also be provided.|
|locale|query|string|false|The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.|
|maxResults|query|integer|false|Maximum number of results to return|
|pageToken|query|string|false|The value of the nextToken from the previous page.|
|scale|query|integer|false|The requested scale for the image.|
|source|query|string|false|String to identify the originator of this request.|
|updatedMax|query|string|false|RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).|
|updatedMin|query|string|false|RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).|
|w|query|integer|false|The requested pixel width for any images. If width is provided height must also be provided.|
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
  "items": [
    {
      "annotationType": "string",
      "data": {
        "common": {
          "lang": "string",
          "previewImageUrl": "string",
          "snippet": "string",
          "snippetUrl": "string",
          "title": "string"
        },
        "geo": {
          "boundary": [
            "string"
          ],
          "cachePolicy": "string",
          "countryCode": "string",
          "latitude": 0,
          "longitude": 0,
          "mapType": "string",
          "viewport": {
            "hi": {
              "latitude": 0,
              "longitude": 0
            },
            "lo": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "zoom": 0
        },
        "kind": "string"
      },
      "encodedData": "string",
      "id": "string",
      "kind": "string",
      "layerId": "string",
      "selfLink": "string",
      "updated": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "totalItems": 0
}
```

<h3 id="bookslayersannotationdatalist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Annotationsdata](#schemaannotationsdata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.layers.annotationData.get

<a id="opIdbooks.layers.annotationData.get"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/volumes/string/layers/string/data/string?contentVersion=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}`

Gets the annotation data.

<h3 id="bookslayersannotationdataget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|The volume to retrieve annotations for.|
|layerId|path|string|true|The ID for the layer to get the annotations.|
|annotationDataId|path|string|true|The ID of the annotation data to retrieve.|
|contentVersion|query|string|true|The content version for the volume you are trying to retrieve.|
|allowWebDefinitions|query|boolean|false|For the dictionary layer. Whether or not to allow web definitions.|
|h|query|integer|false|The requested pixel height for any images. If height is provided width must also be provided.|
|locale|query|string|false|The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.|
|scale|query|integer|false|The requested scale for the image.|
|source|query|string|false|String to identify the originator of this request.|
|w|query|integer|false|The requested pixel width for any images. If width is provided height must also be provided.|
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
  "annotationType": "string",
  "data": {
    "common": {
      "title": "string"
    },
    "dict": {
      "source": {
        "attribution": "string",
        "url": "string"
      },
      "words": [
        {
          "derivatives": [
            {
              "source": {
                "attribution": "string",
                "url": "string"
              },
              "text": "string"
            }
          ],
          "examples": [
            {
              "source": {
                "attribution": "string",
                "url": "string"
              },
              "text": "string"
            }
          ],
          "senses": [
            {
              "conjugations": [
                {
                  "type": "string",
                  "value": "string"
                }
              ],
              "definitions": [
                {
                  "definition": "string",
                  "examples": [
                    {
                      "source": {
                        "attribution": "string",
                        "url": "string"
                      },
                      "text": "string"
                    }
                  ]
                }
              ],
              "partOfSpeech": "string",
              "pronunciation": "string",
              "pronunciationUrl": "string",
              "source": {
                "attribution": "string",
                "url": "string"
              },
              "syllabification": "string",
              "synonyms": [
                {
                  "source": {
                    "attribution": "string",
                    "url": "string"
                  },
                  "text": "string"
                }
              ]
            }
          ],
          "source": {
            "attribution": "string",
            "url": "string"
          }
        }
      ]
    },
    "kind": "string"
  },
  "encodedData": "string",
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

<h3 id="bookslayersannotationdataget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DictionaryAnnotationdata](#schemadictionaryannotationdata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.layers.list

<a id="opIdbooks.layers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/volumes/string/layersummary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/{volumeId}/layersummary`

List the layer summaries for a volume.

<h3 id="bookslayerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|The volume to retrieve layers for.|
|contentVersion|query|string|false|The content version for the requested volume.|
|maxResults|query|integer|false|Maximum number of results to return|
|pageToken|query|string|false|The value of the nextToken from the previous page.|
|source|query|string|false|String to identify the originator of this request.|
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
  "items": [
    {
      "annotationCount": 0,
      "annotationTypes": [
        "string"
      ],
      "annotationsDataLink": "string",
      "annotationsLink": "string",
      "contentVersion": "string",
      "dataCount": 0,
      "id": "string",
      "kind": "string",
      "layerId": "string",
      "selfLink": "string",
      "updated": "string",
      "volumeAnnotationsVersion": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

<h3 id="bookslayerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Layersummaries](#schemalayersummaries)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.layers.get

<a id="opIdbooks.layers.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/volumes/string/layersummary/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/{volumeId}/layersummary/{summaryId}`

Gets the layer summary for a volume.

<h3 id="bookslayersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|The volume to retrieve layers for.|
|summaryId|path|string|true|The ID for the layer to get the summary for.|
|contentVersion|query|string|false|The content version for the requested volume.|
|source|query|string|false|String to identify the originator of this request.|
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
  "annotationCount": 0,
  "annotationTypes": [
    "string"
  ],
  "annotationsDataLink": "string",
  "annotationsLink": "string",
  "contentVersion": "string",
  "dataCount": 0,
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeAnnotationsVersion": "string",
  "volumeId": "string"
}
```

<h3 id="bookslayersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Layersummary](#schemalayersummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-myconfig">myconfig</h1>

## books.myconfig.getUserSettings

<a id="opIdbooks.myconfig.getUserSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/myconfig/getUserSettings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/myconfig/getUserSettings`

Gets the current settings for the user.

<h3 id="booksmyconfiggetusersettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|Unused. Added only to workaround TEX mandatory request template requirement|
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
  "kind": "string",
  "notesExport": {
    "folderName": "string",
    "isEnabled": true
  },
  "notification": {
    "matchMyInterests": {
      "opted_state": "string"
    },
    "moreFromAuthors": {
      "opted_state": "string"
    },
    "moreFromSeries": {
      "opted_state": "string"
    },
    "priceDrop": {
      "opted_state": "string"
    },
    "rewardExpirations": {
      "opted_state": "string"
    }
  }
}
```

<h3 id="booksmyconfiggetusersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Usersettings](#schemausersettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.myconfig.releaseDownloadAccess

<a id="opIdbooks.myconfig.releaseDownloadAccess"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/myconfig/releaseDownloadAccess?cpksver=string&volumeIds=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/myconfig/releaseDownloadAccess`

Release downloaded content access restriction.

<h3 id="booksmyconfigreleasedownloadaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cpksver|query|string|true|The device/version ID from which to release the restriction.|
|volumeIds|query|[string]|true|The volume(s) to release restrictions for.|
|locale|query|string|false|ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.|
|source|query|string|false|String to identify the originator of this request.|
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
  "downloadAccessList": [
    {
      "deviceAllowed": true,
      "downloadsAcquired": 0,
      "justAcquired": true,
      "kind": "string",
      "maxDownloadDevices": 0,
      "message": "string",
      "nonce": "string",
      "reasonCode": "string",
      "restricted": true,
      "signature": "string",
      "source": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="booksmyconfigreleasedownloadaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DownloadAccesses](#schemadownloadaccesses)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.myconfig.requestAccess

<a id="opIdbooks.myconfig.requestAccess"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/myconfig/requestAccess?cpksver=string&nonce=string&source=string&volumeId=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/myconfig/requestAccess`

Request concurrent and download access restrictions.

<h3 id="booksmyconfigrequestaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cpksver|query|string|true|The device/version ID from which to request the restrictions.|
|nonce|query|string|true|The client nonce value.|
|source|query|string|true|String to identify the originator of this request.|
|volumeId|query|string|true|The volume to request concurrent/download restrictions for.|
|licenseTypes|query|string|false|The type of access license to request. If not specified, the default is BOTH.|
|locale|query|string|false|ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.|
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
|licenseTypes|LICENSE_TYPES_UNDEFINED|
|licenseTypes|BOTH|
|licenseTypes|CONCURRENT|
|licenseTypes|DOWNLOAD|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "concurrentAccess": {
    "deviceAllowed": true,
    "kind": "string",
    "maxConcurrentDevices": 0,
    "message": "string",
    "nonce": "string",
    "reasonCode": "string",
    "restricted": true,
    "signature": "string",
    "source": "string",
    "timeWindowSeconds": 0,
    "volumeId": "string"
  },
  "downloadAccess": {
    "deviceAllowed": true,
    "downloadsAcquired": 0,
    "justAcquired": true,
    "kind": "string",
    "maxDownloadDevices": 0,
    "message": "string",
    "nonce": "string",
    "reasonCode": "string",
    "restricted": true,
    "signature": "string",
    "source": "string",
    "volumeId": "string"
  },
  "kind": "string"
}
```

<h3 id="booksmyconfigrequestaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RequestAccessData](#schemarequestaccessdata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.myconfig.syncVolumeLicenses

<a id="opIdbooks.myconfig.syncVolumeLicenses"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/myconfig/syncVolumeLicenses?cpksver=string&nonce=string&source=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/myconfig/syncVolumeLicenses`

Request downloaded content access for specified volumes on the My eBooks shelf.

<h3 id="booksmyconfigsyncvolumelicenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cpksver|query|string|true|The device/version ID from which to release the restriction.|
|nonce|query|string|true|The client nonce value.|
|source|query|string|true|String to identify the originator of this request.|
|features|query|[string]|false|List of features supported by the client, i.e., 'RENTALS'|
|includeNonComicsSeries|query|boolean|false|Set to true to include non-comics series. Defaults to false.|
|locale|query|string|false|ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.|
|showPreorders|query|boolean|false|Set to true to show pre-ordered books. Defaults to false.|
|volumeIds|query|[string]|false|The volume(s) to request download restrictions for.|
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
|features|FEATURES_UNDEFINED|
|features|RENTALS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

<h3 id="booksmyconfigsyncvolumelicenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumes](#schemavolumes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.myconfig.updateUserSettings

<a id="opIdbooks.myconfig.updateUserSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/myconfig/updateUserSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "string",
    "notesExport": {
      "folderName": "string",
      "isEnabled": true
    },
    "notification": {
      "matchMyInterests": {
        "opted_state": "string"
      },
      "moreFromAuthors": {
        "opted_state": "string"
      },
      "moreFromSeries": {
        "opted_state": "string"
      },
      "priceDrop": {
        "opted_state": "string"
      },
      "rewardExpirations": {
        "opted_state": "string"
      }
    }
  }'
```

`POST /books/v1/myconfig/updateUserSettings`

Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

> Body parameter

```json
{
  "kind": "string",
  "notesExport": {
    "folderName": "string",
    "isEnabled": true
  },
  "notification": {
    "matchMyInterests": {
      "opted_state": "string"
    },
    "moreFromAuthors": {
      "opted_state": "string"
    },
    "moreFromSeries": {
      "opted_state": "string"
    },
    "priceDrop": {
      "opted_state": "string"
    },
    "rewardExpirations": {
      "opted_state": "string"
    }
  }
}
```

<h3 id="booksmyconfigupdateusersettings-parameters">Parameters</h3>

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
|body|body|[Usersettings](#schemausersettings)|false|none|
|» kind|body|string|false|Resource type.|
|» notesExport|body|object|false|User settings in sub-objects, each for different purposes.|
|» » folderName|body|string|false|none|
|» » isEnabled|body|boolean|false|none|
|» notification|body|object|false|none|
|» » matchMyInterests|body|object|false|none|
|» » » opted_state|body|string|false|none|
|» » moreFromAuthors|body|object|false|none|
|» » » opted_state|body|string|false|none|
|» » moreFromSeries|body|object|false|none|
|» » » opted_state|body|string|false|none|
|» » priceDrop|body|object|false|none|
|» » » opted_state|body|string|false|none|
|» » rewardExpirations|body|object|false|none|
|» » » opted_state|body|string|false|none|

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
  "kind": "string",
  "notesExport": {
    "folderName": "string",
    "isEnabled": true
  },
  "notification": {
    "matchMyInterests": {
      "opted_state": "string"
    },
    "moreFromAuthors": {
      "opted_state": "string"
    },
    "moreFromSeries": {
      "opted_state": "string"
    },
    "priceDrop": {
      "opted_state": "string"
    },
    "rewardExpirations": {
      "opted_state": "string"
    }
  }
}
```

<h3 id="booksmyconfigupdateusersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Usersettings](#schemausersettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-mylibrary">mylibrary</h1>

## books.mylibrary.annotations.list

<a id="opIdbooks.mylibrary.annotations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/mylibrary/annotations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/mylibrary/annotations`

Retrieves a list of annotations, possibly filtered.

<h3 id="booksmylibraryannotationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentVersion|query|string|false|The content version for the requested volume.|
|layerId|query|string|false|The layer ID to limit annotation by.|
|layerIds|query|[string]|false|The layer ID(s) to limit annotation by.|
|maxResults|query|integer|false|Maximum number of results to return|
|pageToken|query|string|false|The value of the nextToken from the previous page.|
|showDeleted|query|boolean|false|Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.|
|source|query|string|false|String to identify the originator of this request.|
|updatedMax|query|string|false|RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).|
|updatedMin|query|string|false|RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).|
|volumeId|query|string|false|The volume to restrict annotations to.|
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
  "items": [
    {
      "afterSelectedText": "string",
      "beforeSelectedText": "string",
      "clientVersionRanges": {
        "cfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "contentVersion": "string",
        "gbImageRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "gbTextRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "imageCfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        }
      },
      "created": "string",
      "currentVersionRanges": {
        "cfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "contentVersion": "string",
        "gbImageRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "gbTextRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "imageCfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        }
      },
      "data": "string",
      "deleted": true,
      "highlightStyle": "string",
      "id": "string",
      "kind": "string",
      "layerId": "string",
      "layerSummary": {
        "allowedCharacterCount": 0,
        "limitType": "string",
        "remainingCharacterCount": 0
      },
      "pageIds": [
        "string"
      ],
      "selectedText": "string",
      "selfLink": "string",
      "updated": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "totalItems": 0
}
```

<h3 id="booksmylibraryannotationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Annotations](#schemaannotations)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.annotations.insert

<a id="opIdbooks.mylibrary.annotations.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/mylibrary/annotations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "afterSelectedText": "string",
    "beforeSelectedText": "string",
    "clientVersionRanges": {
      "cfiRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "contentVersion": "string",
      "gbImageRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "gbTextRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "imageCfiRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      }
    },
    "created": "string",
    "currentVersionRanges": {
      "cfiRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "contentVersion": "string",
      "gbImageRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "gbTextRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "imageCfiRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      }
    },
    "data": "string",
    "deleted": true,
    "highlightStyle": "string",
    "id": "string",
    "kind": "string",
    "layerId": "string",
    "layerSummary": {
      "allowedCharacterCount": 0,
      "limitType": "string",
      "remainingCharacterCount": 0
    },
    "pageIds": [
      "string"
    ],
    "selectedText": "string",
    "selfLink": "string",
    "updated": "string",
    "volumeId": "string"
  }'
```

`POST /books/v1/mylibrary/annotations`

Inserts a new annotation.

> Body parameter

```json
{
  "afterSelectedText": "string",
  "beforeSelectedText": "string",
  "clientVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "created": "string",
  "currentVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "data": "string",
  "deleted": true,
  "highlightStyle": "string",
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "layerSummary": {
    "allowedCharacterCount": 0,
    "limitType": "string",
    "remainingCharacterCount": 0
  },
  "pageIds": [
    "string"
  ],
  "selectedText": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

<h3 id="booksmylibraryannotationsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|annotationId|query|string|false|The ID for the annotation to insert.|
|country|query|string|false|ISO-3166-1 code to override the IP-based location.|
|showOnlySummaryInResponse|query|boolean|false|Requests that only the summary of the specified layer be provided in the response.|
|source|query|string|false|String to identify the originator of this request.|
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
|body|body|[Annotation](#schemaannotation)|false|none|
|» afterSelectedText|body|string|false|Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.|
|» beforeSelectedText|body|string|false|Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.|
|» clientVersionRanges|body|object|false|Selection ranges sent from the client.|
|» » cfiRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in CFI format for this annotation sent by client.|
|» » contentVersion|body|string|false|Content version the client sent in.|
|» » gbImageRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in GB image format for this annotation sent by client.|
|» » gbTextRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in GB text format for this annotation sent by client.|
|» » imageCfiRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in image CFI format for this annotation sent by client.|
|» created|body|string|false|Timestamp for the created time of this annotation.|
|» currentVersionRanges|body|object|false|Selection ranges for the most recent content version.|
|» » cfiRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in CFI format for this annotation for version above.|
|» » contentVersion|body|string|false|Content version applicable to ranges below.|
|» » gbImageRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in GB image format for this annotation for version above.|
|» » gbTextRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in GB text format for this annotation for version above.|
|» » imageCfiRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in image CFI format for this annotation for version above.|
|» data|body|string|false|User-created data for this annotation.|
|» deleted|body|boolean|false|Indicates that this annotation is deleted.|
|» highlightStyle|body|string|false|The highlight style for this annotation.|
|» id|body|string|false|Id of this annotation, in the form of a GUID.|
|» kind|body|string|false|Resource type.|
|» layerId|body|string|false|The layer this annotation is for.|
|» layerSummary|body|object|false|none|
|» » allowedCharacterCount|body|integer(int32)|false|Maximum allowed characters on this layer, especially for the "copy" layer.|
|» » limitType|body|string|false|Type of limitation on this layer. "limited" or "unlimited" for the "copy" layer.|
|» » remainingCharacterCount|body|integer(int32)|false|Remaining allowed characters on this layer, especially for the "copy" layer.|
|» pageIds|body|[string]|false|Pages that this annotation spans.|
|» selectedText|body|string|false|Excerpt from the volume.|
|» selfLink|body|string|false|URL to this resource.|
|» updated|body|string|false|Timestamp for the last time this annotation was modified.|
|» volumeId|body|string|false|The volume that this annotation belongs to.|

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
  "afterSelectedText": "string",
  "beforeSelectedText": "string",
  "clientVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "created": "string",
  "currentVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "data": "string",
  "deleted": true,
  "highlightStyle": "string",
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "layerSummary": {
    "allowedCharacterCount": 0,
    "limitType": "string",
    "remainingCharacterCount": 0
  },
  "pageIds": [
    "string"
  ],
  "selectedText": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

<h3 id="booksmylibraryannotationsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Annotation](#schemaannotation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.annotations.summary

<a id="opIdbooks.mylibrary.annotations.summary"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/mylibrary/annotations/summary?layerIds=string&volumeId=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/mylibrary/annotations/summary`

Gets the summary of specified layers.

<h3 id="booksmylibraryannotationssummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|layerIds|query|[string]|true|Array of layer IDs to get the summary for.|
|volumeId|query|string|true|Volume id to get the summary for.|
|source|query|string|false|Optional. String to identify the originator of this request.|
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
  "kind": "string",
  "layers": [
    {
      "allowedCharacterCount": 0,
      "layerId": "string",
      "limitType": "string",
      "remainingCharacterCount": 0,
      "updated": "string"
    }
  ]
}
```

<h3 id="booksmylibraryannotationssummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AnnotationsSummary](#schemaannotationssummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.annotations.update

<a id="opIdbooks.mylibrary.annotations.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/mylibrary/annotations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "afterSelectedText": "string",
    "beforeSelectedText": "string",
    "clientVersionRanges": {
      "cfiRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "contentVersion": "string",
      "gbImageRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "gbTextRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "imageCfiRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      }
    },
    "created": "string",
    "currentVersionRanges": {
      "cfiRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "contentVersion": "string",
      "gbImageRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "gbTextRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      },
      "imageCfiRange": {
        "endOffset": "string",
        "endPosition": "string",
        "startOffset": "string",
        "startPosition": "string"
      }
    },
    "data": "string",
    "deleted": true,
    "highlightStyle": "string",
    "id": "string",
    "kind": "string",
    "layerId": "string",
    "layerSummary": {
      "allowedCharacterCount": 0,
      "limitType": "string",
      "remainingCharacterCount": 0
    },
    "pageIds": [
      "string"
    ],
    "selectedText": "string",
    "selfLink": "string",
    "updated": "string",
    "volumeId": "string"
  }'
```

`PUT /books/v1/mylibrary/annotations/{annotationId}`

Updates an existing annotation.

> Body parameter

```json
{
  "afterSelectedText": "string",
  "beforeSelectedText": "string",
  "clientVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "created": "string",
  "currentVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "data": "string",
  "deleted": true,
  "highlightStyle": "string",
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "layerSummary": {
    "allowedCharacterCount": 0,
    "limitType": "string",
    "remainingCharacterCount": 0
  },
  "pageIds": [
    "string"
  ],
  "selectedText": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

<h3 id="booksmylibraryannotationsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|annotationId|path|string|true|The ID for the annotation to update.|
|source|query|string|false|String to identify the originator of this request.|
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
|body|body|[Annotation](#schemaannotation)|false|none|
|» afterSelectedText|body|string|false|Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.|
|» beforeSelectedText|body|string|false|Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.|
|» clientVersionRanges|body|object|false|Selection ranges sent from the client.|
|» » cfiRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in CFI format for this annotation sent by client.|
|» » contentVersion|body|string|false|Content version the client sent in.|
|» » gbImageRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in GB image format for this annotation sent by client.|
|» » gbTextRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in GB text format for this annotation sent by client.|
|» » imageCfiRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in image CFI format for this annotation sent by client.|
|» created|body|string|false|Timestamp for the created time of this annotation.|
|» currentVersionRanges|body|object|false|Selection ranges for the most recent content version.|
|» » cfiRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in CFI format for this annotation for version above.|
|» » contentVersion|body|string|false|Content version applicable to ranges below.|
|» » gbImageRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in GB image format for this annotation for version above.|
|» » gbTextRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in GB text format for this annotation for version above.|
|» » imageCfiRange|body|[BooksAnnotationsRange](#schemabooksannotationsrange)|false|Range in image CFI format for this annotation for version above.|
|» data|body|string|false|User-created data for this annotation.|
|» deleted|body|boolean|false|Indicates that this annotation is deleted.|
|» highlightStyle|body|string|false|The highlight style for this annotation.|
|» id|body|string|false|Id of this annotation, in the form of a GUID.|
|» kind|body|string|false|Resource type.|
|» layerId|body|string|false|The layer this annotation is for.|
|» layerSummary|body|object|false|none|
|» » allowedCharacterCount|body|integer(int32)|false|Maximum allowed characters on this layer, especially for the "copy" layer.|
|» » limitType|body|string|false|Type of limitation on this layer. "limited" or "unlimited" for the "copy" layer.|
|» » remainingCharacterCount|body|integer(int32)|false|Remaining allowed characters on this layer, especially for the "copy" layer.|
|» pageIds|body|[string]|false|Pages that this annotation spans.|
|» selectedText|body|string|false|Excerpt from the volume.|
|» selfLink|body|string|false|URL to this resource.|
|» updated|body|string|false|Timestamp for the last time this annotation was modified.|
|» volumeId|body|string|false|The volume that this annotation belongs to.|

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
  "afterSelectedText": "string",
  "beforeSelectedText": "string",
  "clientVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "created": "string",
  "currentVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "data": "string",
  "deleted": true,
  "highlightStyle": "string",
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "layerSummary": {
    "allowedCharacterCount": 0,
    "limitType": "string",
    "remainingCharacterCount": 0
  },
  "pageIds": [
    "string"
  ],
  "selectedText": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

<h3 id="booksmylibraryannotationsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Annotation](#schemaannotation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.annotations.delete

<a id="opIdbooks.mylibrary.annotations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/mylibrary/annotations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /books/v1/mylibrary/annotations/{annotationId}`

Deletes an annotation.

<h3 id="booksmylibraryannotationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|annotationId|path|string|true|The ID for the annotation to delete.|
|source|query|string|false|String to identify the originator of this request.|
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

<h3 id="booksmylibraryannotationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.bookshelves.list

<a id="opIdbooks.mylibrary.bookshelves.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/mylibrary/bookshelves \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/mylibrary/bookshelves`

Retrieves a list of bookshelves belonging to the authenticated user.

<h3 id="booksmylibrarybookshelveslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|false|String to identify the originator of this request.|
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
  "items": [
    {
      "access": "string",
      "created": "string",
      "description": "string",
      "id": 0,
      "kind": "string",
      "selfLink": "string",
      "title": "string",
      "updated": "string",
      "volumeCount": 0,
      "volumesLastUpdated": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="booksmylibrarybookshelveslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bookshelves](#schemabookshelves)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.bookshelves.get

<a id="opIdbooks.mylibrary.bookshelves.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/mylibrary/bookshelves/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/mylibrary/bookshelves/{shelf}`

Retrieves metadata for a specific bookshelf belonging to the authenticated user.

<h3 id="booksmylibrarybookshelvesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shelf|path|string|true|ID of bookshelf to retrieve.|
|source|query|string|false|String to identify the originator of this request.|
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
  "access": "string",
  "created": "string",
  "description": "string",
  "id": 0,
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string",
  "volumeCount": 0,
  "volumesLastUpdated": "string"
}
```

<h3 id="booksmylibrarybookshelvesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bookshelf](#schemabookshelf)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.bookshelves.addVolume

<a id="opIdbooks.mylibrary.bookshelves.addVolume"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/string/addVolume?volumeId=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/mylibrary/bookshelves/{shelf}/addVolume`

Adds a volume to a bookshelf.

<h3 id="booksmylibrarybookshelvesaddvolume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shelf|path|string|true|ID of bookshelf to which to add a volume.|
|volumeId|query|string|true|ID of volume to add.|
|reason|query|string|false|The reason for which the book is added to the library.|
|source|query|string|false|String to identify the originator of this request.|
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
|reason|REASON_UNDEFINED|
|reason|IOS_PREX|
|reason|IOS_SEARCH|
|reason|ONBOARDING|
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

<h3 id="booksmylibrarybookshelvesaddvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.bookshelves.clearVolumes

<a id="opIdbooks.mylibrary.bookshelves.clearVolumes"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/mylibrary/bookshelves/string/clearVolumes \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/mylibrary/bookshelves/{shelf}/clearVolumes`

Clears all volumes from a bookshelf.

<h3 id="booksmylibrarybookshelvesclearvolumes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shelf|path|string|true|ID of bookshelf from which to remove a volume.|
|source|query|string|false|String to identify the originator of this request.|
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

<h3 id="booksmylibrarybookshelvesclearvolumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.bookshelves.moveVolume

<a id="opIdbooks.mylibrary.bookshelves.moveVolume"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/string/moveVolume?volumeId=string&volumePosition=0' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/mylibrary/bookshelves/{shelf}/moveVolume`

Moves a volume within a bookshelf.

<h3 id="booksmylibrarybookshelvesmovevolume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shelf|path|string|true|ID of bookshelf with the volume.|
|volumeId|query|string|true|ID of volume to move.|
|volumePosition|query|integer|true|Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)|
|source|query|string|false|String to identify the originator of this request.|
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

<h3 id="booksmylibrarybookshelvesmovevolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.bookshelves.removeVolume

<a id="opIdbooks.mylibrary.bookshelves.removeVolume"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/string/removeVolume?volumeId=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/mylibrary/bookshelves/{shelf}/removeVolume`

Removes a volume from a bookshelf.

<h3 id="booksmylibrarybookshelvesremovevolume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shelf|path|string|true|ID of bookshelf from which to remove a volume.|
|volumeId|query|string|true|ID of volume to remove.|
|reason|query|string|false|The reason for which the book is removed from the library.|
|source|query|string|false|String to identify the originator of this request.|
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
|reason|REASON_UNDEFINED|
|reason|ONBOARDING|
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

<h3 id="booksmylibrarybookshelvesremovevolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.bookshelves.volumes.list

<a id="opIdbooks.mylibrary.bookshelves.volumes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/mylibrary/bookshelves/string/volumes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/mylibrary/bookshelves/{shelf}/volumes`

Gets volume information for volumes on a bookshelf.

<h3 id="booksmylibrarybookshelvesvolumeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shelf|path|string|true|The bookshelf ID or name retrieve volumes for.|
|country|query|string|false|ISO-3166-1 code to override the IP-based location.|
|maxResults|query|integer|false|Maximum number of results to return|
|projection|query|string|false|Restrict information returned to a set of selected fields.|
|q|query|string|false|Full-text search query string in this bookshelf.|
|showPreorders|query|boolean|false|Set to true to show pre-ordered books. Defaults to false.|
|source|query|string|false|String to identify the originator of this request.|
|startIndex|query|integer|false|Index of the first element to return (starts at 0)|
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
|projection|PROJECTION_UNDEFINED|
|projection|FULL|
|projection|LITE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

<h3 id="booksmylibrarybookshelvesvolumeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumes](#schemavolumes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.readingpositions.get

<a id="opIdbooks.mylibrary.readingpositions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/mylibrary/readingpositions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/mylibrary/readingpositions/{volumeId}`

Retrieves my reading position information for a volume.

<h3 id="booksmylibraryreadingpositionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|ID of volume for which to retrieve a reading position.|
|contentVersion|query|string|false|Volume content version for which this reading position is requested.|
|source|query|string|false|String to identify the originator of this request.|
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
  "epubCfiPosition": "string",
  "gbImagePosition": "string",
  "gbTextPosition": "string",
  "kind": "string",
  "pdfPosition": "string",
  "updated": "string",
  "volumeId": "string"
}
```

<h3 id="booksmylibraryreadingpositionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReadingPosition](#schemareadingposition)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.mylibrary.readingpositions.setPosition

<a id="opIdbooks.mylibrary.readingpositions.setPosition"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/mylibrary/readingpositions/string/setPosition?position=string&timestamp=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/mylibrary/readingpositions/{volumeId}/setPosition`

Sets my reading position information for a volume.

<h3 id="booksmylibraryreadingpositionssetposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|ID of volume for which to update the reading position.|
|position|query|string|true|Position string for the new volume reading position.|
|timestamp|query|string|true|RFC 3339 UTC format timestamp associated with this reading position.|
|action|query|string|false|Action that caused this reading position to be set.|
|contentVersion|query|string|false|Volume content version for which this reading position applies.|
|deviceCookie|query|string|false|Random persistent device cookie optional on set position.|
|source|query|string|false|String to identify the originator of this request.|
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
|action|ACTION_UNDEFINED|
|action|bookmark|
|action|chapter|
|action|next-page|
|action|prev-page|
|action|scroll|
|action|search|
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

<h3 id="booksmylibraryreadingpositionssetposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-notification">notification</h1>

## books.notification.get

<a id="opIdbooks.notification.get"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/notification/get?notification_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/notification/get`

Returns notification details for a given notification id.

<h3 id="booksnotificationget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|notification_id|query|string|true|String to identify the notification.|
|locale|query|string|false|ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.|
|source|query|string|false|String to identify the originator of this request.|
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
  "body": "string",
  "crmExperimentIds": [
    "string"
  ],
  "doc_id": "string",
  "doc_type": "string",
  "dont_show_notification": true,
  "iconUrl": "string",
  "is_document_mature": true,
  "kind": "string",
  "notificationGroup": "string",
  "notification_type": "string",
  "pcampaign_id": "string",
  "reason": "string",
  "show_notification_settings_action": true,
  "targetUrl": "string",
  "timeToExpireMs": "string",
  "title": "string"
}
```

<h3 id="booksnotificationget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Notification](#schemanotification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-onboarding">onboarding</h1>

## books.onboarding.listCategories

<a id="opIdbooks.onboarding.listCategories"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/onboarding/listCategories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/onboarding/listCategories`

List categories for onboarding experience.

<h3 id="booksonboardinglistcategories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.|
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
  "items": [
    {
      "badgeUrl": "string",
      "categoryId": "string",
      "name": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="booksonboardinglistcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Category](#schemacategory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.onboarding.listCategoryVolumes

<a id="opIdbooks.onboarding.listCategoryVolumes"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/onboarding/listCategoryVolumes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/onboarding/listCategoryVolumes`

List available volumes under categories for onboarding experience.

<h3 id="booksonboardinglistcategoryvolumes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categoryId|query|[string]|false|List of category ids requested.|
|locale|query|string|false|ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.|
|maxAllowedMaturityRating|query|string|false|The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.|
|pageSize|query|integer|false|Number of maximum results per page to be included in the response.|
|pageToken|query|string|false|The value of the nextToken from the previous page.|
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
|maxAllowedMaturityRating|MAX_ALLOWED_MATURITY_RATING_UNDEFINED|
|maxAllowedMaturityRating|MATURE|
|maxAllowedMaturityRating|not-mature|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="booksonboardinglistcategoryvolumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volume2](#schemavolume2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-personalizedstream">personalizedstream</h1>

## books.personalizedstream.get

<a id="opIdbooks.personalizedstream.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/personalizedstream/get \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/personalizedstream/get`

Returns a stream of personalized book clusters

<h3 id="bookspersonalizedstreamget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.|
|maxAllowedMaturityRating|query|string|false|The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.|
|source|query|string|false|String to identify the originator of this request.|
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
|maxAllowedMaturityRating|MAX_ALLOWED_MATURITY_RATING_UNDEFINED|
|maxAllowedMaturityRating|MATURE|
|maxAllowedMaturityRating|not-mature|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clusters": [
    {
      "banner_with_content_container": {
        "fillColorArgb": "string",
        "imageUrl": "string",
        "maskColorArgb": "string",
        "moreButtonText": "string",
        "moreButtonUrl": "string",
        "textColorArgb": "string"
      },
      "subTitle": "string",
      "title": "string",
      "totalVolumes": 0,
      "uid": "string",
      "volumes": [
        {
          "accessInfo": {
            "accessViewStatus": "string",
            "country": "string",
            "downloadAccess": {
              "deviceAllowed": true,
              "downloadsAcquired": 0,
              "justAcquired": true,
              "kind": "string",
              "maxDownloadDevices": 0,
              "message": "string",
              "nonce": "string",
              "reasonCode": "string",
              "restricted": true,
              "signature": "string",
              "source": "string",
              "volumeId": "string"
            },
            "driveImportedContentLink": "string",
            "embeddable": true,
            "epub": {
              "acsTokenLink": "string",
              "downloadLink": "string",
              "isAvailable": true
            },
            "explicitOfflineLicenseManagement": true,
            "pdf": {
              "acsTokenLink": "string",
              "downloadLink": "string",
              "isAvailable": true
            },
            "publicDomain": true,
            "quoteSharingAllowed": true,
            "textToSpeechPermission": "string",
            "viewOrderUrl": "string",
            "viewability": "string",
            "webReaderLink": "string"
          },
          "etag": "string",
          "id": "string",
          "kind": "string",
          "layerInfo": {
            "layers": [
              {
                "layerId": "string",
                "volumeAnnotationsVersion": "string"
              }
            ]
          },
          "recommendedInfo": {
            "explanation": "string"
          },
          "saleInfo": {
            "buyLink": "string",
            "country": "string",
            "isEbook": true,
            "listPrice": {
              "amount": 0,
              "currencyCode": "string"
            },
            "offers": [
              {
                "finskyOfferType": 0,
                "giftable": true,
                "listPrice": {
                  "amountInMicros": 0,
                  "currencyCode": "string"
                },
                "rentalDuration": {
                  "count": 0,
                  "unit": "string"
                },
                "retailPrice": {
                  "amountInMicros": 0,
                  "currencyCode": "string"
                }
              }
            ],
            "onSaleDate": "string",
            "retailPrice": {
              "amount": 0,
              "currencyCode": "string"
            },
            "saleability": "string"
          },
          "searchInfo": {
            "textSnippet": "string"
          },
          "selfLink": "string",
          "userInfo": {
            "acquiredTime": "string",
            "acquisitionType": 0,
            "copy": {
              "allowedCharacterCount": 0,
              "limitType": "string",
              "remainingCharacterCount": 0,
              "updated": "string"
            },
            "entitlementType": 0,
            "familySharing": {
              "familyRole": "string",
              "isSharingAllowed": true,
              "isSharingDisabledByFop": true
            },
            "isFamilySharedFromUser": true,
            "isFamilySharedToUser": true,
            "isFamilySharingAllowed": true,
            "isFamilySharingDisabledByFop": true,
            "isInMyBooks": true,
            "isPreordered": true,
            "isPurchased": true,
            "isUploaded": true,
            "readingPosition": {
              "epubCfiPosition": "string",
              "gbImagePosition": "string",
              "gbTextPosition": "string",
              "kind": "string",
              "pdfPosition": "string",
              "updated": "string",
              "volumeId": "string"
            },
            "rentalPeriod": {
              "endUtcSec": "string",
              "startUtcSec": "string"
            },
            "rentalState": "string",
            "review": {
              "author": {
                "displayName": "string"
              },
              "content": "string",
              "date": "string",
              "fullTextUrl": "string",
              "kind": "string",
              "rating": "string",
              "source": {
                "description": "string",
                "extraDescription": "string",
                "url": "string"
              },
              "title": "string",
              "type": "string",
              "volumeId": "string"
            },
            "updated": "string",
            "userUploadedVolumeInfo": {
              "processingState": "string"
            }
          },
          "volumeInfo": {
            "allowAnonLogging": true,
            "authors": [
              "string"
            ],
            "averageRating": 0,
            "canonicalVolumeLink": "string",
            "categories": [
              "string"
            ],
            "comicsContent": true,
            "contentVersion": "string",
            "description": "string",
            "dimensions": {
              "height": "string",
              "thickness": "string",
              "width": "string"
            },
            "imageLinks": {
              "extraLarge": "string",
              "large": "string",
              "medium": "string",
              "small": "string",
              "smallThumbnail": "string",
              "thumbnail": "string"
            },
            "industryIdentifiers": [
              {
                "identifier": "string",
                "type": "string"
              }
            ],
            "infoLink": "string",
            "language": "string",
            "mainCategory": "string",
            "maturityRating": "string",
            "pageCount": 0,
            "panelizationSummary": {
              "containsEpubBubbles": true,
              "containsImageBubbles": true,
              "epubBubbleVersion": "string",
              "imageBubbleVersion": "string"
            },
            "previewLink": "string",
            "printType": "string",
            "printedPageCount": 0,
            "publishedDate": "string",
            "publisher": "string",
            "ratingsCount": 0,
            "readingModes": {
              "image": true,
              "text": true
            },
            "samplePageCount": 0,
            "seriesInfo": {
              "bookDisplayNumber": "string",
              "kind": "string",
              "shortSeriesBookTitle": "string",
              "volumeSeries": [
                {
                  "issue": [
                    {
                      "issueDisplayNumber": "string",
                      "issueOrderNumber": 0
                    }
                  ],
                  "orderNumber": 0,
                  "seriesBookType": "string",
                  "seriesId": "string"
                }
              ]
            },
            "subtitle": "string",
            "title": "string"
          }
        }
      ]
    }
  ],
  "kind": "string",
  "totalClusters": 0
}
```

<h3 id="bookspersonalizedstreamget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Discoveryclusters](#schemadiscoveryclusters)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-promooffer">promooffer</h1>

## books.promooffer.accept

<a id="opIdbooks.promooffer.accept"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/promooffer/accept \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/promooffer/accept`

Accepts the promo offer.

<h3 id="bookspromoofferaccept-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|androidId|query|string|false|device android_id|
|device|query|string|false|device device|
|manufacturer|query|string|false|device manufacturer|
|model|query|string|false|device model|
|offerId|query|string|false|none|
|product|query|string|false|device product|
|serial|query|string|false|device serial|
|volumeId|query|string|false|Volume id to exercise the offer|
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

<h3 id="bookspromoofferaccept-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.promooffer.dismiss

<a id="opIdbooks.promooffer.dismiss"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/promooffer/dismiss \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/promooffer/dismiss`

Marks the promo offer as dismissed.

<h3 id="bookspromoofferdismiss-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|androidId|query|string|false|device android_id|
|device|query|string|false|device device|
|manufacturer|query|string|false|device manufacturer|
|model|query|string|false|device model|
|offerId|query|string|false|Offer to dimiss|
|product|query|string|false|device product|
|serial|query|string|false|device serial|
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

<h3 id="bookspromoofferdismiss-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.promooffer.get

<a id="opIdbooks.promooffer.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/promooffer/get \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/promooffer/get`

Returns a list of promo offers available to the user

<h3 id="bookspromoofferget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|androidId|query|string|false|device android_id|
|device|query|string|false|device device|
|manufacturer|query|string|false|device manufacturer|
|model|query|string|false|device model|
|product|query|string|false|device product|
|serial|query|string|false|device serial|
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
  "items": [
    {
      "artUrl": "string",
      "gservicesKey": "string",
      "id": "string",
      "items": [
        {
          "author": "string",
          "canonicalVolumeLink": "string",
          "coverUrl": "string",
          "description": "string",
          "title": "string",
          "volumeId": "string"
        }
      ]
    }
  ],
  "kind": "string"
}
```

<h3 id="bookspromoofferget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Offers](#schemaoffers)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-series">series</h1>

## books.series.get

<a id="opIdbooks.series.get"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/series/get?series_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/series/get`

Returns Series metadata for the given series ids.

<h3 id="booksseriesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|series_id|query|[string]|true|String that identifies the series|
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
  "kind": "string",
  "series": [
    {
      "bannerImageUrl": "string",
      "eligibleForSubscription": true,
      "imageUrl": "string",
      "isComplete": true,
      "seriesFormatType": "string",
      "seriesId": "string",
      "seriesSubscriptionReleaseInfo": {
        "cancelTime": "string",
        "currentReleaseInfo": {
          "amountInMicros": 0,
          "currencyCode": "string",
          "releaseNumber": "string",
          "releaseTime": "string"
        },
        "nextReleaseInfo": {
          "amountInMicros": 0,
          "currencyCode": "string",
          "releaseNumber": "string",
          "releaseTime": "string"
        },
        "seriesSubscriptionType": "string"
      },
      "seriesType": "string",
      "subscriptionId": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="booksseriesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Series](#schemaseries)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.series.membership.get

<a id="opIdbooks.series.membership.get"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/series/membership/get?series_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/series/membership/get`

Returns Series membership data given the series id.

<h3 id="booksseriesmembershipget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|series_id|query|string|true|String that identifies the series|
|page_size|query|integer|false|Number of maximum results per page to be included in the response.|
|page_token|query|string|false|The value of the nextToken from the previous page.|
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
  "kind": "string",
  "member": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="booksseriesmembershipget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Seriesmembership](#schemaseriesmembership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

<h1 id="books-api-volumes">volumes</h1>

## books.volumes.list

<a id="opIdbooks.volumes.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/volumes?q=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes`

Performs a book search.

<h3 id="booksvolumeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|Full-text search query string.|
|download|query|string|false|Restrict to volumes by download availability.|
|filter|query|string|false|Filter search results.|
|langRestrict|query|string|false|Restrict results to books with this language code.|
|libraryRestrict|query|string|false|Restrict search to this user's library.|
|maxAllowedMaturityRating|query|string|false|The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.|
|maxResults|query|integer|false|Maximum number of results to return.|
|orderBy|query|string|false|Sort search results.|
|partner|query|string|false|Restrict and brand results for partner ID.|
|printType|query|string|false|Restrict to books or magazines.|
|projection|query|string|false|Restrict information returned to a set of selected fields.|
|showPreorders|query|boolean|false|Set to true to show books available for preorder. Defaults to false.|
|source|query|string|false|String to identify the originator of this request.|
|startIndex|query|integer|false|Index of the first result to return (starts at 0)|
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
|download|DOWNLOAD_UNDEFINED|
|download|EPUB|
|filter|FILTER_UNDEFINED|
|filter|ebooks|
|filter|free-ebooks|
|filter|full|
|filter|paid-ebooks|
|filter|partial|
|libraryRestrict|LIBRARY_RESTRICT_UNDEFINED|
|libraryRestrict|my-library|
|libraryRestrict|no-restrict|
|maxAllowedMaturityRating|MAX_ALLOWED_MATURITY_RATING_UNDEFINED|
|maxAllowedMaturityRating|MATURE|
|maxAllowedMaturityRating|not-mature|
|orderBy|ORDER_BY_UNDEFINED|
|orderBy|newest|
|orderBy|relevance|
|printType|PRINT_TYPE_UNDEFINED|
|printType|ALL|
|printType|BOOKS|
|printType|MAGAZINES|
|projection|PROJECTION_UNDEFINED|
|projection|FULL|
|projection|LITE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

<h3 id="booksvolumeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumes](#schemavolumes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.volumes.mybooks.list

<a id="opIdbooks.volumes.mybooks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/volumes/mybooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/mybooks`

Return a list of books in My Library.

<h3 id="booksvolumesmybookslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|acquireMethod|query|[string]|false|How the book was acquired|
|country|query|string|false|ISO-3166-1 code to override the IP-based location.|
|locale|query|string|false|ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.|
|maxResults|query|integer|false|Maximum number of results to return.|
|processingState|query|[string]|false|The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.|
|source|query|string|false|String to identify the originator of this request.|
|startIndex|query|integer|false|Index of the first result to return (starts at 0)|
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
|acquireMethod|ACQUIRE_METHOD_UNDEFINED|
|acquireMethod|FAMILY_SHARED|
|acquireMethod|PREORDERED|
|acquireMethod|PREVIOUSLY_RENTED|
|acquireMethod|PUBLIC_DOMAIN|
|acquireMethod|PURCHASED|
|acquireMethod|RENTED|
|acquireMethod|SAMPLE|
|acquireMethod|UPLOADED|
|processingState|PROCESSING_STATE_UNDEFINED|
|processingState|COMPLETED_FAILED|
|processingState|COMPLETED_SUCCESS|
|processingState|RUNNING|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

<h3 id="booksvolumesmybookslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumes](#schemavolumes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.volumes.recommended.list

<a id="opIdbooks.volumes.recommended.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/volumes/recommended \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/recommended`

Return a list of recommended books for the current user.

<h3 id="booksvolumesrecommendedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.|
|maxAllowedMaturityRating|query|string|false|The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.|
|source|query|string|false|String to identify the originator of this request.|
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
|maxAllowedMaturityRating|MAX_ALLOWED_MATURITY_RATING_UNDEFINED|
|maxAllowedMaturityRating|MATURE|
|maxAllowedMaturityRating|not-mature|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

<h3 id="booksvolumesrecommendedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumes](#schemavolumes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.volumes.recommended.rate

<a id="opIdbooks.volumes.recommended.rate"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/books/v1/volumes/recommended/rate?rating=RATING_UNDEFINED&volumeId=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /books/v1/volumes/recommended/rate`

Rate a recommended book for the current user.

<h3 id="booksvolumesrecommendedrate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rating|query|string|true|Rating to be given to the volume.|
|volumeId|query|string|true|ID of the source volume.|
|locale|query|string|false|ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.|
|source|query|string|false|String to identify the originator of this request.|
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
|rating|RATING_UNDEFINED|
|rating|HAVE_IT|
|rating|NOT_INTERESTED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "consistency_token": "string"
}
```

<h3 id="booksvolumesrecommendedrate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BooksVolumesRecommendedRateResponse](#schemabooksvolumesrecommendedrateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.volumes.useruploaded.list

<a id="opIdbooks.volumes.useruploaded.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/volumes/useruploaded \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/useruploaded`

Return a list of books uploaded by the current user.

<h3 id="booksvolumesuseruploadedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.|
|maxResults|query|integer|false|Maximum number of results to return.|
|processingState|query|[string]|false|The processing state of the user uploaded volumes to be returned.|
|source|query|string|false|String to identify the originator of this request.|
|startIndex|query|integer|false|Index of the first result to return (starts at 0)|
|volumeId|query|[string]|false|The ids of the volumes to be returned. If not specified all that match the processingState are returned.|
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
|processingState|PROCESSING_STATE_UNDEFINED|
|processingState|COMPLETED_FAILED|
|processingState|COMPLETED_SUCCESS|
|processingState|RUNNING|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

<h3 id="booksvolumesuseruploadedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumes](#schemavolumes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.volumes.get

<a id="opIdbooks.volumes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/volumes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/{volumeId}`

Gets volume information for a single volume.

<h3 id="booksvolumesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|ID of volume to retrieve.|
|country|query|string|false|ISO-3166-1 code to override the IP-based location.|
|includeNonComicsSeries|query|boolean|false|Set to true to include non-comics series. Defaults to false.|
|partner|query|string|false|Brand results for partner ID.|
|projection|query|string|false|Restrict information returned to a set of selected fields.|
|source|query|string|false|string to identify the originator of this request.|
|user_library_consistent_read|query|boolean|false|none|
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
|projection|PROJECTION_UNDEFINED|
|projection|FULL|
|projection|LITE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "accessInfo": {
    "accessViewStatus": "string",
    "country": "string",
    "downloadAccess": {
      "deviceAllowed": true,
      "downloadsAcquired": 0,
      "justAcquired": true,
      "kind": "string",
      "maxDownloadDevices": 0,
      "message": "string",
      "nonce": "string",
      "reasonCode": "string",
      "restricted": true,
      "signature": "string",
      "source": "string",
      "volumeId": "string"
    },
    "driveImportedContentLink": "string",
    "embeddable": true,
    "epub": {
      "acsTokenLink": "string",
      "downloadLink": "string",
      "isAvailable": true
    },
    "explicitOfflineLicenseManagement": true,
    "pdf": {
      "acsTokenLink": "string",
      "downloadLink": "string",
      "isAvailable": true
    },
    "publicDomain": true,
    "quoteSharingAllowed": true,
    "textToSpeechPermission": "string",
    "viewOrderUrl": "string",
    "viewability": "string",
    "webReaderLink": "string"
  },
  "etag": "string",
  "id": "string",
  "kind": "string",
  "layerInfo": {
    "layers": [
      {
        "layerId": "string",
        "volumeAnnotationsVersion": "string"
      }
    ]
  },
  "recommendedInfo": {
    "explanation": "string"
  },
  "saleInfo": {
    "buyLink": "string",
    "country": "string",
    "isEbook": true,
    "listPrice": {
      "amount": 0,
      "currencyCode": "string"
    },
    "offers": [
      {
        "finskyOfferType": 0,
        "giftable": true,
        "listPrice": {
          "amountInMicros": 0,
          "currencyCode": "string"
        },
        "rentalDuration": {
          "count": 0,
          "unit": "string"
        },
        "retailPrice": {
          "amountInMicros": 0,
          "currencyCode": "string"
        }
      }
    ],
    "onSaleDate": "string",
    "retailPrice": {
      "amount": 0,
      "currencyCode": "string"
    },
    "saleability": "string"
  },
  "searchInfo": {
    "textSnippet": "string"
  },
  "selfLink": "string",
  "userInfo": {
    "acquiredTime": "string",
    "acquisitionType": 0,
    "copy": {
      "allowedCharacterCount": 0,
      "limitType": "string",
      "remainingCharacterCount": 0,
      "updated": "string"
    },
    "entitlementType": 0,
    "familySharing": {
      "familyRole": "string",
      "isSharingAllowed": true,
      "isSharingDisabledByFop": true
    },
    "isFamilySharedFromUser": true,
    "isFamilySharedToUser": true,
    "isFamilySharingAllowed": true,
    "isFamilySharingDisabledByFop": true,
    "isInMyBooks": true,
    "isPreordered": true,
    "isPurchased": true,
    "isUploaded": true,
    "readingPosition": {
      "epubCfiPosition": "string",
      "gbImagePosition": "string",
      "gbTextPosition": "string",
      "kind": "string",
      "pdfPosition": "string",
      "updated": "string",
      "volumeId": "string"
    },
    "rentalPeriod": {
      "endUtcSec": "string",
      "startUtcSec": "string"
    },
    "rentalState": "string",
    "review": {
      "author": {
        "displayName": "string"
      },
      "content": "string",
      "date": "string",
      "fullTextUrl": "string",
      "kind": "string",
      "rating": "string",
      "source": {
        "description": "string",
        "extraDescription": "string",
        "url": "string"
      },
      "title": "string",
      "type": "string",
      "volumeId": "string"
    },
    "updated": "string",
    "userUploadedVolumeInfo": {
      "processingState": "string"
    }
  },
  "volumeInfo": {
    "allowAnonLogging": true,
    "authors": [
      "string"
    ],
    "averageRating": 0,
    "canonicalVolumeLink": "string",
    "categories": [
      "string"
    ],
    "comicsContent": true,
    "contentVersion": "string",
    "description": "string",
    "dimensions": {
      "height": "string",
      "thickness": "string",
      "width": "string"
    },
    "imageLinks": {
      "extraLarge": "string",
      "large": "string",
      "medium": "string",
      "small": "string",
      "smallThumbnail": "string",
      "thumbnail": "string"
    },
    "industryIdentifiers": [
      {
        "identifier": "string",
        "type": "string"
      }
    ],
    "infoLink": "string",
    "language": "string",
    "mainCategory": "string",
    "maturityRating": "string",
    "pageCount": 0,
    "panelizationSummary": {
      "containsEpubBubbles": true,
      "containsImageBubbles": true,
      "epubBubbleVersion": "string",
      "imageBubbleVersion": "string"
    },
    "previewLink": "string",
    "printType": "string",
    "printedPageCount": 0,
    "publishedDate": "string",
    "publisher": "string",
    "ratingsCount": 0,
    "readingModes": {
      "image": true,
      "text": true
    },
    "samplePageCount": 0,
    "seriesInfo": {
      "bookDisplayNumber": "string",
      "kind": "string",
      "shortSeriesBookTitle": "string",
      "volumeSeries": [
        {
          "issue": [
            {
              "issueDisplayNumber": "string",
              "issueOrderNumber": 0
            }
          ],
          "orderNumber": 0,
          "seriesBookType": "string",
          "seriesId": "string"
        }
      ]
    },
    "subtitle": "string",
    "title": "string"
  }
}
```

<h3 id="booksvolumesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volume](#schemavolume)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

## books.volumes.associated.list

<a id="opIdbooks.volumes.associated.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/books/v1/volumes/string/associated \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /books/v1/volumes/{volumeId}/associated`

Return a list of associated books.

<h3 id="booksvolumesassociatedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeId|path|string|true|ID of the source volume.|
|association|query|string|false|Association type.|
|locale|query|string|false|ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.|
|maxAllowedMaturityRating|query|string|false|The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.|
|source|query|string|false|String to identify the originator of this request.|
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
|association|ASSOCIATION_UNDEFINED|
|association|end-of-sample|
|association|end-of-volume|
|association|related-for-play|
|maxAllowedMaturityRating|MAX_ALLOWED_MATURITY_RATING_UNDEFINED|
|maxAllowedMaturityRating|MATURE|
|maxAllowedMaturityRating|not-mature|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

<h3 id="booksvolumesassociatedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Volumes](#schemavolumes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/books ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/books )
</aside>

# Schemas

<h2 id="tocS_Annotation">Annotation</h2>
<!-- backwards compatibility -->
<a id="schemaannotation"></a>
<a id="schema_Annotation"></a>
<a id="tocSannotation"></a>
<a id="tocsannotation"></a>

```json
{
  "afterSelectedText": "string",
  "beforeSelectedText": "string",
  "clientVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "created": "string",
  "currentVersionRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "imageCfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "data": "string",
  "deleted": true,
  "highlightStyle": "string",
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "layerSummary": {
    "allowedCharacterCount": 0,
    "limitType": "string",
    "remainingCharacterCount": 0
  },
  "pageIds": [
    "string"
  ],
  "selectedText": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterSelectedText|string|false|none|Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.|
|beforeSelectedText|string|false|none|Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.|
|clientVersionRanges|object|false|none|Selection ranges sent from the client.|
|created|string|false|none|Timestamp for the created time of this annotation.|
|currentVersionRanges|object|false|none|Selection ranges for the most recent content version.|
|data|string|false|none|User-created data for this annotation.|
|deleted|boolean|false|none|Indicates that this annotation is deleted.|
|highlightStyle|string|false|none|The highlight style for this annotation.|
|id|string|false|none|Id of this annotation, in the form of a GUID.|
|kind|string|false|none|Resource type.|
|layerId|string|false|none|The layer this annotation is for.|
|layerSummary|object|false|none|none|
|pageIds|[string]|false|none|Pages that this annotation spans.|
|selectedText|string|false|none|Excerpt from the volume.|
|selfLink|string|false|none|URL to this resource.|
|updated|string|false|none|Timestamp for the last time this annotation was modified.|
|volumeId|string|false|none|The volume that this annotation belongs to.|

<h2 id="tocS_Annotations">Annotations</h2>
<!-- backwards compatibility -->
<a id="schemaannotations"></a>
<a id="schema_Annotations"></a>
<a id="tocSannotations"></a>
<a id="tocsannotations"></a>

```json
{
  "items": [
    {
      "afterSelectedText": "string",
      "beforeSelectedText": "string",
      "clientVersionRanges": {
        "cfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "contentVersion": "string",
        "gbImageRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "gbTextRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "imageCfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        }
      },
      "created": "string",
      "currentVersionRanges": {
        "cfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "contentVersion": "string",
        "gbImageRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "gbTextRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "imageCfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        }
      },
      "data": "string",
      "deleted": true,
      "highlightStyle": "string",
      "id": "string",
      "kind": "string",
      "layerId": "string",
      "layerSummary": {
        "allowedCharacterCount": 0,
        "limitType": "string",
        "remainingCharacterCount": 0
      },
      "pageIds": [
        "string"
      ],
      "selectedText": "string",
      "selfLink": "string",
      "updated": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "totalItems": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Annotation](#schemaannotation)]|false|none|A list of annotations.|
|kind|string|false|none|Resource type.|
|nextPageToken|string|false|none|Token to pass in for pagination for the next page. This will not be present if this request does not have more results.|
|totalItems|integer(int32)|false|none|Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated.|

<h2 id="tocS_AnnotationsSummary">AnnotationsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaannotationssummary"></a>
<a id="schema_AnnotationsSummary"></a>
<a id="tocSannotationssummary"></a>
<a id="tocsannotationssummary"></a>

```json
{
  "kind": "string",
  "layers": [
    {
      "allowedCharacterCount": 0,
      "layerId": "string",
      "limitType": "string",
      "remainingCharacterCount": 0,
      "updated": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|none|
|layers|[object]|false|none|none|

<h2 id="tocS_Annotationsdata">Annotationsdata</h2>
<!-- backwards compatibility -->
<a id="schemaannotationsdata"></a>
<a id="schema_Annotationsdata"></a>
<a id="tocSannotationsdata"></a>
<a id="tocsannotationsdata"></a>

```json
{
  "items": [
    {
      "annotationType": "string",
      "data": {
        "common": {
          "lang": "string",
          "previewImageUrl": "string",
          "snippet": "string",
          "snippetUrl": "string",
          "title": "string"
        },
        "geo": {
          "boundary": [
            "string"
          ],
          "cachePolicy": "string",
          "countryCode": "string",
          "latitude": 0,
          "longitude": 0,
          "mapType": "string",
          "viewport": {
            "hi": {
              "latitude": 0,
              "longitude": 0
            },
            "lo": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "zoom": 0
        },
        "kind": "string"
      },
      "encodedData": "string",
      "id": "string",
      "kind": "string",
      "layerId": "string",
      "selfLink": "string",
      "updated": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "totalItems": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[GeoAnnotationdata](#schemageoannotationdata)]|false|none|A list of Annotation Data.|
|kind|string|false|none|Resource type|
|nextPageToken|string|false|none|Token to pass in for pagination for the next page. This will not be present if this request does not have more results.|
|totalItems|integer(int32)|false|none|The total number of volume annotations found.|

<h2 id="tocS_BooksAnnotationsRange">BooksAnnotationsRange</h2>
<!-- backwards compatibility -->
<a id="schemabooksannotationsrange"></a>
<a id="schema_BooksAnnotationsRange"></a>
<a id="tocSbooksannotationsrange"></a>
<a id="tocsbooksannotationsrange"></a>

```json
{
  "endOffset": "string",
  "endPosition": "string",
  "startOffset": "string",
  "startPosition": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endOffset|string|false|none|The offset from the ending position.|
|endPosition|string|false|none|The ending position for the range.|
|startOffset|string|false|none|The offset from the starting position.|
|startPosition|string|false|none|The starting position for the range.|

<h2 id="tocS_BooksCloudloadingResource">BooksCloudloadingResource</h2>
<!-- backwards compatibility -->
<a id="schemabookscloudloadingresource"></a>
<a id="schema_BooksCloudloadingResource"></a>
<a id="tocSbookscloudloadingresource"></a>
<a id="tocsbookscloudloadingresource"></a>

```json
{
  "author": "string",
  "processingState": "string",
  "title": "string",
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|none|
|processingState|string|false|none|none|
|title|string|false|none|none|
|volumeId|string|false|none|none|

<h2 id="tocS_BooksVolumesRecommendedRateResponse">BooksVolumesRecommendedRateResponse</h2>
<!-- backwards compatibility -->
<a id="schemabooksvolumesrecommendedrateresponse"></a>
<a id="schema_BooksVolumesRecommendedRateResponse"></a>
<a id="tocSbooksvolumesrecommendedrateresponse"></a>
<a id="tocsbooksvolumesrecommendedrateresponse"></a>

```json
{
  "consistency_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consistency_token|string|false|none|none|

<h2 id="tocS_Bookshelf">Bookshelf</h2>
<!-- backwards compatibility -->
<a id="schemabookshelf"></a>
<a id="schema_Bookshelf"></a>
<a id="tocSbookshelf"></a>
<a id="tocsbookshelf"></a>

```json
{
  "access": "string",
  "created": "string",
  "description": "string",
  "id": 0,
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string",
  "volumeCount": 0,
  "volumesLastUpdated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|none|Whether this bookshelf is PUBLIC or PRIVATE.|
|created|string|false|none|Created time for this bookshelf (formatted UTC timestamp with millisecond resolution).|
|description|string|false|none|Description of this bookshelf.|
|id|integer(int32)|false|none|Id of this bookshelf, only unique by user.|
|kind|string|false|none|Resource type for bookshelf metadata.|
|selfLink|string|false|none|URL to this resource.|
|title|string|false|none|Title of this bookshelf.|
|updated|string|false|none|Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution).|
|volumeCount|integer(int32)|false|none|Number of volumes in this bookshelf.|
|volumesLastUpdated|string|false|none|Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution).|

<h2 id="tocS_Bookshelves">Bookshelves</h2>
<!-- backwards compatibility -->
<a id="schemabookshelves"></a>
<a id="schema_Bookshelves"></a>
<a id="tocSbookshelves"></a>
<a id="tocsbookshelves"></a>

```json
{
  "items": [
    {
      "access": "string",
      "created": "string",
      "description": "string",
      "id": 0,
      "kind": "string",
      "selfLink": "string",
      "title": "string",
      "updated": "string",
      "volumeCount": 0,
      "volumesLastUpdated": "string"
    }
  ],
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Bookshelf](#schemabookshelf)]|false|none|A list of bookshelves.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "items": [
    {
      "badgeUrl": "string",
      "categoryId": "string",
      "name": "string"
    }
  ],
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|A list of onboarding categories.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_ConcurrentAccessRestriction">ConcurrentAccessRestriction</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentaccessrestriction"></a>
<a id="schema_ConcurrentAccessRestriction"></a>
<a id="tocSconcurrentaccessrestriction"></a>
<a id="tocsconcurrentaccessrestriction"></a>

```json
{
  "deviceAllowed": true,
  "kind": "string",
  "maxConcurrentDevices": 0,
  "message": "string",
  "nonce": "string",
  "reasonCode": "string",
  "restricted": true,
  "signature": "string",
  "source": "string",
  "timeWindowSeconds": 0,
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceAllowed|boolean|false|none|Whether access is granted for this (user, device, volume).|
|kind|string|false|none|Resource type.|
|maxConcurrentDevices|integer(int32)|false|none|The maximum number of concurrent access licenses for this volume.|
|message|string|false|none|Error/warning message.|
|nonce|string|false|none|Client nonce for verification. Download access and client-validation only.|
|reasonCode|string|false|none|Error/warning reason code.|
|restricted|boolean|false|none|Whether this volume has any concurrent access restrictions.|
|signature|string|false|none|Response signature.|
|source|string|false|none|Client app identifier for verification. Download access and client-validation only.|
|timeWindowSeconds|integer(int32)|false|none|Time in seconds for license auto-expiration.|
|volumeId|string|false|none|Identifies the volume for which this entry applies.|

<h2 id="tocS_DictionaryAnnotationdata">DictionaryAnnotationdata</h2>
<!-- backwards compatibility -->
<a id="schemadictionaryannotationdata"></a>
<a id="schema_DictionaryAnnotationdata"></a>
<a id="tocSdictionaryannotationdata"></a>
<a id="tocsdictionaryannotationdata"></a>

```json
{
  "annotationType": "string",
  "data": {
    "common": {
      "title": "string"
    },
    "dict": {
      "source": {
        "attribution": "string",
        "url": "string"
      },
      "words": [
        {
          "derivatives": [
            {
              "source": {
                "attribution": "string",
                "url": "string"
              },
              "text": "string"
            }
          ],
          "examples": [
            {
              "source": {
                "attribution": "string",
                "url": "string"
              },
              "text": "string"
            }
          ],
          "senses": [
            {
              "conjugations": [
                {
                  "type": "string",
                  "value": "string"
                }
              ],
              "definitions": [
                {
                  "definition": "string",
                  "examples": [
                    {
                      "source": {
                        "attribution": "string",
                        "url": "string"
                      },
                      "text": "string"
                    }
                  ]
                }
              ],
              "partOfSpeech": "string",
              "pronunciation": "string",
              "pronunciationUrl": "string",
              "source": {
                "attribution": "string",
                "url": "string"
              },
              "syllabification": "string",
              "synonyms": [
                {
                  "source": {
                    "attribution": "string",
                    "url": "string"
                  },
                  "text": "string"
                }
              ]
            }
          ],
          "source": {
            "attribution": "string",
            "url": "string"
          }
        }
      ]
    },
    "kind": "string"
  },
  "encodedData": "string",
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationType|string|false|none|The type of annotation this data is for.|
|data|[Dictlayerdata](#schemadictlayerdata)|false|none|JSON encoded data for this dictionary annotation data. Emitted with name 'data' in JSON output. Either this or geo_data will be populated.|
|encodedData|string(byte)|false|none|Base64 encoded data for this annotation data.|
|id|string|false|none|Unique id for this annotation data.|
|kind|string|false|none|Resource Type|
|layerId|string|false|none|The Layer id for this data. *|
|selfLink|string|false|none|URL for this resource. *|
|updated|string|false|none|Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).|
|volumeId|string|false|none|The volume id for this data. *|

<h2 id="tocS_Dictlayerdata">Dictlayerdata</h2>
<!-- backwards compatibility -->
<a id="schemadictlayerdata"></a>
<a id="schema_Dictlayerdata"></a>
<a id="tocSdictlayerdata"></a>
<a id="tocsdictlayerdata"></a>

```json
{
  "common": {
    "title": "string"
  },
  "dict": {
    "source": {
      "attribution": "string",
      "url": "string"
    },
    "words": [
      {
        "derivatives": [
          {
            "source": {
              "attribution": "string",
              "url": "string"
            },
            "text": "string"
          }
        ],
        "examples": [
          {
            "source": {
              "attribution": "string",
              "url": "string"
            },
            "text": "string"
          }
        ],
        "senses": [
          {
            "conjugations": [
              {
                "type": "string",
                "value": "string"
              }
            ],
            "definitions": [
              {
                "definition": "string",
                "examples": [
                  {
                    "source": {
                      "attribution": "string",
                      "url": "string"
                    },
                    "text": "string"
                  }
                ]
              }
            ],
            "partOfSpeech": "string",
            "pronunciation": "string",
            "pronunciationUrl": "string",
            "source": {
              "attribution": "string",
              "url": "string"
            },
            "syllabification": "string",
            "synonyms": [
              {
                "source": {
                  "attribution": "string",
                  "url": "string"
                },
                "text": "string"
              }
            ]
          }
        ],
        "source": {
          "attribution": "string",
          "url": "string"
        }
      }
    ]
  },
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|object|false|none|none|
|dict|object|false|none|none|
|kind|string|false|none|none|

<h2 id="tocS_Discoveryclusters">Discoveryclusters</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveryclusters"></a>
<a id="schema_Discoveryclusters"></a>
<a id="tocSdiscoveryclusters"></a>
<a id="tocsdiscoveryclusters"></a>

```json
{
  "clusters": [
    {
      "banner_with_content_container": {
        "fillColorArgb": "string",
        "imageUrl": "string",
        "maskColorArgb": "string",
        "moreButtonText": "string",
        "moreButtonUrl": "string",
        "textColorArgb": "string"
      },
      "subTitle": "string",
      "title": "string",
      "totalVolumes": 0,
      "uid": "string",
      "volumes": [
        {
          "accessInfo": {
            "accessViewStatus": "string",
            "country": "string",
            "downloadAccess": {
              "deviceAllowed": true,
              "downloadsAcquired": 0,
              "justAcquired": true,
              "kind": "string",
              "maxDownloadDevices": 0,
              "message": "string",
              "nonce": "string",
              "reasonCode": "string",
              "restricted": true,
              "signature": "string",
              "source": "string",
              "volumeId": "string"
            },
            "driveImportedContentLink": "string",
            "embeddable": true,
            "epub": {
              "acsTokenLink": "string",
              "downloadLink": "string",
              "isAvailable": true
            },
            "explicitOfflineLicenseManagement": true,
            "pdf": {
              "acsTokenLink": "string",
              "downloadLink": "string",
              "isAvailable": true
            },
            "publicDomain": true,
            "quoteSharingAllowed": true,
            "textToSpeechPermission": "string",
            "viewOrderUrl": "string",
            "viewability": "string",
            "webReaderLink": "string"
          },
          "etag": "string",
          "id": "string",
          "kind": "string",
          "layerInfo": {
            "layers": [
              {
                "layerId": "string",
                "volumeAnnotationsVersion": "string"
              }
            ]
          },
          "recommendedInfo": {
            "explanation": "string"
          },
          "saleInfo": {
            "buyLink": "string",
            "country": "string",
            "isEbook": true,
            "listPrice": {
              "amount": 0,
              "currencyCode": "string"
            },
            "offers": [
              {
                "finskyOfferType": 0,
                "giftable": true,
                "listPrice": {
                  "amountInMicros": 0,
                  "currencyCode": "string"
                },
                "rentalDuration": {
                  "count": 0,
                  "unit": "string"
                },
                "retailPrice": {
                  "amountInMicros": 0,
                  "currencyCode": "string"
                }
              }
            ],
            "onSaleDate": "string",
            "retailPrice": {
              "amount": 0,
              "currencyCode": "string"
            },
            "saleability": "string"
          },
          "searchInfo": {
            "textSnippet": "string"
          },
          "selfLink": "string",
          "userInfo": {
            "acquiredTime": "string",
            "acquisitionType": 0,
            "copy": {
              "allowedCharacterCount": 0,
              "limitType": "string",
              "remainingCharacterCount": 0,
              "updated": "string"
            },
            "entitlementType": 0,
            "familySharing": {
              "familyRole": "string",
              "isSharingAllowed": true,
              "isSharingDisabledByFop": true
            },
            "isFamilySharedFromUser": true,
            "isFamilySharedToUser": true,
            "isFamilySharingAllowed": true,
            "isFamilySharingDisabledByFop": true,
            "isInMyBooks": true,
            "isPreordered": true,
            "isPurchased": true,
            "isUploaded": true,
            "readingPosition": {
              "epubCfiPosition": "string",
              "gbImagePosition": "string",
              "gbTextPosition": "string",
              "kind": "string",
              "pdfPosition": "string",
              "updated": "string",
              "volumeId": "string"
            },
            "rentalPeriod": {
              "endUtcSec": "string",
              "startUtcSec": "string"
            },
            "rentalState": "string",
            "review": {
              "author": {
                "displayName": "string"
              },
              "content": "string",
              "date": "string",
              "fullTextUrl": "string",
              "kind": "string",
              "rating": "string",
              "source": {
                "description": "string",
                "extraDescription": "string",
                "url": "string"
              },
              "title": "string",
              "type": "string",
              "volumeId": "string"
            },
            "updated": "string",
            "userUploadedVolumeInfo": {
              "processingState": "string"
            }
          },
          "volumeInfo": {
            "allowAnonLogging": true,
            "authors": [
              "string"
            ],
            "averageRating": 0,
            "canonicalVolumeLink": "string",
            "categories": [
              "string"
            ],
            "comicsContent": true,
            "contentVersion": "string",
            "description": "string",
            "dimensions": {
              "height": "string",
              "thickness": "string",
              "width": "string"
            },
            "imageLinks": {
              "extraLarge": "string",
              "large": "string",
              "medium": "string",
              "small": "string",
              "smallThumbnail": "string",
              "thumbnail": "string"
            },
            "industryIdentifiers": [
              {
                "identifier": "string",
                "type": "string"
              }
            ],
            "infoLink": "string",
            "language": "string",
            "mainCategory": "string",
            "maturityRating": "string",
            "pageCount": 0,
            "panelizationSummary": {
              "containsEpubBubbles": true,
              "containsImageBubbles": true,
              "epubBubbleVersion": "string",
              "imageBubbleVersion": "string"
            },
            "previewLink": "string",
            "printType": "string",
            "printedPageCount": 0,
            "publishedDate": "string",
            "publisher": "string",
            "ratingsCount": 0,
            "readingModes": {
              "image": true,
              "text": true
            },
            "samplePageCount": 0,
            "seriesInfo": {
              "bookDisplayNumber": "string",
              "kind": "string",
              "shortSeriesBookTitle": "string",
              "volumeSeries": [
                {
                  "issue": [
                    {
                      "issueDisplayNumber": "string",
                      "issueOrderNumber": 0
                    }
                  ],
                  "orderNumber": 0,
                  "seriesBookType": "string",
                  "seriesId": "string"
                }
              ]
            },
            "subtitle": "string",
            "title": "string"
          }
        }
      ]
    }
  ],
  "kind": "string",
  "totalClusters": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|[object]|false|none|none|
|kind|string|false|none|Resorce type.|
|totalClusters|integer(int32)|false|none|none|

<h2 id="tocS_DownloadAccessRestriction">DownloadAccessRestriction</h2>
<!-- backwards compatibility -->
<a id="schemadownloadaccessrestriction"></a>
<a id="schema_DownloadAccessRestriction"></a>
<a id="tocSdownloadaccessrestriction"></a>
<a id="tocsdownloadaccessrestriction"></a>

```json
{
  "deviceAllowed": true,
  "downloadsAcquired": 0,
  "justAcquired": true,
  "kind": "string",
  "maxDownloadDevices": 0,
  "message": "string",
  "nonce": "string",
  "reasonCode": "string",
  "restricted": true,
  "signature": "string",
  "source": "string",
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceAllowed|boolean|false|none|If restricted, whether access is granted for this (user, device, volume).|
|downloadsAcquired|integer(int32)|false|none|If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).|
|justAcquired|boolean|false|none|If deviceAllowed, whether access was just acquired with this request.|
|kind|string|false|none|Resource type.|
|maxDownloadDevices|integer(int32)|false|none|If restricted, the maximum number of content download licenses for this volume.|
|message|string|false|none|Error/warning message.|
|nonce|string|false|none|Client nonce for verification. Download access and client-validation only.|
|reasonCode|string|false|none|Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS|
|restricted|boolean|false|none|Whether this volume has any download access restrictions.|
|signature|string|false|none|Response signature.|
|source|string|false|none|Client app identifier for verification. Download access and client-validation only.|
|volumeId|string|false|none|Identifies the volume for which this entry applies.|

<h2 id="tocS_DownloadAccesses">DownloadAccesses</h2>
<!-- backwards compatibility -->
<a id="schemadownloadaccesses"></a>
<a id="schema_DownloadAccesses"></a>
<a id="tocSdownloadaccesses"></a>
<a id="tocsdownloadaccesses"></a>

```json
{
  "downloadAccessList": [
    {
      "deviceAllowed": true,
      "downloadsAcquired": 0,
      "justAcquired": true,
      "kind": "string",
      "maxDownloadDevices": 0,
      "message": "string",
      "nonce": "string",
      "reasonCode": "string",
      "restricted": true,
      "signature": "string",
      "source": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadAccessList|[[DownloadAccessRestriction](#schemadownloadaccessrestriction)]|false|none|A list of download access responses.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_FamilyInfo">FamilyInfo</h2>
<!-- backwards compatibility -->
<a id="schemafamilyinfo"></a>
<a id="schema_FamilyInfo"></a>
<a id="tocSfamilyinfo"></a>
<a id="tocsfamilyinfo"></a>

```json
{
  "kind": "string",
  "membership": {
    "acquirePermission": "string",
    "ageGroup": "string",
    "allowedMaturityRating": "string",
    "isInFamily": true,
    "role": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Resource type.|
|membership|object|false|none|Family membership info of the user that made the request.|

<h2 id="tocS_GeoAnnotationdata">GeoAnnotationdata</h2>
<!-- backwards compatibility -->
<a id="schemageoannotationdata"></a>
<a id="schema_GeoAnnotationdata"></a>
<a id="tocSgeoannotationdata"></a>
<a id="tocsgeoannotationdata"></a>

```json
{
  "annotationType": "string",
  "data": {
    "common": {
      "lang": "string",
      "previewImageUrl": "string",
      "snippet": "string",
      "snippetUrl": "string",
      "title": "string"
    },
    "geo": {
      "boundary": [
        "string"
      ],
      "cachePolicy": "string",
      "countryCode": "string",
      "latitude": 0,
      "longitude": 0,
      "mapType": "string",
      "viewport": {
        "hi": {
          "latitude": 0,
          "longitude": 0
        },
        "lo": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "zoom": 0
    },
    "kind": "string"
  },
  "encodedData": "string",
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationType|string|false|none|The type of annotation this data is for.|
|data|[Geolayerdata](#schemageolayerdata)|false|none|JSON encoded data for this geo annotation data. Emitted with name 'data' in JSON output. Either this or dict_data will be populated.|
|encodedData|string(byte)|false|none|Base64 encoded data for this annotation data.|
|id|string|false|none|Unique id for this annotation data.|
|kind|string|false|none|Resource Type|
|layerId|string|false|none|The Layer id for this data. *|
|selfLink|string|false|none|URL for this resource. *|
|updated|string|false|none|Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).|
|volumeId|string|false|none|The volume id for this data. *|

<h2 id="tocS_Geolayerdata">Geolayerdata</h2>
<!-- backwards compatibility -->
<a id="schemageolayerdata"></a>
<a id="schema_Geolayerdata"></a>
<a id="tocSgeolayerdata"></a>
<a id="tocsgeolayerdata"></a>

```json
{
  "common": {
    "lang": "string",
    "previewImageUrl": "string",
    "snippet": "string",
    "snippetUrl": "string",
    "title": "string"
  },
  "geo": {
    "boundary": [
      "string"
    ],
    "cachePolicy": "string",
    "countryCode": "string",
    "latitude": 0,
    "longitude": 0,
    "mapType": "string",
    "viewport": {
      "hi": {
        "latitude": 0,
        "longitude": 0
      },
      "lo": {
        "latitude": 0,
        "longitude": 0
      }
    },
    "zoom": 0
  },
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|common|object|false|none|none|
|geo|object|false|none|none|
|kind|string|false|none|none|

<h2 id="tocS_Layersummaries">Layersummaries</h2>
<!-- backwards compatibility -->
<a id="schemalayersummaries"></a>
<a id="schema_Layersummaries"></a>
<a id="tocSlayersummaries"></a>
<a id="tocslayersummaries"></a>

```json
{
  "items": [
    {
      "annotationCount": 0,
      "annotationTypes": [
        "string"
      ],
      "annotationsDataLink": "string",
      "annotationsLink": "string",
      "contentVersion": "string",
      "dataCount": 0,
      "id": "string",
      "kind": "string",
      "layerId": "string",
      "selfLink": "string",
      "updated": "string",
      "volumeAnnotationsVersion": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Layersummary](#schemalayersummary)]|false|none|A list of layer summary items.|
|kind|string|false|none|Resource type.|
|totalItems|integer(int32)|false|none|The total number of layer summaries found.|

<h2 id="tocS_Layersummary">Layersummary</h2>
<!-- backwards compatibility -->
<a id="schemalayersummary"></a>
<a id="schema_Layersummary"></a>
<a id="tocSlayersummary"></a>
<a id="tocslayersummary"></a>

```json
{
  "annotationCount": 0,
  "annotationTypes": [
    "string"
  ],
  "annotationsDataLink": "string",
  "annotationsLink": "string",
  "contentVersion": "string",
  "dataCount": 0,
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeAnnotationsVersion": "string",
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationCount|integer(int32)|false|none|The number of annotations for this layer.|
|annotationTypes|[string]|false|none|The list of annotation types contained for this layer.|
|annotationsDataLink|string|false|none|Link to get data for this annotation.|
|annotationsLink|string|false|none|The link to get the annotations for this layer.|
|contentVersion|string|false|none|The content version this resource is for.|
|dataCount|integer(int32)|false|none|The number of data items for this layer.|
|id|string|false|none|Unique id of this layer summary.|
|kind|string|false|none|Resource Type|
|layerId|string|false|none|The layer id for this summary.|
|selfLink|string|false|none|URL to this resource.|
|updated|string|false|none|Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format).|
|volumeAnnotationsVersion|string|false|none|The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.|
|volumeId|string|false|none|The volume id this resource is for.|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "items": [
    {
      "download_url": "string",
      "encrypted_key": "string",
      "language": "string",
      "size": "string",
      "version": "string"
    }
  ],
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|A list of offline dictionary metadata.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "body": "string",
  "crmExperimentIds": [
    "string"
  ],
  "doc_id": "string",
  "doc_type": "string",
  "dont_show_notification": true,
  "iconUrl": "string",
  "is_document_mature": true,
  "kind": "string",
  "notificationGroup": "string",
  "notification_type": "string",
  "pcampaign_id": "string",
  "reason": "string",
  "show_notification_settings_action": true,
  "targetUrl": "string",
  "timeToExpireMs": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|crmExperimentIds|[string(int64)]|false|none|The list of crm experiment ids.|
|doc_id|string|false|none|none|
|doc_type|string|false|none|none|
|dont_show_notification|boolean|false|none|none|
|iconUrl|string|false|none|none|
|is_document_mature|boolean|false|none|none|
|kind|string|false|none|Resource type.|
|notificationGroup|string|false|none|none|
|notification_type|string|false|none|none|
|pcampaign_id|string|false|none|none|
|reason|string|false|none|none|
|show_notification_settings_action|boolean|false|none|none|
|targetUrl|string|false|none|none|
|timeToExpireMs|string(int64)|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_Offers">Offers</h2>
<!-- backwards compatibility -->
<a id="schemaoffers"></a>
<a id="schema_Offers"></a>
<a id="tocSoffers"></a>
<a id="tocsoffers"></a>

```json
{
  "items": [
    {
      "artUrl": "string",
      "gservicesKey": "string",
      "id": "string",
      "items": [
        {
          "author": "string",
          "canonicalVolumeLink": "string",
          "coverUrl": "string",
          "description": "string",
          "title": "string",
          "volumeId": "string"
        }
      ]
    }
  ],
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|A list of offers.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_ReadingPosition">ReadingPosition</h2>
<!-- backwards compatibility -->
<a id="schemareadingposition"></a>
<a id="schema_ReadingPosition"></a>
<a id="tocSreadingposition"></a>
<a id="tocsreadingposition"></a>

```json
{
  "epubCfiPosition": "string",
  "gbImagePosition": "string",
  "gbTextPosition": "string",
  "kind": "string",
  "pdfPosition": "string",
  "updated": "string",
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epubCfiPosition|string|false|none|Position in an EPUB as a CFI.|
|gbImagePosition|string|false|none|Position in a volume for image-based content.|
|gbTextPosition|string|false|none|Position in a volume for text-based content.|
|kind|string|false|none|Resource type for a reading position.|
|pdfPosition|string|false|none|Position in a PDF file.|
|updated|string|false|none|Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution).|
|volumeId|string|false|none|Volume id associated with this reading position.|

<h2 id="tocS_RequestAccessData">RequestAccessData</h2>
<!-- backwards compatibility -->
<a id="schemarequestaccessdata"></a>
<a id="schema_RequestAccessData"></a>
<a id="tocSrequestaccessdata"></a>
<a id="tocsrequestaccessdata"></a>

```json
{
  "concurrentAccess": {
    "deviceAllowed": true,
    "kind": "string",
    "maxConcurrentDevices": 0,
    "message": "string",
    "nonce": "string",
    "reasonCode": "string",
    "restricted": true,
    "signature": "string",
    "source": "string",
    "timeWindowSeconds": 0,
    "volumeId": "string"
  },
  "downloadAccess": {
    "deviceAllowed": true,
    "downloadsAcquired": 0,
    "justAcquired": true,
    "kind": "string",
    "maxDownloadDevices": 0,
    "message": "string",
    "nonce": "string",
    "reasonCode": "string",
    "restricted": true,
    "signature": "string",
    "source": "string",
    "volumeId": "string"
  },
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrentAccess|[ConcurrentAccessRestriction](#schemaconcurrentaccessrestriction)|false|none|A concurrent access response.|
|downloadAccess|[DownloadAccessRestriction](#schemadownloadaccessrestriction)|false|none|A download access response.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_Review">Review</h2>
<!-- backwards compatibility -->
<a id="schemareview"></a>
<a id="schema_Review"></a>
<a id="tocSreview"></a>
<a id="tocsreview"></a>

```json
{
  "author": {
    "displayName": "string"
  },
  "content": "string",
  "date": "string",
  "fullTextUrl": "string",
  "kind": "string",
  "rating": "string",
  "source": {
    "description": "string",
    "extraDescription": "string",
    "url": "string"
  },
  "title": "string",
  "type": "string",
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|object|false|none|Author of this review.|
|content|string|false|none|Review text.|
|date|string|false|none|Date of this review.|
|fullTextUrl|string|false|none|URL for the full review text, for reviews gathered from the web.|
|kind|string|false|none|Resource type for a review.|
|rating|string|false|none|Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED.|
|source|object|false|none|Information regarding the source of this review, when the review is not from a Google Books user.|
|title|string|false|none|Title for this review.|
|type|string|false|none|Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER.|
|volumeId|string|false|none|Volume that this review is for.|

<h2 id="tocS_Series">Series</h2>
<!-- backwards compatibility -->
<a id="schemaseries"></a>
<a id="schema_Series"></a>
<a id="tocSseries"></a>
<a id="tocsseries"></a>

```json
{
  "kind": "string",
  "series": [
    {
      "bannerImageUrl": "string",
      "eligibleForSubscription": true,
      "imageUrl": "string",
      "isComplete": true,
      "seriesFormatType": "string",
      "seriesId": "string",
      "seriesSubscriptionReleaseInfo": {
        "cancelTime": "string",
        "currentReleaseInfo": {
          "amountInMicros": 0,
          "currencyCode": "string",
          "releaseNumber": "string",
          "releaseTime": "string"
        },
        "nextReleaseInfo": {
          "amountInMicros": 0,
          "currencyCode": "string",
          "releaseNumber": "string",
          "releaseTime": "string"
        },
        "seriesSubscriptionType": "string"
      },
      "seriesType": "string",
      "subscriptionId": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Resource type.|
|series|[object]|false|none|none|

<h2 id="tocS_Seriesmembership">Seriesmembership</h2>
<!-- backwards compatibility -->
<a id="schemaseriesmembership"></a>
<a id="schema_Seriesmembership"></a>
<a id="tocSseriesmembership"></a>
<a id="tocsseriesmembership"></a>

```json
{
  "kind": "string",
  "member": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Resorce type.|
|member|[[Volume](#schemavolume)]|false|none|none|
|nextPageToken|string|false|none|none|

<h2 id="tocS_Usersettings">Usersettings</h2>
<!-- backwards compatibility -->
<a id="schemausersettings"></a>
<a id="schema_Usersettings"></a>
<a id="tocSusersettings"></a>
<a id="tocsusersettings"></a>

```json
{
  "kind": "string",
  "notesExport": {
    "folderName": "string",
    "isEnabled": true
  },
  "notification": {
    "matchMyInterests": {
      "opted_state": "string"
    },
    "moreFromAuthors": {
      "opted_state": "string"
    },
    "moreFromSeries": {
      "opted_state": "string"
    },
    "priceDrop": {
      "opted_state": "string"
    },
    "rewardExpirations": {
      "opted_state": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Resource type.|
|notesExport|object|false|none|User settings in sub-objects, each for different purposes.|
|notification|object|false|none|none|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "accessInfo": {
    "accessViewStatus": "string",
    "country": "string",
    "downloadAccess": {
      "deviceAllowed": true,
      "downloadsAcquired": 0,
      "justAcquired": true,
      "kind": "string",
      "maxDownloadDevices": 0,
      "message": "string",
      "nonce": "string",
      "reasonCode": "string",
      "restricted": true,
      "signature": "string",
      "source": "string",
      "volumeId": "string"
    },
    "driveImportedContentLink": "string",
    "embeddable": true,
    "epub": {
      "acsTokenLink": "string",
      "downloadLink": "string",
      "isAvailable": true
    },
    "explicitOfflineLicenseManagement": true,
    "pdf": {
      "acsTokenLink": "string",
      "downloadLink": "string",
      "isAvailable": true
    },
    "publicDomain": true,
    "quoteSharingAllowed": true,
    "textToSpeechPermission": "string",
    "viewOrderUrl": "string",
    "viewability": "string",
    "webReaderLink": "string"
  },
  "etag": "string",
  "id": "string",
  "kind": "string",
  "layerInfo": {
    "layers": [
      {
        "layerId": "string",
        "volumeAnnotationsVersion": "string"
      }
    ]
  },
  "recommendedInfo": {
    "explanation": "string"
  },
  "saleInfo": {
    "buyLink": "string",
    "country": "string",
    "isEbook": true,
    "listPrice": {
      "amount": 0,
      "currencyCode": "string"
    },
    "offers": [
      {
        "finskyOfferType": 0,
        "giftable": true,
        "listPrice": {
          "amountInMicros": 0,
          "currencyCode": "string"
        },
        "rentalDuration": {
          "count": 0,
          "unit": "string"
        },
        "retailPrice": {
          "amountInMicros": 0,
          "currencyCode": "string"
        }
      }
    ],
    "onSaleDate": "string",
    "retailPrice": {
      "amount": 0,
      "currencyCode": "string"
    },
    "saleability": "string"
  },
  "searchInfo": {
    "textSnippet": "string"
  },
  "selfLink": "string",
  "userInfo": {
    "acquiredTime": "string",
    "acquisitionType": 0,
    "copy": {
      "allowedCharacterCount": 0,
      "limitType": "string",
      "remainingCharacterCount": 0,
      "updated": "string"
    },
    "entitlementType": 0,
    "familySharing": {
      "familyRole": "string",
      "isSharingAllowed": true,
      "isSharingDisabledByFop": true
    },
    "isFamilySharedFromUser": true,
    "isFamilySharedToUser": true,
    "isFamilySharingAllowed": true,
    "isFamilySharingDisabledByFop": true,
    "isInMyBooks": true,
    "isPreordered": true,
    "isPurchased": true,
    "isUploaded": true,
    "readingPosition": {
      "epubCfiPosition": "string",
      "gbImagePosition": "string",
      "gbTextPosition": "string",
      "kind": "string",
      "pdfPosition": "string",
      "updated": "string",
      "volumeId": "string"
    },
    "rentalPeriod": {
      "endUtcSec": "string",
      "startUtcSec": "string"
    },
    "rentalState": "string",
    "review": {
      "author": {
        "displayName": "string"
      },
      "content": "string",
      "date": "string",
      "fullTextUrl": "string",
      "kind": "string",
      "rating": "string",
      "source": {
        "description": "string",
        "extraDescription": "string",
        "url": "string"
      },
      "title": "string",
      "type": "string",
      "volumeId": "string"
    },
    "updated": "string",
    "userUploadedVolumeInfo": {
      "processingState": "string"
    }
  },
  "volumeInfo": {
    "allowAnonLogging": true,
    "authors": [
      "string"
    ],
    "averageRating": 0,
    "canonicalVolumeLink": "string",
    "categories": [
      "string"
    ],
    "comicsContent": true,
    "contentVersion": "string",
    "description": "string",
    "dimensions": {
      "height": "string",
      "thickness": "string",
      "width": "string"
    },
    "imageLinks": {
      "extraLarge": "string",
      "large": "string",
      "medium": "string",
      "small": "string",
      "smallThumbnail": "string",
      "thumbnail": "string"
    },
    "industryIdentifiers": [
      {
        "identifier": "string",
        "type": "string"
      }
    ],
    "infoLink": "string",
    "language": "string",
    "mainCategory": "string",
    "maturityRating": "string",
    "pageCount": 0,
    "panelizationSummary": {
      "containsEpubBubbles": true,
      "containsImageBubbles": true,
      "epubBubbleVersion": "string",
      "imageBubbleVersion": "string"
    },
    "previewLink": "string",
    "printType": "string",
    "printedPageCount": 0,
    "publishedDate": "string",
    "publisher": "string",
    "ratingsCount": 0,
    "readingModes": {
      "image": true,
      "text": true
    },
    "samplePageCount": 0,
    "seriesInfo": {
      "bookDisplayNumber": "string",
      "kind": "string",
      "shortSeriesBookTitle": "string",
      "volumeSeries": [
        {
          "issue": [
            {
              "issueDisplayNumber": "string",
              "issueOrderNumber": 0
            }
          ],
          "orderNumber": 0,
          "seriesBookType": "string",
          "seriesId": "string"
        }
      ]
    },
    "subtitle": "string",
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessInfo|object|false|none|Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).|
|etag|string|false|none|Opaque identifier for a specific version of a volume resource. (In LITE projection)|
|id|string|false|none|Unique identifier for a volume. (In LITE projection.)|
|kind|string|false|none|Resource type for a volume. (In LITE projection.)|
|layerInfo|object|false|none|What layers exist in this volume and high level information about them.|
|recommendedInfo|object|false|none|Recommendation related information for this volume.|
|saleInfo|object|false|none|Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).|
|searchInfo|object|false|none|Search result information related to this volume.|
|selfLink|string|false|none|URL to this resource. (In LITE projection.)|
|userInfo|object|false|none|User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)|
|volumeInfo|object|false|none|General volume information.|

<h2 id="tocS_Volume2">Volume2</h2>
<!-- backwards compatibility -->
<a id="schemavolume2"></a>
<a id="schema_Volume2"></a>
<a id="tocSvolume2"></a>
<a id="tocsvolume2"></a>

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Volume](#schemavolume)]|false|none|A list of volumes.|
|kind|string|false|none|Resource type.|
|nextPageToken|string|false|none|none|

<h2 id="tocS_Volumeannotation">Volumeannotation</h2>
<!-- backwards compatibility -->
<a id="schemavolumeannotation"></a>
<a id="schema_Volumeannotation"></a>
<a id="tocSvolumeannotation"></a>
<a id="tocsvolumeannotation"></a>

```json
{
  "annotationDataId": "string",
  "annotationDataLink": "string",
  "annotationType": "string",
  "contentRanges": {
    "cfiRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "contentVersion": "string",
    "gbImageRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    },
    "gbTextRange": {
      "endOffset": "string",
      "endPosition": "string",
      "startOffset": "string",
      "startPosition": "string"
    }
  },
  "data": "string",
  "deleted": true,
  "id": "string",
  "kind": "string",
  "layerId": "string",
  "pageIds": [
    "string"
  ],
  "selectedText": "string",
  "selfLink": "string",
  "updated": "string",
  "volumeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationDataId|string|false|none|The annotation data id for this volume annotation.|
|annotationDataLink|string|false|none|Link to get data for this annotation.|
|annotationType|string|false|none|The type of annotation this is.|
|contentRanges|object|false|none|The content ranges to identify the selected text.|
|data|string|false|none|Data for this annotation.|
|deleted|boolean|false|none|Indicates that this annotation is deleted.|
|id|string|false|none|Unique id of this volume annotation.|
|kind|string|false|none|Resource Type|
|layerId|string|false|none|The Layer this annotation is for.|
|pageIds|[string]|false|none|Pages the annotation spans.|
|selectedText|string|false|none|Excerpt from the volume.|
|selfLink|string|false|none|URL to this resource.|
|updated|string|false|none|Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format).|
|volumeId|string|false|none|The Volume this annotation is for.|

<h2 id="tocS_Volumeannotations">Volumeannotations</h2>
<!-- backwards compatibility -->
<a id="schemavolumeannotations"></a>
<a id="schema_Volumeannotations"></a>
<a id="tocSvolumeannotations"></a>
<a id="tocsvolumeannotations"></a>

```json
{
  "items": [
    {
      "annotationDataId": "string",
      "annotationDataLink": "string",
      "annotationType": "string",
      "contentRanges": {
        "cfiRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "contentVersion": "string",
        "gbImageRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        },
        "gbTextRange": {
          "endOffset": "string",
          "endPosition": "string",
          "startOffset": "string",
          "startPosition": "string"
        }
      },
      "data": "string",
      "deleted": true,
      "id": "string",
      "kind": "string",
      "layerId": "string",
      "pageIds": [
        "string"
      ],
      "selectedText": "string",
      "selfLink": "string",
      "updated": "string",
      "volumeId": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "totalItems": 0,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Volumeannotation](#schemavolumeannotation)]|false|none|A list of volume annotations.|
|kind|string|false|none|Resource type|
|nextPageToken|string|false|none|Token to pass in for pagination for the next page. This will not be present if this request does not have more results.|
|totalItems|integer(int32)|false|none|The total number of volume annotations found.|
|version|string|false|none|The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book).|

<h2 id="tocS_Volumes">Volumes</h2>
<!-- backwards compatibility -->
<a id="schemavolumes"></a>
<a id="schema_Volumes"></a>
<a id="tocSvolumes"></a>
<a id="tocsvolumes"></a>

```json
{
  "items": [
    {
      "accessInfo": {
        "accessViewStatus": "string",
        "country": "string",
        "downloadAccess": {
          "deviceAllowed": true,
          "downloadsAcquired": 0,
          "justAcquired": true,
          "kind": "string",
          "maxDownloadDevices": 0,
          "message": "string",
          "nonce": "string",
          "reasonCode": "string",
          "restricted": true,
          "signature": "string",
          "source": "string",
          "volumeId": "string"
        },
        "driveImportedContentLink": "string",
        "embeddable": true,
        "epub": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "explicitOfflineLicenseManagement": true,
        "pdf": {
          "acsTokenLink": "string",
          "downloadLink": "string",
          "isAvailable": true
        },
        "publicDomain": true,
        "quoteSharingAllowed": true,
        "textToSpeechPermission": "string",
        "viewOrderUrl": "string",
        "viewability": "string",
        "webReaderLink": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "string",
      "layerInfo": {
        "layers": [
          {
            "layerId": "string",
            "volumeAnnotationsVersion": "string"
          }
        ]
      },
      "recommendedInfo": {
        "explanation": "string"
      },
      "saleInfo": {
        "buyLink": "string",
        "country": "string",
        "isEbook": true,
        "listPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "offers": [
          {
            "finskyOfferType": 0,
            "giftable": true,
            "listPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            },
            "rentalDuration": {
              "count": 0,
              "unit": "string"
            },
            "retailPrice": {
              "amountInMicros": 0,
              "currencyCode": "string"
            }
          }
        ],
        "onSaleDate": "string",
        "retailPrice": {
          "amount": 0,
          "currencyCode": "string"
        },
        "saleability": "string"
      },
      "searchInfo": {
        "textSnippet": "string"
      },
      "selfLink": "string",
      "userInfo": {
        "acquiredTime": "string",
        "acquisitionType": 0,
        "copy": {
          "allowedCharacterCount": 0,
          "limitType": "string",
          "remainingCharacterCount": 0,
          "updated": "string"
        },
        "entitlementType": 0,
        "familySharing": {
          "familyRole": "string",
          "isSharingAllowed": true,
          "isSharingDisabledByFop": true
        },
        "isFamilySharedFromUser": true,
        "isFamilySharedToUser": true,
        "isFamilySharingAllowed": true,
        "isFamilySharingDisabledByFop": true,
        "isInMyBooks": true,
        "isPreordered": true,
        "isPurchased": true,
        "isUploaded": true,
        "readingPosition": {
          "epubCfiPosition": "string",
          "gbImagePosition": "string",
          "gbTextPosition": "string",
          "kind": "string",
          "pdfPosition": "string",
          "updated": "string",
          "volumeId": "string"
        },
        "rentalPeriod": {
          "endUtcSec": "string",
          "startUtcSec": "string"
        },
        "rentalState": "string",
        "review": {
          "author": {
            "displayName": "string"
          },
          "content": "string",
          "date": "string",
          "fullTextUrl": "string",
          "kind": "string",
          "rating": "string",
          "source": {
            "description": "string",
            "extraDescription": "string",
            "url": "string"
          },
          "title": "string",
          "type": "string",
          "volumeId": "string"
        },
        "updated": "string",
        "userUploadedVolumeInfo": {
          "processingState": "string"
        }
      },
      "volumeInfo": {
        "allowAnonLogging": true,
        "authors": [
          "string"
        ],
        "averageRating": 0,
        "canonicalVolumeLink": "string",
        "categories": [
          "string"
        ],
        "comicsContent": true,
        "contentVersion": "string",
        "description": "string",
        "dimensions": {
          "height": "string",
          "thickness": "string",
          "width": "string"
        },
        "imageLinks": {
          "extraLarge": "string",
          "large": "string",
          "medium": "string",
          "small": "string",
          "smallThumbnail": "string",
          "thumbnail": "string"
        },
        "industryIdentifiers": [
          {
            "identifier": "string",
            "type": "string"
          }
        ],
        "infoLink": "string",
        "language": "string",
        "mainCategory": "string",
        "maturityRating": "string",
        "pageCount": 0,
        "panelizationSummary": {
          "containsEpubBubbles": true,
          "containsImageBubbles": true,
          "epubBubbleVersion": "string",
          "imageBubbleVersion": "string"
        },
        "previewLink": "string",
        "printType": "string",
        "printedPageCount": 0,
        "publishedDate": "string",
        "publisher": "string",
        "ratingsCount": 0,
        "readingModes": {
          "image": true,
          "text": true
        },
        "samplePageCount": 0,
        "seriesInfo": {
          "bookDisplayNumber": "string",
          "kind": "string",
          "shortSeriesBookTitle": "string",
          "volumeSeries": [
            {
              "issue": [
                {
                  "issueDisplayNumber": "string",
                  "issueOrderNumber": 0
                }
              ],
              "orderNumber": 0,
              "seriesBookType": "string",
              "seriesId": "string"
            }
          ]
        },
        "subtitle": "string",
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "totalItems": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Volume](#schemavolume)]|false|none|A list of volumes.|
|kind|string|false|none|Resource type.|
|totalItems|integer(int32)|false|none|Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.|

<h2 id="tocS_Volumeseriesinfo">Volumeseriesinfo</h2>
<!-- backwards compatibility -->
<a id="schemavolumeseriesinfo"></a>
<a id="schema_Volumeseriesinfo"></a>
<a id="tocSvolumeseriesinfo"></a>
<a id="tocsvolumeseriesinfo"></a>

```json
{
  "bookDisplayNumber": "string",
  "kind": "string",
  "shortSeriesBookTitle": "string",
  "volumeSeries": [
    {
      "issue": [
        {
          "issueDisplayNumber": "string",
          "issueOrderNumber": 0
        }
      ],
      "orderNumber": 0,
      "seriesBookType": "string",
      "seriesId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookDisplayNumber|string|false|none|The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber.|
|kind|string|false|none|Resource type.|
|shortSeriesBookTitle|string|false|none|Short book title in the context of the series.|
|volumeSeries|[object]|false|none|none|
