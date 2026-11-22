import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserChannelCatalogsChannelCatalogIdProductsCountersRoute,
  getV2UserChannelCatalogsChannelCatalogIdProductsProductIdRoute,
  postV2UserChannelCatalogsChannelCatalogIdProductsExportRoute,
  postV2UserChannelCatalogsChannelCatalogIdProductsRoute,
  postV2UserChannelCatalogsProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__ProductsHandler = app
  .openapi(postV2UserChannelCatalogsProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdProductsCountersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
