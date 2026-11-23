import { OpenAPIHono } from '@hono/zod-openapi'
import { getSymbolSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const symbolSearchHandler = app.openapi(getSymbolSearchRoute, (c) => {
  throw new Error('Not implemented')
})
