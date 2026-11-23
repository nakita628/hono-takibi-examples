import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314GetNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53AutoNamingV20170314GetNamespaceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314GetNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
