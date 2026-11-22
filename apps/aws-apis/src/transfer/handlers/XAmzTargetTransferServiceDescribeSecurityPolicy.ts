import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeSecurityPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDescribeSecurityPolicyHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeSecurityPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
