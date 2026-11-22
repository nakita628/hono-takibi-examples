import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserChannelCatalogsChannelCatalogIdCategoriesRoute,
  postV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureRoute,
  postV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingRoute,
  postV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__CategoriesHandler = app
  .openapi(getV2UserChannelCatalogsChannelCatalogIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
