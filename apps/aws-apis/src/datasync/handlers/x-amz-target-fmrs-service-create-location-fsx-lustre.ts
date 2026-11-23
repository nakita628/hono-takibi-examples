import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationFsxLustreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceCreateLocationFsxLustreHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationFsxLustreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
