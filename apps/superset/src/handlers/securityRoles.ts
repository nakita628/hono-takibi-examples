import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SecurityRolesPkRoute,
  getApiV1SecurityRolesIndexRoute,
  getApiV1SecurityRolesInfoRoute,
  getApiV1SecurityRolesPkRoute,
  getApiV1SecurityRolesRoleIdPermissionsIndexRoute,
  getApiV1SecurityRolesSearchIndexRoute,
  postApiV1SecurityRolesIndexRoute,
  postApiV1SecurityRolesRoleIdPermissionsRoute,
  putApiV1SecurityRolesPkRoute,
  putApiV1SecurityRolesRoleIdGroupsRoute,
  putApiV1SecurityRolesRoleIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityRolesHandler = app
  .openapi(getApiV1SecurityRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityRolesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityRolesSearchIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityRolesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityRolesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityRolesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityRolesRoleIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityRolesRoleIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityRolesRoleIdPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityRolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
