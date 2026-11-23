import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCatalogueCatalogueIdAssetAssetIdRoute,
  getCatalogueCatalogueIdAssetRoute,
  getCatalogueCatalogueIdRoute,
  getCatalogueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogueHandler = app
  .openapi(getCatalogueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogueCatalogueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogueCatalogueIdAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogueCatalogueIdAssetAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
