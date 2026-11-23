import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceGetAutoTerminationPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceGetAutoTerminationPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReduceGetAutoTerminationPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
