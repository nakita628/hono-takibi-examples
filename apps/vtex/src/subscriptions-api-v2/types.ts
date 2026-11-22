type Settings = {
  defaultSla: string | null
  deliveryChannels: string[]
  executionHourInUtc: number
  isMultipleInstallmentsEnabledOnCreation: boolean
  isMultipleInstallmentsEnabledOnUpdate: boolean
  isUsingV3: boolean
  manualPriceAllowed: boolean
  onMigrationProcess: boolean
  orderCustomDataAppId: string
  postponeExpiration: boolean
  randomIdGeneration: boolean
  slaOption: string
  useItemPriceFromOriginalOrder: boolean
  workflowVersion: string
}
type Properties = { additionalProp1: string; additionalProp2: string; additionalProp3: string }
type Metadatum = { name: string; properties: Properties }
type Sku = {
  detailUrl: string
  id: string
  imageUrl: string
  name: string
  nameComplete: string
  productName: string
}
type Item1 = {
  SubscriptionId: string
  createdAt: string
  cycleCount: number
  endpoint: string
  isSkipped: boolean
  lastUpdate: string
  metadata: Metadatum[]
  originalItemIndex: number
  originalOrderId: string
  priceAtSubscriptionDate: number
  quantity: number
  sellingPrice: number
  sku: Sku
  status: string
}
type Frequency = { interval: number; periodicity: string }
type Validity = { begin: string; end: string }
type Plan = { frequency: Frequency; type: string; validity: Validity }
type PaymentMethod = { paymentAccountId: string; paymentSystem: string }
type PurchaseSettings = {
  currencyCode: string
  paymentMethod: PaymentMethod
  purchaseDay: string
  salesChannel: string
  selectedSla: string
  seller: string
}
type AdditionalComponent = { longName: string; shortName: string; types: string[] }
type ShippingAddress = {
  additionalComponents: AdditionalComponent[]
  addressId: string
  addressName: string
  addressType: string
  city: string
  complement: string
  country: string
  formattedAddress: string
  geoCoordinate: number[]
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  reference: string
  state: string
  street: string
}
type UpdateSubscriptionbygroupIdRequest = {
  isSkipped: boolean
  item: Item1[]
  metadata: Metadatum[]
  plan: Plan
  purchaseSettings: PurchaseSettings
  shippingAddress: ShippingAddress
  status: string
}
type AdditemsubscriptionGroupIdRequest = {
  endpoint: string
  priceAtSubscriptionDate: number
  quantity: number
  sellingPrice: number
  sku: Sku
}
type InsertAddressesbygroupIdRequest = {
  additionalComponents: AdditionalComponent[]
  addressId: string
  addressName: string
  addressType: string
  city: string
  complement: string
  country: string
  formattedAddress: string
  geoCoordinate: number[]
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  reference: string
  state: string
  street: string
}
type Item = {
  endpoint: string
  priceAtSubscriptionDate: number
  quantity: number
  sellingPrice: number
  sku: Sku
}
type UpdateSubscriptionsbySubscriptionIdRequest = {
  isSkipped: boolean
  item: Item
  metadata: Metadatum[]
  plan: Plan
  purchaseSettings: PurchaseSettings
  shippingAddress: ShippingAddress
  status: string
}
type InsertAddressesforSubscriptionRequest = {
  additionalComponents: string | null
  addressId: string
  addressName: string
  addressType: string
  city: string
  complement: string | null
  country: string
  formattedAddress: string | null
  geoCoordinate: string | null
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  reference: string | null
  state: string
  street: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/report/reportStatus/:reportId': {
      $get: {
        input: { param: { reportId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/report/subscriptionsByDate': {
      $get: {
        input: { query: { requesterEmail: string; beginDate: number; endDate: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/report/subscriptionsByStatus': {
      $get: {
        input: { query: { requesterEmail: string; status: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/report/subscriptionsOrderByDate': {
      $get: {
        input: { query: { requesterEmail: string; beginDate: number; endDate: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/report/subscriptionsScheduled': {
      $get: {
        input: { query: { requesterEmail: string; beginDate: number; endDate: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/report/subscriptionsUpdated': {
      $get: {
        input: { query: { requesterEmail: string; beginDate: number; endDate: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/settings': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: Settings
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: Settings }
        output: Settings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscriptions': {
      $get: {
        input: { query: { customerId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/list': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/nextPurchase/:dateStr': {
      $get: {
        input: { param: { dateStr: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/simulate/:groupId': {
      $get: {
        input: { param: { groupId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupId': {
      $get: {
        input: { param: { groupId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { groupId: string } } & { json: UpdateSubscriptionbygroupIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupId/additem': {
      $post: {
        input: { param: { groupId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: AdditemsubscriptionGroupIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupId/addresses': {
      $get: {
        input: { param: { groupId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { groupId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: InsertAddressesbygroupIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupId/cancel': {
      $patch: {
        input: { param: { groupId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupId/config': {
      $get: {
        input: { param: { groupId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupId/conversation-message': {
      $get: {
        input: { param: { groupId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupId/frequency-options': {
      $get: {
        input: { param: { groupId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupId/payment-systems': {
      $get: {
        input: { param: { groupId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupId/will-create': {
      $get: {
        input: { param: { groupId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions-group/:groupid/instances/:instanceId/retry': {
      $post: {
        input: { param: { groupid: string; instanceId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/list': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/:subscriptionId': {
      $get: {
        input: { param: { subscriptionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { subscriptionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: UpdateSubscriptionsbySubscriptionIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/:subscriptionId/addresses': {
      $post: {
        input: { param: { subscriptionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: InsertAddressesforSubscriptionRequest[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/:subscriptionId/cancel': {
      $patch: {
        input: { param: { subscriptionId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscriptions/:subscriptionId/frequency-options': {
      $get: {
        input: { param: { subscriptionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
