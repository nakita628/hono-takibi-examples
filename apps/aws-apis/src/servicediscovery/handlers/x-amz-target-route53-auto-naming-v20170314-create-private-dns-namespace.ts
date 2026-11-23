import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
