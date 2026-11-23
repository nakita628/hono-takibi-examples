import { OpenAPIHono } from '@hono/zod-openapi'
import { getSupportedLocalesRoute } from '../routes'

const app = new OpenAPIHono()

export const supportedLocalesHandler = app.openapi(getSupportedLocalesRoute, (c) => {
  throw new Error('Not implemented')
})
