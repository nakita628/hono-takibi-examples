import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceRemoveAutoScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceRemoveAutoScalingPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReduceRemoveAutoScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
