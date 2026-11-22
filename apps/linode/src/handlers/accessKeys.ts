import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionObjectStorageKeysKeyIdRoute,
  getApiVersionObjectStorageKeysKeyIdRoute,
  getApiVersionObjectStorageKeysRoute,
  postApiVersionObjectStorageKeysRoute,
  putApiVersionObjectStorageKeysKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessKeysHandler = app
  .openapi(postApiVersionObjectStorageKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionObjectStorageKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionObjectStorageKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
