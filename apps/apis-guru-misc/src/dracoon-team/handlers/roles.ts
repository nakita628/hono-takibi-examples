import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4RolesRoleIdGroupsRoute,
  deleteV4RolesRoleIdUsersRoute,
  getV4RolesRoleIdGroupsRoute,
  getV4RolesRoleIdUsersRoute,
  getV4RolesRoute,
  postV4RolesRoleIdGroupsRoute,
  postV4RolesRoleIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getV4RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4RolesRoleIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4RolesRoleIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4RolesRoleIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4RolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4RolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4RolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
