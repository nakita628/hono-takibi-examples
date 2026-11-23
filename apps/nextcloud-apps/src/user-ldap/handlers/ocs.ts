import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute,
  getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute,
  postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyRoute,
  postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestRoute,
  postOcsV2PhpAppsUserLdapApiV1ConfigRoute,
  postOcsV2PhpAppsUserLdapApiV1WizardClearMappingsRoute,
  postOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionRoute,
  putOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(postOcsV2PhpAppsUserLdapApiV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsUserLdapApiV1WizardClearMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
