import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetWebACLForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetWebAclForResourceHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetWebACLForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
