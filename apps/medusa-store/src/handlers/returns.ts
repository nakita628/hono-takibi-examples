import { OpenAPIHono } from '@hono/zod-openapi'
import { postStoreReturnsRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsHandler = app.openapi(postStoreReturnsRoute, (c) => {
  throw new Error('Not implemented')
})
