import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UntagResourceHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
