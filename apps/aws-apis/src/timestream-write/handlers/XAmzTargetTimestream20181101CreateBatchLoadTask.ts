import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101CreateBatchLoadTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTimestream20181101CreateBatchLoadTaskHandler = app.openapi(
  postXAmzTargetTimestream20181101CreateBatchLoadTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
