import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DisassociateWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128DisassociateWebACLHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DisassociateWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
