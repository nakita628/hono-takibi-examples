import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsOrganizationIdFeatureFlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsFeatureFlagsHandler = app.openapi(
  getOrganizationsOrganizationIdFeatureFlagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
