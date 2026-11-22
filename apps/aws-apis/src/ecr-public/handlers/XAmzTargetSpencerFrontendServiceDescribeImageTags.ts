import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceDescribeImageTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceDescribeImageTagsHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceDescribeImageTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
