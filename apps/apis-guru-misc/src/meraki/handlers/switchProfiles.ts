import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const switchProfilesHandler = app.openapi(
  getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
