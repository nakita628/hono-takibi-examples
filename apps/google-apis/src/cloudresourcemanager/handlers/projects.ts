import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3ProjectsRoute,
  getV3ProjectsSearchRoute,
  postV3NameMoveRoute,
  postV3NameUndeleteRoute,
  postV3ProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV3ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ProjectsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3NameMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3NameUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
