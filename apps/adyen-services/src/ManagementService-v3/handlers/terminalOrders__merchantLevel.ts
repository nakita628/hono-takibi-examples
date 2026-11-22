import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdBillingEntitiesRoute,
  getMerchantsMerchantIdShippingLocationsRoute,
  getMerchantsMerchantIdTerminalModelsRoute,
  getMerchantsMerchantIdTerminalOrdersOrderIdRoute,
  getMerchantsMerchantIdTerminalOrdersRoute,
  getMerchantsMerchantIdTerminalProductsRoute,
  patchMerchantsMerchantIdTerminalOrdersOrderIdRoute,
  postMerchantsMerchantIdShippingLocationsRoute,
  postMerchantsMerchantIdTerminalOrdersOrderIdCancelRoute,
  postMerchantsMerchantIdTerminalOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalOrders__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdBillingEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdShippingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdShippingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdTerminalOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
