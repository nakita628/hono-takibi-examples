import { OpenAPIHono } from '@hono/zod-openapi'
import {
  auditLogsHandler,
  codeReferencesHandler,
  configsHandler,
  environmentsHandler,
  featureFlagSettingValuesHandler,
  featureFlagSettingValuesUsingSDKKeyHandler,
  featureFlagsSettingsHandler,
  integrationLinksHandler,
  meHandler,
  membersHandler,
  organizationsHandler,
  permissionGroupsHandler,
  productsHandler,
  sdkKeysHandler,
  segmentsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', codeReferencesHandler)
  .route('/', configsHandler)
  .route('/', auditLogsHandler)
  .route('/', sdkKeysHandler)
  .route('/', featureFlagSettingValuesHandler)
  .route('/', featureFlagsSettingsHandler)
  .route('/', environmentsHandler)
  .route('/', integrationLinksHandler)
  .route('/', meHandler)
  .route('/', organizationsHandler)
  .route('/', membersHandler)
  .route('/', productsHandler)
  .route('/', permissionGroupsHandler)
  .route('/', segmentsHandler)
  .route('/', tagsHandler)
  .route('/', featureFlagSettingValuesUsingSDKKeyHandler)

export default app
