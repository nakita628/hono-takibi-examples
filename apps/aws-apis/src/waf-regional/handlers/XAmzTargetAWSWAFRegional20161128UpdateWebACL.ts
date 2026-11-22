import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateWebACLHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
