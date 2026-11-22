import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceListInstancesHandler = app.openapi(
  postXAmzTargetElasticMapReduceListInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
