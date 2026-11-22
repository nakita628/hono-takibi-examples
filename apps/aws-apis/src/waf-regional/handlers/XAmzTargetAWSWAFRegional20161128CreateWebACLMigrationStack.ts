import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateWebACLMigrationStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
