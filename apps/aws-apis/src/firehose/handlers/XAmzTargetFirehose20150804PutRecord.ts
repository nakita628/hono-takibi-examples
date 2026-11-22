import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804PutRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFirehose20150804PutRecordHandler = app.openapi(
  postXAmzTargetFirehose20150804PutRecordRoute,
  (c) => {},
)
