import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateXssMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128CreateXssMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateXssMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
