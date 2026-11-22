import { OpenAPIHono } from '@hono/zod-openapi'
import { postListRobotApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const listRobotApplicationsHandler = app.openapi(postListRobotApplicationsRoute, (c) => {
  throw new Error('Not implemented')
})
