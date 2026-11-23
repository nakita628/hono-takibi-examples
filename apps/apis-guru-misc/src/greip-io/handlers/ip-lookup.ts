import { OpenAPIHono } from '@hono/zod-openapi'
import { getIPLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const ipLookupHandler = app.openapi(getIPLookupRoute, (c) => {
  throw new Error('Not implemented')
})
