import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ChangelogOrganizationOrganizationIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const auditingHandler = app.openapi(
  getApiV1ChangelogOrganizationOrganizationIdIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
