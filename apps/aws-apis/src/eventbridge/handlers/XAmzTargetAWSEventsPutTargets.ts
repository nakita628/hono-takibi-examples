import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsPutTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsPutTargetsHandler = app.openapi(
  postXAmzTargetAWSEventsPutTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
