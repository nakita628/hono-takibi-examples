import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314GetInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314GetInstanceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314GetInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
