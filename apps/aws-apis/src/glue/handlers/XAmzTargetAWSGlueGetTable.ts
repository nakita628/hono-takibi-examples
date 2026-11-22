import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetTableHandler = app.openapi(
  postXAmzTargetAWSGlueGetTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
