import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202GetRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202GetRecordsHandler = app.openapi(
  postXAmzTargetKinesis20131202GetRecordsRoute,
  (c) => {},
)
