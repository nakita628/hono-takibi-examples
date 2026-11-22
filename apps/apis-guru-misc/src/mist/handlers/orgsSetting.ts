import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSettingBlacklistRoute,
  getApiV1OrgsOrgIdSettingRoute,
  postApiV1OrgsOrgIdSettingBlacklistRoute,
  postApiV1OrgsOrgIdSettingPcapBucketSetupRoute,
  postApiV1OrgsOrgIdSettingPcapBucketVerifyRoute,
  putApiV1OrgsOrgIdSettingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSettingHandler = app
  .openapi(getApiV1OrgsOrgIdSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSettingBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingPcapBucketSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingPcapBucketVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
