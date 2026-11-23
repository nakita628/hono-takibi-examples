import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetDeviceFarm_20150623CreateDevicePoolKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool'] as const
}

export function getXAmzTargetDeviceFarm_20150623CreateInstanceProfileKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile'] as const
}

export function getXAmzTargetDeviceFarm_20150623CreateNetworkProfileKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile'] as const
}

export function getXAmzTargetDeviceFarm_20150623CreateProjectKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.CreateProject'] as const
}

export function getXAmzTargetDeviceFarm_20150623CreateRemoteAccessSessionKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession'] as const
}

export function getXAmzTargetDeviceFarm_20150623CreateTestGridProjectKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject'] as const
}

export function getXAmzTargetDeviceFarm_20150623CreateTestGridUrlKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl'] as const
}

export function getXAmzTargetDeviceFarm_20150623CreateUploadKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.CreateUpload'] as const
}

export function getXAmzTargetDeviceFarm_20150623CreateVPCEConfigurationKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration'] as const
}

export function getXAmzTargetDeviceFarm_20150623DeleteDevicePoolKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool'] as const
}

export function getXAmzTargetDeviceFarm_20150623DeleteInstanceProfileKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile'] as const
}

export function getXAmzTargetDeviceFarm_20150623DeleteNetworkProfileKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile'] as const
}

export function getXAmzTargetDeviceFarm_20150623DeleteProjectKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.DeleteProject'] as const
}

export function getXAmzTargetDeviceFarm_20150623DeleteRemoteAccessSessionKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession'] as const
}

export function getXAmzTargetDeviceFarm_20150623DeleteRunKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.DeleteRun'] as const
}

export function getXAmzTargetDeviceFarm_20150623DeleteTestGridProjectKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject'] as const
}

export function getXAmzTargetDeviceFarm_20150623DeleteUploadKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload'] as const
}

export function getXAmzTargetDeviceFarm_20150623DeleteVPCEConfigurationKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetAccountSettingsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetDeviceKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetDevice'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetDeviceInstanceKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetDevicePoolKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetDevicePoolCompatibilityKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetInstanceProfileKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetJobKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetJob'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetNetworkProfileKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetOfferingStatusKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetProjectKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetProject'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetRemoteAccessSessionKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetRunKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetRun'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetSuiteKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetSuite'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetTestKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetTest'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetTestGridProjectKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetTestGridSessionKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetUploadKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetUpload'] as const
}

export function getXAmzTargetDeviceFarm_20150623GetVPCEConfigurationKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration'] as const
}

export function getXAmzTargetDeviceFarm_20150623InstallToRemoteAccessSessionKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListArtifactsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListDeviceInstancesKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListDevicePoolsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListDevicesKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListDevices'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListInstanceProfilesKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListJobsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListJobs'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListNetworkProfilesKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListOfferingPromotionsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListOfferingTransactionsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListOfferingsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListOfferings'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListProjectsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListProjects'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListRemoteAccessSessionsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListRunsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListRuns'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListSamplesKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListSamples'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListSuitesKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListSuites'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListTagsForResourceKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListTestGridProjectsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListTestGridSessionActionsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListTestGridSessionArtifactsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListTestGridSessionsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListTestsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListTests'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListUniqueProblemsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListUploadsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListUploads'] as const
}

export function getXAmzTargetDeviceFarm_20150623ListVPCEConfigurationsKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations'] as const
}

export function getXAmzTargetDeviceFarm_20150623PurchaseOfferingKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering'] as const
}

export function getXAmzTargetDeviceFarm_20150623RenewOfferingKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.RenewOffering'] as const
}

export function getXAmzTargetDeviceFarm_20150623ScheduleRunKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun'] as const
}

export function getXAmzTargetDeviceFarm_20150623StopJobKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.StopJob'] as const
}

export function getXAmzTargetDeviceFarm_20150623StopRemoteAccessSessionKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession'] as const
}

export function getXAmzTargetDeviceFarm_20150623StopRunKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.StopRun'] as const
}

export function getXAmzTargetDeviceFarm_20150623TagResourceKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.TagResource'] as const
}

export function getXAmzTargetDeviceFarm_20150623UntagResourceKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.UntagResource'] as const
}

export function getXAmzTargetDeviceFarm_20150623UpdateDeviceInstanceKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance'] as const
}

export function getXAmzTargetDeviceFarm_20150623UpdateDevicePoolKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool'] as const
}

export function getXAmzTargetDeviceFarm_20150623UpdateInstanceProfileKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile'] as const
}

export function getXAmzTargetDeviceFarm_20150623UpdateNetworkProfileKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile'] as const
}

export function getXAmzTargetDeviceFarm_20150623UpdateProjectKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.UpdateProject'] as const
}

export function getXAmzTargetDeviceFarm_20150623UpdateTestGridProjectKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject'] as const
}

export function getXAmzTargetDeviceFarm_20150623UpdateUploadKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload'] as const
}

export function getXAmzTargetDeviceFarm_20150623UpdateVPCEConfigurationKey() {
  return ['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration'] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateDevicePoolMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateDevicePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623CreateDevicePoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623CreateDevicePool<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623CreateDevicePoolMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623CreateInstanceProfileMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623CreateInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623CreateInstanceProfile<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile']['$post']
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
      getPostXAmzTargetDeviceFarm20150623CreateInstanceProfileMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623CreateNetworkProfileMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateNetworkProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623CreateNetworkProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623CreateNetworkProfile<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623CreateNetworkProfileMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623CreateProjectMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateProject',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateProject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623CreateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.CreateProject'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623CreateProject<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateProject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateProject']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623CreateProjectMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623CreateRemoteAccessSessionMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateRemoteAccessSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623CreateRemoteAccessSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623CreateRemoteAccessSession<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession']['$post']
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
      getPostXAmzTargetDeviceFarm20150623CreateRemoteAccessSessionMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623CreateTestGridProjectMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateTestGridProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623CreateTestGridProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623CreateTestGridProject<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject']['$post']
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
      getPostXAmzTargetDeviceFarm20150623CreateTestGridProjectMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623CreateTestGridUrlMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateTestGridUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623CreateTestGridUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623CreateTestGridUrl<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623CreateTestGridUrlMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623CreateUploadMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateUpload',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateUpload',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateUpload']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateUpload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623CreateUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateUpload']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.CreateUpload'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623CreateUpload<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateUpload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateUpload']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623CreateUploadMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623CreateVPCEConfigurationMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623CreateVPCEConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623CreateVPCEConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623CreateVPCEConfiguration<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration']['$post']
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
      getPostXAmzTargetDeviceFarm20150623CreateVPCEConfigurationMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623DeleteDevicePoolMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623DeleteDevicePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623DeleteDevicePoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623DeleteDevicePool<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623DeleteDevicePoolMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623DeleteInstanceProfileMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623DeleteInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623DeleteInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623DeleteInstanceProfile<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile']['$post']
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
      getPostXAmzTargetDeviceFarm20150623DeleteInstanceProfileMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623DeleteNetworkProfileMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623DeleteNetworkProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623DeleteNetworkProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623DeleteNetworkProfile<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623DeleteNetworkProfileMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623DeleteProjectMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteProject',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623DeleteProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteProject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623DeleteProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.DeleteProject'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623DeleteProject<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteProject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteProject']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623DeleteProjectMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623DeleteRemoteAccessSession<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession']['$post']
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
      getPostXAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623DeleteRunMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteRun',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623DeleteRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRun']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623DeleteRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.DeleteRun'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623DeleteRun<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRun']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRun']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623DeleteRunMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623DeleteTestGridProjectMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623DeleteTestGridProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623DeleteTestGridProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623DeleteTestGridProject<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject']['$post']
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
      getPostXAmzTargetDeviceFarm20150623DeleteTestGridProjectMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623DeleteUploadMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteUpload',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteUpload',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623DeleteUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623DeleteUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623DeleteUpload<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623DeleteUploadMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623DeleteVPCEConfigurationMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623DeleteVPCEConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623DeleteVPCEConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623DeleteVPCEConfiguration<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration']['$post']
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
      getPostXAmzTargetDeviceFarm20150623DeleteVPCEConfigurationMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetAccountSettingsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings',
    '/#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetAccountSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetAccountSettings<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetAccountSettingsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetDeviceMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetDevice',
    '/#X-Amz-Target=DeviceFarm_20150623.GetDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevice']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevice']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetDevice'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetDevice<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevice']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevice']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetDeviceMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetDeviceInstanceMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance',
    '/#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetDeviceInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetDeviceInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetDeviceInstance<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetDeviceInstanceMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetDevicePoolMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetDevicePool',
    '/#X-Amz-Target=DeviceFarm_20150623.GetDevicePool',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetDevicePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetDevicePoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetDevicePool<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetDevicePoolMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility',
    '/#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetDevicePoolCompatibility<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility']['$post']
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
      getPostXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetInstanceProfileMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetInstanceProfile<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetInstanceProfileMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetJobMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetJob',
    '/#X-Amz-Target=DeviceFarm_20150623.GetJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DeviceFarm_20150623.GetJob'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetJob<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetJob']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetJob']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetJobMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetNetworkProfileMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetNetworkProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetNetworkProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetNetworkProfile<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetNetworkProfileMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetOfferingStatusMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus',
    '/#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetOfferingStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetOfferingStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetOfferingStatus<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetOfferingStatusMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetProjectMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetProject',
    '/#X-Amz-Target=DeviceFarm_20150623.GetProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetProject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetProject'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetProject<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetProject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetProject']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetProjectMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetRemoteAccessSessionMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetRemoteAccessSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetRemoteAccessSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetRemoteAccessSession<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession']['$post']
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
      getPostXAmzTargetDeviceFarm20150623GetRemoteAccessSessionMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetRunMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetRun',
    '/#X-Amz-Target=DeviceFarm_20150623.GetRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DeviceFarm_20150623.GetRun'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetRun<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRun']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRun']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetRunMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetSuiteMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetSuite',
    '/#X-Amz-Target=DeviceFarm_20150623.GetSuite',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetSuiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetSuite']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetSuite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetSuiteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetSuite']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetSuite'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetSuite<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetSuite']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetSuite']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetSuiteMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetTestMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetTest',
    '/#X-Amz-Target=DeviceFarm_20150623.GetTest',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTest']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DeviceFarm_20150623.GetTest'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetTest<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTest']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTest']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetTestMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetTestGridProjectMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject',
    '/#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetTestGridProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetTestGridProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetTestGridProject<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetTestGridProjectMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetTestGridSessionMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession',
    '/#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetTestGridSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetTestGridSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetTestGridSession<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetTestGridSessionMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetUploadMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetUpload',
    '/#X-Amz-Target=DeviceFarm_20150623.GetUpload',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetUpload']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetUpload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetUpload']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetUpload'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetUpload<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetUpload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetUpload']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetUploadMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623GetVPCEConfigurationMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration',
    '/#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623GetVPCEConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623GetVPCEConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623GetVPCEConfiguration<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623GetVPCEConfigurationMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623InstallToRemoteAccessSession<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession']['$post']
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
      getPostXAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListArtifactsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListArtifacts',
    '/#X-Amz-Target=DeviceFarm_20150623.ListArtifacts',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListArtifactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListArtifactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListArtifacts<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListArtifactsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListDeviceInstancesMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances',
    '/#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListDeviceInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListDeviceInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListDeviceInstances<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListDeviceInstancesMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListDevicePoolsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListDevicePools',
    '/#X-Amz-Target=DeviceFarm_20150623.ListDevicePools',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListDevicePoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListDevicePoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListDevicePools<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListDevicePoolsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListDevicesMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListDevices',
    '/#X-Amz-Target=DeviceFarm_20150623.ListDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevices']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListDevices'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListDevices<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevices']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListDevicesMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListInstanceProfilesMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles',
    '/#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListInstanceProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListInstanceProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListInstanceProfiles<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListInstanceProfilesMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListJobsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListJobs',
    '/#X-Amz-Target=DeviceFarm_20150623.ListJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListJobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListJobs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListJobs<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListJobs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListJobs']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListJobsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListNetworkProfilesMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles',
    '/#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListNetworkProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListNetworkProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListNetworkProfiles<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListNetworkProfilesMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListOfferingPromotionsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListOfferingPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListOfferingPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListOfferingPromotions<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions']['$post']
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
      getPostXAmzTargetDeviceFarm20150623ListOfferingPromotionsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListOfferingTransactionsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListOfferingTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListOfferingTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListOfferingTransactions<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions']['$post']
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
      getPostXAmzTargetDeviceFarm20150623ListOfferingTransactionsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListOfferingsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListOfferings',
    '/#X-Amz-Target=DeviceFarm_20150623.ListOfferings',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListOfferingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListOfferingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListOfferings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListOfferings<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferings']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListOfferingsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListProjectsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListProjects',
    '/#X-Amz-Target=DeviceFarm_20150623.ListProjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListProjects']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListProjects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListProjects']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListProjects'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListProjects<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListProjects']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListProjects']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListProjectsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListRemoteAccessSessionsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListRemoteAccessSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListRemoteAccessSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListRemoteAccessSessions<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions']['$post']
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
      getPostXAmzTargetDeviceFarm20150623ListRemoteAccessSessionsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListRunsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListRuns',
    '/#X-Amz-Target=DeviceFarm_20150623.ListRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRuns']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRuns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListRuns'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListRuns<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRuns']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRuns']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListRunsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListSamplesMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListSamples',
    '/#X-Amz-Target=DeviceFarm_20150623.ListSamples',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListSamplesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSamples']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSamples']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListSamplesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSamples']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListSamples'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListSamples<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSamples']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSamples']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListSamplesMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListSuitesMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListSuites',
    '/#X-Amz-Target=DeviceFarm_20150623.ListSuites',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListSuitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSuites']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSuites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListSuitesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSuites']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListSuites'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListSuites<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSuites']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSuites']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListSuitesMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListTestGridProjectsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListTestGridProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListTestGridProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListTestGridProjects<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListTestGridProjectsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListTestGridSessionActionsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListTestGridSessionActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListTestGridSessionActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListTestGridSessionActions<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions']['$post']
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
      getPostXAmzTargetDeviceFarm20150623ListTestGridSessionActionsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListTestGridSessionArtifacts<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts']['$post']
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
      getPostXAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListTestGridSessionsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListTestGridSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListTestGridSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListTestGridSessions<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListTestGridSessionsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListTestsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTests',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTests',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListTestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTests']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListTestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTests']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListTests'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListTests<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTests']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTests']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListTestsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListUniqueProblemsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems',
    '/#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListUniqueProblemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListUniqueProblemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListUniqueProblems<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListUniqueProblemsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListUploadsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListUploads',
    '/#X-Amz-Target=DeviceFarm_20150623.ListUploads',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUploads']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUploads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListUploadsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUploads']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListUploads'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListUploads<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUploads']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUploads']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ListUploadsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ListVPCEConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations',
    '/#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ListVPCEConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ListVPCEConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ListVPCEConfigurations<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations']['$post']
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
      getPostXAmzTargetDeviceFarm20150623ListVPCEConfigurationsMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623PurchaseOfferingMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering',
    '/#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623PurchaseOfferingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623PurchaseOfferingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623PurchaseOffering<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623PurchaseOfferingMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623RenewOfferingMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.RenewOffering',
    '/#X-Amz-Target=DeviceFarm_20150623.RenewOffering',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623RenewOfferingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.RenewOffering']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.RenewOffering']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623RenewOfferingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.RenewOffering']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.RenewOffering'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623RenewOffering<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.RenewOffering']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.RenewOffering']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623RenewOfferingMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623ScheduleRunMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ScheduleRun',
    '/#X-Amz-Target=DeviceFarm_20150623.ScheduleRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623ScheduleRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623ScheduleRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623ScheduleRun<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623ScheduleRunMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623StopJobMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.StopJob',
    '/#X-Amz-Target=DeviceFarm_20150623.StopJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623StopJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623StopJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopJob']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DeviceFarm_20150623.StopJob'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623StopJob<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopJob']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopJob']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623StopJobMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623StopRemoteAccessSessionMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623StopRemoteAccessSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623StopRemoteAccessSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623StopRemoteAccessSession<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession']['$post']
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
      getPostXAmzTargetDeviceFarm20150623StopRemoteAccessSessionMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623StopRunMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.StopRun',
    '/#X-Amz-Target=DeviceFarm_20150623.StopRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623StopRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623StopRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRun']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DeviceFarm_20150623.StopRun'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623StopRun<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRun']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRun']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623StopRunMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623TagResourceMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.TagResource',
    '/#X-Amz-Target=DeviceFarm_20150623.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623TagResource<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.TagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623TagResourceMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UntagResource',
    '/#X-Amz-Target=DeviceFarm_20150623.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623UntagResource<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UntagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623UntagResourceMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623UpdateDeviceInstanceMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623UpdateDeviceInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623UpdateDeviceInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623UpdateDeviceInstance<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623UpdateDeviceInstanceMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623UpdateDevicePoolMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623UpdateDevicePoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623UpdateDevicePoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623UpdateDevicePool<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623UpdateDevicePoolMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623UpdateInstanceProfileMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623UpdateInstanceProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623UpdateInstanceProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623UpdateInstanceProfile<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile']['$post']
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
      getPostXAmzTargetDeviceFarm20150623UpdateInstanceProfileMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623UpdateNetworkProfileMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623UpdateNetworkProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623UpdateNetworkProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623UpdateNetworkProfile<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623UpdateNetworkProfileMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623UpdateProjectMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateProject',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623UpdateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateProject']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623UpdateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.UpdateProject'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623UpdateProject<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateProject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateProject']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623UpdateProjectMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623UpdateTestGridProjectMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623UpdateTestGridProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623UpdateTestGridProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623UpdateTestGridProject<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject']['$post']
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
      getPostXAmzTargetDeviceFarm20150623UpdateTestGridProjectMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623UpdateUploadMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateUpload',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateUpload',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623UpdateUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623UpdateUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623UpdateUpload<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload']['$post']
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
    const mutationDefaults = getPostXAmzTargetDeviceFarm20150623UpdateUploadMutationOptions<
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

export function getPostXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationMutationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDeviceFarm20150623UpdateVPCEConfiguration<
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
                    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration']['$post']
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
      getPostXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationMutationOptions<
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
