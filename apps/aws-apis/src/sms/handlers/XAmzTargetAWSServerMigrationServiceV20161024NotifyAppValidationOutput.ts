import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputHandler =
  app.openapi(
    postXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
