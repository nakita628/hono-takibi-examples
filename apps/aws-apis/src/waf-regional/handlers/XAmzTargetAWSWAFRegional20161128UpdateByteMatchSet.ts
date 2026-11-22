import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateByteMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateByteMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateByteMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
