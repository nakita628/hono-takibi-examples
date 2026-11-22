import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CatalogEntityEntityIdRoute,
  deleteApiV2CatalogKindKindIdRoute,
  getApiV2CatalogEntityRoute,
  getApiV2CatalogKindRoute,
  getApiV2CatalogRelationRoute,
  postApiV2CatalogEntityPreviewRoute,
  postApiV2CatalogEntityRoute,
  postApiV2CatalogKindRoute,
} from '../routes'

const app = new OpenAPIHono()

export const softwareCatalogHandler = app
  .openapi(getApiV2CatalogEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CatalogEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CatalogEntityPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CatalogEntityEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CatalogKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CatalogKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CatalogKindKindIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CatalogRelationRoute, (c) => {
    throw new Error('Not implemented')
  })
