import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdCancelRoute,
  postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberRoute,
  postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceInvoiceNumberTrackingRoute,
  postMarketplaceServicesEndpointPvtOrdersMarketplaceOrderIdInvoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaceServicesEndpointHandler = app
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
