import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729UpdateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729UpdateWebAclHandler = app.openapi(
  postXAmzTargetAWSWAF20190729UpdateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
