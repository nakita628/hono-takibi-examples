import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
