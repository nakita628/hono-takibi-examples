import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceUntagResourceHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
