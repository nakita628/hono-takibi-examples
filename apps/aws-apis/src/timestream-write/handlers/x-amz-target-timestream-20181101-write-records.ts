import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101WriteRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101WriteRecordsHandler = app.openapi(
  postXAmzTargetTimestream20181101WriteRecordsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
