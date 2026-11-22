import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartFlywheelIterationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127StartFlywheelIterationHandler = app.openapi(
  postXAmzTargetComprehend20171127StartFlywheelIterationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
