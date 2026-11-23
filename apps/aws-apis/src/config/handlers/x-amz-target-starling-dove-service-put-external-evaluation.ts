import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutExternalEvaluationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutExternalEvaluationHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutExternalEvaluationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
