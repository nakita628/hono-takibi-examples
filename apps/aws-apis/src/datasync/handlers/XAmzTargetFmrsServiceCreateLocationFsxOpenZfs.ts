import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationFsxOpenZfsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCreateLocationFsxOpenZfsHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationFsxOpenZfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
