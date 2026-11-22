import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314UpdateServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314UpdateServiceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314UpdateServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
