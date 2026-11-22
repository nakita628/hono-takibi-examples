import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdOtherdevicesDeviceMacRoute,
  getApiV1OrgsOrgIdOtherdevicesDeviceMacRoute,
  getApiV1OrgsOrgIdOtherdevicesRoute,
  getApiV1OrgsOrgIdStatsOtherdevicesDeviceMacRoute,
  postApiV1OrgsOrgIdSettingCradlepointSetupRoute,
  postApiV1OrgsOrgIdSettingCradlepointSyncRoute,
  putApiV1OrgsOrgIdOtherdevicesDeviceMacRoute,
  putApiV1OrgsOrgIdOtherdevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsDevicesOthersHandler = app
  .openapi(getApiV1OrgsOrgIdOtherdevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdOtherdevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdOtherdevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdOtherdevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdOtherdevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingCradlepointSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingCradlepointSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsOtherdevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
