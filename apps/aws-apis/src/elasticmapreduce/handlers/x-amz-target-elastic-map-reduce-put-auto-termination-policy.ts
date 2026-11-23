import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReducePutAutoTerminationPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReducePutAutoTerminationPolicyHandler = app.openapi(
  postXAmzTargetElasticMapReducePutAutoTerminationPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
