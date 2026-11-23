import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoleAliasesRoleAliasRoute,
  getRoleAliasesRoleAliasRoute,
  getRoleAliasesRoute,
  postRoleAliasesRoleAliasRoute,
  putRoleAliasesRoleAliasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleAliasesHandler = app
  .openapi(postRoleAliasesRoleAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleAliasesRoleAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleAliasesRoleAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoleAliasesRoleAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
