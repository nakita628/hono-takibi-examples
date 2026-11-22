import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesHandler =
  app.openapi(postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
