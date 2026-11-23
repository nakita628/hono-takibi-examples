import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteRobotRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteRobotHandler = app.openapi(postDeleteRobotRoute, (c) => {
  throw new Error('Not implemented')
})
