import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AssetsAssetIdStateStoreKeyRoute,
  deleteApiV2AssetsAssetIdStateStoreRoute,
  getApiV2AssetsAssetIdStateStoreKeyRoute,
  getApiV2AssetsAssetIdStateStoreRoute,
  putApiV2AssetsAssetIdStateStoreKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetStateStoreHandler = app
  .openapi(getApiV2AssetsAssetIdStateStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AssetsAssetIdStateStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AssetsAssetIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AssetsAssetIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AssetsAssetIdStateStoreKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
