import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UsersUserIdRoute,
  getV2UsersRoute,
  getV2UsersUserIdRoute,
  patchV2UsersUserIdRoute,
  postV2UsersRoute,
  postV2UsersUserIdBulkEditAssignedUserRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdBulkEditAssignedUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
