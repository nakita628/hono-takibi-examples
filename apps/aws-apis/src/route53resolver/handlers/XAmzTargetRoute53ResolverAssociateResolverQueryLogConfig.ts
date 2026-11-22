import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverAssociateResolverQueryLogConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverAssociateResolverQueryLogConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
