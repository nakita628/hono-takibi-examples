import { OpenAPIHono } from '@hono/zod-openapi'
import { getApplicationsKeyComplianceRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app.openapi(getApplicationsKeyComplianceRoute, (c) => {
  throw new Error('Not implemented')
})
