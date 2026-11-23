import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminsHandler,
  aiHandler,
  articlesHandler,
  audiencesHandler,
  awayStatusReasonsHandler,
  brandsHandler,
  callsHandler,
  companiesHandler,
  contactsHandler,
  contentHandler,
  contentSnippetsHandler,
  conversationsHandler,
  customObjectInstancesHandler,
  dataAttributesHandler,
  dataConnectorsHandler,
  downloadHandler,
  dynamicContentsHandler,
  emailsHandler,
  eventsHandler,
  exportHandler,
  finHandler,
  finVoiceHandler,
  foldersHandler,
  helpCenterHandler,
  internalArticlesHandler,
  ipAllowlistHandler,
  jobsHandler,
  macrosHandler,
  meHandler,
  messagesHandler,
  newsHandler,
  notesHandler,
  officeHoursSchedulesHandler,
  phoneCallRedirectsHandler,
  segmentsHandler,
  subscriptionTypesHandler,
  tagsHandler,
  teamsHandler,
  ticketsHandler,
  ticketStatesHandler,
  ticketTypesHandler,
  visitorsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', meHandler)
  .route('/', macrosHandler)
  .route('/', adminsHandler)
  .route('/', officeHoursSchedulesHandler)
  .route('/', aiHandler)
  .route('/', articlesHandler)
  .route('/', awayStatusReasonsHandler)
  .route('/', audiencesHandler)
  .route('/', exportHandler)
  .route('/', downloadHandler)
  .route('/', finHandler)
  .route('/', helpCenterHandler)
  .route('/', internalArticlesHandler)
  .route('/', foldersHandler)
  .route('/', ipAllowlistHandler)
  .route('/', companiesHandler)
  .route('/', contactsHandler)
  .route('/', contentHandler)
  .route('/', contentSnippetsHandler)
  .route('/', dynamicContentsHandler)
  .route('/', conversationsHandler)
  .route('/', customObjectInstancesHandler)
  .route('/', dataAttributesHandler)
  .route('/', dataConnectorsHandler)
  .route('/', eventsHandler)
  .route('/', jobsHandler)
  .route('/', messagesHandler)
  .route('/', newsHandler)
  .route('/', notesHandler)
  .route('/', segmentsHandler)
  .route('/', subscriptionTypesHandler)
  .route('/', phoneCallRedirectsHandler)
  .route('/', callsHandler)
  .route('/', tagsHandler)
  .route('/', teamsHandler)
  .route('/', ticketStatesHandler)
  .route('/', ticketTypesHandler)
  .route('/', ticketsHandler)
  .route('/', visitorsHandler)
  .route('/', brandsHandler)
  .route('/', emailsHandler)
  .route('/', finVoiceHandler)

export default app
