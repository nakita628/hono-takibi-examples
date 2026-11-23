import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceAddJobFlowStepsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceAddJobFlowStepsHandler = app.openapi(
  postXAmzTargetElasticMapReduceAddJobFlowStepsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
