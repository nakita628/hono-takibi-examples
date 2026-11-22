import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127UpdateFlywheelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127UpdateFlywheelHandler = app.openapi(
  postXAmzTargetComprehend20171127UpdateFlywheelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
