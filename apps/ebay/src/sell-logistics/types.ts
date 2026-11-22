type Amount = { currency?: string | undefined; value?: string | undefined }
type AdditionalOption = { additionalCost?: Amount | undefined; optionType?: string | undefined }
type ContactAddress = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  city?: string | undefined
  countryCode?: string | undefined
  county?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
}
type PhoneNumber = { phoneNumber?: string | undefined }
type Contact = {
  companyName?: string | undefined
  contactAddress?: ContactAddress | undefined
  fullName?: string | undefined
  primaryPhone?: PhoneNumber | undefined
}
type CreateShipmentFromQuoteRequest = {
  additionalOptions?: AdditionalOption[] | undefined
  labelCustomMessage?: string | undefined
  labelSize?: string | undefined
  rateId?: string | undefined
  returnTo?: Contact | undefined
  shippingQuoteId?: string | undefined
}
type ShipmentCancellation = {
  cancellationRequestedDate?: string | undefined
  cancellationStatus?: string | undefined
}
type Order = { channel?: string | undefined; orderId?: string | undefined }
type Dimensions = {
  height?: string | undefined
  length?: string | undefined
  unit?: string | undefined
  width?: string | undefined
}
type Weight = { unit?: string | undefined; value?: string | undefined }
type PackageSpecification = { dimensions?: Dimensions | undefined; weight?: Weight | undefined }
type PurchasedRate = {
  additionalOptions?: AdditionalOption[] | undefined
  baseShippingCost?: Amount | undefined
  destinationTimeZone?: string | undefined
  maxEstimatedDeliveryDate?: string | undefined
  minEstimatedDeliveryDate?: string | undefined
  pickupNetworks?: string[] | undefined
  pickupSlotId?: string | undefined
  pickupType?: string | undefined
  rateId?: string | undefined
  shippingCarrierCode?: string | undefined
  shippingCarrierName?: string | undefined
  shippingQuoteId?: string | undefined
  shippingServiceCode?: string | undefined
  shippingServiceName?: string | undefined
  totalShippingCost?: Amount | undefined
}
type Shipment = {
  cancellation?: ShipmentCancellation | undefined
  creationDate?: string | undefined
  labelCustomMessage?: string | undefined
  labelDownloadUrl?: string | undefined
  labelSize?: string | undefined
  orders?: Order[] | undefined
  packageSpecification?: PackageSpecification | undefined
  rate?: PurchasedRate | undefined
  returnTo?: Contact | undefined
  shipFrom?: Contact | undefined
  shipTo?: Contact | undefined
  shipmentId?: string | undefined
  shipmentTrackingNumber?: string | undefined
}
type ShippingQuoteRequest = {
  orders?: Order[] | undefined
  packageSpecification?: PackageSpecification | undefined
  shipFrom?: Contact | undefined
  shipTo?: Contact | undefined
}
type PickupSlot = {
  pickupSlotEndTime?: string | undefined
  pickupSlotId?: string | undefined
  pickupSlotStartTime?: string | undefined
  pickupSlotTimeZone?: string | undefined
}
type Rate = {
  additionalOptions?: AdditionalOption[] | undefined
  baseShippingCost?: Amount | undefined
  destinationTimeZone?: string | undefined
  maxEstimatedDeliveryDate?: string | undefined
  minEstimatedDeliveryDate?: string | undefined
  pickupNetworks?: string[] | undefined
  pickupSlots?: PickupSlot[] | undefined
  pickupType?: string | undefined
  rateId?: string | undefined
  rateRecommendation?: string[] | undefined
  shippingCarrierCode?: string | undefined
  shippingCarrierName?: string | undefined
  shippingServiceCode?: string | undefined
  shippingServiceName?: string | undefined
}
type ErrorParameter = { name?: string | undefined; value?: string | undefined }
type Error = {
  category?: string | undefined
  domain?: string | undefined
  errorId?: number | undefined
  inputRefIds?: string[] | undefined
  longMessage?: string | undefined
  message?: string | undefined
  outputRefIds?: string[] | undefined
  parameters?: ErrorParameter[] | undefined
  subdomain?: string | undefined
}
type ShippingQuote = {
  creationDate?: string | undefined
  expirationDate?: string | undefined
  orders?: Order[] | undefined
  packageSpecification?: PackageSpecification | undefined
  rates?: Rate[] | undefined
  shipFrom?: Contact | undefined
  shipTo?: Contact | undefined
  shippingQuoteId?: string | undefined
  warnings?: Error[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/shipment/create_from_shipping_quote': {
      $post:
        | {
            input: { json: CreateShipmentFromQuoteRequest }
            output: Shipment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateShipmentFromQuoteRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreateShipmentFromQuoteRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: CreateShipmentFromQuoteRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/shipment/:shipmentId': {
      $get:
        | {
            input: { param: { shipmentId: string } }
            output: Shipment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/shipment/:shipmentId/cancel': {
      $post:
        | {
            input: { param: { shipmentId: string } }
            output: Shipment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/shipment/:shipmentId/download_label_file': {
      $get:
        | {
            input: { param: { shipmentId: string } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { shipmentId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/shipping_quote': {
      $post:
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: ShippingQuoteRequest
            }
            output: ShippingQuote
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: ShippingQuoteRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: ShippingQuoteRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: ShippingQuoteRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/shipping_quote/:shippingQuoteId': {
      $get:
        | {
            input: { param: { shippingQuoteId: string } }
            output: ShippingQuote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { shippingQuoteId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { shippingQuoteId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { shippingQuoteId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
