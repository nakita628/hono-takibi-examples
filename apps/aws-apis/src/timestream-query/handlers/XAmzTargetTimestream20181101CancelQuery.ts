import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101CancelQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101CancelQueryHandler = app.openapi(
  postXAmzTargetTimestream20181101CancelQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
