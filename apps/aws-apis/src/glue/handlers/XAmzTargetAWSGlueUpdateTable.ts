import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateTableHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
