import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListFlywheelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ListFlywheelsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListFlywheelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
