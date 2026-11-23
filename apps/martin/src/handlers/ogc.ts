import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const ogcHandler = app
  .openapi(getOgcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcCollectionsCollectionIdMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcCollectionsCollectionIdTilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcCollectionsCollectionIdTilesTileMatrixSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcCollectionsCollectionIdTilesTileMatrixSetIdTileMatrixTileRowTileColRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcConformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcMapTilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcMapTilesTileMatrixSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcMapTilesTileMatrixSetIdTileMatrixTileRowTileColRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcStylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcStylesStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcStylesStyleIdMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcStylesStyleIdMapTilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcStylesStyleIdMapTilesTileMatrixSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcStylesStyleIdMapTilesTileMatrixSetIdTileMatrixTileRowTileColRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcTileMatrixSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOgcTileMatrixSetsTileMatrixSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
