import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2OrgsOrgIdLiveMigrationsLinkTokensRoute,
  getApiAtlasV2GroupsGroupIdLiveMigrationsLiveMigrationIdRoute,
  getApiAtlasV2GroupsGroupIdLiveMigrationsValidateValidationIdRoute,
  getApiAtlasV2OrgsOrgIdLiveMigrationsAvailableProjectsRoute,
  postApiAtlasV2GroupsGroupIdLiveMigrationsRoute,
  postApiAtlasV2GroupsGroupIdLiveMigrationsValidateRoute,
  postApiAtlasV2OrgsOrgIdLiveMigrationsLinkTokensRoute,
  putApiAtlasV2GroupsGroupIdLiveMigrationsLiveMigrationIdCutoverRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudMigrationServiceHandler = app
  .openapi(postApiAtlasV2GroupsGroupIdLiveMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdLiveMigrationsLiveMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2GroupsGroupIdLiveMigrationsLiveMigrationIdCutoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdLiveMigrationsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdLiveMigrationsValidateValidationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdLiveMigrationsAvailableProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdLiveMigrationsLinkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdLiveMigrationsLinkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
