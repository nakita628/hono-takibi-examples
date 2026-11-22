import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFulfillmentPolicyFulfillmentPolicyIdRoute,
  getFulfillmentPolicyFulfillmentPolicyIdRoute,
  getFulfillmentPolicyGetByPolicyNameRoute,
  getFulfillmentPolicyRoute,
  postFulfillmentPolicyIndexRoute,
  putFulfillmentPolicyFulfillmentPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fulfillmentPolicyHandler = app
  .openapi(getFulfillmentPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFulfillmentPolicyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFulfillmentPolicyGetByPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFulfillmentPolicyFulfillmentPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFulfillmentPolicyFulfillmentPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFulfillmentPolicyFulfillmentPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
