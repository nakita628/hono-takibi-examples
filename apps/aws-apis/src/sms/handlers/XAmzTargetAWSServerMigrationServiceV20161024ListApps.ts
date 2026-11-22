import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024ListAppsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024ListAppsHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024ListAppsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
