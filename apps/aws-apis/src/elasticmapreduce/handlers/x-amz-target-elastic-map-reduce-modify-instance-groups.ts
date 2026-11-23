import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceModifyInstanceGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceModifyInstanceGroupsHandler = app.openapi(
  postXAmzTargetElasticMapReduceModifyInstanceGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
