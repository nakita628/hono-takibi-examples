import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128TagResourceHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
