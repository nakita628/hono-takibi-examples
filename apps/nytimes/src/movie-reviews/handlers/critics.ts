import { OpenAPIHono } from '@hono/zod-openapi'
import { getCriticsResourceTypeJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const criticsHandler = app.openapi(getCriticsResourceTypeJsonRoute, (c) => {
  throw new Error('Not implemented')
})
