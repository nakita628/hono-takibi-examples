import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteXssMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128DeleteXssMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteXssMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
