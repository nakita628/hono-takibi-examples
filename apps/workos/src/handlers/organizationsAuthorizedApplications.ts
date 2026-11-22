import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsOrganizationIdAuthorizedApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsAuthorizedApplicationsHandler = app.openapi(
  getOrganizationsOrganizationIdAuthorizedApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
