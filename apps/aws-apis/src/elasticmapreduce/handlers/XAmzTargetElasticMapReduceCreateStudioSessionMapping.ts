import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceCreateStudioSessionMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceCreateStudioSessionMappingHandler = app.openapi(
  postXAmzTargetElasticMapReduceCreateStudioSessionMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
