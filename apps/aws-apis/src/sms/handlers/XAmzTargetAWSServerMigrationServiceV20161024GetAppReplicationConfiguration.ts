import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
