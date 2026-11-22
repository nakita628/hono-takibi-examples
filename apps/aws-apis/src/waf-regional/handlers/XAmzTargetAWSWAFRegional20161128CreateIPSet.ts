import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128CreateIPSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
