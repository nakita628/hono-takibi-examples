import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceRunJobFlowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceRunJobFlowHandler = app.openapi(
  postXAmzTargetElasticMapReduceRunJobFlowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
