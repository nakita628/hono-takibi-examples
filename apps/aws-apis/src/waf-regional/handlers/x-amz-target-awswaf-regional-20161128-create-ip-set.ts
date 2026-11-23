import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128CreateIpSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
