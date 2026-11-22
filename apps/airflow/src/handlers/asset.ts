import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AssetsAssetIdQueuedEventsRoute,
  deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute,
  deleteApiV2DagsDagIdAssetsQueuedEventsRoute,
  getApiV2AssetsAliasesAssetAliasIdRoute,
  getApiV2AssetsAliasesRoute,
  getApiV2AssetsAssetIdQueuedEventsRoute,
  getApiV2AssetsAssetIdRoute,
  getApiV2AssetsEventsRoute,
  getApiV2AssetsRoute,
  getApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute,
  getApiV2DagsDagIdAssetsQueuedEventsRoute,
  postApiV2AssetsAssetIdMaterializeRoute,
  postApiV2AssetsEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetHandler = app
  .openapi(getApiV2AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAliasesAssetAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AssetsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AssetsAssetIdMaterializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAssetIdQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AssetsAssetIdQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdAssetsQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdAssetsQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DagsDagIdAssetsAssetIdQueuedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
