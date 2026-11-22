import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersFolderIdRoute,
  getFoldersFolderIdItemsRoute,
  getFoldersFolderIdRoute,
  postFoldersFolderIdCopyRoute,
  postFoldersRoute,
  putFoldersFolderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersFolderIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
