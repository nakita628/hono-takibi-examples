import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListWebACLsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729ListWebACLsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListWebACLsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
