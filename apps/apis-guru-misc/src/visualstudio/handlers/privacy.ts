import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const privacyHandler = app.openapi(
  postApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
