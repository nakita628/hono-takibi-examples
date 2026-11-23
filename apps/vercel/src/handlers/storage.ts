import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageStoresBlobIdRoute,
  getStorageStoresIdRoute,
  postStorageStoresBlobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageHandler = app
  .openapi(getStorageStoresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageStoresBlobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageStoresBlobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
