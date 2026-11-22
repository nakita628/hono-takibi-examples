import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageKvsIdKeysKeyRoute,
  getStorageKvsIdKeysKeyRoute,
  getStorageKvsIdKeysRoute,
  putStorageKvsIdKeysKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kvKeysHandler = app
  .openapi(getStorageKvsIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageKvsIdKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageKvsIdKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStorageKvsIdKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
