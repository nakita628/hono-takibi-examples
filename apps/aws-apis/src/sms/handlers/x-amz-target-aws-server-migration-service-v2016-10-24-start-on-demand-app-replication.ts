import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024StartOnDemandAppReplicationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
