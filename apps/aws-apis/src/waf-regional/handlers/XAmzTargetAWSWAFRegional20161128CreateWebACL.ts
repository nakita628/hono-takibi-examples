import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128CreateWebACLHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
