import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUpdateResolverDnssecConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverUpdateResolverDnssecConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverUpdateResolverDnssecConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
