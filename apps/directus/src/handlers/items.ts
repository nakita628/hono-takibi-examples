import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteItemsCollectionIdRoute,
  deleteItemsCollectionRoute,
  getItemsCollectionIdRoute,
  getItemsCollectionRoute,
  patchItemsCollectionIdRoute,
  patchItemsCollectionRoute,
  postItemsCollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getItemsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchItemsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchItemsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
