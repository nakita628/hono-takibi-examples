import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ItAssetManagementAssetsAssetIdRoute,
  getApiV2ItAssetManagementAssetsAssetIdRoute,
  getApiV2ItAssetManagementAssetsRoute,
  getApiV2ItAssetManagementAssetsSearchRoute,
  patchApiV2ItAssetManagementAssetsAssetIdRoute,
  postApiV2ItAssetManagementAssetsJobsRoute,
  postApiV2ItAssetManagementAssetsRoute,
  postApiV2ItAssetManagementAssetsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itamAssetsHandler = app
  .openapi(getApiV2ItAssetManagementAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementAssetsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementAssetsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
