import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SecretStorageCreateRoute,
  postV1SecretStorageDeleteRoute,
  postV1SecretStorageGetRoute,
  postV1SecretStorageListRoute,
  postV1SecretStorageMigrateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretStorageHandler = app
  .openapi(postV1SecretStorageCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretStorageListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretStorageDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretStorageGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretStorageMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
