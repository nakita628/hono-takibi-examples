import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsDescribeEngagementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsDescribeEngagementHandler = app.openapi(
  postXAmzTargetSSMContactsDescribeEngagementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
