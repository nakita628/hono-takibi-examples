import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationFsxWindowsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCreateLocationFsxWindowsHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationFsxWindowsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
