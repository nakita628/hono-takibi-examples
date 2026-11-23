import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectsUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsUsersHandler = app.openapi(getProjectsUsersRoute, (c) => {
  throw new Error('Not implemented')
})
