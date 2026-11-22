import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrderOrderIdShippingFulfillmentFulfillmentIdRoute,
  getOrderOrderIdShippingFulfillmentRoute,
  postOrderOrderIdShippingFulfillmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shippingFulfillmentHandler = app
  .openapi(getOrderOrderIdShippingFulfillmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderOrderIdShippingFulfillmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderOrderIdShippingFulfillmentFulfillmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
