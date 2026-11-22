import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ExportTableToPointInTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810ExportTableToPointInTimeHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ExportTableToPointInTimeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
