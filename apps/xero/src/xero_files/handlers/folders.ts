import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersFolderIdRoute,
  getFoldersFolderIdRoute,
  getFoldersRoute,
  postFoldersRoute,
  putFoldersFolderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
