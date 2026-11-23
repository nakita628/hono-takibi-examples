import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceRunJobFlowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceRunJobFlowHandler = app.openapi(
  postXAmzTargetElasticMapReduceRunJobFlowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
