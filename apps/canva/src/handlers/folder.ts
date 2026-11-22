import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FoldersFolderIdRoute,
  getV1FoldersFolderIdItemsRoute,
  getV1FoldersFolderIdRoute,
  patchV1FoldersFolderIdRoute,
  postV1FoldersMoveRoute,
  postV1FoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const folderHandler = app
  .openapi(deleteV1FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FoldersFolderIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FoldersMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
