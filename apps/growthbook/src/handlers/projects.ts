import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsIdRoute,
  getV1ProjectsIdRoute,
  getV1ProjectsRoute,
  postV1ProjectsRoute,
  putV1ProjectsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
