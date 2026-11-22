import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListSecurityPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceListSecurityPoliciesHandler = app.openapi(
  postXAmzTargetTransferServiceListSecurityPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
