import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024DeleteAppLaunchConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
