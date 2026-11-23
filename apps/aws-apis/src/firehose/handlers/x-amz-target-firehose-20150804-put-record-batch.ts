import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804PutRecordBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFirehose20150804PutRecordBatchHandler = app.openapi(
  postXAmzTargetFirehose20150804PutRecordBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
