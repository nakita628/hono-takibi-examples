import { createRoute, z } from '@hono/zod-openapi'

const AccountTypeEnumSchema = z
  .enum(['SAVER', 'TRANSACTIONAL'])
  .openapi({
    description:
      'Specifies the type of bank account. Currently returned values are `SAVER`\nand `TRANSACTIONAL`.\n',
  })
  .openapi('AccountTypeEnum')

const MoneyObjectSchema = z
  .object({
    currencyCode: z.string().openapi({ description: 'The ISO 4217 currency code.\n' }),
    value: z
      .string()
      .openapi({
        description:
          'The amount of money, formatted as a string in the relevant currency.\nFor example, for an Australian dollar value of $10.56, this field will\nbe `"10.56"`. The currency symbol is not included in the string.\n',
      }),
    valueInBaseUnits: z
      .int()
      .openapi({
        description:
          'The amount of money in the smallest denomination for the currency, as a\n64-bit integer.  For example, for an Australian dollar value of $10.56,\nthis field will be `1056`.\n',
      }),
  })
  .openapi({
    description: 'Provides information about a value of money.\n',
    required: ['currencyCode', 'value', 'valueInBaseUnits'],
  })
  .openapi('MoneyObject')

const OwnershipTypeEnumSchema = z
  .enum(['INDIVIDUAL', 'JOINT'])
  .openapi({
    description:
      'Specifies the structure under which a bank account is owned. Currently\nreturned values are `INDIVIDUAL` and `JOINT`.\n',
  })
  .openapi('OwnershipTypeEnum')

const AccountResourceSchema = z
  .object({
    attributes: z
      .object({
        accountType: AccountTypeEnumSchema.openapi({
          description: 'The bank account type of this account.\n',
        }),
        balance: MoneyObjectSchema.openapi({
          description:
            'The available balance of the account, taking into account any amounts\nthat are currently on hold.\n',
        }),
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date-time at which this account was first opened.\n' }),
        displayName: z
          .string()
          .openapi({
            description: 'The name associated with the account in the Up application.\n',
          }),
        ownershipType: OwnershipTypeEnumSchema.openapi({
          description: 'The ownership structure for this account.\n',
        }),
      })
      .openapi({
        required: ['displayName', 'accountType', 'ownershipType', 'balance', 'createdAt'],
      }),
    id: z.string().openapi({ description: 'The unique identifier for this account.\n' }),
    links: z
      .object({
        self: z
          .string()
          .openapi({ description: 'The canonical link to this resource within the API.\n' }),
      })
      .exactOptional()
      .openapi({ required: ['self'] }),
    relationships: z
      .object({
        transactions: z
          .object({
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .openapi({ required: [] }),
      })
      .openapi({ required: ['transactions'] }),
    type: z.string().openapi({ description: 'The type of this resource: `accounts`' }),
  })
  .openapi({
    description: 'Provides information about an Up bank account.\n',
    required: ['type', 'id', 'attributes', 'relationships'],
  })
  .openapi('AccountResource')

const CashbackObjectSchema = z
  .object({
    amount: MoneyObjectSchema.openapi({
      description: 'The total amount of cashback paid, represented as a positive value.\n',
    }),
    description: z
      .string()
      .openapi({ description: 'A brief description of why this cashback was paid.\n' }),
  })
  .openapi({
    description: 'Provides information about an instant reimbursement in the form of\ncashback.\n',
    required: ['description', 'amount'],
  })
  .openapi('CashbackObject')

const CategoryInputResourceIdentifierSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier of the category, as returned by the `/categories`\nendpoint.\n',
      }),
    type: z.string().openapi({ description: 'The type of this resource: `categories`' }),
  })
  .openapi({
    description: 'Uniquely identifies a category in the API.\n',
    required: ['type', 'id'],
  })
  .openapi('CategoryInputResourceIdentifier')

const CategoryResourceSchema = z
  .object({
    attributes: z
      .object({
        name: z
          .string()
          .openapi({ description: 'The name of this category as seen in the Up application.\n' }),
      })
      .openapi({ required: ['name'] }),
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier for this category. This is a human-readable but\nURL-safe value.\n',
      }),
    links: z
      .object({
        self: z
          .string()
          .openapi({ description: 'The canonical link to this resource within the API.\n' }),
      })
      .exactOptional()
      .openapi({ required: ['self'] }),
    relationships: z
      .object({
        children: z
          .object({
            data: z.array(
              z
                .object({
                  id: z
                    .string()
                    .openapi({
                      description: 'The unique identifier of the resource within its type.\n',
                    }),
                  type: z
                    .string()
                    .openapi({ description: 'The type of this resource: `categories`' }),
                })
                .openapi({ required: ['type', 'id'] }),
            ),
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .openapi({ required: ['data'] }),
        parent: z
          .object({
            data: z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the resource within its type.\n',
                  }),
                type: z
                  .string()
                  .openapi({ description: 'The type of this resource: `categories`' }),
              })
              .nullable()
              .openapi({ required: ['type', 'id'] }),
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .openapi({ required: ['data'] }),
      })
      .openapi({ required: ['parent', 'children'] }),
    type: z.string().openapi({ description: 'The type of this resource: `categories`' }),
  })
  .openapi({
    description: 'Provides information about a category and its ancestry.\n',
    required: ['type', 'id', 'attributes', 'relationships'],
  })
  .openapi('CategoryResource')

const WebhookInputResourceSchema = z
  .object({
    attributes: z
      .object({
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'An optional description for this webhook, up to 64 characters in\nlength.\n',
          }),
        url: z
          .url()
          .openapi({
            description:
              'The URL that this webhook should post events to. This must be a valid\nHTTP or HTTPS URL that does not exceed 300 characters in length.\n',
          }),
      })
      .openapi({ required: ['url'] }),
  })
  .openapi({
    description: 'Represents a webhook specified as request input.\n',
    required: ['attributes'],
  })
  .openapi('WebhookInputResource')

const CreateWebhookRequestSchema = z
  .object({
    data: WebhookInputResourceSchema.openapi({ description: 'The webhook resource to create.\n' }),
  })
  .openapi({
    description:
      'Request to create a new webhook. This currently only requires a `url`\nattribute.\n',
    required: ['data'],
  })
  .openapi('CreateWebhookRequest')

const WebhookResourceSchema = z
  .object({
    attributes: z
      .object({
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date-time at which this webhook was created.\n' }),
        description: z
          .string()
          .nullable()
          .openapi({
            description:
              'An optional description that was provided at the time the webhook was\ncreated.\n',
          }),
        secretKey: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A shared secret key used to sign all webhook events sent to the\nconfigured webhook URL. This field is returned only once, upon the\ninitial creation of the webhook. If lost, create a new webhook and\ndelete this webhook.\n\nThe webhook URL receives a request with a\n`X-Up-Authenticity-Signature` header, which is the SHA-256 HMAC of\nthe entire raw request body signed using this `secretKey`. It is\nadvised to compute and check this signature to verify the\nauthenticity of requests sent to the webhook URL. See\n[Handling webhook events](#callback_post_webhookURL) for full\ndetails.\n',
          }),
        url: z
          .string()
          .openapi({
            description: 'The URL that this webhook is configured to `POST` events to.\n',
          }),
      })
      .openapi({ required: ['url', 'description', 'createdAt'] }),
    id: z.string().openapi({ description: 'The unique identifier for this webhook.\n' }),
    links: z
      .object({
        self: z
          .string()
          .openapi({ description: 'The canonical link to this resource within the API.\n' }),
      })
      .exactOptional()
      .openapi({ required: ['self'] }),
    relationships: z
      .object({
        logs: z
          .object({
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .openapi({ required: [] }),
      })
      .openapi({ required: ['logs'] }),
    type: z.string().openapi({ description: 'The type of this resource: `webhooks`' }),
  })
  .openapi({
    description: 'Provides information about a webhook.\n',
    required: ['type', 'id', 'attributes', 'relationships'],
  })
  .openapi('WebhookResource')

const CreateWebhookResponseSchema = z
  .object({
    data: WebhookResourceSchema.openapi({ description: 'The webhook that was created.\n' }),
  })
  .openapi({ description: 'Successful response after creating a webhook.\n', required: ['data'] })
  .openapi('CreateWebhookResponse')

const ErrorObjectSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description:
          'A detailed description of this error. This should be considered unique\nto individual occurrences of an error and subject to change. It is\nuseful for debugging purposes.\n',
      }),
    source: z
      .object({
        parameter: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If this error relates to a query parameter, the name of the\nparameter.\n',
          }),
        pointer: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If this error relates to an attribute in the request body, a\nrfc-6901 JSON pointer to the attribute.\n',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'If applicable, location in the request that this error relates to. This\nmay be a parameter in the query string, or a an attribute in the\nrequest body.\n',
        required: [],
      }),
    status: z
      .string()
      .openapi({
        description:
          'The HTTP status code associated with this error. This can also be\nobtained from the response headers. The status indicates the broad type\nof error according to HTTP semantics.\n',
      }),
    title: z
      .string()
      .openapi({
        description:
          'A short description of this error. This should be stable across\nmultiple occurrences of this type of error and typically expands on the\nreason for the status code.\n',
      }),
  })
  .openapi({
    description: 'Provides information about an error processing a request.\n',
    required: ['status', 'title', 'detail'],
  })
  .openapi('ErrorObject')

const ErrorResponseSchema = z
  .object({
    errors: z
      .array(ErrorObjectSchema)
      .openapi({ description: 'The list of errors returned in this response.\n' }),
  })
  .openapi({
    description: 'Generic error response that returns one or more errors.\n',
    required: ['errors'],
  })
  .openapi('ErrorResponse')

const GetAccountResponseSchema = z
  .object({
    data: AccountResourceSchema.openapi({
      description: 'The account returned in this response.\n',
    }),
  })
  .openapi({ description: 'Successful response to get a single account.\n', required: ['data'] })
  .openapi('GetAccountResponse')

const GetCategoryResponseSchema = z
  .object({
    data: CategoryResourceSchema.openapi({
      description: 'The category returned in this response.\n',
    }),
  })
  .openapi({
    description: 'Successful response to get a single category and its ancestry.\n',
    required: ['data'],
  })
  .openapi('GetCategoryResponse')

const HoldInfoObjectSchema = z
  .object({
    amount: MoneyObjectSchema.openapi({
      description:
        'The amount of this transaction while in the `HELD` status, in\nAustralian dollars.\n',
    }),
    foreignAmount: MoneyObjectSchema.nullable().openapi({
      description:
        'The foreign currency amount of this transaction while in the `HELD`\nstatus. This field will be `null` for domestic transactions. The amount\nwas converted to the AUD amount reflected in the `amount` field.\n',
    }),
  })
  .openapi({
    description:
      'Provides information about the amount at which a transaction was in the\n`HELD` status.\n',
    required: ['amount', 'foreignAmount'],
  })
  .openapi('HoldInfoObject')

const RoundUpObjectSchema = z
  .object({
    amount: MoneyObjectSchema.openapi({
      description:
        'The total amount of this Round Up, including any boosts, represented as\na negative value.\n',
    }),
    boostPortion: MoneyObjectSchema.nullable().openapi({
      description:
        'The portion of the Round Up `amount` owing to boosted Round Ups,\nrepresented as a negative value. If no boost was added to the Round Up\nthis field will be `null`.\n',
    }),
  })
  .openapi({
    description:
      'Provides information about how a Round Up was applied, such as whether or\nnot a boost was included in the Round Up.\n',
    required: ['amount', 'boostPortion'],
  })
  .openapi('RoundUpObject')

const TransactionStatusEnumSchema = z
  .enum(['HELD', 'SETTLED'])
  .openapi({
    description:
      'Specifies which stage of processing a transaction is currently at.\nCurrently returned values are `HELD` and `SETTLED`. When a transaction is\nheld, its account’s `availableBalance` is affected. When a transaction is\nsettled, its account’s `currentBalance` is affected.\n',
  })
  .openapi('TransactionStatusEnum')

const TransactionResourceSchema = z
  .object({
    attributes: z
      .object({
        amount: MoneyObjectSchema.openapi({
          description:
            'The amount of this transaction in Australian dollars. For\ntransactions that were once `HELD` but are now `SETTLED`, refer to\nthe `holdInfo` field for the original `amount` the transaction was\n`HELD` at.\n',
        }),
        cashback: CashbackObjectSchema.nullable().openapi({
          description:
            'If all or part of this transaction was instantly reimbursed in the\nform of cashback, details of the reimbursement.\n',
        }),
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'The date-time at which this transaction was first encountered.\n',
          }),
        description: z
          .string()
          .openapi({
            description:
              'A short description for this transaction. Usually the merchant name\nfor purchases.\n',
          }),
        foreignAmount: MoneyObjectSchema.nullable().openapi({
          description:
            'The foreign currency amount of this transaction. This field will be\n`null` for domestic transactions. The amount was converted to the AUD\namount reflected in the `amount` of this transaction. Refer to the\n`holdInfo` field for the original `foreignAmount` the transaction was\n`HELD` at.\n',
        }),
        holdInfo: HoldInfoObjectSchema.nullable().openapi({
          description:
            'If this transaction is currently in the `HELD` status, or was ever in\nthe `HELD` status, the `amount` and `foreignAmount` of the\ntransaction while `HELD`.\n',
        }),
        isCategorizable: z
          .boolean()
          .openapi({
            description:
              'Boolean flag set to true on transactions that support the use of\ncategories.\n',
          }),
        message: z
          .string()
          .nullable()
          .openapi({
            description:
              'Attached message for this transaction, such as a payment message, or a\ntransfer note.\n',
          }),
        rawText: z
          .string()
          .nullable()
          .openapi({
            description:
              'The original, unprocessed text of the transaction. This is often not\na perfect indicator of the actual merchant, but it is useful for\nreconciliation purposes in some cases.\n',
          }),
        roundUp: RoundUpObjectSchema.nullable().openapi({
          description:
            'Details of how this transaction was rounded-up. If no Round Up was\napplied this field will be `null`.\n',
        }),
        settledAt: z.iso
          .datetime({ offset: true })
          .nullable()
          .openapi({
            description:
              'The date-time at which this transaction settled. This field will be\n`null` for transactions that are currently in the `HELD` status.\n',
          }),
        status: TransactionStatusEnumSchema.openapi({
          description:
            'The current processing status of this transaction, according to\nwhether or not this transaction has settled or is still held.\n',
        }),
      })
      .openapi({
        required: [
          'status',
          'rawText',
          'description',
          'message',
          'isCategorizable',
          'holdInfo',
          'roundUp',
          'cashback',
          'amount',
          'foreignAmount',
          'settledAt',
          'createdAt',
        ],
      }),
    id: z.string().openapi({ description: 'The unique identifier for this transaction.\n' }),
    links: z
      .object({
        self: z
          .string()
          .openapi({ description: 'The canonical link to this resource within the API.\n' }),
      })
      .exactOptional()
      .openapi({ required: ['self'] }),
    relationships: z
      .object({
        account: z
          .object({
            data: z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the resource within its type.\n',
                  }),
                type: z.string().openapi({ description: 'The type of this resource: `accounts`' }),
              })
              .openapi({ required: ['type', 'id'] }),
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .openapi({ required: ['data'] }),
        category: z
          .object({
            data: z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the resource within its type.\n',
                  }),
                type: z
                  .string()
                  .openapi({ description: 'The type of this resource: `categories`' }),
              })
              .nullable()
              .openapi({ required: ['type', 'id'] }),
            links: z
              .object({
                related: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
                self: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve or modify linkage between this resources and the\nrelated resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['self'] }),
          })
          .openapi({ required: ['data'] }),
        parentCategory: z
          .object({
            data: z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the resource within its type.\n',
                  }),
                type: z
                  .string()
                  .openapi({ description: 'The type of this resource: `categories`' }),
              })
              .nullable()
              .openapi({ required: ['type', 'id'] }),
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .openapi({ required: ['data'] }),
        tags: z
          .object({
            data: z.array(
              z
                .object({
                  id: z
                    .string()
                    .openapi({
                      description:
                        'The label of the tag, which also acts as the tag’s unique identifier.\n',
                    }),
                  type: z.string().openapi({ description: 'The type of this resource: `tags`' }),
                })
                .openapi({ required: ['type', 'id'] }),
            ),
            links: z
              .object({
                self: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve or modify linkage between this resources and the\nrelated resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['self'] }),
          })
          .openapi({ required: ['data'] }),
        transferAccount: z
          .object({
            data: z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the resource within its type.\n',
                  }),
                type: z.string().openapi({ description: 'The type of this resource: `accounts`' }),
              })
              .nullable()
              .openapi({ required: ['type', 'id'] }),
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .openapi({
            description:
              'If this transaction is a transfer between accounts, this relationship\nwill contain the account the transaction went to/came from. The\n`amount` field can be used to determine the direction of the transfer.\n',
            required: ['data'],
          }),
      })
      .openapi({ required: ['account', 'transferAccount', 'category', 'parentCategory', 'tags'] }),
    type: z.string().openapi({ description: 'The type of this resource: `transactions`' }),
  })
  .openapi({ required: ['type', 'id', 'attributes', 'relationships'] })
  .openapi('TransactionResource')

const GetTransactionResponseSchema = z
  .object({
    data: TransactionResourceSchema.openapi({
      description: 'The transaction returned in this response.\n',
    }),
  })
  .openapi({
    description: 'Successful response to get a single transaction.\n',
    required: ['data'],
  })
  .openapi('GetTransactionResponse')

const GetWebhookResponseSchema = z
  .object({
    data: WebhookResourceSchema.openapi({
      description: 'The webhook returned in this response.\n',
    }),
  })
  .openapi({ description: 'Successful response to get a single webhook.\n', required: ['data'] })
  .openapi('GetWebhookResponse')

const ListAccountsResponseSchema = z
  .object({
    data: z
      .array(AccountResourceSchema)
      .openapi({ description: 'The list of accounts returned in this response.\n' }),
    links: z
      .object({
        next: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the next page in the results. If this value is `null`\nthere is no next page.\n',
          }),
        prev: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the previous page in the results. If this value is `null`\nthere is no previous page.\n',
          }),
      })
      .openapi({ required: ['prev', 'next'] }),
  })
  .openapi({
    description:
      'Successful response to get all accounts. This returns a paginated list of\naccounts, which can be scrolled by following the `prev` and `next` links\nif present.\n',
    required: ['data', 'links'],
  })
  .openapi('ListAccountsResponse')

const ListCategoriesResponseSchema = z
  .object({
    data: z
      .array(CategoryResourceSchema)
      .openapi({ description: 'The list of categories returned in this response.\n' }),
  })
  .openapi({
    description:
      'Successful response to get all categories and their ancestry. The\nreturned list is not paginated.\n',
    required: ['data'],
  })
  .openapi('ListCategoriesResponse')

const TagResourceSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The label of the tag, which also acts as the tag’s unique identifier.\n',
      }),
    relationships: z
      .object({
        transactions: z
          .object({
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .openapi({ required: [] }),
      })
      .openapi({ required: ['transactions'] }),
    type: z.string().openapi({ description: 'The type of this resource: `tags`' }),
  })
  .openapi({
    description: 'Provides information about a tag.\n',
    required: ['type', 'id', 'relationships'],
  })
  .openapi('TagResource')

const ListTagsResponseSchema = z
  .object({
    data: z
      .array(TagResourceSchema)
      .openapi({ description: 'The list of tags returned in this response.\n' }),
    links: z
      .object({
        next: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the next page in the results. If this value is `null`\nthere is no next page.\n',
          }),
        prev: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the previous page in the results. If this value is `null`\nthere is no previous page.\n',
          }),
      })
      .openapi({ required: ['prev', 'next'] }),
  })
  .openapi({
    description:
      'Successful response to get all tags. This returns a paginated list of\ntags, which can be scrolled by following the `prev` and `next` links if\npresent.\n',
    required: ['data', 'links'],
  })
  .openapi('ListTagsResponse')

const ListTransactionsResponseSchema = z
  .object({
    data: z
      .array(TransactionResourceSchema)
      .openapi({ description: 'The list of transactions returned in this response.\n' }),
    links: z
      .object({
        next: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the next page in the results. If this value is `null`\nthere is no next page.\n',
          }),
        prev: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the previous page in the results. If this value is `null`\nthere is no previous page.\n',
          }),
      })
      .openapi({ required: ['prev', 'next'] }),
  })
  .openapi({
    description:
      'Successful response to get all transactions. This returns a paginated\nlist of transactions, which can be scrolled by following the `prev` and\n`next` links if present.\n',
    required: ['data', 'links'],
  })
  .openapi('ListTransactionsResponse')

const WebhookDeliveryStatusEnumSchema = z
  .enum(['DELIVERED', 'UNDELIVERABLE', 'BAD_RESPONSE_CODE'])
  .openapi({
    description:
      'Specifies the nature of the success or failure of a webhook delivery\nattempt to the subscribed webhook URL. The currently returned values are\ndescribed below:\n\n- **`DELIVERED`**: The event was delivered to the webhook URL\n  successfully and a `200` response was received.\n- **`UNDELIVERABLE`**: The webhook URL was not reachable, or timed out.\n- **`BAD_RESPONSE_CODE`**: The event was delivered to the webhook URL\n  but a non-`200` response was received.\n',
  })
  .openapi('WebhookDeliveryStatusEnum')

const WebhookDeliveryLogResourceSchema = z
  .object({
    attributes: z
      .object({
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date-time at which this log entry was created.\n' }),
        deliveryStatus: WebhookDeliveryStatusEnumSchema.openapi({
          description: 'The success or failure status of this delivery attempt.\n',
        }),
        request: z
          .object({
            body: z
              .string()
              .openapi({ description: 'The payload that was sent in the request body.\n' }),
          })
          .openapi({
            description: 'Information about the request that was sent to the webhook URL.\n',
            required: ['body'],
          }),
        response: z
          .object({
            body: z
              .string()
              .openapi({ description: 'The payload that was received in the response body.\n' }),
            statusCode: z
              .int()
              .openapi({ description: 'The HTTP status code received in the response.\n' }),
          })
          .nullable()
          .openapi({
            description: 'Information about the response that was received from the webhook URL.\n',
            required: ['statusCode', 'body'],
          }),
      })
      .openapi({ required: ['request', 'response', 'deliveryStatus', 'createdAt'] }),
    id: z.string().openapi({ description: 'The unique identifier for this log entry.\n' }),
    relationships: z
      .object({
        webhookEvent: z
          .object({
            data: z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the resource within its type.\n',
                  }),
                type: z
                  .string()
                  .openapi({ description: 'The type of this resource: `webhook-events`' }),
              })
              .openapi({ required: ['type', 'id'] }),
          })
          .openapi({ required: ['data'] }),
      })
      .openapi({ required: ['webhookEvent'] }),
    type: z.string().openapi({ description: 'The type of this resource: `webhook-delivery-logs`' }),
  })
  .openapi({
    description:
      'Provides historical webhook event delivery information for analysis and\ndebugging purposes.\n',
    required: ['type', 'id', 'attributes', 'relationships'],
  })
  .openapi('WebhookDeliveryLogResource')

const ListWebhookDeliveryLogsResponseSchema = z
  .object({
    data: z
      .array(WebhookDeliveryLogResourceSchema)
      .openapi({ description: 'The list of delivery logs returned in this response.\n' }),
    links: z
      .object({
        next: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the next page in the results. If this value is `null`\nthere is no next page.\n',
          }),
        prev: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the previous page in the results. If this value is `null`\nthere is no previous page.\n',
          }),
      })
      .openapi({ required: ['prev', 'next'] }),
  })
  .openapi({
    description:
      'Successful response to get all delivery logs for a webhook. This returns\na paginated list of delivery logs, which can be scrolled by following the\n`next` and `prev` links if present.\n',
    required: ['data', 'links'],
  })
  .openapi('ListWebhookDeliveryLogsResponse')

const ListWebhooksResponseSchema = z
  .object({
    data: z
      .array(WebhookResourceSchema)
      .openapi({ description: 'The list of webhooks returned in this response.\n' }),
    links: z
      .object({
        next: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the next page in the results. If this value is `null`\nthere is no next page.\n',
          }),
        prev: z
          .string()
          .nullable()
          .openapi({
            description:
              'The link to the previous page in the results. If this value is `null`\nthere is no previous page.\n',
          }),
      })
      .openapi({ required: ['prev', 'next'] }),
  })
  .openapi({
    description:
      'Successful response to get all webhooks. This returns a paginated list of\nwebhooks, which can be scrolled by following the `prev` and `next` links\nif present.\n',
    required: ['data', 'links'],
  })
  .openapi('ListWebhooksResponse')

const PingResponseSchema = z
  .object({
    meta: z
      .object({
        id: z
          .string()
          .openapi({ description: 'The unique identifier of the authenticated customer.\n' }),
        statusEmoji: z
          .string()
          .openapi({ description: 'A cute emoji that represents the response status.\n' }),
      })
      .openapi({ required: ['id', 'statusEmoji'] }),
  })
  .openapi({ description: 'Basic ping response to verify authentication.\n', required: ['meta'] })
  .openapi('PingResponse')

const TagInputResourceIdentifierSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The label of the tag, which also acts as the tag’s unique identifier.\n',
      }),
    type: z.string().openapi({ description: 'The type of this resource: `tags`' }),
  })
  .openapi({
    description: 'Uniquely identifies a single tag in the API.\n',
    required: ['type', 'id'],
  })
  .openapi('TagInputResourceIdentifier')

const UpdateTransactionCategoryRequestSchema = z
  .object({
    data: CategoryInputResourceIdentifierSchema.nullable().openapi({
      description:
        'The category to set on the transaction. Set this entire key to `null`\nde-categorize a transaction.\n',
    }),
  })
  .openapi({
    description: 'Request to update the category associated with a transaction.\n',
    required: ['data'],
  })
  .openapi('UpdateTransactionCategoryRequest')

const UpdateTransactionTagsRequestSchema = z
  .object({
    data: z
      .array(TagInputResourceIdentifierSchema)
      .openapi({ description: 'The tags to add to or remove from the transaction.\n' }),
  })
  .openapi({
    description: 'Request to add or remove tags associated with a transaction.\n',
    required: ['data'],
  })
  .openapi('UpdateTransactionTagsRequest')

const WebhookEventTypeEnumSchema = z
  .enum(['TRANSACTION_CREATED', 'TRANSACTION_SETTLED', 'TRANSACTION_DELETED', 'PING'])
  .openapi({
    description:
      'Specifies the type of a webhook event. This can be used to determine what\naction to take in response to the event, such as which relationships to\nexpect.\n',
  })
  .openapi('WebhookEventTypeEnum')

const WebhookEventResourceSchema = z
  .object({
    attributes: z
      .object({
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date-time at which this event was generated.\n' }),
        eventType: WebhookEventTypeEnumSchema.openapi({
          description:
            'The type of this event. This can be used to determine what action to\ntake in response to the event.\n',
        }),
      })
      .openapi({ required: ['eventType', 'createdAt'] }),
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier for this event. This will remain constant across\ndelivery retries.\n',
      }),
    relationships: z
      .object({
        transaction: z
          .object({
            data: z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the resource within its type.\n',
                  }),
                type: z
                  .string()
                  .openapi({ description: 'The type of this resource: `transactions`' }),
              })
              .openapi({ required: ['type', 'id'] }),
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .exactOptional()
          .openapi({ required: ['data'] }),
        webhook: z
          .object({
            data: z
              .object({
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the resource within its type.\n',
                  }),
                type: z.string().openapi({ description: 'The type of this resource: `webhooks`' }),
              })
              .openapi({ required: ['type', 'id'] }),
            links: z
              .object({
                related: z
                  .string()
                  .openapi({
                    description:
                      'The link to retrieve the related resource(s) in this relationship.\n',
                  }),
              })
              .exactOptional()
              .openapi({ required: ['related'] }),
          })
          .openapi({ required: ['data'] }),
      })
      .openapi({ required: ['webhook'] }),
    type: z.string().openapi({ description: 'The type of this resource: `webhook-events`' }),
  })
  .openapi({
    description:
      'Provides the event data used in asynchronous webhook event callbacks to\nsubscribed endpoints. Webhooks events have defined `eventType`s and may\noptionally relate to other resources within the Up API.\n',
    required: ['type', 'id', 'attributes', 'relationships'],
  })
  .openapi('WebhookEventResource')

const WebhookEventCallbackSchema = z
  .object({
    data: WebhookEventResourceSchema.openapi({
      description: 'The webhook event data sent to the subscribed webhook.\n',
    }),
  })
  .openapi({
    description: 'Asynchronous callback request used for webhook event delivery.\n',
    required: ['data'],
  })
  .openapi('WebhookEventCallback')

const BearerAuthSecurityScheme = { scheme: 'bearer', type: 'http' }

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'List accounts',
  description:
    'Retrieve a paginated list of all accounts for the currently\nauthenticated user. The returned list is paginated and can be scrolled\nby following the `prev` and `next` links where present.\n',
  request: {
    query: z.object({
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return in each page.\n',
            example: 30,
            in: 'query',
            name: 'page[size]',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      'filter[accountType]': AccountTypeEnumSchema.openapi({
        param: {
          description:
            'The type of account for which to return records. This\ncan be used to filter Savers from spending accounts.\n',
          example: 'SAVER',
          in: 'query',
          name: 'filter[accountType]',
          required: false,
          schema: { $ref: '#/components/schemas/AccountTypeEnum' },
        },
      }).exactOptional(),
      'filter[ownershipType]': OwnershipTypeEnumSchema.openapi({
        param: {
          description:
            'The account ownership structure for which to return\nrecords. This can be used to filter 2Up accounts from Up\naccounts.\n',
          example: 'INDIVIDUAL',
          in: 'query',
          name: 'filter[ownershipType]',
          required: false,
          schema: { $ref: '#/components/schemas/OwnershipTypeEnum' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListAccountsResponseSchema } },
    },
  },
})

export const getAccountsAccountIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/transactions',
  tags: ['Transactions'],
  summary: 'List transactions by account',
  description:
    'Retrieve a list of all transactions for a specific account. The returned\nlist is [paginated](#pagination) and can be scrolled by following the\n`next` and `prev` links where present. To narrow the results to a\nspecific date range pass one or both of `filter[since]` and\n`filter[until]` in the query string. These filter parameters\n**should not** be used for pagination. Results are ordered newest first\nto oldest last.\n',
  request: {
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the account.\n',
            example: 'b5544658-4bbd-4eb1-8f63-a9909e0f564b',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return in each page.\n',
            example: 30,
            in: 'query',
            name: 'page[size]',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      'filter[status]': TransactionStatusEnumSchema.openapi({
        param: {
          description:
            'The transaction status for which to return records. This\ncan be used to filter `HELD` transactions from those\nthat are `SETTLED`.\n',
          example: 'HELD',
          in: 'query',
          name: 'filter[status]',
          required: false,
          schema: { $ref: '#/components/schemas/TransactionStatusEnum' },
        },
      }).exactOptional(),
      'filter[since]': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The start date-time from which to return records,\nformatted according to rfc-3339. Not to be used for\npagination purposes.\n',
            example: '2020-01-01T01:02:03+10:00',
            in: 'query',
            name: 'filter[since]',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'filter[until]': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end date-time up to which to return records,\nformatted according to rfc-3339. Not to be used for\npagination purposes.\n',
            example: '2020-02-01T01:02:03+10:00',
            in: 'query',
            name: 'filter[until]',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'filter[category]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The category identifier for which to filter transactions.\nBoth parent and child categories can be filtered through\nthis parameter. Providing an invalid category identifier\nresults in a `404` response.\n',
            example: 'good-life',
            in: 'query',
            name: 'filter[category]',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'filter[tag]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A transaction tag to filter for which to return records.\nIf the tag does not exist, zero records are returned and\na success response is given.\n',
            example: 'Holiday',
            in: 'query',
            name: 'filter[tag]',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListTransactionsResponseSchema } },
    },
  },
})

export const getAccountsIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{id}',
  tags: ['Accounts'],
  summary: 'Retrieve account',
  description: 'Retrieve a specific account by providing its unique identifier.\n',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the account.\n',
            example: '92b41408-6b7b-4fca-982b-3fb1fdd77220',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetAccountResponseSchema } },
    },
  },
})

export const getCategoriesRoute = createRoute({
  method: 'get',
  path: '/categories',
  tags: ['Categories'],
  summary: 'List categories',
  description:
    'Retrieve a list of all categories and their ancestry. The returned list\nis not paginated.\n',
  request: {
    query: z.object({
      'filter[parent]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The unique identifier of a parent category for which to\nreturn only its children. Providing an invalid category\nidentifier results in a `404` response.\n',
            example: 'good-life',
            in: 'query',
            name: 'filter[parent]',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListCategoriesResponseSchema } },
    },
  },
})

export const getCategoriesIdRoute = createRoute({
  method: 'get',
  path: '/categories/{id}',
  tags: ['Categories'],
  summary: 'Retrieve category',
  description: 'Retrieve a specific category by providing its unique identifier.\n',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the category.\n',
            example: 'restaurants-and-cafes',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetCategoryResponseSchema } },
    },
  },
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'List tags',
  description:
    'Retrieve a list of all tags currently in use. The returned list is\n[paginated](#pagination) and can be scrolled by following the `next`\nand `prev` links where present. Results are ordered lexicographically.\nThe `transactions` relationship for each tag exposes a link\nto get the transactions with the given tag.\n',
  request: {
    query: z.object({
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return in each page.\n',
            example: 50,
            in: 'query',
            name: 'page[size]',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
  },
})

export const getTransactionsRoute = createRoute({
  method: 'get',
  path: '/transactions',
  tags: ['Transactions'],
  summary: 'List transactions',
  description:
    'Retrieve a list of all transactions across all accounts for the currently\nauthenticated user. The returned list is [paginated](#pagination) and can\nbe scrolled by following the `next` and `prev` links where present. To\nnarrow the results to a specific date range pass one or both of\n`filter[since]` and `filter[until]` in the query string. These filter\nparameters **should not** be used for pagination. Results are ordered\nnewest first to oldest last.\n',
  request: {
    query: z.object({
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return in each page.\n',
            example: 30,
            in: 'query',
            name: 'page[size]',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      'filter[status]': TransactionStatusEnumSchema.openapi({
        param: {
          description:
            'The transaction status for which to return records. This\ncan be used to filter `HELD` transactions from those\nthat are `SETTLED`.\n',
          example: 'HELD',
          in: 'query',
          name: 'filter[status]',
          required: false,
          schema: { $ref: '#/components/schemas/TransactionStatusEnum' },
        },
      }).exactOptional(),
      'filter[since]': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The start date-time from which to return records,\nformatted according to rfc-3339. Not to be used for\npagination purposes.\n',
            example: '2020-01-01T01:02:03+10:00',
            in: 'query',
            name: 'filter[since]',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'filter[until]': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end date-time up to which to return records,\nformatted according to rfc-3339. Not to be used for\npagination purposes.\n',
            example: '2020-02-01T01:02:03+10:00',
            in: 'query',
            name: 'filter[until]',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'filter[category]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The category identifier for which to filter transactions.\nBoth parent and child categories can be filtered through\nthis parameter. Providing an invalid category identifier\nresults in a `404` response.\n',
            example: 'good-life',
            in: 'query',
            name: 'filter[category]',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'filter[tag]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A transaction tag to filter for which to return records.\nIf the tag does not exist, zero records are returned and\na success response is given.\n',
            example: 'Holiday',
            in: 'query',
            name: 'filter[tag]',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListTransactionsResponseSchema } },
    },
  },
})

export const getTransactionsIdRoute = createRoute({
  method: 'get',
  path: '/transactions/{id}',
  tags: ['Transactions'],
  summary: 'Retrieve transaction',
  description: 'Retrieve a specific transaction by providing its unique identifier.\n',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the transaction.\n',
            example: '7a9d19f9-106c-4e29-8591-52fc5d8f09c5',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetTransactionResponseSchema } },
    },
  },
})

export const patchTransactionsTransactionIdRelationshipsCategoryRoute = createRoute({
  method: 'patch',
  path: '/transactions/{transactionId}/relationships/category',
  tags: ['Categories'],
  summary: 'Categorize transaction',
  description:
    'Updates the category associated with a transaction. Only transactions\nfor which `isCategorizable` is set to true support this operation. The\n`id` is taken from the list exposed on `/categories` and cannot be one of\nthe top-level (parent) categories. To de-categorize a transaction, set\nthe entire `data` key to `null`. An HTTP `204` is returned on success.\nThe associated category, along with its request URL is also exposed via\nthe `category` relationship on the transaction resource returned from\n`/transactions/{id}`.\n',
  request: {
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the transaction.\n',
            example: 'a572c7c3-b637-433c-a4ce-c0be5dcb0a5a',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTransactionCategoryRequestSchema } } },
  },
  responses: { 204: { description: 'Successful Response' } },
})

export const postTransactionsTransactionIdRelationshipsTagsRoute = createRoute({
  method: 'post',
  path: '/transactions/{transactionId}/relationships/tags',
  tags: ['Tags'],
  summary: 'Add tags to transaction',
  description:
    'Associates one or more tags with a specific transaction. No more than 6\ntags may be present on any single transaction. Duplicate tags are\nsilently ignored. An HTTP `204` is returned on success. The associated\ntags, along with this request URL, are also exposed via the `tags`\nrelationship on the transaction resource returned from\n`/transactions/{id}`.\n',
  request: {
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the transaction.\n',
            example: 'acde4631-db56-49a6-aea3-4e2311ef1d6a',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTransactionTagsRequestSchema } } },
  },
  responses: { 204: { description: 'Successful Response' } },
})

export const deleteTransactionsTransactionIdRelationshipsTagsRoute = createRoute({
  method: 'delete',
  path: '/transactions/{transactionId}/relationships/tags',
  tags: ['Tags'],
  summary: 'Remove tags from transaction',
  description:
    'Disassociates one or more tags from a specific transaction. Tags that are\nnot associated are silently ignored. An HTTP `204` is returned on\nsuccess. The associated tags, along with this request URL, are also\nexposed via the `tags` relationship on the transaction resource returned\nfrom `/transactions/{id}`.\n',
  request: {
    params: z.object({
      transactionId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the transaction.\n',
            example: 'c3feb4ba-829c-4482-b882-1b9bd23da82d',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTransactionTagsRequestSchema } } },
  },
  responses: { 204: { description: 'Successful Response' } },
})

export const getUtilPingRoute = createRoute({
  method: 'get',
  path: '/util/ping',
  tags: ['Utility endpoints'],
  summary: 'Ping',
  description:
    'Make a basic ping request to the API. This is useful to verify that\nauthentication is functioning correctly. On authentication success an\nHTTP `200` status is returned. On failure an HTTP `401` error response\nis returned.\n',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PingResponseSchema } },
    },
    401: {
      description: 'Not Authorized',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'List webhooks',
  description:
    'Retrieve a list of configured webhooks. The returned list is\n[paginated](#pagination) and can be scrolled by following the `next`\nand `prev` links where present. Results are ordered oldest first to\nnewest last.\n',
  request: {
    query: z.object({
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return in each page.\n',
            example: 30,
            in: 'query',
            name: 'page[size]',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListWebhooksResponseSchema } },
    },
  },
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Create webhook',
  description:
    'Create a new webhook with a given URL. The URL will receive webhook\nevents as JSON-encoded `POST` requests. The URL must respond with a HTTP\n`200` status on success.\n\nThere is currently a limit of 10 webhooks at any given time. Once this\nlimit is reached, existing webhooks will need to be deleted before new\nwebhooks can be created.\n\nEvent delivery is retried with exponential backoff if the URL is\nunreachable or it does not respond with a `200` status. The response\nincludes a `secretKey` attribute, which is used to sign requests sent to\nthe webhook URL. It will not be returned from any other endpoints within\nthe Up API. If the `secretKey` is lost, simply create a new webhook with\nthe same URL, capture its `secretKey` and then delete the original\nwebhook. See [Handling webhook events](#callback_post_webhookURL) for\ndetails on how to process webhook events.\n\nIt is probably a good idea to test the webhook by\n[sending it a `PING` event](#post_webhooks_webhookId_ping) after creating\nit.\n',
  request: { body: { content: { 'application/json': { schema: CreateWebhookRequestSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: CreateWebhookResponseSchema } },
    },
  },
  callbacks: {
    Event: {
      '{webhookURL}': {
        post: {
          summary: 'Handling webhook events',
          description:
            'Once you have created a webhook in the Up API, events are sent to the\nwebhook’s configured URL as JSON-encoded `POST` requests. The webhook\nURL must respond with a HTTP `200` status on success.\n\nIt is important that the URL responds in a timely manner. If the URL\ntakes too long to respond (currently 30s), the request will be timed\nout. For this reason it is strongly advised to avoid any heavy\nprocessing before a response has been returned from the URL. A common\nsolution to this problem is to use a message broker such as RabbitMQ\nto do the work asynchronously.\n\nEvent delivery is retried with exponential backoff in the case of any\nnon-`200` response status, if the URL is unreachable, or if the request\nis timed out.\n\nRefer to the `eventType` attribute in order to determine what course of\naction to take when handling the event. The following event types are\ncurrently sent:\n\n**`PING`**\n\nManually triggered by calls to the webhook `ping` endpoint. Used for\ntesting and debugging purposes.\n\n**`TRANSACTION_CREATED`**\n\nTriggered whenever a new transaction is created in Up. This event\nincludes a `transaction` relationship that provides the unique\nidentifier for the transaction and a link to the transaction within the\nUp API. This link should be used to retrieve the complete transaction\ndata.\n\n**`TRANSACTION_SETTLED`**\n\nTriggered whenever a transaction transitions from the `HELD` status to\nthe `SETTLED` status. This event includes a `transaction` relationship\nthat provides the unique identifier for the transaction and a link to\nthe transaction within the Up API. This link should be used to retrieve\nthe complete transaction data.\n\nDue to external factors in banking processes, on rare occasions this\nevent may not be triggered. Separate `TRANSACTION_DELETED` and\n`TRANSACTION_CREATED` events will be received in its place.\n\n**`TRANSACTION_DELETED`**\n\nTriggered whenever a `HELD` transaction is deleted from Up. This\ngenerally occurs for example when a hotel deposit is returned. This\nevent includes a `transaction` relationship that provides the unique\nidentifier for the transaction, however no link is provided to the\ntransaction within the Up API as it no longer exists.\n\n## Securing Webhook Event Handlers\n\nIncoming webhook event requests include a `X-Up-Authenticity-Signature`\nheader, which can be used to verify that the event was sent by Up.\nVerification of the signature requires knowledge of the shared\n`secretKey` that was returned upon creation of the webhook. This key is\nknown only to your application and to Up.\n\nThe verification process involves:\n\n1. Taking the raw, unparsed webhook event request body.\n2. Computing the SHA-256 HMAC signature of the request body, using the\n   shared `secretKey`.\n3. Comparing the computed HMAC signature with the value of the\n   `X-Up-Authenticity-Signature` header.\n\nIf the computed SHA-256 HMAC signature matches the\n`X-Up-Authenticity-Signature` header, the request is valid.\n\nA few language-specific examples follow.\n\n**Ruby**:\n\nThis example uses the Ruby on Rails framework.\n\n```ruby\nrequire \'openssl\'\n\ndef handle_webhook_event\n  received_signature =\n    request.headers[\'X-Up-Authenticity-Signature\']\n\n  signature = OpenSSL::HMAC.hexdigest(\n    \'SHA256\',\n    secret_key,\n    request.raw_post,\n  )\n\n  if Rack::Utils.secure_compare(received_signature, signature)\n    # Process webhook event\n  end\nend\n```\n\n**PHP**:\n\nThis example uses the Laravel framework.\n\n```php\npublic function handleWebhookEvent(Request $request) {\n    $received_signature = $request->header(\n        \'X-Up-Authenticity-Signature\',\n        \'\'\n    );\n    $raw_body = $request->getContent();\n    $signature = hash_hmac(\'sha256\', $raw_body, $this->secretKey);\n\n    if (hash_equals($signature, $received_signature)) {\n        // Process webhook event\n    }\n}\n```\n\n**Go**:\n\nThis example is in plain Go.\n\n```go\nimport (\n    "crypto/hmac"\n    "crypto/sha256"\n    "encoding/hex"\n    "io"\n    "net/http"\n)\n\nfunc handleWebhookEvent(w http.ResponseWriter, r *http.Request) {\n    receivedSignature, _ := hex.DecodeString(\n        r.Header.Get("X-Up-Authenticity-Signature"),\n    )\n\n    mac := hmac.New(sha256.New, secretKey)\n    io.Copy(mac, r.Body)\n    signature := mac.Sum(nil)\n\n    if hmac.Equal(signature, receivedSignature)\n        // Process webhook event\n    }\n}\n```\n\nIf the `secretKey` for a webhook is lost, simply create a new webhook\nwith the same URL, capture the returned `secretKey` and delete the\noriginal webhook.\n',
          parameters: [
            z
              .string()
              .exactOptional()
              .openapi({
                param: {
                  description:
                    'The SHA-256 HMAC signature of the raw request body, signed using\nthe `secretKey` of the webhook.\n',
                  example: '317c0a8ea81df3f53c1d2aef5dcbf60492d0df557197b2990e71daa4a0693364',
                  in: 'header',
                  name: 'X-Up-Authenticity-Signature',
                  required: false,
                  schema: { type: 'string' },
                },
              }),
            z
              .string()
              .openapi({
                param: {
                  description: 'Automatically added',
                  in: 'path',
                  name: 'webhookURL',
                  required: true,
                  schema: { type: 'string' },
                },
              }),
          ],
          requestBody: { content: { 'application/json': { schema: WebhookEventCallbackSchema } } },
          responses: { 200: { description: 'Successful Response' } },
        },
      },
    },
  },
})

export const getWebhooksIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Retrieve webhook',
  description: 'Retrieve a specific webhook by providing its unique identifier.\n',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the webhook.\n',
            example: 'c8283a72-24b0-4fd8-9b13-fccccab371e5',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetWebhookResponseSchema } },
    },
  },
})

export const deleteWebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Delete webhook',
  description:
    'Delete a specific webhook by providing its unique identifier. Once\ndeleted, webhook events will no longer be sent to the configured URL.\n',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the webhook.\n',
            example: 'a940825b-80b6-4798-b378-c6284259b4c5',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Deleted' } },
})

export const getWebhooksWebhookIdLogsRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhookId}/logs',
  tags: ['Webhooks'],
  summary: 'List webhook logs',
  description:
    'Retrieve a list of delivery logs for a webhook by providing its unique\nidentifier. This is useful for analysis and debugging purposes. The\nreturned list is [paginated](#pagination) and can be scrolled by\nfollowing the `next` and `prev` links where present. Results are ordered\nnewest first to oldest last. Logs may be automatically purged after a\nperiod of time.\n',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the webhook.\n',
            example: '7104f5df-4993-495f-9d29-2b4d062c03a9',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'page[size]': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of records to return in each page.\n',
            example: 30,
            in: 'query',
            name: 'page[size]',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListWebhookDeliveryLogsResponseSchema } },
    },
  },
})

export const postWebhooksWebhookIdPingRoute = createRoute({
  method: 'post',
  path: '/webhooks/{webhookId}/ping',
  tags: ['Webhooks'],
  summary: 'Ping webhook',
  description:
    'Send a `PING` event to a webhook by providing its unique identifier.\nThis is useful for testing and debugging purposes. The event is delivered\nasynchronously and its data is returned in the response to this request.\n',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the webhook.\n',
            example: '830e127d-fb89-4400-92bb-f3f48289dcba',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebhookEventCallbackSchema } },
    },
  },
})
