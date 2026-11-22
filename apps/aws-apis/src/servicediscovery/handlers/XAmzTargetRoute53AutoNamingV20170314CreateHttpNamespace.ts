import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
