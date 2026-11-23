import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101ListTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101ListTablesHandler = app.openapi(
  postXAmzTargetTimestream20181101ListTablesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
