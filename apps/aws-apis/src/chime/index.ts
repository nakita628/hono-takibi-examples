import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  appInstancesHandler,
  appInstanceUsersAppInstanceArnHandler,
  appInstanceUsersHandler,
  channelsAppInstanceArnHandler,
  channelsHandler,
  channelsScopeAppInstanceUserMembershipsHandler,
  channelsScopeAppInstanceUserModeratedChannelsHandler,
  emergencyCallingHandler,
  endpointsHandler,
  mediaCapturePipelinesHandler,
  meetingsHandler,
  meetingsOperationCreateAttendeesHandler,
  phoneNumberCountriesProductTypeHandler,
  phoneNumberOrdersHandler,
  phoneNumbersHandler,
  phoneNumbersOperationBatchDeleteHandler,
  phoneNumbersOperationBatchUpdateHandler,
  searchTypePhoneNumbersHandler,
  settingsHandler,
  sipMediaApplicationsHandler,
  sipRulesHandler,
  tagsArnHandler,
  tagsOperationTagResourceHandler,
  tagsOperationUntagResourceHandler,
  voiceConnectorGroupsHandler,
  voiceConnectorsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', voiceConnectorsHandler)
  .route('/', voiceConnectorGroupsHandler)
  .route('/', meetingsHandler)
  .route('/', channelsHandler)
  .route('/', phoneNumbersOperationBatchDeleteHandler)
  .route('/', phoneNumbersOperationBatchUpdateHandler)
  .route('/', appInstancesHandler)
  .route('/', appInstanceUsersHandler)
  .route('/', mediaCapturePipelinesHandler)
  .route('/', meetingsOperationCreateAttendeesHandler)
  .route('/', phoneNumberOrdersHandler)
  .route('/', sipMediaApplicationsHandler)
  .route('/', sipRulesHandler)
  .route('/', phoneNumbersHandler)
  .route('/', settingsHandler)
  .route('/', endpointsHandler)
  .route('/', appInstanceUsersAppInstanceArnHandler)
  .route('/', channelsScopeAppInstanceUserMembershipsHandler)
  .route('/', channelsAppInstanceArnHandler)
  .route('/', channelsScopeAppInstanceUserModeratedChannelsHandler)
  .route('/', phoneNumberCountriesProductTypeHandler)
  .route('/', tagsArnHandler)
  .route('/', searchTypePhoneNumbersHandler)
  .route('/', tagsOperationTagResourceHandler)
  .route('/', tagsOperationUntagResourceHandler)
  .route('/', emergencyCallingHandler)

export default app
