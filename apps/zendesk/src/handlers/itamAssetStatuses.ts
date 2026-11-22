import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ItAssetManagementStatusesStatusIdRoute,
  getApiV2ItAssetManagementStatusesRoute,
  getApiV2ItAssetManagementStatusesStatusIdRoute,
  patchApiV2ItAssetManagementStatusesStatusIdRoute,
  postApiV2ItAssetManagementStatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itamAssetStatusesHandler = app
  .openapi(getApiV2ItAssetManagementStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementStatusesStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementStatusesStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementStatusesStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
