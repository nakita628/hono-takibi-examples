import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionUidRoute,
  getCollectionsCollectionUidRoute,
  getCollectionsRoute,
  postCollectionsForkCollectionUidRoute,
  postCollectionsMergeRoute,
  postCollectionsRoute,
  putCollectionsCollectionUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsForkCollectionUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionUidRoute, (c) => {
    throw new Error('Not implemented')
  })
