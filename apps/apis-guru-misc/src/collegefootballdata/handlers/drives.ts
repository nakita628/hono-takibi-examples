import { OpenAPIHono } from '@hono/zod-openapi'
import { getDrivesRoute } from '../routes'

const app = new OpenAPIHono()

export const drivesHandler = app.openapi(getDrivesRoute, (c) => {
  throw new Error('Not implemented')
})
