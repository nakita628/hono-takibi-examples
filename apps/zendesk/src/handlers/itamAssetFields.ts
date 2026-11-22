import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ItAssetManagementFieldsIdRoute,
  getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsAssetTypeFieldIdRoute,
  getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsRoute,
  getApiV2ItAssetManagementFieldsIdRoute,
  getApiV2ItAssetManagementFieldsRoute,
  patchApiV2ItAssetManagementFieldsIdRoute,
  postApiV2ItAssetManagementFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itamAssetFieldsHandler = app
  .openapi(getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsAssetTypeFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
