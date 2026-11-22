import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionAddPermissionKey() {
  return ['#Action=AddPermission'] as const
}

export function getActionCheckIfPhoneNumberIsOptedOutKey() {
  return ['#Action=CheckIfPhoneNumberIsOptedOut'] as const
}

export function getActionConfirmSubscriptionKey() {
  return ['#Action=ConfirmSubscription'] as const
}

export function getActionCreatePlatformApplicationKey() {
  return ['#Action=CreatePlatformApplication'] as const
}

export function getActionCreatePlatformEndpointKey() {
  return ['#Action=CreatePlatformEndpoint'] as const
}

export function getActionCreateSMSSandboxPhoneNumberKey() {
  return ['#Action=CreateSMSSandboxPhoneNumber'] as const
}

export function getActionCreateTopicKey() {
  return ['#Action=CreateTopic'] as const
}

export function getActionDeleteEndpointKey() {
  return ['#Action=DeleteEndpoint'] as const
}

export function getActionDeletePlatformApplicationKey() {
  return ['#Action=DeletePlatformApplication'] as const
}

export function getActionDeleteSMSSandboxPhoneNumberKey() {
  return ['#Action=DeleteSMSSandboxPhoneNumber'] as const
}

export function getActionDeleteTopicKey() {
  return ['#Action=DeleteTopic'] as const
}

export function getActionGetDataProtectionPolicyKey() {
  return ['#Action=GetDataProtectionPolicy'] as const
}

export function getActionGetEndpointAttributesKey() {
  return ['#Action=GetEndpointAttributes'] as const
}

export function getActionGetPlatformApplicationAttributesKey() {
  return ['#Action=GetPlatformApplicationAttributes'] as const
}

export function getActionGetSMSAttributesKey() {
  return ['#Action=GetSMSAttributes'] as const
}

export function getActionGetSMSSandboxAccountStatusKey() {
  return ['#Action=GetSMSSandboxAccountStatus'] as const
}

export function getActionGetSubscriptionAttributesKey() {
  return ['#Action=GetSubscriptionAttributes'] as const
}

export function getActionGetTopicAttributesKey() {
  return ['#Action=GetTopicAttributes'] as const
}

export function getActionListEndpointsByPlatformApplicationKey() {
  return ['#Action=ListEndpointsByPlatformApplication'] as const
}

export function getActionListOriginationNumbersKey() {
  return ['#Action=ListOriginationNumbers'] as const
}

export function getActionListPhoneNumbersOptedOutKey() {
  return ['#Action=ListPhoneNumbersOptedOut'] as const
}

export function getActionListPlatformApplicationsKey() {
  return ['#Action=ListPlatformApplications'] as const
}

export function getActionListSMSSandboxPhoneNumbersKey() {
  return ['#Action=ListSMSSandboxPhoneNumbers'] as const
}

export function getActionListSubscriptionsKey() {
  return ['#Action=ListSubscriptions'] as const
}

export function getActionListSubscriptionsByTopicKey() {
  return ['#Action=ListSubscriptionsByTopic'] as const
}

export function getActionListTagsForResourceKey() {
  return ['#Action=ListTagsForResource'] as const
}

export function getActionListTopicsKey() {
  return ['#Action=ListTopics'] as const
}

export function getActionOptInPhoneNumberKey() {
  return ['#Action=OptInPhoneNumber'] as const
}

export function getActionPublishKey() {
  return ['#Action=Publish'] as const
}

export function getActionPublishBatchKey() {
  return ['#Action=PublishBatch'] as const
}

export function getActionPutDataProtectionPolicyKey() {
  return ['#Action=PutDataProtectionPolicy'] as const
}

export function getActionRemovePermissionKey() {
  return ['#Action=RemovePermission'] as const
}

export function getActionSetEndpointAttributesKey() {
  return ['#Action=SetEndpointAttributes'] as const
}

export function getActionSetPlatformApplicationAttributesKey() {
  return ['#Action=SetPlatformApplicationAttributes'] as const
}

export function getActionSetSMSAttributesKey() {
  return ['#Action=SetSMSAttributes'] as const
}

export function getActionSetSubscriptionAttributesKey() {
  return ['#Action=SetSubscriptionAttributes'] as const
}

export function getActionSetTopicAttributesKey() {
  return ['#Action=SetTopicAttributes'] as const
}

export function getActionSubscribeKey() {
  return ['#Action=Subscribe'] as const
}

export function getActionTagResourceKey() {
  return ['#Action=TagResource'] as const
}

export function getActionUnsubscribeKey() {
  return ['#Action=Unsubscribe'] as const
}

export function getActionUntagResourceKey() {
  return ['#Action=UntagResource'] as const
}

export function getActionVerifySMSSandboxPhoneNumberKey() {
  return ['#Action=VerifySMSSandboxPhoneNumber'] as const
}

export function getGetActionAddPermissionKey(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddPermission', '/#Action=AddPermission', keyArgs] as const
}

export function useGetActionAddPermission<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddPermissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddPermission'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionAddPermission<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionAddPermissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=AddPermission'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionAddPermissionKey() {
  return ['#Action=AddPermission', '/#Action=AddPermission', 'POST'] as const
}

export function usePostActionAddPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=AddPermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionAddPermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=AddPermission']['$post']> },
      ) => parseResponse(client['#Action=AddPermission'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCheckIfPhoneNumberIsOptedOutKey(
  args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CheckIfPhoneNumberIsOptedOut',
    '/#Action=CheckIfPhoneNumberIsOptedOut',
    keyArgs,
  ] as const
}

export function useGetActionCheckIfPhoneNumberIsOptedOut<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCheckIfPhoneNumberIsOptedOutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CheckIfPhoneNumberIsOptedOut'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCheckIfPhoneNumberIsOptedOut<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCheckIfPhoneNumberIsOptedOutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CheckIfPhoneNumberIsOptedOut'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCheckIfPhoneNumberIsOptedOutKey() {
  return [
    '#Action=CheckIfPhoneNumberIsOptedOut',
    '/#Action=CheckIfPhoneNumberIsOptedOut',
    'POST',
  ] as const
}

export function usePostActionCheckIfPhoneNumberIsOptedOut<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCheckIfPhoneNumberIsOptedOutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$post']>
        },
      ) => parseResponse(client['#Action=CheckIfPhoneNumberIsOptedOut'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionConfirmSubscriptionKey(
  args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ConfirmSubscription', '/#Action=ConfirmSubscription', keyArgs] as const
}

export function useGetActionConfirmSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionConfirmSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ConfirmSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionConfirmSubscription<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionConfirmSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ConfirmSubscription'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionConfirmSubscriptionKey() {
  return ['#Action=ConfirmSubscription', '/#Action=ConfirmSubscription', 'POST'] as const
}

export function usePostActionConfirmSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionConfirmSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$post']> },
      ) => parseResponse(client['#Action=ConfirmSubscription'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreatePlatformApplicationKey(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreatePlatformApplication',
    '/#Action=CreatePlatformApplication',
    keyArgs,
  ] as const
}

export function useGetActionCreatePlatformApplication<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreatePlatformApplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreatePlatformApplication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreatePlatformApplication<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreatePlatformApplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreatePlatformApplication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreatePlatformApplicationKey() {
  return [
    '#Action=CreatePlatformApplication',
    '/#Action=CreatePlatformApplication',
    'POST',
  ] as const
}

export function usePostActionCreatePlatformApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreatePlatformApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$post']> },
      ) => parseResponse(client['#Action=CreatePlatformApplication'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreatePlatformEndpointKey(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreatePlatformEndpoint', '/#Action=CreatePlatformEndpoint', keyArgs] as const
}

export function useGetActionCreatePlatformEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreatePlatformEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreatePlatformEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreatePlatformEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreatePlatformEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreatePlatformEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreatePlatformEndpointKey() {
  return ['#Action=CreatePlatformEndpoint', '/#Action=CreatePlatformEndpoint', 'POST'] as const
}

export function usePostActionCreatePlatformEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreatePlatformEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$post']> },
      ) => parseResponse(client['#Action=CreatePlatformEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateSMSSandboxPhoneNumberKey(
  args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateSMSSandboxPhoneNumber',
    '/#Action=CreateSMSSandboxPhoneNumber',
    keyArgs,
  ] as const
}

export function useGetActionCreateSMSSandboxPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateSMSSandboxPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateSMSSandboxPhoneNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateSMSSandboxPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateSMSSandboxPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=CreateSMSSandboxPhoneNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateSMSSandboxPhoneNumberKey() {
  return [
    '#Action=CreateSMSSandboxPhoneNumber',
    '/#Action=CreateSMSSandboxPhoneNumber',
    'POST',
  ] as const
}

export function usePostActionCreateSMSSandboxPhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateSMSSandboxPhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$post']>
        },
      ) => parseResponse(client['#Action=CreateSMSSandboxPhoneNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateTopicKey(
  args: InferRequestType<(typeof client)['#Action=CreateTopic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateTopic', '/#Action=CreateTopic', keyArgs] as const
}

export function useGetActionCreateTopic<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateTopic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateTopic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateTopic<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateTopic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionCreateTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateTopic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateTopicKey() {
  return ['#Action=CreateTopic', '/#Action=CreateTopic', 'POST'] as const
}

export function usePostActionCreateTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateTopic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateTopic']['$post']> },
      ) => parseResponse(client['#Action=CreateTopic'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteEndpointKey(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteEndpoint', '/#Action=DeleteEndpoint', keyArgs] as const
}

export function useGetActionDeleteEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteEndpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteEndpointKey() {
  return ['#Action=DeleteEndpoint', '/#Action=DeleteEndpoint', 'POST'] as const
}

export function usePostActionDeleteEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$post']> },
      ) => parseResponse(client['#Action=DeleteEndpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeletePlatformApplicationKey(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeletePlatformApplication',
    '/#Action=DeletePlatformApplication',
    keyArgs,
  ] as const
}

export function useGetActionDeletePlatformApplication<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeletePlatformApplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeletePlatformApplication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeletePlatformApplication<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeletePlatformApplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeletePlatformApplication'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeletePlatformApplicationKey() {
  return [
    '#Action=DeletePlatformApplication',
    '/#Action=DeletePlatformApplication',
    'POST',
  ] as const
}

export function usePostActionDeletePlatformApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeletePlatformApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$post']> },
      ) => parseResponse(client['#Action=DeletePlatformApplication'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteSMSSandboxPhoneNumberKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteSMSSandboxPhoneNumber',
    '/#Action=DeleteSMSSandboxPhoneNumber',
    keyArgs,
  ] as const
}

export function useGetActionDeleteSMSSandboxPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteSMSSandboxPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteSMSSandboxPhoneNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteSMSSandboxPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteSMSSandboxPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DeleteSMSSandboxPhoneNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteSMSSandboxPhoneNumberKey() {
  return [
    '#Action=DeleteSMSSandboxPhoneNumber',
    '/#Action=DeleteSMSSandboxPhoneNumber',
    'POST',
  ] as const
}

export function usePostActionDeleteSMSSandboxPhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteSMSSandboxPhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$post']>
        },
      ) => parseResponse(client['#Action=DeleteSMSSandboxPhoneNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteTopicKey(
  args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteTopic', '/#Action=DeleteTopic', keyArgs] as const
}

export function useGetActionDeleteTopic<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteTopic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteTopic<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionDeleteTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteTopic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteTopicKey() {
  return ['#Action=DeleteTopic', '/#Action=DeleteTopic', 'POST'] as const
}

export function usePostActionDeleteTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteTopic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteTopic']['$post']> },
      ) => parseResponse(client['#Action=DeleteTopic'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetDataProtectionPolicyKey(
  args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetDataProtectionPolicy', '/#Action=GetDataProtectionPolicy', keyArgs] as const
}

export function useGetActionGetDataProtectionPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetDataProtectionPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetDataProtectionPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetDataProtectionPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetDataProtectionPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetDataProtectionPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetDataProtectionPolicyKey() {
  return ['#Action=GetDataProtectionPolicy', '/#Action=GetDataProtectionPolicy', 'POST'] as const
}

export function usePostActionGetDataProtectionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetDataProtectionPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$post']> },
      ) => parseResponse(client['#Action=GetDataProtectionPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetEndpointAttributesKey(
  args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetEndpointAttributes', '/#Action=GetEndpointAttributes', keyArgs] as const
}

export function useGetActionGetEndpointAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetEndpointAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetEndpointAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetEndpointAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetEndpointAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetEndpointAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetEndpointAttributesKey() {
  return ['#Action=GetEndpointAttributes', '/#Action=GetEndpointAttributes', 'POST'] as const
}

export function usePostActionGetEndpointAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetEndpointAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$post']> },
      ) => parseResponse(client['#Action=GetEndpointAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetPlatformApplicationAttributesKey(
  args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetPlatformApplicationAttributes',
    '/#Action=GetPlatformApplicationAttributes',
    keyArgs,
  ] as const
}

export function useGetActionGetPlatformApplicationAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetPlatformApplicationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetPlatformApplicationAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetPlatformApplicationAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetPlatformApplicationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetPlatformApplicationAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetPlatformApplicationAttributesKey() {
  return [
    '#Action=GetPlatformApplicationAttributes',
    '/#Action=GetPlatformApplicationAttributes',
    'POST',
  ] as const
}

export function usePostActionGetPlatformApplicationAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetPlatformApplicationAttributesKey()
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
            (typeof client)['#Action=GetPlatformApplicationAttributes']['$post']
          >
        },
      ) =>
        parseResponse(client['#Action=GetPlatformApplicationAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetSMSAttributesKey(
  args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSMSAttributes', '/#Action=GetSMSAttributes', keyArgs] as const
}

export function useGetActionGetSMSAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSMSAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSMSAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetSMSAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSMSAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetSMSAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetSMSAttributesKey() {
  return ['#Action=GetSMSAttributes', '/#Action=GetSMSAttributes', 'POST'] as const
}

export function usePostActionGetSMSAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetSMSAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$post']> },
      ) => parseResponse(client['#Action=GetSMSAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetSMSSandboxAccountStatusKey(
  args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetSMSSandboxAccountStatus',
    '/#Action=GetSMSSandboxAccountStatus',
    keyArgs,
  ] as const
}

export function useGetActionGetSMSSandboxAccountStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSMSSandboxAccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetSMSSandboxAccountStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetSMSSandboxAccountStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSMSSandboxAccountStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetSMSSandboxAccountStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetSMSSandboxAccountStatusKey() {
  return [
    '#Action=GetSMSSandboxAccountStatus',
    '/#Action=GetSMSSandboxAccountStatus',
    'POST',
  ] as const
}

export function usePostActionGetSMSSandboxAccountStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetSMSSandboxAccountStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$post']>
        },
      ) => parseResponse(client['#Action=GetSMSSandboxAccountStatus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetSubscriptionAttributesKey(
  args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetSubscriptionAttributes',
    '/#Action=GetSubscriptionAttributes',
    keyArgs,
  ] as const
}

export function useGetActionGetSubscriptionAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSubscriptionAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetSubscriptionAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetSubscriptionAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetSubscriptionAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=GetSubscriptionAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetSubscriptionAttributesKey() {
  return [
    '#Action=GetSubscriptionAttributes',
    '/#Action=GetSubscriptionAttributes',
    'POST',
  ] as const
}

export function usePostActionGetSubscriptionAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetSubscriptionAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$post']> },
      ) => parseResponse(client['#Action=GetSubscriptionAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionGetTopicAttributesKey(
  args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetTopicAttributes', '/#Action=GetTopicAttributes', keyArgs] as const
}

export function useGetActionGetTopicAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetTopicAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetTopicAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionGetTopicAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionGetTopicAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=GetTopicAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionGetTopicAttributesKey() {
  return ['#Action=GetTopicAttributes', '/#Action=GetTopicAttributes', 'POST'] as const
}

export function usePostActionGetTopicAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGetTopicAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$post']> },
      ) => parseResponse(client['#Action=GetTopicAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListEndpointsByPlatformApplicationKey(
  args: InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListEndpointsByPlatformApplication',
    '/#Action=ListEndpointsByPlatformApplication',
    keyArgs,
  ] as const
}

export function useGetActionListEndpointsByPlatformApplication<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListEndpointsByPlatformApplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ListEndpointsByPlatformApplication'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListEndpointsByPlatformApplication<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListEndpointsByPlatformApplicationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['#Action=ListEndpointsByPlatformApplication'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostActionListEndpointsByPlatformApplicationKey() {
  return [
    '#Action=ListEndpointsByPlatformApplication',
    '/#Action=ListEndpointsByPlatformApplication',
    'POST',
  ] as const
}

export function usePostActionListEndpointsByPlatformApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListEndpointsByPlatformApplicationKey()
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
            (typeof client)['#Action=ListEndpointsByPlatformApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Action=ListEndpointsByPlatformApplication'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetActionListOriginationNumbersKey(
  args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListOriginationNumbers', '/#Action=ListOriginationNumbers', keyArgs] as const
}

export function useGetActionListOriginationNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListOriginationNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListOriginationNumbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListOriginationNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListOriginationNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListOriginationNumbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListOriginationNumbersKey() {
  return ['#Action=ListOriginationNumbers', '/#Action=ListOriginationNumbers', 'POST'] as const
}

export function usePostActionListOriginationNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListOriginationNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$post']> },
      ) => parseResponse(client['#Action=ListOriginationNumbers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListPhoneNumbersOptedOutKey(
  args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListPhoneNumbersOptedOut', '/#Action=ListPhoneNumbersOptedOut', keyArgs] as const
}

export function useGetActionListPhoneNumbersOptedOut<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPhoneNumbersOptedOutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListPhoneNumbersOptedOut'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListPhoneNumbersOptedOut<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPhoneNumbersOptedOutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListPhoneNumbersOptedOut'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListPhoneNumbersOptedOutKey() {
  return ['#Action=ListPhoneNumbersOptedOut', '/#Action=ListPhoneNumbersOptedOut', 'POST'] as const
}

export function usePostActionListPhoneNumbersOptedOut<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListPhoneNumbersOptedOutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$post']> },
      ) => parseResponse(client['#Action=ListPhoneNumbersOptedOut'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListPlatformApplicationsKey(
  args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListPlatformApplications', '/#Action=ListPlatformApplications', keyArgs] as const
}

export function useGetActionListPlatformApplications<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPlatformApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListPlatformApplications'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListPlatformApplications<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListPlatformApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListPlatformApplications'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListPlatformApplicationsKey() {
  return ['#Action=ListPlatformApplications', '/#Action=ListPlatformApplications', 'POST'] as const
}

export function usePostActionListPlatformApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListPlatformApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$post']> },
      ) => parseResponse(client['#Action=ListPlatformApplications'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListSMSSandboxPhoneNumbersKey(
  args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListSMSSandboxPhoneNumbers',
    '/#Action=ListSMSSandboxPhoneNumbers',
    keyArgs,
  ] as const
}

export function useGetActionListSMSSandboxPhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSMSSandboxPhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListSMSSandboxPhoneNumbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListSMSSandboxPhoneNumbers<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSMSSandboxPhoneNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListSMSSandboxPhoneNumbers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListSMSSandboxPhoneNumbersKey() {
  return [
    '#Action=ListSMSSandboxPhoneNumbers',
    '/#Action=ListSMSSandboxPhoneNumbers',
    'POST',
  ] as const
}

export function usePostActionListSMSSandboxPhoneNumbers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListSMSSandboxPhoneNumbersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$post']>
        },
      ) => parseResponse(client['#Action=ListSMSSandboxPhoneNumbers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListSubscriptionsKey(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListSubscriptions', '/#Action=ListSubscriptions', keyArgs] as const
}

export function useGetActionListSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListSubscriptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListSubscriptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListSubscriptionsKey() {
  return ['#Action=ListSubscriptions', '/#Action=ListSubscriptions', 'POST'] as const
}

export function usePostActionListSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListSubscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$post']> },
      ) => parseResponse(client['#Action=ListSubscriptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListSubscriptionsByTopicKey(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListSubscriptionsByTopic', '/#Action=ListSubscriptionsByTopic', keyArgs] as const
}

export function useGetActionListSubscriptionsByTopic<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSubscriptionsByTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListSubscriptionsByTopic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListSubscriptionsByTopic<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListSubscriptionsByTopicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=ListSubscriptionsByTopic'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListSubscriptionsByTopicKey() {
  return ['#Action=ListSubscriptionsByTopic', '/#Action=ListSubscriptionsByTopic', 'POST'] as const
}

export function usePostActionListSubscriptionsByTopic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListSubscriptionsByTopicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$post']> },
      ) => parseResponse(client['#Action=ListSubscriptionsByTopic'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListTagsForResourceKey(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', keyArgs] as const
}

export function useGetActionListTagsForResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListTagsForResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTagsForResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListTagsForResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListTagsForResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTagsForResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListTagsForResourceKey() {
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', 'POST'] as const
}

export function usePostActionListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']> },
      ) => parseResponse(client['#Action=ListTagsForResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListTopicsKey(
  args: InferRequestType<(typeof client)['#Action=ListTopics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTopics', '/#Action=ListTopics', keyArgs] as const
}

export function useGetActionListTopics<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTopics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTopics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListTopics<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListTopics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionListTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListTopics'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListTopicsKey() {
  return ['#Action=ListTopics', '/#Action=ListTopics', 'POST'] as const
}

export function usePostActionListTopics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListTopics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListTopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListTopics']['$post']> },
      ) => parseResponse(client['#Action=ListTopics'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionOptInPhoneNumberKey(
  args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=OptInPhoneNumber', '/#Action=OptInPhoneNumber', keyArgs] as const
}

export function useGetActionOptInPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionOptInPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=OptInPhoneNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionOptInPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionOptInPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=OptInPhoneNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionOptInPhoneNumberKey() {
  return ['#Action=OptInPhoneNumber', '/#Action=OptInPhoneNumber', 'POST'] as const
}

export function usePostActionOptInPhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionOptInPhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$post']> },
      ) => parseResponse(client['#Action=OptInPhoneNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPublishKey(
  args: InferRequestType<(typeof client)['#Action=Publish']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=Publish', '/#Action=Publish', keyArgs] as const
}

export function useGetActionPublish<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=Publish']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionPublishKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=Publish'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPublish<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=Publish']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionPublishKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=Publish'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPublishKey() {
  return ['#Action=Publish', '/#Action=Publish', 'POST'] as const
}

export function usePostActionPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=Publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=Publish']['$post']> },
      ) => parseResponse(client['#Action=Publish'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPublishBatchKey(
  args: InferRequestType<(typeof client)['#Action=PublishBatch']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PublishBatch', '/#Action=PublishBatch', keyArgs] as const
}

export function useGetActionPublishBatch<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PublishBatch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPublishBatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PublishBatch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPublishBatch<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PublishBatch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPublishBatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=PublishBatch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPublishBatchKey() {
  return ['#Action=PublishBatch', '/#Action=PublishBatch', 'POST'] as const
}

export function usePostActionPublishBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PublishBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPublishBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=PublishBatch']['$post']> },
      ) => parseResponse(client['#Action=PublishBatch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionPutDataProtectionPolicyKey(
  args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutDataProtectionPolicy', '/#Action=PutDataProtectionPolicy', keyArgs] as const
}

export function useGetActionPutDataProtectionPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutDataProtectionPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PutDataProtectionPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionPutDataProtectionPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionPutDataProtectionPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=PutDataProtectionPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionPutDataProtectionPolicyKey() {
  return ['#Action=PutDataProtectionPolicy', '/#Action=PutDataProtectionPolicy', 'POST'] as const
}

export function usePostActionPutDataProtectionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionPutDataProtectionPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$post']> },
      ) => parseResponse(client['#Action=PutDataProtectionPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionRemovePermissionKey(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemovePermission', '/#Action=RemovePermission', keyArgs] as const
}

export function useGetActionRemovePermission<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemovePermissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RemovePermission'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionRemovePermission<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionRemovePermissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=RemovePermission'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionRemovePermissionKey() {
  return ['#Action=RemovePermission', '/#Action=RemovePermission', 'POST'] as const
}

export function usePostActionRemovePermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRemovePermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=RemovePermission']['$post']> },
      ) => parseResponse(client['#Action=RemovePermission'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetEndpointAttributesKey(
  args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetEndpointAttributes', '/#Action=SetEndpointAttributes', keyArgs] as const
}

export function useGetActionSetEndpointAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetEndpointAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetEndpointAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetEndpointAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetEndpointAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetEndpointAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetEndpointAttributesKey() {
  return ['#Action=SetEndpointAttributes', '/#Action=SetEndpointAttributes', 'POST'] as const
}

export function usePostActionSetEndpointAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetEndpointAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$post']> },
      ) => parseResponse(client['#Action=SetEndpointAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetPlatformApplicationAttributesKey(
  args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetPlatformApplicationAttributes',
    '/#Action=SetPlatformApplicationAttributes',
    keyArgs,
  ] as const
}

export function useGetActionSetPlatformApplicationAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetPlatformApplicationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetPlatformApplicationAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetPlatformApplicationAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetPlatformApplicationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetPlatformApplicationAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetPlatformApplicationAttributesKey() {
  return [
    '#Action=SetPlatformApplicationAttributes',
    '/#Action=SetPlatformApplicationAttributes',
    'POST',
  ] as const
}

export function usePostActionSetPlatformApplicationAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetPlatformApplicationAttributesKey()
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
            (typeof client)['#Action=SetPlatformApplicationAttributes']['$post']
          >
        },
      ) =>
        parseResponse(client['#Action=SetPlatformApplicationAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetSMSAttributesKey(
  args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetSMSAttributes', '/#Action=SetSMSAttributes', keyArgs] as const
}

export function useGetActionSetSMSAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSMSAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetSMSAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetSMSAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSMSAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetSMSAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetSMSAttributesKey() {
  return ['#Action=SetSMSAttributes', '/#Action=SetSMSAttributes', 'POST'] as const
}

export function usePostActionSetSMSAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetSMSAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$post']> },
      ) => parseResponse(client['#Action=SetSMSAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetSubscriptionAttributesKey(
  args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetSubscriptionAttributes',
    '/#Action=SetSubscriptionAttributes',
    keyArgs,
  ] as const
}

export function useGetActionSetSubscriptionAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSubscriptionAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetSubscriptionAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetSubscriptionAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetSubscriptionAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=SetSubscriptionAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetSubscriptionAttributesKey() {
  return [
    '#Action=SetSubscriptionAttributes',
    '/#Action=SetSubscriptionAttributes',
    'POST',
  ] as const
}

export function usePostActionSetSubscriptionAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetSubscriptionAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$post']> },
      ) => parseResponse(client['#Action=SetSubscriptionAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSetTopicAttributesKey(
  args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetTopicAttributes', '/#Action=SetTopicAttributes', keyArgs] as const
}

export function useGetActionSetTopicAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetTopicAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetTopicAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSetTopicAttributes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSetTopicAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=SetTopicAttributes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSetTopicAttributesKey() {
  return ['#Action=SetTopicAttributes', '/#Action=SetTopicAttributes', 'POST'] as const
}

export function usePostActionSetTopicAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSetTopicAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$post']> },
      ) => parseResponse(client['#Action=SetTopicAttributes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionSubscribeKey(
  args: InferRequestType<(typeof client)['#Action=Subscribe']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=Subscribe', '/#Action=Subscribe', keyArgs] as const
}

export function useGetActionSubscribe<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=Subscribe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSubscribeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=Subscribe'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionSubscribe<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=Subscribe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionSubscribeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=Subscribe'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionSubscribeKey() {
  return ['#Action=Subscribe', '/#Action=Subscribe', 'POST'] as const
}

export function usePostActionSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=Subscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=Subscribe']['$post']> },
      ) => parseResponse(client['#Action=Subscribe'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionTagResourceKey(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagResource', '/#Action=TagResource', keyArgs] as const
}

export function useGetActionTagResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionTagResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionTagResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=TagResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionTagResourceKey() {
  return ['#Action=TagResource', '/#Action=TagResource', 'POST'] as const
}

export function usePostActionTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=TagResource']['$post']> },
      ) => parseResponse(client['#Action=TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUnsubscribeKey(
  args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=Unsubscribe', '/#Action=Unsubscribe', keyArgs] as const
}

export function useGetActionUnsubscribe<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUnsubscribeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=Unsubscribe'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUnsubscribe<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUnsubscribeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=Unsubscribe'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUnsubscribeKey() {
  return ['#Action=Unsubscribe', '/#Action=Unsubscribe', 'POST'] as const
}

export function usePostActionUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=Unsubscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=Unsubscribe']['$post']> },
      ) => parseResponse(client['#Action=Unsubscribe'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUntagResourceKey(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagResource', '/#Action=UntagResource', keyArgs] as const
}

export function useGetActionUntagResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUntagResource<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionUntagResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=UntagResource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUntagResourceKey() {
  return ['#Action=UntagResource', '/#Action=UntagResource', 'POST'] as const
}

export function usePostActionUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=UntagResource']['$post']> },
      ) => parseResponse(client['#Action=UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionVerifySMSSandboxPhoneNumberKey(
  args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=VerifySMSSandboxPhoneNumber',
    '/#Action=VerifySMSSandboxPhoneNumber',
    keyArgs,
  ] as const
}

export function useGetActionVerifySMSSandboxPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifySMSSandboxPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=VerifySMSSandboxPhoneNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionVerifySMSSandboxPhoneNumber<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionVerifySMSSandboxPhoneNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=VerifySMSSandboxPhoneNumber'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionVerifySMSSandboxPhoneNumberKey() {
  return [
    '#Action=VerifySMSSandboxPhoneNumber',
    '/#Action=VerifySMSSandboxPhoneNumber',
    'POST',
  ] as const
}

export function usePostActionVerifySMSSandboxPhoneNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionVerifySMSSandboxPhoneNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$post']>
        },
      ) => parseResponse(client['#Action=VerifySMSSandboxPhoneNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
