import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101ResumeBatchLoadTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101ResumeBatchLoadTaskHandler = app.openapi(
  postXAmzTargetTimestream20181101ResumeBatchLoadTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
