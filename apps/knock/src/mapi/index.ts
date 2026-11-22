import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  apiKeysHandler,
  assetsHandler,
  audiencesHandler,
  auditLogsHandler,
  branchesHandler,
  broadcastsHandler,
  channelGroupsHandler,
  channelsHandler,
  commitsHandler,
  emailLayoutsHandler,
  environmentsHandler,
  feedbackHandler,
  goalsHandler,
  guidesHandler,
  headlessAccountsHandler,
  membersHandler,
  messageTypesHandler,
  partialsHandler,
  preferenceCategoriesHandler,
  preferenceCenterHandler,
  reusableRequestsHandler,
  schemasHandler,
  sourcesHandler,
  tagsHandler,
  templatesHandler,
  translationsHandler,
  variablesHandler,
  warehousesHandler,
  warehouseSyncsHandler,
  webhooksHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', variablesHandler)
  .route('/', goalsHandler)
  .route('/', workflowsHandler)
  .route('/', commitsHandler)
  .route('/', sourcesHandler)
  .route('/', partialsHandler)
  .route('/', accountsHandler)
  .route('/', emailLayoutsHandler)
  .route('/', messageTypesHandler)
  .route('/', environmentsHandler)
  .route('/', assetsHandler)
  .route('/', broadcastsHandler)
  .route('/', feedbackHandler)
  .route('/', templatesHandler)
  .route('/', guidesHandler)
  .route('/', warehouseSyncsHandler)
  .route('/', headlessAccountsHandler)
  .route('/', audiencesHandler)
  .route('/', translationsHandler)
  .route('/', tagsHandler)
  .route('/', schemasHandler)
  .route('/', channelGroupsHandler)
  .route('/', reusableRequestsHandler)
  .route('/', channelsHandler)
  .route('/', membersHandler)
  .route('/', webhooksHandler)
  .route('/', preferenceCenterHandler)
  .route('/', warehousesHandler)
  .route('/', branchesHandler)
  .route('/', preferenceCategoriesHandler)
  .route('/', auditLogsHandler)
  .route('/', apiKeysHandler)

export default app
