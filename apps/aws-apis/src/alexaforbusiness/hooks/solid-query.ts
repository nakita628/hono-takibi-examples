import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetAlexaForBusinessApproveSkillMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ApproveSkill',
    '/#X-Amz-Target=AlexaForBusiness.ApproveSkill',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessApproveSkillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ApproveSkill']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessApproveSkillMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ApproveSkill']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ApproveSkill'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessApproveSkill<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.ApproveSkill']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ApproveSkill']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessApproveSkillMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessAssociateContactWithAddressBookMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessAssociateContactWithAddressBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessAssociateContactWithAddressBookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessAssociateContactWithAddressBook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessAssociateContactWithAddressBookMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessAssociateDeviceWithRoomMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom',
    '/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessAssociateDeviceWithRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessAssociateDeviceWithRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessAssociateDeviceWithRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessAssociateDeviceWithRoomMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom',
    '/#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessAssociateSkillWithUsersMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers',
    '/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessAssociateSkillWithUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessAssociateSkillWithUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessAssociateSkillWithUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessAssociateSkillWithUsersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateAddressBookMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.CreateAddressBook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateAddressBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateAddressBook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateAddressBookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateAddressBook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.CreateAddressBook'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateAddressBook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateAddressBook']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateAddressBook']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessCreateAddressBookMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateBusinessReportScheduleMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule',
    '/#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateBusinessReportScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateBusinessReportScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateBusinessReportSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessCreateBusinessReportScheduleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateConferenceProviderMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider',
    '/#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateConferenceProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateConferenceProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateConferenceProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessCreateConferenceProviderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateContactMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateContact',
    '/#X-Amz-Target=AlexaForBusiness.CreateContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateContactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateContact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.CreateContact'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateContact']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateContact']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessCreateContactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateGatewayGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup',
    '/#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateGatewayGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateGatewayGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateGatewayGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessCreateGatewayGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateNetworkProfileMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateNetworkProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateNetworkProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateNetworkProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessCreateNetworkProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateProfileMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateProfile',
    '/#X-Amz-Target=AlexaForBusiness.CreateProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.CreateProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateProfile']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessCreateProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateRoomMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateRoom',
    '/#X-Amz-Target=AlexaForBusiness.CreateRoom',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateRoom']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateRoom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateRoom']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.CreateRoom'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateRoom']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateRoom']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessCreateRoomMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateSkillGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.CreateSkillGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateSkillGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateSkillGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateSkillGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.CreateSkillGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessCreateSkillGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessCreateUserMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.CreateUser',
    '/#X-Amz-Target=AlexaForBusiness.CreateUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessCreateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessCreateUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.CreateUser'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessCreateUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateUser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.CreateUser']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessCreateUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteAddressBookMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.DeleteAddressBook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteAddressBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteAddressBookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteAddressBook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteAddressBook']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteAddressBookMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule',
    '/#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteBusinessReportSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteConferenceProviderMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider',
    '/#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteConferenceProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteConferenceProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteConferenceProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessDeleteConferenceProviderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteContactMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteContact',
    '/#X-Amz-Target=AlexaForBusiness.DeleteContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteContactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteContact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteContact'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteContact']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteContact']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteContactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteDeviceMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteDevice',
    '/#X-Amz-Target=AlexaForBusiness.DeleteDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDevice']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteDevice'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDevice']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDevice']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteDeviceUsageDataMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData',
    '/#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteDeviceUsageDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteDeviceUsageDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteDeviceUsageData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteDeviceUsageDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteGatewayGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup',
    '/#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteGatewayGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteGatewayGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteGatewayGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteGatewayGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteNetworkProfileMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteNetworkProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteNetworkProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteNetworkProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteNetworkProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteProfileMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteProfile',
    '/#X-Amz-Target=AlexaForBusiness.DeleteProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteProfile']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteRoomMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteRoom',
    '/#X-Amz-Target=AlexaForBusiness.DeleteRoom',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoom']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoom']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.DeleteRoom'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoom']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoom']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteRoomMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteRoomSkillParameterMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter',
    '/#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteRoomSkillParameterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteRoomSkillParameterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteRoomSkillParameter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessDeleteRoomSkillParameterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteSkillAuthorizationMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization',
    '/#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteSkillAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteSkillAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteSkillAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessDeleteSkillAuthorizationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteSkillGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteSkillGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteSkillGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteSkillGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteSkillGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDeleteUserMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DeleteUser',
    '/#X-Amz-Target=AlexaForBusiness.DeleteUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDeleteUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.DeleteUser'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDeleteUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteUser']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.DeleteUser']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessDeleteUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDisassociateContactFromAddressBook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDisassociateDeviceFromRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDisassociateSkillFromUsersMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDisassociateSkillFromUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDisassociateSkillFromUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDisassociateSkillFromUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessDisassociateSkillFromUsersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom',
    '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances',
    '/#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessForgetSmartHomeAppliances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetAddressBookMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.GetAddressBook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetAddressBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetAddressBook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetAddressBookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.GetAddressBook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.GetAddressBook'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetAddressBook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetAddressBook']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetAddressBook']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetAddressBookMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetConferencePreferenceMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetConferencePreference',
    '/#X-Amz-Target=AlexaForBusiness.GetConferencePreference',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetConferencePreferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferencePreference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetConferencePreferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferencePreference']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.GetConferencePreference'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetConferencePreference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferencePreference']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessGetConferencePreferenceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetConferenceProviderMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetConferenceProvider',
    '/#X-Amz-Target=AlexaForBusiness.GetConferenceProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetConferenceProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetConferenceProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetConferenceProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetConferenceProvider']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetConferenceProviderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetContactMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetContact',
    '/#X-Amz-Target=AlexaForBusiness.GetContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetContact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetContactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetContact']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.GetContact'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetContact']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetContact']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetContactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetDeviceMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetDevice',
    '/#X-Amz-Target=AlexaForBusiness.GetDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetDevice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetDevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetDevice']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.GetDevice'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetDevice']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetDevice']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetGatewayMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetGateway',
    '/#X-Amz-Target=AlexaForBusiness.GetGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGateway']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGateway']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGateway']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.GetGateway'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetGateway<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGateway']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGateway']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetGatewayMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetGatewayGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetGatewayGroup',
    '/#X-Amz-Target=AlexaForBusiness.GetGatewayGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetGatewayGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetGatewayGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetGatewayGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetGatewayGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetGatewayGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetInvitationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration',
    '/#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetInvitationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetInvitationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetInvitationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessGetInvitationConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetNetworkProfileMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.GetNetworkProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetNetworkProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetNetworkProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetNetworkProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetNetworkProfile']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetNetworkProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetProfileMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetProfile',
    '/#X-Amz-Target=AlexaForBusiness.GetProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetProfile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetProfile']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.GetProfile'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetProfile']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetProfile']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetRoomMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetRoom',
    '/#X-Amz-Target=AlexaForBusiness.GetRoom',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoom']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoom']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.GetRoom'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoom']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoom']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetRoomMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetRoomSkillParameterMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter',
    '/#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetRoomSkillParameterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetRoomSkillParameterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetRoomSkillParameter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetRoomSkillParameterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessGetSkillGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.GetSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.GetSkillGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessGetSkillGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.GetSkillGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessGetSkillGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.GetSkillGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.GetSkillGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessGetSkillGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.GetSkillGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.GetSkillGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessGetSkillGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListBusinessReportSchedulesMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules',
    '/#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListBusinessReportSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListBusinessReportSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListBusinessReportSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessListBusinessReportSchedulesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListConferenceProvidersMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListConferenceProviders',
    '/#X-Amz-Target=AlexaForBusiness.ListConferenceProviders',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListConferenceProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListConferenceProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListConferenceProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListConferenceProviders']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessListConferenceProvidersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListDeviceEventsMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListDeviceEvents',
    '/#X-Amz-Target=AlexaForBusiness.ListDeviceEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListDeviceEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListDeviceEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListDeviceEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListDeviceEvents']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessListDeviceEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListGatewayGroupsMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListGatewayGroups',
    '/#X-Amz-Target=AlexaForBusiness.ListGatewayGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListGatewayGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListGatewayGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListGatewayGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListGatewayGroups']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessListGatewayGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListGatewaysMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListGateways',
    '/#X-Amz-Target=AlexaForBusiness.ListGateways',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListGateways']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListGatewaysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ListGateways']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ListGateways'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListGateways<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.ListGateways']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListGateways']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessListGatewaysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListSkillsMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListSkills',
    '/#X-Amz-Target=AlexaForBusiness.ListSkills',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListSkillsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkills']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkills']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListSkillsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkills']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.ListSkills'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListSkills<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkills']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkills']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessListSkillsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListSkillsStoreCategoriesMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories',
    '/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListSkillsStoreCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListSkillsStoreCategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListSkillsStoreCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessListSkillsStoreCategoriesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory',
    '/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListSmartHomeAppliancesMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances',
    '/#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListSmartHomeAppliancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListSmartHomeAppliancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListSmartHomeAppliances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessListSmartHomeAppliancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessListTagsMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ListTags',
    '/#X-Amz-Target=AlexaForBusiness.ListTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessListTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessListTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.ListTags'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessListTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListTags']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ListTags']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessListTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessPutConferencePreferenceMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.PutConferencePreference',
    '/#X-Amz-Target=AlexaForBusiness.PutConferencePreference',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessPutConferencePreferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.PutConferencePreference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessPutConferencePreferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.PutConferencePreference']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.PutConferencePreference'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessPutConferencePreference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.PutConferencePreference']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessPutConferencePreferenceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessPutInvitationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration',
    '/#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessPutInvitationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessPutInvitationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessPutInvitationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessPutInvitationConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessPutRoomSkillParameterMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter',
    '/#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessPutRoomSkillParameterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessPutRoomSkillParameterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessPutRoomSkillParameter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessPutRoomSkillParameterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessPutSkillAuthorizationMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization',
    '/#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessPutSkillAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessPutSkillAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessPutSkillAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessPutSkillAuthorizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessRegisterAVSDeviceMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice',
    '/#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessRegisterAVSDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessRegisterAVSDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessRegisterAVSDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessRegisterAVSDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessRejectSkillMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.RejectSkill',
    '/#X-Amz-Target=AlexaForBusiness.RejectSkill',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessRejectSkillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RejectSkill']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessRejectSkillMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.RejectSkill']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.RejectSkill'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessRejectSkill<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RejectSkill']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessRejectSkillMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessResolveRoomMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.ResolveRoom',
    '/#X-Amz-Target=AlexaForBusiness.ResolveRoom',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessResolveRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ResolveRoom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessResolveRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.ResolveRoom']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.ResolveRoom'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessResolveRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.ResolveRoom']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessResolveRoomMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessRevokeInvitationMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.RevokeInvitation',
    '/#X-Amz-Target=AlexaForBusiness.RevokeInvitation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessRevokeInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.RevokeInvitation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessRevokeInvitationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.RevokeInvitation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.RevokeInvitation'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessRevokeInvitation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.RevokeInvitation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.RevokeInvitation']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessRevokeInvitationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSearchAddressBooksMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchAddressBooks',
    '/#X-Amz-Target=AlexaForBusiness.SearchAddressBooks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSearchAddressBooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSearchAddressBooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSearchAddressBooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchAddressBooks']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSearchAddressBooksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSearchContactsMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchContacts',
    '/#X-Amz-Target=AlexaForBusiness.SearchContacts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSearchContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchContacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSearchContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchContacts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SearchContacts'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSearchContacts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchContacts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchContacts']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSearchContactsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSearchDevicesMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchDevices',
    '/#X-Amz-Target=AlexaForBusiness.SearchDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSearchDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchDevices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSearchDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchDevices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SearchDevices'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSearchDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchDevices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchDevices']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSearchDevicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSearchNetworkProfilesMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles',
    '/#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSearchNetworkProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSearchNetworkProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSearchNetworkProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSearchNetworkProfilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSearchProfilesMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchProfiles',
    '/#X-Amz-Target=AlexaForBusiness.SearchProfiles',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSearchProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchProfiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSearchProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchProfiles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SearchProfiles'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSearchProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchProfiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchProfiles']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSearchProfilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSearchRoomsMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchRooms',
    '/#X-Amz-Target=AlexaForBusiness.SearchRooms',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSearchRoomsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchRooms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSearchRoomsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchRooms']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SearchRooms'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSearchRooms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchRooms']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSearchRoomsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSearchSkillGroupsMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchSkillGroups',
    '/#X-Amz-Target=AlexaForBusiness.SearchSkillGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSearchSkillGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSearchSkillGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSearchSkillGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchSkillGroups']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSearchSkillGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSearchUsersMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SearchUsers',
    '/#X-Amz-Target=AlexaForBusiness.SearchUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSearchUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchUsers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSearchUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SearchUsers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SearchUsers'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSearchUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SearchUsers']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSearchUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSendAnnouncementMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SendAnnouncement',
    '/#X-Amz-Target=AlexaForBusiness.SendAnnouncement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSendAnnouncementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SendAnnouncement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSendAnnouncementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SendAnnouncement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SendAnnouncement'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSendAnnouncement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.SendAnnouncement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SendAnnouncement']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSendAnnouncementMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessSendInvitationMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.SendInvitation',
    '/#X-Amz-Target=AlexaForBusiness.SendInvitation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessSendInvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.SendInvitation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessSendInvitationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.SendInvitation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.SendInvitation'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessSendInvitation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.SendInvitation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.SendInvitation']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessSendInvitationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessStartDeviceSyncMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.StartDeviceSync',
    '/#X-Amz-Target=AlexaForBusiness.StartDeviceSync',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessStartDeviceSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.StartDeviceSync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessStartDeviceSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.StartDeviceSync']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.StartDeviceSync'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessStartDeviceSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.StartDeviceSync']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.StartDeviceSync']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessStartDeviceSyncMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery',
    '/#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscovery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.TagResource',
    '/#X-Amz-Target=AlexaForBusiness.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.TagResource']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UntagResource',
    '/#X-Amz-Target=AlexaForBusiness.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UntagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateAddressBookMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateAddressBook',
    '/#X-Amz-Target=AlexaForBusiness.UpdateAddressBook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateAddressBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateAddressBookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateAddressBook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateAddressBook']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUpdateAddressBookMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule',
    '/#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateBusinessReportSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateConferenceProviderMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider',
    '/#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateConferenceProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateConferenceProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateConferenceProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAlexaForBusinessUpdateConferenceProviderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateContactMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateContact',
    '/#X-Amz-Target=AlexaForBusiness.UpdateContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateContact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateContactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateContact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateContact'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateContact']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateContact']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUpdateContactMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateDeviceMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateDevice',
    '/#X-Amz-Target=AlexaForBusiness.UpdateDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateDevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateDevice']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateDevice'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateDevice']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateDevice']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUpdateDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateGatewayMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateGateway',
    '/#X-Amz-Target=AlexaForBusiness.UpdateGateway',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateGatewayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGateway']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateGatewayMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGateway']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateGateway'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateGateway<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGateway']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGateway']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUpdateGatewayMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateGatewayGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup',
    '/#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateGatewayGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateGatewayGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateGatewayGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUpdateGatewayGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateNetworkProfileMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile',
    '/#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateNetworkProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateNetworkProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateNetworkProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUpdateNetworkProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateProfileMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateProfile',
    '/#X-Amz-Target=AlexaForBusiness.UpdateProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateProfile']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUpdateProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateRoomMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateRoom',
    '/#X-Amz-Target=AlexaForBusiness.UpdateRoom',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateRoom']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateRoom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateRoom']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AlexaForBusiness.UpdateRoom'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateRoom']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateRoom']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUpdateRoomMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAlexaForBusinessUpdateSkillGroupMutationKey() {
  return [
    '#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup',
    '/#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAlexaForBusinessUpdateSkillGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAlexaForBusinessUpdateSkillGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAlexaForBusinessUpdateSkillGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAlexaForBusinessUpdateSkillGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
