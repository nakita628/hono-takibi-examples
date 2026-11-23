import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceGetManagedScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceGetManagedScalingPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReduceGetManagedScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
