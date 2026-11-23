import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateRobotApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const createRobotApplicationHandler = app.openapi(postCreateRobotApplicationRoute, (c) => {
  throw new Error('Not implemented')
})
