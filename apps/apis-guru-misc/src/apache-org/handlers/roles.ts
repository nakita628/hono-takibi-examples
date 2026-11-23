import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRolesRoleNameRoute,
  getRolesRoleNameRoute,
  getRolesRoute,
  patchRolesRoleNameRoute,
  postRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
