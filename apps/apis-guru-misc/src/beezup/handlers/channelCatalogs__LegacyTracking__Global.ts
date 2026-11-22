import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdRoute,
  getV2UserLegacyTrackingChannelCatalogsIndexRoute,
  postV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__LegacyTracking__GlobalHandler = app
  .openapi(getV2UserLegacyTrackingChannelCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
