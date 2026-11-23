import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUpdateResolverDnssecConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverUpdateResolverDnssecConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverUpdateResolverDnssecConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
