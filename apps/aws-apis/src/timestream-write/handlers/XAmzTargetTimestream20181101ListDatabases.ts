import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101ListDatabasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101ListDatabasesHandler = app.openapi(
  postXAmzTargetTimestream20181101ListDatabasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
