import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523UntagResourceHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
