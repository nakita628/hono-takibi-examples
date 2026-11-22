import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusHandler =
  app.openapi(
    postXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
