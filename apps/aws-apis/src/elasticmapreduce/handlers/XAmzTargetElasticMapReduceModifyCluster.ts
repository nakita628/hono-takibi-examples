import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceModifyClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceModifyClusterHandler = app.openapi(
  postXAmzTargetElasticMapReduceModifyClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
