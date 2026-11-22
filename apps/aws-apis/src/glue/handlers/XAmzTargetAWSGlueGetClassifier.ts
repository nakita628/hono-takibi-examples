import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetClassifierRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetClassifierHandler = app.openapi(
  postXAmzTargetAWSGlueGetClassifierRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
