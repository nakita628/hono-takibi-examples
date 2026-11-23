import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRolesRoleGidRoute,
  getRolesRoleGidRoute,
  getRolesRoute,
  postRolesRoute,
  putRolesRoleGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRolesRoleGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRolesRoleGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRolesRoleGidRoute, (c) => {
    throw new Error('Not implemented')
  })
