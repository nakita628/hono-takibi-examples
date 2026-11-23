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

export function getAggregatedKey() {
  return ['aggregated'] as const
}

export function getClickstreamKey() {
  return ['clickstream'] as const
}

export function getConversionsKey() {
  return ['conversions'] as const
}

export function getDatapointsKey() {
  return ['datapoints'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getHitsKey() {
  return ['hits'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getRetargetingKey() {
  return ['retargeting'] as const
}

export function getTagsKey() {
  return ['tags'] as const
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

export function getPostAccountMutationKey() {
  return ['account', '/account', 'POST'] as const
}

export function getPostAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
    TError,
    InferRequestType<typeof client.account.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$post>) {
      return parseResponse(client.account.$post(args, options))
    },
  })
}

export function usePostAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
        TError,
        InferRequestType<typeof client.account.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountDomainwhitelistQueryKey(
  args: InferRequestType<typeof client.account.domainwhitelist.$get>,
) {
  return ['account', '/account/domainwhitelist', args] as const
}

export function getAccountDomainwhitelistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.domainwhitelist.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountDomainwhitelistQueryKey>
  >({
    queryKey: getAccountDomainwhitelistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.domainwhitelist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountDomainwhitelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.domainwhitelist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountDomainwhitelistQueryKey>
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
      ...getAccountDomainwhitelistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountDomainwhitelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.domainwhitelist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountDomainwhitelistQueryKey>
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
      ...getAccountDomainwhitelistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountDomainwhitelistMutationKey() {
  return ['account', '/account/domainwhitelist', 'POST'] as const
}

export function getPostAccountDomainwhitelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.domainwhitelist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountDomainwhitelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.domainwhitelist.$post>) {
      return parseResponse(client.account.domainwhitelist.$post(args, options))
    },
  })
}

export function usePostAccountDomainwhitelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.domainwhitelist.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountDomainwhitelistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountDomainwhitelistWhitelistIdMutationKey() {
  return ['account', '/account/domainwhitelist/:whitelistId', 'DELETE'] as const
}

export function getDeleteAccountDomainwhitelistWhitelistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.domainwhitelist)[':whitelistId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.domainwhitelist)[':whitelistId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountDomainwhitelistWhitelistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.domainwhitelist)[':whitelistId']['$delete']>,
    ) {
      return parseResponse(client.account.domainwhitelist[':whitelistId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountDomainwhitelistWhitelistId<
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
                ReturnType<(typeof client.account.domainwhitelist)[':whitelistId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.domainwhitelist)[':whitelistId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountDomainwhitelistWhitelistIdMutationOptions<
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

export function getAccountGuestsQueryKey(
  args: InferRequestType<typeof client.account.guests.$get>,
) {
  return ['account', '/account/guests', args] as const
}

export function getAccountGuestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.guests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGuestsQueryKey>
  >({
    queryKey: getAccountGuestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.guests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountGuests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.guests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountGuestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountGuests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.guests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountGuestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountGuestsMutationKey() {
  return ['account', '/account/guests', 'POST'] as const
}

export function getPostAccountGuestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.guests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountGuestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.guests.$post>) {
      return parseResponse(client.account.guests.$post(args, options))
    },
  })
}

export function usePostAccountGuests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.account.guests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountGuestsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountGuestsCountQueryKey(
  args: InferRequestType<typeof client.account.guests.count.$get>,
) {
  return ['account', '/account/guests/count', args] as const
}

export function getAccountGuestsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.guests.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGuestsCountQueryKey>
  >({
    queryKey: getAccountGuestsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.guests.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountGuestsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.guests.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountGuestsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountGuestsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.guests.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountGuestsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountGuestsGuestIdQueryKey(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$get']>,
) {
  return ['account', '/account/guests/:guestId', args] as const
}

export function getAccountGuestsGuestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGuestsGuestIdQueryKey>
  >({
    queryKey: getAccountGuestsGuestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.guests[':guestId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountGuestsGuestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsGuestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountGuestsGuestIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountGuestsGuestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsGuestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountGuestsGuestIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountGuestsGuestIdMutationKey() {
  return ['account', '/account/guests/:guestId', 'POST'] as const
}

export function getPostAccountGuestsGuestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.guests)[':guestId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountGuestsGuestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.guests)[':guestId']['$post']>) {
      return parseResponse(client.account.guests[':guestId'].$post(args, options))
    },
  })
}

export function usePostAccountGuestsGuestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.guests)[':guestId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountGuestsGuestIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountGuestsGuestIdMutationKey() {
  return ['account', '/account/guests/:guestId', 'DELETE'] as const
}

export function getDeleteAccountGuestsGuestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.guests)[':guestId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountGuestsGuestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.guests)[':guestId']['$delete']>,
    ) {
      return parseResponse(client.account.guests[':guestId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountGuestsGuestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.guests)[':guestId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountGuestsGuestIdMutationOptions<TError, TOnMutateResult>(
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

export function getAccountGuestsGuestIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>,
) {
  return ['account', '/account/guests/:guestId/permissions', args] as const
}

export function getAccountGuestsGuestIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGuestsGuestIdPermissionsQueryKey>
  >({
    queryKey: getAccountGuestsGuestIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.guests[':guestId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountGuestsGuestIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsGuestIdPermissionsQueryKey>
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
      ...getAccountGuestsGuestIdPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountGuestsGuestIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsGuestIdPermissionsQueryKey>
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
      ...getAccountGuestsGuestIdPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountGuestsGuestIdPermissionsCountQueryKey(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
  >,
) {
  return ['account', '/account/guests/:guestId/permissions/count', args] as const
}

export function getAccountGuestsGuestIdPermissionsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGuestsGuestIdPermissionsCountQueryKey>
  >({
    queryKey: getAccountGuestsGuestIdPermissionsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.guests[':guestId'].permissions.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountGuestsGuestIdPermissionsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsGuestIdPermissionsCountQueryKey>
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
      ...getAccountGuestsGuestIdPermissionsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountGuestsGuestIdPermissionsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.account.guests)[':guestId']['permissions']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountGuestsGuestIdPermissionsCountQueryKey>
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
      ...getAccountGuestsGuestIdPermissionsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountGuestsGuestIdTypePermissionsPatchMutationKey() {
  return ['account', '/account/guests/:guestId/:type/permissions/patch', 'PUT'] as const
}

export function getPutAccountGuestsGuestIdTypePermissionsPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountGuestsGuestIdTypePermissionsPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$put']
      >,
    ) {
      return parseResponse(
        client.account.guests[':guestId'][':type'].permissions.patch.$put(args, options),
      )
    },
  })
}

export function usePutAccountGuestsGuestIdTypePermissionsPatch<
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
                  (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$put']
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
  const mutationDefaults = getPutAccountGuestsGuestIdTypePermissionsPatchMutationOptions<
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

export function getPostAccountGuestsGuestIdTypePermissionsPatchMutationKey() {
  return ['account', '/account/guests/:guestId/:type/permissions/patch', 'POST'] as const
}

export function getPostAccountGuestsGuestIdTypePermissionsPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountGuestsGuestIdTypePermissionsPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$post']
      >,
    ) {
      return parseResponse(
        client.account.guests[':guestId'][':type'].permissions.patch.$post(args, options),
      )
    },
  })
}

export function usePostAccountGuestsGuestIdTypePermissionsPatch<
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
                  (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.account.guests)[':guestId'][':type']['permissions']['patch']['$post']
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
  const mutationDefaults = getPostAccountGuestsGuestIdTypePermissionsPatchMutationOptions<
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

export function getAccountIpblacklistQueryKey(
  args: InferRequestType<typeof client.account.ipblacklist.$get>,
) {
  return ['account', '/account/ipblacklist', args] as const
}

export function getAccountIpblacklistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.ipblacklist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIpblacklistQueryKey>
  >({
    queryKey: getAccountIpblacklistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.ipblacklist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountIpblacklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.ipblacklist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIpblacklistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountIpblacklistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountIpblacklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.ipblacklist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIpblacklistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountIpblacklistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountIpblacklistMutationKey() {
  return ['account', '/account/ipblacklist', 'POST'] as const
}

export function getPostAccountIpblacklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.ipblacklist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIpblacklistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.ipblacklist.$post>) {
      return parseResponse(client.account.ipblacklist.$post(args, options))
    },
  })
}

export function usePostAccountIpblacklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.ipblacklist.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountIpblacklistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountIpblacklistBlacklistIdMutationKey() {
  return ['account', '/account/ipblacklist/:blacklistId', 'DELETE'] as const
}

export function getDeleteAccountIpblacklistBlacklistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.ipblacklist)[':blacklistId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.ipblacklist)[':blacklistId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountIpblacklistBlacklistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.ipblacklist)[':blacklistId']['$delete']>,
    ) {
      return parseResponse(client.account.ipblacklist[':blacklistId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountIpblacklistBlacklistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account.ipblacklist)[':blacklistId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.account.ipblacklist)[':blacklistId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountIpblacklistBlacklistIdMutationOptions<
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

export function getAccountPlanQueryKey() {
  return ['account', '/account/plan'] as const
}

export function getAccountPlanQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountPlanQueryKey>
  >({
    queryKey: getAccountPlanQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.plan.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountPlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPlanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountPlanQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountPlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPlanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountPlanQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAggregatedQueryKey(args: InferRequestType<typeof client.aggregated.$get>) {
  return ['aggregated', '/aggregated', args] as const
}

export function getAggregatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aggregated.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAggregatedQueryKey>
  >({
    queryKey: getAggregatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aggregated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAggregated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAggregatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAggregated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAggregatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAggregatedListQueryKey(
  args: InferRequestType<typeof client.aggregated.list.$get>,
) {
  return ['aggregated', '/aggregated/list', args] as const
}

export function getAggregatedListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aggregated.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAggregatedListQueryKey>
  >({
    queryKey: getAggregatedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aggregated.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAggregatedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAggregatedListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAggregatedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAggregatedListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAggregatedSummaryConversionsQueryKey(
  args: InferRequestType<typeof client.aggregated.summary.conversions.$get>,
) {
  return ['aggregated', '/aggregated/summary/conversions', args] as const
}

export function getAggregatedSummaryConversionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.summary.conversions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAggregatedSummaryConversionsQueryKey>
  >({
    queryKey: getAggregatedSummaryConversionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aggregated.summary.conversions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAggregatedSummaryConversions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.summary.conversions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedSummaryConversionsQueryKey>
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
      ...getAggregatedSummaryConversionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAggregatedSummaryConversions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.summary.conversions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedSummaryConversionsQueryKey>
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
      ...getAggregatedSummaryConversionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAggregatedSummaryDatapointsQueryKey(
  args: InferRequestType<typeof client.aggregated.summary.datapoints.$get>,
) {
  return ['aggregated', '/aggregated/summary/datapoints', args] as const
}

export function getAggregatedSummaryDatapointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.summary.datapoints.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAggregatedSummaryDatapointsQueryKey>
  >({
    queryKey: getAggregatedSummaryDatapointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aggregated.summary.datapoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAggregatedSummaryDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.summary.datapoints.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedSummaryDatapointsQueryKey>
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
      ...getAggregatedSummaryDatapointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAggregatedSummaryDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.summary.datapoints.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedSummaryDatapointsQueryKey>
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
      ...getAggregatedSummaryDatapointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAggregatedSummaryGroupsQueryKey(
  args: InferRequestType<typeof client.aggregated.summary.groups.$get>,
) {
  return ['aggregated', '/aggregated/summary/groups', args] as const
}

export function getAggregatedSummaryGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.summary.groups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAggregatedSummaryGroupsQueryKey>
  >({
    queryKey: getAggregatedSummaryGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aggregated.summary.groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAggregatedSummaryGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.summary.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedSummaryGroupsQueryKey>
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
      ...getAggregatedSummaryGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAggregatedSummaryGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aggregated.summary.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAggregatedSummaryGroupsQueryKey>
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
      ...getAggregatedSummaryGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClickstreamQueryKey(args: InferRequestType<typeof client.clickstream.$get>) {
  return ['clickstream', '/clickstream', args] as const
}

export function getClickstreamQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clickstream.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClickstreamQueryKey>
  >({
    queryKey: getClickstreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clickstream.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClickstream<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clickstream.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getClickstreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClickstreamQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClickstream<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clickstream.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getClickstreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClickstreamQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConversionsQueryKey(args: InferRequestType<typeof client.conversions.$get>) {
  return ['conversions', '/conversions', args] as const
}

export function getConversionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conversions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConversionsQueryKey>
  >({
    queryKey: getConversionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConversions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostConversionsMutationKey() {
  return ['conversions', '/conversions', 'POST'] as const
}

export function getPostConversionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$post>>>>>,
    TError,
    InferRequestType<typeof client.conversions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversions.$post>) {
      return parseResponse(client.conversions.$post(args, options))
    },
  })
}

export function usePostConversions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.conversions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConversionsAggregatedListQueryKey(
  args: InferRequestType<typeof client.conversions.aggregated.list.$get>,
) {
  return ['conversions', '/conversions/aggregated/list', args] as const
}

export function getConversionsAggregatedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversions.aggregated.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsAggregatedListQueryKey>
  >({
    queryKey: getConversionsAggregatedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversions.aggregated.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversionsAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversions.aggregated.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsAggregatedListQueryKey>
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
      ...getConversionsAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversionsAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversions.aggregated.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsAggregatedListQueryKey>
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
      ...getConversionsAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversionsCountQueryKey(
  args: InferRequestType<typeof client.conversions.count.$get>,
) {
  return ['conversions', '/conversions/count', args] as const
}

export function getConversionsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conversions.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsCountQueryKey>
  >({
    queryKey: getConversionsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversions.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConversionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversions.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConversionsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConversionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.conversions.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConversionsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConversionsConversionIdQueryKey(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$get']>,
) {
  return ['conversions', '/conversions/:conversionId', args] as const
}

export function getConversionsConversionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsConversionIdQueryKey>
  >({
    queryKey: getConversionsConversionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversions[':conversionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversionsConversionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdQueryKey>
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
      ...getConversionsConversionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversionsConversionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdQueryKey>
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
      ...getConversionsConversionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConversionsConversionIdMutationKey() {
  return ['conversions', '/conversions/:conversionId', 'POST'] as const
}

export function getPostConversionsConversionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversions)[':conversionId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConversionsConversionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversions)[':conversionId']['$post']>,
    ) {
      return parseResponse(client.conversions[':conversionId'].$post(args, options))
    },
  })
}

export function usePostConversionsConversionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversions)[':conversionId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversionsConversionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConversionsConversionIdMutationKey() {
  return ['conversions', '/conversions/:conversionId', 'DELETE'] as const
}

export function getDeleteConversionsConversionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversions)[':conversionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversionsConversionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversions)[':conversionId']['$delete']>,
    ) {
      return parseResponse(client.conversions[':conversionId'].$delete(args, options))
    },
  })
}

export function useDeleteConversionsConversionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversions)[':conversionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConversionsConversionIdMutationOptions<TError, TOnMutateResult>(
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

export function getConversionsConversionIdAggregatedQueryKey(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>,
) {
  return ['conversions', '/conversions/:conversionId/aggregated', args] as const
}

export function getConversionsConversionIdAggregatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsConversionIdAggregatedQueryKey>
  >({
    queryKey: getConversionsConversionIdAggregatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversions[':conversionId'].aggregated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversionsConversionIdAggregated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdAggregatedQueryKey>
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
      ...getConversionsConversionIdAggregatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversionsConversionIdAggregated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdAggregatedQueryKey>
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
      ...getConversionsConversionIdAggregatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversionsConversionIdAggregatedListQueryKey(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
  >,
) {
  return ['conversions', '/conversions/:conversionId/aggregated/list', args] as const
}

export function getConversionsConversionIdAggregatedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsConversionIdAggregatedListQueryKey>
  >({
    queryKey: getConversionsConversionIdAggregatedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversions[':conversionId'].aggregated.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversionsConversionIdAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdAggregatedListQueryKey>
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
      ...getConversionsConversionIdAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversionsConversionIdAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversions)[':conversionId']['aggregated']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdAggregatedListQueryKey>
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
      ...getConversionsConversionIdAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConversionsConversionIdDatapointsQueryKey(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>,
) {
  return ['conversions', '/conversions/:conversionId/datapoints', args] as const
}

export function getConversionsConversionIdDatapointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsConversionIdDatapointsQueryKey>
  >({
    queryKey: getConversionsConversionIdDatapointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversions[':conversionId'].datapoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversionsConversionIdDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdDatapointsQueryKey>
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
      ...getConversionsConversionIdDatapointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversionsConversionIdDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdDatapointsQueryKey>
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
      ...getConversionsConversionIdDatapointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutConversionsConversionIdDatapointsBatchPatchMutationKey() {
  return ['conversions', '/conversions/:conversionId/datapoints/batch/patch', 'PUT'] as const
}

export function getPutConversionsConversionIdDatapointsBatchPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.conversions)[':conversionId']['datapoints']['batch']['patch']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.conversions)[':conversionId']['datapoints']['batch']['patch']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutConversionsConversionIdDatapointsBatchPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversions)[':conversionId']['datapoints']['batch']['patch']['$put']
      >,
    ) {
      return parseResponse(
        client.conversions[':conversionId'].datapoints.batch.patch.$put(args, options),
      )
    },
  })
}

export function usePutConversionsConversionIdDatapointsBatchPatch<
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
                  (typeof client.conversions)[':conversionId']['datapoints']['batch']['patch']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversions)[':conversionId']['datapoints']['batch']['patch']['$put']
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
  const mutationDefaults = getPutConversionsConversionIdDatapointsBatchPatchMutationOptions<
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

export function getConversionsConversionIdDatapointsCountQueryKey(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
  >,
) {
  return ['conversions', '/conversions/:conversionId/datapoints/count', args] as const
}

export function getConversionsConversionIdDatapointsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsConversionIdDatapointsCountQueryKey>
  >({
    queryKey: getConversionsConversionIdDatapointsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversions[':conversionId'].datapoints.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversionsConversionIdDatapointsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdDatapointsCountQueryKey>
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
      ...getConversionsConversionIdDatapointsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversionsConversionIdDatapointsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.conversions)[':conversionId']['datapoints']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdDatapointsCountQueryKey>
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
      ...getConversionsConversionIdDatapointsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutConversionsConversionIdDatapointsPatchMutationKey() {
  return ['conversions', '/conversions/:conversionId/datapoints/patch', 'PUT'] as const
}

export function getPutConversionsConversionIdDatapointsPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['patch']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['patch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversionsConversionIdDatapointsPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.conversions)[':conversionId']['datapoints']['patch']['$put']
      >,
    ) {
      return parseResponse(client.conversions[':conversionId'].datapoints.patch.$put(args, options))
    },
  })
}

export function usePutConversionsConversionIdDatapointsPatch<
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
                  (typeof client.conversions)[':conversionId']['datapoints']['patch']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.conversions)[':conversionId']['datapoints']['patch']['$put']
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
  const mutationDefaults = getPutConversionsConversionIdDatapointsPatchMutationOptions<
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

export function getConversionsConversionIdHitsQueryKey(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>,
) {
  return ['conversions', '/conversions/:conversionId/hits', args] as const
}

export function getConversionsConversionIdHitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsConversionIdHitsQueryKey>
  >({
    queryKey: getConversionsConversionIdHitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conversions[':conversionId'].hits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConversionsConversionIdHits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdHitsQueryKey>
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
      ...getConversionsConversionIdHitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConversionsConversionIdHits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConversionsConversionIdHitsQueryKey>
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
      ...getConversionsConversionIdHitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutConversionsConversionIdNotesMutationKey() {
  return ['conversions', '/conversions/:conversionId/notes', 'PUT'] as const
}

export function getPutConversionsConversionIdNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversions)[':conversionId']['notes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversions)[':conversionId']['notes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversionsConversionIdNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversions)[':conversionId']['notes']['$put']>,
    ) {
      return parseResponse(client.conversions[':conversionId'].notes.$put(args, options))
    },
  })
}

export function usePutConversionsConversionIdNotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.conversions)[':conversionId']['notes']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.conversions)[':conversionId']['notes']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConversionsConversionIdNotesMutationOptions<
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

export function getDatapointsQueryKey(args: InferRequestType<typeof client.datapoints.$get>) {
  return ['datapoints', '/datapoints', args] as const
}

export function getDatapointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.datapoints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatapointsQueryKey>
  >({
    queryKey: getDatapointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datapoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatapoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatapointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatapoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatapointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDatapointsMutationKey() {
  return ['datapoints', '/datapoints', 'POST'] as const
}

export function getPostDatapointsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$post>>>>>,
    TError,
    InferRequestType<typeof client.datapoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatapointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datapoints.$post>) {
      return parseResponse(client.datapoints.$post(args, options))
    },
  })
}

export function usePostDatapoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.datapoints.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatapointsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatapointsAggregatedQueryKey(
  args: InferRequestType<typeof client.datapoints.aggregated.$get>,
) {
  return ['datapoints', '/datapoints/aggregated', args] as const
}

export function getDatapointsAggregatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.aggregated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsAggregatedQueryKey>
  >({
    queryKey: getDatapointsAggregatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datapoints.aggregated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatapointsAggregated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.aggregated.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsAggregatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatapointsAggregatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatapointsAggregated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.aggregated.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsAggregatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatapointsAggregatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatapointsAggregatedListQueryKey(
  args: InferRequestType<typeof client.datapoints.aggregated.list.$get>,
) {
  return ['datapoints', '/datapoints/aggregated/list', args] as const
}

export function getDatapointsAggregatedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.aggregated.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsAggregatedListQueryKey>
  >({
    queryKey: getDatapointsAggregatedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datapoints.aggregated.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatapointsAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.aggregated.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsAggregatedListQueryKey>
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
      ...getDatapointsAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatapointsAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.aggregated.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsAggregatedListQueryKey>
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
      ...getDatapointsAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDatapointsBatchMutationKey() {
  return ['datapoints', '/datapoints/batch', 'PUT'] as const
}

export function getPutDatapointsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.datapoints.batch.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutDatapointsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datapoints.batch.$put>) {
      return parseResponse(client.datapoints.batch.$put(args, options))
    },
  })
}

export function usePutDatapointsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.datapoints.batch.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatapointsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatapointsBatchMutationKey() {
  return ['datapoints', '/datapoints/batch', 'POST'] as const
}

export function getPostDatapointsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.datapoints.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatapointsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datapoints.batch.$post>) {
      return parseResponse(client.datapoints.batch.$post(args, options))
    },
  })
}

export function usePostDatapointsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.datapoints.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatapointsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDatapointsBatchMutationKey() {
  return ['datapoints', '/datapoints/batch', 'DELETE'] as const
}

export function getDeleteDatapointsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.datapoints.batch.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatapointsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datapoints.batch.$delete>) {
      return parseResponse(client.datapoints.batch.$delete(args, options))
    },
  })
}

export function useDeleteDatapointsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.datapoints.batch.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatapointsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getDatapointsCountQueryKey(
  args: InferRequestType<typeof client.datapoints.count.$get>,
) {
  return ['datapoints', '/datapoints/count', args] as const
}

export function getDatapointsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.datapoints.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsCountQueryKey>
  >({
    queryKey: getDatapointsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datapoints.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatapointsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatapointsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatapointsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datapoints.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatapointsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatapointsIdQueryKey(
  args: InferRequestType<(typeof client.datapoints)[':id']['$get']>,
) {
  return ['datapoints', '/datapoints/:id', args] as const
}

export function getDatapointsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsIdQueryKey>
  >({
    queryKey: getDatapointsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datapoints[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatapointsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatapointsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatapointsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatapointsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDatapointsIdMutationKey() {
  return ['datapoints', '/datapoints/:id', 'POST'] as const
}

export function getPostDatapointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.datapoints)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatapointsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datapoints)[':id']['$post']>) {
      return parseResponse(client.datapoints[':id'].$post(args, options))
    },
  })
}

export function usePostDatapointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.datapoints)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatapointsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDatapointsIdMutationKey() {
  return ['datapoints', '/datapoints/:id', 'DELETE'] as const
}

export function getDeleteDatapointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.datapoints)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatapointsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datapoints)[':id']['$delete']>) {
      return parseResponse(client.datapoints[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDatapointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.datapoints)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatapointsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDatapointsIdAggregatedQueryKey(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>,
) {
  return ['datapoints', '/datapoints/:id/aggregated', args] as const
}

export function getDatapointsIdAggregatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsIdAggregatedQueryKey>
  >({
    queryKey: getDatapointsIdAggregatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datapoints[':id'].aggregated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatapointsIdAggregated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsIdAggregatedQueryKey>
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
      ...getDatapointsIdAggregatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatapointsIdAggregated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsIdAggregatedQueryKey>
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
      ...getDatapointsIdAggregatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatapointsIdAggregatedListQueryKey(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>,
) {
  return ['datapoints', '/datapoints/:id/aggregated/list', args] as const
}

export function getDatapointsIdAggregatedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsIdAggregatedListQueryKey>
  >({
    queryKey: getDatapointsIdAggregatedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datapoints[':id'].aggregated.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatapointsIdAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsIdAggregatedListQueryKey>
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
      ...getDatapointsIdAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatapointsIdAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsIdAggregatedListQueryKey>
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
      ...getDatapointsIdAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDatapointsIdFavouriteMutationKey() {
  return ['datapoints', '/datapoints/:id/favourite', 'PUT'] as const
}

export function getPutDatapointsIdFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datapoints)[':id']['favourite']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datapoints)[':id']['favourite']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatapointsIdFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datapoints)[':id']['favourite']['$put']>,
    ) {
      return parseResponse(client.datapoints[':id'].favourite.$put(args, options))
    },
  })
}

export function usePutDatapointsIdFavourite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datapoints)[':id']['favourite']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datapoints)[':id']['favourite']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatapointsIdFavouriteMutationOptions<TError, TOnMutateResult>(
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

export function getDatapointsIdHitsQueryKey(
  args: InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>,
) {
  return ['datapoints', '/datapoints/:id/hits', args] as const
}

export function getDatapointsIdHitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsIdHitsQueryKey>
  >({
    queryKey: getDatapointsIdHitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datapoints[':id'].hits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatapointsIdHits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsIdHitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatapointsIdHitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatapointsIdHits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatapointsIdHitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatapointsIdHitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutDatapointsIdNotesMutationKey() {
  return ['datapoints', '/datapoints/:id/notes', 'PUT'] as const
}

export function getPutDatapointsIdNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datapoints)[':id']['notes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datapoints)[':id']['notes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatapointsIdNotesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datapoints)[':id']['notes']['$put']>) {
      return parseResponse(client.datapoints[':id'].notes.$put(args, options))
    },
  })
}

export function usePutDatapointsIdNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datapoints)[':id']['notes']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datapoints)[':id']['notes']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatapointsIdNotesMutationOptions<TError, TOnMutateResult>(
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

export function getDomainsCountQueryKey(args: InferRequestType<typeof client.domains.count.$get>) {
  return ['domains', '/domains/count', args] as const
}

export function getDomainsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.domains.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsCountQueryKey>
  >({
    queryKey: getDomainsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.domains.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDomainsIdQueryKey(
  args: InferRequestType<(typeof client.domains)[':id']['$get']>,
) {
  return ['domains', '/domains/:id', args] as const
}

export function getDomainsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.domains)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsIdQueryKey>
  >({
    queryKey: getDomainsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDomainsIdMutationKey() {
  return ['domains', '/domains/:id', 'POST'] as const
}

export function getPostDomainsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.domains)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':id']['$post']>) {
      return parseResponse(client.domains[':id'].$post(args, options))
    },
  })
}

export function usePostDomainsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomainsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDomainsIdMutationKey() {
  return ['domains', '/domains/:id', 'DELETE'] as const
}

export function getDeleteDomainsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':id']['$delete']>) {
      return parseResponse(client.domains[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDomainsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.domains)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDomainsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsQueryKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGroupsMutationKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$post>) {
      return parseResponse(client.groups.$post(args, options))
    },
  })
}

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
        TError,
        InferRequestType<typeof client.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsAggregatedQueryKey(
  args: InferRequestType<typeof client.groups.aggregated.$get>,
) {
  return ['groups', '/groups/aggregated', args] as const
}

export function getGroupsAggregatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.aggregated.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsAggregatedQueryKey>
  >({
    queryKey: getGroupsAggregatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.aggregated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsAggregated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.aggregated.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsAggregatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsAggregatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsAggregated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.aggregated.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsAggregatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsAggregatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsAggregatedListQueryKey(
  args: InferRequestType<typeof client.groups.aggregated.list.$get>,
) {
  return ['groups', '/groups/aggregated/list', args] as const
}

export function getGroupsAggregatedListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.aggregated.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsAggregatedListQueryKey>
  >({
    queryKey: getGroupsAggregatedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.aggregated.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsAggregatedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.aggregated.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsAggregatedListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsAggregatedListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsAggregatedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.aggregated.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsAggregatedListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsAggregatedListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsCountQueryKey(args: InferRequestType<typeof client.groups.count.$get>) {
  return ['groups', '/groups/count', args] as const
}

export function getGroupsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsCountQueryKey>
  >({
    queryKey: getGroupsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsIdQueryKey(args: InferRequestType<(typeof client.groups)[':id']['$get']>) {
  return ['groups', '/groups/:id', args] as const
}

export function getGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.groups)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdQueryKey>
  >({
    queryKey: getGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGroupsIdMutationKey() {
  return ['groups', '/groups/:id', 'POST'] as const
}

export function getPostGroupsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['$post']>) {
      return parseResponse(client.groups[':id'].$post(args, options))
    },
  })
}

export function usePostGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteGroupsIdMutationKey() {
  return ['groups', '/groups/:id', 'DELETE'] as const
}

export function getDeleteGroupsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['$delete']>) {
      return parseResponse(client.groups[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsIdAggregatedQueryKey(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>,
) {
  return ['groups', '/groups/:id/aggregated', args] as const
}

export function getGroupsIdAggregatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdAggregatedQueryKey>
  >({
    queryKey: getGroupsIdAggregatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id'].aggregated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsIdAggregated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdAggregatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsIdAggregatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsIdAggregated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdAggregatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsIdAggregatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsIdAggregatedListQueryKey(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>,
) {
  return ['groups', '/groups/:id/aggregated/list', args] as const
}

export function getGroupsIdAggregatedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdAggregatedListQueryKey>
  >({
    queryKey: getGroupsIdAggregatedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id'].aggregated.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsIdAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdAggregatedListQueryKey>
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
      ...getGroupsIdAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupsIdAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdAggregatedListQueryKey>
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
      ...getGroupsIdAggregatedListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGroupsIdAggregatedSummaryQueryKey(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>,
) {
  return ['groups', '/groups/:id/aggregated/summary', args] as const
}

export function getGroupsIdAggregatedSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdAggregatedSummaryQueryKey>
  >({
    queryKey: getGroupsIdAggregatedSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id'].aggregated.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsIdAggregatedSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdAggregatedSummaryQueryKey>
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
      ...getGroupsIdAggregatedSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupsIdAggregatedSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdAggregatedSummaryQueryKey>
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
      ...getGroupsIdAggregatedSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGroupsIdDatapointsQueryKey(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>,
) {
  return ['groups', '/groups/:id/datapoints', args] as const
}

export function getGroupsIdDatapointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdDatapointsQueryKey>
  >({
    queryKey: getGroupsIdDatapointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id'].datapoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsIdDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdDatapointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsIdDatapointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsIdDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdDatapointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsIdDatapointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGroupsIdDatapointsMutationKey() {
  return ['groups', '/groups/:id/datapoints', 'POST'] as const
}

export function getPostGroupsIdDatapointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['datapoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsIdDatapointsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['datapoints']['$post']>) {
      return parseResponse(client.groups[':id'].datapoints.$post(args, options))
    },
  })
}

export function usePostGroupsIdDatapoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['datapoints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsIdDatapointsMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsIdDatapointsCountQueryKey(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>,
) {
  return ['groups', '/groups/:id/datapoints/count', args] as const
}

export function getGroupsIdDatapointsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdDatapointsCountQueryKey>
  >({
    queryKey: getGroupsIdDatapointsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id'].datapoints.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsIdDatapointsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdDatapointsCountQueryKey>
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
      ...getGroupsIdDatapointsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupsIdDatapointsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdDatapointsCountQueryKey>
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
      ...getGroupsIdDatapointsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGroupsIdFavouriteMutationKey() {
  return ['groups', '/groups/:id/favourite', 'PUT'] as const
}

export function getPutGroupsIdFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['favourite']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['favourite']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsIdFavouriteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['favourite']['$put']>) {
      return parseResponse(client.groups[':id'].favourite.$put(args, options))
    },
  })
}

export function usePutGroupsIdFavourite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['favourite']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['favourite']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsIdFavouriteMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsIdHitsQueryKey(
  args: InferRequestType<(typeof client.groups)[':id']['hits']['$get']>,
) {
  return ['groups', '/groups/:id/hits', args] as const
}

export function getGroupsIdHitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['hits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdHitsQueryKey>
  >({
    queryKey: getGroupsIdHitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id'].hits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsIdHits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['hits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdHitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsIdHitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsIdHits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['hits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdHitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsIdHitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGroupsIdNotesMutationKey() {
  return ['groups', '/groups/:id/notes', 'PUT'] as const
}

export function getPutGroupsIdNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['notes']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['notes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsIdNotesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['notes']['$put']>) {
      return parseResponse(client.groups[':id'].notes.$put(args, options))
    },
  })
}

export function usePutGroupsIdNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['notes']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['notes']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsIdNotesMutationOptions<TError, TOnMutateResult>(
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

export function getHitsQueryKey(args: InferRequestType<typeof client.hits.$get>) {
  return ['hits', '/hits', args] as const
}

export function getHitsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHitsQueryKey>
  >({
    queryKey: getHitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHits<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hits.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHits<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hits.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMePlanQueryKey() {
  return ['me', '/me/plan'] as const
}

export function getMePlanQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePlanQueryKey>
  >({
    queryKey: getMePlanQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.plan.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMePlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMePlanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMePlanQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMePlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMePlanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMePlanQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRetargetingQueryKey(args: InferRequestType<typeof client.retargeting.$get>) {
  return ['retargeting', '/retargeting', args] as const
}

export function getRetargetingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.retargeting.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRetargetingQueryKey>
  >({
    queryKey: getRetargetingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retargeting.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRetargeting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.retargeting.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRetargetingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRetargeting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.retargeting.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRetargetingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRetargetingMutationKey() {
  return ['retargeting', '/retargeting', 'POST'] as const
}

export function getPostRetargetingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$post>>>>>,
    TError,
    InferRequestType<typeof client.retargeting.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRetargetingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.retargeting.$post>) {
      return parseResponse(client.retargeting.$post(args, options))
    },
  })
}

export function usePostRetargeting<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.retargeting.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRetargetingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRetargetingCountQueryKey() {
  return ['retargeting', '/retargeting/count'] as const
}

export function getRetargetingCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRetargetingCountQueryKey>
  >({
    queryKey: getRetargetingCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.retargeting.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRetargetingCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRetargetingCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRetargetingCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRetargetingCountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRetargetingIdQueryKey(
  args: InferRequestType<(typeof client.retargeting)[':id']['$get']>,
) {
  return ['retargeting', '/retargeting/:id', args] as const
}

export function getRetargetingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retargeting)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetargetingIdQueryKey>
  >({
    queryKey: getRetargetingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retargeting[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRetargetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retargeting)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRetargetingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRetargetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retargeting)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRetargetingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRetargetingIdMutationKey() {
  return ['retargeting', '/retargeting/:id', 'POST'] as const
}

export function getPostRetargetingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.retargeting)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRetargetingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.retargeting)[':id']['$post']>) {
      return parseResponse(client.retargeting[':id'].$post(args, options))
    },
  })
}

export function usePostRetargetingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.retargeting)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRetargetingIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRetargetingIdMutationKey() {
  return ['retargeting', '/retargeting/:id', 'DELETE'] as const
}

export function getDeleteRetargetingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.retargeting)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRetargetingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.retargeting)[':id']['$delete']>) {
      return parseResponse(client.retargeting[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRetargetingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.retargeting)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRetargetingIdMutationOptions<TError, TOnMutateResult>(
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

export function getRetargetingIdDatapointsQueryKey(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>,
) {
  return ['retargeting', '/retargeting/:id/datapoints', args] as const
}

export function getRetargetingIdDatapointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetargetingIdDatapointsQueryKey>
  >({
    queryKey: getRetargetingIdDatapointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retargeting[':id'].datapoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRetargetingIdDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingIdDatapointsQueryKey>
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
      ...getRetargetingIdDatapointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRetargetingIdDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingIdDatapointsQueryKey>
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
      ...getRetargetingIdDatapointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRetargetingIdDatapointsCountQueryKey(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>,
) {
  return ['retargeting', '/retargeting/:id/datapoints/count', args] as const
}

export function getRetargetingIdDatapointsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetargetingIdDatapointsCountQueryKey>
  >({
    queryKey: getRetargetingIdDatapointsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retargeting[':id'].datapoints.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRetargetingIdDatapointsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingIdDatapointsCountQueryKey>
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
      ...getRetargetingIdDatapointsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRetargetingIdDatapointsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetargetingIdDatapointsCountQueryKey>
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
      ...getRetargetingIdDatapointsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getTagsCountQueryKey(args: InferRequestType<typeof client.tags.count.$get>) {
  return ['tags', '/tags/count', args] as const
}

export function getTagsCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsCountQueryKey>
  >({
    queryKey: getTagsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.count.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tags.count.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTagsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsTagIdQueryKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
) {
  return ['tags', '/tags/:tagId', args] as const
}

export function getTagsTagIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tags)[':tagId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdQueryKey>
  >({
    queryKey: getTagsTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tagId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTagsTagIdMutationKey() {
  return ['tags', '/tags/:tagId', 'DELETE'] as const
}

export function getDeleteTagsTagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tagId']['$delete']>) {
      return parseResponse(client.tags[':tagId'].$delete(args, options))
    },
  })
}

export function useDeleteTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':tagId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsTagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsTagIdDatapointsQueryKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>,
) {
  return ['tags', '/tags/:tagId/datapoints', args] as const
}

export function getTagsTagIdDatapointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdDatapointsQueryKey>
  >({
    queryKey: getTagsTagIdDatapointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tagId'].datapoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTagsTagIdDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdDatapointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagIdDatapointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagIdDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdDatapointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagIdDatapointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTagsTagIdDatapointsMutationKey() {
  return ['tags', '/tags/:tagId/datapoints', 'DELETE'] as const
}

export function getDeleteTagsTagIdDatapointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsTagIdDatapointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$delete']>,
    ) {
      return parseResponse(client.tags[':tagId'].datapoints.$delete(args, options))
    },
  })
}

export function useDeleteTagsTagIdDatapoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsTagIdDatapointsMutationOptions<TError, TOnMutateResult>(
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

export function getTagsTagIdDatapointsCountQueryKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>,
) {
  return ['tags', '/tags/:tagId/datapoints/count', args] as const
}

export function getTagsTagIdDatapointsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdDatapointsCountQueryKey>
  >({
    queryKey: getTagsTagIdDatapointsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tagId'].datapoints.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTagsTagIdDatapointsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdDatapointsCountQueryKey>
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
      ...getTagsTagIdDatapointsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTagsTagIdDatapointsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdDatapointsCountQueryKey>
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
      ...getTagsTagIdDatapointsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTagsTagIdDatapointsPatchMutationKey() {
  return ['tags', '/tags/:tagId/datapoints/patch', 'PUT'] as const
}

export function getPutTagsTagIdDatapointsPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['patch']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tagId']['datapoints']['patch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTagsTagIdDatapointsPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':tagId']['datapoints']['patch']['$put']>,
    ) {
      return parseResponse(client.tags[':tagId'].datapoints.patch.$put(args, options))
    },
  })
}

export function usePutTagsTagIdDatapointsPatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['patch']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':tagId']['datapoints']['patch']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTagsTagIdDatapointsPatchMutationOptions<TError, TOnMutateResult>(
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

export function getTagsTagIdGroupsQueryKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>,
) {
  return ['tags', '/tags/:tagId/groups', args] as const
}

export function getTagsTagIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdGroupsQueryKey>
  >({
    queryKey: getTagsTagIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tagId'].groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsTagIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagIdGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagIdGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTagsTagIdGroupsMutationKey() {
  return ['tags', '/tags/:tagId/groups', 'DELETE'] as const
}

export function getDeleteTagsTagIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tagId']['groups']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsTagIdGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tagId']['groups']['$delete']>) {
      return parseResponse(client.tags[':tagId'].groups.$delete(args, options))
    },
  })
}

export function useDeleteTagsTagIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':tagId']['groups']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsTagIdGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getTagsTagIdGroupsCountQueryKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>,
) {
  return ['tags', '/tags/:tagId/groups/count', args] as const
}

export function getTagsTagIdGroupsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdGroupsCountQueryKey>
  >({
    queryKey: getTagsTagIdGroupsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tagId'].groups.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTagsTagIdGroupsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdGroupsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsTagIdGroupsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsTagIdGroupsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsTagIdGroupsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsTagIdGroupsCountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTagsTagIdGroupsPatchMutationKey() {
  return ['tags', '/tags/:tagId/groups/patch', 'PUT'] as const
}

export function getPutTagsTagIdGroupsPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['patch']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tagId']['groups']['patch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTagsTagIdGroupsPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':tagId']['groups']['patch']['$put']>,
    ) {
      return parseResponse(client.tags[':tagId'].groups.patch.$put(args, options))
    },
  })
}

export function usePutTagsTagIdGroupsPatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['patch']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':tagId']['groups']['patch']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTagsTagIdGroupsPatchMutationOptions<TError, TOnMutateResult>(
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

export function getPutTagsTagIdNameMutationKey() {
  return ['tags', '/tags/:tagId/name', 'PUT'] as const
}

export function getPutTagsTagIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tagId']['name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTagsTagIdNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tagId']['name']['$put']>) {
      return parseResponse(client.tags[':tagId'].name.$put(args, options))
    },
  })
}

export function usePutTagsTagIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':tagId']['name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':tagId']['name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTagsTagIdNameMutationOptions<TError, TOnMutateResult>(
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
