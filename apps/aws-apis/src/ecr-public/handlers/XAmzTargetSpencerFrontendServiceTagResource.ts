import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceTagResourceHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
