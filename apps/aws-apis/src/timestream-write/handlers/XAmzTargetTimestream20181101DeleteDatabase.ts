import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101DeleteDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101DeleteDatabaseHandler = app.openapi(
  postXAmzTargetTimestream20181101DeleteDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
