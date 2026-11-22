import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBillingGroupsIdRoute,
  getBillingGroupsIdRoute,
  getBillingGroupsRoute,
  patchBillingGroupsIdRoute,
  postBillingGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingGroupsHandler = app
  .openapi(getBillingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBillingGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBillingGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
