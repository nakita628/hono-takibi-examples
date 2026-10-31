<h1 id="profile-system">Profile System v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Create shopper profiles and manage their information.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="profile-system-profiles">Profiles</h1>

## Create client profile

<a id="opIdCreateClientProfile"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "birthDate": "1925-11-17",
    "document": "12345678900",
    "documentType": "CPF",
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

`POST /api/storage/profile-system/profiles`

Creates new client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> The `id` field returned by this request is the `profileId` used to retrieve information on a specific profile later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

> Body parameter

```json
{
  "birthDate": "1925-11-17",
  "document": "12345678900",
  "documentType": "CPF",
  "email": "john.doe@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

<h3 id="create-client-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|ttl|query|integer|false|This parameter sets the the Time To Live (TTL), in days, of the specific document being created or updated with this request. After this period of time from the moment of the request, the document is deleted. By sending this parameter you override the TTL set for the schema.<br><br>> Currently, the available default document schemas have no TTL. This means that documents are stored indefinitely, unless a TTL is sent when creating or updating.|
|body|body|[profile](#schemaprofile)|false|none|
|» birthDate|body|string|false|Client's birth date in ISO 8601 format.|
|» document|body|string|true|Client's document.|
|» documentType|body|string|true|Type of document informed in `document`.|
|» email|body|string|true|Client's email address.|
|» firstName|body|string|true|Client's first name.|
|» lastName|body|string|true|Client's last name.|

> Example responses

> 201 Response

```json
{
  "document": {
    "birthDate": "1925-11-17",
    "document": "12345678911",
    "documentType": "CPF",
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe"
  },
  "id": "c2cbebba-214e-40b2-b68f-98f862e755d5",
  "meta": {
    "author": "82a2b53d-39be-4f49-bb7c-8971b58cb7dc",
    "creationDate": "2022-01-05T15:41:37.5009471+00:00",
    "lastUpdateDate": "2022-01-05T15:41:37.5009471+00:00",
    "version": "27112371-a71b-45d6-b3bc-93436a3a0b4f"
  }
}
```

<h3 id="create-client-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get profile

<a id="opIdGetProfile"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}`

Retrieves the information of a specific client, by its `profileId`.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

> Example responses

> 200 Response

```json
[
  {
    "document": {
      "birthDate": "1925-11-17",
      "document": "1**********",
      "documentType": "CPF",
      "email": "j***.d**@e******.c**",
      "firstName": "J***",
      "lastName": "D**"
    },
    "id": "70caf394-8534-447e-a0ca-1803c669c771",
    "meta": {
      "author": "e40e0b6d-0605-4fa6-8176-1d69fbaf0818",
      "creationDate": "13/12/2021T00:00:00Z",
      "lastUpdate": "13/12/2021T00:00:00Z",
      "version": "abc"
    }
  }
]
```

<h3 id="get-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-profile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete client profile

<a id="opIdDeleteClientProfile"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/storage/profile-system/profiles/{profileId}`

Deletes a client profile by `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="delete-client-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|

<h3 id="delete-client-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Updates client profile

<a id="opIdUpdateClientProfile"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "birthDate": "1925-11-17",
    "document": "12345678900",
    "documentType": "CPF",
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

`PATCH /api/storage/profile-system/profiles/{profileId}`

Updates one or more fields of an existing client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

> Body parameter

```json
{
  "birthDate": "1925-11-17",
  "document": "12345678900",
  "documentType": "CPF",
  "email": "john.doe@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

<h3 id="updates-client-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|
|ttl|query|integer|false|This parameter sets the the Time To Live (TTL), in days, of the specific document being created or updated with this request. After this period of time from the moment of the request, the document is deleted. By sending this parameter you override the TTL set for the schema.<br><br>> Currently, the available default document schemas have no TTL. This means that documents are stored indefinitely, unless a TTL is sent when creating or updating.|
|body|body|object|false|none|
|» birthDate|body|string|false|Client's birth date in ISO 8601 format.|
|» document|body|string|false|Client's document.|
|» documentType|body|string|false|Type of document informed in `document`.|
|» email|body|string|false|Client's email address.|
|» firstName|body|string|false|Client's first name.|
|» lastName|body|string|false|Client's last name.|

> Example responses

> 200 Response

```json
{
  "document": {
    "birthDate": "17/11/1992",
    "document": "12345678911",
    "documentType": "CPF",
    "email": "john.doe@gmail.com",
    "firstName": "João",
    "lastName": "Gomes"
  },
  "id": "70caf394-8534-447e-a0ca-1803c669c771",
  "meta": {
    "author": "e40e0b6d-0605-4fa6-8176-1d69fbaf0818",
    "creationDate": "13/12/2021T00:00:00Z",
    "lastUpdate": "15/12/2021T00:00:00Z",
    "version": "bb996089-b77c-4bf3-be35-b99b6d91f91c"
  }
}
```

<h3 id="updates-client-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get unmasked profile

<a id="opIdGetUnmaskedProfile"></a>

> Code samples

```bash
curl 'https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/unmask?reason=data-validation' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/unmask`

Retrieves unmasked information of a specific client, by its `profileId`.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-unmasked-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|reason|query|string|true|Reason for requesting unmasked data.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

> Example responses

> 200 Response

```json
[
  {
    "document": {
      "birthDate": "1925-11-17",
      "document": "12345678911",
      "documentType": "CPF",
      "email": "john.doe@example.com",
      "firstName": "John",
      "lastName": "Doe"
    },
    "id": "70caf394-8534-447e-a0ca-1803c669c771",
    "meta": {
      "author": "e40e0b6d-0605-4fa6-8176-1d69fbaf0818",
      "creationDate": "13/12/2021T00:00:00Z",
      "lastUpdate": "13/12/2021T00:00:00Z",
      "version": "abc"
    }
  }
]
```

<h3 id="get-unmasked-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-unmasked-profile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get profile by version

<a id="opIdGetProfileByVersion"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/versions/70caf394-8534-447e-a0ca-1803c669c771 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/versions/{profileVersionId}`

Retrieves the information of a specific version of a client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile by version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-profile-by-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|profileVersionId|path|string|true|ID of the version of the client's profile as returned by endpoints that create or update profile information in the `version` field.|

> Example responses

> 200 Response

```json
[
  {
    "document": {
      "birthDate": "1925-11-17",
      "document": "1********",
      "documentType": "CPF",
      "email": "j***********",
      "firstName": "J***",
      "lastName": "G****"
    },
    "id": "70caf394-8534-447e-a0ca-1803c669c771",
    "meta": {
      "author": "e40e0b6d-0605-4fa6-8176-1d69fbaf0818",
      "creationDate": "13/12/2021T00:00:00Z",
      "lastUpdate": "15/12/2021T00:00:00Z",
      "version": "bb996089-b77c-4bf3-be35-b99b6d91f91c"
    }
  }
]
```

<h3 id="get-profile-by-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-profile-by-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get unmasked profile by version

<a id="opIdGetUnmaskedProfileByVersion"></a>

> Code samples

```bash
curl 'https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/versions/70caf394-8534-447e-a0ca-1803c669c771/unmask?reason=data-validation' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/versions/{profileVersionId}/unmask`

Retrieves unmasked information of a specific version of a client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-unmasked-profile-by-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|profileVersionId|path|string|true|ID of the version of the client's profile as returned by endpoints that create or update profile information in the `version` field.|
|reason|query|string|true|Reason for requesting unmasked data.|

> Example responses

> 200 Response

```json
[
  {
    "document": {
      "birthDate": "1925-11-17",
      "document": "12345678911",
      "documentType": "CPF",
      "email": "john.doe@example.com",
      "firstName": "João",
      "lastName": "Gomes"
    },
    "id": "70caf394-8534-447e-a0ca-1803c669c771",
    "meta": {
      "author": "e40e0b6d-0605-4fa6-8176-1d69fbaf0818",
      "creationDate": "13/12/2021T00:00:00Z",
      "lastUpdate": "15/12/2021T00:00:00Z",
      "version": "bb996089-b77c-4bf3-be35-b99b6d91f91c"
    }
  }
]
```

<h3 id="get-unmasked-profile-by-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-unmasked-profile-by-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="profile-system-addresses">Addresses</h1>

## Get client addresses

<a id="opIdGetClientAddresses"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/addresses \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/addresses`

Retrieves information of all addresses of a given client, by its `profileId`.

> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked client addresses.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-client-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

> Example responses

> 200 Response

```json
[
  {
    "document": {
      "administrativeAreaLevel1": "RJ",
      "countryCode": "BR",
      "countryName": "B*****",
      "locality": "L*******",
      "localityAreaLevel1": "locality area",
      "postalCode": "2****-0**",
      "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
      "route": "51",
      "streetNumber": "999"
    },
    "id": "bf82180e-cf9e-4089-9af6-ae1518555992",
    "meta": {
      "author": "80aa79a3-aa89-4912-a20e-8ef69af19a6c",
      "creationDate": "2022-01-18T18:51:34.1293829+00:00",
      "lastUpdateDate": "2022-01-18T18:51:34.1293829+00:00",
      "version": "c9c44895-4589-4d0d-a28d-e0e656ca1926"
    }
  }
]
```

<h3 id="get-client-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-client-addresses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create client address

<a id="opIdCreateClientAddress"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "administrativeAreaLevel1": "RJ",
    "countryCode": "BR",
    "countryName": "Brasil",
    "locality": "Locality",
    "localityAreaLevel1": "Locality area",
    "postalCode": "20200-000",
    "route": "51",
    "streetNumber": "999"
  }'
```

`POST /api/storage/profile-system/profiles/{profileId}/addresses`

Creates new address for a given client profile.

> The `id` field returned by this request is the `addressId` used to retrieve or update information of a specific address later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

> Body parameter

```json
{
  "administrativeAreaLevel1": "RJ",
  "countryCode": "BR",
  "countryName": "Brasil",
  "locality": "Locality",
  "localityAreaLevel1": "Locality area",
  "postalCode": "20200-000",
  "route": "51",
  "streetNumber": "999"
}
```

<h3 id="create-client-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|
|body|body|[address](#schemaaddress)|false|none|
|» administrativeAreaLevel1|body|string|true|Name of administrative area, such as the state or province.|
|» countryCode|body|string|false|Two letter country code.|
|» countryName|body|string|true|Name of the address country.|
|» locality|body|string|true|Name of address locality, such as the city.|
|» localityAreaLevel1|body|string|true|Name of the address locality area, such as the neighborhood or district.|
|» postalCode|body|string|true|Address postal code.|
|» route|body|string|true|Address route or street name.|
|» streetNumber|body|string|true|Address street number.|

> Example responses

> 201 Response

```json
{
  "document": {
    "administrativeAreaLevel1": "RJ",
    "countryCode": "BR",
    "countryName": "Brasil",
    "locality": "Locality",
    "localityAreaLevel1": "locality area",
    "postalCode": "20200-000",
    "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
    "route": "51",
    "streetNumber": "999"
  },
  "id": "bf82180e-cf9e-4089-9af6-ae1518555992",
  "meta": {
    "author": "80aa79a3-aa89-4912-a20e-8ef69af19a6c",
    "creationDate": "2022-01-18T18:51:34.1293829+00:00",
    "lastUpdateDate": "2022-01-18T18:51:34.1293829+00:00",
    "version": "c9c44895-4589-4d0d-a28d-e0e656ca1926"
  }
}
```

<h3 id="create-client-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get unmasked client addresses

<a id="opIdGetUnmaskedClientAddresses"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/addresses/unmask \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/addresses/unmask`

Retrieves unmasked information of all addresses of a given client, by its `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-unmasked-client-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

> Example responses

> 200 Response

```json
[
  {
    "document": {
      "administrativeAreaLevel1": "RJ",
      "countryCode": "BR",
      "countryName": "Brasil",
      "locality": "Locality",
      "localityAreaLevel1": "locality area",
      "postalCode": "20200-000",
      "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
      "route": "51",
      "streetNumber": "999"
    },
    "id": "bf82180e-cf9e-4089-9af6-ae1518555992",
    "meta": {
      "author": "80aa79a3-aa89-4912-a20e-8ef69af19a6c",
      "creationDate": "2022-01-18T18:51:34.1293829+00:00",
      "lastUpdateDate": "2022-01-18T18:51:34.1293829+00:00",
      "version": "c9c44895-4589-4d0d-a28d-e0e656ca1926"
    }
  }
]
```

<h3 id="get-unmasked-client-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-unmasked-client-addresses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get address

<a id="opIdGetAddress"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/addresses/bf82180e-cf9e-4089-9af6-ae1518555992 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/addresses/{addressId}`

Retrieves information of a specific address of a given client, by its respectives `adderssId` and `profileId`.

> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked address.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|addressId|path|string|true|ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

> Example responses

> 200 Response

```json
{
  "document": {
    "administrativeAreaLevel1": "RJ",
    "countryCode": "BR",
    "countryName": "B*****",
    "locality": "L*******",
    "localityAreaLevel1": "locality area",
    "postalCode": "2****-0**",
    "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
    "route": "51",
    "streetNumber": "999"
  },
  "id": "bf82180e-cf9e-4089-9af6-ae1518555992",
  "meta": {
    "author": "80aa79a3-aa89-4912-a20e-8ef69af19a6c",
    "creationDate": "2022-01-18T18:51:34.1293829+00:00",
    "lastUpdateDate": "2022-01-18T18:51:34.1293829+00:00",
    "version": "c9c44895-4589-4d0d-a28d-e0e656ca1926"
  }
}
```

<h3 id="get-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete address

<a id="opIdDeleteAddress"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/addresses/bf82180e-cf9e-4089-9af6-ae1518555992 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/storage/profile-system/profiles/{profileId}/addresses/{addressId}`

Deletes a client's address by `profileId` and `addressId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="delete-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|addressId|path|string|true|ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

<h3 id="delete-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update client address

<a id="opIdUpdateClientAddress"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/addresses/bf82180e-cf9e-4089-9af6-ae1518555992 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "administrativeAreaLevel1": "RJ",
    "countryCode": "BR",
    "countryName": "Brasil",
    "locality": "Locality",
    "localityAreaLevel1": "Locality area",
    "postalCode": "20200-000",
    "route": "Brasil",
    "streetNumber": "Brasil"
  }'
```

`PATCH /api/storage/profile-system/profiles/{profileId}/addresses/{addressId}`

Updates one or more fields of an existing address for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

> Body parameter

```json
{
  "administrativeAreaLevel1": "RJ",
  "countryCode": "BR",
  "countryName": "Brasil",
  "locality": "Locality",
  "localityAreaLevel1": "Locality area",
  "postalCode": "20200-000",
  "route": "Brasil",
  "streetNumber": "Brasil"
}
```

<h3 id="update-client-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|addressId|path|string|true|ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|
|body|body|object|false|none|
|» administrativeAreaLevel1|body|string|false|Name of administrative area, such as the state or province.|
|» countryCode|body|string|false|Two letter country code.|
|» countryName|body|string|false|Name of the address country.|
|» locality|body|string|false|Name of address locality, such as the city.|
|» localityAreaLevel1|body|string|false|Name of the address locality area, such as the neighborhood or district.|
|» postalCode|body|string|false|Address postal code.|
|» route|body|string|false|Name of the address country.|
|» streetNumber|body|string|false|Name of the address country.|

> Example responses

> 200 Response

```json
{
  "document": {
    "administrativeAreaLevel1": "RJ",
    "countryCode": "BR",
    "countryName": "Brasil",
    "locality": "Locality",
    "localityAreaLevel1": "locality area",
    "postalCode": "20200-000",
    "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
    "route": "34",
    "streetNumber": "333"
  },
  "id": "bf82180e-cf9e-4089-9af6-ae1518555992",
  "meta": {
    "author": "80aa79a3-aa89-4912-a20e-8ef69af19a6c",
    "creationDate": "2022-01-18T18:51:34.1293829+00:00",
    "lastUpdateDate": "2022-01-18T21:08:02.9364099+00:00",
    "version": "86dfae79-1d23-43f2-a643-2fc8f1839461"
  }
}
```

<h3 id="update-client-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get unmasked address

<a id="opIdGetUnmaskedAddress"></a>

> Code samples

```bash
curl 'https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/addresses/bf82180e-cf9e-4089-9af6-ae1518555992/unmask?reason=data-validation' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/unmask`

Retrieves unmasked information of a specific address of a given client, by its respectives `adderssId` and `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-unmasked-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|addressId|path|string|true|ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.|
|reason|query|string|true|Reason for requesting unmasked data.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

> Example responses

> 200 Response

```json
{
  "document": {
    "administrativeAreaLevel1": "RJ",
    "countryCode": "BR",
    "countryName": "Brasil",
    "locality": "Locality",
    "localityAreaLevel1": "locality area",
    "postalCode": "20200-000",
    "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
    "route": "51",
    "streetNumber": "999"
  },
  "id": "bf82180e-cf9e-4089-9af6-ae1518555992",
  "meta": {
    "author": "80aa79a3-aa89-4912-a20e-8ef69af19a6c",
    "creationDate": "2022-01-18T18:51:34.1293829+00:00",
    "lastUpdateDate": "2022-01-18T18:51:34.1293829+00:00",
    "version": "c9c44895-4589-4d0d-a28d-e0e656ca1926"
  }
}
```

<h3 id="get-unmasked-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get address by version

<a id="opIdGetAddressByVersion"></a>

> Code samples

```bash
curl 'https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/addresses/bf82180e-cf9e-4089-9af6-ae1518555992/versions/86dfae79-1d23-43f2-a643-2fc8f1839461?reason=data-validation' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/versions/{addressVersionId}`

Retrieves information of a specific version address of a given client.

> For security and privacy reasons, this request returns masked address data by version. For unmasked information, see Get unmasked address by version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-address-by-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|addressId|path|string|true|ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.|
|addressVersionId|path|string|true|ID of the version of a given client's address as returned by endpoints that create or update address information in the `version` field.|
|reason|query|string|true|Reason for requesting unmasked data.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

> Example responses

> 200 Response

```json
{
  "document": {
    "administrativeAreaLevel1": "RJ",
    "countryCode": "BR",
    "countryName": "B*****",
    "locality": "L*******",
    "localityAreaLevel1": "locality area",
    "postalCode": "2****-0**",
    "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
    "route": "51",
    "streetNumber": "999"
  },
  "id": "bf82180e-cf9e-4089-9af6-ae1518555992",
  "meta": {
    "author": "80aa79a3-aa89-4912-a20e-8ef69af19a6c",
    "creationDate": "2022-01-18T18:51:34.1293829+00:00",
    "lastUpdateDate": "2022-01-18T18:51:34.1293829+00:00",
    "version": "c9c44895-4589-4d0d-a28d-e0e656ca1926"
  }
}
```

<h3 id="get-address-by-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get unmasked address by version

<a id="opIdGetUnmaskedAddressByVersion"></a>

> Code samples

```bash
curl 'https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/addresses/bf82180e-cf9e-4089-9af6-ae1518555992/versions/86dfae79-1d23-43f2-a643-2fc8f1839461/unmask?reason=data-validation' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/versions/{addressVersionId}/unmask`

Retrieves unmasked information of a specific address version of a given client.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-unmasked-address-by-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|addressId|path|string|true|ID of a client's specific address as returned in the Create client address endpoint's response, in the `id` field.|
|addressVersionId|path|string|true|ID of the version of a given client's address as returned by endpoints that create or update address information in the `version` field.|
|reason|query|string|true|Reason for requesting unmasked data.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

> Example responses

> 200 Response

```json
{
  "document": {
    "administrativeAreaLevel1": "RJ",
    "countryCode": "BR",
    "countryName": "Brasil",
    "locality": "Locality",
    "localityAreaLevel1": "locality area",
    "postalCode": "20200-000",
    "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
    "route": "51",
    "streetNumber": "999"
  },
  "id": "bf82180e-cf9e-4089-9af6-ae1518555992",
  "meta": {
    "author": "80aa79a3-aa89-4912-a20e-8ef69af19a6c",
    "creationDate": "2022-01-18T18:51:34.1293829+00:00",
    "lastUpdateDate": "2022-01-18T18:51:34.1293829+00:00",
    "version": "c9c44895-4589-4d0d-a28d-e0e656ca1926"
  }
}
```

<h3 id="get-unmasked-address-by-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="profile-system-prospects">Prospects</h1>

## Create prospect

<a id="opIdCreateProspect"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/prospects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d 'null'
```

`POST /api/storage/profile-system/prospects`

Creates new prospect.

> The `id` field returned by this request is the `prospectId` used to retrieve information on a specific prospect later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

> Body parameter

```json
null
```

<h3 id="create-prospect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[prospect](#schemaprospect)|false|none|

> Example responses

> 201 Response

```json
{}
```

<h3 id="create-prospect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get prospect

<a id="opIdGetProspect"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/prospects/51clk394-8534-447e-a0ca-1803p669c987 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/prospects/{prospectId}`

Retrieves the information of a specific prospect, by its `prospectId`.

> For security and privacy reasons, this request returns masked prospect data. For unmasked information, see Get unmasked prospect.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-prospect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|prospectId|path|string|true|ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-prospect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-prospect-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete prospect

<a id="opIdDeleteProspect"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/prospects/51clk394-8534-447e-a0ca-1803p669c987 \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/storage/profile-system/prospects/{prospectId}`

Deletes a prospect by `prospectId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="delete-prospect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|prospectId|path|string|true|ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.|

<h3 id="delete-prospect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update prospect

<a id="opIdUpdateProspect"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/prospects/51clk394-8534-447e-a0ca-1803p669c987 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d 'null'
```

`PATCH /api/storage/profile-system/prospects/{prospectId}`

Updates one or more fields of an existing prospect.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

> Body parameter

```json
null
```

<h3 id="update-prospect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|prospectId|path|string|true|ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="update-prospect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get unmasked prospect

<a id="opIdGetUnmaskedProspect"></a>

> Code samples

```bash
curl 'https://example.com/api/storage/profile-system/prospects/51clk394-8534-447e-a0ca-1803p669c987/unmask?reason=data-validation' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/prospects/{prospectId}/unmask`

Retrieves unmasked information of a specific prospect, by its `prospectId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-unmasked-prospect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|prospectId|path|string|true|ID of the prospect as returned by the Create prospect endpoint's response, in the `id` field.|
|reason|query|string|true|Reason for requesting unmasked data.|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-unmasked-prospect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-unmasked-prospect-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="profile-system-purchase-information">Purchase information</h1>

## Get purchase information

<a id="opIdGetPurchaseInformation"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/purchase-info \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/purchase-info`

Retrieves purchase information of a given client, by its `profileId`.

> For security and privacy reasons, this request returns masked data. For unmasked information, see Get unmasked purchase information.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-purchase-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-purchase-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-purchase-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create purchase information

<a id="opIdCreatePurchaseInformation"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/purchase-info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d 'null'
```

`POST /api/storage/profile-system/profiles/{profileId}/purchase-info`

Creates purchase information for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

> Body parameter

```json
null
```

<h3 id="create-purchase-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|
|body|body|object|false|none|

> Example responses

> 201 Response

```json
{}
```

<h3 id="create-purchase-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete purchase information

<a id="opIdDeletePurchaseInformation"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/purchase-info \
  -X DELETE \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/storage/profile-system/profiles/{profileId}/purchase-info`

Deletes purchase informaiton by `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="delete-purchase-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|

<h3 id="delete-purchase-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update purchase information

<a id="opIdUpdatePurchaseInformation"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/purchase-info \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d 'null'
```

`PATCH /api/storage/profile-system/profiles/{profileId}/purchase-info`

Updates one or more fields of existing purchase information for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

> Body parameter

```json
null
```

<h3 id="update-purchase-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|
|alternativeKey|query|string|false|The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.<br><br>> Currently, there are two possible values for this parameter: `email` and `document`.|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="update-purchase-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get unmasked purchase information

<a id="opIdGetUnmaskedPurchaseInformation"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/70caf394-8534-447e-a0ca-1803c669c771/purchase-info/unmask \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/storage/profile-system/profiles/{profileId}/purchase-info/unmask`

Retrieves unmasked purchase information of a given client, by its `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

<h3 id="get-unmasked-purchase-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|profileId|path|string|true|ID of the client's profile as returned by the Create profile endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter.|

> Example responses

> 200 Response

```json
[
  {
    "document": {
      "administrativeAreaLevel1": "RJ",
      "countryCode": "BR",
      "countryName": "Brasil",
      "locality": "Locality",
      "localityAreaLevel1": "locality area",
      "postalCode": "20200-000",
      "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
      "route": "51",
      "streetNumber": "999"
    },
    "id": "bf82180e-cf9e-4089-9af6-ae1518555992",
    "meta": {
      "author": "80aa79a3-aa89-4912-a20e-8ef69af19a6c",
      "creationDate": "2022-01-18T18:51:34.1293829+00:00",
      "lastUpdateDate": "2022-01-18T18:51:34.1293829+00:00",
      "version": "c9c44895-4589-4d0d-a28d-e0e656ca1926"
    }
  }
]
```

<h3 id="get-unmasked-purchase-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-unmasked-purchase-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="profile-system-schemas">Schemas</h1>

## Create or update profile schema

<a id="opIdCreateOrUpdateProfileSchema"></a>

> Code samples

```bash
curl https://example.com/api/storage/profile-system/profiles/schema \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "description": "This schema describes a b2c customer profile.",
    "documentTTL": 1825,
    "properties": {
      "{fieldName}": {
        "items": {
          "type": "string"
        },
        "pii": true,
        "sensitive": true,
        "type": "string"
      }
    },
    "required": [
      "firstName",
      "lastName",
      "email",
      "document",
      "documentType"
    ],
    "title": "Client profile schema",
    "type": "object",
    "v-indexed": [
      "email",
      "document"
    ],
    "v-unique": [
      "email",
      "document"
    ],
    "version": 1
  }'
```

`PUT /api/storage/profile-system/profiles/schema`

Creates or updates profile schema.

> Each account has one profile schema. Updating it with this request will substitute the previous version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

> Body parameter

```json
{
  "description": "This schema describes a b2c customer profile.",
  "documentTTL": 1825,
  "properties": {
    "{fieldName}": {
      "items": {
        "type": "string"
      },
      "pii": true,
      "sensitive": true,
      "type": "string"
    }
  },
  "required": [
    "firstName",
    "lastName",
    "email",
    "document",
    "documentType"
  ],
  "title": "Client profile schema",
  "type": "object",
  "v-indexed": [
    "email",
    "document"
  ],
  "v-unique": [
    "email",
    "document"
  ],
  "version": 1
}
```

<h3 id="create-or-update-profile-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[schema](#schemaschema)|false|none|
|» description|body|string|true|Schema's human readable description.|
|» documentTTL|body|integer|false|Document time to live, in days. After this many days from its creation or update, any document cerated from this schema will be deleted.|
|» properties|body|object|true|Object describing each field in your desired schema. In this object, each property is a new object, describing the field according to: `type` (string); `sensitive` (boolean); `pii` (boolean) and; `items.type` (if field is array).|
|» » {fieldName}|body|object|false|Schema of any given field described in the `properties` field.|
|» » » items|body|object|false|Object containing the type of the items if the field is an array. Typically, arrays will contain strings and will be used for fields such as `email`.|
|» » » pii|body|boolean|true|Indicates whether property is Personal Identifiable Information.|
|» » » sensitive|body|boolean|true|Indicates whether property is sensitive data.|
|» » » type|body|string|true|Schema property type.|
|» required|body|[string]|true|Schema required fields.|
|» title|body|string|true|Schema title.|
|» type|body|string|true|Schema type.|
|» v-indexed|body|[object]|false|none|
|» v-unique|body|[object]|false|none|
|» version|body|integer|false|Schema version.|

> Example responses

> 201 Response

```json
{}
```

<h3 id="create-or-update-profile-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_address">address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "administrativeAreaLevel1": "RJ",
  "countryCode": "BR",
  "countryName": "Brasil",
  "locality": "Locality",
  "localityAreaLevel1": "Locality area",
  "postalCode": "20200-000",
  "route": "51",
  "streetNumber": "999"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrativeAreaLevel1|string|true|none|Name of administrative area, such as the state or province.|
|countryCode|string|false|none|Two letter country code.|
|countryName|string|true|none|Name of the address country.|
|locality|string|true|none|Name of address locality, such as the city.|
|localityAreaLevel1|string|true|none|Name of the address locality area, such as the neighborhood or district.|
|postalCode|string|true|none|Address postal code.|
|route|string|true|none|Address route or street name.|
|streetNumber|string|true|none|Address street number.|

<h2 id="tocS_profile">profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "birthDate": "1925-11-17",
  "document": "12345678900",
  "documentType": "CPF",
  "email": "john.doe@example.com",
  "firstName": "John",
  "lastName": "Doe"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birthDate|string|false|none|Client's birth date in ISO 8601 format.|
|document|string|true|none|Client's document.|
|documentType|string|true|none|Type of document informed in `document`.|
|email|string|true|none|Client's email address.|
|firstName|string|true|none|Client's first name.|
|lastName|string|true|none|Client's last name.|

<h2 id="tocS_prospect">prospect</h2>
<!-- backwards compatibility -->
<a id="schemaprospect"></a>
<a id="schema_prospect"></a>
<a id="tocSprospect"></a>
<a id="tocsprospect"></a>

```json
null
```

<h2 id="tocS_schema">schema</h2>
<!-- backwards compatibility -->
<a id="schemaschema"></a>
<a id="schema_schema"></a>
<a id="tocSschema"></a>
<a id="tocsschema"></a>

```json
{
  "description": "This schema describes a b2c customer profile.",
  "documentTTL": 1825,
  "properties": {
    "{fieldName}": {
      "items": {
        "type": "string"
      },
      "pii": true,
      "sensitive": true,
      "type": "string"
    }
  },
  "required": [
    "firstName",
    "lastName",
    "email",
    "document",
    "documentType"
  ],
  "title": "Client profile schema",
  "type": "object",
  "v-indexed": [
    "email",
    "document"
  ],
  "v-unique": [
    "email",
    "document"
  ],
  "version": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Schema's human readable description.|
|documentTTL|integer|false|none|Document time to live, in days. After this many days from its creation or update, any document cerated from this schema will be deleted.|
|properties|object|true|none|Object describing each field in your desired schema. In this object, each property is a new object, describing the field according to: `type` (string); `sensitive` (boolean); `pii` (boolean) and; `items.type` (if field is array).|
|required|[string]|true|none|Schema required fields.|
|title|string|true|none|Schema title.|
|type|string|true|none|Schema type.|
|v-indexed|[object]|false|none|none|
|v-unique|[object]|false|none|none|
|version|integer|false|none|Schema version.|
