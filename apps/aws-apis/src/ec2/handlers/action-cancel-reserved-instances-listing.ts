import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCancelReservedInstancesListingRoute,
  postActionCancelReservedInstancesListingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCancelReservedInstancesListingHandler = app
  .openapi(getActionCancelReservedInstancesListingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelReservedInstancesListingRoute, (c) => {
    throw new Error('Not implemented')
  })
