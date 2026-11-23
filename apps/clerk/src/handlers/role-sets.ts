import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoleSetsRoleSetKeyOrIdRoute,
  getRoleSetsRoute,
  patchRoleSetsRoleSetKeyOrIdRoute,
  postRoleSetsRoleSetKeyOrIdReplaceRoute,
  postRoleSetsRoleSetKeyOrIdRolesReplaceRoute,
  postRoleSetsRoleSetKeyOrIdRolesRoute,
  postRoleSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleSetsHandler = app
  .openapi(getRoleSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleSetsRoleSetKeyOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleSetsRoleSetKeyOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleSetsRoleSetKeyOrIdReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleSetsRoleSetKeyOrIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleSetsRoleSetKeyOrIdRolesReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
