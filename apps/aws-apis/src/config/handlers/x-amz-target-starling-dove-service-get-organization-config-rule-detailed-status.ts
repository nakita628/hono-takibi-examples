import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
