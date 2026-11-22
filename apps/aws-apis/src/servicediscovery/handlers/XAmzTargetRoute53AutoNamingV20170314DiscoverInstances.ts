import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314DiscoverInstancesHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
