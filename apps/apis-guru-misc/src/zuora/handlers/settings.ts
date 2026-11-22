import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsListingRoute, postSettingsBatchRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(postSettingsBatchRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsListingRoute, (c) => {
    throw new Error('Not implemented')
  })
