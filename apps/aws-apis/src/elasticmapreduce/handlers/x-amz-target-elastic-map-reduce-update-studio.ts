import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceUpdateStudioRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceUpdateStudioHandler = app.openapi(
  postXAmzTargetElasticMapReduceUpdateStudioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
