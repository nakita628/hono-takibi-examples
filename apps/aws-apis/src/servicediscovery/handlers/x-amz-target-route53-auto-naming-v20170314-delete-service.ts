import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314DeleteServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53AutoNamingV20170314DeleteServiceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314DeleteServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
