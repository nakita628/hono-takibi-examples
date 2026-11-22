import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ConfigsConfigIdEnvironmentsEnvironmentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sdkKeysHandler = app.openapi(
  getV1ConfigsConfigIdEnvironmentsEnvironmentIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
