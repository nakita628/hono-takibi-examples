import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateRobotRoute } from '../routes'

const app = new OpenAPIHono()

export const createRobotHandler = app.openapi(postCreateRobotRoute, (c) => {
  throw new Error('Not implemented')
})
