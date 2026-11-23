import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListResolverQueryLogConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverListResolverQueryLogConfigsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListResolverQueryLogConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
