<h1 id="xero-assets-api">Xero Assets API v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Assets API exposes fixed asset related functions of the Xero Accounting application and can be used for a variety of purposes such as creating assets, retrieving asset valuations etc.

Base URLs:

* <a href="https://api.xero.com/assets.xro/1.0">https://api.xero.com/assets.xro/1.0</a> - Xero API servers

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 
License: <a href="https://github.com/XeroAPI/Xero-OpenAPI/blob/master/LICENSE">MIT</a>

# Authentication

- oAuth2 authentication. For more information

    - Flow: authorizationCode
    - Authorization URL = [https://login.xero.com/identity/connect/authorize](https://login.xero.com/identity/connect/authorize)
    - Token URL = [https://identity.xero.com/connect/token](https://identity.xero.com/connect/token)

|Scope|Scope Description|
|---|---|
|email|Grant read-only access to your email|
|openid|Grant read-only access to your open id|
|profile|your profile information|
|assets|Grant read-write access to fixed assets|
|assets.read|Grant read-only access to fixed assets|

<h1 id="xero-assets-api-asset">Asset</h1>

## searches fixed asset

<a id="opIdgetAssets"></a>

> Code samples

```bash
curl 'https://api.xero.com/assets.xro/1.0/Assets?status=DRAFT' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Assets`

By passing in the appropriate options, you can search for available fixed asset in the system

<h3 id="searches-fixed-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|[AssetStatusQueryParam](#schemaassetstatusqueryparam)|true|Required when retrieving a collection of assets. See Asset Status Codes|
|page|query|integer|false|Results are paged. This specifies which page of the results to return. The default page is 1.|
|pageSize|query|integer|false|The number of records returned per page. By default the number of records returned is 10.|
|orderBy|query|string|false|Requests can be ordered by AssetType, AssetName, AssetNumber, PurchaseDate and PurchasePrice. If the asset status is DISPOSED it also allows DisposalDate and DisposalPrice.|
|sortDirection|query|string|false|ASC or DESC|
|filterBy|query|string|false|A string that can be used to filter the list to only return assets containing the text. Checks it against the AssetName, AssetNumber, Description and AssetTypeName fields.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|DRAFT|
|status|REGISTERED|
|status|DISPOSED|
|orderBy|AssetType|
|orderBy|AssetName|
|orderBy|AssetNumber|
|orderBy|PurchaseDate|
|orderBy|PurchasePrice|
|orderBy|DisposalDate|
|orderBy|DisposalPrice|
|sortDirection|asc|
|sortDirection|desc|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 2,
    "itemCount": 11,
    "links": {
      "first": {
        "href": "http://asset.favorit.xero.com/v1/assets?status=DRAFT&page=1"
      },
      "next": {
        "href": "http://asset.favorit.xero.com/v1/assets?status=DRAFT&page=2"
      },
      "last": {
        "href": "http://asset.favorit.xero.com/v1/assets?status=DRAFT&page=2"
      }
    }
  },
  "items": [
    {
      "assetId": "68f17094-af97-4f1b-b36b-013b45b6ad3c",
      "assetName": "Computer47822",
      "assetNumber": "123478074",
      "purchaseDate": "2020-01-01T00:00:00",
      "purchasePrice": 100,
      "disposalPrice": 0,
      "assetStatus": "Draft",
      "trackingItems": [],
      "bookDepreciationSetting": {
        "depreciableObjectId": "68f17094-af97-4f1b-b36b-013b45b6ad3c",
        "depreciableObjectType": "Asset",
        "bookEffectiveDateOfChangeId": "5da77739-7f22-4109-b0a0-67480fb89af0",
        "depreciationMethod": "StraightLine",
        "averagingMethod": "ActualDays",
        "depreciationRate": 0.5,
        "depreciationCalculationMethod": "None"
      },
      "bookDepreciationDetail": {
        "depreciationStartDate": "2020-01-02T00:00:00",
        "priorAccumDepreciationAmount": 0,
        "currentAccumDepreciationAmount": 0,
        "currentCapitalGain": 0,
        "currentGainLoss": 0
      },
      "taxDepreciationSettings": [],
      "taxDepreciationDetails": [],
      "canRollback": true,
      "accountingBookValue": 100,
      "taxValues": [],
      "isDeleteEnabledForDate": false
    },
    {
      "assetId": "52ea3adf-f04a-4577-8fd2-43c52a256bd5",
      "assetName": "Computer4148",
      "assetNumber": "123466620",
      "purchaseDate": "2020-01-01T00:00:00",
      "purchasePrice": 100,
      "disposalPrice": 0,
      "assetStatus": "Draft",
      "trackingItems": [],
      "bookDepreciationSetting": {
        "depreciableObjectId": "52ea3adf-f04a-4577-8fd2-43c52a256bd5",
        "depreciableObjectType": "Asset",
        "bookEffectiveDateOfChangeId": "c0d5280f-28b6-4329-b5b7-36e08c662010",
        "depreciationMethod": "StraightLine",
        "averagingMethod": "ActualDays",
        "depreciationRate": 0.5,
        "depreciationCalculationMethod": "None"
      },
      "bookDepreciationDetail": {
        "depreciationStartDate": "2020-01-02T00:00:00",
        "priorAccumDepreciationAmount": 0,
        "currentAccumDepreciationAmount": 0,
        "currentCapitalGain": 0,
        "currentGainLoss": 0
      },
      "taxDepreciationSettings": [],
      "taxDepreciationDetails": [],
      "canRollback": true,
      "accountingBookValue": 100,
      "taxValues": [],
      "isDeleteEnabledForDate": false
    }
  ]
}
```

<h3 id="searches-fixed-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Assets](#schemaassets)|
|400|Bad Request|bad input parameter|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: assets assets.read )
</aside>

## adds a fixed asset

<a id="opIdcreateAsset"></a>

> Code samples

```bash
curl https://api.xero.com/assets.xro/1.0/Assets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID' \
  -d '{
    "assetName": "Computer74863",
    "assetNumber": "123477544",
    "purchaseDate": "2020-01-01",
    "purchasePrice": 100,
    "disposalPrice": 23.23,
    "assetStatus": "Draft",
    "bookDepreciationSetting": {
      "depreciationMethod": "StraightLine",
      "averagingMethod": "ActualDays",
      "depreciationRate": 0.5,
      "depreciationCalculationMethod": "None"
    },
    "bookDepreciationDetail": {
      "currentCapitalGain": 5.32,
      "currentGainLoss": 3.88,
      "depreciationStartDate": "2020-01-02",
      "costLimit": 100,
      "currentAccumDepreciationAmount": 2.25
    },
    "AccountingBookValue": 99.5
  }'
```

`POST /Assets`

Adds an asset to the system

> Body parameter

```json
{
  "assetName": "Computer74863",
  "assetNumber": "123477544",
  "purchaseDate": "2020-01-01",
  "purchasePrice": 100,
  "disposalPrice": 23.23,
  "assetStatus": "Draft",
  "bookDepreciationSetting": {
    "depreciationMethod": "StraightLine",
    "averagingMethod": "ActualDays",
    "depreciationRate": 0.5,
    "depreciationCalculationMethod": "None"
  },
  "bookDepreciationDetail": {
    "currentCapitalGain": 5.32,
    "currentGainLoss": 3.88,
    "depreciationStartDate": "2020-01-02",
    "costLimit": 100,
    "currentAccumDepreciationAmount": 2.25
  },
  "AccountingBookValue": 99.5
}
```

<h3 id="adds-a-fixed-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|
|body|body|[Asset](#schemaasset)|true|Fixed asset you are creating|
|» assetId|body|string(uuid)|false|The Xero-generated Id for the asset|
|» assetName|body|string|true|The name of the asset|
|» assetTypeId|body|string(uuid)|false|The Xero-generated Id for the asset type|
|» assetNumber|body|string|false|Must be unique.|
|» purchaseDate|body|string(date)|false|The date the asset was purchased YYYY-MM-DD|
|» purchasePrice|body|number(double)|false|The purchase price of the asset|
|» disposalDate|body|string(date)|false|The date the asset was disposed|
|» disposalPrice|body|number(double)|false|The price the asset was disposed at|
|» assetStatus|body|[AssetStatus](#schemaassetstatus)|false|See Asset Status Codes.|
|» warrantyExpiryDate|body|string|false|The date the asset’s warranty expires (if needed) YYYY-MM-DD|
|» serialNumber|body|string|false|The asset's serial number|
|» bookDepreciationSetting|body|[BookDepreciationSetting](#schemabookdepreciationsetting)|false|none|
|» bookDepreciationDetail|body|[BookDepreciationDetail](#schemabookdepreciationdetail)|false|none|
|» canRollback|body|boolean|false|Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn't have 'legacy' journal entries and if there is no lock period that would prevent this asset from rolling back.|
|» accountingBookValue|body|number(double)|false|The accounting value of the asset|
|» isDeleteEnabledForDate|body|boolean|false|Boolean to indicate whether delete is enabled|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» assetStatus|Draft|
|» assetStatus|Registered|
|» assetStatus|Disposed|

> Example responses

> 200 Response

```json
{
  "assetId": "2257c64a-77ca-444c-a5ea-fa9a588c7039",
  "assetName": "Computer74863",
  "assetNumber": "123477544",
  "purchaseDate": "2020-01-01T00:00:00",
  "purchasePrice": 100,
  "disposalPrice": 23.23,
  "assetStatus": "Draft",
  "trackingItems": [],
  "bookDepreciationSetting": {
    "depreciableObjectId": "2257c64a-77ca-444c-a5ea-fa9a588c7039",
    "depreciableObjectType": "Asset",
    "bookEffectiveDateOfChangeId": "b58a2ace-1213-4681-9f11-2e30f57b5b8c",
    "depreciationMethod": "StraightLine",
    "averagingMethod": "ActualDays",
    "depreciationRate": 0.5,
    "depreciationCalculationMethod": "None"
  },
  "bookDepreciationDetail": {
    "depreciationStartDate": "2020-01-02T00:00:00",
    "priorAccumDepreciationAmount": 0,
    "currentAccumDepreciationAmount": 0,
    "currentCapitalGain": 0,
    "currentGainLoss": 0
  },
  "taxDepreciationSettings": [],
  "taxDepreciationDetails": [],
  "canRollback": true,
  "accountingBookValue": 76.77,
  "taxValues": [],
  "isDeleteEnabledForDate": true
}
```

> 400 Response

```json
{
  "resourceValidationErrors": [],
  "fieldValidationErrors": [
    {
      "fieldName": "BookDepreciationSetting.DepreciationRate",
      "valueProvided": "",
      "localisedMessage": "Can''t have both Depreciation Rate and Effective Life",
      "type": "http://common.service.xero.com/errors/validation/field",
      "title": "Validation Error",
      "detail": "Can''t have both Depreciation Rate and Effective Life"
    }
  ],
  "type": "http://common.service.xero.com/errors/validation",
  "title": "The resource update failed validation.",
  "detail": "Validation Errors"
}
```

<h3 id="adds-a-fixed-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|return single object - create new asset|[Asset](#schemaasset)|
|400|Bad Request|invalid input, object invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: assets )
</aside>

## Retrieves fixed asset by id

<a id="opIdgetAssetById"></a>

> Code samples

```bash
curl https://api.xero.com/assets.xro/1.0/Assets/00000000-0000-0000-0000-000000000000 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Assets/{id}`

By passing in the appropriate asset id, you can search for
a specific fixed asset in the system


<h3 id="retrieves-fixed-asset-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|fixed asset id for single object|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "assetId": "68f17094-af97-4f1b-b36b-013b45b6ad3c",
  "assetName": "Computer47822",
  "assetNumber": "123478074",
  "purchaseDate": "2020-01-01T00:00:00",
  "purchasePrice": 100,
  "disposalPrice": 23,
  "assetStatus": "Draft",
  "trackingItems": [],
  "bookDepreciationSetting": {
    "depreciableObjectId": "68f17094-af97-4f1b-b36b-013b45b6ad3c",
    "depreciableObjectType": "Asset",
    "bookEffectiveDateOfChangeId": "5da77739-7f22-4109-b0a0-67480fb89af0",
    "depreciationMethod": "StraightLine",
    "averagingMethod": "ActualDays",
    "depreciationRate": 0.5,
    "depreciationCalculationMethod": "None"
  },
  "bookDepreciationDetail": {
    "depreciationStartDate": "2020-01-02T00:00:00",
    "priorAccumDepreciationAmount": 0,
    "currentAccumDepreciationAmount": 0,
    "currentCapitalGain": 0,
    "currentGainLoss": 0
  },
  "taxDepreciationSettings": [],
  "taxDepreciationDetails": [],
  "canRollback": true,
  "metaData": {
    "bookDepreciationDetailsCanChange": true,
    "taxDepreciationDetailsCanChange": true
  },
  "accountingBookValue": 77,
  "taxValues": [],
  "isDeleteEnabledForDate": true
}
```

<h3 id="retrieves-fixed-asset-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Asset](#schemaasset)|
|400|Bad Request|bad input parameter|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: assets assets.read )
</aside>

## searches fixed asset types

<a id="opIdgetAssetTypes"></a>

> Code samples

```bash
curl https://api.xero.com/assets.xro/1.0/AssetTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /AssetTypes`

By passing in the appropriate options, you can search for available fixed asset types in the system

<h3 id="searches-fixed-asset-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
[
  {
    "assetTypeId": "710255c6-d2ed-4463-b992-06c8685add5e",
    "assetTypeName": "Computer Equipment",
    "fixedAssetAccountId": "37c35de7-8df0-44bf-8e7c-f1f67cf6a278",
    "depreciationExpenseAccountId": "0fbd1820-9dd0-454a-9515-6ec076a84cf7",
    "accumulatedDepreciationAccountId": "512eac06-6894-47cd-b421-673b4ca2693a",
    "bookDepreciationSetting": {
      "depreciableObjectId": "710255c6-d2ed-4463-b992-06c8685add5e",
      "depreciableObjectType": "AssetType",
      "bookEffectiveDateOfChangeId": "39b9c2e9-62b1-4efc-ab75-fa9152ffaa5f",
      "depreciationMethod": "StraightLine",
      "averagingMethod": "FullMonth",
      "depreciationRate": 25,
      "depreciationCalculationMethod": "None"
    },
    "taxDepreciationSettings": [],
    "locks": 0,
    "lockPrivateUseAccount": false
  },
  {
    "assetTypeId": "1a398a67-9d9d-4783-8689-14a8efce89d9",
    "assetTypeName": "Machinery97704",
    "fixedAssetAccountId": "5c93f577-c48f-44cd-8593-01489e319c2b",
    "depreciationExpenseAccountId": "adc14376-c960-43f0-b7f3-4063e5098039",
    "accumulatedDepreciationAccountId": "9195cadd-8645-41e6-9f67-7bcd421defe8",
    "bookDepreciationSetting": {
      "depreciableObjectId": "1a398a67-9d9d-4783-8689-14a8efce89d9",
      "depreciableObjectType": "AssetType",
      "bookEffectiveDateOfChangeId": "6d09a96d-7768-4f28-95e8-c9ac870fe36e",
      "depreciationMethod": "DiminishingValue100",
      "averagingMethod": "ActualDays",
      "depreciationRate": 40,
      "depreciationCalculationMethod": "None"
    },
    "taxDepreciationSettings": [],
    "locks": 0,
    "lockPrivateUseAccount": false
  }
]
```

<h3 id="searches-fixed-asset-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|Inline|
|400|Bad Request|bad input parameter|None|

<h3 id="searches-fixed-asset-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssetType](#schemaassettype)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: assets assets.read )
</aside>

## adds a fixed asset type

<a id="opIdcreateAssetType"></a>

> Code samples

```bash
curl https://api.xero.com/assets.xro/1.0/AssetTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID' \
  -d '{
    "assetTypeName": "Machinery11004",
    "fixedAssetAccountId": "3d8d063a-c148-4bb8-8b3c-a5e2ad3b1e82",
    "depreciationExpenseAccountId": "d1602f69-f900-4616-8d34-90af393fa368",
    "accumulatedDepreciationAccountId": "9195cadd-8645-41e6-9f67-7bcd421defe8",
    "bookDepreciationSetting": {
      "depreciationMethod": "DiminishingValue100",
      "averagingMethod": "ActualDays",
      "depreciationRate": 0.05,
      "depreciationCalculationMethod": "None"
    }
  }'
```

`POST /AssetTypes`

Adds an fixed asset type to the system

> Body parameter

```json
{
  "assetTypeName": "Machinery11004",
  "fixedAssetAccountId": "3d8d063a-c148-4bb8-8b3c-a5e2ad3b1e82",
  "depreciationExpenseAccountId": "d1602f69-f900-4616-8d34-90af393fa368",
  "accumulatedDepreciationAccountId": "9195cadd-8645-41e6-9f67-7bcd421defe8",
  "bookDepreciationSetting": {
    "depreciationMethod": "DiminishingValue100",
    "averagingMethod": "ActualDays",
    "depreciationRate": 0.05,
    "depreciationCalculationMethod": "None"
  }
}
```

<h3 id="adds-a-fixed-asset-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|
|body|body|[AssetType](#schemaassettype)|true|Asset type to add|
|» assetTypeId|body|string(uuid)|false|Xero generated unique identifier for asset types|
|» assetTypeName|body|string|true|The name of the asset type|
|» fixedAssetAccountId|body|string(uuid)|false|The asset account for fixed assets of this type|
|» depreciationExpenseAccountId|body|string(uuid)|false|The expense account for the depreciation of fixed assets of this type|
|» accumulatedDepreciationAccountId|body|string(uuid)|false|The account for accumulated depreciation of fixed assets of this type|
|» bookDepreciationSetting|body|[BookDepreciationSetting](#schemabookdepreciationsetting)|true|none|
|» locks|body|integer|false|All asset types that have accumulated depreciation for any assets that use them are deemed ‘locked’ and cannot be removed.|

> Example responses

> 200 Response

```json
{
  "assetTypeId": "85509b5d-308e-420d-9532-b85105058916",
  "assetTypeName": "Machinery11004",
  "fixedAssetAccountId": "3d8d063a-c148-4bb8-8b3c-a5e2ad3b1e82",
  "depreciationExpenseAccountId": "d1602f69-f900-4616-8d34-90af393fa368",
  "accumulatedDepreciationAccountId": "9195cadd-8645-41e6-9f67-7bcd421defe8",
  "bookDepreciationSetting": {
    "depreciableObjectId": "00000000-0000-0000-0000-000000000000",
    "depreciableObjectType": "None",
    "depreciationMethod": "DiminishingValue100",
    "averagingMethod": "ActualDays",
    "depreciationRate": 0.05,
    "depreciationCalculationMethod": "None"
  },
  "locks": 0,
  "lockPrivateUseAccount": false
}
```

> 400 Response

```json
{
  "resourceValidationErrors": [],
  "fieldValidationErrors": [
    {
      "fieldName": "FixedAssetAccountId",
      "valueProvided": "",
      "localisedMessage": "Fixed Asset Account Id is invalid",
      "type": "http://common.service.xero.com/errors/validation/field",
      "title": "Validation Error",
      "detail": "Fixed Asset Account Id is invalid"
    },
    {
      "fieldName": "DepreciationExpenseAccountId",
      "valueProvided": "",
      "localisedMessage": "Depreciation Expense Account Id is invalid",
      "type": "http://common.service.xero.com/errors/validation/field",
      "title": "Validation Error",
      "detail": "Depreciation Expense Account Id is invalid"
    }
  ],
  "type": "http://common.service.xero.com/errors/validation",
  "title": "The resource update failed validation.",
  "detail": "Validation Errors"
}
```

<h3 id="adds-a-fixed-asset-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|results single object -  created fixed type|[AssetType](#schemaassettype)|
|400|Bad Request|invalid input, object invalid|None|
|409|Conflict|a type already exists|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: assets )
</aside>

## searches fixed asset settings

<a id="opIdgetAssetSettings"></a>

> Code samples

```bash
curl https://api.xero.com/assets.xro/1.0/Settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /Settings`

By passing in the appropriate options, you can search for available fixed asset types in the system

<h3 id="searches-fixed-asset-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "assetNumberPrefix": "FA-",
  "assetNumberSequence": "0007",
  "assetStartDate": "2016-01-01T00:00:00",
  "optInForTax": false
}
```

<h3 id="searches-fixed-asset-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[Setting](#schemasetting)|
|400|Bad Request|bad input parameter|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: assets assets.read )
</aside>

# Schemas

<h2 id="tocS_Assets">Assets</h2>
<!-- backwards compatibility -->
<a id="schemaassets"></a>
<a id="schema_Assets"></a>
<a id="tocSassets"></a>
<a id="tocsassets"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "items": [
    {
      "assetId": "3b5b3a38-5649-495f-87a1-14a4e5918634",
      "assetName": "Awesome Truck 3",
      "assetTypeId": "3b5b3a38-5649-495f-87a1-14a4e5918634",
      "assetNumber": "FA-0013",
      "purchaseDate": "2015-07-01T00:00:00",
      "purchasePrice": "1000.0000",
      "disposalDate": "2020-07-01T00:00:00",
      "disposalPrice": "1.0000",
      "assetStatus": "Draft",
      "warrantyExpiryDate": "ca4c6b39-4f4f-43e8-98da-5e1f350a6694",
      "serialNumber": "ca4c6b39-4f4f-43e8-98da-5e1f350a6694",
      "bookDepreciationSetting": {
        "depreciationMethod": "StraightLine",
        "averagingMethod": "ActualDays",
        "depreciationRate": 0.05,
        "effectiveLifeYears": 5,
        "depreciationCalculationMethod": "None",
        "depreciableObjectId": "68f17094-af97-4f1b-b36b-013b45b6ad3c",
        "depreciableObjectType": "Asset",
        "bookEffectiveDateOfChangeId": "68f17094-af97-4f1b-b36b-013b45b6ad3c"
      },
      "bookDepreciationDetail": {
        "currentCapitalGain": 5.25,
        "currentGainLoss": 10.5,
        "depreciationStartDate": "2015-07-01T00:00:00",
        "costLimit": 9000,
        "residualValue": 10000,
        "priorAccumDepreciationAmount": 0.45,
        "currentAccumDepreciationAmount": 5,
        "businessUseCapitalGain": 0,
        "businessUseCurrentGainLoss": 0,
        "privateUseCapitalGain": 0,
        "privateUseCurrentGainLoss": 0,
        "initialDeductionPercentage": 0
      },
      "canRollback": true,
      "accountingBookValue": 0,
      "isDeleteEnabledForDate": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|items|[[Asset](#schemaasset)]|false|none|none|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "page": 1,
  "pageSize": 10,
  "pageCount": 1,
  "itemCount": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|pageCount|integer|false|none|none|
|itemCount|integer|false|none|none|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "assetId": "3b5b3a38-5649-495f-87a1-14a4e5918634",
  "assetName": "Awesome Truck 3",
  "assetTypeId": "3b5b3a38-5649-495f-87a1-14a4e5918634",
  "assetNumber": "FA-0013",
  "purchaseDate": "2015-07-01T00:00:00",
  "purchasePrice": "1000.0000",
  "disposalDate": "2020-07-01T00:00:00",
  "disposalPrice": "1.0000",
  "assetStatus": "Draft",
  "warrantyExpiryDate": "ca4c6b39-4f4f-43e8-98da-5e1f350a6694",
  "serialNumber": "ca4c6b39-4f4f-43e8-98da-5e1f350a6694",
  "bookDepreciationSetting": {
    "depreciationMethod": "StraightLine",
    "averagingMethod": "ActualDays",
    "depreciationRate": 0.05,
    "effectiveLifeYears": 5,
    "depreciationCalculationMethod": "None",
    "depreciableObjectId": "68f17094-af97-4f1b-b36b-013b45b6ad3c",
    "depreciableObjectType": "Asset",
    "bookEffectiveDateOfChangeId": "68f17094-af97-4f1b-b36b-013b45b6ad3c"
  },
  "bookDepreciationDetail": {
    "currentCapitalGain": 5.25,
    "currentGainLoss": 10.5,
    "depreciationStartDate": "2015-07-01T00:00:00",
    "costLimit": 9000,
    "residualValue": 10000,
    "priorAccumDepreciationAmount": 0.45,
    "currentAccumDepreciationAmount": 5,
    "businessUseCapitalGain": 0,
    "businessUseCurrentGainLoss": 0,
    "privateUseCapitalGain": 0,
    "privateUseCurrentGainLoss": 0,
    "initialDeductionPercentage": 0
  },
  "canRollback": true,
  "accountingBookValue": 0,
  "isDeleteEnabledForDate": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|string(uuid)|false|none|The Xero-generated Id for the asset|
|assetName|string|true|none|The name of the asset|
|assetTypeId|string(uuid)|false|none|The Xero-generated Id for the asset type|
|assetNumber|string|false|none|Must be unique.|
|purchaseDate|string(date)|false|none|The date the asset was purchased YYYY-MM-DD|
|purchasePrice|number(double)|false|none|The purchase price of the asset|
|disposalDate|string(date)|false|none|The date the asset was disposed|
|disposalPrice|number(double)|false|none|The price the asset was disposed at|
|assetStatus|[AssetStatus](#schemaassetstatus)|false|none|See Asset Status Codes.|
|warrantyExpiryDate|string|false|none|The date the asset’s warranty expires (if needed) YYYY-MM-DD|
|serialNumber|string|false|none|The asset's serial number|
|bookDepreciationSetting|[BookDepreciationSetting](#schemabookdepreciationsetting)|false|none|none|
|bookDepreciationDetail|[BookDepreciationDetail](#schemabookdepreciationdetail)|false|none|none|
|canRollback|boolean|false|none|Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn't have 'legacy' journal entries and if there is no lock period that would prevent this asset from rolling back.|
|accountingBookValue|number(double)|false|none|The accounting value of the asset|
|isDeleteEnabledForDate|boolean|false|none|Boolean to indicate whether delete is enabled|

#### Enumerated Values

|Property|Value|
|---|---|
|assetStatus|Draft|
|assetStatus|Registered|
|assetStatus|Disposed|

<h2 id="tocS_AssetStatus">AssetStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassetstatus"></a>
<a id="schema_AssetStatus"></a>
<a id="tocSassetstatus"></a>
<a id="tocsassetstatus"></a>

```json
"Draft"
```

See Asset Status Codes.

<h2 id="tocS_AssetStatusQueryParam">AssetStatusQueryParam</h2>
<!-- backwards compatibility -->
<a id="schemaassetstatusqueryparam"></a>
<a id="schema_AssetStatusQueryParam"></a>
<a id="tocSassetstatusqueryparam"></a>
<a id="tocsassetstatusqueryparam"></a>

```json
"DRAFT"
```

See Asset Status Codes.

<h2 id="tocS_AssetType">AssetType</h2>
<!-- backwards compatibility -->
<a id="schemaassettype"></a>
<a id="schema_AssetType"></a>
<a id="tocSassettype"></a>
<a id="tocsassettype"></a>

```json
{
  "assetTypeId": "5da209c5-5e19-4a43-b925-71b776c49ced",
  "assetTypeName": "Computer Equipment",
  "fixedAssetAccountId": "24e260f1-bfc4-4766-ad7f-8a8ce01de879",
  "depreciationExpenseAccountId": "b23fc79b-d66b-44b0-a240-e138e086fcbc",
  "accumulatedDepreciationAccountId": "ca4c6b39-4f4f-43e8-98da-5e1f350a6694",
  "bookDepreciationSetting": {
    "depreciationMethod": "StraightLine",
    "averagingMethod": "ActualDays",
    "depreciationRate": 0.05,
    "effectiveLifeYears": 5,
    "depreciationCalculationMethod": "None",
    "depreciableObjectId": "68f17094-af97-4f1b-b36b-013b45b6ad3c",
    "depreciableObjectType": "Asset",
    "bookEffectiveDateOfChangeId": "68f17094-af97-4f1b-b36b-013b45b6ad3c"
  },
  "locks": 33
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetTypeId|string(uuid)|false|none|Xero generated unique identifier for asset types|
|assetTypeName|string|true|none|The name of the asset type|
|fixedAssetAccountId|string(uuid)|false|none|The asset account for fixed assets of this type|
|depreciationExpenseAccountId|string(uuid)|false|none|The expense account for the depreciation of fixed assets of this type|
|accumulatedDepreciationAccountId|string(uuid)|false|none|The account for accumulated depreciation of fixed assets of this type|
|bookDepreciationSetting|[BookDepreciationSetting](#schemabookdepreciationsetting)|true|none|none|
|locks|integer|false|none|All asset types that have accumulated depreciation for any assets that use them are deemed ‘locked’ and cannot be removed.|

<h2 id="tocS_BookDepreciationSetting">BookDepreciationSetting</h2>
<!-- backwards compatibility -->
<a id="schemabookdepreciationsetting"></a>
<a id="schema_BookDepreciationSetting"></a>
<a id="tocSbookdepreciationsetting"></a>
<a id="tocsbookdepreciationsetting"></a>

```json
{
  "depreciationMethod": "StraightLine",
  "averagingMethod": "ActualDays",
  "depreciationRate": 0.05,
  "effectiveLifeYears": 5,
  "depreciationCalculationMethod": "None",
  "depreciableObjectId": "68f17094-af97-4f1b-b36b-013b45b6ad3c",
  "depreciableObjectType": "Asset",
  "bookEffectiveDateOfChangeId": "68f17094-af97-4f1b-b36b-013b45b6ad3c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depreciationMethod|string|false|none|The method of depreciation applied to this asset. See Depreciation Methods|
|averagingMethod|string|false|none|The method of averaging applied to this asset. See Averaging Methods|
|depreciationRate|number(double)|false|none|The rate of depreciation (e.g. 0.05)|
|effectiveLifeYears|integer|false|none|Effective life of the asset in years (e.g. 5)|
|depreciationCalculationMethod|string|false|none|See Depreciation Calculation Methods|
|depreciableObjectId|string(uuid)|false|none|Unique Xero identifier for the depreciable object|
|depreciableObjectType|string|false|none|The type of asset object|
|bookEffectiveDateOfChangeId|string(uuid)|false|none|Unique Xero identifier for the effective date change|

#### Enumerated Values

|Property|Value|
|---|---|
|depreciationMethod|NoDepreciation|
|depreciationMethod|StraightLine|
|depreciationMethod|DiminishingValue100|
|depreciationMethod|DiminishingValue150|
|depreciationMethod|DiminishingValue200|
|depreciationMethod|FullDepreciation|
|averagingMethod|FullMonth|
|averagingMethod|ActualDays|
|depreciationCalculationMethod|Rate|
|depreciationCalculationMethod|Life|
|depreciationCalculationMethod|None|

<h2 id="tocS_BookDepreciationDetail">BookDepreciationDetail</h2>
<!-- backwards compatibility -->
<a id="schemabookdepreciationdetail"></a>
<a id="schema_BookDepreciationDetail"></a>
<a id="tocSbookdepreciationdetail"></a>
<a id="tocsbookdepreciationdetail"></a>

```json
{
  "currentCapitalGain": 5.25,
  "currentGainLoss": 10.5,
  "depreciationStartDate": "2015-07-01T00:00:00",
  "costLimit": 9000,
  "residualValue": 10000,
  "priorAccumDepreciationAmount": 0.45,
  "currentAccumDepreciationAmount": 5,
  "businessUseCapitalGain": 0,
  "businessUseCurrentGainLoss": 0,
  "privateUseCapitalGain": 0,
  "privateUseCurrentGainLoss": 0,
  "initialDeductionPercentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentCapitalGain|number(double)|false|none|When an asset is disposed, this will be the sell price minus the purchase price if a profit was made.|
|currentGainLoss|number(double)|false|none|When an asset is disposed, this will be the lowest one of sell price or purchase price, minus the current book value.|
|depreciationStartDate|string(date)|false|none|YYYY-MM-DD|
|costLimit|number(double)|false|none|The value of the asset you want to depreciate, if this is less than the cost of the asset.|
|residualValue|number(double)|false|none|The value of the asset remaining when you've fully depreciated it.|
|priorAccumDepreciationAmount|number(double)|false|none|All depreciation prior to the current financial year.|
|currentAccumDepreciationAmount|number(double)|false|none|All depreciation occurring in the current financial year.|
|businessUseCapitalGain|number(decimal)|false|none|(New Zealand Orgs Only) The portion of capital gain realised from the disposal of a fixed asset that is attributable to its business use.|
|businessUseCurrentGainLoss|number(decimal)|false|none|(New Zealand Orgs Only) Represents the gain or loss from the disposal of the business use portion of a fixed asset. This value records the financial result (profit or loss) related specifically to the asset’s business use.|
|privateUseCapitalGain|number(decimal)|false|none|(New Zealand Orgs Only) The portion of capital gain realised from the disposal of a fixed asset that is attributable to its private (non-business) use.|
|privateUseCurrentGainLoss|number(decimal)|false|none|(New Zealand Orgs Only) Represents the gain or loss from the disposal of the private use portion of a fixed asset. This value records the financial result (profit or loss) related specifically to the asset’s private use.|
|initialDeductionPercentage|number(decimal)|false|none|(New Zealand Orgs Only) The Investment Boost deduction percentage.|

<h2 id="tocS_Setting">Setting</h2>
<!-- backwards compatibility -->
<a id="schemasetting"></a>
<a id="schema_Setting"></a>
<a id="tocSsetting"></a>
<a id="tocssetting"></a>

```json
{
  "assetNumberPrefix": "FA-",
  "assetNumberSequence": "0022",
  "assetStartDate": "2015-07-31T00:00:00",
  "lastDepreciationDate": "2015-07-01T00:00:00",
  "defaultGainOnDisposalAccountId": "346ddb97-739a-4274-b43b-66aa3218d17c",
  "defaultLossOnDisposalAccountId": "1b798541-24e2-4855-9309-c023a0b576f3",
  "defaultCapitalGainOnDisposalAccountId": "6d6a0bdb-e118-45d8-a023-2ad617ec1cb7",
  "optInForTax": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetNumberPrefix|string|false|none|The prefix used for fixed asset numbers (“FA-” by default)|
|assetNumberSequence|string|false|none|The next available sequence number|
|assetStartDate|string(date)|false|none|The date depreciation calculations started on registered fixed assets in Xero|
|lastDepreciationDate|string(date)|false|none|The last depreciation date|
|defaultGainOnDisposalAccountId|string(uuid)|false|none|Default account that gains are posted to|
|defaultLossOnDisposalAccountId|string(uuid)|false|none|Default account that losses are posted to|
|defaultCapitalGainOnDisposalAccountId|string(uuid)|false|none|Default account that capital gains are posted to|
|optInForTax|boolean|false|none|opt in for tax calculation|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "resourceValidationErrors": [
    {
      "resourceName": "string",
      "localisedMessage": "string",
      "type": "string",
      "title": "string",
      "detail": "string"
    }
  ],
  "fieldValidationErrors": [
    {
      "fieldName": "string",
      "valueProvided": "string",
      "localisedMessage": "string",
      "type": "string",
      "title": "string",
      "detail": "string"
    }
  ],
  "type": "string",
  "title": "string",
  "detail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceValidationErrors|[[ResourceValidationErrorsElement](#schemaresourcevalidationerrorselement)]|false|none|Array of elements of resource validation errors|
|fieldValidationErrors|[[FieldValidationErrorsElement](#schemafieldvalidationerrorselement)]|false|none|Array of elements of field validation errors|
|type|string|false|none|The internal type of error, not accessible externally|
|title|string|false|none|Title of the error|
|detail|string|false|none|Detail of the error|

<h2 id="tocS_ResourceValidationErrorsElement">ResourceValidationErrorsElement</h2>
<!-- backwards compatibility -->
<a id="schemaresourcevalidationerrorselement"></a>
<a id="schema_ResourceValidationErrorsElement"></a>
<a id="tocSresourcevalidationerrorselement"></a>
<a id="tocsresourcevalidationerrorselement"></a>

```json
{
  "resourceName": "string",
  "localisedMessage": "string",
  "type": "string",
  "title": "string",
  "detail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|none|The field name of the erroneous field|
|localisedMessage|string|false|none|Explanation of the resource validation error|
|type|string|false|none|Internal type of the resource error message|
|title|string|false|none|Title of the resource validation error|
|detail|string|false|none|Detail of the resource validation error|

<h2 id="tocS_FieldValidationErrorsElement">FieldValidationErrorsElement</h2>
<!-- backwards compatibility -->
<a id="schemafieldvalidationerrorselement"></a>
<a id="schema_FieldValidationErrorsElement"></a>
<a id="tocSfieldvalidationerrorselement"></a>
<a id="tocsfieldvalidationerrorselement"></a>

```json
{
  "fieldName": "string",
  "valueProvided": "string",
  "localisedMessage": "string",
  "type": "string",
  "title": "string",
  "detail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|string|false|none|The field name of the erroneous field|
|valueProvided|string|false|none|The provided value|
|localisedMessage|string|false|none|Explanation of the field validation error|
|type|string|false|none|Internal type of the field validation error message|
|title|string|false|none|Title of the field validation error|
|detail|string|false|none|Detail of the field validation error|
