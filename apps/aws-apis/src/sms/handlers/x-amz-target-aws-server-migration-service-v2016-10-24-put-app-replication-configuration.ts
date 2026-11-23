import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024PutAppReplicationConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
