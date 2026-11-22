import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceGetManagedScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceGetManagedScalingPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReduceGetManagedScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
