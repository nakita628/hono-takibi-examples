import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314DeleteNamespaceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
