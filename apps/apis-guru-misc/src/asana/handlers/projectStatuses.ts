import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectStatusesProjectStatusGidRoute,
  getProjectsProjectGidProjectStatusesRoute,
  getProjectStatusesProjectStatusGidRoute,
  postProjectsProjectGidProjectStatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectStatusesHandler = app
  .openapi(deleteProjectStatusesProjectStatusGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectStatusesProjectStatusGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGidProjectStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidProjectStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
