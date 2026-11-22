import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdAiAuditRobotsRoute, postZonesZoneIdAiAuditRobotsBulkRoute } from '../routes'

const app = new OpenAPIHono()

export const aiAuditHandler = app
  .openapi(getZonesZoneIdAiAuditRobotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAiAuditRobotsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
