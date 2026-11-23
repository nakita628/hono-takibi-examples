import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128UpdateIpSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
