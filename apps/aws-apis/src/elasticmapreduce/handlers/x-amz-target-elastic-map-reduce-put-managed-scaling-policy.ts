import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReducePutManagedScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReducePutManagedScalingPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReducePutManagedScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
