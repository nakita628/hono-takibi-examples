import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsDeleteCollectionIdRoute,
  getCollectionsViewCollectionIdRoute,
  postCollectionsAddRoute,
  postCollectionsEditCollectionIdRoute,
  postCollectionsIndexFilterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(postCollectionsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsEditCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsDeleteCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsViewCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsIndexFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
