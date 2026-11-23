import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314RegisterInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53AutoNamingV20170314RegisterInstanceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314RegisterInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
