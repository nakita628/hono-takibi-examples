import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2StoreRoute } from '../routes'

const app = new OpenAPIHono()

export const storeHandler = app.openapi(getV2StoreRoute, (c) => {
  throw new Error('Not implemented')
})
