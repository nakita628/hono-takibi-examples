import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101StartMaintenanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101StartMaintenanceHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101StartMaintenanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
