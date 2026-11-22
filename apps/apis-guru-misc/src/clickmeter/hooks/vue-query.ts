import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.account.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.domainwhitelist.$get>>,
) {
  return ['account', '/account/domainwhitelist', toValue(args)] as const
}

export function getAccountDomainwhitelistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.domainwhitelist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountDomainwhitelistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.domainwhitelist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountDomainwhitelist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.domainwhitelist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
            >
          >,
          ReturnType<typeof getAccountDomainwhitelistQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.domainwhitelist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountDomainwhitelistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountDomainwhitelistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.domainwhitelist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.guests.$get>>,
) {
  return ['account', '/account/guests', toValue(args)] as const
}

export function getAccountGuestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.guests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountGuestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.guests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountGuests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.guests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
          >,
          ReturnType<typeof getAccountGuestsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGuestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountGuestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.guests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.guests.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.guests.count.$get>>,
) {
  return ['account', '/account/guests/count', toValue(args)] as const
}

export function getAccountGuestsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.guests.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountGuestsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.guests.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountGuestsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.guests.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>
            >
          >,
          ReturnType<typeof getAccountGuestsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.guests.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGuestsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountGuestsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.guests.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountGuestsGuestIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.guests)[':guestId']['$get']>>,
) {
  return ['account', '/account/guests/:guestId', toValue(args)] as const
}

export function getAccountGuestsGuestIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.guests)[':guestId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountGuestsGuestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.guests[':guestId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountGuestsGuestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.guests)[':guestId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.guests)[':guestId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountGuestsGuestIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountGuestsGuestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.guests[':guestId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>
  >,
) {
  return ['account', '/account/guests/:guestId/permissions', toValue(args)] as const
}

export function getAccountGuestsGuestIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountGuestsGuestIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.guests[':guestId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.guests)[':guestId']['permissions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountGuestsGuestIdPermissionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountGuestsGuestIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.guests[':guestId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountGuestsGuestIdPermissionsCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
  >,
) {
  return ['account', '/account/guests/:guestId/permissions/count', toValue(args)] as const
}

export function getAccountGuestsGuestIdPermissionsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountGuestsGuestIdPermissionsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.guests[':guestId'].permissions.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.guests)[':guestId']['permissions']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAccountGuestsGuestIdPermissionsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountGuestsGuestIdPermissionsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.guests[':guestId'].permissions.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.ipblacklist.$get>>,
) {
  return ['account', '/account/ipblacklist', toValue(args)] as const
}

export function getAccountIpblacklistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.ipblacklist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIpblacklistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.ipblacklist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountIpblacklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.ipblacklist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>
            >
          >,
          ReturnType<typeof getAccountIpblacklistQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.ipblacklist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIpblacklistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIpblacklistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.ipblacklist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAccountPlanQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountPlanQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.plan.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountPlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>
          >,
          ReturnType<typeof getAccountPlanQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.plan.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountPlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountPlanQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.plan.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAggregatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.$get>>,
) {
  return ['aggregated', '/aggregated', toValue(args)] as const
}

export function getAggregatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAggregatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aggregated.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAggregated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>
          >,
          ReturnType<typeof getAggregatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAggregatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAggregatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aggregated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAggregatedListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.list.$get>>,
) {
  return ['aggregated', '/aggregated/list', toValue(args)] as const
}

export function getAggregatedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAggregatedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aggregated.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAggregatedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>
            >
          >,
          ReturnType<typeof getAggregatedListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAggregatedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAggregatedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aggregated.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAggregatedSummaryConversionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.summary.conversions.$get>>,
) {
  return ['aggregated', '/aggregated/summary/conversions', toValue(args)] as const
}

export function getAggregatedSummaryConversionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.summary.conversions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAggregatedSummaryConversionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aggregated.summary.conversions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAggregatedSummaryConversions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.summary.conversions.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>
              >
            >
          >,
          ReturnType<typeof getAggregatedSummaryConversionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.conversions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAggregatedSummaryConversionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAggregatedSummaryConversionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aggregated.summary.conversions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAggregatedSummaryDatapointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.summary.datapoints.$get>>,
) {
  return ['aggregated', '/aggregated/summary/datapoints', toValue(args)] as const
}

export function getAggregatedSummaryDatapointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.summary.datapoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAggregatedSummaryDatapointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aggregated.summary.datapoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAggregatedSummaryDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.summary.datapoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>
              >
            >
          >,
          ReturnType<typeof getAggregatedSummaryDatapointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.datapoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAggregatedSummaryDatapointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAggregatedSummaryDatapointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aggregated.summary.datapoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAggregatedSummaryGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.summary.groups.$get>>,
) {
  return ['aggregated', '/aggregated/summary/groups', toValue(args)] as const
}

export function getAggregatedSummaryGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.summary.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAggregatedSummaryGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aggregated.summary.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAggregatedSummaryGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aggregated.summary.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>
              >
            >
          >,
          ReturnType<typeof getAggregatedSummaryGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.aggregated.summary.groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAggregatedSummaryGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAggregatedSummaryGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aggregated.summary.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClickstreamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clickstream.$get>>,
) {
  return ['clickstream', '/clickstream', toValue(args)] as const
}

export function getClickstreamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clickstream.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClickstreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clickstream.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClickstream<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clickstream.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>
          >,
          ReturnType<typeof getClickstreamQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clickstream.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClickstreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClickstreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clickstream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversions.$get>>,
) {
  return ['conversions', '/conversions', toValue(args)] as const
}

export function getConversionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConversions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>
          >,
          ReturnType<typeof getConversionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConversionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.conversions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversions.aggregated.list.$get>>,
) {
  return ['conversions', '/conversions/aggregated/list', toValue(args)] as const
}

export function getConversionsAggregatedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversions.aggregated.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversionsAggregatedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversions.aggregated.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversionsAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversions.aggregated.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>
              >
            >
          >,
          ReturnType<typeof getConversionsAggregatedListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversions.aggregated.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsAggregatedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversionsAggregatedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversions.aggregated.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversionsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversions.count.$get>>,
) {
  return ['conversions', '/conversions/count', toValue(args)] as const
}

export function getConversionsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversions.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversionsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversions.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversionsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conversions.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>
            >
          >,
          ReturnType<typeof getConversionsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conversions.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConversionsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversionsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversions.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversionsConversionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversions)[':conversionId']['$get']>>,
) {
  return ['conversions', '/conversions/:conversionId', toValue(args)] as const
}

export function getConversionsConversionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversions)[':conversionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversionsConversionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversions[':conversionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversions)[':conversionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversions)[':conversionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversionsConversionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversionsConversionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversions[':conversionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>
  >,
) {
  return ['conversions', '/conversions/:conversionId/aggregated', toValue(args)] as const
}

export function getConversionsConversionIdAggregatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversionsConversionIdAggregatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversions[':conversionId'].aggregated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.conversions)[':conversionId']['aggregated']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConversionsConversionIdAggregatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversionsConversionIdAggregatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversions[':conversionId'].aggregated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversionsConversionIdAggregatedListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
  >,
) {
  return ['conversions', '/conversions/:conversionId/aggregated/list', toValue(args)] as const
}

export function getConversionsConversionIdAggregatedListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversionsConversionIdAggregatedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversions[':conversionId'].aggregated.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['aggregated']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getConversionsConversionIdAggregatedListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversionsConversionIdAggregatedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversions[':conversionId'].aggregated.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConversionsConversionIdDatapointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>
  >,
) {
  return ['conversions', '/conversions/:conversionId/datapoints', toValue(args)] as const
}

export function getConversionsConversionIdDatapointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversionsConversionIdDatapointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversions[':conversionId'].datapoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.conversions)[':conversionId']['datapoints']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConversionsConversionIdDatapointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversionsConversionIdDatapointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversions[':conversionId'].datapoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['count']['$get']>
  >,
) {
  return ['conversions', '/conversions/:conversionId/datapoints/count', toValue(args)] as const
}

export function getConversionsConversionIdDatapointsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversionsConversionIdDatapointsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversions[':conversionId'].datapoints.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['datapoints']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getConversionsConversionIdDatapointsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversionsConversionIdDatapointsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversions[':conversionId'].datapoints.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>
  >,
) {
  return ['conversions', '/conversions/:conversionId/hits', toValue(args)] as const
}

export function getConversionsConversionIdHitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversionsConversionIdHitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversions[':conversionId'].hits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversions)[':conversionId']['hits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversions)[':conversionId']['hits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversionsConversionIdHitsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversionsConversionIdHitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversions[':conversionId'].hits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDatapointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.$get>>,
) {
  return ['datapoints', '/datapoints', toValue(args)] as const
}

export function getDatapointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatapointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datapoints.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatapoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>
          >,
          ReturnType<typeof getDatapointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatapointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatapointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datapoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.datapoints.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.aggregated.$get>>,
) {
  return ['datapoints', '/datapoints/aggregated', toValue(args)] as const
}

export function getDatapointsAggregatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.aggregated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatapointsAggregatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datapoints.aggregated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatapointsAggregated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.aggregated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
            >
          >,
          ReturnType<typeof getDatapointsAggregatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsAggregatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatapointsAggregatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datapoints.aggregated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatapointsAggregatedListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.aggregated.list.$get>>,
) {
  return ['datapoints', '/datapoints/aggregated/list', toValue(args)] as const
}

export function getDatapointsAggregatedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.aggregated.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatapointsAggregatedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datapoints.aggregated.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatapointsAggregatedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.aggregated.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>
              >
            >
          >,
          ReturnType<typeof getDatapointsAggregatedListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.aggregated.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsAggregatedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatapointsAggregatedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datapoints.aggregated.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.batch.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.datapoints.batch.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.count.$get>>,
) {
  return ['datapoints', '/datapoints/count', toValue(args)] as const
}

export function getDatapointsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatapointsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datapoints.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatapointsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datapoints.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>
            >
          >,
          ReturnType<typeof getDatapointsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datapoints.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatapointsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datapoints.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatapointsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datapoints)[':id']['$get']>>,
) {
  return ['datapoints', '/datapoints/:id', toValue(args)] as const
}

export function getDatapointsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datapoints)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatapointsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datapoints[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatapointsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datapoints)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDatapointsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatapointsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datapoints[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datapoints)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datapoints)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>>,
) {
  return ['datapoints', '/datapoints/:id/aggregated', toValue(args)] as const
}

export function getDatapointsIdAggregatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatapointsIdAggregatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datapoints[':id'].aggregated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datapoints)[':id']['aggregated']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatapointsIdAggregatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatapointsIdAggregatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datapoints[':id'].aggregated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatapointsIdAggregatedListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>
  >,
) {
  return ['datapoints', '/datapoints/:id/aggregated/list', toValue(args)] as const
}

export function getDatapointsIdAggregatedListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatapointsIdAggregatedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datapoints[':id'].aggregated.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datapoints)[':id']['aggregated']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatapointsIdAggregatedListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatapointsIdAggregatedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datapoints[':id'].aggregated.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>>,
) {
  return ['datapoints', '/datapoints/:id/hits', toValue(args)] as const
}

export function getDatapointsIdHitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatapointsIdHitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datapoints[':id'].hits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatapointsIdHits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datapoints)[':id']['hits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatapointsIdHitsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datapoints)[':id']['hits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatapointsIdHitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatapointsIdHitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datapoints[':id'].hits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
) {
  return ['domains', '/domains', toValue(args)] as const
}

export function getDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
          >,
          ReturnType<typeof getDomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.domains.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getDomainsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.count.$get>>,
) {
  return ['domains', '/domains/count', toValue(args)] as const
}

export function getDomainsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.domains.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
          >,
          ReturnType<typeof getDomainsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':id']['$get']>>,
) {
  return ['domains', '/domains/:id', toValue(args)] as const
}

export function getDomainsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDomainsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
) {
  return ['groups', '/groups', toValue(args)] as const
}

export function getGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.aggregated.$get>>,
) {
  return ['groups', '/groups/aggregated', toValue(args)] as const
}

export function getGroupsAggregatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.aggregated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsAggregatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.aggregated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsAggregated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.aggregated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>
            >
          >,
          ReturnType<typeof getGroupsAggregatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsAggregatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsAggregatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.aggregated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsAggregatedListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.aggregated.list.$get>>,
) {
  return ['groups', '/groups/aggregated/list', toValue(args)] as const
}

export function getGroupsAggregatedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.aggregated.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsAggregatedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.aggregated.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsAggregatedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.aggregated.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
            >
          >,
          ReturnType<typeof getGroupsAggregatedListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.groups.aggregated.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsAggregatedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsAggregatedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.aggregated.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.count.$get>>,
) {
  return ['groups', '/groups/count', toValue(args)] as const
}

export function getGroupsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.count.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroupsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>
          >,
          ReturnType<typeof getGroupsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['$get']>>,
) {
  return ['groups', '/groups/:id', toValue(args)] as const
}

export function getGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>>,
) {
  return ['groups', '/groups/:id/aggregated', toValue(args)] as const
}

export function getGroupsIdAggregatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdAggregatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id'].aggregated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsIdAggregated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['aggregated']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIdAggregatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdAggregatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id'].aggregated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsIdAggregatedListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>
  >,
) {
  return ['groups', '/groups/:id/aggregated/list', toValue(args)] as const
}

export function getGroupsIdAggregatedListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdAggregatedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id'].aggregated.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':id']['aggregated']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIdAggregatedListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdAggregatedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id'].aggregated.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsIdAggregatedSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>
  >,
) {
  return ['groups', '/groups/:id/aggregated/summary', toValue(args)] as const
}

export function getGroupsIdAggregatedSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdAggregatedSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id'].aggregated.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':id']['aggregated']['summary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIdAggregatedSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdAggregatedSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id'].aggregated.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsIdDatapointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>>,
) {
  return ['groups', '/groups/:id/datapoints', toValue(args)] as const
}

export function getGroupsIdDatapointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdDatapointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id'].datapoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsIdDatapoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['datapoints']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIdDatapointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdDatapointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id'].datapoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>
  >,
) {
  return ['groups', '/groups/:id/datapoints/count', toValue(args)] as const
}

export function getGroupsIdDatapointsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdDatapointsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id'].datapoints.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':id']['datapoints']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':id']['datapoints']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIdDatapointsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdDatapointsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id'].datapoints.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['hits']['$get']>>,
) {
  return ['groups', '/groups/:id/hits', toValue(args)] as const
}

export function getGroupsIdHitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['hits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdHitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id'].hits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsIdHits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['hits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIdHitsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['hits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdHitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdHitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id'].hits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getHitsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.hits.$get>>) {
  return ['hits', '/hits', toValue(args)] as const
}

export function getHitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHits<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
          ReturnType<typeof getHitsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMePlanQueryKey() {
  return ['me', '/me/plan'] as const
}

export function getMePlanQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMePlanQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.plan.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMePlan<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>
          >,
          ReturnType<typeof getMePlanQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.plan.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePlanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMePlanQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.plan.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRetargetingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.retargeting.$get>>,
) {
  return ['retargeting', '/retargeting', toValue(args)] as const
}

export function getRetargetingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.retargeting.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetargetingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retargeting.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRetargeting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.retargeting.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>
          >,
          ReturnType<typeof getRetargetingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRetargetingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetargetingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retargeting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.retargeting.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getRetargetingCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRetargetingCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retargeting.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRetargetingCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>
            >
          >,
          ReturnType<typeof getRetargetingCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retargeting.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRetargetingCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRetargetingCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.retargeting.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRetargetingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.retargeting)[':id']['$get']>>,
) {
  return ['retargeting', '/retargeting/:id', toValue(args)] as const
}

export function getRetargetingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.retargeting)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetargetingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retargeting[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRetargetingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.retargeting)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRetargetingIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.retargeting)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetargetingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetargetingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retargeting[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.retargeting)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.retargeting)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>
  >,
) {
  return ['retargeting', '/retargeting/:id/datapoints', toValue(args)] as const
}

export function getRetargetingIdDatapointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetargetingIdDatapointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retargeting[':id'].datapoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.retargeting)[':id']['datapoints']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.retargeting)[':id']['datapoints']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRetargetingIdDatapointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetargetingIdDatapointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retargeting[':id'].datapoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRetargetingIdDatapointsCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>
  >,
) {
  return ['retargeting', '/retargeting/:id/datapoints/count', toValue(args)] as const
}

export function getRetargetingIdDatapointsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetargetingIdDatapointsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retargeting[':id'].datapoints.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.retargeting)[':id']['datapoints']['count']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRetargetingIdDatapointsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetargetingIdDatapointsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retargeting[':id'].datapoints.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>) {
  return ['tags', '/tags', toValue(args)] as const
}

export function getTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getTagsCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.count.$get>>,
) {
  return ['tags', '/tags/count', toValue(args)] as const
}

export function getTagsCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.count.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTagsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>
          >,
          ReturnType<typeof getTagsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsTagIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['$get']>>,
) {
  return ['tags', '/tags/:tagId', toValue(args)] as const
}

export function getTagsTagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tagId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsTagIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tagId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>>,
) {
  return ['tags', '/tags/:tagId/datapoints', toValue(args)] as const
}

export function getTagsTagIdDatapointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagIdDatapointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tagId'].datapoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['datapoints']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagIdDatapointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagIdDatapointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tagId'].datapoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>
  >,
) {
  return ['tags', '/tags/:tagId/datapoints/count', toValue(args)] as const
}

export function getTagsTagIdDatapointsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagIdDatapointsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tagId'].datapoints.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tagId']['datapoints']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagIdDatapointsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagIdDatapointsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tagId'].datapoints.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>>,
) {
  return ['tags', '/tags/:tagId/groups', toValue(args)] as const
}

export function getTagsTagIdGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tagId'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagIdGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tagId'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>
  >,
) {
  return ['tags', '/tags/:tagId/groups/count', toValue(args)] as const
}

export function getTagsTagIdGroupsCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagIdGroupsCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tagId'].groups.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tags)[':tagId']['groups']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tagId']['groups']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagIdGroupsCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagIdGroupsCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tagId'].groups.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
