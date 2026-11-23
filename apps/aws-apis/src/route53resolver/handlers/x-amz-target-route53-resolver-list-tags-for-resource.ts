import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverListTagsForResourceHandler = app.openapi(
  postXAmzTargetRoute53ResolverListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
