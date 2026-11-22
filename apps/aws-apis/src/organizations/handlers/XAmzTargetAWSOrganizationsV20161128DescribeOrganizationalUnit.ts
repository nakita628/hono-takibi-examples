import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
