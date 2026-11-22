import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
