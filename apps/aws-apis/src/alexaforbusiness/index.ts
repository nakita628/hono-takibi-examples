import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAlexaForBusinessApproveSkillHandler,
  XAmzTargetAlexaForBusinessAssociateContactWithAddressBookHandler,
  XAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileHandler,
  XAmzTargetAlexaForBusinessAssociateDeviceWithRoomHandler,
  XAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomHandler,
  XAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupHandler,
  XAmzTargetAlexaForBusinessAssociateSkillWithUsersHandler,
  XAmzTargetAlexaForBusinessCreateAddressBookHandler,
  XAmzTargetAlexaForBusinessCreateBusinessReportScheduleHandler,
  XAmzTargetAlexaForBusinessCreateConferenceProviderHandler,
  XAmzTargetAlexaForBusinessCreateContactHandler,
  XAmzTargetAlexaForBusinessCreateGatewayGroupHandler,
  XAmzTargetAlexaForBusinessCreateNetworkProfileHandler,
  XAmzTargetAlexaForBusinessCreateProfileHandler,
  XAmzTargetAlexaForBusinessCreateRoomHandler,
  XAmzTargetAlexaForBusinessCreateSkillGroupHandler,
  XAmzTargetAlexaForBusinessCreateUserHandler,
  XAmzTargetAlexaForBusinessDeleteAddressBookHandler,
  XAmzTargetAlexaForBusinessDeleteBusinessReportScheduleHandler,
  XAmzTargetAlexaForBusinessDeleteConferenceProviderHandler,
  XAmzTargetAlexaForBusinessDeleteContactHandler,
  XAmzTargetAlexaForBusinessDeleteDeviceHandler,
  XAmzTargetAlexaForBusinessDeleteDeviceUsageDataHandler,
  XAmzTargetAlexaForBusinessDeleteGatewayGroupHandler,
  XAmzTargetAlexaForBusinessDeleteNetworkProfileHandler,
  XAmzTargetAlexaForBusinessDeleteProfileHandler,
  XAmzTargetAlexaForBusinessDeleteRoomHandler,
  XAmzTargetAlexaForBusinessDeleteRoomSkillParameterHandler,
  XAmzTargetAlexaForBusinessDeleteSkillAuthorizationHandler,
  XAmzTargetAlexaForBusinessDeleteSkillGroupHandler,
  XAmzTargetAlexaForBusinessDeleteUserHandler,
  XAmzTargetAlexaForBusinessDisassociateContactFromAddressBookHandler,
  XAmzTargetAlexaForBusinessDisassociateDeviceFromRoomHandler,
  XAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupHandler,
  XAmzTargetAlexaForBusinessDisassociateSkillFromUsersHandler,
  XAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomHandler,
  XAmzTargetAlexaForBusinessForgetSmartHomeAppliancesHandler,
  XAmzTargetAlexaForBusinessGetAddressBookHandler,
  XAmzTargetAlexaForBusinessGetConferencePreferenceHandler,
  XAmzTargetAlexaForBusinessGetConferenceProviderHandler,
  XAmzTargetAlexaForBusinessGetContactHandler,
  XAmzTargetAlexaForBusinessGetDeviceHandler,
  XAmzTargetAlexaForBusinessGetGatewayGroupHandler,
  XAmzTargetAlexaForBusinessGetGatewayHandler,
  XAmzTargetAlexaForBusinessGetInvitationConfigurationHandler,
  XAmzTargetAlexaForBusinessGetNetworkProfileHandler,
  XAmzTargetAlexaForBusinessGetProfileHandler,
  XAmzTargetAlexaForBusinessGetRoomHandler,
  XAmzTargetAlexaForBusinessGetRoomSkillParameterHandler,
  XAmzTargetAlexaForBusinessGetSkillGroupHandler,
  XAmzTargetAlexaForBusinessListBusinessReportSchedulesHandler,
  XAmzTargetAlexaForBusinessListConferenceProvidersHandler,
  XAmzTargetAlexaForBusinessListDeviceEventsHandler,
  XAmzTargetAlexaForBusinessListGatewayGroupsHandler,
  XAmzTargetAlexaForBusinessListGatewaysHandler,
  XAmzTargetAlexaForBusinessListSkillsHandler,
  XAmzTargetAlexaForBusinessListSkillsStoreCategoriesHandler,
  XAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryHandler,
  XAmzTargetAlexaForBusinessListSmartHomeAppliancesHandler,
  XAmzTargetAlexaForBusinessListTagsHandler,
  XAmzTargetAlexaForBusinessPutConferencePreferenceHandler,
  XAmzTargetAlexaForBusinessPutInvitationConfigurationHandler,
  XAmzTargetAlexaForBusinessPutRoomSkillParameterHandler,
  XAmzTargetAlexaForBusinessPutSkillAuthorizationHandler,
  XAmzTargetAlexaForBusinessRegisterAVSDeviceHandler,
  XAmzTargetAlexaForBusinessRejectSkillHandler,
  XAmzTargetAlexaForBusinessResolveRoomHandler,
  XAmzTargetAlexaForBusinessRevokeInvitationHandler,
  XAmzTargetAlexaForBusinessSearchAddressBooksHandler,
  XAmzTargetAlexaForBusinessSearchContactsHandler,
  XAmzTargetAlexaForBusinessSearchDevicesHandler,
  XAmzTargetAlexaForBusinessSearchNetworkProfilesHandler,
  XAmzTargetAlexaForBusinessSearchProfilesHandler,
  XAmzTargetAlexaForBusinessSearchRoomsHandler,
  XAmzTargetAlexaForBusinessSearchSkillGroupsHandler,
  XAmzTargetAlexaForBusinessSearchUsersHandler,
  XAmzTargetAlexaForBusinessSendAnnouncementHandler,
  XAmzTargetAlexaForBusinessSendInvitationHandler,
  XAmzTargetAlexaForBusinessStartDeviceSyncHandler,
  XAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryHandler,
  XAmzTargetAlexaForBusinessTagResourceHandler,
  XAmzTargetAlexaForBusinessUntagResourceHandler,
  XAmzTargetAlexaForBusinessUpdateAddressBookHandler,
  XAmzTargetAlexaForBusinessUpdateBusinessReportScheduleHandler,
  XAmzTargetAlexaForBusinessUpdateConferenceProviderHandler,
  XAmzTargetAlexaForBusinessUpdateContactHandler,
  XAmzTargetAlexaForBusinessUpdateDeviceHandler,
  XAmzTargetAlexaForBusinessUpdateGatewayGroupHandler,
  XAmzTargetAlexaForBusinessUpdateGatewayHandler,
  XAmzTargetAlexaForBusinessUpdateNetworkProfileHandler,
  XAmzTargetAlexaForBusinessUpdateProfileHandler,
  XAmzTargetAlexaForBusinessUpdateRoomHandler,
  XAmzTargetAlexaForBusinessUpdateSkillGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAlexaForBusinessApproveSkillHandler)
  .route('/', XAmzTargetAlexaForBusinessAssociateContactWithAddressBookHandler)
  .route('/', XAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileHandler)
  .route('/', XAmzTargetAlexaForBusinessAssociateDeviceWithRoomHandler)
  .route('/', XAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomHandler)
  .route('/', XAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupHandler)
  .route('/', XAmzTargetAlexaForBusinessAssociateSkillWithUsersHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateAddressBookHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateBusinessReportScheduleHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateConferenceProviderHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateContactHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateGatewayGroupHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateNetworkProfileHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateProfileHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateRoomHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateSkillGroupHandler)
  .route('/', XAmzTargetAlexaForBusinessCreateUserHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteAddressBookHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteBusinessReportScheduleHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteConferenceProviderHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteContactHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteDeviceHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteDeviceUsageDataHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteGatewayGroupHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteNetworkProfileHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteProfileHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteRoomHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteRoomSkillParameterHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteSkillAuthorizationHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteSkillGroupHandler)
  .route('/', XAmzTargetAlexaForBusinessDeleteUserHandler)
  .route('/', XAmzTargetAlexaForBusinessDisassociateContactFromAddressBookHandler)
  .route('/', XAmzTargetAlexaForBusinessDisassociateDeviceFromRoomHandler)
  .route('/', XAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupHandler)
  .route('/', XAmzTargetAlexaForBusinessDisassociateSkillFromUsersHandler)
  .route('/', XAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomHandler)
  .route('/', XAmzTargetAlexaForBusinessForgetSmartHomeAppliancesHandler)
  .route('/', XAmzTargetAlexaForBusinessGetAddressBookHandler)
  .route('/', XAmzTargetAlexaForBusinessGetConferencePreferenceHandler)
  .route('/', XAmzTargetAlexaForBusinessGetConferenceProviderHandler)
  .route('/', XAmzTargetAlexaForBusinessGetContactHandler)
  .route('/', XAmzTargetAlexaForBusinessGetDeviceHandler)
  .route('/', XAmzTargetAlexaForBusinessGetGatewayHandler)
  .route('/', XAmzTargetAlexaForBusinessGetGatewayGroupHandler)
  .route('/', XAmzTargetAlexaForBusinessGetInvitationConfigurationHandler)
  .route('/', XAmzTargetAlexaForBusinessGetNetworkProfileHandler)
  .route('/', XAmzTargetAlexaForBusinessGetProfileHandler)
  .route('/', XAmzTargetAlexaForBusinessGetRoomHandler)
  .route('/', XAmzTargetAlexaForBusinessGetRoomSkillParameterHandler)
  .route('/', XAmzTargetAlexaForBusinessGetSkillGroupHandler)
  .route('/', XAmzTargetAlexaForBusinessListBusinessReportSchedulesHandler)
  .route('/', XAmzTargetAlexaForBusinessListConferenceProvidersHandler)
  .route('/', XAmzTargetAlexaForBusinessListDeviceEventsHandler)
  .route('/', XAmzTargetAlexaForBusinessListGatewayGroupsHandler)
  .route('/', XAmzTargetAlexaForBusinessListGatewaysHandler)
  .route('/', XAmzTargetAlexaForBusinessListSkillsHandler)
  .route('/', XAmzTargetAlexaForBusinessListSkillsStoreCategoriesHandler)
  .route('/', XAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryHandler)
  .route('/', XAmzTargetAlexaForBusinessListSmartHomeAppliancesHandler)
  .route('/', XAmzTargetAlexaForBusinessListTagsHandler)
  .route('/', XAmzTargetAlexaForBusinessPutConferencePreferenceHandler)
  .route('/', XAmzTargetAlexaForBusinessPutInvitationConfigurationHandler)
  .route('/', XAmzTargetAlexaForBusinessPutRoomSkillParameterHandler)
  .route('/', XAmzTargetAlexaForBusinessPutSkillAuthorizationHandler)
  .route('/', XAmzTargetAlexaForBusinessRegisterAVSDeviceHandler)
  .route('/', XAmzTargetAlexaForBusinessRejectSkillHandler)
  .route('/', XAmzTargetAlexaForBusinessResolveRoomHandler)
  .route('/', XAmzTargetAlexaForBusinessRevokeInvitationHandler)
  .route('/', XAmzTargetAlexaForBusinessSearchAddressBooksHandler)
  .route('/', XAmzTargetAlexaForBusinessSearchContactsHandler)
  .route('/', XAmzTargetAlexaForBusinessSearchDevicesHandler)
  .route('/', XAmzTargetAlexaForBusinessSearchNetworkProfilesHandler)
  .route('/', XAmzTargetAlexaForBusinessSearchProfilesHandler)
  .route('/', XAmzTargetAlexaForBusinessSearchRoomsHandler)
  .route('/', XAmzTargetAlexaForBusinessSearchSkillGroupsHandler)
  .route('/', XAmzTargetAlexaForBusinessSearchUsersHandler)
  .route('/', XAmzTargetAlexaForBusinessSendAnnouncementHandler)
  .route('/', XAmzTargetAlexaForBusinessSendInvitationHandler)
  .route('/', XAmzTargetAlexaForBusinessStartDeviceSyncHandler)
  .route('/', XAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryHandler)
  .route('/', XAmzTargetAlexaForBusinessTagResourceHandler)
  .route('/', XAmzTargetAlexaForBusinessUntagResourceHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateAddressBookHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateBusinessReportScheduleHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateConferenceProviderHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateContactHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateDeviceHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateGatewayHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateGatewayGroupHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateNetworkProfileHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateProfileHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateRoomHandler)
  .route('/', XAmzTargetAlexaForBusinessUpdateSkillGroupHandler)

export default app
