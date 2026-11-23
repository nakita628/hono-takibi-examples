import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceStopBgpFailoverTestRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceStopBgpFailoverTestHandler = app.openapi(
  postXAmzTargetOvertureServiceStopBgpFailoverTestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
