import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetXssMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetXssMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetXssMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
