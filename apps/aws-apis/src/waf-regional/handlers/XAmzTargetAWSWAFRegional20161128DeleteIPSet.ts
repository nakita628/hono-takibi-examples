import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128DeleteIPSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
