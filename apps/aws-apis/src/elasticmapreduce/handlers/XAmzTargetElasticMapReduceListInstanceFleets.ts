import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListInstanceFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceListInstanceFleetsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListInstanceFleetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
