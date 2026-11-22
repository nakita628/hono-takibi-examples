import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CatalogCollectionsCollectionIdItemsRoute,
  deleteV2CatalogCollectionsCollectionIdRoute,
  getV2CatalogCollectionsRoute,
  getV2CatalogSearchRoute,
  patchV2CatalogCollectionsCollectionIdRoute,
  postV2CatalogCollectionsCollectionIdItemsRoute,
  postV2CatalogCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogHandler = app
  .openapi(getV2CatalogCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CatalogCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CatalogCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CatalogCollectionsCollectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogCollectionsCollectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CatalogSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
