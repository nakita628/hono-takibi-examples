import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetChangeTokenStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128GetChangeTokenStatusHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetChangeTokenStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
