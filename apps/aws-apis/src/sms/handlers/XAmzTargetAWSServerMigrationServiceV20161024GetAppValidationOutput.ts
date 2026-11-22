import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputHandler =
  app.openapi(postXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
