import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectsProjectIdServiceAccountRoute, getProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
