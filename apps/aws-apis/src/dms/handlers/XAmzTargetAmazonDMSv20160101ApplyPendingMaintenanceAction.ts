import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101ApplyPendingMaintenanceActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
