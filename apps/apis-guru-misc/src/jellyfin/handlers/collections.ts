import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionIdItemsRoute,
  postCollectionsCollectionIdItemsRoute,
  postCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(postCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
