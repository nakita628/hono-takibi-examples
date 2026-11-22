import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101DeleteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101DeleteTableHandler = app.openapi(
  postXAmzTargetTimestream20181101DeleteTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
