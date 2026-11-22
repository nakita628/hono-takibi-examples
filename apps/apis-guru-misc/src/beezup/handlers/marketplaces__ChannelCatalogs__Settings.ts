import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesRoute,
  getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute,
  postV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__ChannelCatalogs__SettingsHandler = app
  .openapi(getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
