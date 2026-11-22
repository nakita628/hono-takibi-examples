import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ItAssetManagementLocationsLocationIdRoute,
  getApiV2ItAssetManagementLocationsLocationIdRoute,
  getApiV2ItAssetManagementLocationsRoute,
  patchApiV2ItAssetManagementLocationsLocationIdRoute,
  postApiV2ItAssetManagementLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itamAssetLocationsHandler = app
  .openapi(getApiV2ItAssetManagementLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
