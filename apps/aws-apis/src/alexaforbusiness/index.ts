import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAlexaForBusinessApproveSkillHandler,
  xAmzTargetAlexaForBusinessAssociateContactWithAddressBookHandler,
  xAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileHandler,
  xAmzTargetAlexaForBusinessAssociateDeviceWithRoomHandler,
  xAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomHandler,
  xAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupHandler,
  xAmzTargetAlexaForBusinessAssociateSkillWithUsersHandler,
  xAmzTargetAlexaForBusinessCreateAddressBookHandler,
  xAmzTargetAlexaForBusinessCreateBusinessReportScheduleHandler,
  xAmzTargetAlexaForBusinessCreateConferenceProviderHandler,
  xAmzTargetAlexaForBusinessCreateContactHandler,
  xAmzTargetAlexaForBusinessCreateGatewayGroupHandler,
  xAmzTargetAlexaForBusinessCreateNetworkProfileHandler,
  xAmzTargetAlexaForBusinessCreateProfileHandler,
  xAmzTargetAlexaForBusinessCreateRoomHandler,
  xAmzTargetAlexaForBusinessCreateSkillGroupHandler,
  xAmzTargetAlexaForBusinessCreateUserHandler,
  xAmzTargetAlexaForBusinessDeleteAddressBookHandler,
  xAmzTargetAlexaForBusinessDeleteBusinessReportScheduleHandler,
  xAmzTargetAlexaForBusinessDeleteConferenceProviderHandler,
  xAmzTargetAlexaForBusinessDeleteContactHandler,
  xAmzTargetAlexaForBusinessDeleteDeviceHandler,
  xAmzTargetAlexaForBusinessDeleteDeviceUsageDataHandler,
  xAmzTargetAlexaForBusinessDeleteGatewayGroupHandler,
  xAmzTargetAlexaForBusinessDeleteNetworkProfileHandler,
  xAmzTargetAlexaForBusinessDeleteProfileHandler,
  xAmzTargetAlexaForBusinessDeleteRoomHandler,
  xAmzTargetAlexaForBusinessDeleteRoomSkillParameterHandler,
  xAmzTargetAlexaForBusinessDeleteSkillAuthorizationHandler,
  xAmzTargetAlexaForBusinessDeleteSkillGroupHandler,
  xAmzTargetAlexaForBusinessDeleteUserHandler,
  xAmzTargetAlexaForBusinessDisassociateContactFromAddressBookHandler,
  xAmzTargetAlexaForBusinessDisassociateDeviceFromRoomHandler,
  xAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupHandler,
  xAmzTargetAlexaForBusinessDisassociateSkillFromUsersHandler,
  xAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomHandler,
  xAmzTargetAlexaForBusinessForgetSmartHomeAppliancesHandler,
  xAmzTargetAlexaForBusinessGetAddressBookHandler,
  xAmzTargetAlexaForBusinessGetConferencePreferenceHandler,
  xAmzTargetAlexaForBusinessGetConferenceProviderHandler,
  xAmzTargetAlexaForBusinessGetContactHandler,
  xAmzTargetAlexaForBusinessGetDeviceHandler,
  xAmzTargetAlexaForBusinessGetGatewayGroupHandler,
  xAmzTargetAlexaForBusinessGetGatewayHandler,
  xAmzTargetAlexaForBusinessGetInvitationConfigurationHandler,
  xAmzTargetAlexaForBusinessGetNetworkProfileHandler,
  xAmzTargetAlexaForBusinessGetProfileHandler,
  xAmzTargetAlexaForBusinessGetRoomHandler,
  xAmzTargetAlexaForBusinessGetRoomSkillParameterHandler,
  xAmzTargetAlexaForBusinessGetSkillGroupHandler,
  xAmzTargetAlexaForBusinessListBusinessReportSchedulesHandler,
  xAmzTargetAlexaForBusinessListConferenceProvidersHandler,
  xAmzTargetAlexaForBusinessListDeviceEventsHandler,
  xAmzTargetAlexaForBusinessListGatewayGroupsHandler,
  xAmzTargetAlexaForBusinessListGatewaysHandler,
  xAmzTargetAlexaForBusinessListSkillsHandler,
  xAmzTargetAlexaForBusinessListSkillsStoreCategoriesHandler,
  xAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryHandler,
  xAmzTargetAlexaForBusinessListSmartHomeAppliancesHandler,
  xAmzTargetAlexaForBusinessListTagsHandler,
  xAmzTargetAlexaForBusinessPutConferencePreferenceHandler,
  xAmzTargetAlexaForBusinessPutInvitationConfigurationHandler,
  xAmzTargetAlexaForBusinessPutRoomSkillParameterHandler,
  xAmzTargetAlexaForBusinessPutSkillAuthorizationHandler,
  xAmzTargetAlexaForBusinessRegisterAvsDeviceHandler,
  xAmzTargetAlexaForBusinessRejectSkillHandler,
  xAmzTargetAlexaForBusinessResolveRoomHandler,
  xAmzTargetAlexaForBusinessRevokeInvitationHandler,
  xAmzTargetAlexaForBusinessSearchAddressBooksHandler,
  xAmzTargetAlexaForBusinessSearchContactsHandler,
  xAmzTargetAlexaForBusinessSearchDevicesHandler,
  xAmzTargetAlexaForBusinessSearchNetworkProfilesHandler,
  xAmzTargetAlexaForBusinessSearchProfilesHandler,
  xAmzTargetAlexaForBusinessSearchRoomsHandler,
  xAmzTargetAlexaForBusinessSearchSkillGroupsHandler,
  xAmzTargetAlexaForBusinessSearchUsersHandler,
  xAmzTargetAlexaForBusinessSendAnnouncementHandler,
  xAmzTargetAlexaForBusinessSendInvitationHandler,
  xAmzTargetAlexaForBusinessStartDeviceSyncHandler,
  xAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryHandler,
  xAmzTargetAlexaForBusinessTagResourceHandler,
  xAmzTargetAlexaForBusinessUntagResourceHandler,
  xAmzTargetAlexaForBusinessUpdateAddressBookHandler,
  xAmzTargetAlexaForBusinessUpdateBusinessReportScheduleHandler,
  xAmzTargetAlexaForBusinessUpdateConferenceProviderHandler,
  xAmzTargetAlexaForBusinessUpdateContactHandler,
  xAmzTargetAlexaForBusinessUpdateDeviceHandler,
  xAmzTargetAlexaForBusinessUpdateGatewayGroupHandler,
  xAmzTargetAlexaForBusinessUpdateGatewayHandler,
  xAmzTargetAlexaForBusinessUpdateNetworkProfileHandler,
  xAmzTargetAlexaForBusinessUpdateProfileHandler,
  xAmzTargetAlexaForBusinessUpdateRoomHandler,
  xAmzTargetAlexaForBusinessUpdateSkillGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAlexaForBusinessApproveSkillHandler)
  .route('/', xAmzTargetAlexaForBusinessAssociateContactWithAddressBookHandler)
  .route('/', xAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileHandler)
  .route('/', xAmzTargetAlexaForBusinessAssociateDeviceWithRoomHandler)
  .route('/', xAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomHandler)
  .route('/', xAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupHandler)
  .route('/', xAmzTargetAlexaForBusinessAssociateSkillWithUsersHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateAddressBookHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateBusinessReportScheduleHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateConferenceProviderHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateContactHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateGatewayGroupHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateNetworkProfileHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateProfileHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateRoomHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateSkillGroupHandler)
  .route('/', xAmzTargetAlexaForBusinessCreateUserHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteAddressBookHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteBusinessReportScheduleHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteConferenceProviderHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteContactHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteDeviceHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteDeviceUsageDataHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteGatewayGroupHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteNetworkProfileHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteProfileHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteRoomHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteRoomSkillParameterHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteSkillAuthorizationHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteSkillGroupHandler)
  .route('/', xAmzTargetAlexaForBusinessDeleteUserHandler)
  .route('/', xAmzTargetAlexaForBusinessDisassociateContactFromAddressBookHandler)
  .route('/', xAmzTargetAlexaForBusinessDisassociateDeviceFromRoomHandler)
  .route('/', xAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupHandler)
  .route('/', xAmzTargetAlexaForBusinessDisassociateSkillFromUsersHandler)
  .route('/', xAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomHandler)
  .route('/', xAmzTargetAlexaForBusinessForgetSmartHomeAppliancesHandler)
  .route('/', xAmzTargetAlexaForBusinessGetAddressBookHandler)
  .route('/', xAmzTargetAlexaForBusinessGetConferencePreferenceHandler)
  .route('/', xAmzTargetAlexaForBusinessGetConferenceProviderHandler)
  .route('/', xAmzTargetAlexaForBusinessGetContactHandler)
  .route('/', xAmzTargetAlexaForBusinessGetDeviceHandler)
  .route('/', xAmzTargetAlexaForBusinessGetGatewayHandler)
  .route('/', xAmzTargetAlexaForBusinessGetGatewayGroupHandler)
  .route('/', xAmzTargetAlexaForBusinessGetInvitationConfigurationHandler)
  .route('/', xAmzTargetAlexaForBusinessGetNetworkProfileHandler)
  .route('/', xAmzTargetAlexaForBusinessGetProfileHandler)
  .route('/', xAmzTargetAlexaForBusinessGetRoomHandler)
  .route('/', xAmzTargetAlexaForBusinessGetRoomSkillParameterHandler)
  .route('/', xAmzTargetAlexaForBusinessGetSkillGroupHandler)
  .route('/', xAmzTargetAlexaForBusinessListBusinessReportSchedulesHandler)
  .route('/', xAmzTargetAlexaForBusinessListConferenceProvidersHandler)
  .route('/', xAmzTargetAlexaForBusinessListDeviceEventsHandler)
  .route('/', xAmzTargetAlexaForBusinessListGatewayGroupsHandler)
  .route('/', xAmzTargetAlexaForBusinessListGatewaysHandler)
  .route('/', xAmzTargetAlexaForBusinessListSkillsHandler)
  .route('/', xAmzTargetAlexaForBusinessListSkillsStoreCategoriesHandler)
  .route('/', xAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryHandler)
  .route('/', xAmzTargetAlexaForBusinessListSmartHomeAppliancesHandler)
  .route('/', xAmzTargetAlexaForBusinessListTagsHandler)
  .route('/', xAmzTargetAlexaForBusinessPutConferencePreferenceHandler)
  .route('/', xAmzTargetAlexaForBusinessPutInvitationConfigurationHandler)
  .route('/', xAmzTargetAlexaForBusinessPutRoomSkillParameterHandler)
  .route('/', xAmzTargetAlexaForBusinessPutSkillAuthorizationHandler)
  .route('/', xAmzTargetAlexaForBusinessRegisterAvsDeviceHandler)
  .route('/', xAmzTargetAlexaForBusinessRejectSkillHandler)
  .route('/', xAmzTargetAlexaForBusinessResolveRoomHandler)
  .route('/', xAmzTargetAlexaForBusinessRevokeInvitationHandler)
  .route('/', xAmzTargetAlexaForBusinessSearchAddressBooksHandler)
  .route('/', xAmzTargetAlexaForBusinessSearchContactsHandler)
  .route('/', xAmzTargetAlexaForBusinessSearchDevicesHandler)
  .route('/', xAmzTargetAlexaForBusinessSearchNetworkProfilesHandler)
  .route('/', xAmzTargetAlexaForBusinessSearchProfilesHandler)
  .route('/', xAmzTargetAlexaForBusinessSearchRoomsHandler)
  .route('/', xAmzTargetAlexaForBusinessSearchSkillGroupsHandler)
  .route('/', xAmzTargetAlexaForBusinessSearchUsersHandler)
  .route('/', xAmzTargetAlexaForBusinessSendAnnouncementHandler)
  .route('/', xAmzTargetAlexaForBusinessSendInvitationHandler)
  .route('/', xAmzTargetAlexaForBusinessStartDeviceSyncHandler)
  .route('/', xAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryHandler)
  .route('/', xAmzTargetAlexaForBusinessTagResourceHandler)
  .route('/', xAmzTargetAlexaForBusinessUntagResourceHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateAddressBookHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateBusinessReportScheduleHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateConferenceProviderHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateContactHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateDeviceHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateGatewayHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateGatewayGroupHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateNetworkProfileHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateProfileHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateRoomHandler)
  .route('/', xAmzTargetAlexaForBusinessUpdateSkillGroupHandler)

export default app
