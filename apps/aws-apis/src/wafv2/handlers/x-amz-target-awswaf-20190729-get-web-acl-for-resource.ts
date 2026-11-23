import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetWebACLForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729GetWebAclForResourceHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetWebACLForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
