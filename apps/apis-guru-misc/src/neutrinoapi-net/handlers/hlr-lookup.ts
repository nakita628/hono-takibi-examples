import { OpenAPIHono } from '@hono/zod-openapi'
import { getHlrLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const hlrLookupHandler = app.openapi(getHlrLookupRoute, (c) => {
  throw new Error('Not implemented')
})
