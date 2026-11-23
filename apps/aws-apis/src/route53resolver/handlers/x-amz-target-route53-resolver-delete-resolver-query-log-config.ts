import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverDeleteResolverQueryLogConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverDeleteResolverQueryLogConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
