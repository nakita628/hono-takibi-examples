import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314GetOperationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53AutoNamingV20170314GetOperationHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314GetOperationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
