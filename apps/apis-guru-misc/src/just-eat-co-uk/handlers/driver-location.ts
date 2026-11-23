import { OpenAPIHono } from '@hono/zod-openapi'
import { putDriverLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const driverLocationHandler = app.openapi(putDriverLocationRoute, (c) => {
  throw new Error('Not implemented')
})
