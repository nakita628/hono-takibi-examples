import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2FoldersFolderIdFilesRoute,
  getV2FoldersFolderIdFoldersRoute,
  getV2FoldersFolderIdMetaRoute,
  getV2TeamsTeamIdFoldersRoute,
  postV1TeamsTeamIdFoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(postV1TeamsTeamIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FoldersFolderIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FoldersFolderIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FoldersFolderIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
