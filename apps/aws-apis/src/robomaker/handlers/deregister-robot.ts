import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeregisterRobotRoute } from '../routes'

const app = new OpenAPIHono()

export const deregisterRobotHandler = app.openapi(postDeregisterRobotRoute, (c) => {
  throw new Error('Not implemented')
})
