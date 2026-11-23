import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectIdArticlesRoute,
  getProjectsProjectIdRoute,
  getProjectsRoute,
  postProjectsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
