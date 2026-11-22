import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminFulfillmentProvidersIdOptionsRoute,
  getAdminFulfillmentProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fulfillmentProvidersHandler = app
  .openapi(getAdminFulfillmentProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFulfillmentProvidersIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
