import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetWebAclHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
