import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationFsxLustreRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCreateLocationFsxLustreHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationFsxLustreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
