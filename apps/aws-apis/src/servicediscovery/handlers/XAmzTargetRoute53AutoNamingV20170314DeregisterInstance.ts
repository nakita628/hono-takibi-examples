import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314DeregisterInstanceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
