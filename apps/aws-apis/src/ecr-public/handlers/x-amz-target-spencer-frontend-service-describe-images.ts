import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceDescribeImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceDescribeImagesHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceDescribeImagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
