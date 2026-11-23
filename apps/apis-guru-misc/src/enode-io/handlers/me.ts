import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteMeVendorsVendorRoute, getMeRoute } from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeVendorsVendorRoute, (c) => {
    throw new Error('Not implemented')
  })
