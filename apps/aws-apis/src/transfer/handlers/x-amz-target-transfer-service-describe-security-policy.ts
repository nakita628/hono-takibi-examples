import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeSecurityPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeSecurityPolicyHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeSecurityPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
