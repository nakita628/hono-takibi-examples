import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListResourcesForWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729ListResourcesForWebAclHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListResourcesForWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
