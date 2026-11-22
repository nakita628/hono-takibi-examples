import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateByteMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824UpdateByteMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateByteMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
