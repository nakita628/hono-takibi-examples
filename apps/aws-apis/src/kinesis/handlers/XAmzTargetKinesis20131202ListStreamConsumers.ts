import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202ListStreamConsumersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202ListStreamConsumersHandler = app.openapi(
  postXAmzTargetKinesis20131202ListStreamConsumersRoute,
  (c) => {},
)
