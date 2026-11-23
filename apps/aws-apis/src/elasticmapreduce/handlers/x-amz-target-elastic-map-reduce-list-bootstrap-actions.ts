import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListBootstrapActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceListBootstrapActionsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListBootstrapActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
