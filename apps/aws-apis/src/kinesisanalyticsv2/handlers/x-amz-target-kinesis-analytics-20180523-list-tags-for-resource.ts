import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523ListTagsForResourceHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
