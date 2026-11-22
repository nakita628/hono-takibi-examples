import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceDescribeImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceDescribeImagesHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceDescribeImagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
