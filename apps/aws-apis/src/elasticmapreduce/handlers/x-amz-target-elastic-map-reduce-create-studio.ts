import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceCreateStudioRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceCreateStudioHandler = app.openapi(
  postXAmzTargetElasticMapReduceCreateStudioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
