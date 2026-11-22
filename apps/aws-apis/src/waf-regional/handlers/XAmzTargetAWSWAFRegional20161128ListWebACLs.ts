import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListWebACLsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListWebACLsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListWebACLsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
