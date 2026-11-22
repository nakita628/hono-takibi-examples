import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
