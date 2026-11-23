import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCollectionsCollectionIdArticlesRoute,
  getCollectionsCollectionIdRoute,
  getCollectionsCollectionIdVersionsRoute,
  getCollectionsCollectionIdVersionsVersionIdRoute,
  getCollectionsRoute,
  postCollectionsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
