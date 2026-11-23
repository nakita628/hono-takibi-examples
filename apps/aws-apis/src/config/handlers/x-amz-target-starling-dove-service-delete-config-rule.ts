import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeleteConfigRuleHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteConfigRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
