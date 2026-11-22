import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalRoutesRouteRoute,
  getProjectsProjectGlobalRoutesRoute,
  getProjectsProjectGlobalRoutesRouteRoute,
  postProjectsProjectGlobalRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routesHandler = app
  .openapi(getProjectsProjectGlobalRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalRoutesRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalRoutesRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
