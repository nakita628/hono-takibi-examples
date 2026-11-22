import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListInstanceGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceListInstanceGroupsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListInstanceGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
