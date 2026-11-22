import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  billingHandler,
  chatbotMessagesHandler,
  chatChannelsAccountLevelHandler,
  chatChannelsHandler,
  chatMessagesHandler,
  cloudRecordingHandler,
  commonAreaPhonesHandler,
  contactsHandler,
  dashboardsHandler,
  deprecatedAPIEndpointsHandler,
  devicesHandler,
  groupsHandler,
  imChatHandler,
  imGroupsHandler,
  meetingsHandler,
  pacHandler,
  phoneAutoReceptionistsHandler,
  phoneBlockedListHandler,
  phoneCallQueuesHandler,
  phoneDevicesHandler,
  phoneHandler,
  phoneReportsHandler,
  phoneSharedLineGroupsHandler,
  phoneSiteHandler,
  reportsHandler,
  rolesHandler,
  roomsAccountHandler,
  roomsDevicesHandler,
  roomsHandler,
  roomsLocationHandler,
  sipConnectedAudioHandler,
  sipPhoneHandler,
  trackingFieldHandler,
  tspHandler,
  usersHandler,
  webinarsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', billingHandler)
  .route('/', phoneHandler)
  .route('/', cloudRecordingHandler)
  .route('/', sipConnectedAudioHandler)
  .route('/', usersHandler)
  .route('/', chatChannelsHandler)
  .route('/', contactsHandler)
  .route('/', chatChannelsAccountLevelHandler)
  .route('/', chatMessagesHandler)
  .route('/', groupsHandler)
  .route('/', devicesHandler)
  .route('/', chatbotMessagesHandler)
  .route('/', imChatHandler)
  .route('/', imGroupsHandler)
  .route('/', meetingsHandler)
  .route('/', dashboardsHandler)
  .route('/', deprecatedAPIEndpointsHandler)
  .route('/', webinarsHandler)
  .route('/', phoneAutoReceptionistsHandler)
  .route('/', phoneBlockedListHandler)
  .route('/', phoneCallQueuesHandler)
  .route('/', commonAreaPhonesHandler)
  .route('/', phoneDevicesHandler)
  .route('/', phoneReportsHandler)
  .route('/', phoneSharedLineGroupsHandler)
  .route('/', phoneSiteHandler)
  .route('/', reportsHandler)
  .route('/', rolesHandler)
  .route('/', roomsHandler)
  .route('/', roomsAccountHandler)
  .route('/', roomsLocationHandler)
  .route('/', roomsDevicesHandler)
  .route('/', sipPhoneHandler)
  .route('/', trackingFieldHandler)
  .route('/', tspHandler)
  .route('/', pacHandler)

export default app
