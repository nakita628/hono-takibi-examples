import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListMLTransformsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListMLTransformsHandler = app.openapi(
  postXAmzTargetAWSGlueListMLTransformsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
