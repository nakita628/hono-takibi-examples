import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202RemoveTagsFromStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202RemoveTagsFromStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202RemoveTagsFromStreamRoute,
  (c) => {},
)
