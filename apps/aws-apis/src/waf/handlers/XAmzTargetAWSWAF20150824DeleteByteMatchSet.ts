import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteByteMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824DeleteByteMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteByteMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
