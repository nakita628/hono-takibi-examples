import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoleNameRoute,
  getApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoleNameRoute,
  getApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoute,
  patchApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoleNameRoute,
  postApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customDatabaseRolesHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdCustomDBRolesRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
