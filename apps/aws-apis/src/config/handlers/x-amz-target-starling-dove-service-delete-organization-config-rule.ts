import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
