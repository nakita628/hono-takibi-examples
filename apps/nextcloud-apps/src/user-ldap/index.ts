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
} from './routes'
import {
  deleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRouteHandler,
  getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRouteHandler,
  postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyRouteHandler,
  postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestRouteHandler,
  postOcsV2PhpAppsUserLdapApiV1ConfigRouteHandler,
  postOcsV2PhpAppsUserLdapApiV1WizardClearMappingsRouteHandler,
  postOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionRouteHandler,
  putOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postOcsV2PhpAppsUserLdapApiV1ConfigRoute,
    postOcsV2PhpAppsUserLdapApiV1ConfigRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute,
    deleteOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute,
    putOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRoute,
    getOcsV2PhpAppsUserLdapApiV1ConfigConfigIDRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestRoute,
    postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTestRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyRoute,
    postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopyRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionRoute,
    postOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardActionRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsUserLdapApiV1WizardClearMappingsRoute,
    postOcsV2PhpAppsUserLdapApiV1WizardClearMappingsRouteHandler,
  )

export default app
