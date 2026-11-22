import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101QueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101QueryHandler = app.openapi(
  postXAmzTargetTimestream20181101QueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
