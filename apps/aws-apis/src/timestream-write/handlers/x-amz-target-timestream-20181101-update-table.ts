import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101UpdateTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101UpdateTableHandler = app.openapi(
  postXAmzTargetTimestream20181101UpdateTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
