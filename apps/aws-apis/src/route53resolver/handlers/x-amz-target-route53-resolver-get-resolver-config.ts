import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetResolverConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverGetResolverConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetResolverConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
