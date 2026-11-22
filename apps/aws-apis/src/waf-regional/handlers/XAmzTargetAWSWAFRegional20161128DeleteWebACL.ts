import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128DeleteWebACLHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
