import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceUpdateStudioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceUpdateStudioHandler = app.openapi(
  postXAmzTargetElasticMapReduceUpdateStudioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
