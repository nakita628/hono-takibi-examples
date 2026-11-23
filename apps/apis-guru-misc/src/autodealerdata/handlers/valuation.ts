import { OpenAPIHono } from '@hono/zod-openapi'
import { getValuationRoute } from '../routes'

const app = new OpenAPIHono()

export const valuationHandler = app.openapi(getValuationRoute, (c) => {
  throw new Error('Not implemented')
})
