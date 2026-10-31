<h1 id="up-api">Up API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Up API gives you programmatic access to your balances and
transaction data. You can request past transactions or set up
webhooks to receive real-time events when new transactions hit your
account. It’s new, it’s exciting and it’s just the beginning.

Base URLs:

* <a href="https://api.up.com.au/api/v1">https://api.up.com.au/api/v1</a>

Web: <a href="https://github.com/up-banking/api">API Specification and Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="up-api-accounts">Accounts</h1>

Accounts represent the underlying store used to track balances
and the transactions that have occurred to modify those balances
over time. Up currently has two types of account: `SAVER`—used to
earn interest and to hit savings goals, and `TRANSACTIONAL`—used
for everyday spending.


## List accounts

> Code samples

```bash
curl https://example.com/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

Retrieve a paginated list of all accounts for the currently
authenticated user. The returned list is paginated and can be scrolled
by following the `prev` and `next` links where present.


<h3 id="list-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[size]|query|integer|false|The number of records to return in each page.<br>|
|filter[accountType]|query|[AccountTypeEnum](#schemaaccounttypeenum)|false|The type of account for which to return records. This<br>can be used to filter Savers from spending accounts.<br>|
|filter[ownershipType]|query|[OwnershipTypeEnum](#schemaownershiptypeenum)|false|The account ownership structure for which to return<br>records. This can be used to filter 2Up accounts from Up<br>accounts.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter[accountType]|SAVER|
|filter[accountType]|TRANSACTIONAL|
|filter[ownershipType]|INDIVIDUAL|
|filter[ownershipType]|JOINT|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "accountType": {},
        "balance": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "displayName": "string",
        "ownershipType": {}
      },
      "id": "string",
      "links": {
        "self": "string"
      },
      "relationships": {
        "transactions": {
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

<h3 id="list-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListAccountsResponse](#schemalistaccountsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Retrieve account

> Code samples

```bash
curl https://example.com/accounts/92b41408-6b7b-4fca-982b-3fb1fdd77220 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{id}`

Retrieve a specific account by providing its unique identifier.


<h3 id="retrieve-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the account.<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "accountType": {},
      "balance": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "displayName": "string",
      "ownershipType": {}
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "transactions": {
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

<h3 id="retrieve-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetAccountResponse](#schemagetaccountresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="up-api-categories">Categories</h1>

Categories enable understanding where your money goes by driving
powerful insights in Up. All categories in Up are pre-defined
and are automatically assigned to new purchases in most cases. A
parent-child relationship is used to represent categories,
however parent categories cannot be directly assigned to
transactions.


## List categories

> Code samples

```bash
curl https://example.com/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /categories`

Retrieve a list of all categories and their ancestry. The returned list
is not paginated.


<h3 id="list-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter[parent]|query|string|false|The unique identifier of a parent category for which to<br>return only its children. Providing an invalid category<br>identifier results in a `404` response.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "name": "string"
      },
      "id": "string",
      "links": {
        "self": "string"
      },
      "relationships": {
        "children": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ],
          "links": {
            "related": "string"
          }
        },
        "parent": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ]
}
```

<h3 id="list-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListCategoriesResponse](#schemalistcategoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Retrieve category

> Code samples

```bash
curl https://example.com/categories/restaurants-and-cafes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /categories/{id}`

Retrieve a specific category by providing its unique identifier.


<h3 id="retrieve-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the category.<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "name": "string"
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "children": {
        "data": [
          {
            "id": "string",
            "type": "string"
          }
        ],
        "links": {
          "related": "string"
        }
      },
      "parent": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

<h3 id="retrieve-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetCategoryResponse](#schemagetcategoryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Categorize transaction

> Code samples

```bash
curl https://example.com/transactions/a572c7c3-b637-433c-a4ce-c0be5dcb0a5a/relationships/category \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "id": "string",
      "type": "string"
    }
  }'
```

`PATCH /transactions/{transactionId}/relationships/category`

Updates the category associated with a transaction. Only transactions
for which `isCategorizable` is set to true support this operation. The
`id` is taken from the list exposed on `/categories` and cannot be one of
the top-level (parent) categories. To de-categorize a transaction, set
the entire `data` key to `null`. An HTTP `204` is returned on success.
The associated category, along with its request URL is also exposed via
the `category` relationship on the transaction resource returned from
`/transactions/{id}`.


> Body parameter

```json
{
  "data": {
    "id": "string",
    "type": "string"
  }
}
```

<h3 id="categorize-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|path|string|true|The unique identifier for the transaction.<br>|
|body|body|[UpdateTransactionCategoryRequest](#schemaupdatetransactioncategoryrequest)|false|none|
|» data|body|object \| null|true|The category to set on the transaction. Set this entire key to `null`<br>de-categorize a transaction.<br>|
|» » id|body|string|true|The unique identifier of the category, as returned by the `/categories`<br>endpoint.<br>|
|» » type|body|string|true|The type of this resource: `categories`|

<h3 id="categorize-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="up-api-tags">Tags</h1>

Tags are custom labels that can be associated with transactions
on Up. Within the Up application, tags provide additional insight
into spending. For example, you could have a "Take Away" tag that
you apply to purchases from food delivery services. The Up API
allows you to manage the tags associated with transactions. Each
transaction may have up to 6 tags.

Tags are identified by their labels, which are unique strings,
so the tag "Holiday" has also the `id` `"Holiday"`.


## List tags

> Code samples

```bash
curl https://example.com/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tags`

Retrieve a list of all tags currently in use. The returned list is
[paginated](#pagination) and can be scrolled by following the `next`
and `prev` links where present. Results are ordered lexicographically.
The `transactions` relationship for each tag exposes a link
to get the transactions with the given tag.


<h3 id="list-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[size]|query|integer|false|The number of records to return in each page.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "relationships": {
        "transactions": {
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

<h3 id="list-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListTagsResponse](#schemalisttagsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Add tags to transaction

> Code samples

```bash
curl https://example.com/transactions/acde4631-db56-49a6-aea3-4e2311ef1d6a/relationships/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": [
      {
        "id": "string",
        "type": "string"
      }
    ]
  }'
```

`POST /transactions/{transactionId}/relationships/tags`

Associates one or more tags with a specific transaction. No more than 6
tags may be present on any single transaction. Duplicate tags are
silently ignored. An HTTP `204` is returned on success. The associated
tags, along with this request URL, are also exposed via the `tags`
relationship on the transaction resource returned from
`/transactions/{id}`.


> Body parameter

```json
{
  "data": [
    {
      "id": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="add-tags-to-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|path|string|true|The unique identifier for the transaction.<br>|
|body|body|[UpdateTransactionTagsRequest](#schemaupdatetransactiontagsrequest)|false|none|
|» data|body|[[TagInputResourceIdentifier](#schemataginputresourceidentifier)]|true|The tags to add to or remove from the transaction.<br>|

<h3 id="add-tags-to-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Remove tags from transaction

> Code samples

```bash
curl https://example.com/transactions/c3feb4ba-829c-4482-b882-1b9bd23da82d/relationships/tags \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": [
      {
        "id": "string",
        "type": "string"
      }
    ]
  }'
```

`DELETE /transactions/{transactionId}/relationships/tags`

Disassociates one or more tags from a specific transaction. Tags that are
not associated are silently ignored. An HTTP `204` is returned on
success. The associated tags, along with this request URL, are also
exposed via the `tags` relationship on the transaction resource returned
from `/transactions/{id}`.


> Body parameter

```json
{
  "data": [
    {
      "id": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="remove-tags-from-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|path|string|true|The unique identifier for the transaction.<br>|
|body|body|[UpdateTransactionTagsRequest](#schemaupdatetransactiontagsrequest)|false|none|
|» data|body|[[TagInputResourceIdentifier](#schemataginputresourceidentifier)]|true|The tags to add to or remove from the transaction.<br>|

<h3 id="remove-tags-from-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="up-api-transactions">Transactions</h1>

Transactions represent the movement of money into and out of an
account. They have many characteristics that vary depending on
the kind of transaction. Transactions may be temporarily `HELD`
(pending) or `SETTLED`, typically depending on which payment
method was used at the point of sale.


## List transactions by account

> Code samples

```bash
curl https://example.com/accounts/b5544658-4bbd-4eb1-8f63-a9909e0f564b/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/transactions`

Retrieve a list of all transactions for a specific account. The returned
list is [paginated](#pagination) and can be scrolled by following the
`next` and `prev` links where present. To narrow the results to a
specific date range pass one or both of `filter[since]` and
`filter[until]` in the query string. These filter parameters
**should not** be used for pagination. Results are ordered newest first
to oldest last.


<h3 id="list-transactions-by-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The unique identifier for the account.<br>|
|page[size]|query|integer|false|The number of records to return in each page.<br>|
|filter[status]|query|[TransactionStatusEnum](#schematransactionstatusenum)|false|The transaction status for which to return records. This<br>can be used to filter `HELD` transactions from those<br>that are `SETTLED`.<br>|
|filter[since]|query|string(date-time)|false|The start date-time from which to return records,<br>formatted according to rfc-3339. Not to be used for<br>pagination purposes.<br>|
|filter[until]|query|string(date-time)|false|The end date-time up to which to return records,<br>formatted according to rfc-3339. Not to be used for<br>pagination purposes.<br>|
|filter[category]|query|string|false|The category identifier for which to filter transactions.<br>Both parent and child categories can be filtered through<br>this parameter. Providing an invalid category identifier<br>results in a `404` response.<br>|
|filter[tag]|query|string|false|A transaction tag to filter for which to return records.<br>If the tag does not exist, zero records are returned and<br>a success response is given.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter[status]|HELD|
|filter[status]|SETTLED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "amount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "cashback": {
          "amount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          },
          "description": "string"
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "foreignAmount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "holdInfo": {
          "amount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          },
          "foreignAmount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          }
        },
        "isCategorizable": true,
        "message": "string",
        "rawText": "string",
        "roundUp": {
          "amount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          },
          "boostPortion": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          }
        },
        "settledAt": "1970-01-01T00:00:00Z",
        "status": {}
      },
      "id": "string",
      "links": {
        "self": "string"
      },
      "relationships": {
        "account": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        },
        "category": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string",
            "self": "string"
          }
        },
        "parentCategory": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        },
        "tags": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ],
          "links": {
            "self": "string"
          }
        },
        "transferAccount": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

<h3 id="list-transactions-by-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListTransactionsResponse](#schemalisttransactionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## List transactions

> Code samples

```bash
curl https://example.com/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transactions`

Retrieve a list of all transactions across all accounts for the currently
authenticated user. The returned list is [paginated](#pagination) and can
be scrolled by following the `next` and `prev` links where present. To
narrow the results to a specific date range pass one or both of
`filter[since]` and `filter[until]` in the query string. These filter
parameters **should not** be used for pagination. Results are ordered
newest first to oldest last.


<h3 id="list-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[size]|query|integer|false|The number of records to return in each page.<br>|
|filter[status]|query|[TransactionStatusEnum](#schematransactionstatusenum)|false|The transaction status for which to return records. This<br>can be used to filter `HELD` transactions from those<br>that are `SETTLED`.<br>|
|filter[since]|query|string(date-time)|false|The start date-time from which to return records,<br>formatted according to rfc-3339. Not to be used for<br>pagination purposes.<br>|
|filter[until]|query|string(date-time)|false|The end date-time up to which to return records,<br>formatted according to rfc-3339. Not to be used for<br>pagination purposes.<br>|
|filter[category]|query|string|false|The category identifier for which to filter transactions.<br>Both parent and child categories can be filtered through<br>this parameter. Providing an invalid category identifier<br>results in a `404` response.<br>|
|filter[tag]|query|string|false|A transaction tag to filter for which to return records.<br>If the tag does not exist, zero records are returned and<br>a success response is given.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter[status]|HELD|
|filter[status]|SETTLED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "amount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "cashback": {
          "amount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          },
          "description": "string"
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "foreignAmount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "holdInfo": {
          "amount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          },
          "foreignAmount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          }
        },
        "isCategorizable": true,
        "message": "string",
        "rawText": "string",
        "roundUp": {
          "amount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          },
          "boostPortion": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          }
        },
        "settledAt": "1970-01-01T00:00:00Z",
        "status": {}
      },
      "id": "string",
      "links": {
        "self": "string"
      },
      "relationships": {
        "account": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        },
        "category": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string",
            "self": "string"
          }
        },
        "parentCategory": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        },
        "tags": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ],
          "links": {
            "self": "string"
          }
        },
        "transferAccount": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

<h3 id="list-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListTransactionsResponse](#schemalisttransactionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Retrieve transaction

> Code samples

```bash
curl https://example.com/transactions/7a9d19f9-106c-4e29-8591-52fc5d8f09c5 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transactions/{id}`

Retrieve a specific transaction by providing its unique identifier.


<h3 id="retrieve-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the transaction.<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "amount": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      },
      "cashback": {
        "amount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "description": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "foreignAmount": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      },
      "holdInfo": {
        "amount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "foreignAmount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        }
      },
      "isCategorizable": true,
      "message": "string",
      "rawText": "string",
      "roundUp": {
        "amount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "boostPortion": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        }
      },
      "settledAt": "1970-01-01T00:00:00Z",
      "status": {}
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "account": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      },
      "category": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string",
          "self": "string"
        }
      },
      "parentCategory": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      },
      "tags": {
        "data": [
          {
            "id": "string",
            "type": "string"
          }
        ],
        "links": {
          "self": "string"
        }
      },
      "transferAccount": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

<h3 id="retrieve-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetTransactionResponse](#schemagettransactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="up-api-utility-endpoints">Utility endpoints</h1>

Some endpoints exist not to expose data, but to test the API
itself. Currently there is only one endpoint in this group: ping!


## Ping

> Code samples

```bash
curl https://example.com/util/ping \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /util/ping`

Make a basic ping request to the API. This is useful to verify that
authentication is functioning correctly. On authentication success an
HTTP `200` status is returned. On failure an HTTP `401` error response
is returned.


> Example responses

> 200 Response

```json
{
  "meta": {
    "id": "string",
    "statusEmoji": "string"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "detail": "string",
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PingResponse](#schemapingresponse)|
|401|Unauthorized|Not Authorized|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

<h1 id="up-api-webhooks">Webhooks</h1>

Webhooks provide a mechanism for a configured URL to receive
events when transaction activity occurs on Up. You can think of
webhooks as being like push notifications for your server-side
application.


## List webhooks

> Code samples

```bash
curl https://example.com/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks`

Retrieve a list of configured webhooks. The returned list is
[paginated](#pagination) and can be scrolled by following the `next`
and `prev` links where present. Results are ordered oldest first to
newest last.


<h3 id="list-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[size]|query|integer|false|The number of records to return in each page.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "secretKey": "string",
        "url": "string"
      },
      "id": "string",
      "links": {
        "self": "string"
      },
      "relationships": {
        "logs": {
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

<h3 id="list-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListWebhooksResponse](#schemalistwebhooksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Create webhook

> Code samples

```bash
curl https://example.com/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "attributes": {
        "description": "string",
        "url": "http://example.com"
      }
    }
  }'
```

`POST /webhooks`

Create a new webhook with a given URL. The URL will receive webhook
events as JSON-encoded `POST` requests. The URL must respond with a HTTP
`200` status on success.

There is currently a limit of 10 webhooks at any given time. Once this
limit is reached, existing webhooks will need to be deleted before new
webhooks can be created.

Event delivery is retried with exponential backoff if the URL is
unreachable or it does not respond with a `200` status. The response
includes a `secretKey` attribute, which is used to sign requests sent to
the webhook URL. It will not be returned from any other endpoints within
the Up API. If the `secretKey` is lost, simply create a new webhook with
the same URL, capture its `secretKey` and then delete the original
webhook. See [Handling webhook events](#callback_post_webhookURL) for
details on how to process webhook events.

It is probably a good idea to test the webhook by
[sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
it.


> Body parameter

```json
{
  "data": {
    "attributes": {
      "description": "string",
      "url": "http://example.com"
    }
  }
}
```

<h3 id="create-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWebhookRequest](#schemacreatewebhookrequest)|false|none|
|» data|body|object|true|The webhook resource to create.<br>|
|» » attributes|body|object|true|none|
|» » » description|body|string \| null|false|An optional description for this webhook, up to 64 characters in<br>length.<br>|
|» » » url|body|string(uri)|true|The URL that this webhook should post events to. This must be a valid<br>HTTP or HTTPS URL that does not exceed 300 characters in length.<br>|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "secretKey": "string",
      "url": "string"
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "logs": {
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

<h3 id="create-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CreateWebhookResponse](#schemacreatewebhookresponse)|

<h3 id="create-webhook-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|Event|{webhookURL}|POST|Handling webhook events|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Retrieve webhook

> Code samples

```bash
curl https://example.com/webhooks/c8283a72-24b0-4fd8-9b13-fccccab371e5 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{id}`

Retrieve a specific webhook by providing its unique identifier.


<h3 id="retrieve-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the webhook.<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "secretKey": "string",
      "url": "string"
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "logs": {
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

<h3 id="retrieve-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetWebhookResponse](#schemagetwebhookresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Delete webhook

> Code samples

```bash
curl https://example.com/webhooks/a940825b-80b6-4798-b378-c6284259b4c5 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{id}`

Delete a specific webhook by providing its unique identifier. Once
deleted, webhook events will no longer be sent to the configured URL.


<h3 id="delete-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the webhook.<br>|

<h3 id="delete-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## List webhook logs

> Code samples

```bash
curl https://example.com/webhooks/7104f5df-4993-495f-9d29-2b4d062c03a9/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{webhookId}/logs`

Retrieve a list of delivery logs for a webhook by providing its unique
identifier. This is useful for analysis and debugging purposes. The
returned list is [paginated](#pagination) and can be scrolled by
following the `next` and `prev` links where present. Results are ordered
newest first to oldest last. Logs may be automatically purged after a
period of time.


<h3 id="list-webhook-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|The unique identifier for the webhook.<br>|
|page[size]|query|integer|false|The number of records to return in each page.<br>|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "createdAt": "1970-01-01T00:00:00Z",
        "deliveryStatus": {},
        "request": {
          "body": "string"
        },
        "response": {
          "body": "string",
          "statusCode": 0
        }
      },
      "id": "string",
      "relationships": {
        "webhookEvent": {
          "data": {
            "id": "string",
            "type": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

<h3 id="list-webhook-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWebhookDeliveryLogsResponse](#schemalistwebhookdeliverylogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

## Ping webhook

> Code samples

```bash
curl https://example.com/webhooks/830e127d-fb89-4400-92bb-f3f48289dcba/ping \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/{webhookId}/ping`

Send a `PING` event to a webhook by providing its unique identifier.
This is useful for testing and debugging purposes. The event is delivered
asynchronously and its data is returned in the response to this request.


<h3 id="ping-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|The unique identifier for the webhook.<br>|

> Example responses

> 201 Response

```json
{
  "data": {
    "attributes": {
      "createdAt": "1970-01-01T00:00:00Z",
      "eventType": {}
    },
    "id": "string",
    "relationships": {
      "transaction": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      },
      "webhook": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

<h3 id="ping-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|[WebhookEventCallback](#schemawebhookeventcallback)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth
</aside>

# Schemas

<h2 id="tocS_AccountResource">AccountResource</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresource"></a>
<a id="schema_AccountResource"></a>
<a id="tocSaccountresource"></a>
<a id="tocsaccountresource"></a>

```json
{
  "attributes": {
    "accountType": {},
    "balance": {
      "currencyCode": "string",
      "value": "string",
      "valueInBaseUnits": 0
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "displayName": "string",
    "ownershipType": {}
  },
  "id": "string",
  "links": {
    "self": "string"
  },
  "relationships": {
    "transactions": {
      "links": {
        "related": "string"
      }
    }
  },
  "type": "string"
}
```

Provides information about an Up bank account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|
|id|string|true|none|The unique identifier for this account.<br>|
|links|object|false|none|none|
|relationships|object|true|none|none|
|type|string|true|none|The type of this resource: `accounts`|

<h2 id="tocS_AccountTypeEnum">AccountTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttypeenum"></a>
<a id="schema_AccountTypeEnum"></a>
<a id="tocSaccounttypeenum"></a>
<a id="tocsaccounttypeenum"></a>

```json
"SAVER"
```

Specifies the type of bank account. Currently returned values are `SAVER`
and `TRANSACTIONAL`.

<h2 id="tocS_CashbackObject">CashbackObject</h2>
<!-- backwards compatibility -->
<a id="schemacashbackobject"></a>
<a id="schema_CashbackObject"></a>
<a id="tocScashbackobject"></a>
<a id="tocscashbackobject"></a>

```json
{
  "amount": {
    "currencyCode": "string",
    "value": "string",
    "valueInBaseUnits": 0
  },
  "description": "string"
}
```

Provides information about an instant reimbursement in the form of
cashback.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|object|true|none|The total amount of cashback paid, represented as a positive value.<br>|
|description|string|true|none|A brief description of why this cashback was paid.<br>|

<h2 id="tocS_CategoryInputResourceIdentifier">CategoryInputResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemacategoryinputresourceidentifier"></a>
<a id="schema_CategoryInputResourceIdentifier"></a>
<a id="tocScategoryinputresourceidentifier"></a>
<a id="tocscategoryinputresourceidentifier"></a>

```json
{
  "id": "string",
  "type": "string"
}
```

Uniquely identifies a category in the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the category, as returned by the `/categories`<br>endpoint.<br>|
|type|string|true|none|The type of this resource: `categories`|

<h2 id="tocS_CategoryResource">CategoryResource</h2>
<!-- backwards compatibility -->
<a id="schemacategoryresource"></a>
<a id="schema_CategoryResource"></a>
<a id="tocScategoryresource"></a>
<a id="tocscategoryresource"></a>

```json
{
  "attributes": {
    "name": "string"
  },
  "id": "string",
  "links": {
    "self": "string"
  },
  "relationships": {
    "children": {
      "data": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "links": {
        "related": "string"
      }
    },
    "parent": {
      "data": {
        "id": "string",
        "type": "string"
      },
      "links": {
        "related": "string"
      }
    }
  },
  "type": "string"
}
```

Provides information about a category and its ancestry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|
|id|string|true|none|The unique identifier for this category. This is a human-readable but<br>URL-safe value.<br>|
|links|object|false|none|none|
|relationships|object|true|none|none|
|type|string|true|none|The type of this resource: `categories`|

<h2 id="tocS_CreateWebhookRequest">CreateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookrequest"></a>
<a id="schema_CreateWebhookRequest"></a>
<a id="tocScreatewebhookrequest"></a>
<a id="tocscreatewebhookrequest"></a>

```json
{
  "data": {
    "attributes": {
      "description": "string",
      "url": "http://example.com"
    }
  }
}
```

Request to create a new webhook. This currently only requires a `url`
attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The webhook resource to create.<br>|

<h2 id="tocS_CreateWebhookResponse">CreateWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookresponse"></a>
<a id="schema_CreateWebhookResponse"></a>
<a id="tocScreatewebhookresponse"></a>
<a id="tocscreatewebhookresponse"></a>

```json
{
  "data": {
    "attributes": {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "secretKey": "string",
      "url": "string"
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "logs": {
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

Successful response after creating a webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The webhook that was created.<br>|

<h2 id="tocS_ErrorObject">ErrorObject</h2>
<!-- backwards compatibility -->
<a id="schemaerrorobject"></a>
<a id="schema_ErrorObject"></a>
<a id="tocSerrorobject"></a>
<a id="tocserrorobject"></a>

```json
{
  "detail": "string",
  "source": {
    "parameter": "string",
    "pointer": "string"
  },
  "status": "string",
  "title": "string"
}
```

Provides information about an error processing a request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|A detailed description of this error. This should be considered unique<br>to individual occurrences of an error and subject to change. It is<br>useful for debugging purposes.<br>|
|source|object|false|none|If applicable, location in the request that this error relates to. This<br>may be a parameter in the query string, or a an attribute in the<br>request body.<br>|
|status|string|true|none|The HTTP status code associated with this error. This can also be<br>obtained from the response headers. The status indicates the broad type<br>of error according to HTTP semantics.<br>|
|title|string|true|none|A short description of this error. This should be stable across<br>multiple occurrences of this type of error and typically expands on the<br>reason for the status code.<br>|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "errors": [
    {
      "detail": "string",
      "source": {
        "parameter": "string",
        "pointer": "string"
      },
      "status": "string",
      "title": "string"
    }
  ]
}
```

Generic error response that returns one or more errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ErrorObject](#schemaerrorobject)]|true|none|The list of errors returned in this response.<br>|

<h2 id="tocS_GetAccountResponse">GetAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountresponse"></a>
<a id="schema_GetAccountResponse"></a>
<a id="tocSgetaccountresponse"></a>
<a id="tocsgetaccountresponse"></a>

```json
{
  "data": {
    "attributes": {
      "accountType": {},
      "balance": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "displayName": "string",
      "ownershipType": {}
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "transactions": {
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

Successful response to get a single account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The account returned in this response.<br>|

<h2 id="tocS_GetCategoryResponse">GetCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcategoryresponse"></a>
<a id="schema_GetCategoryResponse"></a>
<a id="tocSgetcategoryresponse"></a>
<a id="tocsgetcategoryresponse"></a>

```json
{
  "data": {
    "attributes": {
      "name": "string"
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "children": {
        "data": [
          {
            "id": "string",
            "type": "string"
          }
        ],
        "links": {
          "related": "string"
        }
      },
      "parent": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

Successful response to get a single category and its ancestry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The category returned in this response.<br>|

<h2 id="tocS_GetTransactionResponse">GetTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettransactionresponse"></a>
<a id="schema_GetTransactionResponse"></a>
<a id="tocSgettransactionresponse"></a>
<a id="tocsgettransactionresponse"></a>

```json
{
  "data": {
    "attributes": {
      "amount": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      },
      "cashback": {
        "amount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "description": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "foreignAmount": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      },
      "holdInfo": {
        "amount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "foreignAmount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        }
      },
      "isCategorizable": true,
      "message": "string",
      "rawText": "string",
      "roundUp": {
        "amount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "boostPortion": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        }
      },
      "settledAt": "1970-01-01T00:00:00Z",
      "status": {}
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "account": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      },
      "category": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string",
          "self": "string"
        }
      },
      "parentCategory": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      },
      "tags": {
        "data": [
          {
            "id": "string",
            "type": "string"
          }
        ],
        "links": {
          "self": "string"
        }
      },
      "transferAccount": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

Successful response to get a single transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The transaction returned in this response.<br>|

<h2 id="tocS_GetWebhookResponse">GetWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhookresponse"></a>
<a id="schema_GetWebhookResponse"></a>
<a id="tocSgetwebhookresponse"></a>
<a id="tocsgetwebhookresponse"></a>

```json
{
  "data": {
    "attributes": {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "secretKey": "string",
      "url": "string"
    },
    "id": "string",
    "links": {
      "self": "string"
    },
    "relationships": {
      "logs": {
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

Successful response to get a single webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The webhook returned in this response.<br>|

<h2 id="tocS_HoldInfoObject">HoldInfoObject</h2>
<!-- backwards compatibility -->
<a id="schemaholdinfoobject"></a>
<a id="schema_HoldInfoObject"></a>
<a id="tocSholdinfoobject"></a>
<a id="tocsholdinfoobject"></a>

```json
{
  "amount": {
    "currencyCode": "string",
    "value": "string",
    "valueInBaseUnits": 0
  },
  "foreignAmount": {
    "currencyCode": "string",
    "value": "string",
    "valueInBaseUnits": 0
  }
}
```

Provides information about the amount at which a transaction was in the
`HELD` status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|object|true|none|The amount of this transaction while in the `HELD` status, in<br>Australian dollars.<br>|
|foreignAmount|object \| null|true|none|The foreign currency amount of this transaction while in the `HELD`<br>status. This field will be `null` for domestic transactions. The amount<br>was converted to the AUD amount reflected in the `amount` field.<br>|

<h2 id="tocS_ListAccountsResponse">ListAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsresponse"></a>
<a id="schema_ListAccountsResponse"></a>
<a id="tocSlistaccountsresponse"></a>
<a id="tocslistaccountsresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "accountType": {},
        "balance": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "displayName": "string",
        "ownershipType": {}
      },
      "id": "string",
      "links": {
        "self": "string"
      },
      "relationships": {
        "transactions": {
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

Successful response to get all accounts. This returns a paginated list of
accounts, which can be scrolled by following the `prev` and `next` links
if present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AccountResource](#schemaaccountresource)]|true|none|The list of accounts returned in this response.<br>|
|links|object|true|none|none|

<h2 id="tocS_ListCategoriesResponse">ListCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcategoriesresponse"></a>
<a id="schema_ListCategoriesResponse"></a>
<a id="tocSlistcategoriesresponse"></a>
<a id="tocslistcategoriesresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "name": "string"
      },
      "id": "string",
      "links": {
        "self": "string"
      },
      "relationships": {
        "children": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ],
          "links": {
            "related": "string"
          }
        },
        "parent": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ]
}
```

Successful response to get all categories and their ancestry. The
returned list is not paginated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CategoryResource](#schemacategoryresource)]|true|none|The list of categories returned in this response.<br>|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "relationships": {
        "transactions": {
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

Successful response to get all tags. This returns a paginated list of
tags, which can be scrolled by following the `prev` and `next` links if
present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TagResource](#schematagresource)]|true|none|The list of tags returned in this response.<br>|
|links|object|true|none|none|

<h2 id="tocS_ListTransactionsResponse">ListTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttransactionsresponse"></a>
<a id="schema_ListTransactionsResponse"></a>
<a id="tocSlisttransactionsresponse"></a>
<a id="tocslisttransactionsresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "amount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "cashback": {
          "amount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          },
          "description": "string"
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "foreignAmount": {
          "currencyCode": "string",
          "value": "string",
          "valueInBaseUnits": 0
        },
        "holdInfo": {
          "amount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          },
          "foreignAmount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          }
        },
        "isCategorizable": true,
        "message": "string",
        "rawText": "string",
        "roundUp": {
          "amount": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          },
          "boostPortion": {
            "currencyCode": "string",
            "value": "string",
            "valueInBaseUnits": 0
          }
        },
        "settledAt": "1970-01-01T00:00:00Z",
        "status": {}
      },
      "id": "string",
      "links": {
        "self": "string"
      },
      "relationships": {
        "account": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        },
        "category": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string",
            "self": "string"
          }
        },
        "parentCategory": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        },
        "tags": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ],
          "links": {
            "self": "string"
          }
        },
        "transferAccount": {
          "data": {
            "id": "string",
            "type": "string"
          },
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

Successful response to get all transactions. This returns a paginated
list of transactions, which can be scrolled by following the `prev` and
`next` links if present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TransactionResource](#schematransactionresource)]|true|none|The list of transactions returned in this response.<br>|
|links|object|true|none|none|

<h2 id="tocS_ListWebhookDeliveryLogsResponse">ListWebhookDeliveryLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhookdeliverylogsresponse"></a>
<a id="schema_ListWebhookDeliveryLogsResponse"></a>
<a id="tocSlistwebhookdeliverylogsresponse"></a>
<a id="tocslistwebhookdeliverylogsresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "createdAt": "1970-01-01T00:00:00Z",
        "deliveryStatus": {},
        "request": {
          "body": "string"
        },
        "response": {
          "body": "string",
          "statusCode": 0
        }
      },
      "id": "string",
      "relationships": {
        "webhookEvent": {
          "data": {
            "id": "string",
            "type": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

Successful response to get all delivery logs for a webhook. This returns
a paginated list of delivery logs, which can be scrolled by following the
`next` and `prev` links if present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WebhookDeliveryLogResource](#schemawebhookdeliverylogresource)]|true|none|The list of delivery logs returned in this response.<br>|
|links|object|true|none|none|

<h2 id="tocS_ListWebhooksResponse">ListWebhooksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhooksresponse"></a>
<a id="schema_ListWebhooksResponse"></a>
<a id="tocSlistwebhooksresponse"></a>
<a id="tocslistwebhooksresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "createdAt": "1970-01-01T00:00:00Z",
        "description": "string",
        "secretKey": "string",
        "url": "string"
      },
      "id": "string",
      "links": {
        "self": "string"
      },
      "relationships": {
        "logs": {
          "links": {
            "related": "string"
          }
        }
      },
      "type": "string"
    }
  ],
  "links": {
    "next": "string",
    "prev": "string"
  }
}
```

Successful response to get all webhooks. This returns a paginated list of
webhooks, which can be scrolled by following the `prev` and `next` links
if present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WebhookResource](#schemawebhookresource)]|true|none|The list of webhooks returned in this response.<br>|
|links|object|true|none|none|

<h2 id="tocS_MoneyObject">MoneyObject</h2>
<!-- backwards compatibility -->
<a id="schemamoneyobject"></a>
<a id="schema_MoneyObject"></a>
<a id="tocSmoneyobject"></a>
<a id="tocsmoneyobject"></a>

```json
{
  "currencyCode": "string",
  "value": "string",
  "valueInBaseUnits": 0
}
```

Provides information about a value of money.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|The ISO 4217 currency code.<br>|
|value|string|true|none|The amount of money, formatted as a string in the relevant currency.<br>For example, for an Australian dollar value of $10.56, this field will<br>be `"10.56"`. The currency symbol is not included in the string.<br>|
|valueInBaseUnits|integer|true|none|The amount of money in the smallest denomination for the currency, as a<br>64-bit integer.  For example, for an Australian dollar value of $10.56,<br>this field will be `1056`.<br>|

<h2 id="tocS_OwnershipTypeEnum">OwnershipTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaownershiptypeenum"></a>
<a id="schema_OwnershipTypeEnum"></a>
<a id="tocSownershiptypeenum"></a>
<a id="tocsownershiptypeenum"></a>

```json
"INDIVIDUAL"
```

Specifies the structure under which a bank account is owned. Currently
returned values are `INDIVIDUAL` and `JOINT`.

<h2 id="tocS_PingResponse">PingResponse</h2>
<!-- backwards compatibility -->
<a id="schemapingresponse"></a>
<a id="schema_PingResponse"></a>
<a id="tocSpingresponse"></a>
<a id="tocspingresponse"></a>

```json
{
  "meta": {
    "id": "string",
    "statusEmoji": "string"
  }
}
```

Basic ping response to verify authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|

<h2 id="tocS_RoundUpObject">RoundUpObject</h2>
<!-- backwards compatibility -->
<a id="schemaroundupobject"></a>
<a id="schema_RoundUpObject"></a>
<a id="tocSroundupobject"></a>
<a id="tocsroundupobject"></a>

```json
{
  "amount": {
    "currencyCode": "string",
    "value": "string",
    "valueInBaseUnits": 0
  },
  "boostPortion": {
    "currencyCode": "string",
    "value": "string",
    "valueInBaseUnits": 0
  }
}
```

Provides information about how a Round Up was applied, such as whether or
not a boost was included in the Round Up.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|object|true|none|The total amount of this Round Up, including any boosts, represented as<br>a negative value.<br>|
|boostPortion|object \| null|true|none|The portion of the Round Up `amount` owing to boosted Round Ups,<br>represented as a negative value. If no boost was added to the Round Up<br>this field will be `null`.<br>|

<h2 id="tocS_TagInputResourceIdentifier">TagInputResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemataginputresourceidentifier"></a>
<a id="schema_TagInputResourceIdentifier"></a>
<a id="tocStaginputresourceidentifier"></a>
<a id="tocstaginputresourceidentifier"></a>

```json
{
  "id": "string",
  "type": "string"
}
```

Uniquely identifies a single tag in the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The label of the tag, which also acts as the tag’s unique identifier.<br>|
|type|string|true|none|The type of this resource: `tags`|

<h2 id="tocS_TagResource">TagResource</h2>
<!-- backwards compatibility -->
<a id="schematagresource"></a>
<a id="schema_TagResource"></a>
<a id="tocStagresource"></a>
<a id="tocstagresource"></a>

```json
{
  "id": "string",
  "relationships": {
    "transactions": {
      "links": {
        "related": "string"
      }
    }
  },
  "type": "string"
}
```

Provides information about a tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The label of the tag, which also acts as the tag’s unique identifier.<br>|
|relationships|object|true|none|none|
|type|string|true|none|The type of this resource: `tags`|

<h2 id="tocS_TransactionResource">TransactionResource</h2>
<!-- backwards compatibility -->
<a id="schematransactionresource"></a>
<a id="schema_TransactionResource"></a>
<a id="tocStransactionresource"></a>
<a id="tocstransactionresource"></a>

```json
{
  "attributes": {
    "amount": {
      "currencyCode": "string",
      "value": "string",
      "valueInBaseUnits": 0
    },
    "cashback": {
      "amount": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      },
      "description": "string"
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "foreignAmount": {
      "currencyCode": "string",
      "value": "string",
      "valueInBaseUnits": 0
    },
    "holdInfo": {
      "amount": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      },
      "foreignAmount": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      }
    },
    "isCategorizable": true,
    "message": "string",
    "rawText": "string",
    "roundUp": {
      "amount": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      },
      "boostPortion": {
        "currencyCode": "string",
        "value": "string",
        "valueInBaseUnits": 0
      }
    },
    "settledAt": "1970-01-01T00:00:00Z",
    "status": {}
  },
  "id": "string",
  "links": {
    "self": "string"
  },
  "relationships": {
    "account": {
      "data": {
        "id": "string",
        "type": "string"
      },
      "links": {
        "related": "string"
      }
    },
    "category": {
      "data": {
        "id": "string",
        "type": "string"
      },
      "links": {
        "related": "string",
        "self": "string"
      }
    },
    "parentCategory": {
      "data": {
        "id": "string",
        "type": "string"
      },
      "links": {
        "related": "string"
      }
    },
    "tags": {
      "data": [
        {
          "id": "string",
          "type": "string"
        }
      ],
      "links": {
        "self": "string"
      }
    },
    "transferAccount": {
      "data": {
        "id": "string",
        "type": "string"
      },
      "links": {
        "related": "string"
      }
    }
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|
|id|string|true|none|The unique identifier for this transaction.<br>|
|links|object|false|none|none|
|relationships|object|true|none|none|
|type|string|true|none|The type of this resource: `transactions`|

<h2 id="tocS_TransactionStatusEnum">TransactionStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schematransactionstatusenum"></a>
<a id="schema_TransactionStatusEnum"></a>
<a id="tocStransactionstatusenum"></a>
<a id="tocstransactionstatusenum"></a>

```json
"HELD"
```

Specifies which stage of processing a transaction is currently at.
Currently returned values are `HELD` and `SETTLED`. When a transaction is
held, its account’s `availableBalance` is affected. When a transaction is
settled, its account’s `currentBalance` is affected.

<h2 id="tocS_UpdateTransactionCategoryRequest">UpdateTransactionCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetransactioncategoryrequest"></a>
<a id="schema_UpdateTransactionCategoryRequest"></a>
<a id="tocSupdatetransactioncategoryrequest"></a>
<a id="tocsupdatetransactioncategoryrequest"></a>

```json
{
  "data": {
    "id": "string",
    "type": "string"
  }
}
```

Request to update the category associated with a transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object \| null|true|none|The category to set on the transaction. Set this entire key to `null`<br>de-categorize a transaction.<br>|

<h2 id="tocS_UpdateTransactionTagsRequest">UpdateTransactionTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetransactiontagsrequest"></a>
<a id="schema_UpdateTransactionTagsRequest"></a>
<a id="tocSupdatetransactiontagsrequest"></a>
<a id="tocsupdatetransactiontagsrequest"></a>

```json
{
  "data": [
    {
      "id": "string",
      "type": "string"
    }
  ]
}
```

Request to add or remove tags associated with a transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TagInputResourceIdentifier](#schemataginputresourceidentifier)]|true|none|The tags to add to or remove from the transaction.<br>|

<h2 id="tocS_WebhookDeliveryLogResource">WebhookDeliveryLogResource</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdeliverylogresource"></a>
<a id="schema_WebhookDeliveryLogResource"></a>
<a id="tocSwebhookdeliverylogresource"></a>
<a id="tocswebhookdeliverylogresource"></a>

```json
{
  "attributes": {
    "createdAt": "1970-01-01T00:00:00Z",
    "deliveryStatus": {},
    "request": {
      "body": "string"
    },
    "response": {
      "body": "string",
      "statusCode": 0
    }
  },
  "id": "string",
  "relationships": {
    "webhookEvent": {
      "data": {
        "id": "string",
        "type": "string"
      }
    }
  },
  "type": "string"
}
```

Provides historical webhook event delivery information for analysis and
debugging purposes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|
|id|string|true|none|The unique identifier for this log entry.<br>|
|relationships|object|true|none|none|
|type|string|true|none|The type of this resource: `webhook-delivery-logs`|

<h2 id="tocS_WebhookDeliveryStatusEnum">WebhookDeliveryStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdeliverystatusenum"></a>
<a id="schema_WebhookDeliveryStatusEnum"></a>
<a id="tocSwebhookdeliverystatusenum"></a>
<a id="tocswebhookdeliverystatusenum"></a>

```json
"DELIVERED"
```

Specifies the nature of the success or failure of a webhook delivery
attempt to the subscribed webhook URL. The currently returned values are
described below:

- **`DELIVERED`**: The event was delivered to the webhook URL
  successfully and a `200` response was received.
- **`UNDELIVERABLE`**: The webhook URL was not reachable, or timed out.
- **`BAD_RESPONSE_CODE`**: The event was delivered to the webhook URL
  but a non-`200` response was received.

<h2 id="tocS_WebhookEventCallback">WebhookEventCallback</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventcallback"></a>
<a id="schema_WebhookEventCallback"></a>
<a id="tocSwebhookeventcallback"></a>
<a id="tocswebhookeventcallback"></a>

```json
{
  "data": {
    "attributes": {
      "createdAt": "1970-01-01T00:00:00Z",
      "eventType": {}
    },
    "id": "string",
    "relationships": {
      "transaction": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      },
      "webhook": {
        "data": {
          "id": "string",
          "type": "string"
        },
        "links": {
          "related": "string"
        }
      }
    },
    "type": "string"
  }
}
```

Asynchronous callback request used for webhook event delivery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The webhook event data sent to the subscribed webhook.<br>|

<h2 id="tocS_WebhookEventResource">WebhookEventResource</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventresource"></a>
<a id="schema_WebhookEventResource"></a>
<a id="tocSwebhookeventresource"></a>
<a id="tocswebhookeventresource"></a>

```json
{
  "attributes": {
    "createdAt": "1970-01-01T00:00:00Z",
    "eventType": {}
  },
  "id": "string",
  "relationships": {
    "transaction": {
      "data": {
        "id": "string",
        "type": "string"
      },
      "links": {
        "related": "string"
      }
    },
    "webhook": {
      "data": {
        "id": "string",
        "type": "string"
      },
      "links": {
        "related": "string"
      }
    }
  },
  "type": "string"
}
```

Provides the event data used in asynchronous webhook event callbacks to
subscribed endpoints. Webhooks events have defined `eventType`s and may
optionally relate to other resources within the Up API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|
|id|string|true|none|The unique identifier for this event. This will remain constant across<br>delivery retries.<br>|
|relationships|object|true|none|none|
|type|string|true|none|The type of this resource: `webhook-events`|

<h2 id="tocS_WebhookEventTypeEnum">WebhookEventTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventtypeenum"></a>
<a id="schema_WebhookEventTypeEnum"></a>
<a id="tocSwebhookeventtypeenum"></a>
<a id="tocswebhookeventtypeenum"></a>

```json
"TRANSACTION_CREATED"
```

Specifies the type of a webhook event. This can be used to determine what
action to take in response to the event, such as which relationships to
expect.

<h2 id="tocS_WebhookInputResource">WebhookInputResource</h2>
<!-- backwards compatibility -->
<a id="schemawebhookinputresource"></a>
<a id="schema_WebhookInputResource"></a>
<a id="tocSwebhookinputresource"></a>
<a id="tocswebhookinputresource"></a>

```json
{
  "attributes": {
    "description": "string",
    "url": "http://example.com"
  }
}
```

Represents a webhook specified as request input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|

<h2 id="tocS_WebhookResource">WebhookResource</h2>
<!-- backwards compatibility -->
<a id="schemawebhookresource"></a>
<a id="schema_WebhookResource"></a>
<a id="tocSwebhookresource"></a>
<a id="tocswebhookresource"></a>

```json
{
  "attributes": {
    "createdAt": "1970-01-01T00:00:00Z",
    "description": "string",
    "secretKey": "string",
    "url": "string"
  },
  "id": "string",
  "links": {
    "self": "string"
  },
  "relationships": {
    "logs": {
      "links": {
        "related": "string"
      }
    }
  },
  "type": "string"
}
```

Provides information about a webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|true|none|none|
|id|string|true|none|The unique identifier for this webhook.<br>|
|links|object|false|none|none|
|relationships|object|true|none|none|
|type|string|true|none|The type of this resource: `webhooks`|
