import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314GetServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53AutoNamingV20170314GetServiceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314GetServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
