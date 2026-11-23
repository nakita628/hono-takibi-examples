import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceTagResourceHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
