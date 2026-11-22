import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetWebACLForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128GetWebACLForResourceHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetWebACLForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
