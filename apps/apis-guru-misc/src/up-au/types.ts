type AccountTypeEnum = 'SAVER' | 'TRANSACTIONAL'
type OwnershipTypeEnum = 'INDIVIDUAL' | 'JOINT'
type AccountResource = {
  attributes: {
    accountType: {}
    balance: { currencyCode: string; value: string; valueInBaseUnits: number }
    createdAt: string
    displayName: string
    ownershipType: {}
  }
  id: string
  links?: { self: string } | undefined
  relationships: { transactions: { links?: { related: string } | undefined } }
  type: string
}
type ListAccountsResponse = {
  data: AccountResource[]
  links: { next: string | null; prev: string | null }
}
type TransactionStatusEnum = 'HELD' | 'SETTLED'
type TransactionResource = {
  attributes: {
    amount: { currencyCode: string; value: string; valueInBaseUnits: number }
    cashback: {
      amount: { currencyCode: string; value: string; valueInBaseUnits: number }
      description: string
    }
    createdAt: string
    description: string
    foreignAmount: { currencyCode: string; value: string; valueInBaseUnits: number }
    holdInfo: {
      amount: { currencyCode: string; value: string; valueInBaseUnits: number }
      foreignAmount: { currencyCode: string; value: string; valueInBaseUnits: number }
    }
    isCategorizable: boolean
    message: string | null
    rawText: string | null
    roundUp: {
      amount: { currencyCode: string; value: string; valueInBaseUnits: number }
      boostPortion: { currencyCode: string; value: string; valueInBaseUnits: number }
    }
    settledAt: string | null
    status: {}
  }
  id: string
  links?: { self: string } | undefined
  relationships: {
    account: { data: { id: string; type: string }; links?: { related: string } | undefined }
    category: {
      data: { id: string; type: string } | null
      links?: { related?: string | undefined; self: string } | undefined
    }
    parentCategory: {
      data: { id: string; type: string } | null
      links?: { related: string } | undefined
    }
    tags: { data: { id: string; type: string }[]; links?: { self: string } | undefined }
    transferAccount: {
      data: { id: string; type: string } | null
      links?: { related: string } | undefined
    }
  }
  type: string
}
type ListTransactionsResponse = {
  data: TransactionResource[]
  links: { next: string | null; prev: string | null }
}
type GetAccountResponse = {
  data: {
    attributes: {
      accountType: {}
      balance: { currencyCode: string; value: string; valueInBaseUnits: number }
      createdAt: string
      displayName: string
      ownershipType: {}
    }
    id: string
    links?: { self: string } | undefined
    relationships: { transactions: { links?: { related: string } | undefined } }
    type: string
  }
}
type CategoryResource = {
  attributes: { name: string }
  id: string
  links?: { self: string } | undefined
  relationships: {
    children: { data: { id: string; type: string }[]; links?: { related: string } | undefined }
    parent: { data: { id: string; type: string } | null; links?: { related: string } | undefined }
  }
  type: string
}
type ListCategoriesResponse = { data: CategoryResource[] }
type GetCategoryResponse = {
  data: {
    attributes: { name: string }
    id: string
    links?: { self: string } | undefined
    relationships: {
      children: { data: { id: string; type: string }[]; links?: { related: string } | undefined }
      parent: { data: { id: string; type: string } | null; links?: { related: string } | undefined }
    }
    type: string
  }
}
type TagResource = {
  id: string
  relationships: { transactions: { links?: { related: string } | undefined } }
  type: string
}
type ListTagsResponse = { data: TagResource[]; links: { next: string | null; prev: string | null } }
type GetTransactionResponse = {
  data: {
    attributes: {
      amount: { currencyCode: string; value: string; valueInBaseUnits: number }
      cashback: {
        amount: { currencyCode: string; value: string; valueInBaseUnits: number }
        description: string
      }
      createdAt: string
      description: string
      foreignAmount: { currencyCode: string; value: string; valueInBaseUnits: number }
      holdInfo: {
        amount: { currencyCode: string; value: string; valueInBaseUnits: number }
        foreignAmount: { currencyCode: string; value: string; valueInBaseUnits: number }
      }
      isCategorizable: boolean
      message: string | null
      rawText: string | null
      roundUp: {
        amount: { currencyCode: string; value: string; valueInBaseUnits: number }
        boostPortion: { currencyCode: string; value: string; valueInBaseUnits: number }
      }
      settledAt: string | null
      status: {}
    }
    id: string
    links?: { self: string } | undefined
    relationships: {
      account: { data: { id: string; type: string }; links?: { related: string } | undefined }
      category: {
        data: { id: string; type: string } | null
        links?: { related?: string | undefined; self: string } | undefined
      }
      parentCategory: {
        data: { id: string; type: string } | null
        links?: { related: string } | undefined
      }
      tags: { data: { id: string; type: string }[]; links?: { self: string } | undefined }
      transferAccount: {
        data: { id: string; type: string } | null
        links?: { related: string } | undefined
      }
    }
    type: string
  }
}
type UpdateTransactionCategoryRequest = { data: { id: string; type: string } }
type TagInputResourceIdentifier = { id: string; type: string }
type UpdateTransactionTagsRequest = { data: TagInputResourceIdentifier[] }
type PingResponse = { meta: { id: string; statusEmoji: string } }
type ErrorObject = {
  detail: string
  source?: { parameter?: string | undefined; pointer?: string | undefined } | undefined
  status: string
  title: string
}
type ErrorResponse = { errors: ErrorObject[] }
type WebhookResource = {
  attributes: {
    createdAt: string
    description: string | null
    secretKey?: string | undefined
    url: string
  }
  id: string
  links?: { self: string } | undefined
  relationships: { logs: { links?: { related: string } | undefined } }
  type: string
}
type ListWebhooksResponse = {
  data: WebhookResource[]
  links: { next: string | null; prev: string | null }
}
type CreateWebhookRequest = {
  data: { attributes: { description?: (string | null) | undefined; url: string } }
}
type CreateWebhookResponse = {
  data: {
    attributes: {
      createdAt: string
      description: string | null
      secretKey?: string | undefined
      url: string
    }
    id: string
    links?: { self: string } | undefined
    relationships: { logs: { links?: { related: string } | undefined } }
    type: string
  }
}
type GetWebhookResponse = {
  data: {
    attributes: {
      createdAt: string
      description: string | null
      secretKey?: string | undefined
      url: string
    }
    id: string
    links?: { self: string } | undefined
    relationships: { logs: { links?: { related: string } | undefined } }
    type: string
  }
}
type WebhookDeliveryLogResource = {
  attributes: {
    createdAt: string
    deliveryStatus: {}
    request: { body: string }
    response: { body: string; statusCode: number } | null
  }
  id: string
  relationships: { webhookEvent: { data: { id: string; type: string } } }
  type: string
}
type ListWebhookDeliveryLogsResponse = {
  data: WebhookDeliveryLogResource[]
  links: { next: string | null; prev: string | null }
}
type WebhookEventCallback = {
  data: {
    attributes: { createdAt: string; eventType: {} }
    id: string
    relationships: {
      transaction?:
        | { data: { id: string; type: string }; links?: { related: string } | undefined }
        | undefined
      webhook: { data: { id: string; type: string }; links?: { related: string } | undefined }
    }
    type: string
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts': {
      $get: {
        input: {
          query: {
            'page[size]'?: number | undefined
            'filter[accountType]'?: AccountTypeEnum | undefined
            'filter[ownershipType]'?: OwnershipTypeEnum | undefined
          }
        }
        output: ListAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/transactions': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            'page[size]'?: number | undefined
            'filter[status]'?: TransactionStatusEnum | undefined
            'filter[since]'?: string | undefined
            'filter[until]'?: string | undefined
            'filter[category]'?: string | undefined
            'filter[tag]'?: string | undefined
          }
        }
        output: ListTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories': {
      $get: {
        input: { query: { 'filter[parent]'?: string | undefined } }
        output: ListCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetCategoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags': {
      $get: {
        input: { query: { 'page[size]'?: number | undefined } }
        output: ListTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transactions': {
      $get: {
        input: {
          query: {
            'page[size]'?: number | undefined
            'filter[status]'?: TransactionStatusEnum | undefined
            'filter[since]'?: string | undefined
            'filter[until]'?: string | undefined
            'filter[category]'?: string | undefined
            'filter[tag]'?: string | undefined
          }
        }
        output: ListTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transactions/:id': {
      $get: {
        input: { param: { id: string } }
        output: GetTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transactions/:transactionId/relationships/category': {
      $patch: {
        input: { param: { transactionId: string } } & { json: UpdateTransactionCategoryRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/transactions/:transactionId/relationships/tags': {
      $delete: {
        input: { param: { transactionId: string } } & { json: UpdateTransactionTagsRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { transactionId: string } } & { json: UpdateTransactionTagsRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/util/ping': {
      $get:
        | { input: {}; output: PingResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/webhooks': {
      $get: {
        input: { query: { 'page[size]'?: number | undefined } }
        output: ListWebhooksResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateWebhookRequest }
        output: CreateWebhookResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/webhooks/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: GetWebhookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:webhookId/logs': {
      $get: {
        input: { param: { webhookId: string } } & { query: { 'page[size]'?: number | undefined } }
        output: ListWebhookDeliveryLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/:webhookId/ping': {
      $post: {
        input: { param: { webhookId: string } }
        output: WebhookEventCallback
        outputFormat: 'json'
        status: 201
      }
    }
  },
  '/'
>
export default routes
