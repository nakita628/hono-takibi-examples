import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateByteMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128CreateByteMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateByteMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
