import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOcsV2PhpAppsUserLdapApiV1WizardClearMappingsRoute,
  postOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wizardHandler = app
  .openapi(postOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsUserLdapApiV1WizardClearMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
