import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101PrepareQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101PrepareQueryHandler = app.openapi(
  postXAmzTargetTimestream20181101PrepareQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
