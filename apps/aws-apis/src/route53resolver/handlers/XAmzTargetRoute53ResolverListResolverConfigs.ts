import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListResolverConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverListResolverConfigsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListResolverConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
