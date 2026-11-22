import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReducePutManagedScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReducePutManagedScalingPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReducePutManagedScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
