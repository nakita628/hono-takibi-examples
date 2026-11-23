import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceStartConfigRulesEvaluationHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
