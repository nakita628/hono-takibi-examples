import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDeleteStudioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceDeleteStudioHandler = app.openapi(
  postXAmzTargetElasticMapReduceDeleteStudioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
