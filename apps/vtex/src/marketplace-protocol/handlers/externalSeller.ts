import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postFulfillmentEndpointPvtOrderFormsSimulationRoute,
  postFulfillmentEndpointPvtOrdersOrderIdCancelRoute,
  postFulfillmentEndpointPvtOrdersRoute,
  postFulfillmentEndpointPvtOrdersSellerOrderIdFulfillRoute,
  postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelRoute,
  postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberRoute,
  postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingRoute,
  postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalSellerHandler = app
  .openapi(postFulfillmentEndpointPvtOrderFormsSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFulfillmentEndpointPvtOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFulfillmentEndpointPvtOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFulfillmentEndpointPvtOrdersSellerOrderIdFulfillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
