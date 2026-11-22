import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
