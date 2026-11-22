import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute,
  putSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
