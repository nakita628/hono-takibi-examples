import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFiles202609FoldersFolderIdRoute,
  deleteFiles202609FoldersFolderPathRoute,
  getFiles202609FoldersFolderIdRoute,
  getFiles202609FoldersFolderPathRoute,
  getFiles202609FoldersSearchRoute,
  patchFiles202609FoldersFolderIdRoute,
  postFiles202609FoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(postFiles202609FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FoldersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFiles202609FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFiles202609FoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFiles202609FoldersFolderPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFiles202609FoldersFolderPathRoute, (c) => {
    throw new Error('Not implemented')
  })
