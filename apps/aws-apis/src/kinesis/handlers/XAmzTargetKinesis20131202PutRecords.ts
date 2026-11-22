import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202PutRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202PutRecordsHandler = app.openapi(
  postXAmzTargetKinesis20131202PutRecordsRoute,
  (c) => {},
)
