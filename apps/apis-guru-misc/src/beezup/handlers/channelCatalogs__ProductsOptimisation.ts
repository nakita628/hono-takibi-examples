import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableRoute,
  postV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__ProductsOptimisationHandler = app
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableRoute, (c) => {
    throw new Error('Not implemented')
  })
