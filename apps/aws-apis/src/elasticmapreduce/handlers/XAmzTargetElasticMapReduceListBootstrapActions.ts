import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListBootstrapActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceListBootstrapActionsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListBootstrapActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
