import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateAuditStreamConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateAuditStreamConfigurationHandler = app.openapi(
  postUpdateAuditStreamConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
