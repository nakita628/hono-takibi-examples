type CreateUpdateGiftCardProviderbyIDRequest = {
  appKey?: string | undefined
  appToken?: string | undefined
  cancelEnabled: boolean
  oauthProvider: string
  preAuthEnabled: boolean
  serviceUrl: string
}
type CreateGiftCardinGiftCardProviderRequest = {
  caption: string
  emissionDate: string
  expiringDate: string
  multipleCredits: boolean
  multipleRedemptions: boolean
  profileId: string
  relationName: string
  restrictedToOwner: boolean
}
type Item = {
  id: string
  name: string | null
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
type GetGiftCardfromGiftCardProviderRequest = { cart: Cart; client: Client }
type Item1 = {
  discount: number
  id: string
  name: string
  price: number
  priceTags: string[]
  productId: string
  quantity: number
  refId: string | null
  shippingDiscount: number
  value: number
}
type Cart1 = {
  discounts: number
  grandTotal: number
  items: Item1[]
  itemsTotal: number
  shipping: number
  taxes: number
}
type ClientProfile = {
  birthDate: string
  document: string
  documentType: string
  email: string
  firstName: string
  isCorporate: boolean
  lastName: string
  phone: string
}
type Shipping = {
  city: string
  complement: string
  country: string
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  reference: string
  state: string
  street: string
}
type OrderInfo = {
  cart: Cart1
  clientProfile: ClientProfile
  orderId: string
  sequence: number
  shipping: Shipping
}
type CreateGiftCardTransactionRequest = {
  description: string
  operation: string
  orderInfo: OrderInfo
  redemptionCode: string | null
  redemptionToken: string | null
  requestId: string
  value: number
}
type CreateGiftCardCancellationTransactionRequest = { requestId: string; value: number }
type Cart2 = {
  discounts: number
  grandTotal: number
  items: Item[]
  itemsTotal: number
  redemptionCode: string
  relationName: string
  shipping: number
  taxes: number
}
type CreateGiftCardSettlementTransactionRequest = { cart: Cart2; client: Client }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/giftcardproviders': {
      $get: {
        input: {
          header: {
            Accept: string
            'Content-Type': string
            'REST-Range'?: string | undefined
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderID': {
      $delete:
        | {
            input: { param: { giftCardProviderID: string } } & {
              header: {
                Accept: string
                'Content-Type': string
                'X-VTEX-API-AppKey': string
                'X-VTEX-API-AppToken': string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { giftCardProviderID: string } } & {
              header: {
                Accept: string
                'Content-Type': string
                'X-VTEX-API-AppKey': string
                'X-VTEX-API-AppToken': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put: {
        input: { param: { giftCardProviderID: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        } & { json: CreateUpdateGiftCardProviderbyIDRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderID/giftcards': {
      $post: {
        input: { param: { giftCardProviderID: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        } & { json: CreateGiftCardinGiftCardProviderRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderID/giftcards/_search': {
      $post: {
        input: { param: { giftCardProviderID: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
            'REST-Range': string
          }
        } & { json: GetGiftCardfromGiftCardProviderRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID': {
      $get: {
        input: { param: { giftCardProviderID: string; giftCardID: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions': {
      $get: {
        input: { param: { giftCardProviderID: string; giftCardID: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { giftCardProviderID: string; giftCardID: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        } & { json: CreateGiftCardTransactionRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/cancellations': {
      $get: {
        input: { param: { giftCardProviderID: string; giftCardID: string; tId: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { giftCardProviderID: string; giftCardID: string; tId: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        } & { json: CreateGiftCardCancellationTransactionRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/settlements': {
      $get: {
        input: { param: { giftCardProviderID: string; giftCardID: string; tId: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { giftCardProviderID: string; giftCardID: string; tId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: CreateGiftCardSettlementTransactionRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID': {
      $get: {
        input: {
          param: { giftCardProviderID: string; giftCardID: string; transactionID: string }
        } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID/authorization': {
      $get: {
        input: {
          param: { giftCardProviderID: string; giftCardID: string; transactionID: string }
        } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/giftcardproviders/:giftCardProviderId': {
      $get:
        | {
            input: { param: { giftCardProviderId: string } } & {
              header: {
                Accept: string
                'Content-Type': string
                'X-VTEX-API-AppKey': string
                'X-VTEX-API-AppToken': string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { giftCardProviderId: string } } & {
              header: {
                Accept: string
                'Content-Type': string
                'X-VTEX-API-AppKey': string
                'X-VTEX-API-AppToken': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
