import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128CreateWebAclHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
