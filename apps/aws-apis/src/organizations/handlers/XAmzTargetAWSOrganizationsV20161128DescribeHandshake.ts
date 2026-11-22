import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DescribeHandshakeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128DescribeHandshakeHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DescribeHandshakeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
