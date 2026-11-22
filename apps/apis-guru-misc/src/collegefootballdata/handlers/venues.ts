import { OpenAPIHono } from '@hono/zod-openapi'
import { getVenuesRoute } from '../routes'

const app = new OpenAPIHono()

export const venuesHandler = app.openapi(getVenuesRoute, (c) => {
  throw new Error('Not implemented')
})
