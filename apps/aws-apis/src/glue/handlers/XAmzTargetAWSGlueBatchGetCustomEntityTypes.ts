import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetCustomEntityTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueBatchGetCustomEntityTypesHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetCustomEntityTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
