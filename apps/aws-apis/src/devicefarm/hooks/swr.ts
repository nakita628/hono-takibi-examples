import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetDeviceFarm20150623CreateDevicePoolKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623CreateDevicePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623CreateDevicePoolKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623CreateInstanceProfileKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623CreateInstanceProfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623CreateInstanceProfileKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623CreateNetworkProfileKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623CreateNetworkProfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623CreateNetworkProfileKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623CreateProjectKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateProject',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623CreateProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623CreateProjectKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.CreateProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623CreateRemoteAccessSessionKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623CreateRemoteAccessSession<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623CreateRemoteAccessSessionKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623CreateTestGridProjectKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623CreateTestGridProject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623CreateTestGridProjectKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623CreateTestGridUrlKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623CreateTestGridUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623CreateTestGridUrlKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623CreateUploadKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateUpload',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateUpload',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623CreateUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateUpload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623CreateUploadKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.CreateUpload'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623CreateVPCEConfigurationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration',
    '/#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623CreateVPCEConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623CreateVPCEConfigurationKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623DeleteDevicePoolKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623DeleteDevicePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623DeleteDevicePoolKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623DeleteInstanceProfileKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623DeleteInstanceProfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623DeleteInstanceProfileKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623DeleteNetworkProfileKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623DeleteNetworkProfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623DeleteNetworkProfileKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623DeleteProjectKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteProject',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623DeleteProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623DeleteProjectKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.DeleteProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623DeleteRemoteAccessSession<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623DeleteRunKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteRun',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623DeleteRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623DeleteRunKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.DeleteRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623DeleteTestGridProjectKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623DeleteTestGridProject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623DeleteTestGridProjectKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623DeleteUploadKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteUpload',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteUpload',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623DeleteUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623DeleteUploadKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623DeleteVPCEConfigurationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration',
    '/#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623DeleteVPCEConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623DeleteVPCEConfigurationKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetAccountSettingsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings',
    '/#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetAccountSettingsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetDeviceKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetDevice',
    '/#X-Amz-Target=DeviceFarm_20150623.GetDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetDeviceKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevice']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetDevice'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetDeviceInstanceKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance',
    '/#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetDeviceInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetDeviceInstanceKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetDevicePoolKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetDevicePool',
    '/#X-Amz-Target=DeviceFarm_20150623.GetDevicePool',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetDevicePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetDevicePoolKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility',
    '/#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetDevicePoolCompatibility<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetInstanceProfileKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetInstanceProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetInstanceProfileKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetJobKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetJob',
    '/#X-Amz-Target=DeviceFarm_20150623.GetJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetJobKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetJob']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=DeviceFarm_20150623.GetJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetNetworkProfileKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetNetworkProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetNetworkProfileKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetOfferingStatusKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus',
    '/#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetOfferingStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetOfferingStatusKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetProjectKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetProject',
    '/#X-Amz-Target=DeviceFarm_20150623.GetProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetProjectKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetRemoteAccessSessionKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetRemoteAccessSession<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetRemoteAccessSessionKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetRunKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetRun',
    '/#X-Amz-Target=DeviceFarm_20150623.GetRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetRunKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRun']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=DeviceFarm_20150623.GetRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetSuiteKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetSuite',
    '/#X-Amz-Target=DeviceFarm_20150623.GetSuite',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetSuite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetSuite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetSuiteKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetSuite']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetSuite'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetTestKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetTest',
    '/#X-Amz-Target=DeviceFarm_20150623.GetTest',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTest']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetTestKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetTest'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetTestGridProjectKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject',
    '/#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetTestGridProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetTestGridProjectKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetTestGridSessionKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession',
    '/#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetTestGridSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetTestGridSessionKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetUploadKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetUpload',
    '/#X-Amz-Target=DeviceFarm_20150623.GetUpload',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetUpload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetUploadKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetUpload'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623GetVPCEConfigurationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration',
    '/#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623GetVPCEConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623GetVPCEConfigurationKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623InstallToRemoteAccessSession<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListArtifactsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListArtifacts',
    '/#X-Amz-Target=DeviceFarm_20150623.ListArtifacts',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListArtifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListArtifactsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListDeviceInstancesKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances',
    '/#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListDeviceInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListDeviceInstancesKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListDevicePoolsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListDevicePools',
    '/#X-Amz-Target=DeviceFarm_20150623.ListDevicePools',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListDevicePools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListDevicePoolsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListDevicesKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListDevices',
    '/#X-Amz-Target=DeviceFarm_20150623.ListDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListDevicesKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListDevices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListInstanceProfilesKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles',
    '/#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListInstanceProfiles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListInstanceProfilesKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListJobsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListJobs',
    '/#X-Amz-Target=DeviceFarm_20150623.ListJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListJobsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListNetworkProfilesKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles',
    '/#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListNetworkProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListNetworkProfilesKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListOfferingPromotionsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListOfferingPromotions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListOfferingPromotionsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListOfferingTransactionsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListOfferingTransactions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListOfferingTransactionsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListOfferingsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListOfferings',
    '/#X-Amz-Target=DeviceFarm_20150623.ListOfferings',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListOfferings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListOfferingsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListOfferings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListProjectsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListProjects',
    '/#X-Amz-Target=DeviceFarm_20150623.ListProjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListProjects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListProjectsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListProjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListProjects'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListRemoteAccessSessionsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListRemoteAccessSessions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListRemoteAccessSessionsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListRunsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListRuns',
    '/#X-Amz-Target=DeviceFarm_20150623.ListRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListRunsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListRuns'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListSamplesKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListSamples',
    '/#X-Amz-Target=DeviceFarm_20150623.ListSamples',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListSamples<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSamples']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListSamplesKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSamples']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListSamples'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListSuitesKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListSuites',
    '/#X-Amz-Target=DeviceFarm_20150623.ListSuites',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListSuites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSuites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListSuitesKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSuites']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListSuites'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListTestGridProjectsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListTestGridProjects<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListTestGridProjectsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListTestGridSessionActionsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListTestGridSessionActions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListTestGridSessionActionsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListTestGridSessionArtifacts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListTestGridSessionsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListTestGridSessions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListTestGridSessionsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListTestsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListTests',
    '/#X-Amz-Target=DeviceFarm_20150623.ListTests',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListTests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListTestsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTests']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListTests'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListUniqueProblemsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems',
    '/#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListUniqueProblems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListUniqueProblemsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListUploadsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListUploads',
    '/#X-Amz-Target=DeviceFarm_20150623.ListUploads',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUploads']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListUploadsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUploads']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListUploads'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ListVPCEConfigurationsKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations',
    '/#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ListVPCEConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ListVPCEConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623PurchaseOfferingKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering',
    '/#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623PurchaseOffering<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623PurchaseOfferingKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623RenewOfferingKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.RenewOffering',
    '/#X-Amz-Target=DeviceFarm_20150623.RenewOffering',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623RenewOffering<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.RenewOffering']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623RenewOfferingKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.RenewOffering']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.RenewOffering'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623ScheduleRunKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.ScheduleRun',
    '/#X-Amz-Target=DeviceFarm_20150623.ScheduleRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623ScheduleRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623ScheduleRunKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623StopJobKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.StopJob',
    '/#X-Amz-Target=DeviceFarm_20150623.StopJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623StopJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623StopJobKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.StopJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623StopRemoteAccessSessionKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession',
    '/#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623StopRemoteAccessSession<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623StopRemoteAccessSessionKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623StopRunKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.StopRun',
    '/#X-Amz-Target=DeviceFarm_20150623.StopRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623StopRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623StopRunKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.StopRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623TagResourceKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.TagResource',
    '/#X-Amz-Target=DeviceFarm_20150623.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623TagResourceKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623UntagResourceKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UntagResource',
    '/#X-Amz-Target=DeviceFarm_20150623.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623UpdateDeviceInstanceKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623UpdateDeviceInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623UpdateDeviceInstanceKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623UpdateDevicePoolKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623UpdateDevicePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623UpdateDevicePoolKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623UpdateInstanceProfileKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623UpdateInstanceProfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623UpdateInstanceProfileKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623UpdateNetworkProfileKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623UpdateNetworkProfile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623UpdateNetworkProfileKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623UpdateProjectKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateProject',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623UpdateProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623UpdateProjectKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.UpdateProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623UpdateTestGridProjectKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623UpdateTestGridProject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623UpdateTestGridProjectKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623UpdateUploadKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateUpload',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateUpload',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623UpdateUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623UpdateUploadKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationKey() {
  return [
    '#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration',
    '/#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetDeviceFarm20150623UpdateVPCEConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDeviceFarm20150623UpdateVPCEConfigurationKey()
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
            (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
