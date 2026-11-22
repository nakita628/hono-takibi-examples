import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionNameRoute,
  deleteCollectionsCollectionNameVectorsVectorNameRoute,
  getCollectionsCollectionNameExistsRoute,
  getCollectionsCollectionNameOptimizationsRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  patchCollectionsCollectionNameRoute,
  putCollectionsCollectionNameRoute,
  putCollectionsCollectionNameVectorsVectorNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNameVectorsVectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameVectorsVectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
