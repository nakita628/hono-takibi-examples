import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024DeleteAppHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
