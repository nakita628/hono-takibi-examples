import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersFolderIdRoute,
  getFoldersIndexRoute,
  postFoldersFolderIdMoveRoute,
  postFoldersFolderIdRenameRoute,
  postFoldersIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getFoldersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersFolderIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersFolderIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
