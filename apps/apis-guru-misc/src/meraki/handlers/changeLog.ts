import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsOrganizationIdConfigurationChangesRoute } from '../routes'

const app = new OpenAPIHono()

export const changeLogHandler = app.openapi(
  getOrganizationsOrganizationIdConfigurationChangesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
