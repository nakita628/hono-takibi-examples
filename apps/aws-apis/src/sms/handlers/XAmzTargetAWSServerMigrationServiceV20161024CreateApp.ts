import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024CreateAppRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024CreateAppHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024CreateAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
