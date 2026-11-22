import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
