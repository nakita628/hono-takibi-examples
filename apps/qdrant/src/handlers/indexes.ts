import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionNameIndexFieldNameRoute,
  putCollectionsCollectionNameIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexesHandler = app
  .openapi(putCollectionsCollectionNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameIndexFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
