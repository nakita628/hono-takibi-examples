import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceCreateStudioSessionMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceCreateStudioSessionMappingHandler = app.openapi(
  postXAmzTargetElasticMapReduceCreateStudioSessionMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
