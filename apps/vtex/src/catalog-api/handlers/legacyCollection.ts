import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtCollectionCollectionIdRoute,
  getApiCatalogPvtCollectionCollectionIdRoute,
  postApiCatalogPvtCollectionRoute,
  putApiCatalogPvtCollectionCollectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legacyCollectionHandler = app
  .openapi(postApiCatalogPvtCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtCollectionCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtCollectionCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
