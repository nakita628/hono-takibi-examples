import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceGetAuthorizationTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceGetAuthorizationTokenHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceGetAuthorizationTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
