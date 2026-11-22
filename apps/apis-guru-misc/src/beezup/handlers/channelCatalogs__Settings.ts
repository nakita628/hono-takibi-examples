import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2UserChannelCatalogsChannelCatalogIdDisableRoute,
  postV2UserChannelCatalogsChannelCatalogIdEnableRoute,
  putV2UserChannelCatalogsChannelCatalogIdSettingsCostRoute,
  putV2UserChannelCatalogsChannelCatalogIdSettingsGeneralRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__SettingsHandler = app
  .openapi(postV2UserChannelCatalogsChannelCatalogIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserChannelCatalogsChannelCatalogIdSettingsCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserChannelCatalogsChannelCatalogIdSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
