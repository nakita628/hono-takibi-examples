import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverTagResourceHandler = app.openapi(
  postXAmzTargetRoute53ResolverTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
