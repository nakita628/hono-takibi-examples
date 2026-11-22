import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateIPSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
