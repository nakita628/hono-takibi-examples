import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceGetStudioSessionMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceGetStudioSessionMappingHandler = app.openapi(
  postXAmzTargetElasticMapReduceGetStudioSessionMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
