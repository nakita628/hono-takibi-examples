import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchedulesRoute } from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app.openapi(getSchedulesRoute, (c) => {
  throw new Error('Not implemented')
})
