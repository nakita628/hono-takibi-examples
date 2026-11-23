import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postFulfillmentEndpointPvtOrderFormsSimulationRoute,
  postFulfillmentEndpointPvtOrdersOrderIdCancelRoute,
  postFulfillmentEndpointPvtOrdersRoute,
  postFulfillmentEndpointPvtOrdersSellerOrderIdFulfillRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fulfillmentEndpointHandler = app
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
