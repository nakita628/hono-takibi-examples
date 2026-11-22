import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdminFulfillmentsIdCancelRoute,
  postAdminFulfillmentsIdShipmentRoute,
  postAdminFulfillmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fulfillmentsHandler = app
  .openapi(postAdminFulfillmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFulfillmentsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFulfillmentsIdShipmentRoute, (c) => {
    throw new Error('Not implemented')
  })
