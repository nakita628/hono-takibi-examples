import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListInstanceFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceListInstanceFleetsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListInstanceFleetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
