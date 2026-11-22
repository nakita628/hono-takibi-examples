import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314ListOperationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314ListOperationsHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314ListOperationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
