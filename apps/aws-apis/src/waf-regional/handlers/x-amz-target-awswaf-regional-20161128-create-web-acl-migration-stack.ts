import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128CreateWebAclMigrationStackHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
