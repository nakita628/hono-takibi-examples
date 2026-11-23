import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101CreateTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101CreateTableHandler = app.openapi(
  postXAmzTargetTimestream20181101CreateTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
