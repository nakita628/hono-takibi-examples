import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutConfigRuleHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutConfigRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
