import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationStatuspageAccountRoute,
  deleteApiV2IntegrationStatuspageUrlSettingsStatuspageUrlSettingIdRoute,
  getApiV2IntegrationStatuspageAccountRoute,
  getApiV2IntegrationStatuspageUrlSettingsRoute,
  patchApiV2IntegrationStatuspageAccountRoute,
  patchApiV2IntegrationStatuspageUrlSettingsStatuspageUrlSettingIdRoute,
  postApiV2IntegrationStatuspageAccountRoute,
  postApiV2IntegrationStatuspageUrlSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statuspageIntegrationHandler = app
  .openapi(deleteApiV2IntegrationStatuspageAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationStatuspageAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationStatuspageAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationStatuspageAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationStatuspageUrlSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationStatuspageUrlSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationStatuspageUrlSettingsStatuspageUrlSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationStatuspageUrlSettingsStatuspageUrlSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
