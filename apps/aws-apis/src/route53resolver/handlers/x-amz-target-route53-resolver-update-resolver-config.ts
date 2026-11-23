import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUpdateResolverConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverUpdateResolverConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverUpdateResolverConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
