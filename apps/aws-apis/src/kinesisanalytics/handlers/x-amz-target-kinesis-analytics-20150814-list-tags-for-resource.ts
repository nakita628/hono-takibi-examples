import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814ListTagsForResourceHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
