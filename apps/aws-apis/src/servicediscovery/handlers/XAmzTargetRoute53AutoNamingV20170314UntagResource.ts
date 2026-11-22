import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314UntagResourceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
