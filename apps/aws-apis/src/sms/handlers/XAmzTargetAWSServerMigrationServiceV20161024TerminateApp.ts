import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024TerminateAppRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024TerminateAppHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024TerminateAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
