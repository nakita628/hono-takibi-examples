import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetByteMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetByteMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetByteMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
