import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314ListInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314ListInstancesHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314ListInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
