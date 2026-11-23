import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReducePutAutoScalingPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReducePutAutoScalingPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReducePutAutoScalingPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
