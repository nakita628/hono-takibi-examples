import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMigrationHubPutResourceAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMigrationHubPutResourceAttributesHandler = app.openapi(
  postXAmzTargetAWSMigrationHubPutResourceAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
