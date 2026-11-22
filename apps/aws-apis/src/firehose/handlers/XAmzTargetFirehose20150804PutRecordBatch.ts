import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804PutRecordBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804PutRecordBatchHandler = app.openapi(
  postXAmzTargetFirehose20150804PutRecordBatchRoute,
  (c) => {},
)
