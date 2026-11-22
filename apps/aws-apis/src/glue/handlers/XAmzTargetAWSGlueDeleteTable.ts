import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteTableHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
