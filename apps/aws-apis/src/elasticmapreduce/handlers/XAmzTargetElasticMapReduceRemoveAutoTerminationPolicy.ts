import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceRemoveAutoTerminationPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
