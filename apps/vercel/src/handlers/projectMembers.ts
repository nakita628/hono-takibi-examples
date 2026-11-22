import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsIdOrNameMembersUidRoute,
  getV1ProjectsIdOrNameMembersRoute,
  postV1ProjectsIdOrNameMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectMembersHandler = app
  .openapi(getV1ProjectsIdOrNameMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdOrNameMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
