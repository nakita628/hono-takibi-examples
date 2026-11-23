import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateRobotApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateRobotApplicationHandler = app.openapi(postUpdateRobotApplicationRoute, (c) => {
  throw new Error('Not implemented')
})
