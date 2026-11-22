import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateWebACLMigrationStackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824CreateWebACLMigrationStackHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateWebACLMigrationStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
