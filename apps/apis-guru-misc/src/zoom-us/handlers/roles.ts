import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRolesRoleIdMembersMemberIdRoute,
  deleteRolesRoleIdRoute,
  getRolesRoleIdMembersRoute,
  getRolesRoleIdRoute,
  getRolesRoute,
  patchRolesRoleIdRoute,
  postRolesRoleIdMembersRoute,
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
  .openapi(deleteRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRolesRoleIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRolesRoleIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRolesRoleIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
