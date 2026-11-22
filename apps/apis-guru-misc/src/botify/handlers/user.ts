import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectsUsernameRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(getProjectsUsernameRoute, (c) => {
  throw new Error('Not implemented')
})
