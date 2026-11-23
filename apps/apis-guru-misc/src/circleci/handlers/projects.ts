import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app.openapi(getProjectsRoute, (c) => {
  throw new Error('Not implemented')
})
