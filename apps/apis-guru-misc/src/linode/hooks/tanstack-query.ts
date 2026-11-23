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

export function getAccountKey() {
  return ['account'] as const
}

export function getDatabasesKey() {
  return ['databases'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getLinodeKey() {
  return ['linode'] as const
}

export function getLkeKey() {
  return ['lke'] as const
}

export function getLongviewKey() {
  return ['longview'] as const
}

export function getManagedKey() {
  return ['managed'] as const
}

export function getNetworkingKey() {
  return ['networking'] as const
}

export function getNodebalancersKey() {
  return ['nodebalancers'] as const
}

export function getObjectStorageKey() {
  return ['object-storage'] as const
}

export function getProfileKey() {
  return ['profile'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getSupportKey() {
  return ['support'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAccountMutationKey() {
  return ['account', '/account', 'PUT'] as const
}

export function getPutAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
    TError,
    InferRequestType<typeof client.account.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$put>) {
      return parseResponse(client.account.$put(args, options))
    },
  })
}

export function usePutAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
        TError,
        InferRequestType<typeof client.account.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccountCancelMutationKey() {
  return ['account', '/account/cancel', 'POST'] as const
}

export function getPostAccountCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.cancel.$post>) {
      return parseResponse(client.account.cancel.$post(args, options))
    },
  })
}

export function usePostAccountCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.account.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountCreditCardMutationKey() {
  return ['account', '/account/credit-card', 'POST'] as const
}

export function getPostAccountCreditCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['credit-card']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['credit-card']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountCreditCardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['credit-card']['$post']>) {
      return parseResponse(client.account['credit-card'].$post(args, options))
    },
  })
}

export function usePostAccountCreditCard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['credit-card']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['credit-card']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountCreditCardMutationOptions<TError, TOnMutateResult>(
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

export function getAccountEntityTransfersQueryKey(
  args: InferRequestType<(typeof client.account)['entity-transfers']['$get']>,
) {
  return ['account', '/account/entity-transfers', args] as const
}

export function getAccountEntityTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['entity-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEntityTransfersQueryKey>
  >({
    queryKey: getAccountEntityTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['entity-transfers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountEntityTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['entity-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountEntityTransfersQueryKey>
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
      ...getAccountEntityTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountEntityTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['entity-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['entity-transfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountEntityTransfersQueryKey>
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
      ...getAccountEntityTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountEntityTransfersMutationKey() {
  return ['account', '/account/entity-transfers', 'POST'] as const
}

export function getPostAccountEntityTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['entity-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['entity-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountEntityTransfersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['entity-transfers']['$post']>) {
      return parseResponse(client.account['entity-transfers'].$post(args, options))
    },
  })
}

export function usePostAccountEntityTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['entity-transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['entity-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountEntityTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountEntityTransfersTokenQueryKey(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>,
) {
  return ['account', '/account/entity-transfers/:token', args] as const
}

export function getAccountEntityTransfersTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEntityTransfersTokenQueryKey>
  >({
    queryKey: getAccountEntityTransfersTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['entity-transfers'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountEntityTransfersToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountEntityTransfersTokenQueryKey>
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
      ...getAccountEntityTransfersTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountEntityTransfersToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountEntityTransfersTokenQueryKey>
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
      ...getAccountEntityTransfersTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAccountEntityTransfersTokenMutationKey() {
  return ['account', '/account/entity-transfers/:token', 'DELETE'] as const
}

export function getDeleteAccountEntityTransfersTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['entity-transfers'][':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountEntityTransfersTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$delete']>,
    ) {
      return parseResponse(client.account['entity-transfers'][':token'].$delete(args, options))
    },
  })
}

export function useDeleteAccountEntityTransfersToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['entity-transfers'][':token']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['entity-transfers'][':token']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountEntityTransfersTokenMutationOptions<
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

export function getPostAccountEntityTransfersTokenAcceptMutationKey() {
  return ['account', '/account/entity-transfers/:token/accept', 'POST'] as const
}

export function getPostAccountEntityTransfersTokenAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['entity-transfers'][':token']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['entity-transfers'][':token']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountEntityTransfersTokenAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['entity-transfers'][':token']['accept']['$post']
      >,
    ) {
      return parseResponse(client.account['entity-transfers'][':token'].accept.$post(args, options))
    },
  })
}

export function usePostAccountEntityTransfersTokenAccept<
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
                ReturnType<(typeof client.account)['entity-transfers'][':token']['accept']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['entity-transfers'][':token']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountEntityTransfersTokenAcceptMutationOptions<
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

export function getAccountEventsQueryKey(
  args: InferRequestType<typeof client.account.events.$get>,
) {
  return ['account', '/account/events', args] as const
}

export function getAccountEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEventsQueryKey>
  >({
    queryKey: getAccountEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.account.events)[':eventId']['$get']>,
) {
  return ['account', '/account/events/:eventId', args] as const
}

export function getAccountEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEventsEventIdQueryKey>
  >({
    queryKey: getAccountEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.events[':eventId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.events)[':eventId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountEventsEventIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.events)[':eventId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.events)[':eventId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountEventsEventIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountEventsEventIdReadMutationKey() {
  return ['account', '/account/events/:eventId/read', 'POST'] as const
}

export function getPostAccountEventsEventIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.events)[':eventId']['read']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.events)[':eventId']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountEventsEventIdReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.events)[':eventId']['read']['$post']>,
    ) {
      return parseResponse(client.account.events[':eventId'].read.$post(args, options))
    },
  })
}

export function usePostAccountEventsEventIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.events)[':eventId']['read']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.events)[':eventId']['read']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountEventsEventIdReadMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountEventsEventIdSeenMutationKey() {
  return ['account', '/account/events/:eventId/seen', 'POST'] as const
}

export function getPostAccountEventsEventIdSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.events)[':eventId']['seen']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.events)[':eventId']['seen']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountEventsEventIdSeenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.events)[':eventId']['seen']['$post']>,
    ) {
      return parseResponse(client.account.events[':eventId'].seen.$post(args, options))
    },
  })
}

export function usePostAccountEventsEventIdSeen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.events)[':eventId']['seen']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.events)[':eventId']['seen']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountEventsEventIdSeenMutationOptions<TError, TOnMutateResult>(
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

export function getAccountInvoicesQueryKey(
  args: InferRequestType<typeof client.account.invoices.$get>,
) {
  return ['account', '/account/invoices', args] as const
}

export function getAccountInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInvoicesQueryKey>
  >({
    queryKey: getAccountInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.invoices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountInvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.invoices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.invoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountInvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountInvoicesInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>,
) {
  return ['account', '/account/invoices/:invoiceId', args] as const
}

export function getAccountInvoicesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInvoicesInvoiceIdQueryKey>
  >({
    queryKey: getAccountInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.invoices[':invoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInvoicesInvoiceIdQueryKey>
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
      ...getAccountInvoicesInvoiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInvoicesInvoiceIdQueryKey>
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
      ...getAccountInvoicesInvoiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountInvoicesInvoiceIdItemsQueryKey(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>,
) {
  return ['account', '/account/invoices/:invoiceId/items', args] as const
}

export function getAccountInvoicesInvoiceIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountInvoicesInvoiceIdItemsQueryKey>
  >({
    queryKey: getAccountInvoicesInvoiceIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.invoices[':invoiceId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountInvoicesInvoiceIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInvoicesInvoiceIdItemsQueryKey>
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
      ...getAccountInvoicesInvoiceIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountInvoicesInvoiceIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountInvoicesInvoiceIdItemsQueryKey>
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
      ...getAccountInvoicesInvoiceIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountLoginsQueryKey() {
  return ['account', '/account/logins'] as const
}

export function getAccountLoginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountLoginsQueryKey>
  >({
    queryKey: getAccountLoginsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.logins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountLogins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountLoginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountLoginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountLogins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountLoginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountLoginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountLoginsLoginIdQueryKey(
  args: InferRequestType<(typeof client.account.logins)[':loginId']['$get']>,
) {
  return ['account', '/account/logins/:loginId', args] as const
}

export function getAccountLoginsLoginIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.logins)[':loginId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountLoginsLoginIdQueryKey>
  >({
    queryKey: getAccountLoginsLoginIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.logins[':loginId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountLoginsLoginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.logins)[':loginId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountLoginsLoginIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountLoginsLoginIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountLoginsLoginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.logins)[':loginId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.logins)[':loginId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountLoginsLoginIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountLoginsLoginIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountMaintenanceQueryKey() {
  return ['account', '/account/maintenance'] as const
}

export function getAccountMaintenanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountMaintenanceQueryKey>
  >({
    queryKey: getAccountMaintenanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.maintenance.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountMaintenance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountMaintenanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountMaintenanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountMaintenance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.maintenance.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountMaintenanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountMaintenanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountNotificationsQueryKey() {
  return ['account', '/account/notifications'] as const
}

export function getAccountNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNotificationsQueryKey>
  >({
    queryKey: getAccountNotificationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.notifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountNotificationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountNotificationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountOauthClientsQueryKey(
  args: InferRequestType<(typeof client.account)['oauth-clients']['$get']>,
) {
  return ['account', '/account/oauth-clients', args] as const
}

export function getAccountOauthClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['oauth-clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOauthClientsQueryKey>
  >({
    queryKey: getAccountOauthClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['oauth-clients'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountOauthClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['oauth-clients']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountOauthClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountOauthClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountOauthClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['oauth-clients']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['oauth-clients']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountOauthClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountOauthClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountOauthClientsMutationKey() {
  return ['account', '/account/oauth-clients', 'POST'] as const
}

export function getPostAccountOauthClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['oauth-clients']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['oauth-clients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountOauthClientsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['oauth-clients']['$post']>) {
      return parseResponse(client.account['oauth-clients'].$post(args, options))
    },
  })
}

export function usePostAccountOauthClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['oauth-clients']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['oauth-clients']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountOauthClientsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountOauthClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>,
) {
  return ['account', '/account/oauth-clients/:clientId', args] as const
}

export function getAccountOauthClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOauthClientsClientIdQueryKey>
  >({
    queryKey: getAccountOauthClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['oauth-clients'][':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountOauthClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountOauthClientsClientIdQueryKey>
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
      ...getAccountOauthClientsClientIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountOauthClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountOauthClientsClientIdQueryKey>
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
      ...getAccountOauthClientsClientIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountOauthClientsClientIdMutationKey() {
  return ['account', '/account/oauth-clients/:clientId', 'PUT'] as const
}

export function getPutAccountOauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountOauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$put']>,
    ) {
      return parseResponse(client.account['oauth-clients'][':clientId'].$put(args, options))
    },
  })
}

export function usePutAccountOauthClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountOauthClientsClientIdMutationOptions<
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

export function getDeleteAccountOauthClientsClientIdMutationKey() {
  return ['account', '/account/oauth-clients/:clientId', 'DELETE'] as const
}

export function getDeleteAccountOauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountOauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>,
    ) {
      return parseResponse(client.account['oauth-clients'][':clientId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountOauthClientsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountOauthClientsClientIdMutationOptions<
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

export function getPostAccountOauthClientsClientIdResetSecretMutationKey() {
  return ['account', '/account/oauth-clients/:clientId/reset-secret', 'POST'] as const
}

export function getPostAccountOauthClientsClientIdResetSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountOauthClientsClientIdResetSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
      >,
    ) {
      return parseResponse(
        client.account['oauth-clients'][':clientId']['reset-secret'].$post(args, options),
      )
    },
  })
}

export function usePostAccountOauthClientsClientIdResetSecret<
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
                ReturnType<
                  (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountOauthClientsClientIdResetSecretMutationOptions<
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

export function getAccountOauthClientsClientIdThumbnailQueryKey(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
) {
  return ['account', '/account/oauth-clients/:clientId/thumbnail', args] as const
}

export function getAccountOauthClientsClientIdThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOauthClientsClientIdThumbnailQueryKey>
  >({
    queryKey: getAccountOauthClientsClientIdThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['oauth-clients'][':clientId'].thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountOauthClientsClientIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountOauthClientsClientIdThumbnailQueryKey>
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
      ...getAccountOauthClientsClientIdThumbnailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountOauthClientsClientIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountOauthClientsClientIdThumbnailQueryKey>
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
      ...getAccountOauthClientsClientIdThumbnailQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountOauthClientsClientIdThumbnailMutationKey() {
  return ['account', '/account/oauth-clients/:clientId/thumbnail', 'PUT'] as const
}

export function getPutAccountOauthClientsClientIdThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountOauthClientsClientIdThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']
      >,
    ) {
      return parseResponse(
        client.account['oauth-clients'][':clientId'].thumbnail.$put(args, options),
      )
    },
  })
}

export function usePutAccountOauthClientsClientIdThumbnail<
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
                ReturnType<
                  (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountOauthClientsClientIdThumbnailMutationOptions<
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

export function getAccountPaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.account)['payment-methods']['$get']>,
) {
  return ['account', '/account/payment-methods', args] as const
}

export function getAccountPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPaymentMethodsQueryKey>
  >({
    queryKey: getAccountPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['payment-methods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['payment-methods']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPaymentMethodsQueryKey>
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
      ...getAccountPaymentMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['payment-methods']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['payment-methods']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPaymentMethodsQueryKey>
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
      ...getAccountPaymentMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountPaymentMethodsMutationKey() {
  return ['account', '/account/payment-methods', 'POST'] as const
}

export function getPostAccountPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['payment-methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['payment-methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentMethodsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['payment-methods']['$post']>) {
      return parseResponse(client.account['payment-methods'].$post(args, options))
    },
  })
}

export function usePostAccountPaymentMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['payment-methods']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['payment-methods']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPaymentMethodsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountPaymentMethodsPaymentMethodIdQueryKey(
  args: InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>,
) {
  return ['account', '/account/payment-methods/:paymentMethodId', args] as const
}

export function getAccountPaymentMethodsPaymentMethodIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPaymentMethodsPaymentMethodIdQueryKey>
  >({
    queryKey: getAccountPaymentMethodsPaymentMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['payment-methods'][':paymentMethodId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountPaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPaymentMethodsPaymentMethodIdQueryKey>
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
      ...getAccountPaymentMethodsPaymentMethodIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountPaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPaymentMethodsPaymentMethodIdQueryKey>
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
      ...getAccountPaymentMethodsPaymentMethodIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAccountPaymentMethodsPaymentMethodIdMutationKey() {
  return ['account', '/account/payment-methods/:paymentMethodId', 'DELETE'] as const
}

export function getDeleteAccountPaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['payment-methods'][':paymentMethodId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountPaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['payment-methods'][':paymentMethodId']['$delete']
      >,
    ) {
      return parseResponse(
        client.account['payment-methods'][':paymentMethodId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountPaymentMethodsPaymentMethodId<
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
                ReturnType<
                  (typeof client.account)['payment-methods'][':paymentMethodId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountPaymentMethodsPaymentMethodIdMutationOptions<
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

export function getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultMutationKey() {
  return ['account', '/account/payment-methods/:paymentMethodId/make-default', 'POST'] as const
}

export function getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
      >,
    ) {
      return parseResponse(
        client.account['payment-methods'][':paymentMethodId']['make-default'].$post(args, options),
      )
    },
  })
}

export function usePostAccountPaymentMethodsPaymentMethodIdMakeDefault<
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
                ReturnType<
                  (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPaymentMethodsPaymentMethodIdMakeDefaultMutationOptions<
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

export function getAccountPaymentsQueryKey(
  args: InferRequestType<typeof client.account.payments.$get>,
) {
  return ['account', '/account/payments', args] as const
}

export function getAccountPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPaymentsQueryKey>
  >({
    queryKey: getAccountPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.payments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.payments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountPaymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountPaymentsMutationKey() {
  return ['account', '/account/payments', 'POST'] as const
}

export function getPostAccountPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.payments.$post>) {
      return parseResponse(client.account.payments.$post(args, options))
    },
  })
}

export function usePostAccountPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.payments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPaymentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountPaymentsPaypalMutationKey() {
  return ['account', '/account/payments/paypal', 'POST'] as const
}

export function getPostAccountPaymentsPaypalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.paypal.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.payments.paypal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentsPaypalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.payments.paypal.$post>) {
      return parseResponse(client.account.payments.paypal.$post(args, options))
    },
  })
}

export function usePostAccountPaymentsPaypal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.payments.paypal.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.payments.paypal.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPaymentsPaypalMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountPaymentsPaypalExecuteMutationKey() {
  return ['account', '/account/payments/paypal/execute', 'POST'] as const
}

export function getPostAccountPaymentsPaypalExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.payments.paypal.execute.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.account.payments.paypal.execute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPaymentsPaypalExecuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.payments.paypal.execute.$post>) {
      return parseResponse(client.account.payments.paypal.execute.$post(args, options))
    },
  })
}

export function usePostAccountPaymentsPaypalExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.payments.paypal.execute.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.account.payments.paypal.execute.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPaymentsPaypalExecuteMutationOptions<
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

export function getAccountPaymentsPaymentIdQueryKey(
  args: InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>,
) {
  return ['account', '/account/payments/:paymentId', args] as const
}

export function getAccountPaymentsPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPaymentsPaymentIdQueryKey>
  >({
    queryKey: getAccountPaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.payments[':paymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPaymentsPaymentIdQueryKey>
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
      ...getAccountPaymentsPaymentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.payments)[':paymentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPaymentsPaymentIdQueryKey>
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
      ...getAccountPaymentsPaymentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountPromoCodesMutationKey() {
  return ['account', '/account/promo-codes', 'POST'] as const
}

export function getPostAccountPromoCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['promo-codes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['promo-codes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPromoCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)['promo-codes']['$post']>) {
      return parseResponse(client.account['promo-codes'].$post(args, options))
    },
  })
}

export function usePostAccountPromoCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['promo-codes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['promo-codes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountPromoCodesMutationOptions<TError, TOnMutateResult>(
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

export function getAccountServiceTransfersQueryKey(
  args: InferRequestType<(typeof client.account)['service-transfers']['$get']>,
) {
  return ['account', '/account/service-transfers', args] as const
}

export function getAccountServiceTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['service-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountServiceTransfersQueryKey>
  >({
    queryKey: getAccountServiceTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['service-transfers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountServiceTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['service-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountServiceTransfersQueryKey>
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
      ...getAccountServiceTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountServiceTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['service-transfers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['service-transfers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountServiceTransfersQueryKey>
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
      ...getAccountServiceTransfersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountServiceTransfersMutationKey() {
  return ['account', '/account/service-transfers', 'POST'] as const
}

export function getPostAccountServiceTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['service-transfers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['service-transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountServiceTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['service-transfers']['$post']>,
    ) {
      return parseResponse(client.account['service-transfers'].$post(args, options))
    },
  })
}

export function usePostAccountServiceTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['service-transfers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['service-transfers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountServiceTransfersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountServiceTransfersTokenQueryKey(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>,
) {
  return ['account', '/account/service-transfers/:token', args] as const
}

export function getAccountServiceTransfersTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountServiceTransfersTokenQueryKey>
  >({
    queryKey: getAccountServiceTransfersTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['service-transfers'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountServiceTransfersToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountServiceTransfersTokenQueryKey>
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
      ...getAccountServiceTransfersTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountServiceTransfersToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountServiceTransfersTokenQueryKey>
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
      ...getAccountServiceTransfersTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAccountServiceTransfersTokenMutationKey() {
  return ['account', '/account/service-transfers/:token', 'DELETE'] as const
}

export function getDeleteAccountServiceTransfersTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['service-transfers'][':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountServiceTransfersTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$delete']>,
    ) {
      return parseResponse(client.account['service-transfers'][':token'].$delete(args, options))
    },
  })
}

export function useDeleteAccountServiceTransfersToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)['service-transfers'][':token']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['service-transfers'][':token']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountServiceTransfersTokenMutationOptions<
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

export function getPostAccountServiceTransfersTokenAcceptMutationKey() {
  return ['account', '/account/service-transfers/:token/accept', 'POST'] as const
}

export function getPostAccountServiceTransfersTokenAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account)['service-transfers'][':token']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)['service-transfers'][':token']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountServiceTransfersTokenAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)['service-transfers'][':token']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.account['service-transfers'][':token'].accept.$post(args, options),
      )
    },
  })
}

export function usePostAccountServiceTransfersTokenAccept<
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
                ReturnType<
                  (typeof client.account)['service-transfers'][':token']['accept']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account)['service-transfers'][':token']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountServiceTransfersTokenAcceptMutationOptions<
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

export function getAccountSettingsQueryKey() {
  return ['account', '/account/settings'] as const
}

export function getAccountSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSettingsQueryKey>
  >({
    queryKey: getAccountSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAccountSettingsMutationKey() {
  return ['account', '/account/settings', 'PUT'] as const
}

export function getPutAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.settings.$put>) {
      return parseResponse(client.account.settings.$put(args, options))
    },
  })
}

export function usePutAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.account.settings.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountSettingsManagedEnableMutationKey() {
  return ['account', '/account/settings/managed-enable', 'POST'] as const
}

export function getPostAccountSettingsManagedEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.settings)['managed-enable']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSettingsManagedEnableMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.settings['managed-enable'].$post(undefined, options))
    },
  })
}

export function usePostAccountSettingsManagedEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.settings)['managed-enable']['$post']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountSettingsManagedEnableMutationOptions<
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

export function getAccountTransferQueryKey() {
  return ['account', '/account/transfer'] as const
}

export function getAccountTransferQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTransferQueryKey>
  >({
    queryKey: getAccountTransferQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.transfer.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountTransfer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountTransferQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountTransferQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountTransfer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.transfer.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountTransferQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountTransferQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountUsersQueryKey(args: InferRequestType<typeof client.account.users.$get>) {
  return ['account', '/account/users', args] as const
}

export function getAccountUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersQueryKey>
  >({
    queryKey: getAccountUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountUsersMutationKey() {
  return ['account', '/account/users', 'POST'] as const
}

export function getPostAccountUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.users.$post>) {
      return parseResponse(client.account.users.$post(args, options))
    },
  })
}

export function usePostAccountUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.account.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountUsersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountUsersUsernameQueryKey(
  args: InferRequestType<(typeof client.account.users)[':username']['$get']>,
) {
  return ['account', '/account/users/:username', args] as const
}

export function getAccountUsersUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersUsernameQueryKey>
  >({
    queryKey: getAccountUsersUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.users[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.users)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountUsersUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountUsersUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.users)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.users)[':username']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountUsersUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountUsersUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAccountUsersUsernameMutationKey() {
  return ['account', '/account/users/:username', 'PUT'] as const
}

export function getPutAccountUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':username']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountUsersUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.users)[':username']['$put']>) {
      return parseResponse(client.account.users[':username'].$put(args, options))
    },
  })
}

export function usePutAccountUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.users)[':username']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.users)[':username']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountUsersUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountUsersUsernameMutationKey() {
  return ['account', '/account/users/:username', 'DELETE'] as const
}

export function getDeleteAccountUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.users)[':username']['$delete']>,
    ) {
      return parseResponse(client.account.users[':username'].$delete(args, options))
    },
  })
}

export function useDeleteAccountUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.users)[':username']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.users)[':username']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountUsersUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getAccountUsersUsernameGrantsQueryKey(
  args: InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>,
) {
  return ['account', '/account/users/:username/grants', args] as const
}

export function getAccountUsersUsernameGrantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersUsernameGrantsQueryKey>
  >({
    queryKey: getAccountUsersUsernameGrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.users[':username'].grants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountUsersUsernameGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountUsersUsernameGrantsQueryKey>
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
      ...getAccountUsersUsernameGrantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountUsersUsernameGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountUsersUsernameGrantsQueryKey>
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
      ...getAccountUsersUsernameGrantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountUsersUsernameGrantsMutationKey() {
  return ['account', '/account/users/:username/grants', 'PUT'] as const
}

export function getPutAccountUsersUsernameGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':username']['grants']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountUsersUsernameGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.users)[':username']['grants']['$put']>,
    ) {
      return parseResponse(client.account.users[':username'].grants.$put(args, options))
    },
  })
}

export function usePutAccountUsersUsernameGrants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.users)[':username']['grants']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.users)[':username']['grants']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountUsersUsernameGrantsMutationOptions<TError, TOnMutateResult>(
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

export function getDatabasesEnginesQueryKey(
  args: InferRequestType<typeof client.databases.engines.$get>,
) {
  return ['databases', '/databases/engines', args] as const
}

export function getDatabasesEnginesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.databases.engines.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesEnginesQueryKey>
  >({
    queryKey: getDatabasesEnginesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.engines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatabasesEngines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.engines.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesEnginesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabasesEnginesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabasesEngines<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.engines.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.databases.engines.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesEnginesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabasesEnginesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatabasesEnginesEngineIdQueryKey(
  args: InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>,
) {
  return ['databases', '/databases/engines/:engineId', args] as const
}

export function getDatabasesEnginesEngineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesEnginesEngineIdQueryKey>
  >({
    queryKey: getDatabasesEnginesEngineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.engines[':engineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesEnginesEngineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesEnginesEngineIdQueryKey>
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
      ...getDatabasesEnginesEngineIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesEnginesEngineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.databases.engines)[':engineId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesEnginesEngineIdQueryKey>
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
      ...getDatabasesEnginesEngineIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasesInstancesQueryKey(
  args: InferRequestType<typeof client.databases.instances.$get>,
) {
  return ['databases', '/databases/instances', args] as const
}

export function getDatabasesInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.databases.instances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesInstancesQueryKey>
  >({
    queryKey: getDatabasesInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatabasesInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabasesInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabasesInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.databases.instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabasesInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatabasesMongodbInstancesQueryKey(
  args: InferRequestType<typeof client.databases.mongodb.instances.$get>,
) {
  return ['databases', '/databases/mongodb/instances', args] as const
}

export function getDatabasesMongodbInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.mongodb.instances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesQueryKey>
  >({
    queryKey: getDatabasesMongodbInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mongodb.instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMongodbInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.mongodb.instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesQueryKey>
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
      ...getDatabasesMongodbInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMongodbInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.mongodb.instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.databases.mongodb.instances.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesQueryKey>
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
      ...getDatabasesMongodbInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasesMongodbInstancesInstanceIdQueryKey(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId', args] as const
}

export function getDatabasesMongodbInstancesInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdQueryKey>
  >({
    queryKey: getDatabasesMongodbInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMongodbInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMongodbInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDatabasesMongodbInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId', 'PUT'] as const
}

export function getPutDatabasesMongodbInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesMongodbInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>,
    ) {
      return parseResponse(client.databases.mongodb.instances[':instanceId'].$put(args, options))
    },
  })
}

export function usePutDatabasesMongodbInstancesInstanceId<
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
                ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatabasesMongodbInstancesInstanceIdMutationOptions<
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

export function getDeleteDatabasesMongodbInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId', 'DELETE'] as const
}

export function getDeleteDatabasesMongodbInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesMongodbInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>,
    ) {
      return parseResponse(client.databases.mongodb.instances[':instanceId'].$delete(args, options))
    },
  })
}

export function useDeleteDatabasesMongodbInstancesInstanceId<
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
                ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatabasesMongodbInstancesInstanceIdMutationOptions<
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

export function getDatabasesMongodbInstancesInstanceIdBackupsQueryKey(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
  >,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/backups', args] as const
}

export function getDatabasesMongodbInstancesInstanceIdBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsQueryKey>
  >({
    queryKey: getDatabasesMongodbInstancesInstanceIdBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMongodbInstancesInstanceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdBackupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMongodbInstancesInstanceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdBackupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDatabasesMongodbInstancesInstanceIdBackupsMutationKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId/backups', 'POST'] as const
}

export function getPostDatabasesMongodbInstancesInstanceIdBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMongodbInstancesInstanceIdBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMongodbInstancesInstanceIdBackups<
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
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesMongodbInstancesInstanceIdBackupsMutationOptions<
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

export function getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/backups/:backupId', args] as const
}

export function getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey>
  >({
    queryKey: getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMongodbInstancesInstanceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMongodbInstancesInstanceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdBackupsBackupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdMutationKey() {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/backups/:backupId',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupId<
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
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdMutationOptions<
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

export function getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreMutationKey() {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].backups[':backupId'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestore<
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
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
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

export function getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
  >,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/credentials', args] as const
}

export function getDatabasesMongodbInstancesInstanceIdCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey>
  >({
    queryKey: getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMongodbInstancesInstanceIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMongodbInstancesInstanceIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdCredentialsQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDatabasesMongodbInstancesInstanceIdCredentialsResetMutationKey() {
  return [
    'databases',
    '/databases/mongodb/instances/:instanceId/credentials/reset',
    'POST',
  ] as const
}

export function getPostDatabasesMongodbInstancesInstanceIdCredentialsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMongodbInstancesInstanceIdCredentialsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].credentials.reset.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMongodbInstancesInstanceIdCredentialsReset<
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
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostDatabasesMongodbInstancesInstanceIdCredentialsResetMutationOptions<
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

export function getPostDatabasesMongodbInstancesInstanceIdPatchMutationKey() {
  return ['databases', '/databases/mongodb/instances/:instanceId/patch', 'POST'] as const
}

export function getPostDatabasesMongodbInstancesInstanceIdPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMongodbInstancesInstanceIdPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].patch.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMongodbInstancesInstanceIdPatch<
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
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesMongodbInstancesInstanceIdPatchMutationOptions<
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

export function getDatabasesMongodbInstancesInstanceIdSslQueryKey(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>,
) {
  return ['databases', '/databases/mongodb/instances/:instanceId/ssl', args] as const
}

export function getDatabasesMongodbInstancesInstanceIdSslQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMongodbInstancesInstanceIdSslQueryKey>
  >({
    queryKey: getDatabasesMongodbInstancesInstanceIdSslQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mongodb.instances[':instanceId'].ssl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMongodbInstancesInstanceIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdSslQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdSslQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMongodbInstancesInstanceIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMongodbInstancesInstanceIdSslQueryKey>
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
      ...getDatabasesMongodbInstancesInstanceIdSslQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasesMysqlInstancesQueryKey(
  args: InferRequestType<typeof client.databases.mysql.instances.$get>,
) {
  return ['databases', '/databases/mysql/instances', args] as const
}

export function getDatabasesMysqlInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.mysql.instances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesQueryKey>
  >({
    queryKey: getDatabasesMysqlInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mysql.instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMysqlInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.mysql.instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesQueryKey>
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
      ...getDatabasesMysqlInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMysqlInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.mysql.instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesQueryKey>
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
      ...getDatabasesMysqlInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDatabasesMysqlInstancesMutationKey() {
  return ['databases', '/databases/mysql/instances', 'POST'] as const
}

export function getPostDatabasesMysqlInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.databases.mysql.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.databases.mysql.instances.$post>) {
      return parseResponse(client.databases.mysql.instances.$post(args, options))
    },
  })
}

export function usePostDatabasesMysqlInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.databases.mysql.instances.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.databases.mysql.instances.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesMysqlInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getDatabasesMysqlInstancesInstanceIdQueryKey(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>,
) {
  return ['databases', '/databases/mysql/instances/:instanceId', args] as const
}

export function getDatabasesMysqlInstancesInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdQueryKey>
  >({
    queryKey: getDatabasesMysqlInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMysqlInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMysqlInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDatabasesMysqlInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId', 'PUT'] as const
}

export function getPutDatabasesMysqlInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesMysqlInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>,
    ) {
      return parseResponse(client.databases.mysql.instances[':instanceId'].$put(args, options))
    },
  })
}

export function usePutDatabasesMysqlInstancesInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatabasesMysqlInstancesInstanceIdMutationOptions<
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

export function getDeleteDatabasesMysqlInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId', 'DELETE'] as const
}

export function getDeleteDatabasesMysqlInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesMysqlInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>,
    ) {
      return parseResponse(client.databases.mysql.instances[':instanceId'].$delete(args, options))
    },
  })
}

export function useDeleteDatabasesMysqlInstancesInstanceId<
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
                ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatabasesMysqlInstancesInstanceIdMutationOptions<
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

export function getDatabasesMysqlInstancesInstanceIdBackupsQueryKey(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/backups', args] as const
}

export function getDatabasesMysqlInstancesInstanceIdBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsQueryKey>
  >({
    queryKey: getDatabasesMysqlInstancesInstanceIdBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMysqlInstancesInstanceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdBackupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMysqlInstancesInstanceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdBackupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDatabasesMysqlInstancesInstanceIdBackupsMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId/backups', 'POST'] as const
}

export function getPostDatabasesMysqlInstancesInstanceIdBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesInstanceIdBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMysqlInstancesInstanceIdBackups<
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
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesMysqlInstancesInstanceIdBackupsMutationOptions<
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

export function getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/backups/:backupId', args] as const
}

export function getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey>
  >({
    queryKey: getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups[':backupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMysqlInstancesInstanceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMysqlInstancesInstanceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdBackupsBackupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdMutationKey() {
  return [
    'databases',
    '/databases/mysql/instances/:instanceId/backups/:backupId',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups[':backupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupId<
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
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdMutationOptions<
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

export function getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreMutationKey() {
  return [
    'databases',
    '/databases/mysql/instances/:instanceId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].backups[':backupId'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestore<
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
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
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

export function getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
  >,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/credentials', args] as const
}

export function getDatabasesMysqlInstancesInstanceIdCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey>
  >({
    queryKey: getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMysqlInstancesInstanceIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMysqlInstancesInstanceIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdCredentialsQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDatabasesMysqlInstancesInstanceIdCredentialsResetMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId/credentials/reset', 'POST'] as const
}

export function getPostDatabasesMysqlInstancesInstanceIdCredentialsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesInstanceIdCredentialsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].credentials.reset.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMysqlInstancesInstanceIdCredentialsReset<
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
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesMysqlInstancesInstanceIdCredentialsResetMutationOptions<
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

export function getPostDatabasesMysqlInstancesInstanceIdPatchMutationKey() {
  return ['databases', '/databases/mysql/instances/:instanceId/patch', 'POST'] as const
}

export function getPostDatabasesMysqlInstancesInstanceIdPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMysqlInstancesInstanceIdPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].patch.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesMysqlInstancesInstanceIdPatch<
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
                ReturnType<
                  (typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesMysqlInstancesInstanceIdPatchMutationOptions<
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

export function getDatabasesMysqlInstancesInstanceIdSslQueryKey(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>,
) {
  return ['databases', '/databases/mysql/instances/:instanceId/ssl', args] as const
}

export function getDatabasesMysqlInstancesInstanceIdSslQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesMysqlInstancesInstanceIdSslQueryKey>
  >({
    queryKey: getDatabasesMysqlInstancesInstanceIdSslQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.mysql.instances[':instanceId'].ssl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesMysqlInstancesInstanceIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdSslQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdSslQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesMysqlInstancesInstanceIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesMysqlInstancesInstanceIdSslQueryKey>
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
      ...getDatabasesMysqlInstancesInstanceIdSslQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasesPostgresqlInstancesQueryKey(
  args: InferRequestType<typeof client.databases.postgresql.instances.$get>,
) {
  return ['databases', '/databases/postgresql/instances', args] as const
}

export function getDatabasesPostgresqlInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.postgresql.instances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesQueryKey>
  >({
    queryKey: getDatabasesPostgresqlInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.postgresql.instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesPostgresqlInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.postgresql.instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesQueryKey>
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
      ...getDatabasesPostgresqlInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesPostgresqlInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.postgresql.instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.databases.postgresql.instances.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesQueryKey>
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
      ...getDatabasesPostgresqlInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDatabasesPostgresqlInstancesMutationKey() {
  return ['databases', '/databases/postgresql/instances', 'POST'] as const
}

export function getPostDatabasesPostgresqlInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.databases.postgresql.instances.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.databases.postgresql.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.databases.postgresql.instances.$post>) {
      return parseResponse(client.databases.postgresql.instances.$post(args, options))
    },
  })
}

export function usePostDatabasesPostgresqlInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.databases.postgresql.instances.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.databases.postgresql.instances.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesPostgresqlInstancesMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdQueryKey(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId', args] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdQueryKey>
  >({
    queryKey: getDatabasesPostgresqlInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesPostgresqlInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesPostgresqlInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDatabasesPostgresqlInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId', 'PUT'] as const
}

export function getPutDatabasesPostgresqlInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesPostgresqlInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>,
    ) {
      return parseResponse(client.databases.postgresql.instances[':instanceId'].$put(args, options))
    },
  })
}

export function usePutDatabasesPostgresqlInstancesInstanceId<
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
                ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatabasesPostgresqlInstancesInstanceIdMutationOptions<
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

export function getDeleteDatabasesPostgresqlInstancesInstanceIdMutationKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId', 'DELETE'] as const
}

export function getDeleteDatabasesPostgresqlInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesPostgresqlInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDatabasesPostgresqlInstancesInstanceId<
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
                ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatabasesPostgresqlInstancesInstanceIdMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
  >,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId/backups', args] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey>
  >({
    queryKey: getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesPostgresqlInstancesInstanceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdBackupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesPostgresqlInstancesInstanceIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdBackupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsMutationKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId/backups', 'POST'] as const
}

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesInstanceIdBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesPostgresqlInstancesInstanceIdBackups<
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
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesPostgresqlInstancesInstanceIdBackupsMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
) {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups/:backupId',
    args,
  ] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey>
  >({
    queryKey: getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesPostgresqlInstancesInstanceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesPostgresqlInstancesInstanceIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdMutationKey() {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups/:backupId',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupId<
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
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdMutationOptions<
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

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreMutationKey() {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/backups/:backupId/restore',
    'POST',
  ] as const
}

export function getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].backups[':backupId'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestore<
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
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
  >,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId/credentials', args] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey>
  >({
    queryKey: getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesPostgresqlInstancesInstanceIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesPostgresqlInstancesInstanceIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdCredentialsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetMutationKey() {
  return [
    'databases',
    '/databases/postgresql/instances/:instanceId/credentials/reset',
    'POST',
  ] as const
}

export function getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].credentials.reset.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesPostgresqlInstancesInstanceIdCredentialsReset<
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
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostDatabasesPostgresqlInstancesInstanceIdCredentialsResetMutationOptions<
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

export function getPostDatabasesPostgresqlInstancesInstanceIdPatchMutationKey() {
  return ['databases', '/databases/postgresql/instances/:instanceId/patch', 'POST'] as const
}

export function getPostDatabasesPostgresqlInstancesInstanceIdPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesPostgresqlInstancesInstanceIdPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
      >,
    ) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].patch.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesPostgresqlInstancesInstanceIdPatch<
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
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesPostgresqlInstancesInstanceIdPatchMutationOptions<
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

export function getDatabasesPostgresqlInstancesInstanceIdSslQueryKey(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
  >,
) {
  return ['databases', '/databases/postgresql/instances/:instanceId/ssl', args] as const
}

export function getDatabasesPostgresqlInstancesInstanceIdSslQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdSslQueryKey>
  >({
    queryKey: getDatabasesPostgresqlInstancesInstanceIdSslQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.postgresql.instances[':instanceId'].ssl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesPostgresqlInstancesInstanceIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdSslQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdSslQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesPostgresqlInstancesInstanceIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesPostgresqlInstancesInstanceIdSslQueryKey>
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
      ...getDatabasesPostgresqlInstancesInstanceIdSslQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasesTypesQueryKey(
  args: InferRequestType<typeof client.databases.types.$get>,
) {
  return ['databases', '/databases/types', args] as const
}

export function getDatabasesTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.databases.types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesTypesQueryKey>
  >({
    queryKey: getDatabasesTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatabasesTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabasesTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabasesTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabasesTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatabasesTypesTypeIdQueryKey(
  args: InferRequestType<(typeof client.databases.types)[':typeId']['$get']>,
) {
  return ['databases', '/databases/types/:typeId', args] as const
}

export function getDatabasesTypesTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.types)[':typeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesTypesTypeIdQueryKey>
  >({
    queryKey: getDatabasesTypesTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.types[':typeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesTypesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.types)[':typeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesTypesTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabasesTypesTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabasesTypesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases.types)[':typeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.databases.types)[':typeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesTypesTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabasesTypesTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDomainsQueryKey(args: InferRequestType<typeof client.domains.$get>) {
  return ['domains', '/domains', args] as const
}

export function getDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >({
    queryKey: getDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDomainsMutationKey() {
  return ['domains', '/domains', 'POST'] as const
}

export function getPostDomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.$post>) {
      return parseResponse(client.domains.$post(args, options))
    },
  })
}

export function usePostDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>>,
        TError,
        InferRequestType<typeof client.domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDomainsImportMutationKey() {
  return ['domains', '/domains/import', 'POST'] as const
}

export function getPostDomainsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.domains.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.domains.import.$post>) {
      return parseResponse(client.domains.import.$post(args, options))
    },
  })
}

export function usePostDomainsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.domains.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsImportMutationOptions<TError, TOnMutateResult>(
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

export function getDomainsDomainIdQueryKey(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
) {
  return ['domains', '/domains/:domainId', args] as const
}

export function getDomainsDomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdQueryKey>
  >({
    queryKey: getDomainsDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domainId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsDomainIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsDomainIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutDomainsDomainIdMutationKey() {
  return ['domains', '/domains/:domainId', 'PUT'] as const
}

export function getPutDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domainId']['$put']>) {
      return parseResponse(client.domains[':domainId'].$put(args, options))
    },
  })
}

export function usePutDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domainId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDomainsDomainIdMutationKey() {
  return ['domains', '/domains/:domainId', 'DELETE'] as const
}

export function getDeleteDomainsDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':domainId']['$delete']>) {
      return parseResponse(client.domains[':domainId'].$delete(args, options))
    },
  })
}

export function useDeleteDomainsDomainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domainId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domainId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsDomainIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDomainsDomainIdCloneMutationKey() {
  return ['domains', '/domains/:domainId/clone', 'POST'] as const
}

export function getPostDomainsDomainIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domainId']['clone']['$post']>,
    ) {
      return parseResponse(client.domains[':domainId'].clone.$post(args, options))
    },
  })
}

export function usePostDomainsDomainIdClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domainId']['clone']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domainId']['clone']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainIdCloneMutationOptions<TError, TOnMutateResult>(
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

export function getDomainsDomainIdRecordsQueryKey(
  args: InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>,
) {
  return ['domains', '/domains/:domainId/records', args] as const
}

export function getDomainsDomainIdRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdRecordsQueryKey>
  >({
    queryKey: getDomainsDomainIdRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domainId'].records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainsDomainIdRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdRecordsQueryKey>
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
      ...getDomainsDomainIdRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsDomainIdRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdRecordsQueryKey>
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
      ...getDomainsDomainIdRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDomainsDomainIdRecordsMutationKey() {
  return ['domains', '/domains/:domainId/records', 'POST'] as const
}

export function getPostDomainsDomainIdRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['records']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsDomainIdRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domainId']['records']['$post']>,
    ) {
      return parseResponse(client.domains[':domainId'].records.$post(args, options))
    },
  })
}

export function usePostDomainsDomainIdRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domainId']['records']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domainId']['records']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsDomainIdRecordsMutationOptions<TError, TOnMutateResult>(
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

export function getDomainsDomainIdRecordsRecordIdQueryKey(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>,
) {
  return ['domains', '/domains/:domainId/records/:recordId', args] as const
}

export function getDomainsDomainIdRecordsRecordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdRecordsRecordIdQueryKey>
  >({
    queryKey: getDomainsDomainIdRecordsRecordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domainId'].records[':recordId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainsDomainIdRecordsRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdRecordsRecordIdQueryKey>
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
      ...getDomainsDomainIdRecordsRecordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsDomainIdRecordsRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdRecordsRecordIdQueryKey>
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
      ...getDomainsDomainIdRecordsRecordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDomainsDomainIdRecordsRecordIdMutationKey() {
  return ['domains', '/domains/:domainId/records/:recordId', 'PUT'] as const
}

export function getPutDomainsDomainIdRecordsRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsDomainIdRecordsRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>,
    ) {
      return parseResponse(client.domains[':domainId'].records[':recordId'].$put(args, options))
    },
  })
}

export function usePutDomainsDomainIdRecordsRecordId<
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
                ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDomainsDomainIdRecordsRecordIdMutationOptions<
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

export function getDeleteDomainsDomainIdRecordsRecordIdMutationKey() {
  return ['domains', '/domains/:domainId/records/:recordId', 'DELETE'] as const
}

export function getDeleteDomainsDomainIdRecordsRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsDomainIdRecordsRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.domains)[':domainId']['records'][':recordId']['$delete']
      >,
    ) {
      return parseResponse(client.domains[':domainId'].records[':recordId'].$delete(args, options))
    },
  })
}

export function useDeleteDomainsDomainIdRecordsRecordId<
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
                ReturnType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsDomainIdRecordsRecordIdMutationOptions<
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

export function getDomainsDomainIdZoneFileQueryKey(
  args: InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>,
) {
  return ['domains', '/domains/:domainId/zone-file', args] as const
}

export function getDomainsDomainIdZoneFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdZoneFileQueryKey>
  >({
    queryKey: getDomainsDomainIdZoneFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domainId']['zone-file'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDomainsDomainIdZoneFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdZoneFileQueryKey>
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
      ...getDomainsDomainIdZoneFileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDomainsDomainIdZoneFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.domains)[':domainId']['zone-file']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdZoneFileQueryKey>
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
      ...getDomainsDomainIdZoneFileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getImagesQueryKey(args: InferRequestType<typeof client.images.$get>) {
  return ['images', '/images', args] as const
}

export function getImagesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >({
    queryKey: getImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostImagesMutationKey() {
  return ['images', '/images', 'POST'] as const
}

export function getPostImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>>,
    TError,
    InferRequestType<typeof client.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.$post>) {
      return parseResponse(client.images.$post(args, options))
    },
  })
}

export function usePostImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>>,
        TError,
        InferRequestType<typeof client.images.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostImagesUploadMutationKey() {
  return ['images', '/images/upload', 'POST'] as const
}

export function getPostImagesUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.upload.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.images.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.upload.$post>) {
      return parseResponse(client.images.upload.$post(args, options))
    },
  })
}

export function usePostImagesUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.upload.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.images.upload.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImagesUploadMutationOptions<TError, TOnMutateResult>(
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

export function getImagesImageIdQueryKey(
  args: InferRequestType<(typeof client.images)[':imageId']['$get']>,
) {
  return ['images', '/images/:imageId', args] as const
}

export function getImagesImageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageIdQueryKey>
  >({
    queryKey: getImagesImageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImagesImageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesImageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImagesImageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesImageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutImagesImageIdMutationKey() {
  return ['images', '/images/:imageId', 'PUT'] as const
}

export function getPutImagesImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':imageId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutImagesImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':imageId']['$put']>) {
      return parseResponse(client.images[':imageId'].$put(args, options))
    },
  })
}

export function usePutImagesImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.images)[':imageId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutImagesImageIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteImagesImageIdMutationKey() {
  return ['images', '/images/:imageId', 'DELETE'] as const
}

export function getDeleteImagesImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':imageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImagesImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':imageId']['$delete']>) {
      return parseResponse(client.images[':imageId'].$delete(args, options))
    },
  })
}

export function useDeleteImagesImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.images)[':imageId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImagesImageIdMutationOptions<TError, TOnMutateResult>(
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

export function getLinodeInstancesQueryKey(
  args: InferRequestType<typeof client.linode.instances.$get>,
) {
  return ['linode', '/linode/instances', args] as const
}

export function getLinodeInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.linode.instances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesQueryKey>
  >({
    queryKey: getLinodeInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLinodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.linode.instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLinodeInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLinodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.linode.instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLinodeInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLinodeInstancesMutationKey() {
  return ['linode', '/linode/instances', 'POST'] as const
}

export function getPostLinodeInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.linode.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.linode.instances.$post>) {
      return parseResponse(client.linode.instances.$post(args, options))
    },
  })
}

export function usePostLinodeInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.linode.instances.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.linode.instances.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getLinodeInstancesLinodeIdQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId', args] as const
}

export function getLinodeInstancesLinodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdQueryKey>
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
      ...getLinodeInstancesLinodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdQueryKey>
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
      ...getLinodeInstancesLinodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLinodeInstancesLinodeIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId', 'PUT'] as const
}

export function getPutLinodeInstancesLinodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeInstancesLinodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$put']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].$put(args, options))
    },
  })
}

export function usePutLinodeInstancesLinodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinodeInstancesLinodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLinodeInstancesLinodeIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId', 'DELETE'] as const
}

export function getDeleteLinodeInstancesLinodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeInstancesLinodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$delete']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].$delete(args, options))
    },
  })
}

export function useDeleteLinodeInstancesLinodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinodeInstancesLinodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getLinodeInstancesLinodeIdBackupsQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/backups', args] as const
}

export function getLinodeInstancesLinodeIdBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdBackupsQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdBackupsQueryKey>
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
      ...getLinodeInstancesLinodeIdBackupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdBackupsQueryKey>
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
      ...getLinodeInstancesLinodeIdBackupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdBackupsMutationKey() {
  return ['linode', '/linode/instances/:linodeId/backups', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].backups.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdBackups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdBackupsMutationOptions<
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

export function getPostLinodeInstancesLinodeIdBackupsCancelMutationKey() {
  return ['linode', '/linode/instances/:linodeId/backups/cancel', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBackupsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBackupsCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].backups.cancel.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdBackupsCancel<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdBackupsCancelMutationOptions<
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

export function getPostLinodeInstancesLinodeIdBackupsEnableMutationKey() {
  return ['linode', '/linode/instances/:linodeId/backups/enable', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBackupsEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBackupsEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']
      >,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].backups.enable.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdBackupsEnable<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdBackupsEnableMutationOptions<
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

export function getLinodeInstancesLinodeIdBackupsBackupIdQueryKey(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
  >,
) {
  return ['linode', '/linode/instances/:linodeId/backups/:backupId', args] as const
}

export function getLinodeInstancesLinodeIdBackupsBackupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdBackupsBackupIdQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdBackupsBackupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].backups[':backupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdBackupsBackupIdQueryKey>
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
      ...getLinodeInstancesLinodeIdBackupsBackupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdBackupsBackupIdQueryKey>
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
      ...getLinodeInstancesLinodeIdBackupsBackupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreMutationKey() {
  return ['linode', '/linode/instances/:linodeId/backups/:backupId/restore', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].backups[':backupId'].restore.$post(args, options),
      )
    },
  })
}

export function usePostLinodeInstancesLinodeIdBackupsBackupIdRestore<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdBackupsBackupIdRestoreMutationOptions<
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

export function getPostLinodeInstancesLinodeIdBootMutationKey() {
  return ['linode', '/linode/instances/:linodeId/boot', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdBootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdBootMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].boot.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdBoot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdBootMutationOptions<
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

export function getPostLinodeInstancesLinodeIdCloneMutationKey() {
  return ['linode', '/linode/instances/:linodeId/clone', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].clone.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdClone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdCloneMutationOptions<
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

export function getLinodeInstancesLinodeIdConfigsQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/configs', args] as const
}

export function getLinodeInstancesLinodeIdConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdConfigsQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].configs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdConfigsQueryKey>
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
      ...getLinodeInstancesLinodeIdConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdConfigsQueryKey>
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
      ...getLinodeInstancesLinodeIdConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdConfigsMutationKey() {
  return ['linode', '/linode/instances/:linodeId/configs', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].configs.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdConfigsMutationOptions<
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

export function getLinodeInstancesLinodeIdConfigsConfigIdQueryKey(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
  >,
) {
  return ['linode', '/linode/instances/:linodeId/configs/:configId', args] as const
}

export function getLinodeInstancesLinodeIdConfigsConfigIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdConfigsConfigIdQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdConfigsConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].configs[':configId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdConfigsConfigIdQueryKey>
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
      ...getLinodeInstancesLinodeIdConfigsConfigIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdConfigsConfigIdQueryKey>
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
      ...getLinodeInstancesLinodeIdConfigsConfigIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLinodeInstancesLinodeIdConfigsConfigIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId/configs/:configId', 'PUT'] as const
}

export function getPutLinodeInstancesLinodeIdConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeInstancesLinodeIdConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].configs[':configId'].$put(args, options),
      )
    },
  })
}

export function usePutLinodeInstancesLinodeIdConfigsConfigId<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinodeInstancesLinodeIdConfigsConfigIdMutationOptions<
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

export function getDeleteLinodeInstancesLinodeIdConfigsConfigIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId/configs/:configId', 'DELETE'] as const
}

export function getDeleteLinodeInstancesLinodeIdConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeInstancesLinodeIdConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].configs[':configId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLinodeInstancesLinodeIdConfigsConfigId<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinodeInstancesLinodeIdConfigsConfigIdMutationOptions<
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

export function getLinodeInstancesLinodeIdDisksQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/disks', args] as const
}

export function getLinodeInstancesLinodeIdDisksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdDisksQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdDisksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdDisks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdDisksQueryKey>
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
      ...getLinodeInstancesLinodeIdDisksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdDisks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdDisksQueryKey>
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
      ...getLinodeInstancesLinodeIdDisksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdDisksMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdDisksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdDisksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].disks.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdDisks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdDisksMutationOptions<
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

export function getLinodeInstancesLinodeIdDisksDiskIdQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId', args] as const
}

export function getLinodeInstancesLinodeIdDisksDiskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdDisksDiskIdQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdDisksDiskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdDisksDiskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdDisksDiskIdQueryKey>
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
      ...getLinodeInstancesLinodeIdDisksDiskIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdDisksDiskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdDisksDiskIdQueryKey>
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
      ...getLinodeInstancesLinodeIdDisksDiskIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLinodeInstancesLinodeIdDisksDiskIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId', 'PUT'] as const
}

export function getPutLinodeInstancesLinodeIdDisksDiskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeInstancesLinodeIdDisksDiskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].$put(args, options),
      )
    },
  })
}

export function usePutLinodeInstancesLinodeIdDisksDiskId<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinodeInstancesLinodeIdDisksDiskIdMutationOptions<
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

export function getDeleteLinodeInstancesLinodeIdDisksDiskIdMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId', 'DELETE'] as const
}

export function getDeleteLinodeInstancesLinodeIdDisksDiskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeInstancesLinodeIdDisksDiskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLinodeInstancesLinodeIdDisksDiskId<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinodeInstancesLinodeIdDisksDiskIdMutationOptions<
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

export function getPostLinodeInstancesLinodeIdDisksDiskIdCloneMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId/clone', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdDisksDiskIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdDisksDiskIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].clone.$post(args, options),
      )
    },
  })
}

export function usePostLinodeInstancesLinodeIdDisksDiskIdClone<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdDisksDiskIdCloneMutationOptions<
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

export function getPostLinodeInstancesLinodeIdDisksDiskIdPasswordMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId/password', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdDisksDiskIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdDisksDiskIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].password.$post(args, options),
      )
    },
  })
}

export function usePostLinodeInstancesLinodeIdDisksDiskIdPassword<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdDisksDiskIdPasswordMutationOptions<
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

export function getPostLinodeInstancesLinodeIdDisksDiskIdResizeMutationKey() {
  return ['linode', '/linode/instances/:linodeId/disks/:diskId/resize', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdDisksDiskIdResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdDisksDiskIdResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].disks[':diskId'].resize.$post(args, options),
      )
    },
  })
}

export function usePostLinodeInstancesLinodeIdDisksDiskIdResize<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdDisksDiskIdResizeMutationOptions<
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

export function getLinodeInstancesLinodeIdFirewallsQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/firewalls', args] as const
}

export function getLinodeInstancesLinodeIdFirewallsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdFirewallsQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdFirewallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].firewalls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdFirewalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdFirewallsQueryKey>
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
      ...getLinodeInstancesLinodeIdFirewallsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdFirewalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdFirewallsQueryKey>
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
      ...getLinodeInstancesLinodeIdFirewallsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdIpsQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/ips', args] as const
}

export function getLinodeInstancesLinodeIdIpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdIpsQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].ips.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdIpsQueryKey>
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
      ...getLinodeInstancesLinodeIdIpsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdIpsQueryKey>
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
      ...getLinodeInstancesLinodeIdIpsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdIpsMutationKey() {
  return ['linode', '/linode/instances/:linodeId/ips', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdIpsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].ips.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdIpsMutationOptions<
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

export function getLinodeInstancesLinodeIdIpsAddressQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/ips/:address', args] as const
}

export function getLinodeInstancesLinodeIdIpsAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdIpsAddressQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdIpsAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].ips[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdIpsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdIpsAddressQueryKey>
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
      ...getLinodeInstancesLinodeIdIpsAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdIpsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdIpsAddressQueryKey>
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
      ...getLinodeInstancesLinodeIdIpsAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLinodeInstancesLinodeIdIpsAddressMutationKey() {
  return ['linode', '/linode/instances/:linodeId/ips/:address', 'PUT'] as const
}

export function getPutLinodeInstancesLinodeIdIpsAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeInstancesLinodeIdIpsAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']
      >,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].ips[':address'].$put(args, options))
    },
  })
}

export function usePutLinodeInstancesLinodeIdIpsAddress<
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
                ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinodeInstancesLinodeIdIpsAddressMutationOptions<
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

export function getDeleteLinodeInstancesLinodeIdIpsAddressMutationKey() {
  return ['linode', '/linode/instances/:linodeId/ips/:address', 'DELETE'] as const
}

export function getDeleteLinodeInstancesLinodeIdIpsAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeInstancesLinodeIdIpsAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']
      >,
    ) {
      return parseResponse(
        client.linode.instances[':linodeId'].ips[':address'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLinodeInstancesLinodeIdIpsAddress<
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
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinodeInstancesLinodeIdIpsAddressMutationOptions<
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

export function getPostLinodeInstancesLinodeIdMigrateMutationKey() {
  return ['linode', '/linode/instances/:linodeId/migrate', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdMigrateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].migrate.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdMigrate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdMigrateMutationOptions<
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

export function getPostLinodeInstancesLinodeIdMutateMutationKey() {
  return ['linode', '/linode/instances/:linodeId/mutate', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdMutateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdMutateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].mutate.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdMutate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdMutateMutationOptions<
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

export function getLinodeInstancesLinodeIdNodebalancersQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/nodebalancers', args] as const
}

export function getLinodeInstancesLinodeIdNodebalancersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdNodebalancersQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdNodebalancersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].nodebalancers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdNodebalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdNodebalancersQueryKey>
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
      ...getLinodeInstancesLinodeIdNodebalancersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdNodebalancers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdNodebalancersQueryKey>
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
      ...getLinodeInstancesLinodeIdNodebalancersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLinodeInstancesLinodeIdPasswordMutationKey() {
  return ['linode', '/linode/instances/:linodeId/password', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['password']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].password.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdPassword<
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
                ReturnType<(typeof client.linode.instances)[':linodeId']['password']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdPasswordMutationOptions<
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

export function getPostLinodeInstancesLinodeIdRebootMutationKey() {
  return ['linode', '/linode/instances/:linodeId/reboot', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdRebootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdRebootMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].reboot.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdReboot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdRebootMutationOptions<
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

export function getPostLinodeInstancesLinodeIdRebuildMutationKey() {
  return ['linode', '/linode/instances/:linodeId/rebuild', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdRebuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdRebuildMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].rebuild.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdRebuild<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdRebuildMutationOptions<
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

export function getPostLinodeInstancesLinodeIdRescueMutationKey() {
  return ['linode', '/linode/instances/:linodeId/rescue', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdRescueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdRescueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].rescue.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdRescue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdRescueMutationOptions<
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

export function getPostLinodeInstancesLinodeIdResizeMutationKey() {
  return ['linode', '/linode/instances/:linodeId/resize', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].resize.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdResize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdResizeMutationOptions<
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

export function getPostLinodeInstancesLinodeIdShutdownMutationKey() {
  return ['linode', '/linode/instances/:linodeId/shutdown', 'POST'] as const
}

export function getPostLinodeInstancesLinodeIdShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeInstancesLinodeIdShutdownMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>,
    ) {
      return parseResponse(client.linode.instances[':linodeId'].shutdown.$post(args, options))
    },
  })
}

export function usePostLinodeInstancesLinodeIdShutdown<
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
                ReturnType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeInstancesLinodeIdShutdownMutationOptions<
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

export function getLinodeInstancesLinodeIdStatsQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/stats', args] as const
}

export function getLinodeInstancesLinodeIdStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdStatsQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdStatsQueryKey>
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
      ...getLinodeInstancesLinodeIdStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdStatsQueryKey>
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
      ...getLinodeInstancesLinodeIdStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdStatsYearMonthQueryKey(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
  >,
) {
  return ['linode', '/linode/instances/:linodeId/stats/:year/:month', args] as const
}

export function getLinodeInstancesLinodeIdStatsYearMonthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdStatsYearMonthQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdStatsYearMonthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].stats[':year'][':month'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdStatsYearMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdStatsYearMonthQueryKey>
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
      ...getLinodeInstancesLinodeIdStatsYearMonthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdStatsYearMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdStatsYearMonthQueryKey>
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
      ...getLinodeInstancesLinodeIdStatsYearMonthQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdTransferQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/transfer', args] as const
}

export function getLinodeInstancesLinodeIdTransferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdTransferQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdTransferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].transfer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdTransferQueryKey>
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
      ...getLinodeInstancesLinodeIdTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdTransferQueryKey>
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
      ...getLinodeInstancesLinodeIdTransferQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdTransferYearMonthQueryKey(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
  >,
) {
  return ['linode', '/linode/instances/:linodeId/transfer/:year/:month', args] as const
}

export function getLinodeInstancesLinodeIdTransferYearMonthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdTransferYearMonthQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdTransferYearMonthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].transfer[':year'][':month'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdTransferYearMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdTransferYearMonthQueryKey>
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
      ...getLinodeInstancesLinodeIdTransferYearMonthQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdTransferYearMonth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdTransferYearMonthQueryKey>
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
      ...getLinodeInstancesLinodeIdTransferYearMonthQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLinodeInstancesLinodeIdVolumesQueryKey(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>,
) {
  return ['linode', '/linode/instances/:linodeId/volumes', args] as const
}

export function getLinodeInstancesLinodeIdVolumesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeInstancesLinodeIdVolumesQueryKey>
  >({
    queryKey: getLinodeInstancesLinodeIdVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.instances[':linodeId'].volumes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeInstancesLinodeIdVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdVolumesQueryKey>
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
      ...getLinodeInstancesLinodeIdVolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeInstancesLinodeIdVolumes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeInstancesLinodeIdVolumesQueryKey>
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
      ...getLinodeInstancesLinodeIdVolumesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLinodeKernelsQueryKey(
  args: InferRequestType<typeof client.linode.kernels.$get>,
) {
  return ['linode', '/linode/kernels', args] as const
}

export function getLinodeKernelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.linode.kernels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeKernelsQueryKey>
  >({
    queryKey: getLinodeKernelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.kernels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLinodeKernels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.linode.kernels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeKernelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLinodeKernelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLinodeKernels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.linode.kernels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.kernels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeKernelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLinodeKernelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLinodeKernelsKernelIdQueryKey(
  args: InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>,
) {
  return ['linode', '/linode/kernels/:kernelId', args] as const
}

export function getLinodeKernelsKernelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeKernelsKernelIdQueryKey>
  >({
    queryKey: getLinodeKernelsKernelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.kernels[':kernelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeKernelsKernelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeKernelsKernelIdQueryKey>
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
      ...getLinodeKernelsKernelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeKernelsKernelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.kernels)[':kernelId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeKernelsKernelIdQueryKey>
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
      ...getLinodeKernelsKernelIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLinodeStackscriptsQueryKey(
  args: InferRequestType<typeof client.linode.stackscripts.$get>,
) {
  return ['linode', '/linode/stackscripts', args] as const
}

export function getLinodeStackscriptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.linode.stackscripts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeStackscriptsQueryKey>
  >({
    queryKey: getLinodeStackscriptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.stackscripts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLinodeStackscripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.linode.stackscripts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeStackscriptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLinodeStackscriptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLinodeStackscripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.linode.stackscripts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeStackscriptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLinodeStackscriptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLinodeStackscriptsMutationKey() {
  return ['linode', '/linode/stackscripts', 'POST'] as const
}

export function getPostLinodeStackscriptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.linode.stackscripts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLinodeStackscriptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.linode.stackscripts.$post>) {
      return parseResponse(client.linode.stackscripts.$post(args, options))
    },
  })
}

export function usePostLinodeStackscripts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.linode.stackscripts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.linode.stackscripts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLinodeStackscriptsMutationOptions<TError, TOnMutateResult>(
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

export function getLinodeStackscriptsStackscriptIdQueryKey(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>,
) {
  return ['linode', '/linode/stackscripts/:stackscriptId', args] as const
}

export function getLinodeStackscriptsStackscriptIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeStackscriptsStackscriptIdQueryKey>
  >({
    queryKey: getLinodeStackscriptsStackscriptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.stackscripts[':stackscriptId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeStackscriptsStackscriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeStackscriptsStackscriptIdQueryKey>
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
      ...getLinodeStackscriptsStackscriptIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLinodeStackscriptsStackscriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeStackscriptsStackscriptIdQueryKey>
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
      ...getLinodeStackscriptsStackscriptIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLinodeStackscriptsStackscriptIdMutationKey() {
  return ['linode', '/linode/stackscripts/:stackscriptId', 'PUT'] as const
}

export function getPutLinodeStackscriptsStackscriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLinodeStackscriptsStackscriptIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>,
    ) {
      return parseResponse(client.linode.stackscripts[':stackscriptId'].$put(args, options))
    },
  })
}

export function usePutLinodeStackscriptsStackscriptId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLinodeStackscriptsStackscriptIdMutationOptions<
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

export function getDeleteLinodeStackscriptsStackscriptIdMutationKey() {
  return ['linode', '/linode/stackscripts/:stackscriptId', 'DELETE'] as const
}

export function getDeleteLinodeStackscriptsStackscriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLinodeStackscriptsStackscriptIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>,
    ) {
      return parseResponse(client.linode.stackscripts[':stackscriptId'].$delete(args, options))
    },
  })
}

export function useDeleteLinodeStackscriptsStackscriptId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLinodeStackscriptsStackscriptIdMutationOptions<
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

export function getLinodeTypesQueryKey() {
  return ['linode', '/linode/types'] as const
}

export function getLinodeTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinodeTypesQueryKey>
  >({
    queryKey: getLinodeTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLinodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLinodeTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLinodeTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linode.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLinodeTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLinodeTypesTypeIdQueryKey(
  args: InferRequestType<(typeof client.linode.types)[':typeId']['$get']>,
) {
  return ['linode', '/linode/types/:typeId', args] as const
}

export function getLinodeTypesTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.types)[':typeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinodeTypesTypeIdQueryKey>
  >({
    queryKey: getLinodeTypesTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linode.types[':typeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLinodeTypesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.types)[':typeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeTypesTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLinodeTypesTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLinodeTypesTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.linode.types)[':typeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.linode.types)[':typeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinodeTypesTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLinodeTypesTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLkeClustersQueryKey() {
  return ['lke', '/lke/clusters'] as const
}

export function getLkeClustersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLkeClustersQueryKey>
  >({
    queryKey: getLkeClustersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.clusters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLkeClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLkeClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLkeClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLkeClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLkeClustersMutationKey() {
  return ['lke', '/lke/clusters', 'POST'] as const
}

export function getPostLkeClustersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lke.clusters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lke.clusters.$post>) {
      return parseResponse(client.lke.clusters.$post(args, options))
    },
  })
}

export function usePostLkeClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.clusters.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.lke.clusters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLkeClustersClusterIdQueryKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId', args] as const
}

export function getLkeClustersClusterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdQueryKey>
  >({
    queryKey: getLkeClustersClusterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.clusters[':clusterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLkeClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLkeClustersClusterIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLkeClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLkeClustersClusterIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutLkeClustersClusterIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId', 'PUT'] as const
}

export function getPutLkeClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLkeClustersClusterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$put']>) {
      return parseResponse(client.lke.clusters[':clusterId'].$put(args, options))
    },
  })
}

export function usePutLkeClustersClusterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLkeClustersClusterIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLkeClustersClusterIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$delete']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].$delete(args, options))
    },
  })
}

export function useDeleteLkeClustersClusterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLkeClustersClusterIdMutationOptions<TError, TOnMutateResult>(
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

export function getLkeClustersClusterIdApiEndpointsQueryKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/api-endpoints', args] as const
}

export function getLkeClustersClusterIdApiEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdApiEndpointsQueryKey>
  >({
    queryKey: getLkeClustersClusterIdApiEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.clusters[':clusterId']['api-endpoints'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLkeClustersClusterIdApiEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdApiEndpointsQueryKey>
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
      ...getLkeClustersClusterIdApiEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLkeClustersClusterIdApiEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdApiEndpointsQueryKey>
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
      ...getLkeClustersClusterIdApiEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLkeClustersClusterIdDashboardQueryKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/dashboard', args] as const
}

export function getLkeClustersClusterIdDashboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdDashboardQueryKey>
  >({
    queryKey: getLkeClustersClusterIdDashboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.clusters[':clusterId'].dashboard.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLkeClustersClusterIdDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdDashboardQueryKey>
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
      ...getLkeClustersClusterIdDashboardQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLkeClustersClusterIdDashboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdDashboardQueryKey>
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
      ...getLkeClustersClusterIdDashboardQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLkeClustersClusterIdKubeconfigQueryKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/kubeconfig', args] as const
}

export function getLkeClustersClusterIdKubeconfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdKubeconfigQueryKey>
  >({
    queryKey: getLkeClustersClusterIdKubeconfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.clusters[':clusterId'].kubeconfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLkeClustersClusterIdKubeconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdKubeconfigQueryKey>
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
      ...getLkeClustersClusterIdKubeconfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLkeClustersClusterIdKubeconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdKubeconfigQueryKey>
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
      ...getLkeClustersClusterIdKubeconfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteLkeClustersClusterIdKubeconfigMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/kubeconfig', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdKubeconfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdKubeconfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].kubeconfig.$delete(args, options))
    },
  })
}

export function useDeleteLkeClustersClusterIdKubeconfig<
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
                ReturnType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLkeClustersClusterIdKubeconfigMutationOptions<
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

export function getLkeClustersClusterIdNodesNodeIdQueryKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/nodes/:nodeId', args] as const
}

export function getLkeClustersClusterIdNodesNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdNodesNodeIdQueryKey>
  >({
    queryKey: getLkeClustersClusterIdNodesNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.clusters[':clusterId'].nodes[':nodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLkeClustersClusterIdNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdNodesNodeIdQueryKey>
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
      ...getLkeClustersClusterIdNodesNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLkeClustersClusterIdNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdNodesNodeIdQueryKey>
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
      ...getLkeClustersClusterIdNodesNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteLkeClustersClusterIdNodesNodeIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/nodes/:nodeId', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.lke.clusters[':clusterId'].nodes[':nodeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLkeClustersClusterIdNodesNodeId<
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
                ReturnType<
                  (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLkeClustersClusterIdNodesNodeIdMutationOptions<
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

export function getPostLkeClustersClusterIdNodesNodeIdRecycleMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/nodes/:nodeId/recycle', 'POST'] as const
}

export function getPostLkeClustersClusterIdNodesNodeIdRecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdNodesNodeIdRecycleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
      >,
    ) {
      return parseResponse(
        client.lke.clusters[':clusterId'].nodes[':nodeId'].recycle.$post(args, options),
      )
    },
  })
}

export function usePostLkeClustersClusterIdNodesNodeIdRecycle<
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
                ReturnType<
                  (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersClusterIdNodesNodeIdRecycleMutationOptions<
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

export function getLkeClustersClusterIdPoolsQueryKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/pools', args] as const
}

export function getLkeClustersClusterIdPoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdPoolsQueryKey>
  >({
    queryKey: getLkeClustersClusterIdPoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.clusters[':clusterId'].pools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLkeClustersClusterIdPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdPoolsQueryKey>
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
      ...getLkeClustersClusterIdPoolsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLkeClustersClusterIdPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdPoolsQueryKey>
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
      ...getLkeClustersClusterIdPoolsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLkeClustersClusterIdPoolsMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/pools', 'POST'] as const
}

export function getPostLkeClustersClusterIdPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].pools.$post(args, options))
    },
  })
}

export function usePostLkeClustersClusterIdPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersClusterIdPoolsMutationOptions<TError, TOnMutateResult>(
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

export function getLkeClustersClusterIdPoolsPoolIdQueryKey(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>,
) {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId', args] as const
}

export function getLkeClustersClusterIdPoolsPoolIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeClustersClusterIdPoolsPoolIdQueryKey>
  >({
    queryKey: getLkeClustersClusterIdPoolsPoolIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.clusters[':clusterId'].pools[':poolId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLkeClustersClusterIdPoolsPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdPoolsPoolIdQueryKey>
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
      ...getLkeClustersClusterIdPoolsPoolIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLkeClustersClusterIdPoolsPoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeClustersClusterIdPoolsPoolIdQueryKey>
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
      ...getLkeClustersClusterIdPoolsPoolIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLkeClustersClusterIdPoolsPoolIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId', 'PUT'] as const
}

export function getPutLkeClustersClusterIdPoolsPoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLkeClustersClusterIdPoolsPoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']
      >,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].pools[':poolId'].$put(args, options))
    },
  })
}

export function usePutLkeClustersClusterIdPoolsPoolId<
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
                ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLkeClustersClusterIdPoolsPoolIdMutationOptions<
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

export function getDeleteLkeClustersClusterIdPoolsPoolIdMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdPoolsPoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdPoolsPoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']
      >,
    ) {
      return parseResponse(
        client.lke.clusters[':clusterId'].pools[':poolId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLkeClustersClusterIdPoolsPoolId<
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
                ReturnType<
                  (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLkeClustersClusterIdPoolsPoolIdMutationOptions<
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

export function getPostLkeClustersClusterIdPoolsPoolIdRecycleMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/pools/:poolId/recycle', 'POST'] as const
}

export function getPostLkeClustersClusterIdPoolsPoolIdRecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdPoolsPoolIdRecycleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
      >,
    ) {
      return parseResponse(
        client.lke.clusters[':clusterId'].pools[':poolId'].recycle.$post(args, options),
      )
    },
  })
}

export function usePostLkeClustersClusterIdPoolsPoolIdRecycle<
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
                ReturnType<
                  (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersClusterIdPoolsPoolIdRecycleMutationOptions<
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

export function getPostLkeClustersClusterIdRecycleMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/recycle', 'POST'] as const
}

export function getPostLkeClustersClusterIdRecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdRecycleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].recycle.$post(args, options))
    },
  })
}

export function usePostLkeClustersClusterIdRecycle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersClusterIdRecycleMutationOptions<
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

export function getPostLkeClustersClusterIdRegenerateMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/regenerate', 'POST'] as const
}

export function getPostLkeClustersClusterIdRegenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLkeClustersClusterIdRegenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].regenerate.$post(args, options))
    },
  })
}

export function usePostLkeClustersClusterIdRegenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLkeClustersClusterIdRegenerateMutationOptions<
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

export function getDeleteLkeClustersClusterIdServicetokenMutationKey() {
  return ['lke', '/lke/clusters/:clusterId/servicetoken', 'DELETE'] as const
}

export function getDeleteLkeClustersClusterIdServicetokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLkeClustersClusterIdServicetokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>,
    ) {
      return parseResponse(client.lke.clusters[':clusterId'].servicetoken.$delete(args, options))
    },
  })
}

export function useDeleteLkeClustersClusterIdServicetoken<
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
                ReturnType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLkeClustersClusterIdServicetokenMutationOptions<
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

export function getLkeVersionsQueryKey() {
  return ['lke', '/lke/versions'] as const
}

export function getLkeVersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLkeVersionsQueryKey>
  >({
    queryKey: getLkeVersionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.versions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLkeVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLkeVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLkeVersionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLkeVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lke.versions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLkeVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLkeVersionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLkeVersionsVersionQueryKey(
  args: InferRequestType<(typeof client.lke.versions)[':version']['$get']>,
) {
  return ['lke', '/lke/versions/:version', args] as const
}

export function getLkeVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.versions)[':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLkeVersionsVersionQueryKey>
  >({
    queryKey: getLkeVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lke.versions[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLkeVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.versions)[':version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeVersionsVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLkeVersionsVersionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLkeVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lke.versions)[':version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lke.versions)[':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLkeVersionsVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLkeVersionsVersionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLongviewClientsQueryKey(
  args: InferRequestType<typeof client.longview.clients.$get>,
) {
  return ['longview', '/longview/clients', args] as const
}

export function getLongviewClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.longview.clients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewClientsQueryKey>
  >({
    queryKey: getLongviewClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.longview.clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLongviewClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.longview.clients.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLongviewClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLongviewClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.longview.clients.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLongviewClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLongviewClientsMutationKey() {
  return ['longview', '/longview/clients', 'POST'] as const
}

export function getPostLongviewClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.longview.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLongviewClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.longview.clients.$post>) {
      return parseResponse(client.longview.clients.$post(args, options))
    },
  })
}

export function usePostLongviewClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.longview.clients.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.longview.clients.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLongviewClientsMutationOptions<TError, TOnMutateResult>(
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

export function getLongviewClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>,
) {
  return ['longview', '/longview/clients/:clientId', args] as const
}

export function getLongviewClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewClientsClientIdQueryKey>
  >({
    queryKey: getLongviewClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.longview.clients[':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLongviewClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewClientsClientIdQueryKey>
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
      ...getLongviewClientsClientIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLongviewClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewClientsClientIdQueryKey>
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
      ...getLongviewClientsClientIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutLongviewClientsClientIdMutationKey() {
  return ['longview', '/longview/clients/:clientId', 'PUT'] as const
}

export function getPutLongviewClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.longview.clients)[':clientId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLongviewClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.longview.clients)[':clientId']['$put']>,
    ) {
      return parseResponse(client.longview.clients[':clientId'].$put(args, options))
    },
  })
}

export function usePutLongviewClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.longview.clients)[':clientId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLongviewClientsClientIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLongviewClientsClientIdMutationKey() {
  return ['longview', '/longview/clients/:clientId', 'DELETE'] as const
}

export function getDeleteLongviewClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.longview.clients)[':clientId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLongviewClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.longview.clients)[':clientId']['$delete']>,
    ) {
      return parseResponse(client.longview.clients[':clientId'].$delete(args, options))
    },
  })
}

export function useDeleteLongviewClientsClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.longview.clients)[':clientId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.longview.clients)[':clientId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLongviewClientsClientIdMutationOptions<TError, TOnMutateResult>(
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

export function getLongviewPlanQueryKey() {
  return ['longview', '/longview/plan'] as const
}

export function getLongviewPlanQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewPlanQueryKey>
  >({
    queryKey: getLongviewPlanQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.longview.plan.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLongviewPlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewPlanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLongviewPlanQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLongviewPlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewPlanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLongviewPlanQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutLongviewPlanMutationKey() {
  return ['longview', '/longview/plan', 'PUT'] as const
}

export function getPutLongviewPlanMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.longview.plan.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutLongviewPlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.longview.plan.$put>) {
      return parseResponse(client.longview.plan.$put(args, options))
    },
  })
}

export function usePutLongviewPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.plan.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.longview.plan.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLongviewPlanMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLongviewSubscriptionsQueryKey(
  args: InferRequestType<typeof client.longview.subscriptions.$get>,
) {
  return ['longview', '/longview/subscriptions', args] as const
}

export function getLongviewSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.longview.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewSubscriptionsQueryKey>
  >({
    queryKey: getLongviewSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.longview.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLongviewSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.longview.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewSubscriptionsQueryKey>
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
      ...getLongviewSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLongviewSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.longview.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.longview.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewSubscriptionsQueryKey>
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
      ...getLongviewSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLongviewSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['longview', '/longview/subscriptions/:subscriptionId', args] as const
}

export function getLongviewSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLongviewSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getLongviewSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.longview.subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLongviewSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewSubscriptionsSubscriptionIdQueryKey>
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
      ...getLongviewSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLongviewSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLongviewSubscriptionsSubscriptionIdQueryKey>
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
      ...getLongviewSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getManagedContactsQueryKey(
  args: InferRequestType<typeof client.managed.contacts.$get>,
) {
  return ['managed', '/managed/contacts', args] as const
}

export function getManagedContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.managed.contacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedContactsQueryKey>
  >({
    queryKey: getManagedContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.contacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useManagedContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.managed.contacts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagedContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagedContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.managed.contacts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagedContactsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostManagedContactsMutationKey() {
  return ['managed', '/managed/contacts', 'POST'] as const
}

export function getPostManagedContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.managed.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.managed.contacts.$post>) {
      return parseResponse(client.managed.contacts.$post(args, options))
    },
  })
}

export function usePostManagedContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.managed.contacts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.managed.contacts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedContactsMutationOptions<TError, TOnMutateResult>(
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

export function getManagedContactsContactIdQueryKey(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>,
) {
  return ['managed', '/managed/contacts/:contactId', args] as const
}

export function getManagedContactsContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedContactsContactIdQueryKey>
  >({
    queryKey: getManagedContactsContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.contacts[':contactId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useManagedContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedContactsContactIdQueryKey>
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
      ...getManagedContactsContactIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagedContactsContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedContactsContactIdQueryKey>
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
      ...getManagedContactsContactIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutManagedContactsContactIdMutationKey() {
  return ['managed', '/managed/contacts/:contactId', 'PUT'] as const
}

export function getPutManagedContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.contacts)[':contactId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutManagedContactsContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$put']>,
    ) {
      return parseResponse(client.managed.contacts[':contactId'].$put(args, options))
    },
  })
}

export function usePutManagedContactsContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed.contacts)[':contactId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutManagedContactsContactIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteManagedContactsContactIdMutationKey() {
  return ['managed', '/managed/contacts/:contactId', 'DELETE'] as const
}

export function getDeleteManagedContactsContactIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.contacts)[':contactId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteManagedContactsContactIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$delete']>,
    ) {
      return parseResponse(client.managed.contacts[':contactId'].$delete(args, options))
    },
  })
}

export function useDeleteManagedContactsContactId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.contacts)[':contactId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed.contacts)[':contactId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteManagedContactsContactIdMutationOptions<
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

export function getManagedCredentialsQueryKey(
  args: InferRequestType<typeof client.managed.credentials.$get>,
) {
  return ['managed', '/managed/credentials', args] as const
}

export function getManagedCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.managed.credentials.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedCredentialsQueryKey>
  >({
    queryKey: getManagedCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.credentials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useManagedCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.managed.credentials.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagedCredentialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagedCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.managed.credentials.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagedCredentialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostManagedCredentialsMutationKey() {
  return ['managed', '/managed/credentials', 'POST'] as const
}

export function getPostManagedCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.managed.credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.managed.credentials.$post>) {
      return parseResponse(client.managed.credentials.$post(args, options))
    },
  })
}

export function usePostManagedCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.managed.credentials.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedCredentialsMutationOptions<TError, TOnMutateResult>(
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

export function getManagedCredentialsSshkeyQueryKey() {
  return ['managed', '/managed/credentials/sshkey'] as const
}

export function getManagedCredentialsSshkeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedCredentialsSshkeyQueryKey>
  >({
    queryKey: getManagedCredentialsSshkeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.credentials.sshkey.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useManagedCredentialsSshkey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedCredentialsSshkeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagedCredentialsSshkeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagedCredentialsSshkey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.managed.credentials.sshkey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedCredentialsSshkeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagedCredentialsSshkeyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getManagedCredentialsCredentialIdQueryKey(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>,
) {
  return ['managed', '/managed/credentials/:credentialId', args] as const
}

export function getManagedCredentialsCredentialIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedCredentialsCredentialIdQueryKey>
  >({
    queryKey: getManagedCredentialsCredentialIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.credentials[':credentialId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useManagedCredentialsCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedCredentialsCredentialIdQueryKey>
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
      ...getManagedCredentialsCredentialIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagedCredentialsCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedCredentialsCredentialIdQueryKey>
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
      ...getManagedCredentialsCredentialIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutManagedCredentialsCredentialIdMutationKey() {
  return ['managed', '/managed/credentials/:credentialId', 'PUT'] as const
}

export function getPutManagedCredentialsCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutManagedCredentialsCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$put']>,
    ) {
      return parseResponse(client.managed.credentials[':credentialId'].$put(args, options))
    },
  })
}

export function usePutManagedCredentialsCredentialId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.credentials)[':credentialId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed.credentials)[':credentialId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutManagedCredentialsCredentialIdMutationOptions<
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

export function getPostManagedCredentialsCredentialIdRevokeMutationKey() {
  return ['managed', '/managed/credentials/:credentialId/revoke', 'POST'] as const
}

export function getPostManagedCredentialsCredentialIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedCredentialsCredentialIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.managed.credentials)[':credentialId']['revoke']['$post']
      >,
    ) {
      return parseResponse(client.managed.credentials[':credentialId'].revoke.$post(args, options))
    },
  })
}

export function usePostManagedCredentialsCredentialIdRevoke<
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
                ReturnType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedCredentialsCredentialIdRevokeMutationOptions<
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

export function getPostManagedCredentialsCredentialIdUpdateMutationKey() {
  return ['managed', '/managed/credentials/:credentialId/update', 'POST'] as const
}

export function getPostManagedCredentialsCredentialIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedCredentialsCredentialIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.managed.credentials)[':credentialId']['update']['$post']
      >,
    ) {
      return parseResponse(client.managed.credentials[':credentialId'].update.$post(args, options))
    },
  })
}

export function usePostManagedCredentialsCredentialIdUpdate<
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
                ReturnType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedCredentialsCredentialIdUpdateMutationOptions<
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

export function getManagedIssuesQueryKey(
  args: InferRequestType<typeof client.managed.issues.$get>,
) {
  return ['managed', '/managed/issues', args] as const
}

export function getManagedIssuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.managed.issues.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedIssuesQueryKey>
  >({
    queryKey: getManagedIssuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.issues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useManagedIssues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.managed.issues.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedIssuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagedIssuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagedIssues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.managed.issues.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.issues.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedIssuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagedIssuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getManagedIssuesIssueIdQueryKey(
  args: InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>,
) {
  return ['managed', '/managed/issues/:issueId', args] as const
}

export function getManagedIssuesIssueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedIssuesIssueIdQueryKey>
  >({
    queryKey: getManagedIssuesIssueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.issues[':issueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useManagedIssuesIssueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedIssuesIssueIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagedIssuesIssueIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagedIssuesIssueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.issues)[':issueId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedIssuesIssueIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagedIssuesIssueIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getManagedLinodeSettingsQueryKey(
  args: InferRequestType<(typeof client.managed)['linode-settings']['$get']>,
) {
  return ['managed', '/managed/linode-settings', args] as const
}

export function getManagedLinodeSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed)['linode-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedLinodeSettingsQueryKey>
  >({
    queryKey: getManagedLinodeSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed['linode-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useManagedLinodeSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed)['linode-settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedLinodeSettingsQueryKey>
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
      ...getManagedLinodeSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagedLinodeSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed)['linode-settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed)['linode-settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedLinodeSettingsQueryKey>
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
      ...getManagedLinodeSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getManagedLinodeSettingsLinodeIdQueryKey(
  args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>,
) {
  return ['managed', '/managed/linode-settings/:linodeId', args] as const
}

export function getManagedLinodeSettingsLinodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedLinodeSettingsLinodeIdQueryKey>
  >({
    queryKey: getManagedLinodeSettingsLinodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed['linode-settings'][':linodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useManagedLinodeSettingsLinodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedLinodeSettingsLinodeIdQueryKey>
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
      ...getManagedLinodeSettingsLinodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagedLinodeSettingsLinodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedLinodeSettingsLinodeIdQueryKey>
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
      ...getManagedLinodeSettingsLinodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutManagedLinodeSettingsLinodeIdMutationKey() {
  return ['managed', '/managed/linode-settings/:linodeId', 'PUT'] as const
}

export function getPutManagedLinodeSettingsLinodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutManagedLinodeSettingsLinodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>,
    ) {
      return parseResponse(client.managed['linode-settings'][':linodeId'].$put(args, options))
    },
  })
}

export function usePutManagedLinodeSettingsLinodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutManagedLinodeSettingsLinodeIdMutationOptions<
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

export function getManagedServicesQueryKey() {
  return ['managed', '/managed/services'] as const
}

export function getManagedServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedServicesQueryKey>
  >({
    queryKey: getManagedServicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.services.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useManagedServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagedServicesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagedServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagedServicesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostManagedServicesMutationKey() {
  return ['managed', '/managed/services', 'POST'] as const
}

export function getPostManagedServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.managed.services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.managed.services.$post>) {
      return parseResponse(client.managed.services.$post(args, options))
    },
  })
}

export function usePostManagedServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.managed.services.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.managed.services.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedServicesMutationOptions<TError, TOnMutateResult>(
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

export function getManagedServicesServiceIdQueryKey(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>,
) {
  return ['managed', '/managed/services/:serviceId', args] as const
}

export function getManagedServicesServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagedServicesServiceIdQueryKey>
  >({
    queryKey: getManagedServicesServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.services[':serviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useManagedServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedServicesServiceIdQueryKey>
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
      ...getManagedServicesServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagedServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagedServicesServiceIdQueryKey>
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
      ...getManagedServicesServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutManagedServicesServiceIdMutationKey() {
  return ['managed', '/managed/services/:serviceId', 'PUT'] as const
}

export function getPutManagedServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.services)[':serviceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutManagedServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.services)[':serviceId']['$put']>,
    ) {
      return parseResponse(client.managed.services[':serviceId'].$put(args, options))
    },
  })
}

export function usePutManagedServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed.services)[':serviceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutManagedServicesServiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteManagedServicesServiceIdMutationKey() {
  return ['managed', '/managed/services/:serviceId', 'DELETE'] as const
}

export function getDeleteManagedServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.services)[':serviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteManagedServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.services)[':serviceId']['$delete']>,
    ) {
      return parseResponse(client.managed.services[':serviceId'].$delete(args, options))
    },
  })
}

export function useDeleteManagedServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed.services)[':serviceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteManagedServicesServiceIdMutationOptions<
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

export function getPostManagedServicesServiceIdDisableMutationKey() {
  return ['managed', '/managed/services/:serviceId/disable', 'POST'] as const
}

export function getPostManagedServicesServiceIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.services)[':serviceId']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedServicesServiceIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.services)[':serviceId']['disable']['$post']>,
    ) {
      return parseResponse(client.managed.services[':serviceId'].disable.$post(args, options))
    },
  })
}

export function usePostManagedServicesServiceIdDisable<
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
                ReturnType<(typeof client.managed.services)[':serviceId']['disable']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed.services)[':serviceId']['disable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedServicesServiceIdDisableMutationOptions<
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

export function getPostManagedServicesServiceIdEnableMutationKey() {
  return ['managed', '/managed/services/:serviceId/enable', 'POST'] as const
}

export function getPostManagedServicesServiceIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.managed.services)[':serviceId']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagedServicesServiceIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.managed.services)[':serviceId']['enable']['$post']>,
    ) {
      return parseResponse(client.managed.services[':serviceId'].enable.$post(args, options))
    },
  })
}

export function usePostManagedServicesServiceIdEnable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.managed.services)[':serviceId']['enable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.managed.services)[':serviceId']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagedServicesServiceIdEnableMutationOptions<
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

export function getManagedStatsQueryKey() {
  return ['managed', '/managed/stats'] as const
}

export function getManagedStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagedStatsQueryKey>
  >({
    queryKey: getManagedStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.managed.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useManagedStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagedStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagedStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.managed.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getManagedStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagedStatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNetworkingFirewallsQueryKey(
  args: InferRequestType<typeof client.networking.firewalls.$get>,
) {
  return ['networking', '/networking/firewalls', args] as const
}

export function getNetworkingFirewallsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.networking.firewalls.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsQueryKey>
  >({
    queryKey: getNetworkingFirewallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.firewalls.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetworkingFirewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.firewalls.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworkingFirewallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworkingFirewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.firewalls.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworkingFirewallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNetworkingFirewallsMutationKey() {
  return ['networking', '/networking/firewalls', 'POST'] as const
}

export function getPostNetworkingFirewallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.firewalls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingFirewallsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.firewalls.$post>) {
      return parseResponse(client.networking.firewalls.$post(args, options))
    },
  })
}

export function usePostNetworkingFirewalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.firewalls.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.networking.firewalls.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingFirewallsMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkingFirewallsFirewallIdQueryKey(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>,
) {
  return ['networking', '/networking/firewalls/:firewallId', args] as const
}

export function getNetworkingFirewallsFirewallIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsFirewallIdQueryKey>
  >({
    queryKey: getNetworkingFirewallsFirewallIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNetworkingFirewallsFirewallId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsFirewallIdQueryKey>
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
      ...getNetworkingFirewallsFirewallIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNetworkingFirewallsFirewallId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsFirewallIdQueryKey>
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
      ...getNetworkingFirewallsFirewallIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutNetworkingFirewallsFirewallIdMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId', 'PUT'] as const
}

export function getPutNetworkingFirewallsFirewallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkingFirewallsFirewallIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$put']>,
    ) {
      return parseResponse(client.networking.firewalls[':firewallId'].$put(args, options))
    },
  })
}

export function usePutNetworkingFirewallsFirewallId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworkingFirewallsFirewallIdMutationOptions<
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

export function getDeleteNetworkingFirewallsFirewallIdMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId', 'DELETE'] as const
}

export function getDeleteNetworkingFirewallsFirewallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkingFirewallsFirewallIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$delete']>,
    ) {
      return parseResponse(client.networking.firewalls[':firewallId'].$delete(args, options))
    },
  })
}

export function useDeleteNetworkingFirewallsFirewallId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkingFirewallsFirewallIdMutationOptions<
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

export function getNetworkingFirewallsFirewallIdDevicesQueryKey(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>,
) {
  return ['networking', '/networking/firewalls/:firewallId/devices', args] as const
}

export function getNetworkingFirewallsFirewallIdDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesQueryKey>
  >({
    queryKey: getNetworkingFirewallsFirewallIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNetworkingFirewallsFirewallIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesQueryKey>
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
      ...getNetworkingFirewallsFirewallIdDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNetworkingFirewallsFirewallIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesQueryKey>
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
      ...getNetworkingFirewallsFirewallIdDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNetworkingFirewallsFirewallIdDevicesMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId/devices', 'POST'] as const
}

export function getPostNetworkingFirewallsFirewallIdDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingFirewallsFirewallIdDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networking.firewalls)[':firewallId']['devices']['$post']
      >,
    ) {
      return parseResponse(client.networking.firewalls[':firewallId'].devices.$post(args, options))
    },
  })
}

export function usePostNetworkingFirewallsFirewallIdDevices<
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
                ReturnType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingFirewallsFirewallIdDevicesMutationOptions<
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

export function getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey(
  args: InferRequestType<
    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
  >,
) {
  return ['networking', '/networking/firewalls/:firewallId/devices/:deviceId', args] as const
}

export function getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey>
  >({
    queryKey: getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].devices[':deviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNetworkingFirewallsFirewallIdDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey>
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
      ...getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNetworkingFirewallsFirewallIdDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryKey>
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
      ...getNetworkingFirewallsFirewallIdDevicesDeviceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId/devices/:deviceId', 'DELETE'] as const
}

export function getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].devices[':deviceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworkingFirewallsFirewallIdDevicesDeviceId<
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
                ReturnType<
                  (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkingFirewallsFirewallIdDevicesDeviceIdMutationOptions<
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

export function getNetworkingFirewallsFirewallIdRulesQueryKey(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>,
) {
  return ['networking', '/networking/firewalls/:firewallId/rules', args] as const
}

export function getNetworkingFirewallsFirewallIdRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingFirewallsFirewallIdRulesQueryKey>
  >({
    queryKey: getNetworkingFirewallsFirewallIdRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.firewalls[':firewallId'].rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNetworkingFirewallsFirewallIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsFirewallIdRulesQueryKey>
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
      ...getNetworkingFirewallsFirewallIdRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNetworkingFirewallsFirewallIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingFirewallsFirewallIdRulesQueryKey>
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
      ...getNetworkingFirewallsFirewallIdRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutNetworkingFirewallsFirewallIdRulesMutationKey() {
  return ['networking', '/networking/firewalls/:firewallId/rules', 'PUT'] as const
}

export function getPutNetworkingFirewallsFirewallIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkingFirewallsFirewallIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>,
    ) {
      return parseResponse(client.networking.firewalls[':firewallId'].rules.$put(args, options))
    },
  })
}

export function usePutNetworkingFirewallsFirewallIdRules<
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
                ReturnType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworkingFirewallsFirewallIdRulesMutationOptions<
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

export function getNetworkingIpsQueryKey() {
  return ['networking', '/networking/ips'] as const
}

export function getNetworkingIpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpsQueryKey>
  >({
    queryKey: getNetworkingIpsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.ips.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetworkingIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworkingIpsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworkingIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworkingIpsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNetworkingIpsMutationKey() {
  return ['networking', '/networking/ips', 'POST'] as const
}

export function getPostNetworkingIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.networking.ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ips.$post>) {
      return parseResponse(client.networking.ips.$post(args, options))
    },
  })
}

export function usePostNetworkingIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.networking.ips.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpsMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworkingIpsAssignMutationKey() {
  return ['networking', '/networking/ips/assign', 'POST'] as const
}

export function getPostNetworkingIpsAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.assign.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ips.assign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpsAssignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ips.assign.$post>) {
      return parseResponse(client.networking.ips.assign.$post(args, options))
    },
  })
}

export function usePostNetworkingIpsAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.assign.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.networking.ips.assign.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpsAssignMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworkingIpsShareMutationKey() {
  return ['networking', '/networking/ips/share', 'POST'] as const
}

export function getPostNetworkingIpsShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.share.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ips.share.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpsShareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ips.share.$post>) {
      return parseResponse(client.networking.ips.share.$post(args, options))
    },
  })
}

export function usePostNetworkingIpsShare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.ips.share.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.networking.ips.share.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpsShareMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkingIpsAddressQueryKey(
  args: InferRequestType<(typeof client.networking.ips)[':address']['$get']>,
) {
  return ['networking', '/networking/ips/:address', args] as const
}

export function getNetworkingIpsAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.ips)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpsAddressQueryKey>
  >({
    queryKey: getNetworkingIpsAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.ips[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNetworkingIpsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.ips)[':address']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpsAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworkingIpsAddressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworkingIpsAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.ips)[':address']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.ips)[':address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpsAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworkingIpsAddressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutNetworkingIpsAddressMutationKey() {
  return ['networking', '/networking/ips/:address', 'PUT'] as const
}

export function getPutNetworkingIpsAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.ips)[':address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.ips)[':address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkingIpsAddressMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.networking.ips)[':address']['$put']>) {
      return parseResponse(client.networking.ips[':address'].$put(args, options))
    },
  })
}

export function usePutNetworkingIpsAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.ips)[':address']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networking.ips)[':address']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworkingIpsAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworkingIpv4AssignMutationKey() {
  return ['networking', '/networking/ipv4/assign', 'POST'] as const
}

export function getPostNetworkingIpv4AssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.assign.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ipv4.assign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpv4AssignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ipv4.assign.$post>) {
      return parseResponse(client.networking.ipv4.assign.$post(args, options))
    },
  })
}

export function usePostNetworkingIpv4Assign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.assign.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.networking.ipv4.assign.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpv4AssignMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworkingIpv4ShareMutationKey() {
  return ['networking', '/networking/ipv4/share', 'POST'] as const
}

export function getPostNetworkingIpv4ShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.share.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ipv4.share.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpv4ShareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ipv4.share.$post>) {
      return parseResponse(client.networking.ipv4.share.$post(args, options))
    },
  })
}

export function usePostNetworkingIpv4Share<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv4.share.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.networking.ipv4.share.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpv4ShareMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkingIpv6PoolsQueryKey(
  args: InferRequestType<typeof client.networking.ipv6.pools.$get>,
) {
  return ['networking', '/networking/ipv6/pools', args] as const
}

export function getNetworkingIpv6PoolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.ipv6.pools.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpv6PoolsQueryKey>
  >({
    queryKey: getNetworkingIpv6PoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.ipv6.pools.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetworkingIpv6Pools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.ipv6.pools.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpv6PoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworkingIpv6PoolsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworkingIpv6Pools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.ipv6.pools.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.pools.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpv6PoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworkingIpv6PoolsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNetworkingIpv6RangesQueryKey(
  args: InferRequestType<typeof client.networking.ipv6.ranges.$get>,
) {
  return ['networking', '/networking/ipv6/ranges', args] as const
}

export function getNetworkingIpv6RangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.ipv6.ranges.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpv6RangesQueryKey>
  >({
    queryKey: getNetworkingIpv6RangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.ipv6.ranges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNetworkingIpv6Ranges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.ipv6.ranges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpv6RangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworkingIpv6RangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworkingIpv6Ranges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.ipv6.ranges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpv6RangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworkingIpv6RangesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNetworkingIpv6RangesMutationKey() {
  return ['networking', '/networking/ipv6/ranges', 'POST'] as const
}

export function getPostNetworkingIpv6RangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.networking.ipv6.ranges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkingIpv6RangesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networking.ipv6.ranges.$post>) {
      return parseResponse(client.networking.ipv6.ranges.$post(args, options))
    },
  })
}

export function usePostNetworkingIpv6Ranges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.networking.ipv6.ranges.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.networking.ipv6.ranges.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkingIpv6RangesMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkingIpv6RangesRangeQueryKey(
  args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>,
) {
  return ['networking', '/networking/ipv6/ranges/:range', args] as const
}

export function getNetworkingIpv6RangesRangeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingIpv6RangesRangeQueryKey>
  >({
    queryKey: getNetworkingIpv6RangesRangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.ipv6.ranges[':range'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNetworkingIpv6RangesRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpv6RangesRangeQueryKey>
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
      ...getNetworkingIpv6RangesRangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNetworkingIpv6RangesRange<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingIpv6RangesRangeQueryKey>
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
      ...getNetworkingIpv6RangesRangeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteNetworkingIpv6RangesRangeMutationKey() {
  return ['networking', '/networking/ipv6/ranges/:range', 'DELETE'] as const
}

export function getDeleteNetworkingIpv6RangesRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkingIpv6RangesRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>,
    ) {
      return parseResponse(client.networking.ipv6.ranges[':range'].$delete(args, options))
    },
  })
}

export function useDeleteNetworkingIpv6RangesRange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkingIpv6RangesRangeMutationOptions<
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

export function getNetworkingVlansQueryKey(
  args: InferRequestType<typeof client.networking.vlans.$get>,
) {
  return ['networking', '/networking/vlans', args] as const
}

export function getNetworkingVlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.networking.vlans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkingVlansQueryKey>
  >({
    queryKey: getNetworkingVlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networking.vlans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetworkingVlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.vlans.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingVlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworkingVlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworkingVlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networking.vlans.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networking.vlans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkingVlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworkingVlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNodebalancersQueryKey(args: InferRequestType<typeof client.nodebalancers.$get>) {
  return ['nodebalancers', '/nodebalancers', args] as const
}

export function getNodebalancersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nodebalancers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersQueryKey>
  >({
    queryKey: getNodebalancersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodebalancers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNodebalancers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodebalancers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodebalancersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodebalancers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodebalancers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodebalancersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNodebalancersMutationKey() {
  return ['nodebalancers', '/nodebalancers', 'POST'] as const
}

export function getPostNodebalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nodebalancers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNodebalancersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nodebalancers.$post>) {
      return parseResponse(client.nodebalancers.$post(args, options))
    },
  })
}

export function usePostNodebalancers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodebalancers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.nodebalancers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodebalancersMutationOptions<TError, TOnMutateResult>(
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

export function getNodebalancersNodeBalancerIdQueryKey(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId', args] as const
}

export function getNodebalancersNodeBalancerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdQueryKey>
  >({
    queryKey: getNodebalancersNodeBalancerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNodebalancersNodeBalancerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdQueryKey>
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
      ...getNodebalancersNodeBalancerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodebalancersNodeBalancerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdQueryKey>
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
      ...getNodebalancersNodeBalancerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutNodebalancersNodeBalancerIdMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId', 'PUT'] as const
}

export function getPutNodebalancersNodeBalancerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNodebalancersNodeBalancerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>,
    ) {
      return parseResponse(client.nodebalancers[':nodeBalancerId'].$put(args, options))
    },
  })
}

export function usePutNodebalancersNodeBalancerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNodebalancersNodeBalancerIdMutationOptions<
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

export function getDeleteNodebalancersNodeBalancerIdMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId', 'DELETE'] as const
}

export function getDeleteNodebalancersNodeBalancerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodebalancersNodeBalancerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>,
    ) {
      return parseResponse(client.nodebalancers[':nodeBalancerId'].$delete(args, options))
    },
  })
}

export function useDeleteNodebalancersNodeBalancerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNodebalancersNodeBalancerIdMutationOptions<
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

export function getNodebalancersNodeBalancerIdConfigsQueryKey(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs', args] as const
}

export function getNodebalancersNodeBalancerIdConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdConfigsQueryKey>
  >({
    queryKey: getNodebalancersNodeBalancerIdConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNodebalancersNodeBalancerIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdConfigsQueryKey>
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
      ...getNodebalancersNodeBalancerIdConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodebalancersNodeBalancerIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdConfigsQueryKey>
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
      ...getNodebalancersNodeBalancerIdConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNodebalancersNodeBalancerIdConfigsMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs', 'POST'] as const
}

export function getPostNodebalancersNodeBalancerIdConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodebalancersNodeBalancerIdConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>,
    ) {
      return parseResponse(client.nodebalancers[':nodeBalancerId'].configs.$post(args, options))
    },
  })
}

export function usePostNodebalancersNodeBalancerIdConfigs<
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
                ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodebalancersNodeBalancerIdConfigsMutationOptions<
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

export function getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
  >,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId', args] as const
}

export function getNodebalancersNodeBalancerIdConfigsConfigIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey>
  >({
    queryKey: getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNodebalancersNodeBalancerIdConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey>
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
      ...getNodebalancersNodeBalancerIdConfigsConfigIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodebalancersNodeBalancerIdConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdQueryKey>
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
      ...getNodebalancersNodeBalancerIdConfigsConfigIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId', 'PUT'] as const
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNodebalancersNodeBalancerIdConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].$put(args, options),
      )
    },
  })
}

export function usePutNodebalancersNodeBalancerIdConfigsConfigId<
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
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNodebalancersNodeBalancerIdConfigsConfigIdMutationOptions<
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

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdMutationKey() {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId', 'DELETE'] as const
}

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodebalancersNodeBalancerIdConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNodebalancersNodeBalancerIdConfigsConfigId<
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
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNodebalancersNodeBalancerIdConfigsConfigIdMutationOptions<
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

export function getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/configs/:configId/nodes', args] as const
}

export function getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey>
  >({
    queryKey: getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNodebalancersNodeBalancerIdConfigsConfigIdNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey>
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
      ...getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodebalancersNodeBalancerIdConfigsConfigIdNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryKey>
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
      ...getNodebalancersNodeBalancerIdConfigsConfigIdNodesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesMutationKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes',
    'POST',
  ] as const
}

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$post(args, options),
      )
    },
  })
}

export function usePostNodebalancersNodeBalancerIdConfigsConfigIdNodes<
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
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodebalancersNodeBalancerIdConfigsConfigIdNodesMutationOptions<
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

export function getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
) {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    args,
  ] as const
}

export function getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey>
  >({
    queryKey: getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey>
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
      ...getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryKey>
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
      ...getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    'PUT',
  ] as const
}

export function getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
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
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationOptions<
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

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId',
    'DELETE',
  ] as const
}

export function getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId<
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
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdMutationOptions<
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

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildMutationKey() {
  return [
    'nodebalancers',
    '/nodebalancers/:nodeBalancerId/configs/:configId/rebuild',
    'POST',
  ] as const
}

export function getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
      >,
    ) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].configs[':configId'].rebuild.$post(args, options),
      )
    },
  })
}

export function usePostNodebalancersNodeBalancerIdConfigsConfigIdRebuild<
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
                ReturnType<
                  (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodebalancersNodeBalancerIdConfigsConfigIdRebuildMutationOptions<
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

export function getNodebalancersNodeBalancerIdStatsQueryKey(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>,
) {
  return ['nodebalancers', '/nodebalancers/:nodeBalancerId/stats', args] as const
}

export function getNodebalancersNodeBalancerIdStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodebalancersNodeBalancerIdStatsQueryKey>
  >({
    queryKey: getNodebalancersNodeBalancerIdStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodebalancers[':nodeBalancerId'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNodebalancersNodeBalancerIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdStatsQueryKey>
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
      ...getNodebalancersNodeBalancerIdStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodebalancersNodeBalancerIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodebalancersNodeBalancerIdStatsQueryKey>
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
      ...getNodebalancersNodeBalancerIdStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getObjectStorageBucketsQueryKey() {
  return ['object-storage', '/object-storage/buckets'] as const
}

export function getObjectStorageBucketsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsQueryKey>
  >({
    queryKey: getObjectStorageBucketsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].buckets.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageBuckets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getObjectStorageBucketsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseObjectStorageBuckets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getObjectStorageBucketsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostObjectStorageBucketsMutationKey() {
  return ['object-storage', '/object-storage/buckets', 'POST'] as const
}

export function getPostObjectStorageBucketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['object-storage']['buckets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageBucketsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['object-storage']['buckets']['$post']>,
    ) {
      return parseResponse(client['object-storage'].buckets.$post(args, options))
    },
  })
}

export function usePostObjectStorageBuckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['buckets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['object-storage']['buckets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectStorageBucketsMutationOptions<TError, TOnMutateResult>(
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

export function getObjectStorageBucketsClusterIdQueryKey(
  args: InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId', args] as const
}

export function getObjectStorageBucketsClusterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdQueryKey>
  >({
    queryKey: getObjectStorageBucketsClusterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageBucketsClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdQueryKey>
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
      ...getObjectStorageBucketsClusterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseObjectStorageBucketsClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdQueryKey>
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
      ...getObjectStorageBucketsClusterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getObjectStorageBucketsClusterIdBucketQueryKey(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket', args] as const
}

export function getObjectStorageBucketsClusterIdBucketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdBucketQueryKey>
  >({
    queryKey: getObjectStorageBucketsClusterIdBucketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageBucketsClusterIdBucket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdBucketQueryKey>
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
      ...getObjectStorageBucketsClusterIdBucketQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseObjectStorageBucketsClusterIdBucket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdBucketQueryKey>
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
      ...getObjectStorageBucketsClusterIdBucketQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteObjectStorageBucketsClusterIdBucketMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket', 'DELETE'] as const
}

export function getDeleteObjectStorageBucketsClusterIdBucketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteObjectStorageBucketsClusterIdBucketMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].$delete(args, options),
      )
    },
  })
}

export function useDeleteObjectStorageBucketsClusterIdBucket<
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
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteObjectStorageBucketsClusterIdBucketMutationOptions<
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

export function getPutObjectStorageBucketsClusterIdBucketAccessMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/access', 'PUT'] as const
}

export function getPutObjectStorageBucketsClusterIdBucketAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutObjectStorageBucketsClusterIdBucketAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].access.$put(args, options),
      )
    },
  })
}

export function usePutObjectStorageBucketsClusterIdBucketAccess<
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
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutObjectStorageBucketsClusterIdBucketAccessMutationOptions<
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

export function getPostObjectStorageBucketsClusterIdBucketAccessMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/access', 'POST'] as const
}

export function getPostObjectStorageBucketsClusterIdBucketAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageBucketsClusterIdBucketAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].access.$post(args, options),
      )
    },
  })
}

export function usePostObjectStorageBucketsClusterIdBucketAccess<
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
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectStorageBucketsClusterIdBucketAccessMutationOptions<
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

export function getObjectStorageBucketsClusterIdBucketObjectAclQueryKey(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/object-acl', args] as const
}

export function getObjectStorageBucketsClusterIdBucketObjectAclQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectAclQueryKey>
  >({
    queryKey: getObjectStorageBucketsClusterIdBucketObjectAclQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageBucketsClusterIdBucketObjectAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectAclQueryKey>
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
      ...getObjectStorageBucketsClusterIdBucketObjectAclQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseObjectStorageBucketsClusterIdBucketObjectAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectAclQueryKey>
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
      ...getObjectStorageBucketsClusterIdBucketObjectAclQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutObjectStorageBucketsClusterIdBucketObjectAclMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/object-acl', 'PUT'] as const
}

export function getPutObjectStorageBucketsClusterIdBucketObjectAclMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutObjectStorageBucketsClusterIdBucketObjectAclMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$put(args, options),
      )
    },
  })
}

export function usePutObjectStorageBucketsClusterIdBucketObjectAcl<
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
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutObjectStorageBucketsClusterIdBucketObjectAclMutationOptions<
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

export function getObjectStorageBucketsClusterIdBucketObjectListQueryKey(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/object-list', args] as const
}

export function getObjectStorageBucketsClusterIdBucketObjectListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectListQueryKey>
  >({
    queryKey: getObjectStorageBucketsClusterIdBucketObjectListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket']['object-list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageBucketsClusterIdBucketObjectList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectListQueryKey>
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
      ...getObjectStorageBucketsClusterIdBucketObjectListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseObjectStorageBucketsClusterIdBucketObjectList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdBucketObjectListQueryKey>
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
      ...getObjectStorageBucketsClusterIdBucketObjectListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostObjectStorageBucketsClusterIdBucketObjectUrlMutationKey() {
  return [
    'object-storage',
    '/object-storage/buckets/:clusterId/:bucket/object-url',
    'POST',
  ] as const
}

export function getPostObjectStorageBucketsClusterIdBucketObjectUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageBucketsClusterIdBucketObjectUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket']['object-url'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostObjectStorageBucketsClusterIdBucketObjectUrl<
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
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectStorageBucketsClusterIdBucketObjectUrlMutationOptions<
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

export function getObjectStorageBucketsClusterIdBucketSslQueryKey(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
  >,
) {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/ssl', args] as const
}

export function getObjectStorageBucketsClusterIdBucketSslQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageBucketsClusterIdBucketSslQueryKey>
  >({
    queryKey: getObjectStorageBucketsClusterIdBucketSslQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageBucketsClusterIdBucketSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdBucketSslQueryKey>
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
      ...getObjectStorageBucketsClusterIdBucketSslQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseObjectStorageBucketsClusterIdBucketSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageBucketsClusterIdBucketSslQueryKey>
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
      ...getObjectStorageBucketsClusterIdBucketSslQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostObjectStorageBucketsClusterIdBucketSslMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/ssl', 'POST'] as const
}

export function getPostObjectStorageBucketsClusterIdBucketSslMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageBucketsClusterIdBucketSslMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$post(args, options),
      )
    },
  })
}

export function usePostObjectStorageBucketsClusterIdBucketSsl<
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
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectStorageBucketsClusterIdBucketSslMutationOptions<
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

export function getDeleteObjectStorageBucketsClusterIdBucketSslMutationKey() {
  return ['object-storage', '/object-storage/buckets/:clusterId/:bucket/ssl', 'DELETE'] as const
}

export function getDeleteObjectStorageBucketsClusterIdBucketSslMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteObjectStorageBucketsClusterIdBucketSslMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
      >,
    ) {
      return parseResponse(
        client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$delete(args, options),
      )
    },
  })
}

export function useDeleteObjectStorageBucketsClusterIdBucketSsl<
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
                ReturnType<
                  (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteObjectStorageBucketsClusterIdBucketSslMutationOptions<
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

export function getPostObjectStorageCancelMutationKey() {
  return ['object-storage', '/object-storage/cancel', 'POST'] as const
}

export function getPostObjectStorageCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['cancel']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageCancelMutationKey(),
    async mutationFn() {
      return parseResponse(client['object-storage'].cancel.$post(undefined, options))
    },
  })
}

export function usePostObjectStorageCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['cancel']['$post']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectStorageCancelMutationOptions<TError, TOnMutateResult>(
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

export function getObjectStorageClustersQueryKey() {
  return ['object-storage', '/object-storage/clusters'] as const
}

export function getObjectStorageClustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageClustersQueryKey>
  >({
    queryKey: getObjectStorageClustersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].clusters.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getObjectStorageClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseObjectStorageClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['clusters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getObjectStorageClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getObjectStorageClustersClusterIdQueryKey(
  args: InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>,
) {
  return ['object-storage', '/object-storage/clusters/:clusterId', args] as const
}

export function getObjectStorageClustersClusterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageClustersClusterIdQueryKey>
  >({
    queryKey: getObjectStorageClustersClusterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].clusters[':clusterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageClustersClusterIdQueryKey>
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
      ...getObjectStorageClustersClusterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseObjectStorageClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageClustersClusterIdQueryKey>
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
      ...getObjectStorageClustersClusterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getObjectStorageKeysQueryKey() {
  return ['object-storage', '/object-storage/keys'] as const
}

export function getObjectStorageKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageKeysQueryKey>
  >({
    queryKey: getObjectStorageKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].keys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getObjectStorageKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseObjectStorageKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getObjectStorageKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostObjectStorageKeysMutationKey() {
  return ['object-storage', '/object-storage/keys', 'POST'] as const
}

export function getPostObjectStorageKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['object-storage']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectStorageKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['object-storage']['keys']['$post']>) {
      return parseResponse(client['object-storage'].keys.$post(args, options))
    },
  })
}

export function usePostObjectStorageKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['object-storage']['keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectStorageKeysMutationOptions<TError, TOnMutateResult>(
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

export function getObjectStorageKeysKeyIdQueryKey(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>,
) {
  return ['object-storage', '/object-storage/keys/:keyId', args] as const
}

export function getObjectStorageKeysKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageKeysKeyIdQueryKey>
  >({
    queryKey: getObjectStorageKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].keys[':keyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageKeysKeyIdQueryKey>
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
      ...getObjectStorageKeysKeyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseObjectStorageKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageKeysKeyIdQueryKey>
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
      ...getObjectStorageKeysKeyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutObjectStorageKeysKeyIdMutationKey() {
  return ['object-storage', '/object-storage/keys/:keyId', 'PUT'] as const
}

export function getPutObjectStorageKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutObjectStorageKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$put']>,
    ) {
      return parseResponse(client['object-storage'].keys[':keyId'].$put(args, options))
    },
  })
}

export function usePutObjectStorageKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutObjectStorageKeysKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteObjectStorageKeysKeyIdMutationKey() {
  return ['object-storage', '/object-storage/keys/:keyId', 'DELETE'] as const
}

export function getDeleteObjectStorageKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteObjectStorageKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>,
    ) {
      return parseResponse(client['object-storage'].keys[':keyId'].$delete(args, options))
    },
  })
}

export function useDeleteObjectStorageKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteObjectStorageKeysKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getObjectStorageTransferQueryKey() {
  return ['object-storage', '/object-storage/transfer'] as const
}

export function getObjectStorageTransferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStorageTransferQueryKey>
  >({
    queryKey: getObjectStorageTransferQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage'].transfer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useObjectStorageTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageTransferQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getObjectStorageTransferQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseObjectStorageTransfer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['object-storage']['transfer']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getObjectStorageTransferQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getObjectStorageTransferQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProfileQueryKey() {
  return ['profile', '/profile'] as const
}

export function getProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileQueryKey>
  >({
    queryKey: getProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutProfileMutationKey() {
  return ['profile', '/profile', 'PUT'] as const
}

export function getPutProfileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$put>>>>>,
    TError,
    InferRequestType<typeof client.profile.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.$put>) {
      return parseResponse(client.profile.$put(args, options))
    },
  })
}

export function usePutProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$put>>>>>,
        TError,
        InferRequestType<typeof client.profile.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProfileAppsQueryKey(args: InferRequestType<typeof client.profile.apps.$get>) {
  return ['profile', '/profile/apps', args] as const
}

export function getProfileAppsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.profile.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileAppsQueryKey>
  >({
    queryKey: getProfileAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfileApps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.profile.apps.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileApps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.profile.apps.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.apps.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProfileAppsAppIdQueryKey(
  args: InferRequestType<(typeof client.profile.apps)[':appId']['$get']>,
) {
  return ['profile', '/profile/apps/:appId', args] as const
}

export function getProfileAppsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileAppsAppIdQueryKey>
  >({
    queryKey: getProfileAppsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.apps[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProfileAppsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.apps)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileAppsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileAppsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileAppsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.apps)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileAppsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileAppsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteProfileAppsAppIdMutationKey() {
  return ['profile', '/profile/apps/:appId', 'DELETE'] as const
}

export function getDeleteProfileAppsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.apps)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfileAppsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profile.apps)[':appId']['$delete']>) {
      return parseResponse(client.profile.apps[':appId'].$delete(args, options))
    },
  })
}

export function useDeleteProfileAppsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.apps)[':appId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile.apps)[':appId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProfileAppsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getProfileDevicesQueryKey() {
  return ['profile', '/profile/devices'] as const
}

export function getProfileDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileDevicesQueryKey>
  >({
    queryKey: getProfileDevicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.devices.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfileDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileDevicesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileDevicesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProfileDevicesDeviceIdQueryKey(
  args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>,
) {
  return ['profile', '/profile/devices/:deviceId', args] as const
}

export function getProfileDevicesDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileDevicesDeviceIdQueryKey>
  >({
    queryKey: getProfileDevicesDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.devices[':deviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProfileDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileDevicesDeviceIdQueryKey>
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
      ...getProfileDevicesDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProfileDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileDevicesDeviceIdQueryKey>
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
      ...getProfileDevicesDeviceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProfileDevicesDeviceIdMutationKey() {
  return ['profile', '/profile/devices/:deviceId', 'DELETE'] as const
}

export function getDeleteProfileDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.devices)[':deviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfileDevicesDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$delete']>,
    ) {
      return parseResponse(client.profile.devices[':deviceId'].$delete(args, options))
    },
  })
}

export function useDeleteProfileDevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.devices)[':deviceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile.devices)[':deviceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProfileDevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
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

export function getProfileGrantsQueryKey() {
  return ['profile', '/profile/grants'] as const
}

export function getProfileGrantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileGrantsQueryKey>
  >({
    queryKey: getProfileGrantsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.grants.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfileGrants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileGrantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileGrantsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileGrants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.grants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileGrantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileGrantsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProfileLoginsQueryKey() {
  return ['profile', '/profile/logins'] as const
}

export function getProfileLoginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileLoginsQueryKey>
  >({
    queryKey: getProfileLoginsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.logins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfileLogins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileLoginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileLoginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileLogins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.logins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileLoginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileLoginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProfileLoginsLoginIdQueryKey(
  args: InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>,
) {
  return ['profile', '/profile/logins/:loginId', args] as const
}

export function getProfileLoginsLoginIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileLoginsLoginIdQueryKey>
  >({
    queryKey: getProfileLoginsLoginIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.logins[':loginId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProfileLoginsLoginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileLoginsLoginIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileLoginsLoginIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileLoginsLoginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.logins)[':loginId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileLoginsLoginIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileLoginsLoginIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProfilePhoneNumberMutationKey() {
  return ['profile', '/profile/phone-number', 'POST'] as const
}

export function getPostProfilePhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['phone-number']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.profile)['phone-number']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfilePhoneNumberMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profile)['phone-number']['$post']>) {
      return parseResponse(client.profile['phone-number'].$post(args, options))
    },
  })
}

export function usePostProfilePhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile)['phone-number']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile)['phone-number']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfilePhoneNumberMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProfilePhoneNumberMutationKey() {
  return ['profile', '/profile/phone-number', 'DELETE'] as const
}

export function getDeleteProfilePhoneNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['phone-number']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfilePhoneNumberMutationKey(),
    async mutationFn() {
      return parseResponse(client.profile['phone-number'].$delete(undefined, options))
    },
  })
}

export function useDeleteProfilePhoneNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile)['phone-number']['$delete']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProfilePhoneNumberMutationOptions<TError, TOnMutateResult>(
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

export function getPostProfilePhoneNumberVerifyMutationKey() {
  return ['profile', '/profile/phone-number/verify', 'POST'] as const
}

export function getPostProfilePhoneNumberVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['phone-number']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile)['phone-number']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfilePhoneNumberVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile)['phone-number']['verify']['$post']>,
    ) {
      return parseResponse(client.profile['phone-number'].verify.$post(args, options))
    },
  })
}

export function usePostProfilePhoneNumberVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile)['phone-number']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile)['phone-number']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfilePhoneNumberVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getProfilePreferencesQueryKey() {
  return ['profile', '/profile/preferences'] as const
}

export function getProfilePreferencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfilePreferencesQueryKey>
  >({
    queryKey: getProfilePreferencesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.preferences.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProfilePreferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfilePreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfilePreferencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfilePreferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfilePreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfilePreferencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutProfilePreferencesMutationKey() {
  return ['profile', '/profile/preferences', 'PUT'] as const
}

export function getPutProfilePreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.profile.preferences.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutProfilePreferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.preferences.$put>) {
      return parseResponse(client.profile.preferences.$put(args, options))
    },
  })
}

export function usePutProfilePreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.profile.preferences.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.profile.preferences.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProfilePreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getProfileSecurityQuestionsQueryKey() {
  return ['profile', '/profile/security-questions'] as const
}

export function getProfileSecurityQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileSecurityQuestionsQueryKey>
  >({
    queryKey: getProfileSecurityQuestionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profile['security-questions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProfileSecurityQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileSecurityQuestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileSecurityQuestionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileSecurityQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile)['security-questions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileSecurityQuestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileSecurityQuestionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProfileSecurityQuestionsMutationKey() {
  return ['profile', '/profile/security-questions', 'POST'] as const
}

export function getPostProfileSecurityQuestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['security-questions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile)['security-questions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileSecurityQuestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile)['security-questions']['$post']>,
    ) {
      return parseResponse(client.profile['security-questions'].$post(args, options))
    },
  })
}

export function usePostProfileSecurityQuestions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile)['security-questions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile)['security-questions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileSecurityQuestionsMutationOptions<TError, TOnMutateResult>(
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

export function getProfileSshkeysQueryKey(
  args: InferRequestType<typeof client.profile.sshkeys.$get>,
) {
  return ['profile', '/profile/sshkeys', args] as const
}

export function getProfileSshkeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.profile.sshkeys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileSshkeysQueryKey>
  >({
    queryKey: getProfileSshkeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.sshkeys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfileSshkeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.profile.sshkeys.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileSshkeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileSshkeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileSshkeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.profile.sshkeys.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileSshkeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileSshkeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProfileSshkeysMutationKey() {
  return ['profile', '/profile/sshkeys', 'POST'] as const
}

export function getPostProfileSshkeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.profile.sshkeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileSshkeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.sshkeys.$post>) {
      return parseResponse(client.profile.sshkeys.$post(args, options))
    },
  })
}

export function usePostProfileSshkeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.sshkeys.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.profile.sshkeys.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileSshkeysMutationOptions<TError, TOnMutateResult>(
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

export function getProfileSshkeysSshKeyIdQueryKey(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>,
) {
  return ['profile', '/profile/sshkeys/:sshKeyId', args] as const
}

export function getProfileSshkeysSshKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileSshkeysSshKeyIdQueryKey>
  >({
    queryKey: getProfileSshkeysSshKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.sshkeys[':sshKeyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProfileSshkeysSshKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileSshkeysSshKeyIdQueryKey>
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
      ...getProfileSshkeysSshKeyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProfileSshkeysSshKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileSshkeysSshKeyIdQueryKey>
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
      ...getProfileSshkeysSshKeyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutProfileSshkeysSshKeyIdMutationKey() {
  return ['profile', '/profile/sshkeys/:sshKeyId', 'PUT'] as const
}

export function getPutProfileSshkeysSshKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProfileSshkeysSshKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>) {
      return parseResponse(client.profile.sshkeys[':sshKeyId'].$put(args, options))
    },
  })
}

export function usePutProfileSshkeysSshKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProfileSshkeysSshKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProfileSshkeysSshKeyIdMutationKey() {
  return ['profile', '/profile/sshkeys/:sshKeyId', 'DELETE'] as const
}

export function getDeleteProfileSshkeysSshKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfileSshkeysSshKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>,
    ) {
      return parseResponse(client.profile.sshkeys[':sshKeyId'].$delete(args, options))
    },
  })
}

export function useDeleteProfileSshkeysSshKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProfileSshkeysSshKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostProfileTfaDisableMutationKey() {
  return ['profile', '/profile/tfa-disable', 'POST'] as const
}

export function getPostProfileTfaDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['tfa-disable']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostProfileTfaDisableMutationKey(),
    async mutationFn() {
      return parseResponse(client.profile['tfa-disable'].$post(undefined, options))
    },
  })
}

export function usePostProfileTfaDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile)['tfa-disable']['$post']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileTfaDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostProfileTfaEnableMutationKey() {
  return ['profile', '/profile/tfa-enable', 'POST'] as const
}

export function getPostProfileTfaEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profile)['tfa-enable']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostProfileTfaEnableMutationKey(),
    async mutationFn() {
      return parseResponse(client.profile['tfa-enable'].$post(undefined, options))
    },
  })
}

export function usePostProfileTfaEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile)['tfa-enable']['$post']>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileTfaEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPostProfileTfaEnableConfirmMutationKey() {
  return ['profile', '/profile/tfa-enable-confirm', 'POST'] as const
}

export function getPostProfileTfaEnableConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile)['tfa-enable-confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile)['tfa-enable-confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileTfaEnableConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile)['tfa-enable-confirm']['$post']>,
    ) {
      return parseResponse(client.profile['tfa-enable-confirm'].$post(args, options))
    },
  })
}

export function usePostProfileTfaEnableConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile)['tfa-enable-confirm']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile)['tfa-enable-confirm']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileTfaEnableConfirmMutationOptions<TError, TOnMutateResult>(
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

export function getProfileTokensQueryKey() {
  return ['profile', '/profile/tokens'] as const
}

export function getProfileTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileTokensQueryKey>
  >({
    queryKey: getProfileTokensQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.tokens.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProfileTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProfileTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProfileTokensMutationKey() {
  return ['profile', '/profile/tokens', 'POST'] as const
}

export function getPostProfileTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.profile.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile.tokens.$post>) {
      return parseResponse(client.profile.tokens.$post(args, options))
    },
  })
}

export function usePostProfileTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.tokens.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.profile.tokens.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProfileTokensMutationOptions<TError, TOnMutateResult>(
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

export function getProfileTokensTokenIdQueryKey(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>,
) {
  return ['profile', '/profile/tokens/:tokenId', args] as const
}

export function getProfileTokensTokenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfileTokensTokenIdQueryKey>
  >({
    queryKey: getProfileTokensTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.tokens[':tokenId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProfileTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileTokensTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProfileTokensTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProfileTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProfileTokensTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProfileTokensTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutProfileTokensTokenIdMutationKey() {
  return ['profile', '/profile/tokens/:tokenId', 'PUT'] as const
}

export function getPutProfileTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.tokens)[':tokenId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProfileTokensTokenIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$put']>) {
      return parseResponse(client.profile.tokens[':tokenId'].$put(args, options))
    },
  })
}

export function usePutProfileTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile.tokens)[':tokenId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutProfileTokensTokenIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProfileTokensTokenIdMutationKey() {
  return ['profile', '/profile/tokens/:tokenId', 'DELETE'] as const
}

export function getDeleteProfileTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profile.tokens)[':tokenId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProfileTokensTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$delete']>,
    ) {
      return parseResponse(client.profile.tokens[':tokenId'].$delete(args, options))
    },
  })
}

export function useDeleteProfileTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.profile.tokens)[':tokenId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.profile.tokens)[':tokenId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProfileTokensTokenIdMutationOptions<TError, TOnMutateResult>(
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

export function getRegionsQueryKey() {
  return ['regions', '/regions'] as const
}

export function getRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >({
    queryKey: getRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRegionsRegionIdQueryKey(
  args: InferRequestType<(typeof client.regions)[':regionId']['$get']>,
) {
  return ['regions', '/regions/:regionId', args] as const
}

export function getRegionsRegionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.regions)[':regionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegionsRegionIdQueryKey>
  >({
    queryKey: getRegionsRegionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.regions[':regionId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegionsRegionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.regions)[':regionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegionsRegionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegionsRegionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegionsRegionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.regions)[':regionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':regionId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegionsRegionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegionsRegionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSupportTicketsQueryKey(
  args: InferRequestType<typeof client.support.tickets.$get>,
) {
  return ['support', '/support/tickets', args] as const
}

export function getSupportTicketsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.support.tickets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSupportTicketsQueryKey>
  >({
    queryKey: getSupportTicketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.support.tickets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSupportTickets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.support.tickets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSupportTicketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSupportTicketsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSupportTickets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.support.tickets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSupportTicketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSupportTicketsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSupportTicketsMutationKey() {
  return ['support', '/support/tickets', 'POST'] as const
}

export function getPostSupportTicketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.support.tickets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportTicketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.support.tickets.$post>) {
      return parseResponse(client.support.tickets.$post(args, options))
    },
  })
}

export function usePostSupportTickets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.tickets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.support.tickets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportTicketsMutationOptions<TError, TOnMutateResult>(
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

export function getSupportTicketsTicketIdQueryKey(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>,
) {
  return ['support', '/support/tickets/:ticketId', args] as const
}

export function getSupportTicketsTicketIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupportTicketsTicketIdQueryKey>
  >({
    queryKey: getSupportTicketsTicketIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.support.tickets[':ticketId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSupportTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupportTicketsTicketIdQueryKey>
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
      ...getSupportTicketsTicketIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSupportTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupportTicketsTicketIdQueryKey>
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
      ...getSupportTicketsTicketIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSupportTicketsTicketIdAttachmentsMutationKey() {
  return ['support', '/support/tickets/:ticketId/attachments', 'POST'] as const
}

export function getPostSupportTicketsTicketIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportTicketsTicketIdAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>,
    ) {
      return parseResponse(client.support.tickets[':ticketId'].attachments.$post(args, options))
    },
  })
}

export function usePostSupportTicketsTicketIdAttachments<
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
                ReturnType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportTicketsTicketIdAttachmentsMutationOptions<
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

export function getPostSupportTicketsTicketIdCloseMutationKey() {
  return ['support', '/support/tickets/:ticketId/close', 'POST'] as const
}

export function getPostSupportTicketsTicketIdCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['close']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.support.tickets)[':ticketId']['close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportTicketsTicketIdCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.support.tickets)[':ticketId']['close']['$post']>,
    ) {
      return parseResponse(client.support.tickets[':ticketId'].close.$post(args, options))
    },
  })
}

export function usePostSupportTicketsTicketIdClose<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['close']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.support.tickets)[':ticketId']['close']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportTicketsTicketIdCloseMutationOptions<
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

export function getSupportTicketsTicketIdRepliesQueryKey(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>,
) {
  return ['support', '/support/tickets/:ticketId/replies', args] as const
}

export function getSupportTicketsTicketIdRepliesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupportTicketsTicketIdRepliesQueryKey>
  >({
    queryKey: getSupportTicketsTicketIdRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.support.tickets[':ticketId'].replies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSupportTicketsTicketIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupportTicketsTicketIdRepliesQueryKey>
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
      ...getSupportTicketsTicketIdRepliesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSupportTicketsTicketIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupportTicketsTicketIdRepliesQueryKey>
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
      ...getSupportTicketsTicketIdRepliesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSupportTicketsTicketIdRepliesMutationKey() {
  return ['support', '/support/tickets/:ticketId/replies', 'POST'] as const
}

export function getPostSupportTicketsTicketIdRepliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportTicketsTicketIdRepliesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>,
    ) {
      return parseResponse(client.support.tickets[':ticketId'].replies.$post(args, options))
    },
  })
}

export function usePostSupportTicketsTicketIdReplies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportTicketsTicketIdRepliesMutationOptions<
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

export function getTagsQueryKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsMutationKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function getPostTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.$post>) {
      return parseResponse(client.tags.$post(args, options))
    },
  })
}

export function usePostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
        TError,
        InferRequestType<typeof client.tags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsLabelQueryKey(
  args: InferRequestType<(typeof client.tags)[':label']['$get']>,
) {
  return ['tags', '/tags/:label', args] as const
}

export function getTagsLabelQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tags)[':label']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsLabelQueryKey>
  >({
    queryKey: getTagsLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':label'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsLabel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':label']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsLabelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsLabelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsLabel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':label']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsLabelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsLabelQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTagsLabelMutationKey() {
  return ['tags', '/tags/:label', 'DELETE'] as const
}

export function getDeleteTagsLabelMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':label']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsLabelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':label']['$delete']>) {
      return parseResponse(client.tags[':label'].$delete(args, options))
    },
  })
}

export function useDeleteTagsLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':label']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':label']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsLabelMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesQueryKey(args: InferRequestType<typeof client.volumes.$get>) {
  return ['volumes', '/volumes', args] as const
}

export function getVolumesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.volumes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >({
    queryKey: getVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVolumesMutationKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function getPostVolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    InferRequestType<typeof client.volumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.volumes.$post>) {
      return parseResponse(client.volumes.$post(args, options))
    },
  })
}

export function usePostVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
        TError,
        InferRequestType<typeof client.volumes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesVolumeIdQueryKey(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
) {
  return ['volumes', '/volumes/:volumeId', args] as const
}

export function getVolumesVolumeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesVolumeIdQueryKey>
  >({
    queryKey: getVolumesVolumeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes[':volumeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesVolumeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesVolumeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesVolumeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesVolumeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutVolumesVolumeIdMutationKey() {
  return ['volumes', '/volumes/:volumeId', 'PUT'] as const
}

export function getPutVolumesVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVolumesVolumeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':volumeId']['$put']>) {
      return parseResponse(client.volumes[':volumeId'].$put(args, options))
    },
  })
}

export function usePutVolumesVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':volumeId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVolumesVolumeIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVolumesVolumeIdMutationKey() {
  return ['volumes', '/volumes/:volumeId', 'DELETE'] as const
}

export function getDeleteVolumesVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVolumesVolumeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>) {
      return parseResponse(client.volumes[':volumeId'].$delete(args, options))
    },
  })
}

export function useDeleteVolumesVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVolumesVolumeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesVolumeIdAttachMutationKey() {
  return ['volumes', '/volumes/:volumeId/attach', 'POST'] as const
}

export function getPostVolumesVolumeIdAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['attach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['attach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesVolumeIdAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':volumeId']['attach']['$post']>,
    ) {
      return parseResponse(client.volumes[':volumeId'].attach.$post(args, options))
    },
  })
}

export function usePostVolumesVolumeIdAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':volumeId']['attach']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':volumeId']['attach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesVolumeIdAttachMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesVolumeIdCloneMutationKey() {
  return ['volumes', '/volumes/:volumeId/clone', 'POST'] as const
}

export function getPostVolumesVolumeIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesVolumeIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':volumeId']['clone']['$post']>,
    ) {
      return parseResponse(client.volumes[':volumeId'].clone.$post(args, options))
    },
  })
}

export function usePostVolumesVolumeIdClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':volumeId']['clone']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':volumeId']['clone']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesVolumeIdCloneMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesVolumeIdDetachMutationKey() {
  return ['volumes', '/volumes/:volumeId/detach', 'POST'] as const
}

export function getPostVolumesVolumeIdDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['detach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['detach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesVolumeIdDetachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':volumeId']['detach']['$post']>,
    ) {
      return parseResponse(client.volumes[':volumeId'].detach.$post(args, options))
    },
  })
}

export function usePostVolumesVolumeIdDetach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':volumeId']['detach']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':volumeId']['detach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesVolumeIdDetachMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesVolumeIdResizeMutationKey() {
  return ['volumes', '/volumes/:volumeId/resize', 'POST'] as const
}

export function getPostVolumesVolumeIdResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':volumeId']['resize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['resize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesVolumeIdResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':volumeId']['resize']['$post']>,
    ) {
      return parseResponse(client.volumes[':volumeId'].resize.$post(args, options))
    },
  })
}

export function usePostVolumesVolumeIdResize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':volumeId']['resize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':volumeId']['resize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesVolumeIdResizeMutationOptions<TError, TOnMutateResult>(
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
