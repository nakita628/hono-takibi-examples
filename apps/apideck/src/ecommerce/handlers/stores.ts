import { OpenAPIHono } from '@hono/zod-openapi'
import { getEcommerceStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const storesHandler = app.openapi(getEcommerceStoreRoute, (c) => {
  throw new Error('Not implemented')
})
