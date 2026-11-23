import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetSampledRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetSampledRequestsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetSampledRequestsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
