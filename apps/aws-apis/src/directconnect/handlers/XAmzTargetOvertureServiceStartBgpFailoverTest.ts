import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceStartBgpFailoverTestRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceStartBgpFailoverTestHandler = app.openapi(
  postXAmzTargetOvertureServiceStartBgpFailoverTestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
