import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceSetVisibleToAllUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceSetVisibleToAllUsersHandler = app.openapi(
  postXAmzTargetElasticMapReduceSetVisibleToAllUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
