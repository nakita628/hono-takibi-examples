import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getAgeusdInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgeusdInfoQueryKey>
  >({
    queryKey: getAgeusdInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ageusd.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAgeusdInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgeusdInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAgeusdInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCancelbabelBoxIdQueryKey(
  args: InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>,
) {
  return ['cancelbabel', '/cancelbabel/:boxId', args] as const
}

export function getCancelbabelBoxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCancelbabelBoxIdQueryKey>
  >({
    queryKey: getCancelbabelBoxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cancelbabel[':boxId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCancelbabelBoxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCancelbabelBoxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCancelbabelBoxIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCreatebabelAddressQueryKey(
  args: InferRequestType<(typeof client.createbabel)[':address']['$get']>,
) {
  return ['createbabel', '/createbabel/:address', args] as const
}

export function getCreatebabelAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.createbabel)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCreatebabelAddressQueryKey>
  >({
    queryKey: getCreatebabelAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.createbabel[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCreatebabelAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.createbabel)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCreatebabelAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreatebabelAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMosaikBabelfeeIndexQueryKey() {
  return ['mosaik', '/mosaik/babelfee/'] as const
}

export function getMosaikBabelfeeIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikBabelfeeIndexQueryKey>
  >({
    queryKey: getMosaikBabelfeeIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mosaik.babelfee.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMosaikBabelfeeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMosaikBabelfeeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMosaikBabelfeeIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getMosaikBabelfeeNewofferQueryKey() {
  return ['mosaik', '/mosaik/babelfee/newoffer'] as const
}

export function getMosaikBabelfeeNewofferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikBabelfeeNewofferQueryKey>
  >({
    queryKey: getMosaikBabelfeeNewofferQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mosaik.babelfee.newoffer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMosaikBabelfeeNewoffer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMosaikBabelfeeNewofferQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMosaikBabelfeeNewofferQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMosaikBabelfeeNewofferDoit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMosaikBabelfeeNewofferDoitMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMosaikBabelfeeNewofferNewInput<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMosaikBabelfeeNewofferNewInputMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMosaikBabelfeeNotificationcheckQueryKey() {
  return ['mosaik', '/mosaik/babelfee/notificationcheck'] as const
}

export function getMosaikBabelfeeNotificationcheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getMosaikBabelfeeNotificationcheckQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mosaik.babelfee.notificationcheck.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMosaikBabelfeeNotificationcheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMosaikBabelfeeNotificationcheckQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMosaikBoxconsolidationIndexQueryKey() {
  return ['mosaik', '/mosaik/boxconsolidation/'] as const
}

export function getMosaikBoxconsolidationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikBoxconsolidationIndexQueryKey>
  >({
    queryKey: getMosaikBoxconsolidationIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mosaik.boxconsolidation.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMosaikBoxconsolidationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMosaikBoxconsolidationIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMosaikBoxconsolidationIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getMosaikBoxconsolidationConsolidateP2pkaddressQueryKey(
  args: InferRequestType<
    (typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']
  >,
) {
  return ['mosaik', '/mosaik/boxconsolidation/consolidate/:p2pkaddress', args] as const
}

export function getMosaikBoxconsolidationConsolidateP2pkaddressQueryOptions<
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
  args: InferRequestType<
    (typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMosaikBoxconsolidationConsolidateP2pkaddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mosaik.boxconsolidation.consolidate[':p2pkaddress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMosaikBoxconsolidationConsolidateP2pkaddress<
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
  args: () => InferRequestType<
    (typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getMosaikBoxconsolidationConsolidateP2pkaddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMosaikBoxconsolidationConsolidateP2pkaddressQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getMosaikTokenburnQueryKey() {
  return ['mosaik', '/mosaik/tokenburn'] as const
}

export function getMosaikTokenburnQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMosaikTokenburnQueryKey>
  >({
    queryKey: getMosaikTokenburnQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mosaik.tokenburn.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMosaikTokenburn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMosaikTokenburnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMosaikTokenburnQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getMosaikTokenburnGetUuidQueryKey(
  args: InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>,
) {
  return ['mosaik', '/mosaik/tokenburn/get/:uuid', args] as const
}

export function getMosaikTokenburnGetUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMosaikTokenburnGetUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mosaik.tokenburn.get[':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMosaikTokenburnGetUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMosaikTokenburnGetUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMosaikTokenburnPrepare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.prepare.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mosaik.tokenburn.prepare.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMosaikTokenburnPrepareMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostPaymentAddrequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payment.addrequest.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.payment.addrequest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPaymentAddrequestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPaymentStateRequestIdQueryKey(
  args: InferRequestType<(typeof client.payment.state)[':requestId']['$get']>,
) {
  return ['payment', '/payment/state/:requestId', args] as const
}

export function getPaymentStateRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment.state)[':requestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentStateRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment.state[':requestId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentStateRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payment.state)[':requestId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPaymentStateRequestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPeersListQueryKey(args: InferRequestType<typeof client.peers.list.$get>) {
  return ['peers', '/peers/list', args] as const
}

export function getPeersListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.peers.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeersListQueryKey>
  >({
    queryKey: getPeersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.peers.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPeersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.peers.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPeersListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeersListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSigrsvExchangeIndexQueryKey(
  args: InferRequestType<typeof client.sigrsv.exchange.index.$get>,
) {
  return ['sigrsv', '/sigrsv/exchange/', args] as const
}

export function getSigrsvExchangeIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sigrsv.exchange.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigrsvExchangeIndexQueryKey>
  >({
    queryKey: getSigrsvExchangeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sigrsv.exchange.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSigrsvExchangeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sigrsv.exchange.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSigrsvExchangeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSigrsvExchangeIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSigrsvExchangeAmountInfoQueryKey(
  args: InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>,
) {
  return ['sigrsv', '/sigrsv/exchange/:amount/info', args] as const
}

export function getSigrsvExchangeAmountInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSigrsvExchangeAmountInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sigrsv.exchange[':amount'].info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSigrsvExchangeAmountInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSigrsvExchangeAmountInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSigrsvPriceQueryKey() {
  return ['sigrsv', '/sigrsv/price'] as const
}

export function getSigrsvPriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSigrsvPriceQueryKey>
  >({
    queryKey: getSigrsvPriceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sigrsv.price.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSigrsvPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSigrsvPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSigrsvPriceQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSigusdExchangeIndexQueryKey(
  args: InferRequestType<typeof client.sigusd.exchange.index.$get>,
) {
  return ['sigusd', '/sigusd/exchange/', args] as const
}

export function getSigusdExchangeIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sigusd.exchange.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigusdExchangeIndexQueryKey>
  >({
    queryKey: getSigusdExchangeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sigusd.exchange.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSigusdExchangeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sigusd.exchange.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSigusdExchangeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSigusdExchangeIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSigusdExchangeAmountInfoQueryKey(
  args: InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>,
) {
  return ['sigusd', '/sigusd/exchange/:amount/info', args] as const
}

export function getSigusdExchangeAmountInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSigusdExchangeAmountInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sigusd.exchange[':amount'].info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSigusdExchangeAmountInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSigusdExchangeAmountInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSigusdPriceQueryKey() {
  return ['sigusd', '/sigusd/price'] as const
}

export function getSigusdPriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSigusdPriceQueryKey>
  >({
    queryKey: getSigusdPriceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sigusd.price.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSigusdPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSigusdPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSigusdPriceQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTokensCheckTokenIdTokenNameQueryKey(
  args: InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>,
) {
  return ['tokens', '/tokens/check/:tokenId/:tokenName', args] as const
}

export function getTokensCheckTokenIdTokenNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTokensCheckTokenIdTokenNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens.check[':tokenId'][':tokenName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensCheckTokenIdTokenName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTokensCheckTokenIdTokenNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTokensListBlockedQueryKey() {
  return ['tokens', '/tokens/listBlocked'] as const
}

export function getTokensListBlockedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTokensListBlockedQueryKey>
  >({
    queryKey: getTokensListBlockedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens.listBlocked.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensListBlocked<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensListBlockedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokensListBlockedQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTokensListGenuineQueryKey() {
  return ['tokens', '/tokens/listGenuine'] as const
}

export function getTokensListGenuineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTokensListGenuineQueryKey>
  >({
    queryKey: getTokensListGenuineQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens.listGenuine.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensListGenuine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensListGenuineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokensListGenuineQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTokensPricesAllQueryKey() {
  return ['tokens', '/tokens/prices/all'] as const
}

export function getTokensPricesAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTokensPricesAllQueryKey>
  >({
    queryKey: getTokensPricesAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens.prices.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensPricesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensPricesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokensPricesAllQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTokensPricesTokenIdQueryKey(
  args: InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>,
) {
  return ['tokens', '/tokens/prices/:tokenId', args] as const
}

export function getTokensPricesTokenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensPricesTokenIdQueryKey>
  >({
    queryKey: getTokensPricesTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens.prices[':tokenId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTokensPricesTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensPricesTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokensPricesTokenIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
