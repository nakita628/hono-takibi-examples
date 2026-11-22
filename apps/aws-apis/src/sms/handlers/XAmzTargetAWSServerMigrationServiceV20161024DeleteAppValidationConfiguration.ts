import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
