import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyticsHandler,
  auditHandler,
  content__attachmentsHandler,
  content__childrenAndDescendantsHandler,
  content__macroBodyHandler,
  contentBodyHandler,
  contentHandler,
  contentLabelsHandler,
  contentPermissionsHandler,
  contentRestrictionsHandler,
  contentStatesHandler,
  contentVersionsHandler,
  contentWatchesHandler,
  dynamicModulesHandler,
  experimentalHandler,
  groupHandler,
  labelInfoHandler,
  longRunningTaskHandler,
  relationHandler,
  searchHandler,
  settingsHandler,
  spaceHandler,
  spacePermissionsHandler,
  spaceSettingsHandler,
  templateHandler,
  themesHandler,
  userPropertiesHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', auditHandler)
  .route('/', contentHandler)
  .route('/', experimentalHandler)
  .route('/', content__childrenAndDescendantsHandler)
  .route('/', content__attachmentsHandler)
  .route('/', content__macroBodyHandler)
  .route('/', contentLabelsHandler)
  .route('/', contentWatchesHandler)
  .route('/', contentPermissionsHandler)
  .route('/', contentRestrictionsHandler)
  .route('/', contentStatesHandler)
  .route('/', contentVersionsHandler)
  .route('/', contentBodyHandler)
  .route('/', labelInfoHandler)
  .route('/', groupHandler)
  .route('/', longRunningTaskHandler)
  .route('/', relationHandler)
  .route('/', searchHandler)
  .route('/', settingsHandler)
  .route('/', themesHandler)
  .route('/', spaceHandler)
  .route('/', spacePermissionsHandler)
  .route('/', spaceSettingsHandler)
  .route('/', templateHandler)
  .route('/', usersHandler)
  .route('/', dynamicModulesHandler)
  .route('/', analyticsHandler)
  .route('/', userPropertiesHandler)

export default app
