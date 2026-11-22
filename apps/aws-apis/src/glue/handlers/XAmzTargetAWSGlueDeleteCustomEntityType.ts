import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteCustomEntityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteCustomEntityTypeHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteCustomEntityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
