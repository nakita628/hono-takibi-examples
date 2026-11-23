import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupHandler,
  getAccountSettingsHandler,
  getGroupConfigurationHandler,
  getGroupHandler,
  getGroupQueryHandler,
  groupResourcesHandler,
  groupsHandler,
  groupsListHandler,
  listGroupResourcesHandler,
  putGroupConfigurationHandler,
  resourcesHandler,
  ungroupResourcesHandler,
  updateAccountSettingsHandler,
  updateGroupHandler,
  updateGroupQueryHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', groupsHandler)
  .route('/', deleteGroupHandler)
  .route('/', getAccountSettingsHandler)
  .route('/', getGroupHandler)
  .route('/', getGroupConfigurationHandler)
  .route('/', getGroupQueryHandler)
  .route('/', resourcesHandler)
  .route('/', groupResourcesHandler)
  .route('/', listGroupResourcesHandler)
  .route('/', groupsListHandler)
  .route('/', putGroupConfigurationHandler)
  .route('/', ungroupResourcesHandler)
  .route('/', updateAccountSettingsHandler)
  .route('/', updateGroupHandler)
  .route('/', updateGroupQueryHandler)

export default app
