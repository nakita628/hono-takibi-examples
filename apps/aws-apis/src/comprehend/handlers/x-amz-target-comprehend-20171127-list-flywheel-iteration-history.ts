import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListFlywheelIterationHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListFlywheelIterationHistoryHandler = app.openapi(
  postXAmzTargetComprehend20171127ListFlywheelIterationHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
