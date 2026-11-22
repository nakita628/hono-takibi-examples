import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdRefRoute,
  getDirectoryRolesDirectoryRoleIdMembersRefRoute,
  getDirectoryRolesDirectoryRoleIdMembersRoute,
  postDirectoryRolesDirectoryRoleIdMembersRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRolesDirectoryObjectHandler = app
  .openapi(getDirectoryRolesDirectoryRoleIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesDirectoryRoleIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
