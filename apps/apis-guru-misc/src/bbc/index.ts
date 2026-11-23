import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAvailabilitiesRoute,
  getBroadcastsRoute,
  getGroupsRoute,
  getImagesRoute,
  getItemsRoute,
  getMasterBrandsRoute,
  getPeopleRoute,
  getPipsRoute,
  getProgrammeDetailsRoute,
  getProgrammesRoute,
  getPromotionsRoute,
  getRoute,
  getSchedulesRoute,
  getSchemaRoute,
  getServicesRoute,
  getV1BrandsPidFranchisesIndexRoute,
  getV1BrandsPidRoute,
  getV1EpisodesPidAncestorsIndexRoute,
  getV1EpisodesPidFormatsIndexRoute,
  getV1EpisodesPidGenreGroupsIndexRoute,
  getV1EpisodesPidRoute,
  getV1ImagesPidRoute,
  getV1MasterBrandsMbidRoute,
  getV1PromotionsPidRoute,
  getVersionsRoute,
} from './routes'
import {
  getAvailabilitiesRouteHandler,
  getBroadcastsRouteHandler,
  getGroupsRouteHandler,
  getImagesRouteHandler,
  getItemsRouteHandler,
  getMasterBrandsRouteHandler,
  getPeopleRouteHandler,
  getPipsRouteHandler,
  getProgrammeDetailsRouteHandler,
  getProgrammesRouteHandler,
  getPromotionsRouteHandler,
  getRouteHandler,
  getSchedulesRouteHandler,
  getSchemaRouteHandler,
  getServicesRouteHandler,
  getV1BrandsPidFranchisesIndexRouteHandler,
  getV1BrandsPidRouteHandler,
  getV1EpisodesPidAncestorsIndexRouteHandler,
  getV1EpisodesPidFormatsIndexRouteHandler,
  getV1EpisodesPidGenreGroupsIndexRouteHandler,
  getV1EpisodesPidRouteHandler,
  getV1ImagesPidRouteHandler,
  getV1MasterBrandsMbidRouteHandler,
  getV1PromotionsPidRouteHandler,
  getVersionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getAvailabilitiesRoute, getAvailabilitiesRouteHandler)
  .openapi(getBroadcastsRoute, getBroadcastsRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(getImagesRoute, getImagesRouteHandler)
  .openapi(getItemsRoute, getItemsRouteHandler)
  .openapi(getMasterBrandsRoute, getMasterBrandsRouteHandler)
  .openapi(getPeopleRoute, getPeopleRouteHandler)
  .openapi(getPipsRoute, getPipsRouteHandler)
  .openapi(getProgrammeDetailsRoute, getProgrammeDetailsRouteHandler)
  .openapi(getProgrammesRoute, getProgrammesRouteHandler)
  .openapi(getPromotionsRoute, getPromotionsRouteHandler)
  .openapi(getSchedulesRoute, getSchedulesRouteHandler)
  .openapi(getSchemaRoute, getSchemaRouteHandler)
  .openapi(getServicesRoute, getServicesRouteHandler)
  .openapi(getV1BrandsPidRoute, getV1BrandsPidRouteHandler)
  .openapi(getV1BrandsPidFranchisesIndexRoute, getV1BrandsPidFranchisesIndexRouteHandler)
  .openapi(getV1EpisodesPidRoute, getV1EpisodesPidRouteHandler)
  .openapi(getV1EpisodesPidAncestorsIndexRoute, getV1EpisodesPidAncestorsIndexRouteHandler)
  .openapi(getV1EpisodesPidFormatsIndexRoute, getV1EpisodesPidFormatsIndexRouteHandler)
  .openapi(getV1EpisodesPidGenreGroupsIndexRoute, getV1EpisodesPidGenreGroupsIndexRouteHandler)
  .openapi(getV1ImagesPidRoute, getV1ImagesPidRouteHandler)
  .openapi(getV1MasterBrandsMbidRoute, getV1MasterBrandsMbidRouteHandler)
  .openapi(getV1PromotionsPidRoute, getV1PromotionsPidRouteHandler)
  .openapi(getVersionsRoute, getVersionsRouteHandler)

export default app
