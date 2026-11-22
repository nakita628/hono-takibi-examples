import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListResolverQueryLogConfigAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
