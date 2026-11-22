import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetResolverDnssecConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverGetResolverDnssecConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetResolverDnssecConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
