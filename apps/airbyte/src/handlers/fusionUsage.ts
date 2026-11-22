import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrganizationsOrganizationIdToolCallsUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const fusionUsageHandler = app.openapi(
  getV1OrganizationsOrganizationIdToolCallsUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
