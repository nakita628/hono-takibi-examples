import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceListInstancesHandler = app.openapi(
  postXAmzTargetElasticMapReduceListInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
