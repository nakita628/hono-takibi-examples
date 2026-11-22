import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListResourcesForWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729ListResourcesForWebACLHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListResourcesForWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
