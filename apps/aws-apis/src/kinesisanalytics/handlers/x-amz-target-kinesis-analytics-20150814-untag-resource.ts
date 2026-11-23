import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814UntagResourceHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
