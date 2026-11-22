import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverUntagResourceHandler = app.openapi(
  postXAmzTargetRoute53ResolverUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
