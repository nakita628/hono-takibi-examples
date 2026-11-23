import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteRobotApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteRobotApplicationHandler = app.openapi(postDeleteRobotApplicationRoute, (c) => {
  throw new Error('Not implemented')
})
