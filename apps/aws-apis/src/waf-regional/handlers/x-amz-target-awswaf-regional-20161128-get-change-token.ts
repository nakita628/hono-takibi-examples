import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetChangeTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetChangeTokenHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetChangeTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
