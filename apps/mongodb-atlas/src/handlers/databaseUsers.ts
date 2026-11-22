import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdDatabaseUsersDatabaseNameUsernameRoute,
  getApiAtlasV2GroupsGroupIdDatabaseUsersDatabaseNameUsernameRoute,
  getApiAtlasV2GroupsGroupIdDatabaseUsersRoute,
  patchApiAtlasV2GroupsGroupIdDatabaseUsersDatabaseNameUsernameRoute,
  postApiAtlasV2GroupsGroupIdDatabaseUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databaseUsersHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdDatabaseUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdDatabaseUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdDatabaseUsersDatabaseNameUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdDatabaseUsersDatabaseNameUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdDatabaseUsersDatabaseNameUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
