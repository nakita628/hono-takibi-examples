import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDeleteStudioSessionMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceDeleteStudioSessionMappingHandler = app.openapi(
  postXAmzTargetElasticMapReduceDeleteStudioSessionMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
