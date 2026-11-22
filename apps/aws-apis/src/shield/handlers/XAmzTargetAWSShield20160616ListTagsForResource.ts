import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSShield20160616ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
