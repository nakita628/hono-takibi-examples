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

export function getAgeusdKey() {
  return ['ageusd'] as const
}

export function getCancelbabelKey() {
  return ['cancelbabel'] as const
}

export function getCreatebabelKey() {
  return ['createbabel'] as const
}

export function getMosaikKey() {
  return ['mosaik'] as const
}

export function getPaymentKey() {
  return ['payment'] as const
}

export function getPeersKey() {
  return ['peers'] as const
}

export function getSigrsvKey() {
  return ['sigrsv'] as const
}

export function getSigusdKey() {
  return ['sigusd'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getAgeusdInfoQueryKey() {
  return ['ageusd', '/ageusd/info'] as const
}

export function getAgeusdInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAgeusdInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ageusd.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAgeusdInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>
          >,
          ReturnType<typeof getAgeusdInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgeusdInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAgeusdInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ageusd.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCancelbabelBoxIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>>,
) {
  return ['cancelbabel', '/cancelbabel/:boxId', toValue(args)] as const
}

export function getCancelbabelBoxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCancelbabelBoxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cancelbabel[':boxId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCancelbabelBoxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCancelbabelBoxIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCancelbabelBoxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCancelbabelBoxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cancelbabel[':boxId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCreatebabelAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.createbabel)[':address']['$get']>>,
) {
  return ['createbabel', '/createbabel/:address', toValue(args)] as const
}

export function getCreatebabelAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.createbabel)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCreatebabelAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.createbabel[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCreatebabelAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.createbabel)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCreatebabelAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreatebabelAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCreatebabelAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.createbabel[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMosaikBabelfeeIndexQueryKey() {
  return ['mosaik', '/mosaik/babelfee/'] as const
}

export function getMosaikBabelfeeIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMosaikBabelfeeIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mosaik.babelfee.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMosaikBabelfeeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>
            >
          >,
          ReturnType<typeof getMosaikBabelfeeIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikBabelfeeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMosaikBabelfeeIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mosaik.babelfee.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMosaikBabelfeeNewofferQueryKey() {
  return ['mosaik', '/mosaik/babelfee/newoffer'] as const
}

export function getMosaikBabelfeeNewofferQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMosaikBabelfeeNewofferQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mosaik.babelfee.newoffer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMosaikBabelfeeNewoffer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
            >
          >,
          ReturnType<typeof getMosaikBabelfeeNewofferQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikBabelfeeNewofferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMosaikBabelfeeNewofferQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mosaik.babelfee.newoffer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMosaikBabelfeeNewofferDoitMutationKey() {
  return ['mosaik', '/mosaik/babelfee/newoffer/doit', 'POST'] as const
}

export function getPostMosaikBabelfeeNewofferDoitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.doit.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.mosaik.babelfee.newoffer.doit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMosaikBabelfeeNewofferDoitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mosaik.babelfee.newoffer.doit.$post>) {
      return parseResponse(client.mosaik.babelfee.newoffer.doit.$post(args, options))
    },
  })
}

export function usePostMosaikBabelfeeNewofferDoit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.doit.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.mosaik.babelfee.newoffer.doit.$post>,
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
  const mutationDefaults = getPostMosaikBabelfeeNewofferDoitMutationOptions<
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

export function getPostMosaikBabelfeeNewofferNewInputMutationKey() {
  return ['mosaik', '/mosaik/babelfee/newoffer/new-input', 'POST'] as const
}

export function getPostMosaikBabelfeeNewofferNewInputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mosaik.babelfee.newoffer)['new-input']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mosaik.babelfee.newoffer)['new-input']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMosaikBabelfeeNewofferNewInputMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mosaik.babelfee.newoffer)['new-input']['$post']>,
    ) {
      return parseResponse(client.mosaik.babelfee.newoffer['new-input'].$post(args, options))
    },
  })
}

export function usePostMosaikBabelfeeNewofferNewInput<
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
                Awaited<ReturnType<(typeof client.mosaik.babelfee.newoffer)['new-input']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mosaik.babelfee.newoffer)['new-input']['$post']>,
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
  const mutationDefaults = getPostMosaikBabelfeeNewofferNewInputMutationOptions<
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

export function getMosaikBabelfeeNotificationcheckQueryKey() {
  return ['mosaik', '/mosaik/babelfee/notificationcheck'] as const
}

export function getMosaikBabelfeeNotificationcheckQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMosaikBabelfeeNotificationcheckQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mosaik.babelfee.notificationcheck.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMosaikBabelfeeNotificationcheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
              >
            >
          >,
          ReturnType<typeof getMosaikBabelfeeNotificationcheckQueryKey>
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
          Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikBabelfeeNotificationcheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMosaikBabelfeeNotificationcheckQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mosaik.babelfee.notificationcheck.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMosaikBoxconsolidationIndexQueryKey() {
  return ['mosaik', '/mosaik/boxconsolidation/'] as const
}

export function getMosaikBoxconsolidationIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMosaikBoxconsolidationIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mosaik.boxconsolidation.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMosaikBoxconsolidationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>
              >
            >
          >,
          ReturnType<typeof getMosaikBoxconsolidationIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikBoxconsolidationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMosaikBoxconsolidationIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mosaik.boxconsolidation.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMosaikBoxconsolidationConsolidateP2pkaddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']>
  >,
) {
  return ['mosaik', '/mosaik/boxconsolidation/consolidate/:p2pkaddress', toValue(args)] as const
}

export function getMosaikBoxconsolidationConsolidateP2pkaddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMosaikBoxconsolidationConsolidateP2pkaddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mosaik.boxconsolidation.consolidate[':p2pkaddress'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMosaikBoxconsolidationConsolidateP2pkaddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']>
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
                    (typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']
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
                    (typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMosaikBoxconsolidationConsolidateP2pkaddressQueryKey>
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
            ReturnType<(typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikBoxconsolidationConsolidateP2pkaddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMosaikBoxconsolidationConsolidateP2pkaddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mosaik.boxconsolidation.consolidate[':p2pkaddress'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMosaikTokenburnQueryKey() {
  return ['mosaik', '/mosaik/tokenburn'] as const
}

export function getMosaikTokenburnQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMosaikTokenburnQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mosaik.tokenburn.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMosaikTokenburn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>
            >
          >,
          ReturnType<typeof getMosaikTokenburnQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikTokenburnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMosaikTokenburnQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mosaik.tokenburn.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMosaikTokenburnGetUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>,
) {
  return ['mosaik', '/mosaik/tokenburn/get/:uuid', toValue(args)] as const
}

export function getMosaikTokenburnGetUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMosaikTokenburnGetUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mosaik.tokenburn.get[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMosaikTokenburnGetUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMosaikTokenburnGetUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikTokenburnGetUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMosaikTokenburnGetUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mosaik.tokenburn.get[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMosaikTokenburnPrepareMutationKey() {
  return ['mosaik', '/mosaik/tokenburn/prepare', 'POST'] as const
}

export function getPostMosaikTokenburnPrepareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.prepare.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.mosaik.tokenburn.prepare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMosaikTokenburnPrepareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mosaik.tokenburn.prepare.$post>) {
      return parseResponse(client.mosaik.tokenburn.prepare.$post(args, options))
    },
  })
}

export function usePostMosaikTokenburnPrepare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mosaik.tokenburn.prepare.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.mosaik.tokenburn.prepare.$post>,
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
  const mutationDefaults = getPostMosaikTokenburnPrepareMutationOptions<TError, TOnMutateResult>(
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

export function getPostPaymentAddrequestMutationKey() {
  return ['payment', '/payment/addrequest', 'POST'] as const
}

export function getPostPaymentAddrequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.addrequest.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payment.addrequest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentAddrequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment.addrequest.$post>) {
      return parseResponse(client.payment.addrequest.$post(args, options))
    },
  })
}

export function usePostPaymentAddrequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment.addrequest.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payment.addrequest.$post>,
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
  const mutationDefaults = getPostPaymentAddrequestMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentStateRequestIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment.state)[':requestId']['$get']>>,
) {
  return ['payment', '/payment/state/:requestId', toValue(args)] as const
}

export function getPaymentStateRequestIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment.state)[':requestId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentStateRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment.state[':requestId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentStateRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payment.state)[':requestId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentStateRequestIdQueryKey>
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
          Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentStateRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentStateRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment.state[':requestId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.peers.list.$get>>,
) {
  return ['peers', '/peers/list', toValue(args)] as const
}

export function getPeersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.peers.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.peers.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.peers.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>
          >,
          ReturnType<typeof getPeersListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.peers.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSigrsvExchangeIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sigrsv.exchange.index.$get>>,
) {
  return ['sigrsv', '/sigrsv/exchange/', toValue(args)] as const
}

export function getSigrsvExchangeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sigrsv.exchange.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigrsvExchangeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sigrsv.exchange.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigrsvExchangeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sigrsv.exchange.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>
            >
          >,
          ReturnType<typeof getSigrsvExchangeIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigrsvExchangeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigrsvExchangeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sigrsv.exchange.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSigrsvExchangeAmountInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>
  >,
) {
  return ['sigrsv', '/sigrsv/exchange/:amount/info', toValue(args)] as const
}

export function getSigrsvExchangeAmountInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigrsvExchangeAmountInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sigrsv.exchange[':amount'].info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigrsvExchangeAmountInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSigrsvExchangeAmountInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigrsvExchangeAmountInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigrsvExchangeAmountInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sigrsv.exchange[':amount'].info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSigrsvPriceQueryKey() {
  return ['sigrsv', '/sigrsv/price'] as const
}

export function getSigrsvPriceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSigrsvPriceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sigrsv.price.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSigrsvPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>
          >,
          ReturnType<typeof getSigrsvPriceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSigrsvPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSigrsvPriceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sigrsv.price.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSigusdExchangeIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sigusd.exchange.index.$get>>,
) {
  return ['sigusd', '/sigusd/exchange/', toValue(args)] as const
}

export function getSigusdExchangeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sigusd.exchange.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigusdExchangeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sigusd.exchange.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigusdExchangeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sigusd.exchange.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>
            >
          >,
          ReturnType<typeof getSigusdExchangeIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigusdExchangeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigusdExchangeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sigusd.exchange.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSigusdExchangeAmountInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>
  >,
) {
  return ['sigusd', '/sigusd/exchange/:amount/info', toValue(args)] as const
}

export function getSigusdExchangeAmountInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSigusdExchangeAmountInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sigusd.exchange[':amount'].info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigusdExchangeAmountInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSigusdExchangeAmountInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigusdExchangeAmountInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSigusdExchangeAmountInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sigusd.exchange[':amount'].info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSigusdPriceQueryKey() {
  return ['sigusd', '/sigusd/price'] as const
}

export function getSigusdPriceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSigusdPriceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sigusd.price.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSigusdPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>
          >,
          ReturnType<typeof getSigusdPriceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSigusdPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSigusdPriceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sigusd.price.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensCheckTokenIdTokenNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>
  >,
) {
  return ['tokens', '/tokens/check/:tokenId/:tokenName', toValue(args)] as const
}

export function getTokensCheckTokenIdTokenNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensCheckTokenIdTokenNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens.check[':tokenId'][':tokenName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensCheckTokenIdTokenName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTokensCheckTokenIdTokenNameQueryKey>
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
          Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensCheckTokenIdTokenNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensCheckTokenIdTokenNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens.check[':tokenId'][':tokenName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensListBlockedQueryKey() {
  return ['tokens', '/tokens/listBlocked'] as const
}

export function getTokensListBlockedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTokensListBlockedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens.listBlocked.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensListBlocked<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>
            >
          >,
          ReturnType<typeof getTokensListBlockedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTokensListBlockedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTokensListBlockedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens.listBlocked.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensListGenuineQueryKey() {
  return ['tokens', '/tokens/listGenuine'] as const
}

export function getTokensListGenuineQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTokensListGenuineQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens.listGenuine.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensListGenuine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>
            >
          >,
          ReturnType<typeof getTokensListGenuineQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTokensListGenuineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTokensListGenuineQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens.listGenuine.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensPricesAllQueryKey() {
  return ['tokens', '/tokens/prices/all'] as const
}

export function getTokensPricesAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTokensPricesAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens.prices.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensPricesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>
            >
          >,
          ReturnType<typeof getTokensPricesAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTokensPricesAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTokensPricesAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens.prices.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTokensPricesTokenIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>>,
) {
  return ['tokens', '/tokens/prices/:tokenId', toValue(args)] as const
}

export function getTokensPricesTokenIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensPricesTokenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens.prices[':tokenId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensPricesTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTokensPricesTokenIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensPricesTokenIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensPricesTokenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens.prices[':tokenId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
