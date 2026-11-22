import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsStopEngagementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsStopEngagementHandler = app.openapi(
  postXAmzTargetSSMContactsStopEngagementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
