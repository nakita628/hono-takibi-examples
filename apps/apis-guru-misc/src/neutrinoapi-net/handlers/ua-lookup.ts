import { OpenAPIHono } from '@hono/zod-openapi'
import { getUaLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const uaLookupHandler = app.openapi(getUaLookupRoute, (c) => {
  throw new Error('Not implemented')
})
