import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionNameRoute,
  deleteIndexesIndexNameRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  getIndexesIndexNameRoute,
  getIndexesRoute,
  patchIndexesIndexNameRoute,
  postCollectionsRoute,
  postIndexesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexOperationsHandler = app
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
  .openapi(getIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
