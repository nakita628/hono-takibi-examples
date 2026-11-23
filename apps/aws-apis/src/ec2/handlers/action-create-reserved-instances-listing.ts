import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateReservedInstancesListingRoute,
  postActionCreateReservedInstancesListingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateReservedInstancesListingHandler = app
  .openapi(getActionCreateReservedInstancesListingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateReservedInstancesListingRoute, (c) => {
    throw new Error('Not implemented')
  })
