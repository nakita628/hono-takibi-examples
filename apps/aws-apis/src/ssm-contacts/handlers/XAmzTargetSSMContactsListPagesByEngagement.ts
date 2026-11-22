import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListPagesByEngagementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsListPagesByEngagementHandler = app.openapi(
  postXAmzTargetSSMContactsListPagesByEngagementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
