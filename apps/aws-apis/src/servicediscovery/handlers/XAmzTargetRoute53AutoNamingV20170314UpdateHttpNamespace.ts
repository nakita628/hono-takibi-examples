import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
