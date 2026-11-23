import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101CreateDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101CreateDatabaseHandler = app.openapi(
  postXAmzTargetTimestream20181101CreateDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
