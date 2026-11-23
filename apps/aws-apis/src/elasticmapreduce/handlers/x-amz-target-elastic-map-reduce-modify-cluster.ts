import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceModifyClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceModifyClusterHandler = app.openapi(
  postXAmzTargetElasticMapReduceModifyClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
