import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCollectionsCollectionIdItemsRoute,
  getCollectionsCollectionIdRoute,
  getCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
