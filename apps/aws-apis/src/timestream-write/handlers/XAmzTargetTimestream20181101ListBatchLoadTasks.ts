import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101ListBatchLoadTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101ListBatchLoadTasksHandler = app.openapi(
  postXAmzTargetTimestream20181101ListBatchLoadTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
