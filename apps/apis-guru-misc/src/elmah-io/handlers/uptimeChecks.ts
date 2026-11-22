import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3UptimechecksRoute } from '../routes'

const app = new OpenAPIHono()

export const uptimeChecksHandler = app.openapi(getV3UptimechecksRoute, (c) => {
  throw new Error('Not implemented')
})
