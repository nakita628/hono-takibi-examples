<h1 id="gerermesaffaires-restapi">GererMesAffaires {REST:API} v1.0.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Sécurisez vos données en interfaçant votre logiciel métier avec le service en ligne GererMesAffaires

Base URLs:

* <a href="https://sandbox.gerermesaffaires.com/api/v1/">https://sandbox.gerermesaffaires.com/api/v1/</a> - Sandbox server for integrators

Email: <a href="mailto:api@gerermesaffaires.com">api@gerermesaffaires.com</a> 

<a href="https://api.gerermesaffaires.com/">Documentation fonctionnelle des API GererMesAffaires</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://sandbox.gerermesaffaires.com/openid/v1/authorize](https://sandbox.gerermesaffaires.com/openid/v1/authorize)
    - Token URL = [https://sandbox.gerermesaffaires.com/openid/v1/token](https://sandbox.gerermesaffaires.com/openid/v1/token)
    - Refresh URL = [https://sandbox.gerermesaffaires.com/openid/v1/token](https://sandbox.gerermesaffaires.com/openid/v1/token)

|Scope|Scope Description|
|---|---|
|box|*Originally missing*|
|collaborator|blue access|
|hub|*Originally missing*|
|owner|green access|

    - Flow: clientCredentials
    - Token URL = [https://sandbox.gerermesaffaires.com/openid/v1/token](https://sandbox.gerermesaffaires.com/openid/v1/token)
    - Refresh URL = [https://sandbox.gerermesaffaires.com/openid/v1/token](https://sandbox.gerermesaffaires.com/openid/v1/token)

|Scope|Scope Description|
|---|---|
|box|*Originally missing*|
|hub|*Originally missing*|
|robot|server access|

<h1 id="gerermesaffaires-restapi-default">Default</h1>

## get/box/menus

> Code samples

```bash
curl https://example.com/box/menus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /box/menus`

Returns predefined folders and workbooks of the Box for all the spaces

> Example responses

> 200 Response

```json
{
  "Menus": [
    {
      "Class": "Customer",
      "Id": "/F/Piozhgzihgiahgoi",
      "Name": "My Folder"
    }
  ],
  "SpaceId": "PFHIAH4684",
  "SpaceName": "Mon entreprise"
}
```

<h3 id="getboxmenus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|menus tree of the hub/box|Inline|

<h3 id="getboxmenus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Menus|[object]|false|none|none|
|» Class|string|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|
|SpaceId|string|false|none|none|
|SpaceName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: owner )
</aside>

## get/business-groups

> Code samples

```bash
curl https://example.com/business-groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /business-groups`

Returns a list of groups custom ordered by name

<h3 id="getbusiness-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|false|Name of the group|

> Example responses

> 200 Response

```json
[
  {
    "Id": "P45IHFA",
    "ModificationDate": "20190325125042",
    "Name": "Client Durand"
  }
]
```

<h3 id="getbusiness-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of groups|Inline|

<h3 id="getbusiness-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## post/business-groups

> Code samples

```bash
curl https://example.com/business-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Name": "Client Durand"
  }'
```

`POST /business-groups`

Adds a group (only for managers and ADN collaborators)

> Body parameter

```json
{
  "Name": "Client Durand"
}
```

<h3 id="postbusiness-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|BusinessGroup to add|
|» Name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postbusiness-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of group created|Inline|

<h3 id="postbusiness-groups-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## patch/business-groups

> Code samples

```bash
curl https://example.com/business-groups \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Name": "Client Durand"
  }'
```

`PATCH /business-groups`

Modifies an object

> Body parameter

```json
{
  "Name": "Client Durand"
}
```

<h3 id="patchbusiness-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|BusinessGroup to modify|
|» Name|body|string|false|none|

<h3 id="patchbusiness-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## get/business-groups/all

> Code samples

```bash
curl https://example.com/business-groups/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /business-groups/all`

Returns list of groups custom for managers

<h3 id="getbusiness-groupsall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|false|Name of the group|

> Example responses

> 200 Response

```json
[
  {
    "Id": "P45IHFA",
    "ModificationDate": "20190325125042",
    "Name": "Client Durand"
  }
]
```

<h3 id="getbusiness-groupsall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of groups|Inline|

<h3 id="getbusiness-groupsall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## get/business-groups/{id}

> Code samples

```bash
curl https://example.com/business-groups/P18784 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /business-groups/{id}`

Returns a group

<h3 id="getbusiness-groupsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the group|

> Example responses

> 200 Response

```json
{
  "Id": "P45IHFA",
  "ModificationDate": "20190325125042",
  "Name": "Client Durand"
}
```

<h3 id="getbusiness-groupsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A group|Inline|

<h3 id="getbusiness-groupsid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## get/business-groups/{id}/spaces

> Code samples

```bash
curl https://example.com/business-groups/P18784/spaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /business-groups/{id}/spaces`

Returns spaces of the business group with id

<h3 id="getbusiness-groupsidspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the group|
|Name|query|string|false|Name of the space|
|Type|query|string|false|Type of the space|
|RegistrationNumber|query|string|false|registration number of the space|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|private|
|Type|enterprise|
|Type|company|
|Type|association|

> Example responses

> 200 Response

```json
[
  {
    "Id": "P12345",
    "ModificationDate": "20190325125042",
    "Name": "Mon Entreprise",
    "RegistrationNumber": "123456",
    "Type": "company"
  }
]
```

<h3 id="getbusiness-groupsidspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Spaces|Inline|

<h3 id="getbusiness-groupsidspaces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» RegistrationNumber|string|false|none|none|
|» Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Type|private|
|» Type|enterprise|
|» Type|company|
|» Type|association|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## delete/business-groups/{id}/spaces/{spaceId}

> Code samples

```bash
curl https://example.com/business-groups/P18784/spaces/P18784 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /business-groups/{id}/spaces/{spaceId}`

Remove a customer space from partner

<h3 id="deletebusiness-groupsidspacesspaceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the group of the customer space|
|spaceId|path|string|true|Id of the space|

<h3 id="deletebusiness-groupsidspacesspaceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## post/business-groups/{id}/spaces/{spaceId}/legal-entities/{personId}/customers/{folderId}/guest-in-space

> Code samples

```bash
curl https://example.com/business-groups/P18784/spaces/P18784/legal-entities/P18784/customers/P18784/guest-in-space \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Groups": [
      "tax",
      "legal"
    ],
    "Role": "collaborator"
  }'
```

`POST /business-groups/{id}/spaces/{spaceId}/legal-entities/{personId}/customers/{folderId}/guest-in-space`

send an invitation to manager the private space of personId

> Body parameter

```json
{
  "Groups": [
    "tax",
    "legal"
  ],
  "Role": "collaborator"
}
```

<h3 id="postbusiness-groupsidspacesspaceidlegal-entitiespersonidcustomersfolderidguest-in-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the group|
|spaceId|path|string|true|Id of the company space which contains the customer folder|
|personId|path|string|true|Id of the person customer|
|folderId|path|string|true|Id of the folder customer|
|body|body|object|true|role and groups to apply to the managed private space|
|» Groups|body|[string]|false|none|
|» Role|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Groups|tax|
|» Groups|wealth management|
|» Groups|legal|
|» Role|collaborator|
|» Role|manager|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postbusiness-groupsidspacesspaceidlegal-entitiespersonidcustomersfolderidguest-in-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of space created|Inline|

<h3 id="postbusiness-groupsidspacesspaceidlegal-entitiespersonidcustomersfolderidguest-in-space-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## post/business-groups/{id}/spaces/{spaceId}/legal-entities/{personId}/customers/{folderId}/spaces

> Code samples

```bash
curl https://example.com/business-groups/P18784/spaces/P18784/legal-entities/P18784/customers/P18784/spaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Logo": {
      "Content64Encoded": "NIFHAZFA07GA=",
      "Name": "toto.png"
    },
    "Name": "Mon Entreprise",
    "TemplateSpaceId": "PKOJOFOFKAOKF",
    "Type": "company"
  }'
```

`POST /business-groups/{id}/spaces/{spaceId}/legal-entities/{personId}/customers/{folderId}/spaces`

Add a Space in a group

> Body parameter

```json
{
  "Logo": {
    "Content64Encoded": "NIFHAZFA07GA=",
    "Name": "toto.png"
  },
  "Name": "Mon Entreprise",
  "TemplateSpaceId": "PKOJOFOFKAOKF",
  "Type": "company"
}
```

<h3 id="postbusiness-groupsidspacesspaceidlegal-entitiespersonidcustomersfolderidspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the group|
|spaceId|path|string|true|Id of the company space which contains the customer folder|
|personId|path|string|true|Id of the person customer|
|folderId|path|string|true|Id of the folder customer|
|body|body|object|true|Space to add (except private)|
|» Logo|body|object|false|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Name|body|string|false|none|
|» TemplateSpaceId|body|string|false|none|
|» Type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|enterprise|
|» Type|company|
|» Type|association|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postbusiness-groupsidspacesspaceidlegal-entitiespersonidcustomersfolderidspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of space created|Inline|

<h3 id="postbusiness-groupsidspacesspaceidlegal-entitiespersonidcustomersfolderidspaces-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## get/hub/business-groups/{Id}/menus

> Code samples

```bash
curl https://example.com/hub/business-groups/P156HUFHA476/menus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hub/business-groups/{Id}/menus`

Returns predefined folders and workbooks of the Hub for all the spaces of the business group

<h3 id="gethubbusiness-groupsidmenus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|Id of the business group|

> Example responses

> 200 Response

```json
{
  "Menus": [
    {
      "Class": "Customer",
      "Id": "/F/Piozhgzihgiahgoi",
      "Name": "My Folder"
    }
  ],
  "SpaceId": "PFHIAH4684",
  "SpaceName": "Mon entreprise"
}
```

<h3 id="gethubbusiness-groupsidmenus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|menus tree of the hub/box|Inline|

<h3 id="gethubbusiness-groupsidmenus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Menus|[object]|false|none|none|
|» Class|string|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|
|SpaceId|string|false|none|none|
|SpaceName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## post/hub/documents

> Code samples

```bash
curl https://example.com/hub/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Accounting": {
      "AccountedOn": "20181202",
      "Workbook": "fiscal",
      "YearMonth": 201902
    },
    "AddContractAllowed": true,
    "Author": "Antoine Dupond",
    "Comment": "my document",
    "Date": "20161203",
    "File": {
      "Content64Encoded": "gjgjJ9FJA829H9HA18B",
      "Name": "Mon Document"
    },
    "Title": "Facture décembre"
  }'
```

`POST /hub/documents`

Add a document (this document is analyzed to be saved in the correct folder and correct space)

> Body parameter

```json
{
  "Accounting": {
    "AccountedOn": "20181202",
    "Workbook": "fiscal",
    "YearMonth": 201902
  },
  "AddContractAllowed": true,
  "Author": "Antoine Dupond",
  "Comment": "my document",
  "Date": "20161203",
  "File": {
    "Content64Encoded": "gjgjJ9FJA829H9HA18B",
    "Name": "Mon Document"
  },
  "Title": "Facture décembre"
}
```

<h3 id="posthubdocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Document to add|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» AddContractAllowed|body|boolean|false|none|
|» Author|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="posthubdocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of documents created|Inline|

<h3 id="posthubdocuments-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/hub/menus

> Code samples

```bash
curl https://example.com/hub/menus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hub/menus`

Returns predefined folders and workbooks of the Hub for all the spaces

> Example responses

> 200 Response

```json
{
  "Menus": [
    {
      "Class": "Customer",
      "Id": "/F/Piozhgzihgiahgoi",
      "Name": "My Folder"
    }
  ],
  "SpaceId": "PFHIAH4684",
  "SpaceName": "Mon entreprise"
}
```

<h3 id="gethubmenus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|menus tree of the hub/box|Inline|

<h3 id="gethubmenus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Menus|[object]|false|none|none|
|» Class|string|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|
|SpaceId|string|false|none|none|
|SpaceName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## get/hub/menus/all

> Code samples

```bash
curl https://example.com/hub/menus/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hub/menus/all`

Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces

> Example responses

> 200 Response

```json
{
  "BusinessGroup": {
    "Id": "Piozhgzihgiahgoi",
    "Name": "My BusinessGroup"
  },
  "Menus": [
    {
      "Class": "Customer",
      "Id": "/F/Piozhgzihgiahgoi",
      "Name": "My Folder"
    }
  ],
  "SpaceId": "PFHIAH4684",
  "SpaceName": "Mon entreprise"
}
```

<h3 id="gethubmenusall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|menus tree of the hub|Inline|

<h3 id="gethubmenusall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BusinessGroup|object|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|
|Menus|[object]|false|none|none|
|» Class|string|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|
|SpaceId|string|false|none|none|
|SpaceName|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator )
</aside>

## post/hub/payslips

> Code samples

```bash
curl https://example.com/hub/payslips \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Accounting": {
      "AccountedOn": "20181202",
      "Workbook": "fiscal",
      "YearMonth": 201902
    },
    "AddContractAllowed": true,
    "Author": "Antoine Dupond",
    "Comment": "my document",
    "Date": "20161203",
    "File": {
      "Content64Encoded": "gjgjJ9FJA829H9HA18B",
      "Name": "Mon Document"
    },
    "Title": "Facture décembre"
  }'
```

`POST /hub/payslips`

Add a payslip (this document is analyzed to be saved in the correct folder and correct space)

> Body parameter

```json
{
  "Accounting": {
    "AccountedOn": "20181202",
    "Workbook": "fiscal",
    "YearMonth": 201902
  },
  "AddContractAllowed": true,
  "Author": "Antoine Dupond",
  "Comment": "my document",
  "Date": "20161203",
  "File": {
    "Content64Encoded": "gjgjJ9FJA829H9HA18B",
    "Name": "Mon Document"
  },
  "Title": "Facture décembre"
}
```

<h3 id="posthubpayslips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Document to add|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» AddContractAllowed|body|boolean|false|none|
|» Author|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="posthubpayslips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of documents created|Inline|

<h3 id="posthubpayslips-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/hub/spaces/{spaceId}/documents

> Code samples

```bash
curl https://example.com/hub/spaces/P156HUFHA476/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Accounting": {
      "AccountedOn": "20181202",
      "Workbook": "fiscal",
      "YearMonth": 201902
    },
    "Author": "Antoine Dupond",
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "File": {
      "Content64Encoded": "gjgjJ9FJA829H9HA18B",
      "Name": "Mon Document"
    },
    "Title": "Facture décembre"
  }'
```

`POST /hub/spaces/{spaceId}/documents`

Add a document in a space (this document is analyzed to be saved in the correct folder)

> Body parameter

```json
{
  "Accounting": {
    "AccountedOn": "20181202",
    "Workbook": "fiscal",
    "YearMonth": 201902
  },
  "Author": "Antoine Dupond",
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "File": {
    "Content64Encoded": "gjgjJ9FJA829H9HA18B",
    "Name": "Mon Document"
  },
  "Title": "Facture décembre"
}
```

<h3 id="posthubspacesspaceiddocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Document to add|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="posthubspacesspaceiddocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of documents created|Inline|

<h3 id="posthubspacesspaceiddocuments-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/hub/spaces/{spaceId}/menus

> Code samples

```bash
curl https://example.com/hub/spaces/P156HUFHA476/menus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hub/spaces/{spaceId}/menus`

Returns predefined folders and workbooks of the Hub for the space

<h3 id="gethubspacesspaceidmenus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Folders": [
    {
      "Id": "PIHDOIAH81",
      "Name": "My Folder"
    }
  ],
  "Workbooks": [
    "customer"
  ]
}
```

<h3 id="gethubspacesspaceidmenus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|menus of the hub|Inline|

<h3 id="gethubspacesspaceidmenus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Folders|[object]|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|
|Workbooks|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/hub/spaces/{spaceId}/payslips

> Code samples

```bash
curl https://example.com/hub/spaces/P156HUFHA476/payslips \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Accounting": {
      "AccountedOn": "20181202",
      "Workbook": "fiscal",
      "YearMonth": 201902
    },
    "Author": "Antoine Dupond",
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "File": {
      "Content64Encoded": "gjgjJ9FJA829H9HA18B",
      "Name": "Mon Document"
    },
    "Title": "Facture décembre"
  }'
```

`POST /hub/spaces/{spaceId}/payslips`

Add a payslip in a space (this document is analyzed to be saved in the correct folder)

> Body parameter

```json
{
  "Accounting": {
    "AccountedOn": "20181202",
    "Workbook": "fiscal",
    "YearMonth": 201902
  },
  "Author": "Antoine Dupond",
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "File": {
    "Content64Encoded": "gjgjJ9FJA829H9HA18B",
    "Name": "Mon Document"
  },
  "Title": "Facture décembre"
}
```

<h3 id="posthubspacesspaceidpayslips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Document to add|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="posthubspacesspaceidpayslips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of documents created|Inline|

<h3 id="posthubspacesspaceidpayslips-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/menus

> Code samples

```bash
curl https://example.com/menus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /menus`

Returns predefined entries

> Example responses

> 200 Response

```json
{
  "Label": "Dossier banque",
  "MenuId": "PFHIAH4684",
  "Pictogram": "KPFJAPFJKA",
  "SubMenus": [
    {
      "Label": "Dossier banque",
      "MenuId": "/F/Piozhgzihgiahgoi",
      "Pictogram": "KPFJAPFJKA"
    }
  ]
}
```

<h3 id="getmenus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|menu tree of the hub/box|Inline|

<h3 id="getmenus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Label|string|false|none|none|
|MenuId|string|false|none|none|
|Pictogram|string|false|none|none|
|SubMenus|[object]|false|none|none|
|» Label|string|false|none|none|
|» MenuId|string|false|none|none|
|» Pictogram|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/menus/{menuId}/documents

> Code samples

```bash
curl https://example.com/menus/P156HUFHA476/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Author": "Antoine Dupond",
    "Comment": "my document",
    "Date": "20161203",
    "File": {
      "Content64Encoded": "gjgjJ9FJA829H9HA18B",
      "Name": "Mon Document"
    },
    "Title": "Facture décembre"
  }'
```

`POST /menus/{menuId}/documents`

add a document to the target menuId

> Body parameter

```json
{
  "Author": "Antoine Dupond",
  "Comment": "my document",
  "Date": "20161203",
  "File": {
    "Content64Encoded": "gjgjJ9FJA829H9HA18B",
    "Name": "Mon Document"
  },
  "Title": "Facture décembre"
}
```

<h3 id="postmenusmenuiddocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|menuId|path|string|true|Id of the space|
|body|body|object|true|Document to add|
|» Author|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "Report": "T1234"
}
```

<h3 id="postmenusmenuiddocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Report of upload|Inline|

<h3 id="postmenusmenuiddocuments-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Report|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot box hub )
</aside>

## get/profile

> Code samples

```bash
curl https://example.com/profile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /profile`

Returns status of member

<h3 id="getprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Contract|query|string|false|to get a contract (if not signed error 404 + html contract)|

> Example responses

> 200 Response

```json
{
  "Birth": {
    "City": "Créteil",
    "Country": "FR",
    "Date": "19800101",
    "ZipCode": "94000"
  },
  "BirthName": "Dupond",
  "FirstName": "Paule",
  "Name": "Durand",
  "PrivateSpaceId": "PFJAOJHFA",
  "Sex": "male",
  "Status": "Person"
}
```

<h3 id="getprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the status of the member|Inline|

<h3 id="getprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Birth|object|false|none|none|
|» City|string|false|none|none|
|» Country|string|false|none|none|
|» Date|string|false|none|none|
|» ZipCode|string|false|none|none|
|BirthName|string|false|none|none|
|FirstName|string|false|none|none|
|Name|string|false|none|none|
|PrivateSpaceId|string|false|none|none|
|Sex|string|false|none|none|
|Status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Sex|male|
|Sex|female|
|Status|validated|
|Status|not validated|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: owner )
</aside>

## post/profile

> Code samples

```bash
curl https://example.com/profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Birth": {
      "City": "Créteil",
      "Country": "FR",
      "Date": "19800101",
      "ZipCode": "94000"
    },
    "BirthName": "Dupond",
    "Email": "paule@durand.fr",
    "FirstName": "Paule",
    "IDFile": {
      "Content64Encoded": "PIHFPAH20FBIA=",
      "Name": "id.png"
    },
    "Name": "Durand",
    "Sex": "male"
  }'
```

`POST /profile`

create infos of profile

> Body parameter

```json
{
  "Birth": {
    "City": "Créteil",
    "Country": "FR",
    "Date": "19800101",
    "ZipCode": "94000"
  },
  "BirthName": "Dupond",
  "Email": "paule@durand.fr",
  "FirstName": "Paule",
  "IDFile": {
    "Content64Encoded": "PIHFPAH20FBIA=",
    "Name": "id.png"
  },
  "Name": "Durand",
  "Sex": "male"
}
```

<h3 id="postprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Profile to add|
|» Birth|body|object|true|none|
|» » City|body|string|false|none|
|» » Country|body|string|false|none|
|» » Date|body|string|false|none|
|» » ZipCode|body|string|false|none|
|» BirthName|body|string|true|none|
|» Email|body|string|true|none|
|» FirstName|body|string|true|none|
|» IDFile|body|object|false|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Name|body|string|true|none|
|» Sex|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Sex|male|
|» Sex|female|

<h3 id="postprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: owner )
</aside>

## patch/profile

> Code samples

```bash
curl https://example.com/profile \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Birth": {
      "City": "Créteil",
      "Country": "FR",
      "Date": "19800101",
      "ZipCode": "94000"
    },
    "BirthName": "Dupond",
    "Email": "paule@durand.fr",
    "FirstName": "Paule",
    "IDFile": {
      "Content64Encoded": "PIHFPAH20FBIA=",
      "Name": "id.png"
    },
    "Name": "Durand",
    "Sex": "male"
  }'
```

`PATCH /profile`

modify infos of profile

> Body parameter

```json
{
  "Birth": {
    "City": "Créteil",
    "Country": "FR",
    "Date": "19800101",
    "ZipCode": "94000"
  },
  "BirthName": "Dupond",
  "Email": "paule@durand.fr",
  "FirstName": "Paule",
  "IDFile": {
    "Content64Encoded": "PIHFPAH20FBIA=",
    "Name": "id.png"
  },
  "Name": "Durand",
  "Sex": "male"
}
```

<h3 id="patchprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Profile to add|
|» Birth|body|object|false|none|
|» » City|body|string|false|none|
|» » Country|body|string|false|none|
|» » Date|body|string|false|none|
|» » ZipCode|body|string|false|none|
|» BirthName|body|string|false|none|
|» Email|body|string|false|none|
|» FirstName|body|string|false|none|
|» IDFile|body|object|false|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Name|body|string|false|none|
|» Sex|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Sex|male|
|» Sex|female|

<h3 id="patchprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: owner )
</aside>

## patch/profile/email

> Code samples

```bash
curl https://example.com/profile/email \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Email": "paule@durand.fr"
  }'
```

`PATCH /profile/email`

modify email of profile

> Body parameter

```json
{
  "Email": "paule@durand.fr"
}
```

<h3 id="patchprofileemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Email to modify|
|» *oneOf*|body|object|false|none|
|» Email|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» Email|body|string|false|none|
|» EmailCode|body|string|false|none|
|» SMSCode|body|string|false|none|

<h3 id="patchprofileemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: owner )
</aside>

## get/profile/id-file

> Code samples

```bash
curl https://example.com/profile/id-file \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /profile/id-file`

Returns status of member

<h3 id="getprofileid-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Contract|query|string|false|to get a contract (if not signed error 404 + html contract)|

> Example responses

> 200 Response

```json
{
  "Birth": {
    "City": "Créteil",
    "Country": "FR",
    "Date": "19800101",
    "ZipCode": "94000"
  },
  "BirthName": "Dupond",
  "FirstName": "Paule",
  "IDFile": {
    "Content64Encoded": "PKDJFAJAFA"
  },
  "Name": "Durand",
  "PrivateSpaceId": "PFJAOJHFA",
  "Sex": "male",
  "Status": "Person"
}
```

<h3 id="getprofileid-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the status of the member|Inline|

<h3 id="getprofileid-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Birth|object|false|none|none|
|» City|string|false|none|none|
|» Country|string|false|none|none|
|» Date|string|false|none|none|
|» ZipCode|string|false|none|none|
|BirthName|string|false|none|none|
|FirstName|string|false|none|none|
|IDFile|object|false|none|none|
|» Content64Encoded|string|false|none|none|
|Name|string|false|none|none|
|PrivateSpaceId|string|false|none|none|
|Sex|string|false|none|none|
|Status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Sex|male|
|Sex|female|
|Status|validated|
|Status|not validated|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/profile/mobile

> Code samples

```bash
curl https://example.com/profile/mobile \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Mobile": 33606060606
  }'
```

`PATCH /profile/mobile`

modify mobile of profile

> Body parameter

```json
{
  "Mobile": 33606060606
}
```

<h3 id="patchprofilemobile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Mobile to modify|
|» *oneOf*|body|object|false|none|
|» Mobile|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» Mobile|body|string|false|none|
|» Password|body|string|false|none|
|» SMSCode|body|string|false|none|

<h3 id="patchprofilemobile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: owner )
</aside>

## get/registration

> Code samples

```bash
curl 'https://example.com/registration?Code=HFIHA' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /registration`

Returns the method to get the validation code or the link to register after invitation

<h3 id="getregistration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Code|query|string|true|Code of the invitation|

> Example responses

> 200 Response

```json
{
  "Message": "Contacter Antoine Dupond"
}
```

<h3 id="getregistration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the method to get the validation code or the registration link|Inline|

<h3 id="getregistration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|Message|string|false|none|none|
|*oneOf*|object|false|none|none|
|url|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: owner )
</aside>

## post/registration

> Code samples

```bash
curl https://example.com/registration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Code": "OJFOA",
    "Secret": 123456
  }'
```

`POST /registration`

complete the invitation

> Body parameter

```json
{
  "Code": "OJFOA",
  "Secret": 123456
}
```

<h3 id="postregistration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|code and secret to accept the invitation|
|» Code|body|string|false|none|
|» Secret|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "Private": {
    "FolderId": "POJFA987EA",
    "SpaceId": "P1234"
  }
}
```

<h3 id="postregistration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of the private space and the contract folder|Inline|

<h3 id="postregistration-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Private|object|false|none|none|
|» FolderId|string|false|none|none|
|» SpaceId|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: owner )
</aside>

## get/session

> Code samples

```bash
curl https://example.com/session \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /session`

Returns member id of user logged

> Example responses

> 200 Response

```json
{
  "MemberId": "PIFIAJHNFA972BUBF",
  "Scope": "collaborator"
}
```

<h3 id="getsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A session|Inline|

<h3 id="getsession-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberId|string|false|none|none|
|Scope|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces

> Code samples

```bash
curl https://example.com/spaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces`

Returns spaces of my group

<h3 id="getspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|false|Name of the space|
|Type|query|string|false|Type of the space|
|RegistrationNumber|query|string|false|registration number of the space|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|private|
|Type|enterprise|
|Type|company|
|Type|association|

> Example responses

> 200 Response

```json
[
  {
    "Id": "P12345",
    "ModificationDate": "20190325125042",
    "Name": "Mon Entreprise",
    "RegistrationNumber": "123456",
    "Type": "company"
  }
]
```

<h3 id="getspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Spaces|Inline|

<h3 id="getspaces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» RegistrationNumber|string|false|none|none|
|» Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Type|private|
|» Type|enterprise|
|» Type|company|
|» Type|association|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces

> Code samples

```bash
curl https://example.com/spaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "LegalStatut": "SA",
    "Logo": {
      "Content64Encoded": "NIFHAZFA07GA=",
      "Name": "toto.png"
    },
    "Name": "Mon Entreprise",
    "RegistrationNumber": 5146486846,
    "TemplateSpaceId": "PKOJOFOFKAOKF",
    "Type": "company"
  }'
```

`POST /spaces`

Add a Space in my group

> Body parameter

```json
{
  "LegalStatut": "SA",
  "Logo": {
    "Content64Encoded": "NIFHAZFA07GA=",
    "Name": "toto.png"
  },
  "Name": "Mon Entreprise",
  "RegistrationNumber": 5146486846,
  "TemplateSpaceId": "PKOJOFOFKAOKF",
  "Type": "company"
}
```

<h3 id="postspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Space to add (except private)|
|» LegalStatut|body|string|false|none|
|» Logo|body|object|false|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Name|body|string|true|none|
|» RegistrationNumber|body|string|false|none|
|» TemplateSpaceId|body|string|false|none|
|» Type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|enterprise|
|» Type|company|
|» Type|association|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of space created|Inline|

<h3 id="postspaces-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/all

> Code samples

```bash
curl https://example.com/spaces/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/all`

Returns all spaces

<h3 id="getspacesall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|false|Name of the space|
|Type|query|string|false|Type of the space|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|private|
|Type|enterprise|
|Type|company|
|Type|association|

> Example responses

> 200 Response

```json
[
  {
    "Id": "P12345",
    "ModificationDate": "20190325125042",
    "Name": "Mon Entreprise",
    "RegistrationNumber": "123456",
    "Type": "company"
  }
]
```

<h3 id="getspacesall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Spaces|Inline|

<h3 id="getspacesall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Id|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» RegistrationNumber|string|false|none|none|
|» Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Type|private|
|» Type|enterprise|
|» Type|company|
|» Type|association|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}

> Code samples

```bash
curl https://example.com/spaces/P18784 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}`

Returns a space

<h3 id="getspacesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Id": "P12345",
  "ModificationDate": "20190325125042",
  "Name": "Mon Entreprise",
  "Type": "company"
}
```

<h3 id="getspacesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A space|Inline|

<h3 id="getspacesid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|private|
|Type|enterprise|
|Type|company|
|Type|association|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{id}

> Code samples

```bash
curl https://example.com/spaces/P18784 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{id}`

Delete a Space (only space not delivered to customer)

<h3 id="deletespacesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|

<h3 id="deletespacesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}

> Code samples

```bash
curl https://example.com/spaces/P18784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Logo": {
      "Content64Encoded": "NIFHAZFA07GA=",
      "Name": "toto.png"
    },
    "Name": "Mon Entreprise",
    "TemplateSpaceId": "PHAOH8486"
  }'
```

`PATCH /spaces/{id}`

Modify a Space (except private)

> Body parameter

```json
{
  "Logo": {
    "Content64Encoded": "NIFHAZFA07GA=",
    "Name": "toto.png"
  },
  "Name": "Mon Entreprise",
  "TemplateSpaceId": "PHAOH8486"
}
```

<h3 id="patchspacesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|Space to modify (except private)|
|» Logo|body|object|false|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Name|body|string|false|none|
|» TemplateSpaceId|body|string|false|none|

<h3 id="patchspacesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/accounting-year

> Code samples

```bash
curl https://example.com/spaces/P15646476/accounting-year \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/accounting-year`

Returns list of accounting years for the space {id}

<h3 id="getspacesidaccounting-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|End|query|string|false|End date of the accounting year (YYYYMM or YYYYMMDD) (range not available)|
|EffectiveDate|query|string|false|Effective date inside  the accounting year  (range not available)|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "P45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "ogm of the company",
    "End": "20181231",
    "NetIncome": 52634.36,
    "NetPosition": 14580.36,
    "Start": "20171231",
    "Tax": 45698.36,
    "TaxableIncome": 869523.36,
    "Turnover": 1025.36
  }
]
```

<h3 id="getspacesidaccounting-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of accounting years|Inline|

<h3 id="getspacesidaccounting-year-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» NetIncome|number|false|none|none|
|» NetPosition|number|false|none|none|
|» Start|string|false|none|none|
|» Tax|number|false|none|none|
|» TaxableIncome|number|false|none|none|
|» Turnover|number|false|none|none|
|» Id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/accounting-year

> Code samples

```bash
curl https://example.com/spaces/P198746/accounting-year \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "ogm of the company",
    "End": "20181231",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "NetIncome": 52634.36,
    "NetPosition": 14580.36,
    "Start": "20180101",
    "Tax": 45698.36,
    "TaxableIncome": 869523.36,
    "Turnover": 1025.36
  }'
```

`POST /spaces/{id}/accounting-year`

Create a accounting year for the space id

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "ogm of the company",
  "End": "20181231",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "NetIncome": 52634.36,
  "NetPosition": 14580.36,
  "Start": "20180101",
  "Tax": 45698.36,
  "TaxableIncome": 869523.36,
  "Turnover": 1025.36
}
```

<h3 id="postspacesidaccounting-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|AccountingYear to add|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» End|body|string|true|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» NetIncome|body|number|false|none|
|» NetPosition|body|number|false|none|
|» Start|body|string|false|none|
|» Tax|body|number|false|none|
|» TaxableIncome|body|number|false|none|
|» Turnover|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesidaccounting-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of the accounting year created|Inline|

<h3 id="postspacesidaccounting-year-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/collective-decision

> Code samples

```bash
curl https://example.com/spaces/P15646476/collective-decision \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/collective-decision`

Returns list of collective decisions for the space {id}

<h3 id="getspacesidcollective-decision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|Date|query|string|false|Date of the collective decision YYYMMDD|
|Event|query|string|false|Event of the collective decision (see post for the list of events)|
|Range|query|string|false|index range of the results|
|HasCompanyRegistrationCertificate|query|string|false|If true returns only invoices with a CompanyRegistrationCertificate|
|HasStatus|query|string|false|If true returns only invoices with a Status|
|HasSireneRegister|query|string|false|If true returns only invoices with a SireneRegister|
|HasMinutes|query|string|false|If true returns only invoices with Minutes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|HasCompanyRegistrationCertificate|true|
|HasCompanyRegistrationCertificate|false|
|HasStatus|true|
|HasStatus|false|
|HasSireneRegister|true|
|HasSireneRegister|false|
|HasMinutes|true|
|HasMinutes|false|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "P45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "ogm of the company",
    "Date": "20180202",
    "DividendDistributions": 1025.36,
    "DividendDistributionsDate": "20180203",
    "Event": "EGM"
  }
]
```

<h3 id="getspacesidcollective-decision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of collective decisions|Inline|

<h3 id="getspacesidcollective-decision-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» DividendDistributions|number|false|none|none|
|» DividendDistributionsDate|string|false|none|none|
|» Event|string|false|none|none|
|» Id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Event|EGM|
|» Event|CGM|
|» Event|OGM|
|» Event|ConstituentAssembly|
|» Event|SolePartner|
|» Event|OtherEvent|
|» Event|Other|
|» Event|Office|
|» Event|ExecutiveCommittee|
|» Event|Consulting|
|» Event|Board|
|» Event|PartnersMeeting|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/collective-decision

> Code samples

```bash
curl https://example.com/spaces/P198746/collective-decision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "ogm of the company",
    "Date": "20180202",
    "DividendDistributions": 1025.36,
    "DividendDistributionsDate": "20180203",
    "Event": "EGM",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential"
  }'
```

`POST /spaces/{id}/collective-decision`

Create a colletive decision for the space id

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "ogm of the company",
  "Date": "20180202",
  "DividendDistributions": 1025.36,
  "DividendDistributionsDate": "20180203",
  "Event": "EGM",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential"
}
```

<h3 id="postspacesidcollective-decision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|CollectiveDecision to add|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|true|none|
|» DividendDistributions|body|number|false|none|
|» DividendDistributionsDate|body|string|false|none|
|» Event|body|string|true|for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Event|EGM|
|» Event|CGM|
|» Event|OGM|
|» Event|ConstituentAssembly|
|» Event|SolePartner|
|» Event|OtherEvent|
|» Event|Other|
|» Event|Office|
|» Event|ExecutiveCommittee|
|» Event|Consulting|
|» Event|Board|
|» Event|PartnersMeeting|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesidcollective-decision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of the collective decision created|Inline|

<h3 id="postspacesidcollective-decision-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/company-entities

> Code samples

```bash
curl https://example.com/spaces/P15646476/company-entities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/company-entities`

Returns list of company entities

<h3 id="getspacesidcompany-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|Name|query|string|false|Name of the company entity|
|LegalName|query|string|false|Legal name of the company entity|
|RegistrationNumber|query|string|false|registration number of the company entity|

> Example responses

> 200 Response

```json
[
  {
    "ArchivalDate": "20160203",
    "Comment": "my brother",
    "Id": "T45IHFA",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "ApeCode": "420F",
    "LegalName": "Mon entreprise Dupond",
    "LegalStatut": "SAS",
    "RegistrationNumber": "236542158",
    "Type": "EPT",
    "VatNumber": "46546847864"
  }
]
```

<h3 id="getspacesidcompany-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of company entities|Inline|

<h3 id="getspacesidcompany-entities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Comment|string|false|none|none|
|» Id|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» ApeCode|string|false|none|none|
|» LegalName|string|false|none|none|
|» LegalStatut|string|false|none|none|
|» RegistrationNumber|string|false|none|none|
|» Type|string|false|none|none|
|» VatNumber|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/company-entities

> Code samples

```bash
curl https://example.com/spaces/T198746/company-entities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ApeCode": "420F",
    "ArchivalDate": "20160203",
    "Comment": "my brother",
    "LegalName": "Mon entreprise Dupond",
    "LegalStatut": "SAS",
    "Name": "Dupond",
    "RegistrationNumber": "236542158",
    "Type": "EPT",
    "VatNumber": "46546847864"
  }'
```

`POST /spaces/{id}/company-entities`

Add a Company Entity in a Space

> Body parameter

```json
{
  "ApeCode": "420F",
  "ArchivalDate": "20160203",
  "Comment": "my brother",
  "LegalName": "Mon entreprise Dupond",
  "LegalStatut": "SAS",
  "Name": "Dupond",
  "RegistrationNumber": "236542158",
  "Type": "EPT",
  "VatNumber": "46546847864"
}
```

<h3 id="postspacesidcompany-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|Company to add Name or LegalName are mandatory|
|» ApeCode|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» Comment|body|string|false|none|
|» LegalName|body|string|true|none|
|» LegalStatut|body|string|false|none|
|» Name|body|string|true|none|
|» RegistrationNumber|body|string|false|none|
|» Type|body|string|false|none|
|» VatNumber|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesidcompany-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of company entity created|Inline|

<h3 id="postspacesidcompany-entities-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/company-entities/all

> Code samples

```bash
curl https://example.com/spaces/P15646476/company-entities/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/company-entities/all`

Returns list of company entities even company entities archived

<h3 id="getspacesidcompany-entitiesall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|Name|query|string|false|Name of the company entity|
|RegistrationNumber|query|string|false|registration number of the company entity|

> Example responses

> 200 Response

```json
[
  {
    "ArchivalDate": "20160203",
    "Comment": "my brother",
    "Id": "T45IHFA",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "ApeCode": "420F",
    "LegalName": "Mon entreprise Dupond",
    "LegalStatut": "SAS",
    "RegistrationNumber": "236542158",
    "Type": "EPT",
    "VatNumber": "46546847864"
  }
]
```

<h3 id="getspacesidcompany-entitiesall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of company entities|Inline|

<h3 id="getspacesidcompany-entitiesall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Comment|string|false|none|none|
|» Id|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» ApeCode|string|false|none|none|
|» LegalName|string|false|none|none|
|» LegalStatut|string|false|none|none|
|» RegistrationNumber|string|false|none|none|
|» Type|string|false|none|none|
|» VatNumber|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/company-entities/{companyId}

> Code samples

```bash
curl https://example.com/spaces/P15646476/company-entities/P15646476 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/company-entities/{companyId}`

Returns a compay entity

<h3 id="getspacesidcompany-entitiescompanyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|companyId|path|string|true|Id of the company entity|

> Example responses

> 200 Response

```json
{
  "ArchivalDate": "20160203",
  "Comment": "my brother",
  "Id": "T45IHFA",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "ApeCode": "420F",
  "LegalName": "Mon entreprise Dupond",
  "LegalStatut": "SAS",
  "RegistrationNumber": "236542158",
  "Type": "EPT",
  "VatNumber": "46546847864"
}
```

<h3 id="getspacesidcompany-entitiescompanyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A company entity|Inline|

<h3 id="getspacesidcompany-entitiescompanyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchivalDate|string|false|none|none|
|Comment|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|ApeCode|string|false|none|none|
|LegalName|string|false|none|none|
|LegalStatut|string|false|none|none|
|RegistrationNumber|string|false|none|none|
|Type|string|false|none|none|
|VatNumber|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/company-entities/{companyId}

> Code samples

```bash
curl https://example.com/spaces/P187867864/company-entities/P1863763784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ApeCode": "420F",
    "ArchivalDate": "20160203",
    "Comment": "my brother",
    "LegalName": "Mon entreprise Dupond",
    "LegalStatut": "SAS",
    "Name": "Dupond",
    "RegistrationNumber": "236542158",
    "Type": "EPT",
    "VatNumber": "46546847864"
  }'
```

`PATCH /spaces/{id}/company-entities/{companyId}`

Modify a company entity

> Body parameter

```json
{
  "ApeCode": "420F",
  "ArchivalDate": "20160203",
  "Comment": "my brother",
  "LegalName": "Mon entreprise Dupond",
  "LegalStatut": "SAS",
  "Name": "Dupond",
  "RegistrationNumber": "236542158",
  "Type": "EPT",
  "VatNumber": "46546847864"
}
```

<h3 id="patchspacesidcompany-entitiescompanyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|companyId|path|string|true|Id of the company entity to modify|
|body|body|object|true|Company entity to modify|
|» ApeCode|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» Comment|body|string|false|none|
|» LegalName|body|string|false|none|
|» LegalStatut|body|string|false|none|
|» Name|body|string|false|none|
|» RegistrationNumber|body|string|false|none|
|» Type|body|string|false|none|
|» VatNumber|body|string|false|none|

<h3 id="patchspacesidcompany-entitiescompanyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/company-entities/{personId}/details

> Code samples

```bash
curl https://example.com/spaces/P15646476/company-entities/T18784/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/company-entities/{personId}/details`

Returns all details of a company entity

<h3 id="getspacesidcompany-entitiespersoniddetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the company entity to get|

> Example responses

> 200 Response

```json
[
  {
    "Address": {
      "City": "Paris",
      "Complement": "batiment A",
      "Country": "France",
      "Street": "2, rue du chateau",
      "ZipCode": "75001"
    },
    "Designation": "Office",
    "Email": [
      [
        "bertrand@monmail.com"
      ]
    ],
    "Phone": [
      [
        "+33606060606"
      ]
    ]
  }
]
```

<h3 id="getspacesidcompany-entitiespersoniddetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of contact details of a person|Inline|

<h3 id="getspacesidcompany-entitiespersoniddetails-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Address|object|false|none|none|
|» » City|string|false|none|none|
|» » Complement|string|false|none|none|
|» » Country|string|false|none|none|
|» » Street|string|false|none|none|
|» » ZipCode|string|false|none|none|
|» Designation|string|false|none|none|
|» Email|[string]|false|none|none|
|» Phone|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/company-entities/{personId}/details

> Code samples

```bash
curl https://example.com/spaces/P18784/company-entities/P18784/details \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Address": {
      "City": "Paris",
      "Complement": "batiment A",
      "Country": "France",
      "Street": "2, rue du chateau",
      "ZipCode": "75001"
    },
    "Designation": "Office",
    "Email": [
      [
        "bertrand@monmail.com"
      ]
    ],
    "Phone": [
      [
        "+33606060606"
      ]
    ]
  }'
```

`POST /spaces/{id}/company-entities/{personId}/details`

Replace or Add a contact detail for a person

> Body parameter

```json
{
  "Address": {
    "City": "Paris",
    "Complement": "batiment A",
    "Country": "France",
    "Street": "2, rue du chateau",
    "ZipCode": "75001"
  },
  "Designation": "Office",
  "Email": [
    [
      "bertrand@monmail.com"
    ]
  ],
  "Phone": [
    [
      "+33606060606"
    ]
  ]
}
```

<h3 id="postspacesidcompany-entitiespersoniddetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person or memberId|
|body|body|object|true|Contact details to add or replace (Designation and Phone or Mail are mandatory)|
|» Address|body|object|false|none|
|» » City|body|string|false|none|
|» » Complement|body|string|false|none|
|» » Country|body|string|false|none|
|» » Street|body|string|false|none|
|» » ZipCode|body|string|false|none|
|» Designation|body|string|true|none|
|» Email|body|[string]|false|none|
|» Phone|body|[string]|false|none|

<h3 id="postspacesidcompany-entitiespersoniddetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{id}/company-entities/{personId}/details/{designation}

> Code samples

```bash
curl https://example.com/spaces/P18784/company-entities/P18784/details/P18784 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{id}/company-entities/{personId}/details/{designation}`

delete a contact detail for a company entity

<h3 id="deletespacesidcompany-entitiespersoniddetailsdesignation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person or memberId|
|designation|path|string|true|designation|

<h3 id="deletespacesidcompany-entitiespersoniddetailsdesignation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/documents/download

> Code samples

```bash
curl https://example.com/spaces/P198746/documents/download \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "DocumentId": [
      "POFA872498"
    ]
  }'
```

`POST /spaces/{id}/documents/download`

create an archive with documents

> Body parameter

```json
{
  "DocumentId": [
    "POFA872498"
  ]
}
```

<h3 id="postspacesiddocumentsdownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|Documents to archive|
|» DocumentId|body|[string]|true|none|

> Example responses

> 201 Response

```json
{
  "ZipFile": "KPFKPKAAFKFJ"
}
```

<h3 id="postspacesiddocumentsdownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Zip file base64 encoded|Inline|

<h3 id="postspacesiddocumentsdownload-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ZipFile|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/folders/{folderId}/persons/{memberId}

> Code samples

```bash
curl https://example.com/spaces/P18784/folders/T18784/persons/P18784 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/folders/{folderId}/persons/{memberId}`

return the access of a person in a customer contract

<h3 id="getspacesidfoldersfolderidpersonsmemberid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|memberId|path|string|true|memberId of the person|
|folderId|path|string|true|id of the customer folder|

> Example responses

> 200 Response

```json
[
  {
    "Active": "no",
    "IsAdmin": "yes",
    "MemberId": "P12345",
    "Name": "Antoine Dupond",
    "Role": "collaborator"
  }
]
```

<h3 id="getspacesidfoldersfolderidpersonsmemberid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the access of a person to a customer contract folder|Inline|

<h3 id="getspacesidfoldersfolderidpersonsmemberid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Active|string|false|none|none|
|» IsAdmin|string|false|none|none|
|» MemberId|string|false|none|none|
|» Name|string|false|none|none|
|» Role|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/folders/{folderId}/persons/{memberId}

> Code samples

```bash
curl https://example.com/spaces/P18784/folders/T18784/persons/P18784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Groups": [
      "social",
      "legal"
    ],
    "IsAdmin": false,
    "Role": "collaborator"
  }'
```

`PATCH /spaces/{id}/folders/{folderId}/persons/{memberId}`

Add/Modify/Delete a person in a customer contract (except manager)

> Body parameter

```json
{
  "Groups": [
    "social",
    "legal"
  ],
  "IsAdmin": false,
  "Role": "collaborator"
}
```

<h3 id="patchspacesidfoldersfolderidpersonsmemberid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|memberId|path|string|true|memberId of the person|
|folderId|path|string|true|id of the customer folder|
|body|body|object|true|Customer contract to modify|
|» Groups|body|[string]|false|none|
|» IsAdmin|body|boolean|false|none|
|» Role|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Groups|tax|
|» Groups|wealth management|
|» Groups|social|
|» Groups|social manager|
|» Groups|purchases|
|» Groups|sales|
|» Groups|legal|
|» Groups|accounting|
|» Role|collaborator|
|» Role|assistant|
|» Role|empty|

<h3 id="patchspacesidfoldersfolderidpersonsmemberid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/folders/{folderId}/persons/{memberId}/activeaccess

> Code samples

```bash
curl https://example.com/spaces/P18784/folders/T18784/persons/P18784/activeaccess \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /spaces/{id}/folders/{folderId}/persons/{memberId}/activeaccess`

open an access

<h3 id="patchspacesidfoldersfolderidpersonsmemberidactiveaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|memberId|path|string|true|memberId of the person|
|folderId|path|string|true|id of the customer folder|

<h3 id="patchspacesidfoldersfolderidpersonsmemberidactiveaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/folders/{folderId}/persons/{memberId}/unactiveaccess

> Code samples

```bash
curl https://example.com/spaces/P18784/folders/T18784/persons/P18784/unactiveaccess \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /spaces/{id}/folders/{folderId}/persons/{memberId}/unactiveaccess`

close an access

<h3 id="patchspacesidfoldersfolderidpersonsmemberidunactiveaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|memberId|path|string|true|memberId of the person|
|folderId|path|string|true|id of the customer folder|

<h3 id="patchspacesidfoldersfolderidpersonsmemberidunactiveaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/folders/{folderId}/persons/{personId}/guest-in-space

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T198NFNIAJFAA46/persons/P198NFNIAJFAA46/guest-in-space \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "PersonId": "PAIHIHFA79TFA"
  }'
```

`POST /spaces/{id}/folders/{folderId}/persons/{personId}/guest-in-space`

invite a owner in a space

> Body parameter

```json
{
  "PersonId": "PAIHIHFA79TFA"
}
```

<h3 id="postspacesidfoldersfolderidpersonspersonidguest-in-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|Id of the folder customer|
|personId|path|string|true|Id of the person to invite to his space|
|id|path|string|true|Id of the space|
|body|body|[InvitationPerson](#schemainvitationperson)|true|PersonId (if exist)of the person in the customer space|
|» PersonId|body|string|false|none|

<h3 id="postspacesidfoldersfolderidpersonspersonidguest-in-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/groups

> Code samples

```bash
curl https://example.com/spaces/P15646476/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/groups`

Returns list of groups

<h3 id="getspacesidgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|Name|query|string|false|Name of the groups|

> Example responses

> 200 Response

```json
[
  {
    "EndDate": "20160203",
    "Id": "T45IHFA",
    "Name": "RH"
  }
]
```

<h3 id="getspacesidgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of groups|Inline|

<h3 id="getspacesidgroups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» EndDate|string|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/groups

> Code samples

```bash
curl https://example.com/spaces/T198746/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "EndDate": "20160203",
    "Name": "RH"
  }'
```

`POST /spaces/{id}/groups`

Add a group in a Space

> Body parameter

```json
{
  "EndDate": "20160203",
  "Name": "RH"
}
```

<h3 id="postspacesidgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|Group|
|» EndDate|body|string|false|none|
|» Name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesidgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of company entity created|Inline|

<h3 id="postspacesidgroups-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/groups/all

> Code samples

```bash
curl https://example.com/spaces/P15646476/groups/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/groups/all`

Returns list of groups even archived of the space

<h3 id="getspacesidgroupsall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|Name|query|string|false|Name of the group|

> Example responses

> 200 Response

```json
[
  {
    "EndDate": "20160203",
    "Id": "T45IHFA",
    "Name": "RH"
  }
]
```

<h3 id="getspacesidgroupsall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of groups|Inline|

<h3 id="getspacesidgroupsall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» EndDate|string|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/groups/{groupId}

> Code samples

```bash
curl https://example.com/spaces/P15646476/groups/P15646476 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/groups/{groupId}`

Returns a group

<h3 id="getspacesidgroupsgroupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|groupId|path|string|true|Id of the group|

> Example responses

> 200 Response

```json
{
  "EndDate": "20160203",
  "Id": "T45IHFA",
  "Name": "RH",
  "Accesses": {
    "Id": "PAHIA1564165",
    "Name": "Social",
    "Right": "read"
  },
  "Persons": {
    "MemberId": "PAHIA1564165"
  }
}
```

<h3 id="getspacesidgroupsgroupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A company entity|Inline|

<h3 id="getspacesidgroupsgroupid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndDate|string|false|none|none|
|Id|string|false|none|none|
|Name|string|false|none|none|
|Accesses|object|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|
|» Right|string|false|none|none|
|Persons|object|false|none|none|
|» MemberId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Right|read|
|» Right|write|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/groups/{groupId}

> Code samples

```bash
curl https://example.com/spaces/P187867864/groups/P1863763784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "EndDate": "20160203",
    "Name": "RH"
  }'
```

`PATCH /spaces/{id}/groups/{groupId}`

Modify a group

> Body parameter

```json
{
  "EndDate": "20160203",
  "Name": "RH"
}
```

<h3 id="patchspacesidgroupsgroupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|groupId|path|string|true|Id of the group to modify|
|body|body|object|true|Group to modify|
|» EndDate|body|string|false|none|
|» Name|body|string|false|none|

<h3 id="patchspacesidgroupsgroupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{id}/groups/{groupId}/folders/{folderId}

> Code samples

```bash
curl https://example.com/spaces/P187867864/groups/P1863763784/folders/P1863763784 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{id}/groups/{groupId}/folders/{folderId}`

delete access to a folder for a group

<h3 id="deletespacesidgroupsgroupidfoldersfolderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|groupId|path|string|true|Id of the group to modify|
|folderId|path|string|true|Id of the folder|

<h3 id="deletespacesidgroupsgroupidfoldersfolderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/groups/{groupId}/folders/{folderId}

> Code samples

```bash
curl https://example.com/spaces/P187867864/groups/P1863763784/folders/P1863763784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Right": "read"
  }'
```

`PATCH /spaces/{id}/groups/{groupId}/folders/{folderId}`

Add access to a folder for a group

> Body parameter

```json
{
  "Right": "read"
}
```

<h3 id="patchspacesidgroupsgroupidfoldersfolderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|groupId|path|string|true|Id of the group to modify|
|folderId|path|string|true|Id of the folder|
|body|body|object|true|Group to modify to add folder access|
|» Right|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Right|read|
|» Right|write|

<h3 id="patchspacesidgroupsgroupidfoldersfolderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{id}/groups/{groupId}/persons/{memberId}

> Code samples

```bash
curl https://example.com/spaces/P187867864/groups/P1863763784/persons/P1863763784 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{id}/groups/{groupId}/persons/{memberId}`

Delete a person of a group

<h3 id="deletespacesidgroupsgroupidpersonsmemberid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|groupId|path|string|true|Id of the group to modify|
|memberId|path|string|true|MemberId of the person|

<h3 id="deletespacesidgroupsgroupidpersonsmemberid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/groups/{groupId}/persons/{memberId}

> Code samples

```bash
curl https://example.com/spaces/P187867864/groups/P1863763784/persons/P1863763784 \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /spaces/{id}/groups/{groupId}/persons/{memberId}`

Add a person to a group

<h3 id="patchspacesidgroupsgroupidpersonsmemberid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|groupId|path|string|true|Id of the group to modify|
|memberId|path|string|true|MemberId of the person|

<h3 id="patchspacesidgroupsgroupidpersonsmemberid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/legal

> Code samples

```bash
curl https://example.com/spaces/P18784/legal \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/legal`

Returns legal information of a space (except private)

<h3 id="getspacesidlegal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "IdentificationNumber": "548",
  "RegistrationDate": "20190325",
  "RegistrationNumber": "123456",
  "VATNumber": "123"
}
```

<h3 id="getspacesidlegal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Legal informations of a space|Inline|

<h3 id="getspacesidlegal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentificationNumber|string|false|none|none|
|RegistrationDate|string|false|none|none|
|RegistrationNumber|string|false|none|none|
|VATNumber|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/legal

> Code samples

```bash
curl https://example.com/spaces/P18784/legal \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "IdentificationNumber": "548",
    "RegistrationDate": "20190325",
    "RegistrationNumber": "123456",
    "VATNumber": "123"
  }'
```

`PATCH /spaces/{id}/legal`

Modify legal information of a Space (except private)

> Body parameter

```json
{
  "IdentificationNumber": "548",
  "RegistrationDate": "20190325",
  "RegistrationNumber": "123456",
  "VATNumber": "123"
}
```

<h3 id="patchspacesidlegal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|Legal information to modify|
|» IdentificationNumber|body|string|false|none|
|» RegistrationDate|body|string|false|none|
|» RegistrationNumber|body|string|false|none|
|» VATNumber|body|string|false|none|

<h3 id="patchspacesidlegal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/logo

> Code samples

```bash
curl https://example.com/spaces/P18784/logo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/logo`

Returns a space with the logo

<h3 id="getspacesidlogo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Id": "P12345",
  "Logo": {
    "Content64Encoded": "PHNUOAFAFOPFAF",
    "Extension": "png"
  },
  "ModificationDate": "20190325125042",
  "Name": "Mon Entreprise",
  "Type": "company"
}
```

<h3 id="getspacesidlogo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A space|Inline|

<h3 id="getspacesidlogo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|
|Logo|object|false|none|none|
|» Content64Encoded|string|false|none|none|
|» Extension|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|private|
|Type|enterprise|
|Type|company|
|Type|association|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/persons

> Code samples

```bash
curl https://example.com/spaces/P15646476/persons \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/persons`

Returns list of persons

<h3 id="getspacesidpersons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|Function|query|string|false|Function of the person|
|Range|query|string|false|index range of the results|
|Name|query|string|false|Name of the person|
|Validated|query|string|false|Status of the person|
|Email|query|string|false|Email of the person|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Validated|true|
|Validated|false|

> Example responses

> 200 Response

```json
[
  {
    "ArchivalDate": "20160203",
    "Comment": "my brother",
    "Id": "T45IHFA",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Address": {
      "City": "Paris",
      "Complement": "batiment A",
      "Country": "France",
      "Street": "2, rue du chateau",
      "ZipCode": "75001"
    },
    "Birth": {
      "Date": 19671231,
      "Place": "Lille"
    },
    "Email": "bertrand@monmail.com",
    "FirstName": "Bertrand",
    "Function": [
      "employee",
      "provider"
    ],
    "MemberId": "P1A6FD090A",
    "Mobile": "+33606060606",
    "Sex": "male",
    "Validated": "true"
  }
]
```

<h3 id="getspacesidpersons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of persons|Inline|

<h3 id="getspacesidpersons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Comment|string|false|none|none|
|» Id|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Address|object|false|none|none|
|» » City|string|false|none|none|
|» » Complement|string|false|none|none|
|» » Country|string|false|none|none|
|» » Street|string|false|none|none|
|» » ZipCode|string|false|none|none|
|» Birth|object|false|none|none|
|» » Date|integer|false|none|none|
|» » Place|string|false|none|none|
|» Email|string|false|none|none|
|» FirstName|string|false|none|none|
|» Function|[string]|false|none|none|
|» MemberId|string|false|none|none|
|» Mobile|string|false|none|none|
|» Sex|string|false|none|none|
|» Validated|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Sex|male|
|» Sex|female|
|» Validated|true|
|» Validated|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/persons

> Code samples

```bash
curl https://example.com/spaces/P198746/persons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Address": {
      "City": "Paris",
      "Complement": "batiment A",
      "Country": "France",
      "Street": "2, rue du chateau",
      "ZipCode": "75001"
    },
    "ArchivalDate": "20160203",
    "Birth": {
      "Date": 19671231,
      "Place": "Lille"
    },
    "Comment": "my brother",
    "Email": "bertrand@monmail.com",
    "FirstName": "Bertrand",
    "Mobile": "+33606060606",
    "Name": "Dupond",
    "Sex": "male"
  }'
```

`POST /spaces/{id}/persons`

Add a Person in a Space

> Body parameter

```json
{
  "Address": {
    "City": "Paris",
    "Complement": "batiment A",
    "Country": "France",
    "Street": "2, rue du chateau",
    "ZipCode": "75001"
  },
  "ArchivalDate": "20160203",
  "Birth": {
    "Date": 19671231,
    "Place": "Lille"
  },
  "Comment": "my brother",
  "Email": "bertrand@monmail.com",
  "FirstName": "Bertrand",
  "Mobile": "+33606060606",
  "Name": "Dupond",
  "Sex": "male"
}
```

<h3 id="postspacesidpersons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|Person to add|
|» Address|body|object|false|none|
|» » City|body|string|false|none|
|» » Complement|body|string|false|none|
|» » Country|body|string|false|none|
|» » Street|body|string|false|none|
|» » ZipCode|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» Birth|body|object|false|none|
|» » Date|body|integer|false|none|
|» » Place|body|string|false|none|
|» Comment|body|string|false|none|
|» Email|body|string|false|none|
|» FirstName|body|string|true|none|
|» Mobile|body|string|false|none|
|» Name|body|string|true|none|
|» Sex|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Sex|male|
|» Sex|female|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesidpersons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of person created|Inline|

<h3 id="postspacesidpersons-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/persons/all

> Code samples

```bash
curl https://example.com/spaces/P15646476/persons/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/persons/all`

Returns list of persons even persons archived

<h3 id="getspacesidpersonsall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|Name|query|string|false|Name of the person|
|Function|query|string|false|Function of the person|
|Range|query|string|false|index range of the results|
|Validated|query|string|false|Status of the person|
|Email|query|string|false|Email of the person|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Validated|true|
|Validated|false|

> Example responses

> 200 Response

```json
[
  {
    "ArchivalDate": "20160203",
    "Comment": "my brother",
    "Id": "T45IHFA",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Address": {
      "City": "Paris",
      "Complement": "batiment A",
      "Country": "France",
      "Street": "2, rue du chateau",
      "ZipCode": "75001"
    },
    "Birth": {
      "Date": 19671231,
      "Place": "Lille"
    },
    "Email": "bertrand@monmail.com",
    "FirstName": "Bertrand",
    "Function": [
      "employee",
      "provider"
    ],
    "MemberId": "P1A6FD090A",
    "Mobile": "+33606060606",
    "Sex": "male",
    "Validated": "true"
  }
]
```

<h3 id="getspacesidpersonsall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of persons|Inline|

<h3 id="getspacesidpersonsall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Comment|string|false|none|none|
|» Id|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Address|object|false|none|none|
|» » City|string|false|none|none|
|» » Complement|string|false|none|none|
|» » Country|string|false|none|none|
|» » Street|string|false|none|none|
|» » ZipCode|string|false|none|none|
|» Birth|object|false|none|none|
|» » Date|integer|false|none|none|
|» » Place|string|false|none|none|
|» Email|string|false|none|none|
|» FirstName|string|false|none|none|
|» Function|[string]|false|none|none|
|» MemberId|string|false|none|none|
|» Mobile|string|false|none|none|
|» Sex|string|false|none|none|
|» Validated|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Sex|male|
|» Sex|female|
|» Validated|true|
|» Validated|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/persons/{memberId}/player

> Code samples

```bash
curl https://example.com/spaces/P18784/persons/P18784/player \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ClientManagement": "no",
    "IsAdmin": true,
    "Player": "guest",
    "PlayerEnd": "20210203"
  }'
```

`PATCH /spaces/{id}/persons/{memberId}/player`

Modify the role of a person

> Body parameter

```json
{
  "ClientManagement": "no",
  "IsAdmin": true,
  "Player": "guest",
  "PlayerEnd": "20210203"
}
```

<h3 id="patchspacesidpersonsmemberidplayer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|memberId|path|string|true|memberId of the person|
|body|body|object|true|Person to modify|
|» ClientManagement|body|string|false|none|
|» IsAdmin|body|boolean|false|none|
|» Player|body|string|true|none|
|» PlayerEnd|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ClientManagement|no|
|» ClientManagement|manager|
|» ClientManagement|adn|
|» Player|guest|
|» Player|owner|
|» Player|manager|
|» Player|assistant|
|» Player|collaborator|

<h3 id="patchspacesidpersonsmemberidplayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/persons/{personId}

> Code samples

```bash
curl https://example.com/spaces/P15646476/persons/T18784 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/persons/{personId}`

Returns a person

<h3 id="getspacesidpersonspersonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person to get or memberId|

> Example responses

> 200 Response

```json
{
  "ArchivalDate": "20160203",
  "Comment": "my brother",
  "Id": "T45IHFA",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Address": {
    "City": "Paris",
    "Complement": "batiment A",
    "Country": "France",
    "Street": "2, rue du chateau",
    "ZipCode": "75001"
  },
  "Birth": {
    "Date": 19671231,
    "Place": "Lille"
  },
  "Email": "bertrand@monmail.com",
  "FirstName": "Bertrand",
  "Function": [
    "employee",
    "provider"
  ],
  "MemberId": "P1A6FD090A",
  "Mobile": "+33606060606",
  "Sex": "male",
  "Validated": "true"
}
```

<h3 id="getspacesidpersonspersonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A person|Inline|

<h3 id="getspacesidpersonspersonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchivalDate|string|false|none|none|
|Comment|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Address|object|false|none|none|
|» City|string|false|none|none|
|» Complement|string|false|none|none|
|» Country|string|false|none|none|
|» Street|string|false|none|none|
|» ZipCode|string|false|none|none|
|Birth|object|false|none|none|
|» Date|integer|false|none|none|
|» Place|string|false|none|none|
|Email|string|false|none|none|
|FirstName|string|false|none|none|
|Function|[string]|false|none|none|
|MemberId|string|false|none|none|
|Mobile|string|false|none|none|
|Sex|string|false|none|none|
|Validated|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|MemberId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Sex|male|
|Sex|female|
|Validated|true|
|Validated|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{id}/persons/{personId}

> Code samples

```bash
curl https://example.com/spaces/P18784/persons/P18784 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{id}/persons/{personId}`

delete a person

<h3 id="deletespacesidpersonspersonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person to modify or memberId|

<h3 id="deletespacesidpersonspersonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/persons/{personId}

> Code samples

```bash
curl https://example.com/spaces/P18784/persons/P18784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Address": {
      "City": "Paris",
      "Complement": "batiment A",
      "Country": "France",
      "Street": "2, rue du chateau",
      "ZipCode": "75001"
    },
    "ArchivalDate": "20160203",
    "Birth": {
      "Date": 19671231,
      "Place": "Lille"
    },
    "Comment": "my brother",
    "Email": "bertrand@monmail.com",
    "FirstName": "Bertrand",
    "Mobile": "+33606060606",
    "Name": "Dupond",
    "Sex": "male"
  }'
```

`PATCH /spaces/{id}/persons/{personId}`

Modify a person

> Body parameter

```json
{
  "Address": {
    "City": "Paris",
    "Complement": "batiment A",
    "Country": "France",
    "Street": "2, rue du chateau",
    "ZipCode": "75001"
  },
  "ArchivalDate": "20160203",
  "Birth": {
    "Date": 19671231,
    "Place": "Lille"
  },
  "Comment": "my brother",
  "Email": "bertrand@monmail.com",
  "FirstName": "Bertrand",
  "Mobile": "+33606060606",
  "Name": "Dupond",
  "Sex": "male"
}
```

<h3 id="patchspacesidpersonspersonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person to modify or memberId|
|body|body|object|true|Person to modify|
|» Address|body|object|false|none|
|» » City|body|string|false|none|
|» » Complement|body|string|false|none|
|» » Country|body|string|false|none|
|» » Street|body|string|false|none|
|» » ZipCode|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» Birth|body|object|false|none|
|» » Date|body|integer|false|none|
|» » Place|body|string|false|none|
|» Comment|body|string|false|none|
|» Email|body|string|false|none|
|» FirstName|body|string|false|none|
|» Mobile|body|string|false|none|
|» Name|body|string|false|none|
|» Sex|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Sex|male|
|» Sex|female|

<h3 id="patchspacesidpersonspersonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/persons/{personId}/details

> Code samples

```bash
curl https://example.com/spaces/P15646476/persons/T18784/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/persons/{personId}/details`

Returns all details of a person

<h3 id="getspacesidpersonspersoniddetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person to get or memberId|

> Example responses

> 200 Response

```json
[
  {
    "Address": {
      "City": "Paris",
      "Complement": "batiment A",
      "Country": "France",
      "Street": "2, rue du chateau",
      "ZipCode": "75001"
    },
    "Designation": "Office",
    "Email": [
      [
        "bertrand@monmail.com"
      ]
    ],
    "Phone": [
      [
        "+33606060606"
      ]
    ]
  }
]
```

<h3 id="getspacesidpersonspersoniddetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of contact details of a person|Inline|

<h3 id="getspacesidpersonspersoniddetails-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Address|object|false|none|none|
|» » City|string|false|none|none|
|» » Complement|string|false|none|none|
|» » Country|string|false|none|none|
|» » Street|string|false|none|none|
|» » ZipCode|string|false|none|none|
|» Designation|string|false|none|none|
|» Email|[string]|false|none|none|
|» Phone|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/persons/{personId}/details

> Code samples

```bash
curl https://example.com/spaces/P18784/persons/P18784/details \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Address": {
      "City": "Paris",
      "Complement": "batiment A",
      "Country": "France",
      "Street": "2, rue du chateau",
      "ZipCode": "75001"
    },
    "Designation": "Office",
    "Email": [
      [
        "bertrand@monmail.com"
      ]
    ],
    "Phone": [
      [
        "+33606060606"
      ]
    ]
  }'
```

`POST /spaces/{id}/persons/{personId}/details`

Replace or Add a contact detail for a person

> Body parameter

```json
{
  "Address": {
    "City": "Paris",
    "Complement": "batiment A",
    "Country": "France",
    "Street": "2, rue du chateau",
    "ZipCode": "75001"
  },
  "Designation": "Office",
  "Email": [
    [
      "bertrand@monmail.com"
    ]
  ],
  "Phone": [
    [
      "+33606060606"
    ]
  ]
}
```

<h3 id="postspacesidpersonspersoniddetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person or memberId|
|body|body|object|true|Contact details to add or replace (Designation and Phone or Mail are mandatory)|
|» Address|body|object|false|none|
|» » City|body|string|false|none|
|» » Complement|body|string|false|none|
|» » Country|body|string|false|none|
|» » Street|body|string|false|none|
|» » ZipCode|body|string|false|none|
|» Designation|body|string|true|none|
|» Email|body|[string]|false|none|
|» Phone|body|[string]|false|none|

<h3 id="postspacesidpersonspersoniddetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{id}/persons/{personId}/details/{designation}

> Code samples

```bash
curl https://example.com/spaces/P18784/persons/P18784/details/P18784 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{id}/persons/{personId}/details/{designation}`

delete a contact detail for a person

<h3 id="deletespacesidpersonspersoniddetailsdesignation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person or memberId|
|designation|path|string|true|designation|

<h3 id="deletespacesidpersonspersoniddetailsdesignation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/persons/{personId}/folders

> Code samples

```bash
curl https://example.com/spaces/P15646476/persons/T18784/folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/persons/{personId}/folders`

Returns list of folders with exceptionnal access of the person personId

<h3 id="getspacesidpersonspersonidfolders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person to get folders|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA"
  }
]
```

<h3 id="getspacesidpersonspersonidfolders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of folders|Inline|

<h3 id="getspacesidpersonspersonidfolders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/persons/{personId}/groups

> Code samples

```bash
curl https://example.com/spaces/P15646476/persons/T18784/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/persons/{personId}/groups`

Returns list of groups of the person personId

<h3 id="getspacesidpersonspersonidgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person to get groups|

> Example responses

> 200 Response

```json
[
  {
    "EndDate": "20160203",
    "Id": "T45IHFA",
    "Name": "RH"
  }
]
```

<h3 id="getspacesidpersonspersonidgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of groups|Inline|

<h3 id="getspacesidpersonspersonidgroups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» EndDate|string|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/persons/{personId}/portfolios

> Code samples

```bash
curl https://example.com/spaces/P15646476/persons/T18784/portfolios \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/persons/{personId}/portfolios`

Returns list of portfolios of the person personId

<h3 id="getspacesidpersonspersonidportfolios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person to get portfolios|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "P45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Designation": "My Portfolio"
  }
]
```

<h3 id="getspacesidpersonspersonidportfolios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of portfolios|Inline|

<h3 id="getspacesidpersonspersonidportfolios-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Designation|string|false|none|none|
|» Id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/persons/{personId}/portfolios

> Code samples

```bash
curl https://example.com/spaces/P198746/persons/T18784/portfolios \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Designation": "My Portfolio",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "Name": "Dupond"
  }'
```

`POST /spaces/{id}/persons/{personId}/portfolios`

Create a portfolio for the person personId

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Designation": "My Portfolio",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "Name": "Dupond"
}
```

<h3 id="postspacesidpersonspersonidportfolios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|personId|path|string|true|Id of the person who will be the owner of the portfolio|
|body|body|object|false|Portfolio to add (except Class and Name)|
|» About|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» Designation|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Name|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postspacesidpersonspersonidportfolios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of the portfolio created|Inline|

<h3 id="postspacesidpersonspersonidportfolios-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{id}/portfolios/{portfolioId}/persons/{memberId}

> Code samples

```bash
curl https://example.com/spaces/P18784/portfolios/T18784/persons/P18784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Apply": true,
    "Groups": [
      "social",
      "legal"
    ],
    "IsAdmin": false,
    "Role": "collaborator"
  }'
```

`PATCH /spaces/{id}/portfolios/{portfolioId}/persons/{memberId}`

Add/Modify/Delete a person in a portfolio (except manager)

> Body parameter

```json
{
  "Apply": true,
  "Groups": [
    "social",
    "legal"
  ],
  "IsAdmin": false,
  "Role": "collaborator"
}
```

<h3 id="patchspacesidportfoliosportfolioidpersonsmemberid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|memberId|path|string|true|memberId of the person|
|portfolioId|path|string|true|id of the portfolio|
|body|body|object|true|Portfolio to modify|
|» Apply|body|boolean|false|none|
|» Groups|body|[string]|false|none|
|» IsAdmin|body|boolean|false|none|
|» Role|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Groups|tax|
|» Groups|wealth management|
|» Groups|social|
|» Groups|social manager|
|» Groups|purchases|
|» Groups|sales|
|» Groups|legal|
|» Groups|accounting|
|» Role|collaborator|
|» Role|assistant|
|» Role|empty|

<h3 id="patchspacesidportfoliosportfolioidpersonsmemberid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/professional-vehicles

> Code samples

```bash
curl https://example.com/spaces/P15646476/professional-vehicles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/professional-vehicles`

Returns list of professionalvehicles for the space {id}

<h3 id="getspacesidprofessional-vehicles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|Designation|query|string|false|designation of the vehicle|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "P45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "Peugeot Lyon",
    "DateIn": "20201802",
    "DateOut": "20201802",
    "Designation": "peugeot siège",
    "Value": 1500.23,
    "Brand": "Renault",
    "CompanyTax": true,
    "Model": "Clio",
    "RegistrationDate": "20181231",
    "RegistrationNumber": "AA001AA",
    "Type": "car"
  }
]
```

<h3 id="getspacesidprofessional-vehicles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of professional Vehicles|Inline|

<h3 id="getspacesidprofessional-vehicles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» DateIn|string|false|none|none|
|» DateOut|string|false|none|none|
|» Designation|string|false|none|none|
|» Value|number|false|none|none|
|» Brand|string|false|none|none|
|» CompanyTax|boolean|false|none|none|
|» Model|string|false|none|none|
|» RegistrationDate|string|false|none|none|
|» RegistrationNumber|string|false|none|none|
|» Type|string|false|none|none|
|» Id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/professional-vehicles

> Code samples

```bash
curl https://example.com/spaces/P198746/professional-vehicles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Brand": "Renault",
    "Comment": "Peugeot Lyon",
    "CompanyTax": true,
    "DateIn": "20201802",
    "DateOut": "20201802",
    "Designation": "peugeot siège",
    "Home": "yes",
    "Keywords": [
      "paris",
      "clio"
    ],
    "Level": "confidential",
    "Model": "Clio",
    "RegistrationDate": "20181231",
    "RegistrationNumber": "AA001AA",
    "Type": "car",
    "Value": 1500.23
  }'
```

`POST /spaces/{id}/professional-vehicles`

Create a professional vehicle for the space

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Brand": "Renault",
  "Comment": "Peugeot Lyon",
  "CompanyTax": true,
  "DateIn": "20201802",
  "DateOut": "20201802",
  "Designation": "peugeot siège",
  "Home": "yes",
  "Keywords": [
    "paris",
    "clio"
  ],
  "Level": "confidential",
  "Model": "Clio",
  "RegistrationDate": "20181231",
  "RegistrationNumber": "AA001AA",
  "Type": "car",
  "Value": 1500.23
}
```

<h3 id="postspacesidprofessional-vehicles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|Professional vehicle to add|
|» About|body|string|false|none|
|» Brand|body|string|false|none|
|» Comment|body|string|false|none|
|» CompanyTax|body|boolean|false|none|
|» DateIn|body|string|false|none|
|» DateOut|body|string|false|none|
|» Designation|body|string|true|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Model|body|string|false|none|
|» RegistrationDate|body|string|false|none|
|» RegistrationNumber|body|string|false|none|
|» Type|body|string|false|none|
|» Value|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesidprofessional-vehicles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of the professional vehicle created|Inline|

<h3 id="postspacesidprofessional-vehicles-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/settings/nf203/logs

> Code samples

```bash
curl https://example.com/spaces/P15646476/settings/nf203/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/settings/nf203/logs`

Returns state of activation of logs

<h3 id="getspacesidsettingsnf203logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Enabled": true
}
```

<h3 id="getspacesidsettingsnf203logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|State of activation of the logs|Inline|

<h3 id="getspacesidsettingsnf203logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/settings/nf203/logs

> Code samples

```bash
curl https://example.com/spaces/P198746/settings/nf203/logs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Enabled": true
  }'
```

`POST /spaces/{id}/settings/nf203/logs`

Enable/Disable logs

> Body parameter

```json
{
  "Enabled": true
}
```

<h3 id="postspacesidsettingsnf203logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|false|State of activation of the logs|
|» Enabled|body|boolean|false|none|

<h3 id="postspacesidsettingsnf203logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Nothing|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/status

> Code samples

```bash
curl https://example.com/spaces/P15646476/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/status`

Returns all status of the space

<h3 id="getspacesidstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "Code": "COD",
    "Comment": "my first code",
    "Label": "code 1"
  }
]
```

<h3 id="getspacesidstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of status of|Inline|

<h3 id="getspacesidstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Label|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/status

> Code samples

```bash
curl https://example.com/spaces/P18784/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Code": "COD",
    "Comment": "my first code",
    "Label": "code 1"
  }'
```

`POST /spaces/{id}/status`

Replace or Add a status

> Body parameter

```json
{
  "Code": "COD",
  "Comment": "my first code",
  "Label": "code 1"
}
```

<h3 id="postspacesidstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|Status to add or replace|
|» Code|body|string|true|none|
|» Comment|body|string|false|none|
|» Label|body|string|true|none|

<h3 id="postspacesidstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{id}/status/{code}

> Code samples

```bash
curl https://example.com/spaces/P18784/status/P18784 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{id}/status/{code}`

delete a status of the space

<h3 id="deletespacesidstatuscode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|code|path|string|true|code of the status|

<h3 id="deletespacesidstatuscode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/tax-contracts

> Code samples

```bash
curl https://example.com/spaces/P15646476/tax-contracts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/tax-contracts`

Returns list of tax contracts for the space {id}

<h3 id="getspacesidtax-contracts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "P45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "ogm of the company",
    "Designation": "année 2019",
    "End": "20181231",
    "Start": "20171231"
  }
]
```

<h3 id="getspacesidtax-contracts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of tax contracts|Inline|

<h3 id="getspacesidtax-contracts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» Designation|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» Id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/tax-contracts

> Code samples

```bash
curl https://example.com/spaces/P198746/tax-contracts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "ogm of the company",
    "Designation": "année 2019",
    "End": "20181231",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "Start": "20180101"
  }'
```

`POST /spaces/{id}/tax-contracts`

Create a tax contract for the space

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "ogm of the company",
  "Designation": "année 2019",
  "End": "20181231",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "Start": "20180101"
}
```

<h3 id="postspacesidtax-contracts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|body|body|object|true|Tax contract to add|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» Designation|body|string|true|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesidtax-contracts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of the tax contract created|Inline|

<h3 id="postspacesidtax-contracts-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{id}/triggers

> Code samples

```bash
curl https://example.com/spaces/P15646476/triggers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{id}/triggers`

Returns list of triggers for the space {id}

<h3 id="getspacesidtriggers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "Date": "string",
    "Event": "person"
  }
]
```

<h3 id="getspacesidtriggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of triggers|Inline|

<h3 id="getspacesidtriggers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Date|string|false|none|none|
|» Event|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Event|person|
|» Event|collect|
|» Event|document|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{id}/triggers/{name}

> Code samples

```bash
curl https://example.com/spaces/P198746/triggers/collect \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /spaces/{id}/triggers/{name}`

Creates a trigger for the space id

<h3 id="postspacesidtriggersname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|name|path|string|true|trigger name|

<h3 id="postspacesidtriggersname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|nothing|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{id}/triggers/{name}

> Code samples

```bash
curl https://example.com/spaces/P198746/triggers/collect \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{id}/triggers/{name}`

Deletes a trigger for the space id

<h3 id="deletespacesidtriggersname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the space|
|name|path|string|true|trigger name|

<h3 id="deletespacesidtriggersname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|nothing|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/common-folders/{id}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/common-folders/T18784 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/common-folders/{id}`

Delete a common folder

<h3 id="deletespacesspaceidcommon-foldersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidcommon-foldersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/common-folders/{id}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/common-folders/T18784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "Name": "Dupond"
  }'
```

`PATCH /spaces/{spaceId}/common-folders/{id}`

Modify a common folder

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "Name": "Dupond"
}
```

<h3 id="patchspacesspaceidcommon-foldersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Folder to modify|
|» About|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Name|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidcommon-foldersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/company-entities/{id}/follow-ups

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/company-entities/T15646IFHA476/follow-ups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/company-entities/{id}/follow-ups`

Returns folder of the company entity

<h3 id="getspacesspaceidcompany-entitiesidfollow-ups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the company entity|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA"
  }
]
```

<h3 id="getspacesspaceidcompany-entitiesidfollow-ups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of folders|Inline|

<h3 id="getspacesspaceidcompany-entitiesidfollow-ups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/customers

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/customers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/customers`

Returns folder with Id and customer data

<h3 id="getspacesspaceidcustomers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|CustomerNumber|query|string|false|CustomerNumber of the customer|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "CustomerNumber": "13587449420F",
    "Designation": "client pièces détachées"
  }
]
```

<h3 id="getspacesspaceidcustomers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of customer folders|Inline|

<h3 id="getspacesspaceidcustomers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» CustomerNumber|string|false|none|none|
|» Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/customers/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/customers/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/customers/all`

Returns folder with Id and customer data (even archived)

<h3 id="getspacesspaceidcustomersall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|CustomerNumber|query|string|false|CustomerNumber of the employee|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "CustomerNumber": "13587449420F",
    "Designation": "client pièces détachées"
  }
]
```

<h3 id="getspacesspaceidcustomersall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of customer folders|Inline|

<h3 id="getspacesspaceidcustomersall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» CustomerNumber|string|false|none|none|
|» Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/documents

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/documents`

Returns documents of the folder

<h3 id="getspacesspaceiddocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|FullText|query|string|false|Text to find|
|Range|query|string|false|index range of the results|
|Class|query|string|false|class of the document to find|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "Folders": [
      {
        "Id": "PHFIHA393",
        "Name": "My Folder"
      }
    ],
    "Id": "P45IHFA",
    "Title": "Facture décembre"
  }
]
```

<h3 id="getspacesspaceiddocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of documents returned by the search|Inline|

<h3 id="getspacesspaceiddocuments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» Folders|[object]|false|none|none|
|» » Id|string|false|none|none|
|» » Name|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/documents/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Accounting": {
      "AccountedOn": "20181202",
      "Workbook": "fiscal",
      "YearMonth": 201802
    },
    "Author": "Antoine Dupond",
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Title": "Facture décembre"
  }'
```

`PATCH /spaces/{spaceId}/documents/{documentId}`

modify a doc

> Body parameter

```json
{
  "Accounting": {
    "AccountedOn": "20181202",
    "Workbook": "fiscal",
    "YearMonth": 201802
  },
  "Author": "Antoine Dupond",
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Title": "Facture décembre"
}
```

<h3 id="patchspacesspaceiddocumentsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|documentId|path|string|true|Id of the document|
|body|body|object|true|document to modify (except name, class and archivaldate)|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» Title|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

<h3 id="patchspacesspaceiddocumentsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/documents/{documentId}/extend

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P15646IFHA476/extend \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/documents/{documentId}/extend`

read the data of a document

<h3 id="getspacesspaceiddocumentsdocumentidextend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Extend": {}
  }
]
```

<h3 id="getspacesspaceiddocumentsdocumentidextend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of documents of the folder|Inline|

<h3 id="getspacesspaceiddocumentsdocumentidextend-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Extend|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/documents/{documentId}/extend

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P1987HGFKJFAA46/extend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /spaces/{spaceId}/documents/{documentId}/extend`

Add a data to a document

> Body parameter

```json
{}
```

<h3 id="postspacesspaceiddocumentsdocumentidextend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|none|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postspacesspaceiddocumentsdocumentidextend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceiddocumentsdocumentidextend-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/documents/{documentId}/folders

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P15646IFHA476/folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/documents/{documentId}/folders`

Returns versions of the document

<h3 id="getspacesspaceiddocumentsdocumentidfolders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "png",
  "FolderDate": "20161203",
  "Folders": [
    {
      "Id": "PHFIHA393",
      "Name": "My Folder"
    }
  ],
  "Id": "P45IHFA",
  "Title": "Facture décembre"
}
```

<h3 id="getspacesspaceiddocumentsdocumentidfolders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|document with folders|Inline|

<h3 id="getspacesspaceiddocumentsdocumentidfolders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Folders|[object]|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/documents/{documentId}/mailing

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P1987HGFKJFAA46/mailing \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Address": {
      "City": "Paris",
      "Complement": "batiment A",
      "Country": "France",
      "Street": "2, rue du chateau",
      "ZipCode": "75001"
    },
    "Name": "Société Dupond"
  }'
```

`POST /spaces/{spaceId}/documents/{documentId}/mailing`

send by mail a document

> Body parameter

```json
{
  "Address": {
    "City": "Paris",
    "Complement": "batiment A",
    "Country": "France",
    "Street": "2, rue du chateau",
    "ZipCode": "75001"
  },
  "Name": "Société Dupond"
}
```

<h3 id="postspacesspaceiddocumentsdocumentidmailing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|document to send by mail|
|» Address|body|object|false|none|
|» » City|body|string|false|none|
|» » Complement|body|string|false|none|
|» » Country|body|string|false|none|
|» » Street|body|string|false|none|
|» » ZipCode|body|string|false|none|
|» Name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "PageNb": 2,
  "Price": "1.37"
}
```

<h3 id="postspacesspaceiddocumentsdocumentidmailing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of documents of the folder|Inline|

<h3 id="postspacesspaceiddocumentsdocumentidmailing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageNb|number|false|none|none|
|Price|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/documents/{documentId}/mailingprice

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P1987HGFKJFAA46/mailingprice \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/documents/{documentId}/mailingprice`

returns the number of pages and the price of the pdf to send by mail

<h3 id="getspacesspaceiddocumentsdocumentidmailingprice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "PageNb": 2,
  "Price": "1.37"
}
```

<h3 id="getspacesspaceiddocumentsdocumentidmailingprice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of documents of the folder|Inline|

<h3 id="getspacesspaceiddocumentsdocumentidmailingprice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageNb|number|false|none|none|
|Price|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/documents/{documentId}/versions

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P15646IFHA476/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/documents/{documentId}/versions`

Returns versions of the document

<h3 id="getspacesspaceiddocumentsdocumentidversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre"
  }
]
```

<h3 id="getspacesspaceiddocumentsdocumentidversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of documents of the folder|Inline|

<h3 id="getspacesspaceiddocumentsdocumentidversions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/documents/{documentId}/versions

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P1987HGFKJFAA46/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Author": "Antoine Dupond",
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "File": {
      "Content64Encoded": "gjgjJ9FJA829H9HA18B",
      "Name": "MonDocument.pdf"
    },
    "Title": "Facture décembre"
  }'
```

`POST /spaces/{spaceId}/documents/{documentId}/versions`

Add a version to a document and set it as current

> Body parameter

```json
{
  "Author": "Antoine Dupond",
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "File": {
    "Content64Encoded": "gjgjJ9FJA829H9HA18B",
    "Name": "MonDocument.pdf"
  },
  "Title": "Facture décembre"
}
```

<h3 id="postspacesspaceiddocumentsdocumentidversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Version to add|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postspacesspaceiddocumentsdocumentidversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceiddocumentsdocumentidversions-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/documents/{documentId}/versions/current

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P15646IFHA476/versions/current \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/documents/{documentId}/versions/current`

Returns current version of the document

<h3 id="getspacesspaceiddocumentsdocumentidversionscurrent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "png",
  "Id": "P45IHFA",
  "Title": "Facture décembre"
}
```

<h3 id="getspacesspaceiddocumentsdocumentidversionscurrent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|current version of the document|Inline|

<h3 id="getspacesspaceiddocumentsdocumentidversionscurrent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/documents/{id}/access

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P15646IFHA476/access \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/documents/{id}/access`

Returns accesses of one document

<h3 id="getspacesspaceiddocumentsidaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Access": [
    {
      "DownloadedOn": "20210205",
      "FirstName": "Martin",
      "Name": "Dupond",
      "SeenOn": "20180201"
    }
  ],
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "png",
  "Id": "P45IHFA",
  "Title": "Facture décembre"
}
```

<h3 id="getspacesspaceiddocumentsidaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|accesses of one document (without folder date)|Inline|

<h3 id="getspacesspaceiddocumentsidaccess-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Access|[object]|false|none|none|
|» DownloadedOn|string|false|none|none|
|» FirstName|string|false|none|none|
|» Name|string|false|none|none|
|» SeenOn|string|false|none|none|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/documents/{id}/accounting

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P15646IFHA476/accounting \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/documents/{id}/accounting`

Returns the document with the accounting property

<h3 id="getspacesspaceiddocumentsidaccounting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Accounting": {
    "AccountedOn": "20181202",
    "Workbook": "fiscal",
    "YearMonth": 201802
  },
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "png",
  "Id": "P45IHFA",
  "Title": "Facture décembre"
}
```

<h3 id="getspacesspaceiddocumentsidaccounting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|document with accounting property|Inline|

<h3 id="getspacesspaceiddocumentsidaccounting-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounting|object|false|none|none|
|» AccountedOn|string|false|none|none|
|» Workbook|string|false|none|none|
|» YearMonth|string|false|none|none|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Workbook|customer|
|» Workbook|provider|
|» Workbook|bank|
|» Workbook|cashWoucher|
|» Workbook|fiscal|
|» Workbook|insurance|
|» Workbook|social|
|» Workbook|other|
|» Workbook|permanent|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/documents/{id}/download

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/documents/P15646IFHA476/download \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/documents/{id}/download`

Returns content of one document

<h3 id="getspacesspaceiddocumentsiddownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the document|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    "Contract",
    "Invoice"
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "png",
  "File": {
    "Content64Encoded": "JFOJAOJF="
  },
  "Id": "P45IHFA",
  "Title": "Facture décembre"
}
```

<h3 id="getspacesspaceiddocumentsiddownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|content of one document (without folder date)|Inline|

<h3 id="getspacesspaceiddocumentsiddownload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|File|object|false|none|none|
|» Content64Encoded|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/employees

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/employees \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/employees`

Returns folders with Id and employee data

<h3 id="getspacesspaceidemployees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|SSNumber|query|string|false|SSNumber of the employee|
|EmployeeNumber|query|string|false|EmployeeNumber of the employee|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractType": "01",
    "EmployeeNumber": "13587FAZCD420F",
    "Function": "commercial",
    "PostalMail": true,
    "SSNumber": "1542012365985215"
  }
]
```

<h3 id="getspacesspaceidemployees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of employees folders|Inline|

<h3 id="getspacesspaceidemployees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractType|string|false|none|none|
|» EmployeeNumber|string|false|none|none|
|» Function|string|false|none|none|
|» PostalMail|boolean|false|none|none|
|» SSNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/employees/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/employees/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/employees/all`

Returns folders with Id and employee data (even archived)

<h3 id="getspacesspaceidemployeesall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|SSNumber|query|string|false|SSNumber of the employee|
|EmployeeNumber|query|string|false|EmployeeNumber of the employee|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractType": "01",
    "EmployeeNumber": "13587FAZCD420F",
    "Function": "commercial",
    "PostalMail": true,
    "SSNumber": "1542012365985215"
  }
]
```

<h3 id="getspacesspaceidemployeesall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of employees folders|Inline|

<h3 id="getspacesspaceidemployeesall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractType|string|false|none|none|
|» EmployeeNumber|string|false|none|none|
|» Function|string|false|none|none|
|» PostalMail|boolean|false|none|none|
|» SSNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/employers

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/employers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/employers`

Returns folders with Id and employer data

<h3 id="getspacesspaceidemployers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|EmployeeNumber|query|string|false|EmployeeNumber of the employer contract|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractType": "01",
    "EmployeeNumber": "13587FAZCD420F",
    "Function": "commercial",
    "PostalMail": true,
    "SSNumber": "1542012365985215"
  }
]
```

<h3 id="getspacesspaceidemployers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of employees folders|Inline|

<h3 id="getspacesspaceidemployers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractType|string|false|none|none|
|» EmployeeNumber|string|false|none|none|
|» Function|string|false|none|none|
|» PostalMail|boolean|false|none|none|
|» SSNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/employers/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/employers/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/employers/all`

Returns folders with Id and employer data (even archived)

<h3 id="getspacesspaceidemployersall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|EmployeeNumber|query|string|false|EmployeeNumber of the employer contract|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractType": "01",
    "EmployeeNumber": "13587FAZCD420F",
    "Function": "commercial",
    "PostalMail": true,
    "SSNumber": "1542012365985215"
  }
]
```

<h3 id="getspacesspaceidemployersall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of employees folders|Inline|

<h3 id="getspacesspaceidemployersall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractType|string|false|none|none|
|» EmployeeNumber|string|false|none|none|
|» Function|string|false|none|none|
|» PostalMail|boolean|false|none|none|
|» SSNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/extend

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/extend \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/extend`

read the data of a space

<h3 id="getspacesspaceidextend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Extend": {
    "test": "test"
  },
  "Id": "P12345",
  "ModificationDate": "20190325125042",
  "Name": "Mon Entreprise",
  "Type": "company"
}
```

<h3 id="getspacesspaceidextend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A space|Inline|

<h3 id="getspacesspaceidextend-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Extend|object|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|private|
|Type|enterprise|
|Type|company|
|Type|association|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/extend

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/extend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /spaces/{spaceId}/extend`

Add a data to a space

> Body parameter

```json
{}
```

<h3 id="postspacesspaceidextend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|none|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postspacesspaceidextend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidextend-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders`

Returns folders of the space

<h3 id="getspacesspaceidfolders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|false|Name of the folder|
|Keywords|query|string|false|keywords attached to the folder|
|RootFolders|query|string|false|only root folders|
|Range|query|string|false|index range of the results|
|Class|query|string|false|class of the folder|
|spaceId|path|string|true|Id of the space|

#### Enumerated Values

|Parameter|Value|
|---|---|
|RootFolders|all|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA"
  }
]
```

<h3 id="getspacesspaceidfolders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of folders|Inline|

<h3 id="getspacesspaceidfolders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/all`

Returns folders of the space (even archived)

<h3 id="getspacesspaceidfoldersall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|false|Name of the folder|
|Range|query|string|false|index range of the results|
|Keywords|query|string|false|keywords attached to the folder|
|Class|query|string|false|class of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA"
  }
]
```

<h3 id="getspacesspaceidfoldersall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of folders|Inline|

<h3 id="getspacesspaceidfoldersall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/bank-statements/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/bank-statements/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/bank-statements/{documentId}`

delete a bank statement

<h3 id="deletespacesspaceidfoldersfolderidbank-statementsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidbank-statementsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/bank-statements/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/bank-statements/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Balance": 1352.63,
    "Number": "10015848",
    "StatementDate": "20160801"
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/bank-statements/{documentId}`

modify a bank statement

> Body parameter

```json
{
  "Balance": 1352.63,
  "Number": "10015848",
  "StatementDate": "20160801"
}
```

<h3 id="patchspacesspaceidfoldersfolderidbank-statementsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A bank statement to modify|
|» Balance|body|number(number)|false|none|
|» Number|body|number(string)|false|none|
|» StatementDate|body|string|false|none|

<h3 id="patchspacesspaceidfoldersfolderidbank-statementsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/contractual-documents/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/contractual-documents/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/contractual-documents/{documentId}`

delete a contractual document

<h3 id="deletespacesspaceidfoldersfolderidcontractual-documentsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidcontractual-documentsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/contractual-documents/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/contractual-documents/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Amount": "1001.36",
    "Designation": "contrat client",
    "Reference": "151465AFHIA",
    "StartDate": "20181128",
    "Type": "quotation"
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/contractual-documents/{documentId}`

modify a contractual document

> Body parameter

```json
{
  "Amount": "1001.36",
  "Designation": "contrat client",
  "Reference": "151465AFHIA",
  "StartDate": "20181128",
  "Type": "quotation"
}
```

<h3 id="patchspacesspaceidfoldersfolderidcontractual-documentsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A contractual document to modify|
|» Amount|body|string|false|none|
|» Designation|body|string|false|none|
|» Reference|body|string|false|none|
|» StartDate|body|string|false|none|
|» Type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|contract|
|» Type|engagement-letter|
|» Type|amendment|
|» Type|purchase-order|
|» Type|delivery-order|
|» Type|quotation|
|» Type|other|

<h3 id="patchspacesspaceidfoldersfolderidcontractual-documentsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/corporate-tax-declarations/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/corporate-tax-declarations/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/corporate-tax-declarations/{documentId}`

delete a corporate tax declaration

<h3 id="deletespacesspaceidfoldersfolderidcorporate-tax-declarationsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidcorporate-tax-declarationsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/corporate-tax-declarations/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/corporate-tax-declarations/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Amount": 132.63,
    "DeclarationDate": "20160801",
    "Order": "1st advance",
    "Rate": 10.63,
    "TaxBase": 123.36
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/corporate-tax-declarations/{documentId}`

modify a coporate tax declaration

> Body parameter

```json
{
  "Amount": 132.63,
  "DeclarationDate": "20160801",
  "Order": "1st advance",
  "Rate": 10.63,
  "TaxBase": 123.36
}
```

<h3 id="patchspacesspaceidfoldersfolderidcorporate-tax-declarationsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A Corporate Tax Declaration to modify|
|» Amount|body|number(float)|false|none|
|» DeclarationDate|body|string|false|none|
|» Order|body|string|false|none|
|» Rate|body|number(float)|false|none|
|» TaxBase|body|number(float)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Order|1st advance|
|» Order|2nd advance|
|» Order|3rd advance|
|» Order|4th advance|
|» Order|regularization|

<h3 id="patchspacesspaceidfoldersfolderidcorporate-tax-declarationsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/expense-proofs/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/expense-proofs/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/expense-proofs/{documentId}`

delete an expense proof

<h3 id="deletespacesspaceidfoldersfolderidexpense-proofsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidexpense-proofsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/expense-proofs/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/expense-proofs/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Account": "CAB",
    "ArchivalDate": 20211231,
    "BeforeVAT": 1000,
    "ExpenseDate": "20200202",
    "ExpenseReportId": "PFOIAHF874984",
    "Provider": "G7",
    "Reason": "taxi",
    "Status": "R",
    "VAT": 19.5
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/expense-proofs/{documentId}`

modify an expense report

> Body parameter

```json
{
  "Account": "CAB",
  "ArchivalDate": 20211231,
  "BeforeVAT": 1000,
  "ExpenseDate": "20200202",
  "ExpenseReportId": "PFOIAHF874984",
  "Provider": "G7",
  "Reason": "taxi",
  "Status": "R",
  "VAT": 19.5
}
```

<h3 id="patchspacesspaceidfoldersfolderidexpense-proofsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|An expense proof to modify|
|» Account|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» BeforeVAT|body|number|false|none|
|» ExpenseDate|body|string|false|none|
|» ExpenseReportId|body|string|false|none|
|» Provider|body|string|false|none|
|» Reason|body|string|false|none|
|» Status|body|string|false|none|
|» VAT|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Account|CAB|
|» Account|IKM|
|» Account|PRK|
|» Account|TXI|
|» Account|VOY|
|» Account|PTT|
|» Account|FHR|
|» Account|DIV|
|» Account|RES|
|» Status|R|
|» Status|V|
|» Status|W|

<h3 id="patchspacesspaceidfoldersfolderidexpense-proofsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/expense-reports/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/expense-reports/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/expense-reports/{documentId}`

delete an expense report

<h3 id="deletespacesspaceidfoldersfolderidexpense-reportsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidexpense-reportsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/expense-reports/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/expense-reports/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "BeforeVAT": 1000,
    "ExpenseDate": "20200202",
    "InclVAT": 1200,
    "ProcessingDate": "20200203",
    "VAT": 19.5
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/expense-reports/{documentId}`

modify an expense report

> Body parameter

```json
{
  "BeforeVAT": 1000,
  "ExpenseDate": "20200202",
  "InclVAT": 1200,
  "ProcessingDate": "20200203",
  "VAT": 19.5
}
```

<h3 id="patchspacesspaceidfoldersfolderidexpense-reportsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|An expense report to modify|
|» BeforeVAT|body|number|false|none|
|» ExpenseDate|body|string|false|none|
|» InclVAT|body|number|false|none|
|» ProcessingDate|body|string|false|none|
|» VAT|body|number|false|none|

<h3 id="patchspacesspaceidfoldersfolderidexpense-reportsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/invoices/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/invoices/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/invoices/{documentId}`

delete an invoice document

<h3 id="deletespacesspaceidfoldersfolderidinvoicesdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidinvoicesdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/invoices/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/invoices/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "BeforeVAT": 1000,
    "DueDate": 20190130,
    "InclVAT": 1200,
    "InvoiceDate": "20200202",
    "Number": "036459879874",
    "PaymentDate": 20190131,
    "Type": "commercial-invoice",
    "VAT": 19.5
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/invoices/{documentId}`

modify a invoice

> Body parameter

```json
{
  "BeforeVAT": 1000,
  "DueDate": 20190130,
  "InclVAT": 1200,
  "InvoiceDate": "20200202",
  "Number": "036459879874",
  "PaymentDate": 20190131,
  "Type": "commercial-invoice",
  "VAT": 19.5
}
```

<h3 id="patchspacesspaceidfoldersfolderidinvoicesdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A invoice to modify|
|» BeforeVAT|body|number|false|none|
|» DueDate|body|string|false|none|
|» InclVAT|body|number|false|none|
|» InvoiceDate|body|string|false|none|
|» Number|body|string|false|none|
|» PaymentDate|body|string|false|none|
|» Type|body|string|false|none|
|» VAT|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|commercial-invoice|
|» Type|credit-note|
|» Type|amending-invoice|
|» Type|self-billing|
|» Type|credit-self-billing|
|» Type|down-payment-invoice|
|» Type|informations-invoice|

<h3 id="patchspacesspaceidfoldersfolderidinvoicesdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{folderId}/nominative-social-declarations/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/nominative-social-declarations/PJOFJAFA8Y \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{folderId}/nominative-social-declarations/{documentId}`

get a nominative social declaration

<h3 id="getspacesspaceidfoldersfolderidnominative-social-declarationsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

> Example responses

> 200 Response

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Begin": "20160801",
  "EmployeeContributions": 1352.63,
  "EmployerContributions": 132.63,
  "End": "20160831",
  "NetAmount": 1005.63,
  "TotalGrossAmount": 1548.63,
  "PayrollId": "PJOFAP2089"
}
```

<h3 id="getspacesspaceidfoldersfolderidnominative-social-declarationsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A nominative social declaration of the folder social|Inline|

<h3 id="getspacesspaceidfoldersfolderidnominative-social-declarationsdocumentid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Begin|string|false|none|none|
|EmployeeContributions|number(float)|false|none|none|
|EmployerContributions|number(float)|false|none|none|
|End|string|false|none|none|
|NetAmount|number(float)|false|none|none|
|TotalGrossAmount|number(float)|false|none|none|
|PayrollId|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/other-taxes/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/other-taxes/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/other-taxes/{documentId}`

delete a tax declaration

<h3 id="deletespacesspaceidfoldersfolderidother-taxesdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidother-taxesdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/other-taxes/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/other-taxes/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Amount": 132.63,
    "DeclarationDate": "20160801",
    "Reference": "décla CFE"
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/other-taxes/{documentId}`

modify an other tax declaration

> Body parameter

```json
{
  "Amount": 132.63,
  "DeclarationDate": "20160801",
  "Reference": "décla CFE"
}
```

<h3 id="patchspacesspaceidfoldersfolderidother-taxesdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A  Tax Declaration to modify|
|» Amount|body|number(float)|false|none|
|» DeclarationDate|body|string|false|none|
|» Reference|body|string|false|none|

<h3 id="patchspacesspaceidfoldersfolderidother-taxesdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/payrolls/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}`

delete a payroll

<h3 id="deletespacesspaceidfoldersfolderidpayrollsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidpayrollsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/payrolls/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Begin": "20160801",
    "EmployeeContributions": 1352.63,
    "EmployerContributions": 132.63,
    "End": "20160831",
    "NetAmount": 1005.63,
    "TotalGrossAmount": 1548.63
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}`

modify a payroll

> Body parameter

```json
{
  "Begin": "20160801",
  "EmployeeContributions": 1352.63,
  "EmployerContributions": 132.63,
  "End": "20160831",
  "NetAmount": 1005.63,
  "TotalGrossAmount": 1548.63
}
```

<h3 id="patchspacesspaceidfoldersfolderidpayrollsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A payroll to modify|
|» Begin|body|string|false|none|
|» EmployeeContributions|body|number(float)|false|none|
|» EmployerContributions|body|number(float)|false|none|
|» End|body|string|false|none|
|» NetAmount|body|number(float)|false|none|
|» TotalGrossAmount|body|number(float)|false|none|

<h3 id="patchspacesspaceidfoldersfolderidpayrollsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}/refresh

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/payrolls/PJOFJAFA8Y/refresh \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}/refresh`

recalculate a payroll

<h3 id="postspacesspaceidfoldersfolderidpayrollsdocumentidrefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersfolderidpayrollsdocumentidrefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of the payroll generated|Inline|
|204|No Content|OK|None|

<h3 id="postspacesspaceidfoldersfolderidpayrollsdocumentidrefresh-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/payslips/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/payslips/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/payslips/{documentId}`

delete a payslip

<h3 id="deletespacesspaceidfoldersfolderidpayslipsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidpayslipsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/payslips/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/payslips/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Begin": "20160801",
    "EmployeeContributions": 2000.5,
    "EmployerContributions": 400.5,
    "End": "20160831",
    "FixedGrossAmount": 1352.63,
    "NetAmount": 1005.63,
    "TotalGrossAmount": 1548.63,
    "Vacation": 20.5,
    "VariableGrossAmount": 132.63
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/payslips/{documentId}`

modify a payslip

> Body parameter

```json
{
  "Begin": "20160801",
  "EmployeeContributions": 2000.5,
  "EmployerContributions": 400.5,
  "End": "20160831",
  "FixedGrossAmount": 1352.63,
  "NetAmount": 1005.63,
  "TotalGrossAmount": 1548.63,
  "Vacation": 20.5,
  "VariableGrossAmount": 132.63
}
```

<h3 id="patchspacesspaceidfoldersfolderidpayslipsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A payslip to modify|
|» Begin|body|string|false|none|
|» EmployeeContributions|body|number(float)|false|none|
|» EmployerContributions|body|number(float)|false|none|
|» End|body|string|false|none|
|» FixedGrossAmount|body|number(float)|false|none|
|» NetAmount|body|number(float)|false|none|
|» TotalGrossAmount|body|number(float)|false|none|
|» Vacation|body|number(float)|false|none|
|» VariableGrossAmount|body|number(float)|false|none|

<h3 id="patchspacesspaceidfoldersfolderidpayslipsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/social-contracts/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/social-contracts/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/social-contracts/{documentId}`

delete a social contract

<h3 id="deletespacesspaceidfoldersfolderidsocial-contractsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidsocial-contractsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/social-contracts/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/social-contracts/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ContractDate": "20190202",
    "ContractDuration": "6 mois",
    "ContractualChange": "augmentation",
    "Position": "cadre",
    "WageDevelopments": 1548.63
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/social-contracts/{documentId}`

modify a social contract

> Body parameter

```json
{
  "ContractDate": "20190202",
  "ContractDuration": "6 mois",
  "ContractualChange": "augmentation",
  "Position": "cadre",
  "WageDevelopments": 1548.63
}
```

<h3 id="patchspacesspaceidfoldersfolderidsocial-contractsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A social contract to modify|
|» ContractDate|body|string|false|none|
|» ContractDuration|body|string|false|none|
|» ContractualChange|body|string|false|none|
|» Position|body|string|false|none|
|» WageDevelopments|body|number(float)|false|none|

<h3 id="patchspacesspaceidfoldersfolderidsocial-contractsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/social-declarations/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/social-declarations/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/social-declarations/{documentId}`

delete a social declaration

<h3 id="deletespacesspaceidfoldersfolderidsocial-declarationsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidsocial-declarationsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/social-declarations/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/social-declarations/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Amount": 132.63,
    "DeclarationDate": "20160801"
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/social-declarations/{documentId}`

modify a social declaration

> Body parameter

```json
{
  "Amount": 132.63,
  "DeclarationDate": "20160801"
}
```

<h3 id="patchspacesspaceidfoldersfolderidsocial-declarationsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A  Social Declaration to modify|
|» Amount|body|number(float)|false|none|
|» DeclarationDate|body|string|false|none|

<h3 id="patchspacesspaceidfoldersfolderidsocial-declarationsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{folderId}/vat-declarations/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/vat-declarations/PJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{folderId}/vat-declarations/{documentId}`

delete a VAT declaration

<h3 id="deletespacesspaceidfoldersfolderidvat-declarationsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|

<h3 id="deletespacesspaceidfoldersfolderidvat-declarationsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{folderId}/vat-declarations/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/vat-declarations/PJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Begin": "20160801",
    "CollectedVAT": 1548.63,
    "CreditVAT": 400.5,
    "DeductibleVAT": 20.5,
    "End": "20160831",
    "ExemptTurnover": 132.63,
    "Number": "153126",
    "PayableVAT": 2000.5,
    "TaxableTurnover": 1352.63
  }'
```

`PATCH /spaces/{spaceId}/folders/{folderId}/vat-declarations/{documentId}`

modify a vat declaration

> Body parameter

```json
{
  "Begin": "20160801",
  "CollectedVAT": 1548.63,
  "CreditVAT": 400.5,
  "DeductibleVAT": 20.5,
  "End": "20160831",
  "ExemptTurnover": 132.63,
  "Number": "153126",
  "PayableVAT": 2000.5,
  "TaxableTurnover": 1352.63
}
```

<h3 id="patchspacesspaceidfoldersfolderidvat-declarationsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|folderId|path|string|true|Id of the folder|
|documentId|path|string|true|Id of the document|
|body|body|object|false|A VAT Declaration to modify|
|» Begin|body|string|false|none|
|» CollectedVAT|body|number(float)|false|none|
|» CreditVAT|body|number(float)|false|none|
|» DeductibleVAT|body|number(float)|false|none|
|» End|body|string|false|none|
|» ExemptTurnover|body|number(float)|false|none|
|» Number|body|string|false|none|
|» PayableVAT|body|number(float)|false|none|
|» TaxableTurnover|body|number(float)|false|none|

<h3 id="patchspacesspaceidfoldersfolderidvat-declarationsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}`

Returns folder with Id

<h3 id="getspacesspaceidfoldersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA"
}
```

<h3 id="getspacesspaceidfoldersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A folder|Inline|

<h3 id="getspacesspaceidfoldersid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential"
}
```

<h3 id="patchspacesspaceidfoldersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Folder to modify (except Name, Class,ModificationDate and ArchivalDate)|
|» About|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/accounting-year

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/accounting-year \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/accounting-year`

delete an AccountingYear

<h3 id="deletespacesspaceidfoldersidaccounting-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidaccounting-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/accounting-year

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/accounting-year \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "ogm of the company",
    "End": "20181231",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "NetIncome": 52634.36,
    "NetPosition": 14580.36,
    "Start": "20180101",
    "Tax": 45698.36,
    "TaxableIncome": 869523.36,
    "Turnover": 1025.36
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/accounting-year`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "ogm of the company",
  "End": "20181231",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "NetIncome": 52634.36,
  "NetPosition": 14580.36,
  "Start": "20180101",
  "Tax": 45698.36,
  "TaxableIncome": 869523.36,
  "Turnover": 1025.36
}
```

<h3 id="patchspacesspaceidfoldersidaccounting-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Accounting year to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» NetIncome|body|number|false|none|
|» NetPosition|body|number|false|none|
|» Start|body|string|false|none|
|» Tax|body|number|false|none|
|» TaxableIncome|body|number|false|none|
|» Turnover|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidaccounting-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/accountings

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/accountings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/accountings`

Returns accountings documents of the folder (results and taxation or accountingyear)

<h3 id="getspacesspaceidfoldersidaccountings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|date range of the documents|
|FolderDate|query|string|false|date range of attachment|
|Title|query|string|false|Title of the accounting document|
|Workbook|query|string|false|workbook of the accounting|
|Class|query|string|false|class of the accounting|
|AccountedOn|query|string|false|accountedon of the accounting (boolean available)|
|WithFolders|query|string|false|if present, the folders containing the documents are returned|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Accounting": {
      "AccountedOn": "20181202",
      "Workbook": "fiscal",
      "YearMonth": 201802
    }
  }
]
```

<h3 id="getspacesspaceidfoldersidaccountings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of accountings document of the folder|Inline|

<h3 id="getspacesspaceidfoldersidaccountings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Accounting|object|false|none|none|
|» » AccountedOn|string|false|none|none|
|» » Workbook|string|false|none|none|
|» » YearMonth|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/accountings-journal

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/accountings-journal \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/accountings-journal`

journal of accountings document delivered to a customer

<h3 id="getspacesspaceidfoldersidaccountings-journal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the customer folder|
|spaceId|path|string|true|Id of the space|
|DeliveryDate|query|string|false|delivery dates of the document|
|AccountingDate|query|string|false|accounting dates of the document|
|Number|query|integer|false|numbers of the document|
|Workbook|query|string|false|workbook of the document|
|YearMonth|query|string|false|yearmonth of the document|
|Class|query|string|false|class of the document|
|Code|query|string|false|code of the document|
|TargetFolderName|query|string|false|Name of the target folder of the document|

> Example responses

> 200 Response

```json
[
  {
    "AccountingDate": "20181123",
    "AccountingDocumentId": "P0I4UIBH91",
    "Class": "invoice",
    "Code": "delivered",
    "DeliveryDate": "20181123082356",
    "Id": "PJDAKAZ9299",
    "Number": 12,
    "TargetFolder": {
      "Id": "P90742HB",
      "Name": "Exercice clos le"
    },
    "Workbook": "fiscal",
    "YearMonth": "201811"
  }
]
```

<h3 id="getspacesspaceidfoldersidaccountings-journal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of accountings document (journal)|Inline|

<h3 id="getspacesspaceidfoldersidaccountings-journal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» AccountingDate|string|false|none|none|
|» AccountingDocumentId|string|false|none|none|
|» Class|string|false|none|none|
|» Code|string|false|none|none|
|» DeliveryDate|string|false|none|none|
|» Id|string|false|none|none|
|» Number|integer|false|none|none|
|» TargetFolder|object|false|none|none|
|» » Id|string|false|none|none|
|» » Name|string|false|none|none|
|» Workbook|string|false|none|none|
|» YearMonth|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Workbook|customer|
|» Workbook|provider|
|» Workbook|bank|
|» Workbook|cashWoucher|
|» Workbook|fiscal|
|» Workbook|insurance|
|» Workbook|social|
|» Workbook|other|
|» Workbook|permanent|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/bank

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/bank \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/bank`

Returns folder with Id and bank data

<h3 id="getspacesspaceidfoldersidbank-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "ContractReference": "13587449420F",
  "Designation": "banque prêt entreprise"
}
```

<h3 id="getspacesspaceidfoldersidbank-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A bank folder|Inline|

<h3 id="getspacesspaceidfoldersidbank-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|ContractReference|string|false|none|none|
|Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/bank

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/bank \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/bank`

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data

<h3 id="deletespacesspaceidfoldersidbank-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidbank-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/bank

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/bank \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "ContractReference": "13587449420F",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "Start": "20180630"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/bank`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "ContractReference": "13587449420F",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "Start": "20180630"
}
```

<h3 id="patchspacesspaceidfoldersidbank-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Bank to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» ContractReference|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidbank-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/bank-statements

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/bank-statements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/bank-statements`

Returns bank statements of the folder bank

<h3 id="getspacesspaceidfoldersidbank-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder bank|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|range date of the documents|
|Number|query|string|false|Number of the bank statement|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "AccountedOn": 20201231,
    "Balance": 1352.63,
    "Number": "10015848",
    "StatementDate": "20160801"
  }
]
```

<h3 id="getspacesspaceidfoldersidbank-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of bank statements of the folder bank|Inline|

<h3 id="getspacesspaceidfoldersidbank-statements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» AccountedOn|string|false|none|none|
|» Balance|number(number)|false|none|none|
|» Number|number(string)|false|none|none|
|» StatementDate|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/bank-statements

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/bank-statements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Balance": 1352.63,
    "DocumentId": "PBUFBAUBF1531",
    "Number": "10015848",
    "StatementDate": "20160801"
  }'
```

`POST /spaces/{spaceId}/folders/{id}/bank-statements`

Add a bank statement in a folder bank

> Body parameter

```json
{
  "Balance": 1352.63,
  "DocumentId": "PBUFBAUBF1531",
  "Number": "10015848",
  "StatementDate": "20160801"
}
```

<h3 id="postspacesspaceidfoldersidbank-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder bank|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Bank statement to add (either DocumentId,StatementDate either (File,Name,Content64Encoded,Title,StatementDate) is mandatory)|
|» *oneOf*|body|object|false|none|
|» Balance|body|number(number)|false|none|
|» DocumentId|body|string|true|none|
|» Number|body|number(string)|false|none|
|» StatementDate|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Balance|body|number(number)|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Number|body|number(string)|false|none|
|» StatementDate|body|string|true|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidbank-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidbank-statements-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/collective-decision

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/collective-decision \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "ogm of the company",
    "Date": "20180202",
    "DividendDistributions": 1025.36,
    "DividendDistributionsDate": "20180203",
    "Event": "EGM",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/collective-decision`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "ogm of the company",
  "Date": "20180202",
  "DividendDistributions": 1025.36,
  "DividendDistributionsDate": "20180203",
  "Event": "EGM",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential"
}
```

<h3 id="patchspacesspaceidfoldersidcollective-decision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Collective decision to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» DividendDistributions|body|number|false|none|
|» DividendDistributionsDate|body|string|false|none|
|» Event|body|string|false|for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Event|EGM|
|» Event|CGM|
|» Event|OGM|
|» Event|ConstituentAssembly|
|» Event|SolePartner|
|» Event|OtherEvent|
|» Event|Other|
|» Event|Office|
|» Event|ExecutiveCommittee|
|» Event|Consulting|
|» Event|Board|
|» Event|PartnersMeeting|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidcollective-decision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/common-folders

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P15646IFHA476/common-folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/common-folders`

Returns common folders of a folder

<h3 id="getspacesspaceidfoldersidcommon-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|Name|query|string|false|Name of the folder|
|Keywords|query|string|false|keywords attached to the folder|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA"
  }
]
```

<h3 id="getspacesspaceidfoldersidcommon-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of folders|Inline|

<h3 id="getspacesspaceidfoldersidcommon-folders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/common-folders

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/common-folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "Name": "Dupond",
    "Rights": true
  }'
```

`POST /spaces/{spaceId}/folders/{id}/common-folders`

Add a common folder in another folder

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "Name": "Dupond",
  "Rights": true
}
```

<h3 id="postspacesspaceidfoldersidcommon-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Common Folder to add|
|» About|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Name|body|string|true|none|
|» Rights|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidcommon-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of folder created|Inline|

<h3 id="postspacesspaceidfoldersidcommon-folders-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/common-folders/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P15646IFHA476/common-folders/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/common-folders/all`

Returns common folders (even archived) of a folder

<h3 id="getspacesspaceidfoldersidcommon-foldersall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|Name|query|string|false|Name of the folder|
|Keywords|query|string|false|keywords attached to the folder|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA"
  }
]
```

<h3 id="getspacesspaceidfoldersidcommon-foldersall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of folders|Inline|

<h3 id="getspacesspaceidfoldersidcommon-foldersall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/contracting-partner

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/contracting-partner \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/contracting-partner`

Returns all contracting partners of a contract

<h3 id="getspacesspaceidfoldersidcontracting-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder (contract)|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "Class": "Person",
    "Id": "P12345",
    "Role": "employee"
  }
]
```

<h3 id="getspacesspaceidfoldersidcontracting-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of contracting partners|Inline|

<h3 id="getspacesspaceidfoldersidcontracting-partner-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Class|string|false|none|none|
|» Id|string|false|none|none|
|» Role|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Class|CompanyEntity|
|» Class|Person|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/contracting-partner/space

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/contracting-partner/space \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/contracting-partner/space`

Returns collector space of a contract

<h3 id="getspacesspaceidfoldersidcontracting-partnerspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder (contract)|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "Class": "Person",
    "Id": "P12345",
    "Role": "employee"
  }
]
```

<h3 id="getspacesspaceidfoldersidcontracting-partnerspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of contracting partners|Inline|

<h3 id="getspacesspaceidfoldersidcontracting-partnerspace-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Class|string|false|none|none|
|» Id|string|false|none|none|
|» Role|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Class|CompanyEntity|
|» Class|Person|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/contractual-documents

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/contractual-documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/contractual-documents`

Returns documents of the folder

<h3 id="getspacesspaceidfoldersidcontractual-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|date range of the documents|
|FolderDate|query|string|false|date range of attachment|
|Type|query|string|false|Type of the document|
|Range|query|string|false|index range of the results|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|contract|
|Type|engagement-letter|
|Type|amendment|
|Type|purchase-order|
|Type|delivery-order|
|Type|quotation|
|Type|other|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Amount": "1001.36",
    "Designation": "contrat client",
    "Reference": "151465AFHIA",
    "StartDate": "20181128",
    "Type": "quotation"
  }
]
```

<h3 id="getspacesspaceidfoldersidcontractual-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of documents of the folder|Inline|

<h3 id="getspacesspaceidfoldersidcontractual-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Amount|string|false|none|none|
|» Designation|string|false|none|none|
|» Reference|string|false|none|none|
|» StartDate|string|false|none|none|
|» Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Type|contract|
|» Type|engagement-letter|
|» Type|amendment|
|» Type|purchase-order|
|» Type|delivery-order|
|» Type|quotation|
|» Type|other|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/contractual-documents

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/contractual-documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Amount": "1001.36",
    "Designation": "contrat client",
    "DocumentId": "PBUFBAUBF1531",
    "Reference": "151465AFHIA",
    "StartDate": "20181128",
    "Type": "quotation"
  }'
```

`POST /spaces/{spaceId}/folders/{id}/contractual-documents`

Add a document in a folder

> Body parameter

```json
{
  "Amount": "1001.36",
  "Designation": "contrat client",
  "DocumentId": "PBUFBAUBF1531",
  "Reference": "151465AFHIA",
  "StartDate": "20181128",
  "Type": "quotation"
}
```

<h3 id="postspacesspaceidfoldersidcontractual-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)|
|» *oneOf*|body|object|false|none|
|» Amount|body|string|false|none|
|» Designation|body|string|false|none|
|» DocumentId|body|string|true|none|
|» Reference|body|string|false|none|
|» StartDate|body|string|false|none|
|» Type|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Amount|body|string|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» Designation|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Reference|body|string|false|none|
|» StartDate|body|string|false|none|
|» Title|body|string|true|none|
|» Type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|contract|
|» Type|engagement-letter|
|» Type|amendment|
|» Type|purchase-order|
|» Type|delivery-order|
|» Type|quotation|
|» Type|other|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|
|» Type|contract|
|» Type|engagement-letter|
|» Type|amendment|
|» Type|purchase-order|
|» Type|delivery-order|
|» Type|quotation|
|» Type|other|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidcontractual-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidcontractual-documents-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/contractual-relationship

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/contractual-relationship \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/contractual-relationship`

Returns folder with Id and contractual-relationship data

<h3 id="getspacesspaceidfoldersidcontractual-relationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "ContractReference": "13587449420F",
  "Designation": "autre contrat"
}
```

<h3 id="getspacesspaceidfoldersidcontractual-relationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A contractual relationship folder|Inline|

<h3 id="getspacesspaceidfoldersidcontractual-relationship-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|ContractReference|string|false|none|none|
|Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/coporate-tax-declarations

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/coporate-tax-declarations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/coporate-tax-declarations`

Returns corporate tax declarations

<h3 id="getspacesspaceidfoldersidcoporate-tax-declarations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder result and taxation|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|range date of the documents|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Amount": 132.63,
    "DeclarationDate": "20160801",
    "Order": "1st advance",
    "Rate": 10.63,
    "TaxBase": 123.36
  }
]
```

<h3 id="getspacesspaceidfoldersidcoporate-tax-declarations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Corporate Tax declarations|Inline|

<h3 id="getspacesspaceidfoldersidcoporate-tax-declarations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Amount|number(float)|false|none|none|
|» DeclarationDate|string|false|none|none|
|» Order|string|false|none|none|
|» Rate|number(float)|false|none|none|
|» TaxBase|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Order|1st advance|
|» Order|2nd advance|
|» Order|3rd advance|
|» Order|4th advance|
|» Order|regularization|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/coporate-tax-declarations

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/coporate-tax-declarations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Amount": 132.63,
    "DeclarationDate": "20160801",
    "DocumentId": "PBUFBAUBF1531",
    "Order": "1st advance",
    "Rate": 10.63,
    "TaxBase": 123.36
  }'
```

`POST /spaces/{spaceId}/folders/{id}/coporate-tax-declarations`

Add a corporate tax declaration

> Body parameter

```json
{
  "Amount": 132.63,
  "DeclarationDate": "20160801",
  "DocumentId": "PBUFBAUBF1531",
  "Order": "1st advance",
  "Rate": 10.63,
  "TaxBase": 123.36
}
```

<h3 id="postspacesspaceidfoldersidcoporate-tax-declarations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder result and taxation|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Corporate tax declaration to add (either (DeclarationDate,DocumentId) either (File,Name,Content64Encoded,Title,DeclarationDate) is mandatory)|
|» *oneOf*|body|object|false|none|
|» Amount|body|number(float)|false|none|
|» DeclarationDate|body|string|false|none|
|» DocumentId|body|string|true|none|
|» Order|body|string|false|none|
|» Rate|body|number(float)|false|none|
|» TaxBase|body|number(float)|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Amount|body|number(float)|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» DeclarationDate|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Order|body|string|false|none|
|» Rate|body|number(float)|false|none|
|» TaxBase|body|number(float)|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Order|1st advance|
|» Order|2nd advance|
|» Order|3rd advance|
|» Order|4th advance|
|» Order|regularization|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|
|» Order|1st advance|
|» Order|2nd advance|
|» Order|3rd advance|
|» Order|4th advance|
|» Order|regularization|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidcoporate-tax-declarations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidcoporate-tax-declarations-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/customer

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/customer \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/customer`

Returns folder with Id and customer data

<h3 id="getspacesspaceidfoldersidcustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "CustomerNumber": "13587449420F",
  "Designation": "client pièces détachées",
  "Actors": [
    {
      "Active": "no",
      "IsAdmin": "yes",
      "MemberId": "P12345",
      "Name": "Antoine Dupond",
      "Role": "collaborator"
    }
  ],
  "ClientSpaceId": "PDHIADHIA",
  "PortfolioId": "PJFAIOJFR",
  "SecondaryPortfolioIds": [
    "PJFAIOJFR"
  ]
}
```

<h3 id="getspacesspaceidfoldersidcustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A customer folder|Inline|

<h3 id="getspacesspaceidfoldersidcustomer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|CustomerNumber|string|false|none|none|
|Designation|string|false|none|none|
|Actors|[object]|false|none|none|
|» Active|string|false|none|none|
|» IsAdmin|string|false|none|none|
|» MemberId|string|false|none|none|
|» Name|string|false|none|none|
|» Role|string|false|none|none|
|ClientSpaceId|string|false|none|none|
|PortfolioId|string|false|none|none|
|SecondaryPortfolioIds|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/customer

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/customer \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/customer`

delete a customer

<h3 id="deletespacesspaceidfoldersidcustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidcustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/customer

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/customer \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "CustomerNumber": "13587449420F",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "KeepOld": true,
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "PortfolioId": "T1OJFOAZ7449420F",
    "SecondaryPortfolioId": "T1OJFOAZ7449420F",
    "Start": "20180630"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/customer`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "CustomerNumber": "13587449420F",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "KeepOld": true,
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "PortfolioId": "T1OJFOAZ7449420F",
  "SecondaryPortfolioId": "T1OJFOAZ7449420F",
  "Start": "20180630"
}
```

<h3 id="patchspacesspaceidfoldersidcustomer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Customer to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» CustomerNumber|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» KeepOld|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» PortfolioId|body|string|false|none|
|» SecondaryPortfolioId|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidcustomer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/deliveries-journal

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/deliveries-journal \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/deliveries-journal`

journal of documents delivered to a customer

<h3 id="getspacesspaceidfoldersiddeliveries-journal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the customer folder|
|spaceId|path|string|true|Id of the space|
|DeliveryDate|query|string|false|delivery dates of the document|
|AccountingDate|query|string|false|accounting dates of the document|
|Number|query|integer|false|numbers of the document|
|Class|query|string|false|class of the document|
|TargetFolderName|query|string|false|Name of the target folder of the document|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Dupond",
    "Class": "invoice",
    "DeleteDate": "20220223",
    "DeliveryDate": "20181123082356",
    "Id": "PJDAKAZ9299",
    "Number": 12,
    "TargetFolder": {
      "Id": "P90742HB",
      "Name": "Exercice clos le"
    }
  }
]
```

<h3 id="getspacesspaceidfoldersiddeliveries-journal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of document (journal)|Inline|

<h3 id="getspacesspaceidfoldersiddeliveries-journal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|string|false|none|none|
|» DeleteDate|string|false|none|none|
|» DeliveryDate|string|false|none|none|
|» Id|string|false|none|none|
|» Number|integer|false|none|none|
|» TargetFolder|object|false|none|none|
|» » Id|string|false|none|none|
|» » Name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/documents

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/documents`

Returns documents of the folder

<h3 id="getspacesspaceidfoldersiddocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|date range of the documents|
|Title|query|string|false|Title of the document|
|FolderDate|query|string|false|date range of attachment|
|Class|query|string|false|Class of document|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre"
  }
]
```

<h3 id="getspacesspaceidfoldersiddocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of documents of the folder|Inline|

<h3 id="getspacesspaceidfoldersiddocuments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/documents

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "DocumentId": "PBUFBAUBF1531"
  }'
```

`POST /spaces/{spaceId}/folders/{id}/documents`

Add a document in a folder

> Body parameter

```json
{
  "DocumentId": "PBUFBAUBF1531"
}
```

<h3 id="postspacesspaceidfoldersiddocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)|
|» *oneOf*|body|object|false|none|
|» DocumentId|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postspacesspaceidfoldersiddocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersiddocuments-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/documents/{documentId}/detach

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P18784/documents/PJOFJAFA8Y/detach \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /spaces/{spaceId}/folders/{id}/documents/{documentId}/detach`

Detach a doc of a folder

<h3 id="patchspacesspaceidfoldersiddocumentsdocumentiddetach-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|documentId|path|string|true|Id of the document|

<h3 id="patchspacesspaceidfoldersiddocumentsdocumentiddetach-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/employee

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/employee \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/employee`

Returns folder with Id and employee data

<h3 id="getspacesspaceidfoldersidemployee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "ContractType": "01",
  "EmployeeNumber": "13587FAZCD420F",
  "Function": "commercial",
  "PostalMail": true,
  "SSNumber": "1542012365985215"
}
```

<h3 id="getspacesspaceidfoldersidemployee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An employee folder|Inline|

<h3 id="getspacesspaceidfoldersidemployee-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|ContractType|string|false|none|none|
|EmployeeNumber|string|false|none|none|
|Function|string|false|none|none|
|PostalMail|boolean|false|none|none|
|SSNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/employee

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/employee \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/employee`

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data

<h3 id="deletespacesspaceidfoldersidemployee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidemployee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/employee

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/employee \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "ContractType": "01",
    "EmployeeNumber": "13587FAZCD420F",
    "End": "20190101",
    "Function": "commercial",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "PostalMail": true,
    "SSNumber": "1542012365985215",
    "Start": "20180630"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/employee`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "ContractType": "01",
  "EmployeeNumber": "13587FAZCD420F",
  "End": "20190101",
  "Function": "commercial",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "PostalMail": true,
  "SSNumber": "1542012365985215",
  "Start": "20180630"
}
```

<h3 id="patchspacesspaceidfoldersidemployee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Employee to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» ContractType|body|string|false|none|
|» EmployeeNumber|body|string|false|none|
|» End|body|string|false|none|
|» Function|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» PostalMail|body|boolean|false|none|
|» SSNumber|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidemployee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/expense-proofs

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/expense-proofs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/expense-proofs`

Returns expense proofs of the folder (social, followup or exchange)

<h3 id="getspacesspaceidfoldersidexpense-proofs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|date range of the documents|
|FolderDate|query|string|false|date range of attachment|
|Status|query|string|false|Status of the expense proof|
|NoExpenseReport|query|boolean|false|To return expense proofs not attached to an expense report|
|Range|query|string|false|index range of the results|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Status|R|
|Status|W|
|Status|V|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Account": "CAB",
    "ArchivalDate": 20211231,
    "ExpenseDate": "20200202",
    "InclVAT": 1000,
    "Provider": "G7",
    "Reason": "taxi",
    "Status": "R",
    "VAT": 19.5
  }
]
```

<h3 id="getspacesspaceidfoldersidexpense-proofs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of expense proof of the folder (if the folder is social the PersonId is also returned)|Inline|

<h3 id="getspacesspaceidfoldersidexpense-proofs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Account|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» ExpenseDate|string|false|none|none|
|» InclVAT|number|false|none|none|
|» Provider|string|false|none|none|
|» Reason|string|false|none|none|
|» Status|string|false|none|none|
|» VAT|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Account|CAB|
|» Account|IKM|
|» Account|PRK|
|» Account|TXI|
|» Account|VOY|
|» Account|PTT|
|» Account|FHR|
|» Account|DIV|
|» Account|RES|
|» Status|R|
|» Status|V|
|» Status|W|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/expense-proofs

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/expense-proofs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Account": "CAB",
    "ArchivalDate": 20211231,
    "BeforeVAT": 1000,
    "DocumentId": "PBUFBAUBF1531",
    "ExpenseDate": "20200202",
    "ExpenseReportId": "PFOIAHF874984",
    "Provider": "G7",
    "Reason": "taxi",
    "Status": "R",
    "VAT": 19.5
  }'
```

`POST /spaces/{spaceId}/folders/{id}/expense-proofs`

Add a expense proof in a folder followup or exchange

> Body parameter

```json
{
  "Account": "CAB",
  "ArchivalDate": 20211231,
  "BeforeVAT": 1000,
  "DocumentId": "PBUFBAUBF1531",
  "ExpenseDate": "20200202",
  "ExpenseReportId": "PFOIAHF874984",
  "Provider": "G7",
  "Reason": "taxi",
  "Status": "R",
  "VAT": 19.5
}
```

<h3 id="postspacesspaceidfoldersidexpense-proofs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)|
|» *oneOf*|body|object|false|none|
|» Account|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» BeforeVAT|body|number|false|none|
|» DocumentId|body|string|true|none|
|» ExpenseDate|body|string|false|none|
|» ExpenseReportId|body|string|false|none|
|» Provider|body|string|false|none|
|» Reason|body|string|false|none|
|» Status|body|string|false|none|
|» VAT|body|number|false|none|
|» *oneOf*|body|object|false|none|
|» Account|body|string|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» Author|body|string|false|none|
|» BeforeVAT|body|number|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» ExpenseDate|body|string|false|none|
|» ExpenseReportId|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Provider|body|string|false|none|
|» Reason|body|string|false|none|
|» Status|body|string|false|none|
|» Title|body|string|true|none|
|» VAT|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Account|CAB|
|» Account|IKM|
|» Account|PRK|
|» Account|TXI|
|» Account|VOY|
|» Account|PTT|
|» Account|FHR|
|» Account|DIV|
|» Account|RES|
|» Status|R|
|» Status|V|
|» Status|W|
|» Account|CAB|
|» Account|IKM|
|» Account|PRK|
|» Account|TXI|
|» Account|VOY|
|» Account|PTT|
|» Account|FHR|
|» Account|DIV|
|» Account|RES|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|
|» Status|R|
|» Status|V|
|» Status|W|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidexpense-proofs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of expense proof created|Inline|

<h3 id="postspacesspaceidfoldersidexpense-proofs-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/expense-reports

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/expense-reports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/expense-reports`

Returns expense reports of the folder (social or followup)

<h3 id="getspacesspaceidfoldersidexpense-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|date range of the documents|
|FolderDate|query|string|false|date range of attachment|
|WithExtend|query|string|false|If present returns also the data extend|
|Range|query|string|false|index range of the results|
|ProcessingDate|query|string|false|range of processing date (boolean available)|
|ExpenseDate|query|object|false|range of ExpenseDate (valid available)|
|SortOrder|query|string|false|order of sort (if absent default is asc)|
|SortName|query|string|false|name of value for sort|

#### Enumerated Values

|Parameter|Value|
|---|---|
|WithExtend|true|
|WithExtend|false|
|SortOrder|asc|
|SortOrder|desc|
|SortName|ExpenseDate|
|SortName|InclVAT|
|SortName|Title|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "BeforeVAT": 1000,
    "ExpenseDate": "20200202",
    "InclVAT": 1200,
    "ProcessingDate": "20200203",
    "VAT": 19.5
  }
]
```

<h3 id="getspacesspaceidfoldersidexpense-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of expense reports of the folder (if the folder is social the PersonId is also returned)|Inline|

<h3 id="getspacesspaceidfoldersidexpense-reports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» BeforeVAT|number|false|none|none|
|» ExpenseDate|string|false|none|none|
|» InclVAT|number|false|none|none|
|» ProcessingDate|string|false|none|none|
|» VAT|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/expense-reports

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/expense-reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "BeforeVAT": 1000,
    "Date": "20161203",
    "DocumentId": "PBUFBAUBF1531",
    "ExpenseDate": "20200202",
    "InclVAT": 1200,
    "ProcessingDate": "20200203",
    "VAT": 19.5
  }'
```

`POST /spaces/{spaceId}/folders/{id}/expense-reports`

Add a expense report in a folder followup

> Body parameter

```json
{
  "BeforeVAT": 1000,
  "Date": "20161203",
  "DocumentId": "PBUFBAUBF1531",
  "ExpenseDate": "20200202",
  "InclVAT": 1200,
  "ProcessingDate": "20200203",
  "VAT": 19.5
}
```

<h3 id="postspacesspaceidfoldersidexpense-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)|
|» *oneOf*|body|object|false|none|
|» BeforeVAT|body|number|false|none|
|» Date|body|string|false|none|
|» DocumentId|body|string|true|none|
|» ExpenseDate|body|string|false|none|
|» InclVAT|body|number|false|none|
|» ProcessingDate|body|string|false|none|
|» VAT|body|number|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» BeforeVAT|body|number|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» ExpenseDate|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» InclVAT|body|number|false|none|
|» ProcessingDate|body|string|false|none|
|» Title|body|string|true|none|
|» VAT|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidexpense-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of expense report created|Inline|

<h3 id="postspacesspaceidfoldersidexpense-reports-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/expense-reports/{expenseReportId}/expense-proofs

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/expense-reports/P156HUFHA476/expense-proofs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/expense-reports/{expenseReportId}/expense-proofs`

Returns expense proofs linked to the expenseReportId

<h3 id="getspacesspaceidfoldersidexpense-reportsexpensereportidexpense-proofs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|expenseReportId|path|string|true|Id of the expense report|
|Date|query|string|false|Date of the documents (YYYY or YYYYMM or YYYYMMDD)|
|Status|query|string|false|Status of the expense proof|
|FolderDate|query|string|false|Date of upload of the document (YYYY or YYYYMM or YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Status|R|
|Status|W|
|Status|V|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Account": "CAB",
    "ArchivalDate": 20211231,
    "ExpenseDate": "20200202",
    "InclVAT": 1000,
    "Provider": "G7",
    "Reason": "taxi",
    "Status": "R",
    "VAT": 19.5
  }
]
```

<h3 id="getspacesspaceidfoldersidexpense-reportsexpensereportidexpense-proofs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of expense proof of the folder (if the folder is social the PersonId is also returned)|Inline|

<h3 id="getspacesspaceidfoldersidexpense-reportsexpensereportidexpense-proofs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Account|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» ExpenseDate|string|false|none|none|
|» InclVAT|number|false|none|none|
|» Provider|string|false|none|none|
|» Reason|string|false|none|none|
|» Status|string|false|none|none|
|» VAT|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Account|CAB|
|» Account|IKM|
|» Account|PRK|
|» Account|TXI|
|» Account|VOY|
|» Account|PTT|
|» Account|FHR|
|» Account|DIV|
|» Account|RES|
|» Status|R|
|» Status|V|
|» Status|W|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/insurance

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/insurance \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/insurance`

Returns folder with Id and insurance data

<h3 id="getspacesspaceidfoldersidinsurance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "CustomerNumber": "13587449420F",
  "Designation": "assurance civile",
  "PolicyNumber": "13587449420F"
}
```

<h3 id="getspacesspaceidfoldersidinsurance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An insurance folder|Inline|

<h3 id="getspacesspaceidfoldersidinsurance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|CustomerNumber|string|false|none|none|
|Designation|string|false|none|none|
|PolicyNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/insurance

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/insurance \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/insurance`

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data

<h3 id="deletespacesspaceidfoldersidinsurance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidinsurance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/insurance

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/insurance \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "CustomerNumber": "13587449420F",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "PolicyNumber": "1358",
    "Start": "20180630"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/insurance`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "CustomerNumber": "13587449420F",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "PolicyNumber": "1358",
  "Start": "20180630"
}
```

<h3 id="patchspacesspaceidfoldersidinsurance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Insurance to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» CustomerNumber|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» PolicyNumber|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidinsurance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/invoices

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/invoices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/invoices`

Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)

<h3 id="getspacesspaceidfoldersidinvoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|Title|query|string|false|Title of the documents|
|Date|query|string|false|date range of the documents|
|Number|query|string|false|Number of the invoice|
|InclVAT|query|number|false|amount incl. VAT|
|BeforeVAT|query|number|false|amount before VAT|
|DueDate|query|string|false|date due payment|
|PaymentDate|query|string|false|date of payment (boolean and valid available)|
|InvoiceDate|query|string|false|range date of invoice|
|FolderDate|query|string|false|date range of attachment|
|AccountedOn|query|string|false|value of AccountedOn (boolean available but not range)|
|WithExtend|query|string|false|If present returns also the data extend|
|Extend|query|string|false|json object to filter extend data|
|Range|query|string|false|index range of the results|
|SortOrder|query|string|false|order of sort (if absent default is asc)|
|SortName|query|string|false|name of value for sort|

#### Enumerated Values

|Parameter|Value|
|---|---|
|SortOrder|asc|
|SortOrder|desc|
|SortName|DueDate|
|SortName|PaymentDate|
|SortName|InvoiceDate|
|SortName|InclVAT|
|SortName|Contracting|
|SortName|Title|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "AccountedOn": 20201231,
    "BeforeVAT": 1000,
    "DueDate": 20190130,
    "InclVAT": 1200,
    "InvoiceDate": "20200202",
    "Number": "036459879874",
    "PaymentDate": 20190131,
    "Type": "commercial-invoice",
    "VAT": 19.5
  }
]
```

<h3 id="getspacesspaceidfoldersidinvoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of invoices of the folder  (if the folder is the root folder (Customers of Providers) the FolderId, the Designation and the Contracting  of the contract are also returned)|Inline|

<h3 id="getspacesspaceidfoldersidinvoices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» AccountedOn|string|false|none|none|
|» BeforeVAT|number|false|none|none|
|» DueDate|string|false|none|none|
|» InclVAT|number|false|none|none|
|» InvoiceDate|string|false|none|none|
|» Number|string|false|none|none|
|» PaymentDate|string|false|none|none|
|» Type|string|false|none|none|
|» VAT|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Type|commercial-invoice|
|» Type|credit-note|
|» Type|amending-invoice|
|» Type|self-billing|
|» Type|credit-self-billing|
|» Type|down-payment-invoice|
|» Type|informations-invoice|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/invoices

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/invoices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "BeforeVAT": 1000,
    "Date": "20161203",
    "DocumentId": "PBUFBAUBF1531",
    "DueDate": 20190130,
    "InclVAT": 1200,
    "InvoiceDate": "20200202",
    "Number": "036459879874",
    "PaymentDate": 20190131,
    "Type": "commercial-invoice",
    "VAT": 19.5
  }'
```

`POST /spaces/{spaceId}/folders/{id}/invoices`

Add a invoice in a folder of a customer or a provider

> Body parameter

```json
{
  "BeforeVAT": 1000,
  "Date": "20161203",
  "DocumentId": "PBUFBAUBF1531",
  "DueDate": 20190130,
  "InclVAT": 1200,
  "InvoiceDate": "20200202",
  "Number": "036459879874",
  "PaymentDate": 20190131,
  "Type": "commercial-invoice",
  "VAT": 19.5
}
```

<h3 id="postspacesspaceidfoldersidinvoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Invoice to add (either DocumentId, InvoiceDate either (File,Name,Content64Encoded,Title,InvoiceDate) is mandatory)|
|» *oneOf*|body|object|false|none|
|» BeforeVAT|body|number|false|none|
|» Date|body|string|false|none|
|» DocumentId|body|string|true|none|
|» DueDate|body|string|false|none|
|» InclVAT|body|number|false|none|
|» InvoiceDate|body|string|false|none|
|» Number|body|string|false|none|
|» PaymentDate|body|string|false|none|
|» Type|body|string|false|none|
|» VAT|body|number|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» BeforeVAT|body|number|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» DueDate|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» InclVAT|body|number|false|none|
|» InvoiceDate|body|string|false|none|
|» Number|body|string|false|none|
|» PaymentDate|body|string|false|none|
|» Title|body|string|true|none|
|» Type|body|string|false|none|
|» VAT|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Type|commercial-invoice|
|» Type|credit-note|
|» Type|amending-invoice|
|» Type|self-billing|
|» Type|credit-self-billing|
|» Type|down-payment-invoice|
|» Type|informations-invoice|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|
|» Type|commercial-invoice|
|» Type|credit-note|
|» Type|amending-invoice|
|» Type|self-billing|
|» Type|credit-self-billing|
|» Type|down-payment-invoice|
|» Type|informations-invoice|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidinvoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of invoice created|Inline|

<h3 id="postspacesspaceidfoldersidinvoices-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/legal-entity

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/legal-entity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/legal-entity`

Returns legal entity of a follow up folder

<h3 id="getspacesspaceidfoldersidlegal-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder (followup)|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "Class": "Person",
  "Id": "P12345"
}
```

<h3 id="getspacesspaceidfoldersidlegal-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|legal entity of the folder|Inline|

<h3 id="getspacesspaceidfoldersidlegal-entity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Class|string|false|none|none|
|Id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Class|CompanyEntity|
|Class|Person|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/loan

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/loan \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/loan`

Returns folder with Id and loan data

<h3 id="getspacesspaceidfoldersidloan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "Amount": 1000,
  "Category": "debt spreading",
  "Designation": "emprunt entreprise",
  "DueAmount": 1000.6,
  "MonthsNumber": 12,
  "Rate": 2.5,
  "TotalCost": 10200
}
```

<h3 id="getspacesspaceidfoldersidloan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A loan folder|Inline|

<h3 id="getspacesspaceidfoldersidloan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|Amount|number(float)|false|none|none|
|Category|string|false|none|none|
|Designation|string|false|none|none|
|DueAmount|number(float)|false|none|none|
|MonthsNumber|number|false|none|none|
|Rate|number(float)|false|none|none|
|TotalCost|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|
|Category|debt spreading|
|Category|bank loan|
|Category|current account|
|Category|overdraft agreement|
|Category|leasing|
|Category|obligation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/loan

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/loan \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/loan`

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data

<h3 id="deletespacesspaceidfoldersidloan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidloan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/loan

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/loan \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Amount": 1000,
    "Category": "debt spreading",
    "Comment": "pieces company",
    "Designation": "emprunt entreprise",
    "DueAmount": 1000.6,
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "MonthsNumber": 12,
    "Rate": 2.5,
    "Start": "20180630",
    "TotalCost": 10200
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/loan`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Amount": 1000,
  "Category": "debt spreading",
  "Comment": "pieces company",
  "Designation": "emprunt entreprise",
  "DueAmount": 1000.6,
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "MonthsNumber": 12,
  "Rate": 2.5,
  "Start": "20180630",
  "TotalCost": 10200
}
```

<h3 id="patchspacesspaceidfoldersidloan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Loan to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Amount|body|number(float)|false|none|
|» Category|body|string|false|none|
|» Comment|body|string|false|none|
|» Designation|body|string|false|none|
|» DueAmount|body|number(float)|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» MonthsNumber|body|number|false|none|
|» Rate|body|number(float)|false|none|
|» Start|body|string|false|none|
|» TotalCost|body|number(float)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Category|debt spreading|
|» Category|bank loan|
|» Category|current account|
|» Category|overdraft agreement|
|» Category|leasing|
|» Category|obligation|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidloan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/messages

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P18784/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/messages`

Returns messages of the folder

<h3 id="getspacesspaceidfoldersidmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Text|query|string|false|Name of the message|
|Range|query|string|false|index range of the results|
|MessageDate|query|string|false|date of the message|
|spaceId|path|string|true|Id of the space|
|id|path|string|true|Id of the folder|

> Example responses

> 200 Response

```json
[
  {
    "Author": "PKPOFJA7655TFA",
    "Id": "T45IHFA",
    "Level": "confidential",
    "MessageDate": "20160203",
    "ModificationAuthor": "P8Y80FAVUV24",
    "ModificationDate": "20190325125042",
    "Text": "<p> hello world </p>"
  }
]
```

<h3 id="getspacesspaceidfoldersidmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of messages|Inline|

<h3 id="getspacesspaceidfoldersidmessages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Id|string|false|none|none|
|» Level|string|false|none|none|
|» MessageDate|string|false|none|none|
|» ModificationAuthor|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Text|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/messages

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P18784/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Level": "confidential",
    "MessageDate": "20160203",
    "Notify": {
      "How": "sms",
      "MemberIds": [
        [
          "PJOFJAFJAOJ",
          "PJFJAPJF"
        ]
      ]
    },
    "Text": "<p> hello world </p>"
  }'
```

`POST /spaces/{spaceId}/folders/{id}/messages`

Write a message in the journal of a folder

> Body parameter

```json
{
  "Level": "confidential",
  "MessageDate": "20160203",
  "Notify": {
    "How": "sms",
    "MemberIds": [
      [
        "PJOFJAFJAOJ",
        "PJFJAPJF"
      ]
    ]
  },
  "Text": "<p> hello world </p>"
}
```

<h3 id="postspacesspaceidfoldersidmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Message to write (except Author and ModificationAuthor). Text must be Html, tags  'audio','button','input','script','select','textarea','video' are deleted|
|» Level|body|string|false|none|
|» MessageDate|body|string|false|none|
|» Notify|body|object|false|none|
|» » How|body|string|false|none|
|» » MemberIds|body|[string]|false|none|
|» Text|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» » How|std|
|» » How|mail|
|» » How|sms|

<h3 id="postspacesspaceidfoldersidmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/messages/{messageId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/messages/TJOFJAFA8Y \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/messages/{messageId}`

Returns message with Id

<h3 id="getspacesspaceidfoldersidmessagesmessageid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|messageId|path|string|true|Id of the mesage|

> Example responses

> 200 Response

```json
{
  "Author": "PKPOFJA7655TFA",
  "Id": "T45IHFA",
  "Level": "confidential",
  "MessageDate": "20160203",
  "ModificationAuthor": "P8Y80FAVUV24",
  "ModificationDate": "20190325125042",
  "Text": "<p> hello world </p>"
}
```

<h3 id="getspacesspaceidfoldersidmessagesmessageid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A message|Inline|

<h3 id="getspacesspaceidfoldersidmessagesmessageid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Id|string|false|none|none|
|Level|string|false|none|none|
|MessageDate|string|false|none|none|
|ModificationAuthor|string|false|none|none|
|ModificationDate|string|false|none|none|
|Text|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/messages/{messageId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P18784/messages/TJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Level": "confidential",
    "MessageDate": "20160203",
    "Notify": {
      "How": "sms",
      "MemberIds": [
        [
          "PJOFJAFJAOJ",
          "PJFJAPJF"
        ]
      ]
    },
    "Text": "<p> hello world </p>"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/messages/{messageId}`

Modify a Message

> Body parameter

```json
{
  "Level": "confidential",
  "MessageDate": "20160203",
  "Notify": {
    "How": "sms",
    "MemberIds": [
      [
        "PJOFJAFJAOJ",
        "PJFJAPJF"
      ]
    ]
  },
  "Text": "<p> hello world </p>"
}
```

<h3 id="patchspacesspaceidfoldersidmessagesmessageid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|messageId|path|string|true|Id of the message|
|body|body|object|true|Message to modify (except Author and ModificationAuthor)|
|» Level|body|string|false|none|
|» MessageDate|body|string|false|none|
|» Notify|body|object|false|none|
|» » How|body|string|false|none|
|» » MemberIds|body|[string]|false|none|
|» Text|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» » How|std|
|» » How|mail|
|» » How|sms|

<h3 id="patchspacesspaceidfoldersidmessagesmessageid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/nominative-social-declarations

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/nominative-social-declarations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/nominative-social-declarations`

Returns nominative social declarations of the folder social

<h3 id="getspacesspaceidfoldersidnominative-social-declarations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder social|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|range date of the documents|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Begin": "20160801",
    "EmployeeContributions": 1352.63,
    "EmployerContributions": 132.63,
    "End": "20160831",
    "NetAmount": 1005.63,
    "TotalGrossAmount": 1548.63,
    "PayrollId": "PJOFAP2089"
  }
]
```

<h3 id="getspacesspaceidfoldersidnominative-social-declarations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of nominative social declarations of the folder social|Inline|

<h3 id="getspacesspaceidfoldersidnominative-social-declarations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Begin|string|false|none|none|
|» EmployeeContributions|number(float)|false|none|none|
|» EmployerContributions|number(float)|false|none|none|
|» End|string|false|none|none|
|» NetAmount|number(float)|false|none|none|
|» TotalGrossAmount|number(float)|false|none|none|
|» PayrollId|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/other-taxes

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/other-taxes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/other-taxes`

Returns other taxes declarations

<h3 id="getspacesspaceidfoldersidother-taxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder taxcontract|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|range date of the documents|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Amount": 132.63,
    "DeclarationDate": "20160801",
    "Reference": "décla CFE"
  }
]
```

<h3 id="getspacesspaceidfoldersidother-taxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of other taxes declarations|Inline|

<h3 id="getspacesspaceidfoldersidother-taxes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Amount|number(float)|false|none|none|
|» DeclarationDate|string|false|none|none|
|» Reference|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/other-taxes

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/other-taxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Amount": 132.63,
    "DeclarationDate": "20160801",
    "DocumentId": "PBUFBAUBF1531",
    "Reference": "décla CFE"
  }'
```

`POST /spaces/{spaceId}/folders/{id}/other-taxes`

Add a tax declaration

> Body parameter

```json
{
  "Amount": 132.63,
  "DeclarationDate": "20160801",
  "DocumentId": "PBUFBAUBF1531",
  "Reference": "décla CFE"
}
```

<h3 id="postspacesspaceidfoldersidother-taxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder tax contract|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Other tax declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)|
|» *oneOf*|body|object|false|none|
|» Amount|body|number(float)|false|none|
|» DeclarationDate|body|string|false|none|
|» DocumentId|body|string|true|none|
|» Reference|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Amount|body|number(float)|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» DeclarationDate|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Reference|body|string|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidother-taxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidother-taxes-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/passwords

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P18784/passwords \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/passwords`

Returns identifiers/passwords of the folder

<h3 id="getspacesspaceidfoldersidpasswords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|id|path|string|true|Id of the folder|

> Example responses

> 200 Response

```json
[
  {
    "Comment": "mon compte google",
    "Designation": "compte google",
    "Ident": "test",
    "Link": "https://www.google.fr",
    "Password": "azerty",
    "Id": "TJVPJAJJAFA"
  }
]
```

<h3 id="getspacesspaceidfoldersidpasswords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of passwords|Inline|

<h3 id="getspacesspaceidfoldersidpasswords-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Comment|string|false|none|none|
|» Designation|string|false|none|none|
|» Ident|string|false|none|none|
|» Link|string|false|none|none|
|» Password|string|false|none|none|
|» Id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/passwords

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P18784/passwords \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Comment": "mon compte google",
    "Designation": "compte google",
    "Ident": "test",
    "Link": "www.google.fr",
    "Password": "azerty"
  }'
```

`POST /spaces/{spaceId}/folders/{id}/passwords`

Write a identifier/password in aa folder

> Body parameter

```json
{
  "Comment": "mon compte google",
  "Designation": "compte google",
  "Ident": "test",
  "Link": "www.google.fr",
  "Password": "azerty"
}
```

<h3 id="postspacesspaceidfoldersidpasswords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Password to write|
|» Comment|body|string|false|none|
|» Designation|body|string|true|none|
|» Ident|body|string|false|none|
|» Link|body|string|false|none|
|» Password|body|string|false|none|

<h3 id="postspacesspaceidfoldersidpasswords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/passwords/{passwordId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/passwords/TJOFJAFA8Y \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/passwords/{passwordId}`

Returns password with Id

<h3 id="getspacesspaceidfoldersidpasswordspasswordid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|passwordId|path|string|true|Id of the password|

> Example responses

> 200 Response

```json
{
  "Comment": "mon compte google",
  "Designation": "compte google",
  "Ident": "test",
  "Link": "https://www.google.fr",
  "Password": "azerty",
  "Id": "T45IHFA"
}
```

<h3 id="getspacesspaceidfoldersidpasswordspasswordid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A password|Inline|

<h3 id="getspacesspaceidfoldersidpasswordspasswordid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|none|
|Designation|string|false|none|none|
|Ident|string|false|none|none|
|Link|string|false|none|none|
|Password|string|false|none|none|
|Id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/passwords/{passwordId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P18784/passwords/TJOFJAFA8Y \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/passwords/{passwordId}`

delete a password

<h3 id="deletespacesspaceidfoldersidpasswordspasswordid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|passwordId|path|string|true|Id of the password|

<h3 id="deletespacesspaceidfoldersidpasswordspasswordid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/passwords/{passwordId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P18784/passwords/TJOFJAFA8Y \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Comment": "mon compte google",
    "Designation": "compte google",
    "Ident": "test",
    "Link": "www.google.fr",
    "Password": "azerty"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/passwords/{passwordId}`

Modify a Password

> Body parameter

```json
{
  "Comment": "mon compte google",
  "Designation": "compte google",
  "Ident": "test",
  "Link": "www.google.fr",
  "Password": "azerty"
}
```

<h3 id="patchspacesspaceidfoldersidpasswordspasswordid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|passwordId|path|string|true|Id of the password|
|body|body|object|true|Password to modify|
|» Comment|body|string|false|none|
|» Designation|body|string|false|none|
|» Ident|body|string|false|none|
|» Link|body|string|false|none|
|» Password|body|string|false|none|

<h3 id="patchspacesspaceidfoldersidpasswordspasswordid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/payrolls

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/payrolls \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/payrolls`

Returns payrolls of the folder social

<h3 id="getspacesspaceidfoldersidpayrolls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder social|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|range date of the documents|
|Begin|query|string|false|begin date of the payrolls|
|End|query|string|false|end date of the payrolls|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Begin": "20160801",
    "EmployeeContributions": 1352.63,
    "EmployerContributions": 132.63,
    "End": "20160831",
    "NetAmount": 1005.63,
    "TotalGrossAmount": 1548.63
  }
]
```

<h3 id="getspacesspaceidfoldersidpayrolls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of payrolls of the folder social|Inline|

<h3 id="getspacesspaceidfoldersidpayrolls-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Begin|string|false|none|none|
|» EmployeeContributions|number(float)|false|none|none|
|» EmployerContributions|number(float)|false|none|none|
|» End|string|false|none|none|
|» NetAmount|number(float)|false|none|none|
|» TotalGrossAmount|number(float)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/payrolls

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/payrolls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Begin": "20160801",
    "DocumentId": "PBUFBAUBF1531",
    "EmployeeContributions": 1352.63,
    "EmployerContributions": 132.63,
    "End": "20160831",
    "NetAmount": 1005.63,
    "TotalGrossAmount": 1548.63
  }'
```

`POST /spaces/{spaceId}/folders/{id}/payrolls`

Add a payroll in a folder social

> Body parameter

```json
{
  "Begin": "20160801",
  "DocumentId": "PBUFBAUBF1531",
  "EmployeeContributions": 1352.63,
  "EmployerContributions": 132.63,
  "End": "20160831",
  "NetAmount": 1005.63,
  "TotalGrossAmount": 1548.63
}
```

<h3 id="postspacesspaceidfoldersidpayrolls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder social|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Payroll to add or to generate|
|» *oneOf*|body|object|false|none|
|» Begin|body|string|false|none|
|» DocumentId|body|string|true|none|
|» EmployeeContributions|body|number(float)|false|none|
|» EmployerContributions|body|number(float)|false|none|
|» End|body|string|false|none|
|» NetAmount|body|number(float)|false|none|
|» TotalGrossAmount|body|number(float)|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Begin|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» EmployeeContributions|body|number(float)|false|none|
|» EmployerContributions|body|number(float)|false|none|
|» End|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» NetAmount|body|number(float)|false|none|
|» Title|body|string|true|none|
|» TotalGrossAmount|body|number(float)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidpayrolls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidpayrolls-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/payrolls/{payrollId}/nominative-social-declaration

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/payrolls/P156HUFHA476/nominative-social-declaration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "DocumentId": "PBUFBAUBF1531"
  }'
```

`POST /spaces/{spaceId}/folders/{id}/payrolls/{payrollId}/nominative-social-declaration`

Add a nominative social declaration in a folder social

> Body parameter

```json
{
  "DocumentId": "PBUFBAUBF1531"
}
```

<h3 id="postspacesspaceidfoldersidpayrollspayrollidnominative-social-declaration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder social|
|spaceId|path|string|true|Id of the space|
|payrollId|path|string|true|Id of the payroll|
|body|body|object|true|Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)|
|» *oneOf*|body|object|false|none|
|» DocumentId|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidpayrollspayrollidnominative-social-declaration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidpayrollspayrollidnominative-social-declaration-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/payrolls/{payrollId}/nominative-social-declaration

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/payrolls/P156HUFHA476/nominative-social-declaration \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/payrolls/{payrollId}/nominative-social-declaration`

delete a nominative social declaration in a folder social

<h3 id="deletespacesspaceidfoldersidpayrollspayrollidnominative-social-declaration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder social|
|spaceId|path|string|true|Id of the space|
|payrollId|path|string|true|Id of the payroll|

<h3 id="deletespacesspaceidfoldersidpayrollspayrollidnominative-social-declaration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/payslips

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/payslips \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/payslips`

Returns payslips of the folder employee

<h3 id="getspacesspaceidfoldersidpayslips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder employee|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|range date of the documents|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Begin": "20160801",
    "EmployeeContributions": 2000.5,
    "EmployerContributions": 400.5,
    "End": "20160831",
    "FixedGrossAmount": 1352.63,
    "NetAmount": 1005.63,
    "TotalGrossAmount": 1548.63,
    "Vacation": 20.5,
    "VariableGrossAmount": 132.63
  }
]
```

<h3 id="getspacesspaceidfoldersidpayslips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of payslips of the folder employee|Inline|

<h3 id="getspacesspaceidfoldersidpayslips-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Begin|string|false|none|none|
|» EmployeeContributions|number(float)|false|none|none|
|» EmployerContributions|number(float)|false|none|none|
|» End|string|false|none|none|
|» FixedGrossAmount|number(float)|false|none|none|
|» NetAmount|number(float)|false|none|none|
|» TotalGrossAmount|number(float)|false|none|none|
|» Vacation|number(float)|false|none|none|
|» VariableGrossAmount|number(float)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/payslips

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/payslips \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Begin": "20160801",
    "DocumentId": "PBUFBAUBF1531",
    "EmployeeContributions": 2000.5,
    "EmployerContributions": 400.5,
    "End": "20160831",
    "FixedGrossAmount": 1352.63,
    "NetAmount": 1005.63,
    "TotalGrossAmount": 1548.63,
    "Vacation": 20.5,
    "VariableGrossAmount": 132.63
  }'
```

`POST /spaces/{spaceId}/folders/{id}/payslips`

Add a payslip in a folder employee

> Body parameter

```json
{
  "Begin": "20160801",
  "DocumentId": "PBUFBAUBF1531",
  "EmployeeContributions": 2000.5,
  "EmployerContributions": 400.5,
  "End": "20160831",
  "FixedGrossAmount": 1352.63,
  "NetAmount": 1005.63,
  "TotalGrossAmount": 1548.63,
  "Vacation": 20.5,
  "VariableGrossAmount": 132.63
}
```

<h3 id="postspacesspaceidfoldersidpayslips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder employee|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Payslip to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)|
|» *oneOf*|body|object|false|none|
|» Begin|body|string|false|none|
|» DocumentId|body|string|true|none|
|» EmployeeContributions|body|number(float)|false|none|
|» EmployerContributions|body|number(float)|false|none|
|» End|body|string|false|none|
|» FixedGrossAmount|body|number(float)|false|none|
|» NetAmount|body|number(float)|false|none|
|» TotalGrossAmount|body|number(float)|false|none|
|» Vacation|body|number(float)|false|none|
|» VariableGrossAmount|body|number(float)|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Begin|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» EmployeeContributions|body|number(float)|false|none|
|» EmployerContributions|body|number(float)|false|none|
|» End|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» FixedGrossAmount|body|number(float)|false|none|
|» NetAmount|body|number(float)|false|none|
|» Title|body|string|true|none|
|» TotalGrossAmount|body|number(float)|false|none|
|» Vacation|body|number(float)|false|none|
|» VariableGrossAmount|body|number(float)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidpayslips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidpayslips-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/portfolio/{portfolioId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/portfolio/P156HUFHA476 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/portfolio/{portfolioId}`

delete a secondary portfolio of a customer contract

<h3 id="deletespacesspaceidfoldersidportfolioportfolioid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|portfolioId|path|string|true|Id of the portfolio|

<h3 id="deletespacesspaceidfoldersidportfolioportfolioid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/professional-vehicle

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/professional-vehicle \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/professional-vehicle`

delete a Professional Vehicle

<h3 id="deletespacesspaceidfoldersidprofessional-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidprofessional-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/professional-vehicle

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/professional-vehicle \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Brand": "Renault",
    "Comment": "Peugeot Lyon",
    "CompanyTax": true,
    "DateIn": "20201802",
    "DateOut": "20201802",
    "Designation": "peugeot siège",
    "Home": "yes",
    "Keywords": [
      "paris",
      "clio"
    ],
    "Level": "confidential",
    "Model": "Clio",
    "RegistrationDate": "20181231",
    "RegistrationNumber": "AA001AA",
    "Type": "car",
    "Value": 1500.23
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/professional-vehicle`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Brand": "Renault",
  "Comment": "Peugeot Lyon",
  "CompanyTax": true,
  "DateIn": "20201802",
  "DateOut": "20201802",
  "Designation": "peugeot siège",
  "Home": "yes",
  "Keywords": [
    "paris",
    "clio"
  ],
  "Level": "confidential",
  "Model": "Clio",
  "RegistrationDate": "20181231",
  "RegistrationNumber": "AA001AA",
  "Type": "car",
  "Value": 1500.23
}
```

<h3 id="patchspacesspaceidfoldersidprofessional-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Professional vehicle to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Brand|body|string|false|none|
|» Comment|body|string|false|none|
|» CompanyTax|body|boolean|false|none|
|» DateIn|body|string|false|none|
|» DateOut|body|string|false|none|
|» Designation|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Model|body|string|false|none|
|» RegistrationDate|body|string|false|none|
|» RegistrationNumber|body|string|false|none|
|» Type|body|string|false|none|
|» Value|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidprofessional-vehicle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/provider

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/provider \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/provider`

Returns folder with Id and provider data

<h3 id="getspacesspaceidfoldersidprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier fournisseur </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "Designation": "fournisseur pièces détachées",
  "ProviderNumber": "13587449420F"
}
```

<h3 id="getspacesspaceidfoldersidprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A provider folder|Inline|

<h3 id="getspacesspaceidfoldersidprovider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|About|string|false|none|none|
|Designation|string|false|none|none|
|ProviderNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/provider

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/provider \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/provider`

delete a provider

<h3 id="deletespacesspaceidfoldersidprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/provider

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/provider \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ProviderNumber": "13587449420F",
    "Start": "20180630"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/provider`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ProviderNumber": "13587449420F",
  "Start": "20180630"
}
```

<h3 id="patchspacesspaceidfoldersidprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Provider to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» ProviderNumber|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/required-documents

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/required-documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/required-documents`

list of the required documents for a person

<h3 id="getspacesspaceidfoldersidrequired-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder either exchange either followup|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "Comment": "recto verso",
    "Date": "20161203",
    "DocIds": [
      [
        "PIHFAHAF",
        "PPJFAJHFHR94982"
      ]
    ],
    "Id": "TPKAZ9299",
    "Name": "passeport",
    "Status": "waiting"
  }
]
```

<h3 id="getspacesspaceidfoldersidrequired-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of required documents|Inline|

<h3 id="getspacesspaceidfoldersidrequired-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» DocIds|[string]|false|none|none|
|» Id|string|false|none|none|
|» Name|string|false|none|none|
|» Status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Status|waiting|
|» Status|validated|
|» Status|ended|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/required-documents/T156HUFHA476 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "File": {
      "Content64Encoded": "gjgjJ9FJA829H9HA18B",
      "Name": "MonDocument.pdf"
    }
  }'
```

`POST /spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}`

Add a required document to a line

> Body parameter

```json
{
  "File": {
    "Content64Encoded": "gjgjJ9FJA829H9HA18B",
    "Name": "MonDocument.pdf"
  }
}
```

<h3 id="postspacesspaceidfoldersidrequired-documentsrequireddocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder exchange or followup|
|spaceId|path|string|true|Id of the space|
|requireddocumentid|path|string|true|Id of the requireddocument|
|body|body|object|true|Required Document to add|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "Id": "P1234"
}
```

<h3 id="postspacesspaceidfoldersidrequired-documentsrequireddocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidrequired-documentsrequireddocumentid-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P18784/required-documents/T156HUFHA476 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Status": "waiting"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}`

Modify the status of a requireddocument

> Body parameter

```json
{
  "Status": "waiting"
}
```

<h3 id="patchspacesspaceidfoldersidrequired-documentsrequireddocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder exchange or followup|
|spaceId|path|string|true|Id of the space|
|requireddocumentid|path|string|true|Id of the requireddocument|
|body|body|object|true|Status to modify|
|» Status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|waiting|
|» Status|ended|
|» Status|validated|

<h3 id="patchspacesspaceidfoldersidrequired-documentsrequireddocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}/documents/{documentId}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/required-documents/T156HUFHA476/documents/P156HUFHA476 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}/documents/{documentId}`

delete a document from a required document

<h3 id="deletespacesspaceidfoldersidrequired-documentsrequireddocumentiddocumentsdocumentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder exchange or followup|
|spaceId|path|string|true|Id of the space|
|requireddocumentid|path|string|true|Id of the requireddocument|
|documentId|path|string|true|Id of the document to delete|

<h3 id="deletespacesspaceidfoldersidrequired-documentsrequireddocumentiddocumentsdocumentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/sections

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/sections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/sections`

Returns sections of the folder

<h3 id="getspacesspaceidfoldersidsections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "Keywords": [
      [
        "paris",
        "comptabilité"
      ]
    ],
    "Name": "Journal",
    "State": "folded",
    "Type": "About"
  }
]
```

<h3 id="getspacesspaceidfoldersidsections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of sections of the folder|Inline|

<h3 id="getspacesspaceidfoldersidsections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Keywords|[string]|false|none|none|
|» Name|string|false|none|none|
|» State|string|false|none|none|
|» Type|string|false|none|none|
|» Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» State|folded|
|» State|unfolded|
|» State|hidden|
|» Type|about|
|» Type|notes|
|» Type|documents|
|» Type|tasks|
|» Type|codes|
|» Type|subfolders|
|» Type|contacts|
|» Type|any other specific type|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/social-contracts

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/social-contracts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/social-contracts`

Returns social contracts of the folder employee

<h3 id="getspacesspaceidfoldersidsocial-contracts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder employee|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|range date of the documents|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "ContractDate": "20190202",
    "ContractDuration": "6 mois",
    "ContractualChange": "augmentation",
    "Position": "cadre",
    "WageDevelopments": 1548.63
  }
]
```

<h3 id="getspacesspaceidfoldersidsocial-contracts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of social contracts of the folder employee|Inline|

<h3 id="getspacesspaceidfoldersidsocial-contracts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» ContractDate|string|false|none|none|
|» ContractDuration|string|false|none|none|
|» ContractualChange|string|false|none|none|
|» Position|string|false|none|none|
|» WageDevelopments|number(float)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/social-contracts

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/social-contracts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ContractDate": "20190202",
    "ContractDuration": "6 mois",
    "ContractualChange": "augmentation",
    "DocumentId": "PBUFBAUBF1531",
    "Position": "cadre",
    "WageDevelopments": 1548.63
  }'
```

`POST /spaces/{spaceId}/folders/{id}/social-contracts`

Add a social contract in a folder employee

> Body parameter

```json
{
  "ContractDate": "20190202",
  "ContractDuration": "6 mois",
  "ContractualChange": "augmentation",
  "DocumentId": "PBUFBAUBF1531",
  "Position": "cadre",
  "WageDevelopments": 1548.63
}
```

<h3 id="postspacesspaceidfoldersidsocial-contracts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder employee|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Social contract to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)|
|» *oneOf*|body|object|false|none|
|» ContractDate|body|string|false|none|
|» ContractDuration|body|string|false|none|
|» ContractualChange|body|string|false|none|
|» DocumentId|body|string|true|none|
|» Position|body|string|false|none|
|» WageDevelopments|body|number(float)|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» ContractDate|body|string|false|none|
|» ContractDuration|body|string|false|none|
|» ContractualChange|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Position|body|string|false|none|
|» Title|body|string|true|none|
|» WageDevelopments|body|number(float)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidsocial-contracts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidsocial-contracts-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/social-declarations

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/social-declarations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/social-declarations`

Returns social declarations

<h3 id="getspacesspaceidfoldersidsocial-declarations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder socialregime|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|range date of the documents|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Amount": 132.63,
    "DeclarationDate": "20160801"
  }
]
```

<h3 id="getspacesspaceidfoldersidsocial-declarations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of social declarations|Inline|

<h3 id="getspacesspaceidfoldersidsocial-declarations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Amount|number(float)|false|none|none|
|» DeclarationDate|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/social-declarations

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/social-declarations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Amount": 132.63,
    "DeclarationDate": "20160801",
    "DocumentId": "PBUFBAUBF1531"
  }'
```

`POST /spaces/{spaceId}/folders/{id}/social-declarations`

Add a social declaration

> Body parameter

```json
{
  "Amount": 132.63,
  "DeclarationDate": "20160801",
  "DocumentId": "PBUFBAUBF1531"
}
```

<h3 id="postspacesspaceidfoldersidsocial-declarations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder social regime|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Social declaration to add (either (Reference,DocumentId) either (File,Name,Content64Encoded,Title,Reference) is mandatory)|
|» *oneOf*|body|object|false|none|
|» Amount|body|number(float)|false|none|
|» DeclarationDate|body|string|false|none|
|» DocumentId|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Amount|body|number(float)|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» DeclarationDate|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidsocial-declarations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidsocial-declarations-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/social-regimes

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646476/social-regimes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/social-regimes`

Returns folder with Id and social regime data

<h3 id="getspacesspaceidfoldersidsocial-regimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier fournisseur </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "Designation": "fournisseur pièces détachées",
  "Periodicity": "monthly",
  "Type": "mandatory"
}
```

<h3 id="getspacesspaceidfoldersidsocial-regimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A social regime folder|Inline|

<h3 id="getspacesspaceidfoldersidsocial-regimes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|About|string|false|none|none|
|Designation|string|false|none|none|
|Periodicity|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|
|Periodicity|monthly|
|Periodicity|quarterly|
|Periodicity|half-yearly|
|Periodicity|annual|
|Periodicity|null|
|Type|mandatory|
|Type|optional|
|Type|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/social-regimes

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/social-regimes \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/social-regimes`

delete a social regime

<h3 id="deletespacesspaceidfoldersidsocial-regimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidsocial-regimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/social-regimes

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/social-regimes \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "Periodicity": "monthly",
    "Start": "20180630",
    "Type": "mandatory"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/social-regimes`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "Periodicity": "monthly",
  "Start": "20180630",
  "Type": "mandatory"
}
```

<h3 id="patchspacesspaceidfoldersidsocial-regimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Social Regime to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Periodicity|body|string|false|none|
|» Start|body|string|false|none|
|» Type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Periodicity|monthly|
|» Periodicity|quarterly|
|» Periodicity|half-yearly|
|» Periodicity|annual|
|» Periodicity|null|
|» Type|mandatory|
|» Type|optional|
|» Type|null|

<h3 id="patchspacesspaceidfoldersidsocial-regimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/sum-invoices

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/sum-invoices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/sum-invoices`

Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)

<h3 id="getspacesspaceidfoldersidsum-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|Number|query|string|false|Number of the invoice|
|InclVat|query|number|false|amount incl. VAT|
|BeforeVAT|query|number|false|amount before VAT|
|DueDate|query|string|false|range date due payment|
|PaymentDate|query|string|false|range date of payment|
|InvoiceDate|query|string|false|range date of invoice|

> Example responses

> 200 Response

```json
{
  "BeforeVAT": 1229.5,
  "InclVAT": 1329.5,
  "VAT": 29.5
}
```

<h3 id="getspacesspaceidfoldersidsum-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sum of the invoices of the folder|Inline|

<h3 id="getspacesspaceidfoldersidsum-invoices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BeforeVAT|number|false|none|none|
|InclVAT|number|false|none|none|
|VAT|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/tax-contract

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/tax-contract \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/tax-contract`

Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data

<h3 id="deletespacesspaceidfoldersidtax-contract-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidfoldersidtax-contract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/folders/{id}/tax-contract

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T18784/tax-contract \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Comment": "pieces company",
    "Designation": "taxes foncières",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "Start": "20180630"
  }'
```

`PATCH /spaces/{spaceId}/folders/{id}/tax-contract`

Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Comment": "pieces company",
  "Designation": "taxes foncières",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "Start": "20180630"
}
```

<h3 id="patchspacesspaceidfoldersidtax-contract-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Tax contract to modify (except name, class and archivaldate)|
|» About|body|string|false|none|
|» ArchivalDate|body|string|false|none|
|» Comment|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidfoldersidtax-contract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/vat-declarations

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/vat-declarations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/vat-declarations`

Returns vat declarations

<h3 id="getspacesspaceidfoldersidvat-declarations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder result and taxation|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|range date of the documents|
|Range|query|string|false|index range of the results|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "Begin": "20160801",
    "CollectedVAT": 1548.63,
    "CreditVAT": 400.5,
    "DeductibleVAT": 20.5,
    "End": "20160831",
    "ExemptTurnover": 132.63,
    "Number": "153126",
    "PayableVAT": 2000.5,
    "TaxableTurnover": 1352.63
  }
]
```

<h3 id="getspacesspaceidfoldersidvat-declarations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of VAT declarations|Inline|

<h3 id="getspacesspaceidfoldersidvat-declarations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» Begin|string|false|none|none|
|» CollectedVAT|number(float)|false|none|none|
|» CreditVAT|number(float)|false|none|none|
|» DeductibleVAT|number(float)|false|none|none|
|» End|string|false|none|none|
|» ExemptTurnover|number(float)|false|none|none|
|» Number|string|false|none|none|
|» PayableVAT|number(float)|false|none|none|
|» TaxableTurnover|number(float)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/vat-declarations

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/vat-declarations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Begin": "20160801",
    "CollectedVAT": 1548.63,
    "CreditVAT": 400.5,
    "DeductibleVAT": 20.5,
    "DocumentId": "PBUFBAUBF1531",
    "End": "20160831",
    "ExemptTurnover": 132.63,
    "Number": "153126",
    "PayableVAT": 2000.5,
    "TaxableTurnover": 1352.63
  }'
```

`POST /spaces/{spaceId}/folders/{id}/vat-declarations`

Add a vat declaration

> Body parameter

```json
{
  "Begin": "20160801",
  "CollectedVAT": 1548.63,
  "CreditVAT": 400.5,
  "DeductibleVAT": 20.5,
  "DocumentId": "PBUFBAUBF1531",
  "End": "20160831",
  "ExemptTurnover": 132.63,
  "Number": "153126",
  "PayableVAT": 2000.5,
  "TaxableTurnover": 1352.63
}
```

<h3 id="postspacesspaceidfoldersidvat-declarations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder result and taxation|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|VATDeclaration to add (either (DocumentId,End) either (File,Name,Content64Encoded,Title,End) is mandatory)|
|» *oneOf*|body|object|false|none|
|» Begin|body|string|false|none|
|» CollectedVAT|body|number(float)|false|none|
|» CreditVAT|body|number(float)|false|none|
|» DeductibleVAT|body|number(float)|false|none|
|» DocumentId|body|string|true|none|
|» End|body|string|true|none|
|» ExemptTurnover|body|number(float)|false|none|
|» Number|body|string|false|none|
|» PayableVAT|body|number(float)|false|none|
|» TaxableTurnover|body|number(float)|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Begin|body|string|false|none|
|» Code|body|string|false|none|
|» CollectedVAT|body|number(float)|false|none|
|» Comment|body|string|false|none|
|» CreditVAT|body|number(float)|false|none|
|» Date|body|string|false|none|
|» DeductibleVAT|body|number(float)|false|none|
|» End|body|string|true|none|
|» ExemptTurnover|body|number(float)|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Number|body|string|false|none|
|» PayableVAT|body|number(float)|false|none|
|» TaxableTurnover|body|number(float)|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidfoldersidvat-declarations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersidvat-declarations-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/folders/{id}/{documentClass}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/T15646IFHA476/birthCertificate \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/folders/{id}/{documentClass}`

Returns document of documentClass (without specific data) of the folder

<h3 id="getspacesspaceidfoldersiddocumentclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|documentClass|path|string|true|class of the document|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre"
  }
]
```

<h3 id="getspacesspaceidfoldersiddocumentclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of documents of the folder|Inline|

<h3 id="getspacesspaceidfoldersiddocumentclass-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/folders/{id}/{documentClass}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/P1987HGFKJFAA46/birthCertificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "DocumentId": "PBUFBAUBF1531"
  }'
```

`POST /spaces/{spaceId}/folders/{id}/{documentClass}`

Add a document in a folder

> Body parameter

```json
{
  "DocumentId": "PBUFBAUBF1531"
}
```

<h3 id="postspacesspaceidfoldersiddocumentclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|documentClass|path|string|true|class of the document|
|body|body|object|true|Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)|
|» *oneOf*|body|object|false|none|
|» DocumentId|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» Accounting|body|object|false|none|
|» » AccountedOn|body|string|false|none|
|» » Workbook|body|string|false|none|
|» » YearMonth|body|string|false|none|
|» Author|body|string|false|none|
|» Code|body|string|false|none|
|» Comment|body|string|false|none|
|» Date|body|string|false|none|
|» File|body|object|true|none|
|» » Content64Encoded|body|string|false|none|
|» » Name|body|string|false|none|
|» Title|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Workbook|customer|
|» » Workbook|provider|
|» » Workbook|bank|
|» » Workbook|cashWoucher|
|» » Workbook|fiscal|
|» » Workbook|insurance|
|» » Workbook|social|
|» » Workbook|other|
|» » Workbook|permanent|

> Example responses

> 201 Response

```json
{
  "Id": "P123"
}
```

<h3 id="postspacesspaceidfoldersiddocumentclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidfoldersiddocumentclass-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/folders/{id}/{documentClass}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/folders/PJOFJAFA8Y/birthCertificate \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/folders/{id}/{documentClass}`

delete a class document

<h3 id="deletespacesspaceidfoldersiddocumentclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|id|path|string|true|Id of the folder|
|documentClass|path|string|true|class of the document|

<h3 id="deletespacesspaceidfoldersiddocumentclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/banks

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/banks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/banks`

Returns list of bank folders for a legal-entity

<h3 id="getspacesspaceidlegal-entitiesidbanks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the legal-entity|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractReference": "13587449420F",
    "Designation": "banque prêt entreprise"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidbanks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of bank folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidbanks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractReference|string|false|none|none|
|» Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/legal-entities/{id}/banks

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T1987HGFA46/banks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "ContractReference": "13587449420F",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "Start": "20180630"
  }'
```

`POST /spaces/{spaceId}/legal-entities/{id}/banks`

Add a folder for a bank

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "ContractReference": "13587449420F",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "Start": "20180630"
}
```

<h3 id="postspacesspaceidlegal-entitiesidbanks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the bank or memberId|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Bank to add (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» ContractReference|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidlegal-entitiesidbanks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of folder created|Inline|

<h3 id="postspacesspaceidlegal-entitiesidbanks-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/banks/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/banks/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/banks/all`

Returns folder of the banks even archived

<h3 id="getspacesspaceidlegal-entitiesidbanksall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the bank|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractReference": "13587449420F",
    "Designation": "banque prêt entreprise"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidbanksall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of bank folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidbanksall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractReference|string|false|none|none|
|» Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/contracts

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/contracts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/contracts`

Returns all contract folders of the legal entity

<h3 id="getspacesspaceidlegal-entitiesidcontracts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the legal entity or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidcontracts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of contracts folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidcontracts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/contractual-relationships

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/contractual-relationships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/contractual-relationships`

Returns folder of the others contract with legal entity

<h3 id="getspacesspaceidlegal-entitiesidcontractual-relationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the legal-entity or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractReference": "13587449420F",
    "Designation": "autre contrat"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidcontractual-relationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of other contract folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidcontractual-relationships-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractReference|string|false|none|none|
|» Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/contractual-relationships/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/contractual-relationships/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/contractual-relationships/all`

Returns folder of the others contract with legal entity (even archived)

<h3 id="getspacesspaceidlegal-entitiesidcontractual-relationshipsall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the legal-entity or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractReference": "13587449420F",
    "Designation": "autre contrat"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidcontractual-relationshipsall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of other contract folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidcontractual-relationshipsall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractReference|string|false|none|none|
|» Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/customers

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/customers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/customers`

Returns folder of the customer

<h3 id="getspacesspaceidlegal-entitiesidcustomers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the customer or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "CustomerNumber": "13587449420F",
    "Designation": "client pièces détachées"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidcustomers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of customer folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidcustomers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» CustomerNumber|string|false|none|none|
|» Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/legal-entities/{id}/customers

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T1987HGFA46/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "CustomerNumber": "13587449420F",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "PortfolioId": "T1OJFOAZ7449420F",
    "Start": "20180630"
  }'
```

`POST /spaces/{spaceId}/legal-entities/{id}/customers`

Add a folder for a customer

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "CustomerNumber": "13587449420F",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "PortfolioId": "T1OJFOAZ7449420F",
  "Start": "20180630"
}
```

<h3 id="postspacesspaceidlegal-entitiesidcustomers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the customer or memberId|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Customer to add (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» CustomerNumber|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» PortfolioId|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidlegal-entitiesidcustomers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of folder created|Inline|

<h3 id="postspacesspaceidlegal-entitiesidcustomers-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/customers/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/customers/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/customers/all`

Returns folder of the customers (even archived)

<h3 id="getspacesspaceidlegal-entitiesidcustomersall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the customer or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "CustomerNumber": "13587449420F",
    "Designation": "client pièces détachées"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidcustomersall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of customer folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidcustomersall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» CustomerNumber|string|false|none|none|
|» Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/insurances

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/insurances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/insurances`

Returns list of insurance folders for a legal-entity

<h3 id="getspacesspaceidlegal-entitiesidinsurances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the insurance|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "CustomerNumber": "13587449420F",
    "Designation": "assurance civile",
    "PolicyNumber": "13587449420F"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidinsurances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of insurance folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidinsurances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» CustomerNumber|string|false|none|none|
|» Designation|string|false|none|none|
|» PolicyNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/legal-entities/{id}/insurances

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T1987HGFA46/insurances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "CustomerNumber": "13587449420F",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "PolicyNumber": "1358",
    "Start": "20180630"
  }'
```

`POST /spaces/{spaceId}/legal-entities/{id}/insurances`

Add a folder for a insurance

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "CustomerNumber": "13587449420F",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "PolicyNumber": "1358",
  "Start": "20180630"
}
```

<h3 id="postspacesspaceidlegal-entitiesidinsurances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the insurance or memberId|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Insurance to add (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» CustomerNumber|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» PolicyNumber|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidlegal-entitiesidinsurances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of folder created|Inline|

<h3 id="postspacesspaceidlegal-entitiesidinsurances-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/insurances/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/insurances/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/insurances/all`

Returns folder of the insurances even archived

<h3 id="getspacesspaceidlegal-entitiesidinsurancesall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the insurance|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "CustomerNumber": "13587449420F",
    "Designation": "assurance civile",
    "PolicyNumber": "13587449420F"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidinsurancesall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of insurance folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidinsurancesall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» CustomerNumber|string|false|none|none|
|» Designation|string|false|none|none|
|» PolicyNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/loans

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/loans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/loans`

Returns folder of the loan

<h3 id="getspacesspaceidlegal-entitiesidloans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the loan|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Amount": 1000,
    "Category": "debt spreading",
    "Designation": "emprunt entreprise",
    "DueAmount": 1000.6,
    "MonthsNumber": 12,
    "Rate": 2.5,
    "TotalCost": 10200
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidloans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of loan folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidloans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» Amount|number(float)|false|none|none|
|» Category|string|false|none|none|
|» Designation|string|false|none|none|
|» DueAmount|number(float)|false|none|none|
|» MonthsNumber|number|false|none|none|
|» Rate|number(float)|false|none|none|
|» TotalCost|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Category|debt spreading|
|» Category|bank loan|
|» Category|current account|
|» Category|overdraft agreement|
|» Category|leasing|
|» Category|obligation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/legal-entities/{id}/loans

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T1987HGFA46/loans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Amount": 1000,
    "Category": "debt spreading",
    "Comment": "pieces company",
    "Designation": "emprunt entreprise",
    "DueAmount": 1000.6,
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "MonthsNumber": 12,
    "Rate": 2.5,
    "Start": "20180630",
    "TotalCost": 10200
  }'
```

`POST /spaces/{spaceId}/legal-entities/{id}/loans`

Add a folder for a loan

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Amount": 1000,
  "Category": "debt spreading",
  "Comment": "pieces company",
  "Designation": "emprunt entreprise",
  "DueAmount": 1000.6,
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "MonthsNumber": 12,
  "Rate": 2.5,
  "Start": "20180630",
  "TotalCost": 10200
}
```

<h3 id="postspacesspaceidlegal-entitiesidloans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the loan or memberId|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Loan to add (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Amount|body|number(float)|false|none|
|» Category|body|string|false|none|
|» Comment|body|string|false|none|
|» Designation|body|string|false|none|
|» DueAmount|body|number(float)|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» MonthsNumber|body|number|false|none|
|» Rate|body|number(float)|false|none|
|» Start|body|string|false|none|
|» TotalCost|body|number(float)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Category|debt spreading|
|» Category|bank loan|
|» Category|current account|
|» Category|overdraft agreement|
|» Category|leasing|
|» Category|obligation|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidlegal-entitiesidloans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of folder created|Inline|

<h3 id="postspacesspaceidlegal-entitiesidloans-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/loans/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/T15646476/loans/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/loans/all`

Returns folder of the loans even archived

<h3 id="getspacesspaceidlegal-entitiesidloansall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the loan|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Amount": 1000,
    "Category": "debt spreading",
    "Designation": "emprunt entreprise",
    "DueAmount": 1000.6,
    "MonthsNumber": 12,
    "Rate": 2.5,
    "TotalCost": 10200
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidloansall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of loan folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidloansall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» Amount|number(float)|false|none|none|
|» Category|string|false|none|none|
|» Designation|string|false|none|none|
|» DueAmount|number(float)|false|none|none|
|» MonthsNumber|number|false|none|none|
|» Rate|number(float)|false|none|none|
|» TotalCost|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Category|debt spreading|
|» Category|bank loan|
|» Category|current account|
|» Category|overdraft agreement|
|» Category|leasing|
|» Category|obligation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/providers

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/P15646476/providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/providers`

Returns list of providers folders for a legal-entity

<h3 id="getspacesspaceidlegal-entitiesidproviders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the provider or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier fournisseur </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Designation": "fournisseur pièces détachées",
    "ProviderNumber": "13587449420F"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of provider folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidproviders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» About|string|false|none|none|
|» Designation|string|false|none|none|
|» ProviderNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/legal-entities/{id}/providers

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/P1987HGFA46/providers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ProviderNumber": "13587449420F",
    "Start": "20180630"
  }'
```

`POST /spaces/{spaceId}/legal-entities/{id}/providers`

Add a folder for a provider

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ProviderNumber": "13587449420F",
  "Start": "20180630"
}
```

<h3 id="postspacesspaceidlegal-entitiesidproviders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the provider or memberId|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Provider to add (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» ProviderNumber|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidlegal-entitiesidproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of folder created|Inline|

<h3 id="postspacesspaceidlegal-entitiesidproviders-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/providers/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/P15646476/providers/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/providers/all`

Returns folder of the providers even archived

<h3 id="getspacesspaceidlegal-entitiesidprovidersall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the provider or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier fournisseur </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Designation": "fournisseur pièces détachées",
    "ProviderNumber": "13587449420F"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidprovidersall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of provider folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidprovidersall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» About|string|false|none|none|
|» Designation|string|false|none|none|
|» ProviderNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/social-regimes

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/P15646476/social-regimes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/social-regimes`

Returns list of social regimes folders for a legal-entity

<h3 id="getspacesspaceidlegal-entitiesidsocial-regimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the legal entity or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier fournisseur </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Designation": "fournisseur pièces détachées",
    "Periodicity": "monthly",
    "Type": "mandatory"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidsocial-regimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of social regime folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidsocial-regimes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» About|string|false|none|none|
|» Designation|string|false|none|none|
|» Periodicity|string|false|none|none|
|» Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Periodicity|monthly|
|» Periodicity|quarterly|
|» Periodicity|half-yearly|
|» Periodicity|annual|
|» Periodicity|null|
|» Type|mandatory|
|» Type|optional|
|» Type|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/legal-entities/{id}/social-regimes

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/P1987HGFA46/social-regimes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "Designation": "client pièces détachées",
    "End": "20190101",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "Periodicity": "monthly",
    "Start": "20180630",
    "Type": "mandatory"
  }'
```

`POST /spaces/{spaceId}/legal-entities/{id}/social-regimes`

Add a folder for a social regime

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "Designation": "client pièces détachées",
  "End": "20190101",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "Periodicity": "monthly",
  "Start": "20180630",
  "Type": "mandatory"
}
```

<h3 id="postspacesspaceidlegal-entitiesidsocial-regimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the legal entity or memberId|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|SocialRegime to add (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» Designation|body|string|false|none|
|» End|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» Periodicity|body|string|false|none|
|» Start|body|string|false|none|
|» Type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Periodicity|monthly|
|» Periodicity|quarterly|
|» Periodicity|half-yearly|
|» Periodicity|annual|
|» Periodicity|null|
|» Type|mandatory|
|» Type|optional|
|» Type|null|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidlegal-entitiesidsocial-regimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of folder created|Inline|

<h3 id="postspacesspaceidlegal-entitiesidsocial-regimes-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/legal-entities/{id}/social-regimes/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/legal-entities/P15646476/social-regimes/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/legal-entities/{id}/social-regimes/all`

Returns folder of the social regimes even archived

<h3 id="getspacesspaceidlegal-entitiesidsocial-regimesall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the legal entity or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier fournisseur </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Designation": "fournisseur pièces détachées",
    "Periodicity": "monthly",
    "Type": "mandatory"
  }
]
```

<h3 id="getspacesspaceidlegal-entitiesidsocial-regimesall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of social regime folders|Inline|

<h3 id="getspacesspaceidlegal-entitiesidsocial-regimesall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» About|string|false|none|none|
|» Designation|string|false|none|none|
|» Periodicity|string|false|none|none|
|» Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Periodicity|monthly|
|» Periodicity|quarterly|
|» Periodicity|half-yearly|
|» Periodicity|annual|
|» Periodicity|null|
|» Type|mandatory|
|» Type|optional|
|» Type|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/loans

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/loans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/loans`

Returns list of all loan folders of the space

<h3 id="getspacesspaceidloans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Amount": 1000,
    "Category": "debt spreading",
    "Designation": "emprunt entreprise",
    "DueAmount": 1000.6,
    "MonthsNumber": 12,
    "Rate": 2.5,
    "TotalCost": 10200
  }
]
```

<h3 id="getspacesspaceidloans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of loan folders|Inline|

<h3 id="getspacesspaceidloans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» Amount|number(float)|false|none|none|
|» Category|string|false|none|none|
|» Designation|string|false|none|none|
|» DueAmount|number(float)|false|none|none|
|» MonthsNumber|number|false|none|none|
|» Rate|number(float)|false|none|none|
|» TotalCost|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Category|debt spreading|
|» Category|bank loan|
|» Category|current account|
|» Category|overdraft agreement|
|» Category|leasing|
|» Category|obligation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/loans/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/loans/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/loans/all`

Returns list of all loan folders even archived of the space

<h3 id="getspacesspaceidloansall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Amount": 1000,
    "Category": "debt spreading",
    "Designation": "emprunt entreprise",
    "DueAmount": 1000.6,
    "MonthsNumber": 12,
    "Rate": 2.5,
    "TotalCost": 10200
  }
]
```

<h3 id="getspacesspaceidloansall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of loan folders|Inline|

<h3 id="getspacesspaceidloansall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» Amount|number(float)|false|none|none|
|» Category|string|false|none|none|
|» Designation|string|false|none|none|
|» DueAmount|number(float)|false|none|none|
|» MonthsNumber|number|false|none|none|
|» Rate|number(float)|false|none|none|
|» TotalCost|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Category|debt spreading|
|» Category|bank loan|
|» Category|current account|
|» Category|overdraft agreement|
|» Category|leasing|
|» Category|obligation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/persons/{id}/call-for-document

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/call-for-document \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Categories": [
      "ID",
      "Invoices"
    ],
    "ClientManagement": "no",
    "Comment": "first invitation",
    "Contact": "Dupond",
    "IsAdmin": true,
    "Message": "<p> Bienvenue dans l'\''espace de l'\''entreprise SOCIETE </p>",
    "Player": "guest",
    "PlayerEnd": "20190601",
    "Signature": "cordialement",
    "Subject": "invitation sur le coffre"
  }'
```

`POST /spaces/{spaceId}/persons/{id}/call-for-document`

invite a person to collect documents

> Body parameter

```json
{
  "Categories": [
    "ID",
    "Invoices"
  ],
  "ClientManagement": "no",
  "Comment": "first invitation",
  "Contact": "Dupond",
  "IsAdmin": true,
  "Message": "<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>",
  "Player": "guest",
  "PlayerEnd": "20190601",
  "Signature": "cordialement",
  "Subject": "invitation sur le coffre"
}
```

<h3 id="postspacesspaceidpersonsidcall-for-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person or memberId|
|spaceId|path|string|true|Id of the space|
|body|body|[CallForDocument](#schemacallfordocument)|true|Infos to invite|
|» Categories|body|[string]|false|none|
|» ClientManagement|body|string|false|none|
|» Comment|body|string|false|none|
|» Contact|body|string|false|none|
|» IsAdmin|body|boolean|false|none|
|» Message|body|string|false|none|
|» Player|body|string|false|none|
|» PlayerEnd|body|string|false|none|
|» Signature|body|string|false|none|
|» Subject|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ClientManagement|no|
|» ClientManagement|manager|
|» ClientManagement|adn|
|» Player|guest|
|» Player|owner|
|» Player|manager|
|» Player|assistant|
|» Player|collaborator|

> Example responses

> 201 Response

```json
{
  "Id": "T12FJOAHJ34"
}
```

<h3 id="postspacesspaceidpersonsidcall-for-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of the folder of the person invited|Inline|

<h3 id="postspacesspaceidpersonsidcall-for-document-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/persons/{id}/call-for-document

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/call-for-document \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Categories": [
      [
        "ID",
        "Invoices"
      ]
    ],
    "ClientManagement": "no",
    "IsAdmin": true,
    "Player": "guest",
    "PlayerEnd": "20190601"
  }'
```

`PATCH /spaces/{spaceId}/persons/{id}/call-for-document`

modify the invitation of a person to collect documents

> Body parameter

```json
{
  "Categories": [
    [
      "ID",
      "Invoices"
    ]
  ],
  "ClientManagement": "no",
  "IsAdmin": true,
  "Player": "guest",
  "PlayerEnd": "20190601"
}
```

<h3 id="patchspacesspaceidpersonsidcall-for-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person|
|spaceId|path|string|true|Id of the space|
|body|body|[ModifyCollect](#schemamodifycollect)|true|Infos to invite|
|» Categories|body|[string]|false|none|
|» ClientManagement|body|string|false|none|
|» IsAdmin|body|boolean|false|none|
|» Player|body|string|false|none|
|» PlayerEnd|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ClientManagement|no|
|» ClientManagement|manager|
|» ClientManagement|adn|
|» Player|guest|
|» Player|owner|
|» Player|manager|
|» Player|assistant|
|» Player|collaborator|

<h3 id="patchspacesspaceidpersonsidcall-for-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/persons/{id}/employees

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P15HBGUFA76/employees \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/persons/{id}/employees`

Returns folder of the employee

<h3 id="getspacesspaceidpersonsidemployees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractType": "01",
    "EmployeeNumber": "13587FAZCD420F",
    "Function": "commercial",
    "PostalMail": true,
    "SSNumber": "1542012365985215"
  }
]
```

<h3 id="getspacesspaceidpersonsidemployees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of employees folders|Inline|

<h3 id="getspacesspaceidpersonsidemployees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractType|string|false|none|none|
|» EmployeeNumber|string|false|none|none|
|» Function|string|false|none|none|
|» PostalMail|boolean|false|none|none|
|» SSNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/persons/{id}/employees

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198JFUAFA46/employees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "About": "<b> Mon premier dossier </b>",
    "Comment": "pieces company",
    "ContractType": "01",
    "EmployeeNumber": "13587FAZCD420F",
    "End": "20190101",
    "Function": "commercial",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "PostalMail": true,
    "SSNumber": "1542012365985215",
    "Start": "20180630"
  }'
```

`POST /spaces/{spaceId}/persons/{id}/employees`

Add a folder for a employee

> Body parameter

```json
{
  "About": "<b> Mon premier dossier </b>",
  "Comment": "pieces company",
  "ContractType": "01",
  "EmployeeNumber": "13587FAZCD420F",
  "End": "20190101",
  "Function": "commercial",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "PostalMail": true,
  "SSNumber": "1542012365985215",
  "Start": "20180630"
}
```

<h3 id="postspacesspaceidpersonsidemployees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the employee|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Employee to add (except name, class and archivaldate)|
|» About|body|string|false|none|
|» Comment|body|string|false|none|
|» ContractType|body|string|false|none|
|» EmployeeNumber|body|string|false|none|
|» End|body|string|false|none|
|» Function|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|
|» PostalMail|body|boolean|false|none|
|» SSNumber|body|string|false|none|
|» Start|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidpersonsidemployees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of folder created|Inline|

<h3 id="postspacesspaceidpersonsidemployees-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/persons/{id}/employees/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P15HBGUFA76/employees/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/persons/{id}/employees/all`

Returns folder of all employees (even archived)

<h3 id="getspacesspaceidpersonsidemployeesall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier dossier </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "ContractType": "01",
    "EmployeeNumber": "13587FAZCD420F",
    "Function": "commercial",
    "PostalMail": true,
    "SSNumber": "1542012365985215"
  }
]
```

<h3 id="getspacesspaceidpersonsidemployeesall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of employees folders|Inline|

<h3 id="getspacesspaceidpersonsidemployeesall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» ContractType|string|false|none|none|
|» EmployeeNumber|string|false|none|none|
|» Function|string|false|none|none|
|» PostalMail|boolean|false|none|none|
|» SSNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/persons/{id}/exchange

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/T15646IFHA476/exchange \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/persons/{id}/exchange`

Returns folder exchange of the person

<h3 id="getspacesspaceidpersonsidexchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA"
}
```

<h3 id="getspacesspaceidpersonsidexchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A folder|Inline|

<h3 id="getspacesspaceidpersonsidexchange-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/persons/{id}/follow-ups

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/T15646IFHA476/follow-ups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/persons/{id}/follow-ups`

Returns folder of the person

<h3 id="getspacesspaceidpersonsidfollow-ups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person or memberId|
|spaceId|path|string|true|Id of the space|

> Example responses

> 200 Response

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "ClientManagement": "manager",
  "Invitation": {
    "Comment": "salarié invité",
    "PlayerEnd": "20190203",
    "Status": "accepted"
  },
  "Player": "manager"
}
```

<h3 id="getspacesspaceidpersonsidfollow-ups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the folder of a person|Inline|

<h3 id="getspacesspaceidpersonsidfollow-ups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|ClientManagement|string|false|none|none|
|Invitation|object|false|none|none|
|» Comment|string|false|none|none|
|» PlayerEnd|string|false|none|none|
|» Status|string|false|none|none|
|Player|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|
|ClientManagement|manager|
|ClientManagement|adn|
|ClientManagement|null|
|» Status|null|
|» Status|on|
|» Status|refused|
|» Status|accepted|
|» Status|finished|
|» Status|expired|
|» Status|waiting for validation|
|Player|guest|
|Player|manager|
|Player|collaborator|
|Player|owner|
|Player|assistant|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/persons/{id}/guest-in-space

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/guest-in-space \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ClientManagement": "no",
    "Comment": "first invitation",
    "Contact": "Dupond",
    "Folders": [
      {
        "Id": "PK8481482",
        "Right": "read"
      }
    ],
    "GroupIds": [
      [
        "PJFIA84",
        "PHAJHFJHA"
      ]
    ],
    "IsAdmin": true,
    "MemberId": "PAIHIHFA79TFA",
    "Message": "<p> Bienvenue dans l'\''espace de l'\''entreprise SOCIETE </p>",
    "Player": "guest",
    "PlayerEnd": "20190601",
    "Signature": "cordialement",
    "Subject": "invitation sur le coffre"
  }'
```

`POST /spaces/{spaceId}/persons/{id}/guest-in-space`

invite a person in a space

> Body parameter

```json
{
  "ClientManagement": "no",
  "Comment": "first invitation",
  "Contact": "Dupond",
  "Folders": [
    {
      "Id": "PK8481482",
      "Right": "read"
    }
  ],
  "GroupIds": [
    [
      "PJFIA84",
      "PHAJHFJHA"
    ]
  ],
  "IsAdmin": true,
  "MemberId": "PAIHIHFA79TFA",
  "Message": "<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>",
  "Player": "guest",
  "PlayerEnd": "20190601",
  "Signature": "cordialement",
  "Subject": "invitation sur le coffre"
}
```

<h3 id="postspacesspaceidpersonsidguest-in-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person|
|spaceId|path|string|true|Id of the space|
|body|body|[GuestInSpace](#schemaguestinspace)|true|Infos to invite|
|» ClientManagement|body|string|false|none|
|» Comment|body|string|false|none|
|» Contact|body|string|false|none|
|» Folders|body|[object]|false|none|
|» » Id|body|string|false|none|
|» » Right|body|string|false|none|
|» GroupIds|body|[string]|false|none|
|» IsAdmin|body|boolean|false|none|
|» MemberId|body|string|false|none|
|» Message|body|string|false|none|
|» Player|body|string|false|none|
|» PlayerEnd|body|string|false|none|
|» Signature|body|string|false|none|
|» Subject|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ClientManagement|no|
|» ClientManagement|manager|
|» ClientManagement|adn|
|» » Right|read|
|» » Right|write|
|» Player|guest|
|» Player|owner|
|» Player|manager|
|» Player|assistant|
|» Player|collaborator|

<h3 id="postspacesspaceidpersonsidguest-in-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/persons/{id}/guest-in-space

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/guest-in-space \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/persons/{id}/guest-in-space`

delete the invitation of a person in a space

<h3 id="deletespacesspaceidpersonsidguest-in-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidpersonsidguest-in-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/persons/{id}/guest-in-space

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/guest-in-space \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ClientManagement": "no",
    "Folders": [
      {
        "Id": "PK8481482",
        "Right": "read"
      }
    ],
    "GroupIds": [
      [
        "PJFIA84",
        "PHAJHFJHA"
      ]
    ],
    "IsAdmin": true,
    "Player": "guest",
    "PlayerEnd": "20190601"
  }'
```

`PATCH /spaces/{spaceId}/persons/{id}/guest-in-space`

invite a person in a space

> Body parameter

```json
{
  "ClientManagement": "no",
  "Folders": [
    {
      "Id": "PK8481482",
      "Right": "read"
    }
  ],
  "GroupIds": [
    [
      "PJFIA84",
      "PHAJHFJHA"
    ]
  ],
  "IsAdmin": true,
  "Player": "guest",
  "PlayerEnd": "20190601"
}
```

<h3 id="patchspacesspaceidpersonsidguest-in-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person|
|spaceId|path|string|true|Id of the space|
|body|body|[ModifyInvitation](#schemamodifyinvitation)|true|Infos to invite|
|» ClientManagement|body|string|false|none|
|» Folders|body|[object]|false|none|
|» » Id|body|string|false|none|
|» » Right|body|string|false|none|
|» GroupIds|body|[string]|false|none|
|» IsAdmin|body|boolean|false|none|
|» Player|body|string|false|none|
|» PlayerEnd|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ClientManagement|no|
|» ClientManagement|manager|
|» ClientManagement|adn|
|» » Right|read|
|» » Right|write|
|» Player|guest|
|» Player|owner|
|» Player|manager|
|» Player|assistant|
|» Player|collaborator|

<h3 id="patchspacesspaceidpersonsidguest-in-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/persons/{id}/invitation

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/invitation \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/persons/{id}/invitation`

Returns invitation of a person

<h3 id="getspacesspaceidpersonsidinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person|
|spaceId|path|string|true|Id of the space|

<h3 id="getspacesspaceidpersonsidinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Automatically created|[Invitation](#schemainvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/persons/{id}/invitation

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/invitation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ClientManagement": "no",
    "EmployeeAccess": true,
    "Folders": [
      {
        "Id": "PK8481482",
        "Right": "read"
      }
    ],
    "GroupIds": [
      [
        "PJFIA84",
        "PHAJHFJHA"
      ]
    ],
    "IsAdmin": true,
    "Player": "guest",
    "PlayerEnd": "20190601"
  }'
```

`POST /spaces/{spaceId}/persons/{id}/invitation`

create an invitation in a space for a person

> Body parameter

```json
{
  "ClientManagement": "no",
  "EmployeeAccess": true,
  "Folders": [
    {
      "Id": "PK8481482",
      "Right": "read"
    }
  ],
  "GroupIds": [
    [
      "PJFIA84",
      "PHAJHFJHA"
    ]
  ],
  "IsAdmin": true,
  "Player": "guest",
  "PlayerEnd": "20190601"
}
```

<h3 id="postspacesspaceidpersonsidinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Invitation to create|
|» ClientManagement|body|string|false|none|
|» EmployeeAccess|body|boolean|false|none|
|» Folders|body|[object]|false|none|
|» » Id|body|string|false|none|
|» » Right|body|string|false|none|
|» GroupIds|body|[string]|false|none|
|» IsAdmin|body|boolean|false|none|
|» Player|body|string|false|none|
|» PlayerEnd|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ClientManagement|no|
|» ClientManagement|manager|
|» ClientManagement|adn|
|» » Right|read|
|» » Right|write|
|» Player|guest|
|» Player|owner|
|» Player|manager|
|» Player|assistant|
|» Player|collaborator|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidpersonsidinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of invitation created|Inline|

<h3 id="postspacesspaceidpersonsidinvitation-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## delete/spaces/{spaceId}/persons/{id}/invitation

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/invitation \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /spaces/{spaceId}/persons/{id}/invitation`

delete the invitation of a person in a space

<h3 id="deletespacesspaceidpersonsidinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person|
|spaceId|path|string|true|Id of the space|

<h3 id="deletespacesspaceidpersonsidinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/persons/{id}/invitation

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/invitation \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ClientManagement": "no",
    "EmployeeAccess": true,
    "Folders": [
      {
        "Id": "PK8481482",
        "Right": "read"
      }
    ],
    "GroupIds": [
      [
        "PJFIA84",
        "PHAJHFJHA"
      ]
    ],
    "IsAdmin": true,
    "Player": "guest",
    "PlayerEnd": "20190601"
  }'
```

`PATCH /spaces/{spaceId}/persons/{id}/invitation`

modify an invitation

> Body parameter

```json
{
  "ClientManagement": "no",
  "EmployeeAccess": true,
  "Folders": [
    {
      "Id": "PK8481482",
      "Right": "read"
    }
  ],
  "GroupIds": [
    [
      "PJFIA84",
      "PHAJHFJHA"
    ]
  ],
  "IsAdmin": true,
  "Player": "guest",
  "PlayerEnd": "20190601"
}
```

<h3 id="patchspacesspaceidpersonsidinvitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|Invitation to create|
|» ClientManagement|body|string|false|none|
|» EmployeeAccess|body|boolean|false|none|
|» Folders|body|[object]|false|none|
|» » Id|body|string|false|none|
|» » Right|body|string|false|none|
|» GroupIds|body|[string]|false|none|
|» IsAdmin|body|boolean|false|none|
|» Player|body|string|false|none|
|» PlayerEnd|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ClientManagement|no|
|» ClientManagement|manager|
|» ClientManagement|adn|
|» » Right|read|
|» » Right|write|
|» Player|guest|
|» Player|owner|
|» Player|manager|
|» Player|assistant|
|» Player|collaborator|

<h3 id="patchspacesspaceidpersonsidinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## post/spaces/{spaceId}/persons/{id}/invitation/{invitationId}/send

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P198NFNIAJFAA46/invitation/P156HUFHA476/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Contact": "Dupond",
    "Message": "<p> Bienvenue dans l'\''espace de l'\''envtreprise SOCIETE </p>",
    "Signature": "cordialement",
    "Subject": "invitation sur le coffre"
  }'
```

`POST /spaces/{spaceId}/persons/{id}/invitation/{invitationId}/send`

send the invitation of a person in a space

> Body parameter

```json
{
  "Contact": "Dupond",
  "Message": "<p> Bienvenue dans l'espace de l'envtreprise SOCIETE </p>",
  "Signature": "cordialement",
  "Subject": "invitation sur le coffre"
}
```

<h3 id="postspacesspaceidpersonsidinvitationinvitationidsend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the person|
|invitationId|path|string|true|Id of the invitation|
|spaceId|path|string|true|Id of the space|
|body|body|object|true|content of invitation message to send|
|» Contact|body|string|false|none|
|» Message|body|string|false|none|
|» Signature|body|string|false|none|
|» Subject|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "Id": "T1234"
}
```

<h3 id="postspacesspaceidpersonsidinvitationinvitationidsend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Id of document created|Inline|

<h3 id="postspacesspaceidpersonsidinvitationinvitationidsend-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/persons/{memberId}/folders/{id}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P156HUFHA476/folders/T15646476 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/persons/{memberId}/folders/{id}`

Returns folderId with the access of the person

<h3 id="getspacesspaceidpersonsmemberidfoldersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|memberId|path|string|true|memberId of the person|

> Example responses

> 200 Response

```json
{
  "Id": "T45IHFA",
  "Right": "write",
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA"
}
```

<h3 id="getspacesspaceidpersonsmemberidfoldersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An access to a folder|Inline|

<h3 id="getspacesspaceidpersonsmemberidfoldersid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|
|Right|string|false|none|none|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Right|write|
|Right|read|
|Right|none|
|Level|confidential|
|Level|regular|
|Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## patch/spaces/{spaceId}/persons/{memberId}/folders/{id}

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/persons/P156HUFHA476/folders/T18784 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Right": "write",
    "About": "<b> Mon premier dossier </b>",
    "Home": "yes",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential"
  }'
```

`PATCH /spaces/{spaceId}/persons/{memberId}/folders/{id}`

Modify an access

> Body parameter

```json
{
  "Right": "write",
  "About": "<b> Mon premier dossier </b>",
  "Home": "yes",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential"
}
```

<h3 id="patchspacesspaceidpersonsmemberidfoldersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the folder|
|spaceId|path|string|true|Id of the space|
|memberId|path|string|true|memberId of the person|
|body|body|object|true|Access to modify|
|» Right|body|string|false|none|
|» About|body|string|false|none|
|» Home|body|boolean|false|none|
|» Keywords|body|[string]|false|none|
|» Level|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Right|write|
|» Right|read|
|» Right|none|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<h3 id="patchspacesspaceidpersonsmemberidfoldersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/providers

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/providers`

Returns folder with Id and provider data

<h3 id="getspacesspaceidproviders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier fournisseur </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Designation": "fournisseur pièces détachées",
    "ProviderNumber": "13587449420F"
  }
]
```

<h3 id="getspacesspaceidproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of provider folders|Inline|

<h3 id="getspacesspaceidproviders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» About|string|false|none|none|
|» Designation|string|false|none|none|
|» ProviderNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/providers/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/providers/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/providers/all`

Returns folder with Id and provider data (even archived)

<h3 id="getspacesspaceidprovidersall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier fournisseur </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Designation": "fournisseur pièces détachées",
    "ProviderNumber": "13587449420F"
  }
]
```

<h3 id="getspacesspaceidprovidersall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of provider folders|Inline|

<h3 id="getspacesspaceidprovidersall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» About|string|false|none|none|
|» Designation|string|false|none|none|
|» ProviderNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/search

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/search`

Research text inside documents, folders or messages

<h3 id="getspacesspaceidsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|Query|query|string|false|Text to find|
|Range|query|string|false|index range of the results|
|QueryContext|query|object|false|context of research|

> Example responses

> 200 Response

```json
{
  "Count": [
    {
      "Class": "Folder",
      "Count": 3
    }
  ],
  "Results": [
    {
      "Class": "Folder",
      "Extract": {
        "Text": "le dossier social",
        "Where": "Content"
      },
      "Id": "P94901",
      "Label": "Document 1",
      "Location": [
        "Document 1"
      ],
      "Score": 15.5656,
      "Specific": {
        "Extension": "pdf"
      }
    }
  ],
  "TotalCount": 3
}
```

<h3 id="getspacesspaceidsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|result object of search|Inline|

<h3 id="getspacesspaceidsearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|[object]|false|none|none|
|» Class|string|false|none|none|
|» Count|integer|false|none|none|
|Results|[object]|false|none|none|
|» Class|string|false|none|none|
|» Extract|object|false|none|none|
|» » Text|string|false|none|none|
|» » Where|string|false|none|none|
|» Id|string|false|none|none|
|» Label|string|false|none|none|
|» Location|[string]|false|none|none|
|» Score|number|false|none|none|
|» Specific|object|false|none|none|
|» » Extension|string|false|none|none|
|TotalCount|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Class|Document|
|» Class|Message|
|» Class|Folder|
|» Class|Document|
|» Class|Message|
|» Class|Folder|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/social-regimes

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/social-regimes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/social-regimes`

Returns folder with Id and social regime data

<h3 id="getspacesspaceidsocial-regimes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier fournisseur </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Designation": "fournisseur pièces détachées",
    "Periodicity": "monthly",
    "Type": "mandatory"
  }
]
```

<h3 id="getspacesspaceidsocial-regimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of social regime folders|Inline|

<h3 id="getspacesspaceidsocial-regimes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» About|string|false|none|none|
|» Designation|string|false|none|none|
|» Periodicity|string|false|none|none|
|» Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Periodicity|monthly|
|» Periodicity|quarterly|
|» Periodicity|half-yearly|
|» Periodicity|annual|
|» Periodicity|null|
|» Type|mandatory|
|» Type|optional|
|» Type|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/social-regimes/all

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/social-regimes/all \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/social-regimes/all`

Returns folder with Id and social regime data (even archived)

<h3 id="getspacesspaceidsocial-regimesall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|WithContractingPartner|query|string|false|if present returns infos of the ContractingPartner too|

> Example responses

> 200 Response

```json
[
  {
    "About": "<b> Mon premier fournisseur </b>",
    "ArchivalDate": "20160203",
    "Class": "social",
    "Home": "yes",
    "Id": "T45IHFA",
    "Keywords": [
      "paris",
      "comptabilité"
    ],
    "Level": "confidential",
    "ModificationDate": "20190325125042",
    "Name": "Dupond",
    "Parent": "TIOPHNA",
    "Comment": "pieces company",
    "End": "20190101",
    "Start": "20180630",
    "Designation": "fournisseur pièces détachées",
    "Periodicity": "monthly",
    "Type": "mandatory"
  }
]
```

<h3 id="getspacesspaceidsocial-regimesall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of social regime folders|Inline|

<h3 id="getspacesspaceidsocial-regimesall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» About|string|false|none|none|
|» ArchivalDate|string|false|none|none|
|» Class|string|false|none|none|
|» Home|boolean|false|none|none|
|» Id|string|false|none|none|
|» Keywords|[string]|false|none|none|
|» Level|string|false|none|none|
|» ModificationDate|string|false|none|none|
|» Name|string|false|none|none|
|» Parent|string|false|none|none|
|» Comment|string|false|none|none|
|» End|string|false|none|none|
|» Start|string|false|none|none|
|» About|string|false|none|none|
|» Designation|string|false|none|none|
|» Periodicity|string|false|none|none|
|» Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Level|confidential|
|» Level|regular|
|» Level|public|
|» Periodicity|monthly|
|» Periodicity|quarterly|
|» Periodicity|half-yearly|
|» Periodicity|annual|
|» Periodicity|null|
|» Type|mandatory|
|» Type|optional|
|» Type|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

## get/spaces/{spaceId}/spaces-invoicings

> Code samples

```bash
curl https://example.com/spaces/P156HUFHA476/spaces-invoicings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /spaces/{spaceId}/spaces-invoicings`

Returns CSV Invoicings of the spaces for the account of the spaceId

<h3 id="getspacesspaceidspaces-invoicings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Id of the space|
|Date|query|string|false|date range of the documents|

> Example responses

> 200 Response

```json
[
  {
    "Author": "Antoine Dupond",
    "Class": [
      [
        "Contract",
        "Invoice"
      ]
    ],
    "Code": "COD",
    "Comment": "my document",
    "Date": "20161203",
    "Extension": "pdf",
    "FolderDate": "20161203020506",
    "Id": "P45IHFA",
    "Title": "Facture décembre",
    "InvoiceNumber": "A123"
  }
]
```

<h3 id="getspacesspaceidspaces-invoicings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of csv invoicings|Inline|

<h3 id="getspacesspaceidspaces-invoicings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Author|string|false|none|none|
|» Class|[string]|false|none|none|
|» Code|string|false|none|none|
|» Comment|string|false|none|none|
|» Date|string|false|none|none|
|» Extension|string|false|none|none|
|» FolderDate|string|false|none|none|
|» Id|string|false|none|none|
|» Title|string|false|none|none|
|» InvoiceNumber|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
gma_auth ( Scopes: collaborator owner robot )
</aside>

# Schemas

<h2 id="tocS_Access">Access</h2>
<!-- backwards compatibility -->
<a id="schemaaccess"></a>
<a id="schema_Access"></a>
<a id="tocSaccess"></a>
<a id="tocsaccess"></a>

```json
{
  "Id": "T45IHFA",
  "Right": "write"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|
|Right|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Right|write|
|Right|read|
|Right|none|

<h2 id="tocS_Accounting">Accounting</h2>
<!-- backwards compatibility -->
<a id="schemaaccounting"></a>
<a id="schema_Accounting"></a>
<a id="tocSaccounting"></a>
<a id="tocsaccounting"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Accounting": {
    "AccountedOn": "20181202",
    "Workbook": "fiscal",
    "YearMonth": 201802
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Accounting|object|false|none|none|

<h2 id="tocS_AccountingYear">AccountingYear</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingyear"></a>
<a id="schema_AccountingYear"></a>
<a id="tocSaccountingyear"></a>
<a id="tocsaccountingyear"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "ogm of the company",
  "End": "20181231",
  "NetIncome": 52634.36,
  "NetPosition": 14580.36,
  "Start": "20171231",
  "Tax": 45698.36,
  "TaxableIncome": 869523.36,
  "Turnover": 1025.36
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|NetIncome|number|false|none|none|
|NetPosition|number|false|none|none|
|Start|string|false|none|none|
|Tax|number|false|none|none|
|TaxableIncome|number|false|none|none|
|Turnover|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_Bank">Bank</h2>
<!-- backwards compatibility -->
<a id="schemabank"></a>
<a id="schema_Bank"></a>
<a id="tocSbank"></a>
<a id="tocsbank"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "ContractReference": "13587449420F",
  "Designation": "banque prêt entreprise"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|ContractReference|string|false|none|none|
|Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_BankStatement">BankStatement</h2>
<!-- backwards compatibility -->
<a id="schemabankstatement"></a>
<a id="schema_BankStatement"></a>
<a id="tocSbankstatement"></a>
<a id="tocsbankstatement"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "AccountedOn": 20201231,
  "Balance": 1352.63,
  "Number": "10015848",
  "StatementDate": "20160801"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|AccountedOn|string|false|none|none|
|Balance|number(number)|false|none|none|
|Number|number(string)|false|none|none|
|StatementDate|string|false|none|none|

<h2 id="tocS_BusinessGroup">BusinessGroup</h2>
<!-- backwards compatibility -->
<a id="schemabusinessgroup"></a>
<a id="schema_BusinessGroup"></a>
<a id="tocSbusinessgroup"></a>
<a id="tocsbusinessgroup"></a>

```json
{
  "Id": "P45IHFA",
  "ModificationDate": "20190325125042",
  "Name": "Client Durand"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|

<h2 id="tocS_CallForDocument">CallForDocument</h2>
<!-- backwards compatibility -->
<a id="schemacallfordocument"></a>
<a id="schema_CallForDocument"></a>
<a id="tocScallfordocument"></a>
<a id="tocscallfordocument"></a>

```json
{
  "Categories": [
    "ID",
    "Invoices"
  ],
  "ClientManagement": "no",
  "Comment": "first invitation",
  "Contact": "Dupond",
  "IsAdmin": true,
  "Message": "<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>",
  "Player": "guest",
  "PlayerEnd": "20190601",
  "Signature": "cordialement",
  "Subject": "invitation sur le coffre"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Categories|[string]|false|none|none|
|ClientManagement|string|false|none|none|
|Comment|string|false|none|none|
|Contact|string|false|none|none|
|IsAdmin|boolean|false|none|none|
|Message|string|false|none|none|
|Player|string|false|none|none|
|PlayerEnd|string|false|none|none|
|Signature|string|false|none|none|
|Subject|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ClientManagement|no|
|ClientManagement|manager|
|ClientManagement|adn|
|Player|guest|
|Player|owner|
|Player|manager|
|Player|assistant|
|Player|collaborator|

<h2 id="tocS_CollectiveDecision">CollectiveDecision</h2>
<!-- backwards compatibility -->
<a id="schemacollectivedecision"></a>
<a id="schema_CollectiveDecision"></a>
<a id="tocScollectivedecision"></a>
<a id="tocscollectivedecision"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "ogm of the company",
  "Date": "20180202",
  "DividendDistributions": 1025.36,
  "DividendDistributionsDate": "20180203",
  "Event": "EGM"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|DividendDistributions|number|false|none|none|
|DividendDistributionsDate|string|false|none|none|
|Event|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|
|Event|EGM|
|Event|CGM|
|Event|OGM|
|Event|ConstituentAssembly|
|Event|SolePartner|
|Event|OtherEvent|
|Event|Other|
|Event|Office|
|Event|ExecutiveCommittee|
|Event|Consulting|
|Event|Board|
|Event|PartnersMeeting|

<h2 id="tocS_CompanyEntity">CompanyEntity</h2>
<!-- backwards compatibility -->
<a id="schemacompanyentity"></a>
<a id="schema_CompanyEntity"></a>
<a id="tocScompanyentity"></a>
<a id="tocscompanyentity"></a>

```json
{
  "ArchivalDate": "20160203",
  "Comment": "my brother",
  "Id": "T45IHFA",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "ApeCode": "420F",
  "LegalName": "Mon entreprise Dupond",
  "LegalStatut": "SAS",
  "RegistrationNumber": "236542158",
  "Type": "EPT",
  "VatNumber": "46546847864"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchivalDate|string|false|none|none|
|Comment|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|ApeCode|string|false|none|none|
|LegalName|string|false|none|none|
|LegalStatut|string|false|none|none|
|RegistrationNumber|string|false|none|none|
|Type|string|false|none|none|
|VatNumber|string|false|none|none|

<h2 id="tocS_Contract">Contract</h2>
<!-- backwards compatibility -->
<a id="schemacontract"></a>
<a id="schema_Contract"></a>
<a id="tocScontract"></a>
<a id="tocscontract"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_Contractual-Relationship">Contractual-Relationship</h2>
<!-- backwards compatibility -->
<a id="schemacontractual-relationship"></a>
<a id="schema_Contractual-Relationship"></a>
<a id="tocScontractual-relationship"></a>
<a id="tocscontractual-relationship"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "ContractReference": "13587449420F",
  "Designation": "autre contrat"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|ContractReference|string|false|none|none|
|Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_ContractualDocument">ContractualDocument</h2>
<!-- backwards compatibility -->
<a id="schemacontractualdocument"></a>
<a id="schema_ContractualDocument"></a>
<a id="tocScontractualdocument"></a>
<a id="tocscontractualdocument"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Amount": "1001.36",
  "Designation": "contrat client",
  "Reference": "151465AFHIA",
  "StartDate": "20181128",
  "Type": "quotation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Amount|string|false|none|none|
|Designation|string|false|none|none|
|Reference|string|false|none|none|
|StartDate|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|contract|
|Type|engagement-letter|
|Type|amendment|
|Type|purchase-order|
|Type|delivery-order|
|Type|quotation|
|Type|other|

<h2 id="tocS_CorporateTaxDeclaration">CorporateTaxDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemacorporatetaxdeclaration"></a>
<a id="schema_CorporateTaxDeclaration"></a>
<a id="tocScorporatetaxdeclaration"></a>
<a id="tocscorporatetaxdeclaration"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Amount": 132.63,
  "DeclarationDate": "20160801",
  "Order": "1st advance",
  "Rate": 10.63,
  "TaxBase": 123.36
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Amount|number(float)|false|none|none|
|DeclarationDate|string|false|none|none|
|Order|string|false|none|none|
|Rate|number(float)|false|none|none|
|TaxBase|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Order|1st advance|
|Order|2nd advance|
|Order|3rd advance|
|Order|4th advance|
|Order|regularization|

<h2 id="tocS_Customer">Customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "CustomerNumber": "13587449420F",
  "Designation": "client pièces détachées"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|CustomerNumber|string|false|none|none|
|Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|

<h2 id="tocS_Employee">Employee</h2>
<!-- backwards compatibility -->
<a id="schemaemployee"></a>
<a id="schema_Employee"></a>
<a id="tocSemployee"></a>
<a id="tocsemployee"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "ContractType": "01",
  "EmployeeNumber": "13587FAZCD420F",
  "Function": "commercial",
  "PostalMail": true,
  "SSNumber": "1542012365985215"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|ContractType|string|false|none|none|
|EmployeeNumber|string|false|none|none|
|Function|string|false|none|none|
|PostalMail|boolean|false|none|none|
|SSNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_Employer">Employer</h2>
<!-- backwards compatibility -->
<a id="schemaemployer"></a>
<a id="schema_Employer"></a>
<a id="tocSemployer"></a>
<a id="tocsemployer"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "EmployeeNumber": "13587FAZCD420F",
  "Function": "commercial",
  "SSNumber": "1542012365985215"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|EmployeeNumber|string|false|none|none|
|Function|string|false|none|none|
|SSNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_Exchange">Exchange</h2>
<!-- backwards compatibility -->
<a id="schemaexchange"></a>
<a id="schema_Exchange"></a>
<a id="tocSexchange"></a>
<a id="tocsexchange"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_ExpenseProof">ExpenseProof</h2>
<!-- backwards compatibility -->
<a id="schemaexpenseproof"></a>
<a id="schema_ExpenseProof"></a>
<a id="tocSexpenseproof"></a>
<a id="tocsexpenseproof"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Account": "CAB",
  "ArchivalDate": 20211231,
  "ExpenseDate": "20200202",
  "InclVAT": 1000,
  "Provider": "G7",
  "Reason": "taxi",
  "Status": "R",
  "VAT": 19.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Account|string|false|none|none|
|ArchivalDate|string|false|none|none|
|ExpenseDate|string|false|none|none|
|InclVAT|number|false|none|none|
|Provider|string|false|none|none|
|Reason|string|false|none|none|
|Status|string|false|none|none|
|VAT|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Account|CAB|
|Account|IKM|
|Account|PRK|
|Account|TXI|
|Account|VOY|
|Account|PTT|
|Account|FHR|
|Account|DIV|
|Account|RES|
|Status|R|
|Status|V|
|Status|W|

<h2 id="tocS_ExpenseReport">ExpenseReport</h2>
<!-- backwards compatibility -->
<a id="schemaexpensereport"></a>
<a id="schema_ExpenseReport"></a>
<a id="tocSexpensereport"></a>
<a id="tocsexpensereport"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "BeforeVAT": 1000,
  "ExpenseDate": "20200202",
  "InclVAT": 1200,
  "ProcessingDate": "20200203",
  "VAT": 19.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|BeforeVAT|number|false|none|none|
|ExpenseDate|string|false|none|none|
|InclVAT|number|false|none|none|
|ProcessingDate|string|false|none|none|
|VAT|number|false|none|none|

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_FollowUp">FollowUp</h2>
<!-- backwards compatibility -->
<a id="schemafollowup"></a>
<a id="schema_FollowUp"></a>
<a id="tocSfollowup"></a>
<a id="tocsfollowup"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "ClientManagement": "manager",
  "Invitation": {
    "Comment": "salarié invité",
    "PlayerEnd": "20190203",
    "Status": "accepted"
  },
  "Player": "manager"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|ClientManagement|string|false|none|none|
|Invitation|object|false|none|none|
|Player|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|
|ClientManagement|manager|
|ClientManagement|adn|
|ClientManagement|null|
|Player|guest|
|Player|manager|
|Player|collaborator|
|Player|owner|
|Player|assistant|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "EndDate": "20160203",
  "Id": "T45IHFA",
  "Name": "RH"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndDate|string|false|none|none|
|Id|string|false|none|none|
|Name|string|false|none|none|

<h2 id="tocS_GuestInSpace">GuestInSpace</h2>
<!-- backwards compatibility -->
<a id="schemaguestinspace"></a>
<a id="schema_GuestInSpace"></a>
<a id="tocSguestinspace"></a>
<a id="tocsguestinspace"></a>

```json
{
  "ClientManagement": "no",
  "Comment": "first invitation",
  "Contact": "Dupond",
  "Folders": [
    {
      "Id": "PK8481482",
      "Right": "read"
    }
  ],
  "GroupIds": [
    [
      "PJFIA84",
      "PHAJHFJHA"
    ]
  ],
  "IsAdmin": true,
  "MemberId": "PAIHIHFA79TFA",
  "Message": "<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>",
  "Player": "guest",
  "PlayerEnd": "20190601",
  "Signature": "cordialement",
  "Subject": "invitation sur le coffre"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientManagement|string|false|none|none|
|Comment|string|false|none|none|
|Contact|string|false|none|none|
|Folders|[object]|false|none|none|
|GroupIds|[string]|false|none|none|
|IsAdmin|boolean|false|none|none|
|MemberId|string|false|none|none|
|Message|string|false|none|none|
|Player|string|false|none|none|
|PlayerEnd|string|false|none|none|
|Signature|string|false|none|none|
|Subject|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ClientManagement|no|
|ClientManagement|manager|
|ClientManagement|adn|
|Player|guest|
|Player|owner|
|Player|manager|
|Player|assistant|
|Player|collaborator|

<h2 id="tocS_Insurance">Insurance</h2>
<!-- backwards compatibility -->
<a id="schemainsurance"></a>
<a id="schema_Insurance"></a>
<a id="tocSinsurance"></a>
<a id="tocsinsurance"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "CustomerNumber": "13587449420F",
  "Designation": "assurance civile",
  "PolicyNumber": "13587449420F"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|CustomerNumber|string|false|none|none|
|Designation|string|false|none|none|
|PolicyNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_Invitation">Invitation</h2>
<!-- backwards compatibility -->
<a id="schemainvitation"></a>
<a id="schema_Invitation"></a>
<a id="tocSinvitation"></a>
<a id="tocsinvitation"></a>

```json
{
  "ClientManagement": "no",
  "CodeMethod": {
    "Code": "1234",
    "Type": "manual"
  },
  "EmployeeAccess": true,
  "Folders": [
    {
      "Id": "PK8481482",
      "Name": "Social",
      "Right": "read"
    }
  ],
  "GroupIds": [
    [
      "PJFIA84",
      "PHAJHFJHA"
    ]
  ],
  "Groups": [
    {
      "EndDate": "20230202",
      "Id": "PK8481482",
      "Name": "Mon Groupe"
    }
  ],
  "IsAdmin": true,
  "LinkMethod": {
    "Type": "Postal"
  },
  "Player": "guest",
  "PlayerEnd": "20190601",
  "Status": "accepted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientManagement|string|false|none|none|
|CodeMethod|object|false|none|none|
|EmployeeAccess|boolean|false|none|none|
|Folders|[object]|false|none|none|
|GroupIds|[string]|false|none|none|
|Groups|[object]|false|none|none|
|IsAdmin|boolean|false|none|none|
|LinkMethod|object|false|none|none|
|Player|string|false|none|none|
|PlayerEnd|string|false|none|none|
|Status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ClientManagement|no|
|ClientManagement|manager|
|ClientManagement|adn|
|Player|guest|
|Player|owner|
|Player|manager|
|Player|assistant|
|Player|collaborator|
|Status|sent|
|Status|accepted|
|Status|refused|
|Status|expired|
|Status|finished|
|Status|waiting for validation|
|Status|waiting for password and userid|
|Status|waiting for login|
|Status|not sent|
|Status|waiting for invitation|

<h2 id="tocS_InvitationPerson">InvitationPerson</h2>
<!-- backwards compatibility -->
<a id="schemainvitationperson"></a>
<a id="schema_InvitationPerson"></a>
<a id="tocSinvitationperson"></a>
<a id="tocsinvitationperson"></a>

```json
{
  "PersonId": "PAIHIHFA79TFA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PersonId|string|false|none|none|

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "AccountedOn": 20201231,
  "BeforeVAT": 1000,
  "DueDate": 20190130,
  "InclVAT": 1200,
  "InvoiceDate": "20200202",
  "Number": "036459879874",
  "PaymentDate": 20190131,
  "Type": "commercial-invoice",
  "VAT": 19.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|AccountedOn|string|false|none|none|
|BeforeVAT|number|false|none|none|
|DueDate|string|false|none|none|
|InclVAT|number|false|none|none|
|InvoiceDate|string|false|none|none|
|Number|string|false|none|none|
|PaymentDate|string|false|none|none|
|Type|string|false|none|none|
|VAT|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|commercial-invoice|
|Type|credit-note|
|Type|amending-invoice|
|Type|self-billing|
|Type|credit-self-billing|
|Type|down-payment-invoice|
|Type|informations-invoice|

<h2 id="tocS_Legal">Legal</h2>
<!-- backwards compatibility -->
<a id="schemalegal"></a>
<a id="schema_Legal"></a>
<a id="tocSlegal"></a>
<a id="tocslegal"></a>

```json
{
  "IdentificationNumber": "548",
  "RegistrationDate": "20190325",
  "RegistrationNumber": "123456",
  "VATNumber": "123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentificationNumber|string|false|none|none|
|RegistrationDate|string|false|none|none|
|RegistrationNumber|string|false|none|none|
|VATNumber|string|false|none|none|

<h2 id="tocS_LegalEntity">LegalEntity</h2>
<!-- backwards compatibility -->
<a id="schemalegalentity"></a>
<a id="schema_LegalEntity"></a>
<a id="tocSlegalentity"></a>
<a id="tocslegalentity"></a>

```json
{
  "ArchivalDate": "20160203",
  "Comment": "my brother",
  "Id": "T45IHFA",
  "ModificationDate": "20190325125042",
  "Name": "Dupond"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchivalDate|string|false|none|none|
|Comment|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|

<h2 id="tocS_Loan">Loan</h2>
<!-- backwards compatibility -->
<a id="schemaloan"></a>
<a id="schema_Loan"></a>
<a id="tocSloan"></a>
<a id="tocsloan"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "Amount": 1000,
  "Category": "debt spreading",
  "Designation": "emprunt entreprise",
  "DueAmount": 1000.6,
  "MonthsNumber": 12,
  "Rate": 2.5,
  "TotalCost": 10200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|Amount|number(float)|false|none|none|
|Category|string|false|none|none|
|Designation|string|false|none|none|
|DueAmount|number(float)|false|none|none|
|MonthsNumber|number|false|none|none|
|Rate|number(float)|false|none|none|
|TotalCost|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|
|Category|debt spreading|
|Category|bank loan|
|Category|current account|
|Category|overdraft agreement|
|Category|leasing|
|Category|obligation|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "Author": "PKPOFJA7655TFA",
  "Id": "T45IHFA",
  "Level": "confidential",
  "MessageDate": "20160203",
  "ModificationAuthor": "P8Y80FAVUV24",
  "ModificationDate": "20190325125042",
  "Text": "<p> hello world </p>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Id|string|false|none|none|
|Level|string|false|none|none|
|MessageDate|string|false|none|none|
|ModificationAuthor|string|false|none|none|
|ModificationDate|string|false|none|none|
|Text|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|

<h2 id="tocS_ModifyCollect">ModifyCollect</h2>
<!-- backwards compatibility -->
<a id="schemamodifycollect"></a>
<a id="schema_ModifyCollect"></a>
<a id="tocSmodifycollect"></a>
<a id="tocsmodifycollect"></a>

```json
{
  "Categories": [
    [
      "ID",
      "Invoices"
    ]
  ],
  "ClientManagement": "no",
  "IsAdmin": true,
  "Player": "guest",
  "PlayerEnd": "20190601"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Categories|[string]|false|none|none|
|ClientManagement|string|false|none|none|
|IsAdmin|boolean|false|none|none|
|Player|string|false|none|none|
|PlayerEnd|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ClientManagement|no|
|ClientManagement|manager|
|ClientManagement|adn|
|Player|guest|
|Player|owner|
|Player|manager|
|Player|assistant|
|Player|collaborator|

<h2 id="tocS_ModifyInvitation">ModifyInvitation</h2>
<!-- backwards compatibility -->
<a id="schemamodifyinvitation"></a>
<a id="schema_ModifyInvitation"></a>
<a id="tocSmodifyinvitation"></a>
<a id="tocsmodifyinvitation"></a>

```json
{
  "ClientManagement": "no",
  "Folders": [
    {
      "Id": "PK8481482",
      "Right": "read"
    }
  ],
  "GroupIds": [
    [
      "PJFIA84",
      "PHAJHFJHA"
    ]
  ],
  "IsAdmin": true,
  "Player": "guest",
  "PlayerEnd": "20190601"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientManagement|string|false|none|none|
|Folders|[object]|false|none|none|
|GroupIds|[string]|false|none|none|
|IsAdmin|boolean|false|none|none|
|Player|string|false|none|none|
|PlayerEnd|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ClientManagement|no|
|ClientManagement|manager|
|ClientManagement|adn|
|Player|guest|
|Player|owner|
|Player|manager|
|Player|assistant|
|Player|collaborator|

<h2 id="tocS_OtherTax">OtherTax</h2>
<!-- backwards compatibility -->
<a id="schemaothertax"></a>
<a id="schema_OtherTax"></a>
<a id="tocSothertax"></a>
<a id="tocsothertax"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Amount": 132.63,
  "DeclarationDate": "20160801",
  "Reference": "décla CFE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Amount|number(float)|false|none|none|
|DeclarationDate|string|false|none|none|
|Reference|string|false|none|none|

<h2 id="tocS_Password">Password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_Password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
{
  "Comment": "mon compte google",
  "Designation": "compte google",
  "Ident": "test",
  "Link": "https://www.google.fr",
  "Password": "azerty"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|string|false|none|none|
|Designation|string|false|none|none|
|Ident|string|false|none|none|
|Link|string|false|none|none|
|Password|string|false|none|none|

<h2 id="tocS_PaySlip">PaySlip</h2>
<!-- backwards compatibility -->
<a id="schemapayslip"></a>
<a id="schema_PaySlip"></a>
<a id="tocSpayslip"></a>
<a id="tocspayslip"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Begin": "20160801",
  "EmployeeContributions": 2000.5,
  "EmployerContributions": 400.5,
  "End": "20160831",
  "FixedGrossAmount": 1352.63,
  "NetAmount": 1005.63,
  "TotalGrossAmount": 1548.63,
  "Vacation": 20.5,
  "VariableGrossAmount": 132.63
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Begin|string|false|none|none|
|EmployeeContributions|number(float)|false|none|none|
|EmployerContributions|number(float)|false|none|none|
|End|string|false|none|none|
|FixedGrossAmount|number(float)|false|none|none|
|NetAmount|number(float)|false|none|none|
|TotalGrossAmount|number(float)|false|none|none|
|Vacation|number(float)|false|none|none|
|VariableGrossAmount|number(float)|false|none|none|

<h2 id="tocS_Payroll">Payroll</h2>
<!-- backwards compatibility -->
<a id="schemapayroll"></a>
<a id="schema_Payroll"></a>
<a id="tocSpayroll"></a>
<a id="tocspayroll"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Begin": "20160801",
  "EmployeeContributions": 1352.63,
  "EmployerContributions": 132.63,
  "End": "20160831",
  "NetAmount": 1005.63,
  "TotalGrossAmount": 1548.63
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Begin|string|false|none|none|
|EmployeeContributions|number(float)|false|none|none|
|EmployerContributions|number(float)|false|none|none|
|End|string|false|none|none|
|NetAmount|number(float)|false|none|none|
|TotalGrossAmount|number(float)|false|none|none|

<h2 id="tocS_Person">Person</h2>
<!-- backwards compatibility -->
<a id="schemaperson"></a>
<a id="schema_Person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{
  "ArchivalDate": "20160203",
  "Comment": "my brother",
  "Id": "T45IHFA",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Address": {
    "City": "Paris",
    "Complement": "batiment A",
    "Country": "France",
    "Street": "2, rue du chateau",
    "ZipCode": "75001"
  },
  "Birth": {
    "Date": 19671231,
    "Place": "Lille"
  },
  "Email": "bertrand@monmail.com",
  "FirstName": "Bertrand",
  "Function": [
    "employee",
    "provider"
  ],
  "MemberId": "P1A6FD090A",
  "Mobile": "+33606060606",
  "Sex": "male",
  "Validated": "true"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArchivalDate|string|false|none|none|
|Comment|string|false|none|none|
|Id|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Address|object|false|none|none|
|Birth|object|false|none|none|
|Email|string|false|none|none|
|FirstName|string|false|none|none|
|Function|[string]|false|none|none|
|MemberId|string|false|none|none|
|Mobile|string|false|none|none|
|Sex|string|false|none|none|
|Validated|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Sex|male|
|Sex|female|
|Validated|true|
|Validated|false|

<h2 id="tocS_Portfolio">Portfolio</h2>
<!-- backwards compatibility -->
<a id="schemaportfolio"></a>
<a id="schema_Portfolio"></a>
<a id="tocSportfolio"></a>
<a id="tocsportfolio"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Designation": "My Portfolio"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Designation|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_ProfessionalProperties">ProfessionalProperties</h2>
<!-- backwards compatibility -->
<a id="schemaprofessionalproperties"></a>
<a id="schema_ProfessionalProperties"></a>
<a id="tocSprofessionalproperties"></a>
<a id="tocsprofessionalproperties"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "Peugeot Lyon",
  "DateIn": "20201802",
  "DateOut": "20201802",
  "Designation": "peugeot siège",
  "Value": 1500.23
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|DateIn|string|false|none|none|
|DateOut|string|false|none|none|
|Designation|string|false|none|none|
|Value|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_ProfessionalVehicle">ProfessionalVehicle</h2>
<!-- backwards compatibility -->
<a id="schemaprofessionalvehicle"></a>
<a id="schema_ProfessionalVehicle"></a>
<a id="tocSprofessionalvehicle"></a>
<a id="tocsprofessionalvehicle"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "Peugeot Lyon",
  "DateIn": "20201802",
  "DateOut": "20201802",
  "Designation": "peugeot siège",
  "Value": 1500.23,
  "Brand": "Renault",
  "CompanyTax": true,
  "Model": "Clio",
  "RegistrationDate": "20181231",
  "RegistrationNumber": "AA001AA",
  "Type": "car"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|DateIn|string|false|none|none|
|DateOut|string|false|none|none|
|Designation|string|false|none|none|
|Value|number|false|none|none|
|Brand|string|false|none|none|
|CompanyTax|boolean|false|none|none|
|Model|string|false|none|none|
|RegistrationDate|string|false|none|none|
|RegistrationNumber|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "About": "<b> Mon premier fournisseur </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "Designation": "fournisseur pièces détachées",
  "ProviderNumber": "13587449420F"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|About|string|false|none|none|
|Designation|string|false|none|none|
|ProviderNumber|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_Section">Section</h2>
<!-- backwards compatibility -->
<a id="schemasection"></a>
<a id="schema_Section"></a>
<a id="tocSsection"></a>
<a id="tocssection"></a>

```json
{
  "Keywords": [
    [
      "paris",
      "comptabilité"
    ]
  ],
  "Name": "Journal",
  "State": "folded",
  "Type": "notes"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Keywords|[string]|false|none|none|
|Name|string|false|none|none|
|State|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|State|folded|
|State|unfolded|
|State|hidden|
|Type|about|
|Type|notes|
|Type|documents|
|Type|tasks|
|Type|codes|
|Type|subfolders|
|Type|contacts|
|Type|any other specific type|

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "MemberId": "PIFIAJHNFA972BUBF",
  "Scope": "collaborator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemberId|string|false|none|none|
|Scope|string|false|none|none|

<h2 id="tocS_SocialContract">SocialContract</h2>
<!-- backwards compatibility -->
<a id="schemasocialcontract"></a>
<a id="schema_SocialContract"></a>
<a id="tocSsocialcontract"></a>
<a id="tocssocialcontract"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "ContractDate": "20190202",
  "ContractDuration": "6 mois",
  "ContractualChange": "augmentation",
  "Position": "cadre",
  "WageDevelopments": 1548.63
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|ContractDate|string|false|none|none|
|ContractDuration|string|false|none|none|
|ContractualChange|string|false|none|none|
|Position|string|false|none|none|
|WageDevelopments|number(float)|false|none|none|

<h2 id="tocS_SocialDeclaration">SocialDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemasocialdeclaration"></a>
<a id="schema_SocialDeclaration"></a>
<a id="tocSsocialdeclaration"></a>
<a id="tocssocialdeclaration"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Amount": 132.63,
  "DeclarationDate": "20160801"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Amount|number(float)|false|none|none|
|DeclarationDate|string|false|none|none|

<h2 id="tocS_SocialRegime">SocialRegime</h2>
<!-- backwards compatibility -->
<a id="schemasocialregime"></a>
<a id="schema_SocialRegime"></a>
<a id="tocSsocialregime"></a>
<a id="tocssocialregime"></a>

```json
{
  "About": "<b> Mon premier fournisseur </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "pieces company",
  "End": "20190101",
  "Start": "20180630",
  "Designation": "fournisseur pièces détachées",
  "Periodicity": "monthly",
  "Type": "mandatory"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|
|About|string|false|none|none|
|Designation|string|false|none|none|
|Periodicity|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|
|Periodicity|monthly|
|Periodicity|quarterly|
|Periodicity|half-yearly|
|Periodicity|annual|
|Periodicity|null|
|Type|mandatory|
|Type|optional|
|Type|null|

<h2 id="tocS_Space">Space</h2>
<!-- backwards compatibility -->
<a id="schemaspace"></a>
<a id="schema_Space"></a>
<a id="tocSspace"></a>
<a id="tocsspace"></a>

```json
{
  "Id": "P12345",
  "Logo": {
    "Content64Encoded": "PHNUOAFAFOPFAF",
    "Extension": "png"
  },
  "ModificationDate": "20190325125042",
  "Name": "Mon Entreprise",
  "Type": "company"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|
|Logo|object|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|private|
|Type|enterprise|
|Type|company|
|Type|association|

<h2 id="tocS_SpacesInvoicing">SpacesInvoicing</h2>
<!-- backwards compatibility -->
<a id="schemaspacesinvoicing"></a>
<a id="schema_SpacesInvoicing"></a>
<a id="tocSspacesinvoicing"></a>
<a id="tocsspacesinvoicing"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "InvoiceNumber": "A123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|InvoiceNumber|string|false|none|none|

<h2 id="tocS_TaxContract">TaxContract</h2>
<!-- backwards compatibility -->
<a id="schemataxcontract"></a>
<a id="schema_TaxContract"></a>
<a id="tocStaxcontract"></a>
<a id="tocstaxcontract"></a>

```json
{
  "About": "<b> Mon premier dossier </b>",
  "ArchivalDate": "20160203",
  "Class": "social",
  "Home": "yes",
  "Id": "T45IHFA",
  "Keywords": [
    "paris",
    "comptabilité"
  ],
  "Level": "confidential",
  "ModificationDate": "20190325125042",
  "Name": "Dupond",
  "Parent": "TIOPHNA",
  "Comment": "ogm of the company",
  "Designation": "année 2019",
  "End": "20181231",
  "Start": "20171231"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|About|string|false|none|none|
|ArchivalDate|string|false|none|none|
|Class|string|false|none|none|
|Home|boolean|false|none|none|
|Id|string|false|none|none|
|Keywords|[string]|false|none|none|
|Level|string|false|none|none|
|ModificationDate|string|false|none|none|
|Name|string|false|none|none|
|Parent|string|false|none|none|
|Comment|string|false|none|none|
|Designation|string|false|none|none|
|End|string|false|none|none|
|Start|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Level|confidential|
|Level|regular|
|Level|public|

<h2 id="tocS_Trigger">Trigger</h2>
<!-- backwards compatibility -->
<a id="schematrigger"></a>
<a id="schema_Trigger"></a>
<a id="tocStrigger"></a>
<a id="tocstrigger"></a>

```json
{
  "Date": "string",
  "Event": "person"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|string|false|none|none|
|Event|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Event|person|
|Event|collect|
|Event|document|

<h2 id="tocS_VATDeclaration">VATDeclaration</h2>
<!-- backwards compatibility -->
<a id="schemavatdeclaration"></a>
<a id="schema_VATDeclaration"></a>
<a id="tocSvatdeclaration"></a>
<a id="tocsvatdeclaration"></a>

```json
{
  "Author": "Antoine Dupond",
  "Class": [
    [
      "Contract",
      "Invoice"
    ]
  ],
  "Code": "COD",
  "Comment": "my document",
  "Date": "20161203",
  "Extension": "pdf",
  "FolderDate": "20161203020506",
  "Id": "P45IHFA",
  "Title": "Facture décembre",
  "Begin": "20160801",
  "CollectedVAT": 1548.63,
  "CreditVAT": 400.5,
  "DeductibleVAT": 20.5,
  "End": "20160831",
  "ExemptTurnover": 132.63,
  "Number": "153126",
  "PayableVAT": 2000.5,
  "TaxableTurnover": 1352.63
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string|false|none|none|
|Class|[string]|false|none|none|
|Code|string|false|none|none|
|Comment|string|false|none|none|
|Date|string|false|none|none|
|Extension|string|false|none|none|
|FolderDate|string|false|none|none|
|Id|string|false|none|none|
|Title|string|false|none|none|
|Begin|string|false|none|none|
|CollectedVAT|number(float)|false|none|none|
|CreditVAT|number(float)|false|none|none|
|DeductibleVAT|number(float)|false|none|none|
|End|string|false|none|none|
|ExemptTurnover|number(float)|false|none|none|
|Number|string|false|none|none|
|PayableVAT|number(float)|false|none|none|
|TaxableTurnover|number(float)|false|none|none|
