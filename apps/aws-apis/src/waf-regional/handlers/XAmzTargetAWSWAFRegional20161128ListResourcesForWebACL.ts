import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListResourcesForWebACLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListResourcesForWebACLHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListResourcesForWebACLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
