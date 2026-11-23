import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCacheSourceIdRoute,
  getCatalogRoute,
  getFontFontstackStartEndRoute,
  getHealthRoute,
  getOgcApiRoute,
  getOgcCollectionsCollectionIdMapRoute,
  getOgcCollectionsCollectionIdRoute,
  getOgcCollectionsCollectionIdTilesRoute,
  getOgcCollectionsCollectionIdTilesTileMatrixSetIdRoute,
  getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColRoute,
  getOgcCollectionsRoute,
  getOgcConformanceRoute,
  getOgcMapRoute,
  getOgcMapTilesRoute,
  getOgcMapTilesTileMatrixSetIdRoute,
  getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColRoute,
  getOgcRoute,
  getOgcStylesRoute,
  getOgcStylesStyleIdMapRoute,
  getOgcStylesStyleIdMapTilesRoute,
  getOgcStylesStyleIdMapTilesTileMatrixSetIdRoute,
  getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColRoute,
  getOgcStylesStyleIdRoute,
  getOgcTileMatrixSetsRoute,
  getOgcTileMatrixSetsTileMatrixSetIdRoute,
  getSdfSpriteSourceIdsJsonRoute,
  getSdfSpriteSourceIdsPngRoute,
  getSourceIdsRoute,
  getSourceIdsZXYRoute,
  getSpriteSourceIdsJsonRoute,
  getSpriteSourceIdsPngRoute,
  getStyleStyleIdRoute,
  getStyleStyleIdStaticCameraSizeFormatRoute,
  getStyleStyleIdZXYFormatRoute,
  postStyleStyleIdStaticCameraSizeFormatRoute,
} from './routes'
import {
  deleteCacheSourceIdRouteHandler,
  getCatalogRouteHandler,
  getFontFontstackStartEndRouteHandler,
  getHealthRouteHandler,
  getOgcApiRouteHandler,
  getOgcCollectionsCollectionIdMapRouteHandler,
  getOgcCollectionsCollectionIdRouteHandler,
  getOgcCollectionsCollectionIdTilesRouteHandler,
  getOgcCollectionsCollectionIdTilesTileMatrixSetIdRouteHandler,
  getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColRouteHandler,
  getOgcCollectionsRouteHandler,
  getOgcConformanceRouteHandler,
  getOgcMapRouteHandler,
  getOgcMapTilesRouteHandler,
  getOgcMapTilesTileMatrixSetIdRouteHandler,
  getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColRouteHandler,
  getOgcRouteHandler,
  getOgcStylesRouteHandler,
  getOgcStylesStyleIdMapRouteHandler,
  getOgcStylesStyleIdMapTilesRouteHandler,
  getOgcStylesStyleIdMapTilesTileMatrixSetIdRouteHandler,
  getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColRouteHandler,
  getOgcStylesStyleIdRouteHandler,
  getOgcTileMatrixSetsRouteHandler,
  getOgcTileMatrixSetsTileMatrixSetIdRouteHandler,
  getSdfSpriteSourceIdsJsonRouteHandler,
  getSdfSpriteSourceIdsPngRouteHandler,
  getSourceIdsRouteHandler,
  getSourceIdsZXYRouteHandler,
  getSpriteSourceIdsJsonRouteHandler,
  getSpriteSourceIdsPngRouteHandler,
  getStyleStyleIdRouteHandler,
  getStyleStyleIdStaticCameraSizeFormatRouteHandler,
  getStyleStyleIdZXYFormatRouteHandler,
  postStyleStyleIdStaticCameraSizeFormatRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSourceIdsRoute, getSourceIdsRouteHandler)
  .openapi(getSourceIdsZXYRoute, getSourceIdsZXYRouteHandler)
  .openapi(deleteCacheSourceIdRoute, deleteCacheSourceIdRouteHandler)
  .openapi(getCatalogRoute, getCatalogRouteHandler)
  .openapi(getFontFontstackStartEndRoute, getFontFontstackStartEndRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getOgcRoute, getOgcRouteHandler)
  .openapi(getOgcApiRoute, getOgcApiRouteHandler)
  .openapi(getOgcCollectionsRoute, getOgcCollectionsRouteHandler)
  .openapi(getOgcCollectionsCollectionIdRoute, getOgcCollectionsCollectionIdRouteHandler)
  .openapi(getOgcCollectionsCollectionIdMapRoute, getOgcCollectionsCollectionIdMapRouteHandler)
  .openapi(getOgcCollectionsCollectionIdTilesRoute, getOgcCollectionsCollectionIdTilesRouteHandler)
  .openapi(
    getOgcCollectionsCollectionIdTilesTileMatrixSetIdRoute,
    getOgcCollectionsCollectionIdTilesTileMatrixSetIdRouteHandler,
  )
  .openapi(
    getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColRoute,
    getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColRouteHandler,
  )
  .openapi(getOgcConformanceRoute, getOgcConformanceRouteHandler)
  .openapi(getOgcMapRoute, getOgcMapRouteHandler)
  .openapi(getOgcMapTilesRoute, getOgcMapTilesRouteHandler)
  .openapi(getOgcMapTilesTileMatrixSetIdRoute, getOgcMapTilesTileMatrixSetIdRouteHandler)
  .openapi(
    getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColRoute,
    getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColRouteHandler,
  )
  .openapi(getOgcStylesRoute, getOgcStylesRouteHandler)
  .openapi(getOgcStylesStyleIdRoute, getOgcStylesStyleIdRouteHandler)
  .openapi(getOgcStylesStyleIdMapRoute, getOgcStylesStyleIdMapRouteHandler)
  .openapi(getOgcStylesStyleIdMapTilesRoute, getOgcStylesStyleIdMapTilesRouteHandler)
  .openapi(
    getOgcStylesStyleIdMapTilesTileMatrixSetIdRoute,
    getOgcStylesStyleIdMapTilesTileMatrixSetIdRouteHandler,
  )
  .openapi(
    getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColRoute,
    getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColRouteHandler,
  )
  .openapi(getOgcTileMatrixSetsRoute, getOgcTileMatrixSetsRouteHandler)
  .openapi(
    getOgcTileMatrixSetsTileMatrixSetIdRoute,
    getOgcTileMatrixSetsTileMatrixSetIdRouteHandler,
  )
  .openapi(getSdfSpriteSourceIdsJsonRoute, getSdfSpriteSourceIdsJsonRouteHandler)
  .openapi(getSdfSpriteSourceIdsPngRoute, getSdfSpriteSourceIdsPngRouteHandler)
  .openapi(getSpriteSourceIdsJsonRoute, getSpriteSourceIdsJsonRouteHandler)
  .openapi(getSpriteSourceIdsPngRoute, getSpriteSourceIdsPngRouteHandler)
  .openapi(getStyleStyleIdRoute, getStyleStyleIdRouteHandler)
  .openapi(getStyleStyleIdZXYFormatRoute, getStyleStyleIdZXYFormatRouteHandler)
  .openapi(
    getStyleStyleIdStaticCameraSizeFormatRoute,
    getStyleStyleIdStaticCameraSizeFormatRouteHandler,
  )
  .openapi(
    postStyleStyleIdStaticCameraSizeFormatRoute,
    postStyleStyleIdStaticCameraSizeFormatRouteHandler,
  )

export default app
