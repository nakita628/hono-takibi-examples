import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DisassociateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729DisassociateWebAclHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DisassociateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
