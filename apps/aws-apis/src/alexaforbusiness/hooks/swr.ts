import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAlexaForBusinessApproveSkillKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ApproveSkill'] as const
}

export function getXAmzTargetAlexaForBusinessAssociateContactWithAddressBookKey() {
  return ['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook'] as const
}

export function getXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileKey() {
  return ['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile'] as const
}

export function getXAmzTargetAlexaForBusinessAssociateDeviceWithRoomKey() {
  return ['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom'] as const
}

export function getXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomKey() {
  return ['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom'] as const
}

export function getXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup'] as const
}

export function getXAmzTargetAlexaForBusinessAssociateSkillWithUsersKey() {
  return ['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers'] as const
}

export function getXAmzTargetAlexaForBusinessCreateAddressBookKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateAddressBook'] as const
}

export function getXAmzTargetAlexaForBusinessCreateBusinessReportScheduleKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule'] as const
}

export function getXAmzTargetAlexaForBusinessCreateConferenceProviderKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider'] as const
}

export function getXAmzTargetAlexaForBusinessCreateContactKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateContact'] as const
}

export function getXAmzTargetAlexaForBusinessCreateGatewayGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup'] as const
}

export function getXAmzTargetAlexaForBusinessCreateNetworkProfileKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile'] as const
}

export function getXAmzTargetAlexaForBusinessCreateProfileKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateProfile'] as const
}

export function getXAmzTargetAlexaForBusinessCreateRoomKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateRoom'] as const
}

export function getXAmzTargetAlexaForBusinessCreateSkillGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup'] as const
}

export function getXAmzTargetAlexaForBusinessCreateUserKey() {
  return ['#X-Amz-Target=AlexaForBusiness.CreateUser'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteAddressBookKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteConferenceProviderKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteContactKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteContact'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteDeviceKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteDevice'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteDeviceUsageDataKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteGatewayGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteNetworkProfileKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteProfileKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteProfile'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteRoomKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteRoom'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteRoomSkillParameterKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteSkillAuthorizationKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteSkillGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup'] as const
}

export function getXAmzTargetAlexaForBusinessDeleteUserKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DeleteUser'] as const
}

export function getXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook'] as const
}

export function getXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom'] as const
}

export function getXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup'] as const
}

export function getXAmzTargetAlexaForBusinessDisassociateSkillFromUsersKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers'] as const
}

export function getXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomKey() {
  return ['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom'] as const
}

export function getXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances'] as const
}

export function getXAmzTargetAlexaForBusinessGetAddressBookKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetAddressBook'] as const
}

export function getXAmzTargetAlexaForBusinessGetConferencePreferenceKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetConferencePreference'] as const
}

export function getXAmzTargetAlexaForBusinessGetConferenceProviderKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider'] as const
}

export function getXAmzTargetAlexaForBusinessGetContactKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetContact'] as const
}

export function getXAmzTargetAlexaForBusinessGetDeviceKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetDevice'] as const
}

export function getXAmzTargetAlexaForBusinessGetGatewayKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetGateway'] as const
}

export function getXAmzTargetAlexaForBusinessGetGatewayGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup'] as const
}

export function getXAmzTargetAlexaForBusinessGetInvitationConfigurationKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration'] as const
}

export function getXAmzTargetAlexaForBusinessGetNetworkProfileKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile'] as const
}

export function getXAmzTargetAlexaForBusinessGetProfileKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetProfile'] as const
}

export function getXAmzTargetAlexaForBusinessGetRoomKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetRoom'] as const
}

export function getXAmzTargetAlexaForBusinessGetRoomSkillParameterKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter'] as const
}

export function getXAmzTargetAlexaForBusinessGetSkillGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.GetSkillGroup'] as const
}

export function getXAmzTargetAlexaForBusinessListBusinessReportSchedulesKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules'] as const
}

export function getXAmzTargetAlexaForBusinessListConferenceProvidersKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders'] as const
}

export function getXAmzTargetAlexaForBusinessListDeviceEventsKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents'] as const
}

export function getXAmzTargetAlexaForBusinessListGatewayGroupsKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups'] as const
}

export function getXAmzTargetAlexaForBusinessListGatewaysKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListGateways'] as const
}

export function getXAmzTargetAlexaForBusinessListSkillsKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListSkills'] as const
}

export function getXAmzTargetAlexaForBusinessListSkillsStoreCategoriesKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories'] as const
}

export function getXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory'] as const
}

export function getXAmzTargetAlexaForBusinessListSmartHomeAppliancesKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances'] as const
}

export function getXAmzTargetAlexaForBusinessListTagsKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ListTags'] as const
}

export function getXAmzTargetAlexaForBusinessPutConferencePreferenceKey() {
  return ['#X-Amz-Target=AlexaForBusiness.PutConferencePreference'] as const
}

export function getXAmzTargetAlexaForBusinessPutInvitationConfigurationKey() {
  return ['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration'] as const
}

export function getXAmzTargetAlexaForBusinessPutRoomSkillParameterKey() {
  return ['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter'] as const
}

export function getXAmzTargetAlexaForBusinessPutSkillAuthorizationKey() {
  return ['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization'] as const
}

export function getXAmzTargetAlexaForBusinessRegisterAVSDeviceKey() {
  return ['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice'] as const
}

export function getXAmzTargetAlexaForBusinessRejectSkillKey() {
  return ['#X-Amz-Target=AlexaForBusiness.RejectSkill'] as const
}

export function getXAmzTargetAlexaForBusinessResolveRoomKey() {
  return ['#X-Amz-Target=AlexaForBusiness.ResolveRoom'] as const
}

export function getXAmzTargetAlexaForBusinessRevokeInvitationKey() {
  return ['#X-Amz-Target=AlexaForBusiness.RevokeInvitation'] as const
}

export function getXAmzTargetAlexaForBusinessSearchAddressBooksKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks'] as const
}

export function getXAmzTargetAlexaForBusinessSearchContactsKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SearchContacts'] as const
}

export function getXAmzTargetAlexaForBusinessSearchDevicesKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SearchDevices'] as const
}

export function getXAmzTargetAlexaForBusinessSearchNetworkProfilesKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles'] as const
}

export function getXAmzTargetAlexaForBusinessSearchProfilesKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SearchProfiles'] as const
}

export function getXAmzTargetAlexaForBusinessSearchRoomsKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SearchRooms'] as const
}

export function getXAmzTargetAlexaForBusinessSearchSkillGroupsKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups'] as const
}

export function getXAmzTargetAlexaForBusinessSearchUsersKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SearchUsers'] as const
}

export function getXAmzTargetAlexaForBusinessSendAnnouncementKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SendAnnouncement'] as const
}

export function getXAmzTargetAlexaForBusinessSendInvitationKey() {
  return ['#X-Amz-Target=AlexaForBusiness.SendInvitation'] as const
}

export function getXAmzTargetAlexaForBusinessStartDeviceSyncKey() {
  return ['#X-Amz-Target=AlexaForBusiness.StartDeviceSync'] as const
}

export function getXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryKey() {
  return ['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery'] as const
}

export function getXAmzTargetAlexaForBusinessTagResourceKey() {
  return ['#X-Amz-Target=AlexaForBusiness.TagResource'] as const
}

export function getXAmzTargetAlexaForBusinessUntagResourceKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UntagResource'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateAddressBookKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateConferenceProviderKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateContactKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateContact'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateDeviceKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateDevice'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateGatewayKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateGateway'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateGatewayGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateNetworkProfileKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateProfileKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateProfile'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateRoomKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateRoom'] as const
}

export function getXAmzTargetAlexaForBusinessUpdateSkillGroupKey() {
  return ['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup'] as const
}

export function getPostXAmzTargetAlexaForBusinessApproveSkillKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ApproveSkill',
    '/#X-Amz-Target=AlexaForBusiness.ApproveSkill',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessApproveSkill<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ApproveSkill']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ApproveSkill']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessApproveSkillKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ApproveSkill']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ApproveSkill'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessAssociateContactWithAddressBookKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessAssociateContactWithAddressBook<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessAssociateContactWithAddressBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessAssociateDeviceWithRoomKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom',
    '/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessAssociateDeviceWithRoom<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessAssociateDeviceWithRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom',
    '/#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoom<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessAssociateSkillWithUsersKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers',
    '/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessAssociateSkillWithUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessAssociateSkillWithUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateAddressBookKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.CreateAddressBook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateAddressBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateAddressBook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateAddressBook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateAddressBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateAddressBook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateAddressBook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateBusinessReportScheduleKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule',
    '/#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateBusinessReportSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateBusinessReportScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateConferenceProviderKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider',
    '/#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateConferenceProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateConferenceProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateContactKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateContact',
    '/#X-Amz-Target=AlexaForBusiness.CreateContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateContact']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateContact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateContact'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateGatewayGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup',
    '/#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateGatewayGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateGatewayGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateNetworkProfileKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateNetworkProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateNetworkProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateProfileKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateProfile',
    '/#X-Amz-Target=AlexaForBusiness.CreateProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateProfile']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateRoomKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateRoom',
    '/#X-Amz-Target=AlexaForBusiness.CreateRoom',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateRoom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateRoom']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateRoom']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateRoom']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateRoom'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateSkillGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.CreateSkillGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateSkillGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateSkillGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessCreateUserKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateUser',
    '/#X-Amz-Target=AlexaForBusiness.CreateUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessCreateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessCreateUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.CreateUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteAddressBookKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.DeleteAddressBook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteAddressBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteAddressBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule',
    '/#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteBusinessReportSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteConferenceProviderKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider',
    '/#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteConferenceProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteConferenceProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteContactKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteContact',
    '/#X-Amz-Target=AlexaForBusiness.DeleteContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteContact']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteContact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteContact'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteDeviceKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteDevice',
    '/#X-Amz-Target=AlexaForBusiness.DeleteDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDevice']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDevice']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteDevice'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteDeviceUsageDataKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData',
    '/#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteDeviceUsageData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteDeviceUsageDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteGatewayGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup',
    '/#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteGatewayGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteGatewayGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteNetworkProfileKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteNetworkProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteNetworkProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteProfileKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteProfile',
    '/#X-Amz-Target=AlexaForBusiness.DeleteProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteProfile']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteRoomKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteRoom',
    '/#X-Amz-Target=AlexaForBusiness.DeleteRoom',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteRoom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoom']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoom']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoom']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteRoom'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteRoomSkillParameterKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter',
    '/#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteRoomSkillParameter<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteRoomSkillParameterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteSkillAuthorizationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization',
    '/#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteSkillAuthorization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteSkillAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteSkillGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteSkillGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteSkillGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDeleteUserKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteUser',
    '/#X-Amz-Target=AlexaForBusiness.DeleteUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDeleteUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDeleteUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DeleteUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDisassociateContactFromAddressBook<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDisassociateDeviceFromRoom<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDisassociateSkillFromUsersKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDisassociateSkillFromUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDisassociateSkillFromUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoom<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances',
    '/#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessForgetSmartHomeAppliances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetAddressBookKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.GetAddressBook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetAddressBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetAddressBook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetAddressBook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetAddressBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetAddressBook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetAddressBook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetConferencePreferenceKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetConferencePreference',
    '/#X-Amz-Target=AlexaForBusiness.GetConferencePreference',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetConferencePreference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferencePreference']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferencePreference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetConferencePreferenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferencePreference']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetConferencePreference'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetConferenceProviderKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetConferenceProvider',
    '/#X-Amz-Target=AlexaForBusiness.GetConferenceProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetConferenceProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetConferenceProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetContactKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetContact',
    '/#X-Amz-Target=AlexaForBusiness.GetContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetContact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetContact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetContact'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetDeviceKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetDevice',
    '/#X-Amz-Target=AlexaForBusiness.GetDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetDevice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetDevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetDevice']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AlexaForBusiness.GetDevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetGatewayKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetGateway',
    '/#X-Amz-Target=AlexaForBusiness.GetGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetGateway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGateway']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGateway']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetGatewayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetGateway'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetGatewayGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetGatewayGroup',
    '/#X-Amz-Target=AlexaForBusiness.GetGatewayGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetGatewayGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetGatewayGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetInvitationConfigurationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration',
    '/#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetInvitationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetInvitationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetNetworkProfileKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.GetNetworkProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetNetworkProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetNetworkProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetProfileKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetProfile',
    '/#X-Amz-Target=AlexaForBusiness.GetProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetProfile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetRoomKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetRoom',
    '/#X-Amz-Target=AlexaForBusiness.GetRoom',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetRoom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoom']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoom']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoom']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AlexaForBusiness.GetRoom'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetRoomSkillParameterKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter',
    '/#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetRoomSkillParameter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetRoomSkillParameterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessGetSkillGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.GetSkillGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessGetSkillGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetSkillGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetSkillGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessGetSkillGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetSkillGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.GetSkillGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListBusinessReportSchedulesKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules',
    '/#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListBusinessReportSchedules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListBusinessReportSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListConferenceProvidersKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListConferenceProviders',
    '/#X-Amz-Target=AlexaForBusiness.ListConferenceProviders',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListConferenceProviders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListConferenceProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListDeviceEventsKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListDeviceEvents',
    '/#X-Amz-Target=AlexaForBusiness.ListDeviceEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListDeviceEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListDeviceEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListGatewayGroupsKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListGatewayGroups',
    '/#X-Amz-Target=AlexaForBusiness.ListGatewayGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListGatewayGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListGatewayGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListGatewaysKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListGateways',
    '/#X-Amz-Target=AlexaForBusiness.ListGateways',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListGateways<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListGateways']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListGateways']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListGatewaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListGateways']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ListGateways'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListSkillsKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListSkills',
    '/#X-Amz-Target=AlexaForBusiness.ListSkills',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListSkills<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkills']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkills']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListSkillsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkills']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ListSkills'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListSkillsStoreCategoriesKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories',
    '/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListSkillsStoreCategories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListSkillsStoreCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory',
    '/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListSmartHomeAppliancesKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances',
    '/#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListSmartHomeAppliances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListSmartHomeAppliancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessListTagsKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListTags',
    '/#X-Amz-Target=AlexaForBusiness.ListTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessListTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessListTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListTags']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AlexaForBusiness.ListTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessPutConferencePreferenceKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.PutConferencePreference',
    '/#X-Amz-Target=AlexaForBusiness.PutConferencePreference',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessPutConferencePreference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.PutConferencePreference']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.PutConferencePreference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessPutConferencePreferenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.PutConferencePreference']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.PutConferencePreference'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessPutInvitationConfigurationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration',
    '/#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessPutInvitationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessPutInvitationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessPutRoomSkillParameterKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter',
    '/#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessPutRoomSkillParameter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessPutRoomSkillParameterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessPutSkillAuthorizationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization',
    '/#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessPutSkillAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessPutSkillAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessRegisterAVSDeviceKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice',
    '/#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessRegisterAVSDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessRegisterAVSDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessRejectSkillKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.RejectSkill',
    '/#X-Amz-Target=AlexaForBusiness.RejectSkill',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessRejectSkill<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RejectSkill']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RejectSkill']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessRejectSkillKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.RejectSkill']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.RejectSkill'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessResolveRoomKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ResolveRoom',
    '/#X-Amz-Target=AlexaForBusiness.ResolveRoom',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessResolveRoom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ResolveRoom']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ResolveRoom']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessResolveRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ResolveRoom']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.ResolveRoom'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessRevokeInvitationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.RevokeInvitation',
    '/#X-Amz-Target=AlexaForBusiness.RevokeInvitation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessRevokeInvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RevokeInvitation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RevokeInvitation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessRevokeInvitationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.RevokeInvitation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.RevokeInvitation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSearchAddressBooksKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchAddressBooks',
    '/#X-Amz-Target=AlexaForBusiness.SearchAddressBooks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSearchAddressBooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSearchAddressBooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSearchContactsKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchContacts',
    '/#X-Amz-Target=AlexaForBusiness.SearchContacts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSearchContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchContacts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchContacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSearchContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchContacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SearchContacts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSearchDevicesKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchDevices',
    '/#X-Amz-Target=AlexaForBusiness.SearchDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSearchDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchDevices']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchDevices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSearchDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchDevices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SearchDevices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSearchNetworkProfilesKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles',
    '/#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSearchNetworkProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSearchNetworkProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSearchProfilesKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchProfiles',
    '/#X-Amz-Target=AlexaForBusiness.SearchProfiles',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSearchProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchProfiles']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchProfiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSearchProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchProfiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SearchProfiles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSearchRoomsKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchRooms',
    '/#X-Amz-Target=AlexaForBusiness.SearchRooms',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSearchRooms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchRooms']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchRooms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSearchRoomsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchRooms']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SearchRooms'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSearchSkillGroupsKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchSkillGroups',
    '/#X-Amz-Target=AlexaForBusiness.SearchSkillGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSearchSkillGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSearchSkillGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSearchUsersKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchUsers',
    '/#X-Amz-Target=AlexaForBusiness.SearchUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSearchUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchUsers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchUsers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSearchUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchUsers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SearchUsers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSendAnnouncementKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SendAnnouncement',
    '/#X-Amz-Target=AlexaForBusiness.SendAnnouncement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSendAnnouncement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SendAnnouncement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SendAnnouncement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSendAnnouncementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SendAnnouncement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SendAnnouncement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessSendInvitationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SendInvitation',
    '/#X-Amz-Target=AlexaForBusiness.SendInvitation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessSendInvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SendInvitation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SendInvitation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessSendInvitationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SendInvitation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.SendInvitation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessStartDeviceSyncKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.StartDeviceSync',
    '/#X-Amz-Target=AlexaForBusiness.StartDeviceSync',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessStartDeviceSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.StartDeviceSync']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.StartDeviceSync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessStartDeviceSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.StartDeviceSync']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.StartDeviceSync'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery',
    '/#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscovery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessTagResourceKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.TagResource',
    '/#X-Amz-Target=AlexaForBusiness.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUntagResourceKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UntagResource',
    '/#X-Amz-Target=AlexaForBusiness.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateAddressBookKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.UpdateAddressBook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateAddressBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateAddressBookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule',
    '/#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateBusinessReportSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateConferenceProviderKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider',
    '/#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateConferenceProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateConferenceProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateContactKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateContact',
    '/#X-Amz-Target=AlexaForBusiness.UpdateContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateContact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateContact']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateContact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateContact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateContact'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateDeviceKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateDevice',
    '/#X-Amz-Target=AlexaForBusiness.UpdateDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateDevice']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateDevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateDevice']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateDevice'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateGatewayKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateGateway',
    '/#X-Amz-Target=AlexaForBusiness.UpdateGateway',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateGateway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGateway']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGateway']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateGatewayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGateway']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateGateway'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateGatewayGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup',
    '/#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateGatewayGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateGatewayGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateNetworkProfileKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateNetworkProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateNetworkProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateProfileKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateProfile',
    '/#X-Amz-Target=AlexaForBusiness.UpdateProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateProfile']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateRoomKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateRoom',
    '/#X-Amz-Target=AlexaForBusiness.UpdateRoom',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateRoom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateRoom']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateRoom']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateRoom']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateRoom'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAlexaForBusinessUpdateSkillGroupKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAlexaForBusinessUpdateSkillGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAlexaForBusinessUpdateSkillGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
