import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAlexaForBusinessApproveSkill(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ApproveSkill']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ApproveSkill'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessAssociateContactWithAddressBook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessAssociateDeviceWithRoom(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoom(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessAssociateSkillWithUsers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateAddressBook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateAddressBook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateAddressBook'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateBusinessReportSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateConferenceProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateContact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateContact'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateGatewayGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateNetworkProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateProfile'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateRoom(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateRoom']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateRoom'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateSkillGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessCreateUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.CreateUser'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteAddressBook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteBusinessReportSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteConferenceProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteContact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteContact'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteDevice(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteDevice'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteDeviceUsageData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteGatewayGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteNetworkProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteProfile'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteRoom(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoom']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteRoom'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteRoomSkillParameter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteSkillAuthorization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteSkillGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDeleteUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DeleteUser'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDisassociateContactFromAddressBook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAlexaForBusinessDisassociateDeviceFromRoom(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDisassociateSkillFromUsers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoom(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessForgetSmartHomeAppliances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetAddressBook(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetAddressBook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetAddressBook'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetConferencePreference(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferencePreference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetConferencePreference'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetConferenceProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetContact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetContact'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetDevice(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetDevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetDevice'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetGateway(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetGateway'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetGatewayGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetInvitationConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetNetworkProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetProfile'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetRoom(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoom']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AlexaForBusiness.GetRoom'].$post(args, options))
}

export async function postXAmzTargetAlexaForBusinessGetRoomSkillParameter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessGetSkillGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetSkillGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.GetSkillGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListBusinessReportSchedules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListConferenceProviders(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListDeviceEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListGatewayGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListGateways(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListGateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ListGateways'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListSkills(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkills']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ListSkills'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListSkillsStoreCategories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListSmartHomeAppliances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessListTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AlexaForBusiness.ListTags'].$post(args, options))
}

export async function postXAmzTargetAlexaForBusinessPutConferencePreference(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.PutConferencePreference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.PutConferencePreference'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessPutInvitationConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessPutRoomSkillParameter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessPutSkillAuthorization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessRegisterAVSDevice(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessRejectSkill(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RejectSkill']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.RejectSkill'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessResolveRoom(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ResolveRoom']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.ResolveRoom'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessRevokeInvitation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.RevokeInvitation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.RevokeInvitation'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSearchAddressBooks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSearchContacts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchContacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SearchContacts'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSearchDevices(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchDevices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SearchDevices'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSearchNetworkProfiles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSearchProfiles(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SearchProfiles'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSearchRooms(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchRooms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SearchRooms'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSearchSkillGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSearchUsers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SearchUsers'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSendAnnouncement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.SendAnnouncement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SendAnnouncement'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessSendInvitation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SendInvitation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.SendInvitation'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessStartDeviceSync(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.StartDeviceSync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.StartDeviceSync'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscovery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateAddressBook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateBusinessReportSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateConferenceProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateContact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateContact'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateDevice(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateDevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateDevice'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateGateway(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateGateway'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateGatewayGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateNetworkProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateProfile'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateRoom(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateRoom']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateRoom'].$post(args, options),
  )
}

export async function postXAmzTargetAlexaForBusinessUpdateSkillGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup'].$post(args, options),
  )
}
