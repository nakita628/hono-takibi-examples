import { OpenAPIHono } from '@hono/zod-openapi'
import { getBinLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const binLookupHandler = app.openapi(getBinLookupRoute, (c) => {
  throw new Error('Not implemented')
})
