import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBillingGroupsBillingGroupNameRoute,
  getBillingGroupsBillingGroupNameRoute,
  getBillingGroupsBillingGroupNameThingsRoute,
  getBillingGroupsRoute,
  patchBillingGroupsBillingGroupNameRoute,
  postBillingGroupsBillingGroupNameRoute,
  putBillingGroupsAddThingToBillingGroupRoute,
  putBillingGroupsRemoveThingFromBillingGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingGroupsHandler = app
  .openapi(putBillingGroupsAddThingToBillingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingGroupsBillingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBillingGroupsBillingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupsBillingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBillingGroupsBillingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingGroupsBillingGroupNameThingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBillingGroupsRemoveThingFromBillingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
