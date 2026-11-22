import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorHandler = app.openapi(
  postXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
