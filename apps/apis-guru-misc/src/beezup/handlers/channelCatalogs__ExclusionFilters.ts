import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute,
  putV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__ExclusionFiltersHandler = app
  .openapi(getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
