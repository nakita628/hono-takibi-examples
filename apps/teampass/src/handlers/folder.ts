import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFolderDeleteRoute,
  getFolderListFoldersRoute,
  getFolderWritableFoldersRoute,
  postFolderCreateRoute,
  putFolderUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const folderHandler = app
  .openapi(getFolderListFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFolderWritableFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFolderCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFolderUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFolderDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
