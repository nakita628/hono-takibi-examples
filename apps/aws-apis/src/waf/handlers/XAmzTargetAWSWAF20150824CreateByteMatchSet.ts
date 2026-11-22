import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateByteMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824CreateByteMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateByteMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
