import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceUpdateStudioSessionMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceUpdateStudioSessionMappingHandler = app.openapi(
  postXAmzTargetElasticMapReduceUpdateStudioSessionMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
