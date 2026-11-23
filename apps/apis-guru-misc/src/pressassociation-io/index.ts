import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssetAssetIdContributorRoute,
  getAssetAssetIdRoute,
  getAssetRoute,
  getCatalogueCatalogueIdAssetAssetIdRoute,
  getCatalogueCatalogueIdAssetRoute,
  getCatalogueCatalogueIdRoute,
  getCatalogueRoute,
  getChannelChannelIdRoute,
  getChannelRoute,
  getContributorContributorIdRoute,
  getContributorRoute,
  getFeatureFeatureIdRoute,
  getFeatureRoute,
  getFeatureTypeRoute,
  getPlatformPlatformIdRegionRoute,
  getPlatformPlatformIdRoute,
  getPlatformRoute,
  getScheduleRoute,
} from './routes'
import {
  getAssetAssetIdContributorRouteHandler,
  getAssetAssetIdRouteHandler,
  getAssetRouteHandler,
  getCatalogueCatalogueIdAssetAssetIdRouteHandler,
  getCatalogueCatalogueIdAssetRouteHandler,
  getCatalogueCatalogueIdRouteHandler,
  getCatalogueRouteHandler,
  getChannelChannelIdRouteHandler,
  getChannelRouteHandler,
  getContributorContributorIdRouteHandler,
  getContributorRouteHandler,
  getFeatureFeatureIdRouteHandler,
  getFeatureRouteHandler,
  getFeatureTypeRouteHandler,
  getPlatformPlatformIdRegionRouteHandler,
  getPlatformPlatformIdRouteHandler,
  getPlatformRouteHandler,
  getScheduleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAssetRoute, getAssetRouteHandler)
  .openapi(getAssetAssetIdRoute, getAssetAssetIdRouteHandler)
  .openapi(getAssetAssetIdContributorRoute, getAssetAssetIdContributorRouteHandler)
  .openapi(getCatalogueRoute, getCatalogueRouteHandler)
  .openapi(getCatalogueCatalogueIdRoute, getCatalogueCatalogueIdRouteHandler)
  .openapi(getCatalogueCatalogueIdAssetRoute, getCatalogueCatalogueIdAssetRouteHandler)
  .openapi(
    getCatalogueCatalogueIdAssetAssetIdRoute,
    getCatalogueCatalogueIdAssetAssetIdRouteHandler,
  )
  .openapi(getChannelRoute, getChannelRouteHandler)
  .openapi(getChannelChannelIdRoute, getChannelChannelIdRouteHandler)
  .openapi(getContributorRoute, getContributorRouteHandler)
  .openapi(getContributorContributorIdRoute, getContributorContributorIdRouteHandler)
  .openapi(getFeatureRoute, getFeatureRouteHandler)
  .openapi(getFeatureTypeRoute, getFeatureTypeRouteHandler)
  .openapi(getFeatureFeatureIdRoute, getFeatureFeatureIdRouteHandler)
  .openapi(getPlatformRoute, getPlatformRouteHandler)
  .openapi(getPlatformPlatformIdRoute, getPlatformPlatformIdRouteHandler)
  .openapi(getPlatformPlatformIdRegionRoute, getPlatformPlatformIdRegionRouteHandler)
  .openapi(getScheduleRoute, getScheduleRouteHandler)

export default app
