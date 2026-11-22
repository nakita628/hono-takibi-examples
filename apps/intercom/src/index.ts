import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminsHandler,
  aiContentHandler,
  articlesHandler,
  audiencesHandler,
  awayStatusReasonsHandler,
  bannersHandler,
  brandsHandler,
  callsHandler,
  companiesHandler,
  contactsHandler,
  contentHandler,
  contentSnippetsHandler,
  conversationsAttributesHandler,
  conversationsHandler,
  customObjectInstancesHandler,
  dataAttributesHandler,
  dataConnectorsHandler,
  dataEventsHandler,
  dataExportHandler,
  dynamicContentHandler,
  emailsHandler,
  finAgentHandler,
  foldersHandler,
  helpCenterHandler,
  internalArticlesHandler,
  ipAllowlistHandler,
  jobsHandler,
  macrosHandler,
  messagesHandler,
  newsHandler,
  notesHandler,
  officeHoursHandler,
  reportingDataExportHandler,
  segmentsHandler,
  subscriptionTypesHandler,
  switchHandler,
  tagsHandler,
  teamsHandler,
  ticketsHandler,
  ticketStatesHandler,
  ticketTypeAttributesHandler,
  ticketTypesHandler,
  visitorsHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminsHandler)
  .route('/', macrosHandler)
  .route('/', officeHoursHandler)
  .route('/', aiContentHandler)
  .route('/', articlesHandler)
  .route('/', awayStatusReasonsHandler)
  .route('/', audiencesHandler)
  .route('/', reportingDataExportHandler)
  .route('/', finAgentHandler)
  .route('/', helpCenterHandler)
  .route('/', internalArticlesHandler)
  .route('/', foldersHandler)
  .route('/', ipAllowlistHandler)
  .route('/', companiesHandler)
  .route('/', notesHandler)
  .route('/', contactsHandler)
  .route('/', subscriptionTypesHandler)
  .route('/', tagsHandler)
  .route('/', bannersHandler)
  .route('/', contentHandler)
  .route('/', contentSnippetsHandler)
  .route('/', dynamicContentHandler)
  .route('/', conversationsHandler)
  .route('/', conversationsAttributesHandler)
  .route('/', customObjectInstancesHandler)
  .route('/', dataAttributesHandler)
  .route('/', dataConnectorsHandler)
  .route('/', dataEventsHandler)
  .route('/', dataExportHandler)
  .route('/', jobsHandler)
  .route('/', messagesHandler)
  .route('/', newsHandler)
  .route('/', segmentsHandler)
  .route('/', switchHandler)
  .route('/', callsHandler)
  .route('/', teamsHandler)
  .route('/', ticketStatesHandler)
  .route('/', ticketTypeAttributesHandler)
  .route('/', ticketTypesHandler)
  .route('/', ticketsHandler)
  .route('/', visitorsHandler)
  .route('/', brandsHandler)
  .route('/', emailsHandler)
  .route('/', workflowsHandler)

export default app
