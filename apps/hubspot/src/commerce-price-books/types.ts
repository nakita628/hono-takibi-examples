type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type PriceBookResponse = {
  archived?: boolean | undefined
  archivedAt?: string | undefined
  autoAssignmentEnabled: boolean
  countOfIncludedProducts: number
  createdAt?: string | undefined
  customProperties: { [x: string]: string }
  description?: string | undefined
  id: string
  name?: string | undefined
  status: 'ACTIVE' | 'INACTIVE'
  supportedCurrencies: string[]
  updatedAt?: string | undefined
}
type CollectionResponsePriceBookResponseForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PriceBookResponse[]
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type PriceBookCreateRequest = {
  customProperties: { [x: string]: string }
  description?: string | undefined
  name: string
  supportedCurrencies: string[]
}
type PriceBookUpdateRequest = {
  customProperties: { [x: string]: string }
  description: { [x: string]: unknown }
  name: { [x: string]: unknown }
  supportedCurrencies?: string[] | undefined
}
type PriceEntry = { currencyCode: string; maxQuantity?: number | undefined; price: number }
type Pricing = { prices: PriceEntry[]; pricingModel: 'FLAT' | 'GRADUATED' | 'STAIRSTEP' | 'VOLUME' }
type PriceBookItemResponse = {
  archived?: boolean | undefined
  archivedAt?: string | undefined
  billingFrequency?:
    | 'ANNUALLY'
    | 'BIWEEKLY'
    | 'MONTHLY'
    | 'PER_FIVE_YEARS'
    | 'PER_FOUR_YEARS'
    | 'PER_SIX_MONTHS'
    | 'PER_THREE_YEARS'
    | 'PER_TWO_YEARS'
    | 'QUARTERLY'
    | 'WEEKLY'
    | undefined
  billingPeriod?: string | undefined
  costOfGoodsSold?: string | undefined
  createdAt?: string | undefined
  customProperties: { [x: string]: string }
  description?: string | undefined
  id: string
  images?: string | undefined
  name?: string | undefined
  priceBookId?: string | undefined
  pricing?: Pricing | undefined
  productClassification?: 'BUNDLE' | 'STANDALONE' | 'VARIANT' | undefined
  productId: string
  productType?: 'INVENTORY' | 'NON_INVENTORY' | 'SERVICE' | undefined
  recurringBillingTerms?: 'AUTOMATICALLY_RENEW' | 'FIXED' | undefined
  sku?: string | undefined
  status?: 'active' | 'inactive' | undefined
  taxCategory?: string | undefined
  updatedAt?: string | undefined
  url?: string | undefined
}
type CollectionResponsePriceBookItemResponseForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PriceBookItemResponse[]
}
type PriceBookAddProductRequest = { productId: string }
type SimplePublicObjectId = { id: string }
type BatchInputSimplePublicObjectId = { inputs: SimplePublicObjectId[] }
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type BatchResponseSimplePublicObjectIdWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: SimplePublicObjectId[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchInputPriceBookAddProductRequest = { inputs: PriceBookAddProductRequest[] }
type BatchResponsePriceBookItemResponse = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PriceBookItemResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type BatchResponsePriceBookItemResponseWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PriceBookItemResponse[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type PriceUpdateEntry = {
  currencyCode: string
  maxQuantity?: number | undefined
  price: { [x: string]: unknown }
}
type PricingUpdateRequest = { prices: PriceUpdateEntry[] }
type PriceBookItemUpdateRequest = {
  archived?: boolean | undefined
  billingFrequency: { [x: string]: unknown }
  billingPeriod: { [x: string]: unknown }
  customProperties: { [x: string]: string }
  pricing?: PricingUpdateRequest | undefined
  status: { [x: string]: unknown }
}
type PriceBookItemBatchUpdateInput = { id: string; properties: PriceBookItemUpdateRequest }
type BatchInputPriceBookItemBatchUpdateInput = { inputs: PriceBookItemBatchUpdateInput[] }
type PriceBookValidateResponse = { errors: ErrorDetail[]; isValid: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/commerce/price-books/2026-09/price-books': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: CollectionResponsePriceBookResponseForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: PriceBookCreateRequest }
            output: PriceBookResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PriceBookCreateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/price-books/2026-09/price-books/:priceBookId': {
      $get:
        | {
            input: { param: { priceBookId: bigint } } & {
              query: { archived?: boolean | undefined }
            }
            output: PriceBookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceBookId: bigint } } & {
              query: { archived?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { priceBookId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { priceBookId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { priceBookId: bigint } } & { json: PriceBookUpdateRequest }
            output: PriceBookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceBookId: bigint } } & { json: PriceBookUpdateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/price-books/2026-09/price-books/:priceBookId/activate': {
      $post:
        | {
            input: { param: { priceBookId: bigint } }
            output: PriceBookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceBookId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/price-books/2026-09/price-books/:priceBookId/deactivate': {
      $post:
        | {
            input: { param: { priceBookId: bigint } }
            output: PriceBookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceBookId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/price-books/2026-09/price-books/:priceBookId/items': {
      $get:
        | {
            input: { param: { priceBookId: bigint } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                properties?: string[] | undefined
              }
            }
            output: CollectionResponsePriceBookItemResponseForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceBookId: bigint } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                properties?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { priceBookId: bigint } } & { json: PriceBookAddProductRequest }
            output: PriceBookItemResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { priceBookId: bigint } } & { json: PriceBookAddProductRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/batch/archive': {
      $post:
        | {
            input: { param: { priceBookId: bigint } } & { json: BatchInputSimplePublicObjectId }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { priceBookId: bigint } } & { json: BatchInputSimplePublicObjectId }
            output: BatchResponseSimplePublicObjectIdWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { priceBookId: bigint } } & { json: BatchInputSimplePublicObjectId }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/batch/create': {
      $post:
        | {
            input: { param: { priceBookId: bigint } } & {
              json: BatchInputPriceBookAddProductRequest
            }
            output: BatchResponsePriceBookItemResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { priceBookId: bigint } } & {
              json: BatchInputPriceBookAddProductRequest
            }
            output: BatchResponsePriceBookItemResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { priceBookId: bigint } } & {
              json: BatchInputPriceBookAddProductRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/batch/update': {
      $post:
        | {
            input: { param: { priceBookId: bigint } } & {
              json: BatchInputPriceBookItemBatchUpdateInput
            }
            output: BatchResponsePriceBookItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceBookId: bigint } } & {
              json: BatchInputPriceBookItemBatchUpdateInput
            }
            output: BatchResponsePriceBookItemResponseWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { priceBookId: bigint } } & {
              json: BatchInputPriceBookItemBatchUpdateInput
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/:priceBookItemId': {
      $get:
        | {
            input: { param: { priceBookId: bigint; priceBookItemId: bigint } } & {
              query: { archived?: boolean | undefined; properties?: string[] | undefined }
            }
            output: PriceBookItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceBookId: bigint; priceBookItemId: bigint } } & {
              query: { archived?: boolean | undefined; properties?: string[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { priceBookId: bigint; priceBookItemId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { priceBookId: bigint; priceBookItemId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { priceBookId: bigint; priceBookItemId: bigint } } & {
              query: { archived?: boolean | undefined }
            } & { json: PriceBookItemUpdateRequest }
            output: PriceBookItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceBookId: bigint; priceBookItemId: bigint } } & {
              query: { archived?: boolean | undefined }
            } & { json: PriceBookItemUpdateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/commerce/price-books/2026-09/price-books/:priceBookId/validate': {
      $post:
        | {
            input: { param: { priceBookId: bigint } }
            output: PriceBookValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { priceBookId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
