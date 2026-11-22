import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectInstancesInstanceUsersRoute,
  getV1ProjectsProjectInstancesInstanceUsersNameRoute,
  getV1ProjectsProjectInstancesInstanceUsersRoute,
  postV1ProjectsProjectInstancesInstanceUsersRoute,
  putV1ProjectsProjectInstancesInstanceUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteV1ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
