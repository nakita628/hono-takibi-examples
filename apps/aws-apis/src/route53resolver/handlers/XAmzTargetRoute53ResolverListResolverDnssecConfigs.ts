import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListResolverDnssecConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverListResolverDnssecConfigsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListResolverDnssecConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
