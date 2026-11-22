import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteItemsIdRoute,
  getItemsIdRoute,
  getItemsRoute,
  postItemsRoute,
  putItemsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
