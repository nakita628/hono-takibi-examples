import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101UpdateDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101UpdateDatabaseHandler = app.openapi(
  postXAmzTargetTimestream20181101UpdateDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
