import { OpenAPIHono } from '@hono/zod-openapi'
import { getIPLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const IPLookupHandler = app.openapi(getIPLookupRoute, (c) => {
  throw new Error('Not implemented')
})
