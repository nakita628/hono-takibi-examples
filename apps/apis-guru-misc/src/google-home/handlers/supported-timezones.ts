import { OpenAPIHono } from '@hono/zod-openapi'
import { getSupportedTimezonesRoute } from '../routes'

const app = new OpenAPIHono()

export const supportedTimezonesHandler = app.openapi(getSupportedTimezonesRoute, (c) => {
  throw new Error('Not implemented')
})
