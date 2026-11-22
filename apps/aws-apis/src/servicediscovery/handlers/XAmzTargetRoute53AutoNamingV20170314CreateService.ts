import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314CreateServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314CreateServiceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314CreateServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
