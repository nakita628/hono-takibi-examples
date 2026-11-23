import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const openSearchHandler = app.openapi(getOpenSearchRoute, (c) => {
  throw new Error('Not implemented')
})
