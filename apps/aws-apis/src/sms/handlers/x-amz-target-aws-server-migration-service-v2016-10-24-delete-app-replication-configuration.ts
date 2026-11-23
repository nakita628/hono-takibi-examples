import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024DeleteAppReplicationConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
