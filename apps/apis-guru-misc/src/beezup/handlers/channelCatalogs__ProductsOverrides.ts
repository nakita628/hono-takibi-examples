import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdRoute,
  getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute,
  postV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute,
  putV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__ProductsOverridesHandler = app
  .openapi(putV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
