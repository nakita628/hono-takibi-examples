import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128AssociateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128AssociateWebACLHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128AssociateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
