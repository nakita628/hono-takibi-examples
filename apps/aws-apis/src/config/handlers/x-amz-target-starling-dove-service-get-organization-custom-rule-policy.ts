import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
