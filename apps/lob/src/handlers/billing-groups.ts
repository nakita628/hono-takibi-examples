import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillingGroupsBgIdRoute,
  getBillingGroupsRoute,
  postBillingGroupsBgIdRoute,
  postBillingGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingGroupsHandler = app
  .openapi(getBillingGroupsBgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingGroupsBgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
