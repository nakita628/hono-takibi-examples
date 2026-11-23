import { OpenAPIHono } from '@hono/zod-openapi'
import { putPreflightAutocheckinTicketnumberRoute } from '../routes'

const app = new OpenAPIHono()

export const preflightHandler = app.openapi(putPreflightAutocheckinTicketnumberRoute, (c) => {
  throw new Error('Not implemented')
})
