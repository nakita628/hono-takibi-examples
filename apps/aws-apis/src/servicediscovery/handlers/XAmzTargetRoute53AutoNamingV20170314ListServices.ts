import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314ListServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314ListServicesHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314ListServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
