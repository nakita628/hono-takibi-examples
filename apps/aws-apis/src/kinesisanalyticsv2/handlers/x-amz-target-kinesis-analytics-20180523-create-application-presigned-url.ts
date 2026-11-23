import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523CreateApplicationPresignedUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
