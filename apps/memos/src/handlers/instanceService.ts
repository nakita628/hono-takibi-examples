import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiInstanceConfigurationRoute,
  getApiInstanceInstanceStarRoute,
  getApiInstanceProfileRoute,
  getApiInstanceStatsRoute,
  patchApiInstanceInstanceStarRoute,
  postApiInstanceSettingsBatchGetRoute,
  postApiInstanceSettingsNotificationTestEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceServiceHandler = app
  .openapi(getApiInstanceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInstanceSettingsNotificationTestEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInstanceSettingsBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInstanceStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInstanceInstanceStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiInstanceInstanceStarRoute, (c) => {
    throw new Error('Not implemented')
  })
