import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteByteMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128DeleteByteMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteByteMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
