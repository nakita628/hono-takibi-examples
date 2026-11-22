import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateCustomEntityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateCustomEntityTypeHandler = app.openapi(
  postXAmzTargetAWSGlueCreateCustomEntityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
