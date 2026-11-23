import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetResolverQueryLogConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverGetResolverQueryLogConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetResolverQueryLogConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
