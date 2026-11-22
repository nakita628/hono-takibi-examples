import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function getActionAddPermissionQueryKey(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=AddPermission', '/#Action=AddPermission', keyArgs] as const
}

export function getActionAddPermissionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionAddPermissionQueryKey>
  >({
    queryKey: getActionAddPermissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=AddPermission'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionAddPermission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAddPermissionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionAddPermissionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionAddPermission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionAddPermissionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionAddPermissionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionAddPermissionMutationKey() {
  return ['#Action=AddPermission', '/#Action=AddPermission', 'POST'] as const
}

export function getPostActionAddPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=AddPermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionAddPermissionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=AddPermission']['$post']>) {
      return parseResponse(client['#Action=AddPermission'].$post(args, options))
    },
  })
}

export function usePostActionAddPermission<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=AddPermission']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=AddPermission']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionAddPermissionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCheckIfPhoneNumberIsOptedOutQueryKey(
  args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CheckIfPhoneNumberIsOptedOut',
    '/#Action=CheckIfPhoneNumberIsOptedOut',
    keyArgs,
  ] as const
}

export function getActionCheckIfPhoneNumberIsOptedOutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCheckIfPhoneNumberIsOptedOutQueryKey>
  >({
    queryKey: getActionCheckIfPhoneNumberIsOptedOutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CheckIfPhoneNumberIsOptedOut'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCheckIfPhoneNumberIsOptedOut<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCheckIfPhoneNumberIsOptedOutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionCheckIfPhoneNumberIsOptedOutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCheckIfPhoneNumberIsOptedOut<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCheckIfPhoneNumberIsOptedOutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionCheckIfPhoneNumberIsOptedOutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCheckIfPhoneNumberIsOptedOutMutationKey() {
  return [
    '#Action=CheckIfPhoneNumberIsOptedOut',
    '/#Action=CheckIfPhoneNumberIsOptedOut',
    'POST',
  ] as const
}

export function getPostActionCheckIfPhoneNumberIsOptedOutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCheckIfPhoneNumberIsOptedOutMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$post']>,
    ) {
      return parseResponse(client['#Action=CheckIfPhoneNumberIsOptedOut'].$post(args, options))
    },
  })
}

export function usePostActionCheckIfPhoneNumberIsOptedOut<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCheckIfPhoneNumberIsOptedOutMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionConfirmSubscriptionQueryKey(
  args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ConfirmSubscription', '/#Action=ConfirmSubscription', keyArgs] as const
}

export function getActionConfirmSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionConfirmSubscriptionQueryKey>
  >({
    queryKey: getActionConfirmSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ConfirmSubscription'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionConfirmSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionConfirmSubscriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionConfirmSubscriptionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionConfirmSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionConfirmSubscriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionConfirmSubscriptionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionConfirmSubscriptionMutationKey() {
  return ['#Action=ConfirmSubscription', '/#Action=ConfirmSubscription', 'POST'] as const
}

export function getPostActionConfirmSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionConfirmSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$post']>,
    ) {
      return parseResponse(client['#Action=ConfirmSubscription'].$post(args, options))
    },
  })
}

export function usePostActionConfirmSubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ConfirmSubscription']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionConfirmSubscriptionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreatePlatformApplicationQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreatePlatformApplication',
    '/#Action=CreatePlatformApplication',
    keyArgs,
  ] as const
}

export function getActionCreatePlatformApplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreatePlatformApplicationQueryKey>
  >({
    queryKey: getActionCreatePlatformApplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreatePlatformApplication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreatePlatformApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreatePlatformApplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionCreatePlatformApplicationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreatePlatformApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreatePlatformApplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionCreatePlatformApplicationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreatePlatformApplicationMutationKey() {
  return [
    '#Action=CreatePlatformApplication',
    '/#Action=CreatePlatformApplication',
    'POST',
  ] as const
}

export function getPostActionCreatePlatformApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreatePlatformApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$post']>,
    ) {
      return parseResponse(client['#Action=CreatePlatformApplication'].$post(args, options))
    },
  })
}

export function usePostActionCreatePlatformApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreatePlatformApplication']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreatePlatformApplicationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreatePlatformEndpointQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreatePlatformEndpoint', '/#Action=CreatePlatformEndpoint', keyArgs] as const
}

export function getActionCreatePlatformEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreatePlatformEndpointQueryKey>
  >({
    queryKey: getActionCreatePlatformEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreatePlatformEndpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreatePlatformEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreatePlatformEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionCreatePlatformEndpointQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreatePlatformEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreatePlatformEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionCreatePlatformEndpointQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreatePlatformEndpointMutationKey() {
  return ['#Action=CreatePlatformEndpoint', '/#Action=CreatePlatformEndpoint', 'POST'] as const
}

export function getPostActionCreatePlatformEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreatePlatformEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$post']>,
    ) {
      return parseResponse(client['#Action=CreatePlatformEndpoint'].$post(args, options))
    },
  })
}

export function usePostActionCreatePlatformEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreatePlatformEndpoint']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreatePlatformEndpointMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateSMSSandboxPhoneNumberQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=CreateSMSSandboxPhoneNumber',
    '/#Action=CreateSMSSandboxPhoneNumber',
    keyArgs,
  ] as const
}

export function getActionCreateSMSSandboxPhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateSMSSandboxPhoneNumberQueryKey>
  >({
    queryKey: getActionCreateSMSSandboxPhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateSMSSandboxPhoneNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateSMSSandboxPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateSMSSandboxPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionCreateSMSSandboxPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionCreateSMSSandboxPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateSMSSandboxPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionCreateSMSSandboxPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionCreateSMSSandboxPhoneNumberMutationKey() {
  return [
    '#Action=CreateSMSSandboxPhoneNumber',
    '/#Action=CreateSMSSandboxPhoneNumber',
    'POST',
  ] as const
}

export function getPostActionCreateSMSSandboxPhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateSMSSandboxPhoneNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$post']>,
    ) {
      return parseResponse(client['#Action=CreateSMSSandboxPhoneNumber'].$post(args, options))
    },
  })
}

export function usePostActionCreateSMSSandboxPhoneNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateSMSSandboxPhoneNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionCreateTopicQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateTopic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateTopic', '/#Action=CreateTopic', keyArgs] as const
}

export function getActionCreateTopicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateTopic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateTopicQueryKey>
  >({
    queryKey: getActionCreateTopicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateTopic'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionCreateTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateTopic']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateTopicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionCreateTopicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionCreateTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateTopic']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateTopicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionCreateTopicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionCreateTopicMutationKey() {
  return ['#Action=CreateTopic', '/#Action=CreateTopic', 'POST'] as const
}

export function getPostActionCreateTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateTopic']['$post']>) {
      return parseResponse(client['#Action=CreateTopic'].$post(args, options))
    },
  })
}

export function usePostActionCreateTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateTopic']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateTopic']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateTopicMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteEndpointQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteEndpoint', '/#Action=DeleteEndpoint', keyArgs] as const
}

export function getActionDeleteEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteEndpointQueryKey>
  >({
    queryKey: getActionDeleteEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteEndpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionDeleteEndpointQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionDeleteEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionDeleteEndpointQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionDeleteEndpointMutationKey() {
  return ['#Action=DeleteEndpoint', '/#Action=DeleteEndpoint', 'POST'] as const
}

export function getPostActionDeleteEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteEndpointMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$post']>) {
      return parseResponse(client['#Action=DeleteEndpoint'].$post(args, options))
    },
  })
}

export function usePostActionDeleteEndpoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteEndpoint']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteEndpointMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeletePlatformApplicationQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeletePlatformApplication',
    '/#Action=DeletePlatformApplication',
    keyArgs,
  ] as const
}

export function getActionDeletePlatformApplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeletePlatformApplicationQueryKey>
  >({
    queryKey: getActionDeletePlatformApplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeletePlatformApplication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeletePlatformApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeletePlatformApplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDeletePlatformApplicationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeletePlatformApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeletePlatformApplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDeletePlatformApplicationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeletePlatformApplicationMutationKey() {
  return [
    '#Action=DeletePlatformApplication',
    '/#Action=DeletePlatformApplication',
    'POST',
  ] as const
}

export function getPostActionDeletePlatformApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeletePlatformApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$post']>,
    ) {
      return parseResponse(client['#Action=DeletePlatformApplication'].$post(args, options))
    },
  })
}

export function usePostActionDeletePlatformApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeletePlatformApplication']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeletePlatformApplicationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteSMSSandboxPhoneNumberQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DeleteSMSSandboxPhoneNumber',
    '/#Action=DeleteSMSSandboxPhoneNumber',
    keyArgs,
  ] as const
}

export function getActionDeleteSMSSandboxPhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSMSSandboxPhoneNumberQueryKey>
  >({
    queryKey: getActionDeleteSMSSandboxPhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteSMSSandboxPhoneNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteSMSSandboxPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteSMSSandboxPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionDeleteSMSSandboxPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionDeleteSMSSandboxPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteSMSSandboxPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionDeleteSMSSandboxPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionDeleteSMSSandboxPhoneNumberMutationKey() {
  return [
    '#Action=DeleteSMSSandboxPhoneNumber',
    '/#Action=DeleteSMSSandboxPhoneNumber',
    'POST',
  ] as const
}

export function getPostActionDeleteSMSSandboxPhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteSMSSandboxPhoneNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteSMSSandboxPhoneNumber'].$post(args, options))
    },
  })
}

export function usePostActionDeleteSMSSandboxPhoneNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteSMSSandboxPhoneNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionDeleteTopicQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteTopic', '/#Action=DeleteTopic', keyArgs] as const
}

export function getActionDeleteTopicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteTopicQueryKey>
  >({
    queryKey: getActionDeleteTopicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteTopic'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionDeleteTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteTopicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionDeleteTopicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionDeleteTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteTopicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionDeleteTopicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionDeleteTopicMutationKey() {
  return ['#Action=DeleteTopic', '/#Action=DeleteTopic', 'POST'] as const
}

export function getPostActionDeleteTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$post']>) {
      return parseResponse(client['#Action=DeleteTopic'].$post(args, options))
    },
  })
}

export function usePostActionDeleteTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteTopic']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteTopic']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteTopicMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetDataProtectionPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetDataProtectionPolicy', '/#Action=GetDataProtectionPolicy', keyArgs] as const
}

export function getActionGetDataProtectionPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetDataProtectionPolicyQueryKey>
  >({
    queryKey: getActionGetDataProtectionPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetDataProtectionPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetDataProtectionPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetDataProtectionPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetDataProtectionPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetDataProtectionPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetDataProtectionPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetDataProtectionPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetDataProtectionPolicyMutationKey() {
  return ['#Action=GetDataProtectionPolicy', '/#Action=GetDataProtectionPolicy', 'POST'] as const
}

export function getPostActionGetDataProtectionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetDataProtectionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=GetDataProtectionPolicy'].$post(args, options))
    },
  })
}

export function usePostActionGetDataProtectionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetDataProtectionPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetDataProtectionPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetEndpointAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetEndpointAttributes', '/#Action=GetEndpointAttributes', keyArgs] as const
}

export function getActionGetEndpointAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetEndpointAttributesQueryKey>
  >({
    queryKey: getActionGetEndpointAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetEndpointAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetEndpointAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetEndpointAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetEndpointAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetEndpointAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetEndpointAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetEndpointAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetEndpointAttributesMutationKey() {
  return ['#Action=GetEndpointAttributes', '/#Action=GetEndpointAttributes', 'POST'] as const
}

export function getPostActionGetEndpointAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetEndpointAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=GetEndpointAttributes'].$post(args, options))
    },
  })
}

export function usePostActionGetEndpointAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetEndpointAttributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetEndpointAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetPlatformApplicationAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetPlatformApplicationAttributes',
    '/#Action=GetPlatformApplicationAttributes',
    keyArgs,
  ] as const
}

export function getActionGetPlatformApplicationAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetPlatformApplicationAttributesQueryKey>
  >({
    queryKey: getActionGetPlatformApplicationAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetPlatformApplicationAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetPlatformApplicationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetPlatformApplicationAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetPlatformApplicationAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetPlatformApplicationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetPlatformApplicationAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetPlatformApplicationAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetPlatformApplicationAttributesMutationKey() {
  return [
    '#Action=GetPlatformApplicationAttributes',
    '/#Action=GetPlatformApplicationAttributes',
    'POST',
  ] as const
}

export function getPostActionGetPlatformApplicationAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetPlatformApplicationAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=GetPlatformApplicationAttributes'].$post(args, options))
    },
  })
}

export function usePostActionGetPlatformApplicationAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetPlatformApplicationAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetSMSAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetSMSAttributes', '/#Action=GetSMSAttributes', keyArgs] as const
}

export function getActionGetSMSAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSMSAttributesQueryKey>
  >({
    queryKey: getActionGetSMSAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetSMSAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetSMSAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSMSAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetSMSAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetSMSAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSMSAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetSMSAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetSMSAttributesMutationKey() {
  return ['#Action=GetSMSAttributes', '/#Action=GetSMSAttributes', 'POST'] as const
}

export function getPostActionGetSMSAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetSMSAttributesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$post']>) {
      return parseResponse(client['#Action=GetSMSAttributes'].$post(args, options))
    },
  })
}

export function usePostActionGetSMSAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSMSAttributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetSMSAttributesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetSMSSandboxAccountStatusQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetSMSSandboxAccountStatus',
    '/#Action=GetSMSSandboxAccountStatus',
    keyArgs,
  ] as const
}

export function getActionGetSMSSandboxAccountStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSMSSandboxAccountStatusQueryKey>
  >({
    queryKey: getActionGetSMSSandboxAccountStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetSMSSandboxAccountStatus'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetSMSSandboxAccountStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSMSSandboxAccountStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetSMSSandboxAccountStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetSMSSandboxAccountStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSMSSandboxAccountStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetSMSSandboxAccountStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetSMSSandboxAccountStatusMutationKey() {
  return [
    '#Action=GetSMSSandboxAccountStatus',
    '/#Action=GetSMSSandboxAccountStatus',
    'POST',
  ] as const
}

export function getPostActionGetSMSSandboxAccountStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetSMSSandboxAccountStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$post']>,
    ) {
      return parseResponse(client['#Action=GetSMSSandboxAccountStatus'].$post(args, options))
    },
  })
}

export function usePostActionGetSMSSandboxAccountStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetSMSSandboxAccountStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetSubscriptionAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=GetSubscriptionAttributes',
    '/#Action=GetSubscriptionAttributes',
    keyArgs,
  ] as const
}

export function getActionGetSubscriptionAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetSubscriptionAttributesQueryKey>
  >({
    queryKey: getActionGetSubscriptionAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetSubscriptionAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetSubscriptionAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSubscriptionAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetSubscriptionAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetSubscriptionAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetSubscriptionAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetSubscriptionAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetSubscriptionAttributesMutationKey() {
  return [
    '#Action=GetSubscriptionAttributes',
    '/#Action=GetSubscriptionAttributes',
    'POST',
  ] as const
}

export function getPostActionGetSubscriptionAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetSubscriptionAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=GetSubscriptionAttributes'].$post(args, options))
    },
  })
}

export function usePostActionGetSubscriptionAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetSubscriptionAttributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetSubscriptionAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionGetTopicAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=GetTopicAttributes', '/#Action=GetTopicAttributes', keyArgs] as const
}

export function getActionGetTopicAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetTopicAttributesQueryKey>
  >({
    queryKey: getActionGetTopicAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=GetTopicAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionGetTopicAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetTopicAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionGetTopicAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionGetTopicAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionGetTopicAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionGetTopicAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionGetTopicAttributesMutationKey() {
  return ['#Action=GetTopicAttributes', '/#Action=GetTopicAttributes', 'POST'] as const
}

export function getPostActionGetTopicAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetTopicAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=GetTopicAttributes'].$post(args, options))
    },
  })
}

export function usePostActionGetTopicAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=GetTopicAttributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionGetTopicAttributesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListEndpointsByPlatformApplicationQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListEndpointsByPlatformApplication',
    '/#Action=ListEndpointsByPlatformApplication',
    keyArgs,
  ] as const
}

export function getActionListEndpointsByPlatformApplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListEndpointsByPlatformApplicationQueryKey>
  >({
    queryKey: getActionListEndpointsByPlatformApplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListEndpointsByPlatformApplication'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListEndpointsByPlatformApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListEndpointsByPlatformApplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListEndpointsByPlatformApplicationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListEndpointsByPlatformApplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListEndpointsByPlatformApplicationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListEndpointsByPlatformApplicationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListEndpointsByPlatformApplicationMutationKey() {
  return [
    '#Action=ListEndpointsByPlatformApplication',
    '/#Action=ListEndpointsByPlatformApplication',
    'POST',
  ] as const
}

export function getPostActionListEndpointsByPlatformApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListEndpointsByPlatformApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Action=ListEndpointsByPlatformApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#Action=ListEndpointsByPlatformApplication'].$post(args, options),
      )
    },
  })
}

export function usePostActionListEndpointsByPlatformApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListEndpointsByPlatformApplicationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListOriginationNumbersQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListOriginationNumbers', '/#Action=ListOriginationNumbers', keyArgs] as const
}

export function getActionListOriginationNumbersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListOriginationNumbersQueryKey>
  >({
    queryKey: getActionListOriginationNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListOriginationNumbers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListOriginationNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListOriginationNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListOriginationNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListOriginationNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListOriginationNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListOriginationNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListOriginationNumbersMutationKey() {
  return ['#Action=ListOriginationNumbers', '/#Action=ListOriginationNumbers', 'POST'] as const
}

export function getPostActionListOriginationNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListOriginationNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$post']>,
    ) {
      return parseResponse(client['#Action=ListOriginationNumbers'].$post(args, options))
    },
  })
}

export function usePostActionListOriginationNumbers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListOriginationNumbers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListOriginationNumbersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListPhoneNumbersOptedOutQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListPhoneNumbersOptedOut', '/#Action=ListPhoneNumbersOptedOut', keyArgs] as const
}

export function getActionListPhoneNumbersOptedOutQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListPhoneNumbersOptedOutQueryKey>
  >({
    queryKey: getActionListPhoneNumbersOptedOutQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListPhoneNumbersOptedOut'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListPhoneNumbersOptedOut<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListPhoneNumbersOptedOutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListPhoneNumbersOptedOutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListPhoneNumbersOptedOut<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListPhoneNumbersOptedOutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListPhoneNumbersOptedOutQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListPhoneNumbersOptedOutMutationKey() {
  return ['#Action=ListPhoneNumbersOptedOut', '/#Action=ListPhoneNumbersOptedOut', 'POST'] as const
}

export function getPostActionListPhoneNumbersOptedOutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListPhoneNumbersOptedOutMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$post']>,
    ) {
      return parseResponse(client['#Action=ListPhoneNumbersOptedOut'].$post(args, options))
    },
  })
}

export function usePostActionListPhoneNumbersOptedOut<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListPhoneNumbersOptedOutMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListPlatformApplicationsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListPlatformApplications', '/#Action=ListPlatformApplications', keyArgs] as const
}

export function getActionListPlatformApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListPlatformApplicationsQueryKey>
  >({
    queryKey: getActionListPlatformApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListPlatformApplications'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListPlatformApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListPlatformApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListPlatformApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListPlatformApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListPlatformApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListPlatformApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListPlatformApplicationsMutationKey() {
  return ['#Action=ListPlatformApplications', '/#Action=ListPlatformApplications', 'POST'] as const
}

export function getPostActionListPlatformApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListPlatformApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$post']>,
    ) {
      return parseResponse(client['#Action=ListPlatformApplications'].$post(args, options))
    },
  })
}

export function usePostActionListPlatformApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListPlatformApplications']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListPlatformApplicationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListSMSSandboxPhoneNumbersQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=ListSMSSandboxPhoneNumbers',
    '/#Action=ListSMSSandboxPhoneNumbers',
    keyArgs,
  ] as const
}

export function getActionListSMSSandboxPhoneNumbersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListSMSSandboxPhoneNumbersQueryKey>
  >({
    queryKey: getActionListSMSSandboxPhoneNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListSMSSandboxPhoneNumbers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListSMSSandboxPhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListSMSSandboxPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListSMSSandboxPhoneNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListSMSSandboxPhoneNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListSMSSandboxPhoneNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListSMSSandboxPhoneNumbersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListSMSSandboxPhoneNumbersMutationKey() {
  return [
    '#Action=ListSMSSandboxPhoneNumbers',
    '/#Action=ListSMSSandboxPhoneNumbers',
    'POST',
  ] as const
}

export function getPostActionListSMSSandboxPhoneNumbersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListSMSSandboxPhoneNumbersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$post']>,
    ) {
      return parseResponse(client['#Action=ListSMSSandboxPhoneNumbers'].$post(args, options))
    },
  })
}

export function usePostActionListSMSSandboxPhoneNumbers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListSMSSandboxPhoneNumbersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListSubscriptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListSubscriptions', '/#Action=ListSubscriptions', keyArgs] as const
}

export function getActionListSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListSubscriptionsQueryKey>
  >({
    queryKey: getActionListSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListSubscriptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListSubscriptionsMutationKey() {
  return ['#Action=ListSubscriptions', '/#Action=ListSubscriptions', 'POST'] as const
}

export function getPostActionListSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListSubscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$post']>,
    ) {
      return parseResponse(client['#Action=ListSubscriptions'].$post(args, options))
    },
  })
}

export function usePostActionListSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListSubscriptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListSubscriptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListSubscriptionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListSubscriptionsByTopicQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListSubscriptionsByTopic', '/#Action=ListSubscriptionsByTopic', keyArgs] as const
}

export function getActionListSubscriptionsByTopicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListSubscriptionsByTopicQueryKey>
  >({
    queryKey: getActionListSubscriptionsByTopicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListSubscriptionsByTopic'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListSubscriptionsByTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListSubscriptionsByTopicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListSubscriptionsByTopicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListSubscriptionsByTopic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListSubscriptionsByTopicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListSubscriptionsByTopicQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListSubscriptionsByTopicMutationKey() {
  return ['#Action=ListSubscriptionsByTopic', '/#Action=ListSubscriptionsByTopic', 'POST'] as const
}

export function getPostActionListSubscriptionsByTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListSubscriptionsByTopicMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$post']>,
    ) {
      return parseResponse(client['#Action=ListSubscriptionsByTopic'].$post(args, options))
    },
  })
}

export function usePostActionListSubscriptionsByTopic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListSubscriptionsByTopic']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListSubscriptionsByTopicMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListTagsForResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', keyArgs] as const
}

export function getActionListTagsForResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTagsForResourceQueryKey>
  >({
    queryKey: getActionListTagsForResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListTagsForResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionListTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTagsForResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionListTagsForResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionListTagsForResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTagsForResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionListTagsForResourceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionListTagsForResourceMutationKey() {
  return ['#Action=ListTagsForResource', '/#Action=ListTagsForResource', 'POST'] as const
}

export function getPostActionListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
    ) {
      return parseResponse(client['#Action=ListTagsForResource'].$post(args, options))
    },
  })
}

export function usePostActionListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTagsForResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListTagsForResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionListTopicsQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListTopics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListTopics', '/#Action=ListTopics', keyArgs] as const
}

export function getActionListTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTopics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListTopicsQueryKey>
  >({
    queryKey: getActionListTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListTopics'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionListTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTopics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionListTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionListTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListTopics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionListTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionListTopicsMutationKey() {
  return ['#Action=ListTopics', '/#Action=ListTopics', 'POST'] as const
}

export function getPostActionListTopicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListTopics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListTopicsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListTopics']['$post']>) {
      return parseResponse(client['#Action=ListTopics'].$post(args, options))
    },
  })
}

export function usePostActionListTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListTopics']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListTopics']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListTopicsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionOptInPhoneNumberQueryKey(
  args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=OptInPhoneNumber', '/#Action=OptInPhoneNumber', keyArgs] as const
}

export function getActionOptInPhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionOptInPhoneNumberQueryKey>
  >({
    queryKey: getActionOptInPhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=OptInPhoneNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionOptInPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionOptInPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionOptInPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionOptInPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionOptInPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionOptInPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionOptInPhoneNumberMutationKey() {
  return ['#Action=OptInPhoneNumber', '/#Action=OptInPhoneNumber', 'POST'] as const
}

export function getPostActionOptInPhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionOptInPhoneNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$post']>) {
      return parseResponse(client['#Action=OptInPhoneNumber'].$post(args, options))
    },
  })
}

export function usePostActionOptInPhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=OptInPhoneNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionOptInPhoneNumberMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPublishQueryKey(
  args: InferRequestType<(typeof client)['#Action=Publish']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=Publish', '/#Action=Publish', keyArgs] as const
}

export function getActionPublishQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=Publish']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPublishQueryKey>
  >({
    queryKey: getActionPublishQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=Publish'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionPublish<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=Publish']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPublishQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionPublishQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionPublish<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=Publish']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPublishQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionPublishQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionPublishMutationKey() {
  return ['#Action=Publish', '/#Action=Publish', 'POST'] as const
}

export function getPostActionPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=Publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPublishMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=Publish']['$post']>) {
      return parseResponse(client['#Action=Publish'].$post(args, options))
    },
  })
}

export function usePostActionPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Publish']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=Publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPublishMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPublishBatchQueryKey(
  args: InferRequestType<(typeof client)['#Action=PublishBatch']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PublishBatch', '/#Action=PublishBatch', keyArgs] as const
}

export function getActionPublishBatchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PublishBatch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPublishBatchQueryKey>
  >({
    queryKey: getActionPublishBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PublishBatch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPublishBatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PublishBatch']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPublishBatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionPublishBatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionPublishBatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PublishBatch']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPublishBatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionPublishBatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionPublishBatchMutationKey() {
  return ['#Action=PublishBatch', '/#Action=PublishBatch', 'POST'] as const
}

export function getPostActionPublishBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PublishBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPublishBatchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PublishBatch']['$post']>) {
      return parseResponse(client['#Action=PublishBatch'].$post(args, options))
    },
  })
}

export function usePostActionPublishBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PublishBatch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PublishBatch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPublishBatchMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionPutDataProtectionPolicyQueryKey(
  args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=PutDataProtectionPolicy', '/#Action=PutDataProtectionPolicy', keyArgs] as const
}

export function getActionPutDataProtectionPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutDataProtectionPolicyQueryKey>
  >({
    queryKey: getActionPutDataProtectionPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=PutDataProtectionPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionPutDataProtectionPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutDataProtectionPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionPutDataProtectionPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionPutDataProtectionPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionPutDataProtectionPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionPutDataProtectionPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionPutDataProtectionPolicyMutationKey() {
  return ['#Action=PutDataProtectionPolicy', '/#Action=PutDataProtectionPolicy', 'POST'] as const
}

export function getPostActionPutDataProtectionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutDataProtectionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$post']>,
    ) {
      return parseResponse(client['#Action=PutDataProtectionPolicy'].$post(args, options))
    },
  })
}

export function usePostActionPutDataProtectionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=PutDataProtectionPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionPutDataProtectionPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionRemovePermissionQueryKey(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=RemovePermission', '/#Action=RemovePermission', keyArgs] as const
}

export function getActionRemovePermissionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionRemovePermissionQueryKey>
  >({
    queryKey: getActionRemovePermissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=RemovePermission'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionRemovePermission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRemovePermissionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionRemovePermissionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionRemovePermission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionRemovePermissionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionRemovePermissionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionRemovePermissionMutationKey() {
  return ['#Action=RemovePermission', '/#Action=RemovePermission', 'POST'] as const
}

export function getPostActionRemovePermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionRemovePermissionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>) {
      return parseResponse(client['#Action=RemovePermission'].$post(args, options))
    },
  })
}

export function usePostActionRemovePermission<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=RemovePermission']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionRemovePermissionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetEndpointAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetEndpointAttributes', '/#Action=SetEndpointAttributes', keyArgs] as const
}

export function getActionSetEndpointAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetEndpointAttributesQueryKey>
  >({
    queryKey: getActionSetEndpointAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetEndpointAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionSetEndpointAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetEndpointAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionSetEndpointAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionSetEndpointAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetEndpointAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionSetEndpointAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionSetEndpointAttributesMutationKey() {
  return ['#Action=SetEndpointAttributes', '/#Action=SetEndpointAttributes', 'POST'] as const
}

export function getPostActionSetEndpointAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetEndpointAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=SetEndpointAttributes'].$post(args, options))
    },
  })
}

export function usePostActionSetEndpointAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetEndpointAttributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetEndpointAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetPlatformApplicationAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetPlatformApplicationAttributes',
    '/#Action=SetPlatformApplicationAttributes',
    keyArgs,
  ] as const
}

export function getActionSetPlatformApplicationAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetPlatformApplicationAttributesQueryKey>
  >({
    queryKey: getActionSetPlatformApplicationAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetPlatformApplicationAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionSetPlatformApplicationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetPlatformApplicationAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionSetPlatformApplicationAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionSetPlatformApplicationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetPlatformApplicationAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionSetPlatformApplicationAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionSetPlatformApplicationAttributesMutationKey() {
  return [
    '#Action=SetPlatformApplicationAttributes',
    '/#Action=SetPlatformApplicationAttributes',
    'POST',
  ] as const
}

export function getPostActionSetPlatformApplicationAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetPlatformApplicationAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=SetPlatformApplicationAttributes'].$post(args, options))
    },
  })
}

export function usePostActionSetPlatformApplicationAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetPlatformApplicationAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetSMSAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetSMSAttributes', '/#Action=SetSMSAttributes', keyArgs] as const
}

export function getActionSetSMSAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetSMSAttributesQueryKey>
  >({
    queryKey: getActionSetSMSAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetSMSAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionSetSMSAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetSMSAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionSetSMSAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionSetSMSAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetSMSAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionSetSMSAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionSetSMSAttributesMutationKey() {
  return ['#Action=SetSMSAttributes', '/#Action=SetSMSAttributes', 'POST'] as const
}

export function getPostActionSetSMSAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetSMSAttributesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$post']>) {
      return parseResponse(client['#Action=SetSMSAttributes'].$post(args, options))
    },
  })
}

export function usePostActionSetSMSAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetSMSAttributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetSMSAttributesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetSubscriptionAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=SetSubscriptionAttributes',
    '/#Action=SetSubscriptionAttributes',
    keyArgs,
  ] as const
}

export function getActionSetSubscriptionAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetSubscriptionAttributesQueryKey>
  >({
    queryKey: getActionSetSubscriptionAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetSubscriptionAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionSetSubscriptionAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetSubscriptionAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionSetSubscriptionAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionSetSubscriptionAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetSubscriptionAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionSetSubscriptionAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionSetSubscriptionAttributesMutationKey() {
  return [
    '#Action=SetSubscriptionAttributes',
    '/#Action=SetSubscriptionAttributes',
    'POST',
  ] as const
}

export function getPostActionSetSubscriptionAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetSubscriptionAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=SetSubscriptionAttributes'].$post(args, options))
    },
  })
}

export function usePostActionSetSubscriptionAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetSubscriptionAttributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetSubscriptionAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSetTopicAttributesQueryKey(
  args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=SetTopicAttributes', '/#Action=SetTopicAttributes', keyArgs] as const
}

export function getActionSetTopicAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSetTopicAttributesQueryKey>
  >({
    queryKey: getActionSetTopicAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=SetTopicAttributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionSetTopicAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetTopicAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionSetTopicAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionSetTopicAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSetTopicAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionSetTopicAttributesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionSetTopicAttributesMutationKey() {
  return ['#Action=SetTopicAttributes', '/#Action=SetTopicAttributes', 'POST'] as const
}

export function getPostActionSetTopicAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSetTopicAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=SetTopicAttributes'].$post(args, options))
    },
  })
}

export function usePostActionSetTopicAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=SetTopicAttributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSetTopicAttributesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionSubscribeQueryKey(
  args: InferRequestType<(typeof client)['#Action=Subscribe']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=Subscribe', '/#Action=Subscribe', keyArgs] as const
}

export function getActionSubscribeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=Subscribe']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSubscribeQueryKey>
  >({
    queryKey: getActionSubscribeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=Subscribe'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionSubscribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=Subscribe']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSubscribeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionSubscribeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionSubscribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=Subscribe']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionSubscribeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionSubscribeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionSubscribeMutationKey() {
  return ['#Action=Subscribe', '/#Action=Subscribe', 'POST'] as const
}

export function getPostActionSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=Subscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=Subscribe']['$post']>) {
      return parseResponse(client['#Action=Subscribe'].$post(args, options))
    },
  })
}

export function usePostActionSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Subscribe']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=Subscribe']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionSubscribeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionTagResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=TagResource', '/#Action=TagResource', keyArgs] as const
}

export function getActionTagResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionTagResourceQueryKey>
  >({
    queryKey: getActionTagResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=TagResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionTagResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionTagResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionTagResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionTagResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TagResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionTagResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionTagResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionTagResourceMutationKey() {
  return ['#Action=TagResource', '/#Action=TagResource', 'POST'] as const
}

export function getPostActionTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=TagResource']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionTagResourceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=TagResource']['$post']>) {
      return parseResponse(client['#Action=TagResource'].$post(args, options))
    },
  })
}

export function usePostActionTagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=TagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionTagResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUnsubscribeQueryKey(
  args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=Unsubscribe', '/#Action=Unsubscribe', keyArgs] as const
}

export function getActionUnsubscribeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUnsubscribeQueryKey>
  >({
    queryKey: getActionUnsubscribeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=Unsubscribe'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionUnsubscribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUnsubscribeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionUnsubscribeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionUnsubscribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUnsubscribeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionUnsubscribeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionUnsubscribeMutationKey() {
  return ['#Action=Unsubscribe', '/#Action=Unsubscribe', 'POST'] as const
}

export function getPostActionUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=Unsubscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUnsubscribeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$post']>) {
      return parseResponse(client['#Action=Unsubscribe'].$post(args, options))
    },
  })
}

export function usePostActionUnsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=Unsubscribe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=Unsubscribe']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUnsubscribeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionUntagResourceQueryKey(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UntagResource', '/#Action=UntagResource', keyArgs] as const
}

export function getActionUntagResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUntagResourceQueryKey>
  >({
    queryKey: getActionUntagResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UntagResource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionUntagResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUntagResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionUntagResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionUntagResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUntagResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionUntagResourceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActionUntagResourceMutationKey() {
  return ['#Action=UntagResource', '/#Action=UntagResource', 'POST'] as const
}

export function getPostActionUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUntagResourceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=UntagResource']['$post']>) {
      return parseResponse(client['#Action=UntagResource'].$post(args, options))
    },
  })
}

export function usePostActionUntagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UntagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionUntagResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionVerifySMSSandboxPhoneNumberQueryKey(
  args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=VerifySMSSandboxPhoneNumber',
    '/#Action=VerifySMSSandboxPhoneNumber',
    keyArgs,
  ] as const
}

export function getActionVerifySMSSandboxPhoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionVerifySMSSandboxPhoneNumberQueryKey>
  >({
    queryKey: getActionVerifySMSSandboxPhoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=VerifySMSSandboxPhoneNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionVerifySMSSandboxPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionVerifySMSSandboxPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getActionVerifySMSSandboxPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionVerifySMSSandboxPhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionVerifySMSSandboxPhoneNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getActionVerifySMSSandboxPhoneNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionVerifySMSSandboxPhoneNumberMutationKey() {
  return [
    '#Action=VerifySMSSandboxPhoneNumber',
    '/#Action=VerifySMSSandboxPhoneNumber',
    'POST',
  ] as const
}

export function getPostActionVerifySMSSandboxPhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionVerifySMSSandboxPhoneNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$post']>,
    ) {
      return parseResponse(client['#Action=VerifySMSSandboxPhoneNumber'].$post(args, options))
    },
  })
}

export function usePostActionVerifySMSSandboxPhoneNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionVerifySMSSandboxPhoneNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
