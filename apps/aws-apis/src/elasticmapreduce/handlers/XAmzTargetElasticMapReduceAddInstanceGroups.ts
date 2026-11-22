import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceAddInstanceGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceAddInstanceGroupsHandler = app.openapi(
  postXAmzTargetElasticMapReduceAddInstanceGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
