import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024PutAppLaunchConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
