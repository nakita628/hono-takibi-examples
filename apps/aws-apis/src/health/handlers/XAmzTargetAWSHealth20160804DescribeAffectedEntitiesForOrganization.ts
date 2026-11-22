import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationHandler =
  app.openapi(postXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
