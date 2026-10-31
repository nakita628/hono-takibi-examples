<h1 id="sync-for-commerce-api">Sync for Commerce API v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The API for Sync for Commerce. Sync for Commerce is an API and a set of supporting tools. It has been built to enable e-commerce, point of sale platforms to provide high-quality integrations with numerous accounting platform through standardized API, seamlessly transforming business sale's data into accounting artefacts.
[Read More...](https://docs.codat.io/sfc/overview)

Base URLs:

* <a href="https://api.codat.io">https://api.codat.io</a> - Production

<a href="https://www.codat.io/legals/">Terms of service</a>
Email: <a href="mailto:syncforcommerce@codat.io">Codat</a> 
Web: <a href="https://www.codat.io/">Codat</a> 

# Authentication

* API Key (auth_header)
    - Parameter Name: **Authorization**, in: header. The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)

<h1 id="sync-for-commerce-api-company-management">Company management</h1>

Create new and manage existing sync for commerce companies.

## List companies

<a id="opIdlist-companies"></a>

> Code samples

```bash
curl 'https://example.com/meta/companies?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /meta/companies`

Retrieve a list of all companies the client has created.

<h3 id="list-companies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "created": "2022-01-01T12:00:00.000Z",
      "createdByUserName": "string",
      "dataConnections": [
        {
          "created": "2022-10-27T09:53:29Z",
          "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
          "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
          "integrationKey": "dfxm",
          "lastSync": "2022-10-27T10:22:43.6464237Z",
          "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
          "platformName": "Basiq",
          "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
          "sourceType": "Banking",
          "status": "Linked"
        }
      ],
      "id": "0498e921-9b53-4396-a412-4f2f5983b0a2",
      "lastSync": "2022-01-01T12:00:00.000Z",
      "name": "string",
      "platform": "string",
      "redirect": "https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="list-companies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Companies](#schemacompanies)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create a sync for commerce company

<a id="opIdcreate-company"></a>

> Code samples

```bash
curl https://example.com/meta/companies/sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`POST /meta/companies/sync`

Creates a Codat company with a commerce partner data connection.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-a-sync-for-commerce-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCompany](#schemacreatecompany)|false|none|
|» name|body|string(string)|true|Name of the company in Codat with a partner-commerce data connection.|

> Example responses

> 200 Response

```json
{
  "created": "2022-01-01T12:00:00.000Z",
  "createdByUserName": "string",
  "dataConnections": [
    {
      "created": "2022-10-27T09:53:29Z",
      "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "dfxm",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
      "platformName": "Basiq",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "sourceType": "Banking",
      "status": "Linked"
    }
  ],
  "id": "0498e921-9b53-4396-a412-4f2f5983b0a2",
  "lastSync": "2022-01-01T12:00:00.000Z",
  "name": "string",
  "platform": "string",
  "redirect": "https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739"
}
```

<h3 id="create-a-sync-for-commerce-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Company](#schemacompany)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List data connections

<a id="opIdlist-connections"></a>

> Code samples

```bash
curl 'https://example.com/meta/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /meta/companies/{companyId}/connections`

Retrieve previously created data connections.

<h3 id="list-data-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "created": "2022-10-27T09:53:29Z",
      "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "dfxm",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
      "platformName": "Basiq",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "sourceType": "Banking",
      "status": "Linked"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="list-data-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connections](#schemaconnections)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create a data connection

<a id="opIdcreate-connection"></a>

> Code samples

```bash
curl https://example.com/meta/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '"string"'
```

`POST /meta/companies/{companyId}/connections`

Create a data connection for company.

> Body parameter

```json
"string"
```

<h3 id="create-a-data-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|body|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "created": "2022-10-27T09:53:29Z",
  "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
  "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
  "integrationKey": "dfxm",
  "lastSync": "2022-10-27T10:22:43.6464237Z",
  "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
  "platformName": "Basiq",
  "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
  "sourceType": "Banking",
  "status": "Linked"
}
```

<h3 id="create-a-data-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Update data connection

<a id="opIdupdate-connection"></a>

> Code samples

```bash
curl https://example.com/meta/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "status": "Linked"
  }'
```

`PATCH /meta/companies/{companyId}/connections/{connectionId}`

Update a data connection

> Body parameter

```json
{
  "status": "Linked"
}
```

<h3 id="update-data-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|body|body|[UpdateConnection](#schemaupdateconnection)|false|none|
|» status|body|string \| null|false|The current authorization status of the data connection.|

> Example responses

> 200 Response

```json
{
  "created": "2022-10-27T09:53:29Z",
  "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
  "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
  "integrationKey": "dfxm",
  "lastSync": "2022-10-27T10:22:43.6464237Z",
  "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
  "platformName": "Basiq",
  "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
  "sourceType": "Banking",
  "status": "Linked"
}
```

<h3 id="update-data-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="sync-for-commerce-api-configuration">Configuration</h1>

Expressively configure preferences for any given sync for commerce company.

## Retrieve config preferences set for a company.

<a id="opIdget-configuration"></a>

> Code samples

```bash
curl https://example.com/config/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/commerce \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /config/companies/{companyId}/sync/commerce`

Retrieve current config preferences.

<h3 id="retrieve-config-preferences-set-for-a-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "fees": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "feesSupplier": {
      "selectedSupplierId": "string",
      "supplierOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ]
    },
    "syncFees": true
  },
  "newPayments": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "syncPayments": true
  },
  "payments": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "syncPayments": true
  },
  "sales": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "grouping": {
      "groupingLevels": {
        "invoiceLevel": {
          "groupByOptions": [
            "string"
          ],
          "selectedGroupByOptions": [
            "string"
          ]
        },
        "invoiceLineLevel": {
          "groupByOptions": [
            "string"
          ],
          "selectedGroupByOptions": [
            "string"
          ]
        }
      },
      "groupingPeriod": {
        "groupingPeriodOptions": [
          "string"
        ],
        "selectedGroupingPeriod": "string"
      }
    },
    "invoiceStatus": {
      "invoiceStatusOptions": [
        "string"
      ],
      "selectedInvoiceStatus": "Submitted"
    },
    "newTaxRates": {
      "accountingTaxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "commerceTaxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "defaultZeroTaxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "selectedDefaultZeroTaxRateId": "string",
      "taxRateMappings": [
        {
          "selectedAccountingTaxRateId": "string",
          "selectedCommerceTaxRateIds": [
            "string"
          ]
        }
      ]
    },
    "salesCustomer": {
      "customerOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "selectedCustomerId": "string"
    },
    "syncSales": true,
    "taxRates": {
      "property1": {
        "selectedTaxRateId": "string",
        "taxRateOptions": [
          {
            "id": "string",
            "name": "string"
          }
        ]
      },
      "property2": {
        "selectedTaxRateId": "string",
        "taxRateOptions": [
          {
            "id": "string",
            "name": "string"
          }
        ]
      }
    }
  }
}
```

<h3 id="retrieve-config-preferences-set-for-a-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Configuration](#schemaconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create or update configuration.

<a id="opIdset-configuration"></a>

> Code samples

```bash
curl https://example.com/config/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/commerce \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /config/companies/{companyId}/sync/commerce`

Make changes to configuration preferences.

<h3 id="create-or-update-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "fees": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "feesSupplier": {
      "selectedSupplierId": "string",
      "supplierOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ]
    },
    "syncFees": true
  },
  "newPayments": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "syncPayments": true
  },
  "payments": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "syncPayments": true
  },
  "sales": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "grouping": {
      "groupingLevels": {
        "invoiceLevel": {
          "groupByOptions": [
            "string"
          ],
          "selectedGroupByOptions": [
            "string"
          ]
        },
        "invoiceLineLevel": {
          "groupByOptions": [
            "string"
          ],
          "selectedGroupByOptions": [
            "string"
          ]
        }
      },
      "groupingPeriod": {
        "groupingPeriodOptions": [
          "string"
        ],
        "selectedGroupingPeriod": "string"
      }
    },
    "invoiceStatus": {
      "invoiceStatusOptions": [
        "string"
      ],
      "selectedInvoiceStatus": "Submitted"
    },
    "newTaxRates": {
      "accountingTaxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "commerceTaxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "defaultZeroTaxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "selectedDefaultZeroTaxRateId": "string",
      "taxRateMappings": [
        {
          "selectedAccountingTaxRateId": "string",
          "selectedCommerceTaxRateIds": [
            "string"
          ]
        }
      ]
    },
    "salesCustomer": {
      "customerOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "selectedCustomerId": "string"
    },
    "syncSales": true,
    "taxRates": {
      "property1": {
        "selectedTaxRateId": "string",
        "taxRateOptions": [
          {
            "id": "string",
            "name": "string"
          }
        ]
      },
      "property2": {
        "selectedTaxRateId": "string",
        "taxRateOptions": [
          {
            "id": "string",
            "name": "string"
          }
        ]
      }
    }
  }
}
```

<h3 id="create-or-update-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Configuration](#schemaconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get status for a company's syncs

<a id="opIdget-sync-status"></a>

> Code samples

```bash
curl https://example.com/meta/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/commerce/status \
  -H "Authorization: ${API_KEY}"
```

`GET /meta/companies/{companyId}/sync/commerce/status`

Check the sync history and sync status for a company.

<h3 id="get-status-for-a-companys-syncs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|

<h3 id="get-status-for-a-companys-syncs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="sync-for-commerce-api-sync-flow-preferences">Sync flow preferences</h1>

Configure preferences for any given sync for commerce company using sync flow.

## List visible accounts

<a id="opIdget-visible-accounts"></a>

> Code samples

```bash
curl https://example.com/clients/497f6eca-6276-4993-bfeb-53cbbbba6f08/config/ui/accounts/platform/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /clients/{clientId}/config/ui/accounts/platform/{platformKey}`

Enable retrieval for accounts which are visible on sync flow.

<h3 id="list-visible-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientId|path|string(uuid)|true|none|
|platformKey|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "visibleAccounts": [
    "string"
  ]
}
```

<h3 id="list-visible-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VisibleAccounts](#schemavisibleaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve sync flow url

<a id="opIdget-sync-flow-url"></a>

> Code samples

```bash
curl https://example.com/config/sync/commerce/string/string/start \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /config/sync/commerce/{commerceKey}/{accountingKey}/start`

Get a URL for Sync Flow including a one time passcode.

<h3 id="retrieve-sync-flow-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commerceKey|path|string|true|Commerce platform key|
|accountingKey|path|string|true|Accounting platform key|
|merchantIdentifier|query|string|false|Identifier for your merchant, can be the merchant name or Codat company id.|

> Example responses

> 200 Response

```json
{
  "url": "https://sync-flow-integration.codat.io/57b6fad9-e3ca-447b-89db-e4ffa21e6ef3/aiwb/mqjo/start?otp=836415"
}
```

<h3 id="retrieve-sync-flow-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SyncFlowUrl](#schemasyncflowurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Update the visible accounts on Sync Flow

<a id="opIdupdate-visible-accounts-sync-flow"></a>

> Code samples

```bash
curl https://example.com/sync/commerce/config/ui/accounts/platform/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "visibleAccounts": [
      "string"
    ]
  }'
```

`PATCH /sync/commerce/config/ui/accounts/platform/{commerceKey}`

To enable update of accounts visible preferences set on Sync Flow.

> Body parameter

```json
{
  "visibleAccounts": [
    "string"
  ]
}
```

<h3 id="update-the-visible-accounts-on-sync-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commerceKey|path|string(uuid)|true|none|
|body|body|[VisibleAccounts](#schemavisibleaccounts)|false|none|
|» visibleAccounts|body|[string]|false|Visible accounts on sync flow.|

> Example responses

> 200 Response

```json
{
  "visibleAccounts": [
    "string"
  ]
}
```

<h3 id="update-the-visible-accounts-on-sync-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VisibleAccounts](#schemavisibleaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve preferences for text fields on Sync Flow

<a id="opIdget-config-text-sync-flow"></a>

> Code samples

```bash
curl https://example.com/sync/commerce/config/ui/text \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /sync/commerce/config/ui/text`

To enable retrieval of preferences set for the text fields on Sync Flow.

> Example responses

> 200 Response

```json
{
  "property1": {
    "required": true,
    "text": "string"
  },
  "property2": {
    "required": true,
    "text": "string"
  }
}
```

<h3 id="retrieve-preferences-for-text-fields-on-sync-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocalizationInfo](#schemalocalizationinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Update preferences for text fields on sync flow

<a id="opIdupdate-config-text-sync-flow"></a>

> Code samples

```bash
curl https://example.com/sync/commerce/config/ui/text \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "property1": {
      "required": true,
      "text": "string"
    },
    "property2": {
      "required": true,
      "text": "string"
    }
  }'
```

`PATCH /sync/commerce/config/ui/text`

To enable update of preferences set for the text fields on sync flow.

> Body parameter

```json
{
  "property1": {
    "required": true,
    "text": "string"
  },
  "property2": {
    "required": true,
    "text": "string"
  }
}
```

<h3 id="update-preferences-for-text-fields-on-sync-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LocalizationInfo](#schemalocalizationinfo)|false|none|
|» **additionalProperties**|body|[Localization](#schemalocalization)|false|none|

> Example responses

> 200 Response

```json
{
  "property1": {
    "required": true,
    "text": "string"
  },
  "property2": {
    "required": true,
    "text": "string"
  }
}
```

<h3 id="update-preferences-for-text-fields-on-sync-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LocalizationInfo](#schemalocalizationinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="sync-for-commerce-api-sync">Sync</h1>

Initiate a sync of sync for commerce company data into their respective accounting software.

## Run a Commerce sync from the last successful sync

<a id="opIdrequest-sync"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/commerce/latest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "syncTo": "2022-10-23T00:00:00Z"
  }'
```

`POST /companies/{companyId}/sync/commerce/latest`

Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.
If there was no previously successful sync, the start date in the config is used.

> Body parameter

```json
{
  "syncTo": "2022-10-23T00:00:00Z"
}
```

<h3 id="run-a-commerce-sync-from-the-last-successful-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|body|body|[SyncToLatestArgs](#schemasynctolatestargs)|false|none|
|» syncTo|body|string|false|The DateTime, upto which Sync will run up to starting from the previous successful sync|

> Example responses

> 200 Response

```json
{
  "commerceSyncId": "8d0a044e-b683-4fc9-bd0d-bfb2ca5731b7",
  "companyId": "f4637ec9-9fc0-4a02-8df0-c90d6dc86208",
  "dataConnections": [
    {
      "created": "2022-10-27T09:53:29Z",
      "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "dfxm",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
      "platformName": "Basiq",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "sourceType": "Banking",
      "status": "Linked"
    }
  ],
  "dataPushed": true,
  "errorMessage": "Customer 3b9bf2ed-a618-4af2-80f2-f2b57fddc748 is not in an Active state. (Archived)",
  "syncDateRangeUtc": {
    "finish": "2022-10-23T00:00:00Z",
    "start": "2022-10-23T00:00:00Z"
  },
  "syncExceptionMessage": "Customer 3b9bf2ed-a618-4af2-80f2-f2b57fddc748 is not in an Active state. (Archived)",
  "syncStatus": "ValidateError, Pending",
  "syncStatusCode": 4000,
  "syncUtc": "2022-10-23T00:00:00Z"
}
```

<h3 id="run-a-commerce-sync-from-the-last-successful-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SyncSummary](#schemasyncsummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Run a Commerce sync from a given date range

<a id="opIdrequest-sync-for-date-range"></a>

> Code samples

```bash
curl https://example.com/meta/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/commerce/historic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "finish": "2022-10-23T00:00:00Z",
    "start": "2022-10-23T00:00:00Z"
  }'
```

`POST /meta/companies/{companyId}/sync/commerce/historic`

Run a Commerce sync from the specified start date to the specified finish date in the request payload.

> Body parameter

```json
{
  "finish": "2022-10-23T00:00:00Z",
  "start": "2022-10-23T00:00:00Z"
}
```

<h3 id="run-a-commerce-sync-from-a-given-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|body|body|[DateRange](#schemadaterange)|false|none|
|» finish|body|string|false|Finish date of the Sync.|
|» start|body|string|false|Start date of the Sync.|

> Example responses

> 200 Response

```json
{
  "commerceSyncId": "8d0a044e-b683-4fc9-bd0d-bfb2ca5731b7",
  "companyId": "f4637ec9-9fc0-4a02-8df0-c90d6dc86208",
  "dataConnections": [
    {
      "created": "2022-10-27T09:53:29Z",
      "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "dfxm",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
      "platformName": "Basiq",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "sourceType": "Banking",
      "status": "Linked"
    }
  ],
  "dataPushed": true,
  "errorMessage": "Customer 3b9bf2ed-a618-4af2-80f2-f2b57fddc748 is not in an Active state. (Archived)",
  "syncDateRangeUtc": {
    "finish": "2022-10-23T00:00:00Z",
    "start": "2022-10-23T00:00:00Z"
  },
  "syncExceptionMessage": "Customer 3b9bf2ed-a618-4af2-80f2-f2b57fddc748 is not in an Active state. (Archived)",
  "syncStatus": "ValidateError, Pending",
  "syncStatusCode": 4000,
  "syncUtc": "2022-10-23T00:00:00Z"
}
```

<h3 id="run-a-commerce-sync-from-a-given-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SyncSummary](#schemasyncsummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="sync-for-commerce-api-integrations">Integrations</h1>

View useful information about codat's integrations.

## List information on Codat's supported integrations

<a id="opIdlist-integrations"></a>

> Code samples

```bash
curl 'https://example.com/config/integrations?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /config/integrations`

Retrieve a list of available integrations support by datatype and state of release.

<h3 id="list-information-on-codats-supported-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "dataProvidedBy": "string",
      "datatypeFeatures": [
        {
          "datatype": "invoices",
          "supportedFeatures": [
            {
              "featureState": "release",
              "featureType": "get"
            }
          ]
        }
      ],
      "enabled": true,
      "integrationId": "497a18ca-284e-40c0-985d-f72be35d468e",
      "isBeta": true,
      "isOfflineConnector": true,
      "key": "gbol",
      "logoUrl": "http://example.com",
      "name": "Xero",
      "sourceId": "accounting",
      "sourceType": "8193a927-ab7a-45a3-9dc2-d357a4932dfe"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="list-information-on-codats-supported-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Integrations](#schemaintegrations)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get branding for an integration

<a id="opIdget-integration-branding"></a>

> Code samples

```bash
curl https://example.com/config/integrations/string/branding \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /config/integrations/{platformKey}/branding`

Retrieve Integration branding assets.

<h3 id="get-branding-for-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|platformKey|path|string|true|PlatformKey|

> Example responses

> 200 Response

```json
{
  "button": {
    "default": {
      "image": {
        "alt": "xero default button icon",
        "src": "https://static.codat.io/public/officialButtons/Full/8A156A5A-39CB-4F9D-856E-76EF9Q7A9607.png"
      }
    },
    "hover": {
      "image": {
        "alt": "xero hover button icon",
        "src": "https://static.codat.io/public/officialLogos/Full/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png"
      }
    }
  },
  "logo": {
    "full": {
      "image": {
        "alt": "xero full icon",
        "src": "https://static.codat.io/public/officialLogos/Full/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png"
      }
    },
    "square": {
      "image": {
        "alt": "xero square icon",
        "src": "https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B2W3607.png"
      }
    }
  },
  "sourceId": "35b92968-9851-4095-ad60-395c95cbcba4"
}
```

<h3 id="get-branding-for-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Branding](#schemabranding)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

# Schemas

<h2 id="tocS_AccountOption">AccountOption</h2>
<!-- backwards compatibility -->
<a id="schemaaccountoption"></a>
<a id="schema_AccountOption"></a>
<a id="tocSaccountoption"></a>
<a id="tocsaccountoption"></a>

```json
{
  "classification": "Bank Nominal",
  "id": "string",
  "name": "string",
  "nominalCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|string \| null|false|none|Classification of the type of G/L account.|
|id|string|false|none|Identifier for the account, unique for the company.|
|name|string \| null|false|none|Name of the account.|
|nominalCode|string \| null|false|none|Reference given to each nominal account for a business. It ensures money is allocated to the correct account. This code isn't a unique identifier in the Codat system.|

<h2 id="tocS_Branding">Branding</h2>
<!-- backwards compatibility -->
<a id="schemabranding"></a>
<a id="schema_Branding"></a>
<a id="tocSbranding"></a>
<a id="tocsbranding"></a>

```json
{
  "button": {
    "default": {
      "image": {
        "alt": "xero default button icon",
        "src": "https://static.codat.io/public/officialButtons/Full/8A156A5A-39CB-4F9D-856E-76EF9Q7A9607.png"
      }
    },
    "hover": {
      "image": {
        "alt": "xero hover button icon",
        "src": "https://static.codat.io/public/officialLogos/Full/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png"
      }
    }
  },
  "logo": {
    "full": {
      "image": {
        "alt": "xero full icon",
        "src": "https://static.codat.io/public/officialLogos/Full/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png"
      }
    },
    "square": {
      "image": {
        "alt": "xero square icon",
        "src": "https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B2W3607.png"
      }
    }
  },
  "sourceId": "35b92968-9851-4095-ad60-395c95cbcba4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|button|object|false|none|Button branding references.|
|logo|object|false|none|Logo branding references.|
|sourceId|string(uuid)|false|none|A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.|

<h2 id="tocS_Companies">Companies</h2>
<!-- backwards compatibility -->
<a id="schemacompanies"></a>
<a id="schema_Companies"></a>
<a id="tocScompanies"></a>
<a id="tocscompanies"></a>

```json
{
  "results": [
    {
      "created": "2022-01-01T12:00:00.000Z",
      "createdByUserName": "string",
      "dataConnections": [
        {
          "created": "2022-10-27T09:53:29Z",
          "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
          "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
          "integrationKey": "dfxm",
          "lastSync": "2022-10-27T10:22:43.6464237Z",
          "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
          "platformName": "Basiq",
          "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
          "sourceType": "Banking",
          "status": "Linked"
        }
      ],
      "id": "0498e921-9b53-4396-a412-4f2f5983b0a2",
      "lastSync": "2022-01-01T12:00:00.000Z",
      "name": "string",
      "platform": "string",
      "redirect": "https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Company](#schemacompany)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_Company">Company</h2>
<!-- backwards compatibility -->
<a id="schemacompany"></a>
<a id="schema_Company"></a>
<a id="tocScompany"></a>
<a id="tocscompany"></a>

```json
{
  "created": "2022-01-01T12:00:00.000Z",
  "createdByUserName": "string",
  "dataConnections": [
    {
      "created": "2022-10-27T09:53:29Z",
      "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "dfxm",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
      "platformName": "Basiq",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "sourceType": "Banking",
      "status": "Linked"
    }
  ],
  "id": "0498e921-9b53-4396-a412-4f2f5983b0a2",
  "lastSync": "2022-01-01T12:00:00.000Z",
  "name": "string",
  "platform": "string",
  "redirect": "https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739"
}
```

A company in Codat represent a small or medium sized business, whose data you wish to share

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string|false|none|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|createdByUserName|string|false|none|none|
|dataConnections|[[Connection](#schemaconnection)]|false|none|none|
|description|string|false|none|Additional information about the company. This can be used to store foreign IDs, references, etc.|
|id|string(uuid)|true|none|Unique identifier for your SMB in Codat.|
|lastSync|string|false|none|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|name|string|true|none|The name of the company|
|platform|string|false|none|**Deprecated.**|
|redirect|string(uri)|true|none|The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company.|

<h2 id="tocS_ConfigAccount">ConfigAccount</h2>
<!-- backwards compatibility -->
<a id="schemaconfigaccount"></a>
<a id="schema_ConfigAccount"></a>
<a id="tocSconfigaccount"></a>
<a id="tocsconfigaccount"></a>

```json
{
  "accountOptions": [
    {
      "classification": "Bank Nominal",
      "id": "string",
      "name": "string",
      "nominalCode": "string"
    }
  ],
  "descriptionText": "string",
  "labelText": "string",
  "required": true,
  "selectedAccountId": "string"
}
```

G/L account object for configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountOptions|[[AccountOption](#schemaaccountoption)]|false|none|Object containing account options.|
|descriptionText|string \| null|false|none|Descriprtive text for sales configuration section.|
|labelText|string \| null|false|none|Label text for sales configuration section.|
|required|boolean|false|none|Required section to be configured for sync.|
|selectedAccountId|string \| null|false|none|Selected account id from the list of available accounts.|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "fees": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "feesSupplier": {
      "selectedSupplierId": "string",
      "supplierOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ]
    },
    "syncFees": true
  },
  "newPayments": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "syncPayments": true
  },
  "payments": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "syncPayments": true
  },
  "sales": {
    "accounts": {
      "property1": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      },
      "property2": {
        "accountOptions": [
          {
            "classification": "Bank Nominal",
            "id": "string",
            "name": "string",
            "nominalCode": "string"
          }
        ],
        "descriptionText": "string",
        "labelText": "string",
        "required": true,
        "selectedAccountId": "string"
      }
    },
    "grouping": {
      "groupingLevels": {
        "invoiceLevel": {
          "groupByOptions": [
            "string"
          ],
          "selectedGroupByOptions": [
            "string"
          ]
        },
        "invoiceLineLevel": {
          "groupByOptions": [
            "string"
          ],
          "selectedGroupByOptions": [
            "string"
          ]
        }
      },
      "groupingPeriod": {
        "groupingPeriodOptions": [
          "string"
        ],
        "selectedGroupingPeriod": "string"
      }
    },
    "invoiceStatus": {
      "invoiceStatusOptions": [
        "string"
      ],
      "selectedInvoiceStatus": "Submitted"
    },
    "newTaxRates": {
      "accountingTaxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "commerceTaxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "defaultZeroTaxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "selectedDefaultZeroTaxRateId": "string",
      "taxRateMappings": [
        {
          "selectedAccountingTaxRateId": "string",
          "selectedCommerceTaxRateIds": [
            "string"
          ]
        }
      ]
    },
    "salesCustomer": {
      "customerOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "selectedCustomerId": "string"
    },
    "syncSales": true,
    "taxRates": {
      "property1": {
        "selectedTaxRateId": "string",
        "taxRateOptions": [
          {
            "id": "string",
            "name": "string"
          }
        ]
      },
      "property2": {
        "selectedTaxRateId": "string",
        "taxRateOptions": [
          {
            "id": "string",
            "name": "string"
          }
        ]
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fees|[Fees](#schemafees)|false|none|none|
|newPayments|[NewPayments](#schemanewpayments)|false|none|none|
|payments|[Payments](#schemapayments)|false|none|none|
|sales|[Sales](#schemasales)|false|none|none|

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "created": "2022-10-27T09:53:29Z",
  "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
  "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
  "integrationKey": "dfxm",
  "lastSync": "2022-10-27T10:22:43.6464237Z",
  "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
  "platformName": "Basiq",
  "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
  "sourceType": "Banking",
  "status": "Linked"
}
```

A connection represents the link between a `company` and a source of data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionInfo|object|false|none|none|
|created|string|true|none|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|dataConnectionErrors|[object]|false|none|none|
|id|string(uuid)|true|none|Unique identifier for a company's data connection.|
|integrationId|string(uuid)|true|none|A Codat ID representing the integration.|
|integrationKey|string|true|none|A unique four-character ID that identifies the platform of the company's data connection. This ensures continuity if the platform changes its name in the future.|
|lastSync|string|false|none|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|linkUrl|string(uri)|true|none|none|
|platformName|string|true|none|none|
|sourceId|string(uuid)|true|none|A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.|
|sourceType|string|true|none|The type of platform of the connection.|
|status|string|true|none|The current authorization status of the data connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|Accounting|
|sourceType|Banking|
|sourceType|Commerce|
|sourceType|Other|
|sourceType|Unknown|
|status|PendingAuth|
|status|Linked|
|status|Unlinked|
|status|Deauthorized|

<h2 id="tocS_Connections">Connections</h2>
<!-- backwards compatibility -->
<a id="schemaconnections"></a>
<a id="schema_Connections"></a>
<a id="tocSconnections"></a>
<a id="tocsconnections"></a>

```json
{
  "results": [
    {
      "created": "2022-10-27T09:53:29Z",
      "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "dfxm",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
      "platformName": "Basiq",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "sourceType": "Banking",
      "status": "Linked"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Connection](#schemaconnection)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_CreateCompany">CreateCompany</h2>
<!-- backwards compatibility -->
<a id="schemacreatecompany"></a>
<a id="schema_CreateCompany"></a>
<a id="tocScreatecompany"></a>
<a id="tocscreatecompany"></a>

```json
{
  "name": "Bob's Burgers"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string(string)|true|none|Name of the company in Codat with a partner-commerce data connection.|

<h2 id="tocS_Customer">Customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "customerOptions": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "selectedCustomerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerOptions|[[Option](#schemaoption)]|false|none|List of customer options from the list of customer records on the accounting software.|
|selectedCustomerId|string \| null|false|none|Selected customer id from the list of customer records on the accounting software.|

<h2 id="tocS_DateRange">DateRange</h2>
<!-- backwards compatibility -->
<a id="schemadaterange"></a>
<a id="schema_DateRange"></a>
<a id="tocSdaterange"></a>
<a id="tocsdaterange"></a>

```json
{
  "finish": "2022-10-23T00:00:00Z",
  "start": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finish|string|false|none|Finish date of the Sync.|
|start|string|false|none|Start date of the Sync.|

<h2 id="tocS_Fees">Fees</h2>
<!-- backwards compatibility -->
<a id="schemafees"></a>
<a id="schema_Fees"></a>
<a id="tocSfees"></a>
<a id="tocsfees"></a>

```json
{
  "accounts": {
    "property1": {
      "accountOptions": [
        {
          "classification": "Bank Nominal",
          "id": "string",
          "name": "string",
          "nominalCode": "string"
        }
      ],
      "descriptionText": "string",
      "labelText": "string",
      "required": true,
      "selectedAccountId": "string"
    },
    "property2": {
      "accountOptions": [
        {
          "classification": "Bank Nominal",
          "id": "string",
          "name": "string",
          "nominalCode": "string"
        }
      ],
      "descriptionText": "string",
      "labelText": "string",
      "required": true,
      "selectedAccountId": "string"
    }
  },
  "feesSupplier": {
    "selectedSupplierId": "string",
    "supplierOptions": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  },
  "syncFees": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|object \| null|false|none|none|
|feesSupplier|[FeesSupplier](#schemafeessupplier)|false|none|none|
|syncFees|boolean|false|none|Boolean indicator to enable syncing fees.|

<h2 id="tocS_FeesSupplier">FeesSupplier</h2>
<!-- backwards compatibility -->
<a id="schemafeessupplier"></a>
<a id="schema_FeesSupplier"></a>
<a id="tocSfeessupplier"></a>
<a id="tocsfeessupplier"></a>

```json
{
  "selectedSupplierId": "string",
  "supplierOptions": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedSupplierId|string \| null|false|none|Selected supplier id from the list of supplier records on the accounting software.|
|supplierOptions|[[Option](#schemaoption)]|false|none|List of supplier options from the list of supplier records on the accounting software.|

<h2 id="tocS_Grouping">Grouping</h2>
<!-- backwards compatibility -->
<a id="schemagrouping"></a>
<a id="schema_Grouping"></a>
<a id="tocSgrouping"></a>
<a id="tocsgrouping"></a>

```json
{
  "groupingLevels": {
    "invoiceLevel": {
      "groupByOptions": [
        "string"
      ],
      "selectedGroupByOptions": [
        "string"
      ]
    },
    "invoiceLineLevel": {
      "groupByOptions": [
        "string"
      ],
      "selectedGroupByOptions": [
        "string"
      ]
    }
  },
  "groupingPeriod": {
    "groupingPeriodOptions": [
      "string"
    ],
    "selectedGroupingPeriod": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupingLevels|[GroupingLevels](#schemagroupinglevels)|false|none|none|
|groupingPeriod|[GroupingPeriod](#schemagroupingperiod)|false|none|none|

<h2 id="tocS_GroupingLevels">GroupingLevels</h2>
<!-- backwards compatibility -->
<a id="schemagroupinglevels"></a>
<a id="schema_GroupingLevels"></a>
<a id="tocSgroupinglevels"></a>
<a id="tocsgroupinglevels"></a>

```json
{
  "invoiceLevel": {
    "groupByOptions": [
      "string"
    ],
    "selectedGroupByOptions": [
      "string"
    ]
  },
  "invoiceLineLevel": {
    "groupByOptions": [
      "string"
    ],
    "selectedGroupByOptions": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceLevel|[InvoiceLevelSelection](#schemainvoicelevelselection)|false|none|none|
|invoiceLineLevel|[InvoiceLineLevelSelection](#schemainvoicelinelevelselection)|false|none|none|

<h2 id="tocS_GroupingPeriod">GroupingPeriod</h2>
<!-- backwards compatibility -->
<a id="schemagroupingperiod"></a>
<a id="schema_GroupingPeriod"></a>
<a id="tocSgroupingperiod"></a>
<a id="tocsgroupingperiod"></a>

```json
{
  "groupingPeriodOptions": [
    "string"
  ],
  "selectedGroupingPeriod": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupingPeriodOptions|[string]|false|none|Array of grouping period options.|
|selectedGroupingPeriod|string \| null|false|none|Grouping period i.e. Daily sales.|

<h2 id="tocS_HalRef">HalRef</h2>
<!-- backwards compatibility -->
<a id="schemahalref"></a>
<a id="schema_HalRef"></a>
<a id="tocShalref"></a>
<a id="tocshalref"></a>

```json
{
  "href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string(uri-reference)|false|none|none|

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
{
  "dataProvidedBy": "string",
  "datatypeFeatures": [
    {
      "datatype": "invoices",
      "supportedFeatures": [
        {
          "featureState": "release",
          "featureType": "get"
        }
      ]
    }
  ],
  "enabled": true,
  "integrationId": "497a18ca-284e-40c0-985d-f72be35d468e",
  "isBeta": true,
  "isOfflineConnector": true,
  "key": "gbol",
  "logoUrl": "http://example.com",
  "name": "Xero",
  "sourceId": "accounting",
  "sourceType": "8193a927-ab7a-45a3-9dc2-d357a4932dfe"
}
```

An integration that Codat supports

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataProvidedBy|string|false|none|none|
|datatypeFeatures|[object]|false|none|none|
|enabled|boolean|true|none|Whether this integration is enabled for your customers to use|
|integrationId|string(uuid)|false|none|A Codat ID representing the integration.|
|isBeta|boolean|false|none|none|
|isOfflineConnector|boolean|false|none|none|
|key|string|true|none|A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/accounting-platform-keys), [banking](https://docs.codat.io/integrations/banking/banking-platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/commerce-platform-keys) platform keys. |
|logoUrl|string(uri)|true|none|none|
|name|string|true|none|none|
|sourceId|string(uuid)|false|none|A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.|
|sourceType|string|false|none|The type of platform of the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|Accounting|
|sourceType|Banking|
|sourceType|Commerce|
|sourceType|Other|
|sourceType|Unknown|

<h2 id="tocS_Integrations">Integrations</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations"></a>
<a id="schema_Integrations"></a>
<a id="tocSintegrations"></a>
<a id="tocsintegrations"></a>

```json
{
  "results": [
    {
      "dataProvidedBy": "string",
      "datatypeFeatures": [
        {
          "datatype": "invoices",
          "supportedFeatures": [
            {
              "featureState": "release",
              "featureType": "get"
            }
          ]
        }
      ],
      "enabled": true,
      "integrationId": "497a18ca-284e-40c0-985d-f72be35d468e",
      "isBeta": true,
      "isOfflineConnector": true,
      "key": "gbol",
      "logoUrl": "http://example.com",
      "name": "Xero",
      "sourceId": "accounting",
      "sourceType": "8193a927-ab7a-45a3-9dc2-d357a4932dfe"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Integration](#schemaintegration)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_InvoiceLevelSelection">InvoiceLevelSelection</h2>
<!-- backwards compatibility -->
<a id="schemainvoicelevelselection"></a>
<a id="schema_InvoiceLevelSelection"></a>
<a id="tocSinvoicelevelselection"></a>
<a id="tocsinvoicelevelselection"></a>

```json
{
  "groupByOptions": [
    "string"
  ],
  "selectedGroupByOptions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupByOptions|[string]|false|none|Options for grouping sales.|
|selectedGroupByOptions|[string]|false|none|Selected array of grouping options.|

<h2 id="tocS_InvoiceLineLevelSelection">InvoiceLineLevelSelection</h2>
<!-- backwards compatibility -->
<a id="schemainvoicelinelevelselection"></a>
<a id="schema_InvoiceLineLevelSelection"></a>
<a id="tocSinvoicelinelevelselection"></a>
<a id="tocsinvoicelinelevelselection"></a>

```json
{
  "groupByOptions": [
    "string"
  ],
  "selectedGroupByOptions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupByOptions|[string]|false|none|Options for grouping on invoice lines.|
|selectedGroupByOptions|[string]|false|none|Invoice line level selection.|

<h2 id="tocS_InvoiceStatus">InvoiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemainvoicestatus"></a>
<a id="schema_InvoiceStatus"></a>
<a id="tocSinvoicestatus"></a>
<a id="tocsinvoicestatus"></a>

```json
{
  "invoiceStatusOptions": [
    "string"
  ],
  "selectedInvoiceStatus": "Submitted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceStatusOptions|[string]|false|none|Options for invoice statuses.|
|selectedInvoiceStatus|string \| null|false|none|Selected option for invoice status for invoice to be synced.|

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "current": {
    "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
  },
  "self": {
    "href": "/companies/{id}/data/{dataType}"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|[HalRef](#schemahalref)|true|none|none|
|next|[HalRef](#schemahalref)|false|none|none|
|previous|[HalRef](#schemahalref)|false|none|none|
|self|[HalRef](#schemahalref)|true|none|none|

<h2 id="tocS_Localization">Localization</h2>
<!-- backwards compatibility -->
<a id="schemalocalization"></a>
<a id="schema_Localization"></a>
<a id="tocSlocalization"></a>
<a id="tocslocalization"></a>

```json
{
  "required": true,
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|required|boolean|false|none|none|
|text|string \| null|false|none|Value of the property.|

<h2 id="tocS_LocalizationInfo">LocalizationInfo</h2>
<!-- backwards compatibility -->
<a id="schemalocalizationinfo"></a>
<a id="schema_LocalizationInfo"></a>
<a id="tocSlocalizationinfo"></a>
<a id="tocslocalizationinfo"></a>

```json
{
  "property1": {
    "required": true,
    "text": "string"
  },
  "property2": {
    "required": true,
    "text": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Localization](#schemalocalization)|false|none|none|

<h2 id="tocS_NewPayments">NewPayments</h2>
<!-- backwards compatibility -->
<a id="schemanewpayments"></a>
<a id="schema_NewPayments"></a>
<a id="tocSnewpayments"></a>
<a id="tocsnewpayments"></a>

```json
{
  "accounts": {
    "property1": {
      "accountOptions": [
        {
          "classification": "Bank Nominal",
          "id": "string",
          "name": "string",
          "nominalCode": "string"
        }
      ],
      "descriptionText": "string",
      "labelText": "string",
      "required": true,
      "selectedAccountId": "string"
    },
    "property2": {
      "accountOptions": [
        {
          "classification": "Bank Nominal",
          "id": "string",
          "name": "string",
          "nominalCode": "string"
        }
      ],
      "descriptionText": "string",
      "labelText": "string",
      "required": true,
      "selectedAccountId": "string"
    }
  },
  "syncPayments": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|object \| null|false|none|none|
|syncPayments|boolean|false|none|Boolean indicator for syncing payments.|

<h2 id="tocS_NewTaxRates">NewTaxRates</h2>
<!-- backwards compatibility -->
<a id="schemanewtaxrates"></a>
<a id="schema_NewTaxRates"></a>
<a id="tocSnewtaxrates"></a>
<a id="tocsnewtaxrates"></a>

```json
{
  "accountingTaxRateOptions": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "commerceTaxRateOptions": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "defaultZeroTaxRateOptions": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "selectedDefaultZeroTaxRateId": "string",
  "taxRateMappings": [
    {
      "selectedAccountingTaxRateId": "string",
      "selectedCommerceTaxRateIds": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountingTaxRateOptions|[[Option](#schemaoption)]|false|none|Array of accounting tax rate options.|
|commerceTaxRateOptions|[[Option](#schemaoption)]|false|none|Array of tax component options.|
|defaultZeroTaxRateOptions|[[Option](#schemaoption)]|false|none|Default zero tax rate selected for sync.|
|selectedDefaultZeroTaxRateId|string \| null|false|none|Default tax rate selected for sync.|
|taxRateMappings|[[TaxRateMapping](#schemataxratemapping)]|false|none|Array of tax component to rate mapppings.|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the option.|
|name|string \| null|false|none|Name value of the option.|

<h2 id="tocS_PagingInfo">PagingInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginginfo"></a>
<a id="schema_PagingInfo"></a>
<a id="tocSpaginginfo"></a>
<a id="tocspaginginfo"></a>

```json
{
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_Payments">Payments</h2>
<!-- backwards compatibility -->
<a id="schemapayments"></a>
<a id="schema_Payments"></a>
<a id="tocSpayments"></a>
<a id="tocspayments"></a>

```json
{
  "accounts": {
    "property1": {
      "accountOptions": [
        {
          "classification": "Bank Nominal",
          "id": "string",
          "name": "string",
          "nominalCode": "string"
        }
      ],
      "descriptionText": "string",
      "labelText": "string",
      "required": true,
      "selectedAccountId": "string"
    },
    "property2": {
      "accountOptions": [
        {
          "classification": "Bank Nominal",
          "id": "string",
          "name": "string",
          "nominalCode": "string"
        }
      ],
      "descriptionText": "string",
      "labelText": "string",
      "required": true,
      "selectedAccountId": "string"
    }
  },
  "syncPayments": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|object \| null|false|none|none|
|syncPayments|boolean|false|none|Boolean indicator for syncing sales.|

<h2 id="tocS_Sales">Sales</h2>
<!-- backwards compatibility -->
<a id="schemasales"></a>
<a id="schema_Sales"></a>
<a id="tocSsales"></a>
<a id="tocssales"></a>

```json
{
  "accounts": {
    "property1": {
      "accountOptions": [
        {
          "classification": "Bank Nominal",
          "id": "string",
          "name": "string",
          "nominalCode": "string"
        }
      ],
      "descriptionText": "string",
      "labelText": "string",
      "required": true,
      "selectedAccountId": "string"
    },
    "property2": {
      "accountOptions": [
        {
          "classification": "Bank Nominal",
          "id": "string",
          "name": "string",
          "nominalCode": "string"
        }
      ],
      "descriptionText": "string",
      "labelText": "string",
      "required": true,
      "selectedAccountId": "string"
    }
  },
  "grouping": {
    "groupingLevels": {
      "invoiceLevel": {
        "groupByOptions": [
          "string"
        ],
        "selectedGroupByOptions": [
          "string"
        ]
      },
      "invoiceLineLevel": {
        "groupByOptions": [
          "string"
        ],
        "selectedGroupByOptions": [
          "string"
        ]
      }
    },
    "groupingPeriod": {
      "groupingPeriodOptions": [
        "string"
      ],
      "selectedGroupingPeriod": "string"
    }
  },
  "invoiceStatus": {
    "invoiceStatusOptions": [
      "string"
    ],
    "selectedInvoiceStatus": "Submitted"
  },
  "newTaxRates": {
    "accountingTaxRateOptions": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "commerceTaxRateOptions": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "defaultZeroTaxRateOptions": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "selectedDefaultZeroTaxRateId": "string",
    "taxRateMappings": [
      {
        "selectedAccountingTaxRateId": "string",
        "selectedCommerceTaxRateIds": [
          "string"
        ]
      }
    ]
  },
  "salesCustomer": {
    "customerOptions": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "selectedCustomerId": "string"
  },
  "syncSales": true,
  "taxRates": {
    "property1": {
      "selectedTaxRateId": "string",
      "taxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ]
    },
    "property2": {
      "selectedTaxRateId": "string",
      "taxRateOptions": [
        {
          "id": "string",
          "name": "string"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|object \| null|false|none|none|
|grouping|[Grouping](#schemagrouping)|false|none|none|
|invoiceStatus|[InvoiceStatus](#schemainvoicestatus)|false|none|none|
|newTaxRates|[NewTaxRates](#schemanewtaxrates)|false|none|none|
|salesCustomer|[Customer](#schemacustomer)|false|none|none|
|syncSales|boolean|false|none|Boolean indicator for syncing sales.|
|taxRates|object \| null|false|none|none|

<h2 id="tocS_SyncFlowUrl">SyncFlowUrl</h2>
<!-- backwards compatibility -->
<a id="schemasyncflowurl"></a>
<a id="schema_SyncFlowUrl"></a>
<a id="tocSsyncflowurl"></a>
<a id="tocssyncflowurl"></a>

```json
{
  "url": "https://sync-flow-integration.codat.io/57b6fad9-e3ca-447b-89db-e4ffa21e6ef3/aiwb/mqjo/start?otp=836415"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|Sync flow URL.|

<h2 id="tocS_SyncSummary">SyncSummary</h2>
<!-- backwards compatibility -->
<a id="schemasyncsummary"></a>
<a id="schema_SyncSummary"></a>
<a id="tocSsyncsummary"></a>
<a id="tocssyncsummary"></a>

```json
{
  "commerceSyncId": "8d0a044e-b683-4fc9-bd0d-bfb2ca5731b7",
  "companyId": "f4637ec9-9fc0-4a02-8df0-c90d6dc86208",
  "dataConnections": [
    {
      "created": "2022-10-27T09:53:29Z",
      "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "dfxm",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
      "platformName": "Basiq",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "sourceType": "Banking",
      "status": "Linked"
    }
  ],
  "dataPushed": true,
  "errorMessage": "Customer 3b9bf2ed-a618-4af2-80f2-f2b57fddc748 is not in an Active state. (Archived)",
  "syncDateRangeUtc": {
    "finish": "2022-10-23T00:00:00Z",
    "start": "2022-10-23T00:00:00Z"
  },
  "syncExceptionMessage": "Customer 3b9bf2ed-a618-4af2-80f2-f2b57fddc748 is not in an Active state. (Archived)",
  "syncStatus": "ValidateError, Pending",
  "syncStatusCode": 4000,
  "syncUtc": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commerceSyncId|string(guid)|false|none|Unique identifier for the sync in Codat.|
|companyId|string(guid)|false|none|Unique identifier for your SMB in Codat.|
|dataConnections|[[Connection](#schemaconnection)]|false|none|Array of containing objects data connection information for the company.|
|dataPushed|boolean|false|none|Boolean indicator for data being pushed during a sync operation.|
|errorMessage|string \| null|false|none|Friendly error message for the sync operation.|
|syncDateRangeUtc|[DateRange](#schemadaterange)|false|none|none|
|syncExceptionMessage|string \| null|false|none|Exception message for the sync operation.|
|syncStatus|string \| null|false|none|Status of the sync of the company data. This is linked to status code.|
|syncStatusCode|integer(int32)|false|none|Numerical status code sync of the company data.|
|syncUtc|string|false|none|UTC DateTime for the Sync.|

<h2 id="tocS_SyncToLatestArgs">SyncToLatestArgs</h2>
<!-- backwards compatibility -->
<a id="schemasynctolatestargs"></a>
<a id="schema_SyncToLatestArgs"></a>
<a id="tocSsynctolatestargs"></a>
<a id="tocssynctolatestargs"></a>

```json
{
  "syncTo": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|syncTo|string|false|none|The DateTime, upto which Sync will run up to starting from the previous successful sync|

<h2 id="tocS_TaxRateAmount">TaxRateAmount</h2>
<!-- backwards compatibility -->
<a id="schemataxrateamount"></a>
<a id="schema_TaxRateAmount"></a>
<a id="tocStaxrateamount"></a>
<a id="tocstaxrateamount"></a>

```json
{
  "selectedTaxRateId": "string",
  "taxRateOptions": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedTaxRateId|string \| null|false|none|Selected tax rate id from the list of tax rates on the accounting software.|
|taxRateOptions|[[Option](#schemaoption)]|false|none|Array of tax rate options object.|

<h2 id="tocS_TaxRateMapping">TaxRateMapping</h2>
<!-- backwards compatibility -->
<a id="schemataxratemapping"></a>
<a id="schema_TaxRateMapping"></a>
<a id="tocStaxratemapping"></a>
<a id="tocstaxratemapping"></a>

```json
{
  "selectedAccountingTaxRateId": "string",
  "selectedCommerceTaxRateIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selectedAccountingTaxRateId|string \| null|false|none|Selected tax rate id from the list of tax rates on the accounting software.|
|selectedCommerceTaxRateIds|[string]|false|none|Selected tax component id from the list of tax components on the commerce software.|

<h2 id="tocS_UpdateConnection">UpdateConnection</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnection"></a>
<a id="schema_UpdateConnection"></a>
<a id="tocSupdateconnection"></a>
<a id="tocsupdateconnection"></a>

```json
{
  "status": "Linked"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string \| null|false|none|The current authorization status of the data connection.|

<h2 id="tocS_VisibleAccounts">VisibleAccounts</h2>
<!-- backwards compatibility -->
<a id="schemavisibleaccounts"></a>
<a id="schema_VisibleAccounts"></a>
<a id="tocSvisibleaccounts"></a>
<a id="tocsvisibleaccounts"></a>

```json
{
  "visibleAccounts": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|visibleAccounts|[string]|false|none|Visible accounts on sync flow.|
