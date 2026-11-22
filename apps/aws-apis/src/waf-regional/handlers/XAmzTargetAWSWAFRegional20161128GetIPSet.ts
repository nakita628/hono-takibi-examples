import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128GetIPSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
