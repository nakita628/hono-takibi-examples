import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DeleteFlywheelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DeleteFlywheelHandler = app.openapi(
  postXAmzTargetComprehend20171127DeleteFlywheelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
