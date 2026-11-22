import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsStartEngagementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsStartEngagementHandler = app.openapi(
  postXAmzTargetSSMContactsStartEngagementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
