import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314TagResourceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
