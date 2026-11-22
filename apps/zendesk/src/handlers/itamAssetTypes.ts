import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ItAssetManagementAssetTypesAssetTypeIdRoute,
  getApiV2ItAssetManagementAssetTypesAssetTypeIdRoute,
  getApiV2ItAssetManagementAssetTypesRoute,
  patchApiV2ItAssetManagementAssetTypesAssetTypeIdRoute,
  postApiV2ItAssetManagementAssetTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itamAssetTypesHandler = app
  .openapi(getApiV2ItAssetManagementAssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementAssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetTypesAssetTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementAssetTypesAssetTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementAssetTypesAssetTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
