import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegisterRobotRoute } from '../routes'

const app = new OpenAPIHono()

export const registerRobotHandler = app.openapi(postRegisterRobotRoute, (c) => {
  throw new Error('Not implemented')
})
