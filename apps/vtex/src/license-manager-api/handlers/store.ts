import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVlmAccountStoresRoute } from '../routes'

const app = new OpenAPIHono()

export const storeHandler = app.openapi(getApiVlmAccountStoresRoute, (c) => {
  throw new Error('Not implemented')
})
