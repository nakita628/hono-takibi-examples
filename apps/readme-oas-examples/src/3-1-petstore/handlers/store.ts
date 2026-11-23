import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoreOrderOrderIdRoute,
  getStoreInventoryRoute,
  getStoreOrderOrderIdRoute,
  postStoreOrderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storeHandler = app
  .openapi(getStoreInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoreOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
