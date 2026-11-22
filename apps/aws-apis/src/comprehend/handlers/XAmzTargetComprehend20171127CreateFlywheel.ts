import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127CreateFlywheelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127CreateFlywheelHandler = app.openapi(
  postXAmzTargetComprehend20171127CreateFlywheelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
