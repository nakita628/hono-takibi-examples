import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
