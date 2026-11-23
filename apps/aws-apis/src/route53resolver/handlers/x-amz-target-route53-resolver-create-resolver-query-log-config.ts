import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverCreateResolverQueryLogConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverCreateResolverQueryLogConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverCreateResolverQueryLogConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
