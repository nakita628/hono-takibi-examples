import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceModifyInstanceGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceModifyInstanceGroupsHandler = app.openapi(
  postXAmzTargetElasticMapReduceModifyInstanceGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
