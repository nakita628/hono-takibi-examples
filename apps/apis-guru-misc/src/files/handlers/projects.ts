import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsIdRoute,
  getProjectsIdRoute,
  getProjectsRoute,
  patchProjectsIdRoute,
  postProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
