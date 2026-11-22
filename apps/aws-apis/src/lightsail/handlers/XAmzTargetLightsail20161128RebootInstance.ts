import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128RebootInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128RebootInstanceHandler = app.openapi(
  postXAmzTargetLightsail20161128RebootInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
