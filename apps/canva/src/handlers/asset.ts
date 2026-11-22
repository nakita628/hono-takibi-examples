import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AssetsAssetIdRoute,
  getV1AssetsAssetIdRoute,
  getV1AssetUploadsJobIdRoute,
  getV1UrlAssetUploadsJobIdRoute,
  patchV1AssetsAssetIdRoute,
  postV1AssetUploadsRoute,
  postV1UrlAssetUploadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetHandler = app
  .openapi(deleteV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AssetUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetUploadsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UrlAssetUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UrlAssetUploadsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
