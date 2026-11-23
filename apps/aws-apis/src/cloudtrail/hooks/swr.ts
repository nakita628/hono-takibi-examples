import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101AddTagsKey() {
  return ['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags'] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101CancelQueryKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101CreateChannelKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101CreateEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101CreateTrailKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101DeleteChannelKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101DeleteEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101DeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101DeleteTrailKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101DeregisterOrganizationDelegatedAdminKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101DescribeQueryKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101DescribeTrailsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101GetChannelKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101GetEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101GetEventSelectorsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101GetImportKey() {
  return ['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport'] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101GetInsightSelectorsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101GetQueryResultsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101GetResourcePolicyKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101GetTrailKey() {
  return ['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail'] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101GetTrailStatusKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101ListChannelsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101ListEventDataStoresKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101ListImportFailuresKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101ListImportsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101ListPublicKeysKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101ListQueriesKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101ListTagsKey() {
  return ['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags'] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101ListTrailsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101LookupEventsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101PutEventSelectorsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101PutInsightSelectorsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101PutResourcePolicyKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101RegisterOrganizationDelegatedAdminKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101RemoveTagsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101RestoreEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101StartImportKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101StartLoggingKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101StartQueryKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101StopImportKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101StopLoggingKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101UpdateChannelKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101UpdateEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore',
  ] as const
}

export function getXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail_20131101UpdateTrailKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101AddTagsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101AddTagsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CancelQueryKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CancelQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CancelQueryKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannelKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannelKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateEventDataStore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateEventDataStoreKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrailKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrailKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteChannelKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteChannel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteChannelKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteEventDataStore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteEventDataStoreKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrailKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrailKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdminKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdmin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdminKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeQueryKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeQueryKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrailsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrailsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetChannelKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetChannel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetChannelKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventDataStore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventDataStoreKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectorsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectorsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetImportKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetImport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetImportKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectorsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectorsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetQueryResultsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetQueryResults<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetQueryResultsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetResourcePolicyKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatusKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatusKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListChannelsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListChannels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListChannelsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListEventDataStoresKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListEventDataStores<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListEventDataStoresKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportFailuresKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportFailures<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportFailuresKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImports<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeysKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeysKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListQueriesKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListQueries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListQueriesKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTagsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTags<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTagsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrailsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrailsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEventsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEvents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEventsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutEventSelectorsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutEventSelectors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutEventSelectorsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectorsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectorsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutResourcePolicyKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutResourcePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdminKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdmin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdminKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTagsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTags<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTagsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStoreKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartImportKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartImport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartImportKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartLoggingKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartLogging<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartLoggingKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartQueryKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartQuery<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartQueryKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopImportKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopImport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopImportKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopLoggingKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopLogging<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopLoggingKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateChannelKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateChannel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateChannelKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateEventDataStoreKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateEventDataStore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateEventDataStoreKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrailKey() {
  return [
    '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail',
    '/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrailKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
