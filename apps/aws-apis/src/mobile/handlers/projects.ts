import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteProjectsProjectIdRoute, getProjectsRoute, postProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
