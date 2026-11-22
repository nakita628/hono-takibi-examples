import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202UpdateStreamModeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202UpdateStreamModeHandler = app.openapi(
  postXAmzTargetKinesis20131202UpdateStreamModeRoute,
  (c) => {},
)
