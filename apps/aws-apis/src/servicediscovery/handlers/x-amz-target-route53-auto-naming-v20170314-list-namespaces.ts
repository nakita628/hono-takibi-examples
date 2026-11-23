import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314ListNamespacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53AutoNamingV20170314ListNamespacesHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314ListNamespacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
