import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
