import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganisationActionsRoute,
  getOrganisationOrganisationIDCISSettingsRoute,
  getOrganisationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationHandler = app
  .openapi(getOrganisationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationOrganisationIDCISSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
