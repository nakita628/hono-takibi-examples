import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverDisassociateResolverQueryLogConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
