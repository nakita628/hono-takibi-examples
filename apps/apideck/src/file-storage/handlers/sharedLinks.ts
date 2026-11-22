import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileStorageSharedLinksIdRoute,
  getFileStorageSharedLinksIdRoute,
  getFileStorageSharedLinksRoute,
  patchFileStorageSharedLinksIdRoute,
  postFileStorageSharedLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedLinksHandler = app
  .openapi(getFileStorageSharedLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileStorageSharedLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFileStorageSharedLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileStorageSharedLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFileStorageSharedLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
