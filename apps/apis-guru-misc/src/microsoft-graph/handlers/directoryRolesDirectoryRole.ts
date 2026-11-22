import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryRolesDirectoryRoleIdRoute,
  getDirectoryRolesDirectoryRoleIdRoute,
  getDirectoryRolesRoute,
  patchDirectoryRolesDirectoryRoleIdRoute,
  postDirectoryRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRolesDirectoryRoleHandler = app
  .openapi(getDirectoryRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRolesDirectoryRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRolesDirectoryRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
