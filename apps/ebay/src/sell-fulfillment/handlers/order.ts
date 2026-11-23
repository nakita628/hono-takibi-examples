import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrderOrderIdRoute,
  getOrderOrderIdShippingFulfillmentFulfillmentIdRoute,
  getOrderOrderIdShippingFulfillmentRoute,
  getOrderRoute,
  postOrderOrderIdIssueRefundRoute,
  postOrderOrderIdShippingFulfillmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderHandler = app
  .openapi(getOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderOrderIdShippingFulfillmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderOrderIdShippingFulfillmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderOrderIdShippingFulfillmentFulfillmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderOrderIdIssueRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
