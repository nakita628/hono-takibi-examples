import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClassificationInclusionsIdRoute,
  getClassificationInclusionsRoute,
  getClassificationsIdRoute,
  getClassificationsRoute,
  getCreditsIdRoute,
  getCreditsRoute,
  getEpisodesIdNextSiblingRoute,
  getEpisodesIdPreviousSiblingRoute,
  getEpisodesIdRoute,
  getEpisodesRoute,
  getImagesIdRoute,
  getImagesRoute,
  getMediaAssetsIdRoute,
  getMediaAssetsRoute,
  getNetworksIdRoute,
  getNetworksRoute,
  getPeopleIdRoute,
  getPeopleRoute,
  getSeasonsIdRoute,
  getSeasonsRoute,
  getSeriesIdRoute,
  getSeriesRoute,
} from './routes'
import {
  getClassificationInclusionsIdRouteHandler,
  getClassificationInclusionsRouteHandler,
  getClassificationsIdRouteHandler,
  getClassificationsRouteHandler,
  getCreditsIdRouteHandler,
  getCreditsRouteHandler,
  getEpisodesIdNextSiblingRouteHandler,
  getEpisodesIdPreviousSiblingRouteHandler,
  getEpisodesIdRouteHandler,
  getEpisodesRouteHandler,
  getImagesIdRouteHandler,
  getImagesRouteHandler,
  getMediaAssetsIdRouteHandler,
  getMediaAssetsRouteHandler,
  getNetworksIdRouteHandler,
  getNetworksRouteHandler,
  getPeopleIdRouteHandler,
  getPeopleRouteHandler,
  getSeasonsIdRouteHandler,
  getSeasonsRouteHandler,
  getSeriesIdRouteHandler,
  getSeriesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getClassificationInclusionsRoute, getClassificationInclusionsRouteHandler)
  .openapi(getClassificationInclusionsIdRoute, getClassificationInclusionsIdRouteHandler)
  .openapi(getClassificationsRoute, getClassificationsRouteHandler)
  .openapi(getClassificationsIdRoute, getClassificationsIdRouteHandler)
  .openapi(getCreditsRoute, getCreditsRouteHandler)
  .openapi(getCreditsIdRoute, getCreditsIdRouteHandler)
  .openapi(getEpisodesRoute, getEpisodesRouteHandler)
  .openapi(getEpisodesIdRoute, getEpisodesIdRouteHandler)
  .openapi(getEpisodesIdNextSiblingRoute, getEpisodesIdNextSiblingRouteHandler)
  .openapi(getEpisodesIdPreviousSiblingRoute, getEpisodesIdPreviousSiblingRouteHandler)
  .openapi(getImagesRoute, getImagesRouteHandler)
  .openapi(getImagesIdRoute, getImagesIdRouteHandler)
  .openapi(getMediaAssetsRoute, getMediaAssetsRouteHandler)
  .openapi(getMediaAssetsIdRoute, getMediaAssetsIdRouteHandler)
  .openapi(getNetworksRoute, getNetworksRouteHandler)
  .openapi(getNetworksIdRoute, getNetworksIdRouteHandler)
  .openapi(getPeopleRoute, getPeopleRouteHandler)
  .openapi(getPeopleIdRoute, getPeopleIdRouteHandler)
  .openapi(getSeasonsRoute, getSeasonsRouteHandler)
  .openapi(getSeasonsIdRoute, getSeasonsIdRouteHandler)
  .openapi(getSeriesRoute, getSeriesRouteHandler)
  .openapi(getSeriesIdRoute, getSeriesIdRouteHandler)

export default app
