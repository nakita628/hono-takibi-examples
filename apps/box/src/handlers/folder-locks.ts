import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFolderLocksFolderLockIdRoute,
  getFolderLocksRoute,
  postFolderLocksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const folderLocksHandler = app
  .openapi(getFolderLocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFolderLocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFolderLocksFolderLockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
