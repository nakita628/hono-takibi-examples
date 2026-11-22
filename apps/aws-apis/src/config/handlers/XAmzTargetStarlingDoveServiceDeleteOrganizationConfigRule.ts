import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
