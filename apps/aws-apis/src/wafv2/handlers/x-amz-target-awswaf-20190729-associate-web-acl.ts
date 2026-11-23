import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729AssociateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729AssociateWebAclHandler = app.openapi(
  postXAmzTargetAWSWAF20190729AssociateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
