import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202AddTagsToStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202AddTagsToStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202AddTagsToStreamRoute,
  (c) => {},
)
