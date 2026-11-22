import { OpenAPIHono } from '@hono/zod-openapi'
import { getVendorsIdRoute, getVendorsRoute } from '../routes'

const app = new OpenAPIHono()

export const vendorsHandler = app
  .openapi(getVendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVendorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
