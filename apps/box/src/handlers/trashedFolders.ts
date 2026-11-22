import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersFolderIdTrashRoute,
  getFoldersFolderIdTrashRoute,
  postFoldersFolderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trashedFoldersHandler = app
  .openapi(postFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersFolderIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
