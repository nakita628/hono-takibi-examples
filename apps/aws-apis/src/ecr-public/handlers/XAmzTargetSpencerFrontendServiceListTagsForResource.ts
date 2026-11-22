import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
