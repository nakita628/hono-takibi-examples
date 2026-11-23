import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceRemoveManagedScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceRemoveManagedScalingPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReduceRemoveManagedScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
