import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
