import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsServerMigrationServiceV20161024GetAppLaunchConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
