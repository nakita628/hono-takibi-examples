import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
