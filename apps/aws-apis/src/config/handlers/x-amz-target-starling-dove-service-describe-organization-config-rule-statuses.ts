import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesHandler =
  app.openapi(postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
