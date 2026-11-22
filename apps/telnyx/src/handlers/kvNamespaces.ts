import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageKvsIdRoute,
  getStorageKvsIdRoute,
  getStorageKvsRoute,
  postStorageKvsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kvNamespacesHandler = app
  .openapi(getStorageKvsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageKvsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageKvsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageKvsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
