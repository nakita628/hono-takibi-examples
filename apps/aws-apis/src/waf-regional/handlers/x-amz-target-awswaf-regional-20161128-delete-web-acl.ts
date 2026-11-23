import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128DeleteWebAclHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
