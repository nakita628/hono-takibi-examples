import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const contextSettingsHandler = app.openapi(
  putApiV2ProjectsProjectKeyEnvironmentsEnvironmentKeyContextsContextKindContextKeyFlagsFeatureFlagKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
