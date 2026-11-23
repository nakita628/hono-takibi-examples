import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListStudioSessionMappingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceListStudioSessionMappingsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListStudioSessionMappingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
