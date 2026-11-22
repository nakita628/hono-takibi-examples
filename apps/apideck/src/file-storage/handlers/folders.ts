import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileStorageFoldersIdRoute,
  getFileStorageFoldersIdRoute,
  patchFileStorageFoldersIdRoute,
  postFileStorageFoldersIdCopyRoute,
  postFileStorageFoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(postFileStorageFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageFoldersIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
