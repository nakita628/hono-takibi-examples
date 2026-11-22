type CreateGiftCardRequest = {
  caption: string
  expiringDate: string
  multipleCredits?: boolean | undefined
  multipleRedemptions?: boolean | undefined
  profileId: string
  relationName: string
  restrictedToOwner?: boolean | undefined
}
type Transactions = { href: string }
type Response = {
  balance: number
  caption: string
  emissionDate: string
  expiringDate: string
  id: string
  redemptionCode: string
  redemptionToken: string
  relationName: string
  transactions: Transactions
}
type Item = {
  id: string
  name: string
  price: number
  productId: string
  quantity: number
  refId: string
}
type Cart = {
  discounts: number
  grandTotal: number
  items: Item[]
  itemsTotal: number
  redemptionCode: string | null
  relationName: string | null
  shipping: number
  taxes: number
}
type Client = { document: string; email: string; id: string }
type GetGiftCardusingJSONRequest = { cart: Cart; client: Client }
type Self = { href: string }
type Item1 = { _self: Self; id: string }
type Paging = { page: number; pages: number; perPage: number; total: number }
type Response2 = { items: Item1[]; paging: Paging }
type Response3 = { _self: Self; id: string }
type PriceTag = { name: string; value: number }
type Item2 = {
  discount: number
  id: string
  name: string
  price: number
  priceTags: PriceTag[]
  productId: string
  quantity: number
  refId: string
  shippingDiscount: number
  value: number
}
type Cart1 = {
  discounts: number
  grandTotal: number
  items: Item2[]
  itemsTotal: number
  shipping: number
  taxes: number
}
type ClientProfile = {
  birthDate: string
  document: string
  email: string
  firstName: string
  isCorporate: boolean
  lastName: string
  phone: string
}
type Shipping = {
  city: string
  complement: string | null
  country: string
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  reference: string | null
  state: string
  street: string
}
type OrderInfo = {
  cart?: Cart1 | undefined
  clientProfile?: ClientProfile | undefined
  orderId?: string | undefined
  sequence?: number | undefined
  shipping?: Shipping | undefined
}
type CreateGiftCardTransactionRequest = {
  description: string
  operation: string
  orderInfo?: OrderInfo | undefined
  redemptionCode: string
  redemptionToken: string
  requestId: string
  value: number
}
type Response5 = { date: string; description: string; redemptionMode: string; value: number }
type Response6 = { date: string; oid: string; value: number }
type Response7 = { date: string; id: string; value: number }
type CancelGiftCardTransactionRequest = { requestId: string; value: number }
type SettleGiftCardTransactionRequest = { requestId: string; value: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/giftcards': {
      $post: {
        input: {
          header: {
            'Content-Type': string
            Accept: string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        } & { json: CreateGiftCardRequest }
        output: Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/giftcards/_search': {
      $post: {
        input: {
          header: { Accept: string; 'Content-Type': string; 'REST-Range'?: string | undefined }
        } & { json: GetGiftCardusingJSONRequest }
        output: Response2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/giftcards/:giftCardID': {
      $get: {
        input: { param: { giftCardID: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/giftcards/:giftCardID/transactions': {
      $get: {
        input: { param: { giftCardID: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: Response3[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { giftCardID: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: CreateGiftCardTransactionRequest }
        output: Response3
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/giftcards/:giftCardID/transactions/:transactionID': {
      $get: {
        input: { param: { giftCardID: string; transactionID: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: Response5
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/giftcards/:giftCardID/transactions/:transactionID/authorization': {
      $get: {
        input: { param: { giftCardID: string; transactionID: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: Response6
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/giftcards/:giftCardID/transactions/:transactionID/cancellations': {
      $get: {
        input: { param: { giftCardID: string; transactionID: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: Response7[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { giftCardID: string; transactionID: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: CancelGiftCardTransactionRequest }
        output: Response6
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/giftcards/:giftCardID/transactions/:transactionID/settlements': {
      $get: {
        input: { param: { giftCardID: string; transactionID: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: Response6[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { giftCardID: string; transactionID: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: SettleGiftCardTransactionRequest }
        output: Response6
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
