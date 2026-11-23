import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101DescribePendingMaintenanceActionsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DescribePendingMaintenanceActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
