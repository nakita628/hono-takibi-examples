import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RolesRoleIdPermissionsRoute,
  deleteApiV2RolesRoleIdRoute,
  deleteApiV2RolesRoleIdUsersRoute,
  getApiV2PermissionsRoute,
  getApiV2RolesRoleIdPermissionsRoute,
  getApiV2RolesRoleIdRoute,
  getApiV2RolesRoleIdUsersRoute,
  getApiV2RolesRoute,
  getApiV2RolesTemplatesRoute,
  patchApiV2RolesRoleIdRoute,
  postApiV2RolesRoleIdCloneRoute,
  postApiV2RolesRoleIdPermissionsRoute,
  postApiV2RolesRoleIdUsersRoute,
  postApiV2RolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getApiV2PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RolesRoleIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RolesRoleIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesRoleIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RolesRoleIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
