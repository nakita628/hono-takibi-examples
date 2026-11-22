import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateXssMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateXssMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateXssMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
