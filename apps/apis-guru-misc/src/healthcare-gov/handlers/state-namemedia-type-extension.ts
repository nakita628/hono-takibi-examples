import { OpenAPIHono } from '@hono/zod-openapi'
import { getStateNameMediaTypeExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const stateNamemediaTypeExtensionHandler = app.openapi(
  getStateNameMediaTypeExtensionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
