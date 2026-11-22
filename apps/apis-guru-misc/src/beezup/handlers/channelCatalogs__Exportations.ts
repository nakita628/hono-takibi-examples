import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserChannelCatalogsChannelCatalogIdExportationsCacheRoute,
  getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryRoute,
  postV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__ExportationsHandler = app
  .openapi(getV2UserChannelCatalogsChannelCatalogIdExportationsCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
