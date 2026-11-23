import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824GetWebAclHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
