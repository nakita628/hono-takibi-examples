import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationHandler =
  app.openapi(postXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
