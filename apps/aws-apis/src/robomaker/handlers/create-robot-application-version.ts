import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateRobotApplicationVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const createRobotApplicationVersionHandler = app.openapi(
  postCreateRobotApplicationVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
