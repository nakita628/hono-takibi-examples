import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateWebACLMigrationStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824CreateWebAclMigrationStackHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateWebACLMigrationStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
