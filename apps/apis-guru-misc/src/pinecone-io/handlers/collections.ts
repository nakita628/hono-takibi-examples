import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionNameRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  postCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
